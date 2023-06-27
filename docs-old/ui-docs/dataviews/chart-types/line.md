---
id: line-charts
title: Line Chart
sidebar_label: Line Chart
---

<div style={{textAlign: "justify"}}>

Line charts show changes of an aggregated value over a continuous dimension (**Category**), usually time. For example, a line chart can be used to show the number of orders that were placed over the period of some days, months, or any other unit of time.

![line-chart](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Line/line.png#thumbnail)

## Creating a Line Chart
Line Charts are used when you want to present a single value and a single category. 
To create a Line Chart, drag and drop a data field from the Data Panel onto either the corresponding shelf or the canvas. 

In the case below, we wanted to show how the number of total orders changes throughout the quarters. We dragged and dropped *dateOrder* as **Category** and *total orders* as **Value**. 
We set the **Date Group** as *Quarter, Year* in the Category column pill and continued styling the chart in the Configuration Panel.

![line-chart](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Line/create-line.gif#thumbnail)


If you have more than one category you’d like to visualize, you can use a [Multiseries Line Chart](../chart-types/ms-line.md)


## Styling the Line Chart
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your chart.

### General

* **Tooltips** - enable or disable [Tooltips](../../chart-builder/tooltips.md).
   * To show more than one value on mouseover, click on **+Add Column**:
       * **Column** - pick a value from the dropdown list. This can be any column, even if it is not used in the chart.
       * **Display Values As** - choose the aggregation type for each additional column you’d like to display in the tooltip (Sum, Average, Median, Count, Distinct Count, Minimum, Maximum).
       * **Values Format** - set the format of the values on the scale choosing between Default, Abbreviated, Decimal (set a number of decimals), Currency (choose the currency from the drop-down menu and set a number of decimals), Percentage (set a number of decimals), Scientific.
       * **Remove** - remove the tooltip column.
   * **Header** - add a header to the tooltip.
![line-chart](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Line/header.png#thumbnail-60)
<ul style={{listStyle: 'none', marginLeft: '40px'}}>
<li>  1. Header</li>
<li>  2. Value column field</li>
<li>  3. Tooltip column field </li></ul>

* **Max Data Points** - set the upper limit of the data points you’d like to show in your Line Chart. Controlling the number of data points helps you manage the clarity and organization of the chart as well as affect its performance.

### Styles
* **Color Type**
   * **Single** - all bars are the same color. 
       * **Color** - change the color of the bars.
   * **By category** - each bar is colored based on its category.
       * **Theme** - set one of the predetermined themes for a more unified look of your charts.
       * **Match colors across charts** - unify the colors of each categorical value throughout the page and application.
* **Axis Labels** - Show or hide the labels of the axes.
* **Orientation** - Choose between the vertical or horizontal orientation of the bars. 
* **Values axis** *(typically y axis)*
   * **Label** - give the axis a custom label.
   * **Values** - show or hide values on the axis.
   * **Values Rotation** - if value labels are enabled, decide how you want them to be displayed. You can use this option to avoid overlapping labels.
   * **Format** - set the format of the values choosing between Default, Abbreviated, Decimal (set the number of decimal points), Currency (choose the currency from the drop-down menu and set the number of decimal points), Percentage (set the number of decimal points), Scientific. Values can also be formatted from the Values column pill.
   * **Scale Type** - the default scale type is Linear; however, a linear scale is not appropriate for data that is spread over a wide range. Use the Logarithmic scale to display numerical data over a wide range of values in a compact way.
   * **Min Range** - set the minimum value for the axis.
   * **Max Range** - set the maximum value for the axis. 
* **Steps** - Depending on how wide the axis range is, the default configuration could display a lot of tick marks, making it hard to read or analyze the chart. Intervals are set to Auto by default, meaning the chart will calculate the appropriate intervals based on the axis scale range and the dataset values. In the example below, the range of data is from 0 to 8,000. So when we set the step to 1000 units, we get 8 tick marks and when set to 10,000, only 1 tick mark is displayed.
![line-chart](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Line/steps.gif#thumbnail)
It’s important to keep in mind that when the axis range is vast (e.g., 0 - 10,000,000), setting the “Steps” option to 1 will create 10 million tick marks, causing performance issues on the chart and probably blocking the browser. To avoid this situation, the chart will ignore the defined value and fall back to automatic mode.<br/>
* **Category axis** *(normally the X-axis)* 
   * **Label** - give the axis a custom label.
   * **Values** - show or hide values on the axis.
   * **Values Rotation** - if values are enabled, decide how you want them to be displayed.
* **Line Thickness**: select a thin, normal or bold line for your chart. 
* **Line Style**: Choose between solid, dashed or dotted line styles. 
* **Line Type**: users can create five types (*Straight, Monotone, Cardinal, Step Before, Step After*) of Line Charts depending on the visualization they need. 
![line-chart](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Line/line-type.png#thumbnail-60)
* **Data Labels** - show or hide the Value labels of your data points.
    * **Borders** - display your values within a frame.

### Sorting
Like all XY Charts, you can sort by either the category or aggregated values from the column pills. If the column is not included in the chart, go to the **Sorting** section of the Configuration Panel and pick your desired column from the dropdown, and select the sorting direction.

Read more about Sorting in [this article](../../chart-builder/sorting.md). 

### Layers
Add a [Trend Line](../../dataviews/chart-builder/chart-configuration/layers.md#trend-line) or a [Reference Line](../../dataviews/chart-builder/chart-configuration/layers.md#reference-line) to your chart to allow users to visually compare the data against some set trend or reference value.

### Format 
The [Small Multiples](../../dataviews/chart-builder/chart-configuration/format.md#small-multiples) feature is available in all XY Charts.
You can apply [Conditional Formatting](../../dataviews/chart-builder/chart-configuration/format.md#small-multiples#conditional-formatting) to your Line Chart.

### Filters
You can also add Filters to your data by expanding the Filters section in the configuration panel or by clicking on the Filters button in the toolbar above the canvas. 
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. To read more about different types of filters, go to the [Filters](../../dataviews/chart-builder/chart-configuration/chart-filters.md) article. 


For more on Line Charts and other XY charts, we recommend watching <a href="/docs/video-training/building-qrvey-sample/xychart" target="_blank">this video</a>.





</div>