---
id: overview-of-connections
title: Overview of Connections
sidebar_label: Overview of Connections
tags: [Data Analyst, CloudOps Engineer, Software Developer, Solution Architect, All Personas]
sidebar_position: 1
displayed_sidebar: data-analyst
---

You can create and manage your connections to various data sources in the *Connections* tab.

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/connect1.png#thumbnail-40)  


From the Connections page, you can click on an existing connection to make changes to the configuration settings. If this is the first time you are accessing the Connections page, you must first create a new connection by choosing the connection type and filling in the required information to establish the connection.

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/connect2.png#thumbnail)
 

The UI supports creating connections for the following data sources:
* SQL Server
* MySQL
* PostgreSQL
* Oracle
* Amazon Redshift
* Amazon Athena
* MongoDB
* Snowflake
* DynamoDB



For CSV data or unstructured data, such as JSON documents, the UI supports uploading those file types directly or by pointing to an S3 bucket where those files reside. Additionally, API connections are supported in the UI to “push” data into one or more datasets.

See the articles below to get more information on database sources, file sources, and API sources:


* [Database Connections](./databases.md)

* [File Upload Connections](./csv.md)

* [API Connections](./api-connections.md)

If you have already created connections, then you will see them listed here, along with a **New Connection** button to create new ones, which will again prompt you with the available data source types modal window.

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/connect3.png#thumbnail) 

To edit or delete an existing connection, use the three-dot menu in the top-right corner of each card. Note, that editing connections can potentially lead to errors with any data syncs configured for datasets that rely on those connections. Please verify that the connection is successful after making any changes.

Check how many Datasets are using a specific Connection by hovering over the **In use** button. If there are no Datasets tied to that Connection, there is a gray **Not used** button.

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/connect-number.png#thumbnail) 


By clicking the **In use** button, you can get more details about the Datasets that are using this connection, like the *Dataset Name* along with the creation date and the person who created it. 

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/connect-details.png#thumbnail-60)  


An option to preview data appears on cards for which the connection is established directly to a data source, such as a file, table/view, or query. When you click on **View Source Data** in the connection card, a preview of the data that’s available for loading will appear. You can see the first 100 records and the number of total records for custom queries displayed above the table. 


![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/connect4.png#thumbnail-80)

Before a connection can be deleted, the UI will list any dependent *Datasets* and *Automated Flows* that depend on that connection. If a connection that is being used is deleted, the assets that depend on that connection can break. In the case of datasets, they will remain active, however, the data cannot be reloaded. In the case of *Automation*, flows will be executed but the actions using the connection will not work.

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/connect5.png#thumbnail-60)