---
id: release-last
title: Release & Upgrade Notes
sidebar_label: Release & Upgrade Notes
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
---

<div>

> **Upgrade Note:** If you are planning to upgrade to a new version of Qrvey, please read through the Upgrade and release notes on all prior versions, as they may contain platform changes that must be accounted for in the development process. You can follow the steps outlined in [Upgrading to a New Version](../../deployment/07-Upgrades/upgrading-versions.md) to perform your upgrade. If you have multiple Qrvey instances in the same AWS account AND region or if you deployed the instances in all private subnets (with VPN access) you would have to use the Advanced template to upgrade, please contact the Qrvey support team to get the Advanced upgrade link and necessary instructions for the upgrade. 

## Version 8.7

Release Date: 2024-09-30 

### New Features & Enhancements

- **Make Filters Part of EUP:** A new property has been added to the End User widget’s configuration, allowing users to enable or disable a mode where Filter Personalizations can be autosaved or not.
- **Support clientid and Personalizations in Automation:** The Automation (Flows) widget will now support the `clientid` property so flows may be saved for each end user. Additionally, when this property is provided users will be able to choose to export the original or personalized versions of the dashboards in case the personalized version has been created under the same `clientid`.
- **Implement Unsubscribe Page for Subscriptions:** An Unsubscribe page was implemented where users can confirm their wish to stop receiving emails from a subscription, scheduled export, and/or flow.
- **New Self-Service Options for All Charts:** Self-service options like exporting different formats, filtering, and fit-to-panel were added for all charts directly in the chart builder configuration menus.
- **Area Chart:** The chart builder now includes a new variation of a line chart called the Area Chart, which depicts one dimension and one metric, with the dimension typically being a continuous variable like time. For more information, please see [our video on Area Charts](../../video-training/release/version-8.7.md).
- **Pivoting for Export:** A new feature was added allowing users to configure a dataset with the necessary columns for pivoting, and then export the pivoted data to CSV from dashboards. Users can select which columns to include in the export, both from the original dataset columns and those generated from the pivoting. For more information, please see [our video on Exporting Pivoted Data](../../video-training/release/version-8.7.md).
- **Sign Up Removal:** This functionality is not used by customers anymore. The option to create new users can now only be done through the API and admin platform.

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
- **New Applications Not Published via API** — Fixed the update dashboard process to ensure new applications are published correctly via API.
- **Incorrect Actions Returned in Dashboards** — Fixed an issue where personalized actions were returned instead of original actions, depending on the dashboard version in use.
- **“Discard Changes” Feature in Dashboard Builder Not Restoring Chart Actions** — Fixed the “Discard Changes” feature to ensure chart actions are restored correctly in the Dashboard Builder.
- **Dashboards Stuck in Loading State When Personalization Disabled** — Fixed an issue where dashboards were stuck in a loading state when personalization was set to false.
- **Conditional Formatting Removed When Moving Columns in Table Chart** — Fixed an issue where conditional formatting was removed when moving columns inside a table.
- **Filter By Action Not Triggered in Grouped Tables** — Fixed an issue where the Filter By action was not triggered when it was the only action on the chart.
- **Tabular View and Table Chart Not Showing Rows** — Applied improvements to Tabular View to support formulas with a large set of nested formulas.
- **See Data Action Removes Chart Filters When Changed to Dashboard Filters** — Fixed the See Data action so that it no longer removes chart filters when switching to dashboard filters.
- **New Applications Not Published via API** — Fixed the update dashboard process to ensure new applications are published correctly via API.
- **Incorrect Actions Returned in Dashboards** — Fixed an issue where personalized actions were returned instead of original actions, depending on the dashboard version in use.
- **“Discard Changes” Feature in Dashboard Builder Not Restoring Chart Actions** — Fixed the “Discard Changes” feature to ensure chart actions are restored correctly in the Dashboard Builder.
- **Dashboards Stuck in Loading State When Personalization Disabled** — Fixed an issue where dashboards were stuck in a loading state when personalization was set to false.

### Upgrade Link

This version has modified how the platform generates JWT tokens, so existing tokens will need to be refreshed.
We highly recommend planning upgrades during off-hours to minimize disruptions to your users.

> **Note:** If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. If you wish to upgrade to this version without the help of the CX team, please use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/deploy/v8/autodeployappCloudformation-enterprise-8.7-plbvm.json" target="_blank">this upgrade link</a> and follow the directions in the [Upgrading to a New Version](../deployment/07-Upgrades/upgrading-versions.md) article to upgrade your instance(s).

