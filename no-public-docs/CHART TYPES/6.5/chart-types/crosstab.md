---
id: crosstab
title: Crosstab
sidebar_label: Crosstab
---

<div style={{textAlign: "justify"}}>

A Crosstab table shows data aggregated across two different dimensions in a matrix style to show the correlation between different variables, and the values in the cross-section of the said dimensions. Crosstab Charts are used when we want to show the relationship between two Categorical values, for example, total sales (**Values**) by month-of-year, as one dimension (**Row** or **Column**), across different countries, as the other dimension (**Column** or **Row**). 

The chart supports sub-groups in each dimension. These appear as children of the parent groups and can be drilled down to in order to explore the subtotals of the selected values at that level. In the example above, the layer under month-of-year can be weeks and the layer under countries might be provinces. The resulting chart shows the total sales in Canada for April of 2018 in the top layer and can drill down to display the total sales in the province of Quebec during week 15 of 2018.
 
Furthermore, multiple values can be added to the same crosstab chart to provide the additional analytic capability. For example “average os shipping costs” can be added as an extra value to the crosstab chart to show these values alongside the “total sales” in the previous example.

![crosstab](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Crosstab/crosstab.png#thumbnail)


## Creating a Crosstab Chart
To create a crosstab chart a categorical column has to be dragged into the **Rows** shelf to serve as one dimension, and another categorical column has to be dragged into the **Columns** shelf to serve as the other dimension. Using the column with fewer distinct values in the **Columns** position, and the one with more distinct values in the **Rows** shelf provides a better user experience, as it avoids horizontal scrolling. 
Additional categorical columns can be dragged into the **Rows** or **Columns** shelves to act as the child layers for the selected first layer of data. 
Next, decide what value or values need to be analyzed in the selected dimensions and drag those to the **Values** shelf and choose the appropriate aggregates for them. Most of the time these are selected from the numerical columns of the dataset, such as sales numbers, order quantities, and the like.

Note that it is recommended to keep the layers and values to a minimum, as adding too many layers as dimensions, and/or too many aggregated values, can make the chart difficult to read and reduces its analytical value.

In the case below, we want to show what the average Science GPA of the male and female applicants of different age groups is in different colleges.
We drag and drop *college_name* as **Row**, *sex* and *age_cat* as **Columns** and *science_gpa* as **Values**. In the **Values** column pill, we click on the three-dot menu and choose the **Aggregation** as *Average* instead of the default *Sum*.

![crosstab](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Crosstab/create.gif#thumbnail)


## Styling the Crosstab Chart
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your chart.

### General
* **Labels** - show or hide the labels for Rows and Columns. By default, labels are set to the selected column names. By clicking on the three-dot menu in the label pill you can edit the label, sort the values in ascending/descending order or remove sorting from the label.

![crosstab](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Crosstab/labels.png#thumbnail)


* **Sorting** - when Labels is checked, the sorting option is added in the label pill.

![crosstab](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Crosstab/sorting.png#thumbnail)



* **Totals** - shows the Grand Total of the columns, rows, or columns and rows at the end of the table.
* **Position** - decide whether you want the total of the column, row, or both.
Subtotals - If you have more than one level in Columns, this option shows the totals of each parent group alongside the child layer values, as you drill down into the child layers. 
* **Max Rows*** - set a limit on the number of data points in the Rows dimension. 
* **Max Columns*** - set a limit on the number of data points in the Columns dimension.</br>
*The maximum number of data points within both dimensions is 10,000 in total.

### Styles
* **Header Color** - set the background color for your header using the color picker. 
Header Font Color - set the foreground color for the text in your header using the color picker.  
* **Format** - set the format for your data points; pick between *Default* (depending on the format in the Values shelf, e.g. $1,234.56), *Abbreviated* (e.g. 1.23K), Numeric (e.g. 1,234.56), *Currency* (e.g. $1,234.56), *Percentage* (e.g.1,234.56%), *Scientific* (e.g.1.23e+3). 

### Format
You can apply [Conditional Formatting](../../dataviews/chart-builder/chart-configuration/format.md#small-multiples#conditional-formatting) to your Crosstab Chart.
 
### Filters
You can also add Filters to your data by expanding the **Filters** section in the configuration panel or by clicking on the Filters button in the toolbar above the canvas.
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. To read more about different types of filters, go to the [Filters](../../dataviews/chart-builder/chart-configuration/chart-filters.md) article.


## Sorting in Crosstab Tables
For Crosstab tables, you can sort any of the Rows and/or Columns at the same time. Like grouped tables, each sorted Row is sorted within the Row directly above it and each Column under the Column above it, and their order or participation in sorting corresponds with their physical position in the layers. Sorting on the Value columns is not possible.

![crosstab](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Crosstab/sorting.gif#thumbnail)


## Reordering Columns

Values in the columns can be reordered directly from the shelves.

![crosstab](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Crosstab/reorder.gif#thumbnail)



</div>