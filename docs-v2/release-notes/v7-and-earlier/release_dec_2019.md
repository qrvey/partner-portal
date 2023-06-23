---
id: release-dec-2019
title: Qrvey Version 4.0
sidebar_label: Qrvey Version 4.0
---
<div style={{textAlign: "justify"}}>
Release Date: 2019-12-18

## New Features & Enhancements

### Data Preparation
*   **QV-8974 - Dataset Widget:** We upgraded the Dataset Widget to improve the dashboard visualization by giving more information about each Dataset in less space. Performance and user experience have also been improved, with more precise status notifications, and an easy way to reuse database connections in order to create several datasets.
*   **QV-8404 - Sending Applications in the Qrvey Composer:** We improved this feature to allow creators to share an application with all its Reports, Pages, Dataset, Datalinks, and Flows by selecting the “Send” option from the application menu.

### Analytics

* **AN-8555 - Add Filtering in Chart Creation**: We added the ability to create filters for a chart while it’s being created, in order to retain these filters every time the chart is reused in page or report builder.

* **AN-7612 - Formulas Enhancements**: We improved Formulas by enabling them on the following features: Filters UI, Calculated Columns in Metrics and Custom Charts, See Data, Enable Crosstab Totals and Filter By.

* **AT-5233 - ML - Action - Execute Model**: In Automated Flows, we added an action that allows the creator to use third-party models, based on machine learning technologies, previously defined on the new “Model Definition” feature. The user can use these models to trigger other actions, such as “send email or “search record”.

* **AT-5158 - Page Components Order**: We added this new feature to the Page and Report Builders to let users arrange elements. Now, each element can be placed on top of another.

* **AT-4993 - Download CSV Files**: We improved this feature to export data used in pages as CSV. Creators and end-users will be notified about the download status. When a file is too large or has more than 20.000 records may take too long to prepare, that is why it’s important for users to be notified.

* **AT-4341 - New Builders Usability Enhancements**: The new Page and Report Builders have an improved User Interface in order to give the users a better user experience, based on fewer clicks, drag and drop behaviors and toolbar shortcuts.


### Admin Center

*   **ADMIN - 1677 Machine Learning Model Definition:** We added a new feature where a data scientist user will be able to create models to later be used on the Qrvey platform for “Predictions and Categorization”, based on the machine learning technology “AWS Sage Maker”.

## General Tweaks and Bug Fixes

*   **QV-9351 - Column Data Types Changes:** On the Admin Center, after using the SQL View from a database connection, all column data types were set as text-label by default. We fixed this setting the column data types based on the content.
*   **QV-8963 - Spreadsheets - Data Load:** The displayed number of records in a spreadsheet was not always accurate - it is now accurate.
*   **AN-8446 - Change of Dates Due to Time Zone** For a user in a different time zone than the Qrvey Platform, the date selected to create buckets or filters was changed by the system to a previous date. This has been fixed.
*   **AN-8364 - Filters/Buckets Error with Dates:** For a user in a different time zone than the Qrvey Platform, trying to select a date to create a bucket or a filter could result in selecting a previous date. This has been fixed.
*   **AN-7810 - Table Chart - Filtering Bucketed Columns in Groups:**  When using bucketed columns as a group in the table chart, the filters set on this column were not not being applied. This has been fixed.
*   **AN-8249 - Date Drill Downs - Changing Date Columns:** If a user applied a drill down using a date column and then changed the drill down to use a different date column, the drill down had to be restored before the correct dates were displayed.  This has been fixed.
*   **AN-7914 - Crosstab - Sorting by Columns:** When applying sorting option on a column in a crosstab chart with multiple levels the sorting is only reflected on the second column and not the rest.   This has been fixed.
*   **DR-1213 - Manifest: Managing partial files do not update DynamoDB file status:** Managing partial files did not update the DynamoDB file status: When ES did a partial insertion from a file, it rejected the rest, and a partial file was created. The manifest process does not handle partial files - in the DynamoDB table (fileproccesedstatus) if a file is partially generated, it is marked as failed, with status code 206. Once the related partial file is processed, the status of the parent file is not updated, causing the rupture of the manifest upload process. This bug is no longer happening as we removed the use of partial files.

</div>