---
id: csv
title: File Upload Connection
sidebar_label: File Upload Connection
tags: [Data Analyst, CloudOps Engineer, Software Developer, Solution Architect]
sidebar_position: 3
displayed_sidebar: data-analyst
---

<div style={{textAlign: "justify"}}>

This article describes the steps to create connections to the supported file types, which includes comma-delimited CSV, JSON, and ndJSON. You can also connect to an Amazon S3 bucket with multiple files in these formats.


## Preparing Your Data
CSV files are very simple and lack a lot of the details that the system could get from a database. This makes them versatile and error-prone at the same time. Likewise, JSON files could contain invalid content that may cause errors during load, especially if they are created manually. Therefore, it is important for the files to be reviewed and shaped properly so that errors can be avoided. 

For CSV files, make sure that:  
* One set of data is presented in the file - i.e., the file does not contain a set of records for employees and another set for sales data.
* Data is organized into columns.
* The first row contains column headers.
* Data starts from the second row.
* Data in each row contains an equal number of columns.
* Data types for the columns remain consistent. I.e. if the column is numeric, no row contains text in the same column.
* Data format for each column is consistent. I.e. if the column has dates in MM/DD/YYYY format, no value is formatted like MM/DD/YY.
* Data is “clean”. I.e. if a column should not be left blank, make sure that it has a value. Or if it is supposed to be used as a unique identifier, make sure that all values are there and are unique.

For JSON files, keep in mind the following points: 
* Follow the same rules of data cleanliness that apply to CSV.
* Ensure that the JSON is well-formed: all brackets and quotes come in pairs, hierarchies are correct and consistent, etc. 
* JSON files may contain a top-level array of JSON items.  
* R records may be delimited using the ndJSON (http://ndjson.org/) format.

Files may be compressed in GZIP format.

## Creating a File Upload Connection 
1. Select **Data** from the menu on the left.

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup1.png#thumbnail-20)

2. Click the **Create New Connection** link from the *New Dataset* dialog or from the *Connections* section. 

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup2.png#thumbnail-60)

3. Select **File Upload**.

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/csv-connect.png#thumbnail-60)

    The data upload screen displays. 

4. Choose the desired file type and then select any CSV, JSON/ndJSON, or GZIP file from your desktop or drag it into the window. Give the connection a name.

5. To display a partial view the data, click the **View Source Data** link. If a JSON file is used, the system will validate it and show the first record as a sample.

>**Important Note**: You can edit this sample to actually modify the structure of the dataset that you later upload from this connection. 

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup4.png#thumbnail-60)

6. Once the connection is saved, click the **View Source Data** option to display a partial view of the data. 

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/navi-bar-new.png#thumbnail) 

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup6.png#thumbnail-60)


## Using Amazon S3
S3 buckets and folders can be leveraged to store CSV, JSON, or ndJSON files and used as connections in Qrvey. This method offers flexibility as it supports various unique and powerful features:

* You can load data from multiple files that are in the same bucket or folder in bulk, instead of loading those one at a time.
* Wildcards can be used in the **S3 Folder** field. 
* File upload time to S3 is automatically used as a timestamp to enable the [“append and update”](../Datasets/02-Design/04-Data%20Synchronization/data-sync.md#append-and-update) mode of data synchronization. 
 
![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/createS3.png#thumbnail-60) 

In the Create S3 Connection dialog, select the file type that you wish to load from this connection and enter the name of the bucket. By default, Qrvey looks for the named bucket under the same AWS account as the instance. If you wish to connect to a bucket from a different account, enter the access key and secret key for the desired account in the provided fields. Entering a folder or subfolder is optional and depends on where you store your files.  

If you wish to upload all files in the bucket or folder, enter the name of the bucket and/or folder. However, if you wish to upload a subset of files, use a wildcard to specify the pattern of the desired filenames. Some examples are:

* Load all files that start with “SALES_”
    * myFolder/SALES_*
* Load all files that end with “.csv”
    * myFiolder/*.csv
* Load all files that contain “data_load”
    * myFolder/*data_load*

Once the S3 connection has been established, it can be used for creating datasets, like any other connection.



## Using File Data
Once a file connection is created, you can create a dataset. Open the **Datasets** tab, click on **New Dataset**, and select your file upload connection. 

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup7.png#thumbnail-60)

For more information on creating datasets and working with your file upload data, see [Datasets](../Datasets/01-Overview%20of%20Datasets/overview-of-datasets.md). For more information on working with hierarchical data from a JSON upload, see [Working with Hierarchical Data](../Datasets/01-Overview%20of%20Datasets/hierarchical-data.md). 




</div>