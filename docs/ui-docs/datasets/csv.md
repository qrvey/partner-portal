---
id: csv
title: File Upload Connection
sidebar_label: File Upload Connection
---

<div style="text-align: justify">

In this article, we will walk you through the steps to create connections to supported file types: comma-delimited CSV, JSON, and ndJSON, or an Amazon S3 bucket where you may have multiple files with these formats.

## Preparing Your Data
CSV files are very simple and lack a lot of the details that the system could get from a database. This makes them versatile and error-prone at the same time. Likewise, JSON files could contain invalid content that may cause errors during load, especially if they are created manually. Therefore, it is important for the files to be reviewed and shaped properly so that errors can be avoided. 

For CSV files make sure that:
* One set of data is presented in the file. I.e. the file does not contain a set of records for employees and another set for sales data.
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

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup2.png#thumbnail)


Regardless of the method you use, select **File Upload**.

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup3.png#thumbnail)




You will then be brought to the data upload screen where you can select any CSV or JSON/ndJSON file from your desktop or simply drag it into the window. Give your connection a name that you can identify it by.

If a JSON file is used, the system will validate it and show the first record as a sample.

>**Important Note**: You can edit this sample to actually modify the structure of the dataset that you later upload from this connection.  

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup4.png#thumbnail)

Once the connection is saved, you can click on the **View Data** option to get a partial view of the data. 

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup5.png#thumbnail)
![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup6.png#thumbnail)

## Using File Data
Once a file connection exists you can create a dataset from your file upload to use your data. Go to the *Datasets* tab, click on **New Dataset**, and select your file upload connection. 

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup7.png#thumbnail)

For more information on creating datasets and working with your file upload data, see the article on <a href="/docs/ui-docs/datasets/datasets/">Datasets</a>. You can also read more about working with hierarchical data from a JSON upload in the <a href="">dedicated article</a>. 





























You can create connections from file uploads by using comma-delimited, CSV files. In this article, we’ll walk you through the steps to do so.

## Preparing Your Data
For the best results, we recommend that you first take a moment to make sure your CSV file is formatted correctly. Data should be organized into columns, with the first row containing the column headers. Now is probably also a good time to peruse your data to fix any mistakes and missing items, as well as remove any duplicate entries if they’re not desired.

Once you are convinced that your data is clean and tidy, you can continue uploading it to Qrvey.

## Creating a File Upload Connection 
To begin, enter your application and select **Data** from the menu on the left.

Next, go to the **Connections** section and select **File Upload**.

![1_FilesUp](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/1_FilesUp.png#thumbnail-60)

You will then be brought to the data upload screen where you can select any CSV file from your desktop or simply drag it into the window. You can provide it with a name and a description in the top box, as seen below.

![2_FilesUp](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/2_FilesUp.png#thumbnail-80)

Once the connection is saved, you can click on the **View Data** option to get a partial view of the data. 

![3_FilesUp](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/3_FilesUp.png#thumbnail-80)
<br/>
![4_FilesUp](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/4_FilesUp.png#thumbnail-80)

## Using File Data
Next, you can create a dataset from your file upload to use your data. Go to the **Datasets** tab, click on **New Dataset**, and select your file upload connection. 

![5_FilesUp](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/5_FilesUp.png#thumbnail-80)

For more information on creating datasets and working with your file upload data, go to [Creating Datasets](ui-docs/datasets/datasets.md)
