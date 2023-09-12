---
id: release-last
title: Qrvey 8.2
sidebar_label: Qrvey 8.2
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
---

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../upgrade-notes.md) document for important notes and access to the upgrade link.

### Qrvey 8.2.1

Release Date: 2023-09-12

#### Preventive Maintenance

* **Open SSH Removal**: The Open SSH package has been removed from the container to avoid any associated security vulnerabilities.

#### General Tweaks & Fixes

* **Long Running Query Not Working (bug fix)**: Fixed a npm notice error that occurred with the Long Running Query (AWS Batch) process.

* **MSSQL Connector Loading Error (bug fix)**: Fixed a timeout error that occurred when loading a MSSQL DB Connection.

* **Breadcrumb Text has Different Colors for Different Charts (bug fix)**: Fixed an issue in which the breadcrumb text for different charts displayed with different colors and styles. The breadcrumb trail between charts now uses the same font color and style.

* **Breadcrumb Overlaps 'Totals' Message (bug fix)**: Fixed an issue in which the totals message overlapped when drilling down from a chart to a table.

* **Echart Tooltips Undefined (bug fix)**: Fixed an undefined tooltip message that displayed when the user changed the date grouping of the date column in an X/Y chart.

* **Multiseries Bar Type 100% is Broken (bug fix)**: Fixed a bug in which Multiseries charts did not render when transitioning from stacked to 100% types. 

* **Table Aggregated Formulas - Server Error (bug fix)**: Fixed a server error that occurred when the user changed position to add an aggregated formula.

* **Dashboard View - Filter by Action Dates "No data found" (bug fix)**: Fixed a bug in which the “No data found” message appeared when the user applied a “filter by” action on a bar chart with values grouped by dates.

* **Subscription and End-User Personalization Changes Not Applied (bug fix)**: Fixed a bug in which enabling Subscriptions was not retained and End-User Personalization changes were not retained.

* **I18n Settings not Applied to AN-Dashboard Modals (bug fix)**: Fixed an issue in the AN embedded widgets in which the i18n settings were not applied.

* **Datasets Not Listed in Dashboard Builder (bug fix)**: Fixed a bug in Content Deployment that occurred when deploying an application with a Dataset View. The Dataset View was not listed in the dashboard.

* **Filter Control Data is Not Displayed Correctly When Using Buckets (bug fix)**: Fixed a “No data found” issue that occurred when an application with buckets was deployed with Filter controls added in its dashboards.


### Qrvey 8.2

Release Date: 2023-07-31

#### New Features & Enhancements

##### Data Preparation

* **Improved Performance of Loading Join Results**: Increased the speed of loading very large volumes of data that result from joining by approximately 60 times (60x).

* **Flatten Transformation Performance Improvement**: Increased the speed of processing Flatten transformations by up to 50 times (50x), which results in significant cost savings.

* **Live Connect Support for PostgreSQL**: Adds PostgreSQL to the collection of databases supported in Live Connect mode. Analysis can be performed directly from the database, rather than pooling the data in Qrvey’s internal repository.

* **[Setting the Shard Count](../../composer/05-Working%20with%20Data/Datasets/02-Design/07-Advanced%20Settings/dataset-design-advanced-settings.md)**: Adds the option for users to set the number of shards for their index based on the size of the dataset, which helps optimize the performance of loading and displaying data. 

* **Additional Options for [Data Sync Scheduling](../../composer/05-Working%20with%20Data/Datasets/02-Design/04-Data%20Syncronization/data-sync.md)**: Adds new options to the data sync scheduling feature such as Last Day Of The Month and Every n Days.



##### Data Analysis & Visualization

* **[Download Manager](../../composer/03-Managing%20Your%20User%20Profile/download-manager.md)**: The new Download Manager widget provides a central location to access and manage exported files, including images (JPG, PDF), data (CSV, Excel, PDF), and reports (PDF). It is embeddable and can be accessed at the account level in Qrvey Composer. It is currently in MVP and will have more features in the next few releases. <a href="/docs/video-training/release/version-8.2#download-manager" target="_blank" className="tooltip"><img alt="Download Manager" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **[Standard Formula Syntax](../../composer/05-Working%20with%20Data/Datasets/03-Analyze/10-Formula%20Builder/using-standardized-syntax.md)**: Adds the option in Formula Builder to create formulas using a standardized language that works with any database engine supported by the Qrvey platform. This new syntax is based on the familiar functions used in popular spreadsheet products such as Microsoft Excel and Google Sheets. Formula Builder also retains its existing support for using a database-specific scripting language. <a href="/docs/video-training/release/version-8.2#formula-syntax" target="_blank" className="tooltip"><img alt="Standard Formula Syntax" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Modernization of Visualizations**: Improves the look and behavior of a variety of charts. This improvement is part of our Visualization Modernization initiative that will continue throughout this year and provide better, more consistent, and more performant charts.

* **Support Min/Max as Aggregates for Sorting of Date Type Columns**: Adds Min and Max as aggregate options for datetime columns that are selected for sorting of a chart.

* **System Tokens in Metric Comparison**: Adds support for system tokens in Metrics comparisons when using date columns.

* **Page Actions - Drilldown in Funnel Charts**: Enables Default and Custom Drilldowns for Funnel Charts.

* **Card and Table View in Flow List**: Updates the card and table views of the Flows UI to standardize the interface and improve the user experience.

* **Support for Drill-down Action in Exports**: CSV, Excel, and PDF formats now honor the drill-down action when exporting data.

* **[Buckets in Reports](../../composer/10-Pixel-perfect%20Reports/filtering-data.md)**: Adds the Bucketing Data feature to Pixel-perfect Reports, enabling users to create and use buckets in their reports.



#### General Tweaks & Bug Fixes

* **Labels (improvement)**: Updates the descriptions and labels in the Qrvey Admin Center user interface to improve the usability of the product. 

* **Transformation Error Messages (improvement)**

* **Data Labels overlapping in pie charts with many slices (behavior correction)**

* **Data Router Services sending a different error code(bug fix)**

* **S3 connector with multiple files discovering the same column multiple times (bug fix)**

* **Dataset Load Error With API V4 (bug fix)**

* **Filter label displaying incorrectly when deleting dataset (bug fix)**

* **Grouped Table Charts Failing to Export CSV and Excel (bug fix)**

* **Content Deployment not working with data syncs on (bug fix)**


