---
id: column-level-security
title: Column Level Security
sidebar_label: Column Level Security
tags: [Software Developer, Solution Architect]
sidebar_position: 2
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

## Overview

Column Level Security (CLS) allows administrators to restrict data access at the column level within a dataset to users belonging to one or more predefined roles.  Users must be members of at least one of the assigned roles for CLS in order to see data for that column and reference it within any of the supported embedded widgets.  CLS is only supported for embedded widgets at this time and only for the following UI components:

* [Dashboard View](../04-Embedding%20Qrvey%20Widgets/07-Widgets/dashboard-view.md)
* [Dashboard Builder](../04-Embedding%20Qrvey%20Widgets/07-Widgets/dashboard-builder.md)
* [Reports](../04-Embedding%20Qrvey%20Widgets/07-Widgets/pixel-perfect-reports.md)

Column Level Security is particularly useful for hiding entire columns of data from specific groups and/or types of users, and may also help eliminate the need to create separate datasets for specific groups of users.  Enabling CLS is a three-step process:

1. **Defining User Roles**:  Roles must be predefined within the platform in order to lock down specific columns of a dataset by user role.  All users have access to all columns within a dataset by default.

2. **Applying CLS to Datasets**:  Column Level Security must be explicitly set for each column of a dataset using a series of API endpoints.  This step must be performed through API calls.

3. **Using CLS with Security Tokens**:  Developers embedding content with Qrvey’s user widget model must explicitly reference one or more of the predefined user roles within the JSON configuration object for that widget.

The next section provides more detail around the process outlined above, and offers a step-by-step guide for configuring CLS on a dataset.

## Configuring Column Level Security
### Step 1:  Create the User Role(s)

This step must be performed by a user with administrator credentials.  Log in to the Admin Center and navigate to the Roles & Permissions UI.  At least one user role must be defined here to use with Column Level Security.

![column-level-security](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Column-Level-Security/cls1.png#thumbnail) 

For more information about creating user roles in the Admin Center, please refer to the <a href="/docs/admin/roles-and-permissions/">Users & Permissions</a> article.

> **Note**:  You should not use the predefined system “Administrators” and “Composers” roles for CLS. 

### Step 2:  Apply CLS to Dataset(s)

Applying Column Level Security to a dataset requires making calls to the following API endpoints:

* <a href="https://qrvey.stoplight.io/docs/qrvey-api-doc/2ff17959232b9-get-dataset">Get Dataset (HTTP GET)</a>
* <a href="https://qrvey.stoplight.io/docs/qrvey-api-doc/c559f406c921b-update-dataset">Update a Dataset (HTTP PUT)</a>
* <a href="https://qrvey.stoplight.io/docs/qrvey-api-doc/94b9bad59a2cc-apply-changes">Apply Changes (HTTP POST)</a>

The “Get a Dataset” endpoint will return the complete dataset definition for a specific dataset in JSON format, which can then be modified to include the Column Level Security access roles.  The property to modify for CLS is called “accessRoles” and is found in the “columns” child object.  Define the “accessRoles” property if it does not exist, and then set the property value to the name of the user role.  You can optionally set the “accessRoles” property to an array of comma-delimited role names.

![column-level-security](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Column-Level-Security/cls2.png#thumbnail-60) 


First, make a call to the “Get a Dataset” endpoint to retrieve the dataset definition.  Apply one or more access roles and then call the “Update a Dataset” endpoint, using the modified response from the “Get a Dataset” endpoint.  Finally, call the “Apply Changes” endpoint to make the dataset property changes effective.  All the endpoints listed above require the User ID, App ID and Dataset ID to make the API calls.

> **Note**:  CLS can only be applied via API calls.  Applying CLS to datasets within the Composer UI is not supported at this time.

### Step 3:  Pass the User Role(s) in Widget Config Object

The final step is to declare the roles that the user is a member of when constructing the JSON config object for the embedded widget.  If you are unfamiliar with embedding widgets, please refer to the [Widgets Quick Start Guide](../04-Embedding%20Qrvey%20Widgets/overview-of-embedding.md) article for a good overview of how it works.  The JSON widget config object should be constructed on the back-end, so that the widget configuration is properly encrypted with the JWT token for security purposes.  Simply define the “roles” property in the JSON config object and set the value to the name of the user role as a string.  You can optionally use an array of strings to pass more than one role with the configuration object.  The sample Javascript code below provides an example of what this call looks like.

![column-level-security](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Column-Level-Security/cls3.png#thumbnail-60) 

The sample code above is written in Javascript; however, you can make the JWT call in any back-end server-side web application development language of your choice.  For more information about securely embedding Qrvey platform widgets within external web applications, please see the [Embedding Widgets Using a Security Token](../04-Embedding%20Qrvey%20Widgets/widget-authentication.md) article.

</div>
