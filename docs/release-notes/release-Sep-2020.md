---
id: release-sep-2020
title: Qrvey Version 5.5
sidebar_label: September 2020
---
<div style="text-align: justify">

## New Features & Enhancements

Click <a href="/docs/next/video-training/release/version-5.5"> <strong>here</strong></a> to access demo videos of some released features.

### Data Preparation

* <a href="docs/ui-docs/datasets/transformations"> <strong> QV-10808 - Transformations UI</strong></a>: We added a feature to let users create, manage, and apply transformations to a Dataset. This first transformation UI version allows JavaScript statements to run, has a formula editor, a list of columns, a list of functions and the output section. Creators can transform the data while it’s getting loaded to Elasticsearch. We are also allowing users to test transformations without having to load all of the data.


* <a href="docs/ui-docs/datasets/data-sync"> <strong>QV-11456 - Cascade Sync for Index View Datasets</strong></a>: We added the feature to let creators enable Cascade Sync for Datasets using Index View Datasets as Data Sources.

* **DR-1875 - New Data Transformation API**: This is a new API for clients that want to test their transformations before creating a Dataset or without loading all of their Data.

* **DR-1928 - Cost and Performance Enhancements**: Additional work has been done in the Data Loading Pipeline. Transformation cost when flattening data has been reduced in around 50%. Data extraction cost and DynamoDB costs were reduced too.

* **DR-1968 - Delete Records API**: New API to delete records from a Dataset or Elasticsearch Index.

* **DR-1955 - Backend Transformation - Dataset Lookup**: This new transformation allows users to query records from other Datasets while loading data. These records can be used for other transformations or simply for uploading them to a new Dataset. It will also work for “Partial Updates” so the record can be completed and transformations can be applied correctly.

* **DR-1947 - Transformations - API Lookup**: API Lookup transformation was enhanced to support a dynamic URL. This means that the URL can change depending on the information of each record.


 
### Data Analysis & Automation
* <a href="/docs/ui-docs/dataviews/chart-builder/"> <strong>AN-10432 - Table Calculations - Difference</strong></a>:
 We added a feature to let creators use “Difference” as Table Calculations on Bar and Line Charts. Creators can get the difference between the aggregated value in one partition and the same value in another partition. 


* <a href="/docs/ui-docs/dataviews/chart-builder/"> <strong>AN-10433 - Table Calculations - Percent Difference</strong></a>: We added a feature to let creators use “Percent Difference” as Table Calculations on Bar and Line Charts. Creators can get the Percent Difference between the aggregated value in one partition and the same value in another partition. 

* <a href="/docs/ui-docs/dataviews/chart-builder/"> <strong>AN-9793 - Table Calculations - Running Aggregates</strong></a>: We added a feature to let creators use Running Aggregate calculations like Running Average, Running Sum, Running Min, and Running Max on Bar and Line Charts. Creators can get a summation of a sequence of values from a selected Value column.

* <a href="/docs/ui-docs/dataviews/chart-builder/"> <strong>AN-10081 - Table Subtotal + Grand Totals</strong></a>: We added a feature to let creators apply totals by the group in the Table so that they can get Subtotals per group category for the selected aggregated column.

* <a href=""> <strong>AN-10160 - Clustering in Dot Maps</strong></a>: We enabled an automatic clustering to Dot Maps so that creators can see data points aggregated into smaller groupings of points, providing a better understanding of how many points exist within an area.

* <a href="/docs/ui-docs/dataviews/chart-builder/"> <strong>AN-10255 - Sorting on All Columns Used in Multiseries</strong></a>: We implemented a new method of applying sorting to Multiseries charts that is done via the column pills in the shelves' inside chart builder so that Creators can sort by Multiseries and not just the Label or Aggregated Values.

* <a href="/docs/ui-docs/builders/pages_actions/"> <strong>AT-6797 - Page Builder - Go To URL in Maps</strong></a>: We added a feature to allow a creator to set up a “Go to URL” on-click action for Dot Map and Bubble Map charts. So that end-users can now interact with them by clicking on a data point, and the widget redirects end-users to the URL configured by the Creator.

* <a href="docs/ui-docs/automation/send-actions/"> <strong>AT-6854 - Flows - Signature in Send Email</strong></a>: We added an option in the email action to include or exclude a signature, so creators should be able to decide if they want to include the company’s email signature as part of the email.


### Admin Center
* <a href="/docs/admin/elasticsearch-management/"> <strong> ADMIN-2766 - ES Management - Automatic Adjustments</strong></a>: Automatic Adjustment settings are also available in the Infrastructure section. Admins are now able to select if they want to perform automatic adjustments with Qrvey automatically adding more Elasticsearch servers in case space is running out.

* <a href="/docs/admin/elasticsearch-management/"> <strong> ADMIN-2767 - ES Management - Email Notifications</strong></a>: We enabled email options for different events that can happen as a result of ES Adjustments. Admins are able to choose which event-related email they want to receive for which a valid email address must be provided.