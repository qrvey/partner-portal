---
id: upgrading-with-custom-domain
title: Upgrading to Version 8.4 or Later with a Custom Domain
sidebar_label: Upgrading with Custom Domain
tags: [CloudOps Engineer]
sidebar_position: 2
displayed_sidebar: deployment-guide
---

<div>

This article applies to all customers upgrading to version 8.4 or later of the Qrvey platform **and** are using a custom domain URL for Qrvey Composer.

With 8.4 there have been many changes to the Infrastructure that require a few steps and changes to DNS. Here is a summary of these changes:

* **Merged Qrvey Composer and Widgets URL into a single URL**. Starting with 8.4 we have merged the Composer and Widgets URL into a single cloudfront URL. Your old widget URL will stay active until you remove the DNS record. If you have a CSP or whitelisting of Widget URL then you would need to update the Widget Custom Domain in Widget Code Pipeline to the old Widget URL after the upgrade is done.
* **New API domain URL**. A new URL has been added as an API Gateway custom domain name. This URL will be used in the future for new APIs.
* **Deployment performance improvements**. A new Cloudformation template called MainTemplate has been added that contains some common resources like AWS Location Identity Pool Id, which is a shared resource between multiple Qrvey instances deployed in the same region and AWS account.

Follow the steps in this document if ANY of the following conditions are true:
1. [*CustomDomain*] You are using a custom domain for Composer and/or Widgets. Default domain is `qrveyapp.com` for Composer and `cloudfront.net` for Widgets.
2. [*MultipleDeployments*] You have 2 or more Qrvey Instances deployed in the same AWS Account and Region.
3. [*ExternalIdentityPoolId*] The cloudformation stack to create IdentityPoolId (AWS Location) is separate from the Qrvey Instance. This would be true if you have [*MultipleDeployments*] or the Qrvey Instance was deployed in a region where AWS Location is not supported.

Each step below identifies the condition required for that Step.

## Prerequisites
Please confirm the following before initiating any upgrades. 
* [*CustomDomain*] Identify the Composer URL and Widgets URL. If you are using your own domain for either one or both.
* [*CustomDomain*] Identify a new API domain URL for each instance. You can use a different sub domain or a different URL but the same subdomain is recommended. By default if your Composer URL is `xyz.yourdomain.com` the new API URL would look like `api-xyz.yourdomain.com`. Ignore this if you are using the default `qrveyapp.com` domain for Composer.
* [*CustomDomain*] Write access to your DNS provider for the base domain used in these URLs.
* [*CustomDomain*] If your Qrvey instance is in a region other than N.Virginia (us-east-1), you will need an SSL certificate in N.Virginia (us-east-1) on top of the one in your local region. If you had created the certificate earlier in us-east-1 make sure it supports both Composer URL and Widgets URL. If you are creating a new certificate make sure to either use a wildcard for subdomain or add the URL for Composer. After the 8.4 upgrade you can use the Composer as the base URL for Widgets but if you had already created a widgets URL in a previous version then you can continue to use it.
* [*MultipleDeployments*] [*ExternalIdentityPoolId*] Identify the AWS Region and IdentityPoolId for the AWS Location Stack if it’s not part of the Instance.
* Tool to call an API. To upgrade multiple environments in a single region you would be calling the API instead of using the UI. It can be cURL or Postman or any programming language.
* [*MultipleDeployments*] If you are using Advanced cloudformation template for the deployment or upgrade, Identify the internal names of these instances and save the name. An example could be STG or PROD.

