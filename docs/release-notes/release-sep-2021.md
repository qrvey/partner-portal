---
id: release-last
title: Qrvey Version 6.3
sidebar_label: September 2021
---
<div style={{textAlign: "justify"}}>



## New Features & Enhancements

Click <a href="/docs/video-training/release/version-6.3" target="_blank"> <strong>here</strong></a> to access demo videos of some released features.

### Data Preparation

* <strong>QV-13313 - Dataset API v5 - Array Flatten and Dataset Write Transformations</strong>: You can now use Array Flatten and Dataset Write transformations supported by the Dataset API v5.

* <strong>QV-13787 - Token Authentication in Datasets Widget</strong>: With this release, Datasets widget has joined the widgets that support Token Security. Other forms of authentication like cookies, continue to be supported.

* <strong>QV-9975 - Show Database Schema when selecting tables or views</strong>: The schema names are shown together with table and view names in connection dialog for more clarity.

* <strong>QV-13575 - File Upload - Support Compressed Files</strong>: You can now upload compressed gzip files when using a File Upload Connection. 
 


### Data Analysis & Automation


* <strong>AN-14038 - Match colors across charts - Multiseries, Pie and Funnel</strong>: You can now enable the “Match colors across charts” option for Multi Series, Pie and Funnel charts. 

* <strong>AN-14002, AN-14037 - Sorting by any column in Combo, Multiseries, and Funnel charts</strong>: The option to sort a chart by numeric and date columns that are not included in it has been added to Combo, Multiseries, and Funnel charts. 

* <strong>AN-13794 - Conditional Formatting in Funnel chart</strong>: You can now highlight values in a Funnel chart based on a data threshold.

* <strong>AN-13862 - Data Tokens in Filter Modal</strong>: You can now add and use data tokens in any text field when creating or editing a filter. 
 
* <strong>AN-10129 - Drilldown in Combo charts</strong>: The drill down action from data points has been enabled for Combo charts.

* <a href="/docs/video-training/release/version-6.3/#grouping-datetime-on-distinct-date-periods" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png" /><span class="tooltiptext">Watch video</span></a> <a href="" target_blank></a><strong>AN-13780 - Grouping datetime on distinct Date Periods in Charts and Tables</strong>: You can now select different Date Periods to group the information in charts and tables, independently of other date parts. E.g. grouping by month names rather than month + year.

* <strong>AN-13791 - Tokens in custom tooltips</strong>: You can now use tokens in the header of data tooltips in the chart builder. 

* <a href=" /docs/video-training/release/version-6.3/#subscriptions" target="_blank" class="tooltip"><img alt="Filters v2.0" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png" /><span class="tooltiptext">Watch video</span></a> <a href="" target_blank></a> <strong>AT-9306 - Pages and Charts Subscription</strong>: Creators can enable the option to subscribe to pages and individual visualizations in the Page View widget. With this option the end user can subscribe to receive a scheduled PDF of the pages or charts via email. 

* <strong>EX-395 - Links for all emails containing exports</strong>: All export emails now contain a link to download the file from, instead of having the file as an attachment. 

* <strong>EX-49 - CSV Downloads - Data Limit increase</strong>: CSV export now supports 800K records dependent on available resources.


## General Tweaks & Bug Fixes

* <strong>QV-14147 - Transformations - Drag and Drop UX Improvement</strong>: The Transformation UI has been improved to suggest drop zones more clearly. 

* <strong>QV-12361 - Dataset - Discard changes</strong>: You can now discard changes after canceling a Data Loading process in order to go back to the last loaded version of the Dataset. 

* <strong>AN-14095 - Chart Panel too small for title to be fully shown</strong>: When a chart panel was too small, the chart title did not fully show. Now a tooltip is shown with the full chart title.

* <strong>AT-9615 - Page Builder - Fixed header</strong>: You can now scroll down a page and the Page Header stays anchored to the same part of the page and does not scroll with the page.

* <strong>AT-9759 - Workflow Activity Logs not recorded</strong>: Some actions did not get logged in the workflow activity logs. This has been fixed.

</div>