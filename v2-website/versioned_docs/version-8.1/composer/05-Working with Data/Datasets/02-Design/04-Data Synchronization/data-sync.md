---
id: data-sync
title: Data Sync
sidebar_label: Data Sync
tags: [Data Analyst]
displayed_sidebar: getting-started
---

<div>

Data Sync is the most commonly used method to keep the data up-to-date and synchronized with the Data Sources. Data synchronization can be done on a schedule or automatically triggered if the Dataset is based on other Datasets and those Datasets are reloaded (cascade synchronization).

This feature can be accessed by going to the Data Sync tab of the Dataset Design screen. Note that you have to have loaded your dataset at least once before you can set up a sync schedule for it.  

![1_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/ds1.png)


> **Note**: While data sync is a good way to keep your data up-to-date, it is not the only way. You may want to consider using data change triggers in Automation, or a programmatic approach using APIs for the same purpose. The method that you choose depends on your needs and the frequency of changes to your data, among other considerations. 

## Sync Types

Data can be obtained in two ways from the Data Sources: by reloading all of the data from the source or by getting the records that have been added or updated since the last sync.
In order to enable data synchronization, at least one of the Data Sources must have a Sync Type.

### Full Reload
When setting the Sync Type to “Full Reload”, the Data Sync process will get all records from the selected Data Sources, drop all the data in the Dataset, and load them again.

The most common reason for a full reload is if some records have been deleted from the source and they have to be deleted from the Dataset as well. Since Append and Update mode only inserts or updates new or changed records, it does not provide a way to remove records from the dataset and a full reload is required.

Other reasons include, but are not limited to, lack of unique identifier or a timestamp column in the source data.

