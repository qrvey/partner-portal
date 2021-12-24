---
id: packages-and-versions 
title: Packages and Versions
sidebar_label: Packages and Versions
---

<div style={{textAlign: "justify"}}>


Packages consist of one or more snapshots of any application that have been taken at any given time. Each snapshot is called a “Version”.
Click on the **Packages** link on the navigation bar to see a list of the existing Deployment Packages, their creation and update dates, and their status. A Package remains in Draft status while the provided information is incomplete.

![content_deploy_guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/cd_guide3.png#thumbnail-40)


An existing Package can be selected and modified by clicking on its name or from the **Edit** command in the three-dot menu. It can also be deleted from the **Delete** command on the same menu. If the package has been used in a Deployment Definition, it can no longer be deleted, unless the Deployment Definition is deleted first.
 
Click on the **Create Package** button to start creating one. Pick the server where the intended source application resides, from the list of created servers. This filters down the list of users to those that have a Creator account on the server. 

Choose the user that owns the application that you wish to create a snapshot from. This filters down the list of applications to those that belong to the selected user.

Picking the application from the **Source Application** dropdown list enables the **Create New Version** button, which in turn takes a snapshot of the selected application and lets you name the version. This may take some time, depending on the size of the selected application, but you can continue working in the application as the process runs.

You can give your Package any name and description that helps you find it later. Versions can be deleted and their names can be changed from the three-dot menu. If a Version has been used in a Deployment Definition, it cannot be deleted unless the Deployment Definition is deleted first.

![content_deploy_guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/cd_guide4.png#thumbnail)

Once a Version has been created, the next step in deploying content is to create a <a href="/docs/admin/content-deployment/definition">Deployment Definition</a>.

</div>