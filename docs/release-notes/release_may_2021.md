---
id: release-may-2021
title: Qrvey Version 5.10
sidebar_label: May 2021
---
<div style={{textAlign: "justify"}}>
Release Date: 2021-05-05

## New Features and Enhancements

Click <a href="/docs/video-training/release/version-5.10" target="_blank"> <strong>here</strong></a> to access demo videos of some released features.

## Data Preparation

-   <strong>DR-2490 - Access To All Flattened Record Columns</strong>: We enhanced the flat data transformation so you now have access to all columns of a flattened record when loading data.

-   <strong>DR-2482 - Flattening Multiple Arrays on the Same Record</strong>: You can now flatten multiple arrays on the same record when using the flat data transformation.

-   <strong>DR-2484 - Improved Data Type Identification</strong>: The algorithms to identify the data type of columns in CSV and JSON files have been improved to make the dataset creation process faster and easier.

-   <a href="/docs/video-training/release/version-5.10/#new-menu-for-data-source-pills-and-new-connections-screens" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>  <a href="/docs/ui-docs/datasets/datasets/#changing-the-data-source" target="_blank"><strong>QV-12663 - New Menu for Data Source Pills</strong></a>: You can now add, switch, and edit a Data Source’s connection from the Data Source Pill located in the Dataset Page. 

-   <a href="/docs/video-training/release/version-5.10/#new-menu-for-data-source-pills-and-new-connections-screens" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/datasets/databases/" target="_blank"><strong>QV-12904 - New SQL Connection Screens</strong></a>: You can now select the Database when configuring a connection, making it easier to create tables or SQL queries. 

## Data Analysis & Automation

-   <strong>AN-9955 - Display All Values on Filters</strong>: Previously, only 1000 values per column were displayed when creating a filter. Now, You can see and select all existing values of a column.

-   <a href="/docs/video-training/release/version-5.10/#relative-date---new-date-ranges" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/filtering-data/working-with-filters/#calendar-versus-rolling-date-ranges" target="_blank"><strong>AN-12682 - Relative Dates - Calendar and Date Ranges Support</strong></a>: You can now create a relative date filter as a calendar base or rolling base. A calendar-based approach is when the date ranges are calculated, taking into account the start and end date of a calendar's period. The rolling base is expressed relative to the anchor date and automatically shifts forward day by day without considering calendar periods.

-   <a href="/docs/video-training/release/version-5.10/#relative-date---new-date-ranges" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/filtering-data/working-with-filters/#inclusive-versus-exclusive-date-ranges" target="_blank"><strong>AN-12683 - Relative Dates - Exclusive Date Ranges Support</strong></a>: You can now choose between inclusive or exclusive ranges when creating filters.

-   <a href="/docs/ui-docs/filtering-data/working-with-filters/#seeedit-filters-directly-from-charts" target="_blank"><strong>AN-12527 - Edit or Remove Filters From the Chart Panel</strong></a>: Filters that apply to charts panels can now be edited or removed directly from the floating popup panel that shows them on the panel.

-   <a href="/docs/video-training/release/version-5.10/#trend-charts---sparkline" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/dataviews/chart-types/#charts-in-tables" target="_blank"><strong>AN-11056 - Trend Charts - Sparkline</strong></a>: You can now create Line and Bar charts inside table cells to see trends in your data without leaving the table visualization.

-   <a href="/docs/ui-docs/dataviews/chart-types/#reordering-columns" target="_blank"><strong>AN-12654 - Table Columns Reordering</strong></a>: You can now organize the table’s columns by dragging and dropping them directly from the column header.

-   <a href="/docs/ui-docs/dataviews/chart-types/#conditional-formatting-in-crosstab" target="_blank"><strong>AN-9833 - Conditional Formatting in Crosstab</strong></a>: You can now use conditional formatting in crosstab to highlight cells that meet predefined conditions.

-   <a href="/docs/ui-docs/dataviews/chart-types/#changing-header-colors" target="_blank"><strong>AN-12656 - Change Font Color in Crosstab</strong></a>: You can now change the colors of crosstab headers and fonts directly from the chart builder in the “Style” section of the configuration panel.

-   <a href="/docs/ui-docs/dataviews/chart-builder/#fixed-range-configurations" target="_blank"><strong>AN-9962 - Chart Axis Range Configuration</strong></a>: You can now set a fixed min and max value for the value axis range of any X/Y chart.

-   <a href="/docs/ui-docs/dataviews/chart-builder/#scale-type" target="_blank"><strong>AN-9837 - Logarithmic Scale Type</strong></a>: You can now choose a logarithmic scale for the value axis of X/Y charts.

-   <a href="/docs/ui-docs/dataviews/chart-types/#modifying-bar-width-and-spacing" target="_blank"><strong>AN-9932 - Bar Width and Spacing</strong></a>: The visualization of charts containing bars has been improved by the implementation of automatic adjustments in proportion to the available space in the chart, also you can manually adjust the bar width percentage to customize the size of the bars.

-   <a href="/docs/ui-docs/dataviews/chart-builder/#adjusting-chart-to-fit-the-size-of-panel" target="_blank"><strong>AN-9944 - Fit Chart to Panel</strong></a>: You can now choose the "fit to size" option to automatically fit a visualization to the size of its panel.

-   <a href="/docs/video-training/release/version-5.10/#automatic-column-links" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/datasets/column-links/" target="_blank"><strong>AT-7946 - Automatic Column Links</strong></a>: Columns can be pre-configured in the Dataset Design step to link to a specific URL. This establishes an automatic Go To URL link whenever the column is used in any analytic visual. The URL can later be edited both from Page Actions and Dataset Design.

-   <a href="/docs/ui-docs/builders/pages/#data--configuration" target="_blank"><strong>AT-8425 - Data Page Shortcut</strong></a>: You can now access Dataset Design directly from the Page, Report, and Chart Builder by clicking on shortcut icons of the builders’ data panel.

-   <a href="/docs/video-training/release/version-5.10/#get-widget-configuration" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> <strong>AT-7680 - Get Widget Configuration</strong>: We have added a feature to obtain the widget configuration code for <a href="/docs/embedding/widgets/app-building/widget-page-builder/" target="_blank">Page Builder</a>, <a href="/docs/embedding/widgets/app-building/widget-report-builder/" target="_blank">Report Builder</a>, and <a href="/docs/embedding/widgets/app-building/widget-page-view/" target="_blank">Page View</a> widgets from the respective widget UIs inside Qrvey Composer. 

## General Tweaks & Bug Fixes

-   **ADMIN-4554, ADMIN-4555 -** Value List filters and chart themes are now supported in Content Deployment.

-   **QV-13329 - View Data For PostgreSQL VIews**: When a user created a connection with PostgreSQL selecting a “View“ from a custom schema, the “View Data” option showed an error, and the data did not appear. This has been fixed.

-   **QV-12968 - Joined Datasets Cannot Be Loaded Using Special Character "-"**: When a user was creating a Dataset with multiple data sources, but one of the datasourceId value contained the "-" character (example: "datasourceId": "rKnu3U-w6"), the load or reload processes generated an error. This has been fixed.

-   **QV-12905 - Datasets - Apply and Discard Buttons Disabled:** When a user set a "Security Column" in an Active Dataset and went to the Dashboard without applying changes, when the user returned to the Dataset the "Apply" or "Discard" buttons were disabled, and the security column was not saved. This has been fixed.

</div>