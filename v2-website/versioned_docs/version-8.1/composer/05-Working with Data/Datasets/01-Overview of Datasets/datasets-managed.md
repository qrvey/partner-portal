---
id: datasets-managed
title: Datasets - Managed
sidebar_label: Datasets - Managed
tags: [Data Analyst]
sidebar_position: 2
displayed_sidebar: data-analyst
---

<div>

Qrvey Datasets are the data constructs that support all visualizations and dashboards created within the product. Datasets can be based on one or more Data Sources, and they can be *Managed* (stored inside Qrvey’s data repository), or *Live* (directly accessed from the data source). This article focuses on Managed, single source Datasets and the options to design it in the best way to enable easy analysis of the data.  All topics discussed in this article also apply to multi-source Datasets. You can learn more about [Live Connect Datasets](./datasets-live.md) in the dedicated article. 


>**Note**: Please see 
[Data Joins](../datasets/design/data-joins/data-joins.md) and [Union](../datasets/design/data-union/) articles for more information on creating multi-source Datasets.


## Creating Datasets
To create a dataset, go to the Datasets tab and click on **New Dataset**.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/new-dataset1.png#thumbnail-40)
 
The first step to creating a Dataset is to choose its data source, aka where its data has to be fetched from. The data source can be based on a Connection, another Dataset you created earlier, or some other data construct that was created by someone else, or by you inside another app, and shared. If none of these exist, you can always create a new Connection from this screen by clicking the **Create New Connection** link and following the same steps that were described in the [Connections](../../Connections/databases.md) article.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds2.7.6.png#thumbnail-60)

Choose the data source by checking the radio button next to it and click on **Next**. If you select a database connection, you get to choose a table or view from that database, or define a custom SQL query as your data source. In both of these cases a checkbox lets you choose whether to apply pagination to the query or not. This option is on by default and wraps the query in a paging statement to prevent lengthy queries from causing a timeout in the function that fetches the data from the data source. The feature, however, causes some slowness in load, due to fetching data one page at a time, and moving the paging cursor further and further into the data. You can choose to disable pagination if you believe that your data is not large enough to cause a timeout.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds3.7.6.png#thumbnail)

Click on **Save** button once the data source is selected or the custom query is written and tested. This will take you the next step, which is the main design interface for the newly created dataset. This is where you can configure your columns and dataset options before loading the data. All new datasets are given the default name of *{the connection name} - {table/view name}*. Click on the name to change it and give your dataset a new name. This is just a friendly name and can be anything that helps you identify it later. Note that at this point the dataset is not actually created or hydrated with data, but if you stop here and return to the Datasets screen you will see a new, draft Dataset, with its default name and a gray bar next to it that indicates its being in draft mode.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset2.7.7.png#thumbnail-40)

This means that some meta data, containing your selections, has been saved in the product’s database and you can pick up your work from where you left it by clicking on it and continuing with the design step. Note that all design steps are optional and can be used to fully customize your Dataset. If you want to keep it similar to its data source you can proceed to loading it by clicking the **Load Dataset** button and begin using it to create charts or dashboards.

## Options To Modify The Dataset
Other than the options readily presented in the UI, such as changing the name of the Dataset, there are various powerful options that enable you to shape the dataset according to your needs. These options are explained in this section.

### Changing The Data Source

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds6.7.6.png#thumbnail-60)

If the selected data source needs to be changed in any way, including being swapped out, joined, or unioned with, the following options are available from the three-dot menu on the data source pill:
* **Edit Connection Settings** - This option - available for all types of data sources - is primarily a shortcut and can be used to modify the properties of the connection for the data source, without the need to go to the Connections screen.
* **Edit Query** - Use this option if you want to either select a different table or view from the same Connection or change the SQL query of a custom query data source.
Note that this option is only available for database data sources.

