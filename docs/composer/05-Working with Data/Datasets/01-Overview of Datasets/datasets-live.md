---
id: dslive
title: Datasets - Live Connect
sidebar_label: Datasets - Live Connect
tags: [Data Analyst]
sidebar_position: 3
displayed_sidebar: data-analyst
---

<div>

Qrvey datasets are the data constructs that support all visualizations and dashboards created within the product. The Qrvey platform supports two types of datasets:
* **Managed**. The data is stored inside Qrvey’s data repository, which is a high-performance, scalable, serverless OpenSearch cluster. 
* **Live**. Directly accessed from the data source, enabling real-time queries without the need to load data.  

This article covers live connect datasets. For more information on managed connections, see [Datasets - Managed](../01-Overview%20of%20Datasets/datasets-managed.md).  

>**Note**: Live Connect is only available on version 8.0 or greater of the Qrvey Platform.  

Some caveats of using Live Connect:

* Joins, Unions, and Formulas are not supported, they must be performed in the source (via SQL in Qrvey or other source db methodologies, for example a database view)
* Live Connect supports a smaller list of Data sources, currently Redshift, Snowflake, and PostgreSQL.
* The performance of objects built on Live Connect Datasets are entirely dependent on the source database so care should be taken with source database design such as partitioning, indexes and keys as well as monitoring the source for concurrency, auto-scaling etc.  

While Live Connect can be used for many scenarios, the most common use is for real-time analytics removing the delay and maintenance of ingesting data or for datasets with frequent deletes without the need to issue delete commands.

## Creating a Live Connect Dataset
Live Connect Datasets can use the same Connections as Managed Datasets.  To create a new Live Connect Dataset click the New Dataset button and choose the Live connect option from the Data tab of Qrvey.

![dslive1](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/DatasetLive/dslive.1-8.0.png#thumbnail-40)


Any existing connections which support Live Connect will be listed as possible Data Sources.  Either choose an existing connection or click the “Create New Connection” at the bottom of the window (following this method, rather than going through the Connections tab, will limit your source selections to connection methods supporting Live Connect).  For more information on creating connections, see [Connections](../../Connections/overview-of-connections.md).

![dslive2](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/DatasetLive/dslive.2-8.0.png#thumbnail)

After clicking **Next** you need to choose a Database, and for some sources a Schema and choose from a list of tables or views.  Alternatively, you can write a SQL Query in order to perform joins and formulas.

Click on **Save** button once the data source is selected or the custom query is written and tested. This takes you to the main design interface for the newly created dataset.  Here you can configure your columns and dataset options.. All new datasets are given the default name of {the connection name} - {table/view name}.  To create a friendly name to help you identify it later, click on the name to rename it.  At this point your Dataset is ready for use; however you can make changes as needed.

![dslive3](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/DatasetLive/dslive.3-8.0.png#thumbnail-40)

## Options To Modify The Dataset​
Other than the options readily presented in the UI, such as changing the name of the Dataset, there are various powerful options that enable you to shape the dataset according to your needs. These options are explained in this section.

![dslive4](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/DatasetLive/dslive.4-8.0.png#thumbnail)

### Changing The Data Source​

If the selected data source needs to be changed the following options are available from the three-dot menu on the data source pill:

* **Edit Connection Settings** - This option, available for all types of data sources, is a shortcut to modify the properties of the connection  without going to the Connections screen.
* **Edit Query** - This option allows selecting a different table or view from the same Connection or changing the source SQL query.
* **Switch for Another Data Source** - This option can be used to choose a data source from a connection other than the one currently in use.
* **Rename** - You can give your data sources an alias or a friendly name.


### Changing Dataset Columns

Several options exist for changing the columns in the Live Connect based dataset.  

Note: These options do not change the query executed for the dataset, they impact the presentation layer only.  Data types are inherited from the source database, to make changes to data types either change the source object or use the SQL Query option and CAST or CONVERT syntax as appropriate for your source.

![dslive5](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/DatasetLive/dslive.5-8.0.png#thumbnail)


* Unchecking the box to the left of the column will make that column unavailable in any widgets including charts, metrics, and tables.  This option is used to remove unneeded columns.
* Columns can be renamed to a friendly, more descriptive name, for use in Qrvey widgets.  
* Numeric and date columns can have the default display format changed.  
* The Geolocation button allows mapping columns to addresses for map charts 

### Choosing the Visualization Format​
The system will pick a format for displaying date and numeric data in visualizations based on a smart algorithm. While this default format can be changed every time that a chart is created based on this data, you can also choose a different format for it at design time. For example, if a numeric data column contains currency data it may make sense to choose a Currency format for it, which will add the currency symbol before it and format it with two decimal places.

![dslive6](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/DatasetLive/dslive.6-8.0.png#thumbnail-40)

>**Note**: For date type columns you can choose from the pre-defined formats or enter a custom format directly in the field.

![dslive7](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/DatasetLive/dslive.7-8.0.png#thumbnail-40)


### Defining The Security Name For A Column​

![dslive8](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/DatasetLive/dslive.8-8.0.png#thumbnail-40)

If the data in a dataset has to be controlled by Record Level Security or RLS, the columns that play a role in this security have to be identified and given a security name. This name will be used at authentication time and the data will be filtered by the value of the set variable for each authenticated user. The menu item “Enable Record Level Security” in the dot menu of each secured column is used to assign a security name to the column. It is important to note that the mere action of giving the column a security name does not in fact “enable” RLS and this has to be done from the Qrvey Admin Center.  
For more information, see [Record Level Security](../../../../software-developer/03-Security/record-level-security.md).


### Setting Up Automatic Column Links​

![dslive9](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/DatasetLive/dslive.9-8.0.png#thumbnail-40)

Any column of the dataset can be set up so that it presents an automatic link to a selected URL when it is used in a visualization. A common use case for this feature is where a column contains a location and you want the column to always link to a map site, showing the location on the map. The automatic link can be set up from the Column Link command in the dot menu of the intended column.

For more information, see [Column Links](./column-links.md).


### Setting Up Geolocation Groups​
If your data contains address information that you wish to display on any type of map chart, you need to create a Geolocation Group out of your desired address fields.

![dslive10](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/DatasetLive/dslive.10-8.0.png#thumbnail)

![dslive11](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/DatasetLive/dslive.11-8.0.png#thumbnail-60)

To create a Geolocation Group you have to map your address data column or columns to the address type fields in the dialog. For example you may map the data column zip to the Postal/Zip Code field. While any portion of address is enough to create a Geolocation Group, mapping more columns, especially unique columns such as the country, help create more accurate points on your map charts.

You can give your geolocation group a name to identify it with.

## Optimizing the Live Connect Configuration

The performance of your live connection may vary depending on the size of the dataset and the size of the database cluster. Performance issues may occur if the database cluster is not sized appropriately for the dataset. Qrvey recommends that your live connect data source returns results in under 30 seconds to prevent timeout errors. To ensure optimal performance, scale the infrastructure of your live connect data source by:
- Loading a smaller dataset, if possible
- Increasing the database cluster
- Increasing the query timeout of your database engine 



</div>