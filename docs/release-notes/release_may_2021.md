---
id: release-last
title: Qrvey Version 5.10
sidebar_label: May 2021
---
<div style="text-align: justify">
Release Date: 2021-05-05


## New Features and Enhancements 

Click <a href="/docs/video-training/release/version-5.10" target="_blank"> <strong>here</strong></a> to access demo videos of some released features.

## Data Preparation

* <strong>DR-2490 - Access To All Flattened Record Columns</strong>: We enhanced the flat data transformation so you now have access to all columns of a flattened record when loading data.

* <strong>DR-2482 - Flattening Multiple Arrays on the Same Record</strong>: You can now flatten multiple arrays on the same record when using the flat data transformation.

* <strong>DR-2484 - Improved Data Type Identification</strong>: The algorithms to identify the data type of columns in CSV and JSON files have been improved to make the dataset creation process faster and easier.

* <a href="/docs/video-training/release/version-5.10/#new-menu-for-data-source-pills-and-new-connections-screens" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a>  <a href="/docs/ui-docs/datasets/datasets/#changing-the-data-source" target="_blank"><strong>QV-12663 - New Menu for Data Source Pills</strong></a>: You can now add, switch, and edit a Data Source’s connection from the Data Source Pill located in the Dataset Page. 

* <a href="/docs/video-training/release/version-5.10/#new-menu-for-data-source-pills-and-new-connections-screens" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/datasets/databases/" target="_blank"><strong>QV-12904 - New SQL Connection Screens</strong></a>: You can now select the Database when configuring a connection, making it easier to create tables or SQL queries. 


## Data Analysis & Automation

* <strong>AN-9955 - Display All Values on Filters</strong>: Previously, only 1000 values per column were displayed when creating a filter. Now, You can see and select all existing values of a column.

* <a href="/docs/video-training/release/version-5.10/#relative-date---new-date-ranges" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/filtering-data/working-with-filters/#calendar-versus-rolling-date-ranges" target="_blank"><strong>AN-12682 - Relative Dates - Calendar and Date Ranges Support</strong></a>: You can now create a relative date filter as a calendar base or rolling base. A calendar-based approach is when the date ranges are calculated, taking into account the start and end date of a calendar's period. The rolling base is expressed relative to the anchor date and automatically shifts forward day by day without considering calendar periods.

* <a href="/docs/video-training/release/version-5.10/#relative-date---new-date-ranges" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/filtering-data/working-with-filters/#inclusive-versus-exclusive-date-ranges" target="_blank"><strong>AN-12683 - Relative Dates - Exclusive Date Ranges Support</strong></a>: You can now choose between inclusive or exclusive ranges when creating filters.

* <a href="/docs/ui-docs/filtering-data/working-with-filters/#seeedit-filters-directly-from-charts" target="_blank"><strong>AN-12527 - Edit or Remove Filters From the Chart Panel</strong></a>: Filters that apply to charts panels can now be edited or removed directly from the floating popup panel that shows them on the panel.

* <a href="/docs/video-training/release/version-5.10/#trend-charts---sparkline" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/dataviews/chart-types/#charts-in-tables" target="_blank"><strong>AN-11056 - Trend Charts - Sparkline</strong></a>: You can now create Line and Bar charts inside table cells to see trends in your data without leaving the table visualization.

* <a href="/docs/ui-docs/dataviews/chart-types/#reordering-columns" target="_blank"><strong>AN-12654 - Table Columns Reordering</strong></a>: You can now organize the table’s columns by dragging and dropping them directly from the column header.

* <a href="/docs/ui-docs/dataviews/chart-types/#conditional-formatting-in-crosstab" target="_blank"><strong>AN-9833 - Conditional Formatting in Crosstab</strong></a>: You can now use conditional formatting in crosstab to highlight cells that meet predefined conditions.

* <a href="/docs/ui-docs/dataviews/chart-types/#changing-header-colors" target="_blank"><strong>AN-12656 - Change Font Color in Crosstab</strong></a>: You can now change the colors of crosstab headers and fonts directly from the chart builder in the “Style” section of the configuration panel.

