---
id: release-last
title: Qrvey 8.5 (LTS)
sidebar_label: Qrvey 8.5 (LTS)
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
---

# Qrvey 8.5 (LTS)

### Qrvey 8.5.1 (LTS)

Release Date: 2024-05-31

> **Note:** If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../upgrade-notes) document for important notes and access to the upgrade link.

### General Tweaks & Fixes

- **readFromSource validation issue** – Bug fix that sets the `readFromSource` attribute as true if the attribute is not defined during the create column process.

- **Draft Dataset Reflects Source Updates** – After updating the source dataset, refreshing the target dataset will now allow child columns of an object array to be selected for analysis.

- **Union Draft Reflects Source Changes** – Creating a dataset that unions two sources containing object array columns will now properly refresh the unioned dataset if an array flatten is applied to the first union source.

- **Refresh Button Maintains Joined Dataset Integrity** – Refreshing the metadata of a target dataset sourced from a dataset containing an object array column will no longer experience an error, and changes to the source will be reflected in the target.

- **Data Sync Error Resolved for Joined Datasets** – Selecting a date column for a dataset sync that is a child of an object array will no longer cause an error during data synchronization.

- **Data Integrity Maintained with Composite Dataset Syncs** – Combining data synchronization types of Append and Update and Full Reload will no longer result in data loss in the composite dataset.

- **Full Array Values Displayed in Table Chart** – Visualizing a text array in a simple table chart will now display all values as a comma-delimited list instead of only the first value in the array.

- **Favorite Datasets Listed in Response** – Datasets marked as Favorite will now be returned in the Get All Datasets endpoint response.

- **Join with Flat Transformation Error Resolved** – A composite dataset that joins a source including an array flatten transformation will no longer throw a 'TYPE_MISMATCH' error when loading data if "Automatically add new columns" is selected.


### Qrvey 8.5 (LTS)

Release Date: 2024-04-10

> Note: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../upgrade-notes.md) document for important notes and access to the upgrade link.

### New Features & Enhancements

- **NodeJS 20 Upgrade** - The Node.js library has been upgraded to version 20, enhancing the longevity of this LTS version beyond the Node.js 18 deprecation date, which was utilized in previous releases.

- **Dashboard Performance Improvements** - Significant enhancements have been made to the dashboard's load and rendering processes, leading to noticeable performance improvements.

- **Support for ThemeId Property in Dashboards** - A new attribute, `themeId`, has been introduced to the config object of the Dashboard Builder and Dashboard View widgets, allowing developers to select and apply any existing theme to the dashboard.

- **Enhanced See Data Action** - The See Data Action, introduced in the 8.3 release to display underlying data for charts, now extends its functionality to metrics.

### General Tweaks & Bug Fixes

- **Dataset Mapping Enhancements** - The mapping algorithm for Content Deployment has been enhanced, resulting in a more robust and comprehensive solution.

- **Improved Record Size Limit in Content Deployment** - Enhancements to Content Deployment now accommodate a larger number and size of assets within a single package.

- **`readFromSource` Bug Resolution** - Resolved an issue where `readFromSource` could inadvertently be set to `false` on an RLS column.

- **Correction for Empty String Value Handling** - Addressed an unexpected error encountered when processing empty string values in numeric fields during joins.

- **Push API Issue Resolution** - Rectified a problem where no error appeared in the activity log even when all records failed in the Push API.

- **ReadFromSourceParam RLS Error Messaging** - An error message is now displayed when an attempt is made to change the `readFromSourceParam` flag to false for an RLS.

- **MongoDB Array Flattening Correction** - Resolved an issue in ColumnDiscover related to flattening nested objects in MongoDB connections.

- **Data JOIN Issue Fix** - Corrected a loading problem occurring during data joins with a union that has a join as a source.

- **Maintenance of Vertical Borders in Grouped Tables** - Addressed a problem where vertical borders reappeared in table charts when grouping tables and removing borders.

- **"In" Date Filter Correction** - Resolved an issue where the "In" operator in a Date Filter started from tomorrow instead of today.

- **Visibility Adjustment for Embed Button on AN Panel** - Corrected an issue where the Embed Analyze view button remained visible when embedding the AN panel.

- **Optimized Editing for Disabled Filters** - Fixed a scenario where editing a disabled global filter caused the values list to refresh without locating the value.

- **Go To URL Action Fix** - Resolved a malfunction in the Go to URL action under specific circumstances.

- **Tab View Error Correction in Snowflake** - Addressed an error displayed in the Analyze tab when altering permissions in Snowflake.

- **Expanded Search Limit in Buckets** - Increased the search limit in buckets to support over 1000 results.

- **Accuracy Improvement in Fill/Null Summary** - Corrected the percentage accuracy in the Fill/Null Summary for filled and null values amidst null records.

- **Grouped Table Tooltip Flickering Resolution** - Eliminated flickering tooltips in Grouped Table visualizations.

- **Token Display Correction in Filter Tooltip** - Fixed an issue where tokens displayed incorrectly in tooltips during chart filtering with date columns.

- **Dashboard Builder Lambda Alias Registration Correction** - Resolved a registration issue with the Page Builder Lambda alias for Dashboard Builder endpoints.

- **LC Metrics Integration in Automation Flows** - Implemented a manual patch to incorporate LC Metrics in Automation (Flows).

- **Embedding Flow Widget Style Correction** - Addressed a style override issue when embedding the flow widget.

- **Navigation Menu Custom Attributes Preservation** - Corrected a problem where publishing/unpublishing the Navigation Menu removed the `customAttributes` object from the Dashboard.

- **Chart Filter Removal in Dashboard Interact Mode** - Ensured the removal of chart filters from Interact mode in the Dashboard after deleting the chart.

- **Dashboard Section Stability Post-Upgrade** - Resolved a 500 error in the dashboard section post-upgrade from environment 7.8.x to 8.2.1.

- **Drilling Dashboard Edit Mode Error Resolution** - Corrected an error that displayed "This page is not available" when editing and closing the edit mode after drilling into the dashboard.

- **Filter Visibility in Flow Exports** - Rectified an incorrect "No Filters Applied" label when filters were indeed applied to an attachment in Flow exports.

- **Excel Panel Export Enhancement** - Implemented a step function for Raw-type export in Excel panel exports.

- **Inclusion of Automation Filters in Exports** - Added Automation Filters to the export's additional information for improved data clarity.

- **Enhanced Logic Object Support in Export Report Endpoint** - Upgraded the support for the logic object in the export report endpoint and refined the API documentation.
