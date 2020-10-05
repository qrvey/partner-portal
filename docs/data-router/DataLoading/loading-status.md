---
id: loading-status
title: Loading Status 
sidebar_label: Loading Status
---

<div style="text-align: justify">

## Introduction
The user can see the loading status to verify the percentage and the status of loading.


## Pre-requisites
Before you can start, please make sure you have the following:
* URLs and API Keys for your Qrvey Platform deployment. You can find these in the deployment email. For this example you would need the following values:
  * Dataload Endpoint
  * API Key 
* A tool or software that you can use to call REST APIs. We recommend Postman or cURL commands but you can use any tool or programming language.
* Call any data loading and get the jobId.



## Get Job Status
Replace “dataloadendpoint” and “api-key” with values for your Qrvey instance.

curl example:

```
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