## Qrvey 3.13.0   2019-07-12


### Admin Portal \

*   **Connectors.** Admins can create Elasticsearch Indexes from external connections to MS SQL, MySQL, Aurora, Postgres and Oracle. ** \

*   **Security on Elasticsearch Indexes.** Admin users will be able to set permissions/security on the Elasticsearch indexes that are created through the Admin Portal. They can define which creators have access to specific indexes through the API.  \

*   **Feature Customization.** Admins can disable the sections that Creators will not be using and disable specific features for Datasets, Web forms and Workflows.  \

*   **Deployments - Appending Content.** After an initial application deployments admin can select newly created or updated content to append to update already deployed applications.  \

*   **Deployments - Creating Replacements.** When setting up servers Admins can set replacements for MS SQL and Elasticsearch connections used in the server. If a dataset is created from a MS SQL connection in one server a replacement needs to be set for the MS SQL connection on the receiving server. \



### Application Building \

*   **On Click Actions - Filter By.** Creators can define quick filters on a chart or a full page. \
 
*   **Alerts.** Creators can monitor data added to a page or dashboard and send/receive alerts.  \

*   **Creating Charts - Widget Configuration** Chart creation action was added as a parameter to the Page Builder widget so it can be turned on/off. \

*   **User Management Widget.** Authentication, Users and Group permissions are now available as an embeddable widget, used inside Page Builder.  \

*   **Data Permissions/Filters.** In User Management, Creators are able to set filters on datasets being used in pages. \

*   **Page/Tab/Chart Permissions.** Creators can assign group-based show/hide permissions on any page, tab or chart created in page builder.   \

*   **Authentication.** Creator can have private pages where authentication is required to gain access. \

*   **Page Filtering.** Our filtering system in Page Builder now supports page-level filtering in addition to global, tab and individual panel filtering. \



### Analytics \

*   **Tabular View Widget.** Tabular view widget with new multi-level grouping and sorting options in available in datasets. \

*   **Table Chart.** New chart visualization for a simple table chart. \

*   **Data Links - Crosstab.** Ability to use linked columns for rows, values or columns when building a Crosstab chart.  \

*   **Small Multiples.** New chart visualization used for easy comparison that shows a series of similar charts.  \

*   **Formulas Widget.** New widget to create calculated fields available in datasets. \



### Automation \

*   **Complex Conditions Groups:** Option to add multiple conditions and groups in If Conditions to create more advanced conditional logic.  \

*   **Tokens Manager.** Variables which act as containers for data. Tokens can be categorized into Global or Local and can be used and managed across different contexts in the application. \



###  General Tweaks and Bug Fixes \

*   **Datasets - Database Connection -  Oracle Tables.** When setting up the connection for Oracle the Tables/View is not showing in the connection modal.  \

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



### Known Issues \

*   **Web Forms - Deleting Answers.** When executing a query to delete all answers from a web form, the application takes some time to completely delete all of the answers. The response time depends on the size of the web form dataset and the amount of records. \

*   **Lookup Field - SQL Connection.** When the SQL connection is deleted and it's being used in a lookup there is no error shown but the lookup field stops working. \

*   **Custom View - Chart Editor - Value Settings.** When the user changes the label direction for chart value, the value labels overlap the axis label. \

*   **Datasets - Elasticsearch Filtering**. Filter by Value option is case sensitive when the user performs a search  \

*   **Web Forms Analytics - Branching.** Branch fields for Lookup are not showing in Tabular View \

*   **Answering Forms.** Issue with Grammarly plugin when answering text fields. \
