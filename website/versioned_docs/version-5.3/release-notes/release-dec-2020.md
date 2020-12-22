---
id: version-5.3-release-last
title: Qrvey Version 5.7
sidebar_label: December 2020
original_id: release-last
---
<div style="text-align: justify">
Release Date: 2020-12-18

## New Features and Enhancements 

Click <a href="/docs/next/video-training/release/version-5.7" target="_blank"> <strong>here</strong></a> to access demo videos of some released features.


### Data Preparation

* <a href="/docs/ui-docs/datasets/transformations/" target="_blank"><strong>QV-10890 - New Transformations</strong></a>: Transformations Builder can now be used to also set:
  * Addition & Multiplication Transformation
  * Subtraction & Division Transformation

* **QV-11462 - Handling Errors in Transformations**: You can now decide to reject the record, ignore the error or replace the value of the error.

* <a href="/docs/video-training/release/version-5.7/#marking-datasets-as-favorites" target="_blank" class="tooltip"><img alt="Marking Datasets as Favorites" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/datasets/data_overview/#data_overview" target="_blank"><strong>QV-12000 - Marking Datasets as Favorites</strong></a>: You can now mark your datasets as favorites in the Datasets section. Favorite datasets will be listed at the top.

* <a href="/docs/ui-docs/datasets/data_overview/#data_overview" target="_blank"><strong>QV-11767 - Datasets List View & Sorting</strong></a>: Datasets can be listed in a table and sorted in various new ways. Switching between card and list views has been enabled.

* <a href="/docs/ui-docs/datasets/datasets/#datasets" target="_blank"> <strong>QV-11016 - Cancel Loading Process</strong></a>: You can now cancel the data loading process in case you want to review or change the dataset design.

### Data Analysis & Automation

* <a href="/docs/video-training/release/version-5.7/#filters-v20" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/datasets/data_overview/#data_overview" target="_blank"><strong>AN-11308 - Filters Creation 2.0</strong></a>: Filter creation has been revamped to provide a better and more consistent experience. As a result of this change you get: 
    * Improved and more consistent UI across different data types.
    * More complete and consistent list of operands for all data types.

    It is important to note that the **logic between scopes has been changed from OR to AND**. This change is in response to multiple customer requests and is more in accordance with advanced filtering behavior.  

* <a href="/docs/ui-docs/filtering-data/working-with-filters" target="_blank"> <strong>AN-11309 - Filter on Aggregate Values</strong></a>: Added ability to filter aggregated values in any chart where grouping has been applied.

* <a href="/docs/video-training/release/version-5.7/#date-picker-filter-component" target="_blank" class="tooltip"><img alt="Date Picker Filter Component" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/filters/working-with-filters" target="_blank"><strong>AT-7523 - Date Picker Filter Component</strong></a>: As part of a new initiative to allow adding individual filter controls to the Report and Page Builder, we added the Date Picker component. The component can be added in creation mode for use in end user interaction mode. 

* <a href="/docs/video-training/release/version-5.7/#nested-formulas" target="_blank" class="tooltip"><img alt="Nested Formulas" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/dataviews/formulas/" target="_blank"><strong>AN-8299 - Nested Formulas</strong></a>: Formulas have been improved to allow nesting (using one formula in another).

* <a href="/docs/video-training/release/version-5.7/#column-resizing-on-tables" target="_blank" class="tooltip"><img alt="Column Resizing on Tables" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/dataviews/chart-types/" target="_blank"><strong>AN-9935 - Tables Column Resizing</strong></a>: You can now modify the column sizes of Table Visualization. This lets you define the width of a specific column manually.

* <a href="/docs/video-training/release/version-5.7/#choropleth-map" target="_blank" class="tooltip"><img alt="Choropleth Map" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/dataviews/chart-types/" target="_blank"><strong>AN-2459 - Choropleth Map</strong></a>: You can now create Choropleth or Region Maps to display geographical areas or regions that are colored or shaded in relation to an aggregated data value column. 

* <a href="/docs/video-training/release/version-5.7/#min-max-charts" target="_blank" class="tooltip"><img alt="Min-Max Charts" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/dataviews/chart-types/" target="_blank"><strong>AN-10418 - Min/Max Charts</strong></a>: Min/Max chart is the latest addition to the collection of Qrvey’s chart types. Min/Max charts can be used to show the spread of the data. 

* **AN-11037 - Running Aggregates on Heatmaps**: You can now use Running Aggregates calculations on Heatmaps.

* **AN-3665 - Conditional Formatting on Geo Maps**: You can now use conditional formatting to highlight values in Bubble and Dot Maps based on a data threshold.


* **AN-11038 - Tables Calculations Direction**: You can now apply Table-Across or Table-Down calculations in charts such as Heatmap, Crosstab, and Tables.

* <a href="/docs/video-training/release/version-5.7/#select-multiple-objects-and-autoalign" target="_blank" class="tooltip"><img alt="Select Multiple Objects and Autoalign" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/builders/pages/" target="_blank"><strong>AT-7521 - Selecting Multiple Objects in Page/Report Builder</strong></a>: You can now select multiple objects on the canvas to drag and drop or change their properties - like arrangement or alignment - simultaneously.

