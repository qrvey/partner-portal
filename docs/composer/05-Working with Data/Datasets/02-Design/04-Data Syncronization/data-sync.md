---
id: data-sync
title: Data Sync
sidebar_label: Data Sync
tags: [Data Analyst]
displayed_sidebar: data-analyst
---

<div>

The Data Sync feature enables you to keep data up-to-date and synchronized with the Data Sources. You can run the synchronization manually or set up a schedule. This feature also supports cascade synchronization, in cases in which the Dataset is based on other Datasets and those Datasets are reloaded.

The data from the Dataset remains accessible during data synchronization, as the process runs in the background. Refreshed data is only made available once the process finishes. You cannot run a data synchronization if another data synchronization for the same Dataset is already running.

>**Note**: In addition to using the Data Sync feature, you can also use data change triggers in the Automation feature or Qrvey APIs to keep your data up-to-date and synchronized. 

## Configuring Data Sync
1. In the Data feature, open a Dataset and click **Data Sync** on the Design tab. Note that you must have loaded your dataset at least once before you can set up a sync schedule for it. 
2. Click the **Data Sync** toggle to activate this feature. 

![Data Sync tab 83](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/Data-Sync-tab-83.png)

3. Under **Data Source Settings**, configure the sync type. For more information, see the following section, “Data Source Settings”.
4. To run a synchronization manually, click **Sync Now**.
5. Under **Schedule**, configure the scheduling options. For more information, see “Scheduling a Data Sync”.
6. Click **Apply Changes**.
7. Repeat for all Data Sources in the Dataset. 


## Data Source Settings
The Data Source Settings section displays each data source and provides the option to select its Sync Type.  At least one data source must have a Sync Type. Options are:
* **Off**. Do not perform data synchronization on this data source. Select this option for data sources that rarely or never change, such as geographical data or an employee roster. 
* **Full Reload**. Reload all data from the data source. This option ensures that, when data is deleted from the source, the dataset is properly updated. This option is also required when the data source does not have unique identifiers or a timestamp column. 
* **Append and Update**. Update only the records that have been added or updated since the last data load. For more information, see the following section, “About the Append and Update Process”.

### About the Append and Update Process
The Append and Update process updates only the records that have been added or updated since the last data load. This option is more computationally efficient than the Full Reload process, however, the data source must have both unique identifiers and a data field that can function as a timestamp (indicating when the record was added or updated). Otherwise, this option is disabled. Append and Update does not delete records that have been deleted in the data source. 

>**Note**: To set up a unique identifier, on the Design tab, click **Columns** and click the three-dot menu for the desired column. Point to **Unique ID**, and click **On**. 

>![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Datasets/9datasets.png#thumbnail-40)

The Append and Update process compares the timestamp column to the last successful load time and processes every record that its timestamp falls between that last successful load time and “now” minus one minute. 

When you select Append and Update option, the Next Sync Query Window section displays. 

![new-sync-query-window-83](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/new-sync-query-window-83.png)

This section enables you to set an earlier time than the last load time by changing the values in the **Query Start Time** fields. The values in these fields must be set to a time in the past. The default time is the last successful load time, and it rarely needs to be changed. One example in which this setting is helpful is when you change the data source at some point after the Dataset has been loaded and the new data source contains historical data that were added or modified before the last load time of the Dataset. In this case, set the start time to the earliest timestamp that you wish to load. 

The value in the **Query End Time** field is always set to the current time.

>**Note**: The values in the Query Start Time fields are automatically updated to the last successful load time.

## Scheduling a Data Sync
You can schedule the Data Sync process using one of two methods:
* **Basic**. Enables you to define the sync schedule ranging from every minute to every month using the drop-down menus under Schedule.
* **CRON**. Enables you to use an AWS Cron expression for more advanced scheduling options. To ensure that the expression uses proper syntax, click Test CRON Expression to validate it. For more information on Cron, see the AWS documentation, [Cron expressions](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule-schedule.html#CronExpressions).

When scheduling a sync, keep in mind the following points:
* Because the data sync process consumes resources, schedule them as infrequently as possible and during off hours when traffic is at its lowest. 
* If you have multiple syncs schedule, be sure to stagger the schedule to avoid overstressing data load resources. If using the Basic mode, vary the number of minutes set in the **Minutes after the Hour** field.
* The data synchronization trigger is ignored if another data synchronization for the same dataset is already running. To avoid potential conflicts, ensure that syncs on the same dataset are scheduled far enough apart so that one completes before the next one begins.
* To schedule the sync to occur on the last day of the month, in Basic mode, select the **Last Day** option under **Day of the month**.
* All times are in the GMT timezone. 

## Configuring a Cascade Synchronization
A cascade synchronization triggers the Data Sync process automatically when one of the underlying Datasets gets its data updated. This method does not require a schedule as the platform automatically detects when one of the underlying Datasets gets new records. 

To configure a cascade synchronization, in the Schedule section, select **When data sources are updated**. This option is only enabled when the Dataset has at least another Dataset among its Data Sources. 

![4_datasync](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+Sync/ds3.png#thumbnail)

## Running the Data Sync Manually
Use the Sync Now button to initiate the Data Sync process. You cannot run a data synchronization if another data synchronization for the same Dataset is already running.
1. In the Data feature, open a Dataset and click **Data Sync** on the Design tab. 
2. Click the **Data Sync** toggle to activate this feature. 
3. Under **Data Source Settings**, configure the Sync Type. For more information, see “Data Source Settings”
4. Click **Sync Now**. The sync job runs immediately. If you set up a schedule, the process will run again based on the schedule. 

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