---

## Version 8.6 

Release Date: 2024-07-16

> **Note:** If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../upgrade-notes) document for important notes and access to the upgrade link.

### New Features & Enhancements

- **Table Charts and Tabular View DevExpress Update** — Iframe has been removed from table charts, in order to improve the performance and loading times of tables.
- **Enhanced Chart Panel Customization with CSS Variables** — Additional CSS variables in Qrvey Widgets. Developers can customize options for the Font Size of Chart Panel Titles, Width of Title Header Line, and Chart Panel Box Shadow.
- **Cost Tags to all Qrvey Services** — All Qrvey AWS resources have been tagged and are now differentiated from other resources. They can be explored and analyzed in the AWS cost explorer.
- **Pixel Perfect in Content Deployment and Admin Support** — The new Pixel Perfect Report Builder is now supported in Content Deployment. Reports created by users inside applications are included in the deployment processes. Administrators can define the roles that have access to the Pixel Perfect Builder as well.
- **Handling of Large Response Size in Dashboards** — We implemented pagination in widgets where the information of the charts is requested such as Dashboards and Analyze. We also optimized the size of the conditional formatting configuration for charts.
- **Copy Table Data Disabled** — Starting in v8.6 users cannot copy content inside a table.

### General Tweaks & Fixes

- **Records are not being shown after login with OpenId** — Fixed an issue where records were not displayed after logging in with OpenId.
- **Semi-colon Causes Error in Analyze** — Addressed an error caused by the presence of a semi-colon in the Analyze section.
- **Dashboard Drill Action passes partial value** — Resolved an issue where the Dashboard Drill Action was passing only partial values.
- **Failure When an export is performed simultaneously** — Fixed a failure that occurred when an export operation was performed simultaneously.
- **Export Modal information is confusing** — Clarified the information displayed in the Export Modal to avoid confusion.
- **Text/Numeric Arrays: Only First Array Value Visible** — Fixed an issue when loading a dataset that had text or numeric array columns. In the Tabular view, text arrays display correctly, but numeric arrays only displayed the first value. Now, all array values are displayed correctly in both Tabular view and Table Chart.
- **Slow loading using autodiscover column feature** — Fixed an issue when datasets with a Postgres connector would timeout during the load process if the autodiscover column was turned on.
- **Invalid LC Custom Query passes validation but errors out in Analyze section** — Fixed an issue when creating an LC dataset from Redshift using a custom query, where an object error appeared.
- **Failure to Properly Display Discovered Columns in the UI** — Fixed an issue when the Column Discovery feature was active, and the source view on Snowflake was modified to include additional columns. The user interface now properly displays the discovered columns.
- **Dataset/all endpoint is not returning Favorite datasets** — Fixed an issue where if any datasets were marked as Favorite, they were excluded from the response when the dataset/all endpoint was running.
- **It's not possible to scroll through all the columns in Transformation Formula** — Fixed an issue when creating a Formula Transformation. If a user scrolled to the bottom of the Insert Values or Insert Functions lists, the scroll would not go all the way to the bottom, hiding options that should be available.
- **Relative date not updating when changing operator** — Fixed an issue when the user edited a relative date filter and changed to the other operator. The filter endpoint is now updated, and the filter displays in the filter list.
- **Date Tokens are saved as static dates in Chart Filters when editing a Chart** — Fixed an issue where tokens were not saved as tokens even when the chart has been edited.


### Upgrade Link

The 8.6 upgrade may take approximately 1.5 hours. During the upgrade, load data and CD installations are not possible, and the application cannot be used. We highly recommend planning the upgrade during off-hours to minimize disruptions to your users. 

If you wish to upgrade to this version without the help of the CX team, please use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/deploy/v8/autodeployappCloudformation-enterprise-8.6-rmwpa.json" target="_blank">this upgrade link</a> and follow the directions in the [Upgrading to a New Version](../deployment/07-Upgrades/upgrading-versions.md) article to upgrade your instance(s). If you have multiple Qrvey instances in the same AWS account AND region or if you deployed the instances in all private subnets (with VPN access) you would have to use the Advanced template to upgrade.

 ---

## Version 8.5.1 (LTS)

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

### Upgrade Link

If you are upgrading the Qrvey Platform from a version older than 8.5 LTS (for example, 7.8.x, 8.0, 8.1, 8.2.x or 8.3), you will experience downtime of approximately 45 to 60 minutes while the upgrade is running. We highly recommend planning the upgrade during off-hours to minimize disruptions to your users. 

