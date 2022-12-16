---
id: release-7.7
title: Qrvey 7.7
sidebar_label: Qrvey 7.7
 
---
<div>

Release Date: 2022-11-10
:::danger :warning: **Warning:**

Admin Center is fully serverless as of version 7.5. 
 **You can ignore this warning if you have already perfromed this task as part of your upgrade to 7.5**  
This change does not affect any of the Admin Center functionality, however the link to the application has changed to:  *[ComposerURL]/admin/app/#/*. **This is an important change for partners that utilize Qrvey APIs**, as any reference to *https://[id]-admin.qrveyapp.com* or *https://[id]-admin-backend.qrveyapp.com* has to be changed to *https://[id].qrveyapp.com/admin/app/#/*. 

:::

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract, or use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/deploy/autodeployappCloudformation-enterprise-7.7.json" target="_blank">this upgrade link</a> and follow the directions in the [Upgrading to a New Version](../get-started/upgrading-versions.md) article to upgrade your instance(s). 


## New Features & Enhancements
 

* **Datasets - More Information Listed**: Information about the synchronization frequency was added in the dataset cards and list.

* **Sync Now Button Disabled When Reload Required**: Sync Now user experience has been improved by disabling the button when a reload is required. 

 
### Data Analysis & Visualization

* **AWS Location Service in Unsupported Regions**: Maps are now supported, even in regions where AWS Location Service is not available.

* **Geolocation Groups as a Single Column**: Map creation process has been improved by treating the geolocation group as a single complex column. The behavior of maps remains unchanged.

* **Bar Width % in Continuous**: The option to set the Bar Width % for continuous bar charts was added.

* **Duplicate option in Tabs**: The user experience of duplicating tabs and pages has been unified.

* **Page Drills Filtering Across Multiple Datasets**: An option has been added to let users apply Page Drill filters to any datasets on the target page. <a href="/docs/video-training/release/version-7.7#page-drills-across-multiple-datasets" target="_blank" className="tooltip"><img alt="Duration Format" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Relative Paths in "Go to URL"**: Go To URL action now supports relative paths.

* **Multiple Go to URL "Columns Links" in a Simple Table**: We implemented Simple tables now support configuring separate columns links on each of their columns. <a href="/docs/video-training/release/version-7.7#multiple-go-to-url-column-links" target="_blank" className="tooltip"><img alt="Duration Format" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **JSON parsing in payloads for Workflows’ Webhook Trigger**: Webhook triggers now support JSON payloads as part of their body or query strings. The payload can be parsed and used in actions within the workflow.

## General Tweaks & Bug Fixes

* **Fixed Duplicate Columns When Using Datasets as a Source (bug fix)**: A bug that caused duplicate columns when Datasets with similarly-named columns were used to create a Union, has been fixed.

* **Fixed a Bug That Caused Only the First Column to be Clickable (bug fix)**: Automatic links were only clickable in the first column of the Table Chart. This issue has been fixed.

* **API - Delete Connections, Datasets & Web forms of Deleted Applications (enhancement)**: The API that was used to delete applications has been improved to also wipe Datasets, Webforms, and Connections records of the deleted app.

* **Connections UI Consistency and Clarity Fixes (enhancement)**: The User Interface for creating connections has been improved to be consistent across all connection types.

* **Activity Log - JobID in “Details” and Consistent Descriptions (enhancement)**: The Activity Log entries for data load have been improved and the jobID is included in the details for debugging purposes.

* **Performance Improvements (enhancement)**: The load time of Page Builder and Page View widgets has been improved by reducing the response times of some endpoints used in these widgets.

* **Puppeteer Version for PDF Exports Updated (enhancement)**: The library has been updated to its newer version, removing some limitations that were present in its earlier version, thereby improving the capabilities of our PDF exports.

* **Web Forms - Customize Section Removed (cleanup)**: The deprecated Customize Section has been removed from the Web Forms.

* **Tabular View after Loading a Dataset (change)**: Users are now redirected to the Tabular View when a dataset is loaded for the first time.

* **Deployment Definition - Hide the Connection Query Options (change)**: The option to change Connection query has been deprecated and removed from the Deployment Definition interface.

* **Admin - Case Sensitive User Validation (change)**: User registration validation has been updated to consider email addresses typed with different capitalization as one.


</div>