---
id: datasets
title: Datasets
sidebar_label: Datasets
---
<div style={{textAlign: "justify"}}>

In this section, we’ll explain how datasets are created using a single data source; how columns and data types are modified; how data is loaded; and how a dataset can be edited and reloaded.

>**Note**: To see how datasets are created from multiple data sources, please go to the <a href="/docs/ui-docs/datasets/joins/" target="_blank"> Data Joins article</a>.

## Creating Datasets
To create a dataset, go to the Datasets tab and click on **New Dataset**.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/new-dataset1.png#thumbnail-60)

Next, you will see a list of available connections to your data sources, if any have been created already. You could also select existing datasets as sources on the *Datasets* tab.
Select the desired connection and click on **Create**.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/2_Datasets.png#thumbnail-60)

If the selected connection is to a database, you get to choose a table or view from that database, or define a custom SQL query as your data source.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/table-query.png#thumbnail-60)
  
Once the data source is selected you will land in the *Design* section of your newly created dataset. This is where you can configure your columns and dataset options before loading the data.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset-panel.png#thumbnail)


1. All new datasets are given the name of the connection + {table/view} or Custom Query. Click on the name to change it and give your dataset a new name. This is just a friendly name and can be anything that helps you identify it later.
2. Here is where you can see the Data Sources of your Dataset, also you can see, add and edit <a href="/docs/ui-docs/datasets/joins" target="_blank">Data Joins</a>.
3. Read the column from the source and store it in the Dataset.
4. Allow the column to be used in building visualizations.
5. <strong>Column Type</strong> - view and change the type of the data in the column (*Text/Label, Numeric, DateTime*)
6. <strong>Input Format</strong> - if you change your data type to *DateTime*, you can choose its input (from the source) format here.
7. <strong>Visualization Format</strong> - set the visualization format for *DateTime* and *Numeric* data.
8. <strong>Transformations</strong>- add and edit <a href="/docs/ui-docs/datasets/transformations" target="_blank">Transformations</a>.
9. <strong>Geolocation</strong> - add and edit <a href="/docs/ui-docs/datasets/datasets#setting-up-geolocation-groups" target="_blank">Geolocation</a>. 
10. *Load Dataset/Reload Dataset/Apply Changes/Discard Changes*
11. Three-dot menu where you can <a href="/docs/next/ui-docs/datasets/datasets#enabling-dataset-sharing" target="_blank">Share Data with Everyone</a> (or Unshare Data), mark the dataset as favorite, or delete it.  



At this point, you can load the data and begin using it to create charts, pages or reports, or modify and shape the dataset based on your needs, before loading it with data.

## Options To Modify The Dataset
Other than the options presented in the UI, such as changing the name of the dataset, there are various powerful options that enable you to shape the dataset according to your needs. These options are explained in this section.

### Changing The Data Source
If the selected data source needs to be swapped out with another, either from the same connection or a different one, the following options are available from the dot menu on the data source pill:
* **Edit Connection Settings** - This option - available for all types of data sources - is mostly a shortcut and can be used to modify the properties of the connection for the data source, without the need to go to the Connections screen.
* **Edit Data Source Query** - Use this option if you want to either select a different table or view from the same Connection, or change the SQL query of a custom query data source.
Note that this option is available only for database data sources.
* **Join to Another Data Source** - This option can be used to add another data source to the existing ones. Please see the article on <a href="/docs/ui-docs/datasets/joins/" target="_blank"> Data Joins </a> to read more about joining data sources.
* **Select a Different Connection** - This option can be used to choose a data source from a connection other than the one currently in use.
* **Delete** - This option is only available for the data sources that have been joined with another, and can be used to remove the selected data source from the join.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/5datasets.png#thumbnail-60)

Replacing the data source by using any of these options may result in a change in the metadata and will require a reload of the data if it had been loaded before.

### Automatically Adding New Dataset Columns
If there are new columns discovered in an existing dataset during the data-load process from any Data Source, they will be automatically added to the dataset where they can be prepped for analysis. These columns are referred to as *New Columns* because they are not listed in the Dataset configuration or Data Source configuration, but are added later when posting new records. We don’t know they exist when creating or editing a Dataset.

The option to *Automatically add new columns discovered* during data loads is disabled by default. There are two ways to enable discovering new columns.

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> a) It can be enabled by checking the box under Source Data Column or both, Source Data and the Visualization Column.</li>

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/discover1.png#thumbnail) 


<li>b) It can be done from the three-dot menu by choosing <strong>Discovered Columns</strong>.</li>

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/discover2.png#thumbnail-60)
</ul>


### Choosing The Dataset Columns
You may not need all of the columns from the data source to be included in the dataset. Simply uncheck the columns that are not needed to exclude those from the dataset or the visualizations.
There are two checkboxes next to each column and by default they’re all checked:
* The first one on the left reads the column and stores it in the dataset
* The second one on the right allows the column to be used for visualizations.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/choose1.png#thumbnail)

When both boxes are checked, the column can be used for visualizations, Transformations, and Geolocation.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/choose2.png#thumbnail)

