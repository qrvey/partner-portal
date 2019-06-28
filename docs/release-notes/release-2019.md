---
id: release-2019
title: Release Notes 2019
sidebar_label: Release Notes 2019
---

## Qrvey 3.13.0   2019-07-12


### Admin Portal

*   **Connectors.** Admins can create Elasticsearch Indexes from external connections to MS SQL, MySQL, Aurora, Postgres and Oracle. \

*   **Security on Elasticsearch Indexes.** Admin users will be able to set permissions/security on the Elasticsearch indexes that are created through the Admin Portal. They can define which creators have access to specific indexes through the API.  \

*   **Feature Customization.** Admins can disable the sections that Creators will not be using and disable specific features for Datasets, Web forms and Workflows.  \

*   **Deployments - Appending Content.** After an initial application deployments admin can select newly created or updated content to append to update already deployed applications.  \

*   **Deployments - Creating Replacements.** When setting up servers Admins can set replacements for MS SQL and Elasticsearch connections used in the server. If a dataset is created from a MS SQL connection in one server a replacement needs to be set for the MS SQL connection on the receiving server.



### Application Building

*   **On Click Actions - Filter By.** Creators can define quick filters on a chart or a full page. \
 
*   **Alerts.** Creators can monitor data added to a page or dashboard and send/receive alerts.  \

*   **Creating Charts - Widget Configuration.** Chart creation action was added as a parameter to the Page Builder widget so it can be turned on/off. \

*   **User Management Widget.** Authentication, Users and Group permissions are now available as an embeddable widget, used inside Page Builder. \

*   **Data Permissions/Filters.** In User Management, Creators are able to set filters on datasets being used in pages. \

*   **Page/Tab/Chart Permissions.** Creators can assign group-based show/hide permissions on any page, tab or chart created in page builder.   \

*   **Authentication.** Creator can have private pages where authentication is required to gain access. \

*   **Page Filtering.** Our filtering system in Page Builder now supports page-level filtering in addition to global, tab and individual panel filtering. 



### Analytics

*   **Tabular View Widget.** Tabular view widget with new multi-level grouping and sorting options in available in datasets. \

*   **Table Chart.** New chart visualization for a simple table chart. \

*   **Data Links - Crosstab.** Ability to use linked columns for rows, values or columns when building a Crosstab chart.  \

*   **Small Multiples.** New chart visualization used for easy comparison that shows a series of similar charts.  \

*   **Formulas Widget.** New widget to create calculated fields available in datasets. \



### Automation 

*   **Complex Conditions Groups:** Option to add multiple conditions and groups in If Conditions to create more advanced conditional logic.  \

*   **Tokens Manager.** Variables which act as containers for data. Tokens can be categorized into Global or Local and can be used and managed across different contexts in the application. \



### Data Router 

*   **Metadata - Standardize "on" and "condition" statements on merge rule.** ""on"" and ""condition"" were expressed differently. One example is that ""on"" uses ""<>"" and ""condition"" ""!="" to express difference. We introduced a grammar for Javascript like syntax so ""on"" statement could behave the same as ""condition"". \

*   **Metadata - Allow custom Javascript functions on Merge rule.** We made custom Javascript functions available when doing a Merge. In this case, the parameters for the function can be a column from the merged arrays or an outside value e.g the result of a previous rule/transformation. \

*   **Postdata - Allow calling functions with other functions as parameters**. When referencing a custom Javascript function inside a metadata we are now able to pass other custom Javascript functions as parameters: function.nvl({{column.value}}, someOtherFunction({{parameter.value}})) \

*   **Error handling - Improve error visualization from duplicate IDs.** When duplicating Data Rules IDs, a new error message will show which ID was duplicated and the corresponding Data Rule. \

*   **Reusable Groups - Add fields from input parameters.** We added the ability to use the input parameters as destination fields in reusable groups. These references are going to be defined the same way we use them on the main metadata with the JSON data (without the dollar sign $) \

*   **Error handling - Visualize Postadata errors for Data Rules.** When an error is thrown on Postdata we should indicate in the JSON response which Data Rule failed. \

*   **Test Utility - Delete previous test leftovers at the start of each test.** We are now deleting the leftovers at the start of each run. \

*   **Metadata - New flattener data rule.** This is a new Data Rule that will flatten an array. The resulting array can be used in subsequent Data Rules. \

*   **Metadata - Allow the execution of Data Rules (Flat Data Transforms) without a flattener**. Data rules can now be applied even if we don't need to flatten an array. Especifically, the ""flattenOnField"" and ""idFlat"" attributes won't be mandatory but we will still be able to execute all data rules. \



