---
id: overview-of-content-deployment
title: Overview of Content Deployment
sidebar_label: Overview of Content Deployment
tags: [Solution Architect]
sidebar_position: 1
displayed_sidebar: getting-started
---

In Qrvey, Content Deployment refers to the process of copying content from one application to another, in the same environment or to a different one. Content Deployment is a powerful tool for managing all of the content generated in a multi-tenant deployment.

Examples:
* Copying an application that has been created in a staging environment to the production environment.
* Copying some content, or an entire application created by one user to other users’ accounts.
* Releasing the new additions to a baseline application to multiple tenants of the system.
* Provisioning a copy of a baseline application to multiple tenants of the system.
  
To open the Content Deployment page in Qrvey Admin Center, click the Content Deployment icon in the left-hand navigation pane:  
![Content Deployment Icon](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/admin/icon-admin-content-deployment.png)

Content Deployment entails the following steps:

1. Create the source and target [**servers**](../08-Content%20Deployment/servers.md).
2. [**Create a package and version**](../08-Content%20Deployment/packages-and-versions.md) of the source application.
3. [**Create a Deployment Definition**](../08-Content%20Deployment/definitions.md) to specify the content to copy and what to change during the deployment.
4. [**Create a Deployment Job**](../08-Content%20Deployment/jobs.md) to specify the recipient users and the destination instances, and they determine the value of all marked tokens for each recipient or group of recipients.
5. Finally, [**run a Deployment Job**](../08-Content%20Deployment/jobs.md) to populate the target application with content.

> **Video Tutorial**  
For video instructions, please watch our [Content Deployment Tutorial](../../video-training/legacy/content-deployment.md).

> **API-Based "Automated" Content Deployment**  
For more automated Content Deployment using the Qrvey API, please read: [Automated Content Deployment - Segregated Data](../08-Content%20Deployment/automated-CD-segregated.md) and [Automated Content Deployment - Commingled Data](../08-Content%20Deployment/automated-CD-commingled.md).