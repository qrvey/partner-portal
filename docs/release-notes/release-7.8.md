---
id: release-7.8
title: Qrvey 7.8.1 (LTS with the latest patch)
sidebar_label: Qrvey 7.8 (LTS)
 
---
<div>

Release Date: 2022-12-29

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../release-notes/upgrade-notes.md) document for important notes and access to the upgrade link. 


## New Features & Enhancements

### Data Preparation

* **Connections -  Table View and Card List View**: Table view and additional information in the card view have been implemented for connections.

* **Get Data Source Columns On Demand**: With this version data source is only inspected for new and removed columns when explicitly requested by the user. The new behavior leads to better performance of the dataset design screen.

* **If/Else Transformation - Testing Functionality**: Testing functionality has been added to the IF/Else transformation.

 
### Data Analysis & Visualization

* **Multiseries Combo Chart**: A new chart type that can combine multi series with combo chart features has been added to the charts collection. <a href="/docs/video-training/release/version-7.8#multiseries-combo-chart" target="_blank" className="tooltip"><img alt="Multi-series Combo Chart" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Indicators in Grouped Tables**: Grouped Table charts can now be configured to show a comparison of data between two time periods, using icons. The indicator is also reflected in PDF exports. <a href="/docs/video-training/release/version-7.8#indicators-in-grouped-tables" target="_blank" className="tooltip"><img alt="Indicators in Tables" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a>

* **Excel Exports**: We added Excel as a new export format, alongside other export options, including Subscriptions and Automation (Workflows).

* **Complete Bucket Value List**: We improved the bucket list to include all of the values in the data column.

* **Customizable Table Bar Color**: We added the option to let users change tables´ bar colors in the configuration object, giving them more control over the style of the chart.

* **Page Builder Performance Improvement**: Another round of performance improvements lead to up to 10% reduction in load time of Dashboards.

 
### Administration

* **Different Options For Email Provider**: Users now have the choice of email provider for managing all outgoing system emails. 

* **Configurable Email Template**: System emails are gradually turned into configurable templates. The process has started with the “Forgot Password” email. 

* **Exports and Imports of Deployment Definitions**: We added the options to let users download or upload Deployment Definitions as ZIP files. This allows for Deployment Definitions to be moved between disconnected instances.



## General Tweaks & Bug Fixes

* **Data columns with special characters in their names didn’t show values in Tabular View (bug fix)**: This has been fixed.

* **Metrics - Font Type is not Applied (bug fix)**: With embedded Metrics, some style settings like the font type did not apply if changed. This has been fixed.

* **Small Multiple - Multiple labels - works only with a refresh (bug fix)**: When a user applied small multiples to a chart, the option Multiple labels would not work, it only worked when it was forced to render with the borders option. This has been fixed.

* **TransformChunk lambda is consuming all lambda concurrency (enhancement)**: Previously, the transformChunk lambda did not have reserved concurrency, so it was consuming all the lambda instances available during a big data load job with a lot of rows and this could cause the rest of the API or lambda calls to throw throttling errors. This has been fixed.

* **Data Source pills showed inaccurate error messages when the user could not access a database (enhancement)**: This has been fixed.

* **On Click Go to URL on Table charts had a slow response (enhancement)**: This has been fixed.


</div>