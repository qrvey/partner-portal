---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---
<div style={{textAlign: "justify"}}>


* **DR-3583 - TransformChunk lambda is consuming all lambda concurrency**: Currently, the transformChunk lambda does not have reserved concurrency, so it is consuming all of the lambda instances available during a big data load job with a lot of rows and this may cause the rest of the API or lambda calls to throw throttling errors.

* **QV-16309 - Error In Running Append and Update Sync of Unioned Data Every Minute**: The application shows an error message and stops running the sync when a user adds Union and configures Sync with append and updates every minute.

* **QV-16259 - Too Many Unions or Joins - Error: "exceeded the maximum allowed size"**: The endpoint draft is throwing a dynamoDB error when a dataset has a lot of unions.

* **QV-14238 - Datasets - Timeout errors**: When a user tries to reload a list of Datasets from different applications using a script with many requests (around 100), it returns many "time out exceptions".

* **QV-13881 - Deleted Datasets remain visible**: When a user deletes an index on a dataset created previously and tries to create a new dataset from that dataset, the application shows the dataset that was deleted.

* **QV-15746 - LTS - API - Delete Connections, Datasets & Web forms of Deleted Applications**: When an admin user wants to delete an application with its dependencies using an API, the associated connections and datasets will not be deleted.

* **QV-16053 - Datasets - The "In Use" tag is not working properly**: The "In Use" flag of Datasets does not reflect its status accurately.

* **AN-16044 - Small Multiple - Multiple labels - works only with a refresh**: When a user applies small multiples to a chart, the option Multiple labels will not work, it only works when it is forced to render with the borders option.

* **AN-14379 - Data Labels overlapping**: When a pie chart is created and resized or when a lot of data is displayed, the labels of the pie chart overlap.

* **AN-15688 - Geo Map Chart Performance Issue**: Geo map charts are having performance issues when the associated dataset or web form has more than 5M records. 

* **AN-15919 - Tokens in Filters Controls are not Resolved**: Filters created with tokens appear not resolved when hovering over the filter controls.

* **AAN-16780 - Safari: Charts show two tooltips**: Two tooltips are displayed in Safari when hovering over a chart with long, truncated tooltips.

* **AAT-12290 - Pages are not shown in the subscriptions dropdowns if not added in the end user navigation bar**: When a user creates and publishes a page without adding the page to the navigation panel, the page and its chart panels don’t appear in the subscription dropdown list.

* **AAT-12034 - Page Builder - The number of pages is limited to 100**: We are currently limiting the number of pages to display in the PB creator to 100. 

* **EX-270 - PDF Export - Table Columns Width**: When a user changes the width of a Table column in Page Builder, the downloaded file does not follow the set width in the Page Builder. 

* **EX-1436 - Exports - Unicode characters are not supported in the PDF download**: When a user downloads a table that has unicode characters the downloaded file displays squares in place of the characters.

* **CD-1004 - Activity Log Does Not Load Records**: If the browser zoom is set to anything other than 100%, the activity log records do not load when scrolling down.


</div>
