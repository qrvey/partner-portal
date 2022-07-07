---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---
<div style={{textAlign: "justify"}}>

* **DR-3583 - TransformChunk lambda is consuming all lambda concurrency:** Currently the transformChunk lambda does not have reserved concurrency, so it is consuming all the lambdas instance available in big loading with a lot of rows and this causes the rest of the API calls or lambda calls throws throttling errors. 

* **QV-14238 - Datasets - Timeout errors**: When a user tries to reload a list of Datasets from different applications using a script with many requests (around 100), it returns many "time out exceptions".

* **QV-13881 - Deleted Datasets remain visible**: When a user deletes an index on a dataset created previously and tries to create a new dataset from that dataset, the application shows the dataset that was deleted.

* **QV-15609 - Duplicate Dataset With Same IDs**: When a user duplicates a dataset with API using the same ID, the original is deleted and the new one has issues.

* **AN-16151 - Aggregate Formula Values in Charts Cannot Be Filtered**: When using aggregate formulas, charts cannot be filtered. It seems like the order of applying filters and aggregating is wrong. Filters should be applied to the dataset first, then the value in Formula should be aggregated to be used in a Gauge.

* **QV-15746 - LTS - API - Delete Connections, Datasets & Web forms of Deleted Applications**: When an admin user wants to delete an application with its dependencies using an API, the associated connections and datasets will not be deleted.

* **AN-16044 - Small Multiple - Multiple labels - works only with a refresh**: When a user applies small multiples to a chart, the option Multiple labels will not work, it only works when it is forced to render with the borders option.

* **AN-14379 - Data Labels overlapping**: When a pie chart is created and resized or when a lot of data is displayed, the labels of the pie chart overlap.

* **AN-15688 - Geo Map Chart Performance Issue**: Geo map charts are having performance issues when the associated dataset or web form has more than 5M records. 

* **AN-15919 - Tokens in Filters Controls are not Resolved**: Filters created with tokens appear not resolved when hovering over the filter controls.

* **EX-270 - PDF Export - Table Columns Width**: When a user changes the width of a Table column in Page Builder, the downloaded file does not follow the set width in the Page Builder. 

* **CD-1004 - Activity Log Does Not Load Records**: If the browser zoom is set to anything other than 100%, the activity log records do not load when scrolling down.


</div>
