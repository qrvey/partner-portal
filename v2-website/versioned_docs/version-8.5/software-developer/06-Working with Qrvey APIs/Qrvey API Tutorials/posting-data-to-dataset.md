---
id: posting-data-api
title: Posting Data to a Dataset Using the Qrvey API
sidebar_label: Posting Data (API)
tags: [Software Developer]
sidebar_position: 3
displayed_sidebar: getting-started
---

<div>

This article describes how to use the Post Data API to update a [Managed Dataset](../../../composer/05-Working%20with%20Data/Datasets/01-Overview%20of%20Datasets/datasets-managed.md). Managed Datasets store data in Amazon OpenSearch/Elasticsearch service. The Post Data API is provided by the Qrvey Data Router component. 

## Prerequisites
Gather the following details about your Qrvey instance. This information was provided in the welcome email sent by Qrvey when your environment was first set up. For more information, see [Frequently Asked Questions (FAQ)](../../../getting-started/faqs.md). You can also find this information in AWS, under **CloudFormation** > **Stacks** > **Qrvey`<instance>`MicroservicePipeline** > **Parameters**.

Qrvey Data Router details: 
* Postdata URL
* Data Router API Key 

Qrvey Composer details:
* Base URL 
* API Key
* QrveyID (the user ID of the owner of the application)

## Using the Post Data API
The Post Data API enables you to upload an array of records. An example of its syntax is below:

```json
curl  '{postdataurl}/postdata' \
--header 'Content-Type: application/json' \
--header 'x-api-key: {datarouter-api-key}' \
--data '{
  "datasetId": "{datasetID}",
  "documentUpdateMethod": "upsert",
  "data": [
    {
      "<Column_name_should_match_source_column_name_in_dataset>":"<value>”,
      "<Unique_ID_Columns_should_match_existing_value_for_upsert>":""
    }
  ]
}'
```

Be sure to include the following parameters:

* `datasetId`. You can obtain the DatasetID from Qrvey Composer or from the Get All Datasets API. For more information, see [Get All Datasets](https://qrvey.stoplight.io/docs/qrvey-api-doc/6345876af84c6-get-all-datasets). Note that Get All Datasets requires the QrveyID parameter, which is the user ID of the owner of the application. Log in to Qrvey Composer and retrieve the ID value from the URL of any dataset. 
* `documentUpdateMethod`. Enables data to be updated or inserted. The Dataset should have UniqueID columns defined. Inserting data should contain the same columns and values to match existing records for updates. Otherwise, data will be inserted as a new record. 

The Post Data API returns a JobID, indicating that data is queued for upsert. To request the job status, use the Status API and provide the JobID. For example:

`curl --location 'https://{postdataurl}/{JobID}/status' \
--header 'x-api-key: {datarouter-api-key}'`

## Example of Using the Post Data API 
The following example enters three records into the Users dataset. This dataset has the following unique IDs: `TENANT_ID`, `ID`, `USER_ID`, `ACCOUNT_ID`, `STATUS`, `ROLE_NAME`. The values in these fields dictate whether to use the Insert or Update action. 

```json
curl --location 'https://your_qrvey_domain/Prod/dataload/postdata' \
--header 'Content-Type: application/json' \
--header 'x-api-key: <API_KEY>' \
--data-raw '{
  "datasetId": "<DATASET_ID>",
  "documentUpdateMethod": "upsert",
  "data": [
    {
    "ID": "1000101",
    "TENANT_ID": "1000",
    "USER_ID": "<USER_ID>",
    "ACCOUNT_ID": "Qrvey101",
    "ACCOUNT_NAME": "Qrvey - Name Added",
    "STATUS": "ACTIVE",
    "ROLE_NAME": "Portal User Role Changed ",
    "FIRST_NAME": "Dilant",
    "LAST_NAME": "Patel",
    "EMAIL": "dilant.changed@qrvey.com",
    "LASTUPDATED": "2023-07-10T20:48:34.679Z"
    },
    {
    "ID": "1000102",
    "TENANT_ID": "1000",
    "USER_ID": "dilant@qrvey.com",
    "ACCOUNT_ID": "Qrvey101",
    "ACCOUNT_NAME": "Qrvey - the Second",
    "STATUS": "ACTIVE",
    "ROLE_NAME": "Portal User Role",
    "FIRST_NAME": "Dilant",
    "LAST_NAME": "Patel",
    "EMAIL": "dilant.changed@qrvey.com",
    "LASTUPDATED": "2023-07-10T20:48:34.679Z"
    },
    {
    "ID": "1000103",
    "TENANT_ID": "1000",
    "USER_ID": "dilant@qrvey.com",
    "ACCOUNT_ID": "Qrvey101",
    "ACCOUNT_NAME": "Qrvey",
    "STATUS": "ACTIVE",
    "ROLE_NAME": "Portal Admin",
    "FIRST_NAME": "Dilant",
    "LAST_NAME": "Patel",
    "EMAIL": "dilant@qrvey.com",
    "LASTUPDATED": "2023-07-10T20:48:34.679Z"
    } 
  ]
}'
```

This call returns a jobID value. For example:

```json
{
"jobId": "825ec7a0-1f48-11ee-9c29-5f7a08107b15"
}
```

## Requesting the Job Status
To request the job status, use the following call:

`curl --location 'https://{postdataurl}/{JobID}/status' \
--header 'x-api-key: {datarouter-api-key}'`

This call returns the status of the data upsert request. For example:

```json
{
  "statusJob": {
    "jobId": "7ef78c10-1fdd-11ee-8cf2-4b9f0f29818b",
    "status": "Complete",
    "approximatePercentComplete": 100,
    "runtime": "0h 0m 11s"
  },
  "jobCompletionStatistics": {
    "dataSourcePumpStatistics": {
      "lx2TbZdQl": {
      "failed": 0,
      "pumpTimeSeconds": 0,
      "read": 3,
      "successful": 3
      }
      },
      "failed": 0,
      "fillingEsStatistics": {
      "added": 0,
      "deleted": 0,
      "failed": 0,
      "updated": 3
      },
    "successful": 0,
    "updated": 3,
    "health": {
    "concurrencyPutChunkToEs": 4
    } 
  }
}
```


</div>