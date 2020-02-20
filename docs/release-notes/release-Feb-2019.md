---
id: release-feb-2019
title: Qrvey Version 3.11
sidebar_label: February 2019
---
<div style="text-align: justify">

Release Date: 2019-02-28
## New Features

### Admin Portal

*   **Sharing Applications - Metrics and Pages.** Metrics and Pages can be included when sharing applications to different servers/accounts.


### Analytics

*   **Data Links - Chart Builder.** The use of data links is now enabled for Heaptmap, Wordcloud and Pie charts as well as for the Multiseries option. 

*   **Filter Samples - Complex/Simple Columns.** Filtering samples for predefined filters are now applied to complex and simple columns in Custom Charts.


### Automation



*   **Automation - Send Email RTF.** Rich Text Formatting options are now available for the email action in the automation section. 

*   **Exports - Name and Address Fields.** Compound fields such as Name and Address are now separated into different columns for each of the sub-fields. In the case of Name, 'First Name' is exported in one column and 'Last Name' is exported to another column.  

*   **Exports - Branches.** Branching fields are now added as columns to CSV exports 

*   **Dependencies Manager - Report Builder.** Report Builder, Page Builder, Custom Charts, Metric dependencies are now being managed.  

*   **Page Builder - Viewport Management.** Creators can now visualize how their pages or data applications will look in tablet and phone devices. They can design their pages for a desktop and we will automatically create the responsive versions.


### Data Router



*   **Metadata - Aggregation Support.** Aggregation works similar to lookup returning an aggregated value over an array of objects instead of a single row. This is working for arrayLookUp transformations. 

*   **Metadata - Consolidated Destinations.** A consolidated destination is a destination populated from multiple flatteners. Every flattener has its priority and only non-null fields from lower priority source can override null fields from higher priority source. Consolidation is now happening at field level rather than at document level. 


*   **Metadata - Pivot.** You can now convert numbered fields into arrays. 

*   **Metadata - Regular Expressions Match/Replace Support.** On a transformation you can define a regular expression to match a text and then replace it's value with another one.

*   **Metadata - Filter an Array.** You can filter the values of an array by defining a conditional on the metadata definition. This can be used in a lookup - flat data transform.

*   **Metadata - Full Outer Join.** An outer join can be applied between two arrays identifying the relationship and adding some conditionals. This can be applied in a merge transform.

*   **Metadata - Modify the Schema for Flat Data Transformation**. The JSON structure for the flat data transformation was modified to make it more clear.

*   **Metadata - New Transforms.** New transformations have been added, namely: merge, conditional transformation, arrayMultiLookup and adding columns to the same array. 

*   **Metadata - Postdata - Custom Javascript Function CRUD and test**. There is a new endpoint that can be used to create, read(select), update and delete custom javascript functions. You can also test the function with this new endpoint.

*   **Metadata Creator (UI): Text Transformations.** Uppercase, Lower Case, Substring, Concat transformations were added to Metadata Creator.

*   **Metadata Creator (UI): Test Data / Output.** This option allows Admin users to test the metadata they have created against a Data JSON.

*   **Metadata Creator (UI) - Validations.** The following validations were added to find errors when the user is on the JSON tab.<br/><ol><li>Empty column names</li><li>Duplicated columns in the same level</li><li>Special chars in ColumnNames and indexName</li><li>Unique transformation columnName when the transformation type is "Add"</li><li>Relations with new transformation columnNames and other transformations related columns</li><li>Unique transformation names</li><li>Date format Validation</li></ol>

### Web Forms 

*   **Web Forms - Dropdown/Lookup Multiple Selection.** This option allows respondents to select more than one answer in a Lookup or Dropdown field. 

*   **Web Forms - Quiz Editing.** Previously once a quiz was active and had collected answers, quiz creators weren't able to edit any text in case a typo or mistake was made. Quiz creators can now edit any text added to field labels, answer options, text fields even when there are answers submited to a quiz.   



### **General Tweaks and Bug Fixes**

*   **Metadata - Reserved Words.** At creation time, the use of reserved words for column names is prohibited, but using an uppercase letter or the whole word, allows the use of these words as names. 

*   **Postdata - Fix Detect Entities. Error in function with finally statement.** The finally statement was removed when data was returned from AWS. 

*   **Postdata - Detect Sentiment IBM timing out on Postdata Request.** Metadata was being created but postdata request was failing with “‌message”: “Endpoint request timed out” 

