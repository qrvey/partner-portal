---
id: datasets
title: Datasets
sidebar_label: Datasets
---

<div style="text-align: justify">

In this section, we’ll explain how datasets are created using a single data source, how columns and data types are modified, how data is loaded and how a dataset can be edited and reloaded.  

> Note: To see how datasets are created from multiple data sources please see the Data Joins article. 

## Creating Datasets
To create a dataset, access the Datasets tab and click on **New Dataset**. 

![1_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/1_Datasets.png#thumbnail-60)

Next, you will see a list of connections available to select as your data source. You could also select existing datasets as sources in the *Datasets* tab. 

Select the desired connection and click on **Create**. 

![2_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/2_Datasets.png#thumbnail)

You will land on the *Design* section of your newly created dataset. This is where you can configure your columns and dataset options before loading the data. 

You can assign a name to your dataset by clicking on **Untitled Dataset.**

![3_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/3_Datasets.png#thumbnail)
<br/>
![4_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/4_Datasets.png#thumbnail)

At this point, you can load the data and begin using it to create charts, pages or reports. 

You can also perform different actions to the data before loading it. You can select which columns you’d like to include or exclude by using the checkboxes in the left-hand column. A search box is provided for data sources with large numbers of columns so you can easily find the one you are looking for to select or deselect. The system will automatically profile your data and choose an appropriate data type, but you can further refine how you’d like each column to appear by updating the data types as needed.

![5_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/5_Datasets.png#thumbnail)

### Supported Data Types:
* **Text - Label:** Text that does not require formatting or analysis, i.e. names, dates, etc.
* **Numeric:** Numeric data with no specified formatting.
* **Date:** Date formatted data.
* **Yes/No:** Binary data (yes/no, true/false, 1/0).

If you would like to see a partial view of the data, click on **View Data** and you will be able to see the columns and data you are adding to your dataset. This is not the full dataset, only the first 100 rows.

![6_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/6_Datasets.png#thumbnail)

There are other options available to work with your data like creating Geolocation Groups. If your data contains address information, you can choose to create a Geolocation Group by clicking on the location pin icon. A Geolocation Group is required for mapping data records.

![7_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/7_Datasets.png#thumbnail-80)
<br/>
![8_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/8_Datasets.png#thumbnail-80)

Assign a name to your group and select either a country or zip code location to begin with. After selecting your country column you can map additional columns to Street Line, City, State, Zip Code. Once your dataset is active you may create a map visualization and use the Geolocation Group(s) you created. 

![9_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/9_Datasets.png#thumbnail-60)

## Loading Data
When you’re happy with your selections, click **Load Data** and your data load will begin. In most cases, data loading will complete in a few seconds. If however, you are uploading a large amount of information, it may take a few minutes to complete.

The progress bar at the top-right of the screen will indicate the current progress of the data load. You do *NOT* need to remain on this page, as the loading will continue in the background until it has been completed.

![10_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/10_Datasets.png#thumbnail-60)

Once your data has been successfully loaded, you will be redirected to *Summary View* where you’ll have access to your data profile. 

![11_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/11_Datasets.png#thumbnail)

You will also see your dataset’s status change in the *Datasets* section. The green indicator means that data was loaded successfully and the dataset is now active and ready to be used. Grey means the dataset is in draft state and that data has not been loaded. Red means that loading the data failed – if this happens you should review the data types selection. 

Note: In the next version we will have the *Activity Log* section where creators can review the errors and details for more information when data loading fails. 

![12_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/12_Datasets.png#thumbnail-80)

To edit your dataset you can click on the three-dot menu in the right corner of the dataset card and select the **Edit** option or you can go into the dataset and click on the **Edit** button on the top right beside the dataset status. The dataset will be unlocked and you will be able to make any changes you want to your dataset. 

![13_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/13_Datasets.png#thumbnail)
 
Most of the changes that you make to your dataset will require the data to be reloaded again. The only changes that do not require a data reload are changing the name of the dataset or the name of any of the data source columns. Once you are finished editing the dataset, click on **Save** and then reload the data. 

You can reload your data at any time, without having to always edit the dataset. If you need to update the dataset, just click on **Reload Data** and your data will begin loading again.