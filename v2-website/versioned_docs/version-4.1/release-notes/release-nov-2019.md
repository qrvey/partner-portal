---
id: release-nov-2019
title: Qrvey Version 3.3
sidebar_label: November 2019
original_id: release-nov-2019
---
<div style={{textAlign: "justify"}}/>

Release Date: 2019-11-13

## New Features

### Admin Center

-   **ADMIN-1662 - Usage Statistics:** We added a section in Account information to show statistics for the Qrvey Composer and Data Router usage. The statistics shown are “Current Plan Status”, “Server Name” for the server that is registered in AWS, “Data Storage” to show how much space has been used by the application on AWS server, “Current Average Storage”, “AWS Server Type”, “Number of Servers”, “Creator Accounts”, “End User Accounts”, and “Created Applications”. 
-   **ADMIN-1669 - Sharing Data Links:** The option to select and add datalinks to the content package to be shared in applications when creating a new application or appending content is now available.

### Data Sources

-   **QV-9003 - AWS Comprehend:** We replaced IBM Watson text analysis for AWS Comprehend. With this type of  analysis we can display Keywords, Entities, Wordcloud and Sentiment analysis on long or short text columns in Web Forms and Text columns on CSVs. This feature will be available for Elasticsearch and Database Connections datasets next. 

### Application Building

-   **AT-4778 - Page Actions - Drill-downs:** Creators can enable and set up Drill-downs for End Users. They can choose to display all columns available in a dataset, or they can choose specific columns to display in order for end users to apply drill-downs. 

### Data Router

-   **DR-1247 - Data Sync:** Admins will now have the option to set up data syncing configurations to upload data based on a schedule, overwriting or appending to existing data loaded in the system. 
-   **DR-1248 - Text Analysis Transformation:** This new transformation will allow users to apply different text analysis while uploading data: Keyphrases, Sentiment, Dominant Language and Entities detection using AWS Comprehend.

### **Other Enhancements**

-   **QV-9142 Database Connections - Editing Datasets:** We fixed the option for creators to upload their datasets. After saving and loading data for the first time they can again edit the dataset to add or remove new columns. 
-   **AN-5945 - Buckets in Box & Whiskers:** We added the option to use bucketed columns in the Box & Whiskers Chart.
-   **AN-6821 - Formulas in Box & Whiskers:** We added the option to use calculated columns (formulas) in the Box & Whiskers Chart.
-   **AN-8045 - Buckets in Crosstab:** We added the option to use bucketed columns in the Crosstab Chart.
-   **AN-7641 - Data Links in Multi-level Grouping Table Charts:** We enabled the option to use columns from a linked dataset when creating Table charts that have multiple group levels. 
-   **AN-7780 - Formula Syntax Using Column Name**: We improved the syntax of formulas by using the column name rather than columns ID which is a series of numbers that made it hard to read. We also color coded the different parts of formulas to allow users to better distinguish the different parts of the formula. 

### **General Tweaks and Bug Fixes**

-   **CSV Exports:** We fixed and removed from exported CSVs the numbers assigned to columns and displayed in headers. 
-   **Date Sorting:** Sorting applied on charts using date columns was being sorted in alphabetical order and not by Month, this was fixed.  
-   **Formulas - Date Add/Date Subtract:** A day was being subtracted from the Date Subtract formula result - this was fixed.
-   **AN-8008- Metrics - Bullet Gauge**: NaN was visible when using ‘Between’ threshold - this was fixed.
-   **AN-7878- Chart Builder - Crosstab Preview:** Filters were not being applied to charts in the preview - this was fixed.
-   **AN-6503 Chart Builder - Box and Whiskers - Max Data Points:** This option in “Visualization” “Global Settings” was not showing the set data points - this was fixed.
-   **QV-9130 - Web Forms - Save answers:** Web Forms with branches using a phone number field were not loading all the answers when the “Save Answers” option was used - this was fixed.
-   **QV-9126 - Forms - Archive Option for Branches:** Web Forms couldn’t be activated when there were incomplete branches archived - this was fixed.
-   **QV-8830 - Survey - Branches - Numeric question:** Currency/percentage options weren’t displayed properly - this was fixed.
-   **ADMIN-989 - Content Deployment - Releases:** When a user performed a search in content, the result of the search was done only in one page, and when you click the “next” arrow, the same page was shown with the same result - this was fixed.
-   **AT-4922 - Activity Log - Exporting Service:** Details about Failed Process were not being exported - this was fixed.

### **Known Issues**

-   **QV-9351:** On the Admin Center, when creating a new dataset from a database connection, when after using the SQL View, all column data types are text-label by default. The fix will suggest the data type based on the content.
-   **AN-8296 - Crosstab Grouped Total:** When there are more than 25 max data points shown the grouped totals are calculated only  for the top 25 max data points. 
-   **AN-6668 - Metrics Time Period - Quarter:** Count and Distinct Count are not working correctly for some field types used in Web Forms such as Signature, Word Expression Multiselection, Address.
-   **AN-8364 - Filters/Buckets Error with Dates:** When a user has a different time zone and is trying to select a date to create a bucket or a filter, the application changes the date to a previous one. 
-   **AN-7810 - Table Chart - Filtering Bucketed Columns in Groups:**  When using bucketed columns as a group in table chart the filters set on this column are not being applied. 
-   **AN-8249 - Date Drill-downs - Changing Date Columns:** If the user has applied a drill down using dates and applies the drill using a different date column, the drill  must be restored to use the second date column, showing the result from the first level - year-. 
-   **AN-8189 - Crosstab - Null Values Displayed:** When crosstab charts are created using multiple levels of columns and values and these columns are expanded cells are shown empty instead of displaying the values that exist in the data.
-   **AN-7914 - Crosstab - Sorting by Columns:** When applying sorting option on a column in a crosstab chart with multiple levels the sorting is only reflected on the second column and not the rest.  
-   **QV-8963- Spreadsheets - Data Load:** The number of records in a spreadsheet does not load completely.
-   **DR-1213- Manifest:** Managing partial files does not update the DynamoDB file status, that is, when ES does a partial insertion from a file, it rejects the rest, and a partial file is created. The manifest process does not handle those partial files, as in the DynamoDB table (fileproccesedstatus) a partial file is marked as failed, with status code 206, and once the related partial file is processed, the status of the parent file is not updated, causing a failure of the manifest upload process.