### General Tweaks and Bug Fixes 

*   **Bar Chart - Responsive State.** Fixed bar chart with horizontal bars responsive state.  \

*   **Datasets - Database Connection - Oracle Tables.** When setting up the connection for Oracle the Tables/View is not showing in the connection modal.  \

*   **Datasets - MS SQL Preparing Data.** Preparing data stage had performance issues when there were more than 1M records. \

*   **Survey - Pausing Surveys.** When pausing a survey that has existing answers the button remained in "Pausing..." state but the web form wasn’t  paused. \

*   **Custom View - Pie Chart - Labels.** When the values of a wedge are very low the labels from different wedges that are too close together and very thing might overlap.  \

*   **Data Links - Filters Panel.**	When setting a filter using linked columns the Total Record count shows the overall total for the entire dataset and not the filtered total of records. \

*   **Data Links - Filters.** 	Filter record counter is not showing total filtered records, but total records in the dataset. \

*   **Workflows - New Data Trigger.** New Data trigger is not working with ES Live Connection \

*   **Web Forms - Branching.** Branch questions are not shown for "Other" answers in Multiple Choice field. \

*   **Tokens - Alias.** Alias set by users is not showing in the tokens suggestion box. \

*   **Quiz Analytics - Exports.** The new panels for score, results and correct/incorrect answers are not included in the export. \

*   **Web Form Analytics - Archived Fields.** Archived fields are showing in tabular view  \

*   **Crosstab - Totals.** Columns are showing only 25 rows of "Grand Totals" the rest does not show. \

*   **Tabular View Exporting.** When exporting tabular view to a CSV we are now exporting branching columns next to their main column. We removed the heading/text columns from the export and tabular view. We are exporting columns in the same order that is set in tabular view. If there are filters set in tabular view, only the filtered data will be exported.  \

*   **Data Router - Handling metacharacters.** Issue with handling metacharacters like the line feed "\n". Now we are able to handle them and store them in Elasticsearch. \

*   **Data Router - Bad fields replacement on Merge transformation.** There was an error trying to execute a Merge Rule when the ""on"" statement didn't have a field from the arrays that were being merged. \

*   **Data Router - metadataDateFormat is not available in all Data Rules.** The global variable ""metadataDateFormat"" was not available for all Data Rules. It was only working in the Custom Javascript Function Rule. \

*   **Data Router - idColumn: if specified in child and no related columns are sent, the post fails.** There was an issue if a child metadata was created to store data from flat data rules, and more than one column were specified as idColumns. If the data generated by the parent metadata did not contain the columns related to the child's idColumns, an error was raised when posting the data.



### Known Issues 

*   **Web Forms - Deleting Answers.** When executing a query to delete all answers from a web form, the application takes some time to completely delete all of the answers. The response time depends on the size of the web form dataset and the amount of records. \

*   **Lookup Field - SQL Connection.** When the SQL connection is deleted and it's being used in a lookup there is no error shown but the lookup field stops working. \

*   **Custom View - Chart Editor - Value Settings.** When the user changes the label direction for chart value, the value labels overlap the axis label. \

*   **Datasets - Elasticsearch Filtering**. Filter by Value option is case sensitive when the user performs a search.  \

*   **Web Forms Analytics - Branching.** Branch fields for Lookup are not showing in Tabular View \

*   **Answering Forms.** Issue with Grammarly plugin when answering text fields.  \

*   **Builders - Page Builder.** Elements added to a page are removed if the user navigates away from the page when the elements are loading. \

*   **Bar Chart - Multi-series.** Bars for multiseries option with negative values are misplaced. \

*   **Bucketed Columns.** Charts that use bucketed columns with the multi-series option show “No data found” when a bucket is used as a category and there is data available to show.  \

*   **Webforms - Survey - Save Answer.** Answers for Phone Number fields are not saved.  \

*   **Data Links - Heatmap.** Sorting values with max data points doesn't show the correct data. \

*   **Data links - Combo Chart.** Is not working correctly and doesn’t provide the expected results.  \

*   **Data Link - Multiseries.** Error is shown when filtering a chart using the multi-series option and when the filter is set on a linked column.   \

*   **Sharing Applications - Append Data.** All the applications sent from different releases are updated when updates are made. \

*   **Sharing Applications - Append Data.** If a version of the application that was shared is deleted and this application is shared again with updated the application cannot be installed. \