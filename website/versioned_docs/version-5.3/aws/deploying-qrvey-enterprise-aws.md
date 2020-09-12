---
id: version-5.3-deploying-enterprise-edition-aws
title: Deploying Qrvey Enterprise Edition to AWS Account
sidebar_label: Deploying Qrvey Enterprise Edition to AWS Account
original_id: deploying-enterprise-edition-aws
---

<div style="text-align: justify">

This document explains the steps to install Qrvey Business Analytics platform (Enterprise edition) to your AWS account.

## Prerequisites & Recommendations

**Before you are ready to start the deployment please send the AWS Account ID to Qrvey at help@qrvey.com to enable access.**

Currently, the **N.Virginia (us-east-1), Ohio (us-east-2), Oregon (us-west-2)** regions are supported for the deployment. For other regions, please contact support at help@qrvey.com.



We highly recommend using a new AWS account to avoid running into AWS Service Quota limits. You can easily create a new AWS account using AWS Organizations. If you run into any issues during Deployment steps, please email support at help@qrvey.com.

Before deploying Qrvey Platform, please check the following in your AWS account to make sure they are available:
* A VPC with a public subnet for each availability zone of that region
* 3 Elastic IP addresses (default limit in AWS is 5)
* Deployment creates about 6 t2.micro EC2 instances. The default service quota limit for AWS accounts is 20 but in some cases, it might be 5.

The application uses AWS SES to send out all transactional emails from the platform. AWS SES is in SANDBOX mode by default. Please, open a support ticket with AWS to move your account out of Sandbox mode.

## Installation Steps

The following steps will walk you through installing Qrvey Business Analytics platform in your own AWS account using a Cloudformation template. Before starting these steps, please confirm if your AWS Account ID has been enabled for deployment from Qrvey’s side.

1. Log in to your AWS account. Select your desired AWS region.
2. Launch
<a href="https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/quickcreate?templateURL=https://qrvey-autodeployapp.s3.amazonaws.com/autodeployappCloudformation-enterprise-5.3.json&stackName=Qrvey-Deployment-Manager"> <strong> this URL  </strong> </a> in your browser window.  This will take you to Cloudformation's quick create page. Enter values for the following parameters and click on **Create Stack**. <br>

  a. Stack name - name this Cloudformation stack. <br>
  b. SubnetID - pick all public subnets in your VPC. We recommend having 1 Subnet per Availability Zone (AZ) for your region.<br>
  c. VPC ID - pick the VpcID that matches the subnets.<br>
  d. WebAppInboundIPrange - IP address that will be added to the security group used by the deployment app. To make it available from any browser, you can use “0.0.0.0/0” or you can insert an IP address or range.

3. Once the template is ready (it takes about 7 minutes), you can navigate to the output tab and copy the URL. This URL can be used to launch the deployment app. Open a new browser window and launch this URL.
4. In the deployment app, enter your details (name/email/etc) and click on **Install**.
5. You will see a progress bar and deployment will continue even if you close the browser window. At this point, it will be deploying 5 sets of Code Pipelines in your AWS account using a set of Cloudformation templates.
6. Once the deployment is finished, you will receive an email with a URL to access your deployed application as well as a link to the documentation portal.
7. Open the URL in a browser window and sign up for an account to start using the application. You can share the same URL with your users, who can sign up for their own accounts. 

## Upgrading From an Old Version

To upgrade the platform from an old version, you need to:

1. Get the URL for Cloudformation template for the latest version 
(<a href=" https://qrvey-autodeployapp.s3.amazonaws.com/autodeployappCloudformation-enterprise-5.4.json">5.4 is the latest</a>).

2. Find the template you used for the earlier deployment. This is from Installation Step #2. In Cloudformation UI, this would be the template at the bottom of the list and will have a URL in the Output tab with Export name as *“AutoDeployAppURL”*. If you have removed this template, then just create a new stack with the Quick Create URL from step 2 of Installation Steps.

3. Click on the button to **Update** template.

4. Pick **Replace current template**. Paste the URL from Step 1 above.

5. Click on **Next** for the next steps till the end and **Submit** at the end to start the update.

6. Once the update is complete, launch the URL from the output tab in a new window.

7. In the UI, you will see an upgrade button.  Click on the **Upgrade** button to start the deployment process. This may take about 2-3hrs to finish; there is no downtime for the application but we would recommend doing this during off-hours to avoid any issues.

8. Once the upgrade is complete, you will be able to use the new version.


## Deleting an Installation

To delete an existing installation, you need to: 
1. Delete the deployment by clicking on the **Delete** button in the installation app’s UI. You can get the URL in step 3 of Installation Steps above.
2. Once the deployment is removed, you’ll see the initial form in the UI. At this point, you can delete the Cloudformation template created in Step 2 of Installation Steps above.
3. **Unsubscribe** from Marketplace console.

## Troubleshooting

Here are some common scenarios where a deployment could result in failure.


<h3 style="color:#A9A9A9"> Deployment fails with a “Pipeline failed to reach a successful state. Current status is failed"</h3>

This error usually happens when the deployment runs into an AWS Service quota limit. To find the underlying error: 
1. Open a new browser window or tab, navigate or log in to your AWS account.
2. Navigate to <a href="https://console.aws.amazon.com/codesuite/codepipeline/pipelines?region=us-east-1">AWS CodePipeline</a>.


3. Find the pipeline *“Qrvey_***”* with the failed state. 4. Click on the pipeline name to open the details.

4. Find a step with an error state. 
a. If the failed step is of the “AWS Code Build” type, then you can click on details and follow the link to find the actual error message.
b. If the step is of “AWS Cloudformation” type, you can find the error message by navigating to AWS Cloudformation console and looking at the *“Events”* tab for the template that is in *“FAILED”* or *“ROLLBACK_***”* state.

Common service quota limits are:
* Elastic IP Address: The deployment will create 3 Elastic IP Addresses, however, the default limit in AWS is 5.
* S3 buckets: The deployment will create about 30 S3 buckets, whereas the default limit in AWS is 100.
* EC2 instances: You should have 6 t2.micro EC2 instances available, however, the default limit in AWS is 20 (in some cases the limit could be 5). 

Once you have resolved the issue, you can restart the deployment by clicking on the **Restart** button in the Installation app. Alternatively, you can restart the pipeline directly from AWS Codepipeline to make sure it reaches the *Successful* state and then click on the **Restart** button in the installation app.

<h3 style="color:#A9A9A9"> Emails are not received from the application</h3>

Qrvey platform uses AWS Simple Email Service (SES) to send all emails. These emails include signup verification, forgotten password, and *Send Email* action in the flows. By default, AWS SES is in a Sandbox mode where it only allows sending email to verified email addresses. To resolve this issue, you would need to open a support ticket with AWS from the same account used to install the platform and ask AWS to move the account out of the sandbox mode. It usually takes them around 24 hours to move an account out of the sandbox. 

In the meantime, you can enable some emails by verifying them in SES. To verify an email:
1. Navigate to <strong><a href="https://console.aws.amazon.com/ses/home?region=us-east-1#">AWS SES Console</a></strong>.
2. Click on the **Email Addresses** menu option on the left.
3. Click on the **Verify a New Email Address** button.


