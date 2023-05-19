---
id: concepts
title: Introduction to Content Deployment
sidebar_label: Introduction to Content Deployment
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
1. [**Servers**](../content-deployment/servers.md) define the source and destination instances.
2. [**Packages**](../content-deployment/packages-and-versions.md) create a snapshot copy of the source application.
3. [**Deployment Definitions**](../content-deployment/definitions.md) specify the content to copy and what to change during the deployment.
4. [**Deployment Jobs**](../content-deployment/jobs.md) specify the recipient users and the destination instances, and they determine the value of all marked tokens for each recipient or group of recipients.

Once these steps are complete, you can run the deployment job. 

For a video tutorial on using Content Deployment, see [Content Deployment](https://partners.qrvey.com/docs/video-training/building-qrvey-sample/content-deployment).

</div>