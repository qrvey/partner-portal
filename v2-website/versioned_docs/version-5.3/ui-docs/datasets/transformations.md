---
id: transformations
title: Transformations
sidebar_label: Transformations
---
<div style={{textAlign: "justify"}}>

Transformations manipulate existing columns and create new ones so that the data is analysis-ready. For example, you can standardize values by setting all values to upper or lower case. You can also combine values together. Transformations are run during the loading process.

## Adding Transformations

![1_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/1_transformation.png#thumbnail)

When working with a single Data Source, you will have a single workspace to add transformations. You will have to drag Transformations from the Transformation List to the workspace.

![2_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/2_transformation.png#thumbnail)

Transformations are run in sequence. This is because a transformation might depend on previous ones. You can reorganize transformations by dragging them around the workspace.

![3_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/3_transformation.png#thumbnail)

When creating a transformation, you will be able to decide if you want to update existing columns or create new ones. This will be identified in each transformation with “Updates” or “Outputs”.

![4_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/4_transformation.png#thumbnail)

### Transformations with Multiple Data Sources

When working with joined Data Sources you will have different workspaces. One for each Data Source and another one for the Join Output (Post-join Transformations).

Data Source transformations are applied before joining the Data. This can be either used to fix the data so that it can be joined or even to improve performance by transforming a small Data Source without having to go through all joined records.

Join Output Transformations are applied after joining the Data. In this workspace, you are able to choose columns from all the Data Sources involved in the join and even create new ones.

![5_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/5_transformation.png#thumbnail)

## Transformation Testing

You will have the chance to test transformations before loading the actual data. This will let you verify that all of your transformations are working as expected.

You just have to select your Data Source, fill in the input parameters and click **Test** to get the results.

![6_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/6_transformation.png#thumbnail)

Also, any transformation has its own **Test Shortcut** on the transformation panel so it can be tested easily. By clicking the link, Testing Tab will be available and JSON columns will be populated with real data for a better experience.

![transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/6a_transformation.png#thumbnail)

![transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/6b_transformation.png#thumbnail)

## Applying Transformations to the Data

In order to apply the transformations to your data, you will need to apply the changes to your Dataset first. If you want to see those transformations in existing data, a reload is required.

**If no reload is done, Transformations will be applied only to new records**, for instance, when a Data Sync is initiated.

## General Purpose Transformations

### Formula Transformation

This transformation will let you calculate values by writing a custom formula to enhance your data. Formulas are written in Javascript, however, there’s a list of the available functions as well as an autocomplete feature to assist you.

![7_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/7_transformation.png#thumbnail)

&gt; **Note**: When working with dates, you will need to use appropriate date functions to explicitly tell the formula that you are working with a date data type.

![8_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/8_transformation.png#thumbnail)

## Handling Errors in Transformations

This feature in the transformations UI will help users to handle errors better if they occur. The user will have three options to decide how to handle the error.

![transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/8a_transformation.png#thumbnail)

-   Reject Record: The whole record will not be available when the error occurs.
-   Ignore Error: The record remains as-is.
-   Replace Value: Give a configured value when error occurs.
    &gt; **Note**: This feature will not be available for transformations that can’t have an error such as Trim, Uppercase, Lowercase, Concatenate, Replace Text.

## Text Transformations

### Trim Text

This transformation will allow you to remove the specified characters at the start or the end of a text in a column.

![9_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/9_transformation.png#thumbnail)

### Uppercase

This transformation will allow you to make the text in one or more columns uppercase.  Standardizing the case can help when analyzing data, grouping and creating charts.

![10_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/10_transformation.png#thumbnail)

### Lowercase

This transformation will allow you to make the text in one or more columns lowercase.  Standardizing the case can help when analyzing data, grouping and creating charts.

![11_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/11_transformation.png#thumbnail)

### Replace Text

This transformation will allow you to replace any text found in a specific column with a given text.  To find a text, Case Sensitive functionality is also available.

![transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/11a_transformation.png#thumbnail)

### Concatenate

This transformation will allow you two or more columns, specifying the separator is an option. The order of the concatenated text is given from top to bottom.

![transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/11b_transformation.png#thumbnail)

## Numeric Transformations

### Round

This transformation will allow you to round one or more numeric columns to the nearest integer.

![12_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/12_transformation.png#thumbnail)

### Addition

This transformation will allow you to perform Sum in numeric columns given in a dataset.

![transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/13_transformation.png#thumbnail)

### Subtraction

This transformation  will allow you to perform Subtraction in numeric columns given in a dataset.

![transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/14_transformation.png#thumbnail)

### Multiplication

This transformation  will allow you to perform Multiplication with numeric columns given in a dataset.

![transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/15_transformation.png#thumbnail)

### Division

This transformation  will allow you to perform Division with numeric columns given in a dataset.

![transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/division.png#thumbnail)

## Date Transformations

### Date Add

This transformation will allow you to add or subtract values from a specific date column. Value unites can be selected for the operation.

![transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/add.png#thumbnail)

### Date Difference

This transformation will allow you to calculate the difference between dates and times. The result is a number and its units can be chosen. 

![transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/difference.png#thumbnail) 
</div>