* **Join to Another Data Source** - This option can be used to add another data source to the existing ones. Please see the article on [Data Joins](../02-Design/05-Data%20Joins/data-joins.md) to read more about joining data sources.
* **Union with Another Data Source** - This option can be used to append or union the data from another data source to the existing ones. Please see the article on [Appending Data](../02-Design/06-Data%20Unions/data-union.md) to read more about the union option. 
* **Switch for Another Data Source** - This option can be used to choose a data source from a connection other than the one currently in use.
* **Rename** - You can give your data sources an alias or a friendly name that is more meaningful to you.
* **Delete** - This option is only available for the data sources that have been joined with another, and can be used to remove the selected data source from the join.

>**Note**: Replacing the data source by using some of these options may result in a change in the metadata and require a reload of the data, if it had been loaded before. This may break visualizations that have been built based on this Dataset, if the used columns are removed, renamed, or change data type.

### Automatically Adding New Dataset Columns
You can choose to allow the product to add any new columns that it finds during the data reload process. This feature is especially useful if the data source is a query or view that may change over time and include new data columns. 

The option to *Automatically add new columns discovered during data loads* is disabled by default. There are two ways to enable discovering new columns.

1. It can be enabled by checking the box under Source Data Column or both, Source Data and the Visualization Column.

![discover1](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds10.7.6.png)

2. It can be done from the three-dot menu by choosing **Discovered Columns** and picking the desired option. 

