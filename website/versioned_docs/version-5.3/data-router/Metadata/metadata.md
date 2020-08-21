---
id: version-5.3-metadata-API
title: Metadata
sidebar_label: Metadata
original_id: metadata-API
---

## Introduction
Metadata is how we define the column mappings and transformations required by your data to be used within a Qrvey Application.

Before you can start uploading data into DataRouter, you have to construct a new metadata definition and use the Metadata API to save the metadata definition to DataRouter.

## Pre-requisites
Before you can start following these steps, please make sure you have the following:
* URLs and API Keys for your Qrvey Platform deployment. You can find these in the deployment email. For this example you would need the following values:
  * Metadata Endpoint
  * API Key 
* A tool or software that you can use to call REST APIs. We recommend Postman or cURL commands but you can use any tool or programming language.

## Create Metadata
The first step before loading your data into Qrvey is to create a metadata definition. In this definition you will define a name for your index (where data is stored), column names with data types, and any transformations you want to run before saving the data. This step needs to be done once for each data set that you want to expose in Composer or widgets. Each Index (or dataset) will be identified by MetadataId and Indexname. so use a unique name for each dataset that you will load. <br>
**publicConnection** is an optional parameter used for enabling the use of the index inside the Composer.  Replace “MetadataEndpoint” and “api-key” before running this sample. 

cURL example:

~~~ JSON

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
~~~ 

This API should return a status:200 Ok with the MetadataId in the response body.

> **Note**: **MetaDataId** and **indexName** must be identical and in lowercase.

## Update Metadata
To update metadata, you have to use the PUT request with the next structure: {{MetadataEndpoint}}/v5/metadata/{{metadataId}}. 
Replace “MetadataEndpoint” and “api-key” before running the request. 
In the next example, we are adding a new column called **Country**.

cURL example:

~~~JSON



curl --location --request PUT '{{MetadataEndpoint}}/v5/metadata/quick_start_index_name' \
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
        },
        {
            "columnName": "Country",
            "type": "tex-label"
        }
    ]
}'

Delete Metadata
To delete metadata you have to use the DELETE request with the next structure: {{MetadataEndpoint}}/v5/metadata/{{metadataId}}?publicConnection=true&removedata=true. The parameters publicConnection and removedata are optional but you should add them if you are creating the index with a public connection or to clean the data from elasticsearch. Replace “MetadataEndpoint” and “api-key” before running the request.



curl --location --request DELETE '{{MetadataEndpoint}}/v5/metadata/quick_start_index_name?publicConnection=true&removedata=true' \
--header 'x-api-key: {{api-key}}'
Get Metadata
To get metadata definition, you have to use the GET request with the next structure: {{MetadataEndpoint}}/v5/metadata/{{metadataId}}. Replace “MetadataEndpoint” and “api-key” before running the request.

	cURL example:

curl --location --request GET '{{MetadataEndpoint}}/v5/metadata/quick_start_index_name' \
--header 'x-api-key: {{api-key}}'

	Response example:

{
    "refreshIndex": "false",
    "published": true,
    "updated": "2020-07-30T21:02:40+00:00",
    "dateFormat": "YYYY-MM-DDTHH:mm:ss",
    "columnType": [
        {
            "type": "numeric-general",
            "columnName": "CompanyId"
        },
        {
            "type": "text-label",
            "columnName": "Company Name"
        },
        {
            "type": "date",
            "dateFormat": "YYYY-MM-DD'T'HH:mm:ss",
            "columnName": "Foundation Date"
        },
        {
            "type": "text-label",
            "columnName": "Country"
        }
    ],
    "created": "2020-07-30T18:34:15+00:00",
    "indexName": "quick_start_index_name",
    "internal": false,
    "skipOnPartialData": false,
    "transforms": [],
    "MetaDataId": "quick_start_index_name"
}
Generate Metadata Structure
You can use the generated metadata structure based on a data row sample using the POST request with the next structure: 
{{MetadataEndpoint}}/v5/metadata/generate. 
Replace “MetadataEndpoint” and “api-key” before running the request.

	cURL example:

curl --location --request POST '{{MetadataEndpoint}}/v5/metadata/generate' \
--header 'x-api-key: {{api-key}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "CompanyId": 1,
    "Company Name": "Apple",
    "Foundation Date": "1976-04-1"
}'
~~~

Response example:
~~~JSON
{
    "indexName": "<change-me>",
    "dateFormat": "YYYY-MM-DDTHH:mm:ss",
    "skipOnPartialData": false,
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
}
~~~

## API Reference

https://documenter.getpostman.com/view/6666071/S1a4Wm6C?version=latest
