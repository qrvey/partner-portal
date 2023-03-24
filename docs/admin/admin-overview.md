---
id: admin-intro
title: Qrvey Admin Overview
sidebar_label: Qrvey Admin Overview
---

<div style={{textAlign: "justify"}}>


Admin Center is one of the two products that are installed with every instance of Qrvey (the other one is [Qrvey Composer](../../ui-docs/composer-overview.md)). It is mainly used to manage and monitor many aspects of the Qrvey Platform. Specifically, it allows Admins to:
<ul style={{listStyleType: 'square'}}>
<li>Create and manage other user accounts</li>
<li>Manage authentication and security</li>
<li>Customize Qrvey Composer options</li>
<li>Manage and monitor the Elasticsearch cluster and other aspects of the infrastructure</li>
<li>Create backups of Qrvey apps that can later be restored<sup>*</sup></li>
</ul>

## Accessing the Admin Center

The link to the <b>Admin Center</b> can be found in the welcome email that is sent to the provided email at the time that the instance is being created. 

![admin-overview](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/ac-overview1.png)

Only users with an Administrator role can access the <b>Admin Center</b>. The first Admin user is defined using AWS IAM. Once one administrator user exists, they can create other admin users from the [User Management](../admin/roles-and-permissions.md) section or continue to create additional admin users in the AWS IAM service, if needed.

## Creating a New Admin User in AWS

Follow these steps In order to create a new User in the AWS IAM service:

### Step 1: Log into the AWS Console
Log into the <a href="https://aws.amazon.com/" target="_blank"> AWS Console</a> using an account that has permissions to create new IAM users.

### Step 2: Navigate to AWS IAM service page
Once you locate the <a href="https://console.aws.amazon.com/iam/home?#/home" target="_blank">AWS IAM</a> service page, click on Users sub-menu option in the left menu.

### Step 3: Create a new IAM user
Enter a username and make sure the “Programmatic Access” checkbox is selected.

### Step 4: Assign the new user to the Qrvey Admin user group
Click on the **Next** button to set permissions. On the permissions tab, make sure the group called “qrvey-admin-dev” is selected.

### Step 5: Download the AccessKeys
Make a note of username and Access Key ID for this user as these values will be used to log into the Admin Center.

<br/>
<sup>*</sup> The concept of Content Deployment is one of the unique features of Qrvey and goes far beyond a simple backup and restore, enabling replication of selected assets with configurations that can be parameterized for different users and instances. To learn about this feature see the Content Deployment section of this user manual. 
</div>