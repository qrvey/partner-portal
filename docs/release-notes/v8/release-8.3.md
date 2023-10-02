---
id: release-last
title: Qrvey 8.3 (LTS)
sidebar_label: Qrvey 8.3 (LTS)
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
---

Release Date: 2023-10-03

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../upgrade-notes.md) document for important notes and access to the upgrade link.

## New Features & Enhancements

### Data Preparation

* **Utility Join Performance for Data Syncs Improvement**: Adds a utility that rewrites the join lakes to remove old records and consolidate smaller files into larger files. 

* **Easy Copy of Columns IDs**: Adds the Copy Column ID option in Qrvey Composer to enable  software developers to easily obtain column IDs .

* **Query Start Time Date Picker Improvement**: In the Data Sync feature of Qrvey Composer, improves the usability of the Query Start Time field under Next Sync Query Window. 

* **Connection Type in Tooltip**: Adds the Connection Type information to the tooltip that displays when hovering over the Data Source pill.

* **Concatenate Transformation Improvement**: In the Transformations feature of Qrvey Composer, improves the usability of the Concatenate transformation by adding a second input by default.

### Data Analysis & Visualization

* **[Customizing the Appearance Using CSS](../../software-developer/04-Embedding%20Qrvey%20Widgets/css-variables.md)**: Adds the ability to customize the visual theme of embedded widgets, including colors, fonts, borders, positioning, and margins, using CSS style sheets. 

* **Open AI On Charts (beta)**: Adds the Smart Analyzer feature (in beta) to charts. Smart Analyzer establishes a link between ChatGPT and the data in charts and visualizations, enabling users to ask ChatGPT questions in natural language about their data. <a href="/docs/video-training/release/version-8.3#openai-on-charts-beta" target="_blank" className="tooltip"><img alt="Smart Analyzer" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Dynamic Threshold in Dial and Bullet Metrics**: Adds the option to set thresholds as fixed or dynamic values based on the aggregates of a column.

* **View Modes in Dashboards**: Adds the Interaction mode to Dashboard Builder, enabling users to review and interact with the dashboard just as they would in Dashboard View. <a href="/docs/video-training/release/version-8.3#view-modes-in-dashboards" target="_blank" className="tooltip"><img alt="Dashboard View Modes" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> 

* **Undo and Redo in Dashboards**: Adds the Undo and Redo options to the Design mode in Dashboard Builder.

* **See Data Action**: In Dashboard Builder, adds the See Data Action Type, enabling users to see the data in the dataset underlying the chart. <a href="/docs/video-training/release/version-8.3#see-data-action" target="_blank" className="tooltip"><img alt="See Data Action" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Custom Tokens In PDF/JPG Export**: In PDF and JPG exports, adds support for custom tokens as values of a metrics's threshold through emails and subscriptions.

* **Support Conditional Formatting for Crosstab Excel Export**: Adds support for conditional formatting to Excel exports of crosstab.

* **New Formula Functions**: Adds several new, advanced functions to [Standardized Syntax mode](../../composer/05-Working%20with%20Data/Datasets/03-Analyze/10-Formula%20Builder/using-standardized-syntax.md) in Formula Builder.

* **Nested Formulas Support**: Adds support for nested formulas in Formula Builder, enabling users to create formulas inside other formulas without having to repeat the calculations.

### Administration

* **Connections Security Fields**: Adds fields to enable users to update passwords and ARNs as plain text during the deployment configuration.

* **Saving Password Confirmation**: Adds an option to enable users to save and confirm the connection information during the deployment definition configuration update.

## General Tweaks & Bug Fixes

* **Error in dbdatasourcePump lambda after UNLOAD (bug fix)**: Fixes an issue that occurred after an UNLOAD process and the same lambda was reused. An error message incorrectly displayed preventing the loading from starting and sending the message to the DLQ. 

* **DynamoDB connector - Error creating dataset using query (bug fix)**: Fixes an issue that prevented creating a dataset using a query on DynamoDB connector because the test connection and next button were not activated. 

* **Error changing Bar Visualizations in Dashboard View (bug fix)**: Fixes an error that occurred when switching between bar and numeric visualizations in grouped tables in the Dashboard View widget.

* **Table charts with many conditions on the same dataset column causing an error (bug fix)**: Fixes an error that occurred in some situations when saving a table chart with many conditions defined for the same dataset column. 

* **Server error when applying sort with added formula column (bug fix)**. Fixes an error that occurred when applying a sort with an added formula column. 

* **IsNull formula not working correctly (bug fix)**: Fixes an issue in which an incorrect value was returned when a user created a formula using IsNull.

* **Pages not appearing in the subscriptions dropdowns if not added in the end user navigation menu (bug fix)**: Fixes an issue that occurred when a user created and published a dashboard without adding it to the navigation menu. The dashboard and its chart panels did not properly display in the subscription dropdown list. 

* **Duplicated Dashboard gets added to the Navigation Menu (bug fix)**: Fixes an issue in Dashboard View in which the Navigation Menu incorrectly listed duplicated Dashboards that were not added to the Navigation Menu in Qrvey Composer. 

* **Chart panel email download sends a file with the wrong filters applied (bug fix)**: Fixes an issue in which an emailed file had a filter applied that was not applied in the chart in the original tab.

* **Excel and CSV Export failing when exporting a lot of columns (bug fix)**: Fixes an error that occurred in some situations when exporting Excel and CSV files. 

* **Grouped Table Chart Excel export errors with subtotals (bug fix)**: Fixes reference errors that occurred when displaying subtotals above values. 