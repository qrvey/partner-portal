---
id: release-jul-2019
title: Qrvey Version 3.13
sidebar_label: July 2019
---
<div style={{textAlign: "justify"}}/>

Release date: 2019-07-12

## New Features and Enhancements

### Data Preparation

-   **Metadata - Standardize "on" and "condition" statements on merge rule**: ""on"" and ""condition"" were expressed differently. One example is that ""on"" uses ""&lt;&gt;"" and ""condition"" ""!="" to express difference. We introduced a grammar for Javascript like syntax so ""on"" statement could behave the same as ""condition"".


-   **Metadata - Allow custom Javascript functions on Merge rule**: We made custom Javascript functions available when doing a Merge. In this case, the parameters for the function can be a column from the merged arrays or an outside value e.g the result of a previous rule/transformation.

-   **Postdata - Allow calling functions with other functions as parameters**: When referencing a custom Javascript function inside a metadata we are now able to pass other custom Javascript functions as parameters: function.nvl({"{"}{"{"}column.value{"}"}{"}"}, someOtherFunction({"{"}{"{"}parameter.value{"}"}{"}"}))


-   **Error handling - Improve error visualization from duplicate IDs**: When duplicating Data Rules IDs, a new error message will show which ID was duplicated and the corresponding Data Rule.


-   **Reusable Groups - Add fields from input parameters**: We added the ability to use the input parameters as destination fields in reusable groups. These references are going to be defined the same way we use them on the main metadata with the JSON data (without the dollar sign $)


-   **Error handling - Visualize Postadata errors for Data Rules**: When an error is thrown on Postdata we should indicate in the JSON response which Data Rule failed.


-   **Test Utility - Delete previous test leftovers at the start of each test**: We are now deleting the leftovers at the start of each run.


-   **Metadata - New flattener data rule**: This is a new Data Rule that will flatten an array. The resulting array can be used in subsequent Data Rules.


-   **Metadata - Allow the execution of Data Rules (Flat Data Transforms) without a flattener**: Data rules can now be applied even if we don't need to flatten an array. Especifically, the ""flattenOnField"" and ""idFlat"" attributes won't be mandatory but we will still be able to execute all data rules.

### Data Analysis & Automation

-   **Tabular View Widget**: Tabular view widget with new multi-level grouping and sorting options is available in datasets.


-   **Table Chart**: New chart visualization for a simple table chart.


-   **Data Links - Crosstab**: Ability to use linked columns for rows, values or columns when building a Crosstab chart. 


-   **Small Multiples**: New chart visualization used for easy comparison that shows a series of similar charts. 


-   **Formulas Widget**: New widget to create calculated fields available in datasets.

-   **On Click Actions - Filter By**: Creators can define quick filters on a chart or a full page.

-   **Alerts**: Creators can monitor data added to a page or dashboard and send/receive alerts. 


-   **Creating Charts - Widget Configuration**: Chart creation action was added as a parameter to the Page Builder widget so it can be turned on/off.


-   **User Management Widget**: Authentication, Users and Group permissions are now available as an embeddable widget, used inside Page Builder. 
    Data Permissions/Filters. In User Management, Creators are able to set filters on datasets being used in pages.


-   **Page/Tab/Chart Permissions**: Creators can assign group-based show/hide permissions on any page, tab or chart created in page builder.  


-   **Authentication**: Creators can have private pages where authentication is required to gain access.


-   **Page Filtering**: Our filtering system in Page Builder now supports page-level filtering in addition to global, tab and individual panel filtering. 


-   **Complex Conditions Groups**: Option to add multiple conditions and groups in If Conditions to create more advanced conditional logic. 


-   **Tokens Manager**: Variables which act as containers for data. Tokens can be categorized into Global or Local and can be used and managed across different contexts in the application.

### Admin Center

-   **Connectors.** Admins can create Elasticsearch Indexes from external connections to MS SQL, MySQL, Aurora, Postgres and Oracle.

-   **Security on Elasticsearch Indexes.** Admin users will be able to set permissions/security on the Elasticsearch indexes that are created through the Admin Portal. They can define which creators have access to specific indexes through the API.  

-   **Feature Customization.** Admins can disable the sections that Creators will not be using and disable specific features for Datasets, Web forms and Workflows.

-   **Deployments - Appending Content.** After an initial application deployment admins can select newly created, or updated, content to update already deployed applications.

-   **Deployments - Creating Replacements.** When setting up servers, admins can set replacements for MS SQL and Elasticsearch connections used in the server. If a dataset is created from a MS SQL connection in one server a replacement needs to be set for the MS SQL connection on the receiving server.

## General Tweaks and Bug Fixes

-   **Bar Chart - Responsive State.** Fixed bar chart with horizontal bars responsive state. 

-   **Datasets - Database Connection -  Oracle Tables.** When setting up the connection for Oracle the Tables/View is now showing in the connection modal.  

-   **Datasets - MS SQL Preparing Data.** Preparing data stage had performance issues when there were more than 1M records. 

-   **Survey - Pausing Surveys.** When pausing a survey that has existing answers the button remained in "Pausing..." state but the web form wasn’t paused. 

-   **Custom View - Pie Chart - Labels.** When the values of a wedge were very low the labels from different wedges were sometimes too close together and overlapped.  

-   **Data Links - Filters Panel.**	When setting a filter using linked columns the Total Record count showed the overall total for the entire dataset and not the filtered total of records. 

-   **Data Links - Filters.** 	Filter record counter was not showing total filtered records, but total records in the dataset. 

-   **Workflows - New Data Trigger.** New Data trigger was not working with ES Live Connection 

-   **Web Forms - Branching.** Branch questions were not shown for "Other" answers in Multiple Choice field. 

-   **Tokens - Alias.** Alias set by users was not showing in the tokens suggestion box. 

-   **Quiz Analytics - Exports.** The new panels for score, results and correct/incorrect answers were not included in the export. 

-   **Web Form Analytics - Archived Fields.** Archived fields were showing in tabular view.

-   **Crosstab - Totals.** Columns were showing only 25 rows of "Grand Totals" and the rest did not appear. 

-   **Tabular View Exporting.** When exporting tabular view to a CSV the branching columns appear next to their main column. We removed the heading/text columns from the export and tabular view. We are exporting columns in the same order that is set in tabular view. If there are filters set in tabular view, only the filtered data will be exported.  

-   **Data Router - Handling metacharacters.** There was an issue with handling metacharacters like the line feed "\\n". Now we are able to handle them and store them in Elasticsearch. 

-   **Data Router - Bad fields replacement on Merge transformation.** There was an error trying to execute a Merge Rule when the "on" statement didn't have a field from the arrays that were being merged. 

-   **Data Router - metadataDateFormat is not available in all Data Rules.** The global variable ""metadataDateFormat"" was not available for all Data Rules. It was only working in the Custom Javascript Function Rule. 

-   **Data Router - idColumn: if specified in child and no related columns are sent, the post fails.** There was an issue if a child metadata was created to store data from flat data rules, and more than one column were specified as idColumns. If the data generated by the parent metadata did not contain the columns related to the child's idColumns, an error was raised when posting the data.
