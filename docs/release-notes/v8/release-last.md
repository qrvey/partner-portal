---
id: release-last
title: Qrvey 8.7
sidebar_label: Qrvey 8.7
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
---

Release Date: 2024-10-24

> **Note:** If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../upgrade-notes) document for important notes and access to the upgrade link.

### New Features & Enhancements

- **Make Filters Part of EUP:** A new "filters" property has been added to the End User widget’s configuration.
- **Support clientid and Personalizations in Automation:** The Automation (Flows) widget will now support the `clientid` property so flows may be saved for each end user. Additionally, when this property is provided users will be able to choose to export the original or personalized versions of the dashboards in case the personalized version has been created under the same `clientid`.
- **Implement Unsubscribe Page for Subscriptions:** An Unsubscribe page was implemented where users can confirm their wish to stop receiving emails from a subscription, scheduled export, and/or flow.
- **Additional Self-Service Options for All Charts:** Self-service options like exporting different formats, filtering, and fit-to-panel were added for all charts directly in the chart builder configuration menus.
- **Area Chart:** The chart builder now includes a new variation of a line chart called the Area Chart, which depicts one dimension and one metric, with the dimension typically being a continuous variable like time. For more information, please see [our video on Area Charts](../../video-training/release/version-8.7.md).
- **Pivoting for Export:** A new feature was added allowing users to configure a dataset with the necessary columns for pivoting, and then export the pivoted data to CSV from dashboards. Users can select which columns to include in the export, both from the original dataset columns and those generated from the pivoting. For more information, please see [our video on Exporting Pivoted Data](../../video-training/release/version-8.7.md).


### General Tweaks & Fixes

- **Security Token API Improvements — AWS Native Version** — Changed the way we create and process security tokens in AWS native version.  
    ***Note that old tokens will no longer work in 8.7***
- **Flatten Transformation Causing Athena Join Query Error** — Fixed an error during the Athena process when a joined dataset contains a flatten transformation applied as a pre-join transform.
- **Error Inspecting Columns to Fetch New Columns from Data Source** — Fixed an issue when refreshing columns to fetch new columns from the data source.
- **DynamoDB Clients Being Consumed When Creating, Updating, or Deleting Columns** — Fixed a random error when loading multiple datasets simultaneously, particularly involving column creation, deletion, or updates.
- **inputFormat.format Ignored When Loading Datasets with Date-Time Columns** — Fixed an issue where the inputFormat object was ignored when loading datasets with date-time columns.
- **Mechanism to View Large Table Lists in Connections** — Implemented a mechanism to view tables from a data source, regardless of how many tables exist.
- **Join: Garbage Collector Removes Lake Files When Job Fails or Is Canceled** — Fixed a data loss issue where the Garbage Collector incorrectly removed data lake files during a join when the process was interrupted during a compaction process.
- **Dataset Columns Displayed with Two Decimal Places by Default** — Fixed an issue where numeric columns defaulted to two decimal places instead of integers when creating datasets via API.
- **Join Lake Optimization Fails Due to UniqueId Column with Whitespace** — Fixed a failure in the Join Lake Optimization process caused by a unique identifier column containing a whitespace.
- **Data Loading Fails Due to Invalid Binary Character** — Fixed an issue where loading a dataset containing non-printable characters into AWS SQS caused a failure.
- **Duplicate Entries When Sharing Previously Shared Applications** — Fixed an issue where sharing a previously shared application created duplicate entries in the database.
- **Error During Upgrade Process Due to Memory Limitation** — Fixed a memory issue that caused the upgrade script to run out of memory and fail during the auto-deployment process.
- **Schedule Date Shows One Day Before Selected Date** — Fixed issues with date selection for certain time zones in Scheduled Exports.
- **View/Edit Schedule Popup Time Error Message Is Incorrect** — Improved error messages for set date and times in Scheduled Exports.
- **Exports Do Not Complete Due to Retry Limit** — Implemented error handling and retries for CSV raw exports.
- **baseUrl Only Applied for Exports of Zip Files** — Fixed an issue where the baseUrl property was only applied to exports of zip files, ensuring it now applies to all export types.
- **Cloning a Page with the Publish Parameter Not Working** — Fixed the clone page external endpoint to publish the page correctly when the `publish=true` parameter is included.
- **Conditional Formatting Removed When Moving Columns in Table Chart** — Fixed an issue where conditional formatting was removed when moving columns inside a table.
- **Filter By Action Not Triggered in Grouped Tables** — Fixed an issue where the Filter By action was not triggered when it was the only action on the chart.
- **Tabular View and Table Chart Not Showing Rows** — Applied improvements to Tabular View to support formulas with a large set of nested formulas.
- **See Data Action Removes Chart Filters When Changed to Dashboard Filters** — Fixed the See Data action so that it no longer removes chart filters when switching to dashboard filters.
- **Dashboards Stuck in Loading State When Personalization Disabled** — Fixed an issue where dashboards were stuck in a loading state when personalization was set to false.
- **Sign Up Removal:** This functionality is not used by customers anymore. The option to create new users can now only be done through the API and admin platform.

