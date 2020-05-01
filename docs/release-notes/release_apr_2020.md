---
id: release-last
title: Qrvey Version 5.1
sidebar_label: April 2020
---
<div style="text-align: justify">
Release Date: 2020-04-30

## New Features

### Data Preparation 
*  <a href="/docs/ui-docs/datasets/datasets/#creating-datasets"> <strong>QV-9804 - Dataset Creation:</strong></a> We made substantial changes in the data creation and preparation flow. Datasets can now be created using the same data connections we supported before — MySQL, SQL Server, PostgreSQL and Oracle — and in addition users will be able to create datasets from existing datasets that have been created through our APIs or directly in Qrvey Composer. 
 
* <a href="/docs/ui-docs/datasets/joins/"> <strong>QV-9804 - Data Joins: </strong></a> We added the ability to create datasets from joined data. This means that during the creation process, creators can begin with a single data source and start joining data from different data sources. We support Left, Full, Inner, Right joins and the ability to select multiple columns for the join definition. Creators will be able to see all of the joined columns in the “Join Output” section 

* <a href="/docs/ui-docs/datasets/datasets/"> <strong>QV-9700 - View Data: </strong></a> After setting up connections, creators can see a view of the data to know if the data source they selected has the correct set of data. For Database Connections, a database and table are needed in order to have the view of the data. In addition, while creating and configuring the dataset the same view is available for each data source added. 

* <a href="/docs/ui-docs/datasets/datasets/"> <strong>QV-9924 - Data Synchronization - Single Source - Full Reload: </strong></a>We added a feature that allows users to configure and schedule the reload of their data. For this version, we will only support the syncing of data when there is only one single data source in a dataset. This will work for database data sources only.

* <a href="/docs/ui-docs/datasets/datasets/"> <strong>QV-10282 - Dataset - Activity Log: </strong></a> We added an Activity Log tab inside of each dataset enabling the creators to see the events related to the dataset. The creators will be able to see a list of basic successful events and the details of failed events for data load and data sync processes.


### Analytics
* <a href="/docs/ui-docs/dataviews/chart-builder/"> <strong>CB-360 - Chart Builder:</strong></a> We are introducing the new chart builder widget which continues to support Bar, Line, Symbol, Pie charts as well as Heatmap, Crosstab, Table, Maps visualizations, Heatmaps, and WordClouds. In this new chart builder, creators can build and explore visualizations to obtain insights in an easier and more flexible way through the use of the canvas and the column shelf. Creators can easily switch from one visualization to another and work with a range of settings offered for each type of visualization. Filters can be added directly from the creation process and will be retained in all instances of the chart.  

* **AN-5892 - Chart Builder - Complex Data**: We added new visualization options for more complex data types in chart builder. This includes making additional column values available to our standard charts. The Creator will be able to create a chart that contains complex data such as entities, keywords, file types, address,  and other data parts as the Category/Label, Value, Pivot, or Groups of a chart. Documentation needed for Complex Data.


* <a href="/docs/ui-docs/dataviews/formulas/"> <strong>AN-6439 - Formulas - Calculated Columns in Summary View:</strong></a> We added the feature to display formula columns that the user had created as summary panels in the summary view.

## Automation

* **T-5773 - Lock Baseline Dashboard - Page Builder:** We added an option that allows Admins to lock the content of their applications when deploying, so recipients cannot modify anything. This is done to avoid overwriting changes on the recipient side if updated content is deployed to the application again. Recipients will be able to duplicate the content in order to edit. This first version supports the locking of pages. 

* <a href="/docs/ui-docs/builders/pages/"> <strong>AT-5772 - Discard Changes:</strong></a>
 We implemented the new feature “Discard Changes” in Page Builder that gives the creator the possibility to discard all changes made to the latest published version of an individual page but not the entire application.

## **Other Enhancements**
* **ADMIN-2141 - Content Deployment - Share Datasets**: We created a new set of Content Deployment APIs that work with the new Dataset model and with Data Joins. 


* <a href="/docs/ui-docs/builders/user-management/"> <strong>ADMIN- 2140 - Feature Customization for Page Builder:</strong></a> Admins are now able to control displaying sections and features like User Management, adding users and creating groups. 

* **AN- 8989 - Analytics System Messages**: We improved the error and system messages for charts when handling dependencies such as deleting data links, buckets and formulas so that users can see the issue when a chart is not displayed. 

* <a href="/docs/ui-docs/datasets/datasets/"> <strong>QV-10209 - Datasets - Create New Connection:</strong></a> We improved the dataset creation process by allowing  creators to generate connections during the process of creating datasets without having to go back to the connections section. 