* <a href="/docs/video-training/release/version-5.7/#select-multiple-objects-and-autoalign" target="_blank" class="tooltip"><img alt="Select Multiple Objects and Autoalign" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/builders/pages/" target="_blank"><strong>AT-7454 - Auto-Align Objects on the Builders Canvas</strong></a>: You can now align one or multiple objects automatically based on a list of alignment options displayed in builder toolbars as a dropdown menu.

* <a href="/docs/ui-docs/builders/pages_actions/" target="_blank"><strong>AT-6794 - Page Actions on Geo Maps</strong></a>: You can now use page actions like *Filter By* and *Page Drill* on Geo Maps to let end users interact with them by clicking on a data point.

* <a href="/docs/video-training/release/version-5.7/#text-labels-on-page-header" target="_blank" class="tooltip"><img alt="Text Labels on Page Header" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"><span class="tooltiptext">Watch video</span></a><a href="/docs/ui-docs/builders/pages/" target="_blank"><strong>AT-7531 - Text Label on Page Header</strong></a>: Text labels can now be added to page headers.


## General Tweaks & Bug Fixes

* **DR-2048 - Remove Record for Custom Routing**: There was no way of dropping or removing flattened records – all flattened records were inserted in Elasticsearch and had to be filtered when creating Data Views. This has been fixed by adding a transformation to let users remove flattened records based on the defined conditions.

* **DR-2148 - Array Lookup - Order Results by Expression**: When using Array Lookup, objects could be sorted only by an attribute of the object. Now, users can also sort them by a Javascript function or expression.

* **DR-2162 - Remove Column Transformation**: When loading records through API calls, there was no way of skipping or ignoring unwanted columns. This has been fixed by adding a transformation that allows users to remove those columns from the record so that they are not inserted in Elasticsearch.

* **DR-2145 - Data Load - Handling Data Type Errors for Columns**: Users would experience data load errors for columns that were not important to them and that had data type mismatches. This has been fixed, users will have an option to ignore those errors to let data load completely.

* **QV-12279 - Data Loading Fails With Zero_Date Records**: The loading process of a dataset with zero_date records always failed, displaying a toast notification with an error message. This has been fixed.

* **QV-12175 - Datasets Cannot Be Created With String Values**: A user could not create a connection with a CSV file containing string values on numeric columns. This has been fixed.

* **QV-12059 - Error Notifications - Connection Failure**: When database connection credentials changed, the error message was incorrect. This has been fixed.

* **QV-12217 - Error Creating Dataset With MSSQL Connection**: When the user tried to create a dataset selecting MSSQL connection, a credential error appeared. This has been fixed.

* **QV-12341 - Load Dataset With Date Columns Using MySQL**: When a user created a Formula Transformation using date columns with null records, the result calculated for the record was wrong. This has been fixed.

* **QV-12258 - Error Deleting Transformations**: When a user deleted a transformation, other transformations were deleted too. This has been fixed.

* **QV-12290 - Error Creating Columns in Transformations**: When a user created a new column in transformation output, the dataset loading failed. This has been fixed.

* **QV-12355 - Error Creating New Columns From Text Transformations**: When a user created text transformations, new column outputs were not created in the dataset. This has been fixed.

* **QV-12311 - Creating Empty Columns From Numeric Transformations**: The users could create new columns in numeric transformation without applying any transformation. The validation has been fixed and new columns cannot be created empty.

* **QV-12331 - Load Dataset with Multiple Transformations**: A dataset with multiple transformations could not be loaded properly. This has been fixed.

* **QV-12340 - Dataset Does Not Show Loaded Records**: A dataset with transformations did not show the proper number of loaded records. This has been fixed.

* **QV- 12370 - Undefined Join When Installing an Application**: After installing a dataset with a Join from CSV, the Join did not load properly showing Untitled Dataset and undefined label. This has been fixed.

* **AN-11939 - Choropleth Copy Name**: An empty state copy appeared as Choropleth Map Chart. This has been fixed to show “Choropleth Map”.

* **AN-11710 - Sorting in Table Chart**s: When a user created a simple table chart with 2 numeric columns, and then applied a Desc sorting to the first column (Amount) and a Desc sorting to the second column too, the second column did not sort as expected. This has been fixed.

* **AN-10762 - The Continuous Date Scale Is Lost When Using Data Links**: When a creator applied continuous date scales to a chart using Data links, the missing data points between the start and end date did not show. This has been fixed.

* **AN-10833 - Table Totals - Chart Not Available at the Moment**: When a user created a simple table chart and applied totals in a column, the message “Chart not available at the moment” appeared. This has been fixed.

* **AN-10806 - Table Chart - Warning Missing**: When a user created a simple table chart, a warning did not appear when a total was applied to a non-numeric column. This has been fixed.

* **AT-7615 - Color Does Not Change**: When the creator chose a custom color by typing the desired value for font and background colors, the color did not change until the transparency had been modified. This has been fixed.

* **CR-69 - Filter Value List to Display More Options**: When a user created a filter, the system only displayed the top 50 values for that field. This has been fixed by increasing the limit to 1,000.