## Step 1: Update DynamoDB Table
The Qrvey Deployment app uses a DynamoDB table to persist data about the instances deployed in that region. Before starting the upgrade to 8.4 you would need to update some records in this DynamoDB table to make sure the changes persist for this upgrade and future upgrades. This is a one time change.
1. Log in to AWS Console and navigate to DynamoDB service.
2. Find a table called “qrveyDeploymentApp_Config” -> Explore Table Items
3. Update the following records in this table and add/update the following properties. Please note that if you have multiple instances in the same region then each configID will have a prefix with the InstanceName. 
   a. configID = DeploymentParameters or “<InstanceName>_DeploymentParameters”
      i. appResourceValues
         1. [*CustomDomain*] adminUnifiedBackendURL - replace the composer url part
         2. [*CustomDomain*] adminUnifiedURL - replace the composer url part
         3. [*CustomDomain*] apiDomainURL - add or update this property with new API domain URL
         4. [*MultipleDeployments*] [*ExternalIdentityPoolId*] AWSLocationRegion - Set it to the region where the cloudformation template with IdentityPoolId (AWS Location) is deployed.
         5. [*CustomDomain*] composerURL - update this to Composer URL.
         6. [*MultipleDeployments*] [*ExternalIdentityPoolId*] enableLocation - Set to “false” if the AWS Location IdentityPoolId is coming from a stack/region outside of this environment.
         7. [*MultipleDeployments*] [*ExternalIdentityPoolId*] LocationIdentityPoolID - This value would exist only if the IdentityPoolID was defined outside of this environment. This is usually true for multiple deployments in the same region and enableLocation is false. If it exists make sure it has the correct IdentityPoolID.
         8. [*MultipleDeployments*] [*ExternalIdentityPoolId*]  useExistingAWSLocation - Set this to true if enableLocation is false and LocationIdentityPoolID is set to a valid ID.
         9. [*CustomDomain*] SSLCertificateARN - Set it to the certificate ARN for your custom domain from the Same region as the Instance.
         10. [*CustomDomain*] NoVaSSLCertificateARN - add or update this value to the SSL Certificate for your custom domain in us-east-1 region. If your instance is already in us-east-1 then use the same value as SSLCertificateARN
         11. [*CustomDomain*] widgetURL - Add or update this to the widget URL with “https://”. If you have an existing custom subdomain for widgets and would like to continue using it then set it to the custom subdomain. Otherwise you can set it to the Composer URL which is the default.
         12. [*CustomDomain*] widgetBaseURL - Same value as Widget URL but without “https://”
   b. configID = WidgetCodePipeline or <InstanceName>_WidgetCodePipeline
      i. cloudfrontDistributionId - Set the Distribution ID of a cloudfront distribution for Widgets matching this instance. If it does not exist, add this property.
      ii. [*CustomDomain*] cloudfrontDomainName - set this to Composer or Widget URL with “https://”. If you require Widgets to continue using the old widgets domain (usually required for CSP or Whitelisting) then use the old Widget URL for this value. Otherwise, use the Composer URL.
   c. configID = AdminCodePipeline or <InstanceName>_AdminCodePipeline
      i. appResourceValues
         1. [*CustomDomain*] adminUnifiedURL - Replace the Composer URL part
         2. [*CustomDomain*] adminUnifiedBackendURL - replace the Composer URL part
   d. configID = MicroservicesCodePipeline or <InstanceName>_MicroservicesCodePipeline
      i. appResourceValues
         1. [*CustomDomain*] apiDomainURL - add or update this property with new API domain URL
         2. [*CustomDomain*] composerURL - add or update this property with the Composer URL.

## Step 2: Deploying the Installer Template
Follow these steps to deploy the cloudformation template for the Qrvey Installer (Deployment Manager). You can deploy this template only once in a region and it will identify the Instance using the InstanceName parameter. This template can then be removed and re-deployed or updated to refer to another instance in the same region.

These steps can be done via the AWS console, CLI, API or any other similar tool. The details here are using the AWS Console UI.

