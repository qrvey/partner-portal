---
id: data-sync
title: Data Sync
sidebar_label: Data sync
---

<div style="text-align: justify">

Data Sync helps you keep your data up-to-date and synchronized with your Data Sources. This can be done on a schedule or automatically triggered when Datasets that are used as the data sources are reloaded (cascade synchronization). You can access this feature by going to the Data Sync tab on the Dataset Page.

If the Dataset contains multiple Data Sources, each of those gets their data refreshed according to the selected “sync type” and the Dataset gets its data from joining of these fresh Data Sources.

The data from the Dataset remains accessible during data synchronization, as the process runs in the background. Refreshed data is only made available once the process finishes. 


![1_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/1_data_sync.png#thumbnail)



> **Note**: While data sync is a good way to keep your data up-to-date, it is not the only way. You may want to consider using data change triggers in Automation for the same purpose. The method that you use depends on your needs and the frequency/method of changes to your data. 


## Scheduled Sync
Data Sync can be scheduled by minutes, hours, days, weeks and months. Time is scheduled in the GMT timezone.

![2_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/2_data_sync.png#thumbnail)


You just need to set your schedule and pick the Sync Type. At least one of your Data Sources is required to have a Sync Type.

Please keep in mind that the data synchronization trigger is ignored if another data synchronization for the same dataset is already running. That means that you don’t want to schedule your syncs too close to each other and have to take the time that it takes for the process to finish, into account. 

## Manual Sync
If you don’t want the automatic Data Synchronization to kick off, you can trigger it manually by using the Sync Now option. You will need to set the frequency to **None**. It is also required to have at least one Data Source set with a Sync Type.

![3_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/3_data_sync.png#thumbnail)

## Cascade Sync
We have an additional option to keep your Datasets in sync near real-time: If you create a Dataset by using other Datasets as Data Sources (underlying Datasets from now on), you can trigger a Data Sync process automatically when one of your underlying Datasets gets its data updated.

![4_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/4_data_sync.png#thumbnail)

As usual, you need to set your Sync Type for at least one of your Data Sources.

![5_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/5_data_sync.png#thumbnail)

It is important to note that this option works only for Datasets and Index View Datasets. It does not require a schedule as we can automatically detect when one of the underlying Datasets gets new records so we can run the Data Sync process.

## Sync Types

Data can be obtained in two ways from the Data Sources: by getting all the data from the source or just by getting the latest records.

### Full Reload
When setting the Sync Type to “Full Reload”, the Data Sync process will get all records from the selected Data Sources, drop all the data in the Dataset, and load them again.

![6_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/6_data_sync.png#thumbnail)

### Append and Update
This option will only update records that have been updated since the last data load. This option is only available for Database Data Sources and it requires a time column as well as an ID from the Data Source.

Identifying the most recent records depends on the time columns. You will need to set these columns as well as the time zone used in the Database (which is usually GMT +0:00).

![7_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/7_data_sync.png#thumbnail)
