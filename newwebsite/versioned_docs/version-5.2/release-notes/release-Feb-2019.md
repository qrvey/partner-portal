---
id: release-feb-2019
title: Qrvey Version 3.11
sidebar_label: February 2019
---
<div style={{textAlign: "justify"}} />
Release date: 2019-02-28

## New Features and Enhancements

### Data Preparation

-   **Metadata - Aggregation Support.** Aggregation works similar to lookup returning an aggregated value over an array of objects instead of a single row. This is working for arrayLookUp transformations. 

-   **Metadata - Consolidated Destinations.** A consolidated destination is a destination populated from multiple flatteners. Every flattener has its priority and only non-null fields from lower priority source can override null fields from higher priority source. Consolidation is now happening at field level rather than at document level. 


-   **Metadata - Pivot.** You can now convert numbered fields into arrays. 

-   **Metadata - Regular Expressions Match/Replace Support.** On a transformation you can define a regular expression to match a text and then replace it's value with another one.

-   **Metadata - Filter an Array.** You can filter the values of an array by defining a conditional on the metadata definition. This can be used in a lookup - flat data transform.

-   **Metadata - Full Outer Join.** An outer join can be applied between two arrays identifying the relationship and adding some conditionals. This can be applied in a merge transform.

-   **Metadata - Modify the Schema for Flat Data Transformation**. The JSON structure for the flat data transformation was modified to make it more clear.

-   **Metadata - New Transforms.** New transformations have been added, namely: merge, conditional transformation, arrayMultiLookup and adding columns to the same array. 

-   **Metadata - Postdata - Custom Javascript Function CRUD and test**. There is a new endpoint that can be used to create, read(select), update and delete custom javascript functions. You can also test the function with this new endpoint.

-   **Metadata Creator (UI): Text Transformations.** Uppercase, Lower Case, Substring, Concat transformations were added to Metadata Creator.

-   **Metadata Creator (UI): Test Data / Output.** This option allows Admin users to test the metadata they have created against a Data JSON.

-   **Metadata Creator (UI) - Validations.** The following validations were added to find errors when the user is on the JSON tab.<br /><ol><li>Empty column names</li><li>Duplicated columns in the same level</li><li>Special chars in ColumnNames and indexName</li><li>Unique transformation columnName when the transformation type is "Add"</li><li>Relations with new transformation columnNames and other transformations related columns</li><li>Unique transformation names</li><li>Date format Validation</li></ol>

-   **Web Forms - Dropdown/Lookup Multiple Selection.** This option allows respondents to select more than one answer in a Lookup or Dropdown field. 

-   **Web Forms - Quiz Editing.** Previously once a quiz was active and had collected answers, quiz creators weren't able to edit any text in case a typo or mistake was made. Quiz creators can now edit any text added to field labels, answer options, text fields even when there are answers submited to a quiz. 

### Analytics and Automation

-   **Data Links - Chart Builder.** The use of data links is now enabled for Heaptmap, Wordcloud and Pie charts as well as for the Multiseries option. 

-   **Filter Samples - Complex/Simple Columns.** Filtering samples for predefined filters are now applied to complex and simple columns in Custom Charts.

-   **Automation - Send Email RTF.** Rich Text Formatting options are now available for the email action in the automation section. 

-   **Exports - Name and Address Fields.** Compound fields such as Name and Address are now separated into different columns for each of the sub-fields. In the case of Name, 'First Name' is exported in one column and 'Last Name' is exported to another column.  

-   **Exports - Branches.** Branching fields are now added as columns to CSV exports 

-   **Dependencies Manager - Report Builder.** Report Builder, Page Builder, Custom Charts, Metric dependencies are now being managed.  

-   **Page Builder - Viewport Management.** Creators can now visualize how their pages or data applications will look in tablet and phone devices. They can design their pages for a desktop and we will automatically create the responsive versions.

### Admin Center

-   **Sharing Applications - Metrics and Pages.** Metrics and Pages can be included when sharing applications to different servers/accounts.

## General Tweaks and Bug Fixes

-   **Metadata - Reserved Words.** At creation time, the use of reserved words for column names is prohibited, but using an uppercase letter or the whole word, allows the use of these words as names. 

-   **Postdata - Fix Detect Entities. Error in function with finally statement.** The finally statement was removed when data was returned from AWS. 

-   **Postdata - Detect Sentiment IBM timing out on Postdata Request.** Metadata was being created but postdata request was failing with “‌message”: “Endpoint request timed out” 

-   **Postdata - Image Analysis: detect faces & detect text, postdata request is timing out.** PostData request to test metadata using image recognition, was timing out. "message": "Endpoint request timed out" .

-   **Postdata - DateTime Functions: addDate is failing.** Updating a date, using the addDate function was not working, it was showing an error in the output.

-   **Postdata - DateTime Functions: changeFormat its timing out.** Using the transformation for changeFormat from date/time functions was failing with a time out. 

-   **Postdata - DateTime Functions: changeTimeZone is timing out**. Using the transformation to change the time zone was timing out. 

-   **Postdata - DateTime Functions: differenceDate is failing.** Using the datetime function differenceDate to add a new column with the difference of the two provided dates was failing and giving status code: 400.

-   **Postdata - DateTime Functions: extractFromDate is failing.** Extracting a part of a date from data was not working. It was giving an "unexpected error".

-   **Postdata - DateTime Functions substractDate is timing out.** Subtracting from a date was failing. A time out was happening.

-   **Live Definition - Error when trying to update.** When trying to update data through liveDefinition, an error was ocurring and the data was not being updated. 

-   **Web Forms - US Address Field.** The dropdown for 'State' field was fixed.

-   **Web Forms - Short Text Field.** On the respondents' side the Short Text Field was showing as a large text box which was too big for texts such as labels  or one-word answers. The text was reduced to show the height for one line of text. 

-   **Metadata Creator - DataRouter URL.** The URL was hardcoded in the app and whereas it should have been dynamic based on installation.
