---
id: release-2019
title: Release Notes 2019
sidebar_label: Release Notes 2019
---
<div style="text-align: justify">


## Qrvey 3.14   2019-08-09


### Admin Portal

*   **Backups/Restore.** Admins can create a backup from an application they have shared and when needed can restore the previous version of the application.  

*   **Sharing Applications - Append Data Label.** Admins can now see which components are new or updated in their content package when they are going to edit a release to append updates to an existing application.  

*   **Custom Styles for Creator Platform.** Admin users have the option to white-label the Qrvey creator platform. 

### Application Building

*   **Permissions Management for Groups - Group ID.** We implemented a way to assign permissions to a user that belongs to more than one group. If a user is assigned to more than one group and each group has different permissions the user must have all the permissions of all the groups to which they belong to.  

*   **Filter Permissions**. Creators can assign permissions to different user groups on the filtering options for end users. These permissions control turning on/off Global, Page, Tab and Panel filters. 

### Data Views

*   **Table Chart - Grouping Single Level.** Table charts now support single level grouping showing the aggregated values by group. 

*   **Formulas - Null Function**. This new function replaces NULL with the specified replacement value. 

### Automation 

*   **Metric Tokens.** Metric tokens can now be used in different fields in automated flows. These tokens include the metric value, change or % difference, any thresholds values added to the metric. These can be accessed through the suggestion box. 

*   **Page Actions - Alerts for Metrics.** Creator can set alerts for metrics in Page Builder. These alerts can be triggered by a custom schedule or when data is updated and can send emails or SMS texts.  

#### Data Router 

*   **Custom Javascript Functions - Get a list of all the created functions and search option.** We created a new endpoint to GET the list of all functions. You can use a query string in order to search for some functions given a search text. For example, if we want to search for all the functions that contain the word “case“ we would call:
 (GET) {{datarouterendpoint}}/v1/customFunction?page=1&search=case 

*   **Metadata - Delete metadata record just after the index is deleted.** Right now there can be some issues deleting an index from Elasticsearch. This can create some inconsistencies with the Metadata as it will be deleted but the index could still exist. We changed the process to delete the Elasticsearch index first. After the index is deleted, we can proceed and delete the Metadata from DynamoDB 

*   **Custom Javascript Functions - Validate javascript syntax on creation.** When creating a custom javascript function, we are validating its syntax to reduce execution errors. 

*   **Reusable Data Rules - PUT must work as defined by the REST standard.** When using PUT, we let the client create the reusable group if it doesn't exist as specified in the REST standard. If the group already exists, the PUT request must update the whole definition of the group. 

*   **Postdata - Better handling of file size limit.** We have a size limit for each JSON file processed in S3 by Postdata. If a file surpases that limit, it will go directly to the failed files bucket. This also fixed "message:true" log. 

*   **Postdata - Retry Mechanism for some Failed Files.** We defined a custom list for temporary errors that are going to be retried when posting data. This will work initially for the "No Living Connections" errors. 

*   **Metadata - PUT must work as defined by the REST standard.** When using PUT, we let the client create the metadata if it doesn't exist as specified in the REST standard. If the metadata already exists, the PUT request must update the whole definition of the metadata. 

*   **Array Lookup - sourceArray should work with sub arrays.** When defining an Array Lookup, it is now possible to use a sub array. The returning value will be the object in the subarray that matches the condition. The lookup up will be done in all records from the parent array. 

### General Tweaks and Bug Fixes 

*   **Page Builder - Multiseries**. Category label was not visible even when resizing and making a chart bigger. This was fixed. 

*   **Installing Applications.** When an application was installed it didn’t appear right away. This has been fixed. 

*   **Responsive Horizontal Bar Chart.** When the bar chart was horizontal the responsive didn't resize correctly. This has been fixed. 

*   **CSV Exports.** Export to CSV was not working in the Analyze section of a dataset. Trying to export a CSV responded with error. This has been fixed. 

*   **Dates Filtering.** Adding multiple values to be selected in a single filter wasn’t working. This has been fixed. 

*   **Bar/Pie Sorting**. Sorting option was not working properly and showing the correct data. This has been fixed.

*   **Metrics Resizing.** Resizing metrics was not working in Page Builder. This has been fixed. 

