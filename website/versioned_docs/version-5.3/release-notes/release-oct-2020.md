---
id: version-5.3-release-last
title: Qrvey Version 5.6
sidebar_label: October 2020
original_id: release-last
---
<div style="text-align: justify">
Release Date: 2020-10-30

## New Features and Enhancementes 

Click <a href="/docs/next/video-training/release/version-5.6" target="_blank"> <strong>here</strong></a> to access demo videos of some released features.


### Data Preparation

* <a href="/docs/video-training/release/version-5.6/#text-transformations" target="_blank"><img alt="Text Transformations" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"></a> <a href="/docs/ui-docs/datasets/transformations/" target="_blank"><strong>QV-10897 - Transformations - Trim Text</strong></a>: With this transformation, you can now remove the specified characters at the start or at the end of the text in a column.

* <a href="/docs/video-training/release/version-5.6/#text-transformations" target="_blank"><img alt="Text Transformations" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"></a> <a href="/docs/ui-docs/datasets/transformations/" target="_blank"><strong>QV-10888 - Transformations - Uppercase</strong></a>: With this transformation, you can now make one or more columns uppercase.

* <a href="/docs/video-training/release/version-5.6/#text-transformations" target="_blank"><img alt="Text Transformations" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"></a> <a href="/docs/ui-docs/datasets/transformations/" target="_blank"><strong>QV-10889 - Transformations - Lowercase</strong></a>: With this transformation, you can now make one or more columns lowercase.

* <a href="/docs/video-training/release/version-5.6/#text-transformations" target="_blank"><img alt="Text Transformations" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"></a> <a href="/docs/ui-docs/datasets/transformations/" target="_blank"><strong>QV-10896 - Transformations - Round</strong></a>: With this transformation, you can now round numeric columns.

* <strong>QV-11717 - Error Visualization - Better Error Reporting</strong></a>: We improved the error messages when all records fail because of a bad transformation. When there is an error in the transformation, and you try to run a load, a friendly error message appears.

<br>

### Data Analysis & Automation

* <a href="/docs/ui-docs/dataviews/chart-builder/" target="_blank"><strong>AN-10272 - Table Calculations on Heatmap</strong></a>: You can now use the Table Calculations - Difference and Percent Difference in Heatmap Charts. You can get the difference and percent difference between the aggregated value in one row and the same value in another row.

* <a href="/docs/video-training/release/version-5.6/#table-calculation---partition-and-date-format" target="_blank"><img alt="Table Calculation - Partition and Date Format" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20"   class="video-icon-png"></a> <a href="/docs/ui-docs/dataviews/chart-builder/" target="_blank"><strong>AN-10772 - Table Calculations - Partitions</strong></a>: Previously, you were able to add “table calculations” to the entire Table, now you are also able to define partitions in order to have table calculations performed at each group level and not in the entire table.

* <a href="/docs/video-training/release/version-5.6/#chart-themes" target="_blank"><img alt="Chart Themes" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"></a> <a href="/docs/ui-docs/dataviews/chart-builder/" target="_blank"><strong>AN-9930 - Chart Themes - Text Styles</strong></a>: You can now customize themes for your Custom Charts that can be used to replace Qrvey’s predefined settings. You can change the default global Qrvey text styles shown in charts to something that suits them better.

* <a href="/docs/video-training/release/version-5.6/#conditional-formatting-in-tables" target="_blank"><img alt="Conditional Formatting In Tables" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" class="video-icon-png"></a> <a href="/docs/ui-docs/dataviews/chart-builder/" target="_blank"><strong>AN-9834 - Conditional Formatting - Table Chart</strong></a>: You can now “highlight” values by changing colors in a chart based on the data threshold.

* <a href="/docs/ui-docs/dataviews/chart-builder/" target="_blank"><strong>AN-10327 - Numeric and Date Formatting</strong></a>: You can now change the Numeric and Date Format of numeric and date columns in Grouped and Simple Tables.