* <a href="/docs/ui-docs/dataviews/chart-builder/#fixed-range-configurations" target="_blank"><strong>AN-9962 - Chart Axis Range Configuration</strong></a>: You can now set a fixed min and max value for the value axis range of any X/Y chart.

* <a href="/docs/ui-docs/dataviews/chart-builder/#scale-type" target="_blank"><strong>AN-9837 - Logarithmic Scale Type</strong></a>: You can now choose a logarithmic scale for the value axis of X/Y charts.

* <a href="/docs/ui-docs/dataviews/chart-types/#modifying-bar-width-and-spacing" target="_blank"><strong>AN-9932 - Bar Width and Spacing</strong></a>: The visualization of charts containing bars has been improved by the implementation of automatic adjustments in proportion to the available space in the chart, also you can manually adjust the bar width percentage to customize the size of the bars.

* <a href="/docs/ui-docs/dataviews/chart-builder/#adjusting-chart-to-fit-the-size-of-panel" target="_blank"><strong>AN-9944 - Fit Chart to Panel</strong></a>: You can now choose the "fit to size" option to automatically fit a visualization to the size of its panel.

* <a href="/docs/video-training/release/version-5.10/#automatic-column-links" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/datasets/column-links/" target="_blank"><strong>AT-7946 - Automatic Column Links</strong></a>: Columns can be pre-configured in the Dataset Design step to link to a specific URL. This establishes an automatic Go To URL link whenever the column is used in any analytic visual. The URL can later be edited both from Page Actions and Dataset Design.

* <a href="/docs/ui-docs/builders/pages/#data--configuration" target="_blank"><strong>AT-8425 - Data Page Shortcut</strong></a>: You can now access Dataset Design directly from the Page, Report, and Chart Builder by clicking on shortcut icons of the builders’ data panel.

* <a href="/docs/video-training/release/version-5.10/#get-widget-configuration" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a> <strong>AT-7680 - Get Widget Configuration</strong>: We have added a feature to obtain the widget configuration code for <a href="/docs/embedding/widgets/app-building/widget-page-builder/" target="_blank">Page Builder</a>, <a href="/docs/embedding/widgets/app-building/widget-report-builder/" target="_blank">Report Builder</a>, and <a href="/docs/embedding/widgets/app-building/widget-page-view/" target="_blank">Page View</a> widgets from the respective widget UIs inside Qrvey Composer. 

 
## General Tweaks & Bug Fixes

* **ADMIN-4554, ADMIN-4555 -** Value List filters and chart themes are now supported in Content Deployment.

* **QV-13329 - View Data For PostgreSQL VIews**: When a user created a connection with PostgreSQL selecting a “View“ from a custom schema, the “View Data” option showed an error, and the data did not appear. This has been fixed.

* **QV-12968 - Joined Datasets Cannot Be Loaded Using Special Character "-"**: When a user was creating a Dataset with multiple data sources, but one of the datasourceId value contained the "-" character (example: "datasourceId": "rKnu3U-w6"), the load or reload processes generated an error. This has been fixed.

* **QV-12905 - Datasets - Apply and Discard Buttons Disabled:** When a user set a "Security Column" in an Active Dataset and went to the Dashboard without applying changes, when the user returned to the Dataset the "Apply" or "Discard" buttons were disabled, and the security column was not saved. This has been fixed.














































## Data Preparation


* <strong>New Transformations</strong>: In this release, the following functions have been added to the Transformations Builder:
    * **QV-12481 - Dataset Write**: You can now update dataset columns using constant values or data tokens.
    * **QV-12603 - Record Copy**: You can now copy records into an alternate transformation stream to insert data to any other dataset.
    * **QV-11759 - Array Flatten Inflate**: You can now flatten the data eliminating the hierarchy of the specified arrays.

* <strong> QV-11464 - S3 Connection</strong>: A new class of connections has been introduced in this release that supports connection to AWS S3 folders, accessing JSON, ndJSON and CSV files.

