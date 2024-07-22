---
id: hierarchical-data
title: Working With Hierarchical Data
sidebar_label: Working With Hierarchical Data
tags: [Data Analyst]
sidebar_position: 4
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

Qrvey has the ability to work with, and analyze hierarchical data, most of the time uploaded from JSON files. This article describes the process of loading such data in datasets and the fundamentals of hierarchical analysis.

## Loading Hierarchical Data
It is most common for the hierarchical data to exist in the form of a JSON file. A connection to the JSON file may be created from the **Connections** tab or when creating a new Dataset. For details, please see [File Upload Connection](../../connections.md). 

To create a dataset out of your data begin with clicking on the **New Dataset** button on the *Datasets* tab, selecting the connection to the JSON file from the list of connections and clicking on **Create**.
 
 ![hierarchical-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/hierarchical-data/hiercon1.png#thumbnail)

This will take you to the **Dataset Design** step, which may look slightly different from your previous encounters with the screen if your JSON file contains *arrays* (either numeric or text), *objects*, or *object arrays*. We have used the attached <a href="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/hierarchical-data/contractors.json">contractors.json</a> file for the purpose of this documentation, which contains all of these field types: childrenAges is a numeric array, carModels is a text array, address is an object, and countriesVisited is an object array.

 ![hierarchical-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/hierarchical-data/hiercon2.png#thumbnail)

You notice the following special features with this data source:
* There are new column types like *Numeric Array, Text Array, Object,* and *Object Array*.
* *Address* column is an object that has additional columns of its own that are indented.
* *CountriesVisited* is an object array that has additional columns of its own that are also indented. Furthermore, the column and its children are not selected and are in fact disabled.

If you go to the *View Data* tab you will see a better view of how the data is perceived by the system.

 ![hierarchical-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/hierarchical-data/hiercon3.png#thumbnail)

The parent records in the main data source have a one-to-many relationship with *countriesVisited* object array that can behave like a left join between two relational tables and can be “inflated” to produce a flat dataset. In order to flatten the object array click on the **Transformations** button on the top right corner of the columns list, drag the **Array Flatten** transformation to the workspace and select the **Inflate** option.

 ![hierarchical-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/hierarchical-data/hiercon4.png#thumbnail)

This transformation flattens the array and the effect can be seen in the form of an enabled object on the Dataset Design tab, as soon as the Transformation dialog is closed. 

 ![hierarchical-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/hierarchical-data/hiercon5.png#thumbnail)

>**Note**: To learn more about Transformations, see [Transformations](../02-Design/03-Transformations/transformations.md).

You can design your dataset as usual before loading it. For more information, see [Overview of Datasets](./overview-of-datasets.md).

</div>