---
id: transformations
title: Transformations
sidebar_label: Transformations
---
<div style="text-align: justify">

Transformations manipulate existing columns and create new ones so that the data is analysis-ready. For example, you can standardize values by setting all values to the same upper or lower case. You can also combine values together. Transformations are run during the loading process.

## Adding Transformations
![1_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/1_transformation.png#thumbnail)

When working with a single Data Source, you will have a single workspace to add transformations. You will have to drag Transformations from the Transformation List to the workspace.

![2_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/2_transformation.png#thumbnail)

Transformations are run in sequence. This is because a transformation might depend on previous ones. You can reorganize transformations by dragging them around the workspace.

![3_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/3_transformation.png#thumbnail)

When creating a transformation, you will be able to decide if you want to update existing columns or just create a new one. This will be identified in each transformation with “Updates” or “Outputs”.

![4_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/4_transformation.png#thumbnail)


## Transformations with Multiple Data Sources
When working with joined Data Sources you will have different workspaces. One for each Data Source and another one for the Join Output (Post-join Transformations).

Data Source transformations are applied before joining the Data. This can be either used to fix the data so that it can be joined or even to improve performance by transforming a small Data Source without having to go through all joined records.

Join Output Transformations are applied after joining the Data. In this workspace, you are able to choose columns from all the Data Sources involved in the join and even create new ones.

![5_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/5_transformation.png#thumbnail)

## Transformation Testing
You will have the chance of testing transformations before loading the actual data. This will let you verify all of your transformations are working as expected.
You just have to select your Data Source, fill the input parameters and press “Test” to get the results.

![6_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/6_transformation.png#thumbnail)


## Formula Transformation
This transformation will let you calculate values by writing a custom formula to enhance your data. Formulas are written in Javascript, however, there’s a list of the available functions as well as an autocomplete feature to help you.

![7_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/7_transformation.png#thumbnail)

## Working with Dates
For dates, you will need to add additional steps to your formula. In this case,  we need to explicitly tell the formula that you are working with a date so you can use any date function.

![8_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/1_transformation.png#thumbnail)


## Applying Transformations to the Data
In order to apply the transformations to your data, you will need to apply the changes to your Dataset first. If you want to see those transformations in existing data, a reload is required.
If no reload is done, Transformations will be applied only to new records, for example: when having Data Sync on with Append and Update.
