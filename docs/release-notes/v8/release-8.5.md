---
id: release-last
title: Qrvey 8.5
sidebar_label: Qrvey 8.5
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
---

# Qrvey 8.5 LTS Release Notes

Release Date: 2024-04-05

> **Note:** If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../upgrade-notes.md) document for important notes and access to the upgrade link.

### New Features & Enhancements

- **NodeJS 20 Upgrade** - Node.js library has been upgraded to version 20 to extend the lifespan of this LTS version beyond the deprecation date of Node.js 18, which was the version used in earlier releases.

- **Dashboard Performance Improvements** - The dashboard load and rendering process has undergone extensive updates, resulting in noticeable performance improvements.

- **Support ThemeId Property in Dashboards** - A new attribute - `themeId` - has been added to the config object of the Dashboard Builder and Dashboard View widgets. This attribute allows developers to choose and apply any of the existing themes to the dashboard.


- **See Data Action - Phase 2** - See Data Action was added to allow users to see the underlying data for charts in the 8.3 release. The feature has been extended to cover metrics in this release. 

### General Tweaks & Bug Fixes

- **Dataset Mapping Fixes** - Improvements in the mapping algorithm of Content Deployment have made the solution more robust and complete.

- **Content Deployment Record Size Limit Improvement** - Content Deployment has been improved to allow more, and larger assets to be deployed with one package.

- **`readFromSource` Bug Fix** - Fixed issue where `readFromSource` could be set to `false` on RLS column.

- **Fixed Error when Handling Empty String Values** - Resolved unexpected Error when handling Empty String Values in Numeric Fields During Joins.

- **Fixed issue in Push API** - Fixed an bug where when all records fail, there is no error in activity log.

- **If `readFromSourceParam` is an RLS, an error message is shown when trying to change the flag to false.**

- **MongoDB Array Flattening Fix** - Addressed an issue in ColumnDiscover related to flattening nested objects with MongoDB connections.

- **Data JOIN Bug Fix** - Fixed a loading issue that occurred when joining with a union which has a join as a source.

- **Grouped Table Keeps Vertical Borders** - Fixed an issue in Table charts, when a user grouped tables and removed borders, the vertical borders reappeared.

- **"In" Date Filter Error Fix** - Fixed an issue when using a Date Filter in a dashboard, the "In" operator incorrectly starts from tomorrow instead of today.

- **Embed Button Visible on AN Panel** - Fixed an issue when the user embedded the AN panel, the Embed Analyze view button was visible.

- **Optimized Behavior Editing Disabled Filters** - Fixes an issue when a global filter was added and then disabled and consequently edited, the list of values refreshed, but the value was not found.

- **Fixed Go To URL Action** - Fixed an issue where the Go to URL action was not working in specific cases.

- **Fixed Tab View Error** - Fixed an issue where permission changes in Snowflake would show an error in the Analyze tab.

- **Expanded Bucket Search Limit** - Increased the Bucket Search limit to allow more than 1000 results.

- **Corrected Fill/Null Summary Accuracy** - Fixed an issue where the Fill/Null Summary showed incorrect percentages for filled-in and null values when there were null records.

- **Resolved Grouped Table Tooltip Flickering** - Fixed the flickering tooltips issue in Grouped Table visualizations.

- **Token Display Fix in Filter Tooltip** - Corrected an issue where tokens incorrectly appeared in tooltips when filtering charts using date columns.

- **Dashboard Builder Lambda Alias Registration Fix** - Resolved an issue where the Page Builder Lambda alias was not properly registered as a target for Dashboard Builder endpoints.

- **LC Metrics Support in Automation Flows** - Applied a manual patch to support LC Metrics in Automation (Flows).

- **Embedding Flow Widget Style Fix** - Addressed an issue where embedding the flow widget would overwrite the hosting styles.

- **Navigation Menu Custom Attributes Fix** - Corrected an issue where publishing/unpublishing the Navigation Menu would remove the `customAttributes` object from the Dashboard.

- **Chart Filter Removal Fix** - Fixed an issue where the chart filter was not removed from Interact mode in the Dashboard after the chart was deleted.

- **Dashboard Section Error After Upgrade** - Resolved a 500 error in the dashboard section that occurred after upgrading from environment 7.8.x to 8.2.1.

- **Drilling Dashboard Edit Mode Error Fix** - Addressed an error that returned "This page is not available" when drilling into the dashboard, then editing and closing the edit mode.

- **Filter Visibility Fix in Flow Exports** - Fixed an issue where the “Filters Applied” label incorrectly displayed “No Filters Applied” when a filter was applied to an attachment in Flow exports.

- **Excel Panel Export Step Function Implementation** - Implemented a step function in Excel panel exports for Raw-type export.

- **Inclusion of Automation Filters in Exports** - Included Automation Filters in the export's additional information for enhanced data clarity.

- **Logic Object Support in Export Report Endpoint** - Updated support for the logic object in the export report endpoint and refined the API documentation.