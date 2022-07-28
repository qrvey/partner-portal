---
id: release-last
title: Qrvey 7.3
sidebar_label: Qrvey 7.3
---
<div style={{textAlign: "justify"}}>

Release Date: 2022-06-30
 
## New Features & Enhancements
 
### Data Preparation
* <strong>QV-14476 - Union Data From Multiple Sources</strong> : “Union” feature has been added to datasets to enable users to combine and append data from multiple data sources into a single Dataset. <a href="/docs/video-training/release/version-7.3#union-data-from-multiple-sources" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **QV-15587 - PostgreSQL - S3 method to support larger data loads**: A new way of extracting data (the S3 method) when creating RDS PostgreSQL connections in the same region as the instance allows support of larger data loads.

* **QV-15659 - Enable/Disable Pagination for Data Loads**: With this version custom queries support pagination to enable queries that take longer to run.


### Data Analysis & Automation

* **[AN-15983 - X-Axis Control in Continuous Charts With Date and Numeric Categories](../ui-docs/chart-builder/disc-cont.md#continuous-dates)**: You can now control the X-axis range of your continuous charts by setting start and end category values. 

* **[AN-16110 - Text Alignment in Expandable Tables](../ui-docs/dataviews/chart-types/expandable.md#styles)**: You can now modify the columns´ text alignment inside expandable tables. <a href="/docs/video-training/release/version-7.3#expandable-table-alignment" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **[AN-15963 - Show/Hide Panel Headers](../ui-docs/chart-builder/setting-chart-styles.md#managing-themes)**: Visibility of charts’ panel headers can be controlled from the themes dialog.

* **[AN-15956 - Geolocation Groups - Counties Support](../ui-docs/datasets/datasets.md#setting-up-geolocation-groups)**: Geolocation groups now support US counties. <a href="/docs/video-training/release/version-7.3#counties-support-in-geolocation-groups" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>


* **AT-9438 - Multi-Tenancy - Assets Visibility in Page Builder and Page View**: with this version, implementers can control the visibility of content and assets (charts, pages, datasets, etc.) from the widget configuration object for Page Builder and Page View widgets.


* **AT-11070 - Customization of AN Panels Menu Action**: As an implementer, you can now control the available menu options for chart panels by the chart category (metrics or other charts).

* **[AT-9500 - Go To URL to load in Self/Tab/Window](../ui-docs/builders/page_actions.md#go-to-url)**: The target for the “Go to URL” page action can now be set to the same tab, a new tab, or a new window.

* **[AT-10288 - Data Panel - Chart Information Preview](../ui-docs/builders/pages.md#canvas-layout)**: An icon and the chart description help analysts better identify the charts under each dataset in the data panel before adding them to the canvas.

* **[AT-10885 - Page Builder - Text Editor Formatting Enhancements](../ui-docs/builders/pages.md#object-configuration)**: We implemented additional options for formatting the text control in a page for improved customization.

* **[AT-10764 - Filter Interactivity - Formulas in Filter Components](../ui-docs/filtering-data/working-with-filters.md#free-standing-filter-controls)**: You can now use formulas in Input Box and Date Picker components.

* **EX-1067 - Secure Location for Exported Files**: Download links can now be customized to use a secure location for exported files.

* **EX-1025 - Multi-file PDF Exports For Simple Tables**: Larger exports are now supported by breaking the resulting file into multiple smaller ones. 

### Admin Center

* **ADMIN-5928 - Infrastructure - ElasticSearch Cluster Status Monitor**: As an Admin, you can now check on the ES cluster status. Changes to the infrastructure can only be made when the cluster is available (green).


## General Tweaks & Bug Fixes

* **QV-15609 - Duplicate Dataset With Same IDs (bug fix)**: When a dataset was duplicated a dataset from an API, using the same ID, the original was replaced. This has been fixed.

* **QV-15757 - Show when Dataset changes are pending on the Dataset list (improvement)**: Datasets with pending changes can now be identified in the dataset list page.

* **QV-15943 - Support numeric and string array data types for Athena Connections (improvement)**: Users can now view and use string and numeric arrays for Datasets that use Athena Connections.

* **[AN-15707 - Allow Pie Charts to show the percentage of values (improvement)](../ui-docs/dataviews/chart-types/pie.md#styles)**: With this version pie charts have the option to display their values in percentages, as well as raw numbers.

* **AN-16272 - Geolocation by Country affects States that have the same name (bug fix)**: When filtering out a country like Georgia, US state Georgia was getting filtered out as well. This issue has been fixed.

* **AN-16150 - Integer Division is applied when integers are used in Formula (bug fix)**: The result of dividing two integers using a formula would result in an integer. This has been fixed.

* **AN-14860 - Error in Formula when there is no data (bug fix)**: When a user created a formula with a dataset that had no values, an error appeared in the console. This has been fixed.

* **AT-11451 - Go to URL action with numeric data token replaces wrong value (bug fix)**: Go to URL action with a numeric data type column used to pass the wrong value. This has been fixed.

* **AT-10877 - Copy/Cut/Paste for text and numeric fields in Workflows/Page Builder, and Page View (improvement)**: You can now use the keyboard shortcuts to copy, cut and paste alphanumeric values into any input box that supports texts or numeric values in Workflows, Page Builder, and Page View.

* **AT-10352 - Subscriptions - Validation For Input Fields (improvement)**: Required fields in the subscription modal will be highlighted with a red border when information is missing.

* **AT-11448 - Date picker - After selecting a value, the placeholder must be shown along with the value as a label (bug fix)**: The behavior of the Date Picker filter control has been made consistent, with, or without a custom label.

* **EX- 355 - PDF - Repeated Values in Grouped Table Exports (improvement)**: You can now enable repeating values in a grouped Table export to see the same group value repeated down the rows of aggregated values that form the group.

* **ADMIN-5886 - Unable to Change Elasticsearch Cluster Size (improvement)**: The function to change the ES cluster size from the Admin center did not work properly. This has been fixed.

* **CD-1379 - New architecture for installing content (improvement)**: Content will take around half the time to get installed compared to installation times in v7.2 and earlier. Also, Datasets will start loading as soon as they are installed and not after all content is installed.


</div>