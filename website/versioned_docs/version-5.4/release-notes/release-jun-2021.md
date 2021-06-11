---
id: version-5.4-release-last
title: Qrvey Version 6.0
sidebar_label: June 2021
original_id: release-last
---
<div style="text-align: justi6fy">
Release Date: 2021-06-10


## New Features & Enhancements

Click <a href="/docs/video-training/release/version-6.0" target="_blank"> <strong>here</strong></a> to access demo videos of some released features.

## Data Preparation

* <a href="/docs/ui-docs/datasets/transformations/#ifelse" target="_blank"><strong>QV-11853 - If/Else</strong></a>: With this new transform you can run one or more transformations based on the result of a true/false condition.

* <a href="/docs/ui-docs/datasets/databases/" target="_blank"><strong>QV-11773 - AWS Redshift Support</strong></a>: You can now create connections to the AWS Redshift service including support for SSL certification.

* <a href="/docs/video-training/release/version-6.0/" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/datasets/databases/#creating-a-connection-using-the-default-method" target_blank><strong>QV-12805 - SQL Server - Read Uncommitted Transactions</strong></a>: You can now read uncommitted transactions on the database or tables while creating a new SQL connection.

* <a href="/docs/video-training/release/version-6.0/#end-user-personalization" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/datasets/databases/#creating-a-connection-using-the-advanced-method" target="_blank"><strong>QV-13328 - Advanced Configuration for Relational Databases</strong></a>: You can now enter a JSON configuration object to control advanced attributes of a connection, instead of using the default simplified method.

* <a href="/docs/video-training/release/version-6.0/#end-user-personalization" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a> **QV-11441 - Connection Creation From Data Prep**: You can now save connections without having to select a database, table or query, in order to be able to use the connection again in the future.

* **QV-13567 - Edit Connection Query**: If the connection is based on a query, the option to edit that query will present itself in the Data Source pill’s menu to provide a shortcut way to edit the connection.

 
## Data Analysis & Automation

* **AN-12899 - Multi-tenancy - White-labeling Support for Analytic Suite and Single Panel Widgets**: We have improved the <a href="/docs/embedding/widgets/analytics/analytic-suite/">Analytic Suite</a> and <a href="/docs/embedding/widgets/analytics/single-panel/">Single Panel</a> widgets to support chart theme customization from the widget’s configuration, in embedded scenarios. Implementers can modify the chart themes and define any style aspect of the analytics panel that applies to the widget when they are embedding it in their host application.

* <a href="/docs/video-training/release/version-6.0/#end-user-personalization" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/dataviews/chart-builder/#data-formatting" target="_blank"><strong>AN-9965 - Formatting Dates in Charts’ Category Columns</strong></a>: You can now modify the format for date columns used as categories for Bar, Line, Symbol, and Min/Max charts. The enhancement applies to “Small Multiples”, as well as Rows and Columns in Crosstab charts.

* <a href="/docs/video-training/release/version-6.0/#end-user-personalization" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/dataviews/chart-builder/#data-formatting" target="_blank"><strong>AN-6106 - Formatting Numbers in Charts’ Value Columns</strong></a>: We enhanced the Chart Builder by implementing numeric formatting for the value columns of Bar, Line, Symbol, Min-Max, and Crosstab charts. 

* <a href="/docs/embedding/widgets/analytics/single-panel/" target="_blank"><strong>AN-13029 - Support Hide/Show Fit to Panel Button</strong></a>: You can now hide or show the fit to panel button directly from the widget´s configuration object when embedding it into your host application.

* <a href="/docs/ui-docs/dataviews/chart-types/#resizing-rows" target="_blank"><strong>AN-11085 - Tables - Resize Rows by Value</strong></a>: You can now modify table rows size by typing a specific value in the chart´s panel configuration.

* <a href="/docs/video-training/release/version-6.0/#end-user-personalization" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/end-user-personalization/overview/" target="_blank"><strong>AT-7614 - End-User Personalization</strong></a>: You can now enable end-users to access an “edit mode” in page view to let them personalize the layout of pages, modify charts, and resize panels in their own, personalized version. Users’ changes are only available to them and do not affect the original dashboards.

* <a href="/docs/ui-docs/builders/pages_actions/#page-drill" target="_blank"><strong>AT-8624 - Page Actions - Page Drill With Filters</strong></a>: We added an option to the Page Drill action to filter the charts on the target page by the category that was clicked on the originating chart.






