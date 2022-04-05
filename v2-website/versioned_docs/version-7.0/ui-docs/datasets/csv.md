---
id: csv
title: File Upload Connection
sidebar_label: File Upload Connection
---

<div style={{textAlign: "justify"}}>

In this article, we will walk you through the steps to create connections to supported file types: comma-delimited CSV, JSON, and ndJSON, or an Amazon S3 bucket where you may have multiple files with these formats.

## Preparing Your Data
CSV files are very simple and lack a lot of the details that the system could get from a database. This makes them versatile and error-prone at the same time. Likewise, JSON files could contain invalid content that may cause errors during load, especially if they are created manually. Therefore, it is important for the files to be reviewed and shaped properly so that errors can be avoided. 

For CSV files make sure that:
One set of data is presented in the file - i.e., the file does not contain a set of records for employees and another set for sales data.
* Data is organized into columns.
* The first row contains column headers.
* Data starts from the second row.
* Data in each row contains an equal number of columns.
* Data types for the columns remain consistent. I.e. if the column is numeric, no row contains text in the same column.
* Data format for each column is consistent. I.e. if the column has dates in MM/DD/YYYY format, no value is formatted like MM/DD/YY.
* Data is “clean”. I.e. if a column should not be left blank, make sure that it has a value. Or if it is supposed to be used as a unique identifier, make sure that all values are there and are unique.

For JSON files the main requirement is to make sure that it is a well-formed JSON: all brackets and quotes come in pairs, hierarchies are correct and consistent, etc. 

The same rules of data cleanliness that apply to CSV also apply to JSON.

## Creating a File Upload Connection 
To begin, select **Data** from the menu on the left.

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup1.png#thumbnail-20)

Connections can be created by clicking the **Create New Connection** link from the *New Dataset* dialog, or from the *Connections* section. 

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup2.png#thumbnail-60)


Regardless of the method you use, select **File Upload**.

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/csv-connect.png#thumbnail-60)

You will then be brought to the data upload screen where you can choose the desired file type and then select any CSV, JSON/ndJSON, or gzip file from your desktop or simply drag it into the window. Give your connection a name that you can identify it by.

You can view the first 100 rows of your data by clicking on the **View Source Data** link. If a JSON file is used, the system will validate it and show the first record as a sample.

>**Important Note**: You can edit this sample to actually modify the structure of the dataset that you later upload from this connection. 

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup4.png#thumbnail-60)

Once the connection is saved, you can click on the **View Data** option to get a partial view of the data. 

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/navi-bar-new.png#thumbnail) 

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup6.png#thumbnail-60)


## Using Amazon S3
S3 buckets and folders can be leveraged to store CSV, JSON, or ndJSON files and used as connections in Qrvey. This method offers a lot of flexibility as it supports various unique and powerful features:

* You can load data from multiple files that are in the same bucket or folder in bulk, instead of loading those one at a time.
* Wildcards can be used to include files that their names match the pattern in the load and leave other files alone.
* Files’ upload time will automatically be used as a timestamp to enable the <a href="/docs/ui-docs/datasets/data-sync#append-and-update" target="_blank">“append and update” </a> mode of data synchronization. 
 
![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/createS3.png#thumbnail-60) 

In the S3 connection screen you can select the file type that you wish to load from this connection and enter the name of the bucket. By default, Qrvey looks for the named bucket under the same AWS account as the instance. If you wish to connect to a bucket from a different account simply enter the access key and secret key for the desired account in the provided fields. Entering a folder or subfolder is optional and depends on where you store your files. 
If you wish to upload all files in the bucket or folder all you need to do is enter the name of the bucket and/or folder. However, if you wish to upload a subset of files you can use a wildcard to specify the pattern of the desired filenames. Some examples are:
* Load all files that start with “SALES_”
    * myFolder/SALES_*
* Load all files that end with “.csv”
    * myFiolder/*.csv
* Load all files that contain “data_load”
    * myFolder/*data_load*

Once a S3 connection has been established it can be used for creating datasets, like any other connection.



## Using File Data
Once a file connection exists you can create a dataset from your file upload to use your data. Go to the *Datasets* tab, click on **New Dataset**, and select your file upload connection. 

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup7.png#thumbnail-60)

For more information on creating datasets and working with your file upload data, see the article on <a href="/docs/ui-docs/datasets/datasets/" target="_blank">Datasets</a>. You can also read more about working with hierarchical data from a JSON upload in the <a href="/docs/ui-docs/datasets/hierarchical-data/">dedicated article</a>. 




</div>



















