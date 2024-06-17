---
id: data-joins
title: Data Joins
sidebar_label: Data Joins
tags: [Data Analyst]
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

The Join Data feature enables you to create a new dataset by joining multiple data sources from multiple connection types. The existing datasets must have at least one column in common in order to be joined. 

## Join Types
The following join types are supported:
* **Left Join** - Uses rows of data from the left table and the matching rows from the right table.
* **Full Join** - Uses all records in all joined tables. 
* **Inner Join** - Uses only the rows of data that are common in the joined data. Rows that have no commonality between datasets are excluded. 
* **Right Join** - Same as the left join, it uses rows of data from the right table and the matching rows from the left table. 

## To Create a Joined Dataset

1. On the Design page, click the three-dot menu on the data source pill, and select **Join to Another Data Source**. For more information on using the Design page, see [Overview of the Design Page](../overview-of-design.md).

![data-joins](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Joins/data-joins-nv3.png#thumbnail-60) 

2. On the Select the Data Source dialog, select the data source that you wish to join. Click the **Connection**, **My Data**, or **Shared Data** tabs to display existing data sources. 

3. Click **Next**. The Join Data dialog displays.  

![joins](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Joins/Join2.png#thumbnail-80) 

4. Under **Join Type**, select the join type that you would like to use.

5. Click the dropdown box for each dataset and select the common columns. You can select more than one column for each link. 

6. Click **Save**. The Join Output pill displays on the Design page. 

![3_joins](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Joins/3_joins.png#thumbnail)

7. Click **Join Output** to display all the combined columns from the joined datasets. This is the view of the output columns that will be loaded to the dataset. Click on any data source pill to filter the view to show only columns from the selected data source. 

8. Repeat the join process as needed to achieve the desired structure for your dataset. 

9. Click **Apply Changes** to make the joined datasets available to create charts, pages, and reports.

## To Filter the List of Columns
A joined dataset may include a large number of columns that can be difficult to navigate. To filter the list of columns, click a data source pill. The list updates to display only the columns in that data source. 

## To Delete a Joined Dataset
To delete a joined dataset, click its three-dot menu and select **Delete**. 

</div>