*   **Sharing Applications - Chart Filters**. When sharing applications filters were not being shared for charts. This has been fixed. 

*   **Survey - Branches - Dropdown Question.** Changing the answer when the "Jump to" option is enabled was not working properly. This has been fixed.

### Known Issues 

*   **Table Chart.** Grouping Table Charts by date-week is causing the chart to show as “Not Available”. 

*   **Appending - Buckets and Formulas.** "This chart is no longer available" appears in charts with buckets and formulas. 

*   **Sharing Applications - Metric Filters**. Metric Filters are not being shared. 

*   **Datasets - Spreadsheets.** Progress bar remains in 100% for a long time and it seems to be stuck. 

*   **Lookup Field - SQL Connection.** When the SQL connection is deleted and it's being used in a lookup there is no error shown and the lookup field stops working. 

*   **Chart Builder - Crosstab.** Row is not sorted when a Formula is the column selected. 

*   **Metric Builder - Time Period - Quarters.** The data doesn't count correctly for some data types in Web Forms using the Quarters option. 

*   **Custom View - Chart Editor Numeric Settings.** When the user changes chart numeric setting the labels overlap the axis. 

*   **Datasets - Elasticsearch Filtering.** Filter by Value option is case sensitive when the user performs a search.  
 
*   **Web Forms - Deleting Answers.** When user executes a query trying to delete all answers from a web form, the application takes some time to completely delete all of the answers. The response time depends on the size of the web form dataset and the amount of records. 

*   **Web Forms Analytics - Branching.** Branch fields for Lookup are not showing in Tabular View.



## Qrvey 3.13   2019-07-12

### Admin Portal

*   **Connectors.** Admins can create Elasticsearch Indexes from external connections to MS SQL, MySQL, Aurora, Postgres and Oracle.

*   **Security on Elasticsearch Indexes.** Admin users will be able to set permissions/security on the Elasticsearch indexes that are created through the Admin Portal. They can define which creators have access to specific indexes through the API.  

*   **Feature Customization.** Admins can disable the sections that Creators will not be using and disable specific features for Datasets, Web forms and Workflows.

*   **Deployments - Appending Content.** After an initial application deployment admins can select newly created, or updated, content to update already deployed applications.

*   **Deployments - Creating Replacements.** When setting up servers, admins can set replacements for MS SQL and Elasticsearch connections used in the server. If a dataset is created from a MS SQL connection in one server a replacement needs to be set for the MS SQL connection on the receiving server.


### Application Building

*   **On Click Actions - Filter By.** Creators can define quick filters on a chart or a full page.
 
*   **Alerts.** Creators can monitor data added to a page or dashboard, and can send or receive alerts.

*   **Creating Charts - Widget Configuration.** Chart creation action was added as a parameter to the Page Builder widget so it can be turned on/off.

*   **User Management Widget.** Authentication, Users and Group permissions are now available as an embeddable widget, used inside Page Builder. 

*   **Data Permissions/Filters.** In User Management, Creators are able to set filters on datasets being used in pages. 

*   **Page/Tab/Chart Permissions.** Creators can assign group-based show/hide permissions on any page, tab or chart created in page builder.  

*   **Authentication.** Creators can have private pages where authentication is required to gain access. 

*   **Page Filtering.** Our filtering system in Page Builder now supports page-level filtering in addition to global, tab and individual panel filtering. 


### Analytics

*   **Tabular View Widget.** A Tabular View widget, with new multi-level grouping and sorting options, is available in datasets. 

*   **Table Chart.** We added a new chart visualization for a simple table chart. 

*   **Data Links - Crosstab.** You can now use linked columns for rows, values or columns when building a Crosstab chart.  

*   **Small Multiples.** We added a new chart visualization used for easy comparison that shows a series of similar charts. 

*   **Formulas Widget.** We added a new widget to create calculated fields for datasets.


### Automation 

*   **Complex Conditions Groups:** You can now add multiple conditions and groups in If Conditions, to create more advanced conditional logic.  

*   **Tokens Manager.** We added Variables which act as containers for data. Tokens can be categorized into Global or Local, and can be used and managed across different contexts in the application.


### Data Router 

