---
id: release-last
title: Qrvey 7.2
sidebar_label: Qrvey 7.2
---
<div style={{textAlign: "justify"}}>

Release Date: 2022-06-02

>**Note:** If you wish to upgrade to this version, please contact the CX team if you have a *Managed Infrastructure* contract, or use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/autodeployappCloudformation-enterprise-7.2.json" target="_blank">this upgrade link</a> and follow the directions in the <a href="/docs/get-started/upgrading-new-version" target="_blank">Upgrading to a New Version</a> article to upgrade your instance(s). 
<br/>

## New Features & Enhancements
 
### Data Preparation
 
* <strong>QV-15697 - Column Discovery - Push API Datasets</strong>: When enabled, columns can now be discovered when posting data to a Dataset using the APIs. Date columns can be automatically identified as such if they are in ISO 8601.
 
* <strong>QV-15664 - Column Discovery for Joined Data Sources</strong>: Users can now enable Column Discovery when working with multiple sources in a Dataset.
 
 
* **[QV-13016 - Formula Transformation - Updating Hierarchical Object Columns and Array Columns](../ui-docs/datasets/datasets.md#transformations)**: The Formula transformation now supports updating object, object array, numeric array, and text array columns. Users can output a JSON to update these.
 

 
### Data Analysis & Automation
 
 
* <strong>AN-15374 - Localization of Input Components for Filters, Charts and Tables</strong>: Entering of dates and numbers in a user's preferred format (and not by default in US format) is now available through the localization of input components.
 
 
* **[AN-15533 - Ability to Modify Columns Text Alignment in Tables](../ui-docs/dataviews/chart-types/table.md#styles)**: In Table charts, text and date columns are aligned left and numeric columns aligned right by default, but now users have the option to modify these settings to assign their preferred alignment to each column added to a table.
 
 
* <strong>AN-15686 - Improved Formatting Controls for Multi-Series Chart</strong>: Values format and date format menu in the shelf have been added to multi-series charts, as well as the option to enter decimal places the same way as in Bar Charts.
 
 
* **[AN-15829 - Conditional Formatting With Columns Not in the Table (Grouped Table Charts)](../ui-docs/dataviews/chart-types/table.md#styles)**: Columns that have not been added to the grouped table can now be used to create conditions.
 
 
* **[AN-15678 - Complex Logic for RLS in the Configuration Object](../admin/record-level-security.md)**: Implementers can now have more options to define complex logic when setting RLS permissions through the configuration object.


* **[Feature Visibility in the Page Builder Widget](../embedding/widgets/app-building/page-builder.md)**

  * <strong>AT-10581/AT-10594 - Navigation and User Mgmt.:</strong> You can now control the visibility of the Navigation and User Mgmt sections in the embedded Page Builder widget.
  * <strong>AT-10731 - Exporting General Data</strong>: You can now control the visibility of all actions related to exporting general data (CSV, PDF, JPG) in the Page Builder embedded widget.
  * <strong>AT-10602/AT-10621/AT-10732 - Create, Manage, Publishing Pages</strong>: You can now control the visibility of the actions related to creating, managing and publishing pages and applications in the Page Builder embedded widget.
 

* **[AT-11091 - Feature Visibility - Page Builder “Lite Version”](..embedding/widgets/app-building/page-builder.md)**: With this option widget implementers can control the visibility of multiple features in the Page Builder embedded widget by using a single property called “LiteVersion”, all at once.
 
 
### Admin Center
 
* <strong>ADMIN-6016 - JWT Authentication Logic</strong>: An improved server-based session management model was implemented to solve size limitations of the HTTP header where the JWT token is stored and passed.
 
 
* <strong>ADMIN-6154 - Detect Authenticated Users to Redirect to a Specific Page</strong>: A redirection mechanism was created to detect if users are authenticated and redirect them to a specific page. If the user is not authenticated the system will redirect them to the login page.
 
 
* **[CD-1467 - Content Deployment - Support for Unknown Connections for Deployment](../admin/content-deployment/definitions.md)**: Content Deployment has been improved to recognize types of connections that are not yet supported as “Unknown” and allow users to deploy applications that use these connections (E.g. MongoDB, DynamoDB, Snowflake).
## General Tweaks & Bug Fixes
 
* <strong>ADMIN-4495 - Login/Signup Emails Using Capital Letters Cause Error (bug fix)</strong>: An issue that prevented users from signing up with emails containing uppercase letters has been fixed.
 
 
* <strong>ADMIN-5551 - Implement CORS Securely by Associating a Validation List (security fix):</strong> The application is no longer vulnerable to cross-origin resource sharing after having implemented CORS securely by associating a validation list (whitelist).
 
 
* <strong>AN-14026 - Filter Creation - Include Values Dynamically with "Select All" Option (improvement)</strong>: When new values are added to a dataset the new values are automatically added to any filter that is based on that dataset and has the “Select All” option enabled.
 
* <strong>AN-15348 - Pagination ON by Default in Tables (improvement)</strong>: The default configuration setting for pagination in simple Table charts has been set to be on. 
 
 
* <strong>AN-15878 - X-axis Cut Off From Panel (bug fix)</strong>: When removing data labels and changing the label rotation the x-axis labels were being cut off. This issue has been fixed.
 
 
* <strong>AN-15912 - Chart Builder Filter is not applied to the DrillDown Chart (bug fix)</strong>: When drilling down on a chart the filters created inside Chart Builder were not applied. This has been fixed.
 
* <strong>AN-16222 - CR-512 - Column excluded from Analytics does not work for RLS (bug fix)</strong>: A fix was made so hidden columns from Data Visualizations can now be used in RLS.
 
 
* <strong>AN-15659 - Pointing to Inexisting Columns Returned Filtered Data in the Response (security fix)</strong>: With invalid expressions, the entire data was being returned. This issue was fixed. Important note: In the solution when using “User Filters” in the config object, it is now required that the “qrveyid” property is passed. 
 
* <strong>AN-15659 - Some Analytic Endpoints Ignore Regular Filters Under Special Circumstances</strong>: If the developer passes the wrong columnId for a filter, the filter value is ignored and all data is returned. This issue does not pose a security risk, as it doesn’t apply to RLS filters. The list of the affected endpoints is available upon request. This has been fixed.
 
* <strong>AN-15912 - Chart Builder Filter is not applied to the DrillDown Chart</strong>: When a user filters from the chart builder, the drill-down chart does not show the filtered data. This has been fixed.
 
 
* <strong>AT-15894 - Pagination Not Adjusted After Filters are Applied (bug fix)</strong>: Table charts were not adjusting the number of records and pages shown in pagination after a filter was applied. This issue has been fixed.
 
 
* <strong>AT-11306 - UpdatePage Endpoint Not Working Correctly (bug fix)</strong>: After unpublishing pages using this endpoint, they remained visible and listed in the published pages. This endpoint has been updated and its documentation corrected.
 
* <strong>AT-11306 - UpdatePage Endpoint Is Not Working Correctly</strong>: When a user sets “false” on a “published” page with the “Update” endpoint, it is set to “true” in response to the “Get Published Pages” endpoint. This has been fixed.
 
* <strong>EX-981 - Max Data Points Message for Table Export to PDF (improvement)</strong>: Users are now informed when the table data export to PDF or CSV has max data points filters applied.
 
 
* <strong>EX-1077 - Fix Sorting in Bar, Line, Symbol for CSV Summary Exports (improvement):</strong> Sort order in CSV Summary export has been modified to follow the sort order set for the chart.
 
 
* <strong>QV-15588 - Connections - Highlight required fields when not filled in (improvement)</strong>: When creating or editing Connection, required fields are now highlighted if they are not filled in.
 
* <strong>QV-15499 - Dataset UI - Remove Data Source pill and column splitter (improvement)</strong>: There’s no longer a splitter between the Data Source pills and the columns list. Also, the UI has a single scroll so navigation is easier.
 
* <strong>DR-3373/CX-864 - Update to the Append Data Sync Process for Datasets With Joins (bug fix)</strong>: A change was made to the Data Sync process to avoid unnecessary updates which happened under rare circumstances.
 
* <strong>DR-3389 - CR-516 - Remove or handle special characters in column names (bug fix)</strong>: A fix was made to support special characters in column names.
 
* <strong>DR-3416 - Join Lakes - Compress Files for Lower Athena and S3 Costs (improvement)</strong>: This change was made to the join process to reduce Athena and S3 costs. File sizes may be reduced to 20% of their previous sizes.
 
* <strong>DR-3389 - Parsing from quoted column name with numeric datatype fails</strong>: Uploading a CSV file that contains quoted text in a column name and setting the column to numeric causes an error in the loading process. This has been fixed.
 
</div>
