---
id: version-5.4-databases
title: Database Connections
sidebar_label: Database Connections
original_id: databases
---

<div style="text-align: justify">

You can create connections to various RDBMS by using the Database Connection feature under the *Connections* tab.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/database1.png#thumbnail-60)

To begin, choose the type of database you’d like to connect to. We currently support MySQL, SQL Server, PostgreSQL and Oracle databases. MySQL and PostgreSQL are Aurora compatible. 

The dialog that is displayed may be slightly different for each database type, depending on their required configuration attributes, but all of the fields are descriptive and familiar to those who have worked with databases. 

Enter your connection information, including *Host URL, Username* and *Password*. *Port* is optional. 

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/database2.png#thumbnail-60) 

The system will attempt to connect to the database server as soon as all of the required information has been provided. A message is displayed to indicate if the connection was successful or it failed. You can also manually enforce a test by clicking on **Test Connection** to verify the provided  information.

Once the connection to the database server is established, the information can be saved as a new connection. However, it is important to note that this connection is to the database server itself, and more information needs to be provided at the time that the connection is used, in order to get to a specific database on that server, and a specific table or view in that database, to load data.

If you want to make your connection more specific, you can select the database from the *Database* dropdown list, and optionally continue to further refine your choice by clicking on the **Include a Query with this Connection** button, to pick a table or view from the database.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/database3.png#thumbnail-60)

You may also enter a custom SQL query as your connection by clicking the **SQL Query** radio button. You can use the **Test** link in the bottom-right corner to test your query. 

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/database4.png#thumbnail-60)

Once you are done with configuring your connection, you can click the **Save** button in the lower-right corner to add the new connection.
The connection will be added to the Connection list, displaying the owner of the connection, the type and an option to **View Data**, which will allow users to see a partial view of the data, showing the first 100 rows. 

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/database5.png#thumbnail-60)


>**Note**: The **View Data** option is only available for connections that are specific and point to a single table, view, or custom query.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/7_databasesV2.png#thumbnail-40)

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/8_databasesV2.png#thumbnail-40)

At this point, you can proceed to the *Dataset* tab and begin creating datasets from the connections you have established. 

In addition to Database Connections, you can create File Upload connections. <a href="/docs/ui-docs/datasets/csv/">Click here</a> to learn more.












