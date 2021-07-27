---
id: release-nov-2019
title: Qrvey Version 3.3
sidebar_label: November 2019
---
<div style={{textAlign: "justify"}}>
Release date: 2019-11-13

## New Features and Enhancements


### Data Preparation

*   **QV-9003 - AWS Comprehend:** We replaced IBM Watson text analysis for AWS Comprehend. With this type of  analysis we can display Keywords, Entities, Wordcloud and Sentiment analysis on long or short text columns in Web Forms and Text columns on CSVs. This feature will be available for Elasticsearch and Database Connections datasets next. 

*   **QV-9142 Database Connections - Editing Datasets:** We fixed the option for creators to upload their datasets. After saving and loading data for the first time they can again edit the dataset to add or remove new columns. 

*   **DR-1247 - Data Sync:** Admins will now have the option to set up data syncing configurations to upload data based on a schedule, overwriting or appending to existing data loaded in the system. 

*   **DR-1248 - Text Analysis Transformation:** This new transformation will allow users to apply different text analysis while uploading data: Keyphrases, Sentiment, Dominant Language and Entities detection using AWS Comprehend.

### Data Analysis & Automation


*   **AN-5945 - Buckets in Box & Whiskers:** We added the option to use bucketed columns in the Box & Whiskers Chart.

*   **AN-6821 - Formulas in Box & Whiskers:** We added the option to use calculated columns (formulas) in the Box & Whiskers Chart.

*   **AN-8045 - Buckets in Crosstab:** We added the option to use bucketed columns in the Crosstab Chart.

*   **AN-7641 - Data Links in Multi-level Grouping Table Charts:** We enabled the option to use columns from a linked dataset when creating Table charts that have multiple group levels. 

*   **AN-7780 - Formula Syntax Using Column Name**: We improved the syntax of formulas by using the column name rather than columns ID which is a series of numbers that made it hard to read. We also color coded the different parts of formulas to allow users to better distinguish the different parts of the formula. 

*   **AT-4778 - Page Actions - Drill-downs:** Creators can enable and set up Drill-downs for End Users. They can choose to display all columns available in a dataset, or they can choose specific columns to display in order for end users to apply drill-downs. 



### Admin Center
*   **ADMIN-1662 - Usage Statistics:** We added a section in Account information to show statistics for the Qrvey Composer and Data Router usage. The statistics shown are “Current Plan Status”, “Server Name” for the server that is registered in AWS, “Data Storage” to show how much space has been used by the application on AWS server, “Current Average Storage”, “AWS Server Type”, “Number of Servers”, “Creator Accounts”, “End User Accounts”, and “Created Applications”. 
*   **ADMIN-1669 - Sharing Data Links:** The option to select and add datalinks to the content package to be shared in applications when creating a new application or appending content is now available.

## General Tweaks and Bug Fixes

*   **CSV Exports:** We fixed and removed from exported CSVs the numbers assigned to columns and displayed in headers. 
*   **Date Sorting:** Sorting applied on charts using date columns was being sorted in alphabetical order and not by Month, this was fixed.  
*   **Formulas - Date Add/Date Subtract:** A day was being subtracted from the Date Subtract formula result - this was fixed.
*   **AN-8008- Metrics - Bullet Gauge**: NaN was visible when using ‘Between’ threshold - this was fixed.
*   **AN-7878- Chart Builder - Crosstab Preview:** Filters were not being applied to charts in the preview - this was fixed.
*   **AN-6503 Chart Builder - Box and Whiskers - Max Data Points:** This option in “Visualization” “Global Settings” was not showing the set data points - this was fixed.
*   **QV-9130 - Web Forms - Save answers:** Web Forms with branches using a phone number field were not loading all the answers when the “Save Answers” option was used - this was fixed.
*   **QV-9126 - Forms - Archive Option for Branches:** Web Forms couldn’t be activated when there were incomplete branches archived - this was fixed.
*   **QV-8830 - Survey - Branches - Numeric question:** Currency/percentage options weren’t displayed properly - this was fixed.
*   **ADMIN-989 - Content Deployment - Releases:** When a user performed a search in content, the result of the search was done only in one page, and when you click the “next” arrow, the same page was shown with the same result - this was fixed.

</div>