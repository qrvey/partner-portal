---
id: release-feb-2020
title: Qrvey Version 4.1 - Release Date: 2020-02-18
sidebar_label: February 2020
---
 
## New Features

### Application Building
* **AT - 4809 Page Builder - Canvas Resize:** We added a new option for the creators that let them change their canvas size within Page Builder. Creators will have 4 different standard resolution options to choose from. When changing the size from a bigger to a smaller resolution, charts will accommodate the new resolution size inside the canvas. When going from a smaller to a bigger resolution the components will remain in the same position and will stay with the same size. 

* **AT - 5389 Widget Configuration - Privacy Settings:** We added the option to let creators change the Privacy settings on their pages as default. In Qrvey Composer all pages should be set to “Public” by default, but for embedded widgets users might want to configure this setting. So we added  a Widget Configuration Parameter so users can modify this and set pages by default to Private or Public.

* **AT - 3821 Charts Drill Down - Custom Drill:** Creators are now able to select any existing chart to set as a drill-down level configured as a Page Action. For example an end-user can begin from a pie chart and by clicking on one of the wedges drill into a table visualization that is filtered by the data point selected from the pie chart. Chart and levels are configured by creators. 

### Analytics
* **AN - 8803 Formulas - Calculated Columns in Bubble Map:** We added the option to let creators create Bubble Maps with Calculated Columns. Like Buckets, these columns will be created as virtual columns in the dataset and will be available to build Bubble Maps.

* **AN - 7851 Formulas - Calculated Columns in Table Chart (Groups):** We added the option to let creators select Calculated Columns when setting Group columns in for tables.

* **AN 7759 Formulas - Date Grouping For Date Formulas:** We added the option to let creators select Date Grouping in Custom Charts using columns that are “Formula - Date Type”.

* **AN - 7274 Formula - Drilldown with Calculated Columns:** We added the option to let creators select calculated columns in the drill-down menu when an end-user clicks on a data point.

* **AN - 7081 Formulas - Bucketing with Calculated Columns:** We added the options to let creators create buckets using Calculated Columns. 

### **Other Enhancements**

* **ADMIN- 1937 New Layout:** We changed the layout for the Admin Center, this new layout responds to the needs of the Admin user to navigate through it and to get all the information they need.

* **AT - 5537 Flows Triggers/Conditions/Actions Tooltips:** We improved the user experience of Flows by adding tooltips with a brief explanation of what each trigger, action, and condition does.

* **AT - 5554 Export - Send Email - End User:** We improved the feature to let the end-users download large files on the end-user side. Every time an end-user clicks on the export action an email will be sent. This email will contain a link to download the exported files. 

### **General Tweaks and Bug Fixes**

* **AT-5492 - Builders - Safari Performance:** When the user adds 10 or more charts on a page, the performance went down progressively in the Safari Browser. We fixed this by implementing lazy loading behaviors on analytic elements. 

* **AN-8745 - Date/Formula - Differents records for the same category:** The user created a formula DateAdd adding 2 days to the field CreatedOn that have a format dd/mm/yyyy, then the result for this formula is with another format as 2017-06-04T19:47:42.000Z The application groups the dates taking into account the hour/minutes and seconds but when the user applies See data and Filter by, the records have different seconds for the same category. We have fixed this.

* **AN-8499 - Multiseries - Data Link - Data is not correct:** When the series of multi-series come from a source dataset, the data displayed did not correspond to the exact match between the linked columns. This was fixed.

### **Known Issues**

* **ADMIN-1928 - Content Deployment - Share Spreadsheets:** We are not currently supporting the sharing of CSVs data in application sharing. 
* **AN-8296 - Crosstab Grouped Total:** When there are more than 25 max data points shown the grouped totals are calculated only for the top 25 max data points. 
* **AN-6668 - Metrics Time Period - Quarter:** Count and Distinct Count are not working correctly for some field types used in Web Forms such as Signature, Word Expression Multiselection, Address.
* **AN-8189 - Crosstab - Null Values Displayed:** When crosstab charts are created using multiple levels of columns and values and these columns are expanded cells are shown empty instead of displaying the values that exist in the data.
* **AT-5218 - Workflows - If condition - Drop area gets stuck:** Drop area gets stuck when the action is moved from “if” to “else”, it is happening when the user moves the card several times.
* **AN-6668 - Metric Builder - Data doesn't count correctly on text data types:** Count and Distinct Count are not working correctly for some field types used in Web Forms such as Signature, Word Expression Multiselection, Address.
* **DR-1168 - Transformations - Columns edition in the transformation:** When a column is edited or deleted in the “columns section”, it does not change in the transformation previously created.
* **AN-8689 - CrossTab - Totals in groups per week are incorrect:** The total for the last group (week) is wrong when the user creates a crosstab and the user sets, as the first level of a row, a date field, then, the user makes a Date grouping with Quarter, and as the second level of rows the user sets a formula.
* **AT - 5863 - Builders - Datasets not listed:** Datasets for filters are not listed when a chart that is on the same page tab is deleted.
* **AT - 5803 - Page Builder - Filters are not duplicated when the page is duplicated:** When a page is duplicated, the filters of  Tabs, Pages, and Panels are not duplicated.