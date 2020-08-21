---
id: dataload-S3
title: Data Loading - S3 Files
sidebar_label: Data Loading - S3 Files
---

<div style="text-align: justify">


## Introduction

The user can load data to the Qrvey platform using an API that receives a body with a reference to a S3 bucket file.

## Pre-requisites
Before you can start following these steps, please make sure you have the following:
* URLs and API Keys for your Qrvey Platform deployment. You can find these in the deployment email. For this example you would need the following values:
  * Dataload Endpoint
  * API Key 
* A tool or software that you can use to call REST APIs. We recommend Postman or cURL commands but you can use any tool or programming language.
* Load the files inside a S3 bucket.
* Create a metadata using the metadata API.

## Dataload Structure

<table class="demo">
	<thead>
	<tr>
		<th>Required</th> 
		<th>Field</th>
        <th>Data Type</th>
        <th>Description</th>
        <th>Value</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>Yes</td>
		<td>datasetId</td>
        <td>String</td> 
        <td>Reference to the dataset
        <td>It could be a random value.
</td> 
	</tr>
	<tr>
		<td>Yes</td>
		<td>metadataId</td>
        <td>String</td>
		<td>Reference to metadata</td>
        <td> </td>
	</tr>
    <tr>
		<td>Yes</td>
		<td>datasources</td>
        <td>Array</td>
		<td>Datasources to load</td>
        <td><a href="https://docs.google.com/document/d/14E9vi-vVumZmUCLSq-Z-rWihQdigPVEOeNdu879Uspw/edit#heading=h.1m16imwrw2yi"> Datasource Structure </a>
</td>
	</tr>
	</tbody>
</table> 





## Datasources Structure


<table class="demo">
	<thead>
	<tr>
		<th>Required</th> 
		<th>Field</th>
        <th>Data Type</th>
        <th>Description</th>
        <th>Value</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>Yes</td>
		<td>datasourceId</td>
        <td>String</td> 
        <td>Reference to the datasourceId.
        <td>It could be a random value.
</td> 
	</tr>
	<tr>
		<td>Yes</td>
		<td>indexName</td>
        <td>String</td>
		<td>indexName</td>
        <td> </td>
	</tr>
    <tr>
		<td>Yes</td>
		<td>dataConnection</td>
        <td>Object</td>
		<td>Structure of loading data</td>
        <td><a href="https://docs.google.com/document/d/14E9vi-vVumZmUCLSq-Z-rWihQdigPVEOeNdu879Uspw/edit#heading=h.rpe2ir16bixy"> Data Connection Structure </a>
</td>
	</tr>
	</tbody>
</table> 

### Data Connection Structure


<table class="demo">
	<thead>
	<tr>
		<th>Required</th> 
		<th>Field</th>
        <th>Data Type</th>
        <th>Description</th>
        <th>Value</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>Yes</td>
		<td>appid</td>
        <td>String</td> 
        <td>Reference to appid
        <td>It could be a random value.
</td> 
	</tr>
	<tr>
		<td>Yes</td>
		<td>connectorid</td>
        <td>String</td>
		<td>Reference to connectorid</td>
        <td> It could be a random value.
</td> 
	</tr>
    	<tr>
		<td>Yes</td>
		<td>connectorType</td>
        <td>String</td>
		<td>Reference to connector type
</td>
        <td>FILE_UPLOAD</td>
	</tr>
    	<tr>
		<td>Yes</td>
		<td>name</td>
        <td>String</td>
		<td>Name of the connector
</td>
        <td> It could be a random value.</td>
	</tr>
    	<tr>
		<td>Yes</td>
		<td>s3Bucket</td>
        <td>String</td>
		<td>Reference to S3 bucket where the file is
</td>
        <td> </td>
	</tr>
    	<tr>
		<td>Yes</td>
		<td>s3Key/s3Path</td>
        <td>String</td>
		<td>**s3key** or **s3Path** of the file inside the bucket. You must use one of them, but not both together.
</td>
        <td> </td>
	</tr>
    	<tr>
		<td>Yes</td>
		<td>contentType</td>
        <td>String</td>
		<td>
Type of the file inside the S3 bucket. (json, ndjson,csv)
</td>
        <td> 
        * application/json
<br> * application/fhir+ndjson
<br> *text/csv
</td>
	</tr>
    	<tr>
		<td>Yes</td>
		<td>createDate</td>
        <td>Date</td>
		<td>
Creation date of the loading
</td>
        <td> 
Date in UTC format
</td>
	</tr>
    <tr>
		<td>Yes</td>
		<td>modifyDate</td>
        <td>Date</td>
		<td>Modify date of the loading
</td>
        <td>
Date in UTC format

</td>
	</tr>
	</tbody>
</table> 


cURL example:
```json
curl --location --request POST '{{dataloadendpoint}}/dataload/init' \
--header 'x-api-key: {{api-key}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "datasetId": "{{datasetId}}",
    "metadataId": "{{metadataId}}",
    "datasources": [
        {
            "datasourceId": "{{datasourceId}}",
            "indexName": "{{indexName}}",
            "dataConnection": {
                "appid": "{{appId}}",
                "connectorid": "{{connectorid}}",
                "connectorType": "FILE_UPLOAD",
                "name": "JSON File Connector",
                "s3Bucket": "{{bucket}}",
                "s3Path": "{{s3path}}",
                "contentType": "{{contentType}}",
                "createDate": "{{createdDateTime}}",
                "modifyDate": "{{modifyDateTime}}"
            }
        }
    ]
}'
```
Response example:
```json
{
    "jobId": "755e4d80-d11e-11ea-a4f7-5f41a4d85aa3"
}
```
This API will add the records into the DataRouter queue and it returns the JobID so you can track the progress of your record. This helps DataRouter manage sudden spikes and large volumes of data. 

## Get Job Status (optional)

This API call will verify the progress of the data load job from the previous step.

Replace “dataloadendpoint” and “api-key” with values for your Qrvey instance.

```json
curl --location --request GET '{{dataloadendpoint}}/dataload/{{jobId}}/status' \
--header 'x-api-key: {{api-key}}'
```

Response example:
```json
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


