---
id: connections
title: Connections
sidebar_label: Connections
tags: [Data Analyst, CloudOps Engineer, Software Developer, Solution Architect, All Personas]
sidebar_position: 2
displayed_sidebar: getting-started
---

A Connection is a link established between Qrvey and an external data source.

This could be a database, a data warehouse, CSV & JSON files, a cloud storage service like AWS, incoming data from REST APIs, or some other system that store data. Connections allow Qrvey to access and retrieve data from these external sources. The main purpose of a connection is to establish a secure and reliable pathway for data retrieval and integration into Qrvey.

## View and Monitor Connections

1. To view all connections, navigate to the **Data** Module, then into **Connections**. An option to preview data appears on Connections established directly to a data source, such as a file, table/view, or query. You have several monitoring options.
    - **View Source Data** — Find the desired Connection and click **View Source Data**. A preview of loadable data will appear.
    - **Verify if Connection is In Use** — Click **In Use** to check how many Datasets are using a specific Connection. You may also access this from the three-dot menu.
    - **Favorite a Connection** — Click the star on the connection card to add it to your list of favorites.


## Create a Connection

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/connect3.png#thumbnail)

To create a Connection, follow these steps.

1. Navigate to the **Data** Module and then into **Connections**. 
2. Click **New Connection**.
3. Choose the desired Connection Type. You have the following options:
    - **File Upload**
    - **AWS S3 Bucket**
    - **SQL Server** 
    - **MySQL**
    - **PostgreSQL**
    - **Oracle**
    - **Amazon Redshift**
    - **Amazon Athen**
    - **MongoDB**
    - **Snowflake**
    - **DynamoDB**
    - **API connections** - Supported in UI to push data into datasets. For more details, please see [API Connections](#push-api-connections).
4. Set a Connection Name.
5. Set the configuration details as desired.  
    Configuration options vary for each connection type, but all the fields should be descriptive and standard for the relevant database. For more information on configuration options, please see the following subsections on configuration.
6. **Optional:** Manually verify your connection by clicking on **Test Connection** in the bottom left corner.  
7. Click **Create** to confirm and create the Connection.

The system will attempt to connect to the database server as soon as all of the required information has been provided. A message is displayed to indicate if the connection was successful or it failed. 

> **Note:** Once the connection to the database server is established, the information can be saved as a new connection. However, this connection is to the database server itself, and more information needs to be provided at the time that the connection is used, in order to get to a specific database on that server, and a specific table or view in that database, to load data.

### Typical Configuration Method

<!-- ![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/databases/dbs2.7.6.png#thumbnail-60) -->

All database types allow configuration using a standard form field UI.
- Required fields are highlighted when information is missing.
- If you want to make your connection more specific, you can select the database from the *Database* dropdown list.

>**Note 1**: For an Amazon Redshift cluster or Amazon RDS instance, enter the endpoint of the cluster or instance without the port number. For example, if the endpoint value is `clustername.1234abcd.us-west-2.redshift.amazonaws.com:1234`, then enter `clustername.1234abcd.us-west-2.redshift.amazonaws.com`. You can get the endpoint value from the Endpoint field on the cluster or instance detail page in the AWS console. You may also choose to use SSL with the connection by checking the **Use SSL** checkbox.

>**Note 2**: For SQL Server databases dirty reads can be enabled by checking the checkbox to set the isolation level to “Read Uncommitted”. 

### Advanced JSON Method

If you need to include more advanced attributes with your connection, you may use the **Advanced JSON Configuration** option. With this method, you can enter any connection attribute as a key/value pair, enabling you to configure properties that are typically not included, such as timeout and encryption preferences. Please remember to keep attribute names accurate when using JSON configuration. The **Connection Config Help** link will open a new tab with the relevant database documentation.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/connections4.png#thumbnail-60)

### File Upload Configuration

It is possible to create connections by uploading a single file from your local machine. Acceptable file types include: CSV, JSON, ndJSON, and Parquet. File-based data is much simpler than data stored within a database. This makes the storage medium versatile, yet error-prone at the same time. Please make sure your data is cleaned, properly formatted, and follows any other data storage best-practices for your relevant file type.

- **Tips on File-Based Data:**
    - JSON files may contain a top-level array of JSON items.
    - R records may be delimited using the ndJSON format.
    - Files may be compressed in GZIP format.
- **View & Edit Sample JSON Data:** The system will validate JSON uploads and show the first record as a sample. You can edit this sample directly to modify the structure of the final dataset uploaded from this connection.
- **View Source Data:** Once the connection is saved, click **View Source Data** to display a partial view of the data.

### Amazon S3 Bucket Configuration

Amazon S3 Buckets and folders storing CSV, JSON, or ndJSON files can be used as Connections. This offers the following features:

- Load data from multiple files from the same bucket or folder in bulk, instead one file at a time.
- Wildcards can be used in the **S3 Folder** field.
- File upload time to S3 is automatically used as a timestamp to enable the [append and update](./Datasets/02-Design/04-Data%20Synchronization/data-sync.md) mode for data synchronization. 
 
![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/createS3.png#thumbnail-60) 

By default, Qrvey looks for the named bucket under the same AWS account as the instance. If you wish to connect to a bucket from a different account, enter the access key and secret key for the desired account in the provided fields. 

- **Optional:** Specify a folder or subfolder to upload files from.
- **Optional:** Use a wildcard to match a subset of files:
    - starts with `SALES_`, please use `myFolder/SALES_*`
    - ends with `.csv`, please use `myFolder/*.csv`
    - contains `data_load`, please use `myFolder/*data_load*`


### Push API Connections

Qrvey Composer supports the configuration of Push API connections from the Connections page within the Dataset UI. This feature provides “creator” users a low-code way to create datasets that are populated from an API. 

Configuring a Dataset to use a Push API Connection requires the following:
- **Configure a Push API Connection** and provide a sample JSON object structure.
- **Configure a Dataset** that uses the Push API Connection.
- **Execute a Push API Request** to push new data into the dataset.

Please see the following sections for detailed instructions.

#### Configure a Push API Connection

![api](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/api-connections/api1.png#thumbnail)

To configure a Push API Connection, follow these steps.
1. [Create a Connection](#create-a-connection) and select the **Push API** connection type. 
2. Type a name for the connection.
3. Add a sample JSON data structure in the provided field.  
    Ensure this sample JSON exactly matches the structure of the JSON data being pushed by the actual source API endpoint. Mismatches between the sample JSON data structure and the JSON data returned by the API will cause the dataset to fail on load.

After creating the Push API connection, you must create a new dataset using this Push API connection as the source.

![api](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/api-connections/api2.png#thumbnail-40)

#### Configure a Push API Dataset

To configure a Push API Dataset, follow these steps.

1. Create a [New Managed Dataset](./Datasets/01-Overview%20of%20Datasets/managed-datasets.md) and set the desired Push API connection as its data source.  
The sample JSON schema you supplied for the source connection will be translated into columns with associated column data types.
- Columns that appear indented below another column are constructed from a hierarchical JSON object array in the sample source JSON provided in the Push API connection. 
- Columns of type `Object Array` are disabled in the **Design** page and cannot be used to construct unique identifiers, row-level security and column links; however, they can be used within a transformation that operates on array types.
2. Configure the column names and column data types, as well as any transformations, geocoding and row-level security.
![api](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/api-connections/api3.png#thumbnail-60)
3. Click **Apply Changes** to confirm configuration.

#### Execute a Push API Request

![api](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/api-connections/api4.png#thumbnail)

1. Navigate into the desired Dataset.
2. Click **Push API Instructions**
3. Copy the sample cURL command Post Data to the dataset.
4. By default, the sample cURL command will use the exact same JSON sample schema supplied in the source Push API connection as a reminder of what the required JSON data structure must be.


> If you do not see a sample cURL command for “Post Data” after clicking the Push API Instructions tab, click on **Apply Changes** in the top-right corner of the Design page. 
This page will also show sample cURL commands for “Delete Data” and “Delete All Data” actions. There must be at least one column configured as a unique identifier to see the “Delete Data” cURL command. There must be at least one record of data present in the dataset to see the “Delete All Data” cURL command.

> Joins are not supported for datasets that use Push API source connections. For details, please see [Data Joins](./Datasets/02-Design/05-Data%20Joins/data-joins.md).

> To execute a Push API request, you will need to [provide the API key](../../getting-started/faqs.md#where-can-i-find-my-api-key) associated with the Qrvey Data Router.

> The optimal payload size for the Push API is 1MB. You may make concurrent requests and do not need to wait until one request completes before making another request. The maximum recommended number of concurrent requests is 100. 

#### Check Status of the Push API Request

You can check the status of the Push API request using the following cURL command: 

```
curl --location --globoff '{{postdataUrl}}/{{jobId}}/status' \
--header 'x-api-key: {{apikey}}'
```

**Request Variables:**
- `postdataUrl` — Provided by Qrvey when your Qrvey instance was initially set up.
- `jobId` — Included in the response provided by the Push API request. 
- `apikey` — Use the API key associated with the Qrvey Data Router.

#### Possible Response Statuses 

- `Initializing`
- `QueryingDatasources`
- `Initializing`
- `QueryingDatasources`
- `PumpingDatasources`
- `FillingJoinLakes`
- `Joining`
- `FillingEs`
- `Complete`
- `TerminatedExit`
- `ErrorExit`

## Edit a Connection

To edit a Connection, follow these steps.

1. Click on an existing connection card or click the three-dot menu and click edit. A modal will appear. 
2. Click "Edit" to confirm and the Connection's configuration modal will appear.
3. Make your edits as desired.
4. Click "Save to confirm".

> Note: Reconfiguring a connection may lead to errors with for datasets that rely on the Connection.

## Delete A Connection

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/connect5.png#thumbnail-60)

To delete a Connection, follow these steps.

1. Navigate to the **Data** Module and then into **Connections**. 
2. Click to open the three-dot menu on the desired Connection and select "Delete". A warning modal will appear.
3. Click "Delete" to confirm.

**Warning:** If a connection that is being used is deleted, the assets that depend on that connection can break. In the case of datasets, they will remain active, however, the data cannot be reloaded. In the case of *Automation*, flows will be executed but actions using the connection will not work.

> Note: deleting a connection may lead to errors with datasets that rely on the Connection.