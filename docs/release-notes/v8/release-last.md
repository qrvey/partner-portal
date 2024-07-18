---
id: release-last
title: Qrvey 8.6
sidebar_label: Qrvey 8.6
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
---


# Qrvey 8.5 (LTS)

### Qrvey 8.5.1 (LTS)

Release Date: 2024-07-16

> **Note:** If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../upgrade-notes) document for important notes and access to the upgrade link.

### General Tweaks & Fixes

- **CR-1765 - Records are not being shown after login with OpenId** — Fixed an issue where records were not displayed after logging in with OpenId.
- **CR-1677 - Semi-colon Causes Error in Analyze** — Addressed an error caused by the presence of a semi-colon in the Analyze section.
- **CR-1719 - Dashboard Drill Action passes partial value** — Resolved an issue where the Dashboard Drill Action was passing only partial values.
- **AT-16575 - Failure When an export is performed simultaneously** — Fixed a failure that occurred when an export operation was performed simultaneously.
- **CR-1659 - Export Modal information is confusing** — Clarified the information displayed in the Export Modal to avoid confusion.
- **CR-1785 - Exports - Table Chart Array Values Incorrect** — Corrected the incorrect display of array values in table charts during exports.
- **DP-1500 - Text/Numeric Arrays: Only First Array Value Visible** — Fixed an issue when loading a dataset that had text or numeric array columns. In the Tabular view, text arrays display correctly, but numeric arrays only displayed the first value. Now, all array values are displayed correctly in both Tabular view and Table Chart.
- **DP-508 - Slow loading using autodiscover column feature** — Fixed an issue when datasets with a Postgres connector would timeout during the load process if the autodiscover column was turned on.
- **DP-1492 - Invalid LC Custom Query passes validation but errors out in Analyze section** — Fixed an issue when creating an LC dataset from Redshift using a custom query, where an object error appeared.
- **DP-1489 - Failure to Properly Display Discovered Columns in the UI** — Fixed an issue when the Column Discovery feature was active, and the source view on Snowflake was modified to include additional columns. The user interface now properly displays the discovered columns.
- **DP-1475 - Dataset/all endpoint is not returning Favorite datasets** — Fixed an issue where if any datasets were marked as Favorite, they were excluded from the response when the dataset/all endpoint was running.
- **DP-1450 - It's not possible to scroll through all the columns in Transformation Formula** — Fixed an issue when creating a Formula Transformation. If a user scrolled to the bottom of the Insert Values or Insert Functions lists, the scroll would not go all the way to the bottom, hiding options that should be available.
- **AN-20834 - Relative date not updating when changing operator** — Fixed an issue when the user edited a relative date filter and changed to the other operator. The filter endpoint is now updated, and the filter displays in the filter list.
- **AN-22556 - Date Tokens are saved as static dates in Chart Filters when editing a Chart** — Fixed an issue where tokens were not saved as tokens even when the chart has been edited.

### New Features & Enhancements

- **QRV-433 - NodeJS 20 Remaining Upgrade**
- **QRV-435 - Table Charts and Tabular View DevExpress Update**
- **QRV-428 - Enhanced Chart Panel Customization with CSS Variables**
- **QRV-405 - Handling of Large Response Size in Dashboards**
- **QRV-378 - Cost Tags to all Qrvey Services** — All Qrvey AWS resources have been tagged and are now differentiated from other resources. They can be explored and analyzed in the AWS cost explorer.
- **QRV-124 - Pixel Perfect in Content Deployment and Admin Support** — The new Pixel Perfect Report Builder is now supported in Content Deployment. Reports created by users inside applications are included in the deployment processes. Administrators can define the roles that have access to the Pixel Perfect Builder as well.

