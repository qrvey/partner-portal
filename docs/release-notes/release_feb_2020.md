---
id: release-feb-2020
title: Qrvey Version 4.1
sidebar_label: February 2020
---
<div style="text-align: justify">
Release Date: 2020-02-18

## New Features & Enhancements

### Data Analysis & Automation
* **AN - 8803 Formulas - Calculated Columns in Bubble Map:** We added the option to let Creators create Bubble Maps with Calculated Columns. Like Buckets, these columns will be created as virtual columns in the dataset and will be available to build Bubble Maps.

* **AN - 7851 Formulas - Calculated Columns in Table Chart (Groups):** We added the option to let Creators select Calculated Columns when setting Group columns for tables.

* **AN 7759 Formulas - Date Grouping For Date Formulas:** We added the option to let Creators select Date Grouping in Custom Charts using columns that are “Formula - Date Type”.

* **AN - 7274 Formulas - Drilldown with Calculated Columns:** We added the option to let Creators select calculated columns in the drill-down menu, which is used when an end-user clicks on a data point.

* **AN - 7081 Formulas - Bucketing with Calculated Columns:** We added the options to let Creators create buckets using Calculated Columns. 

* **AT - 5389 Widget Configuration - Privacy Settings**: We added the option to let creators change the Privacy settings on their pages as default. In Qrvey Composer all pages should be set to “Public” by default, but for embedded widgets users might want to configure this setting. So we added  a Widget Configuration Parameter so users can modify this and set pages by default to Private or Public.

* **AT - 3821 Charts Drill Down - Custom Drill**: Creators are now able to select any existing chart to set as a drill-down level configured as a Page Action. For example, an end-user can begin from a pie chart and by clicking on one of the wedges drill into a table visualization that is filtered by the data point selected from the pie chart. Charts and levels are configured by creators. 

* **AT - 5537 Flows Triggers/Conditions/Actions Tooltips**: We improved the user experience of Flows by adding tooltips with a brief explanation of what each trigger, action, and condition does.

* **AT - 5554 Export - Send Email - End User**: We improved the feature to let the end-users download large files on the end-user side. Every time an end-user clicks on the export action an email will be sent. This email will contain a link to download the exported files. 


### **Admin Center**

* **ADMIN- 1937 New Layout:** We changed the layout for the Admin Center, this new layout responds to the needs of the Admin user to navigate through it and to get all the information they need.


## **General Tweaks and Bug Fixes**

* **AT-5492 - Builders - Safari Performance:** When the user adds 10 or more charts on a page, the performance went down progressively in the Safari Browser. We fixed this by implementing lazy loading behaviors on analytic elements. 

* **AN-8745 - Date/Formula - Differents records for the same category:** The user created a formula DateAdd adding 2 days to the field CreatedOn that have a format dd/mm/yyyy, then the result for this formula is with another format as 2017-06-04T19:47:42.000Z. The application groups the dates taking into account the hour/minutes and seconds but when the user applies See data and Filter by, the records have different seconds for the same category. We have fixed this.

* **AN-8499 - Multiseries - Data Link - Data is not correct:** When the series of multi-series come from a source dataset, the data displayed did not correspond to the exact match between the linked columns. This was fixed.
