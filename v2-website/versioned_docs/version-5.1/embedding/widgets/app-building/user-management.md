---
id: widget-user-management
title: User Management
sidebar_label: User Management
---
<div style={{textAlign: "justify"}}>

The User Management widget allows authorised admins to create and modify user accounts for a deployment.

## User Management Widget

To use this widget:

1.  Put the script tag of the given launcher URL in your website. For example:

```

<script type="module" src="https://your_qrvey_domain_widget_launcher/usermanagement/usermanagement.esm.js"></script>
<script nomodule="" type="text/javascript" src="https://your_qrvey_domain_widget_launcher/usermanagement/usermanagement.js"></script>

```

2.  Put the **User Management** tag in the container you want to embed the widget, and set the **config** attribute of the tag with a valid JSON object to launch the widget. For example:

```

<qum-user-management config="config"></qum-user-management>

```

The schema of the config value has the following properties defined below (required items are bold):

```

{
    "appid": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "userid": "<USER_ID>",
    "apikey": "<API_KEY>"
    "doNotAllow": ['<PERMISSION>']			
}

```

## Properties and Values for Each Object:

Each object is defined by common properties. The table below provides general information about each property and value. The Required column indicates whether the property is required for the configuration object.

| **Property** | **Value**                                                                                                      | **Required** |
| ------------ | -------------------------------------------------------------------------------------------------------------- | ------------ |
| **appid**    | `String`, Application id.                                                                               | Yes          |
| **domain**   | `String`, Data server url.                                                                              | Yes          |
| **userid**   | `String`, User id of the admin.                                                                         | Yes          |
| apikey       | `String`, Optional, you can set up the widget without an api key if it's set in a Qrvey session cookie. | No           |
| doNotAllow   | `String[]`, Array of _permissions_, used to block or hide widget content.                               | No           |

## Permissions

Add one or more of the followings strings in the **doNotAllow** Property to configure the widget. The order does not matter.

| **Permission**       | **Description**                                          |
| -------------------- | -------------------------------------------------------- |
| USERS_AUTHENTICATION | Hide Authentication tab.                                 |
| USERS_LIST           | Hide Users tab.                                          |
| GROUPS_CRUD          | Hide the actions for create, duplicate or delete groups. |
| GROUPS_USERS_DETAIL  | Hide the users table inside the group detail view.       |
</div>