---
id: metadata-API
title: Understanding Metadata
sidebar_label: Understanding Metadata
---
<div style={{textAlign: "justify"}}>

## Introduction

Metadata is how we define the column mappings and transformations required by your data to be used within a Qrvey Application.

Before you can start uploading data into DataRouter, you have to construct a new metadata definition and use the Metadata API to save the metadata definition to DataRouter.

## Pre-requisites

Before you can start following these steps, please make sure you have the following:

-   URLs and API Keys for your Qrvey Platform. You can find these in the Welcome email you received after your environment was set up. For this example you would need the following values:
    -   Metadata URL for your environment
    -   Data Router API Key 
-   A tool or software that you can use to make REST APIs calls. We recommend Postman or cURL commands but you can use any tool or programming language.

## Create Metadata

The first step before loading your data into Qrvey is to create a metadata definition. In this definition you will define a name for your index (where data is stored), column names with their data types, and any transformations you want to run before saving the data. This step needs to be done once for each data set that you want to expose in Qrvey Composer or inside any widget. Each Index will be identified by MetadataId and Indexname. You have to use a unique name for each index. 

**publicConnection** is an optional parameter used for enabling the use of the index inside Qrvey Composer. Setting this property to true will expose the index to all Creators in the data preparation step in Qrvey Composer. Replace _MetadataURL_ and _api-key_ before running this sample. 

cURL example:

```

curl --location --request POST '{{MetadataURL}}/v5/metadata?publicConnection=true' \
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

This API should return a status:200 Ok with the MetadataId in the response body.

&gt; **Note**: **MetaDataId** is not required, but if provided, it has to be identical to **indexName**.

## Update Metadata

To update metadata, you have to use a PUT verb with the following structure: {"{"}{"{"}MetadataURL{"}"}{"}"}/v5/metadata/{"{"}{"{"}metadataId{"}"}{"}"}. <br />

MetadataId is the value returned from the Create call. Replace _MetadataURL_ and _api-key_ with your own values, before running the request. 

In the following example, we are adding a new column called **Country**.

cURL example:

```


curl --location --request PUT '{{MetadataURL}}/v5/metadata/quick_start_index_name' \
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

```

## Delete Metadata

To delete metadata you have to use the **DELETE** verb with the following structure: <br /> {"{"}{"{"}MetadataURL{"}"}{"}"}/v5/metadata/{"{"}{"{"}metadataId{"}"}{"}"}?publicConnection=true&removedata=true. <br />

The parameters **publicConnection** and **removedata** are optional. The first creates the index as a public index and the second removes any data that was previously loaded into the index. Replace _MetadataURL_ and _api-key_ with your own values before running the request.

```

curl --location --request DELETE '{{MetadataURL}}/v5/metadata/quick_start_index_name?publicConnection=true&removedata=true' \
--header 'x-api-key: {{api-key}}'

```

## Get Metadata

To get metadata definition, you have to use the **GET** verb with the following structure: <br />{"{"}{"{"}MetadataURL{"}"}{"}"}/v5/metadata/{"{"}{"{"}metadataId{"}"}{"}"}. <br />

Replace _MetadataURL_ and _api-key_ with your own values before running the request.

cURL example:

```

curl --location --request GET '{{MetadataURL}}/v5/metadata/quick_start_index_name' \
--header 'x-api-key: {{api-key}}'

```

Response example:

```

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

```

## Generate Metadata Structure

There may be cases where you need to create a large metadata structure with many columns. You can use this API for those cases, if you have the JSON structure for which you want to generate the metadata. The JSON structure has to be passed in the body: <br /> 
{"{"}{"{"}MetadataURL{"}"}{"}"}/v5/metadata/generate. <br />

Replace _MetadataURL_ and _api-key_ with your own values before running the request.

cURL example:

```

curl --location --request POST '{{MetadataEndpoint}}/v5/metadata/generate' \
--header 'x-api-key: {{api-key}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "CompanyId": 1,
    "Company Name": "Apple",
    "Foundation Date": "1976-04-1"
}'


```

Response example:

```

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

```
</div>