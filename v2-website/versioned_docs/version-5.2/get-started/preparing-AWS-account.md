---
id: preparing-AWS-account
title: Preparing Your AWS Account
sidebar_label: Preparing Your AWS Account
---


Qrvey will deploy to your AWS account using a CloudFormation template. CloudFormation templates enable you to automate the deployment process of the AWS services required to run the Qrvey system. The following steps will walk you through the deployment process.

## Step 1: Create an AWS Account

If you are deploying Qrvey to a new AWS account, please follow these steps. Otherwise, you can jump to Step 2. 

If you already have an AWS Account then you can use AWS Organizations service to create a child AWS Account. 
To create a new account using <a href="https://aws.amazon.com/organizations/">AWS Organizations</a>, follow the steps mentioned <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html"> here </a> and then jump to Step 2 in this document.

Navigate to “https: and click on the **Create an AWS Account** button:

![1_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep1.png#thumbnail)

More information about creating an AWS account can be found here.

Fill out the form with the appropriate information:

-   Root account Email
-   Password
-   Alias to easily reference this account

![2_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep2.png#thumbnail)

Fill out Contact Information:

![3_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep3.png#thumbnail-60)

Enter Payment Information:

![4_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep4.png#thumbnail-60)

Verify Account using Email or Phone number verification. Once done, you should see the following confirmation:
![5_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep5.png#thumbnail-60)

Pick desired Support plan (if needed):
![6_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep6.png#thumbnail)

## Step 2: Create a Cross-Account IAM Role

This is a required step that will create a new IAM role in your AWS account used to deploy the Platform.

1.  Log into AWS Console (using the email and password created in the last step):

![7_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep7.png#thumbnail)

2.  Select your region from the top-left region dropdown:

![8_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep8.png#thumbnail-60)

3.  Navigate to AWS IAM (Identity and Access Management):

![9_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep9.png#thumbnail)

4.  Click on **Roles** Menu group:

![10_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep10.png#thumbnail)

5.  Click on **Create Role** and select **Another AWS Account**. In step 1, enter AWS AccountID that you had received from Qrvey (6381xxxxxxxx):

![11_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep11.png#thumbnail)

6.  Select “AdministratorAccess” in step 2 (this is a high permission but we only need it to be able to deploy all the services we use in Qrvey Platform). You can remove this permission once we have deployed the platform (about 1-2 days).

![12_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep12.png#thumbnail)

7.  In the next step, add as many optional tags as needed:

![13_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep13.png#thumbnail)

8.  In the next step, enter a name for this new role, review all the information and click on **Save**.

![14_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep14.png#thumbnail)

9.  The new role should have been created now. From the Roles list page, click on the name of the role you have just created to see its details. Copy the URL for _Give this link to users who can switch roles in the console_ from the role details page. Save this URL somewhere as you’ll be sending this to Qrvey’s deployment team in the last step.

![15_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep15.png#thumbnail)

## Step 3: Send Info to Qrvey

Please send the following information to Qrvey’s deployment team:

-   AWS IAM Role URL (Step 2)

-   Sample Email Body (to be sent to Qrvey at [help@qrvey.com](mailto:help@qrvey.com))

```



```

## Step 4: Move SES out of Sandbox (Offline)

_AWS enables SES in sandbox mode by default. While you can move SES out of sandbox mode at any time, this step is required to send emails from the Qrvey system._

To move SES out of sandbox mode, you must create a support ticket with AWS. AWS usually takes about 1 day to approve this request so we suggest doing this as soon as possible. Here are the steps to open this support ticket: 

1.  Log into AWS console and navigate to  AWS SES :

![19_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep19.png#thumbnail-60)

2.  Click on the **Request a Sending Limit Increase** button and fill out the form:

![20_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep20.png#thumbnail)

![21_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep21.png#thumbnail)

3.  In the case description, please fully describe your email-sending scenarios. For example, will they only be sent to people who subscribe through your application, or will you be sending emails using uploaded address lists? It is also helpful to indicate your expected email-sending volume.

![22_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep22.png#thumbnail)

Once you have submitted this request, it usually takes AWS 1 day to approve this but they may follow up for additional information. Feel free to contact Qrvey support team through this  form or at [help@qrvey.com](mailto:help@qrvey.com) if you have any questions or need help.

## Final Step

Once the deployment is done and Verified, Qrvey’s deployment team will email the following information to you:

-   Account Credentials:

    -   Business Analytics:
        -   API-Key
    -   Admin Portal:
        -   Username
        -   Access Key
    -   Data Router:
        -   API Key
        -   S3 Bucket
    -   Widgets:
        -   Launcher URL
        -   ANView URL
    -   Elasticsearch URL
-   Useful Links:
    -   Developer Docs
    -    API reference, Data Router and Widgets Samples.
