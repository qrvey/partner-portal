---
id: release-last
title: Qrvey 8.2
sidebar_label: Qrvey 8.2
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
---

Release Date: 2023-07-31

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../upgrade-notes.md) document for important notes and access to the upgrade link.

## New Features & Enhancements

### Data Preparation

* **Improved Performance of Loading Join Results**: Increased the speed of loading very large volumes of data that result from joining by approximately 60 times (60x).

* **Flatten Transformation Performance Improvement**: Increased the speed of processing Flatten transformations by up to 50 times (50x), which results in significant cost savings.

* **Live Connect Support for PostgreSQL**: Adds PostgreSQL to the collection of databases supported in Live Connect mode. Analysis can be performed directly from the database, rather than pooling the data in Qrvey’s internal repository.

* **[Setting the Shard Count](../../composer/05-Working%20with%20Data/Datasets/02-Design/07-Advanced%20Settings/dataset-design-advanced-settings.md)**: Adds the option for users to set the number of shards for their index based on the size of the dataset, which helps optimize the performance of loading and displaying data. 

* **Additional Options for [Data Sync Scheduling](../../composer/05-Working%20with%20Data/Datasets/02-Design/04-Data%20Syncronization/data-sync.md)**: Adds new options to the data sync scheduling feature such as Last Day Of The Month and Every n Days.



### Data Analysis & Visualization

* **[Download Manager](../../composer/03-Managing%20Your%20User%20Profile/download-manager.md)**: The new Download Manager widget provides a central location to access and manage exported files, including images (JPG, PDF), data (CSV, Excel, PDF), and reports (PDF). It is embeddable and can be accessed at the account level in Qrvey Composer. It is currently in MVP and will have more features in the next few releases. <a href="/docs/video-training/release/version-8.2#download-manager" target="_blank" className="tooltip"><img alt="Download Manager" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **[Standard Formula Syntax](../../composer/05-Working%20with%20Data/Datasets/03-Analyze/10-Formula%20Builder/using-standardized-syntax.md)**: Adds the option in Formula Builder to create formulas using a standardized language that works with any database engine supported by the Qrvey platform. This new syntax is based on the familiar functions used in popular spreadsheet products such as Microsoft Excel and Google Sheets. Formula Builder also retains its existing support for using a database-specific scripting language. <a href="/docs/video-training/release/version-8.2#formula-builder---standard-formula-syntax" target="_blank" className="tooltip"><img alt="Standard Formula Syntax" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Modernization of Visualizations**: Improves the look and behavior of a variety of charts. This improvement is part of our Visualization Modernization initiative that will continue throughout this year and provide better, more consistent, and more performant charts.

* **Support Min/Max as Aggregates for Sorting of Date Type Columns**: Adds Min and Max as aggregate options for datetime columns that are selected for sorting of a chart.

* **System Tokens in Metric Comparison**: Adds support for system tokens in Metrics comparisons when using date columns.

* **Page Actions - Drilldown in Funnel Charts**: Enables Default and Custom Drilldowns for Funnel Charts.

* **Card and Table View in Flow List**: Updates the card and table views of the Flows UI to standardize the interface and improve the user experience.

* **Support for Drill-down Action in Exports**: CSV, Excel, and PDF formats now honor the drill-down action when exporting data.

* **[Buckets in Reports](../../composer/10-Pixel-perfect%20Reports/filtering-data.md)**: Adds the Bucketing Data feature to Pixel-perfect Reports, enabling users to create and use buckets in their reports.



## General Tweaks & Bug Fixes

* **ADMIN-5568 - Labels improvement** (improvement): Updates the descriptions and labels in the Qrvey Admin Center user interface to improve the usability of the product. 

* **DR-4400 - Transformation Error Messages Improvement** (improvement)

* **AN-14379 - Data Labels overlapping in pie charts with many slices** (behavior correction)

* **DR-4398 - Data Router Services sending a different error code** (bug fix)

* **DR-4420 - S3 connector with multiple files discovering the same column multiple times** (bug fix)

* **QV-17346 - Dataset Load Error With API V4** (bug fix)

* **AN-18732 - Filter label displaying incorrectly when deleting dataset** (bug fix)

* **EX-2054 - Grouped Table Charts Failing to Export CSV and Excel** (bug fix)

* **CD-4709 - Content Deployment not working with data syncs on** (bug fix)


