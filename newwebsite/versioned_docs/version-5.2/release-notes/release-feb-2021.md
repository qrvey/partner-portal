---
id: release-last
title: Qrvey Version 5.8
sidebar_label: February 2021
---
<div style={{textAlign: "justify"}}/>
Release Date: 2021-02-26

## New Features and Enhancements

Click <a href="/docs/video-training/release/version-5.8" target="_blank"> <strong>here</strong></a> to access demo videos of some released features.

## Data Preparation

-   <a href="/docs/ui-docs/datasets/transformations/" target="_blank"><strong>New Transformations</strong></a>: Transformations Builder can now also be used for functions:
    -   Replace Text and Concatenate
    -   Date Difference and Date Add


-   <a href="/docs/ui-docs/datasets/transformations/" target="_blank"><strong>QV-11776 - Test Shortcut on Transformations</strong></a>: We have added a quick access point for testing transformations. While creating a transformation, a shortcut icon is available to let you test that transformation by redirecting you to the testing tab, where the transformation is already loaded and ready to be tested.

-   <a href="/docs/ui-docs/datasets/transformations/" target="_blank"><strong>QV-12434 - Output Columns Data Types on Transformations</strong></a>: When creating a Formula Transformation, you can now decide the output data type of the column no matter if you choose to Update Existing or Create New column.


-   **QV-11801 - File Upload Size in Connections**: The 10 MB size limit for file uploads when creating a new connection has been increased to 500 MB.

-   <a href="/docs/ui-docs/datasets/datasets/" target="_blank"><strong>QV-12358 - Mark Favorite Dataset</strong></a>: You can now mark a dataset as a favorite when creating a new one on the Data Page. Favorite datasets show up on top, making them easier to access.

-   <a href="/docs/embedding/widgets/data-sources/web-form-end-user/" target="_blank"><strong>QV-12368 - Web Form - End User Widget</strong></a>: The new Web Form End User Widget is an updated/modernized version of a similar widget and it allows for any web form to be embedded in your products. The new widget has been improved with properties that allow for configuration of the Web Forms styles and setting default answers.

## Data Analysis & Automation

-   <a href="/docs/ui-docs/dataviews/chart-builder/"><strong>AN-11715 - Conditional Formatting - Text And Background Color</strong></a>: On Tables, you can now create conditions to affect the cell’s foreground and background colors.

-   <a href="/docs/video-training/release/version-5.8/#simple-and-multiple-column-sorting-enhancements" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/dataviews/chart-types/"><strong>AN-11948 - Single and Multiple Column Sorting Enhancement</strong></a>: You can now configure a custom sorting order when using multiple columns to sort a table.

-   <a href="/docs/video-training/release/version-5.8/#chart-axis-breakdown-control" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> **AN-10200 - Axis Breakdown Control**: In Chart Builder, you can now control the intervals of value labels shown in the value axis of Bar, Line, Symbol, Multi-Series, and Min&Max charts.

-   **AN-11231 - Chart Themes - Text Styles in Metrics**: You can customize the default global Qrvey text styles used in Metrics.

-   **AN-11269 - Filters - Date Time Week/Hrs/Secs in Dates**: You can now create filters on your data using weeks and more granular options like hours, minutes, and seconds.

-   <a href="/docs/video-training/release/version-5.8/#value-list-and-display-filters" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/filtering-data/working-with-filters/"><strong> AN-12149 - Display Filters Affecting Analytics When Hovering Over Filter Button</strong></a>: This new enhancement shows the filters that are applied to a chart inside a floating popup that shows up as a tooltip when the user hovers their cursor over the filter button.


-   <a href="/docs/video-training/release/version-5.8/#value-list-and-display-filters" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/filtering-data/working-with-filters/"><strong> AT-7819 - Display Filters Affecting Analytics in Filter Pane</strong></a>: With this new feature, the filters in the filter pane are updated to only show those that are applied to the chart, each time a different chart panel is selected.

-   <a href="/docs/video-training/release/version-5.8/#value-list-and-display-filters" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/filtering-data/working-with-filters/"><strong> AT-7524 - Value List Filter Component</strong></a>: Value List component has been added to the Page Builder as the latest standalone filter component. This component can be set up and configured at the creation time and allows the end users to interact with it, giving them greater control over the filtering of the published pages.

-   **AT-7804 - Builders - Filtering in Widget Configuration**: You can now define default filters for an embedded widget within the widget's configuration object. When your users access the widget, the data will be filtered based on the filters you defined.

## General Tweaks & Bug Fixes

-   **CX-256 - Product Support Tickets**: You can now create support tickets from the command under the profile menu of Qrvey Composer and Admin Center.

-   **QV-12480 - Uncheck Columns Used in Charts**: When the user created a Dataset and unchecked columns after the Dataset had loaded, the unchecked columns were still displayed in the Analyze section. This behavior has changed and a “Missing Column” message is displayed when trying to access charts that use those unchecked columns.

-   **QV-11271 - Uncheck Columns Used in Joins**: You can now uncheck the columns used in a join when they might not be required for analysis.

-   **QV-12376 - Dataset - Data Page Remains ‘Loading’**: When a user accessed a dataset and the backend showed a time-out error, the data page remained ‘Loading’ and the red toast with the error message did not appear. This has been fixed.

-   **QV-12584 - PostgreSQL Custom Query - Numeric Columns Mapped as Text Type**: When a user creates a Dataset from a "Custom Query" with numeric columns, the serial, float8, float4, and int2 type columns in PostgreSQL are mapped as text columns.


-   **DR-2245 - Replace Transformation**: You now have the option to use a string as a search parameter besides a regular expression when using the Replace Transformation.

-   **DR-2200 - DatasetLookup Transformation**: You can now use Elasticsearch queries in the DatasetLookup transformation.

-   **DR-2249 - Transformation Error Handling for NaN, Infinity, and Undefined**: When working with numerical values in transformations, if NaN and Infinity values are detected, it is treated as errors so the error handling can catch them. The same behavior is expected when working with undefined values in all transformations.

-   **DR-2306 - JobTracker Record Too Large Error**: You can now load datasets containing more than 2000 columns.

-   **DR- 2287 - File Upload: Dates with Timezone**: When loading a file with dates that contain the timezone information, these are being stored in UTC as all dates in Qrvey.

-   **AN-12145 - Filter on Aggregate Values From the Chart Panel**: You can now filter your chart using aggregated columns directly from the chart panel by clicking on the filter icon and selecting aggregated columns.

-   **AN-12034 - Filters on Aggregates Do Not Display**: Aggregate column filters were not displayed in the filter modal. This has been fixed


-   <a href="/docs/ui-docs/dataviews/exporting/" target="_blank"><strong>AT-7960 - Export Chart Panels With Aggregated Data</strong></a>: You can now download chart panel CSV files with aggregated data.
