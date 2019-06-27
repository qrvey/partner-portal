---
id: postdata-content
title: Postdata Overview
sidebar_label: Postdata
---

<div style="text-align: justify">

Posting, uploading or sending data is the process where the information provided by the user is stored in an Elasticsearch index through Data Router. In this process, all transformations defined in the Metadata are applied.

## Request structure

All data has to be in JSON format and must indicate the Metadata that is going to be used.

When using the API (`{{postdataendpoint}}/data`), the body must be an application/json.

```json
{
        "metadataId": "the_metadataId",
        "data": [
            { row1 },
            { row2 },
            ...
        ]
    }
```
>When uploading data through an S3 bucket, several data files can be zipped in single file: application/x-zip-compressed, application/zip and application/x-gzip formats are supported.

| **Property** | **Details** |
| --- | --- |
| **metadataId** | This is the ID of the Metadata that is going to be used. This Metadata indicates the Elasticsearch index |
| **data** | This is the data to be uploaded. It is an array of objects where each element represents a row of the data.

## Response structure
When calling the `postadata` endpoint a simple response is returned:
```json
{
    "state": {
        "id": "3",
        "name": "Successful"
    },
    "metadataId": "the_metadataId"
}
```
If the query string `returnAllLog` is set to `true`, then information more detailed information about the process is returned. This includes Elasticsearch information.

```json
{
    "state": {
        "id": "3",
        "name": "Successful"
    },
    "request": {
        "ip": "127.0.0.1",
        "startTime": "2019-06-26 21:02:29:115",
        "endTime": "2019-06-26 21:02:29:225",
        "token": "554a",
        "totalTime": 110,
        "statusCode": 200
    },
    "metaDataId": "the_metadataId",
    "transforms": {
        ...
    },
    "dataRules": [],
    "responseES": {
        "countToProcess": 3,
        "countSaved": 3,
        "countUpdated": 0,
        "countWithErrors": 0,
        "rowSaved": "",
        "rowUpdated": "[]",
        "errors": "[]",
        "rowSkip": "[]",
        "rowsWithErrors": "[]",
        "countRowsRejected": 0,
        "rowsRejected": "[]"
    }
}
```