If you wish to upgrade to this version without the help of the CX team, please use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/deploy/v8/autodeployappCloudformation-enterprise-8.5.1-ghtfw.json" target="_blank">this upgrade link</a> and follow the directions in the [Upgrading to a New Version](../deployment/07-Upgrades/upgrading-versions.md) article to upgrade your instance(s). If you have multiple Qrvey instances in the same AWS account AND region or if you deployed the instances in all private subnets (with VPN access) you would have to use the Advanced template to upgrade. Please contact the Qrvey support team to get the Advanced upgrade link and necessary instructions for the upgrade.

---

## Version 8.5 (LTS)

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

### Upgrade Link

Please use version 8.5.1 provided above.

---

## Version  8.4

Release Date: 2024-02-05

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../upgrade-notes.md) document for important notes and access to the upgrade link.


Version 8.4 implements major architectural improvements that provide multiple benefits to users. Installation and upgrade times are significantly faster (reduced to around 1 hour). This improvement applies to both new instances and subsequent upgrades from version 8.4.  
 
Note that, if you are upgrading from an older version, an automatic script updates your datasets to be compatible with this new architecture. As a result, your installation time may be extended, depending on the number of datasets.  

In addition, due to the architectural improvements, this version updates many endpoints. While we continue to support the existing endpoints as documented on our [API documentation site](https://qrvey.stoplight.io/docs/qrvey-api-doc/4b0d6d292c0b2-administration), we encourage you to update those at your convenience to leverage the new enhancements. 
The legacy endpoints are listed on a deprecation schedule that you can find on our [End-of-life Schedule](../end-of-life.md) page.  

### New Features & Enhancements

* **MongoDB Connector - Aggregation Framework**: Adds support for Aggregation Framework on the MongoDB Connector.
* **Radar Chart**: Adds a new type of chart that enables end users to compare the performance of multiple values in different areas. <a href="/docs/video-training/release/version-8.4#radar-chart" target="_blank" className="tooltip"><img alt="Radar Chart" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>
* **Chart Positioning and Axis Enhancements**: Adds the option for chart creators to manually control the offsets of X/Y and Pie charts. <a href="/docs/video-training/release/version-8.4#chart-positioning-and-axis-enhancements" target="_blank" className="tooltip"><img alt="Chart Positioning and Axis Enhancements" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>
* **Self-service Table Charts**: Adds the option for end users to manipulate various table chart configurations directly from the Dashboard View widget, without the need to open the Chart Builder. <a href="/docs/video-training/release/version-8.4#self-service-table-charts" target="_blank" className="tooltip"><img alt="Self-Service Table Charts" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>
* **[Schedule Exporting](../../composer/05-Working with Data/Datasets/03-Analyze/scheduling-exports.md)**: Adds additional options to the Export feature, including the option to choose file names as well as configure scheduled exports. Note that these features must be enabled in the Qrvey Admin Center.
* **Dark Theme**: Adds the Dark theme to the list of out-of-the-box themes available for Qrvey applications. With the addition of this new theme, new properties, such as canvas background color and panel background color were added to all themes. <a href="/docs/video-training/release/version-8.4#dark-theme" target="_blank" className="tooltip"><img alt="Dark Theme" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>
* **Data Load Finish Trigger**: Adds a new trigger in Automation flows to enable the flow to choose a new type of trigger that is activated when a data load job finishes. This trigger is enabled by default on new instances of the Qrvey platform. If you are upgrading from a previous version, please contact Qrvey Customer Support for assistance.
* **Download Manager Improvements**: Improves the Download Manager user interface to enable end users to better manage and view exports and schedules. Also adds support for Internationalization, Locale Formatting, and Timezones.

### General Tweaks & Bug Fixes

* **RLS security enhancements**: Improves the record-level security (RLS) configuration to ensure that RLS is always applied when a workflow is triggered.
* **More descriptive error message**: A vague error message (Response Error) that was thrown during the load process when the OpenSearch cluster was too small has been improved to be more descriptive.
* **Data Sets with unions and joins (bug fix)**. Fixes a variety of issues related to the data sync process involving datasets with unions and joins. 
* **Wrong tooltip on Sync Now button (bug fix)**: Fixes an incorrect tooltip message that displayed when the user hovered over the Sync Now button when the button was disabled. 
* **Simple, Grouped Table: disabling Sorting leaves a gap (bug fix)**: Fixes an issue that occurred when creating simple tables. The Menu Actions moved the table up, improperly leaving a gap at the bottom. 
* **Multiseries Cluster Bar default width is too wide (bug fix)**: Fixes an issue that occurred with clustered multiseries bar charts in which the tick mark labels are displayed at the wrong clusters. 
* **Download error (bug fix)**: Fixes a console error that occurred when a user resized the page while downloading a JPG in the Summary panel. The download failed and a console error appeared. 
* **Browser throws "Aw Snap" error when running out of memory (bug fix)**: Fixes a browser error that occurred when a user has more than 30 charts in any of the Analyze widgets and then scrolls down.
* **Subscriptions not executing on the correct date (bug fix)**: Fixes an issue that occurred in some situations in which the UTC offset (for example, UTC+2) was improperly calculated at the beginning and end of a month, resulting in incorrect execution of schedules. 
* **Subscriptions provided to incorrect recipient (bug fix)**: Fixes a rare issue in which the ZIP files of separate export requests that ran at the exact same time were given the same file name, causing the files to be overwritten and some recipients potentially receiving the wrong file. 
* **Content Deployment: Dataset View does not auto-map (bug fix)**.
* **Data Sync: CRON Expression does not save unless tested first (bug fix)**.
* **Dataset Data Sync configured with CRON schedule displays as Daily on Dataset Listing (bug fix)**.
* **Missing columns - the refresh dataset option changes the column Ids (bug fix)**.
* **Users were unable to log in after their roles were updated (bug fix)**.
* **Under special circumstances syncing a dataset view that is based on a dataset with RLS fails and the loader keeps spinning (bug fix)**.
* **The modal to compare Packages in Deployment Definition freezes under certain circumstances (bug fix)**.
* **Postgres connector - Error loading files using unload data to S3 (bug fix)**.
* **PATCH method for the shortcut endpoint to “Update specific attributes of a Dashboard” causes numOfCharts property to reset to 0 (bug fix)**.
* **Qrvey Admin Center: The Content Deployment intro modal displays even after  “Do not show this again” is selected (bug fix)**.
* **API Key exposed in Cloudwatch log under rare circumstances (bug fix)**.
* **Some metric visualizations display a 404 error after upgrading to version 8.2.1 (bug fix)**.
* **PDF and JPG exports fail after upgrading to version 8.2.1 (bug fix)**.
* **Table Bar visualization defaults to right-aligned for numeric column (bug fix)**.
* **Geolocation Group not shown in Chart Builder (bug fix)**.
* **Dataset View columns from different sources are renamed after inspecting the data sources (bug fix)**.
* **Side-by-side MultiSeries Bar Chart labels are not aligned (bug fix)**.
* **Get All Applications endpoint’s POST Body payload shows empty on the API documentation site (bug fix)**.


### Upgrade Link

If you are upgrading the Qrvey Platform from a version older than 8.4 (for example, 7.8.x, 8.0, 8.1, 8.2.x or 8.3), you will experience downtime of approximately 45 to 60 minutes while the upgrade is running. We highly recommend planning the upgrade during off-hours to minimize disruptions to your users. 

If you wish to upgrade to this version without the help of the CX team, please use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/deploy/v8/autodeployappCloudformation-enterprise-8.4-wnzhm.json" target="_blank">this upgrade link</a>. If you have multiple Qrvey instances in the same AWS account AND region or if you deployed the instances in all private subnets (with VPN access) you would have to use the Advanced template to upgrade. Please contact the Qrvey support team to get the Advanced upgrade link and necessary instructions for the upgrade.

---

## Version 8.3

Release Date: 2023-10-04

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../upgrade-notes.md) document for important notes and access to the upgrade link.

