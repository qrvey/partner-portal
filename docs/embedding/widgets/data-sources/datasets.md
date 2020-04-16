---
id: widget-datasets
title: Datasets
sidebar_label: Datasets
---

<div style="text-align: justify">

The Dataset widget is the way to use your data on Qrvey Analytics tool. In this widget, you can use any connection no matter the origin to create your own datasets, join data, select what to show, load the data and program data refresh rules.

## Data Connectors Sample
The following sample show how to embed connectors.

```
<app-datasets settings='connectorConfig'></app-datasets>


<script>
  var connectorConfig = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "user_id": "<USER_ID>",
    "isAdminApp": false 
    }
</script>

<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://your_qrvey_domain_widget_launcher/app.js"></script>
```




## Properties and Values for Each Object:

Each object is defined by common properties. The table below provides general information about each property and value. The Required column indicates whether the property is required for the configuration object.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| api_key | String, Optional API Key, you can set up the widget without this if it's set in a qrvey session cookie. | No |
| **appid** | String. Application id | Yes |
| **domain** | String, Data server url | Yes |
| user_id | String, Optional User id, you can set up the widget without a user id if it's set in a qrvey session cookie. | No |
| **isAdminApp** | Boolean. Admin app property set to false for Platform | Yes |