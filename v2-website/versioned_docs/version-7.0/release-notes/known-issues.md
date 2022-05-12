---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---
<div style={{textAlign: "justify"}}>
 

* **QV-14238 - Datasets - Time out errors**: When a user is trying to **Reload** a list of Datasets from different applications using a script with many requests (around 100), it returns many "time out exceptions".

* **QV-13881 - Deleted Datasets remain visible**: When a user deletes an index on a previously created dataset and tries to create a new dataset from that dataset, the application shows the dataset that was deleted.

* **AN-14379 - Data Labels overlapping**: When a pie chart is created and resized or when a lot of data is displayed, the labels of the pie chart overlap.

* **AN-14860 - Error in Formula when there is no data**: When a user creates a formula with a dataset that has no values, an error appears in the console.

* **AN-15659 - Some Analytic Endpoints ignore regular filters under special circumstances**: If the developer passes the wrong *columnId* for a filter, the filter value is ignored and all data is returned. This issue does not pose a security risk, as it doesn’t apply to RLS filters. The list of the affected endpoints is available upon request. 

* **AN-15688 - Geo Map Chart performance issue**: Geo Map Charts are having performance issues when the associated dataset or web form has more than 5M records. 

* **AT-10805 - Page Permissions are not applied**: The pages that the creator hides from the user management permissions are still listed in the navigation menu of the Page View widget, however they show no content.

* **AT-11015 - PageView - Discard Changes shows all the pages when embedding a Single Page**: The Discard Changes action is showing all the pages in the page’s toolbar even if the PageView widget is being embedded with a single page. The suggested workaround is to hide the page toolbar to avoid exposing the wrong pages.

* **EX-1044 - Inaccurate message in response to a Download API**: When using the APIs to access a downloaded file, and entering the wrong ID in the header, the returned message is not accurate or informative.

* **EX-1046 - Wrong status for a wrong ID**: When the user tries to get the status of an export using the Check_Status API, the result shows an empty Object if the ID is wrong, but the Status is shown as Ok.

* **EX-270 - PDF Export - Table Columns Width**: When a user changes the width of a Table column in Page Builder, the downloaded file does not follow the set width in the Page Builder. 

* **CD-1004 - Activity Log does not load records**: If the browser zoom is set to anything other than 100%, the activity log records do not load when scrolling down.

* **CD-1124 - InstalledComponents field is notupdated correctly**: In order to identify if any job was done, an admin user automates a script to review the *installedComponents* field by comparing it with the *totalComponents* field, but sometimes the *installedComponents* field is not updated with the total number of the installed components.

* **ADMIN-5886 - Unable to change Elasticsearch cluster size**: The function to change the ES cluster size from the Admin center does not work properly.


</div>
