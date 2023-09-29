---
id: known-issues
title: Known Issues
sidebar_label: Known Issues

---
<div>

* **DR-4195 - Poor performance of data syncs with more than 5 joins**: When a dataset relies on joining of many data sources running a data sync process can become lengthy. This issue is due to the bulk delete process to remove potential childless parents and can usually be observed in datasets with more than 5 data sources.

* **QV-16259 - Dataset load stopping after adding a lot of joins or unions**: When the dataset becomes very complex it may stop working and data can’t be loaded. This behavior has been observed with 12 joins and 44 unions, however this may depend on other factors, such as the number of columns in the data sources.

* **QV-17894 - Changing of the database connection not reflecting in the existing datasets**: If the user changes a database connection and tries to edit a regular or custom query dataset that’s been created off of that connection they observe that the dataset shows columns based on the previous connection.

* **QV-17835 - Poor error reporting when data sync fails**: When syncnow endpoint failed because of the unsupported character ^ in the data, it correctly returns the lastStatusFailed status, but not sufficient information to diagnose the problem.

* **QV-17607 - Orphaned Filters: Inability to edit a filter when its used column is hidden in the dataset design phase**: If a user removes the checkbox that includes a column in visualizations in the dataset design process, all charts that use the column will correctly fail with a “Missing Column” error. However, if the column has been used in a filter, it will be rendered useless as it no longer shows the column and it is not editable by users.

* **QV-17050 - Wrong tooltip on data source name of shared, unioned datasets**: When a user creates a dataset from shared data and the dataset parent has unions, the column tooltip on similar columns displays as “Data source name: Undefined, undefined”.

* **QV-16053 - The "In Use" tag not working properly for datasets**: The "In Use" flag of Datasets does not reflect their status accurately.

* **QV-14238 - Timeout errors when loading many datasets simultaneously**: When a user tries to reload a list of datasets from different applications using a script with around 100 requests, they may get timeout exceptions.

* **QV-13881 - Deleted datasets listing for creation of other datasets under special circumstances**: When a user deletes an public index of a dataset and tries to create a new dataset from that dataset, the application shows the dataset that was deleted.

* **AN-19723 - Confusing behavior of disabled filters when edited**: When adding a global filter and then disabling and consequently editing it, the list of values refreshes but the value is not found.

* **AN-19628 - Error changing Bar Visualizations in Dashboard View**: Switching between bar and numeric visualization in grouped tables does not work in the Dashboard View widget and it causes a console error to be generated.

* **AN-19497 - Maps - poor error message when column or geo group is removed**: When the user removes the geo group after creating a dot map, the error message is not descriptive.

* **AN-19235 - Dataset Tabular View occasionally no persisting changes**: When the user selects or deselects columns in the Tabular View their changes may get lost.

* **AN-19492 - Filters Panel changes in tabs only affecting the same tab**: In dashboards with more than one tab, disabling filters that have a dashboard scope are only reflected in the current tab.

* **AN-18914 - Multi-series with Dashboard Drill creating wrong filter conditions on the target page**: When a multi-series Chart is drilled and a specific section of the multi-series bar is clicked, the expectation is that only those 3 values (1 Category, 1 Series, 1 Value) will be passed to the next page. Instead, the Filter on the next page is created with an OR (instead of an AND) logic and all Series values from the clicked bar are passed.

* **AN-18922 - Table charts with many conditions on the same dataset column causing an error**: Saving a table chart with many conditions defined for the same dataset column can cause the chart not being saved. The limit is not a fixed number and depends on many other factors, including the number of charts on the dashboards, as well as other properties defined for that same chart. The behavior may be observed with as few as three or as many as 15 conditions.

* **AN-18291 - Wrong grouping of table charts on date columns containing null values**: When a table chart is grouped based on a date column with null values, the grouping works differently depending on the position of the grouped column.

* **AN-17619 - Some programmatically-set style properties are not applied - 1**: Colors set using the themePalette style property are not applied to multi-series charts and maps.

* **AN-17618 -  Some programmatically-set style properties are not applied - 2**: Colors set using the chartsMain style property are not applied to pie charts.

* **AN-15919 - Tokens not resolved in some filter controls**: Some filters created with tokens show the token instead of the resolved token value.

* **AN-15688 - Geo Map Chart Performance Issue**: Geo map charts that are associated with datasets or web forms with more than 5M records are slow to render. 

* **AT-14778 - Dashboard Drill not replacing existing filter value when filter already exists on the target dashboard**: If the target page has a filter applied, some users expect it to be replaced by the incoming filter from a dashboard drill, if it is on the same data column. This is currently not the behavior.

* **AT-14634 - ​​Dashboard Drill from a chart not passing page filters**: When a chart has a Dashboard Drill action with applied filters on the dashboard, the user´s assumption is that all dashboard filters will also be passed to the next page. Right now it only passes the category value from the chart.
 
* **AT-14263 - Simultaneous attempts to unsubscribe from an export not removing all subscriptions**: When multiple users unsubscribe from their subscriptions by clicking on the Unsubscribe link of the email at the same time, some subscriptions are not removed.

* **AT-14197 - Exports failing when an orphan filter is applied**: If an orphan filter is applied to exports in an Automation Flow the user receives an email notifying them that the report could not be exported.

* **AT-12531 - Automatic Column Links added after creating a chart not being applied**: The chart needs to be created after the Automatic Column Link has been created in order for the links to work.

* **AT-12290 - Pages not appearing in the subscriptions dropdowns if not added in the end user navigation menu**: When a user creates and publishes a page without adding the page to the navigation menu, the page and its chart panels don’t appear in the subscription dropdown list.

* **EX-2415 - Excel and CSV Export failing when exporting a lot of columns**: While there is no set limit to the number of columns and the limitation is more related to the data size, there are occasions that can cause an export to fail. 

* **EX-1436 - Lack of support for Unicode characters in PDF exports**: When a user exports data that contains unicode characters, the downloaded file displays squares in place of the characters.

* **EX-270 - PDF exports not honoring set table columns width**: When a user changes the width of columns of a table chart, the downloaded file does not follow the set width in the dashboard.

* **CD-1004 - Activity Log not showing records in zoom factors other than 100%**: If the browser zoom is set to anything other than 100%, the activity log records do not load when scrolling down.


</div>
