---
id: api-connections
title: API Connections
sidebar_label: API Connections
displayed_sidebar: data-analyst
---

<div style={{textAlign: "justify"}}>

Qrvey Composer supports the configuration of Push API connections from the Connections page within the Dataset UI.  This feature provides “creator” users a low-code way to create datasets that are populated from a specified API connection.  Configuring a dataset to use a Push API connection is a two-step process.  First, a Push API connection type with a sample JSON object structure must be supplied.  Second, the dataset must be configured to refer to the Push API connection for the expected metadata schema, and then the API connection details must be configured to perform the data push.

## Configuring the Push API Connection

Click **New Connection** and then select the Push API connection type from the modal window that appears.  Type a name for the connection and then copy/paste a sample JSON object record in the provided field below.

![api](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/api-connections/api1.png#thumbnail)


Ensure that the sample JSON object record provided exactly matches the structure of the JSON data being pushed by the actual source API endpoint.  Mismatches between the sample JSON data structure and the JSON data returned by the API will cause the dataset to fail upon load.


![api](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/api-connections/api2.png#thumbnail-40)

After creating the Push API connection, the next step is to create a new dataset using this Push API connection as the source.

## Configuring the Push API Dataset

Start by creating a new dataset and select the desired Push API connection as the source.  The schema of the sample JSON object record you supplied for the source connection will be translated into columns with associated column data types.  Columns that appear indented below another column are constructed from a hierarchical JSON object array in the sample source JSON provided in the Push API connection.  Columns of type “Object Array” are disabled in the Design page and cannot be used to construct unique identifiers, row-level security and column links; however, they can be used within a transformation that operates on array types.

![api](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/api-connections/api3.png#thumbnail-60)

Configure the column names and column data types, as well as any transformations, geocoding and row-level security.  Make sure to click **Apply Changes** and then click on **Push API Instructions** to see a sample cURL command that can be used to begin populating the dataset.  By default, the sample cURL command will use the exact same JSON code supplied in the source Push API connection as a reminder of what the required JSON data structure must be.


![api](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/api-connections/api4.png#thumbnail)

If you do not see a sample cURL command for “Post Data” after clicking the Push API Instructions tab, click on **Apply Changes** in the top-right corner of the Design page.  This page will also show sample cURL commands for “Delete Data” and “Delete All Data” actions.  There must be at least one column configured as a unique identifier to see the “Delete Data” cURL command.  There must be at least one record of data present in the dataset to see the “Delete All Data” cURL command.

> **Note**:  Joins are not supported for datasets that use Push API source connections.

</div>



