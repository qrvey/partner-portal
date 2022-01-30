---
id: preparing-your-aws-account
title: Preparing Your AWS Account
sidebar_label: Preparing Your AWS Account
---

<div style={{textAlign: "justify"}}>

Qrvey deploys to your AWS account using a CloudFormation template. CloudFormation templates enable you to automate the deployment process of the AWS services required to run the Qrvey system. The following steps will walk you through the deployment process.

## Step 1: Create an AWS Account

>**Note**: If you are deploying Qrvey to a new AWS account, please follow these steps. Otherwise, you can jump to <a href="#step-2:-create-a-cross-account-iam-role">Step 2</a>.

If you already have an AWS Account then you can use the AWS Organizations service to create a child AWS Account. 

To create a new account using <a href="https://aws.amazon.com/organizations/">AWS Organizations</a>, follow the steps mentioned <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">here</a> and then skip to <a href="#step-2:-create-a-cross-account-iam-role">Step 2</a> in this document.

Navigate to “https://aws.amazon.com” and click on the **Create an AWS Account** button.

More information about creating an AWS account can be found here:
https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/?icmpid=support_rt_kc_articles

Fill out the form with the appropriate information:
* Root account Email
* Password
* Alias to easily reference this account

Fill out Contact Information:

Enter Payment Information:

Verify Account using Email or Phone number verification. Once done you should see the following confirmation:

Pick desired Support plan (if needed):

## Step 2: Create a Cross-Account IAM Role
This is a required step that will create a new IAM role in your AWS account used to deploy the Platform.

1. Login to AWS Console (using the email and password created in the last step)

2. Select your region from the top-left region dropdown

3. Navigate to AWS IAM (Identity and Access Management)

4. Click on the Roles menu group

5. Click on Create Role and select Another AWS Account in step 1. Enter AWS AccountID that you received from Qrvey (6381xxxxxxxx)

6. Select **AdministratorAccess** in step 2 (this is a high permission but we only need to be able to deploy all the services we use in Qrvey Platform). You will be able to remove this permission once we have deployed the platform (about 1-2 days)

7. In the next step, add as many optional tags as needed.

8. In the next step, enter a name for this new role and review all the information and click on **Save**.

9. The new role should have been created now. From the Roles list page, click on the name of the role you just created to see its details. Copy the URL for *Give this link to users who can switch roles in the console* from the role details page. Save this URL somewhere as you’ll be sending this to Qrvey’s deployment team in the last step.

## Step 3: Send Info to Qrvey
Please send the following information to Qrvey’s deployment team:
* AWS IAM Role URL (Step 2)
* Sample Email Body (to be sent to Qrvey at help@qrvey.com)

IAM Crossaccount role URL: https://signin.aws.amazon.com/switchrole?roleName=QrveyxxxxxRole&account=9653xxxxxxxx

## Step 4: Move SES out of Sandbox (Offline)
*AWS enables SES in sandbox mode by default. While you can move SES out of sandbox mode at any time, this step is required to send emails from the Qrvey system.* 

To move SES out of sandbox mode, you must create a support ticket with AWS. AWS usually takes about 1 day to approve this request so we suggest doing this as soon as possible. Here are the steps to open this support ticket: 
1. Log into the AWS console and navigate to <a href="http://aws.amazon.com/ses">AWS SES</a>:

2. Click on the **Request a Sending Limit Increase** button and fill out the form:


3. In the case description please fully describe your email sending scenarios. For example, will they only be sent to people who subscribe through your application, or will you be sending emails using uploaded address lists? It is also helpful to indicate your expected email sending volume.

Once you have submitted this request, it usually takes AWS 1 day to approve this but they may follow up for additional information. Feel free to contact <a href="help@qrvey.com">Qrvey support</a> if you have any questions or need help.

## Final Step
Once the deployment is done and **Verified**, Qrvey’s deployment team will email the following information to you:
* Account Credentials:
  * Business Analytics:
    * API-Key.
  * Admin Portal:
    * Username.
    * Access Key.
  * Data Router:
    * API Key.
    * S3 Bucket.
  * Widgets:
    * Launcher URL.
    * ANView URL.
  * Elasticsearch URL.
* Useful Links:
  * Documentation
  * API reference, Data Router and Widgets Samples.

