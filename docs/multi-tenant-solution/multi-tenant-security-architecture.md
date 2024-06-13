---
id: multi-tenant-security-architecture
title: Multi-tenant Security Architecture
sidebar_label: Multi-tenant Security Architecture
tags: [Solution Architect]
sidebar_position: 3
displayed_sidebar: solution-architects
---

Qrvey’s approach to multi-tenant security architecture is to utilize the **assert model** for both authentication and authorization.  The assert model effectively allows you to maintain your existing user accounts, roles/groups and permissions, and then declare a user’s identity and permissions to the Qrvey platform dynamically at runtime.  The ability to assert/declare a user’s identity and access permissions is favorable when embedding third party platforms in your core application for a multi-tenancy deployment, because it means that you will not need to redefine and replicate your existing security schema.

Qrvey makes the assert model for security possible by providing a comprehensive set of widget configuration properties that can all be set dynamically at runtime.  This document discusses best practices for implementing authentication and authorization using these widget configuration properties.  If you are not yet familiar with how to embed and configure Qrvey widgets, review the following documentation before continuing:

* [Overview of Embedding & Widgets](../software-developer/04-Embedding%20Qrvey%20Widgets/overview-of-embedding.md)
* [Widgets Quick Start Guide](../software-developer/04-Embedding%20Qrvey%20Widgets/overview-of-embedding.md)
* [Embedding Widgets Using a Security Token](../software-developer/04-Embedding%20Qrvey%20Widgets/embedding-widgets-security-token.md)
* [Dashboard View Widget](../software-developer/04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-view.md)
* [Dashboard Builder Widget](../software-developer/04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-builder.md)

You should ensure that whichever type of widget you choose to embed, that all sensitive widget configuration properties are properly encrypted with JWT.  It is recommended to watch the [JWT Widget Integration training video](../video-training/legacy/jwt-widget.md) on the Qrvey Partner Portal.

## Authentication

In a multi-tenant production deployment, there could be thousands of tenants and potentially tens of thousands of end users.  Using the assert security model for authentication, you would never need to create and maintain a user account for your tenant end users.  Furthermore, since your core application is responsible for authenticating all end user access, there is no real need for Qrvey to know exactly who is accessing the embedded dashboards.  More likely, it would be more important to determine what that specific tenant end user is allowed to see and do once the dashboard loads.

There are only two exceptions presently where Qrvey does need to know who the specific tenant end user is: [End User Personalization](../software-developer/08-End%20User%20Personalization/overview-of-personalization.md) and [Download Manager](../composer/03-Managing%20Your%20User%20Profile/download-manager.md).  Both of these features work by tracking actions that the user takes, persisting those changes to the Qrvey platform database, and then being able to recall those actions and changes when the same user logs in to the application at a later time.  For End User Personalization, Qrvey will track changes made to a published dashboard and must associate the saved state of a dashboard with the end user’s ID.  For the Download Manager, Qrvey will track all of the exports requested by an end user and provide a UI for that end user to access their download history.  If you want to utilize one or both of these features, you simply define the `clientid` property for the Dashboard View widget and set the value to the ID of the end user logged into the core/parent application.

>**Note**:  It is critical for the `clientid` property to be set to a unique value for each tenant end user.  For this reason, it is a good idea to use the end user’s email address or a UUID to ensure uniqueness.

Here is an example of a JSON widget configuration object using the `clientid` property to enable End User Personalization:

```json
{
   "domain": "https://myinstance.qrveyapp.com",
   "appid": "APP_ID_VALUE",
   "clientid": "CLIENT_ID_VALUE",
   "personalization": {
       "enabled": true,
   },
}
```

The only users who need Qrvey accounts created for them in the platform, are the users who will be accessing the Qrvey Composer UI directly, outside of an embedded context.  These users will almost always either be the direct employees or partner contractors working for the SaaS organization.  There will only likely be a few dozen of these types of user accounts, and all of these user accounts can be created programmatically via the API.


