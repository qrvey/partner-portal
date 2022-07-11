---
id: release-last
title: Qrvey 7.3
sidebar_label: Qrvey 7.3
---
<div style={{textAlign: "justify"}}>
Release Date: 2022-06-30
 
>**Note:** If you wish to upgrade to this version, please contact the CX team if you have a *Managed Infrastructure* contract, or use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/autodeployappCloudformation-enterprise-7.3.json" target="_blank">this upgrade link</a> and follow the directions in the <a href="/docs/get-started/upgrading-new-version" target="_blank">Upgrading to a New Version</a> article to upgrade your instance(s). 
<br/>
 
## New Features & Enhancements
 
### Data Preparation
* **QV-14476 - Union Data From Multiple Sources**: “Union” feature has been added to datasets to enable users to combine and append data from multiple data sources into a single Dataset.

* **QV-15587 - PostgreSQL - S3 method to support larger data loads**: A new way of extracting data (the S3 method) when creating RDS PostgreSQL connections in the same region as the instance allows support of larger data loads.

* **QV-15659 - Enable/Disable Pagination for Data Loads**: With this version custom queries support pagination to enable queries that take longer to run.


### Data Analysis & Automation

* **AN-15983 - X-Axis Control in Continuous Charts With Date and Numeric Categories**: You can now control the X-axis range of your continuous charts by setting start and end category values. 

* **AN-16110 - Text Alignment in Expandable Tables:** You can now modify the columns´ text alignment inside expandable tables.

* **AN-15963 - Show/Hide Panel Headers**: You can now define if charts should show or hide their headers, in order to personalize further your charts.

* **AN-15956 - Geolocation Groups - Counties Support**: You are now able to include information about US counties when defining geolocation groups and create map charts using them.

* **AT-9438 - Multi-tenancy - Assets Visibility in Page Builder and Page View**: You can now show or hide any asset in Page Builder and Page View depending on who is using the embedded widget.

* **AT-11070 - Customization of AN Panels Menu Action**: As an implementer, you can now show or hide menu options from all the Analytics panels or by chart types at once.

* **AT-9500 - Go To URL to load in Self/Tab/Window**: You can now define if the “Go to URL” page action loads the URL in the same tab, a new tab, or a new window.

* **AT-10288 - Data Panel - Chart Information Preview**: You can now see a preview of their charts with titles, chart type, and a description before adding them to the canvas.

* **AT-10885 - Page Builder - Text Editor Formatting Enhancements**: We implemented additional options for formatting the text added to a page so that users have access to more customization controls over texts.

* **AT-10764 - Filter Interactivity - Formulas in Filter Components**: You can now use formulas in Input Box and Date Picker components.

* **EX-1067 - Secure Location for Exported Files**: You can now set a secure URL for the download widget to redirect the download links of exported files.

* **EX-1025 - Multi-file PDF Exports For Simple Tables**: You can now export simple table PDF downloads divided into different files. 

### Admin Center

* **ADMIN-5928 - Infrastructure - ElasticSearch Cluster Status Monitor**: As an Admin, you can now check on the ES cluster status. Changes to the infrastructure can only be made when the cluster is available (green).




## General Tweaks & Bug Fixes

* **QV-15609 - Duplicate Dataset With Same IDs**: When a user duplicated a dataset with API using the same ID, the original was deleted and the new one had issues. This has been fixed.

* **QV-15757 - Show when Dataset changes are pending on the Dataset list**: Users can now see, from the Dataset list, which Datasets have pending changes that need to be applied.

* **QV-15943 - Support numeric and string array data types for Athena Connections**: Users can now view and use string and numeric array for Datasets that use Athena Connections.

* **AN-15707 - Allow Pie Charts to show the percentage of values**: You can now select to display percentages in the Pie so that you know exactly what’s the proportion of each segment.

* **AN-16272 - Geolocation by Country affects States that have the same name**: When filtering out a country like Georgia, the US state Georgia was getting filtered out as well. This has been fixed.

* **AN-16150 - Integer Division is applied when integers are used in Formula**: When a user applied a division formula with both integers, the column format was not being used for the result. This has been fixed.

* **AN-14860 - Error in Formula when there is no data**: When a user created a formula with a dataset that had no values, an error appeared in the console. This has been fixed.

* **AT-11451 - Go to URL action with numeric data token replaces wrong value**: When a creator user sets a “go to page” action with a numeric data type column, and once the end user clicks on a datapoint, the first time the value was replaced by null but the second time it was always replaced by the same random value. This has been fixed.

* **AT-10877 - Copy/Cut/Paste for text and numeric fields in Workflows/Page Builder, and Page View**: You can now use the keyboard shortcuts to copy, cut and paste alphanumeric values into any input box that supports texts or numeric values in Workflows, Page Builder, and Page View.

* **AT-10352 - Subscriptions - Error States For Input Fields**: In the subscription modal, fields that require information but have not been filled in by the End User, will be highlighted with a red border to indicate “Missing Information.”

* **AT-11448 - Date picker - After selecting a value, the placeholder must be shown along with the value as label**: When working with a Date Picker Filter Control, the default functionality showed the default Label value as a placeholder. Once a selection was made, the label was overwritten with the selection. If a custom label was used, once a selection was made the Label was retained in the Date Picker Filter Control, pushing the selected value over to the right. This has been fixed.

* **EX- 355 - PDF - Repeated Values in Grouped Table Exports**: You can now enable repeating values in a grouped Table export to see the same group value repeated down the rows of aggregated values that form the group.

* **ADMIN-6570 - New 404 page**: When users try to go to a URL that doesn’t exist in Qrvey, they will now see a new 404 page.

* **ADMIN-5886 - Unable to Change Elasticsearch Cluster Size**: The function to change the ES cluster size from the Admin center did not work properly. This has been fixed.

* **CD-1379 - New architecture for installing content**: Content will take around half the time to get installed compared to installation times in v7.2 and below. Also, Datasets will start loading as soon as they are installed and not after all content is installed.

* **CD-1124 - InstalledComponents Field Is Not Correctly Updated**: In order to identify if any job was done, an admin user automates a script to review the “installedComponents” field by comparing it with the “totalComponents” field, but sometimes the “installedComponents” field was not updated with the total number of the installed components. This has been fixed.


</div>