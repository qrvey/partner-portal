---
id: date-grouping
title: Date Grouping
sidebar_label: Date Grouping
tags: [Data Analyst]
sidebar_position: 4
displayed_sidebar: data-analyst
---

<div style={{textAlign: "justify"}}>

Records that exist within dataset columns that are configured as a “Date” column type can be grouped into common date group buckets. Drag and drop a category field of type “Date” onto the **Category** shelf, click the three-dot menu and select **Date Group**. Choose the desired date group bucket and the chart will be redrawn with that date grouping applied.

![date-group](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/date-group/date-group.png#thumbnail-40)


The following date group buckets are available for Date fields within the Chart Builder:

| **Type** | **Description** | **Display Format** | **Example** |
| --- | --- | --- | --- |
|**Year**|Year component of the date value|4-digit year|2021|
|**Quarter, Year**|Quarter of a specific year|“Q” letter prefix, followed by a number between “1” and “4”, then a space and the 4-digit year|Q4 2021|
|**Month, Year**|Month of a specific year|3-letter month prefix, followed by a space and then the 4-digit year|Aug 2021|
|**Week, Year**|Week of a specific year|“W” letter prefix, followed by a number between “1” and “52”, then a space and the 4-digit year|W26 2021|
|**Full Date**|Actual date value|Follows the corresponding setting for the field within the source dataset (e.g. “MM/DD/YYYY”)|10/01/2021|
|**Date, Hour***|Hour of a specific date|Follows the corresponding setting for the field within the source dataset; minutes and seconds are ignored (e.g. “MM/DD/YYYY HH24:00:00”)|10/01/2021 18:00:00|
|**Date, Minute***|Minute of a specific hour and date|Follows the corresponding setting for the field within the source dataset; seconds are ignored. (e.g. “MM/DD/YYYY HH24:MM:00”)|10/01/2021 18:45:00|
|**Date, Second***|Second of a specific minute, hour and date|Follows the corresponding setting for the field within the source dataset. (e.g. “MM/DD/YYYY HH24:MM:SS”)|10/01/2021 18:45:30|
|**Quarter**|Specific quarter of any/all years in the dataset; i.e. all data that falls within a specific quarter is grouped together for all years|“Q” letter prefix, followed by a number between “1” and “4”|Q3|
|**Month**|Specific month of any/all years in the dataset; i.e. all data that falls within a specific month is grouped together for all years|3-letter month prefix|Feb|
|**Day (Year)**|Specific day of any/all years in the dataset; i.e. all data that falls within a specific day of the year is grouped together for all years|1, 2 or 3-digit day of the year. (1-365)|330|
|**Day (Month)**|Specific day of any/all months in the dataset; i.e. all data that falls within a specific day of the month is grouped together for all months|1 or 2-digit day of the month|(1-31)|15|
|**Day (Week)**|Specific day of any/all weeks in the dataset; i.e. all data that falls within a specific day of the week is grouped together for all weeks|3-letter day of week prefix|Mon|
|**Hour***|Specific hour of any/all days in the dataset; i.e. all data that falls within a specific hour of the day is grouped together for all days|1 or 2-digit hour of the day|(0-23)|12|
|**Minute***|Specific minute of any/all hours in the dataset; i.e. all data that falls within a specific minute of the hour is grouped together for all hours|1 or 2-digit minute of the hour|(0-59)|45|
|**Second***|Specific second of any/all minutes in the dataset; i.e. all data that falls within a specific second of the minute is grouped together for all minutes|1 or 2-digit second of the minute| (0-59)|25|


*Not available if the date field does not contain hours, minutes and seconds.



</div>