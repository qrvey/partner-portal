---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

Here are some common scenarios where a deployment could result in failure.

<h2 style={{color: '#a9a9a9'}}>Deployment fails with a “Pipeline failed to reach a successful state. Current status is failed" message. </h2>

This error usually happens when the deployment runs into an AWS Service quota limit. To find the underlying error:
1. Open a new browser window or tab, navigate or log in to your AWS account.
2. Navigate to <a href="https://console.aws.amazon.com/codesuite/codepipeline/pipelines?region=us-east-1">AWS CodePipeline</a>.
3. Find the pipeline _“Qrvey__*” with the failed state. 
4. Click on the pipeline name to open the details.
5. Find a step with an error state. 

a. If the failed step is of the “AWS Code Build” type, then you can click on details and follow the link to find the actual error message. 

b. If the step is of the “AWS Cloudformation” type, you can find the error message by navigating to the AWS Cloudformation console and looking at the *“Events”* tab for the template that is in *“FAILED”* or _“ROLLBACK__*” state.

Common service quota limits are:
* Elastic IP Address: The deployment will create 3 Elastic IP Addresses, however, the default limit in AWS is 5.
* S3 buckets: The deployment will create about 30 S3 buckets, whereas the default limit in AWS is 100.
* EC2 instances: You should have 6 t2.micro EC2 instances available, however, the default limit in AWS is 20 (in some cases the limit could be 5).

Once you have resolved the issue, you can restart the deployment by clicking on the **Restart** button in the Installation app. Alternatively, you can restart the pipeline directly from AWS Codepipeline to make sure it reaches the *Successful* state and then click on the **Restart** button in the installation app.



<h2 style={{color: '#a9a9a9'}}>Emails are not received from the application.
 </h2>

Qrvey platform uses AWS Simple Email Service (SES) to send all emails. These emails include signup verification, forgotten password, and *Send Email* action in the flows. By default, AWS SES is in a Sandbox mode where it only allows sending email to verified email addresses. To resolve this issue, you would need to open a support ticket with AWS from the same account used to install the platform and ask AWS to move the account out of the sandbox mode. It usually takes them around 24 hours to move an account out of the sandbox.

In the meantime, you can enable some emails by verifying them in SES. To verify an email:
1. Navigate to <a href="https://console.aws.amazon.com/ses/home?region=us-east-1#">AWS SES Console</a>.
2. Click on the **Email Addresses** menu option on the left.
3. Click on the **Verify a New Email Address** button.

