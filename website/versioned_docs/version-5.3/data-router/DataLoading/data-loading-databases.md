---
id: version-5.3-loading-status-databases
title: Loading Status Databases
sidebar_label: Loading Status Databases
original_id: loading-status-databases
---

<div style="text-align: justify">

## Introduction
The user can load data to the Qrvey platform using an API that receives a body with a JSON structure with the necessary parameters to get data from databases like **MYSQL, MS_SQL, ORACLE** and **POSTGRES**.

## Pre-requisites
Before you can start, please make sure you have the following:
* URLs and API Keys for your Qrvey Platform deployment. You can find these in the deployment email. For this example you would need the following values:
  * Dataload Endpoint
  * API Key 
* A tool or software that you can use to call REST APIs. We recommend Postman or cURL commands but you can use any tool or programming language.
* Create a metadata using the metadata API.

## Dataload Structure

<table class="demo">
	<thead>
	<tr>
		<th>Required</th>
		<th>Field</th>
        <th>Data Type</th>
		<th>Description</th>
        <th>Values</th>
	</tr>
	</thead>
	<tbody>
</td>
		<td>Yes</td>
        <td>datasetId</td>
        <td>String</td>
        <td>Reference to the dataset</td>
        <td>Random value</td>
	</tr>
	<tr>
		<td>Yes</td>
		<td>metadataId</td>
        <td>String</td>
        <td>Reference to metadata</td>
        <td></td>
    </tr>
	<tr>   
        <td>Yes</td>
        <td>datasources</td>
        <td>Array</td>
        <td>Datasources to load</td>
        <td><a href="https://docs.google.com/document/d/18r1MBDUP9k7ws81ZjKr0z8ct3hPTZt1w5WiYvynHbeE/edit#heading=h.1m16imwrw2yi">Datasources Structure</a></td>
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
        <th>Values</th>
	</tr>
	</thead>
	<tbody>
</td>
		<td>Yes</td>
        <td>datasetId</td>
        <td>String</td>
        <td>Reference to the datasourceId</td>
        <td>Random value</td>
	</tr>
	<tr>
		<td>Yes</td>
		<td>indexName</td>
        <td>String</td>
        <td>indexName</td>
        <td></td>
    </tr>
	<tr>   
        <td>Yes</td>
        <td>dataConnection</td>
        <td>Object</td>
        <td>Structure of loading data</td>
        <td><a href="https://docs.google.com/document/d/18r1MBDUP9k7ws81ZjKr0z8ct3hPTZt1w5WiYvynHbeE/edit#heading=h.rpe2ir16bixy">Data Connection Structure</a></td>
    </tr>
	</tbody>
</table> 


## Data Connection Structure

<table class="demo">
	<thead>
	<tr>
		<th>Required</th>
		<th>Field</th>
        <th>Data Type</th>
		<th>Description</th>
        <th>Values</th>
	</tr>
	</thead>
	<tbody>
</td>
		<td>Yes</td>
        <td>appid</td>
        <td>String</td>
        <td>Reference to the appid</td>
        <td>Random value</td>
	</tr>
	<tr>
		<td>Yes</td>
		<td>connectorid</td>
        <td>String</td>
        <td>Reference to connectorid</td>
        <td>Random value</td>
    </tr>
	<tr>   
        <td>Yes</td>
        <td>connectorType</td>
        <td>String</td>
        <td>Reference to connector type</td>
        <td>MS_SQL, MYSQL, POSTGRES, ORACLE</td>
    </tr>
    <tr>   
        <td>Yes</td>
        <td>host</td>
        <td>String</td>
        <td>Database host</td>
        <td> </td>
    </tr>
    <tr>   
        <td>Yes</td>
        <td>port</td>
        <td>Numeric</td>
        <td>Database port</td>
        <td> </td>
    </tr>
    <tr>   
        <td>Yes</td>
        <td>password</td>
        <td>String</td>
        <td>Database password</td>
        <td> </td>
    </tr>
    <tr>   
        <td>Yes</td>
        <td>user</td>
        <td>String</td>
        <td>Database user</td>
        <td> </td>
    </tr>
    <tr>   
        <td>Yes</td>
        <td>dbName</td>
        <td>String</td>
        <td>Name of the database to use</td>
        <td> </td>
    </tr>
    <tr>   
        <td>Yes</td>
        <td>query</td>
        <td>String</td>
        <td>Query to execute</td>
        <td> </td>
    </tr>
	</tbody>
</table> 


## MYSQL cURL Example

```JSON
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
                "connectorType": "MYSQL",
                "host": "{{dbhost}}",
                "port": {{port}},
                "password": "{{password}}",
                "user": "{{dbuser}}",
                "dbName": "{{dbname}}",
                "query": "{{query}}"
            }
        }
    ]
}'
```

## MS_SQL cURL Example

```JSON
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
                "connectorType": "MS_SQL",
                "host": "{{dbhost}}",
                "port": {{port}},
                "password": "{{password}}",
                "user": "{{dbuser}}",
                "dbName": "{{dbname}}",
                "query": "{{query}}"
            }
        }
    ]
}'
```

## ORACLE cURL Example

```JSON
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
                "connectorType": "ORACLE",
                "host": "{{dbhost}}",
                "port": {{port}},
                "password": "{{password}}",
                "user": "{{dbuser}}",
                "dbName": "{{dbname}}",
                "query": "{{query}}"
            }
        }
    ]
}'

```

## POSTGRES cURL Example

```JSON
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
                "connectorType": "POSTGRES",
                "host": "{{dbhost}}",
                "port": {{port}},
                "password": "{{password}}",
                "user": "{{dbuser}}",
                "dbName": "{{dbname}}",
                "query": "{{query}}"
            }
        }
    ]
}'

```
