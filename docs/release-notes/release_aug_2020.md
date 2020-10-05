---
id: release-aug-2020
title: Qrvey Version 5.4
sidebar_label: August 2020
---
<div style="text-align: justify">
Release Date: 2020-08-31

Click <a href="/docs/next/video-training/release/version-5.4"> <strong>here</strong></a> for demo videos on some of the released features.

## New Features

### Admin


* <a href=""> <strong> ADMIN-2700 - Sharing Applications</strong></a>: Creators are now able to share applications and collaborate on content creation with other creators. Applications can be made public  for all the users in the system or shared with specific people. 


* **ADMIN-2684 - ES Management - Manual Adjustments**: Administrators can now visualize their current Elasticsearch Server Settings and Usage Storage in the new Infrastructure section inside Admin Center. They can perform manual adjustments to these settings, like selecting an Elasticsearch Server, and adjust the number of servers and storage. 


### Data Preparation
* **QV-10991 - Cascading Syncs**: For a Dataset that uses other Datasets as a Data source, we added the option to trigger the sync process when the source Dataset is updated.  This is an alternative to using time-scheduled sync or clicking the “Sync Now” button. The Dataset will be automatically updated when the source is updated.

* **QV-11248 - Create a Push Dataset from an API Call**: We added the option to let Developers be able to create datasets from API Calls. These Datasets will be available and editable from the UI enabling the following: Renaming dataset, hiding columns, changing aliases. These Datasets are going to be populated by pushing data through API calls.

* **QV-10738 - Sync Now Option**: We added the option to let creators sync their Datasets on demand. Depending on their sync configuration, they will be able to do it right away instead of waiting for the next scheduled sync. This will make it easier and faster to keep data updated. 



### Analytics

* **AN-9845 - Table Calculations - Percent Difference**: We added Percent Difference to Tables so that creators can get the percent difference between the aggregated value in one partition and the same value in another partition.

* **AN-9846 - Table Calculations - Difference**: We added Difference to Tables so that creators can get the difference between the aggregated value in one partition and the same value in another partition. 

* **AN-10213 - Ability to Control Metric Animation**: We added a feature that allows users to control the animation shown in metrics every time a page is loaded or the metric value is updated to show the most recent value. 

### Automation

* <a href="/docs/ui-docs/builders/pages_actions/"> <strong>AT-6829 - Page Builder - Filter By in Tables </strong></a>: We added the feature to allow creators to set up a “Filter By” on-click action for Grouped Tables. End-users can now interact with them by clicking on a data point and filter the data by the value selected.

* <a href="/docs/ui-docs/builders/pages_actions/"> <strong>AT-6828 - Page Builder - Page Drill in Tables</strong></a>: We added the feature to allow creators to set up a “Page Drill” on-click action for Tables. End-users can now interact with them by clicking on a data point to redirect them to the page configured by the creator.

* <a href="docs/ui-docs/builders/pages/"> <strong>AT-6601 - Page Tabs Resizing</strong></a>: We added three ways to resize the width of page tabs; creators and end-users can now visualize the complete name of a tab or adjust its width according to their needs.


 
## Other Enhancements

* **AN-9996 - Continuous vs Discrete Numeric Values**: We added an option to let creators include the missing numeric values in charts between the min and max value shown in the category axis, even if there is no data within the numeric columns used for categories by selecting to show “Continuous” values instead of “Discrete” values.

* **QV-10668 - Ensure Correct Record Count**: We implemented an improvement to ensure that the Dataset record count is consistent every time the dataset dashboard is loaded. Creator will now see the correct number of records loaded on each dataset, and if there is any error, an icon will appear informing the creator that an error occurred.

* **QV-10285 - Keeping a Dataset Available while Full Reloading**: We improved the dataset reloads so that creators can have access to data from a previously-loaded Dataset during reload times. The index’s data is deleted at the start of the reload. Dataset charts, pages, reports, and flows won't be interrupted.

## Known Issues

* **QV-11421 - Cascade Not Working**: When a dataset is created from Index View datasets, the cascade set in the child dataset does not work.

* **QV-10089 - Dataset Loading in Safari**: Data page isn't loading immediately in Safari. The site’s frame loads but the content appears with a 10-second delay.

* **QV-10979 - Number of Rows Does Not Update**: When a creator creates a reusable index and adds new records from an API, the number of rows does not update on the data page nor on the card in the dashboard.

* **AN-10499 - Small Multiple - No Numeric Ranges Are Created**: When a user creates a small multiple using a numeric data type as a multiple column, the numeric ranges are not automatically generated as expected. 

* **AN-10490 - Grouped table - No numeric totals are enabled**: In a grouped table, using non-numeric columns as a column, numeric values for that column in the preview table should be displayed. Creators are not able to see numeric totals listed on the menu and cannot change the visualization type of the calculated totals to bars.

* **AN-10133 - Axis Labels Should Remain Fixed**: When creating a chart, the X-axis labels sometimes do not get displayed by default, so the creator needs to scroll vertically to see the labels or resize the chart panel.

* **AN-9009 - Label Is Not Visible**: For small multiples, the labels of the small charts below are not seen until you scroll down.

* **AN-8189 - Crosstab - Null Values Displayed**: When crosstab charts are created using multiple levels of columns and values and these columns are expanded, cells are shown empty instead of displaying the values that exist in the data.

* **AN-7999 - Calculated Columns in Heatmap - Sorting by Label Issue**: When using 'dateDiff' to create a calculated column and sorting by “label” is applied, the values are sorted by “label” and not by “date” due to an Elasticsearch limitation. 

* **AN-8809 - Crosstab Values Using Data Links**: Crosstab with 2 levels of rows and one column is showing values in a field that should not be displaying any values.

* **AN-8296 - Crosstab Grouped Total**: When there are more than 25 max data points shown, the grouped totals are calculated only for the top 25 max data points. 

* **AN-9130 - Chart Dependencies**: Filters applied to deleted charts are not removed from the filter panel component. 

* **AN-6668 - Metrics Time Period - Quarter**: Count and Distinct Count are not working correctly for some field types used in Web Forms such as Signature, Word Expression Multi-selection, and Address.

* **AT-7042 - Shering - Deleting Dataset Conflict**: When a creator deletes a dataset being used by other creators that are creating charts, the chart builder fails loading.

* **AT-7064 - Sharing - Builders - Page Load removes charts**: When several creators are working on the same application and the page that has tabs is updated, the charts disappear unless the page is published.

* **AT-6385 - Some Token Filters do not apply**: Charts filtered by specific tokens do not apply and show the following message “Chart not available at the moment”.

* **AT-6182 - Page Builder - Global Filters on Blocked Pages**: When a page is deployed through content deployment in Admin Center, any global filter applied to other pages on the recipient’s side will also be applied to the blocked page. It shouldn’t be applied since this page is blocked to be edited by recipients.

* **ADMIN-2936 - Different sessions in the same browser**: The Composer does not indicate a session has started when a creator starts another session with a different account in the same browser, causing an error to appear.

* **ADMIN-2421 - Content Deployment - Data Loading Process Fails**: When a user deploys an application that contains Datasets that use other Datasets as data sources, the multiple layers of connections can make the installation fail because of an interruption of the loading process by the external database service.







