---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---
<div style={{textAlign: "justify"}}>
 
* <strong>DR-3389 - Parsing from quoted column name with numeric datatype fails</strong>: Uploading a CSV file that contains quoted text in a column name, and setting the column to numeric causes an error in the loading process.

* <strong>QV-14238 - Datasets - Timeout errors</strong>: When a user tries to reload a list of Datasets from different applications using a script with many requests (around 100), it returns many "time out exceptions".

* <strong>QV-13881 - Deleted Datasets remain visible</strong>: When a user deletes an index on a dataset created previously and tries to create a new dataset from that dataset, the application shows the dataset that was deleted.

* <strong>QV-15609 - Duplicate Dataset with same IDs</strong>: When a user duplicates a dataset with API using the same ID, the original is deleted and the new one has issues.

* <strong>AN-14379 - Data Labels overlapping</strong>: When a pie chart is created and resized or when a lot of data is displayed, the labels of the pie chart overlap.

* <strong>AN-14860 - Error in Formula when there is no data</strong>: When a user creates a formula with a dataset that has no values, an error appears in the console.

* <strong>AN-15659 - Some Analytic Endpoints ignore regular Filters under special circumstances</strong>: If the developer passes the wrong columnId for a filter, the filter value is ignored and all data is returned. This issue does not pose a security risk, as it doesn’t apply to RLS filters. The list of the affected endpoints is available upon request.  

* <strong>AN-15688 - Geo Map Chart performance issue</strong>: Geo map charts are having performance issues when the associated dataset or web form has more than 5M records. 

* <strong>AN-15912 - Chart Builder Filter is not applied to the Drill-Down Chart</strong>: When a user filters from the chart builder, the drill-down chart does not show the filtered data.

* <strong>AN-15919 - Tokens in Filters Controls are not resolved</strong>: Filters created with tokens appear not resolved when hovering over the filter controls.

* <strong>AT-11306 - UpdatePage Endpoint is not working correctly</strong>: When a user sets “false” on a “published” page with “Update” endpoint, it is set to “true” in response to the “Get Published Pages” endpoint.

* <strong>EX-270 - PDF Export - Table Columns Width</strong>: When a user changes the width of a Table column in Page Builder, the downloaded file does not follow the set width in the Page Builder. 

* <strong>CD-1004 - Activity Log does not load records</strong>: If the browser zoom is set to anything other than 100%, the activity log records do not load when scrolling down.

* <strong>CD-1124 - InstalledComponents Field is not correctly updated</strong>: In order to identify if any job was done, an admin user automates a script to review the “installedComponents” field by comparing it with the “totalComponents” field, but sometimes the “installedComponents” field is not updated with the total number of the installed components.

* <strong>ADMIN-5886 - Unable to change Elasticsearch Cluster size</strong>: The function to change the ES cluster size from the Admin center does not work properly.



</div>
