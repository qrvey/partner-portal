---
id: admin-managing-users
title: Admin User Management
sidebar_label: Admin User Management
---

<div style={{textAlign: "justify"}}>

Admin Center is used to manage and monitor many aspects of the Qrvey Platform. Specifically, it allows Admins to:
* Create and manage user accounts.
* Customize the Qrvey Composer application.
* Monitor and manage the infrastructure.
* Share created Apps on different servers.



## Creating a New Admin User

The first Admin user is defined using AWS IAM. Once one administrator user exists, they can create other admin users from the [User Management](../admin/roles-and-permissions.md) section or continue to create additional admin users in the AWS IAM service, if needed. Here are the steps for creating the an admin user through the AWS IAM service:

### Step 1: Login to AWS Console#
Log into the <a href="https://aws.amazon.com/" target="_blank"> AWS Console</a> using an account that has permissions to create new IAM users.

### Step 2: Navigate to AWS IAM service page#
Once you locate the <a href="https://console.aws.amazon.com/iam/home?#/home" target="_blank">AWS IAM</a> service page, click on Users sub-menu option in the left menu.

### Step 3: Create a new IAM user#
Enter a username and make sure the “Programmatic Access” checkbox is selected.

### Step 4: Assign new user to Qrvey Admin user group#
Click on the **Next** button to set permissions. On the permissions tab, make sure the group called “qrvey-admin-dev” is selected.

### Step 5: Download the AccessKeys#
Make a note of username and Access Key ID for this user as these values will be used to log into the Administrator Center.

### Step 6: Navigate to the Administrator Center#
Use the username and Access Key ID to log in.


</div>