---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---
<div style={{textAlign: "justify"}}>

* **QV-14238 - Datasets - Time out errors**: When a user is trying to Reload a list of Datasets from different applications using a Script with more than 9 requests, it returns many "time out exceptions".

* **QV-12765 - The Datasource Pill is not updated**: If a dataset is created from a Dataset, an Index View, or a CSV connection and the parent dataset name is changed, the child dataset pill name is not updated. 

* **QV-13021 - 600+ Column Indexes cannot be created**: When a user tries to create a dataset from an index that has more than 600 columns, the dataset cannot be successfully created.

* **QV-13881 - Deleted datasets remain visible**: When a user deletes an index on a dataset created previously and tries to create a new dataset from that dataset, the application shows the dataset that was deleted.

* **AN-14379 - Data Labels overlapping**: When a pie chart is created and resized or when a lot of data is displayed, the labels of the pie chart overlap.

* **AT-10081 - Unsubscription issue**: Email tags of unsubscribed users don’t get removed from the UI (although they are unsubscribed).

* **AT-10082 - Resubscription issue**: User cannot resubscribe to the email after unsubscribing.

* **AT-9983 - Emails without the Unsubscribe message**: If an email is sent using the Qrvey mailing service when the mail does not have a signature or a customized template, the unsubscribe message is not included.

* **EX-387 - PDF File size limit email via flows**: When a page has many images and objects and the elements weigh more than 10.5 MB the email is not delivered when the workflow is activated.

* **EX-270 - PDF Export - Table Columns Width**: When a user changes the width of a Table column in Page Builder, the downloaded file does not follow the set width in the Page Builder. 

* **EX-149 - Grouped Tables - Column Sorting Preferences are not exported**: The column sorting that the end user applies in the grouped table is not being exported in the CSV-Summary. 

* **ADMIN-3626 - Application cannot be sent if a Dataset is deleted**: An admin user cannot install an application after a dataset is deleted from the original application that has a dependency on the deleted dataset.

* **ADMIN-3507 - Applications cannot be sent if a snapshot is running**: An admin user cannot re-deploy to an existing application while a data snapshot is running. The attempt will cause a “connection not found” error.

* **The new Administrator role is not functional yet** - The default Administrator role, added under the new Roles and Permissions feature, has not been turned on yet and users with this role will not be able to access the Admin Center product. The product remains only accessible to users added through the AWS console with proper permissions.

</div>
