---
id: overview-of-content-deployment
title: Overview of Content Deployment
sidebar_label: Overview of Content Deployment
tags: [Solution Architect]
sidebar_position: 1
---

<div style={{textAlign: "justify"}}>

Content Deployment is the process of copying content from one application to another, in the same environment or to a different one. Content Deployment is a powerful tool for managing all of the content generated in a multi-tenant deployment. Some examples of where this feature may be used are:
* Copying an application that has been created in a staging environment to the production environment.
* Copying some content, or an entire application created by one user to other users’ accounts.
* Releasing the new additions to a baseline application to multiple tenants of the system.
* Provisioning a copy of a baseline application to multiple tenants of the system.

To open the Content Deployment page in Qrvey Admin Center, click the Content Deployment icon in the left-hand navigation pane:  
![Content Deployment Icon](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/admin/icon-admin-content-deployment.png)

Content Deployment requires you to configure four steps:
1. [**Servers**](../08-Content%20Deployment/servers.md) define the source and destination instances.
2. [**Packages**](../08-Content%20Deployment/packages-and-versions.md) create a snapshot copy of the source application.
3. [**Deployment Definitions**](../08-Content%20Deployment/definitions.md) specify the content to copy and what to change during the deployment.
4. [**Deployment Jobs**](../08-Content%20Deployment/jobs.md) specify the recipient users and the destination instances, and they determine the value of all marked tokens for each recipient or group of recipients.

Once these steps are complete, you can run the deployment job. 

For a video tutorial on using Content Deployment, see [Content Deployment](../../video-training/legacy/content-deployment.md).

</div>