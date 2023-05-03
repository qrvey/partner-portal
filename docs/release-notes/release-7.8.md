---
id: release-7.8
title: Qrvey 7.8 (LTS)
sidebar_label: Qrvey 7.8 (LTS)
 
---
<div>

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../../v2-website/versioned_docs/version-7.8/release-notes/upgrade-notes.md) document for important notes and access to the upgrade link. 

## Qrvey 7.8.4

Release Date: 2023-05-02

### New Features and Enhancements
* Added support for Athena V3 when performing Data Source joins. 
* Improved the performance of Content Deployment when creating Packages with large numbers of records. 
* Improved the formatting of bar visualizations in table charts. 

### Fixes
* Fixed a bug in Datasets in which users were unable to select the elements inside an array of objects. 
* Fixed a bug in Datasets in which the application did not correctly display new columns. 
* Fixed an error that occurred with an S3 connector with multiple files indicating that the update has exceeded the maximum allowed size. 
* Fixed an error that occurred in some situations when the user applied a sort to grouped tables. 
* Fixed an error that occurred when a grouped table was included in the Export to CSV process. 
* Fixed a bug in the Analytics widget in which changing the View preference did not update the view as expected. 
* Fixed an error that occurred when attempting to create a Package based on an Application that contained more than 100 workflows. 
* Fixed a bug in Content Deployment in which tokens were not correctly resolved when updating an application using the Auto Map button.
* Fixed a bug in Content Deployment in which images appeared broken in the deployed applications. 
* Fixed a bug in Content Deployment in which new images in an application were not properly added to the canvas. 
* Fixed a bug that occurred when changing the filter size in heat maps. The cells did not correctly resize to reflect the change. 
* Fixed an error that occurred when using the API to create a workflow with the **loading** parameter set to **false** (`loading:false`).

## Qrvey 7.8.3

Release Date: 2023-03-30

>**Note**: This patch contains all features, enhancements, and fixes from the previous 7.8.x releases.  

### Fixes
* Fixed an error that occurred in Page Builder when deleting a chart that uses filters from the same dataset. The application incorrectly deleted the filters as well. 
* Fixed an error that occurred when loading a CSV file with special characters in the header.
* Fixed an error that occurred in a chart with localization applied. In some situations, the Date values were not translated correctly in a chart.
* Fixed an error that occurred in some situations when multiple delete or update tasks were performed together very quickly. 
* Fixed a bug in datasets that occurred when a user unchecked Analyze column option and then updated a Query. The application incorrectly unchecked the Read column option.
* Fixed an error that occurred in some situations after loading a dataset. The Analyze page incorrectly remained blank and did not display any information. 
* Fixed an error that occurred in some situations when creating a new dataset from shared data. The new dataset was incorrectly listed multiple times in the Select the Data Source dialog. 
* Fixed an error that occurred in Transformations when the Subtract option is selected. The system incorrectly required the values to be subtracted to include the minus (‘-’) sign. 

## Qrvey 7.8.2

Release date: 2023-02-27

>**Note**: This patch contains all features, enhancements, and fixes from the previous 7.8.x releases. 

### Fixes
* Timeout WatchDog error when pumping large join result files (bug fix)
* Cascading Append and Update syncs did not work in 7.8.1 (bug fix)
* AWS Batch - job would get stuck for Postgres connector (bug fix)
* AWS Batch - Error with large custom SQL (bug fix)
* Under rare circumstances data sync would stop without adding any information in the activity log. This issue has been fixed (bug fix)
* Datasets that were created programmatically prior to 7.3 and had no “tableSchema” failed to load upon upgrade to version 7.8.0. This issue has been fixed (bug fix)
* Data load for very large cases where a dataset is used as data source sometimes caused a timeout (bug fix)
* In rare cases DynamoDB services failed with a “service unavailable” error, causing data load failure (bug fix)
* In rare cases data sync would repeat unnecessarily, ignoring that it had already run (bug fix)
* For datasets that had joins or unions and were created before version 7.4, a change in 7.8.0 would cause them to lose their join map and no longer load correctly. This issue has been fixed (bug fix)
* Under special circumstances the tooltip for the data source name on the Dataset Design screen would show as “undefined, undefined” (bug fix)
* Inspecting the data source for new and removed columns in a Dataset View would remove geolocation settings. This issue has been fixed (bug fix)
* When a Dataset View was used as the source for a join and then the view was removed, the view would lose its connection with its source. This issue has been fixed (bug fix)
* Charts that were based on Dataviews from shared Datasets did not render (bug fix)
* The DateAdd transformation was not returning the correct result if the Value field contained a data toke. This issue has been fixed (bug fix)

