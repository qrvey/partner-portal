---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---


<div style={{textAlign: "justify"}}>
 

* **QV-14238 - Datasets - Time out errors**: When a user is trying to Reload a list of Datasets from different applications using a script with many requests (around 100), it returns many "time out exceptions".

* **QV-13021 - 600+ Column Indexes cannot be created**: When a user tries to create a dataset from an index that has more than 600 columns, the dataset cannot be successfully created.

* **QV-13881 - Deleted Datasets remain visible**: When a user deletes an index on a dataset created previously and tries to create a new dataset from that dataset, the application shows the dataset that was deleted.

* **AN-14379 - Data Labels overlapping**: When a pie chart is created and resized or when a lot of data is displayed, the labels of the pie chart overlap.

* **AN-14860 - Error in Formula when there is no data**: When a user creates a formula with a dataset that has no values, an error appears in the console.

* **EX-270 - PDF Export - Table Columns Width**: When a user changes the width of a Table column in Page Builder, the downloaded file does not follow the set width in the Page Builder.

* **ADMIN-5886 - Unable to Change Elasticsearch Cluster Size**: When a user changes the ES cluster size from Admin center shows that it is processing but the actual cluster does not change. Then, when the user tries to change the cluster again it says another change is already in progress, so it does not let the user change it again.

* **The new Administrator role is not functional yet**: The default Administrator role, added under the new Roles and Permissions feature, has not been turned on yet and users with this role will not be able to access the Admin Center product. The product remains only accessible to users added through the AWS console with proper permissions.



</div>
