---
id: databases
title: Database Connections
sidebar_label: Database Connections
---

<div style="text-align: justify">

You can create connections to various RDBMS by using the Database Connection feature under the **Connections** tab.

![1_databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/1_databasesV2.png#thumbnail)

To begin, choose the type of database you’d like to connect to. We currently support MySQL, SQL Server, PostgreSQL and Oracle databases. MySQL and PostgreSQL are Aurora compatible. 
Next, enter your connection information, including Host URL and Port, along with your Username and Password. Click **Test Connection** to verify the information provided.

![2_databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/2_databasesV2.png#thumbnail)

The connection will be tested when you click on **Get Databases**, **Test Connection**, or simply by saving the connection information.
When clicking on Test Connection and if a successful connection is established, a confirmation message will be shown. 

![3_databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/3_databasesV2.png#thumbnail)

If the connection fails, an error message will be shown and the Host URL, Username and Password need to be checked.  

![4_databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/4_databasesV2.png#thumbnail-60)

A connection can either be saved without setting a database, or including a database and table. In order to select a database and table, or create a custom SQL query, click on **Get Databases**. You will be redirected to the Database selector and once a database is defined, you will be able to select the SQL objects. 

![5_databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/5_databasesV2.png#thumbnail-60)

You may also copy/paste a SQL query by clicking the **SQL Query** button. You can use the Test link in the bottom-right corner to test your query. 

![6_databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/6_databasesV2.png#thumbnail)

Once all of your objects are selected and verified, you can click the **Save** button in the lower-right corner to add the new connection.
The connection will be added to the Connection list, displaying the owner of the connection, the type and an option to **View Data**, which will allow users to see a partial view of the data, showing the first 100 rows. 

![7_databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/7_databasesV2.png#thumbnail)

![8_databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/8_databasesV2.png#thumbnail-40)

At this point, you can proceed to the Dataset tab and begin creating datasets from the connections you have established. 

In addition to Database Connections, you can create File Upload connections. [Click Here](ui-docs/datasets/csv.md) to see the steps to connections from file uploads using comma-delimited, or CSV, files.