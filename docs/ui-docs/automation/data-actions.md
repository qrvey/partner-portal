---
id: data-actions
title: Actions - Data
sidebar_label: Actions - Data
---

<div style="text-align: justify">

In this article, we’ll review all of the Flow actions available under **Data Actions.** In general, “Record” functions are for web forms and uploaded CSV  datasets, while “Data” functions work with connected datasources such as Elasticsearch, SQL and Oracle databases.

![1_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/1_data-actions.png#thumbnail-40)


## Search Record
Use the **Search Record** action to look up data based on the criteria you select. Use the branch options to perform actions based on the number of records found. 

First, select the type and name of the dataset to search, then choose the field(s) and value(s) you want to search for.

![2_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/2_data-actions.png#thumbnail)

Underneath the search box, you’ll see three branch options where you can place actions depending on the number of results found. You can specify different sets of actions for each of these three branch options. 

>**Note:** The **Search Record** action will loop through multiple records found individually. For example, if five records are found, the actions under the _Multiple Records Found_ will be performed five times, once for each record.

## Updating/Deleting Records
Once you have searched and found one or more records in your dataset, you can use the  **Update Record** and **Delete Record** actions to take appropriate actions. 

>**Note:** These actions can only be used in Search action branch options corresponding to one or multiple found records. 

![3_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/3_data-actions.png#thumbnail)

The **Delete Record** action deletes a previously located record(s).

![4_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/4_data-actions.png#thumbnail)


## Insert Record
Use the **Insert Record** action to add a new record to an existing dataset.  Just select the type and name of the dataset, and select the values for each field or column. 

![5_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/5_data-actions.png#thumbnail)

## Submit Data
Use the **Submit Data** action to send data to a third party system via a URL, similar to a “form POST” in HTML. Simply provide the URL you’d like to submit your data to, the format you’d like to use, followed by the parameters, or field/value pairs you’d like to send. 

![6_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/6_data-actions.png#thumbnail)

## Post Data
Use the **Post Data** action to send data to a connected data source.  Select the connection, database and table to update, followed by the data itself. 

![7_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/7_data-actions.png#thumbnail)


## Reload Data
Use the **Reload Data** action to reload the data from an existing data connection. To use it, just provide the name of the connection you wish to reload. Note that it may take a few minutes for the reload to complete depending on the size of your dataset and the speed of the data connection. 

![8_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/8_data-actions.png#thumbnail)

## Get Data 
Use the **Get Data** action to search a connected datasource and return results based on the field/value criteria you provide. You may then provide different actions to the branch options, to handle the cases of one, multiple, or no records being found. 

To begin, select the connection, database and table you’d like to search, then provide the field/value pairs to narrow your criteria. 

![9_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/9_data-actions.png#thumbnail)


## Update Token
Use the **Update Token** action to update the value of a stored token.  You can update one, or multiple, tokens by selecting their name and providing a value. To create a new token, click the **Add/Manage Tokens** button. 

![10_data-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_data-actions/10_data-actions.png#thumbnail)





