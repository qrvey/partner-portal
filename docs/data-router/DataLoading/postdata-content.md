---
id: postdata-content
title: Postdata Overview
sidebar_label: Postdata
---

<div style="text-align: justify">

## Introduction
The user can load data to the Qrvey platform using an API that receives a body with a JSON structure.


## Pre-requisites
Before you can start following these steps, please make sure you have the following:
* URLs and API Keys for your Qrvey Platform deployment. You can find these in the deployment email. For this example you would need the following values:
  * Dataload Endpoint
  * API Key 
* A tool or software that you can use to call REST APIs. We recommend Postman or cURL commands but you can use any tool or programming language.
Create a metadata using the metadata API.

## Limits
* The max body size is 5MB.

## Post data structure

```json
[
    {
        "metadataId": "{{metadataId}}", //MetadataId generated on metadata creation
        "data": [
            //Data to load on JSON format
        ]
    }
]

```
cURL example:

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

## Get job status (optional)

This API call will verify the progress of the data load job from the previous step.

Replace “dataloadendpoint” and “api-key” with values for your Qrvey instance.


```JSON
curl --location --request GET '{{dataloadendpoint}}/dataload/{{jobId}}/status' \
--header 'x-api-key: {{api-key}}'
```


Response example:
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

## API Reference

https://documenter.getpostman.com/view/6666071/S1a4Wm6D


