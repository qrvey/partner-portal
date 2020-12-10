---
id: version-5.2-release-last
title: Qrvey Version 5.3
sidebar_label: July 2020
original_id: release-last
---
<div style="text-align: justify">
Release Date: 2020-08-03

 

Click <a href="/docs/next/video-training/release/version-5.3"> <strong>here</strong></a> for demo videos on some of the released features.

## New Features

### Admin


* <a href="/docs/admin/admin-sections-platform/"> <strong> ADMIN-2608 - OpenID Authentication for End-Users</strong></a>: 
We added the option that allows Admins to enable and set up OpenID parameters for End User login options.  This will give End Users the possibility of using their own authentication methods like OAuth, OpenID, or SAML when logging in the Qrvey Application.


### Data Preparation
* <a href="/docs/ui-docs/datasets/datasets/"> <strong> QV-10993 - Formatting Date columns</strong></a>: We added the option to let creators define the format of date columns when setting up their datasets. This format will be visible in the rest of the application when these columns are used.

* <a href="/docs/ui-docs/datasets/datasets/"> <strong> QV-10994 - Formatting Numeric columns</strong></a>: We added the option to let creators define the format of numeric columns when setting up their datasets. This format will be visible in the rest of the application when these columns are used.

 
### Automation

* <a href="/docs/ui-docs/builders/page-actions"> <strong> AT-6653 - Page Actions - Metrics</strong></a>: We added a feature to let creators set up page drill actions on Metric Panels so that end-users can be redirected to another page, tab, or an external page.


* <a href="/docs/ui-docs/builders/user-management/"> <strong> AT-6651 - OpenID Authentication for End-Users</strong></a>: We added a feature to give end-users a way to use their own authentication methods like OpenID when logging in the Qrvey Application.




 
## Other Enhancements


* **AN-9961 - Style Enhancements for Indicator Metric**: We implemented some enhancements to the indicator Metric such as the ability to edit the text color and styles, the ability to have control over the symbol, and direction used for each indicator, and the Thresholds section removal.


* <a href="/docs/ui-docs/dataviews/chart-builder/"> <strong> AN-9978 - Continuous vs Discrete Date Values</strong></a>: We added a feature in Chart Builder that allows creators to include the missing time periods between the start and end date, even if there is no data within those dates by selecting to show “Continuous” values instead of “Discrete” values.


* <a href="/docs/ui-docs/builders/pages/#pages"> <strong> AT-6611 - End-User Filters Panel Default View</strong></a>: We added a setting that allows creators to define the filter panel behavior on the end-user side. Creators can select if they’d like to display the panel always open or closed. 

* **DR-1781 - Batch Manager - (Re)Start from Batch**: We added a new endpoint so that our users can start or restart the batch process (sequential load) from the specified batch. This means the data loading process will start running from the specified folder. Users can also reset the status of all batches so they can be processed again.


## Known Issues


* **QV-10089 - Dataset Loading in Safari**: Data page isn't loading immediately in Safari. The site’s frame loads but the content appears with a 10-second delay.

* **QV-10979 - Number of rows does not update**: When a creator creates a reusable index and adds new records from an API, the number of rows does not update on the data page nor on the card in the dashboard.

* **AN-10133 - Axis Labels Should Remain Fixed**: When creating a chart, the X-axis labels sometimes do not display by default, so the creator needs to scroll vertically to see the labels or resize the chart panel.
AN-9009 - Label is not Visible: For small multiples, the labels of the small charts below are not seen until you scroll.


* **AN-8189 - Crosstab - Null Values Displayed**: When crosstab charts are created using multiple levels of columns and values and these columns are expanded, cells are shown empty instead of displaying the values that exist in the data.


* **AN-7999 - Calculated Columns in Heatmap - Sorting by Label Issue**: When using 'dateDiff' to create a calculated column and sorting by “label” is applied, the values are sorted by “label” and not by “date” due to an Elasticsearch limitation. 


* **AN-8809 - Crosstab Values Using Data Links**: Crosstab with 2 levels of rows and one column is showing values in a field that should not be displaying any values.


* **AN-8296 - Crosstab Grouped Total**: When there are more than 25 max data points shown, the grouped totals are calculated only for the top 25 max data points. 


* **AN-9130 - Chart Dependencies**: Filters applied to deleted charts are not removed from the filter panel component. 


* **AN-6668 - Metrics Time Period - Quarter**: In data types containing arrays of answers, the system is counting the number of options and not the number of different combinations that were generated by answering the question in Web Forms. Some examples of those questions are Multiple Choice - Single Selection, Expression, etc. This issue occurs when the types of aggregations are Count or Distinct Count.

* **AT-6385 - Some Token Filters do not apply**: Charts filtered by specific tokens show the following message “Chart not available at the moment”.

* **AT-6182 - Page Builder - Global Filters on Blocked Pages**: When a page is deployed through content deployment in Admin Center, on the recipient’s side any global filter applied to other pages will also be applied on the blocked page. It shouldn’t be applied since this page is blocked to be edited by recipients.

* **ADMIN-2421 - Content Deployment - Data Loading Process Fails**: When a user deploys an application that contains Datasets that use other Datasets as data sources, the multiple layers of connections can make the installation fail because of an interruption of the loading process by the external database service.


