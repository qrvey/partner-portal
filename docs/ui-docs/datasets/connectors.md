---
id: connectors
title: Connections
sidebar_label: Connections Overview
---

<div style="text-align: justify">

The Connections tab is where you can create and manage your connections to various data sources.

![1_connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/1_Connections.png#thumbnail-60)

When you enter the Connections section for the first time, you will see all the types of connections we support, including SQL Server, MySQL, Oracle, PostgreSQL, File Upload. 

Please go to the documents below to get more information on:
* [Database Connections](ui-docs/datasets/databases.md)
* [File Upload Connections](ui-docs/datasets/csv.md) 

Once you have created your connections, you will see them listed as shown below:

![2_connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/2_Connections.png#thumbnail)

To edit or delete an existing connection, use the three-dot menu in the top-right corner of each card. Editing connections could affect related datasets and cause that data is not reloaded to the dataset. 

![3_connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/3_Connections.png#thumbnail-80)

When about to delete a connection, you will be shown a modal that contains places where the connection is being used, which can be either in **Datasets** or in **Automated Flows**. If a connection that is being used is deleted, the assets that depend on that connection can break. In the case of datasets, the dataset will remain active, however, the data cannot be reloaded. In the case of Automation, flows will be executed but the actions using the connection will not work. 

![3_connections](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.4_connectors/4_Connections.png#thumbnail-80)





