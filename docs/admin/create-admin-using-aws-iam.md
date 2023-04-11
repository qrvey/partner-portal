---
id: create-admin-using-aws-iam
title: Create a Qrvey Administrator Account in AWS IAM
sidebar_label: Create a Qrvey Administrator Account in AWS IAM
---

<div style={{textAlign: "justify"}}>

The initial Qrvey Administrator account was created when your instance of Qrvey platform was created. You may create additional Administrator accounts using the [User Management](../admin/admin-managing-users.md) feature in Qrvey Admin Center. You also have the option to create a Qrvey Administrator account in the AWS IAM service. 

To create a new Administrator account in the AWS IAM service:

1. Log into the <a href="https://aws.amazon.com/" target="_blank"> AWS Console</a> using an account that has permissions to create new IAM users.

2. Navigate to <a href="https://console.aws.amazon.com/iam/home?#/home" target="_blank">AWS IAM service page</a>, and then click on the **Users** sub-menu option in the left menu.

3. Create a new IAM user. Enter a username and select the **Programmatic Access** checkbox.

4. Assign the new user to the Qrvey Admin user group. Click the **Next** button to set permissions. On the permissions tab, select the group called **qrvey-admin-dev**.

5. Download the AccessKeys. Make a note of username and Access Key ID for this user. Use these values to log into the Admin Center.

</div>