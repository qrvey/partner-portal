---
id: release-sep-2020
title: Qrvey Version 5.5
sidebar_label: September 2020
---
<div style="text-align: justify">
Release Date: 2020-09-30

Click <a href="/docs/next/video-training/release/version-5.5"> <strong>here</strong></a> for demo videos on some of the released features.


## Admin
* <a href="/docs/admin/elasticsearch-management/"> <strong> ADMIN-2766 - ES Management - Automatic Adjustments</strong></a>: Automatic Adjustment settings are also available in the Infrastructure section. Admins are now able to select if they want to perform automatic adjustments with Qrvey automatically adding more Elasticsearch servers in case space is running out.

* <a href="/docs/admin/elasticsearch-management/"> <strong> ADMIN-2767 - ES Management - Email Notifications</strong></a>: We enabled email options for different events that can happen as a result of ES Adjustments. Admins are able to choose which event-related email they want to receive for which a valid email address must be provided.


## Data Preparation

* <a href="docs/ui-docs/datasets/transformations"> <strong> QV-10808 - Transformations UI</strong></a>: We added a feature to let users create, manage, and apply transformations to a Dataset. This first transformation UI version allows JavaScript statements to run, has a formula editor, a list of columns, a list of functions and the output section. Creators can transform the data while it’s getting loaded to Elasticsearch. We are also allowing users to test transformations without having to load all of the data.


* <a href="docs/ui-docs/datasets/data-sync"> <strong>QV-11456 - Cascade Sync for Index View Datasets</strong></a>: We added the feature to let creators enable Cascade Sync for Datasets using Index View Datasets as Data Sources.

 
## Analytics
* <a href="/docs/ui-docs/dataviews/chart-builder/"> <strong>AN-10432 - Table Calculations - Difference</strong></a>:
 We added a feature to let creators use “Difference” as Table Calculations on Bar and Line Charts. Creators can get the difference between the aggregated value in one partition and the same value in another partition. 


* <a href="/docs/ui-docs/dataviews/chart-builder/"> <strong>AN-10433 - Table Calculations - Percent Difference</strong></a>: We added a feature to let creators use “Percent Difference” as Table Calculations on Bar and Line Charts. Creators can get the Percent Difference between the aggregated value in one partition and the same value in another partition. 

* <a href="/docs/ui-docs/dataviews/chart-builder/"> <strong>AN-9793 - Table Calculations - Running Aggregates</strong></a>: We added a feature to let creators use Running Aggregate calculations like Running Average, Running Sum, Running Min, and Running Max on Bar and Line Charts. Creators can get a summation of a sequence of values from a selected Value column.

* <a href="/docs/ui-docs/dataviews/chart-builder/"> <strong>AN-10081 - Table Subtotal + Grand Totals</strong></a>: We added a feature to let creators apply totals by the group in the Table so that they can get Subtotals per group category for the selected aggregated column.

* <a href=""> <strong>AN-10160 - Clustering in Dot Maps</strong></a>: We enabled an automatic clustering to Dot Maps so that creators can see data points aggregated into smaller groupings of points, providing a better understanding of how many points exist within an area.

* <a href="/docs/ui-docs/dataviews/chart-builder/"> <strong>AN-10255 - Sorting on All Columns Used in Multiseries</strong></a>: We implemented a new method of applying sorting to Multiseries charts that is done via the column pills in the shelves' inside chart builder so that Creators can sort by Multiseries and not just the Label or Aggregated Values.

## Automation

* <a href="/docs/ui-docs/builders/pages_actions/"> <strong>AT-6797 - Page Builder - Go To URL in Maps</strong></a>: We added a feature to allow a creator to set up a “Go to URL” on-click action for Dot Map and Bubble Map charts. So that end-users can now interact with them by clicking on a data point, and the widget redirects end-users to the URL configured by the Creator.

* <a href="docs/ui-docs/automation/send-actions/"> <strong>AT-6854 - Flows - Signature in Send Email</strong></a>: We added an option in the email action to include or exclude a signature, so creators should be able to decide if they want to include the company’s email signature as part of the email.


## Other Enhancements

* **AT-6797 - Builders - Canvas Auto-Scroll**: We added the feature of auto-scroll on pages and reports. When creators drag a widget, the vertical scroll should automatically follow the creator mouse movement. 

* <a href="/docs/ui-docs/dataviews/chart-builder/"> <strong>AN-10254 - Sorting by Columns - Bar/Line/Symbol</strong></a>: We improved the sorting on Bar/Line/Symbol charts so that creators can use the column pills in the shelves' insides chart builder to sort.

* **DR-1875 - New Data Transformation API**: This is a new API for clients that want to test their transformations before creating a Dataset or without loading all of their Data.

* **DR-1928 - Cost and Performance Enhancements**: Additional work has been done in the Data Loading Pipeline. Transformation cost when flattening data has been reduced in around 50%. Data extraction cost and DynamoDB costs were reduced too.

* **DR-1968 - Delete Records API**: New API to delete records from a Dataset or Elasticsearch Index.

