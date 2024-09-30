---
id: join-lake-optimization
title: Join Lake Optimization
sidebar_label: Join Lake Optimization
tags: [CloudOps Engineer]
sidebar_position: 2
displayed_sidebar: getting-started
---

<div>

Datasets with joins have their data copied in S3 so that it may be joined using Athena.  When there are frequent data syncs, the S3 folder accumulates an excess number of small files.  In addition, when data syncs update existing records with matching IDs, the old records remain in S3.  Both of these situations degrade join performance and, in extreme cases, may even lead to errors.

Qrvey’s Join Lake Optimization (JLO) resolves these issues.  It is a process that can be run as needed to restore sync performance for a Dataset.  It performs the following actions for each data source of a Dataset:
1. Runs Athena queries that copy the data from the current data lake containing many small files into a new lake.  
    * The lake’s updated files will be larger, but there will be fewer of them.
    * The queries do not copy outdated records.
2. Removes old lake files.

JLO benefits Datasets with records that are frequently updated. In addition, JLO improves the performance of data syncs in the following situations:
* Frequent data syncs (1,000+) with a small number of records.  
* Data syncs with a large number of records (1,000+).
* The performance of data sync joins has degraded.

## Running Join Lake Optimization
During optimization, data sync jobs are suspended.  They resume their regular schedules after optimization.  Similarly, optimization is prevented during a data load job.

Run JLO for a Dataset by submitting a request to a Qrvey AWS Lambda function.

Function Name:
```
xxxxx_dataload_drJoinQuery     (xxxxx represents the Qrvey deployment ID.)
```

Event JSON:
```
{
  "operation": "executeJoinLakeOptimization",
  "datasetId": "myDatasetId",
}
```

JLO may be launched programmatically with the AWS Lambda client API or interactively with the AWS Lambda console’s **Test** feature.

## Scheduling Join Lake Optimization
Datasets at risk of degraded performance should be optimized on a regular basis.  Regular execution ensures better performance, lower cost, and greater reliability. AWS EventBridge Rules provides a convenient mechanism.  Follow these steps to create a schedule for each Dataset:
1. From the AWS console, open EventBridge Rules.
2. Click **Create Rule**.
3. Enter a name.
4. Select **Recurring Schedule**.
5. Enter either a Cron or Rate-based schedule.
6. Specify that the event should trigger a Lambda function.
7. Select the Lambda name:
```
xxxxx_dataload_drJoinQuery
```
8. Specify the JSON payload:
```
{
  "operation": "executeJoinLakeOptimization",
  "datasetId": "myDatasetId",
}
```
9. Save the schedule.




</div>