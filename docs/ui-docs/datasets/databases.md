---
id: databases
title: Database Connections
sidebar_label: Database Connections
---

<div style={{textAlign: "justify"}}>
You can create connections to various RDBMS sources by using the Database Connection feature under the *Connections* tab. Database connections can be created by entering the common connection attributes in the provided fields in the connection dialog, or by using the more advanced connection attributes using a JSON structure. While the former method is the default one, the latter can be used to configure properties that are typically not included, such as timeout and encryption preferences.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/database_create.png#thumbnail)
    
To begin, choose the type of database you’d like to connect to. We currently support Amazon Redshift, MongoDB, MySQL, SQL Server, PostgreSQL and Oracle databases. MySQL and PostgreSQL are Aurora compatible. 

The dialog that is displayed may be slightly different for each database type, depending on their required configuration attributes, but all of the fields are descriptive and familiar to those who have worked with databases. 

Amazon Athena connections require the AWS region to be specified, as well as the access key and secret key for authentication purposes.  You can optionally specify an Athena workspace, as well as the designated S3 bucket where the query output result files are stored.  If the Athena workspace already specifies the output S3 bucket, then this field does not need to be set.  Athena connections can be configured to connect directly to an AWS database and/or catalog if those have been configured.  Finally, if you want to use a specific SQL query for the Athena connection, you can click the **Include a Query with this Connection** button at the very bottom of the configuration popup.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/2connections.png#thumbnail-60)  

&gt; **Note**:  If you specify the S3 bucket for query output result files, please ensure that the URL path is correct and valid.  The Qrvey platform will not have access to this S3 bucket for security reasons and cannot verify that the URL is valid.

## Creating a Connection Using the Default Method

Enter your connection information, including *Host URL, Username* and *Password*. *Port* is optional. 

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/database2.png#thumbnail) 

&gt;**Note 1**: For an Amazon Redshift cluster or Amazon RDS instance, enter the endpoint of the cluster or instance without the port number. For example, if the endpoint value is clustername.1234abcd.us-west-2.redshift.amazonaws.com:1234, then enter clustername.1234abcd.us-west-2.redshift.amazonaws.com. You can get the endpoint value from the Endpoint field on the cluster or instance detail page in the AWS console.

You may also choose to use SSL with the connection by checking the Use SSL checkbox.

&gt;**Note 2**: For SQL Server databases dirty reads can be enabled by checking the checkbox to set the isolation level to “Read Uncommitted”. 
The system will attempt to connect to the database server as soon as all of the required information has been provided. A message is displayed to indicate if the connection was successful or it failed. You can also manually enforce a test by clicking on **Test Connection** to verify the provided information.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/connections3.png#thumbnail)

Once the connection to the database server is established, the information can be saved as a new connection. However, it is important to note that this connection is to the database server itself, and more information needs to be provided at the time that the connection is used, in order to get to a specific database on that server, and a specific table or view in that database, to load data.

If you want to make your connection more specific, you can select the database from the *Database* dropdown list, and optionally continue to further refine your choice by clicking on the **Include a Query with this Connection** button, to pick a table or view from the database.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/database4.png#thumbnail)

You may also enter a custom SQL query as your connection by clicking the **SQL Query** radio button. You can use the **Test** link in the bottom-right corner to test your query. 

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/database5.png#thumbnail)

## Creating a Connection Using the Advanced Method

If you need to include more advanced attributes with your connection, you may use the _**Advanced JSON Configuration**_ option. This option is only available for SQL Server, MySQL, PostgreSQL, Oracle and Redshift. With this method, you can enter any connection attribute as a key/value pair. It is important to note that this method is sensitive to the attribute names being accurate. The _**Connection Config Help**_ link can be used to review the documentation for each connection type.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/connections4.png#thumbnail)

Once the connection attributes have been entered, the rest of the behavior is similar to the default method.

Once you are done with configuring your connection, you can click the **Save** button in the lower-right corner to add the new connection.

The connection will be added to the Connection list, displaying the owner of the connection, the type and an option to View Data, which will allow users to see a partial view of the data, showing the first 100 rows. 

Note: The View Data option is only available for connections that are specific and point to a single table, view, or custom query.

&gt;**Note**: The **View Data** option is only available for connections that do not contain a custom query.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/7_databasesV2.png#thumbnail)

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/8_databasesV2.png#thumbnail)

At this point, you can proceed to the *Dataset* tab and begin creating datasets from the connections you have established. 

In addition to Database Connections, you can create File Upload connections. <a href="/docs/ui-docs/datasets/csv/">Click here</a> to learn more.

</div>