* Line charts - Running Table Calculations with continuous category were plotted as 0 (bug fix)
* Line & Symbol Multi-series charts - Zeros were not plotted with continuous category (bug fix)
* X/Y charts - Value axis labels were repeated for small range of data (bug fix)
* Charts with legends - Tooltips were not displayed (bug fix)
* Charts - Start of the week was set to Monday (bug fix)
* Charts - Data labels were not displayed in Safari browsers (bug fix)
* Table charts - Tooltips of columns with ellipses flickered (bug fix)
* Heatmaps - Cells contained an invisible label, preventing them from getting smaller as the container was resized (bug fix)
* Multi-series Combo chart - Chart would break if the x-axis label was enabled (bug fix)
* When two or more date picker filters were added to a dashboard, they would not work (bug fix)
* Content Deployment was stopping active data sync processes. This issue has been fixed (bug fix)
* Content Deployment would overwrite Global and Page-level filters (bug fix)
* Content Deployment moved published pages to an unpublished state (bug fix)
* Content Deployment was on only deploying one dataset view (bug fix)
* Export of Tabular View did not show the correct selected columns (bug fix)
* Some export requests were failing and emails not sent due to a timeout error (bug fix)
* If security settings of a column were changed after the product was in production, in rare cases they would still be displayed due to caching (bug fix)
* Under rare circumstances the PDF export of some charts would fail / come out as blank (bug fix)
* There was a change in export/answers endpoint in 7.4.3. The old response has been restored to maintain backward compatibility
* With Content Deployment, Dataset Views created from unions or joins of child datasets did not load (bug fix)
* With Content Deployment, Update Syncs on child datasets did not run (bug fix)
* With Content Deployment, when the installation or update of a job failed, it would sometimes cause an error in spin-up and creation of pages (bug fix)


## Qrvey 7.8.1

Release Date: 2022-12-29

>**Note**: This patch contains all features, enhancements, and fixes from the previous 7.8 release. 

### Fixes

* **Data columns with special characters in their names didn’t show values in Tabular View (bug fix)**: This has been fixed.

* **Metrics - Font Type is not Applied (bug fix)**: With embedded Metrics, some style settings like the font type did not apply if changed. This has been fixed.

* **Small Multiple - Multiple labels - works only with a refresh (bug fix)**: When a user applied small multiples to a chart, the option Multiple labels would not work, it only worked when it was forced to render with the borders option. This has been fixed.

* **TransformChunk lambda is consuming all lambda concurrency (enhancement)**: Previously, the transformChunk lambda did not have reserved concurrency, so it was consuming all the lambda instances available during a big data load job with a lot of rows and this could cause the rest of the API or lambda calls to throw throttling errors. This has been fixed.

* **Data Source pills showed inaccurate error messages when the user could not access a database (enhancement)**: This has been fixed.

* **On Click Go to URL on Table charts had a slow response (enhancement)**: This has been fixed.


## Qrvey 7.8 

Release Date: 2022-11-30

### New Features & Enhancements

#### Data Preparation

* **Connections -  Table View and Card List View**: Table view and additional information in the card view have been implemented for connections.

* **Get Data Source Columns On Demand**: With this version data source is only inspected for new and removed columns when explicitly requested by the user. The new behavior leads to better performance of the dataset design screen.

* **If/Else Transformation - Testing Functionality**: Testing functionality has been added to the IF/Else transformation.

 
#### Data Analysis & Visualization

* **Multiseries Combo Chart**: A new chart type that can combine multi series with combo chart features has been added to the charts collection. <a href="/docs/video-training/release/version-7.8#multiseries-combo-chart" target="_blank" className="tooltip"><img alt="Multi-series Combo Chart" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Indicators in Grouped Tables**: Grouped Table charts can now be configured to show a comparison of data between two time periods, using icons. The indicator is also reflected in PDF exports. <a href="/docs/video-training/release/version-7.8#indicators-in-grouped-tables" target="_blank" className="tooltip"><img alt="Indicators in Tables" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Excel Exports**: We added Excel as a new export format, alongside other export options, including Subscriptions and Automation (Workflows).

* **Complete Bucket Value List**: We improved the bucket list to include all of the values in the data column.

* **Customizable Table Bar Color**: We added the option to let users change tables´ bar colors in the configuration object, giving them more control over the style of the chart.

* **Page Builder Performance Improvement**: Another round of performance improvements lead to up to 10% reduction in load time of Dashboards.

 
#### Administration

* **Different Options For Email Provider**: Users now have the choice of email provider for managing all outgoing system emails. 

* **Configurable Email Template**: System emails are gradually turned into configurable templates. The process has started with the “Forgot Password” email. 

* **Exports and Imports of Deployment Definitions**: We added the options to let users download or upload Deployment Definitions as ZIP files. This allows for Deployment Definitions to be moved between disconnected instances.





</div>