*   **Metadata - Standardize "on" and "condition" statements on merge rule.** Previously "on" and "condition" behaved differently. One example is that "on" used "<>" and "condition" used "!=" to express inequality. We introduced a grammar for Javascript like syntax so the "on" statement will behave the same as "condition". 

*   **Metadata - Allow custom Javascript functions on Merge rule.** We made custom Javascript functions available when doing a Merge. In this case, the parameters for the function can be a column from the merged arrays or an outside value e.g the result of a previous rule/transformation.

*   **Postdata - Allow calling functions with other functions as parameters**. When referencing a custom Javascript function inside a metadata you are now able to pass other custom Javascript functions as parameters: function.nvl({{column.value}}, someOtherFunction({{parameter.value}})) 

*   **Error handling - Improve error visualization from duplicate IDs.** When duplicating Data Rules IDs, a new error message shows which ID was duplicated and the corresponding Data Rule. 

*   **Reusable Groups - Add fields from input parameters.** We added the ability to use the input parameters as destination fields in reusable groups. These references are now defined the same way as on the main metadata with the JSON data (without the dollar sign $) 

*   **Error handling - Visualize Postadata errors for Data Rules.** When an error is thrown on Postdata, the message indicates which Data Rule failed. 

*   **Test Utility - Delete previous test leftovers at the start of each test.** We are now deleting the leftovers at the start of each run. 

*   **Metadata - New flattener data rule.** This is a new Data Rule that will flatten an array. The resulting array can be used in subsequent Data Rules. 

*   **Metadata - Allow the execution of Data Rules (Flat Data Transforms) without a flattener**. Data rules can now be applied even if we don't need to flatten an array. Especifically, the "flattenOnField" and "idFlat" attributes won't be mandatory but we will still be able to execute all data rules.


### General Tweaks and Bug Fixes 

*   **Bar Chart - Responsive State.** Fixed bar chart with horizontal bars responsive state. 

*   **Datasets - Database Connection -  Oracle Tables.** When setting up the connection for Oracle the Tables/View is now showing in the connection modal.  

*   **Datasets - MS SQL Preparing Data.** Preparing data stage had performance issues when there were more than 1M records. 

*   **Survey - Pausing Surveys.** When pausing a survey that has existing answers the button remained in "Pausing..." state but the web form wasn’t paused. 

*   **Custom View - Pie Chart - Labels.** When the values of a wedge were very low the labels from different wedges were sometimes too close together and overlapped.  

*   **Data Links - Filters Panel.**	When setting a filter using linked columns the Total Record count showed the overall total for the entire dataset and not the filtered total of records. 

*   **Data Links - Filters.** 	Filter record counter was not showing total filtered records, but total records in the dataset. 

*   **Workflows - New Data Trigger.** New Data trigger was not working with ES Live Connection 

*   **Web Forms - Branching.** Branch questions were not shown for "Other" answers in Multiple Choice field. 

*   **Tokens - Alias.** Alias set by users was not showing in the tokens suggestion box. 

*   **Quiz Analytics - Exports.** The new panels for score, results and correct/incorrect answers were not included in the export. 

*   **Web Form Analytics - Archived Fields.** Archived fields were showing in tabular view.

*   **Crosstab - Totals.** Columns were showing only 25 rows of "Grand Totals" and the rest did not appear. 

*   **Tabular View Exporting.** When exporting tabular view to a CSV the branching columns appear next to their main column. We removed the heading/text columns from the export and tabular view. We are exporting columns in the same order that is set in tabular view. If there are filters set in tabular view, only the filtered data will be exported.  

*   **Data Router - Handling metacharacters.** There was an issue with handling metacharacters like the line feed "\n". Now we are able to handle them and store them in Elasticsearch. 

*   **Data Router - Bad fields replacement on Merge transformation.** There was an error trying to execute a Merge Rule when the "on" statement didn't have a field from the arrays that were being merged. 

*   **Data Router - metadataDateFormat is not available in all Data Rules.** The global variable ""metadataDateFormat"" was not available for all Data Rules. It was only working in the Custom Javascript Function Rule. 

*   **Data Router - idColumn: if specified in child and no related columns are sent, the post fails.** There was an issue if a child metadata was created to store data from flat data rules, and more than one column were specified as idColumns. If the data generated by the parent metadata did not contain the columns related to the child's idColumns, an error was raised when posting the data.