### New Features & Enhancements

* **Utility Join Performance for Data Syncs Improvement**: Adds a utility that rewrites the join lakes to remove old records and consolidate smaller files into larger files. 
* **Easy Copy of Columns IDs**: Adds the Copy Column ID option in Qrvey Composer to enable  software developers to easily obtain column IDs .
* **Query Start Time Date Picker Improvement**: In the Data Sync feature of Qrvey Composer, improves the usability of the Query Start Time field under Next Sync Query Window. 
* **Connection Type in Tooltip**: Adds the Connection Type information to the tooltip that displays when hovering over the Data Source pill.
* **Concatenate Transformation Improvement**: In the Transformations feature of Qrvey Composer, improves the usability of the Concatenate transformation by adding a second input by default.
* **[Customizing the Appearance Using CSS](../../software-developer/04-Widgets/css-variables.md)**: Adds the ability to customize the visual theme of embedded widgets, including colors, fonts, borders, positioning, and margins, using CSS style sheets. 
* **Open AI On Charts (beta)**: Adds the Smart Analyzer feature (in beta) to charts. Smart Analyzer establishes a link between ChatGPT and the data in charts and visualizations, enabling users to ask ChatGPT questions in natural language about their data. <a href="/docs/video-training/release/version-8.3#openai-on-charts-beta" target="_blank" className="tooltip"><img alt="Smart Analyzer" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>
* **Dynamic Threshold in Dial and Bullet Metrics**: Adds the option to set thresholds as fixed or dynamic values based on the aggregates of a column.
* **View Modes in Dashboards**: Adds the Interaction mode to Dashboard Builder, enabling users to review and interact with the dashboard just as they would in Dashboard View. <a href="/docs/video-training/release/version-8.3#view-modes-in-dashboards" target="_blank" className="tooltip"><img alt="Dashboard View Modes" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> 
* **Undo and Redo in Dashboards**: Adds the Undo and Redo options to the Design mode in Dashboard Builder.
* **See Data Action**: In Dashboard Builder, adds the See Data Action Type, enabling users to see the data in the dataset underlying the chart. <a href="/docs/video-training/release/version-8.3#see-data-action" target="_blank" className="tooltip"><img alt="See Data Action" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>
* **Custom Tokens In PDF/JPG Export**: In PDF and JPG exports, adds support for custom tokens as values of a metrics's threshold through emails and subscriptions.
* **Support Conditional Formatting for Crosstab Excel Export**: Adds support for conditional formatting to Excel exports of crosstab.
* **New Formula Functions**: Adds several new, advanced functions to [Standardized Syntax mode](../../composer/05-Working%20with%20Data/Datasets/03-Analyze/10-Formula%20Builder/using-standardized-syntax.md) in Formula Builder.
* **Nested Formulas Support**: Adds support for nested formulas in Formula Builder, enabling users to create formulas inside other formulas without having to repeat the calculations.

