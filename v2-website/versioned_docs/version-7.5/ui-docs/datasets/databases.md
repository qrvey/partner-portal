---
id: databases
title: Database Connections
sidebar_label: Database Connections
---

<div style={{textAlign: 'justify'}}>

You can create connections to various RDBMS by using the Database Connection feature under the *Connections* tab. Database connections can be created by entering the common connection attributes in the provided fields in the connection dialog, or by using the more advanced connection attributes using a JSON structure. While the former method is the default, the latter can be used to configure properties that are typically not included, such as timeout and encryption preferences.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/connections_list_new.png#thumbnail-60)

To begin, choose the type of database you’d like to connect to. See [Connections Overview](../datasets/connectors.md) for the list of connections we currently support. 

The modal dialog to enter the connection information may be slightly different for each database type, depending on the required configuration attributes, but all of the fields are descriptive and familiar to those who have worked with databases.


## Creating a Connection Using the Default Method

Enter your connection information, including *Host URL, Username* and *Password*. *Port* is optional. The fields that are mandatory are highlighted when information is missing. 

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/highlight.png#thumbnail-60) 


  
>**Note 1**: For an Amazon Redshift cluster or Amazon RDS instance, enter the endpoint of the cluster or instance without the port number. For example, if the endpoint value is clustername.1234abcd.us-west-2.redshift.amazonaws.com:1234, then enter clustername.1234abcd.us-west-2.redshift.amazonaws.com. You can get the endpoint value from the Endpoint field on the cluster or instance detail page in the AWS console.

You may also choose to use SSL with the connection by checking the Use SSL checkbox.

>**Note 2**: For SQL Server databases dirty reads can be enabled by checking the checkbox to set the isolation level to “Read Uncommitted”. 

The system will attempt to connect to the database server as soon as all of the required information has been provided. A message is displayed to indicate if the connection was successful or it failed. You can also manually enforce a test by clicking on **Test Connection** to verify the provided information.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/connections3.png#thumbnail-60)

Once the connection to the database server is established, the information can be saved as a new connection. However, it is important to note that this connection is to the database server itself, and more information needs to be provided at the time that the connection is used, in order to get to a specific database on that server, and a specific table or view in that database, to load data.

If you want to make your connection more specific, you can select the database from the *Database* dropdown list, and optionally continue to further refine your choice by clicking on the **Include a Query with this Connection** button, to pick a table or view from the database.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dbs4.png#thumbnail-60)

You may also enter a custom SQL query as your connection by clicking the **SQL Query** radio button. You can use the **Test** link in the bottom-right corner to test your query. 

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dbs5.png#thumbnail-60)

In both of these cases a checkbox lets you choose whether to apply pagination to the query or not. This option is on by default and wraps the query in a paging statement to prevent lengthy queries from causing a timeout in the function that fetches the data from the data source. The feature however causes some slowness in load, due to fetching data one page at a time, and moving the paging cursor further and further into the data. You can choose to disable pagination if you believe that your data is not large enough to cause a timeout.

## Creating a Connection Using the Advanced Method

If you need to include more advanced attributes with your connection, you may use the _**Advanced JSON Configuration**_ option. With this method, you can enter any connection attribute as a key/value pair. It is important to note that this method is sensitive to the attribute names being accurate. The _**Connection Config Help**_ link can be used to review the documentation for each connection type.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/connections4.png#thumbnail-60)

Once the connection attributes have been entered, the rest of the behavior is similar to the default method.

Once you are done with configuring your connection, you can click the **Save** button in the lower-right corner to add the new connection.

The connection will be added to the Connection list, displaying the owner of the connection, the type and an option to View Data, which will allow users to see a partial view of the data, showing the first 100 rows. 


>**Note**: The **View Data** option is only available for connections that are specific and point to a single table, view, or custom query

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/databasesV7.png#thumbnail) 

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/8_databasesV2.png#thumbnail-60)

At this point, you can proceed to the *Dataset* tab and begin creating datasets from the connections you have established. 

In addition to Database Connections, you can create File Upload connections. [Click here](../datasets/csv.md) to learn more.


## Editing a Database Connection
To edit a Database Connection, click on the Connection card at which you’ll be asked if you want to continue as editing the connections affects any datasets that are using it. 

### Relational Database Connection
When editing a relational database, you can choose between two editing options:
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a) Typical Configuration</li>

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/typical.png#thumbnail-60)

<li>b) Advanced JSON Configuration</li>

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/advanced.png#thumbnail-60)
</ul>

### Non-relational Database Connections
When editing a non-relational database, click on the Connection card and the following modal appears where you can make your changes:

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_databases/nonrelational.png#thumbnail-60)

In case you decide to edit the Connection Query as well, click on the **Include a Query with this Connection** button and select the Connection Query from the drop-down menu.

>**Note**: The UI validates the JSON in a way that there are no empty attributes in the Sample Record. 

</div>