1. Log in to your AWS account and select the desired region.
2. Navigate to AWS Cloudformation service. Click on Create Stack. If you had already created this stack (possible when you are deploying your second instance or upgrading an existing instance) then click on Update for the existing stack and select Replace current template.
3. For the Amazon S3 URL paste the URL for the version you want to deploy/upgrade. To support multiple deployment the URL should have “-Advanced” in it. You can get the latest version of the template from the Qrvey support team or from the [partner portal](../../release-notes/upgrade-notes.md). For example, for [*MultipleDeployments*] you would use the [advanced URL template](https://qrvey-autodeployapp.s3.amazonaws.com/deploy/v8/autodeployappCloudformation-enterprise-8.4-Advanced-luxaf.json) but for standard deployment (1 instance per region), you would use the [standard URL](https://qrvey-autodeployapp.s3.amazonaws.com/deploy/v8/autodeployappCloudformation-enterprise-8.4-wnzhm.json). 
4. Under Stack Details fill in any stack name and the following parameters
   a. AllowDelete - set this to False unless you plan to delete this instance. Please note that deleting an instance will remove all the data and metadata stored in that instance and it cannot be recovered once the instance is removed.
   b. [*MultipleDeployments*] LoadBalancerScheme (Advanced Template only) - For all typical deployments this would be set to “internet-facing”. It defines the scheme used for the Composer and API Load balancer and whether the Composer URL would be available over the internet or internal. 
   c. [*MultipleDeployments*] QrveyInstanceName (Advanced Template only) - Here you will enter the string that will identify the current deployment. It’s important to save this Instance Name for future reference and is Case Sensitive. This name will be used in the future to upgrade and/or remove the Instance deployed.
   d. SubnetId - Pick at least 2 Subnets. In all typical scenarios you would pick 2 Public subnets. All Subnets should belong to the same VPC.
   e. VpcId - Pick the VPC Id that matches the subnets picked above. 
   f. WebAppInboundIpRange - Add an IP address range that will be allowed to access this installer application (either UI or API). If you are not sure, you can use the public range as “0.0.0.0/0”
5. You can click on Next on all other screens for this stack. You can provide any optional tags if you like. At the end Acknowledge and click on Submit to start the creation (or update) process.
6. Once the stack has finished creating (or updating) click on Output Tab and use the URL in Next steps. 

## Step 3: Upgrade an Existing Instance
Now you are ready to trigger the upgrade. Make sure to use the correct InstanceName parameter that points to the instance you are planning to upgrade. Once the Installer template is deployed, move to next step

## Step 4: Start the Upgrade
At this point, you can follow these steps using the API or UI. The instructions below are using the API. For UI, Just click on Upgrade button and wait for the upgrade to finish. 

### Step 4.1: Initialize
This step has to be done every time you deploy the Installer template. Call the following API to initialize the Installer. Replace <Auto-Deploy-App-URL> with the URL from [Step 2](#step-2-deploying-the-installer-template).

```
curl --location --request GET 'http://<Auto-Deploy-App-URL>/api/v1/init'
```

You should receive a HTTP status 200 with something like this in the response

```
{
   "lastUpdated": "2022-11-14T19:57:36.675Z",
   "configID": "STG_QrveyInitState",
   "configName": "QrveyInitState",
   "status": "DEPLOYED"
}
```

For Upgrades, make sure the status returned is DEPLOYED.

### Step 4.2: Upgrade Status
You can check if the current instance requires an upgrade or not by using this API

```
curl --location --request GET 'http://<Auto-Deploy-App-URL>/api/v1/upgradestatus' \
--header 'Content-Type: application/json' \
--data-raw ''
```

Response will look something like the following:

```
{
   "requiresUpgrade": true,
   "productComparison": {
       ….
   },
   "status": "DEPLOYED",
   "requiredVersion": {
       "buildVersion": "7.8",
       "buildVersionDate": "2022-11-10T13:45:18.357Z"
   },
   "currentVersion": {
       "buildVersion": "7.7"
   }
}
```



### Step 4.3 Trigger Upgrade
Once you have confirmed that an Upgrade is available for this instance, use the following to trigger the upgrade process

```
curl --location --request POST 'http://<Auto-Deploy-App-URL>/api/v1/deployment/upgrade' \
--header 'Content-Type: application/json' \
--data-raw '{
	"deployID": "<xxxxx>"
}'
```



The response will be a HTTP Status code 200 if the upgrade was triggered successfully.

```
{
   "deploymentID": "xxxxx",
   "upgradeStatus": "IN_PROGRESS"
}
```


### Step 4.4 Check Status
To check the status of upgrade use the following API. The status of upgrade will be in a property called “upgradeStatus”

```
curl --location --request GET 'http://<Auto-Deploy-App-URL>/api/v1/status' \
--header 'Content-Type: application/json'
```


### Step 4.5: (Optional) Restart Upgrade
In case there is an error during the upgrade process the “upgradeStatus” will be “UPGRADE_FAILED” and there will be an error message in the step that failed. You can follow the troubleshooting steps in [this document](../04-Installing%20the%20Qrvey%20platform/troubleshooting.md) to restart the AWS CodePipeline once the issue has been fixed. To restart the upgrade AFTER the pipeline is running or finished successfully use the Trigger upgrade API from [Step 4.3](#step-43-trigger-upgrade).

### Step 4.6: (Optional) Remove Installer Template
Once the upgrade is done you can remove the Installer Template that was deployed in [Step 2](#step-2-deploying-the-installer-template) above.

## Step 5: Update CNAME records
After the upgrade is complete you can add and update the CNAME records in your DNS provider. You will need the Cloudfront URL from the Widget’s distribution and the API Gateway Custom domain name.
1. [*CustomDomain*] Composer URL - Composer URL should point to the Cloudfront distribution for Widgets and Composer.
2. [*CustomDomain*] API Domain URL - API domain URL should point to the Custom Domain in AWS API gateway service.
3. [*CustomDomain*] Widgets URL (optional) - If you had a custom Widgets URL earlier, leave it as is and make sure it points to the same cloudfront distribution as Composer. In case you are getting any SSL Validation errors, update the cloudfront distribution and add the Widgets URL as an additional CNAME.

## Step 6: Update Cloudfront Distribution
[*CustomDomain*] Once the Widget Pipeline has finished, update the Widgets and Composer cloudfront distribution to include both Composer and Widgets URL. 
1. Navigate to AWS Cloudfront service and identify the distribution used for Widgets.
2. Edit the Settings section
3. Make sure both Composer and Widgets URL are added to the Alternate Domain name section.
4. Update the distribution and wait for the deployment to finish.

## Considerations
With v8.4 a new Cloudformation template called “QrveyxxxxxMainTemplate” has been added. Going forward for any customizations (like custom domain URL, changing API Keys, etc) you will need to update the parameters in this template as well. Once you update this template, you would invoke a Lambda function as explained below
* Some parameter changes may require invoking a Lambda function called “xxxxx_CreateEnvFile_LambdaFunction” after all pipelines have finished. Calling this function has to be done twice with the following request body. You can use the Lambda Test functionality to call this function. 
   * First call - Request Body = { "RequestType": "UpdateEnvFile" }
   * Second call - Request Body = { "RequestType": "UpdateVariables" }



</div>