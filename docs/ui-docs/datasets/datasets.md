---
id: datasets
title: Datasets
sidebar_label: Datasets
---

<div style="text-align: justify">

In this section, we’ll explain how datasets are created using a single data source, how columns and data types are modified, how data is loaded, and how a dataset can be edited and reloaded

> Note: To see how datasets are created from multiple data sources, please see the
 <a href="/docs/ui-docs/datasets/joins/#joins"> <strong> Data Joins  </strong> </a> article.


## Creating Datasets
To create a dataset, go to the *Datasets* tab and click on **New Dataset**. 

![1_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/1_Datasets.png#thumbnail-40)

Next, you will see a list of connections available to select as your data source. You could also select existing datasets as sources in the *Datasets* tab. 
Select the desired connection and click on **Create**. 

![2_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/datasets_1.png#thumbnail-40)


You will land in the _Design_ section of your newly created dataset. This is where you can configure your columns and dataset options before loading the data. 

Click on **Untitled Dataset** to give your dataset a name.

![3_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/3_Datasets.png#thumbnail-40)
<br> <br/>
![4_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/4_Datasets.png#thumbnail-40)

At this point, you can load the data and begin using it to create charts, pages or reports. 

You can also perform different actions with the data before loading it. You can select which columns you’d like to include or exclude by using the checkboxes in the left-hand column. A search box is provided for data sources with large numbers of columns so that you can easily find the one you are looking to select or deselect. The system will automatically profile your data and choose an appropriate data type, but you can further refine how you’d like each column to appear by updating the data types as needed.


![5_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/datasets_2.png#thumbnail-40)


You can also change the formatting of the date and numeric columns. This format will be visible in the rest of the application when the column is used. For example a numeric column is assigned a _Currency_ format, meaning that if this column is used to build a chart, the values should be displayed as currency with the $ sign. 

![5b_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/datasets_3.png#thumbnail-40)


To find the date or numeric formatting options, click on the Column’s dropdown in the Visualization Format section and the different formatting options will appear. Here, you can also define the number of decimal places you would like to work with and display in your visualizations.

### Supported Data Types:
* **Text - Label:** Text that does not require formatting or analysis, i.e. names, dates, etc.
* **Numeric:** Numeric data with no specified formatting.
* **Date:** Date formatted data.
* **Yes/No:** Binary data (yes/no, true/false, 1/0).

If you would like to see a partial view of the data, click on **View Data** and you will be able to see the columns and data you are adding to your dataset. This is not the full dataset, only the first 100 rows are shown.

![6_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/6_Datasets.png#thumbnail)

There are other options available to work with your data, like creating Geolocation Groups. If your data contains address information, you can choose to create a Geolocation Group by clicking on the location pin icon. A Geolocation Group is required for mapping data records.

![7_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/7_Datasets.png#thumbnail-80)
<br/>
![8_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/8_Datasets.png#thumbnail-80)

Assign a name to your group and select either a country or zip code location to begin. After selecting your country column, you can map additional columns to Street Line, City, State, Zip Code. Once your dataset is active, you can create a map visualization and use the Geolocation Group(s) you have created. 

![9_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/9_Datasets.png#thumbnail-60)

## Loading Data
When you’re done selecting, you can begin loading your data by clicking **Load Data**. In most cases, data loading will complete in a few seconds. If however, you are uploading a large amount of information, it may take a few minutes to complete.
The progress bar at the top-right of the screen will indicate the current progress of the data load. You do NOT need to remain on this page as the loading will continue in the background until it has been completed.

![10_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/10_Datasets.png#thumbnail-60)

Once your data has been successfully loaded, you will be redirected to the *Summary View* where you’ll have access to your data profile. 

![11_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/11_Datasets.png#thumbnail)

You will also see your dataset status change in the *Datasets* section. The green indicator means that data was loaded successfully and that the dataset is now active and ready to be used. Grey means the dataset is in a draft state where the data has not been loaded. Red means that loading the data failed – if this happens, you should review the data types selection.  

![12_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/12_Datasets.png#thumbnail-80)

To edit your dataset, you can click on the three-dot menu in the right corner of the dataset card and select the **Edit** option or you can go into the dataset and click on the **Edit** button on the top right beside the dataset status. The dataset will be unlocked and you will be able to make any desired changes to your dataset. 

![13_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/13_Datasets.png#thumbnail)
 
Most of the changes that you make to your dataset will require the data to be reloaded. The only changes that do not require a data reload are those that don’t make a fundamental change in the dataset, like changing the name of the dataset or the name of any of the data source columns. If a change requires you to reload data, you will be notified when you apply your changes. Once you are finished editing the dataset, click on **Apply Changes** and then reload the data, if you are prompted or otherwise want to. 

If you would like to go back to the last loaded version of the dataset you can use the **Discard Changes** option.

You can reload your data at any time, without having to edit the dataset. If you need to update the dataset, just click on **Reload Data** and your data will begin loading again. 



## Data Syncs
When creating datasets from *Database Connections*, you will have the option to automatically sync your data. Data Synchronization settings are found when clicking on a data source inside the dataset. 

<div>
    <img src=" https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/14_Datasets.png" style="margin:auto; display:block;" width="500" />
<div>


On the *Data Syncs tab*, you will be able to set up a schedule to automatically synchronize the Dataset with the source data, replace all records or pull in just the ones updated during the latest data load.   

**Full Reload** loads all of the data again whenever a reload process begins — It works as an overwrite of the existing data.   

**Append and Update Records** loads only the new and updated records whenever a scheduled process begins. 

You can determine when you want this to happen by configuring the scheduling options: when the refresh should begin (date and time), how often it should load, and when it should stop, if ever. 

Data Syncing is available for single-source datasets as well as datasets using joins. 


## Activity Log

In the *Activity Log* section, you can find the actions taken on the dataset logged for your information. A *success* message will be shown when the event is completed successfully, and an *error* message  will appear when the event failed. Error messages have the option of seeing the details of why the error occurred. 

With the *Download Log File* option, you can download the event in the activity log and get the error details in text format as well. 
<div>
    <img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/15_Datasets.png" style="margin:auto; display:block;" width="500" />
<div>




