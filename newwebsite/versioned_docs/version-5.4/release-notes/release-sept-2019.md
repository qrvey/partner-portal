---
id: release-sep-2019
title: Qrvey Version 3.2
sidebar_label: September 2019
---
<div style={{textAlign: "justify"}}/>
Release date: 2019-09-12

## New Features and Enhancements

### Data Preparation

-   **Applications - Activity Log:** An activity log was added to the Applications section so users can monitor the installation process and see the events and errors when an application is shared.

-   **Applications - Append Updates Label:** We added an Updated Label for applications that have received updates as append when sharing from Admin App. 

-   **Applications - Log File Download:** The Activity Logs widget now has a download button. This allows the activity logs to be downloaded as a TXT file containing two tab separated columns - CreateDate and Message. The CreateDate column is the the date/time (UTC) the event was logged and Message has the format {"{"}Name{"}"} {"{"}EVENT{"}"} {"{"}MESSAGE{"}"} {"{"}Status{"}"}.

-   **Web Forms - File Upload:** This is a new field type that allows the upload of different file types like CSV, DOC, PDF, JPG for End Users, and the option to download the files on the creator side.

-   **Tabular View - Add Data via Web Forms:** An Add action is available in the tabular view for web form datasets. This action will call up a modal that shows the web form so the user can add data to the dataset via the web form, which could be a Form or Survey.

-   **Tabular View - Deleting Records:** A Delete action is available in the tabular view, for web form - Form and Survey. This action allows the Maker to delete rows of data.

-   **Postdata - Optimize Elasticsearch Bulk Insert**: We optimized the way we were inserting data into Elasticsearch. This will benefit from parallelism. We also optimized the way we are processing transformations and Data Rules including a local caching mechanism for ES Query Lookups.

-   **Profiling - Performance Logs**: By setting a parameter, we can enable a performance log for each post data execution call. This log file will include total execution times and Data Rules and transformation times among others.

-   **Metadata - Change Error Message When a Metadata Does Not Exist**: When using the metadata endpoint, if the metadata doesn’t exist the following error was thrown: Please try again, something has happened. That message was changed to “The metadata does not exist”. We also fixed some error display issues.

-   **Array Lookup - Optimize Searching Mechanism**: We optimized the searching mechanism of an Array Lookup when there’s no sorting. In this case we are returning the first match.

-   **Postdata - Retryable Errors**: We added more retryable Elasticsearch errors to the list, mostly due to high concurrency: socket disconnected, null pointer exception, authorization exceptions, among others

-   **Documentation - API Enhancements**: The endpoint documentation includes JSON schema details.

-   **Documentation - API Enhancements:** The endpoint documentation includes JSON schema details.

-   **Performance Improvement - Automation:** The Automation Widget load time has been reduced.

-   **Documentation - Workflows Widget:** New examples have been created to help understand the Workflows Widget and how to embed it.

-   **Documentation - Page Builder Widget:** New examples have been created to help understand the Page Builder Widget and how to embed it.

### Data Analysis & Automation

-   **Table Chart - Grouping (Multi-level):** Table Chart that allows multi-level and single level grouping.

-   **Data Links for Table Charts:** Data Links are enabled for single-level grouped tables.

-   **Calculated Columns in Pie, Heatmap and Word Cloud Charts:** Calculated columns created through the Formula Builder are enabled to be used in Pie, Heatmap and Word Cloud creation.

-   **Median Aggregate:** The Median calculation was added as an aggregate option.

-   **Page Builder Widget - White Labelling:** The Page Builder widget can be modified to change main colors like the Qrvey orange.

-   **Exports - Individual Components:** Metrics and Chart panels can now be exported to CSV, PDF and JPG individually from Page/Report Builders and End User Interface.

-   **Exports - Full Page CSV:** Ability for creators and end users to export data used in pages as CSV. The CSV file contains all columns belonging to the dataset used in the different charts, metrics and panels from the Page or Report.

-   **Page Actions - Custom Links:** This is a new page action called Go To URL that allows creators to set up links to external applications that allows sending parameters through Qrvey tokens in the URL.

-   **Page Builder Link Button & Page URL as Widget Parameter:** Creators can hide or show Application Link button from Page builder topbar using widget parameters, and can hide or show Page URL field from Page info side panel using widget parameters.

-   **User Management Widget - Show/Hide Parameters:** The User Management Widget now uses a parameter to hide or show Users Tab, Delete Groups & Add New Group buttons, and Groups Menu icon in Groups tab, as well as User section inside a Group, when the widget is embedded.

