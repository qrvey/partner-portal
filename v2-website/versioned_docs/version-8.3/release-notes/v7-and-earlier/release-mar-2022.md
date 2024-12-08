---
id: release-mar-2022
title: Qrvey 7.0 
sidebar_label: Qrvey 7.0
---
<div style={{textAlign: "justify"}}>

Release Date: 2022-03-31

>**Note:** If you wish to upgrade to this version, please contact the CX team if you have a *Managed Infrastructure* contract, or use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/autodeployappCloudformation-enterprise-7.0.json" target="_blank">this upgrade link</a> and follow the directions in the Upgrading to a New Version article to upgrade your instance(s).  
<br/>

## New Features & Enhancements

### Internationalization

Qrvey introduces Internationalization in this version. This is a major feature that spans across all areas of the product. Qrvey supports the internationalization of static text (UI elements like labels), as well as some dynamic text (dataset and column names) in its first official release of the feature. Additionally, date and number formatting can be localized. You can learn more about the new internationalization feature and how to configure it here(../special-features/internationalization/overview.md). 



### Data Preparation

* **QV-13279 - Transformations - If/Else More Comparison Operators(../ui-docs/datasets/transformations.md#ifelse)**: Various new comparison operators have been added for the If/Else transformation. 

* <strong>QV-14647 - Transformations - Token/Column list filtered by Data Type</strong>: Tokens and Columns listed in the different input dropdowns are now filtered depending on each transformation for better guidance when adding new transformations. 

 * **QV-13067 - Disable Transformations without Deleting them(../ui-docs/datasets/transformations.md#adding-transformations)**: You can now disable a transformation, without deleting it, so that it can be enabled when needed later. <a href="/docs/video-training/release/version7#disabling-transformations-without-deleting" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>
 

* **QV-13133 - Hiding Columns from Analysis(../ui-docs/datasets/datasets.md#choosing-the-dataset-columns)**: You can now include a column in a dataset, but hide it from the analytic areas of the product.

* **QV-14969 - Connections - Query Record Count(../ui-docs/datasets/connectors.md)**: You can see how many records a data source has before using it for a dataset. 

* <strong>DR-2881 - Support Large Number of Flattened Records</strong>: Support for flattening object arrays of any size for Custom Routing has been added. This will work when flattening multiple object arrays on the same transformation.

### Data Analysis & Automation

* <strong>AN-14898 - Table Pagination Improvement</strong>: The Tables Pagination user experience has been improved.

* <strong>AN-13533 - Totals in Expandable Tables</strong>: You can now apply totals to expandable tables to get a summary per group and for the complete table. 

* <strong>AN-14151 - Conditional Formatting For Row Or Column</strong>: Conditional formatting for table charts has been expanded so it can be applied to the entire row or one cell. 
Also, you can apply conditional formatting to a column other than the one that the condition was set on.

 * **AT-9096 - Cascading Filters**: You can now create a cascading effect on Value List controls so that one control filters the values in the next one in the chain. <a href="/docs/video-training/release/version7#cascading-filters" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> 
 

* <strong>AT-10562 - Additional Date and Numeric Operators in Input Box</strong>: The list of operators for the Input Box filter has been expanded for Date or Numeric data.

* <strong>AT-10733 - Web Form Data Types Support for Input Box</strong>: You can now use complex data types in web forms with the Input Box filter component.

* **AT-10013 - Subscriptions - CSV Summary for Charts Support**: You can now select CSV summary format when subscribing for chart downloads. 

* <strong>AT-9486 - Subscriptions - CSV Raw for Pages and Charts Support</strong>: You can now select CSV Raw format when subscribing for pages and charts downloads.

* <strong>EX-623 - Expanded CSV Summary Support</strong>: You can now download CSV Summary format files from Metrics, Small Multiples, and Maps.

* <strong>EX-869 - Export Files Naming Convention</strong>: Now, CSV and PDF files will have the same name as the exported asset.

### Admin Center
* **ADMIN-5695 - Add/Remove Users from the Administrator Role**: You can now add or remove users from the Administrator Role, so other users can act as administrators in the Qrvey platform. 

* **CD-1007 - Jobs - Handling Broken Content Options**: As an administrator, you can now decide whether to continue with the installation of the assets or to skip. 




## General Tweaks & Bug Fixes

* **DR-3314 - Support for larger Data Source joins**: The issue where datasourcePump lambda would throw a timeout error for very large joins, has been fixed.

* **QV-13021 - Problem with creating 600+ Column Indexes**: The issue with creating datasets from indexes with over 600 columns has been fixed.
Data Links feature has been deprecated: The feature continues to be supported for existing apps with data links.

* **General Usability Enhancements in Dataset Design**: Dataset design screen has been improved in various ways to help with ease-of-use. Enhancements include: automatic naming of the dataset, showing the data source name on join dialog to help with differentiating columns that have the same name, custom naming of data source pills, tooltips to help with custom input formats, and more. 

* **QV-14957 - S3 Connection - Sample Record relocation**: The Sample Record screen has been relocated to be consistent with other connections.

* **QV-14644 - Transformations UI - Highlight the Required Parameters**: Transformation UI has been improved to highlight missing information and provide other useful hints.

* **QV-11851 - Geolocation - UI and Access Point Improvement**: The UI to configure Geolocation has been improved to make it more user-friendly.

* **QV-14990 - AWS Athena Connection Improvement**: The user experience when creating an AWS Athena connection has been improved.

* **WF-188 - Problem with Favoriting Questions in Surveys**: This issue has been fixed in this release.

* **AN-14952 - Funnel Chart - Hide Labels When They Overlap**: Funnel charts have been improved to avoid overlapping labels.

* **CD-646 - Color By Value Support on Chart Deploys**: We added support for Color by Value, so that recipient users can have the charts with the same configuration of Color by Value, as in the Source Application. 


</div>