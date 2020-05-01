---
id: version-5.0-release-last
title: Qrvey Version 5.0
sidebar_label: March 2020
original_id: release-last
---
<div style="text-align: justify">
Release Date: 2020-03-31

## New Features

### Data Preparation 
* **QV-9804 - Dataset Creation**: We made substantial changes in the data creation and preparation flow. Datasets can now be created using the same data connections we supported before — MySQL, SQL Server, PostgreSQL and Oracle — and in addition users will be able to create datasets from existing datasets that have been created through our APIs or directly in Qrvey Composer. 

* **QV-9804 - Data Joins**: We added the ability to create datasets from joined data. This means that during the creation process, creators can begin with a single data source and start joining data from different data sources. We are supporting Left, Full, Inner, Right joins and the ability to select multiple columns for the join definition. Creators will be able to see all of the joined columns in the “Join Output” section. 


* **QV-9700 - View Data**: After setting up connections, creators can see a view of the data to know if the data source they selected has the correct set of data. For Database Connections, a database and table are needed in order to have the view of the data. In addition, while creating and configuring the dataset the same view is available for each data source added. 

### Analytics

* **CB - 360 - Chart Builder**: We are introducing the new chart builder widget which continues to support Bar, Line, Symbol, Pie charts as well as Heatmap, Crosstab, Table, Maps visualizations, Heatmaps, and Wordclouds. In this new chart builder, creators can build and explore visualizations to obtain insights in an easier and more flexible way through the use of the canvas and the column shelf. Creators can easily switch from one visualization to another and work with a range of settings offered for each type of visualization. Filters can be added directly from the creation process and will be retained in all instances of the chart.  


## **Other Enhancements**
* **ADMIN- 2140 - Feature Customization for Page Builder**: Admins are now able to control displaying sections and features like User Management, adding users and creating groups. 

* **AN- 8989 - System Messages**: We improved the error and system messages for charts when handling dependencies such as deleting data links, buckets and formulas so that users can see the issue when a chart is not displayed. 

## **General Tweaks and Bug Fixes**

* **ADMIN-1928 - Content Deployment - Share Spreadsheets**: We are not currently supporting the sharing of CSVs data in application sharing. 

* **AN-8689 - CrossTab - Totals in Groups per Week are Incorrect**: The total for the last group (week) is wrong when the user creates a crosstab and the user sets, as the first level of a row, a date field, then the user makes a Date grouping with Quarter, and as the second level of rows the user sets a formula.

* **AT - 5863 - Builders - Datasets not Listed**: Datasets for filters are not listed when a chart, which is on the same page tab, is deleted.

* **AT - 5803 - Page Builder - Filters not Duplicated when Duplicating Pages**: When a page is duplicated, the filters of  Tabs, Pages, and Panels are not duplicated.

### **Known Issues**
* **QV-10327 -Datasets/Connections - Cards are not shown using Edge**: Using Microsoft Edge 42.17134.1.0, the Dataset and Connection cards are not displayed in these sections. 

* **QV-10182 - Datasets - View Data**: The column headers are shown with an extra ID which is the name of the columns when they get saved to Elasticsearch. 

* **QV-10238 - Datasets - Column Name**: When the name is changed in the data source, it is not updated in the Join Data modal. 

* **QV-10089 - Dataset Loading in Safari**: Data page isn't loading immediately in Safari. The site’s frame loads but the content has a 10-second delay. 

* **QV-10267 - Datasets - Column Order**: The order in which columns are displayed is different from the Columns tab to the View tab in Datasets.  

* **QV-10320 - Last Updated - Sort Applications and Datasets**: These are not being sorted by the most recently updated in the Applications section or inside applications in the Dataset section. 

* **AN-7999 - Calculated Columns in Heatmap - Sorting by Label Issue**: When using 'dateDiff' to create a calculated column and sorting by label is applied, the values are sorted as a label and not as a date due to an Elasticsearch limitation. 

* **AN-8809 - Crosstab Values Using Data Links**: Crosstab with 2 levels of rows and one column is showing values in a field that should not be displaying any values.

* **AN-8296 - Crosstab Grouped Total****: When there are more than 25 max data points shown, the grouped totals are calculated only for the top 25 max data points. 

* **AN-6668 - Metrics Time Period - Quarter**: Count and Distinct Count are not working correctly for some field types used in Web Forms such as Signature, Word Expression Multiselection, and Address.

* **AN-8189 - Crosstab - Null Values Displayed**: When crosstab charts are created using multiple levels of columns and values and these columns are expanded, cells are shown empty instead of displaying the values that exist in the data.

* **AN-9130 - Chart Dependencies**: Filters applied to deleted charts are not removed from the filter panel component.

* **AN-9121 - Reference Lines For Negative Values**: When a SUM reference line is added to a chart with negative values, the reference line is not displayed.

* **AT-6023 - Flows - Searching Dates in Get Data**: For connections used in the Get Data action, the search with dates is not working. 

* **AT-5760 - Conditions Using Quarter, Month, Days Are Not Working**: Flows are not being executed if one of these time frames is used in a condition and the condition is met. This is being fixed. 

* **AT-6056 - Flows - Post Data**: Records are not being inserted using an Oracle connection.

* **DR-1168 - Transformations - Columns Edition in Transformation**: When a column is edited or deleted in the “columns section”, it does not change in the transformation previously created.
