---
id: release-7.5
title: Qrvey 7.5
sidebar_label: Qrvey 7.5
 
---
<div>

Release Date: 2022-08-30

:::danger :warning: **Warning:**

  Admin Center is fully serverless as of version 7.5. This change does not affect any of its functionality, however the link to the application has changed to:  *[ComposerURL]/admin/app/#/*. **This is an important change for partners that utilize Qrvey APIs**, as any reference to *https://[id]-admin.qrveyapp.com* or *https://[id]-admin-backend.qrveyapp.com* has to be changed to *https://[id].qrveyapp.com/admin/app/#/*. 

:::
 
 >**Important Note**: With this version Qrvey has started leveraging Amazon Location Service for all of its mapping needs for accuracy and consistency reasons. The service is currently not available in all AWS regions. If setting up a new environment, and intend to use maps in your product, please note the supported regions in [this document](../../deployment/prerequisites-for-installation.md#aws-region-support).

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. 

## New Features & Enhancements
 
### Data Preparation
* **[CSV Files - Support for Different Delimiters](../../composer/05-Working%20with%20Data/Connections/csv.md)**: We now support semicolon, tab character, and pipe symbol, in addition to commas, in CSV files.

* **[RDBMS Connections - Pagination for Tables and Views](../../composer/05-Working%20with%20Data/Connections/databases.md#creating-a-connection-using-the-default-method)**: We added an option to let users enable or disable Qrvey´s pagination for tables and views, so their queries can run without issues. 

* **[Data Sync - Allow users to determine the start of the sync range](../../composer/05-Working%20with%20Data/Datasets/02-Design/04-Data%20Synchronization/data-sync.md#next-sync-query-window)**: Users can change the pointer that determines the starting time of the sync process.

* **[Shared Data List Improvement](../../composer/05-Working%20with%20Data/Datasets/01-Overview%20of%20Datasets/dataset-views.md)**: Users can now see the owner and the source application of shared datasets.

* **Numeric Data Type - Duration Values Visualization Format**: With this version numeric values can have their default visualization format set as Duration, allowing types such as days, hours, minutes, etc. <a href="/docs/video-training/release/version-7.5#duration-visualization-format" target="_blank" className="tooltip"><img alt="Duration Format" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Unification of the Abbreviated visualization format**: We added support for Abbreviated visualization format in the data preparation step. 

* **Switching the Data Source**: Users can now switch the data source for a dataset to another without having to reload the data.
 
### Data Analysis & Automation

* **Support for Duration format**: We added support for Duration Format in the Chart Builder and exports to let users format numeric columns when creating/editing charts and tables. 

* **Maps Migration to Amazon Location Service**: We have migrated the maps feature to the new AWS Location Service. Please make sure that this service is available [in the region](../../deployment/prerequisites-for-installation.md#aws-region-support) of your choice, before deploying Qrvey in a new region. 

* **Workflows - Tokens in the “Submit Data” fields**: We added support for tokens when creating a flow using Submit Data so that the system can use dynamic values in this action. <a href="/docs/video-training/release/version-7.5#submit-data-action-improvements" target="_blank" className="tooltip"><img alt="Duration Format" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Workflows - Submit Data action with Basic Authentication**: We implemented the option to let users define how the Submit Data action can authenticate against any external systems their workflow may be connected to.  <a href="/docs/video-training/release/version-7.5#submit-data-action-improvements" target="_blank" className="tooltip"><img alt="Duration Format" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **New Page Actions for Funnel Charts- Filter by in Funnel and Expandable Tables**: We have added support for the Filter By and Go to URL Page Actions support in the Funnel charts. 

* **New Page Action for Expandable Tables**: We have added support for the Filter By Page Action to the Expandable Tables. 

* **Buckets in Filter Components**: Support for bucket fields has been added to the Input Value filter components.  

* **End User Editing - Rearranging Data Panel**: We added the option to let users rearrange the data panel while in edit mode. 

* **Subscriptions - Hide Email Subject + Message UI using Widget Configurations**: We implemented the option to let implemeners decide whether to show or hide the subscription email subject or body from the widget configuration object. 

* **Additional information in Exports**: Exports of CSV and PDF formats now include additional information about filters, chart names, and the time of export. 
 
### Admin Center

* **Serverless - Elastic Beanstalk Workers Migration**: We migrated the core app of the Admin Center to a serverless architecture. This change provides consistency across the platform and the benefits of the serverless architecture.

> **Important Note**: The URL for the Admin Center changes to <i>[ComposerURL]/admin/app/#/</i>.

## General Tweaks & Bug Fixes

* **DR-3633 - S3 Connection - Prevent Old Records from Updating New Records (bug fix)**: In rare occasions, older versions of a record in S3 could overwrite its newer versions. A new “version” attribute is added to records to prevent that from happening. 

* **Filtering Aggregate Formula Values in Charts (bug fix)**: An issue with filtering of formulas that included aggregate values has been fixed. 

* **Update Deployment Of Datasets That Have Other Datasets As Their Data Source (bug fix)**: An issue with Content Deployment, where an error was generated when the Update Job contained Datasets that had other Datasets as their Data Source, has been fixed. 

* **Transformation - Allow nesting If/Else Transformations (enhancement)**: Users can now drag transformations in and out of the If/Else transform. 

* **Dataset Load Statistics - "Completed" message Improved (enhancement)**: Data load completion message has been improved to include load statistics. 

* **Datasets - Input And Visualization Format Component Enhancement  (enhancement)**: The two components have been improved to be consistent. 

* **XY charts and Heatmap Default Improvements (enhancement)**: We improved the default settings of various charts for better looking visuals out of the box. 

* **Consistency Between CSV And PDF Export Options (enhancement)**: The behavior of PDF exports from the Page View widget has been improved to be consistent with the CSV export in sending the download link via email. 

* **Various tickets (security enhancement)**: We upgraded all libraries used in various Qrvey components to their latest version. 

</div>