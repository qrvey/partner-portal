---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---
<div style={{textAlign: "justify"}}>


* **EX-140 - Wrong Sort Order for CSV Summary**: CSV summary export does not follow the sort order for data.

* **AN-13689 - Repeating Colors in Multi-Series Charts**: Multi-series bar charts use the same color for two series, under certain circumstances.
 
* **DR-2587 - Data Sync Fails With Epoch Date Time Column**: Epoch cannot be used instead of timestamp.

* **AN-13210 - Edit Filter Floating Menu Disappears**: On rare occasions, the floating “edit filter” component does not appear for the chart panels with filters.

* **The New Administrator Role Is Not Functional Yet** - The default Administrator role, added under the new Roles and Permissions feature, has not been turned on yet and users with this role will not be able to access the Admin Center product. The product remains only accessible to users added through the AWS console with proper permissions.

* **QV-13021 - 600+ Columns Indexes Cannot Be Created**: When a user tries to create a dataset from an index that has more than 600 columns, the dataset cannot be successfully created.

* **QV-12765 - Datasource Pill Does Not Update**: If a dataset is created from another Dataset, an Index View, or a CSV connection, the child dataset pill name does not update when the parent dataset name is changed. 

* **ADMIN-3626 - Application Cannot Be Sent if a Dataset Is Deleted**: An admin user cannot install an application after a dataset is deleted from the original application that has a dependency on the deleted dataset.

* **ADMIN-3507 - Applications Cannot Be Sent if a Snapshot Is Running**: An admin user cannot re-deploy to an existing application while a data snapshot is running. The attempt will cause a “connection not found” error.

* **ADMIN-2842 - Two Different Logs Appear In the Activity Log**: After a failed installation two different logs appear in the 'Activity Log' tab, one says it failed and the other says it was successful. 

* **ADMIN-2841 - Received Apps Counter Badge Does Not Appear**: The counter badge in the 'Received Apps' tab is hidden before the user clicks on the tab.
 
</div>