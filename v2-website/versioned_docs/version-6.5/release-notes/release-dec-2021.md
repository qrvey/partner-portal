---
id: release-last
title: Qrvey 6.5 (LTS)
sidebar_label: Qrvey 6.5 (LTS)
---
<div style={{textAlign: "justify"}}>

## New Features & Enhancements
 If you wish to upgrade to this version, please contact the CX team if you have a *Managed Infrastructure* contract, or use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/autodeployappCloudformation-enterprise-6.5.json">this upgrade link</a> and follow the directions in the <a href="/docs/get-started/upgrading-new-version">Upgrading to a New Version</a> article to upgrade your instance(s).  

 ### Data Preparation
 * <strong><a href="/docs/ui-docs/datasets/transformations#text-analysis" target="_blank">QV-11755 - Transformations - Text Analysis for Text Fields</a></strong>: You can now add a new transformation to apply text analysis such as Key phrases, Sentiment, and Language to text columns.

 * <strong><a href="/docs/ui-docs/datasets/databases" target="_blank">QV-14392 - Snowflake Connection</a></strong>: Support for Snowflake connections has been added in this release.

 * <strong><a href="/docs/ui-docs/datasets/databases" target="_blank">QV-14706 - Redshift Connection Parameters Update</a></strong>: The Redshift connector has been updated with Secret and Data Access Role ARN parameters.

 * <strong><a href="/docs/ui-docs/datasets/csv#using-amazon-s3" target="_blank">QV-14542 - External S3 Connection And File Filtering</a></strong>: You can now connect to an S3 bucket or folder that is outside of the instance by providing the needed credentials. Furthermore, wildcards can be used to search for files to be included based on a pattern.

### Data Analysis & Automation

 * <a href="/docs/video-training/release/version-6.5/" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/filtering-data/working-with-filters/" /><strong><a href="/docs/ui-docs/dataviews/chart-builder#controlling-the-colors-of-the-chart" target="_blank">AN-14097 - Assign a Color to a Category in Charts</a></strong>: We already had the feature to automatically assign a color to a category of data and keep it consistent across all charts. The feature has been enhanced to allow any color to be set by the chart creator.

 * <strong>AN - 14359 - Performance Improvements - Loading Charts</strong>: We consistently work on improving the performance of the product in all areas. This version provides a noticeable improvement in the loading of charts, especially table charts. You can expect improvements in the range of 10%-50% in most cases.

 * <strong>AT-10087 - Control Over the “To” Input Box in Subscriptions</strong>: Implementers can decide whether or not to show the “To” input box as part of the subscription interface by setting a property in the configuration object of the widget.

 * <a href="/docs/video-training/release/version-6.5/" target="_blank" className="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> <a href="/docs/ui-docs/filtering-data/working-with-filters/" /><strong><a href="/docs/ui-docs/filtering-data/working-with-filters#input-box" target="_blank">AT-10083 - Filter Component - Input Box: A new standalone filter control has been added to the existing set</a></strong>: The Input Box Filter control can be used to filter the content based on the entered text.  

* <strong>EX-449 - CSV Summary Downloads on Multiseries, Min/Max, Heatmap, and Combo</strong>: You can now download CSV Summary files from Multiseries, Min/Max, Heatmap, and Combo visualizations.

### Admin Center

* <strong><a href="/docs/admin/content-deployment/concepts" target="_blank">Content Deployment 2.0</a></strong>: We are introducing the new version of the Content Deployment tool in the Admin Center which will allow administrators to deploy applications and their content, such as datasets, charts and pages to multiple users across different instances.

## General Tweaks & Bug Fixes

* <strong>QV-12765 - Updating the Datasource Pill</strong>: If a dataset was created from a Dataset, an Index View, or a CSV connection and the parent dataset name was changed, the child dataset pill name was not updated. This has been fixed.

* <strong>QV-14470 - Dataset Page - Viz Format Detection Improvement</strong>: We have improved the visualization format detection based on the data source data types in the data preparation step. The enhancement helps with correctly deciding the number of decimal places in numeric columns.

* <strong>AT-10081 - Unsubscription issue</strong>: Email tags of unsubscribed users didn't get removed from the UI (although they were unsubscribed). This has been fixed.

* <strong>AT-10082 - Resubscription issue</strong>: Users could not resubscribe to the email after unsubscribing. This has been fixed.

* <strong>AT-9983 - Emails without Unsubscribe</strong>: If an email was sent using the Qrvey mailing service when the mail did not have a signature or a customized template, the unsubscribe message was not included. This has been fixed.

* <strong>AT-8264 - User Personalization - Editing Charts in Edit Mode</strong>: The Edit Chart option has been moved to the edit mode when personalization is on.

* <strong>EX-149 - Grouped Tables - Column Sorting Preferences</strong>: The column sorting that the end user applied in the grouped table was not properly applied in the exported CSV-Summary. This has been fixed.

* <strong>EX-387 - PDF File size limit email via flows</strong> : When a page had many images and objects and the elements weighed more than 10.5 MB the email was not delivered when the workflow was activated. This has been fixed.

</div>