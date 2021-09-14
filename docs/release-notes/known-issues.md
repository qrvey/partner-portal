---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---
<div style={{textAlign: "justify"}}>

* **AT-9759 - Workflow Activity Logs Not Recorded**: Some actions don’t get logged in the workflow activity logs.

* **QV-14238 - Datasets - Time Out Errors**: When a user is trying to Reload a list of Datasets from different applications using a Script with more than 9 requests, it returns many "time out exceptions".

* **QV-12765 - The Datasource Pill is Not Updated**: If a dataset is created from a Dataset, an Index View, or a CSV connection and the parent dataset name is changed, the child dataset pill name is not updated. 

* **QV-13021 - 600+ Columns Indexes Cannot be Created**: When a user tries to create a dataset from an index that has more than 600 columns, the dataset cannot be successfully created.

* **AN-13210 - Edit Filter Floating Menu Disappears**: On rare occasions, the floating “edit filter” component does not appear for the chart panels with filters.

* **AN-14095 - Chart Panel Too Small for Title to be Fully Shown**: When a chart panel is too small, the chart title does not fully show.

* **EX-387 - PDF File Size Limit Email Via Flows**: When a page has many images and objects and the elements weigh more than 10.5 MB. The e-mail is not delivered when the workflow is activated.

* **EX-270 - PDF Export - Table Columns Width**: When a user changes the width of a Table column in Page Builder, the downloaded File shows a different column width. 

* **EX-149 - Grouped Tables - Column Sorting Preferences Are Not Exported**: The column sorting that the user applies in the grouped table is not being exported in the CSV-Summary.

* **ADMIN-3626 - Application Cannot Be Sent If a Dataset Is Deleted**: An admin user cannot install an application after a dataset is deleted from the original application that has a dependency on the deleted dataset.

* **ADMIN-3507 - Applications Cannot Be Sent If a Snapshot is Running**: An admin user cannot re-deploy to an existing application while a data snapshot is running. The attempt will cause a “connection not found” error.

* **The New Administrator Role is Not Functional Yet** - The default Administrator role, added under the new Roles and Permissions feature, has not been turned on yet and users with this role will not be able to access the Admin Center product. The product remains only accessible to users added through the AWS console with proper permissions.

</div>