### Known Issues 

*   **Web Forms - Deleting Answers.** When executing a query to delete all answers from a web form, the application takes some time to completely delete all of the answers. The response time depends on the size of the web form dataset and the amount of records. 

*   **Lookup Field - SQL Connection.** When the SQL connection is deleted and it's being used in a lookup there is no error shown but the lookup field stops working. 

*   **Custom View - Chart Editor - Value Settings.** When the user changes the label direction for chart value, the value labels overlap the axis label. 

*   **Datasets - Elasticsearch Filtering**. Filter by Value option is case sensitive when the user performs a search.  

*   **Web Forms Analytics - Branching.** Branch fields for Lookup are not showing in Tabular View 

*   **Answering Forms.** Issue with Grammarly plugin when answering text fields.  

*   **Builders - Page Builder.** Elements added to a page are lost if the user navigates away from the page while the elements are still loading. 

*   **Bar Chart - Multi-series.** Bars for multiseries option with negative values are misplaced. 

*   **Bucketed Columns.** Charts that use bucketed columns with the multi-series option show “No data found” when a bucket is used as a category and there is data available to show.  

*   **Webforms - Survey - Save Answer.** Answers for Phone Number fields are not saved.  

*   **Data Links - Heatmap.** Sorting values with max data points doesn't show the correct data. 

*   **Data links - Combo Chart.** This feature isn't working correctly, and doesn’t provide the expected results.  

*   **Data Link - Multiseries.** An error is shown when filtering a chart using the multi-series option and when the filter is set on a linked column.   

*   **Sharing Applications - Append Data.** All the applications sent from different releases are updated when updates are made. 

*   **Sharing Applications - Append Data.** If a version of the application that was shared is deleted and an updated version of this application is shared again, then the application cannot be installed. 


## Qrvey 3.12   2019-03-30

### Admin Portal

*   **Sharing Applications - Reports.** Admins can now share reports and it's content from one server to another.

*   **Section Customization.** Admins can enable or disable all the general sections in the maker platform.


### Analytics 

*   **Bucketed Columns.** Buckets can be referred to as categories that users create to group values. They can be created using any date, text or numeric values. When a bucket is created it generates a new column that is added to the dataset as a "Bucketed Column"

*   **Data Links - Box and Whiskers Chart.** The use of data links is enabled for Box and Whiskers chart.

*   **Quiz Analytics - New and improved Summary View for Quiz Analytics**. Users can see the answer breakdown by score, results, and correct/incorrect answers. They can also visualize the aggregates for correct answers for each field.

*   **End User Filters.** Filtering for End Users is available. They can now apply global, tab and panel filters.


### Automation

*   **Workflows Widget.** The new Workflows V2 widget was released 12/14/2018. Workflows V1 is now deprecated. The new version contains New Data, Update Data, Scheduling and Webhook Triggers, If Field Conditions, Quiz Conditions, Send Email/SMS Action,  Send to Webhook Actions, Search/Insert/Update/Delete Record Actions, Submit/Post/Get/Reload Data Actions, User Defined/System/Data Tokens.

*   **Tokens - User Defined Tokens.** User Defined Tokens are variables that can be created and defined by users and are available in the context of Workflows.

*   **Tokens - Add/Manage Tokens.** Tokens can be added and managed through this tokens widget available in the context of Workflows.


### Data Router 

*   **Metadata Creator (UI): Text Transformations.** TemplateText, splitText, replaceText, trimText transformations were added to Metadata Creator

*   **Metadata - Draft Mode**. You can  now publish and unpublish metadata, and can fully modify any unpublished metadata. This provides a convenient way to test data, as users don't have to create and delete metadata entries for each test.

*   **Metadata - New Custom Javascript Functions.** New Javascript custom functions were added by request from SCC.
*   **Metadata - Storing Custom Function's Returning Value.**	 We couldn't use custom functions value for destinations. Now we can use this value and store it as a new column in flat data transformations

*   **Metadata - Hiding Internal Metadatas.** We now hide the metadata items created internally by the Qrvey app from the Metadata UI, to avoid confusion. 

