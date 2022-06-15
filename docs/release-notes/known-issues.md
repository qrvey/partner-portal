---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---
<div style={{textAlign: "justify"}}>

* <strong>QV-14238 - Datasets - Timeout errors</strong>: When a user tries to reload a list of Datasets from different applications using a script with many requests (around 100), it returns many "time out exceptions".

* <strong>QV-13881 - Deleted Datasets remain visible</strong>: When a user deletes an index on a dataset created previously and tries to create a new dataset from that dataset, the application shows the dataset that was deleted.

* <strong>QV-15609 - Duplicate Dataset with same IDs</strong>: When a user duplicates a dataset with API using the same ID, the original is deleted and the new one has issues.

* <strong>AN-16272 - Geolocation by Country affects States with the same name</strong>: When a user filters out a country like Georgia, the US state Georgia is getting filtered out as well.

* <strong>AN-16151 - Aggregate Formula Values in Charts cannot be filtered</strong>: When using aggregate formulas, charts cannot be filtered. It seems like the order of applying filters and aggregating is wrong. Filters should be applied to the dataset first, then the value in Formula should be aggregated to be used in a Gauge.

* <strong>AN-16150 - Integer Division is applied when integers are used in Formula</strong>: When a user applies a division formula with both integers, the column format is not being used for the result. 

* <strong>QV-15746 - LTS - API - Delete Connections, Datasets & Web forms of Deleted Applications</strong>: When an admin user wants to delete an application with its dependencies using an API, the associated connections and datasets will not be deleted.

* <strong>AT-11451 - Go to URL action that has a numeric data token replaces wrong the value</strong>: When a creator user sets a go-to page action with a numeric data type column, once the end user clicks in the datapoint, the first time the value is replaced by null and the second time always is replaced for the same random value.

* <strong>AT-11448 - Date picker - After selecting a value, the placeholder must be shown along with the value as a label</strong>: When working with a Date Picker Filter Control, the default functionality shows the default Label value as a placeholder. Once a selection is made, the label is overwritten with the selection. If a custom label is used, once a selection is made the Label is retained in the Date Picker Filter Control, pushing the selected value over to the right.

* <strong>AN-16044 - Small Multiple - Multiple labels - works only with a refresh</strong>: When a user applies small multiples to a chart, the option Multiple labels will not work, it only works when it is forced to render with the borders option.

* <strong>AN-14379 - Data Labels overlapping</strong>: When a pie chart is created and resized or when a lot of data is displayed, the labels of the pie chart overlap.

* <strong>AN-14860 - Error in Formula when there is no data</strong>: When a user creates a formula with a dataset that has no values, an error appears in the console.

* <strong>AN-15688 - Geo Map Chart performance issue</strong>: Geo map charts are having performance issues when the associated dataset or web form has more than 5M records. 

* <strong>AN-15919 - Tokens in Filters Controls are not resolved</strong>: Filters created with tokens appear not resolved when hovering over the filter controls.

* <strong>EX-270 - PDF Export - Table Columns Width</strong>: When a user changes the width of a Table column in Page Builder, the downloaded file does not follow the set width in the Page Builder. 

* <strong>CD-1004 - Activity Log does not load records</strong>: If the browser zoom is set to anything other than 100%, the activity log records do not load when scrolling down.

* <strong>CD-1124 - InstalledComponents field is not correctly updated</strong>: In order to identify if any job was done, an admin user automates a script to review the “installedComponents” field by comparing it with the “totalComponents” field, but sometimes the “installedComponents” field is not updated with the total number of the installed components.

* <strong>ADMIN-5886 - Unable to Change Elasticsearch Cluster Size</strong>: The function to change the ES cluster size from the Admin center does not work properly.



</div>
