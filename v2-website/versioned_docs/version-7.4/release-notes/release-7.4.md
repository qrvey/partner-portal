---
id: release-last
title: Qrvey 7.4.2 (LTS with the latest patch)
sidebar_label: Qrvey 7.4 (LTS)
 
---
<div style={{textAlign: "justify"}}>

Release Date: 2022-09-02
 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract, or use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/autodeployappCloudformation-enterprise-7.4.2.json" target="_blank">this upgrade link</a> and follow the directions in the Upgrading to a New Version article to upgrade your instance(s). 
 
## New Features & Enhancements
 
### Data Preparation
 
* **DR-3566 - Enhanced Logic For Data Sync**: The logic to determine new and updated records has changed to use the previous data load’s time, instead of the time of the newest value stored in Elasticsearch. The new method is more reliable in the majority of the cases.
<br/><br/>

**Important Note:** If your timestamps don’t match the actual time that the records were added/updated, and you prefer to continue using the old method, please see [this article](../ui-docs/datasets/data-sync.md#deciding-the-sync-logic) to learn about the environment variable that keeps the old logic in place.
 
### Data Analysis & Automation
 
* **AN-16522 - Array Lists of Dataset IDs for RLS Support**: We added support for a list of datasets in the “dataset_id” attribute to let implementers set the same group of conditions for multiple datasets so that they don't have to repeat the conditions for each dataset.
 
## General Tweaks & Bug Fixes
 
* **QV-15609 (bug fix) - Duplicate Dataset With Same IDs**: When a user duplicates a dataset with API using the same ID, the original is deleted and the new one has issues. This has been fixed.
 
* **AN-16765 (bug fix) - XY Charts - Datapoint is left-justified**: When a user creates a Bar Chart that has a Date column as the category and the ‘Continuous’ option selected, a single bar is displayed, it is shown left-justified instead of centered in the middle of the chart.
 
* **AT-11870 (enhancement) - Infrastructure changes in SAM templates to improve the performance**: We made infrastructures changes on SAM templates in order to preserve the changes on upgrades and updates to the deployments.

* **DR-3611 (bug fix)**: Discardng a date field from the join, when using datasets as data sources, causes an error to be thrown during data load. This issue has been fixed.

* **AN-17103 (bug fix)**: In rare cases, charts with filters included internationalization properties that caused the size of the chart object to exceed maximum allowed size and prevented users from saving the chart. This issue has been fixed.

* **AN-16151 (bug fix)**: An issue with filtering of formulas that use aggregate functions has been fixed in this version. 

* **QV-16229 (security enhancement)**: Updated joi library and validation schemas

* **Various tickets (security enhancement)**: Upgraded all libraries used in various Qrvey components to their latest version

 
</div>

