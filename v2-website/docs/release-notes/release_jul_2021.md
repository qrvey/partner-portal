---
id: release-last
title: Qrvey Version 6.1
sidebar_label: July 2021
---
<div style={{textAlign: "justify"}}>
Release Date: 2021-07-13


## New Features & Enhancements

Click <a href="/docs/video-training/release/version-6.1" target="_blank"> <strong>here</strong></a> to access demo videos of some released features.

### Data Preparation

* <strong>QV-13335 - Transformation - Array Filter</strong>: With this new transformation you can remove Object Array items from individual records when the Update Existing option is selected. This can be especially useful when array items need to be removed before flattening, or before getting the top or bottom array item with ArraySelectSingleItem.

* <strong>QV-12898 - Connections - AWS Athena Connection</strong>: You can now create a connection to the AWS Athena service in order to use its tables or queries as a Data Source to create new Datasets.

* <strong>QV-11609 - Connections - Push API</strong>: You can now create Push API connections, in order to create Datasets by adding data through API calls, using the UI.

* <strong>QV-13273 - Connections - View Source Data from Query</strong>: This feature allows you to view the source data while creating a connection. 

 
### Data Analysis & Automation

* <a href="https://partners.qrvey.com/docs/admin/column-level-security" target="_blank" ><strong>AN-13316 Support Column Level Security</strong></a>: You can now configure your datasets to secure columns that you do not want to be publicly available to all users, in order to restrict access to select roles. 

* <strong>AN-12319 - Aggregated Formulas in Tables</strong>: Calculations/formulas can now be created using aggregate values in grouped table charts.

* <a href="/docs/video-training/release/version-6.1/#expandable-tables" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png" /><span class="tooltiptext">Watch video</span></a> <a href="" target_blank><strong>AN-10733 - Expandable Tables</strong></a>: You can now choose between visualizing your table as a Simple or an Expandable Table, which offers sections, instead of groups.

* <a href="/docs/video-training/release/version-6.1/#custom-tooltips" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png" /><span class="tooltiptext">Watch video</span></a> <a href="" target_blank><strong>AN-9917 - Custom Tooltips for X/Y and Pie Charts</strong></a>: You can now customize tooltips in X/Y and Pie Charts by adding additional dimensions or custom texts to display.

* <strong>AN-13217 - Running Aggregates in Combo Charts</strong>: You can now apply Table Calculations like Sum, Average, Minimum, Maximum, Difference, and % Difference in Combo Charts. 

* <strong>AN-13127 - Access Analytic Widgets Configuration</strong>: You can now access the widgets’ configuration that is required to embed the Analytic Suite and Single Panel Widgets into your host application, using a link in the Analyze view and the chart panel, respectively.

* <strong>AT-9049 - Multi-tenancy - White-labeling Support</strong>: You can now customize many style settings for the Page View Widgets through the widget configuration’s new style property. This makes customization and white-labeling for multi-tenant instances possible.

* <strong>AT-8923 - AWS GovCloud Support</strong>: You can now deploy the Qrvey platform in AWS GovCloud, while current deployments will remain working on current supported AWS Regions.

* <a href="/docs/video-training/release/version-6.1/#pdf-page-export-in-workflows" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png" /><span class="tooltiptext">Watch video</span></a> <a href="" target_blank><strong>EX-163 - Workflows - PDF Page Export in Send Email</strong></a>: You can now export PDF files of pages and send them through the send email action in workflows. Recipients get a set of separate PDFs for each page that is selected.

* <strong>EX-159 - Workflows - PDF Table Export in Send Email Action</strong>: Simple table charts (ungrouped) can now be exported to PDF format and attached to emails with the Attach Chart option in the send email action in workflows. The table export will include all of the table rows, up to 30,000 rows. Recipients get a set of separate PDFs for each chart that is selected.

* <strong>EX-13 - Simple Table Visualization PDF Export</strong>: In Ungrouped table charts now support full data PDF exports wherever they are used (Page Builder, Page View). Up to 30,000 rows of data can be included in the exported file.

## General Tweaks & Bug Fixes

* <strong>QS-449 - Corrupt PDF Attachments</strong>: When PDF exports attached to workflows took a long time to process, the resulting file did not have the correct PDF format and could not be opened. The issue has been resolved.

* <strong>QS-459 - Missing PDF Attachments</strong>: Sometimes the first workflow email would not include its PDF attachments. The issue has been resolved.
  
* <strong>QV-13769 - Wrong InputDate Format</strong>: When a user had a dataset with DB connection and changed the column type from Text to Date the visualization displayed with the wrong format. This has been fixed

* <strong>AN-13133 - Bars Visualization Fails in Tables </strong>: When an End-User edited a table setting on a column with bars visualization, the bars did not appear. This has been fixed. 

</div>