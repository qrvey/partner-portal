---
id: batch-manager
title: Batch Manager
sidebar_label: Batch Manager
---

<div style={{textAlign: "justify"}}>

## Introduction

Data load can be done sequentially by using batches of folders, in a particular S3 bucket. This sequence or order is defined by a manifest file in each batch.

## Pre-requisites

Before you can start, please make sure you have the following:
* URLs and API Keys for your Qrvey Platform deployment. You can find these in the deployment email. For this example you would need the following values:
  * Postdata Url
  * API Key 
* A tool or software that you can use to call REST APIs. We recommend Postman or cURL commands but you can use any tool or programming language.

## Batch Structure

Each batch will contain one or more files with data and a manifest file. Data files need to be ndjson.

```jsx
{{S3Bucket}}
	=> {{batchFolder1}}
		=> {{indexName1}}
			{{fileName1}}.ndjson
			{{fileNameN}}.ndjson
            => {{indexName2}}
			{{fileName1}}.ndjson
			{{fileNameN}}.ndjson
            => {{indexNameN}}
			{{fileName1}}.ndjson
			{{fileNameN}}.ndjson
            manifest.json

      => {{batchFolder2}}
		=> {{indexName1}}
			{{fileName1}}.ndjson
			{{fileNameN}}.ndjson
            => {{indexName2}}
			{{fileName1}}.ndjson
			{{fileNameN}}.ndjson
            => {{indexNameN}}
			{{fileName1}}.ndjson
			{{fileNameN}}.ndjson
		manifest.json

      => {{batchFolderN}}
		=> {{indexName1}}
			{{fileName1}}.ndjson
			{{fileNameN}}.ndjson
            => {{indexName2}}
			{{fileName1}}.ndjson
			{{fileNameN}}.ndjson
            => {{indexNameN}}
			{{fileName1}}.ndjson
			{{fileNameN}}.ndjson
		manifest.json

```

## Manifest structure

Manifest file will let the Data Load know which files need to be processed inside a batch and will let the process know which is the next batch. It is a json with the following schema:

```jsx
{
  "listFiles": [
    "{{indexName1}}/{{fileName1}}.ndjson",
    "{{indexName2}}/{{fileName2}}.ndjson",
    .....
    "{{indexNameN}}/{{fileNameN}}.ndjson"
  ] ,
  "s3PathNext": "{{nextBatch}}"
}
```


## Batch Manager API

* Url: {{PostdataURL}}/batchManager/start
* Method: POST
* Params:
	

<table class="demo">
	<thead>
	<tr>
		<th>Required</th> 
		<th>Property</th>
        <th>Type</th>
        <th>Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>no</td>
		<td>resetAllBatches</td>
        <td>Boolean</td> 
        <td>Reset all batches of the batch manager process</td> 
	</tr>
	<tr>
		<td>no</td>
		<td>reset</td>
        <td>string</td>
		<td>Reset just the batches separated by a comma.</td>
	</tr>
	</tbody>
</table> 


* Body:
```jsx
{
    "S3_PATH_BUCKET": "{{S3Bucket}}",
    "S3_PATH_NEXT": "{{nextBatch}}"
}
```

cURL example:
```jsx
curl --location --request POST '{{PostdataURL}}/dataload/batchManager/start?resetAllBatches=true' \
--header 'x-api-key: {{apikey}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "S3_PATH_BUCKET": "{{S3Bucket}}",
    "S3_PATH_NEXT": "{{nextBatch}}"
}'
```
</div>