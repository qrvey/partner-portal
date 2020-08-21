---
id: version-5.3-connectors-status-flow
title: Connectors Overview
sidebar_label: Connectors
original_id: connectors-status-flow
---

<div style="text-align: justify">

When using connectors, they will go through various states. These will indicate the progress of the whole process.

The description of each possible status during the execution of a connector is described in the following table:

|Status|Status description|
|--------|-----------|
|Provisioning| In this status, computational resources are requested to be provisioned in AWS infrastructure.|
|Preparing data|In this status, the connector has computed the number of rows to be inserted and set it as the number of expected rows to be ingested during its execution.|
|Running|During this status, the connector is ingesting the retrieved data from the data source and keep on posting it to PostData services (Data Router) in normalized batches of data.|
|Finished|In this status, the entire retrieved data is finally posted and ingested by the PostData Service.|
|Terminate|This status is reached only when there are no records as the result of the query, so there is no data to be ingested.|
|Failed|This status is used to describe that some error happened during the execution of the connector. It could happen due to different issues. For example: database connection issues, authentication/authorization issues, non-existing resources (tables, views, columns) involved in the SQL queries, malformed SQL queries, etc.|