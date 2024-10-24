---
id: admin-center-intro
title: Introduction
sidebar_label: Introduction
tags: [Solution Architect]
sidebar_position: 1.1
displayed_sidebar: getting-started
---

Qrvey Admin Center is a web-based application used by administrators to manage and monitor the [Qrvey platform](../getting-started/intro-to-qrvey.md). It is installed with every instance of the Qrvey platform along with Qrvey Composer.

## Structure

The Admin Center is comprised of the following sections.

* **[Customize Qrvey Composer](../admin/customizing-qrvey-composer.md)**. Use the Qrvey Admin Center to configure general settings of Qrvey Composer, including customizing its appearance. You can also enable and disable specific features available to users of Qrvey Composer.

* **[Health Dashboard](../admin/health-dashboard.md)**. View the status of the Elasticsearch cluster in this instance of the Qrvey platform.

* **[Users, Roles, & Permissions](../admin/managing-users.md)**. Create and manage user accounts in Qrvey Composer, assign roles and permissions, and set up authentication methods.
  * **[Using Google as the OpenID Provider](../admin/openid-google.md)**
  * **[Using OAuth as the OpenID Provider](../admin/openid-auth0.md)**

* **[Elasticsearch Management](../admin/elasticsearch-management.md)**. Describes how to monitor and manage the Elasticsearch cluster. 

* **[Content Deployment](../admin/08-Content%20Deployment/overview-of-content-deployment.md)**. Learn how to use the Content Deployment feature to copy content from one Qrvey application to another, in the same environment or to a different one. 



## How to Access The Admin Center

Qrvey Admin Center is a web-based application that is installed with every instance of the Qrvey platform. You must have an account with the Administrator role to access Qrvey Admin. 

1. Get the Link and Account Credentials.  
  The link to open the Qrvey Admin Center and the initial Administrator account was provided to your organization when your instance of the Qrvey platform was created. You can find this information in the Welcome email:

![admin-overview](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/ac-overview1.png)

2. Create a Qrvey Administrator Account.  
  You can create a new Administrator account using either of the following methods:
- In Qrvey Admin Center, use the [User Management](./managing-users.md) feature to assign an account the Administrator role (recommended)
- [Create a Qrvey Administrator Account in the AWS IAM Service](create-admin-using-aws-iam.md)


## Create Admin Account in AWS IAM

The initial Qrvey Administrator account was created when your instance of Qrvey platform was created. You may create additional Administrator accounts using the [User Management](./managing-users.md) feature in Qrvey Admin Center. You also have the option to create a Qrvey Administrator account in the AWS IAM service. 

To create a new Administrator account in the AWS IAM service:

1. Log into the <a href="https://aws.amazon.com/" target="_blank"> AWS Console</a> using an account that has permissions to create new IAM users.

2. Navigate to <a href="https://console.aws.amazon.com/iam/home?#/home" target="_blank">AWS IAM service page</a>, and then click on the **Users** sub-menu option in the left menu.

3. Create a new IAM user. Enter a username and select the **Programmatic Access** checkbox.

4. Assign the new user to the Qrvey Admin user group. Click the **Next** button to set permissions. On the permissions tab, select the group called **qrvey-admin-dev**.

5. Download the AccessKeys. Make a note of username and Access Key ID for this user. Use these values to log into the Admin Center.


<!-- 
* **[Accessing Qrvey Admin Center](../admin/accessing-admin-center.md)**. Describes how to access the Qrvey Admin Center, including how to create Qrvey Administrator accounts. 

* **[Customizing Qrvey Composer](../admin/customizing-qrvey-composer.md)**. Use the Qrvey Admin Center to configure general settings of Qrvey Composer, including customizing its appearance. You can also enable and disable specific features available to users of Qrvey Composer.
  * **[Using Google as the OpenID Provider](../admin/openid-google.md)**
  * **[Using OAuth as the OpenID Provider](../admin/openid-auth0.md)**

* **[Health Dashboard](../admin/health-dashboard.md)**. View the status of the Elasticsearch cluster in this instance of the Qrvey platform.

* **[Managing Users of Qrvey Composer](../admin/managing-users.md)**. Create and manage user accounts in Qrvey Composer, assign roles and permissions, and set up authentication methods. 

* **[Elasticsearch Management](../admin/elasticsearch-management.md)**. Describes how to monitor and manage the Elasticsearch cluster. 

* **[Content Deployment](../admin/08-Content%20Deployment/overview-of-content-deployment.md)**. Learn how to use the Content Deployment feature to copy content from one Qrvey application to another, in the same environment or to a different one. 

  -->