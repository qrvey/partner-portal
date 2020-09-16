---
id: version-5.3-aws_marketplace
title: Getting Qrvey From AWS Marketplace
sidebar_label: Getting Qrvey From AWS Marketplace
original_id: aws_marketplace
---

<div style="text-align: justify">

This document explains the steps to download and install Qrvey Business Analytics platform from AWS marketplace. The listing on Marketplace can be found 
<a href="https://aws.amazon.com/marketplace/pp/B0863DDPQG"> <strong> here</strong> </a>.

## Prerequisites & Recommendations
Currently, the **N.Virginia (us-east-1), Ohio (us-east-2) and Oregon (us-west-2)** regions are supported for the deployment. For other regions, please email support at help@qrvey.com.

We highly recommend using a new AWS account to avoid running into AWS Service Quota limits. You can easily create a new AWS account using AWS Organizations. If you run into any issues during Deployment steps, please email support at help@qrvey.com.


Before deploying Qrvey Platform, please check the following in your AWS account to make sure they are available:
* A VPC with a public subnet for each availability zone of that region.
* 3 Elastic IP addresses.
* Deployment creates about 6 t2.micro EC2 instances. Default service quota limit for AWS accounts is 20 but in some cases it might be 5.

The application uses AWS SES to send out all transactional emails from the platform. AWS SES is in SANDBOX mode by default. Please open a support ticket with AWS to move your account out of Sandbox mode.

## Installation Steps
The following steps will walk you through installing Qrvey Business Analytics platform in your own AWS account via AWS marketplace. A video of all these steps can be found <a href="https://qrvey.wistia.com/medias/bt8531nhf0"> <strong>here</strong></a>. 

1. Subscribe to the listing on AWS Marketplace. Make sure the region is selected as “N.Virginia (us-east-1)”.
2. To launch, click on the link for the Cloudformation template.  This will take you to Cloudformation's quick create page. Enter values for the following parameters and click on **Create Stack**.  

   **a.** *Stack name* - name this Cloudformation stack.  
  **b.** *SubnetID* - pick at least 3 subnets.  
**c.** *VPC ID* - pick the VpcID that matches the subnets.   
**d.** *WebAppInboundIPrange* - IP address that will be added to the security group used by the deployment app. To make it available from any browser, you can use “0.0.0.0/0” or you can insert an IP address or range.

3. Once the template is ready (it takes about 7 minutes), you can navigate to the output tab and copy the URL. This URL can be used to launch the deployment app. Open a new browser window and launch this URL.
4. In the deployment app, enter your details (name/email/etc) and click on Install.
5. You will see a progress bar and deployment will continue even if you close the browser window. At this point, it will be deploying 5 sets of Code Pipelines in your AWS account using a set of Cloudformation templates.
6. Once the deployment is finished, you will receive an email with a URL to access your deployed application as well as a link to the documentation portal.
7. Open the URL in a browser window and sign up for an account to start using the application. You can share the same URL with your users, who can sign up for their own accounts. 

## Deleting an Installation
To delete an existing installation, you need to: 
1. Delete the deployment by clicking on the Delete button in the installation app’s UI. You can get the URL in step 3 of Installation Steps above.
2. Once the deployment is removed, you’ll see the initial form in the UI. At this point, you can delete the Cloudformation template created in Step 2 of Installation Steps above.
3. Unsubscribe from Marketplace console.

## Troubleshooting
Here are some common scenarios where a deployment could result in failure.

<h3 style="color:#B3B1B1"> Deployment fails with a "Pipeline failed to reach a successful state. Current status is failed." 
</h3>  
This error usually happens when the deployment runs into an AWS Service quota limit. To find the underlying error: 
1. Open a new browser window or tab, navigate or log in to your AWS account.
2. Navigate to 
<a href="https://console.aws.amazon.com/codesuite/codepipeline/pipelines?region=us-east-1 "> <strong>AWS CodePipeline</strong></a> console.



3. Find the pipeline *Qrvey_** with the failed state. Click on the pipeline name to open the details.
4. Find a step with an error state.   
  **a.** If the failed step is of the *AWS Code Build* type, then you can click on details and follow the link to find the actual error message.  
  **b.** If the step is of *AWS Cloudformation* type, you can find the error message by navigating to AWS Cloudformation console and looking at the *Events* tab for the template that is in *FAILED* or *ROLLBACK_** state.

Common service quota limits are
Elastic IP Address: The deployment will create 4 Elastic IP Addresses, however, the default limit in AWS is 5.
S3 buckets: The deployment will create about 30 S3 buckets, whereas the default limit in AWS is 100.
EC2 instances: You should have 10 t2.micro EC2 instances available, however, the default limit in AWS is 20. 

Once you have resolved the issue, you can restart the deployment by clicking on the **Restart** button in the Installation app. Alternatively, you can restart the pipeline directly from AWS Codepipeline to make sure it reaches the *Successful* state and then click on the **Restart** button in the installation app.

<h3 style="color:#B3B1B1"> Emails are not received from the application
</h3> 
Qrvey platform uses AWS Simple Email Service (SES) to send all emails. These emails include signup verification, forgotten password, and *Send Email* action in the flows.   
By default, AWS SES is in a Sandbox mode where it only allows sending email to verified email addresses. To resolve this issue, you would need to open a support ticket with AWS from the same account used to install the platform and ask AWS to move the account out of the sandbox mode. It usually takes them around 24 hours to move an account out of the sandbox. 

In the meantime, you can enable some emails by verifying them in SES. To verify an email:
1. Navigate to  <a href="https://console.aws.amazon.com/ses/home?region=us-east-1# "> <strong>AWS SES console</strong></a>.
2. Click on the **Email Addresses** menu option on the left.
3. Click on the **Verify a New Email Address** button.
