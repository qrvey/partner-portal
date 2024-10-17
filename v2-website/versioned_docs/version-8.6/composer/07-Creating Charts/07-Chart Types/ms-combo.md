---
id: ms-combo
title: Multiseries Combo Chart
sidebar_label: Multiseries Combo Chart
tags: [Data Analyst]
sidebar_position: 4
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

The Multiseries Combo Chart is used to view multiple metrics over multiple dimensions. It combines a Multiseries Chart with any number of layers of any type of X/Y Chart (Bar Chart, Line Chart, and Symbol Chart). Use a Multiseries Combo Chart to create a visualization with one category, one series, and two or more values. 



![ms-combo-chart-82](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/MS-Combo/ms-combo-chart-82.png)

## Creating a Multiseries Combo Chart
To create a Multiseries Combo Chart, drag a data field from the Data panel onto either the corresponding shelf or the canvas. The Multiseries Combo Chart requires a category, a series, and at least two values in the shelves. 

In the case below, we’d like to better understand which customers are purchasing our high-margin products. The Multiseries Combo Chart below displays a bar chart of each product (productName) on the x-axis and the quantity of items sold (quantityOrdered) on the y-axis. The bar chart is stacked to display the customers of each product (customerName) and the number of units they purchased (quantityOrdered). When analyzing the product sales, we’d also like to consider the profit margin of each product. The chart also displays the wholesale cost of each product (buyPrice) as an upward-facing triangle and the price the customer paid (priceEach) as a downward-facing triangle. The distance between the two triangles provides a visual indicator of the price and profitability of the product. Using this chart, we can quickly see which products have high (or low) margins and identify the customers who purchase them. 
 

![ms-combo-chart-example-82](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/MS-Combo/ms-combo-chart-example-82.png)

## Styling the Multiseries Combo Chart

### General
The General section is available for all chart types, and the options vary depending on the chart selected. For more information on the options, see [General Chart Settings](../09-Configure%20charts/general-chart-settings.md).

>**Note**: Use the **Table Calculations** option to add calculations to your chart. For more information, see [Table Calculations](../08-Table%20Calculations/table-calculations.md).



### Styles
The Styles section enables you to control various visual elements of the charts, such as colors, labels, and more. It is available for most chart types, and the options vary depending on the chart selected. For a glossary of all styles, see [Styles](../09-Configure%20charts/chart-styles.md). Style options specific to this chart are listed below. 

* **Theme** - Set a theme that applies to the Series and the Combo values. 
* **Multiseries Type** - select whether to display the chart as Bar, Line, or Symbol. 
* **X-axis**
  * **Axis Title** - select whether to display the axis title.  
  * **Value Labels** - select whether to display the value labels. 
  * **Values Rotation** - if values are enabled, decide how you want them to be displayed.
  * **Typeface** - select the typeface of the labels. 
  * **Weight** - select the font weight of the labels. 
  * **Size** - select the font size of the labels. 
  * **Font Color** - select the font color of the labels. 
* **Y-axis**
  * **Axis Title** - select whether to display the axis title.  
  * **Value Labels** - select whether to display the value labels. 
  * **Values Rotation** - if values are enabled, decide how you want them to be displayed.
  * **Typeface** - select the typeface of the labels. 
  * **Weight** - select the font weight of the labels. 
  * **Size** - select the font size of the labels. 
  * **Font Color** - select the font color of the labels. 
* **Bar Width** - manually set the width of the bars. 
* **Type** - Choose whether you want your bars to appear side by side or stacked.
![combo](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Combo/combo3.png#thumbnail)

### Sorting
Multiseries Combo Charts can be sorted by their selected category column, or either of the value columns used in them. Choose the column that you wish to sort your chart by, from the dropdown list and select the sorting direction (ascending or descending) from the icons under the dropdown.

For more information, see [Sorting](../sorting.md). 

### Layers
Add a [Trend Line](../09-Configure%20charts/chart-layers.md#trend-line) or a [Reference Line](../09-Configure%20charts/chart-layers.md#reference-line) to your chart to allow users to visually compare the data against some set trend or reference value.

### Format
The [Conditional Formatting](../09-Configure%20charts/chart-format.md#small-multiples#conditional-formatting) option is available in Multiseries Combo Charts.

### Filters
You can also add Filters to your data by expanding the Filters section in the configuration panel or by clicking on the Filters button in the toolbar above the canvas. 

Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. 
For more information on the types of filters, see [Chart Filters](../09-Configure%20charts/chart-filters.md). 
 
Multiseries Combo Charts supports **Filter By**, which applies a filter over the chart’s data when users click on a data point.



</div>