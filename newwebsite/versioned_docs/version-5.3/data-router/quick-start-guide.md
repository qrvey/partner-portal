---
id: data-router-loading-data
title: Quick Start Guide - Loading Data
sidebar_label: Quick Start Guide - Loading Data
---
<div style={{textAlign: "justify"}}>

This document will walk you through the steps to create a metadata definition for an index, load data into your index, and then use that data for analysis with the Qrvey Composer.

## Pre-requisites

Before you begin, please be sure to have the following:

-   URLs and API keys for your Qrvey Platform. You can find these in the deployment email you received after installation was completed. For this example, you would need the following values:
    -   Metadata Endpoint
    -   Dataload Endpoint
    -   API Key 
    -   Composer URL
-   A tool or software you can use to make REST APIs calls. We recommend Postman or cURL commands.

## Steps

### 1. Create Metadata

The first step is to create a metadata definition before loading data into an index or dataset. You will define:

-   a name for your index (where data is stored)
-   column names with data types 
-   any transformations you want to run before saving the data

This step needs to be done once for each dataset that you would expose in Composer or widgets. Each Index (or dataset) will be identified by MetadataId and Indexname. Use a unique name for each dataset that you are loading data into. 

For “columnType”, we recommend you define the name and type for all your columns to create an accurate dataset. It is technically optional, but this ensures a more accurate association of data type with data values. 

You can add more columns/attributes in your data without defining them in the metadata in which case DataRouter will attempt to determine the data type based on data values.

Replace “MetadataEndpoint” and “api-key” with values for your Qrvey instance. 

&gt; **Note**: **“MetaDataId”** and **“indexName”** must contain the same value using lowercase.

curl example: 

```json

curl --location --request POST '{{MetadataEndpoint}}/v5/metadata?publicConnection=true' \
--header 'x-api-key: {{api-key}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "MetaDataId": "quick_start_index_name",
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

This API should return a status: 200 Ok with the MetadataId in the response body.

### 2. Post Data - Add data to your new index

This step will load data via Post Data API. You can use this API multiple times with different data records. The metadata definition is identified using the “MetaDataId” value in the request body. 

Replace “dataloadendpoint” and “api-key” with values for your Qrvey instance.

```JSON

curl --location --request POST '{{dataloadendpoint}}/dataload/v1/postdata' \
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

```JSON

{
    "jobId": "755e4d80-d11e-11ea-a4f7-5f41a4d85aa3"
}

```

This API will add the records into the DataRouter queue and it returns the JobID so you can track the progress of your record. This helps DataRouter manage sudden spikes and large volumes of data. 

### 3. Get job status (optional)

This API call will verify the progress of the data load job from the previous step.

Replace “dataloadendpoint” and “api-key” with values for your Qrvey instance.

```JSON

curl --location --request GET '{{dataloadendpoint}}/dataload/{{jobId}}/status' \
--header 'x-api-key: {{api-key}}'

```

Response example

```JSON


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


```

### 4. Create DataSet on Qrvey Composer

Now that you have created an index and with data, we are ready to use this data for analysis in Qrvey Composer. Launch the Composer URL in a new browser window to access the UI.
This URL can be found in your deployment email as well.

a. Login or Signup into Qrvey Composer. The first user will use the “Sign Up” options.

![6_loading_data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/qsg_6.png#thumbnail)

b. Create a new application and name the application:

![7_loading_data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/qsg_7.png#thumbnail)

![8_loading_data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/qsg_8.png#thumbnail)

c. From the first tab on the left, click on the “New Dataset” button in the top left part of the screen and then click on the “Indexes” tab:

![9_loading_data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/qsg_9.png#thumbnail)

d. Select the index created in step #1 and then click on the “Create” button:

![10_loading_data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/qsg_10.png#thumbnail)

e. Now you can start working with your dataset. 

**i.** The Design tab will display the columns and field type
<br />
**ii.** The Analyze tab will let you view your data in 4 different views
<br />
**iii.** The Activity Log will display the update activities for this dataset

![11_loading_data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/qsg_11.png#thumbnail)
![12_loading_data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Quick+Start+Guide%3A+Loading+Data/qsg_12.png#thumbnail)
</div>