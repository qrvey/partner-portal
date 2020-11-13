---
id: version-5.3-release-aug-2019
title: Qrvey Version 3.14
sidebar_label: August 2019
original_id: release-aug-2019
---
<div style="text-align: justify">
Qrvey 3.14   2019-08-09

## New Features and Enhancements


### Data Preparation

* **Custom Javascript Functions - Get a list of all the created functions and search options**: We created a new endpoint to GET the list of all functions. You can use a query string in order to search for some functions given a search text. For example, if we want to search for all the functions that contain the word “case“ we would call:
(GET) {{datarouterendpoint}}/v1/customFunction?page=1&search=case


* **Metadata - Delete metadata record just after the index is deleted**: Right now there can be some issues deleting an index from Elasticsearch. This can create some inconsistencies with the Metadata as it will be deleted but the index could still exist. We changed the process to delete the Elasticsearch index first. After the index is deleted, we can proceed and delete the Metadata from DynamoDB


* **Custom Javascript Functions - Validate javascript syntax at creation**: When creating a custom javascript function, we are validating its syntax to reduce execution errors.


* **Reusable Data Rules - PUT must work as defined by the REST standard**: When using PUT, we let the client create the reusable group if it doesn't exist as specified in the REST standard. If the group already exists, the PUT request must update the whole definition of the group.


* **Postdata - Better handling of file size limit**: We have a size limit for each JSON file processed in S3 by Postdata. If a file surpases that limit, it will go directly to the failed files bucket. This also fixed "message:true" log.


* **Postdata - Retry Mechanism for some Failed Files**: We defined a custom list for temporary errors that are going to be retried when posting data. This will work initially for the "No Living Connections" errors.


* **Metadata - PUT must work as defined by the REST standard**: When using PUT, we let the client create the metadata if it doesn't exist as specified in the REST standard. If the metadata already exists, the PUT request must update the whole definition of the metadata.


* **Array Lookup - sourceArray should work with sub arrays**: When defining an Array Lookup, it is now possible to use a sub array. The returning value will be the object in the subarray that matches the condition. The lookup up will be done in all records from the parent array.
 
 
### Data Analysis & Automation

* **Table Chart - Grouping Single Level**: Table charts now support single level grouping showing the aggregated values by group.


* **Formulas - Null Function**: This new function replaces NULL with the specified replacement value.


* **Median Aggregate**: This calculation was added to all charts to calculate Median.

* **Permissions Management for Groups - Group ID**: We implemented a way to assign permissions to a user that belongs to more than one group. If a user is assigned to more than one group and each group has different permissions the user must have all the permissions of all the groups to which they belong to. 


* **Filter Permissions**: Creators can assign permissions to different user groups on the filtering options for end users. These permissions control turning on/off Global, Page, Tab and Panel filters. 

* **Metric Tokens**: Metric tokens can now be used in different fields in automated flows. These tokens include the metric value, change or % difference, any thresholds values added to the metric. These can be accessed through the suggestion box. 


* **Page Actions - Alerts for Metrics**: Creators can set alerts for metrics in Page Builder. These alerts can be triggered by a custom schedule or when data is updated and can send emails or SMS texts.  



### Admin Center

*   **Backups/Restore.** Admins can create a backup from an application they have shared and when needed can restore the previous version of the application.  

*   **Sharing Applications - Append Data Label.** Admins can now see which components are new or updated in their content package when they are going to edit a release to append updates to an existing application.  

*   **Custom Styles for Creator Platform.** Admin users have the option to white-label the Qrvey creator platform. 

## **General Tweaks and Bug Fixes**

*   **Page Builder - Multiseries**. Category label was not visible even when resizing and making a chart bigger. This was fixed. 

*   **Installing Applications.** When an application was installed it didn’t appear right away. This has been fixed. 

*   **Responsive Horizontal Bar Chart.** When the bar chart was horizontal the responsive didn't resize correctly. This has been fixed. 

*   **CSV Exports.** Export to CSV was not working in the Analyze section of a dataset. Trying to export a CSV responded with error. This has been fixed. 

*   **Dates Filtering.** Adding multiple values to be selected in a single filter wasn’t working. This has been fixed. 

*   **Bar/Pie Sorting**. Sorting option was not working properly and showing the correct data. This has been fixed.

*   **Metrics Resizing.** Resizing metrics was not working in Page Builder. This has been fixed. 

*   **Sharing Applications - Chart Filters**. When sharing applications filters were not being shared for charts. This has been fixed. 

*   **Survey - Branches - Dropdown Question.** Changing the answer when the "Jump to" option is enabled was not working properly. This has been fixed.

