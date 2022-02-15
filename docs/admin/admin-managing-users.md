---
id: admin-managing-users
title: Admin User Management
sidebar_label: Admin User Management
---

<div style={{textAlign: "justify"}}>

The Qrvey Platform Administrator Portal is used to manage and monitor other aspects of the Qrvey Platform. Specifically, it allows Admins to:
* Manage Creator accounts.
* Customize the Business Analytics application.
* Monitor Data Router resources.
* Customize and Manage the Data Router configuration.
* Share created Apps on different servers or installations.


## Create a New Admin User

Admin users are defined using AWS IAM. To provide access to the Administrator Portal, you’ll have to create a new User in the AWS IAM service. Here are the steps:

### Step 1: Login to AWS Console#
Log into the <a href="https://aws.amazon.com/" target="_blank"> AWS Console using an account that has permissions to create new IAM users.

### Step 2: Navigate to AWS IAM service page#
Once you locate the <a href="https://console.aws.amazon.com/iam/home?#/home" target="_blank">AWS IAM</a> service page, click on Users sub-menu option in the left menu.

### Step 3: Create a new IAM user#
Enter a username and make sure the “Programmatic Access” checkbox is selected.

### Step 4: Assign new user to Qrvey Admin user group#
Click on the **Next** button to set permissions. On the permissions tab, make sure the group called “qrvey-admin-dev” is selected.

### Step 5: Download the AccessKeys#
Make a note of username and Access Key ID for this user as these values will be used to Log into the Administrator Portal

### Step 6: Navigate to the Administrator Portal#
Use the username and Access Key ID to log in.


</div>