When unchecking the second checkbox, the *orderNumber* can’t be seen in Charts, Filters, Formulas, Buckets or Summary/Tabular Views. The visualization format can’t be changed. However, even if the column is not visible in visualization, you can still turn on/off the *Unique ID* and enable/disable *Record Level Security* settings; also you can use them for Transformations. Click on **Apply Changes**, but there’s no need to Reload the dataset.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/choose3.png#thumbnail)

When unchecking the first checkbox, the second one is automatically unchecked as well. The columns created by transformations don’t get deleted, but you can’t turn on/off a Unique ID or enable/disable Record Level Security. 
If a chart has already been created using the column before it got unchecked, there will be a message in the chart notifying you that a column is missing. You need to **Apply Changes** and **Reload** the dataset for the change to be effective.


>**Note**: If a Geolocation has already been applied to columns, the columns are blocked and unchecking the boxes next to them is disabled. 


### Giving Columns Friendly Names
Columns can be aliased to a friendlier name if needed. Simply click in the box where the column name is shown and change it to anything else.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/6datasets.png#thumbnail-60)

Changing column names will *not* require a data reload.
Hovering your mouse pointer over the column name box will make the original column name appear on the right side of the box. You may also hover over the original name to see additional information about the column, such as the original data source and data type.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset_tooltip.png#thumbnail-60)

### Changing The Data Type
The system automatically determines the data type of each column by sampling the data source. You can, however, refine or change the data type from the Column Type field.
Changing a column’s data type affects the underlying index’s structure and types, and will require a reload of the data if it has already been loaded.

### Adjusting The Input Format
This feature is mostly useful for date-type columns of file uploads, where the system may not be able to determine the input format of the date with certainty and it identifies it as a different *Column Type*. You can change the column type to *Date*, which enables the option to change the *Input Format* as well. For instance, if all dates are in a range like 01/01 to 12/12, where the input date format could be mm/dd or dd/mm. In order to remove the ambiguity, it is recommended that input formats, if listed, be carefully reviewed and adjusted to match the input data format.
The new *Input Format* can be either chosen from the dropdown menu, or typed into the *Input Format* box.
 
