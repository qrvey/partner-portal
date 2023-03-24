---
id: joins
title: Data Joins
sidebar_label: Data Joins
---

<div style={{textAlign: "justify"}}>

Datasets can be created by joining multiple data sources. Different sources from multiple connection types and existing datasets that have at least one column in common can be joined together creating a new physical dataset. 

![data-joins](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Joins/data-joins-nv1.png#thumbnail) 


1. <b>Name and dataset status</b> - Here you can change the name of the dataset by clicking on it and typing in a new one. You can also favorite the dataset by clicking on the star next to its name, and get information on the last time the dataset was loaded, how many columns and records it has.

2. <b>Load Dataset</b> button - before a dataset can be used after being created or modified, it must be loaded. 
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> a. When modifying a dataset that has already been loaded, instead of the <b>Load Dataset</b> button, you will see <b>Discard Changes, Apply Changes</b>, and <b>Reload Dataset</b>.</li></ul>

![data-joins](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Joins/data-joins-nv2.png#thumbnail-40) 

 
3. The three dot menu where you can share data with everyone (after it has been loaded), mark the dataset as favorite, enable or disable label internalization, and unshare the dataset if it had been shared beforehand.

4. The Data source column pill and the three-dot menu where you can edit connection settings, edit data source query, join to another data source, select a different data source, or rename the current data source. 


## Join Types
The following join types are supported:

**Left Join**
Uses rows of data from the left table and the matching rows from the right table. 

**Full Join**
Uses all records in all joined tables. 

**Inner Join**
Uses only the rows of data that are common in the joined data. Rows that have no commonality between datasets are excluded. 

**Right Join**
Same as the left join, it uses rows of data from the right table and the matching rows from the left table. 

If you join data sources that have columns with the same or similar names, these columns will be grouped by data source name. 


## Creating Joined Datasets
To join multiple sources access the dot-menu from the data source pill and select the **Join to Another Data Source** option. 

![data-joins](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Joins/data-joins-nv3.png#thumbnail-60) 

Choose the data source that you wish to join from any of the connections, existing datasets, or shared data.


In the *Join Data*,select the join type you would like to use and then select the common column(s) from the 2 data sources you are joining together. You can select more than one column for each link. Once you are done, click on **Save** to return to the main screen where you will see another pill with the data source that has just been joined. 

![joins](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Joins/Join2.png#thumbnail-80) 

Once a join has been created a new *Join Output* pill will appear on the main screen. When clicking on this pill, you will see all the combined columns from the joined datasets. This is the view of the output columns that will be loaded to the dataset.

![3_joins](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Joins/3_joins.png#thumbnail)

Click on any data source pill to filter the view to show only columns from the selected data source. 

You may repeat this process to join any of the data sources with additional data sources to achieve the desired structure for your dataset. Apply your changes and load (or reload) the dataset to make it available to create charts, dashboards, and reports.


</div>