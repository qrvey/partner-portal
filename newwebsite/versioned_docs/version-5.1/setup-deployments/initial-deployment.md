---
id: setup-initial-deployment
title: Setup Initial Deployment
sidebar_label: Setup Initial Deployment
---
<div style={{textAlign: "justify"}}/>

## Step 1: Create an AWS Account

Navigate to “https:” and click on the “Create an AWS Account” button

![img1](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/1.1.CreateAWSAccount.png#thumbnail-80)

More information about creating an AWS account can be found here:



Fill out the form with appropriate information 

-   Root account Email
-   password 
-   Alias to easily reference this account

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/1.2.CreateAWSAccount.png#thumbnail-80)
Fill out Contact Information

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/1.3.CreateAWSAccount.png#thumbnail-80)

Enter Payment Information

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/1.4.CreateAWSAccount.png#thumbnail-80)

Verify Account using Email or Phone number verification. Once done you should see the following confirmation

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/1.5.CreateAWSAccount.png#thumbnail-80)

Pick desired Support plan (if needed)

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/1.6.CreateAWSAccount.png#thumbnail-80)

## Step 2: Create a cross account IAM role

This step will create a new IAM role in your AWS account that Qrvey will use to deploy the Platform.

Login to AWS Console (using the email and password created in last step)

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/2.1.CreateIAMUser.png#thumbnail-80)

Select “N.Virginia” region from Top left region dropdown

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/2.2.CreateIAMUser.png#thumbnail-80)

Navigate to AWS IAM (Identity and Access Management)

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/2.3.CreateIAMUser.png#thumbnail-80)

Click on "Roles" Menu group

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/2.4.CreateIAMRole.png#thumbnail-80)

Click on "Create Role" and select "Another AWS Account" in step 1
Enter AWS AccountID that you received from Qrvey (_6381xxxxxxxx_)

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/2.5.CreateIAMRole.png#thumbnail-80)

Select “AdministratorAccess” in step 2(this is a high permission but we only need to be able to deploy all the services we use in Qrvey Platform). You will be able to remove this permission once we have deployed the platform (about 1-2 days)

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/2.6.CreateIAMRole.png#thumbnail-80)

In the next step, add any optional tags as needed

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/2.7.CreateIAMRole.png#thumbnail-80)

In the next step enter a name for this new role and review all the information and click on save.

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/2.8.CreateIAMRole.png#thumbnail-80)

New role should have been created now. From the Roles list page click on the name of the role you just created to see its details. From the role details page copy the URL for _Give this link to users who can switch roles in the console_. Save this url somewhere as you’ll be sending this to Qrvey’s deployment team in the last step.

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/2.9.CreateIAMRole.png#thumbnail-80)

## Step 3: Identify an Email Address

This email address will be used as “From” field for all emails that will be sent from Qrvey Platform. You can use any valid email address for this. If you don’t have one we’ll use “hello+@qrvey.com”

If you decide to use “hello+@qrvey.com” email address then go ahead and skip to Step 4. 

Otherwise for your own email address, please verify the email in AWS SES Console by following the steps below

Login to AWS console and navigate to [AWS SES](https://aws.amazon.com/ses/). Make sure you are in Northern Virginia region.

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/3.1.IdentifyEmailAddress.png#thumbnail-80)

Click on “Email Addresses” option in left menu bar and then click on “Verify a New Email Address”

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/3.2.IdentifyEmailAddress.png#thumbnail-80)

Enter the email address and click on the button to verify. This will send an email to this address with a link to verify the ownership. Once it’s verified the email address will have the “verified” status

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/3.3.IdentifyEmailAddress.png#thumbnail-80)

## Step 4: Identify a URL

We’ll be using 3 URLs (one for each product) to launch the application once it’s deployed. You can use the default “qrvey.com” domain and in that case you don’t have to do anything else. Here’s a sample of the URLs that we’ll use by default

-   Application URL: .qrvey.com
-   DataRouter URL: -datarouter.qrvey.com
-   Admin URL: -admin.qrvey.com

If you are using “qrvey.com” URL then you can skip to Step 5.

If you would prefer to use your own custom domain (instead of qrvey.com) we would need the full Application URLs. During deployment we would create a free SSL certificate for you using AWS Certificate Manager. When we create the certificate we’ll send you some CNAME records to be added with your DNS provider. You can find more information about this at

[AWS Certification Manager](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html)

[DNS Validation](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html)

## Step 5: Send Info to Qrvey

Please send the following information to Qrvey’s deployment team

Email Address (Step 3)
Application URL (Step 4)
AWS IAM Role URL (Step 2)

Sample Email Body (to be sent to Qrvey at [help@qrvey.com](mailto:help@qrvey.com))

```



```

## Step 6: Move SES out of Sandbox (Offline)

_If you prefer, this step can be done later as it does not stop the deployment process. Note however that until this is done your instance of the Qrvey Platform will not be able to send out any emails._ 

This step requires creating a support ticket with AWS to move SES in your account out of Sandbox mode. AWS usually takes about 1 day to approve this request so its advised to do this as soon as possible. Here are the steps to open this support ticket

Login to AWS console and navigate to [AWS SES](http://aws.amazon.com/ses)

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/6.1.MoveSESOutOfSandbox.png#thumbnail-80)

Click on “Request a Sending Limit Increase” button and fill out the form

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/6.2.MoveSESOutOfSandbox.png#thumbnail-80)

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/6.3.MoveSESOutOfSandbox.png#thumbnail-80)

In the case description please fully describe your email sending scenarios. For example, will they only be sent to people who subscribe through your application, or will you be sending emails using uploaded address lists. It is also helpful to indicate your expected email sending volume.

![alt text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/initial-deployment/6.4.MoveSESOutOfSandbox.png#thumbnail-80)

Once you submit this request, it usually takes AWS 1 day to approve this but they may ask more questions. Feel free to contact us if you have any questions or need help.

## Final Step

Once deployment is done and Verified, Qrvey’s deployment team will email the following information to you

-   **Account Credentials:**
    -   **Business Analytics:**
        -   API-Key.
    -   **Admin Portal:**
        -   Username.
        -   Access Key.
    -   **Data Router:**
        -   API Key.
        -   S3 Bucket.
    -   **Widgets:**
        -   Launcher URL.
        -   ANView URL.
    -   **Elasticsearch URL.**
-   **Useful Links:**
    -   Developer Docs
    -   API reference for Business Analytics, Data Router and Widgets Samples.
