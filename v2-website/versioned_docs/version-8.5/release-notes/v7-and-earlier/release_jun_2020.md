---
id: release-jun-2020
title: Qrvey Version 5.2
sidebar_label: Qrvey Version 5.2
---
<div style={{textAlign: "justify"}}>
Qrvey 5.2 - 2020-07-03

## New Features and Enhancements
<a href="/docs/next/video-training/release/version-5.2" target="_blank"> <strong>Click here</strong></a> for demo videos on some of the released features.

## New Features

### Data Preparation 
*   <strong>QV-10499 - Data Syncs for Joined Data Sources:</strong> 
 We added a feature that allows users to configure and schedule the reload of their data when there are multiple data sources added to create a dataset.

* <strong> QV-10302 - Deleting Connections and Managing Dependencies:</strong>  We added the option of deleting connections that are being used in other parts of the application. In addition, we are displaying a list of the dependencies so users can see where the connections are being used in case they delete the connection these dependencies can be either deleted or fixed. Components from deleted connections like Datasets or Workflows will display a warning letting users know the connection that was used was deleted and the user needs to take action to fix the component.  

* <strong> QV-10713 - Reusable Indexes:</strong> Developers can now create an index or data repository using an API call. These indexes will be available for all users in the Qrvey Composer in an Index Repository. Adding or updating records can be done after creating the indexes. Users can also define transformations so when posting data these transformations are applied.

*  <strong>QV-10495 - Auto-Save in Datasets:</strong> Once data has been loaded to a dataset, the creator can come back to make changes to their dataset configuration or data. We improved this by adding an auto-saved feature so that the creator won’t lose the progress made each time he leaves the section before applying the changes or reloading the data. 


* <strong>QV-10526 - Data Syncs Improved Scheduling Options:</strong>We improved the capabilities available when setting up scheduling options to sync data. Now it’s possible to sync the data by minutes, hours, days, weeks, and months. 




### Data Analysis & Automation

* <strong> AN-9526 - Running Aggregate Table Calculations:</strong>  We are adding a series of table calculations and we started with Running Aggregates for grouped tables. This includes Running Average and Running Sum. Running Min/Max will be included in our next version.

* <strong>AN-9425 - Complex Data Drill Downs:</strong> We implemented the option of using complex data fields when drilling down in charts. Users are now able to select fields such as file upload and drill down using file size or file type. Users can also select image upload and drill down by words, size, or categories. 

* <strong>AN-9805 - Date Grouping For Time:</strong> We implemented a feature that supports time options for our current Date Grouping settings. When a creator selects Hour, Min, or Sec the chart will reflect the grouping option applied.

* <strong>AN-9832 - Symbol Chart Unaggregated Values:</strong> We Added the “No Aggregate” option in the Value column aggregates dropdown menu of Symbol Charts so that Creators will be able to select this option to not aggregate their value column and create a Dot Plot visualization. 


* <strong> AT-6187 - System Tokens - “Last Period” Tokens:</strong> We enhanced our system tokens available in Flows by adding more options to cover previous time periods such as Last Year/Quarter/Month/Week. 

* <strong> AT-6213 - Complex Data In Flows:</strong> We added new options to be used in flows for complex data fields like file/image upload and short/long text. These options can be used to establish conditions in Automation Flows. 

*  <strong>AT-6160 - Complex Data in Page Actions:</strong> We added new options to be used in Page Actions for complex data fields like file/image upload and short/long text. These options can be used to set chart drill-downs with complex data parts.


* <strong>AT-6292 - Slack Notification Action:</strong> We added a new Flow action called “Slack Notification”. The idea is to give the creator a new option of sending automated messages or notifications to Slack users.


*  <strong>AT-6344 - Update Data Trigger for Datasets:</strong> We added the option to show the creator a single list of Datasets and Web Forms to execute a flow every time a Dataset or Web Form is updated with new records or data sources.

 
* <strong>AT-5791 - Builders - Select Multiple Charts to Add to Canvas:</strong> We implemented the option to let creators add multiple charts by selecting them from the side panel and dragging them to the canvas all at once. 

*  <strong>AT-5776 - User Groups - Send Email Action:</strong> User groups created in User Management can now be added in Flows in the Send Email action, in the recipient’s field. 

* <strong>AT-6437 - Page Builder - Responsive Tabs:</strong> We improved the web component of Page Tabs in End-user in order to give a better user experience, mainly for the responsive view.

### Admin Center

*  <strong>ADMIN-2601 - OpenID Authentication: </strong>
We added a feature to give the customers a way to use their own authentication methods like Oauth, OpenID, or SAML, when using the Qrvey platform.


*  <strong>ADMIN-2253 - Content Deployment Deploying to Existing Applications:</strong> After improving our Content Deployment public APIs, we integrated with the UI and users are now able to deploy to existing applications. 


* <strong>ADMIN-2254 - Content Deployment Deploying to Selected Users:</strong>We implemented an option for administrators to be able to select specific users when deploying to existing applications.


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


</div>