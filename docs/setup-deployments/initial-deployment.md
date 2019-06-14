---
id: setup-initial-deployment
title: Setup Initial Deployment
sidebar_label: Setup Initial Deployment
---

<style>
img[src*="#thumbnail"] {
   width:80%;
   border: 1px solid black;
}
</style>

<div style="text-align: justify">

## Step 1: Create an AWS Account
Navigate to “<https://aws.amazon.com>” and click on “Create an AWS Account” button

![img1](assets/initial-deployment/1.1.CreateAWSAccount.png#thumbnail)

More information about creating an AWS account can be found here

<https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/?icmpid=support_rt_kc_articles>
Fill out the form with appropriate information 

* Root account Email
* password 
* Alias to easily reference this account

![alt text](assets/initial-deployment/1.2.CreateAWSAccount.png#thumbnail)
Fill out Contact Information

![alt text](assets/initial-deployment/1.3.CreateAWSAccount.png#thumbnail)

Enter Payment Information

![alt text](assets/initial-deployment/1.4.CreateAWSAccount.png#thumbnail)

Verify Account using Email or Phone number verification. Once done you should see the following confirmation

![alt text](assets/initial-deployment/1.5.CreateAWSAccount.png#thumbnail)

Pick desired Support plan (if needed)

![alt text](assets/initial-deployment/1.6.CreateAWSAccount.png#thumbnail)
## Step 2: Create an IAM user
This step will create a new User in your AWS account that Qrvey will use to deploy the Platform.
 
Login to AWS Console (using the email and password created in last step)

![alt text](assets/initial-deployment/2.1.CreateIAMUser.png#thumbnail)

Select “N.Virginia” region from Top left region dropdown

![alt text](assets/initial-deployment/2.2.CreateIAMUser.png#thumbnail)

Navigate to AWS IAM (Identity and Access Management)

![alt text](assets/initial-deployment/2.3.CreateIAMUser.png#thumbnail)

Click on “Users” Menu group

![alt text](assets/initial-deployment/2.4.CreateIAMUser.png#thumbnail)

Click on Add User

![alt text](assets/initial-deployment/2.5.CreateIAMUser.png#thumbnail)

Enter a username (we recommend using *Qrvey* but you can use any username)
Select Programmatic Access and Console Access

![alt text](assets/initial-deployment/2.6.CreateIAMUser.png#thumbnail)

In the next step, create a Default group that will be assigned to this user. This group does not need any permissions but will be used by Admin App to allow users to sign in to the App (Admin App). 

![alt text](assets/initial-deployment/2.7.CreateIAMUser.png#thumbnail)

Click on Create Group and name the group as “qrvey-admin-app”. No permissions are needed for this group.

![alt text](assets/initial-deployment/2.8.CreateIAMUser.png#thumbnail)

Click on Create Group to go back to Add User wizard.

![alt text](assets/initial-deployment/2.9.CreateIAMUser.png#thumbnail)

(Optional) add any tags if needed

![alt text](assets/initial-deployment/2.10.CreateIAMUser.png#thumbnail)

Review the information and click on Create User.

![alt text](assets/initial-deployment/2.11.CreateIAMUser.png#thumbnail)

New user should have been created now. Click on “Download .csv” to download all credentials at this point. These credentials have to be downloaded from this screen as they are not available after this point. If credentials are not download please remove the user and go through the steps again (Creating a new user). Store this file in a location as you’ll be sending this to Qrvey’s deployment team in the last step.

![alt text](assets/initial-deployment/2.12.CreateIAMUser.png#thumbnail)

Go back to Users page and click on the newly created user (Qrvey)

![alt text](assets/initial-deployment/2.13.CreateIAMUser.png#thumbnail)

Click on “Add Permissions” button and Select “Attach existing policies directly”

![alt text](assets/initial-deployment/2.14.CreateIAMUser.png#thumbnail)

Select “AdministratorAccess” (this is a high permission but we only need to be able to deploy all the services we use in Qrvey Platform). You will be able to remove this permission once we have deployed the platform (about 1-2 days)

![alt text](assets/initial-deployment/2.15.CreateIAMUser.png#thumbnail)

Review and Save the permission

![alt text](assets/initial-deployment/2.16.CreateIAMUser.png#thumbnail)

## Step 3: Identify an Email Address 
This email address will be used as “From” field for all emails that will be sent from Qrvey Platform. You can use any valid email address for this. If you don’t have one we’ll use “hello+<companyname>@qrvey.com”

If you decide to use “hello+<companyname>@qrvey.com” email address then go ahead and skip to Step 4. 

Otherwise for your own email address, please verify the email in AWS SES Console by following the steps below

Login to AWS console and navigate to [AWS SES](https://aws.amazon.com/ses/). Make sure you are in Northern Virginia region.

![alt text](assets/initial-deployment/3.1.IdentifyEmailAddress.png#thumbnail)

Click on “Email Addresses” option in left menu bar and then click on “Verify a New Email Address”

![alt text](assets/initial-deployment/3.2.IdentifyEmailAddress.png#thumbnail)

Enter the email address and click on the button to verify. This will send an email to this address with a link to verify the ownership. Once it’s verified the email address will have the “verified” status

![alt text](assets/initial-deployment/3.3.IdentifyEmailAddress.png#thumbnail)

## Step 4: Identify a URL
We’ll be using 3 URLs (one for each product) to launch the application once it’s deployed. You can use the default “qrvey.com” domain and in that case you don’t have to do anything else. Here’s a sample of the URLs that we’ll use by default

* Application URL: <companyName>.qrvey.com
* DataRouter URL: <companyName>-datarouter.qrvey.com
* Admin URL: <companyName>-admin.qrvey.com

If you are using “qrvey.com” URL then you can skip to Step 5.

If you would prefer to use your own custom domain (instead of qrvey.com) we would need the full Application URLs. During deployment we would create a free SSL certificate for you using AWS Certificate Manager. When we create the certificate we’ll send you some CNAME records to be added with your DNS provider. You can find more information about this at

[AWS Certification Manager](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html)

[DNS Validation](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html)

## Step 5: Send Info to Qrvey
Please send the following information to Qrvey’s deployment team

Email Address (Step 3)
Application URL (Step 4)
AWS IAM Credentials file (Step 2)

Sample Email

![alt text](assets/initial-deployment/5.1.SendInfoToQrvey.png#thumbnail)

## Step 6: Move SES out of Sandbox (Offline)
This step can be done offline and is required before Qrvey Platform can send out any emails but does not stop the deployment process. This step requires creating a support ticket with AWS to move SES in your account out of Sandbox mode. AWS usually takes about 1 day to approve this request so its advised to do this as soon as possible. Here are the steps to open this support ticket

Login to AWS console and navigate to [AWS SES](http://aws.amazon.com/ses)

![alt text](assets/initial-deployment/6.1.MoveSESOutOfSandbox.png#thumbnail)

Click on “Request a Sending Limit Increase” button and fill out the form

![alt text](assets/initial-deployment/6.2.MoveSESOutOfSandbox.png#thumbnail)

![alt text](assets/initial-deployment/6.3.MoveSESOutOfSandbox.png#thumbnail)

![alt text](assets/initial-deployment/6.4.MoveSESOutOfSandbox.png#thumbnail)

Once you submit this request, it usually takes AWS 1 day to approve this but they may ask more questions. Feel free to contact us if you have any questions or need help.

## Final Step
Once deployment is done and Verified, Qrvey’s deployment team will email the following information to you

* **Account Credentials:**
	* **Business Analytics:**
		* API-Key.
	* **Admin Portal:**
		* Username.
		* Access Key.
	* **Data Router:**
		* API Key.
		* S3 Bucket.
	* **Widgets:**
		* Launcher URL.
		* ANView URL.
	* **Elasticsearch URL.**
* **Useful Links:**
	* Developer Docs
	* API reference for Business Analytics, Data Router and Widgets Samples.



