---
id: connectors
title: Connections Overview
sidebar_label: Connections Overview
---

<div style="text-align: justify">

The *Connections* tab is where you can create and manage your connections to various data sources.

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/connections1.png#thumbnail) 


From the Connections page, you can click on an existing connection to make changes to the configuration settings.  If this is the first time you are accessing the Connections page, you must first create a new connection.  Create a new connection by clicking on the **New Connection** button.

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/connections2.png#thumbnail)


A modal window will appear that lists all of the supported data source types that can be configured through the Qrvey Composer UI.


![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/connections3.png#thumbnail) 

The UI supports the following types of SQL-compatible source databases:
* SQL Server
* MySQL
* PostgreSQL
* Oracle
* Redshift
* Athena 
* MongoDB 

For CSV data or unstructured data, such as JSON documents, the UI supports uploading those file types directly or by pointing to an S3 bucket where those files reside.  Additionally, API connections are supported in the UI to “push” data into one or more datasets.

See the articles below to get more information on database sources, file sources and API sources:
* [Database Connections](ui-docs/datasets/databases.md)
* [File Upload Connections](ui-docs/datasets/csv.md)
* [API Connections](ui-docs/datasets/api-connections.md)

Once you have created your connections, you will see them listed as shown below:

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/2_Connections.png#thumbnail)

To edit or delete an existing connection, use the three-dot menu in the top-right corner of each card. Editing connections can potentially lead to errors with any data syncs configured for datasets that rely on those connections. Please, verify that the connection is successful after making any changes


If you click on **View Data**, a partial view of the data available for file upload connections and database connections that have a database and table selected will appear.  

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/3_Connections.png#thumbnail-80)



Before a connection can be deleted, the UI will list any dependent **Datasets** and **Automated Flows** that depend on that connection. If a connection that is being used is deleted, the assets that depend on that connection can break. In the case of datasets, they will remain active, however, the data cannot be reloaded. In the case of Automation, flows will be executed but the actions using the connection will not work. 


![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/4_Connections.png#thumbnail-60)





