---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---
<div style="text-align: justify">


* **AN-10133 - Axis Labels Should Remain Fixed**: When creating a chart, the X-axis labels sometimes do not get displayed by default, so the creator needs to scroll vertically to see the labels or resize the chart panel.

* **AN-9009 - Label Is Not Visible**: For small multiples, the labels of the small charts below are not seen until you scroll down.

* **AN-8189 - Crosstab - Null Values Displayed**: When crosstab charts are created using multiple levels of columns and values and these columns are expanded, cells are shown empty instead of displaying the values that exist in the data.

* **AN-7999 - Calculated Columns in Heatmap - Sorting by Label Issue**: When using 'dateDiff' to create a calculated column and sorting by “label” is applied, the values are sorted by “label” and not by “date” due to an Elasticsearch limitation. 

* **AN-8809 - Crosstab Values Using Data Links**: Crosstab with 2 levels of rows and one column is showing values in a field that should not be displaying any values.

* **AN-8296 - Crosstab Grouped Total**: When there are more than 25 max data points shown, the grouped totals are calculated only for the top 25 max data points. 

* **AN-9130 - Chart Dependencies**: Filters applied to deleted charts are not removed from the filter panel component. 

* **AN-6668 - Metrics Time Period - Quarter**: Count and Distinct Count are not working correctly for some field types used in Web Forms such as Signature, Word Expression Multi-selection, and Address.

* **AN-10762 - Data Links - The continuous date scale is lost when using data links**: When a creator applies continuous date scales on a chart using Data links, the missing data points between the start and end date are not shown.

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

