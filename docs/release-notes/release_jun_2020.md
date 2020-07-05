---
id: release-last
title: Qrvey Version 5.1
sidebar_label: June 2020
---
<div style="text-align: justify">
Release Date: 2020-07-03

## New Features

### Admin

* <a href="/docs/admin/admin-sections-platform/#admin-sections-platform"> <strong>ADMIN-2601 - OpenID Authentication: </strong></a>
We added a feature to give the customers a way to use their own authentication methods like Oauth, OpenID, or SAML, when using the Qrvey platform.

### Data Preparation 
*  <a href="/docs/ui-docs/datasets/datasets"> <strong>QV-10499 - Data Syncs for Joined Data Sources:</strong></a> 
 We added a feature that allows users to configure and schedule the reload of their data when there are multiple data sources added to create a dataset.

* <a href="/docs/ui-docs/datasets/connectors/#connectors"><strong> QV-10302 - Deleting Connections and Managing Dependencies:</strong></a>  We added the option of deleting connections that are being used in other parts of the application. In addition, we are displaying a list of the dependencies so users can see where the connections are being used in case they delete the connection these dependencies can be either deleted or fixed. Components from deleted connections like Datasets or Workflows will display a warning letting users know the connection that was used was deleted and the user needs to take action to fix the component.  

* <strong> QV-10713 - Reusable Indexes:</strong></a> Developers can now create an index or data repository using an API call. These indexes will be available for all users in the Qrvey Composer in an Index Repository. Adding or updating records can be done after creating the indexes. Users can also define transformations so when posting data these transformations are applied.



### Analytics

* <a href="/docs/ui-docs/dataviews/chart-builder/#chart-builder"> <strong> AN-9526 - Running Aggregate Table Calculations:</strong></a>  We are adding a series of table calculations and we started with Running Aggregates for grouped tables. This includes Running Average and Running Sum. Running Min/Max will be included in our next version.

* <a href="/docs/ui-docs/web-forms/complex-data/#complex-data"> <strong>AN-9425 - Complex Data Drill Downs:</strong></a> We implemented the option of using complex data fields when drilling down in charts. Users are now able to select fields such as file upload and drill down using file size or file type. Users can also select image upload and drill down by words, size, or categories. 

* <strong>AN-9805 - Date Grouping For Time:</strong></a> We implemented a feature that supports time options for our current Date Grouping settings. When a creator selects Hour, Min, or Sec the chart will reflect the grouping option applied.

* <strong>AN-9832 - Symbol Chart Unaggregated Values:</strong></a> We Added the “No Aggregate” option in the Value column aggregates dropdown menu of Symbol Charts so that Creators will be able to select this option to not aggregate their value column and create a Dot Plot visualization. 


### Automation

* <a href="/docs/ui-docs/automation/tokens/#tokens"> <strong> AT-6187 - System Tokens - “Last Period” Tokens:</strong></a> We enhanced our system tokens available in Flows by adding more options to cover previous time periods such as Last Year/Quarter/Month/Week. 

* <a href="/docs/ui-docs/web-forms/complex-data/#complex-data"> <strong> AT-6213 - Complex Data In Flows:</strong></a> We added new options to be used in flows for complex data fields like file/image upload and short/long text. These options can be used to establish conditions in Automation Flows. 

* <a href="/docs/ui-docs/web-forms/complex-data/#complex-data"> <strong>AT-6160 - Complex Data in Page Actions:</strong></a> We added new options to be used in Page Actions for complex data fields like file/image upload and short/long text. These options can be used to set chart drill-downs with complex data parts.


* <a href="/docs/ui-docs/automation/send-actions"> <strong>AT-6292 - Slack Notification Action:</strong></a> We added a new Flow action called “Slack Notification”. The idea is to give the creator a new option of sending automated messages or notifications to Slack users.


* <a href="/docs/ui-docs/automation/triggers/#triggers"> <strong>AT-6344 - Update Data Trigger for Datasets:</strong></a> We added the option to show the creator a single list of Datasets and Web Forms to execute a flow every time a Dataset or Web Form is updated with new records or data sources.

## Other Enhancements

* <a href="/docs/ui-docs/datasets/datasets/"> <strong>QV-10495 - Auto-Save in Datasets:</strong></a> Once data has been loaded to a dataset, the creator can come back to make changes to their dataset configuration or data. We improved this by adding an auto-saved feature so that the creator won’t lose the progress made each time he leaves the section before applying the changes or reloading the data. 


