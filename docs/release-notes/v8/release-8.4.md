---
id: release-last
title: Qrvey 8.4
sidebar_label: Qrvey 8.4
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
---

Release Date: 2024-01-15

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../upgrade-notes.md) document for important notes and access to the upgrade link.

## New Features & Enhancements


### Data Preparation

* **MongoDB Connector - Aggregation Framework**: Adds support for Aggregation Framework on the MongoDB Connector.


### Data Analysis & Visualization

* **Radar Chart**: Adds a new type of chart that enables end users to compare the performance of multiple values in different areas. <a href="/docs/video-training/release/version-8.4#radar-chart" target="_blank" className="tooltip"><img alt="Radar Chart" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Chart Positioning and Axis Enhancements**: Adds the option for end users to manually control the offsets of X/Y charts. <a href="/docs/video-training/release/version-8.4#chart-positioning-and-axis-enhancements" target="_blank" className="tooltip"><img alt="Chart Positioning and Axis Enhancements" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Self-service Table Charts**: Adds the option for end users to manipulate the chart configuration from the Dashboard View widget, without the need to open the Chart Builder. <a href="/docs/video-training/release/version-8.4#self-service-table-charts" target="_blank" className="tooltip"><img alt="Self-Service Table Charts" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **[Schedule Exporting](../../composer/03-Managing%20Your%20User%20Profile/scheduling-exports.md)**: Adds additional options to the Export feature, including the option to choose file names as well as configure scheduled exports. Note that these features must be enabled in Qrvey Admin Center.

* **Dark Theme**: Adds the Dark theme to the list of default themes available for Qrvey applications. This new theme applies to charts and chart panels. Also adds the canvas background color and panel background color properties to themes. <a href="/docs/video-training/release/version-8.4#dark-theme" target="_blank" className="tooltip"><img alt="Dark Theme" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Data Load Finish Trigger**: Adds a new trigger in Automation flows to enable end users to set a dataset as the trigger. This trigger is activated when a data load job finishes.

* **Download Manager Improvements**: Improves the Download Manager user interface to enable end users to better manage and view exports and schedules. Also adds support for Internationalization, Locale Formatting, and Timezones.


### Administration

* **Architectural Improvements**: Replaces the legacy Monolithic container that was presenting some issues and limitations due to deprecated libraries. The new architecture migrates endpoints to lambdas  and adds multiple performance and quality improvements. 

## General Tweaks & Bug Fixes

* **Cascading process updates in the Activity Log**: Adds information to the Activity Log on dataset views (dataset as data source updates) of the parent dataset.

* **RLS security enhancements**: Improves the record-level security (RLS) configuration to ensure that RLS is always applied when a workflow is triggered.

* **"Response Error" from putchunktoES lambda (bug fix)**: Fixes an error thrown by the putchunktoES lambda that occurred during the load process when the Opensearch cluster was too small.

* **Sync Now button tooltip disabled (bug fix)**: Fixes an incorrect tooltip message that displayed when the Sync Now button was disabled as expected. 

* **Simple, Grouped Table: disabling Sorting leaves gap (bug fix)**: Fixes an issue that occurred when creating simple tables. The Menu Actions moved the table up, improperly leaving a gap at the bottom. 

* **Multiseries Cluster Bar default width is too wide (bug fix)**: Fixes an issue that occurred with clustered multiseries bar charts in which the tick mark labels displayed at the wrong clusters. 

* **Download error (bug fix)**: Fixes a console error that occurred when a user displays the Summary panel, downloads a JPG in the Summary, and then resizes the page. The download failed and a console error appeared. 

* **Browser throws "Aw Snap" error when running out of memory (bug fix)**: Fixes a browser error that occurred when a user has more than 30 charts in any of the Analyze widgets and then scrolls down.

* **Subscriptions not executing on correct date (bug fix)**: Fixes an issue that occurred in some situations in which the UTC offset (for example, UTC+2) was improperly calculated at the beginning and end of a month, resulting in an incorrect execution of schedules. 

* **Subscriptions provided to incorrect recipient (bug fix)**: Fixes an issue in which the ZIP files of separate export requests were improperly given the same file name, causing files to be overwritten and potentially exposing data to incorrect recipients. 

* **Data Sets with unions and joins (bug fix)**. Fixes a variety of issues related to the data sync process involving datasets with unions and joins. 

* **FilesourcePrimer overwrite failed status on joinPumpResults (bug fix)**.

* **Content Deployment: Shared dataset does not auto-map (bug fix)**.

* **Data Sync: CRON Expression does not save unless you test first (bug fix)**.

* **Dataset Data Sync configured with CRON schedule display as Daily on Dataset Listing (bug fix)**.

* **Missing columns - the refresh dataset option changes the columnIds (bug fix)**.

* **Users unable to log in after Roles updated (bug fix)**.

* **Calls using the Get All Applications endpoint do not contain Body information and are not Public (bug fix)**.

* **Syncing dataset with RLS fails and the loader spins forever (bug fix)**.

* **Content Deployment: Package Compare error (bug fix)**.

* **Joining the {{Base - Sites}} fails and its UniqueId (join column) disappears (bug fix)**.

* **Postgres connector - Error loading files using unload data to S3 (bug fix)**.

* **PATCH on dashboard causes numOfCharts property to reset to 0 (bug fix)**.

* **Qrvey Admin Center: The Content Deployment model displays when “Do not show this again” is selected (bug fix)**.

* **Data sources - RLS filters are ignored and private data is displayed (bug fix)**.

* **API-Key exposed in logs (bug fix)**.

* **Data Views - Post upgrade, some metrics display a 404 (not found) status (bug fix)**.

* **Data Views - PDF and JPG exports fail after upgrade (bug fix)**.

* **Table Bar visualization defaults to right-aligned for numeric column (bug fix)**.

* **Geolocation Group not shown in Chart Builder (bug fix)**.

* **Dataset View columns from different sources are renamed (bug fix)**.

* **Side-by-side MultiSeries Bar Chart labels are not aligned (bug fix)**.

