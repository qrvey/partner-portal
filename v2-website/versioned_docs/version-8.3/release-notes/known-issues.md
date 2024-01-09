---
id: known-issues
title: Known Issues
sidebar_label: Known Issues

---
<div>

* **DR-4793 - "Response Error" from putchunktoES lambda**: If the Opensearch cluster instance type is `t3.small.search` or `t3.medium.search` and a  loading runs with more than 1M rows, the putchunktoes lambda throws an error message.

* **QV-18209 - Sync Now button tooltip disabled**: When the Sync option is ON, but the Sync Type is not configured, the **Sync Now** button is disabled as expected. However, hovering over the **Sync Now** button displays a tooltip with an incorrect message.

* **QV-16259 - Dataset load stopping after adding a lot of joins or unions**: When the dataset becomes very complex, it may stop working and data cannot be loaded. This behavior has been observed with 12 joins and 44 unions, however, it may depend on other factors, such as the number of columns in the data sources.

* **QV-17894 - Changing of the database connection not reflecting in the existing datasets**: If the user changes a database connection and tries to edit a regular or custom query dataset that’s been created off of that connection, they observe that the dataset shows columns based on the previous connection.

* **QV-17835 - Poor error reporting when data sync fails**: When the `syncnow` endpoint fails because of the unsupported character `^` in the data, it correctly returns the lastStatusFailed status, but not sufficient information to diagnose the problem.

* **QV-17607 - Orphaned Filters : Inability to edit a filter when its used column is hidden in the dataset design phase**: If a user removes the checkbox that includes a column in visualizations in the dataset design process, all charts that use the column will correctly fail with a “Missing Column” error. However, if the column has been used in a filter, it will be rendered useless as it no longer shows the column and it is not editable by users.

* **QV-17050 - Wrong tooltip on data source name of shared, unioned datasets**: When a user creates a dataset from shared data and the dataset parent has unions, the column tooltip on similar columns displays as “Data source name: Undefined, undefined”.

* **QV-14238 - Timeout errors when loading many datasets simultaneously**: When a user tries to reload a list of datasets from different applications using a script with around 100 requests, they may get timeout exceptions.

* **QV-13881 - Deleted datasets listing for creation of other datasets under special circumstances**: When a user deletes an public index of a dataset and tries to create a new dataset from that dataset, the application shows the dataset that was deleted.

* **AN-20418 - Simple, Grouped Table: disabling Sorting under General**: When creating simple tables, the Menu Actions moves the table up, leaving a gap at the bottom.

* **AN-20647 - Multiseries Cluster Bar default width is too wide**: Clustered multiseries bar chart displays tick mark labels at the wrong clusters.

* **AN-20834 - Relative date not updating when changing operator**: When the user edits a relative date filter and changes to the other operator, the filter endpoint is not updated and the filter does not display in the filter list. 

* **AN-20934 - Embed Button Visible on AN panel**: When the user embeds the AN panel, the **Embed Analyze view** button is visible.

* **AN-20979 - Download error**: When a user displays the Summary panel and then downloads a JPG in the Summary and resizes the page, the download fails and a console error appears.

* **AN-20227 - Browser throws "Aw Snap" error when running out of memory**: When a user has more than 30 charts in any of the Analyze widgets and scrolls down, the browser displays an error message.

* **AN-19723 - Confusing behavior of disabled filters when edited**: When adding a global filter and then disabling and consequently editing it, the list of values refreshes but the value is not found.

* **AN-19497 - Maps - poor error message when column or geo group is removed**: When the user removes the Geo group after creating a dot map, the error message is not descriptive.

* **AN-19235 - Dataset Tabular View occasionally no persisting changes**: When the user selects or deselects columns in the Tabular View, their changes may be lost.

* **AN-19492 - Filters Panel changes in tabs only affecting the same tab**: In dashboards with more than one tab, disabling filters that have a dashboard scope are only reflected in the current tab.

* **AN-18914 - Multi-series with Dashboard Drill creating wrong filter conditions on the target page**: When the user drills down a multi-series Chart and clicks a specific section of the multi-series bar, the expectation is that only those 3 values (1 Category, 1 Series, 1 Value) will be passed to the next page. Instead, the Filter on the next page is created with an OR (instead of an AND) logic and all Series values from the clicked bar are passed.

* **AN-18291 - Wrong grouping of table charts on date columns containing null values**: When a table chart is grouped based on a date column with null values, the grouping works differently depending on the position of the grouped column.

* **AN-17619 - Some programmatically-set style properties are not applied - 1**: Colors set using the `themePalette` style property are not applied to multi-series charts and maps.

* **AN-17618 -  Some programmatically-set style properties are not applied - 2**: Colors set using the `chartsMain` style property are not applied to pie charts.

* **AN-15919 - Tokens not resolved in some filter controls**: Some filters created with tokens show the token instead of the resolved token value.

* **AN-15688 - Geo Map Chart Performance Issue**: Geo map charts that are associated with datasets or web forms with more than 5M records are slow to render. 

* **AT-15411 - Dashboard email download with no filters applied**: Dashboard exports are downloaded with charts without filters.

* **AT-15422 - Subscriptions not executing on correct date**: When the user's timezone needs to be a UTC+ time zone (for example, UTC+2) the execution time on the first of the month needs to be earlier than the time difference from users timezone to UTC (for example, for UTC+2 user timezone, scheduling for any time midnight to 1:59 AM will experience the issue.) When the next execution time is calculated, it takes the current UTC date, which will be the last day of the current month causing some schedules to be incorrect (for example, a run on Feb 28 UTC will cause the next execution to run on Mar 28).

* **AT-15444 - Subscriptions - Incorrect Recipient**: The ZIP file of separate export requests can have the same filename, causing them to be overwritten and exposing data to the incorrect recipients.

* **AT-14778 - Dashboard Drill not replacing existing filter value when filter already exists on the target dashboard**: If the target page has a filter applied, users may expect it to be replaced by the incoming filter from a dashboard drill, if it is on the same data column. This is currently not the behavior.

* **AT-14634 - ​​Dashboard Drill from a chart not passing page filters**: When a chart has a Dashboard Drill action with applied filters on the dashboard, users may expect that all dashboard filters will also be passed to the next page. Currently, it only passes the category value from the chart.
 
* **AT-14263 - Simultaneous attempts to unsubscribe from an export not removing all subscriptions**: When multiple users unsubscribe from their subscriptions by clicking on the **Unsubscribe** link of the email at the same time, some subscriptions are not removed.

* **AT-14197 - Exports failing when an orphan filter is applied**: If an orphan filter is applied to exports in an Automation Flow, the user receives an email notification that the report could not be exported.

* **AT-12531 - Automatic Column Links added after creating a chart not being applied**: The chart needs to be created after the Automatic Column Link has been created in order for the links to work.

* **EX-1436 - Lack of support for Unicode characters in PDF exports**: When a user exports data that contains unicode characters, the downloaded file displays squares in place of the characters.

* **EX-270 - PDF exports not honoring set table columns width**: When a user changes the width of columns of a table chart, the downloaded file does not follow the set width in the dashboard.

* **CD-1004 - Activity Log not showing records in zoom factors other than 100%**: If the browser zoom is set to anything other than 100%, the activity log records do not load when scrolling down.

</div>
