---
id: packages-and-versions 
title: Packages and Versions
sidebar_label: Packages and Versions
---

<div style={{textAlign: "justify"}}>

A package enables you to create a snapshot of a selected application with all of its content and dependencies. Each snapshot is called a “version”. You can use the same package to create subsequent versions. This enables you to create different versions of this snapshot over time, as the source application changes.

Packages and versions give you the ability to “back up” source applications, which you can deploy at a later time - even if the source application has been changed or even removed. 

> **Note**: Packages include all of the objects contained within its source application, but they do not contain the actual data associated with any datasets from the source application.  Rather, the data is loaded when the objects are deployed to the target application, after the deployment job completes. 

## Before you begin
Verify that the desired source and target server connections have been created. For more information, see [Servers](../content-deployment/servers.md).
 
## Create a package
1. In Qrvey Admin Center, click the **Content Deployment** icon in the left-side menu and display the **Packages** tab. 
2. Click **Create Package**. The Package Description page displays. 
3. Enter a package name and description in the fields provided. 
4. Under Content Source, click the **Server** drop-down and select the server to use as the source. 
5. Click the **User** drop-down and select the User that owns the application you wish to include in the package. This list contains only the users with Composer rights on the server. 
6. Click the **Source Application** drop-down and select the application you wish to include in the package. The list of applications available is filtered based on the user you selected previously. The Create New Version button activates, and you may now create a new version. 

## Edit a package
To edit the details of an existing package, click its corresponding three-dot menu in the package list and click **Edit**. 

## Delete a package
To delete an existing package, click its corresponding three-dot menu in the package list and click **Delete**. 

>**Note**: You cannot delete a package if a deployment definition is associated with the package.

## Create a new version
1. In Qrvey Admin Center, click the **Content Deployment** icon in the left-side menu and display the **Packages** tab. 
2. In the list of available packages, select the desired package. The Package Description page displays.  
3. Click **Create New Version**. The Package Version dialog displays. 
4. Enter a version name in the field provided, and click **OK**. A new version of the package is created and displays in the Package Versions list. 

## Edit a version
To edit the name of an existing version, click it’s three-dot menu in the version list and click **Edit**. 

## Delete a version
To delete an existing version, click it’s three-dot menu in the version list and click **Delete**. 

>**Note**: You cannot delete a version if a deployment definition is associated with the version.


</div>