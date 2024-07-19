---
id: chart-type-ms-symbol
title: Multiseries Symbol Chart
sidebar_label: Multiseries Symbol Chart
tags: [Data Analyst]
sidebar_position: 6
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

Multiseries Symbol Charts are used when you want to present a single value in more than one category. Effectively, a multiseries chart consists of two dimensions and a measure. Users need to add a single **Category, Value** and **Series** field to create something similar to a pivot chart. For example, if you want to show the number of orders in various statuses, across order months, you can add *Shipped Date* as **Category**, *Quantity* as **Value**, and *Status* as **Series**. 

Multiseries Symbol Charts help you visualize the <u>highs and lows</u> that appear in your data across the series. A Symbol Chart is very similar to a Bar Chart in its use case. As a result, a Multiseries Symbol Chart can be used where a Multiseries Bar Chart would be.

 ![ms-symbol-chart](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/MS-Symbol/ms-symbol.png#thumbnail)


## Creating a Multiseries Symbol Chart

To create a Multiseries Symbol Chart, drag and drop a data field from the Data Panel onto either the corresponding shelf or the canvas. 

In the case below, we want to see the status of orders in relation to the quantity ordered and the country of the order. 
We drag and drop *country* as **Category**, *Quantity* as **Value**, and *status* as **Series**. We continued with styling the chart in the Configuration Panel.  

 ![ms-symbol-chart](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/MS-Symbol/ms-symbol.png#thumbnail-60)


If you have only one category you’d like to visualize, you can use a [Symbol Chart](./symbol.md).


## Styling the Multiseries Symbol Chart
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your chart.

### General
The General section is available for all chart types, and the options vary depending on the chart selected. For more information on the options, see [General Chart Settings](../09-Configure%20charts/general-chart-settings.md).

>**Note**: Use the **Table Calculations** option to add calculations to your Combo Chart. For more information, see [Table Calculations](../08-Table%20Calculations/table-calculations.md).


### Styles
The Styles section enables you to control various visual elements of the charts, such as colors, labels, and more. It is available for most chart types, and the options vary depending on the chart selected. For a glossary of all styles, see [Styles](../09-Configure%20charts/chart-styles.md). Style options specific to this chart are listed below. 

* **Theme**. Set one of the predetermined themes for a more unified look of your charts.
    * **Match colors across charts**. Select to Unify the colors of each categorical value throughout the page and application.
* **Axis Labels** - Show or hide the labels of the axes.
* **Category axis** *(normally the X-axis)*
    * **Label** - give the axis a custom label.
    * **Values** - show or hide values on the axis.
    * **Values Rotation** - if values are enabled, decide how you want them to be displayed.
* **Values axis** *(typically y axis)*
    * **Label** - give the axis a custom label.
    * **Values** - show or hide values on the axis.
    * **Values Rotation** - if value labels are enabled, decide how you want them to be displayed. You can use this option to avoid overlapping labels.
    * **Format** - set the format of the values choosing between Default, Abbreviated, Decimal (set the number of decimal points), Currency (choose the currency from the drop-down menu and set the number of decimal points), Percentage (set the number of decimal points), Scientific. Values can also be formatted from the Values column pill.
    * **Scale Type** - the default scale type is Linear; however, a linear scale is not appropriate for data that is spread over a wide range. Use the Logarithmic scale to display numerical data over a wide range of values in a compact way.
    * **Min Range** - set the minimum value for the axis.
    * **Max Range** - set the maximum value for the axis.
    * **Steps** - Depending on how wide the axis range is, the default configuration could display a lot of tick marks, making it hard to read or analyze the chart. Intervals are set to Auto by default, meaning the chart will calculate the appropriate intervals based on the axis scale range and the dataset values. In the example below, the range of data is from 0 to 8,000. So when we set the step to 1000 units, we get 8 tick marks and when set to 10,000, only 1 tick mark is displayed.
    ![ms-symbol-chart](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/MS-Symbol/steps.gif#thumbnail) 
    It’s important to keep in mind that when the axis range is vast (e.g., 0 - 10,000,000), setting the “Steps” option to 1 will create 10 million tick marks, causing performance issues on the chart and probably blocking the browser. To avoid this situation, the chart will ignore the defined value and fall back to automatic mode.<br/>

* **Symbol** - pick a symbol type to show in your chart. 
    ![ms-symbol-chart](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/MS-Symbol/symbol.png#thumbnail-40) 

* **Fill** - Decide if you want the symbol to be filled or show only the outline of it. 
* **Offset**. Determines the offset of the chart. Select whether to configure a manual offset as a **Percentage** or in **Pixels**, and enter the desired values in the **Left** and **Top/Bottom** fields. To enable the platform to automatically manage the offsets, click **Reset to Default** to set the values under **Left** and **Top/Bottom** to **Auto**.


 
### Sorting
Like all Multiseries Charts, you can sort by either the category or aggregated values from the column pills. If the column is not included in the chart, go to the **Sorting** section of the Configuration Panel and pick your desired column from the dropdown, and select the sorting direction.
 
For more information, see [Sorting](../sorting.md). 
 
### Layers
Add a [Trend Line](../09-Configure%20charts/chart-layers.md#trend-line) or a [Reference Line](../09-Configure%20charts/chart-layers.md#reference-line) to your chart to allow users to visually compare the data against some set trend or reference value.
 

### Format
The [Small Multiples](../09-Configure%20charts/chart-format.md#small-multiples) feature is available in all XY Charts.
You can apply [Conditional Formatting](../09-Configure%20charts/chart-format.md#small-multiples#conditional-formatting) to your Multiseries Chart.
 
### Filters
You can also add Filters to your data by expanding the **Filters** section in the configuration panel or by clicking on the **Filters** button in the toolbar above the canvas.
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. For more information, see [Filters](../09-Configure%20charts/chart-filters.md).
 
For more on Multiseries Charts, watch the <a href="/docs-v2/video-training/legacy/multi-series.md" target="_blank">Multiseries Chart video</a>
</div>