---
id: preparing-AWS-account
title: Preparing Your AWS Account
sidebar_label: Preparing Your AWS Account
---

<div style={{textAlign: "justify"}}>

Qrvey will deploy to your AWS account using a CloudFormation template. CloudFormation templates enable you to automate the deployment process of the AWS services required to run the Qrvey system. The following steps will walk you through the deployment process.


## Step 1: Create an AWS Account

If you are deploying Qrvey to a new AWS account, please follow these steps. Otherwise, you can jump to Step 2. 

If you already have an AWS Account then you can use AWS Organizations service to create a child AWS Account. 
To create a new account using <a href="https://aws.amazon.com/organizations/">AWS Organizations</a>, follow the steps mentioned <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html"> here </a> and then jump to Step 2 in this document.

Navigate to “https://aws.amazon.com” and click on the **Create an AWS Account** button:

![1_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep1.png#thumbnail)

More information about creating an AWS account can be found <a href="https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/?icmpid=support_rt_kc_articles">here</a>.

Fill out the form with the appropriate information:
* Root account Email
* Password
* Alias to easily reference this account

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
This is a required step if the Qrvey team is going to do the deployment. You can skip this step if you are deploying on your own. This step will create a new IAM role in your AWS account used to deploy the Platform.

1. Log into AWS Console (using the email and password created in the last step):

![7_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep7.png#thumbnail)


2. Select your region from the top-left region dropdown:

![8_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep8.png#thumbnail-40)


3. Navigate to AWS IAM (Identity and Access Management):

![9_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep9.png#thumbnail)


4. Click on **Roles** Menu group:

![10_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep10.png#thumbnail)

5.Click on **Create Role** and select **Another AWS Account** in step 1. Enter the AWS AccountID that you received from Qrvey (6381xxxxxxxx). We recommend checking the *Require MFA* option for this role. This will ensure that anyone accessing your AWS account from Qrvey’s environment would use MFA for login.


![11_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep11.png#thumbnail)

6. Select “AdministratorAccess” in step 2 (this is a high permission but we only need it to be able to deploy all the services we use in Qrvey Platform). You can remove this permission once we have deployed the platform (about 1-2 days). If you prefer to provide limited access for deployment you can use the permissions listed in the [policy document here](https://qrvey-autodeployapp.s3.amazonaws.com/QrveySupportPolicy/deploymentIAMPermissions.json).


![12_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep12.png#thumbnail)

7. In the next step, add as many optional tags as needed:

![13_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep13.png#thumbnail)

8. In the next step, enter a name for this new role, review all the information and click on **Save**.

![14_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep14.png#thumbnail)

9. The new role should have been created now. From the Roles list page, click on the name of the role you have just created to see its details. Copy the URL for *Give this link to users who can switch roles in the console* from the role details page. Save this URL somewhere as you’ll be sending this to Qrvey’s deployment team in the last step.

![15_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep15.png#thumbnail)


## Step 3: (Optional) Create a new VPC
The Qrvey platform can be deployed into your existing VPC and subnets, and it supports different combinations of Public and Private subnets. To keep things simple, we recommend using the Default VPC or create a new VPC using the wizard. Follow these steps to create a new VPC in your AWS account: 
1. Log in to the AWS console. Verify that your user account has sufficient permissions to create a VPC and related resources.
2. Select the region from the dropdown (top right of console) where Qrvey platform will be deployed.
3. Navigate to the AWS VPC Service Console. 

  ![Step3.3](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/Step3.3-VPC-console.png)

4. Click **Create VPC** to open the Create VPC wizard.

  ![Step3.4](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/Step3.4-VPC-Wizard.png)

5. Select the following options:
    - **Resources to create**: select **VPC and more**.
    - **Name tag auto-generation**: Enter any name for your reference.
    - **IPv4 CIDR block**: Select a unique CIDR block. Make sure the CIDR block would not overlap with any other VPC, in case you plan to set up VPC Peering for database connection. Minimum CIDR range required is **/26**.
    - **Number of Availability Zones (AZs)**: Select 2 or more.
    - **Customize AZs**: You can change the AZs or leave them as default.
    - **Number of public subnets**: Select the value that matches the number of AZs.
    - **Number of private subnets**: Select at least 2 if you plan to use private subnets to connect to your database (using VPC Peering or similar).
    - **Customize subnets CIDR block**: Change the settings or leave them as default.
    - **NAT gateways ($)**: If you have private subnets, select at least one AZ (for production environments, we recommend one per AZ for high availability).
    - You can leave the rest as default. Verify the settings and click **Create VPC**.

    ![Step3.5](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/Step3.5-VPC-Settings.png)

6. Wait for the VPC to be created.

![Step3.6](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/Step3.6-VPC-Created.png)

7. Navigate to the **Subnets** tab in the VPC console and filter the list by the VPC.

8. For each subnet in the list, update the **Auto-assign public IPv4 address** flag to **True**.
    - Select a subnet, click the **Actions** dropdown, and select **Edit subnet settings**.

    ![Step3.8.a](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/Step3.8.a-VPC-Subnet-action.png)

    - Select **Enable auto-assign public IPv4 address**, and then click **Save**.

    ![Step3.8.b](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/Step3.8.b-VPC-Subnet-IPv4.png)


## Step 4: Send Info to Qrvey
Please send the following information to Qrvey’s deployment team:
* AWS IAM Role URL (Step 2)

* Sample Email Body (to be sent to Qrvey at help@qrvey.com)

```
IAM Crossaccount role URL: https://signin.aws.amazon.com/switchrole?roleName=QrveyxxxxxRole&account=9653xxxxxxxx
```

## Step 5: Move SES out of Sandbox (Offline)
*AWS enables SES in sandbox mode by default. While you can move SES out of sandbox mode at any time, this step is required to send emails from the Qrvey system.*

To move SES out of sandbox mode, you must create a support ticket with AWS. AWS usually takes about 1 day to approve this request so we suggest doing this as soon as possible. Here are the steps to open this support ticket: 

1. Log into AWS console and navigate to <a href="http://aws.amazon.com/ses"> AWS SES </a>:

![19_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep19.png#thumbnail)

2. Click on the **Request a Sending Limit Increase** button and fill out the form:

![20_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep20.png#thumbnail)

![21_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep21.png#thumbnail)

3. In the case description, please fully describe your email-sending scenarios. For example, will they only be sent to people who subscribe through your application, or will you be sending emails using uploaded address lists? It is also helpful to indicate your expected email-sending volume.

![22_preparing_AWS](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/aws_prep22.png#thumbnail)

Once you have submitted this request, it usually takes AWS 1 day to approve this but they may follow up for additional information. Feel free to contact Qrvey support team through this <a href="/docs/faqs/ask-us/"> form</a> or at help@qrvey.com if you have any questions or need help.

## Final Step
Once the deployment is done and Verified, Qrvey’s deployment team will email the following information to you:

* Account Credentials:

  * Composer:
    * API-Key
  * Admin Portal:
    * Username
    * Access Key
  * Data Router:
     * API Key
     * S3 Bucket
  * Widgets:
     * Launcher URL
     * ANView URL
  * Elasticsearch URL
* Useful Links:
    * [Developer Docs](../get-started/architecture.md)
    * [API reference](../embedding/api/intro.md) and [Widgets Samples](../embedding/widgets/intro.md).

</div>