![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/new-input.png#thumbnail-40)

 Changing a column’s Input Format will require a reload of the data, if it has already been loaded.

### Choosing A Visualization Format
You can also change the formatting of the date and numeric columns. This format will be used in the rest of the application whenever the column is used. For example, when a numeric column is assigned a Currency format, it will be displayed as currency with the $ sign, when it is used in a chart.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/8datasets.png#thumbnail-40)

You can also decide the number of decimal places for numeric values. Changing visualization formats will *not* require a data reload.

### Selecting A Unique Identifier Column
If the data in a dataset has to be refreshed using the data synchronization feature in an “append and update” mode, it is important to have a unique identifier for each record. The unique ID may consist of a single column or a group of columns. Columns that make up the unique identifier can be marked as such from the option in the dot menu for each column.
To learn about data synchronization and the role of unique IDs in it, please see the <a href="/docs/ui-docs/datasets/data-sync" target="_blank">Data Sync</a> article.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/9datasets.png#thumbnail-40)

Changing the unique identifier for a dataset will require a reload of the data if it has already been loaded.

### Defining The Security Name For A Column
If the data in a dataset has to be controlled by Record Level Security or RLS, the columns that play a role in this security have to be identified and given a security name. This name will be used at authentication time and the data will be filtered by the value of the set variable for each authenticated user.
The menu item “Enable Record Level Security” in the dot menu of each secured column is used to assign a security name to the column. It is important to note that the mere action of giving the column a security name does not in fact “enable” RLS and this has to be done from the Admin Center.
For more information about RLS and how to set it up see the <a href="/docs/admin/record-level-security/" target="_blank">Record Level Security article</a>.
Defining the security name for a column will *not* require a data reload.

### Setting Up Automatic Column Links
Any column of the dataset can be set up so that it presents an automatic link to a selected URL when it is used in a visualization. A common use case for this feature is where a column contains a location and you want the column to always link to a map site, showing the location on the map.
The automatic link can be set up from the Column Link command in the dot menu of the intended column.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/10datasets.png#thumbnail-40)

For detailed information about <a href="/docs/ui-docs/datasets/column-links/" target="_blank">Column Links</a> see the article dedicated to the subject.
Setting up automatic links for a column will not require a data reload.

### Enabling Dataset Sharing
Datasets are always restricted to users that belong to the same application, by default. If you want users with access to other applications to have the ability to access this dataset as a source for building charts and metrics, as well as use this dataset as a source for creating new datasets that reside in other applications, then you can choose to share this dataset. Click on the three-dot menu in the upper-right corner of the dataset UI and then select **Share Data with Everyone**.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset-share.png#thumbnail-40)

A modal dialog box will appear to prompt you for confirmation, and then users from other applications will be able to select this dataset as a source for creating a new dataset or a dataset view. For more information about dataset views, please refer to the <a href="/docs/ui-docs/datasets/dataset-views/" target="_blank">Dataset Views</a> article.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset-share2.png#thumbnail-40)

Shared datasets have a visual globe icon adjacent to the **Type** indicator on the main dataset page. You can “unshare” the dataset at any time by clicking the same three-dot menu and then selecting **Unshare Data**.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset-share3.png#thumbnail-40)

Be advised that unsharing a dataset will prevent users from other applications to use this dataset as a source for a new dataset view and/or dataset. Any existing dataset views and/or datasets that use this dataset as a source will no longer be available to users building charts and metrics. Any existing charts and metrics that have a dependency on this dataset will no longer show any data.

### Setting Up Geolocation Groups
If your data contains address information, you can choose to create a Geolocation Group out of any number of address fields. A Geolocation can be used to create various map charts.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/11datasets.png#thumbnail-20)

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/12datasets.png#thumbnail-60)

Geolocation groups require a column to be identified as *country* or *zip code*, as these allow for a point to be uniquely marked on a map.
Assign a name to your group and select either a *country* or *zip code* column to begin. At this point, you have the option to choose additional columns such as *Street Line, City, State, Zip Code* or *Country*.
Defining, or changing Geolocation Groups will **not** require a data reload.

### Transformations
Applying Transformations to the dataset is probably the most powerful feature in the dataset design.
A *Transformation provides the means to change any piece of data __before__ loading it into a dataset*. Transformations can be simple, like turning a column’s values to uppercase, or as complex as needed, like parsing JSON objects into arrays. The changed data can be loaded into the same column that was the basis of the Transformation, or it may spawn new columns.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/13datasets.png#thumbnail-20)

To access the Transformations screen click on the Transformation button in the top right corner of the columns list.
Transformations are discussed in detail in a <a href="/docs/ui-docs/datasets/transformations/" target="_blank">dedicated article</a>.
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

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/16datasets.png#thumbnail)

On the *Data Syncs* tab, you will be able to set up a schedule to automatically synchronize the Dataset with the source data, replace all records or pull in just the ones updated since the last load.
* **Full Reload loads all of the data again whenever a reload process begins** — It works as an overwrite of the existing data.
* **Append and Update Records** - It loads only the new and updated records whenever a scheduled process begins.
You can determine when you want this to happen by configuring the scheduling options: when the refresh should begin (date and time), how often it should happen, and when it should stop if ever.
Data Syncing is available for single-source datasets as well as datasets using joins.
Data Synchronization has been described in detail in a <a href="/docs/ui-docs/datasets/data-sync/" target="_blank">dedicated article</a>. 

## Loading Data
Once you have made all the necessary adjustments and are happy with the design of your dataset, you can begin loading your data by clicking **Load Data**. This process may take a few seconds or a few minutes, depending on the amount of data to be loaded.
The progress bar at the top-right of the screen will indicate the current progress of the data load. You may navigate away and continue working in other parts of the product while the data loads in the background.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/17datasets.png#thumbnail-40)

However, if you decide to wait for the data load to finish, you will be redirected to the *Summary View* where you’ll have access to your data profile, once your data has been successfully loaded.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/18datasets.png#thumbnail)

## Datasets Section
Once you have at least one dataset, it will be listed as a card in the Datasets section of the product.
The green indicator to the left of the card means that data was loaded successfully and that the dataset is now active and ready to be used. A gray indicator means the dataset is in a draft state; i.e. it has not been loaded yet, and a red indicator means that loading the data has failed. Check the Activity Logs of the dataset to learn more about the issue if any error or warning is shown.
*Card View* is the default view of this section, but it can be changed to a list view if preferred.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset-board.png#thumbnail)

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset-list.png#thumbnail)

By default, datasets are sorted by their last edit time, with the most recently edited and the favorites showing up first. Users can easily manage their favorite Datasets in *Card View* by selecting and deselecting the star icon.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/21datasets.png#thumbnail-60)

The same can be achieved from the stars in the leftmost column in the List/Tabular View. Additionally, Datasets can be sorted by any of their properties from the header of each column in the table.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/dataset-list2.png#thumbnail)

Select any Dataset to edit by clicking its name in either view. This takes you back to the Dataset Design page. As soon as any change is made to the dataset the **Apply Changes** and **Discard Changes** buttons will appear.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/23datasets.png#thumbnail)

Once you finish editing the dataset, click on **Apply Changes**. Changes to the *metadata* of the dataset (column aliases, geolocation groups, and the like) can be applied without the need for a data reload, but changes to the structure of the dataset will require the data to be loaded again. If a reload is necessary, you will be prompted by the system when you apply your changes.
If you change your mind after you have started a load, you can always cancel the process by clicking on the **Cancel** link that appears next to the progress bar. This will return the data to its original state.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/24datasets.png#thumbnail-40)

## Activity Log
In the *Activity Log* section, you can find the actions taken on the dataset logged for your information. A *success* message will be shown when the event is completed successfully, and an *error* message will appear when the event failed. Error messages have the option of seeing the details of why the error occurred.
With the* Download Log File* option, you can download the event in the activity log and get the error details in text format as well.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/25datasets.png#thumbnail)

</div>