* **DR-1955 - Backend Transformation - Dataset Lookup**: This new transformation allows users to query records from other Datasets while loading data. These records can be used for other transformations or simply for uploading them to a new Dataset. It will also work for “Partial Updates” so the record can be completed and transformations can be applied correctly.

* **DR-1947 - Transformations - API Lookup**: API Lookup transformation was enhanced to support a dynamic URL. This means that the URL can change depending on the information of each record.



## Known Issues

* **QV-10089 - Dataset Loading in Safari**: Data page isn't loading immediately in Safari. The site’s frame loads but the content appears with a 10-second delay.

* **AN-10499 - Small Multiple - No Numeric Ranges Are Created**: When a user creates a small multiple using a numeric data type as a multiple column, the numeric ranges are not automatically generated as expected. 

* **AN-10133 - Axis Labels Should Remain Fixed**: When creating a chart, the X-axis labels sometimes do not get displayed by default, so the creator needs to scroll vertically to see the labels or resize the chart panel.

* **AN-9009 - Label Is Not Visible**: For small multiples, the labels of the small charts below are not seen until you scroll down.

* **AN-8189 - Crosstab - Null Values Displayed**: When crosstab charts are created using multiple levels of columns and values and these columns are expanded, cells are shown empty instead of displaying the values that exist in the data.

* **AN-7999 - Calculated Columns in Heatmap - Sorting by Label Issue**: When using 'dateDiff' to create a calculated column and sorting by “label” is applied, the values are sorted by “label” and not by “date” due to an Elasticsearch limitation.

* **AN-8809 - Crosstab Values Using Data Links**: Crosstab with 2 levels of rows and one column is showing values in a field that should not be displaying any values.

* **AN-8296 - Crosstab Grouped Total**: When there are more than 25 max data points shown, the grouped totals are calculated only for the top 25 max data points. 

* **AN-9130 - Chart Dependencies**: Filters applied to deleted charts are not removed from the filter panel component. 

* **AN-6668 - Metrics Time Period - Quarter**: Count and Distinct Count are not working correctly for some field types used in Web Forms such as Signature, Word Expression Multi-selection, and Address.

* **AN-10762 - The continuous date scale is lost when using data links**: When a creator applies continuous date scales on a chart using Data links, the missing data points between the start and end date are not shown.

* **AN-10833 - Table Totals - Chart not available at the moment**: When the user creates a simple table chart and applies totals in a column a message "Chart not available at the moment" appears.

* **AN-10852 - Table Chart - Columns added from shelf overflow are not selected by default**: When a creator adds columns to the shelf overflow, they are not selected by default in the column's dropdown within the added totals layer.

* **AN-10806 - Table chart - Warning missing when a total does not apply**: When a user creates a simple table chart, a warning does not appear when he applies a total to a no numeric column.

* **AN-10853 - Table - Columns added not selected by default**: When a user creates a table chart adding total layers and one of the columns added is removed from the shelf and another column is placed, this last column is not selected by default in the columns drop-down menu.

* **AN-10737 - Clustering - Style issue when hovering disabled data labels**: In dot maps, when the creator unchecks the clustering option and hovers the mouse over the disabled data labels option, a gray icon appears above the checkbox.

* **AN-10845 - Sorting preferences issues**: In a bar or line chart, when a creator applies a sorting by value and then applies a table calculation, the preference of the sorting by the value that was applied manually before the table calculation is not kept. 

* **AN-10896 - Table Totals - Totals disappear**: In a grouped table with totals applied, when the user changes the grouped table to a simple table and the table option is unchecked, the totals disappear.

* **AT-7042 - Sharing - Deleting Dataset Conflict**: When a creator deletes a dataset being used by other creators that are creating charts, the chart builder fails to load.

* **AT-7064 - Sharing - Builders - Page Load removes charts**: When several creators are working on the same application and the page that has tabs is updated, the charts disappear unless the page is published.

* **AT-6385 - Some Token Filters do not apply**: Charts filtered by specific tokens do not apply and show the following message “Chart not available at the moment”.

* **AT-6182 - Page Builder - Global Filters on Blocked Pages**: When a page is deployed through content deployment in Admin Center, any global filter applied to other pages on the recipient’s side will also be applied to the blocked page. It shouldn’t be applied since this page is blocked to be edited by recipients.

* **ADMIN-2936 - Different sessions in the same browser**: The Composer does not indicate a session has started when a creator starts another session with a different account in the same browser, causing an error to appear.

* **ADMIN-2421 - Content Deployment - Data Loading Process Fails**: When a user deploys an application that contains Datasets that use other Datasets as data sources, the multiple layers of connections can make the installation fail because of an interruption of the loading process by the external database service.

* **ADMIN-3081 - Licensing - User Management widget license inactive**: When the admin user deactivates the license, the User Management widget in Admin Center does not appear.

* **ADMIN-3102 - Infrastructure - No status toasts when a process fails**: No status toasts are being shown when a Manual process starts to run and at the same time an Automatic change is being saved and this fails.

* **ADMIN-3110 - Infrastructure - The Automatic changes email information**: The email “A change was made to Automatic Adjustments” is not showing information about the “Number of servers automatically added”.