* **AT-6014 - Improve Data Flow From Builders**: We improved the user experience by adding new shortcuts to builders in order to give creators direct access to the dataset creation section. There are cases when a creator goes to the report/page/chart builders or to Automation without having any datasets created. An empty state message will appear in the data panel with a link to the data section.


* **AN-9146 - Chart Builder - Heatmap Y-Axis**: After implementing the first version of the new Chart Builder with Heatmap, we added Y-Axis options to let the creator customize the value rotation to horizontal, diagonal, and vertical.
 

## **General Tweaks and Bug Fixes**

* **ADMIN-1928 - Content Deployment - Share Spreadsheets**: We weren't supporting the sharing of CSVs data in application sharing, this is now supported. 
 
* **AN-8689 - CrossTab - Totals in Groups per Week are Incorrect**: The total for the last group (week) was wrong when grouping by quarters and using a calculated column. This has been fixed.
 
* **AT - 5863 - Builders - Datasets not Listed**: Datasets for filters were not listed when deleting a chart which was on a different tab. This has been fixed.
 
* **AT - 5803 - Page Builder - Filters not Duplicated when Duplicating Pages**: When a page is duplicated, the filters of Tabs, Pages, and Panels were not duplicated. Filters are now included when duplicating a page. 

* **AT-5767 - Conditions with Timeframes**: In Flows, conditions by quarter, month, and days did not execute correctly. This was fixed and now any creator can execute this timeframe condition in Flows effectively.

### **Known Issues**
 * **QV-10559 - Dataset Resizing Splitter**: The resizing is failing on some occasions. 
* **QV-10514 - When Reloading Data, Edits Cause Error**: When there is a sync and reloading process happening, changes applied to the syncing options will cause an error. 
* **QV-10543 - Summary View Shows 0 Records when Reloading**: When a dataset being used to create another dataset is reloaded, the child dataset shows 0 records for the duration of the reload process of the parent dataset. 
* **QV-10327 - Datasets/Connections - Cards are not shown using Edge**: Using Microsoft Edge 42.17134.1.0, the Dataset and Connection cards are not displayed in these sections. This Edge version is deprecated. We recommend updating to the last Edge version.
* **QV-10518 - Discard Changes**: The settings applied to Data Sync are not removed with the option “Discard Changes”
* **QV-10089 - Dataset Loading in Safari**: Data page isn't loading immediately in Safari. The site’s frame loads but the content appears with a 10-second delay. 
* **QV-10422 - Connections List Error 900+**:  When there are more than 900 connections there is an overlapping error in the Select Data Source modal. 
* **AN-7999 - Calculated Columns in Heatmap - Sorting by Label Issue**: When using 'dateDiff' to create a calculated column and sorting by label is applied, the values are sorted by label and not by date due to an Elasticsearch limitation. 
* **AN-8809 - Crosstab Values Using Data Links**: Crosstab with 2 levels of rows and one column is showing values in a field that should not be displaying any values.
* **AN-8296 - Crosstab Grouped Total**: When there are more than 25 max data points shown, the grouped totals are calculated only for the top 25 max data points. 
* **AN-6668 - Metrics Time Period - Quarter**: Count and Distinct Count are not working correctly for some field types used in Web Forms such as Signature, Word Expression Multiselection, and Address.
* **AN-8189 - Crosstab - Null Values Displayed**: When crosstab charts are created using multiple levels of columns and values and these columns are expanded, cells are shown empty instead of displaying the values that exist in the data.
* **AN-9130 - Chart Dependencies**: Filters applied to deleted charts are not removed from the filter panel component. 
* **AN-9121 - Reference Lines For Negative Values**: When a SUM reference line is added to a chart with negative values, the reference line is not displayed.
* **AN-9574 - Complex Data - Dot Map Error**: When creating a dot map using complex data types as an address the map is not drawn. 
* **AT-6023 - Flows - Searching Dates in Get Data**: For connections used in the Get Data action, the search by date is not working. 
* **AT-6056 - Flows - Post Data**: Records are not being inserted using an Oracle connection.
* **AT-6214 - Insert Record for Joined Datasets**: Records are not being inserted into datasets that are created from joined data.
* **AT-6182 - Page Builder - Global Filters on Blocked Pages**: When a page is deployed through content deployment in Admin Center, on the recipient side any global filter applied on other pages will also be applied on the blocked page. It shouldn’t be applied since this page is blocked to be edited by recipients. 
* **DR-1168 - Transformations - Columns Edition in Transformation**: When a column is edited or deleted in the “columns section”, it does not change in the transformation previously created.
