---
id: release-8.4
title: Qrvey 8.4
sidebar_label: Qrvey 8.4
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
---

Release Date: 2024-02-05

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../upgrade-notes.md) document for important notes and access to the upgrade link.

## Architectural Improvements
Version 8.4 implements major architectural improvements that provide multiple benefits to users. Installation and upgrade times are significantly faster (reduced to around 1 hour). This improvement applies to both new instances and subsequent upgrades from version 8.4.  
 
Note that, if you are upgrading from an older version, an automatic script updates your datasets to be compatible with this new architecture. As a result, your installation time may be extended, depending on the number of datasets.  

In addition, due to the architectural improvements, this version updates many endpoints. While we continue to support the existing endpoints as documented on our [API documentation site](https://qrvey.stoplight.io/docs/qrvey-api-doc/4b0d6d292c0b2-administration), we encourage you to update those at your convenience to leverage the new enhancements. 
The legacy endpoints are listed on a deprecation schedule that you can find on our [End-of-life Schedule](../end-of-life.md) page.  


## New Features & Enhancements

### Data Preparation

* **MongoDB Connector - Aggregation Framework**: Adds support for Aggregation Framework on the MongoDB Connector.


### Data Analysis & Visualization

* **Radar Chart**: Adds a new type of chart that enables end users to compare the performance of multiple values in different areas. <a href="/docs/video-training/release/version-8.4#radar-chart" target="_blank" className="tooltip"><img alt="Radar Chart" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Chart Positioning and Axis Enhancements**: Adds the option for chart creators to manually control the offsets of X/Y and Pie charts. <a href="/docs/video-training/release/version-8.4#chart-positioning-and-axis-enhancements" target="_blank" className="tooltip"><img alt="Chart Positioning and Axis Enhancements" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Self-service Table Charts**: Adds the option for end users to manipulate various table chart configurations directly from the Dashboard View widget, without the need to open the Chart Builder. <a href="/docs/video-training/release/version-8.4#self-service-table-charts" target="_blank" className="tooltip"><img alt="Self-Service Table Charts" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **[Schedule Exporting](../../composer/03-Managing%20Your%20User%20Profile/scheduling-exports.md)**: Adds additional options to the Export feature, including the option to choose file names as well as configure scheduled exports. Note that these features must be enabled in the Qrvey Admin Center.

* **Dark Theme**: Adds the Dark theme to the list of out-of-the-box themes available for Qrvey applications. With the addition of this new theme, new properties, such as canvas background color and panel background color were added to all themes. <a href="/docs/video-training/release/version-8.4#dark-theme" target="_blank" className="tooltip"><img alt="Dark Theme" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Data Load Finish Trigger**: Adds a new trigger in Automation flows to enable the flow to choose a new type of trigger that is activated when a data load job finishes. This trigger is enabled by default on new instances of the Qrvey platform. If you are upgrading from a previous version, please contact Qrvey Customer Support for assistance.

* **Download Manager Improvements**: Improves the Download Manager user interface to enable end users to better manage and view exports and schedules. Also adds support for Internationalization, Locale Formatting, and Timezones.



## General Tweaks & Bug Fixes

* **RLS security enhancements**: Improves the record-level security (RLS) configuration to ensure that RLS is always applied when a workflow is triggered.

* **More descriptive error message**: A vague error message (Response Error) that was thrown during the load process when the OpenSearch cluster was too small has been improved to be more descriptive.

* **Data Sets with unions and joins (bug fix)**. Fixes a variety of issues related to the data sync process involving datasets with unions and joins. 

* **Wrong tooltip on Sync Now button (bug fix)**: Fixes an incorrect tooltip message that displayed when the user hovered over the Sync Now button when the button was disabled. 

* **Simple, Grouped Table: disabling Sorting leaves a gap (bug fix)**: Fixes an issue that occurred when creating simple tables. The Menu Actions moved the table up, improperly leaving a gap at the bottom. 

* **Multiseries Cluster Bar default width is too wide (bug fix)**: Fixes an issue that occurred with clustered multiseries bar charts in which the tick mark labels are displayed at the wrong clusters. 

* **Download error (bug fix)**: Fixes a console error that occurred when a user resized the page while downloading a JPG in the Summary panel. The download failed and a console error appeared. 

* **Browser throws "Aw Snap" error when running out of memory (bug fix)**: Fixes a browser error that occurred when a user has more than 30 charts in any of the Analyze widgets and then scrolls down.

* **Subscriptions not executing on the correct date (bug fix)**: Fixes an issue that occurred in some situations in which the UTC offset (for example, UTC+2) was improperly calculated at the beginning and end of a month, resulting in incorrect execution of schedules. 

* **Subscriptions provided to incorrect recipient (bug fix)**: Fixes a rare issue in which the ZIP files of separate export requests that ran at the exact same time were given the same file name, causing the files to be overwritten and some recipients potentially receiving the wrong file. 


* **Content Deployment: Dataset View does not auto-map (bug fix)**.

* **Data Sync: CRON Expression does not save unless tested first (bug fix)**.

* **Dataset Data Sync configured with CRON schedule displays as Daily on Dataset Listing (bug fix)**.

* **Missing columns - the refresh dataset option changes the column Ids (bug fix)**.

* **Users were unable to log in after their roles were updated (bug fix)**.

* **Under special circumstances syncing a dataset view that is based on a dataset with RLS fails and the loader keeps spinning (bug fix)**.

* **The modal to compare Packages in Deployment Definition freezes under certain circumstances (bug fix)**.

* **Postgres connector - Error loading files using unload data to S3 (bug fix)**.

* **PATCH method for the shortcut endpoint to “Update specific attributes of a Dashboard” causes numOfCharts property to reset to 0 (bug fix)**.

* **Qrvey Admin Center: The Content Deployment intro modal displays even after  “Do not show this again” is selected (bug fix)**.

* **API Key exposed in Cloudwatch log under rare circumstances (bug fix)**.

* **Some metric visualizations display a 404 error after upgrading to version 8.2.1 (bug fix)**.

* **PDF and JPG exports fail after upgrading to version 8.2.1 (bug fix)**.

* **Table Bar visualization defaults to right-aligned for numeric column (bug fix)**.

* **Geolocation Group not shown in Chart Builder (bug fix)**.

* **Dataset View columns from different sources are renamed after inspecting the data sources (bug fix)**.

* **Side-by-side MultiSeries Bar Chart labels are not aligned (bug fix)**.

* **Get All Applications endpoint’s POST Body payload shows empty on the API documentation site (bug fix)**.