### Administration

* **Connections Security Fields**: Adds fields to enable users to update passwords and ARNs as plain text during the deployment configuration.
* **Saving Password Confirmation**: Adds an option to enable users to save and confirm the connection information during the deployment definition configuration update.

### General Tweaks & Bug Fixes

* **Error in dbdatasourcePump lambda after UNLOAD (bug fix)**: Fixes an issue that occurred after an UNLOAD process and the same lambda was reused. An error message incorrectly displayed preventing the loading from starting and sending the message to the DLQ. 
* **DynamoDB connector - Error creating dataset using query (bug fix)**: Fixes an issue that prevented creating a dataset using a query on DynamoDB connector because the test connection and next button were not activated. 
* **Error changing Bar Visualizations in Dashboard View (bug fix)**: Fixes an error that occurred when switching between bar and numeric visualizations in grouped tables in the Dashboard View widget.
* **Table charts with many conditions on the same dataset column causing an error (bug fix)**: Fixes an error that occurred in some situations when saving a table chart with many conditions defined for the same dataset column. 
* **Server error when applying sort with added formula column (bug fix)**. Fixes an error that occurred when applying a sort with an added formula column. 
* **IsNull formula not working correctly (bug fix)**: Fixes an issue in which an incorrect value was returned when a user created a formula using IsNull.
* **Pages not appearing in the subscriptions dropdowns if not added in the end user navigation menu (bug fix)**: Fixes an issue that occurred when a user created and published a dashboard without adding it to the navigation menu. The dashboard and its chart panels did not properly display in the subscription dropdown list. 
* **Duplicated Dashboard gets added to the Navigation Menu (bug fix)**: Fixes an issue in Dashboard View in which the Navigation Menu incorrectly listed duplicated Dashboards that were not added to the Navigation Menu in Qrvey Composer. 
* **Chart panel email download sends a file with the wrong filters applied (bug fix)**: Fixes an issue in which an emailed file had a filter applied that was not applied in the chart in the original tab.
* **Excel and CSV Export failing when exporting a lot of columns (bug fix)**: Fixes an error that occurred in some situations when exporting Excel and CSV files. 
* **Grouped Table Chart Excel export errors with subtotals (bug fix)**: Fixes reference errors that occurred when displaying subtotals above values.

### Upgrade Link
If you wish to upgrade to this version without the help of the CX team, please use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/deploy/v8/autodeployappCloudformation-enterprise-8.3-zouke.json" target="_blank">this upgrade link</a>. If you have multiple Qrvey instances in the same AWS account AND region or if you deployed the instances in all private subnets (with VPN access) you would have to use the Advanced template to upgrade. Please contact the Qrvey support team to get the Advanced upgrade link and necessary instructions for the upgrade.

