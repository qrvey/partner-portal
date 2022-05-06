---
id: release-last
title: Qrvey 7.1 
sidebar_label: Qrvey 7.1
---
<div style={{textAlign: "justify"}}>

>**Note:** If you wish to upgrade to this version, please contact the CX team if you have a *Managed Infrastructure* contract, or use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/autodeployappCloudformation-enterprise-7.1.json" target="_blank">this upgrade link</a> and follow the directions in the <a href="/docs/get-started/upgrading-new-version" target="_blank">Upgrading to a New Version</a> article to upgrade your instance(s).  
<br/> 

## New Features & Enhancements

### Data Preparation

* <a href="/docs/video-training/release/version71#add-newly-discovered-columns-to-datasets" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/filtering-data/working-with-filters/" /></a><strong><a href="/docs/ui-docs/datasets/datasets" target="_blank">QV-14530 - Automatically Add Newly Discovered Columns to Datasets</strong></a>: When enabled, the Qrvey platform can discover new columns from the data while loading it to the Dataset. You can decide to hide them or show them for analysis. This feature is only available for single-source Datasets.

* <strong><a href="/docs/ui-docs/datasets/connectors" target="_blank">QV-14640 - Datasets used by a Connection</strong></a>: You can now see the list of Datasets that are being used by a particular Connection.

* <strong><a href="/docs/ui-docs/others/activity-log" target="_blank">QV-15488 - Statistics for Read and Failed Files</a></strong>: For S3 connections the number of files that were successfully read or failed is now displayed in the activity log of Datasets.


### Data Analysis & Automation

* <a href="/docs/video-training/release/version71#conditional-formatting-with-columns" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/filtering-data/working-with-filters/" /></a><a href="/docs/ui-docs/dataviews/chart-types/table" target="_blank"><strong>AN-15640 - Conditional Formatting with Columns Not in the Table</a></strong>: You can now set a conditional format in a simple or expandable table based on a column that is not part of the visualization. When the condition is met, the format is displayed on a column or an entire row.

* <strong>AN-14348 - Themes - Panel Styles</strong></a>: Options to control a few of the chart panel’s styles have been added to the Theme dialog.

* <strong><a href="/docs/embedding/widgets/app-building/widget-page-view" target="_blank">AT-11037 - Hide the Pages Toolbar in Page View Edit Mode</strong></a>: As an Implementer, you can now control the visibility of the Pages’ toolbar in the embedded widget.

* <strong>AT-10519 - Localization - Widget Configuration</a></strong>: The widget configurations Localization settings resource file supports localization of data entry controls so that End Users can now work with those controls in their local date and numeric formats.

* <strong><a href="/docs/ui-docs/dataviews/exporting" target="_blank">EX-758 - Max Data Points Support for CSV Raw, CSV Summary and PDF</a></strong>: You can now download CSV Raw, CSV Summary and PDF files with the same maximum limits set from the Max Data Points, Max Groups, and similar controls for visualizations.

### Admin Center

* <strong><a href="/docs/admin/admin-sections-platform" target="_blank">ADMIN-5548 - Number of Active Sessions Per User</a></strong>: You can now decide if composer and admin users can have multiple sessions per user or not. 

* <a href="/docs/video-training/release/version71#session-management" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/filtering-data/working-with-filters/" /></a><a href="/docs/admin/admin-sections-platform" target="_blank"><strong>ADMIN-5547 - Configurable Session Timeout</strong></a>: You can now change the session timeout parameter in order to meet the company's security policies. 

* <strong><a href="/docs/admin/admin-sections-platform" target="_blank">ADMIN-5901 - Refresh Session Expiration - Implement an idle timeout</a></strong>: Admins can define an idle session timeout. As long as users are actively using the platform within the configured time, the session will refresh automatically to keep the user logged in.

* <strong>ADMIN-2429 - Session Expiration Notification</a></strong>: When the session expires, you will be redirected to the login screen without having to manually interact with the user interface.

 
## General Tweaks & Bug Fixes

* <strong>QV-15079 - Improve Validation for Empty Values</strong>: We have improved the way the Sample Record is being validated in the UIs working with file upload and S3 connections.

* <strong>QV-15268 - Text and Data Type Labels Updated</strong>: Text and Data Type labels have been updated. 

* <strong>AT-11015 - PageView - Discard Changes shows all the pages when embedding a Single Page</strong>: The Discard Changes action was showing all the pages in the page’s toolbar, even if the pageView widget was being embedded with a single page. This issue has been fixed.

* <strong>EX-1044 - Inaccurate Message in Response to a Download API</strong>: When using the APIs to access a downloaded file and entering the wrong ID in the header, the returned message was not accurate or informative. This has been fixed.

* <strong>EX-1046 - Wrong status For a Wrong ID</strong>: When the user tried to get the status of an export using the Check_Status API, the result showed an empty Object if the ID is wrong, but the Status was shown as Ok. This has been fixed.


</div>