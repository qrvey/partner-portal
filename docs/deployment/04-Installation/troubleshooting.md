---
id: troubleshooting-deployment
title: Troubleshooting Deployment
sidebar_label: Troubleshooting
tags: [CloudOps Engineer]
sidebar_position: 3
displayed_sidebar: getting-started
---
<div>
Here are some common scenarios where a deployment could result in failure.

### Deployment fails with a “Pipeline failed to reach a successful state. Current status is failed" message.

This error usually happens when the deployment runs into an AWS Service quota limit. To find the underlying error:

1. Open a new browser window or tab, navigate or log in to your AWS account.
2. Navigate to <a href="https://console.aws.amazon.com/codesuite/codepipeline/pipelines?region=us-east-1" target="_blank">AWS CodePipeline</a>.
3. Find the pipeline <i>“Qrvey_*”</i> with the failed state. 
4. Click on the pipeline name to open the details.
5. Find a step with an error state. 
<ul style={{listStyle: 'lower-alpha'}}>
<li>If the failed step is of the “AWS Code Build” type, then you can click on details and follow the link to find the actual error message. </li>
<li>If the step is of the “AWS Cloudformation” type, you can find the error message by navigating to the AWS Cloudformation console and looking at the <i>“Events”</i> tab for the template that is in <i>“FAILED”</i> or <i>“ROLLBACK_*”</i> state. If this is a <strong><i>new deployment</i></strong> and the cloudformation stack is in <strong><i>ROLLBACK_COMPLETE</i></strong> status then you would need to delete the stack and then go back to CodePipeline to retry the step that failed. </li> </ul>


Common service quota limits are:
* S3 buckets: The deployment will create about 24 S3 buckets, whereas the default limit in AWS is 100.


Once you have resolved the issue, you can restart the deployment or upgrade by clicking on the **Retry** button in the Installation app. Alternatively, you can restart the pipeline directly from AWS Codepipeline to make sure it reaches the *Successful* state and then click on the **Retry** button in the installation app.


### Emails are not received from the application.

Qrvey platform uses AWS Simple Email Service (SES) to send all emails. These emails include signup verification, forgotten password, and *Send Email* action in the flows. By default, AWS SES is in a Sandbox mode where it only allows sending email to verified email addresses. To resolve this issue, you would need to open a support ticket with AWS from the same account used to install the platform and ask AWS to move the account out of the sandbox mode. It usually takes them around 24 hours to move an account out of the sandbox.

In the meantime, you can enable some emails by verifying them in SES. To verify an email:

1. Navigate to <a href="https://console.aws.amazon.com/ses/home?region=us-east-1#">AWS SES Console</a>.
2. Click on the **Email Addresses** menu option on the left.
3. Click on the **Verify a New Email Address** button.

</div>