---

## Version 8.2.2

Release Date: 2023-10-06
 
>**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../../../v2-website/versioned_docs/version-8.2/release-notes/upgrade-notes.md) document for important notes and access to the upgrade link.

#### General Tweaks & Fixes

* **RLS Support in Flows**: Improves the performance of RLS support for the New Data and Update Data triggers in Flows. Fixes a variety of issues related to RLS that affected the execution of Flows.
* **Dashboard Email Download with No Filters Applied (bug fix)**: Fixes an issue in which filters were not applied to charts in Dashboard exports.

### Upgrade Link

If you wish to upgrade to this version without the help of the CX team, please use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/deploy/v8/autodeployappCloudformation-enterprise-8.2.2-mpmws.json" target="_blank">this upgrade link</a>. If you have multiple Qrvey instances in the same AWS account AND region or if you deployed the instances in all private subnets (with VPN access) you would have to use the Advanced template to upgrade. Please contact the Qrvey support team to get the Advanced upgrade link and necessary instructions for the upgrade.

---

## Version 8.2.1

Release Date: 2023-09-12

### New Features & Enhancements

* **Open SSH Removal**: The Open SSH package has been removed from the container to avoid any associated security vulnerabilities.

### General Tweaks & Fixes

* **Long Running Query Not Working (bug fix)**: Fixed a npm notice error that occurred with the Long Running Query (AWS Batch) process.
* **MSSQL Connector Loading Error (bug fix)**: Fixed a timeout error that occurred when loading a MSSQL DB Connection.
* **Breadcrumb Text has Different Colors for Different Charts (bug fix)**: Fixed an issue in which the breadcrumb text for different charts displayed with different colors and styles. The breadcrumb trail between charts now uses the same font color and style.
* **Breadcrumb Overlaps 'Totals' Message (bug fix)**: Fixed an issue in which the totals message overlapped when drilling down from a chart to a table.
* **Echart Tooltips Undefined (bug fix)**: Fixed an undefined tooltip message that displayed when the user changed the date grouping of the date column in an X/Y chart.
* **Multiseries Bar Type 100% is Broken (bug fix)**: Fixed a bug in which Multiseries charts did not render when transitioning from stacked to 100% types. 
* **Table Aggregated Formulas - Server Error (bug fix)**: Fixed a server error that occurred when the user changed position to add an aggregated formula.
* **Dashboard View - Filter by Action Dates "No data found" (bug fix)**: Fixed a bug in which the “No data found” message appeared when the user applied a “filter by” action on a bar chart with values grouped by dates.
* **Subscription and End-User Personalization Changes Not Applied (bug fix)**: Fixed a bug in which enabling Subscriptions was not retained and End-User Personalization changes were not retained.
* **I18n Settings not Applied to AN-Dashboard Modals (bug fix)**: Fixed an issue in the AN embedded widgets in which the i18n settings were not applied.
* **Datasets Not Listed in Dashboard Builder (bug fix)**: Fixed a bug in Content Deployment that occurred when deploying an application with a Dataset View. The Dataset View was not listed in the dashboard.
* **Filter Control Data is Not Displayed Correctly When Using Buckets (bug fix)**: Fixed a “No data found” issue that occurred when an application with buckets was deployed with Filter controls added in its dashboards.

### Upgrade Link
If you wish to upgrade to this version without the help of the CX team, please use 8.2.2 given above.

---

## Version 8.2

Release Date: 2023-07-31

