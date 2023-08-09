---
id: release-aug-2020
title: Qrvey Version 5.4
sidebar_label: Qrvey Version 5.4
---
<div style={{textAlign: "justify"}}>
Release Date: 2020-08-31

## New Features & Enhancements
Click <a href="/docs/next/video-training/release/version-5.4"> <strong>here</strong></a> for demo videos of some released features.


### Data Preparation
* **QV-10991 - Cascading Syncs**: For a Dataset that uses other Datasets as a Data source, we added the option to trigger the sync process when the source Dataset is updated.  This is an alternative to using time-scheduled sync or clicking the “Sync Now” button. The Dataset will be automatically updated when the source is updated.

* **QV-11248 - Create a Push Dataset from an API Call**: We added the option to let Developers be able to create datasets from API Calls. These Datasets will be available and editable from the UI enabling the following: Renaming dataset, hiding columns, changing aliases. These Datasets are going to be populated by pushing data through API calls.

* **QV-10738 - Sync Now Option**: We added the option to let creators sync their Datasets on demand. Depending on their sync configuration, they will be able to do it right away instead of waiting for the next scheduled sync. This will make it easier and faster to keep data updated. 

* **QV-10668 - Ensure Correct Record Count**: We implemented an improvement to ensure that the Dataset record count is consistent every time the dataset dashboard is loaded. Creator will now see the correct number of records loaded on each dataset, and if there is any error, an icon will appear informing the creator that an error occurred.

* **QV-10285 - Keeping a Dataset Available while Full Reloading**: We improved the dataset reloads so that creators can have access to data from a previously-loaded Dataset during reload times. The index’s data is deleted at the start of the reload. Dataset charts, pages, reports, and flows won't be interrupted.



### Data Analysis and Automation

* **AN-9845 - Table Calculations - Percent Difference**: We added Percent Difference to Tables so that creators can get the percent difference between the aggregated value in one partition and the same value in another partition.

* **AN-9846 - Table Calculations - Difference**: We added Difference to Tables so that creators can get the difference between the aggregated value in one partition and the same value in another partition. 

* **AN-10213 - Ability to Control Metric Animation**: We added a feature that allows users to control the animation shown in metrics every time a page is loaded or the metric value is updated to show the most recent value. 

* **AN-9996 - Continuous vs Discrete Numeric Values**: We added an option to let creators include the missing numeric values in charts between the min and max value shown in the category axis, even if there is no data within the numeric columns used for categories by selecting to show “Continuous” values instead of “Discrete” values.

*<strong>AT-6829 - Page Builder - Filter By in Tables </strong>: We added the feature to allow creators to set up a “Filter By” on-click action for Grouped Tables. End-users can now interact with them by clicking on a data point and filter the data by the value selected.

* <strong>AT-6828 - Page Builder - Page Drill in Tables</strong>: We added the feature to allow creators to set up a “Page Drill” on-click action for Tables. End-users can now interact with them by clicking on a data point to redirect them to the page configured by the creator.

* <strong>AT-6601 - Page Tabs Resizing</strong>: We added three ways to resize the width of page tabs; creators and end-users can now visualize the complete name of a tab or adjust its width according to their needs.


### Admin Center


* <strong> ADMIN-2700 - Sharing Applications</strong>: Creators are now able to share applications and collaborate on content creation with other creators. Applications can be made public  for all the users in the system or shared with specific people. 


* **ADMIN-2684 - ES Management - Manual Adjustments**: Administrators can now visualize their current Elasticsearch Server Settings and Usage Storage in the new Infrastructure section inside Admin Center. They can perform manual adjustments to these settings, like selecting an Elasticsearch Server, and adjust the number of servers and storage. 

</div>