*   **Postdata - Manifest File to Process Data Files in Sequence.** There's a new mechanism to process uploaded data files to S3. This is to organize the way data is being processed by establishing an order of files and folders

*   **Metadata - ToFixed transformation.** We created a new transformation to set a limit for decimal numbers.


### Web Forms

*   **Web Forms - Rich Text Formatting.** RTF option was added to field descriptions and headlines


### General Tweaks and Bug Fixes

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


### Known Issues



*   **Lookup Field - SQL Connection.** When the SQL connection is deleted, and it's being used in a lookup, there is no error shown but the lookup field stops working. 

*   **Datasets - Database Connection -  Oracle Tables.** When setting up the connection for Oracle the Tables/View is not showing in the connection modal. 

*   **Datasets - MS SQL Preparing Data.** Preparing data stage has performance issues when there are more than 1M records. 

*   **Web Forms - Survey - Pausing Surveys.** When a maker pauses a survey that has existing answers the button remains in "Pausing..." state but the web form is not paused. 

*   **Web Forms - Deleting Answers**. When a user executes a query trying to delete all answers from a web form, the application takes some time to completely delete all of the answers. The response time depends on the size of the web form dataset and the amount of records. 

*   **Custom View - Pie Chart - Labels.** When the values of a wedge are very low the labels from different wedges that are too close together and very thing might overlap.  

*   **Crosstab - Totals.** Columns are showing only 25 rows of "Grand Totals" the rest does not show. 

*   **Custom View - Chart Editor - Numeric Settings.** When the user changes chart numeric setting, the labels overlap the axis. 

*   **Data Links - Filters Panel.** When setting a filter using linked columns, the Total Record count shows the overall total for the entire dataset, not the filtered total of records. 

*   **Data Links - Filters.** Filter record counter is not showing total filtered records, but total records in the dataset. 

*   **Chart Builder - Numeric Columns.** When makers change the numeric settings the vertical axis overlaps the labels 

*   **Datasets - Elasticsearch Filtering.** Filter by Value option is case sensitive when the user performs a search  

*   **Workflows - New Data Trigger.** New Data trigger is not working with ES Live Connection 

*   **Web Forms - Branching.** Branch questions are not shown for "Other" answers in Multiple Choice field. 

*   **Tokens - Alias**. Alias set by users is not showing in the tokens suggestion box. 

*   **Quiz Analytics - Exports.** The new panels for score, results and correct/incorrect answers are not included in the export. 

*   **Web Form Analytics - Archived Fields.** Archived fields are showing in tabular view  

*   **Web Forms Analytics - Branching.** Branch fields for Lookup are not showing in Tabular View


## Qrvey 3.11   2019-02-28


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



### General Tweaks and Bug Fixes



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

### Known Issues

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


## Qrvey 3.10   2019-01-30
### Admin Portal
*   **Sharing Model - Deploy Application.** Allows adding servers so they can be used to pull content from a specific application to be shared across servers and to multiple accounts. Admin users can create a content package and decide to share an entire application, or individual ES Live Connection Datasets, or Web Forms, then they can select the destination server and account to share and install the application.

### Analytics

*   **Data Links - Links Active.** Establishes the link definition between datasets so the data from one dataset is available a second dataset, linked by a shared column. 

*   **Data Links - Chart Builder - Value Dropdown.** Using the established links between datasets to create Bar, Line and Symbol charts with a linked column as a value. 

*   **Data Links - Filters.** Using the established links between datasets as filters. 

*   **Data Links - Chart Builder - Combo Charts.** Using the established links between datasets to create Combo charts with a linked column as a value.

### Application Building 

*   **Page Builder - Insert Report.** Allows inserting reports created in Report Builder into Page Builder. It copies all the report tabs into a page and can apply report filters optionally. 

*   **Page Builder - Page Links from Images, Text.** Page Objects such as images and text can be turned into links by adding a URL in the object details panel. 

*   **Page/Report Builder - Database Connections Support.** Allows the use of datasets created from MySQL, MS SQL and Oracle to be used to add charts, metrics and summary panels to Pages or Reports.  

*   **Page/Report Builder - Filter By Chart Option.** Click option to set a quick filter on a custom chart from Page or Report Builder and the End User interface. 

