---
id: joins
title: Data Joins
sidebar_label: Data Joins
---
<div style={{textAlign: "justify"}}>

Datasets can also be created by joining multiple data sources. Different sources from multiple connection types and existing datasets that have one column in common can be joined together creating a new physical dataset. 

## Join Types

The following join types are supported in the composer:

**Left Join**
Uses rows of data from the left table and the matching rows from the right table. 

**Full Join**
Uses all records in all joined tables. 

**Inner Join**
Uses only the rows of data that are common in the joined data. Rows that have no commonality between datasets are excluded. 

**Right Join**
Same as the left join, it uses rows of data from the right table and the matching rows from the left table. 

## Creating Joined Datasets

To join multiple sources together, begin by creating a new dataset and selecting a connection from the list of data sources. Then access the dot-menu from the data source pill and select the **Add Data Source** option. 

![1_joins](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Joins/1_joins.png#thumbnail)

In the _Join Data_ screen, select the join type you would like to use and then select the common columns from the 2 tables you are joining together. You are able to select more than 1 column for each link. Once you are done, click on **Save** to return to the main screen where you will see another pill with the data source that has just been joined. 

![2_joins](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Joins/2_joins.png#thumbnail-80)

In addition to the pills that belong to each of the data sources, there will be  another pill created for the _Join Output_ on the main screen.  When clicking on this pill, you will see all the combined columns from the joined datasets. This is the view of the output columns that will be loaded to the dataset.

![3_joins](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Joins/3_joins.png#thumbnail)

Once the loading process finished, the data from both sources will be available to create charts, pages and reports.

Creators can come back to edit any of the joined data sources and continue to add more if needed. When a new data source is added, the data must be reloaded. 
</div>