---
id: widget-dataconnectors
title: Data Connectors
sidebar_label: Data Connectors
---
<div style="text-align: justify">

The connector widget is a powerful and effective tool to allow you embed the connectors on your own web application. You can create MySQL, MS SQL, Oracle, Aurora and Postgres connectors.

## Samples
The following samples show how to embed connectors.

<qrvey-data-connectors settings='connectorConfig'></qrvey-data-connectors>

<script>
  var connectorConfig = {
    "api_key": "YOURAPIKEYGOESHERE",
    "app_id": "APPID",
    "domain": "https://your_qrvey_domain",
    "user_id": "USERID",
    "isAdminApp": false 
    
    }
</script>

Properties and Values for Each Object:

Each object is defined by common properties. The table below provides general information about each property and value. The Required column indicates whether the property is required for the configuration object.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **"api_key"** | String, secret identification token to access the application. | Yes |
| **appid** | String. Application id | Yes |
| **domain** | String, Data server url | Yes |
| **userid** | String. User id | Yes |
| **isAdminApp** | Boolean. Admin app property set to false for Platform | Yes |

