---
id: admin-managing-users
title: Admin User Management
sidebar_label: Admin User Management
---

<div style={{textAlign: "justify"}}>

The Qrvey Platform Administrator Portal is used to manage and monitor other aspects of the Qrvey Platform. Specifically, it allows Admins to:

*   Manage Creator accounts.
*   Customize the Business Analytics application.
*   Monitor Data Router resources.
*   Customize and Manage the Data Router configuration.
*   Share created Apps on different servers or installations.

## Create a New Admin User

Admin users are defined using AWS IAM. To provide access to the Administrator Portal, you’ll have to create a new User in the AWS IAM service. Here are the steps:

### Step 1: Login to AWS Console

_Log into the [AWS Console](https://aws.amazon.com/) using an account that has permissions to create new IAM users._

### Step 2: Navigate to AWS IAM service page

_Once you locate the [AWS IAM](https://console.aws.amazon.com/iam/home?#/home) service page, click on Users sub-menu option in the left menu._

### Step 3: Create a new IAM user

_Enter a username and make sure the “Programmatic Access” checkbox is selected._

### Step 4: Assign new user to Qrvey Admin user group

_Click on **Next** button to set permissions. On the permissions tab, make sure the group called “qrvey-admin-dev” is selected_.

### Step 5: Download the AccessKeys

_Make a note of username and Access Key ID for this user as these values will be used to Log into the Administrator Portal_

### Step 6: Navigate to the Administrator Portal

_Use the username and Access Key ID to log in._

</div>