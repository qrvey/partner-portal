---
id: managed-datasets
title: Managed Datasets
sidebar_label: Managed Datasets
tags: [Data Analyst]
sidebar_position: 2
displayed_sidebar: getting-started
---

Managed Datasets offer a scalable, secure solution for storing and processing large volumes of data within the Qrvey platform. Enjoy fast, reliable analytics with features like automatic indexing and optimized querying, making it easy to manage and gain insights. Stored in Qrvey’s high-performance, serverless OpenSearch cluster, Managed Datasets can be based on one or more data sources. For more information on creating multi-source datasets, see [Data Joins](../02-Design/05-Data%20Joins/data-joins.md) and [Appending Data (Union)](../02-Design/06-Data%20Unions/data-union.md).

## Create a Managed Dataset

![Create-New-Dataset-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Create-New-Dataset-84.png)

To create a managed dataset, follow these steps:

1. Go to the **Data** section and open the **Datasets** tab.
2. Click **Create New Dataset** and select **New Managed Dataset**. A dialog will open.

![Select-the-Data-Source](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds2.7.6.png#thumbnail-60)

This dialog enables you to specify where the data will be fetched from. The data source can be based on an existing connection, a dataset you previously created, or another data structure that was created and shared. If none of these exist, you can create a new Connection by clicking the **Create New Connection** link. For more information, see [Connections](../../connections.md). 

3. Select a data source and click **Next**.  
   If you selected a database connection, the **Select Database and Query** dialog displays. 

![Select-Database-and-Query-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Select-Database-and-Query-84.png)

4. Select one of the following options for defining the data to view from that database:
   * **Tables and Views**. Select a table or view from the list. To display a partial view of the data, hover over a column name to display (and then click) the **View Source Data** link.  
   * **SQL Query**. Enter a custom SQL query as your data source in the field provided. 

5. Optional: If you anticipate that the data will require 10 minutes or longer to load, select the **This is a long-running query** check box. Otherwise, you may experience timeout errors. For smaller datasets, leave this option clear for optimal performance. 

6. Click **Save**.  
   The Design page for the newly created dataset displays. 
   
7. Use this page to configure your columns and dataset options before loading the data. To learn more, please read [Overview of the Design Page](../02-Design/overview-of-design.md).

The new dataset is given a default name using the following format:  `{the connection name} - {table/view name}` which you can edit by clicking on the name and entering a new one.

At this point, the dataset is not actually created or populated with data. You may return to the Datasets page, and you will see a new, draft dataset, with its default name and a gray bar next to it that indicates its being in draft mode.

![Dataset-in-Draft-mode](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset2.7.7.png#thumbnail-40)

Draft mode indicates that your selections have been saved and you can resume working on it at any time. Note that all design steps are optional and can be used to fully customize your dataset.

8. [Customize and Configure the Dataset](#customize-the-dataset) as desired.
9. Once your dataset is configured, [Load the Data](#load-data).

## Synchronize Data
[Data Synchronization](../02-Design/04-Data%20Synchronization/data-sync.md) enables you to keep data up-to-date and synchronized.   

## View Source Data

![View-Source-Data-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/View-Source-Data-84.png)

View Source Data displays the first 100 rows of data from the data source. 

## Modify The Data Source

![Modify-Data-Source](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds6.7.6.png#thumbnail-60)

1. Click the three-dot menu in the data source pill.
2. Select one of the following options:
- **Edit Connection Settings** — Modify the properties of the data source's connection. Available for all data sources.
- **Edit Query** — Select a different table or view from the same Connection or change the SQL query of a custom query data source.  
   **Note**: This option is only available for database data sources. If the data source is MongoDB, the Edit Query dialog enables you to configure Queries, Aggregations, and Projections.
- **Join to Another Data Source** — Add another data source to the existing ones. For more information, see [Data Joins](../02-Design/05-Data%20Joins/data-joins.md). 
- **Union with Another Data Source** — Append or union the data from another data source to the existing ones. For more information, see [Appending Data (Union)](../02-Design/06-Data%20Unions/data-union.md). 
- **Switch for Another Data Source** — Select a data source from a connection other than the one currently in use.
- **Rename** — Change the name of the data source.
- **Delete** — Remove the selected data source from a join. Only available for data sources that have been joined with another.

>**Note**: Modifying the data source by removing columns, renaming columns, or changing the data type, may break visualizations previously built based on this dataset.

## Automatically Add New Dataset Columns

Allow the product to add any new columns that it finds during the data reload process. This feature is especially useful if the data source is a query or view that may change or include new data columns over time. This option is disabled by default. 

![Automatically-add-new-columns-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Automatically-add-new-columns-84.png)

To enable this option, follow these steps.
1. Scroll to the bottom of the page.
2. Select **Automatically add new columns discovered during data loads**.

## Select the Dataset Columns​

![choosecolumns](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds7.7.6.png#thumbnail-40)

You may not need all the columns from the data source to be included in the dataset. 

1. Use the check boxes to select the columns as desired. Notice there are two check boxes.
- **Dataset** — The checkbox on the left determines whether the data column is included in the dataset. To remove a column, clear its check box. Do not remove any columns that are needed for synchronizing data or joining to another data source.
- **Visualizations** — The checkbox on the right determines whether the column can be used for visualizations. Clear this box to hide the column from view. This option is useful for columns that have little analysis value, for example, an ID or key column.  
   >**Note**: You cannot remove columns if Geolocation has been applied.

## Change Column Name

1. Click on its box and enter a new name. This change does not require a data reload. 

To display helpful information about the column, hover over the field displayed to the right of its name. A tooltip displays with its friendly name, original column name, and original data type.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds5.7.6.png#thumbnail-60)

>**Note**: Use the Search box under Columns to quickly find columns by their names in a large dataset.  

## Change the Data Type
The Qrvey platform automatically determines the data type of each column by sampling the data source. However, you can refine or change the data type. 

To change the data type of a column:
1. Click its **Column Type** field and select the desired data type.  
   This change requires a data reload (if it has already been loaded).

## Change the Input Format

![Input-Format](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds12.7.6.png#thumbnail-60)

The Input Format option is available when the system is unable to determine the input format of a column in a file upload. For example, with date type columns, a situation may occur in which the system cannot determine whether a date format is mm/dd or dd/mm. Carefully review and adjust input formats as needed. This change requires a data reload (if it has already been loaded).

## Change the Visualization Format
The Visualization Format option enables you to change the default format for displaying date and numeric data in visualizations. Changing visualization formats does *not* require a data reload.
 The initial format was chosen automatically by the Qrvey platform. 

This option is useful in various cases, such as when a numeric data column contains currency data. You can change the visualization format to Currency, which adds the currency symbol and formats it with two decimal places.

![Visualization-Format](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds8.7.6.png#thumbnail-60)

You can also enter custom Date format with the following syntax: 

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


## Select Unique Identifier Columns

![Unique-ID-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Unique-Id-84.png)

If you are the using [Data Synchronization](../02-Design/04-Data%20Synchronization/data-sync.md) feature in *Append and Update* mode, you must select a unique identifier column. The unique ID may consist of a single column or a group of columns.

To set a unique identifier on a column:
1. Click it’s three-dot menu.
2. Point to **Unique ID**.
3. Select **On**.  
   This change requires a data reload (if it has already been loaded).

## Define a Column Security Name

![Enable-Record-Level-Security-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Enable-Record-Level-Security-84.png)

If the data in a dataset is controlled by Record Level Security (RLS), the columns used to filter the data need to be identified and given a security name. This name is used at authentication time and the data is filtered by the value of the set variable for each authenticated user. 

>**Note**: Assigning a security name does not, by itself, enable RLS. RLS must be configured in the Qrvey Admin Center. For more information, see [Record Level Security](../../../../software-developer/03-Security/record-level-security.md).

To assign a security name to a column:
1. Click its three-dot menu and select **Enable Record Level Security**.
2. The **Record Level Security - Security Name** dialog displays.
3. Enter a security name and click **OK** to confirm.  
   Defining the security name for a column does *not* require a data reload. 

## Set Up Automatic Column Links

![Column-Link-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Column-Link-84.png)

Any dataset column can be configured so that it automatically presents a link to a selected URL when it is used in a visualization. A common use case for this feature is where a column contains a location and you want the column to always link to a map site, showing the location on the map. For more information, see [Column Links](../01-Overview%20of%20Datasets/column-links.md). 

To set up an automatic column link:
1. Click its three-dot menu.
2. Point to **Column Link**.
3. Click **Set**.  
   Setting up automatic links for a column does *not* require a data reload. 

>**Note**: To obtain a column's ID for development purposes, click the column’s three-dot menu and select **Copy Column ID**.

## Configure Geolocation Groups

The [Geolocation Groups](../02-Design/02-Geolocation/overview-of-geolocation.md) feature displays address information in map charts. 

## Transform Column Data
A [Transformation](../02-Design/03-Transformations/transformations.md) enables you to change any piece of data before loading it into a dataset. Transformations may be simple, such as changing the values in a column to uppercase, or more complex, such as parsing JSON objects into arrays. Transformed data can be loaded into the same column from which it originated, or into new columns.


## Load Data

Once the dataset is configured as desired, you may load the data.

1. Click **Load Dataset**. The Load Dataset dialog will appear.
2. Select the estimated size of the dataset and click **Load**. The progress bar at the top-right of the screen indicates the current progress of the data load. 
   You may continue working in Qrvey Composer while the data loads in the background.  
   This estimate can be changed at a later time in the [Advanced Settings](../02-Design/07-Advanced%20Settings/dataset-design-advanced-settings.md) tab.  
3. If you remain on the Design tab during the data load process, once complete, the Summary view displays information about the data loaded. 
4. To view events, errors or issues with the data load, please check the [Activity Log](../../../activity-log.md).