* <a href="/docs/ui-docs/builders/pages_actions/" target="_blank"><strong>AT-7317 - Page Builder - Page Drill Bar Chart</strong></a>: You can now set up a “Page Drill” on-click action for Bar charts. On the end-user side you can interact with them by clicking on a data point, and the widget redirects you to the targeted page configured by the Creator.

* <a href="/docs/ui-docs/builders/pages_actions/" target="_blank"><strong>AT-7318 - Page Builder - Page Drill Line Chart</strong></a>: You can now set up a “Page Drill” on-click action for Line charts. On the end-user side, you can interact with them by clicking on a data point, and the widget redirects you to the targeted page configured by the Creator.

* <a href="/docs/ui-docs/builders/pages_actions/" target="_blank"><strong>AT-7320 - Page Builder - Page Drill Symbol Chart</strong></a>: You can now set up a “Page Drill” on-click action for Symbol charts. On the end-user side, you can interact with them by clicking on a data point, and the widget redirects you to the targeted page configured by the Creator.

* <a href="/docs/ui-docs/builders/pages/" target="_blank"><strong>AT-7303 - Builders - Toolbar Enhancement</strong></a>: We improved the UI of the builders toolbar buttons. The Create Chart button is more visible,the icons have been improved, and the whole toolbar is bigger and easier to use. 
 
<br>
 
### Admin Center

* <a href="/docs/admin/admin-sections-platform/" target="_blank"><strong>ADMIN-3178 - Security Setup in Admin Center</strong></a>: You can now load your data in a single dataset, regardless of the “owner” of each record. By having the data automatically filtered, users get the information you authorized for them to see.

<br>

## General Tweaks & Bug Fixes

* <strong>QV-10089 - Dataset Loading in Safari</strong>: Previously, the data page didn’t immediately load in Safari. The site’s frame loaded but the content appeared with a 10-second delay. This has been fixed.

* <strong>QV-11617 - Survey - Rank Question in Favorite Modal</strong>: Previously, when a user tried to add a Ranking question from the favorites modal, the rank options were not shown correctly. This has been fixed.

* <strong>QV-11752 - Loading Data Fails with Tables</strong>: Previously, if a dataset was created from a table with dots in the name, the loading data process failed and an error toast was shown. This has been fixed.

* <strong>QV-11671 - Quiz - Wrong Text in Exported CSV</strong>: When the end-user selected the "Skip Question" option in a Ranking question, the word "Skipped" was displayed as an answer in the file when downloading the CSV of the question in the Analyze section. This has been fixed.

* <strong>QV-11621 - Webforms - Image Question in Embedded Widgets</strong>: Previously, when a creator was embedding a webform design widget using cookies instead of apikey, the images couldn't be uploaded in the image question options. This has been fixed.

* <strong>AN-10499 - Small Multiple - No Numeric Ranges Are Created</strong>: Previously, when a user created a small multiple using a numeric data type as a multiple column, the numeric ranges were not automatically generated as expected. This has been fixed.

* <strong>AN-10668 - CSV Downloads for AN-View Widget</strong>: Previously, downloads did not start in the summary view when embedded in AN-View with quizzes and surveys. This has been fixed.

* <strong>AN-10638 - Some Summary Panels Are Missing</strong>: Previously, when the AN-view widget was embedded, the summary view did not show all summary panels corresponding to the columns of the dataset or webform. This has been fixed.

* <strong>AN-10893 - Metrics Cannot Be Edited</strong>: Previously, when creators wanted to edit a metric, the data panel remained *loading* and the metric did not appear on the canvas, preventing the edition. This has been fixed.

* <strong>AT-7233 - Quiz - CSV Download</strong>: Previously, when a quiz was completed, the creator exported the data collected and could not validate the name of each user who responded. This has been fixed.

* <strong>AT-7436 - Mouse/Trackpad Scrolling</strong>: When the mouse wheel was used on a page with scrolling enabled and charts added with scroll, it did not work correctly. This has been fixed.

* <strong>AT-7261 - Filters for End-Users</strong>: When a single page was embedded on the end-user side, and the user tried to apply a Panel filter, the modal remained *loading*. If the user tried applying a global Filter, datasets were not listed and Filters couldn’t be applied. This has been fixed.
