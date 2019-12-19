## Qrvey 4.0 - 2019-12-18


### **New Features**


### Admin Portal



*   **ADMIN- 1677 Machine Learning Model Definition:** We added a new feature where a data scientist user will be able to create models to later be used on the Qrvey platform for “Predictions and Categorization”, based on the machine learning technology “AWS Sage Maker”.

### Automation
*   **AT-5233 - ML - Action - Execute Model:** In Automated Flows, we added an action that allows the creator to use third-party models, based on machine learning technologies, previously defined on the new “Model Definition” feature. The user can use these models to trigger other actions, such as “send email or “search record”.

### Application Building

*   **AT-5158 - Page Components Order:** We added this new feature to the Page and Report Builders to allow users to arrange elements. Now, each element can be placed on top of another and arranged by sending to the front or back.


### Analytics



*   **AN-8555 - Add Filtering in Chart Creation:** We added the ability to create filters for a chart while it’s being created, in order to retain these filters every time the chart is reused in page or report builder.


### **Other Enhancements**

*   **QV-8974 Dataset Widget:** We created the Dataset Widget that improves the dashboard visualization, giving more information about each Dataset and using less space. Performance and user experience have also been improved, with more precise status notifications and an easy way to reuse database connections in order to create several datasets.
*   **QV-8404 - Sending Applications in the Qrvey Composer:** We improved this feature to allow creators to share an application with all its Reports, Pages, Dataset, Datalinks, and Flows by selecting the “Send” option from the application menu.
*   **AT-4993 - Download CSV Files:** We improved this feature to export data used in pages as CSV. Creators and End Users will be notified about the download status. When a file is too large or has more than 20.000 records may take some time to prepare, that is why it’s important for users to be notified.
*   **AT-4341 - New Builders Usability Enhancements:** The new Page and Report Builders have an improved User Interface in order to give the users a better user experience, based on fewer clicks, drag and drop behaviors and toolbar shortcuts.
*   **AN-7612 - Formulas Enhancements:** We improved Formulas by implementing Formula Filtering and adding the following features to work with formula columns: Metrics, See Data, Crosstab Totals and Filter By.


### **General Tweaks and Bug Fixes**



*   **QV-9351 Column Data Types Changes:** On the Admin Center, after using the SQL View from a database connection, all column data types where text-label by default. We fixed this changing the column data types based on the content.
*   **QV-8963- Spreadsheets - Data Load:** The number of records in a spreadsheet did not load completely, this was fixed.
*   **AN-8446 Change of Dates Due to Time Zone** When a user had a different time zone the date selected to create buckets or filters was changed by the system to a previous date. This was fixed.
*   **AN-8364 - Filters/Buckets Error with Dates:** When a user has a different time zone and is trying to select a date to create a bucket or a filter, the application changes the date to a previous one. 
*   **AN-7810 - Table Chart - Filtering Bucketed Columns in Groups:**  When using bucketed columns as a group in the table chart the filters set on this column were not not being applied. 
*   **AN-8249 - Date Drill Downs - Changing Date Columns:** If the user has applied a drill down using dates and applies the drill using a different date column, the drill must be restored to use the second date column, showing the result from the first level - year-. 
*   **AN-7914 - Crosstab - Sorting by Columns:** When applying sorting option on a column in a crosstab chart with multiple levels the sorting is only reflected on the second column and not the rest.  
*   **DR-1213- Manifest: Managing partial files do not update dynamo file status:** Managing partial files do not update dynamo file status: When ES does a partial insertion from a file, it rejects the rest, and a partial file is created. The manifest process does not handle those partial files, in the DynamoDB table (fileproccesedstatus) if a file is partially generated, it is marked as failed, with status code 206. Once the related partial file is processed, the status of the parent file is not updated, causing the rupture of the manifest upload process. This bug is no longer happening as we removed the use of partial files.


### **Known Issues**

*   **ADMIN-1928 - Content Deployment - Share Spreadsheets:** We are not currently supporting the sharing of CSVs data in application sharing. 
*   **AN-8296 - Crosstab Grouped Total:** When there are more than 25 max data points shown the grouped totals are calculated only for the top 25 max data points. 
*   **AN-6668 - Metrics Time Period - Quarter:** Count and Distinct Count are not working correctly for some field types used in Web Forms such as Signature, Word Expression Multiselection, Address.
*   **AN-8189 - Crosstab - Null Values Displayed:** When crosstab charts are created using multiple levels of columns and values and these columns are expanded cells are shown empty instead of displaying the values that exist in the data.
*   **AT-5492 - Builders - Safari Performance:** When the user adds 10 or more charts on a page, the performance goes down progressively in the Safari Browser.
*   **AN-8753 - Values Missing in Charts with Datalinks:** The application is not showing all the records matches, the application shows just brazil when the user creates a chart, but if the user applies some filters by countries in common for both datasets, then these ones appear in the chart.
*   **AN-8745 - Date/Formula - Differents records for the same category:** The user creates a formula DateAdd adding 2 days to the field CreatedOn that have a format dd/mm/yyyy, then the result for this formula is with another format as 2017-06-04T19:47:42.000Z The application groups the dates having in count the hour/minutes and seconds but when the user applies See data and Filter by, the records have different seconds for the same category.
*   **AN-8689 - Crosstab - Totals in groups per week are incorrect:** The total for the last group (week) is wrong when the user creates a crosstab and the user sets, as the first level of a row, a date field, then, the user makes a Date grouping with Quarter, and as a second level of rows the user sets a formula.
*   **AN-8499 - Multiseries - Data Link - Data is not correct:** When the series of multi-series comes from a source dataset, the data displayed does not correspond to the exact match between the linked columns.
*   **AT-5218 - Workflows - If condition - Drop area gets stuck:** Drop area gets stuck when the action is moved from “if” to “else”, it is happening when the user moves the card several times.
*   **AN-6668 - Metric Builder - Data doesn't count correctly on data types:** Count and Distinct Count are not working correctly for some field types used in Web Forms such as Signature, Word Expression Multiselection, Address.
*   **DR-1168 - Transformations - Columns edition in the transformation:** When a column is edited or deleted in the “columns section”, it does not change in the transformation previously created.