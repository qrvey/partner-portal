---
id: datasets-managed
title: Datasets - Managed
sidebar_label: Datasets - Managed
tags: [Data Analyst]
sidebar_position: 2
displayed_sidebar: getting-started
---

<div>

Qrvey datasets are the data constructs that support all visualizations and dashboards created within the product. The Qrvey platform supports two types of datasets:
* **Managed**. The data is stored inside Qrvey’s data repository, which is a high-performance, scalable, serverless OpenSearch cluster. 
* **Live**. Directly accessed from the data source, enabling real-time queries without the need to load data. 

This article covers managed datasets. For more information on live connections, see [Datasets - Live Connect](../01-Overview%20of%20Datasets/datasets-live.md). 

Managed datasets can be based on one or more data sources. For more information on creating multi-source datasets, see [Data Joins](../02-Design/05-Data%20Joins/data-joins.md) and [Appending Data (Union)](../02-Design/06-Data%20Unions/data-union.md).

## Creating a Managed Dataset
To create a managed dataset, in the Data section, open the Datasets tab, click **Create New Dataset**, and select **New Managed Dataset**.  

![Create-New-Dataset-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Create-New-Dataset-84.png)

The Select the Data Source dialog displays. 

![Select-the-Data-Source](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds2.7.6.png#thumbnail-60)

This dialog enables you to specify where the data will be fetched from. The data source can be based on an existing connection, another dataset that you created earlier, or some other data construct that was created and shared. If none of these exist, you can create a new Connection by clicking the **Create New Connection** link. For more information, see [Connections](../../connections.md). 

Select a data source and click **Next**. If you selected a database connection, the Select Database and Query dialog displays. 

![Select-Database-and-Query-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Select-Database-and-Query-84.png)

Select one of the following options for defining the data to view from that database:
* **Tables and Views**. Select a table or view from the list. To display a partial view of the data, hover over a column name to display (and then click) the **View Source Data** link.  
* **SQL Query**. Enter a custom SQL query as your data source in the field provided. 

If you anticipate that the data will require 10 minutes or longer to load, select the **This is a long-running query** check box. Otherwise, you may experience timeout errors. For smaller datasets, leave this option clear for optimal performance. 

Click **Save**. The Design page for the newly created dataset displays. Use this page to configure your columns and dataset options before loading the data. For an introduction to the Design page, see [Overview of the Design Page](../02-Design/overview-of-design.md).

>Notice that the new dataset is given a default name, using the following format:  
>`{the connection name} - {table/view name}`  
>You may change this name to something more friendly to help you identify it later. Click on the name and enter a new one.

At this point, the dataset is not actually created or populated with data. You may return to the Datasets page, and you will see a new, draft dataset, with its default name and a gray bar next to it that indicates its being in draft mode.

![Dataset-in-Draft-mode](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset2.7.7.png#thumbnail-40)

Draft mode indicates that your selections have been saved and you can resume working on it at any time. Note that all design steps are optional and can be used to fully customize your dataset. For more information on the Datasets page, see [Overview of Datasets](../01-Overview%20of%20Datasets/overview-of-datasets.md).

Next steps:
* Configure your dataset. For more information, see the following section, “Customizing the Dataset”. 
* Load the dataset. For more information, see “Loading Data”. 

## Customizing the Dataset
This section describes various options for configuring the dataset. 

### Modify The Data Source
The Datasets tab provides several options for modifying the data source. Click the three-dot menu in the data source pill. The following menu displays:

![Modify-Data-Source](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds6.7.6.png#thumbnail-60)

Select one of the following options:
* **Edit Connection Settings**. Enables you to modify the properties of the connection for the data source. It is available for all types of data sources.
* **Edit Query**. Enables you to either select a different table or view from the same Connection or change the SQL query of a custom query data source.
   This option is only available for database data sources. 
   >**Note**: If the data source is MongoDB, the Edit Query dialog enables you to configure Queries, Aggregations, and Projections.
* **Join to Another Data Source**. Enables you to add another data source to the existing ones. For more information, see [Data Joins](../02-Design/05-Data%20Joins/data-joins.md). 
* **Union with Another Data Source**. Enables you to append or union the data from another data source to the existing ones. For more information, see [Appending Data (Union)](../02-Design/06-Data%20Unions/data-union.md). 
* **Switch for Another Data Source**. Enables you to select a data source from a connection other than the one currently in use.
* **Rename**. Enables you to change the name of the data source to something more meaningful to you.
* **Delete**.  Enables you to remove the selected data source from a join. This option is only available for data sources that have been joined with another.

>**Note**: Modifying the data source, such as by removing columns, renaming columns, or changing the data type, may break visualizations that have been built based on this dataset.

### Automatically Add New Dataset Columns
You can choose to allow the product to add any new columns that it finds during the data reload process. This feature is especially useful if the data source is a query or view that may change over time and include new data columns. This option is disabled by default. 

To enable this option, scroll to the bottom of the page and select **Automatically add new columns discovered during data loads**.

![Automatically-add-new-columns-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Automatically-add-new-columns-84.png)

### Select the Dataset Columns​
You may not need all of the columns from the data source to be included in the dataset. Use the check boxes to select the columns that you need. 

![choosecolumns](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds7.7.6.png#thumbnail-40)

Notice there are two check boxes:
* **Dataset**. The checkbox on the left determines whether the data column is included in the dataset. To remove a column, clear its check box. Do not remove any columns that are needed for synchronizing data or joining to another data source. 
* **Visualizations**. The checkbox on the right determines whether the column can be used for visualizations. Clear this box to hide the column from view. This option is useful for columns that have little analysis value, for example, an ID or key column. 

>**Note**: You cannot remove columns if Geolocation has been applied.

### Change the Column Name
You can give each data column a friendly name. Click in its box and enter a new name. This change does not require a data reload. 

To display helpful information about the column, hover over the field displayed to the right of its name. A tooltip displays with its friendly name, original column name, and original data type.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds5.7.6.png#thumbnail-60)

>**Note**: Use the Search box under Columns to quickly find columns by their names in a large dataset.  

### Change the Data Type
The Qrvey platform automatically determines the data type of each column by sampling the data source. However, you can refine or change the data type. To change the data type of a column, click its **Column Type** field and select the desired data type. This change requires a data reload (if it has already been loaded).

### Change the Input Format
The Input Format option is available when the system is unable to determine the input format of a column in a file upload. For example, with date type columns, a situation may occur in which the system cannot determine whether a date format is mm/dd or dd/mm. Carefully review and adjust input formats as needed. This change requires a data reload (if it has already been loaded).

![Input-Format](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds12.7.6.png#thumbnail-60)

### Change the Visualization Format
The Visualization Format option enables you to change the default format for displaying date and numeric data in visualizations. The initial format was chosen automatically by the Qrvey platform. 

This option is useful, for example, in cases in which a numeric data column contains currency data. You can change the visualization format to Currency, which adds the currency symbol and formats it with two decimal places.

![Visualization-Format](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds8.7.6.png#thumbnail-60)

You can also enter custom format directly in the field. Use the following syntax for custom formats: 

| Syntax | Type |
|----|----|
| `DD` | days |
| `HH` | hours |
| `mm` | minutes |
| `ss` | seconds |
| `SSS` | milliseconds |
| `YYYY` | year |
| `MM` | month |
| `DD` | day |
| `HH` | hour |
| `mm` | minute |
| `ss` | second |

Changing visualization formats does *not* require a data reload.

### Select Unique Identifier Columns
If you are the using Data Synchronization feature in *Append and Update* mode, you must select a unique identifier column. The unique ID may consist of a single column or a group of columns. For more information on data synchronization, see [Data Sync](../02-Design/04-Data%20Synchronization/data-sync.md).  

For each column that you want to set as a unique identifier, click it’s three-dot menu, point to **Unique ID**, and select **On**. 

![Unique-ID-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Unique-Id-84.png)

This change requires a data reload (if it has already been loaded).

### Define the Security Name for a Column
If the data in a dataset is controlled by Record Level Security (RLS), the columns used to filter the data need to be identified and given a security name. This name is used at authentication time and the data is filtered by the value of the set variable for each authenticated user. 

To assign a security name to a column, click its three-dot menu and select **Enable Record Level Security**. 

![Enable-Record-Level-Security-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Enable-Record-Level-Security-84.png)

The Record Level Security - Security Name dialog displays. Enter a security name and click **OK**. 

>**Note**: Assigning a security name does not, by itself, enable RLS. RLS must be configured in the Qrvey Admin Center. For more information, see [Record Level Security](../../../../software-developer/03-Security/record-level-security.md).

Defining the security name for a column does *not* require a data reload. 

## Set Up Automatic Column Links
Any column of the dataset can be set up so that it presents an automatic link to a selected URL when it is used in a visualization. A common use case for this feature is where a column contains a location and you want the column to always link to a map site, showing the location on the map.

To set up an automatic column link, click its three-dot menu, point to **Column Link**, and select **Set**. 

![Column-Link-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Column-Link-84.png)

For more information, see [Column Links](../01-Overview%20of%20Datasets/column-links.md). 

Setting up automatic links for a column does *not* require a data reload. 

>**Note**: If you are a Software Developer and would like to obtain the column ID, click the column’s three-dot menu and select **Copy Column ID**.

### Enable Dataset Sharing
Datasets are, by default, restricted to the Qrvey application in which they are created. If you need to access a dataset in another application, whether created by yourself or someone else, you can choose to *share* the Dataset.  

To share a dataset, open the Datasets page, click the Dataset’s three-dot menu, and select **Share Data with my Organization**. 

![Share-Data-with-my-Organization-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Share-Data-with-my-Organization-84.png)

The Share Data with my Organization dialog displays, indicating that Qrvey Composer users from other Qrvey applications will be able to select this dataset as a source for creating visualizations. Click **Share with my Organization**. A globe icon displays in the Type field, indicating that the dataset is shared. 

![Globe-icon-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Globe-icon-84.png)

To unshare a dataset, open the Datasets page, click the Dataset’s three-dot menu, and select **Unshare Data**. 

Keep in mind that unsharing a dataset will prevent Qrvey Composer users from other Qrvey applications to use this dataset as a source for a new dataset view and/or dataset.  Any existing dataset views and/or datasets that use this dataset as a source will no longer be available to users building charts and metrics.  Any existing charts and metrics that have a dependency on this dataset will no longer show any data.

### Set Up Geolocation Groups
The Geolocation Groups feature provides the capability to display address information in map charts. For more information, see [Overview of Geolocation](../02-Design/02-Geolocation/overview-of-geolocation.md). 

### Transformations
A Transformation provides the means to change any piece of data before loading it into a dataset. It is one of the most powerful features in the dataset design. Transformations can be simple, such as changing the values in a column to uppercase, or complex, such as parsing JSON objects into arrays. The transformed data can be loaded into the same column from which it originated, or it may spawn new columns. For more information, see [Transformations](../02-Design/03-Transformations/transformations.md). 

### View Source Data
The View Source Data option displays the first 100 rows of data from the data source. 

![View-Source-Data-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/View-Source-Data-84.png)

### Data Sync
The Data Syncronization option enables you to keep data up-to-date and synchronized. For more information, see [Data Sync](../02-Design/04-Data%20Synchronization/data-sync.md).   

## Loading Data
Once you have made all the necessary adjustments to your dataset, you may load the data. To begin loading your data, click **Load Dataset**. The Load Dataset dialog displays.

![Load-Dataset-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Load-Dataset-84.png)

Select the estimated size of the dataset and click **Load**. You may change this setting at a later time in Advanced Settings tab. For more information, see [Advanced Settings](../02-Design/07-Advanced%20Settings/dataset-design-advanced-settings.md).

The progress bar at the top-right of the screen indicates the current progress of the data load. You may continue working in Qrvey Composer while the data loads in the background. 

![Loading-Dataset](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/17datasets.png#thumbnail-40)

If you remain on the Design tab during the data load process, when it completes, the Summary view displays with information about the data loaded. 

![Summary-View](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/18datasets.png#thumbnail-60)

Events related to the data load process are logged in the [Activity Log](../../../activity-log.md). If any errors or issues occur with the data load, check the Activity Log for more information. 

</div>
