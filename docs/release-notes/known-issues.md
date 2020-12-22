---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---
<div style="text-align: justify">


* **DR-2263 - Datasource Pump Error**: When a user loads a file that does not exist on S3, the loading process finishes but does not report an error.

* **DR-2240 - Transformations Results With Nulls Do Not Match**: When a user creates *Math Transformations* and selects columns with NULL records, the result in the testing tab appears as 0 but when the Dataset is loaded, it appears as NULL.

* **QV-12381 - Transformations - Column Is Not Removed With ‘Update Existing’**: When a user changes the ‘new column’ output to the ‘Update Existing’ output, the previously generated column does not disappear. 

* **QV-12389 - Dataset - List View Responsiveness**: The sorting icons overlap using the List View. 

* **QV-12376 - Dataset - Data Page Remains ‘Loading’**: When a user goes to a dataset and the backend shows a time-out error, the data page remains ‘Loading’ and the red toast with the error message does not appear.

* **QV-12361 - Dataset - The Discard Changes Process Is Not Working**: When a user cancels a loading process and clicks the *Discard Changes* button, the data page does not return to the previous version.

* **QV-12360 - Filters - Size Values Do Not Appear in Image Upload**: When a user applies text or object analysis to an image upload question, and uses “equal” as operator for size filters, the values do not appear.

* **QV-12267 - The Lookup Question Shows Only 100 Records**: When a user creates a webform with a lookup question and the source used has more than 100 records, the end-user side shows only 100 of them. Also, the search only returns results from those 100 records, and not from the entire data.

* **AN-11999 - Filters - Date Time Unchecked Values**: Users cannot create date filters by Weeks, Hours, Min, Sec properties when editing date filters created with "Filter by" or "See Data".

* **AN-11937 - Cities, Addresses and Zip Codes on Choropleth Map**: When a user adds columns of type, city, address or zip code to a choropleth map, they do not display depending on their aggregation nor the ranges shown in the legends.

* **AN-11932 - Min/Max - Some Data Labels Are Cut Within The Panel Container**: When the Min/Max chart is created using several categories (for example, more than 8), the data labels of the last categories get cut within the panel container, regardless of the chart orientation.

* **AN-11717 - Filters - Searches With Decimal Numbers Do Not Match**: If a user creates filters with numbers such as 267.78716 or 84312.135 and then initiates a search, the results do not appear. 

* **AN-11266 - Style Themes Tooltip Not Visible**: When a user hovers over the *Style Themes* icon located in the toolbar of the embedded AN-dashboard widget, the tooltip does not show. 

* **AN-11250 - Condition Does Not Apply**: If a conditional format has been applied to date values in a table chart, and the user collapses the column drop-down and clicks the date column, the date value field won´t reset as text and numeric data types when the same flow is applied.

* **AN-11167 - Conditional Formatting - The Sequence Is Not Kept**: When the user adds layers to a table, they are listed consecutively, however, when removing any layer other than the last one, the enumeration is not as expected.

* **AN-11154 - Custom Date Format - Duplicate Formats**: When a user types duplicate characters as date format, an error state message does not appear. 

* **AN-10919 - Table Totals - The Minimum Total**: When a user creates a grouped table chart, sets totals at a level, and sorts, the minimum is wrong. 

* **AN-10133 - Axis Labels Should Remain Fixed**: When creating a chart, the X-axis labels sometimes do not get displayed by default, needing the creator to scroll vertically to see the labels or resize the chart panel.

* **AN-10852 - Table Chart - Columns Added From Shelf Overflow Are Not Selected by Default**: When a creator adds columns to the shelf overflow, they are not selected by default in the column's dropdown within the added totals layer.

* **AN-10853 - Table - Columns Added Not Selected by Default**: When a user creates a table chart adding total layers and one of the columns added is removed from the shelf and another column is placed, this last column is not selected by default in the columns drop-down menu.

* **AN-10737 - Clustering - Style Issue When Hovering Disabled Data Labels**: When the creator unchecks the clustering option in dot maps and hovers the mouse over the disabled data labels option, a gray icon appears above the checkbox.

* **AN-10845 - Sorting Preferences Issues**: When a creator applies a sorting by value and then applies a table calculation in a bar or line chart, the preference of sorting by the value that was applied manually before the table calculation is not kept. 

* **AN-10896 - Table Totals - Totals Disappear**: When the user changes the grouped table to a simple table in a grouped table with totals applied and the table option is unchecked, the totals disappear.

* **AN-12034 - Chart Panel Filters on Aggregates**: 
It is not possible to apply Filters to aggregated columns from the filters modal accessed outside the Chart Builder or by clicking filter actions applied across the analytic panel.

* **AT-7042 - Sharing - Deleting Dataset Conflict**: When a creator deletes a dataset being used by other creators that are creating charts, the chart builder fails to load.

* **AT-7064 - Sharing - Builders - Page Load Removes Charts**: When several creators are working on the same application and the page with tabs is updated, the charts disappear unless the page has been published.

* **AT-6385 - Some Token Filters Do Not Apply**: Charts filtered by specific tokens do not apply and the message ‘Chart not available at the moment’ appears.

* **AT-6182 - Page Builder - Global Filters on Blocked Pages**: When a page is deployed through content deployment in Admin Center, any global filter applied to other pages on the recipient’s side will also be applied to the blocked page. It shouldn’t be applied since this page is locked for editing by recipients.

* **ADMIN-2936 - Different Sessions in the Same Browser**: The Composer does not indicate that a session has started when a creator starts another session with a different account in the same browser, causing an error to appear.

* **ADMIN-3522 - Roles Table Sorted by Date**: The Roles table in Roles Tab inside User Management Widget is not sorted by date nor is it showing the recent roles on the top.

* **ADMIN-3293 - Responsiveness of the Datasets Columns Width**: When an Admin changes the width size of the window, the responsiveness of the Datasets columns width does not work properly.
