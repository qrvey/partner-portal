---
id: create-a-dataset-via-api
title: Create a Dataset (API)
sidebar_label: Create a Dataset (API)
tags: [Software Developer]
sidebar_position: 3
displayed_sidebar: getting-started
---

This article describes how to create a dataset from scratch using the Qrvey endpoint, Create Dataset. This endpoint enables you to set the properties of all dataset elements that you want to create. To learn more about how datasets work in Qrvey Composer, see [Overview of Datasets](../../composer/05-Working%20with%20Data/Datasets/01-Overview%20of%20Datasets/overview-of-datasets.md).  

>**Note**: The endpoint Create Dataset creates a dataset from scratch, including creating the connection. If a connection already exists, you would use the endpoint, [Create a Dataset from Existing Connection](https://qrvey.stoplight.io/docs/qrvey-api-doc/9fed20b516e4d-create-dataset-from-existing-connection). To learn more about how connections work in Qrvey Composer, see [Connections](../../composer/05-Working%20with%20Data/connections.md). To learn how to use the API to create a connection, see [Creating a Connection Using the Qrvey API](./connections-api.md).

Before you begin, review the Qrvey documentation for the following endpoints:
* [Get Dataset](https://qrvey.stoplight.io/docs/qrvey-api-doc/2ff17959232b9-get-dataset)
* [Create Dataset](https://qrvey.stoplight.io/docs/qrvey-api-doc/939f8c281cb8f-create-dataset)

>**Note**: The endpoints described in this article require authentication tokens in the header.

Gather the information needed for the required parameters in Create Dataset. At a minimum, obtain the following:
* **name**. The name of the dataset that you will create.
* **datasources.name**. The name of the connection that the dataset will use.
* **connectionId**. The ID of the connection that the dataset will use.
* **connectorType**. The type of connection used by the Dataset.
* **columns**. Object that defines each column, datatype, column name, etc.

If you’d like to familiarize yourself with the structure of an existing dataset, use the Get Dataset endpoint to obtain the structure. For example, You can use Get Dataset to help determine if a datasetId is already taken. However, you can avoid potential naming conflicts by using the UUID function in your code when calling Create Dataset.

When creating a dataset, define the following three structures:
* The dataset object
* The data sources associated with the datasets
* The columns of each data source

The following sections describe how to define these structures. 

## Create the dataset object
The dataset object is the shell that defines the name of the dataset and contains all the parameters used to create the dataset. Use the following syntax:

`"name": "NameForNewDataset"`

## Create the data sources associated with the datasets
Create a child object that defines all of the data sources in the dataset. Each data source is linked to a connection identified by a connectionID. Note that the connectionID alone does not specify which database/table to associate with the dataset. You need to define that information as well. 

The dataSourceId should identify the connection, the database name, and the table/view name. You can use any UUID as long as you don't have the same datasourceID inside the same dataset. For example, you can have two datasets, each using the same dataSourceId but different datasetIds.

The following example creates a data source using one connection:

```json
"datasources": [
    {
      "name": "Test",
      "connectionId": "84b500d7-71c8-4b1f-adf4-f1eb0000973d",
      "datasourceId": "f54dd925-2599-432c-9567-403230bdafed",
      "database": "SomeDatabaseNameThatexistsInTheConnection",
      "tableName": "SomeTableNameThatexistsInTheDatabase",
      "connectorType": "MSSQL_LIVE",
    }
]
```

## Create the columns of each data source
Define the columns for each data source that you intend to use in the dataset. For example:

```json
"columns": [
    {
      "appId": "TheIDofTheAPPthatcontainsThisDataset",
      "connectionId": "TheiDOftheConnection",
      "columnType": "NUMBER",
      "columnName": "TheNameofThecolumn",
      "userId": "string",
      "origColumnType": "NUMBER",
      }
]
```

The above example provides the minimum information. You can provide additional child objects such as dataSync.
