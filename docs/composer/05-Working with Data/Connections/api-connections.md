---
id: api-connections
title: API Connections
sidebar_label: API Connections
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

Qrvey Composer supports the configuration of Push API connections from the Connections page within the Dataset UI. This feature provides “creator” users a low-code way to create datasets that are populated from a specified API connection. 

Configuring a Dataset to use a Push API Connection requires the following:
1. **Configure a Push API Connection** and provide a sample JSON object structure.
2. **Configure a Dataset** that uses the Push API Connection.
3. **Execute a Push API Request** to push new data into the dataset.

Please see the following sections for detailed instructions.

## Configure a Push API Connection

![api](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/api-connections/api1.png#thumbnail)

To configure a Push API Connection, follow these steps.
1. [Create a Connection](./overview-of-connections.md/#create-a-connection) and select the **Push API** connection type. 
2. Type a name for the connection.
3. Add a sample JSON data structure in the provided field.  
    Ensure this sample JSON exactly matches the structure of the JSON data being pushed by the actual source API endpoint. Mismatches between the sample JSON data structure and the JSON data returned by the API will cause the dataset to fail on load.

After creating the Push API connection, you must create a new dataset using this Push API connection as the source.

<!-- ![api](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/api-connections/api2.png#thumbnail-40) -->

## Configure a Push API Dataset

1. Create a [New Managed Dataset](../Datasets/01-Overview%20of%20Datasets/datasets-managed.md) and set the desired Push API connection as its data source.  
The sample JSON schema you supplied for the source connection will be translated into columns with associated column data types.
- Columns that appear indented below another column are constructed from a hierarchical JSON object array in the sample source JSON provided in the Push API connection. 
- Columns of type `Object Array` are disabled in the **Design** page and cannot be used to construct unique identifiers, row-level security and column links; however, they can be used within a transformation that operates on array types.
2. Configure the column names and column data types, as well as any transformations, geocoding and row-level security.
![api](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/api-connections/api3.png#thumbnail-60)
3. Click **Apply Changes** to confirm configuration.

## Execute a Push API Request

![api](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/api-connections/api4.png#thumbnail)

1. Navigate into the desired Dataset.
2. Click **Push API Instructions**
3. Copy the sample cURL command Post Data to the dataset.
4. By default, the sample cURL command will use the exact same JSON sample schema supplied in the source Push API connection as a reminder of what the required JSON data structure must be.


> If you do not see a sample cURL command for “Post Data” after clicking the Push API Instructions tab, click on **Apply Changes** in the top-right corner of the Design page. 
This page will also show sample cURL commands for “Delete Data” and “Delete All Data” actions. There must be at least one column configured as a unique identifier to see the “Delete Data” cURL command. There must be at least one record of data present in the dataset to see the “Delete All Data” cURL command.

> Joins are not supported for datasets that use Push API source connections. For details, please see [Data Joins](../Datasets/02-Design/05-Data%20Joins/data-joins.md).

> To execute a Push API request, you will need to [provide the API key](../../../getting-started/faqs.md#where-can-i-find-my-api-key) associated with the Qrvey Data Router.

> The optimal payload size for the Push API is 1MB. You may make concurrent requests and do not need to wait until one request completes before making another request. The maximum recommended number of concurrent requests is 100. 

## Check Status of the Push API Request

You can check the status of the Push API request using the following cURL command: 

```
curl --location --globoff '{{postdataUrl}}/{{jobId}}/status' \
--header 'x-api-key: {{apikey}}'
```

**Request Variables:**
* `postdataUrl` — Provided by Qrvey when your Qrvey instance was initially set up.
* `jobId` — Included in the response provided by the Push API request. 
* `apikey` — Use the API key associated with the Qrvey Data Router.

**Possible Response statuses:**
* `Initializing`
* `QueryingDatasources`
* `PumpingDatasources`
* `FillingJoinLakes`
* `Joining`
* `FillingEs`
* `Complete`
* `TerminatedExit`
* `ErrorExit`

</div>