### New Features & Enhancements
* **Improved Performance of Loading Join Results**: Increased the speed of loading very large volumes of data that result from joining by approximately 60 times (60x).
* **Flatten Transformation Performance Improvement**: Increased the speed of processing Flatten transformations by up to 50 times (50x), which results in significant cost savings.
* **Live Connect Support for PostgreSQL**: Adds PostgreSQL to the collection of databases supported in Live Connect mode. Analysis can be performed directly from the database, rather than pooling the data in Qrvey’s internal repository.
* **[Setting the Shard Count](../../composer/05-Working%20with%20Data/Datasets/02-Design/07-Advanced%20Settings/dataset-design-advanced-settings.md)**: Adds the option for users to set the number of shards for their index based on the size of the dataset, which helps optimize the performance of loading and displaying data. 
* **Additional Options for [Data Sync Scheduling](../../composer/05-Working%20with%20Data/Datasets/02-Design/04-Data%20Synchronization/data-sync.md)**: Adds new options to the data sync scheduling feature such as Last Day Of The Month and Every n Days.
* **[Download Manager](../../composer/download-manager.md)**: The new Download Manager widget provides a central location to access and manage exported files, including images (JPG, PDF), data (CSV, Excel, PDF), and reports (PDF). It is embeddable and can be accessed at the account level in Qrvey Composer. It is currently in MVP and will have more features in the next few releases. <a href="/docs/video-training/release/version-8.2#download-manager" target="_blank" className="tooltip"><img alt="Download Manager" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>
* **[Standard Formula Syntax](../../composer/05-Working%20with%20Data/Datasets/03-Analyze/10-Formula%20Builder/using-standardized-syntax.md)**: Adds the option in Formula Builder to create formulas using a standardized language that works with any database engine supported by the Qrvey platform. This new syntax is based on the familiar functions used in popular spreadsheet products such as Microsoft Excel and Google Sheets. Formula Builder also retains its existing support for using a database-specific scripting language. <a href="/docs/video-training/release/version-8.2#formula-syntax" target="_blank" className="tooltip"><img alt="Standard Formula Syntax" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>
* **Modernization of Visualizations**: Improves the look and behavior of a variety of charts. This improvement is part of our Visualization Modernization initiative that will continue throughout this year and provide better, more consistent, and more performant charts.
* **Support Min/Max as Aggregates for Sorting of Date Type Columns**: Adds Min and Max as aggregate options for datetime columns that are selected for sorting of a chart.
* **System Tokens in Metric Comparison**: Adds support for system tokens in Metrics comparisons when using date columns.
* **Page Actions - Drilldown in Funnel Charts**: Enables Default and Custom Drilldowns for Funnel Charts.
* **Card and Table View in Flow List**: Updates the card and table views of the Flows UI to standardize the interface and improve the user experience.
* **Support for Drill-down Action in Exports**: CSV, Excel, and PDF formats now honor the drill-down action when exporting data.
* **[Buckets in Reports](../../composer/10-Pixel-Perfect%20Reports/filtering-data.md)**: Adds the Bucketing Data feature to Pixel-perfect Reports, enabling users to create and use buckets in their reports.

### General Tweaks & Bug Fixes
* **Labels (improvement)**: Updates the descriptions and labels in the Qrvey Admin Center user interface to improve the usability of the product. 
* **Transformation Error Messages (improvement)**
* **Data Labels overlapping in pie charts with many slices (behavior correction)**
* **Data Router Services sending a different error code(bug fix)**
* **S3 connector with multiple files discovering the same column multiple times (bug fix)**
* **Dataset Load Error With API V4 (bug fix)**
* **Filter label displaying incorrectly when deleting dataset (bug fix)**
* **Grouped Table Charts Failing to Export CSV and Excel (bug fix)**
* **Content Deployment not working with data syncs on (bug fix)**

### Upgrade Link
If you wish to upgrade to this version without the help of the CX team, please 8.2.2 given above.

---

## Version 8.1

Release Date: 2023-04-21

Pixel-perfect Reporting is available in version 8.1! The feature is in beta and currently includes MVP-level capabilities. Future versions will include additional tools and visualizations based on the feedback that we gather during the beta phase. This feature may be offered as a premium add-on to the Qrvey platform in the future.

### New Features & Enhancements
* **Column Discovery for JSON, Parquet, and CSV files**: We added the column discovery option to (nd)JSON (DynamoDB, S3, MongoDB), Parquet, and CSV data sources in the Dataset design phase.
* **Prompt Users to Save Draft Changes Before On-demand Data Sync**: We added a verification to let users decide if they want to apply pending changes to a dataset, if any, when they click the **Sync Now** button.
* **Support for Athena v3**: The Athena default has been v2, which will soon be out of support by AWS. With this enhancement, it’s easy to switch the Athena Workgroup to v3. Athena is used when performing Data Source joins.
* **[Support Time Zone Offset](../../software-developer/07-Timezone%20Settings/timezone-support.md)**: The Qrvey platform now supports the time zone offset. It is configurable based on the user’s browser, a chosen time zone, or the system’s default value.
* **Qrvey Theme 2 with Support for 100 Colors**: With this newly-added theme, we now support color palettes with 100 unique colors in sequence for visualizations with high numbers of data points.
* **CLS/RLS Support in the Automation Widget**: We implemented Column Level Security and Record Level Security on the Automation (Workflows) widget. Implementers can set these values in the widget’s configuration object when embedding the widget.
* **Analyze General Downloads and Summary Panels PDF Exports**: PDF export options are now consistent between the Analysis Views and Dashboards.
* **[Pixel-perfect Report Builder](../../composer/10-Pixel-Perfect%20Reports/overview-of-pixel-perfect-reports.md)**: The powerful tool, in development throughout 2022, was introduced in 8.0 and is now available in beta in this version. Pixel-perfect reports enable the creation and distribution of reports that are printable and accurate to the specified position and size. This type of report is ideal for invoices, statements, and forms that have a set layout. This feature can be enabled and disabled using the Features section of the Qrvey Admin Center.
* **Pixel-perfect Report Tab in the Features Section**: We added the option to enable and disable the new Pixel-perfect Report Builder in the Features section.
* **Time Zone Configuration**: With the newly-added support for time zones, we added the Time Zone configuration tab under General Settings in Qrvey Admin Center, enabling administrative users to configure the behavior of the feature in their applications.
* **Application Installation Notification**: As of 8.1, a notification is shown on Application cards when they are being installed or updated from a Content Deployment Job. This prevents users from attempting to change the application while it is being changed by the automatic process.