![6_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/6_data_sync.png#thumbnail)

### Append and Update
This option will only add or update records that have been added or updated since the last data load. In order to select the Append and Update mode for data sync the corresponding Data Source must have the following two features:

* A unique identifier (see Datasets article to learn about setting up unique identifiers)
* A data field that can be used as the timestamp for the change; when the record was added, or updated


<i>Append and Update</i> is the preferred method of data sync as it requires processing of a limited number of records and is therefore faster than a full reload.

![7_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/7_data_sync.png#thumbnail)


## Sync Frequency
Data Sync can run based on a schedule, be triggered as a result of an underlying Dataset getting loaded or synced, or be run manually.

### Scheduled Sync
Scheduled syncs can be planned ranging from every minute to every month. Each option presents relevant controls to customize its start time. All times are in the GMT timezone. 

![2_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/ds2.png#thumbnail)


You just need to set your schedule and pick the Sync Type. At least one of your Data Sources is required to have a Sync Type.

Please keep in mind that the data synchronization trigger is ignored if another data synchronization for the same dataset is already running. That means that you don’t want to schedule your syncs too close to each other and have to take the time that it takes for the process to finish, into account. 

### Cascade Sync
The last option in the list of frequencies is <i>When data sources are updated</i>. This option is only enabled when the Dataset has at least another Dataset among its Data Sources. Choosing this option will cause the data sync process to be triggered automatically when one of the underlying Datasets gets its data updated.

![4_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/ds3.png#thumbnail)

This method does not require a schedule as the product automatically detects when one of the underlying Datasets gets new records.


### Manual Sync
You can initiate a data sync at any time by turning on Data Sync, choosing your sync type and clicking the <b>Sync Now</b> button. A sync job will run immediately according to the sync type settings and then continue based on the selected schedule. 

## Next Sync Query Window
In Append and Update mode the product compares the timestamp column to the last successful load time and processes every record that its timestamp falls between that last successful load time and “now” minus one minute. This logic works in most cases but if you need to adjust this window for any reason, and start at an earlier time than that last load time, you can use the controls under the Next Sync Query Window section to pick your desired starting time. The end time is always set to “now”.

Note that the start time has to be in the past and less than the end time. 
Once a sync job is run with the selected time, the start time will reset to the successful load time again.

![next_sync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/ds4.png#thumbnail)

## Deciding the Sync Logic
Starting with version 7.2, Qrvey uses the previous data load’s time and compares that to the timestamp of the records to determine which records of data need to be added or updated. This method works in all cases where the timestamp column values are close to the actual time when records get inserted into the data source (within one minute). 
Prior to 7.2, Qrvey obtained the sync query window's start time from the newest value stored. 

> **Important Note**: If in your use case, the timestamp columns don't match the actual data insert time and you wish to continue using the old logic present in versions prior to 7.2, you can set the deployment-wide AWS Lambda environment variable DATASYNC_START_TIME_MODE to “FromIndex”:
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>Lambda: <strong><i>deploymentId</i>_dataload_drInit</strong></li>
<li>Environment Variable: <strong>DATASYNC_START_TIME_MODE</strong></li>
<li>Value: <strong>FromIndex</strong></li> </ul>

## Putting It All Together To Set Up A Data Sync
In order to set up an efficient sync job you have to go through the following steps and make the appropriate decisions:

<b>1- Does the data in this Dataset need to be refreshed based on a schedule?</b>

Some datasets may not require scheduled updates. For example a dataset of employees may not change frequently and may need to be reloaded manually, or through an Automation workflow whenever a new employee is hired. 

If the answer to this question is No, stop here and don’t set up a sync. However, if your answer is Yes, then go to step 2.

<b>2- Determine the best Sync Type for each Data Source</b>

You have to repeat these steps for all of the Data Sources that make up your Dataset:

<b>2.1- Does this Data Source need to be refreshed?</b>

Just like you have to answer this question for the Dataset itself, you have to make that decision for each underlying data source, too. Note that when you have a multi-source Dataset, in many cases some of its data sources may be static and not need refreshing. For example you may have joined data from a States table with your Customers to include their geographical location in the Dataset. Since the list of states does not change you may want to set the <b>Sync Type</b> of this Data Source to <b>Off</b>. If you decide that the Data Source needs to be refreshed, then answer the next question.

<b>2.2- Does this Data Source have a unique identifier and a datetime field that reflects the added/modified date and time for the record? </b>

> **Note**: Unique identifiers and timestamps can be composite. In other words, you don’t need to pick a single column as a unique identifier or timestamp and can pick multiple columns to play those roles.

If the answer to both parts of this question is Yes, you still need to ask yourself a final question before choosing the Append and Update mode:

<b>2.3- Do records from this Data Source get deleted that need to be reflected in the Dataset?</b>

If there are no deletes you can safely pick your **Timestamp Column(s)** and set **Sync Type** to **Append and Update**. If either of the fields in 2.2 are missing, or there are hard deletes that have to be reflected in the Dataset, you have to set the **Sync Type** to **Full Reload**. 

> **Note**: If the <i>Append and Update</i> option is disabled it means that you either have not set a unique identifier for your Dataset or not selected timestamp column(s). Those steps have to be completed first.

The database timezone is set to GMT 0 by default. If your database is in a different timezone, set the timezone to the appropriate zone under the **Database Time Zone** column.

<b>3- Does the Next Sync Query start time need to be adjusted?</b>

This section only shows up if at least one of the Data Sources have been set to refresh in <i>Append and Update</i> mode. This setting rarely needs to be changed, as the default time is set to the last successful load time and is appropriate. One example that shows how this setting might come in handy is a case where you change the data source at some point after the Dataset has been loaded and the new data source contains historical data that were added or modified before the last load time of the Dataset and you wish to bring in those records. Simply set the **Query Start Time** to (or before) the earliest record’s timestamp that you wish to load. This will ensure that those records are included in the next sync.

<b>4- How frequently does the Dataset need to be updated?</b>

While it’s tempting to initiate a sync job as frequently as possible, keep in mind that data load takes time and consumes resources and it’s best to keep the syncs as infrequent as possible. 

Another point to keep in mind when picking a frequency is that you may wish to perform your data syncs during off hours when your traffic is at its lowest. 

Choose the desired frequency and set up the time(s) for the sync. You can choose <i>When data sources are updated</i>, if your Dataset is based on other Datasets and you wish for it to be refreshed every time any of those Datasets gets refreshed. In this case the frequency is determined by the sync schedule of the underlying Datasets.

<b>5- Turn on Data Sync</b>

Use the toggle button at the top of the section to turn on Data Sync.

<b>6- (Optional) Run a manual Sync</b>

You can initiate a sync manually by clicking the **Sync Now** button if you need to do so. 

<b>7- (Important) Apply Changes</b>

Don’t forget to persist your changes by clicking the **Apply Changes** button located at the top right corner of the screen!

> **Note**: The data from the Dataset remains accessible during data synchronization, as the process runs in the background. Refreshed data is only made available once the process finishes. 

</div>