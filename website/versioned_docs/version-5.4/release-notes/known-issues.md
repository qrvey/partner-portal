---
id: version-5.4-known-issues
title: Known Issues
sidebar_label: Known Issues
original_id: known-issues
---
<div style="text-align: justify">

* **DR-2587 - Data Sync Fails With Epoch Date Time Column**: When a user creates a Dataset and sets the "Append and Update" Sync using a date-time column in epoch format, the Sync fails and displays an error.

* **AN-13210 - Filter Editor Does Not Appear From the Floating Component**: When a user wants to edit a filter from the floating component, the filter modal does not appear.

* **AN-13133 - Bars Visualization Fails in Tables**: When an End-User edits a table setting a column with bars visualization, the bars do not appear. 

* **The New Administrator Role Is Not Functional Yet** - The default Administrator role, added under the new Roles and Permissions feature, has not been turned on yet and users with this role will not be able to access the Admin Center product. The product remains only accessible to users added through the AWS console with proper permissions.

* **QV-13021 - 600+ Columns Indexes Cannot Be Created**: When a user tries to create a dataset from an index that has more than 600 columns, the dataset cannot be successfully created.

* **QV-12765 - Datasource Pill Does Not Update**: If a dataset is created from another Dataset, an Index View, or a CSV connection, the child dataset pill name does not update when the parent dataset name is changed. 

* **ADMIN-3626 - Application Cannot Be Sent If a Dataset Is Deleted**: An admin user cannot install an application after a dataset is deleted from the original application that has a dependency on the deleted dataset.

* **ADMIN-3507 - Applications Cannot Be Sent If a Snapshot is Running**: An admin user cannot re-deploy to an existing application while a data snapshot is running. The attempt will cause a “connection not found” error.

* **ADMIN-2842 - Two Different Logs Appear in the Activity Log**: After a failed installation two different logs appear in the 'Activity Log' tab, one says it failed and the other says it was successful. 

* **ADMIN-2841 - Received Apps Counter Badge Does Not Appear**: The counter badge in the 'Received Apps' tab is hidden before the user clicks on the tab.
 
