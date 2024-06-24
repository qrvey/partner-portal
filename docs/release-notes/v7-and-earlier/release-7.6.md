---
id: release-7.6
title: Qrvey 7.6
sidebar_label: Qrvey 7.6
 
---
<div>

Release Date: 2022-10-10
:::danger :warning: **Warning:**

Admin Center is fully serverless as of version 7.5. 
 **You can ignore this warning if you have already perfromed this task as part of your upgrade to 7.5**  
This change does not affect any of the Admin Center functionality, however the link to the application has changed to:  *[ComposerURL]/admin/app/#/*. **This is an important change for partners that utilize Qrvey APIs**, as any reference to *https://[id]-admin.qrveyapp.com* or *https://[id]-admin-backend.qrveyapp.com* has to be changed to *https://[id].qrveyapp.com/admin/app/#/*. 

:::

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. 


## New Features & Enhancements
 
### Data Preparation
* **[Consistent Connection Creation](../../composer/05-Working%20with%20Data/Connections/overview-of-connections.md)**: We improved how Connections are created. The Connection creation screens are the same regardless of where they appear. Also, Connections will no longer include queries.

 
### Data Analysis & Visualization

* **Support for Hours in Relative Date Filters**: We added support for more granular relative date filters. These filters can now go down to the hour level. <a href="/docs/video-training/release/version-7.6#filtering-with-relative-dates-using-time-values" target="_blank" className="tooltip"><img alt="Duration Format" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Support Internationalization in Chart Titles and Axis Labels**: Internationalization is now supported for chart creation, allowing for multilingual chart titles and axis labels.

* **Tables - Allow Records per Page to be set to less than 10**: The lower limit of table chart pagination has been lowered and can be set to values smaller than 10.

* **Heatmap - Sorting by Any Column**: Heatmaps can now be sorted by any column of the dataset, even if the column is not included in the chart.

* **Page Action - "Go to URL" in Expandable Table**: We added the “Go To URL” Page Action option to Expandable Tables. 

* **Axis Improvements - Labels and values**: We implemented more control over the charts’ labels and values placement in the axes.

* **Fixing Broken Charts**: With this version if any chart is broken because of its columns having been removed from the Dataset, editing the Dataset to re-add the data columns will fix the chart.

* **Filters Scope Visibility Permissions in Page Builder and Page View Widget**: Creators can now decide which scopes of filtering to allow within the widgets from the configuration object.

* **Authentication Support for the "Webhook" Trigger**: We implemented JWT authentication support for the Webhook trigger in workflows to prevent unauthorized users from starting a flow just by hitting the Webhook URL. <a href="/docs/video-training/release/version-7.6#authentication-support-for-the-webhook-trigger" target="_blank" className="tooltip"><img alt="Duration Format" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Submit Data Authentication With API Key**: We implemented the API Key authentication mechanism for Submit Data action in workflows.
 
### Administration & General

* **Sharing Applications with Roles**: Up until now Apps could only be shared with other users. Starting with this version we allow Apps to be shared with user groups or roles that have been defined in the Admin Center.  <a href="/docs/video-training/release/version-7.6#sharing-applications-with-roles" target="_blank" className="tooltip"><img alt="Duration Format" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Sharing Icons and Indicators**: Application cards now include an icon to indicate their sharing status and information.

* **Automatic Content Mapping**: When creating a Deployment Job, users can now choose a setting to automatically map the assets that are deployed to the assets on the destination environment. This eliminates the need for manual mapping of the assets for each deployment.

* **Customizing the favicon and the browser tab title**: A feature has been added in the Admin Center to allow customization of the favicon and browser tab title.

* **Free Disk Space Message Improvement**: We improved the free disk space message and warnings to make it clearer.

## General Tweaks & Bug Fixes

* **Error In Running Append and Update Sync of Unioned Data Every Minute (bug fix)**: The application showed an error message and stopped running the sync when a user added Union and configured Sync with append and updates every minute. This has been fixed.

* **Datasets - Sorting By Update Date instead of Creation Date (enhancement)**: The “Select the Data Source” modal tabs now list the data sources by their last update date rather than the creation date.

</div>