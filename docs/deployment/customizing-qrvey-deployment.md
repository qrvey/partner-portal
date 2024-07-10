---
id: customizing-qrvey-deployment
title: Customizing Qrvey Deployment
sidebar_label: Customizing Qrvey Deployment
tags: [CloudOps Engineer]
sidebar_position: 5
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

This document will help you customize a Qrvey Instance for different configurations like Composer URL, “From” email address, etc. 

## Overview 
At a high level, a deployed Qrvey instance has 5 CloudFormation templates that create 5 pipelines (Widgets, DataRouter, Worker, Microservices and Admin). Each of these templates has a set of input parameters that are the configuration of that instance/deployment. An instance can be updated by updating these parameters which will in turn update all resources to use the new values.

All configuration changes typically require some setup outside of the Qrvey platform (email address verification or CNAME records for URLs) and then updating the Pipeline inside Qrvey. In this document, we’ll first show the steps on how to update the parameter for a single pipeline and then a section for all the steps to make a specific change.

## Update a Single Pipeline
These steps will show you how to update the parameters for a single pipeline. In this example, we’ll be updating the QrveyCodePipeline but the same steps can be replicated for any of the other pipelines.

### Step 1: Identify the CloudFormation Stack

1. Log into your AWS Account and select the region where your Qrvey instance is located.
2. Navigate to the CloudFormation console.
3. Identify the cloudFormation stack for the Pipeline you want to update. You can search for “CodePipeline” and you should see the 5 stacks as shown in this screenshot.