*   **Postdata - Image Analysis: detect faces & detect text, postdata request is timing out.** PostData request to test metadata using image recognition, was timing out. "message": "Endpoint request timed out" .
*   **Postdata - DateTime Functions: addDate is failing.** Updating a date, using the addDate function was not working, it was showing an error in the output.

*   **Postdata - DateTime Functions: changeFormat its timing out.** Using the transformation for changeFormat from date/time functions was failing with a time out. 

*   **Postdata - DateTime Functions: changeTimeZone is timing out**. Using the transformation to change the time zone was timing out. 

*   **Postdata - DateTime Functions: differenceDate is failing.** Using the datetime function differenceDate to add a new column with the difference of the two provided dates was failing and giving status code: 400.

*   **Postdata - DateTime Functions: extractFromDate is failing.** Extracting a part of a date from data was not working. It was giving an "unexpected error".

*   **Postdata - DateTime Functions substractDate is timing out.** Subtracting from a date was failing. A time out was happening.

*   **Live Definition - Error when trying to update.** When trying to update data through liveDefinition, an error was ocurring and the data was not being updated. 

*   **Web Forms - US Address Field.** The dropdown for 'State' field was fixed.

*   **Web Forms - Short Text Field.** On the respondents' side the Short Text Field was showing as a large text box which was too big for texts such as labels  or one-word answers. The text was reduced to show the height for one line of text. 

*   **Metadata Creator - DataRouter URL.** The URL was hardcoded in the app and whereas it should have been dynamic based on installation.

### **Known Issues**

*   **Lookup Field - SQL Connection.** When the SQL connection is deleted and it's being used in a lookup there is no error shown but the lookup field stops working. 

*   **Datasets - Database Connection -  Oracle Tables.** When setting up the connection for Oracle the Tables/View is not showing in the connection modal. 

*   **Spreadsheet - Progress Bar.** When the user clicks on save button, progress bar remains in 0%.

*   **Web Forms - Advanced Lookup.** When using Advanced Lookup with Multiple Selection, and a record for this field is going to be edited on the Analytics - Tabular View, the edit modal remains loading so it's not possible to edit any field. 

*   **Datasets - MS SQL Preparing Data.** Preparing data stage has performance issues when there are more than 1M records. 

*   **Web Forms - Survey - Pausing Surveys.** When a maker pauses a survey that has existing answers the button remains in "Pausing..." state but the web form is not paused. 

*   **Web Forms - Quiz Respondents.** When a quiz question has long texts the question number overlaps with the header bar.  

*   **Web Forms - Dropdown/Lookup End User.** When the user opens dropdown, it is expanded and the next controls (button, questions) are moved down.

*   **Web Forms - Advanced Lookup End User.** When the user scrolls to the bottom the loading spiiner shows and the data is not loaded completely.

*   **Form - Summary View - CSV Filter Exports.** Exporting CSV of Summary View is not exporting with the applied filters. All the records are exported. 

*   **Web Forms - Deleting Answers.** When user executes a query trying to delete all answers from a web form, the application takes some time to completely delete all of the answers. The response time depends on the size of the web form dataset and the amount of records.

*   **Custom View - Pie Chart - Labels.** When the values of a wedge are very low the labels from different wedges that are too close together and very thing might overlap.  

*   **Spreadsheet - Custom View In Firefox.** "Add Chart" button doesn't launch Chart Builder in Firefox. 

*   **Crosstab - Totals.** Columns are showing only 25 rows of "Grand Totals" the rest does not show. 

*   **Custom View - Chart Editor - Numeric Settings.** When the user changes chart numeric setting, the labels overlap the axis. 

*   **Data Links - Filters Panel.** When setting a filter using linked columns, the Total Record count shows the overall total for the entire dataset and not the filtered total of records. 

*   **Charts - Heatmap Legends.** Legends are overlapping 

*   **Data Links - Filters.** Filter record counter is not showing total filtered records, but total records in the dataset. 

*   **Chart Builder - Numeric Columns.** When makers change the numeric settings the vertical axis overlaps the labels.

*   **Datasets - Elasticsearch Filtering.** Filter by Value option is case sensitive when the user performs a search.
*   **Automation - Reload Data Action.** Reloading data is not working properly.

*   **Automation - Send Email Tokens.** When a workflow is activated with a send email action that is using tokens, the first token of the email body is deleted.   

*   **Automation - Conditions.** If Field dropdowns have issues.
*   **Data Links - Web Forms.** When establishing a link between 2 web forms through an Address column the city + city combination doesn't work and shows "No Data Found".