* <strong>QV-12555 - File Uploads JSON Support</strong>: You can now upload JSON and ndJSON files to create connections.

* <a href="/docs/video-training/release/version-5.9/#hierarchical-data-support" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a> <strong> QV-12660 - Dataset Page - Hierarchical Data Support</strong>: You can now create a Connection with hierarchical data or JSON structure. Indentation is used on the Dataset Page to show the hierarchy in the data structure.

* <strong>DR-2195 - New Dataset API</strong>: We enhanced the Datasets API to make it easier to programmatically create, edit and delete Datasets with any type of data source, specifying transformations, columns, formatting options, geolocation groups, join information, and unique ID per column.


## Data Analysis & Automation

* <a href="/docs/video-training/release/version-5.9/#relative-dates-in-filter-builder" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a> 
<strong> AN-12461 - Relative Dates In Filter Builder</strong>: You can now set relative date filters with the “In” operator from the main filter creation modal, i.e.: “Sales in the last 6 months”

* <strong> AN-9826 - Conditional Formatting In Bar, Line, Symbol, and Min/Max Charts</strong>: You can now set a threshold on Bar, Line, Symbol, and Min/Max charts to change the value marker color in order to easily distinguish between the values that meet your conditions.

* <a href="/docs/video-training/release/version-5.9/#color-mapping-and-table-header-styles" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a> <strong>AN-12318 - Chart Themes - Color Mapping</strong>: You can now tie the color of each category to it so the category is always depicted in the same color. This feature currently works for Bar, Line and Symbol charts.

* <a href="/docs/video-training/release/version-5.9/#color-mapping-and-table-header-styles" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a>
<strong>AN-12311 - Table Header Styles</strong>: You can now change the background and font color of table headers from the Styles section in chart builder.

* <strong>AN-12020 - Column Sorting on Grouped Tables</strong>: You can now configure a custom sorting order when performing multi-column sorting in grouped tables.

* <a href="/docs/ui-docs/dataviews/exporting/#exporting" target="_blank"><strong>EX-45 - PDF Design Exports</strong></a>: You can now export a page design to a PDF file directly from the Page Builder and Page View widgets. These exports include: Page headers, Interactive and Panel Filters, Filter Objects with filtered values, and applied Drilldowns.

* <a href="/docs/ui-docs/dataviews/exporting/#exporting" target="_blank"><strong>EX-44 - CSV Export on Crosstab</strong></a>: You can now export CSV Summary files with aggregated data from Crosstab visualizations.


## Admin Center

* <a href="/docs/video-training/release/version-5.9/#roles-and-permissions" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a>
<a href="/docs/admin/roles-and-permissions" target="_blank"><strong>Roles and Permissions</strong></a>: We have introduced the new Roles & Permissions system in the Admin Center. Admins can add users to the system-defined Administrator or Composer roles or create new roles for them and configure access to the main functionalities in the Qrvey Composer within those roles.  


## General Tweaks & Bug Fixes

* **ADMIN-4638 - The Replacement Password Is Not Encrypted**: In Content Deployment The replacement password was not being encrypted despite the isEncrypted parameter having been set. This has been fixed.

* **AN-12566 - Two Decimals When Setting Formats**: When a creator had set 0 decimals for a numeric column in the Data Design Page, and then he created a metric with the same column, the value appeared with 2 decimals. This has been fixed.

* **AN-12525 - Table Loading With Empty Totals**: When there were no values selected in the “Columns”, “Totals”, or “Level”, dropdown and the table was saved, the table kept loading and when editing it an “Undefined” message appeared in the configuration panel. This has been fixed.

* **AN-12494 - Box and Whiskers - Minimum Value Outside Range**: On a Box and Whiskers plot the minimum value in the tooltip was outside the range of the data. This has been fixed.

* **QV-12817 - Web Forms - Favorite Question Does Not Remain**: When the user created a Survey and added a question from “Favorites” if the question was part of a Branch of another Survey, the question would get removed from the survey design. This issue has been resolved.




