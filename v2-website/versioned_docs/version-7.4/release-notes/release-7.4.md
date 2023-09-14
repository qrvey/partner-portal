---
id: release-last
title: Qrvey 7.4.3 (LTS with the latest patch)
sidebar_label: Qrvey 7.4 (LTS)
 
---
<div style={{textAlign: "justify"}}>

Release Date: 2022-10-27

:::danger :warning: **Warning:**

  Admin Center is fully serverless as of version 7.4.3. This change does not affect any of its functionality, however the link to the application has changed to:  *[ComposerURL]/admin/app/#/*. **This is an important change for partners that utilize Qrvey APIs**, as any reference to *https://[id]-admin.qrveyapp.com* or *https://[id]-admin-backend.qrveyapp.com* has to be changed to *https://[id].qrveyapp.com/admin/app/#/*. 

:::

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. 
 
## New Features & Enhancements
 
### Data Preparation
 
* **DR-3566 - Enhanced Logic For Data Sync**: The logic to determine new and updated records has changed to use the previous data load’s time, instead of the time of the newest value stored in Elasticsearch. The new method is more reliable in the majority of the cases.
<br/><br/>

**Important Note:** If your timestamps don’t match the actual time that the records were added/updated, and you prefer to continue using the old method, please see [this article](../ui-docs/datasets/data-sync.md#deciding-the-sync-logic) to learn about the environment variable that keeps the old logic in place.
 
### Data Analysis & Automation

* **Support for Hours in Relative Date Filters**: We added support for more granular relative date filters. These filters can now go down to the hour level. <a href="/docs/video-training/release/version-7.6#filtering-with-relative-dates-using-time-values" target="_blank" className="tooltip"><img alt="Duration Format" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>
 
* **AN-16522 - Array Lists of Dataset IDs for RLS Support**: We added support for a list of datasets in the “dataset_id” attribute to let implementers set the same group of conditions for multiple datasets so that they don't have to repeat the conditions for each dataset.
 
## General Tweaks & Bug Fixes
 
* **DR-3611 (bug fix)**: Discardng a date field from the join, when using datasets as data sources, causes an error to be thrown during data load. This issue has been fixed.

* **DR-3803 (bug fix)**: A rare issue that caused data syncs of datasets that depend on other datasets to load before their children, has been fixed.

* **QV-15609 (bug fix) - Duplicate Dataset With Same IDs**: When a user duplicates a dataset with API using the same ID, the original is deleted and the new one has issues. This has been fixed.
 
* **QV-16271 (bug fix)**: An issue that caused datasets to keep older versions of the records upon Append and Update data synchronization, has been fixed.

* **QV-16229 (security enhancement)**: Updated joi library and validation schemas

* **AN-16765 (bug fix) - XY Charts - Datapoint is left-justified**: When a user creates a Bar Chart that has a Date column as the category and the ‘Continuous’ option selected, a single bar is displayed, it is shown left-justified instead of centered in the middle of the chart.
 
* **AN-17103 (bug fix)**: In rare cases, charts with filters included internationalization properties that caused the size of the chart object to exceed maximum allowed size and prevented users from saving the chart. This issue has been fixed.

* **AN-16151 (bug fix)**: An issue with filtering of formulas that use aggregate functions has been fixed in this version. 

* **AT-11870 (enhancement) - Infrastructure changes in SAM templates to improve the performance**: We made infrastructures changes on SAM templates in order to preserve the changes on upgrades and updates to the deployments.

* **Various tickets (security enhancement)**: Upgraded all libraries used in various Qrvey components to their latest version

 
</div>