![discover2](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds11.7.6.png#thumbnail-60)

### Choosing The Dataset Columns​
You may not need all of the columns from the data source to be included in the dataset. Simply uncheck the columns that are not needed to exclude those from the Dataset or the visualizations. There are two checkboxes next to each column and by default they are both checked:
* The one on the left determines if the data column has to be included in the Dataset
* The one on the right allows the column to be used for visualizations

Note that by unchecking the first box the data column is physically excluded from the Dataset. That means that you should not remove any columns that are going to be needed for synchronizing the data or joining one data source with another. 

You may include the data column in the Dataset, but hide it from view by unchecking the second box. An example of such a case might be for the ID or a “key” column. Such a column may be used for joining the data, but has little, or no analysis value. 

In the image below, Customer Number is the ID column and will be hidden from Charts, Filters, Formulas, Buckets or Summary/Tabular Views., but will still exist in the Dataset.



![choosecolumns](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds7.7.6.png#thumbnail-40)

Removing a column from the Dataset inevitably removes it from the list of the columns that are available for analysis. I.e. the checkbox to the right will automatically be unchecked, too.

> *Note:* If a Geolocation has already been applied to columns, the columns are blocked and unchecking the boxes next to them is disabled.


### Giving Columns Friendly Names
You can give each data column a friendly name by changing its default name. The actual/original column name is displayed in the field when you hover over the field. Other helpful information is also displayed in a tooltip.

Changing column names will *not* require a data reload.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds5.7.6.png#thumbnail-60)

### Changing The Data Type
The system automatically determines the data type of each column by sampling the data source. However, you can refine or change the data type from the Column Type field.  
Changing a column’s data type affects the underlying index’s structure and types, and will require a reload of the data if it has already been loaded.


### Adjusting The Input Format
This feature is mostly useful for date type columns of file uploads, where the system may not be able to determine the input format of the date with certainty. For instance, if all dates are in a range like 01/01 to 12/12, where the input date format could be mm/dd or dd/mm. In order to remove the ambiguity, it is recommended that input formats, if listed, be carefully reviewed and adjusted to match the input data format.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds12.7.6.png#thumbnail-60)

Changing a column’s input format will require a reload of the data if it has already been loaded.

### Choosing the Visualization Format
The system will pick a format for displaying date and numeric data in visualizations based on a smart algorithm. While this default format can be changed every time that a chart is created based on this data, you can also choose a different format for it at design time. For example, if a numeric data column contains currency data it may make sense to choose a Currency format for it, which will add the currency symbol before it and format it with two decimal places.

![viz1](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds8.7.6.png#thumbnail-60)

> **Note:** For date type columns you can choose from the pre-defined formats or enter a custom format directly in the field.

![viz2](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/ds9.7.6.png#thumbnail-60)

Changing visualization formats will *not* require a data reload.

### Selecting A Unique Identifier Column
If the data in a dataset has to be refreshed using the data synchronization feature in an “append and update” mode, it is important to have a unique identifier for each record. The unique ID may consist of a single column or a group of columns. Columns that make up the unique identifier can be marked as such from the option in the dot menu for each column.  
To learn about data synchronization and the role of unique IDs in it, please see the 
[Data Sync](../02-Design/04-Data%20Synchronization/data-sync.md) article.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/9datasets.png#thumbnail-40)

Changing the unique identifier for a dataset will require a reload of the data if it has already been loaded.

### Defining The Security Name For A Column
If the data in a dataset has to be controlled by Record Level Security or RLS, the columns that play a role in this security have to be identified and given a security name. This name will be used at authentication time and the data will be filtered by the value of the set variable for each authenticated user.
The menu item “Enable Record Level Security” in the dot menu of each secured column is used to assign a security name to the column. It is important to note that the mere action of giving the column a security name does not in fact “enable” RLS and this has to be done from the Admin Center.

For more information about RLS and how to set it up see the [Record Level Security](../../../../software-developer/03-Security/record-level-security.md) article.


Defining the security name for a column will *not* require a data reload.

### Setting Up Automatic Column Links
Any column of the dataset can be set up so that it presents an automatic link to a selected URL when it is used in a visualization. A common use case for this feature is where a column contains a location and you want the column to always link to a map site, showing the location on the map.
The automatic link can be set up from the Column Link command in the dot menu of the intended column.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/10datasets.png#thumbnail-40)

For detailed information about [Column Links](./column-links.md) see the article dedicated to the subject.

Setting up automatic links for a column will not require a data reload.

### Enabling Dataset Sharing
Datasets are always restricted to users that belong to the same application, by default. If you want users with access to other applications to have the ability to access this dataset as a source for building charts and metrics, as well as use this dataset as a source for creating new datasets that reside in other applications, then you can choose to share this dataset. Click on the three-dot menu in the upper-right corner of the dataset UI and then select **Share Data with Everyone**.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset-share.png#thumbnail-40)

A modal dialog box will appear to prompt you for confirmation, and then users from other applications will be able to select this dataset as a source for creating a new dataset or a dataset view. For more information, see [Dataset Views](./dataset-views.md).

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset-share2.png#thumbnail-40)

Shared datasets have a visual globe icon adjacent to the **Type** indicator on the main dataset page. You can “unshare” the dataset at any time by clicking the same three-dot menu and then selecting **Unshare Data**.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset-share3.png#thumbnail-40)

Be advised that unsharing a dataset will prevent users from other applications to use this dataset as a source for a new dataset view and/or dataset. Any existing dataset views and/or datasets that use this dataset as a source will no longer be available to users building charts and metrics. Any existing charts and metrics that have a dependency on this dataset will no longer show any data.

### Setting Up Geolocation Groups
See [Overview of Geolocation](../02-Design/02-Geolocation/overview-of-geolocation.md).
 
### Transformations
Applying Transformations to the dataset is probably the most powerful feature in the dataset design.
A *Transformation provides the means to change any piece of data __before__ loading it into a dataset*. Transformations can be simple, like turning a column’s values to uppercase, or as complex as needed, like parsing JSON objects into arrays. The changed data can be loaded into the same column that was the basis of the Transformation, or it may spawn new columns.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/13datasets.png#thumbnail-20)

To access the Transformations screen click on the Transformation button on the top right corner of the columns list.

For more information, see [Transformations](../02-Design/03-Transformations/transformations.md).

Adding or changing Transformations will require a reload of the data if it has already been loaded.

### Other Available Features
There are plenty of other features available in the dataset design step. Some of these features are listed below.
* **Marking a dataset as favorite** - A dataset can be marked as a favorite by clicking on the star icon at the top of the screen. Favorite datasets appear on the top of the dataset list screen.
* **General information about the dataset** - Once a dataset is loaded with data, certain pieces of information are displayed about it at the top of the screen. These include its creation date, status, and more.
![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/14datasets.png#thumbnail)
* **Search Box** - You can look for columns by their names from the search box above the list of columns.
* **Viewing source data** - If you would like to see a partial view of the source data, click on **View Source Data**. This displays the first 100 rows of data, as it stands in each data source.
![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/15datasets.png#thumbnail)
* **Refreshing (Synchronizing) data** - Data can be partially, or fully, reloaded based on a schedule to keep the dataset in sync with the data source(s) that may get new data as time goes by.

![1_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/ds1.png)

On the *Data Syncs* tab, you will be able to set up a schedule to automatically synchronize the Dataset with the source data, replace all records or pull in just the ones updated since the last load.
* **Full Reload loads all of the data again whenever a reload process begins** — It works as an overwrite of the existing data.
* **Append and Update Records** - It loads only the new and updated records whenever a scheduled process begins.  
You can determine when you want this to happen by configuring the scheduling options: when the refresh should begin (date and time), how often it should happen, and when it should stop if ever. 

Data Syncing is available for single-source datasets as well as datasets using joins.

For more information, see [Data Synchronization](../02-Design/04-Data%20Synchronization/data-sync.md).

## Loading Data
Once you have made all the necessary adjustments and are happy with the design of your dataset, you can begin loading your data by clicking **Load Data**. This process may take a few seconds or a few minutes, depending on the amount of data to be loaded.  
The progress bar at the top-right of the screen will indicate the current progress of the data load. You may navigate away and continue working in other parts of the product while the data loads in the background.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/17datasets.png#thumbnail-40)

However, if you decide to wait for the data load to finish, you will be redirected to the *Summary View* where you’ll have access to your data profile, once your data has been successfully loaded.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/18datasets.png#thumbnail-60)

## Datasets Section
Once you have at least one dataset, it will be listed as a card in the Datasets section of the product.
The green indicator to the left of the card means that data was loaded successfully and that the dataset is now active and ready to be used. A gray indicator means the dataset is in a draft state; i.e. it has not been loaded yet, and a red indicator means that loading the data has failed. Check the Activity Logs of the dataset to learn more about the issue and if any error or warning is shown.
 
When changes have been made to the dataset, the *Status* changes to **Active (Pending Changes)** to inform the user that those changes need to be applied before they become visible in the Chart Builder.
 
![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset3.7.7.png#thumbnail-40)
 
 
Card view is the default view of this section, but it can be changed to a list view if preferred.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset4.7.7.png#thumbnail)
![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset5.7.7.png#thumbnail)

By default, datasets are sorted by their last edit time, with the favorites and  the most recently edited showing up first. Users can easily manage their favorite Datasets in Card View by selecting and deselecting the star icon. The same can be achieved from the stars in the leftmost column in the List/Tabular View. Additionally, Datasets can be sorted by any of their properties from the header of each column in the table.

Select any Dataset to edit by clicking its name in either view. This takes you back to the Dataset Design page. As soon as any change is made to the dataset the **Apply Changes** and **Discard Changes** buttons will appear.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/23datasets.png#thumbnail)

Once you finish editing the dataset, click on **Apply Changes**. Changes to the *metadata* of the dataset (column aliases, geolocation groups, and the like) can be applied without the need for a data reload, but changes to the structure of the dataset will require the data to be loaded again. If a reload is necessary, you will be prompted by the system when you apply your changes.

If you change your mind after you have started a load, you can always cancel the process by clicking on the **Cancel** link that appears next to the progress bar. This will return the data to its original state.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/24datasets.png#thumbnail-40)

## Activity Log
In the *Activity Log* section, you can find the actions taken on the dataset that you are working on. These include dataset creation and updates [of its structure], initial and subsequent loads, and data synchronization jobs. A success message will be shown when the event is completed successfully, and an error message will appear if the event fails. All load and reload logs have a *Details* link where you can see who, or what - in the case of syncs - has started the process, how many records were loaded, how long the process took, and more. In case of an error in loading the records a link appears that allows you to get access to the list of the failed records stored in your AWS account. AWS account permissions are needed to access the list. 

With the *Download Log File* option, you can download the event in the activity log and get the error details in text format as well. 

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset1.7.7.png)
</div>

