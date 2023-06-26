---
id: data-unions
title: Appending Data (Union)
sidebar_label: Appending Data (Union)
tags: [Data Analyst]
---
<div style={{textAlign: "justify"}}>

Sometimes it is needed to bring data from different data sources with similar structures, and append it to form one single dataset that contains data from all the sources. This action, which is known as UNION in databases, is available in the Qrvey platform and explained in this article.

## Using the Union Feature

The Union feature can be found in the three-dot menu off of the data source pill in the *Dataset Design* screen, alongside Join and other data source functions. 

![union](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+unions/union1.png#thumbnail-40) 


In order to use this feature, click on the pill for the data source that you wish to use as the base of the union to reveal its columns. Next, select the **Union with Another Data Source** option from the three-dot menu and select the data source to be unioned as you would select one for joining.

The data sources appear in a group that visually represents the union and the combined list of columns appears in the **Columns** list. Note that columns are matched by their names and the match algorithm is case sensitive. So it is important that they have the same name in all data sources. 

![union](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Data+unions/union2.png#thumbnail-40) 


This process can be repeated as many times as necessary to append data from any number of data sources. Furthermore, data sources of any type can be used in the same union and the resulting dataset will contain the combination of all different columns from these sources. Columns of the same name and type will be considered one. 

>**Note**: Push API data sources currently don’t support the union feature.

## Special Considerations
It is important to understand all business rules and special considerations around the Union feature in order to have a successful outcome. These rules and considerations have been listed here:

As a data creator, I would like to “union” multiple Data Sources so the data is combined and appended into a single Dataset.

* Any number of Data Sources can be unioned together. 
  * These Data Sources can be of different types. E.g, we can have a union made of a CSV file, a Dataset, and a SQL query.
    * Push API is the only exception. This Data Source does not support unions.
  * Data Sources have to be added to the union one at a time.
* The **View Source Data** tab is not available for unioned Data Sources.
* Removing a Data Source from a union won’t require a data reload and won’t break the existing charts unless the chart uses a column that has been removed.
* Replacing a Data Source that is used in a union will not cause a data reload, either. This is particularly important to note, especially if you expect the data from the new *Data Source* to be loaded as a result of the replacement.
* Columns will be matched by name and the matching is case-sensitive.
* Transformations can be applied to the Data Sources that participate in the Union. This feature can be used to transform columns that need to be renamed or changed otherwise.
* Other features, such as RLS, Unique ID, Column Link, and Geolocation don’t apply to the Data Sources that participate in the Union, but they all apply to the resulting, unionized object.
* “Union output” columns will be the original columns from the sources including columns created from transformations in each Data Source. 
* Column types can be different between each source. The “Union” output column data types will be set based on the first Data Sources that include the column.
* Object arrays won’t be displayed in the union output. If an object array is flattened, its properties can be shown in the union output.
* The result of a union acts like any Data Source and can be joined to any other Data Source.
* Internationalization features (i18n tokens) apply to the union output.



</div>