## Authorization

Restricting what the tenant end user can see and do is essential for any multi-tenant deployment.  Using the assert security model, you will not need to redefine your existing user groups/roles within the platform.  Instead, you only need to maintain a mapping between a user’s group/role and a set of application permissions.  All types of access permissions within Qrvey are dynamically constructed with the widget configuration at runtime, so it’s easy to modify permissions in one place and have those changes take effect immediately.  Qrvey platform widgets are configured through a JSON document, with multiple properties to control all types of access and permissions.  This section covers three types of application permissions that are most useful for multi-tenant deployments:

* **Data Permissions**. Determines which records an end user will see, as well as which columns of a dataset will be visible and available for use within the Chart Builder. 
* **Asset/Object Permissions**. Determines which Qrvey application artifacts an end user has access to, such as charts, datasets, and dashboards.
* **Feature Permissions**. Determines which UI controls will be visible to end users for the specific type of widget being loaded.

### Data Permissions

The most common type of data access control is record-level security (RLS), whereby specific records from a commingled tenant dataset are restricted from view based on one or more attributes assigned to the end user’s account.  You can define RLS on one or more columns within a single dataset.  You can either pass in comma-delimited lists of values or you can define data ranges if the data is numeric or time-based.  You can even introduce boolean logic conditions by nesting the RLS definitions and choosing a boolean operator.

Here is an example of what RLS configured for a Qrvey widget would look like:

```json
{
   "version": "2",
   "appid": "APP_ID_VALUE",
   "permissions": [
      {
         "dataset_id": "DATASET_ID_VALUE",
         "operator": "AND",
         "record_permissions": [
            {
               "security_name": "MyDateSecurityName",
               "validation_type": "RANGE",
               "group_value": "month",
               "values": [
                  {
                     "gte": "Jun 2020",
                     "lte": "Dec 2020"
                  }
               ]
            },
            {
               "operator": "OR",
               "record_permissions": [
                  {
                     "security_name": "MyCountrySecurityName",
                     "validation_type": "EQUAL",
                     "values": [
                        "USA"
                     ]
                  },
                  {
                     "security_name": "MyNumericSecurityName",
                     "validation_type": "RANGE",
                     "values": [
                        {
                           "gte": 10000
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ]
```

In the example above, the end user would be restricted to all records dated between June and December of 2020, as well as either records associated with “USA” or a numerical range greater than 10,000.  The equivalent boolean logic could be represented as follows:

`Month In Range (6/2020 - 12/2020) AND (Country = “USA” OR Number >= 10000)`

You can read the [Record Level Security](../software-developer/03-Security/record-level-security.md) article for specific details around implementation and which properties are supported.  There is also a [Record Level Security training video](../video-training/legacy/row-level-security.md) that is also recommended.

### Asset/Object Permissions

Qrvey allows you to restrict the visibility of several types of assets/objects when loading an embedded dashboard.  You can create mappings between your own user groups/roles with the assets that an end user accessing the embedded dashboard should have access to.  The following types of assets at present can be restricted using a set of JSON configuration properties:

* Datasets
* Charts
* Metrics
* Summaries
* Pages/Dashboards

Using asset permissions, you can implement many of the most common scenarios that appear as requirements in a multi-tenant embedded analytics solution.  Some of these common scenarios you would want to support are:

* Controlling access to specific dashboards based on the user’s group/role
* Toggling the visibility of specific charts within a single dashboard based on the user’s group/role
* Controlling which datasets a user can build visualizations from based on the user’s group/role

As with RLS data security, asset permissions are also defined and controlled using a special JSON widget configuration property.  The property is called `asset_permissions` and you can review the full documentation for this property by reviewing the [Dashboard Builder Widget](../software-developer/04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-builder.md) article on the Qrvey Partner Portal.

Here is an example of what the `asset_permissions` property would look like when included in the JSON widget configuration:

