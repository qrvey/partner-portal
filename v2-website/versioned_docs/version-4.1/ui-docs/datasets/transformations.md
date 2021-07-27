---
id: transformations
title: Transformations
sidebar_label: Transformations
---
<div style={{textAlign: "justify"}}>

Transformations manipulate existing columns and create new ones so that the data is analysis-ready. For example, you can standardize values by setting all values to upper or lower case, combine values together, or flatten arrays of layered data. Transformations are run during the loading process.

## Adding Transformations
<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
Click on the Transformations button on the top right corner of the columns list to start the process of adding a new transformation.
=======

![1_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/1_transformation.png#thumbnail)
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation1.png#thumbnail-20)

Predefined transformation functions are presented in a list on the right side of the Transformations dialog. The functions are grouped by their type/category for easy access.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation2.png#thumbnail) 

Find the function that you need and from the list of functions and drag it to the work area that we will call “the workspace” in this article.


When working with a single Data Source, you will have a single workspace to add transformations to. 

<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation3.png#thumbnail)

=======
### Transformations with Multiple Data Sources

When working with joined Data Sources you will have different workspaces. One for each Data Source and another one for the Join Output (Post-join Transformations).

Data Source transformations are applied before joining the Data. This can be either used to fix the data so that it can be joined or even to improve performance by transforming a small Data Source without having to go through all joined records.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

## The Transformation Panel
Each transformation function has its own set of rules and behaviors that need to be configured before it can be applied. When a function is dragged onto the workspace from the list, a panel is presented that contains these configurations. While each function may have different configuration options, most have common parts that are described in this section. Each of the available functions are discussed in more detail in the <a href="#available-transformation-functions">Available Transformation Functions</a> section.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation4.png#thumbnail)

<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
* **Transformation Name** - All new transformations get the default name of Untitled. While this name can be left at the default value, it is a good idea to choose a recognizable name so it can be identified among the other transformations. It is common practice to give the transform the same name as the resulting output column.
=======
## Transformation Testing

You will have the chance to test transformations before loading the actual data. This will let you verify that all of your transformations are working as expected.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

* **Transformation Function** - The selected function is shown right under the name. This is just an informational feature.
Other Configuration Option - This part of the panel changes from function to function. Some transformations require one or more columns of the data source to be selected, some present options that are relevant to the function, and some may even take a script input. 

* **Output Choices** - When creating a transformation, you will be able to decide if you want the result to update existing columns or create new ones by selecting either the Update Existing or Create New option. 

<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
* **Output Column Name** - If the Create New option is selected, you need to give your new column a name. 
>**Note**: Column names have to be unique in the entire dataset.

* **Error Treatment Method** - This feature allows you to decide how possible errors should be handled. The three options are:
    - Reject Record: The whole record will not be skipped if an error happens.
    - Ignore Error: The record remains as-is.
    - Replace Value: The value will be replaced with the entered value in case of an error.
> **Note**: This feature is not available for transformations that don’t lead to an error, such as text type transformations.
=======
Also, any transformation has its own **Test Shortcut** on the transformation panel so it can be tested easily. By clicking the link, Testing Tab will be available and JSON columns will be populated with real data for a better experience.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation5.png#thumbnail-40)

<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
* **Testing Shortcut Link** - This is a quick way to go to the Testing tab, with this transformation already selected. You can learn more about testing transformations in <a href="#testing-a-transformation"> a later section</a>.
* **Action Menu** - Use this menu to access the Delete command for the transformation.
=======
![transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/6b_transformation.png#thumbnail)

## Applying Transformations to the Data

In order to apply the transformations to your data, you will need to apply the changes to your Dataset first. If you want to see those transformations in existing data, a reload is required.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

Once work on a transformation is completed, the panel will collapse into a smaller card, displaying only a summary of the transformation’s configuration.

<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation6.png#thumbnail-40)
=======
## General Purpose Transformations

### Formula Transformation
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

Transformations are run in sequence. This is because a transformation might depend on the results of the previous ones. Transformations can be reorganized by dragging them around the workspace. They are also auto-saved and the resulting columns(s) can be identified with the Fx icon to the right of the column in the design screen. Clicking the icon opens the Transformations dialog and allows the transformations for the selected column to be edited or deleted.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation7.png#thumbnail-40)

<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md


## Transformations With Multiple Data Sources
When working with joined Data Sources you will have different workspaces. One for each Data Source and another one for the Join Output (Post-join Transformations).

Data Source transformations can be used to cleanse, augment, or improve the data and are applied <u>*before*</u> joining the data sources. This results in improved performance, as the changes run on smaller, individual data sources, rather than the larger, joined data.
=======
&gt; **Note**: When working with dates, you will need to use appropriate date functions to explicitly tell the formula that you are working with a date data type.

![8_transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/8_transformation.png#thumbnail)

## Handling Errors in Transformations

This feature in the transformations UI will help users to handle errors better if they occur. The user will have three options to decide how to handle the error.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

Join Output Transformations, however, are applied after joining the data. In this workspace, you are able to choose columns from all the Data Sources involved in the join, and either update them or create new columns to be added to the dataset.

<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation8.png#thumbnail)

## Testing a Transformation
Transformations can be tested individually, or all at once, before they are applied. This is very much recommended, as it will let you verify that all of your transformations are working as expected.

In order to test a transformation, you can either use the shortcut **Test Transformation** link on the top right corner of the transformation panel or go to the **Testing** tab of the Transformations dialog. Both methods take you to the **Testing** tab, with the slight difference that the shortcut method pre-selects the transformation in the panel, while you have to first select a transformation, in the other method.
=======
-   Reject Record: The whole record will not be available when the error occurs.
-   Ignore Error: The record remains as-is.
-   Replace Value: Give a configured value when error occurs.
    &gt; **Note**: This feature will not be available for transformations that can’t have an error such as Trim, Uppercase, Lowercase, Concatenate, Replace Text.

## Text Transformations

### Trim Text

This transformation will allow you to remove the specified characters at the start or the end of a text in a column.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

Once a transformation has been selected, the system suggests some test data as the *Input* to the transformation. Click on the **Test** button to see the results, or any possible errors, in the *Output* panel. More information about the test, such as how long it took to run, or the details of the error, is shown in the *Console Output* panel.

<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation9.png#thumbnail)

=======
### Uppercase

This transformation will allow you to make the text in one or more columns uppercase.  Standardizing the case can help when analyzing data, grouping and creating charts.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

## Applying Transformations to the Data
If transformations are added before the data is loaded, they will take effect at the time that you load your data. However, if transformations are added or updated for an existing dataset, **a data reload is required.**
> **Note**: If transformations are added or modified, but the data is not reloaded, the transformations will **only apply to future records or loads**. For instance, when a data sync process is initiated after the transformations have been added.

<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
=======
### Lowercase

This transformation will allow you to make the text in one or more columns lowercase.  Standardizing the case can help when analyzing data, grouping and creating charts.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

## Available Transformation Functions
We add more predefined transformations with every release. The predefined set is for ease of use and all of them, along with more ad hoc transformations, can be created using the <a href="#formula">Formula transform</a>. Here, you can find an alphabetically-sorted list of the predefined functions that are available as of date, and learn more details about each.

<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
=======
### Replace Text

This transformation will allow you to replace any text found in a specific column with a given text.  To find a text, Case Sensitive functionality is also available.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md


<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
| **Transformation** | **Group** | **Function** |
| --- | --- | --- |
| <a href="#addition">Addition</a>| Numeric | Adds the values of multiple columns together |
|<a href="#array-flatten"> Array Flatten</a>| Logic | Inflates array objects in hierarchical data |
| <a href="#concatenate">Concatenate</a>| Text | Concatenates multiple textual column values  |
| <a href="#dataset-write">Dataset Write</a>| External | Writes data to a different dataset |
| <a href="#date-add">Date Add/Subtract </a>| Date | Adds or subtracts given units to date column values |
| <a href="#date-difference">Date Difference </a>| Date | Calculates the date/time interval |
| <a href="#division">Division</a>| Numeric | Divides one column’s value by another |
| <a href="#formula">Formula </a> | Logic  | Allows Javascript functions to be created and applied |
| <a href="#ifelse">If/Else</a> | Logic | Lets a condition decide the next transformations |
| <a href="#lowercase">Lowercase</a>| Text | Turns textual column values to lowercase |
| <a href="#multiplication">Multiplication</a>| Numeric | Multiplies the values of multiple columns |
| <a href="#record-copy">Record Copy</a>| Logic | Copies records into an alternate transformation stream |
| <a href="#">Round | Numeric | Rounds the value of one or more numeric columns |
| <a href="#subtraction">Subtraction</a> | Numeric | Subtracts the value of a numeric column from another |
| <a href="#text-replace">Text Replace</a> | Text | Replaces all or part of a textual column with a string |
| <a href="#trim">Trim</a> | Text | Removes selected characters from around textual column values |
| <a href="#uppercase">Uppercase</a>| Text | Turns textual column values to uppercase |
=======
### Concatenate

This transformation will allow you two or more columns, specifying the separator is an option. The order of the concatenated text is given from top to bottom.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md


## Numeric Transformations

### Round
<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
This transformation allows you to round one or more numeric columns up, down, or to the nearest integer. The number of decimal places to consider is an option that can be selected. 
=======

This transformation will allow you to round one or more numeric columns to the nearest integer.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

Like all transformations, the results can update an existing column or create a new one. If multiple columns are selected, the option of creating new columns is not available. You can also decide what to do in the case of an error.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation10.png#thumbnail)

### Addition
<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
This transformation allows you to add the values of two or more numeric columns from the selected data source, or join output. The result is one single value; the sum of all selected columns.

Like all transformations, the results can update an existing column or create a new one. You can also decide what to do in the case of an error.
=======

This transformation will allow you to perform Sum in numeric columns given in a dataset.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation11.png#thumbnail)

### Subtraction
<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
This transformation allows you to subtract the value of the column selected in the Subtract dropdown from the one selected in the Start dropdown. 

Like all transformations, the results can update an existing column or create a new one. You can also decide what to do in the case of an error.
=======

This transformation  will allow you to perform Subtraction in numeric columns given in a dataset.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation12.png#thumbnail)

### Multiplication
<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
This transformation provides a quick way to multiply the values of two or more columns that you select from the list of all numeric columns in the data source, or join output. The result is one single value; the product of all selected columns.
=======

This transformation  will allow you to perform Multiplication with numeric columns given in a dataset.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

Like all transformations, the results can update an existing column or create a new one. You can also decide what to do in the case of an error.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation13.png#thumbnail)

### Division
<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
This transformation allows you to divide the value of the column selected in the Start dropdown by the one selected in the Divisor dropdown.

Like all transformations, the results can update an existing column or create a new one. You can also decide what to do in the case of an error.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation14.png#thumbnail)


## Text Transformations
### Trim
This transformation allows you to remove the specified characters at the start or the end of a text in a column. The transformation can be applied to any number of columns. 

Like all transformations, the results can update an existing column or create a new one. However, if multiple columns have been selected, the option of creating new columns is not going to be available.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation15.png#thumbnail)

### Uppercase
This transformation converts the value of one or more textual columns to uppercase.  Standardizing the case can help when analyzing data, filtering, grouping and creating charts.

Like all transformations, the results can update an existing column or create a new one. However, if multiple columns have been selected, the option of creating new columns is not going to be available.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation16.png#thumbnail)

### Lowercase
This transformation converts the value of one or more textual columns to lowercase.  Standardizing the case can help when analyzing data, filtering, grouping and creating charts.

Like all transformations, the results can update an existing column or create a new one. However, if multiple columns have been selected, the option of creating new columns is not going to be available.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation17.png#thumbnail)

### Text Replace
This transformation replaces the text indicated in the *Search* field with the text in *Replace With *field, within the selected column. The search can be limited to the same case by checking the *Case Sensitive* checkbox.

Like all transformations, the results can update an existing column or create a new one.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation18.png#thumbnail)

### Concatenate
This transformation strings two or more textual columns together, separating them with the value entered in the *Separator* field. Columns are concatenated in the same order in which they are specified. New columns can be easily added in the middle by clicking the **+** icon next to the column before them. Likewise, you can remove columns from the string by clicking the **-** icon next to them. The result is one single value. 
Like all transformations, the results can update an existing column or create a new one.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation19.png#thumbnail)

=======

This transformation  will allow you to perform Division with numeric columns given in a dataset.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md


## Date Transformations

### Date Add
<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
This transformation allows you to add or subtract values from a specific date column. Value units can be selected for the operation.
=======

This transformation will allow you to add or subtract values from a specific date column. Value unites can be selected for the operation.
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md

Like all transformations, the results can update an existing column or create a new one. You can also decide what to do in the case of an error.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation20.png#thumbnail)

### Date Difference
<<<<<<< HEAD:website/versioned_docs/version-5.4/ui-docs/datasets/transformations.md
This transformation calculates the time interval between the *End Date* and *Start Date*, in *Date Units*. The result is a number and whether the end date is after or before the start date, determines if the result will be positive or negative. An example shows the way this transformation behaves.

Like all transformations, the results can update an existing column or create a new one. You can also decide what to do in the case of an error.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation21.png#thumbnail)

## Logic Transformations
### Formula
Formula is by far the most versatile transformation and it enables you to manipulate data ad-hoc, by writing a script. Formulas are written in Javascript, however, there’s a list of the available functions as well as an autocomplete feature to assist you. It is important to note that all Javascript functions are valid and can be used, even if they are not listed in the *Functions* list.

With Formula transformations, you will need to determine the data type of the results. If not explicitly chosen, all results will be considered text data type.

Like all transformations, the results can update an existing column or create a new one. You can also decide what to do in the case of an error.

> **Note**: When working with Formula transformations, you have to be careful with syntax, using the correct functions with the appropriate data types, and other general rules that apply to scripting. 
![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation22.png#thumbnail)


## If/Else
If/Else transform can be used when there is a need to create a branch - based on a condition - in the series of transformations. In the following example an If/Else transform has been used along with two Date Add transforms to calculate the potential delivery date based on the location of the customer who put in an order: Orders shipped to NYC are delivered the next day, while it takes three days from the order date to ship to everywhere else.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation_if.png#thumbnail-60)


## Array Flatten
Array Flatten is an advanced transformation that has to be used with hierarchical JSON data that contains object arrays, to inflate the child objects and add those to their parent records, or remove them from the data. This will generally result in a change in the dataset structure and it resembles the results of a “join” between the parent and child records.
Take the following data as an example:

```
[
    {
        "information": {
            "name": "John",
            "lastName": "Smith",
            "sports": {
                "id": "1",
                "description": "Soccer"
            },
            "cities": [
                {
                    "id": "4",
                    "cityName": "New York"
                },
                {
                    "id": "5",
                    "cityName": "London"
                }
            ]
        }
    },
    {
        "information": {
            "name": "Jane",
            "lastName": "Doe",
            "sports": {
                "id": "2",
                "description": "Basketball"
            },
            "cities": [
                {
                    "id": "4",
                    "cityName": "New York"
                },
                {
                    "id": "5",
                    "cityName": "London"
                }
            ]
        }
    }
]
```
If you try to load this data you will notice that “cities” cannot be added, as it is an object array and has to be flattened before it can be loaded.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation23.png#thumbnail)

This can be achieved by using an Array Flatten transform.
Upon adding this transformation the system automatically picks the array and shows a sample record of data. You can choose to inflate or remove the array.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation24.png#thumbnail)


If you choose to inflate and load the data, the resulting dataset will have four records.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation25.png#thumbnail)

## Record Copy
Record Copy is an advanced transformation that allows you to make a copy of the records of the data source or join output and use them for other transformations or actions. This function is unique in the fact that it has to be combined with some other transformation - especially one that sends the record to another destination, like another dataset - in order to have an observable effect. For that very reason, Record Copy transformation starts a new transformation stream that is shown slightly indented. Any transformations that are added under Record Copy will apply to the copied record and will not affect the mainstream of transformations.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation26.png#thumbnail)


Selecting a Condition Column is optional. If you choose to select one, it has to contain a boolean value and will limit the copying to records that have a *1, yes,* or *true* in the selected column.
Because of its unique characteristics, Record Copy cannot be tested and it does not leave a mark in the dataset where it’s defined.

## External Transformations
### Dataset Write
Dataset Write is an advanced transformation that allows you to load another dataset at the same time as loading the dataset that you are working in. 
A *Target Dataset* must be selected from the pool of the existing datasets. This lists all the columns of the selected target dataset and allows you to choose what has to be written to those. While usually you may want to copy certain columns of your data source or join output to the new dataset, you can choose to write a constant or the value of any token.
If the dataset has a unique identifier you can choose to either fully replace the existing record with the same ID or merge the values, updating the record as a result.

![transformations](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/transformation27.png#thumbnail)



Dataset Write can be used in conjunction with Record Copy to write the resulting record from the copy and its stream of transformations to another dataset.
Because of its unique characteristics, Dataset Write cannot be tested and it does not leave a mark in the dataset where it’s defined










































=======

This transformation will allow you to calculate the difference between dates and times. The result is a number and its units can be chosen. 

![transformation](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Transformations/difference.png#thumbnail) 
</div>
>>>>>>> v2-docusaurus:v2-website/versioned_docs/version-4.1/ui-docs/datasets/transformations.md
