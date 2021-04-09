---
id: release-last
title: Qrvey Version 5.9
sidebar_label: March 2021
---
<div style="text-align: justify">
Release Date: 2021-04-09


## New Features and Enhancements 

Click <a href="/docs/video-training/release/version-5.9" target="_blank"> <strong>here</strong></a> to access demo videos of some released features.


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




