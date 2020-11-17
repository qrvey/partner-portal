---
id: version-5.3-release-mar-2019
title: Qrvey Version 3.12
sidebar_label: March 2019
original_id: release-mar-2019
---
<div style="text-align: justify">
Release date: 2019-03-30

## New Features and Enhancements

### Data Preparation 

*   **Metadata Creator (UI): Text Transformations.** TemplateText, splitText, replaceText, trimText transformations were added to Metadata Creator

*   **Metadata - Draft Mode**: You can  now publish and unpublish metadata, and can fully modify any unpublished metadata. This provides a convenient way to test data, as users don't have to create and delete metadata entries for each test.

*   **Metadata - New Custom Javascript Functions.** New Javascript custom functions were added by request from SCC.
*   **Metadata - Storing Custom Function's Returning Value.**	 We couldn't use custom functions value for destinations. Now we can use this value and store it as a new column in flat data transformations

*   **Metadata - Hiding Internal Metadatas.** We now hide the metadata items created internally by the Qrvey app from the Metadata UI, to avoid confusion. 

*   **Postdata - Manifest File to Process Data Files in Sequence.** There's a new mechanism to process uploaded data files to S3. This is to organize the way data is being processed by establishing an order of files and folders

*   **Metadata - ToFixed transformation.** We created a new transformation to set a limit for decimal numbers.


*   **Web Forms - Rich Text Formatting.** RTF option was added to field descriptions and headlines


### Data Analysis & Automation 

*   **Bucketed Columns.** Buckets can be referred to as categories that users create to group values. They can be created using any date, text or numeric values. When a bucket is created it generates a new column that is added to the dataset as a "Bucketed Column"

*   **Data Links - Box and Whiskers Chart.** The use of data links is enabled for Box and Whiskers chart.

*   **Quiz Analytics - New and improved Summary View for Quiz Analytics**. Users can see the answer breakdown by score, results, and correct/incorrect answers. They can also visualize the aggregates for correct answers for each field.

*   **End User Filters.** Filtering for End Users is available. They can now apply global, tab and panel filters.

*   **Workflows Widget.** The new Workflows V2 widget was released 12/14/2018. Workflows V1 is now deprecated. The new version contains New Data, Update Data, Scheduling and Webhook Triggers, If Field Conditions, Quiz Conditions, Send Email/SMS Action,  Send to Webhook Actions, Search/Insert/Update/Delete Record Actions, Submit/Post/Get/Reload Data Actions, User Defined/System/Data Tokens.

*   **Tokens - User Defined Tokens.** User Defined Tokens are variables that can be created and defined by users and are available in the context of Workflows.

*   **Tokens - Add/Manage Tokens.** Tokens can be added and managed through this tokens widget available in the context of Workflows.



### Admin Center

*   **Sharing Applications - Reports.** Admins can now share reports and it's content from one server to another.

*   **Section Customization.** Admins can enable or disable all the general sections in the maker platform.


## General Tweaks and Bug Fixes

*   **Workflow V2 - New Data.** Data tokens were not being replaced with elastic search. A notification error was fixed when uploading data into Elasticsearch. Two messages were being sent: one empty and one with the required information. 

*   **Postdata - Handle error when ES id value is longer than 512 bytes	Elasticsearch doesn't allow IDs longer than 512B.** This error is being handled by sending the files with this error into the "failed files" bucket.

*   **Metadata - Get all endpoint: missing recently created metadata in the response body.**	This was an error reported in Metadata UI. Recently created metadata were not being displayed. This was fixed in the query.

*   **Postdata - Lambda - Problem handling wrong file types: not sending files to failedFilesBucket**. There was a problem when uploading an incompatible file type to DataRouter. These file weren't being sent to the "failed files" bucket.

*   **Metadata - Transformations - Lowercase.** When the string has uppercase and lowercase and included spaces, there was an error when trying to use the lowercase transformation. Additional spaces were appearing.

*   **Postdata - Transformations not working with nested objects.** There was a problem with transformations in nested objects. They weren't working

*   **Spreadsheet - Progress Bar.** When the user clicked the save button, the progress bar remained at 0%.

*   **Web Forms - Advanced Lookup.** When using Advanced Lookup with Multiple Selection and a record for this field was to be edited on the Analytics - Tabular View, the edit modal remained "loading" so it was not possible to edit any field.

*   **Web Forms - Quiz Respondents.** When a quiz question had long texts, the question number overlapped with the header bar. 

*   **Web Forms - Dropdown/Lookup End User.** When the user opened a dropdown, it was expanded and the next control's button and question were moved down.

*   **Web Forms - Advanced Lookup End User.** When the user scrolled to the bottom, the loading icon was shown and the data was not loaded completely.

*   **Form - Summary View - CSV Filter Exports.** Exporting a CSV from a Summary View was not exporting just the filtered data. All the records were exported.

*   **Spreadsheet - Custom View In Firefox.** The "Add Chart" button didn't launch the Chart Builder in Firefox.

*   **Charts - Heatmap Legends.** Legends were overlapping.

*   **Automation - Reload Data Action.** Reloading data did not work properly.

*   **Automation - Send Email Tokens.** When a workflow was activated with a send email action, that is using tokens, the first token of the email body was deleted.  

*   **Automation - Conditions.** If Field dropdowns had issues.

*   **Data Links - Web Forms.** When establishing a link between 2 web forms through an Address column the city + city combination didn't work and showed "No Data Found".

*   **Database Connections - MS SQL Editing.** When these types of datasets were loaded, and then edited, once the changes were saved the datasets did not work properly. 