![customizing_deployment](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/customizing-qrvey-deployment/custom-deploy_1.png#thumbnail)

### Step 2: Update the CloudFormation template parameters

1. From the CloudFormation screen, pick the CloudFormation stack matching the pipeline you want to update and click on the **Update** button.
2. On the Prerequisites screen, pick “Use Current Template”. Click **Next**.

![customizing_deployment](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/customizing-qrvey-deployment/custom-deploy_2.png#thumbnail)

3. On the parameters screen, find the option you would like to change and enter in the new value. Leave the rest of the parameters as they are. You can find the specific parameter for your use-case in later sections of this document. In this example we are updating the “From” email address by changing the parameter called “VerifiedEmail” (highlighted with yellow). Click **Next** after changing the value.

![customizing_deployment](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/customizing-qrvey-deployment/custom-deploy_3.png#thumbnail)


4. Click on **Next** on the Configure Stack options screen.
5. On the next screen (Review), review the changes you have made, select the Capabilities checkbox (if shown) and click on **Update Stack** to apply the changes.
6. At this point, the CloudFormation stack will move to “UPDATE_IN_PROGRESS” state.
7. Wait for the CloudFormation stack to finish updating. Once it’s done the status would change to “UPDATE_COMPLETE”.

![customizing_deployment](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/customizing-qrvey-deployment/custom-deploy_4.png#thumbnail)


### Step 3: Trigger CodePipeline to deploy changes

1. Once the CloudFormation stack has finished with the update, navigate to the AWS CodePipeline console.
2. Identify the matching pipeline for the CloudFormation stack you updated in the last step. For the “QrveyCodePipeline” stack, the pipeline will be called “Qrvey_xxxxx_Worker”.
3. Select the Pipeline and click on the **Release Change** button.

![customizing_deployment](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/customizing-qrvey-deployment/custom-deploy_5.png#thumbnail)

4. This will change the Pipeline status to “In Progress” and once the Pipeline is done the status will change to “Succeeded”. 

At this point, the changes are deployed and you can start using the Platform.

## Update Deployment Settings

Follow these steps to update a particular setting in a Qrvey Platform’s deployment.

### Change “From” Email Address 
Qrvey platform uses AWS SES to send out all emails. These emails come from Automation or Page flows and also transactional emails like the “forgot password” feature. 

To change the email address that is used under the “From” section you’ll need to add and verify the email address in AWS SES and then update the Qrvey deployment to use it. Here are the steps:

1. Log into your AWS Account and navigate to the AWS SES console.
2. Under the “Email Addresses” section click on **Verify a New email address**. Type in the new email address and click **Verify**. This will send an email to the specified address from AWS.
3. Open your email client and click on the verification link under that email
4. Go back to AWS SES to confirm that the “Verification status” for that email address has changed to “Verified”.
5. Update the following CloudFormation Stacks and CodePipelines by following the steps mentioned <a href="#update-a-single-pipeline" target="_blank"> here</a>.


<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Qrvey Worker</li></ul>
<ul style={{listStyle: 'none', marginLeft: '40px'}}>
<li> i. CloudFormation Stack: “xxxxxQrveyCodePipeline”. Parameters:</li></ul>

<ul style={{listStyle: 'none', marginLeft: '60px'}}><li>
1. VerifiedEmail - enter the new email address </li></ul>

<ul style={{listStyle: 'none', marginLeft: '40px'}}>
<li> ii. CodePipeline: “Qrvey_xxxxx_Worker”</li></ul>

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>b. Microservices</li></ul>
<ul style={{listStyle: 'none', marginLeft: '40px'}}>
<li>i. CloudFormation Stack: “xxxxxMicroservicesCodePipeline”.
Parameters:</li></ul>
<ul style={{listStyle: 'none', marginLeft: '60px'}}><li>
1. VerifiedEmail - enter the new email address </li></ul>
<ul style={{listStyle: 'none', marginLeft: '40px'}}>
<li>  ii. CodePipeline: “Qrvey_xxxxx_Microservices”
</li>
</ul>

6. Once all Pipelines have finished updating you will start receiving emails using the specified “From” email address.

### Change Composer URL
You can change the Composer URL to match your own domain. You would need access to DNS settings for that domain (Route 53 or similar) to be able to create a new CNAME record and SSL Certificate.

1. Identify two URLs associated with your Qrvey instance:
    - The **Composer** URL — (e.g., `https://qrveysample.yourdomain.com`)
    - The **API Domain** URL — (e.g., `api-<composerURL>`)
2. Log into your AWS account and navigate to the AWS Certificate Manager console.
3. Create a new certificate matching the URL/domain you would like to use. You can create a specific certificate for the exact URL or a wildcard (*.yourdomain.com). You can also import or use an existing certificate if you already have one. Here’s <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html" target="_blank">a document about creating certificates</a>. We recommend using DNS validation.
4. Once the certificate is verified (status changes to “Issued”), copy the ARN.  
**Note:** If your Qrvey Installation is in a region other than “us-east-1” then you will need to perform steps 2-4 for “us-east-1”.  

## Update MainTemplate

1. Navigate to AWS Cloudformation console. 
2. Find the stack called `Qrvey-----MainTemplate`.
3. Navigate into Update > Use Existing Template > Update and replace any parameters using the old URLs (composer or API) to use the new ones. 
4. Apply the changes and wait for the update to finish.

## Update CloudFormation

Update the following CloudFormation Stacks and CodePipelines by following the steps from <a href="#update-a-single-pipeline" target="_blank">Update a Single Pipeline</a>.



<ul style={{listStyle: 'none'}}>
<li>a. Data Router</li>
</ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>  i. CloudFormation Stack: “xxxxxDataRouterCodePipeline”. Parameters:</li></ul>
<ul style={{listStyle: 'none', marginLeft: '40px'}}><li>
1. QrveyURL - enter the new Composer URL.<br />
2. certificateARN - enter the SSL Certificate ARN
</li></ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> ii. CodePipeline: “Qrvey_xxxxx_DataRouter”</li>
</ul>

<ul style={{listStyle: 'none'}}>
<li>b. Widgets</li>
</ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>  CloudFormation Stack: “xxxxxWidgetsCodePipeline”. Parameters:</li></ul>
<ul style={{listStyle: 'none', marginLeft: '40px'}}><li>
1. ComposerURL - enter the new Composer URL
</li></ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> ii. CodePipeline: “Qrvey_xxxxx_Widgets”</li>
</ul>

<ul style={{listStyle: 'none'}}>
<li>c. Qrvey Worker<br /></li>
</ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>  i. CloudFormation Stack: “xxxxxQrveyCodePipeline”. Parameters:
</li></ul>
<ul style={{listStyle: 'none', marginLeft: '40px'}}><li>
1. sslCertificateNameDesired - enter the new Composer URL</li></ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>  ii. CodePipeline: “Qrvey_xxxxx_Worker”
</li>
</ul>


<ul style={{listStyle: 'none'}}>
<li>d. Microservices<br /></li>
</ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>  i. CloudFormation Stack: “xxxxxMicroservicesCodePipeline”. 
Parameters:</li></ul>
<ul style={{listStyle: 'none', marginLeft: '40px'}}><li>
1. sslCertificateNameDesired - enter the new Composer URL. <br />
2. CertificateARN - enter the SSL Certification ARN<br />
3. AdminAppDomainURL - “https://&lt;composerurl&gt;/admin/api”<br />
4. AdminServerURL - “https://&lt;composerurl&gt;/admin/api”</li></ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>ii. CodePipeline: “Qrvey_xxxxx_Microservices”</li>
</ul>

<ul style={{listStyle: 'none'}}>
<li>e. Admin Center<br /></li>
</ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>  i. CloudFormation Stack: “xxxxxAdminAppCodePipeline”. Parameters:</li></ul>
<ul style={{listStyle: 'none', marginLeft: '40px'}}><li>
1. QrveyURL - enter the new Composer URL</li></ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>  ii. CodePipeline: “Qrvey_xxxxx_Admin”
</li>
</ul>

6. The next step is to find the value for the CNAME record to be added to your DNS.
<ul style={{listStyle: 'none'}}>
<li>  a) Navigate to the AWS EC2 console</li>
<li>  b) Open the “Load Balancers” section</li>
<li>  c) Find the load balancer called “xxxxx-qrvey-elb”</li>
<li>  d) Copy the DNS name value for this load balancer</li>
</ul>

7. Log in or navigate to your DNS provider (Route 53 or similar) and add a CNAME record for “< Composer URL >     CNAME    < Load Balancer DNS Name >”
8. Once all the pipelines have finished successfully you should be able to launch Composer using the new URL. 

>**Note**: If you or your users have created content inside Qrvey Composer (Pages, Workflows or Webforms) using the old URL then those may not work properly. Any new content will use the new URL but any old content may still have the URL saved somewhere. Please contact Qrvey support for guidance on how to update the URL in content.





<!-- 
### Change Widget URL
You can change the Widget URL to match your own domain. You would need access to DNS settings for that domain (Route 53 or similar) to be able to create a new CNAME record and SSL Certificate.

1. Identify the URL you would like to use for the Qrvey Widgets. It would be something like “https://qrveywidgets.yourdomain.com"
2. Log into your AWS account and navigate to the AWS Certificate Manager console.
3. Create a new certificate matching the URL/domain you would like to use. You can create a specific certificate for the exact URL or a wildcard (*.yourdomain.com). You can also import or use an existing certificate if you already have one. Here’s <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html" target="_blank">a document about creating certificates</a>. We recommend using DNS validation. You can re-use an existing SSL Certificate if the domain name matches.
4. Once the certificate is verified (status changes to “Issued”), copy the ARN.
5. Update the following CloudFormation Stacks and CodePipelines by following the steps mentioned <a href="#update-a-single-pipeline" target="_blank"> here</a>.
    1. Widgets
        1. CloudFormation Stack: “xxxxxWidgetsCodePipeline”. Parameters:
            1. CustomDNS - enter the new Widget URL (without https://)
            2. ARNSSLCertificate - enter the SSL Certificate ARN
            3. EnableCustomDNS - enter “true”.
        2. CodePipeline: “Qrvey_xxxxx_Widgets”
    2. Microservices
        1. CloudFormation Stack: “xxxxxMicroservicesCodePipeline”. Parameters:
            1. WidgetsBucketlauncherPath - enter the new launcher path which would be the new widget URL + “/widgets-launcher/app.js”. For example it may look like “https://qrveywidgets.yourdomain.com/widgets-launcher/app.js”
            2. WidgetsBucketPath - enter the new Widget URL (with https://)
        2. CodePipeline: “Qrvey_xxxxx_Microservices”
    3. Admin Center
        1. CloudFormation Stack: “xxxxxAdminAppCodePipeline”. Parameters:
            1. widgetBucketURL - enter the new Widget URL (with https://)
        2. CodePipeline: “Qrvey_xxxxx_Admin”
6. The next step is to find the value for the CNAME record to be added to your DNS.
    1. Navigate to the AWS Cloudformation console. 
    2. Find the stack called “xxxxxWidgetsCodePipeline”.
    3. Click on the Outputs tab
    4. Copy the URL as value for the output named “CloudfrontDomainName” (without https://)
7. Log in or navigate to your DNS provider (Route 53 or similar) and add a CNAME record for “<Widget URL\>     CNAME    <CloudfrontDomainName\>”

>**Note**: If you have embedded Qrvey using the old cloudfront URL, then you would have to update your code to load all widgets using the new URL. 
-->


</div>
