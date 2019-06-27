---
id: widget-user-management
title: User Management
sidebar_label: User Management
---

<div style="text-align: justify">

The User Management widget allows authorised admins to create and modify user accounts for a deployment.

## User Management Widget

How to use it?

1. Put the script tag of the given launcher url in your website. For example:

```
<script type="text/javascript" src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-user-management-dev/usermanagement.js"></script >
```

2. Put the **User Management** tag in the container you want to embed the widget, and set the **config** attribute of the tag with a valid JSON object to launch the widget. For example:

```
<qum-user-management config="config"></qum-user-management>
```

The schema of the config value has the following properties defined below (required items are bold):

```
{
    appid: 'pzE019Y',
    domain: 'https://qdev.qrvey.com',
    userid: 'TQudSqH',
    apikey: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0-QRVEY-FRONTEND' 		
}
```

Properties and Values for Each Object:

Each object is defined by common properties. The table below provides general information about each property and value. The Required column indicates whether the property is required for the configuration object.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **appid** | String. Application id | Yes |
| **domain** | String, Data server url | Yes |
| **userid** | String. User id of the admin.| Yes |
| apikey | String, Optional, you can set up the widget without an api key if it&#39;s set in a Qrvey session cookie. | No |