### General Tweaks & Bug Fixes
* **Some Data Not Shown (bug fix)**: All data was not displayed in cases when a cascading, full data sync was configured based on a shared dataset that had unions. This issue has been fixed.
* **Formats in Table Bar Visualization (bug fix)**: A formatting issue, in which all formats for bar visualizations inside Table charts were shown as abbreviated values, has been fixed. 
* **Dots In Columns (enhancement)**: We improved the data loading process to ensure that columns with dots in the name of hierarchical columns work in visualizations.
* **Table Chart CSV export is limited to Max Rows (enhancement)**: CSV Exports of Table charts, which was limited to Max Data Points, has been enhanced to allow for the export of all rows, up to the data engine’s limits, per a setting.

### Upgrade Link
Qrvey 8.1 includes important enhancements for validation of dataset settings, attributes and configurations. We have observed that data syncs running in the background during a platform upgrade to 8.1 are affected when the new dataset validation enhancements are put in place. To ensure that your data sync jobs continue to run in the background uninterrupted during the 8.1 platform upgrade, Qrvey Support will assist with a manual pre-upgrade installation of the new dataset validation enhancements. Having these validation enhancements in place prior to performing the platform upgrade will ensure that your data sync jobs continue to run and complete successfully during the upgrade process. If you are interested in upgrading to 8.1, please reach out to Qrvey Support and we will help you get the upgrade process started.

---

## Version 8.0

Release Date: 2023-02-01

### New Features & Enhancements
* **[Live Connect Datasets](../../composer/05-Working%20with%20Data/Datasets/01-Overview%20of%20Datasets/live-connect-datasets.md)**: We have added support for Live Connections to make the platform able to analyze data coming directly from Snowflake, and Redshift without loading them into Elasticsearch. Live Connect datasets can be used for analysis the same way as managed datasets. <a href="/docs/video-training/release/version-8.0#live-connections" target="_blank" className="tooltip"><img alt="Live Connect" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> 
* **Geographical Coordinates (Lat/Long)**: We now support latitude and longitude for creating geolocation groups. Bubble maps and Dot maps support these coordinates.
* **Manage Multiple Geolocations Groups**: With this version we support multiple geolocation groups simultaneously.
* **Dashboard 2.0**: What was called a Page has been renamed to Dashboard, and redesigned and enriched to support responsive design, single dashboard editing, and more. With the new change it also includes a list of Dashboards that can be searched and individually edited, like all of the other Qrvey content assets.
* **Responsive Grid**: We added the Responsive Grid as an option to create dashboards with better tools and a better responsive canvas that will allow users to publish reports on any device without compromising design.
* **Multiseries Combo Chart Exports**: We now support JPG, Excel, CSV, and PDF export options for the new Multiseries Combo chart.
* **Excel Export in Analyze View**: We implemented Excel exports from Analyze view.
* **Showing Users Related to the Role**: You can now see the users related to a role when configuring a send app action.

### General Tweaks & Bug Fixes
* **Creating Dataset Issue with MongoDB (bug fix)**: A bug that prevented large rows from a MongoDB collection to be loaded, has been fixed.
* **Shared Data Tab Waiting Icon (UX change)**: The loading UI of the “Shared Data” tab uses skeleton squares for waiting state, instead of the spinner.

### Upgrade Link

If you wish to upgrade to this version, please contact the CX team.

</div>