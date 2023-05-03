---
id: release-last
title: Qrvey 8.1
sidebar_label: Qrvey 8.1
 
---
<div>

Release Date: 2023-04-21

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../release-notes/upgrade-notes.md) document for important notes.

Pixel-perfect Reporting is available in version 8.1! The feature is in beta and currently includes MVP-level capabilities. Future versions will include additional tools and  visualizations based on the feedback that we gather during the beta phase. This feature may be offered as a premium add-on to the Qrvey platform in the future.


## New Features & Enhancements

### Data Preparation

* **Column Discovery for JSON, Parquet, and CSV files**: We added the column discovery option to (nd)JSON (DynamoDB, S3, MongoDB), Parquet, and CSV data sources in the Dataset design phase.

* **Prompt Users to Save Draft Changes Before On-demand Data Sync**: We added a verification to let users decide if they want to apply pending changes to a dataset, if any, when they click the **Sync Now** button.

* **Support for Athena v3**: The Athena default has been v2, which will soon be out of support by AWS. With this enhancement, it’s easy to switch the Athena Workgroup to v3. Athena is used when performing Data Source joins.

 
### Data Analysis & Visualization

* **[Support Time Zone Offset](../special-features/timezone-support.md)**: The Qrvey platform now supports the time zone offset. It is configurable based on the user’s browser, a chosen time zone, or the system’s default value.

* **Qrvey Theme 2 with Support for 100 Colors**: With this newly-added theme, we now support color palettes with 100 unique colors in sequence for visualizations with high numbers of data points.

* **CLS/RLS Support in the Automation Widget**: We implemented Column Level Security and Record Level Security on the Automation (Workflows) widget. Implementers can set these values in the widget’s configuration object when embedding the widget.

* **Analyze General Downloads and Summary Panels PDF Exports**: PDF export options are now consistent between the Analysis Views and Dashboards.

* **[Pixel-perfect Report Builder](../ui-docs/pixel-perfect-reports/overview.md)**: The powerful tool, in development throughout 2022, was introduced in 8.0 and is now available in beta in this version. Pixel-perfect reports enable the creation and distribution of reports that are printable and accurate to the specified position and size. This type of report is ideal for invoices, statements, and forms that have a set layout. This feature can be enabled and disabled using the Features section of the Qrvey Admin Center.


### Administration

* **Pixel-perfect Report Tab in the Features Section**: We added the option to enable and disable the new Pixel-perfect Report Builder in the Features section.

* **Time Zone Configuration**: With the newly-added support for time zones, we added the Time Zone configuration tab under General Settings in Qrvey Admin Center, enabling administrative users to configure the behavior of the feature in their applications.

* **Application Installation Notification**: As of 8.1, a notification is shown on Application cards when they are being installed or updated from a Content Deployment Job. This prevents users from attempting to change the application while it is being changed by the automatic process.


## General Tweaks & Bug Fixes

* **Some Data Not Shown (bug fix)**: All data was not displayed in cases when a cascading, full data sync was configured based on a shared dataset that had unions. This issue has been fixed.

* **Formats in Table Bar Visualization (bug fix)**: A formatting issue, in which all formats for bar visualizations inside Table charts were shown as abbreviated values, has been fixed. 

* **Dots In Columns (enhancement)**: We improved the data loading process to ensure that columns with dots in the name of hierarchical columns work in visualizations.

* **Table Chart CSV export is limited to Max Rows (enhancement)**: CSV Exports of Table charts, which was limited to Max Data Points, has been enhanced to allow for the export of all rows, up to the data engine’s limits, per a setting.


</div>