* <strong>QV-10526 - Data Syncs Improved Scheduling Options:</strong></a> We improved the capabilities available when setting up scheduling options to sync data. Now it’s possible to sync the data by minutes, hours, days, weeks, and months. 


*  <strong>ADMIN-2253 - Content Deployment Deploying to Existing Applications:</strong></a> After improving our Content Deployment public APIs, we integrated with the UI and users are now able to deploy to existing applications. 


* <strong>ADMIN-2254 - Content Deployment Deploying to Selected Users:</strong></a> We implemented an option for administrators to be able to select specific users when deploying to existing applications.
 
* <strong>AT-5791 - Builders - Select Multiple Charts to Add to Canvas:</strong></a> We implemented the option to let creators add multiple charts by selecting them from the side panel and dragging them to the canvas all at once. 

*  <strong>AT-5776 - User Groups - Send Email Action:</strong></a> User groups created in User Management can now be added in Flows in the Send Email action, in the recipient’s field. 

* <strong>AT-6437 - Page Builder - Responsive Tabs:</strong></a> We improved the web component of Page Tabs in End-user in order to give a better user experience, mainly for the responsive view.

## General Tweaks and Bug Fixes

* **QV-10422 - Connections List Error 900+:**  When there were more than 900 connections, there was an overlapping error in the Select Data Source modal. This has been fixed.

* **QV-10518 - Discard Changes:** The settings applied to Data Sync were not removed with the option “Discard Changes”. This has been fixed.

* **QV-10514 - When Reloading Data, Edits Cause Error:** When there were a sync and reloading processes happening, changes applied to the syncing options caused errors. This has been fixed.

* **AN-9121 - Reference Lines For Negative Values:** When a SUM reference line was added to a chart with negative values, the reference line was not displayed. This has been fixed.

* **AN-9574 - Complex Data - Dot Map Error:** When creating a dot map using complex data types as an address the map was not drawn. This has been fixed.

* **AT-6023 - Flows - Searching Dates in “Get Data”:** For connections used in the Get Data action, the search by date was not working. This has been fixed.


* **AT-6056 - Flows - Post Data:** Records were not inserted using an Oracle connection. This has been fixed.

* **AT-6406 - Component Library Font Size Error:** In builders, when the user changes the font size, the text remains in the old configuration. This has been fixed.

* **QV-10543 - Reloading Process is Showing Zero Records:** If the Main Dataset is in “active” state and with a reload its data is updated and a dataset created from the first one is reloaded too, the Analyze Summary shows zero rows. This has been fixed.



## Known Issues


* **QV-10089 - Dataset Loading in Safari:** Data page isn't loading immediately in Safari. The site’s frame loads but the content appears with a 10-second delay.


* **AN-8189 - Crosstab - Null Values Displayed:** When crosstab charts are created using multiple levels of columns and values and these columns are expanded, cells are shown empty instead of displaying the values that exist in the data.


* **AN-7999 - Calculated Columns in Heatmap - Sorting by Label Issue:** When using 'dateDiff' to create a calculated column and sorting by “label” is applied, the values are sorted by “label” and not by “date” due to an Elasticsearch limitation. 


* **AN-8809 - Crosstab Values Using Data Links:** Crosstab with 2 levels of rows and one column is showing values in a field that should not be displaying any values.


* **AN-8296 - Crosstab Grouped Total:** When there are more than 25 max data points shown, the grouped totals are calculated only for the top 25 max data points. 


* **AN-9130 - Chart Dependencies:** Filters applied to deleted charts are not removed from the filter panel component. 


* **AN-6668 - Metrics Time Period - Quarter:** Count and Distinct Count are not working correctly for some field types used in Web Forms such as Signature, Word Expression Multiselection, and Address.

* **AT-6385 - Some Token Filters do not Apply:** Charts filtered by specific tokens do not apply and show the following message "Chart not available at the moment".

* **AT-6182 - Page Builder - Global Filters on Blocked Pages:** When a page is deployed through content deployment in Admin Center, on the recipient’s side any global filter applied to other pages will also be applied on the blocked page. It shouldn’t be applied since this page is blocked to be edited by recipients.

* **ADMIN-2421 - Content Deployment - Data Loading Process Fails:** When a user deploys an application that contains Datasets that use other Datasets as data sources, the multiple layers of connections can make the installation fail because of an interruption of the loading process by the external database service.