*   **Page/Report Builder - Create/Edit Metric Panels.** Allowing the creation and editing of Metrics panels directly from Page and Report Builder.

### Automation 

*   **Automation - Actions - Update/Insert/Delete Record.** Allows inserting, updating or deleting records automatically into datasets and web forms triggered by new data coming in to the system. 

*   **Automation - Actions - Search Record - Multiple Level Conditions.** Allows the use of nested or multiple level conditions inside the Search Records action. 

*   **Automation - Quiz Conditions - "If Result" "If Retry" "If Score" "If Rank".** Allows the use of all the different quiz actions or attributes as conditions when creating flows based on new data or scheduling triggers. 

*   **Automation - Response Date Token.** Tokens that contains the date a Survey, Form or Quiz were responded.

### Data Router  

*   **Metadata Creator -Transformations - Sum.** The function "Sum" sums an array of values. 

*   **Metadata Creator -Transformations - Divide.** The function "Divide" divides two numbers.  

*   **Metadata Creator -Transformations - Multiply.** The function "Multiple" multiples the values of the array. 

*   **Metadata Creator -Transformations - Subtract.** The function "Subtraction" allows to subtract two values. 

*   **Metadata Creator -Transformations - Round.** The function "Round" returns the value of a number rounded to the nearest integer. 

*   **Metadata Creator -Transformations - Ceil.** The function "Ceil" rounds a number UPWARDS to the nearest integer greater than or equal to the value of column field and returns the result. 

*   **Metadata Creator -Transformations - Floor.** The function "Floor" rounds a number DOWNWARD to its largest integer less than or equal to the value of column field and returns the result.


### Web Forms

*   **Web Forms - SQL Lookup Field - Branches.** Supporting Branching in Lookup Fields that use SQL Connections. 

### General Tweaks and Bug Fixes

*   **BigInt column in SQL Server.** Loading Data with primary key. 

*   **Database Connection.** Datatypes couldn't be edited for MySQL connection. 

*   **Web Forms - Saving Answers.** Save answers option wasn't working properly for Image Upload, Signature, Address, Lookup and Name fields. 

*   **Quiz - Custom Score Options.** A Quiz could be activated even when there was a condition that was not completed.  

*   **Web Forms - Performance.** When opening  a web form it took 15 seconds to show the content. 

*   **Datasets - Database Connection - Overlapping when Scrolling.** There was some overlapping between the columns table and the name/description box once the load was finished. 

*   **Tabular View - Editing Lookup Field With Branching.** Questions in branches that are generated from a lookup field using a Dataset as a source were failing when a user tried to edit the branch questions from Tabular View.

*   **Datasets - Database Connection - Loading Unsaved Data.** When a connection was edited, and the changes were saved users could continue to upload data again. However if the changes were not saved they shouldn't have been able to upload data. The "Load" button was active, which allowed users to "Load" at any time with or without saved changes.


### Known Issues



*   **Lookup Field - SQL Connection.** When the SQL connection is deleted, and it's being used in a lookup, no error is shown but the lookup field stops working. 

*   **Datasets - Database Connection - Oracle Tables.** When setting up the connection for Oracle, the Tables/View is not showing in the connection modal. 

*   **Form - Summary View - CSV Filter Exports.** Exporting a CSV from a Summary View ignores the applied filters. All the records are exported.

*   **Web Forms - Deleting Answers.** When a user executes a query trying to delete all answers from a web form, the application takes some time to completely delete all of the answers. The response time depends on the size of the web form dataset and the amount of records. 

*   **Custom View - Pie Chart - Labels.** When the values of a wedge are very low the labels from different wedges may be too close together and might overlap.  

*   **Spreadsheet - Custom View In Firefox.** The “Add Chart" button doesn't launch Chart Builder in Firefox. 

*   **Crosstab -Totals.** Columns are showing only 25 rows of "Grand Totals" and the rest do not show. 

*   **Custom View - Chart Editor - Numeric Settings.** When the user changes chart numeric setting, the labels overlap the axis. 

*   **Data Links - Filters Panel.** When setting a filter using linked columns, the Total Record count shows the overall total for the entire dataset and not the filtered total of records. 

*   **Metadata Creator - DataRouter URL.** The URL is hardcoded in the app whereas it should be dynamic based on the installation.