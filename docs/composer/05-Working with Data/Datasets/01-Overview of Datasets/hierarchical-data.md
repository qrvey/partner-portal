---
id: hierarchical-data
title: Hierarchical Data
sidebar_label: Hierarchical Data
tags: [Data Analyst]
sidebar_position: 4
displayed_sidebar: getting-started
---


Qrvey has the ability to work with and analyze hierarchical data, which is often uploaded via [JSON File](../../connections.md#file-upload-connections).Hierarchical data allows you to organize information in a nested structure, making it easy to represent parent-child relationships. In Qrvey, hierarchical data can be used to create detailed, multi-level data visualizations and analyses.



## Create a Hierarchical Dataset

![hierarchical-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/hierarchical-data/hiercon1.png#thumbnail)

To create a hierarchical dataset, follow these steps.

1. Navigate to the **Data > Dataset**.
2. Click **New Dataset**. A modal will appear.
2. Find the desired [JSON File](../../connections.md#file-upload-connections) connection from the list.
3. Click **Create**.
    This will take you to the **Dataset Design** step.
    
    
## View Hierarchical Dataset

1. Navigate to the desired hierarchical dataset.  
2. Click to open it.  
    If your JSON file contains numeric or text `arrays`, `objects`, or `object arrays`, the UI will reflect this. 
    
For example, assuming the following JSON structure:
```json
[
    {
        "Name":"John Smith",
        "DOB":"12/23/1975",
        "children":2,
        "childrenAges":[10,12],                         // numeric array
        "carModels":["Ford","Chevy"],                   // string array
        "address": { "city":"Chicago", "state":"IL",},  // object
        "countriesVisited":[                            // object array
        { "id":10, "country":"Germany" }, 
        { "id":15, "country":"Spain" },
        { "id":18, "country":"Iraq" }
        ]
    }
]
```
The **Data > Dataset > Columns** page will register these new data structures.
- There are new column types like *Numeric Array, Text Array, Object,* and *Object Array*.
- The `Address` column is an object that has its own nested columns.
- `CountriesVisited` is an object array with its own nested columns. Furthermore, the column and its children are not selected and are in fact disabled.

![hierarchical-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/hierarchical-data/hiercon2.png#thumbnail)

You may also navigate into the **Data > Dataset > View Source Data** tab to see how the raw data is registered in Qrvey.

![hierarchical-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/hierarchical-data/hiercon3.png#thumbnail)

The parent records in the main data source have a one-to-many relationship with `countriesVisited` object array, which can act like a left join between two relational tables and can be “inflated” to produce a flat dataset. 

## Customize Hierarchical Datasets

You can [Transformations](../02-Design/03-Transformations/transformations.md) as well as [design and modify](./overview-of-datasets.md#manage-a-dataset) your dataset before loading it, just like with other datasets, as well as flatten object arrays.

In order to flatten the object array, follow these steps.

2. Click the **Transformations** button on the top right corner of the columns list.
3. Drag the **Array Flatten** transformation to the workspace.
4. Select the **Inflate** option from the dropdown menu.

![hierarchical-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/hierarchical-data/hiercon4.png#thumbnail)

This transformation flattens the array and the effect can be seen in the form of an enabled object on the Dataset Design tab, as soon as the Transformation dialog is closed.

![hierarchical-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/hierarchical-data/hiercon5.png#thumbnail)


