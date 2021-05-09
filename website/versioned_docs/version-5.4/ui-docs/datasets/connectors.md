---
id: version-5.4-connectors
title: Connections Overview
sidebar_label: Connections Overview
original_id: connectors
---

<div style="text-align: justify">

The **Connections** tab is where you can create and manage your connections to various data sources.

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/1_Connections.png#thumbnail)


When you enter the **Connections** section for the first time, you will see all of the connection types that we support, including SQL Server, MySQL, Oracle, PostgreSQL, Amazon S3, and File Upload. The first four of these are database connections and the latter two are file connection types.

See the documents below to get more information on:
* [Database Connections](ui-docs/datasets/databases.md)
* [File Upload Connections](ui-docs/datasets/csv.md) 

Once you have created your connections, you will see them listed as shown below:

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/2_Connections.png#thumbnail)

To edit or delete an existing connection, use the three-dot menu in the top-right corner of each card. Editing connections could affect related datasets and cause that data is not reloaded to the dataset. 

If you click on **View Data**, a partial view of the data available for file upload connections and database connections that have a database and table selected, will pop up.  

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/3_Connections.png#thumbnail-80)

When about to delete a connection, you will be shown a modal that lists places where the connection is being used, which can be either in **Datasets** or in **Automated Flows**. If a connection that is being used is deleted, the assets that depend on that connection can break. In the case of datasets, they will remain active, however, the data cannot be reloaded. In the case of Automation, flows will be executed but the actions using the connection will not work. 

![connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/4_Connections.png#thumbnail-80)