```json
{
   version: "2",
   appid: "APP_ID_VALUE",
   userid: "USER_ID_VALUE",
   expiresIn: "1w",
   asset_permissions: {
       pages: {
           page_ids: [
               "PAGE_ID_VALUE"
           ]
       },
       charts: {
           chart_ids: [
               "CHART_ID_VALUE"
           ]
       },
       metrics: {
           metric_ids: [
               "METRIC_ID_VALUE"
           ]
       },
       summaries: {
           question_ids: [
               "QUESTION_ID_VALUE"
           ]
       },
       datasets: {
           dataset_ids: [
               "DATASET_ID_VALUE"
           ]
       }
   }
}
```

>**Note**:  The `asset_permissions` property is only supported by the Dashboard Builder and Dashboard View widgets.


### Feature Permissions

Qrvey allows you to restrict the visibility of specific UI elements and controls when loading an embedded dashboard.  As with asset permissions, you can create mappings between your own user groups/roles with the features and controls that an end user accessing the embedded dashboard should have access to.  The following types of features and UI controls at present can be restricted using a set of JSON configuration properties:

* Publishing Controls
* Embedding Options
* Dashboard Builder Drop-Down Menus
* User Management
* Navigation Controls 
* Page/Dashboard Controls
* Page/Dashboard Preview Launcher
* Export/Download Controls
* Data Filter Controls

The main JSON property to use in the widget configuration object is called `featurePermission`.  You can then utilize several sub-properties to toggle the visibility of specific UI controls.  For the full list of supported JSON properties, please review the [Dashboard View Widget](../software-developer/04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-view.md) article.

Here is an example of what the `featurePermission` property would look like when included in the JSON widget configuration:

```json
{
   domain: "QRVEY_URL_DOMAIN",
   appid: "APP_ID_VALUE",
   userid: "USER_ID_VALUE",
   featurePermission: {
       liteVersion: true,
       userManagement: {
           hideUserManagementTab: true
       }
   }
}
```

>**Note**:  Most of the UI controls that can be toggled and controlled with these JSON config properties apply only to the Dashboard Builder widget.

There are some UI features and controls that should never be visible to end users, regardless of their assigned user group/role.  Here is a list of those UI controls with a brief explanation:

* Publishing Controls
* Embedding Options
* User Management
* Navigation Configuration

Publishing Controls are intended only for Qrvey Composer users who can control and decide which dashboards are available to view for all end users across all tenants.  Composer users can publish and unpublish an entire Qrvey application, or decide to publish and unpublish specific dashboards.  This is distinctly different from controlling the visibility of a dashboard to specific end users of a tenant through asset permissions.  Any dashboard that an end user can access must be in a published state, regardless of whether they have been given the permission to access it.  Therefore, publishing is more of a system level control intended only for users who are the direct employees or partner contractors of the SaaS organization.

![Security-Architecture-01](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Multi-tenant-solution/Security-Architecture-01.png)

Embedding Options provides a sample embed code for the widget, so this control is never appropriate to expose to end users.  Additionally, the preview launcher is not necessary since it only loads the Dashboard View widget in a new browser tab.  The other two UIs that are intended only for Qrvey Composer users are the Navigation and the User Management links.  Navigation provides a way to control the built-in dashboard menu selection UI, which you will not need if you plan to build your own custom UI within the core/parent application.  User Management provides a way to define individual end user accounts in the platform, if you are not running Qrvey from an embedded context.  You will use the assert security model, so this UI is not needed and certainly isn’t appropriate to expose to end users.

![Security-Architecture-02](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Multi-tenant-solution/Security-Architecture-02.png)


There are additional publishing and preview controls visible when editing a dashboard from Qrvey Composer.  These controls should be hidden by default when the Dashboard Builder UI is embedded.  It’s recommended to also hide the File, Edit, Grid and Insert drop-down menus when using the Dashboard Builder widget.  Most of the features offered in these drop-down menus are available through other UI buttons and controls.

![Security-Architecture-03](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Multi-tenant-solution/Security-Architecture-03.png)

