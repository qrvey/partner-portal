---
id: release-aug-2021
title: Qrvey Version 6.2
sidebar_label: Qrvey Version 6.2
---
<div style={{textAlign: "justify"}}>
Release Date: 2021-09-13


## New Features & Enhancements

Click <a href="/docs/video-training/release/version-6.2" target="_blank"> <strong>here</strong></a> to access demo videos of some released features.

### Data Preparation

*  <strong>QV-13336 - Transformations UI - Array Select Single Item</strong>: This advanced transformation enables users to replace an object or value array with its first single object or value.

* <strong>QV-12900 - Token Authentication - Web Forms Design Widget</strong>: With this release, Web Form Design widget has joined the widgets that support Token Security. Other forms of authentication like cookies, continue to be supported.

* <strong>QV-13777 - Dataset Page - Loading Progress Bar</strong>: More detailed information about the loading progress are shown in the Dataset Design page during the load.

* <strong>QV-13964 - Dataset Views</strong>: Datasets data can now be made available to other users and across all applications.

* <strong>QV-12897 - MongoDB Connection</strong>: Support for MongoDB connections has been added in this release.

*  <strong>QV-12986 - Use of Tokens in Transformations</strong>: Data tokens, system tokens and constant values are now supported in Date and Numeric Transformations.


### Data Analysis & Automation

* <strong>AN-9952 - Keep Axes Fixed</strong>: When scrolling X/Y charts in either direction, only the area inside the axes will scroll, keeping the axes in place.

* <strong>AN-13498 - Basic Funnel Chart</strong>: Funnel charts are the latest addition to the chart library of Qrvey. <a href="/docs/video-training/release/version-6.2#funnel-charts" target="_blank" className="tooltip"><img alt="Live Connect" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> 

* <strong>AN-13532, AN-9836 - Conditional Formatting - Expandable Tables, Combo Charts</strong>: Support for conditional formatting has been added to Expandable Tables, as well as all Combo charts.

* <strong>AN-13503, AN-13504 - Custom Tooltips for Maps and Metrics</strong>: Customize tooltips in Maps and Metric charts by adding additional dimensions or custom text to display.

* <strong>AN-13185 - Table Styles - Text Settings</strong>: Simple tables now have more formatting options including fonts, font weight, font size and colors.

* <strong>AN-13604 - New Filter Panel UI</strong>: Create and customize Filters with a New UI that improves the user experience when interacting with them in Custom View, Builders, End User and User Management.<a href="/docs/video-training/release/version-6.2#new-filter-panel-ui" target="_blank" className="tooltip"><img alt="Live Connect" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> 

* <strong>AN-12571 - Edit Filter Logic - Filter Panel</strong>: Support for more complex and customized boolean logic by specifying And/Or operators while creating filters.<a href="/docs/video-training/release/version-6.2#new-filter-panel-ui" target="_blank" className="tooltip"><img alt="Live Connect" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> 

* <strong>AN-13217 - Running Aggregates in Multiseries Charts</strong>: Multi-Series Charts now support Table Calculations such as Sum, Average, Minimum, Maximum, Difference and % Difference.

* <strong>AN-13529 - Filters - Grouping Datetime on Distinct Date Periods</strong>: Multiple date period types can now be used to group the information independently of other date parts.

* <strong>AN-13745 - Sorting X/Y Charts By Any Column</strong>: X/Y charts are now sortable by any field in the source dataset, regardless of whether that field is used as the x-axis or y-axis data source.<a href="/docs/video-training/release/version-6.2#sorting-xy-charts-by-any-column" target="_blank" className="tooltip"><img alt="Live Connect" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> 

* <strong>AN-13584 - Include/Exclude Repeating Values in Tables</strong>: Support for controlling the visibility of repeating values in a grouped table. By default, only the first instance of a distinct value is visible in a grouped table; subsequent rows within a group will display a blank table cell. 