-   **Performance Improvement - Automation**: The Automation Widget load time has been reduced.

-   **Documentation - Workflows Widget**: New examples have been created to help understand the Workflows Widget and how to embed it.

-   **Documentation - Page Builder Widget**: New examples have been created to help understand the Page Builder Widget and how to embed it.

### Admin Center

-   **Sharing Applications - Releases Activity Log:** An activity log was added to the Releases section so users can monitor the sharing process and see the events and errors.
-   **Sharing Workflows:** The option to add Workflows to the content package to be shared in applications when creating a new application or appending is now available. 
-   **Sharing Applications - Share/Append Workflows:** An Admin can share or append Workflows to multiple users on different servers. This allows the Makers who own the app to use this Workflow as part of the existing app for their own requirements.
-   **Sharing - Activity Log:** The events “Start Restoring”, “Restore Successfully”, “Restore Failed” are recorded in the Activity Log so Makers can review these events.
-   **Sharing Applications - Share/Append - Summary Panels in Pages:** An Admin can share or append a Page with Summary Panels to multiple users on different servers. The Makers who own the app can use it as part of their existing app for their own requirements.

## General Tweaks and Bug Fixes

-   **Admin - Platforms Emails:** The RTF Editor used for the Emails used for the activation of new User Accounts creation and the Password restoring has been refactored.
-   **Admin - Sharing - Deploy Connectors Between Servers:** An Admin can send a new connector to the recipient as a “shared” connector to use this one on the required Datasets. Connectors handle substitution in the connection string if necessary.
-   **Admin - Sharing - Release Dashboard:** The release dashboard can now be paginated.
-   **Databases Connectors - Hide Database connection from Qrvey Model:** Makers can update the Datasets Live Connection to the new “connectors” schema so that the Database Connection info would be hidden and the platform security is improved.
-   **Metrics Dashboard (Removed)**: This section was removed from the sidebar in the effort to unify Charts and Metrics. Metrics can now be created from Page Builder and Report Builder directly from the Chart Builder Modal.
-   **Unified Metrics in Chart Builder:** From Page and Report Builder users can create metrics the same way as charts are created from the Chart Builder Modal. Metrics will be listed the same way as charts when a dataset is selected in the right navigation panel of the builders.
-   **Metrics - Metrics View in Dataset Analytics:** Makers can now create Metrics outside of the Report and Page Builders. Metrics can now be accessed from the datasets, web forms and custom view charts builder.
-   **Chart Builder - Zero Values:**  The user can now show '0' Values in Charts, where previously these were omitted in some chart types.
-   **Chart Builder - Sorting using Data Links:** Sorting by value ascending/descending directions can be set in charts. So now users can change the way the visualization data is sorted and visually shown in the chart and have it sorted by values.
-   **Page Actions - Allow Editing for Pages in Published - Edited state:** A Creator can modify a Page action from a chart into a Published - Edited page when the application is in Published state. Hence the Creator can update page actions while the previous version of the action is still active for end users.
-   **Data Router - Custom JS Functions - Saving an object as string (JSON.stringify) is not working**.	Trying to store an object as a string, was not working, the object was saved as is and not as a string. For example, when using JSON.stringify.
-   **Data Router fails to replace booleans from source data in conditions.** If a field from the source data was a boolean value, DR failed to replace it in a condition. This was fixed.
-   **Data Router - Error replacing `nullableColumns` inside Data Rules when came from it self.** There was an error when referencing a nullable column inside an Array Lookup using the ID of that Array Lookup.
-   **Data Router - Postdata - escape single quotes are escaping two times.** We fixed an error when escaping special and meta characters.
-   **Data Router - Switch/Case Data Rule fails when null is set as default value.**	We fixed an error when the value for the default is null. In those scenarios the Data Rule failed.
-   **Data Router - Delete Metadata fails to Remove ES index sporadically.** We changed a configuration in Elasticsearch so indexes can't be created automatically when posting data. This happened when interrupting a posting process or when working in the same metadata/index.
-   **Data Router - DR Error Message not detailed when comes from worker.** We fixed a visualization error for the worker. Error messages weren't being displayed correctly.
-   **Data Router - Reusable transformation does not pass input to fields directly.** We fixed an error when trying to pass input to fields. This was not working.
-   **Data Router - Unhandled error on missing JS custom function on flat data condition.** There was an error as we weren't handling missing JS Custom functions on a condition on flat data. Postdata was timing out.
-   **Tabular view - Edit records with a Password question:** Previously a Password question field was shown as empty, rather than as a masked out password. This has been corrected and a Password question field is now shown as a masked value.
