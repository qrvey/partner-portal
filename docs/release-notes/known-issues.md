---
id: known-issues
title: Known Issues
sidebar_label: Known Issues

---
<div>

* **DR-4398 - Data Router Services is not sending a different error code**: Elasticsearch executes a delete / update task every 1 second by default. If a user tries to delete a document or a row 2 times in less than 1 second, then Elasticsearch will throw an 409 error code, but the product changes it to 500.

* **DR-4420 - S3 connector with multiple files is discovering the same column multiple times**: Currently, the S3 connector with multiple files is discovering the same columns multiple times until reaching the max size for an item inside the DynamoDB table.

* **DR-4195 - Poor Performance from Joins**: When there are a lot of sources for a join (> 5), and running a data sync, the bulk deletes to remove potential childless parents can take too much time.

* **QV-17267 - Dataset stops loading after adding more than 12 Joins**: When the user creates a dataset with more than 12 joined datasets, the dataset stops working and data can’t be loaded.

* **QV-17346 - Dataset Load Error With API V4**: When a user uses the API V4 to create and load the Datasets, if he clicks on sync now the application generates an error. 

* **QV-17050 - Dataset - Column tooltip displays wrong information**: When a user creates a Dataset from shared Data and the Dataset parent has unions using sources with some equals columns, the column tooltip displays “Data source name: Undefined, undefined”.

* **QV-16259 - Too Many Unions or Joins - Error: "exceeded the maximum allowed size"**: The endpoint draft is throwing a DynamoDB error when a dataset has a lot of unions.

* **QV-16053 - Datasets - The "In Use" tag is not working properly**: The "In Use" flag of Datasets does not reflect its status accurately.

* **QV-14238 - Datasets - Timeout errors**: When a user tries to reload a list of Datasets from different applications using a script with many requests (around 100), it returns many "time out exceptions".

* **QV-13881 - Deleted Datasets remain visible**: When a user deletes an index on a dataset created previously and tries to create a new dataset from that dataset, the application shows the dataset that was deleted.

* **AN-18914 - Multiseries with Dashboard Drill creates wrong filter on the next page**: When a Multi-series Chart is drilled and a specific section of the Multi-series bar is clicked, the expectation is that only those 3 values (1 Category, 1 Series, 1 Value) will be passed to the next page. Instead, the Filter on the next page is created with an OR (instead of an AND) and all Series values from the clicked bar are passed.

* **AN-18922 - A chart cannot be saved with more than 3 conditions defined on the same dataset column**: If you try to save a Table Chart with more than 3 conditions defined for the same dataset column, the chart will spin indefinitely and will not be saved.

* **AN-18732 - Filter label is displayed incorrectly when deleting dataset**: When a filter is created and then the dataset with which the filter was created is deleted, the label is displayed incorrectly in the filter component.

* **AN-18291 - Wrong groups appear in Table Charts**: Groups in table charts are displaying different results and not matching Max Group settings when the first column contains null values and the order of group columns is changed.

* **AN-17619 - Multiseries/Maps - Theme palette colors are not applied**: With embedded Multi Series bar, Maps, and Box & Whiskers charts, some style settings like the theme palette colors do not apply if changed.

* **AN-17618 - Pie Chart - Main color is not applied**: With embedded Pie Charts, some style settings like the main color do not apply if changed.

* **AN-17275 - Box and Whisker Chart - Allow rotation of labels for both axes**: Currently, labels for one of the axes can be rotated. 

* **AN-15919 - Tokens in Filters Controls are not resolved**: Filters created with tokens show the token instead of the resolved token value in the Dashboard Builder and Dashboard View widgets.

* **AN-15688 - Geo Map Chart Performance Issue**: Geo Map charts are having performance issues when the associated dataset or web form has more than 5M records. 

* **AN-14379 - Data Labels overlapping**: When a pie chart is created and resized or when a lot of data is displayed, the labels of the pie chart overlap.

* **AT-12531 - Automatic Column Links don't work if added after the chart was created**: The chart needs to be created after the Automatic Column Link has been created in order for the links to work.

* **AT-12290 - Pages do not appear in the subscriptions dropdowns if not added in the end user navigation bar**: When a user creates and publishes a page without adding the page to the navigation panel, the page and its chart panels don’t appear in the subscription dropdown list.

* **EX-2054 - Grouped Table Charts Fail to Export CSV and Excel**: If a user exports from the chart panel after publishing a page, an error appears and the file does not download.

* **EX-1436 - Exports - Unicode characters are not supported in the PDF download**: When a user downloads a table that has unicode characters, the downloaded file displays squares in place of the characters.

* **EX-270 - PDF Export - Table Columns Width**: When a user changes the width of a Table column in Dashboard Builder, the downloaded file does not follow the set width in the Dashboard Builder. 

* **CD-4709 - Content Deployment does not work with Syncs**: Users have to disable syncs before running content deployment.

* **CD-1004 - Activity Log Does Not Load Records**: If the browser zoom is set to anything other than 100%, the activity log records do not load when scrolling down.


</div>
