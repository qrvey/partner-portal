---
id: version-5.4-known-issues
title: Known Issues
sidebar_label: Known Issues
original_id: known-issues
---
<div style="text-align: justify">

 
* **QV-13102 - Datasets Stuck in Loading Status**: In certain cases when multiple large datasets are loaded simultaneously and one of them times out, this can cause the dataset status to be shown as Loading indefinitely. Contact support to have the status reset manually while the issue is being worked on. 

* **QV-13021 - 600+ Columns Indexes Cannot Be Created**: When a user tries to create a dataset from an index that has more than 600 columns, the dataset cannot be successfully created.

* **QV-12765 - Datasource Pill Does Not Update**: If a dataset is created from another Dataset, an Index View, or a CSV connection, the child dataset pill name does not update when the parent dataset name is changed. 

* **ADMIN-3626 - Application Cannot Be Sent If a Dataset Is Deleted**: An admin user cannot install an application after a dataset is deleted from the original application that has a dependency on the deleted dataset.

* **ADMIN-3507 - Applications Cannot Be Sent If a Snapshot is Running**: An admin user cannot re-deploy to an existing application while a data snapshot is running. The attempt will cause a “connection not found” error.

* **ADMIN-2842 - Two different Logs Appear in the Activity Log**: After a failed installation two different logs appear in the 'Activity Log' tab, one says it failed and the other says it was successful. 

* **ADMIN-2841 - Received Apps Counter Badge Does Not Appear**: The counter badge in the 'Received Apps' tab is hidden before the user clicks on the tab.