* <strong>AN-12623 - Pagination in Simple Tables</strong>: Support for enabling pagination in simple tables to explore all records in the Dataset in tabular form.

* <strong>AN-13182 - Table Styles - Borders</strong>: Table border styles are now fully customizable for table charts.

* <strong>AN-13784 - Drill Down Action in Funnel Charts</strong>: Funnel charts now support drill-down actions.

* <strong>AN-13786 - Funnel - Support Width Mode</strong>: You can now enable an option in the configuration panel to depict values by the width of the Funnel chart bands rather than their height.

* <strong>AN-13875 - Conditional Formatting - Multi-Series Charts</strong>: Conditional formatting in multi-series charts is now supported. Data points that meet a defined threshold are rendered in the color specified.

* <strong>AT-9111 - Date Picker - Date filter across different datasets</strong>: Support for utilizing a single date picker to apply the same date filter across different datasets. 
 
* <strong>AT-9134 - Page Drill with Filters in Tables</strong>: Tables now support row-level page drill actions with filter parameters. For grouped tables, the “category” values for the selected row are passed as parameters. For simple tables, only the value of the selected table cell is passed as a parameter.

* <strong>AT-8418 - End-User Home Page Personalization</strong>: You can now personalize your page view by setting a different home page than the one originally set by the page Creator.<a href="/docs/video-training/release/version-6.2#end-user-homepage-personalization" target="_blank" className="tooltip"><img alt="Live Connect" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> 

* <strong>AT-9309 - Improved Page Header</strong>: Headers in “builder” widgets can now be fully customized by adding other page objects such as images, texts, background images, buttons, and filter components.<a href="/docs/video-training/release/version-6.2#builders---header-creator" target="_blank" className="tooltip"><img alt="Live Connect" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> 

* <strong>EX-160 - Grouped Tables Export</strong>: Support for generating basic PDF downloads for tables and grouped tables visualizations added to pages.

* <strong>EX-210 - CSV Export in Workflows</strong>: Support for exporting CSV files of Charts and Tables through the Send Email Action in Workflows.

* <strong>EX-299 - Workflows - Chart Exports</strong>: Support for exporting filtered charts via workflows with multiple formats (CSV, CSV Summary, PDF) simultaneously.


## General Tweaks & Bug Fixes

* <strong>DR-2587 - Data Sync Fails With Epoch Date Time Column</strong>: Epoch could not be used instead of timestamp. This has been fixed.

* <strong>QV-14175 - File Upload - New File Type Dropdown</strong>: When creating a File Upload connection, you get to choose the file type to be uploaded.

* <strong>WF-56 - Multiple Choice Enhancements</strong>: Multiple Choice form field types now support an unlimited number of options; the previous limit was 15.

* <strong>AN-13581 - Fix Axis Labels Cut Off</strong>: Axis labels have more space allocated by default; labels that are too long will be truncated; all X/Y Charts are included (Bar, Line, Symbol, Min/Max, Combo, Multi-series).

* <strong>AN-13689 - Repeating Colors In Multi-Series Charts</strong>: An issue with Multi-series bar charts that assigned the same color to two different series has been fixed.

* <strong>AT-9482 - Header - Authentication Button</strong>: The Login and Logout actions for End User applications have been relocated from the navigation panel to the three-dot menu found in the bottom-right corner of published pages, which is always visible to the user.

* <strong>AT-9159 - Improve Widget Compatibility with other Angular Apps</strong>: Improved compatibility of the Page View widget when attempting to embed within a parent application built with Angular.

* <strong>EX-140 - Wrong Sort Order For CSV Summary</strong>: CSV summary export now preserves the sort order specified by the user.

* <strong>ADMIN-2842 - Two different Logs Appear in the Activity Log</strong>: Failed installations no longer generate two conflicting logs in the “Activity Log” tab.

* <strong>ADMIN-2841 - Received Apps Counter Badge Does not Appear</strong>: The counter badge is now visible to the user on the “Received Apps” tab before the user clicks on it.

</div>