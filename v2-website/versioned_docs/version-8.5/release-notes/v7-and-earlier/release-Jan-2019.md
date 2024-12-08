---
id: release-jan-2019
title: Qrvey Version 3.10
sidebar_label: Qrvey Version 3.10
---
<div style={{textAlign: "justify"}}>
Release date: 2019-01-30

## New Features and Enhancements


### Data Preparation  

*   **Metadata Creator -Transformations - Sum.** The function "Sum" sums an array of values. 

*   **Metadata Creator -Transformations - Divide.** The function "Divide" divides two numbers.  

*   **Metadata Creator -Transformations - Multiply.** The function "Multiple" multiples the values of the array. 

*   **Metadata Creator -Transformations - Subtract.** The function "Subtraction" allows to subtract two values. 

*   **Metadata Creator -Transformations - Round.** The function "Round" returns the value of a number rounded to the nearest integer. 

*   **Metadata Creator -Transformations - Ceil.** The function "Ceil" rounds a number UPWARDS to the nearest integer greater than or equal to the value of column field and returns the result. 

*   **Metadata Creator -Transformations - Floor.** The function "Floor" rounds a number DOWNWARD to its largest integer less than or equal to the value of column field and returns the result.

*   **Web Forms - SQL Lookup Field - Branches.** Supporting Branching in Lookup Fields that use SQL Connections. 

### Data Analysis and Automation

*   **Data Links - Links Active.** Establishes the link definition between datasets so the data from one dataset is available a second dataset, linked by a shared column. 

*   **Data Links - Chart Builder - Value Dropdown.** Using the established links between datasets to create Bar, Line and Symbol charts with a linked column as a value. 

*   **Data Links - Filters.** Using the established links between datasets as filters. 

*   **Data Links - Chart Builder - Combo Charts.** Using the established links between datasets to create Combo charts with a linked column as a value.

*   **Page Builder - Insert Report.** Allows inserting reports created in Report Builder into Page Builder. It copies all the report tabs into a page and can apply report filters optionally. 

*   **Page Builder - Page Links from Images, Text.** Page Objects such as images and text can be turned into links by adding a URL in the object details panel. 

*   **Page/Report Builder - Database Connections Support.** Allows the use of datasets created from MySQL, MS SQL and Oracle to be used to add charts, metrics and summary panels to Pages or Reports.  

*   **Page/Report Builder - Filter By Chart Option.** Click option to set a quick filter on a custom chart from Page or Report Builder and the End User interface. 

*   **Page/Report Builder - Create/Edit Metric Panels.** Allowing the creation and editing of Metrics panels directly from Page and Report Builder.

*   **Automation - Actions - Update/Insert/Delete Record.** Allows inserting, updating or deleting records automatically into datasets and web forms triggered by new data coming in to the system. 

*   **Automation - Actions - Search Record - Multiple Level Conditions.** Allows the use of nested or multiple level conditions inside the Search Records action. 

*   **Automation - Quiz Conditions - "If Result" "If Retry" "If Score" "If Rank".** Allows the use of all the different quiz actions or attributes as conditions when creating flows based on new data or scheduling triggers. 

*   **Automation - Response Date Token.** Tokens that contains the date a Survey, Form or Quiz were responded.


### Admin Center
*   **Sharing Model - Deploy Application.** Allows adding servers so they can be used to pull content from a specific application to be shared across servers and to multiple accounts. Admin users can create a content package and decide to share an entire application, or individual ES Live Connection Datasets, or Web Forms, then they can select the destination server and account to share and install the application.

## General Tweaks and Bug Fixes

*   **BigInt column in SQL Server.** Loading Data with primary key. 

*   **Database Connection.** Datatypes couldn't be edited for MySQL connection. 

*   **Web Forms - Saving Answers.** Save answers option wasn't working properly for Image Upload, Signature, Address, Lookup and Name fields. 

*   **Quiz - Custom Score Options.** A Quiz could be activated even when there was a condition that was not completed.  

*   **Web Forms - Performance.** When opening  a web form it took 15 seconds to show the content. 

*   **Datasets - Database Connection - Overlapping when Scrolling.** There was some overlapping between the columns table and the name/description box once the load was finished. 

*   **Tabular View - Editing Lookup Field With Branching.** Questions in branches that are generated from a lookup field using a Dataset as a source were failing when a user tried to edit the branch questions from Tabular View.

*   **Datasets - Database Connection - Loading Unsaved Data.** When a connection was edited, and the changes were saved users could continue to upload data again. However if the changes were not saved they shouldn't have been able to upload data. The "Load" button was active, which allowed users to "Load" at any time with or without saved changes.


</div>