---
id: deleting-installation
title: Deleting an Installation
sidebar_label: Deleting an Installation
tags: [CloudOps Engineer]
sidebar_position: 8
---

<div>

Deleting a deployment will remove all the metadata and data stored in Qrvey Platform. And the only way to recover the data would be from a backup but the application URLs and API keys will change as you would be restoring the backup in a new instance.

Follow these steps to delete an instance.

1. Create a new CloudFormation stack in the same region where Qrvey Platform was deployed using the Qrvey Deployment Manager CloudFormation template URL. If the stack already exists then skip to Step 2. We recommend using the URL that matches the version of Qrvey platform you have installed. You can find the current version from Composer or Admin Center UI (top right menu for profile)
    * Enter a name for this stack.
    * Pick the Subnets and VPC ID that you picked during deployment. If you are just deleting and not planning to deploy another instance from this app, you can pick any public subnets in a single VPC here.
    * Starting with V7.8 there is a parameter called **“AllowDelete”**. If you are planning to remove this instance then make sure to set its value to **True**.
    * If you are using the Advanced version of the template then make sure to set the parameter called **“QrveyInstanceName”** to the name that was used for initial deployment.
    * Enter a CIDR value for the IP addresses you would like to permit to access the deployment manager.

2. Once the cloudFormation stack is deployed, get the application URL from the output tab of that stack. Launch this URL in a new window

3. Click on the **Delete** button and confirm. The delete process will take about 1 hr to finish and you’ll receive an email once it’s done,

4. Once the delete is complete and you receive the email, you can remove the CloudFormation stack you created in Step 1.


</div>