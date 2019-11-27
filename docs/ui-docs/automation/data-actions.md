---
id: data-actions
title: Actions - Data
sidebar_label: Actions - Data
---

<div style="text-align: justify">

In this article, we’ll review all of the Flow actions available under **Data Actions.** In general, “Record” functions are for web form and uploaded CSV  datasets, while “Data” functions work with connected datasources such as Elasticsearch, SQL and Oracle databases.

![1_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/1_data-actions.png#thumbnail-40)


## Search Record
**Search Record** allows for the lookup of data based on the criteria you select and then performs actions based on the number of records found or different actions if no records are found. 

To begin, select the type and name of the dataset to search, then the field(s) and value(s) to search for.

![2_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/2_data-actions.png#thumbnail)

Underneath the search box, you’ll see three sections where you can place actions depending on the number of results found. You can specify different sets of actions for each of these three conditions. 

**NOTE**: The Search Record action will loop through all records found individually. For example, if five records are found, the actions selected will be performed five times, once for each record.

## Updating/Deleting Records
Once you have searched and found one or more records in your dataset, you may use the  **Update Record** and **Delete Record** actions to take appropriate actions. Please note that these actions can only be used as part of a Search action where records have been found. 

![3_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/3_data-actions.png#thumbnail)

The delete record action deletes a previously located record(s).

![4_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/4_data-actions.png#thumbnail)


## Insert Record
The last of the record functions is **Insert Record**, which allows your to add a new record to an existing dataset.  Just select the type and name of the dataset, then select the values for each field or column. 

![5_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/5_data-actions.png#thumbnail)

## Submit Data
Submitting data sends data to a third party system via a URL, similar to a form POST in HTML. Simply provide the URL you’d like to post your data to, the format you’d like to use, followed by the parameters, or field/value pairs you’d like to send. 

![6_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/6_data-actions.png#thumbnail)

## Post Data
Posting Data will send data to a connected data source.  Select the connection, database and table to update, followed by the data itself. 

![7_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/7_data-actions.png#thumbnail)


## Reload Data
The **Reload Data** action reloads the data from an existing data connection. To use it, just provide the name of connection you wish to reload. Note that it may take a few minutes for the reload to complete depending on the size of your dataset and the speed of the data connection to it. 

![8_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/8_data-actions.png#thumbnail)

## Get Data 
The **Get Data** action is similar to **Search Records** for web forms and CSVs. It will search a connected datasource and return results based on the field/value criteria you provide. You may then provide different action sets based on whether one, multiple or no records are found. 

To begin, select the connection, database and table you’d like to search, then provide the field/value pairs to narrow your criteria. 

![9_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/9_data-actions.png#thumbnail)


## Update Token
The Update Token actions updates the value of a stored token.  You can update one, or multiple, tokens by selecting their name and providing a value. To create a new token, click the **Add/Manage Tokens** link. 

![10_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/10_data-actions.png#thumbnail)





