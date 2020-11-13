---
id: version-5.3-data-router-loading-data
title: Quick Start Guide
sidebar_label: Quick Start
original_id: data-router-loading-data
---

<div style="text-align: justify">

## Introduction
This article walks you through the steps of a full use case of loading data programmatically. In this scenario, you create a metadata definition for an index, load data into your index, and then use that data for analysis with the Qrvey Composer.

## Pre-requisites
For this exercise you will need:
* URLs and API keys for your Qrvey Platform. You can find these in the Welcome email you received after your installation was completed (see image 1). For this example, you would need the following values:
  * Metadata URL for your environment 
  * Postdata URL for your environment  
  * Data Router API Key 
Qrvey Composer link for your environment
* A tool or software you can use to make REST APIs calls. We recommend Postman or cURL commands.

![1_quick_start](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/1_qsg.png#thumbnail)

## Steps
### 1. Create Metadata
The first step is to create a metadata definition before loading data into an Elasticsearch index. You will define:
* a name for your index (where data is stored).
* column names with their data types. 
* any transformations you want to run before saving the data.

This step needs to be done once for each dataset that you would expose in Qrvey Composer or inside any widgets. Each index will be identified by MetadataId and Indexname. Use a unique name for each index that you are loading data into. 

For “columnType”, we recommend you define the name and type for all your columns to create an accurate dataset. This is technically optional, but it ensures a more accurate association of data type with data values. For a complete reference of supported data types, please see the <a href="/docs/data-router/Metadata/metadata-intro/#columntype-data-types">Column Data Types section in the Metadata Schema </a> article. 

It is possible to add columns/attributes without defining them in the metadata, in which case DataRouter will attempt to determine the data type based on data values.

The following sample will create an index named “quick_start_index_name” with three columns: CompanyId (numeric), “Company Name” (text), and “Foundation Date” (date). Furthermore, the index is defined with a publicConnection property set to true, which will cause the index to show up on the Index tab of the dataset creation dialog in the data prep screen (image 2). <br>
You need to replace “Metadata URL” and “api-key” with values for your Qrvey instance. 

> **Note**: “**indexName**” must be all  lowercase.

cURL example:

```json
curl --location --request POST '{{Metadata URL}}/v5/metadata?publicConnection=true' \
--header 'x-api-key: {{api-key}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "indexName": "quick_start_index_name",
    "skipOnPartialData": false,
    "dateFormat": "YYYY-MM-DDTHH:mm:ss",
    "columnType": [
        {
            "columnName": "CompanyId",
            "type": "numeric-general"
        },
        {
            "columnName": "Company Name",
            "type": "text-label"
        },
        {
            "columnName": "Foundation Date",
            "type": "date"
        }
    ]
}'
```
This API should return a status: 200 Ok with the **MetadataId** in the response body.


![2_quick_start](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/2_qsg.png#thumbnail)

### 2. Post Data - Add data to your new index
This step loads data using the  <a href="https://bit.ly/2JNuiXz">Postdata API</a>. You may add as many records of data as you wish, in one call, or use this API multiple times to add one or more data records with each call. The metadata definition is identified using the “MetadataId” value from the previous step, in the request body. 

The following example starts a data load job and returns a JobID in response.  The data is put into a pipeline and will be loaded as resources are available, usually immediately. 
You need to replace “Dataload URL” and “api-key” with values for your Qrvey instance and metadataId with the response from the previous step.

```
curl --location --request POST '{{postdataUrl}}/v1/postdata' \
--header 'x-api-key: {{api-key}}' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "metadataId": "quick_start_index_name",
        "data": [
            {
                "CompanyId": 1,
                "Company Name": "Apple",
                "Foundation Date": "1976-04-1"
            },
            {
                "CompanyId": 2,
                "Company Name": "Amazon",
                "Foundation Date": "1995-07-16"
            },
            {
                "CompanyId": 3,
                "Company Name": "Google",
                "Foundation Date": "1998-08-04"
            }
        ]
    }
]'
```
Response example:
```
{
    "jobId": "755e4d80-d11e-11ea-a4f7-5f41a4d85aa3"
}
```


### 3. Get job status (optional)

This API call will verify the progress of the data load job from the previous step.

You need to replace “postdataUrl” and “api-key” with values for your Qrvey instance and jobID to the value of the response to the call from the previous step.

```
curl --location --request GET '{{postdataUrl}}/{{jobId}}/status' \
--header 'x-api-key: {{api-key}}'
```

Response example

```
{
    "statusJob": {
        "jobId": "755e4d80-d11e-11ea-a4f7-5f41a4d85aa3",
        "status": "Complete",
        "approximatePercentComplete": 100
    },
    "jobCompletionStatistics": {
        "failed": 0,
        "successful": 3,
        "updated": 0
    }
}
`
```

### 4. Create a DataSet in Qrvey Composer
Now that you have created an index and with data, we are ready to use this data for analysis in Qrvey Composer. Launch the Composer URL in a new browser window to access the UI. This URL can be found in your Welcome email as well. <br>

  a. Log in to Qrvey Composer. If this is your first time using the product, you can use the “Sign Up” link to create a new account for yourself.
 
 ![3_quick_start](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/3_qsg.png#thumbnail-20)


  b. Create a new application and name the application:

 ![4_quick_start](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/4_qsg.png#thumbnail-40)
 ![5_quick_start](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/5_qsg.png#thumbnail-40)

  c. From the first tab on the left, click on the “New Dataset” button in the top left part of the screen and then click on the “Indexes” tab:

 ![6_quick_start](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/6_qsg.png#thumbnail-40)

  d. Select the index created in step #1 and then click on the “Create” button:

 ![7_quick_start](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/7_qsg.png#thumbnail-40)

  e. Now you can start working with your dataset: You can see your columns, their respective datasets and sample data in the Design tab, and analyze the data in various ways from the Analyze tab. 


 ![8_quick_start](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/8_qsg.png#thumbnail-40)
 ![9_quick_start](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/9_qsg.png#thumbnail-40)
