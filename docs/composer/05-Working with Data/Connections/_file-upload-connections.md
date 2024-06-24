---
id: csv
title: File Upload Connection
sidebar_label: File Upload Connection
tags: [Data Analyst, CloudOps Engineer, Software Developer, Solution Architect]
sidebar_position: 3
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>


## Prepare Your Data

It is possible to create connections using the following file types: CSV, JSON, and ndJSON. You may also connect to an Amazon S3 bucket containing multiple files in these formats.

File-based data is much simpler than data stored within a database. This makes the storage medium versatile, yet error-prone at the same time. Please make sure your data is cleaned, properly formatted, and follows any other best-practices for data storage.

**Tips on File-Based Data**

- JSON files may contain a top-level array of JSON items.
- R records may be delimited using the ndJSON format.
- Files may be compressed in GZIP format.

<!-- CSV files are quite simple and lack a lot of the details that the system would typically get from a database. This makes them versatile, yet error-prone at the same time. Additionally, JSON files could contain invalid content that may cause errors during load, especially if they are created manually. Therefore, it is important for the files to be reviewed and shaped properly so that errors can be avoided.

Ensure you follow best-practices when connecting to CSV files:  
* The file contains only one set of data  *(i.e., doesn't contain records for `employees` and another set for `sales_data`.)*
* Data is organized into columns.
* The first row contains column headers.
* Data starts from the second row.
* Data in each row contains an equal number of columns.
* Data types remain consistent for the columns. *(i.e., if the column is numeric, no row contains text in the same column.)*
* Data formatting is consistent within each column.
* Data is “clean”, with appropriate column values and unique identifiers.

Ensure you follow best-practices when connecting to CSV files:
* Follow the same rules of data cleanliness that apply to CSV.
* Ensure that the JSON is well-formed: all brackets and quotes come in pairs, hierarchies are correct and consistent, etc. 
* JSON files may contain a top-level array of JSON items.
* R records may be delimited using the ndJSON format. -->
<!-- 
> **Note:** Files may be compressed in GZIP format. -->

## Create a File Upload Connection 

<!-- ![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup1.png#thumbnail-20)
![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup2.png#thumbnail-60)
![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/csv-connect.png#thumbnail-60)
![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup4.png#thumbnail-60) 
![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/navi-bar-new.png#thumbnail) 
![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup6.png#thumbnail-60)
-->

To Create a File Upload Connection, follow these steps.
1. Navigate to the **Data** Module.
2. Click the **Create New Connection** link from the *New Dataset* dialog or from the *Connections* section.
3. Select **File Upload** and the **Create File Upload Connection** modal will appear.
4. Set the Connection name, choose the desired file type (CSV, JSON/ndJSON, or GZIP), then select a file from your local machine.
    **Note:** *If a JSON file is used, the system will validate it and show the first record as a sample. Additionally, you can edit this sample directly to modify the structure of the final dataset uploaded from this connection.*
5. **Optional:** To display a partial view of the data, click the **View Source Data** link.  
6. Once the connection is saved, click the **View Source Data** option to display a partial view of the data. 

## Connect to an Amazon S3 Bucket

S3 buckets and folders storing CSV, JSON, or ndJSON files can be used as Connections. This offers the following features:

* Load data from multiple files from the same bucket or folder in bulk, instead one file at a time.
* Wildcards can be used in the **S3 Folder** field.
* File upload time to S3 is automatically used as a timestamp to enable the [append and update](../Datasets/02-Design/04-Data%20Synchronization/data-sync.md#append-and-update) mode for data synchronization. 
 
![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/createS3.png#thumbnail-60) 

- In the Create S3 Connection dialog, select the file type that you wish to load from this connection and enter the name of the bucket. 
- By default, Qrvey looks for the named bucket under the same AWS account as the instance.
- If you wish to connect to a bucket from a different account, enter the access key and secret key for the desired account in the provided fields. 
- **Optional:** Enter a folder or subfolder to upload all of its files.
- **Optional:** Use a wildcard to specify a subset of files. For example:
    - Starts with `SALES_`: 
        - `myFolder/SALES_*`
    - Ends with `.csv`:
        - `myFolder/*.csv`
    - Contains `data_load`:
        - `myFolder/*data_load*`

Once the S3 connection has been established, you may create [Datasets](../Datasets/01-Overview%20of%20Datasets/overview-of-datasets.md) as you would with any other Connection.

<!-- 
## How to Use File Data
Once a file connection is created, you can create a dataset. Open the **Datasets** tab, click on **New Dataset**, and select your file upload connection. 

![csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/fileup7.png#thumbnail-60)

For more information on creating datasets and working with your file upload data, see [Datasets](../Datasets/01-Overview%20of%20Datasets/overview-of-datasets.md). For more information on working with hierarchical data from a JSON upload, see [Working with Hierarchical Data](../Datasets/01-Overview%20of%20Datasets/hierarchical-data.md).  
-->

</div>