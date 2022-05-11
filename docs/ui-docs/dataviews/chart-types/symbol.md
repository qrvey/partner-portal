---
id: symbol-charts
title: Symbol Chart
sidebar_label: Symbol Chart
---

<div style={{textAlign: "justify"}}>
Symbol Charts show aggregated values (unlike scatter plot which is based on non-aggregated data) with the purpose of seeing which data points stand out as the highest and lowest of the bunch - this makes sense when you have many data points. Symbol Charts are considered very close to Bar Charts in their use case and therefore everything that applies to a Bar Chart also applies to a Symbol Chart in the analytical sense.
 
![symbol-chart](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Symbol/symbol.png#thumbnail)
 
 
## Creating a Symbol Chart
Symbol Charts are used when you want to present a single value and a single category.
To create a Symbol Chart, drag and drop a data field from the Data Panel onto either the corresponding shelf or the canvas.
 
In the case below, we wanted to see which months the quantity shipped was at its highest and which months it was at its lowest. We dragged and dropped *shippedDate* as **Category** and *Quantity* as **Value**. We continued with styling the chart in the Configuration Panel.
 
![symbol-chart](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Symbol/create-symbol.gif#thumbnail)
 
 
If you have more than one category you’d like to visualize, you can use a <a href="/docs/ui-docs/dataviews/chart-types/ms-symbol" target="_blank">Multiseries Symbol Chart</a>.
 
## Styling the Symbol Chart
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your chart.
 
### General
* * **Tooltips** - enable or disable <a href="/docs/ui-docs/dataviews/chart-builder/tooltips" target="_blank">Tooltips</a>.
  * To show more than one value on mouseover, click on **+Add Column**:
      * **Column** - pick a value from the dropdown list. This can be any column, even if it is not used in the chart.
      * **Display Values As** - choose the aggregation type for each additional column you’d like to display in the tooltip (Sum, Average, Median, Count, Distinct Count, Minimum, Maximum).
      * **Values Format**- set the format of the values on the scale choosing between Default, Abbreviated, Decimal (set a number of decimals), Currency (choose the currency from the drop-down menu and set a number of decimals), Percentage (set a number of decimals), Scientific.
      * **Remove** - remove the tooltip column.
  * **Header** - add a header to the tooltip.
* **Max Data Points** - set the upper limit of the symbols you’d like to show in your chart. Controlling the number of symbols helps you manage the clarity and organization of the chart - if you have too many symbols, the chart can quickly become unreadable.
 
### Styles
* **Color Type**
  * **Single** - all bars are the same color.
      * **Color** - change the color of the bars.
  * **By category** - each bar is colored based on its category.
      * **Theme** - set one of the predetermined themes for a more unified look of your charts.
      * **Match colors across charts** - unify the colors of each categorical value throughout the page and application.
* **Axis Labels** - Show or hide the labels of the axes.
* **Values axis** *(typically y axis)*
  * **Label** - give the axis a custom label.
  * **Values** - show or hide values on the axis.
  * **Values Rotation** - if value labels are enabled, decide how you want them to be displayed. You can use this option to avoid overlapping labels.
  * **Format** - set the format of the values choosing between Default, Abbreviated, Decimal (set the number of decimal points), Currency (choose the currency from the drop-down menu and set the number of decimal points), Percentage (set the number of decimal points), Scientific. Values can also be formatted from the Values column pill.
  * **Scale Type** - the default scale type is Linear; however, a linear scale is not appropriate for data that is spread over a wide range. Use the Logarithmic scale to display numerical data over a wide range of values in a compact way.
  * **Min Range** - set the minimum value for the axis.
  * **Max Range** - set the maximum value for the axis.
  * **Steps** - Depending on how wide the axis range is, the default configuration could display a lot of tick marks, making it hard to read or analyze the chart. Intervals are set to Auto by default, meaning the chart will calculate the appropriate intervals based on the axis scale range and the dataset values. In the example below, we set the step to 100 units, so the chart will display a tick mark every 100 units starting from 0, resulting in only 3 tick marks.
  ![symbol-chart](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Symbol/steps.gif#thumbnail)
  It’s important to keep in mind that when the axis range is vast (e.g., 0 - 10,000,000), setting the “Steps” option to 1 will create 10 million tick marks, causing performance issues on the chart and probably blocking the browser. To avoid this situation, the chart will ignore the defined value and fall back to automatic mode.<br>
* **Category axis** *(normally the X-axis)* 
  * **Label** - give the axis a custom label.
  * **Values** - show or hide values on the axis.
  * **Values Rotation** - if values are enabled, decide how you want them to be displayed.
* **Symbol** - choose between 7 different types of symbol styles (Circle, Square, Diamond, Triangle Down, Triangle Up, X, Cross) depending on the visualization they need.
* **Fill** - decide if you want the symbols on the chart to be filled or outlined.
* **Data Labels** - show or hide the Value labels of your data points.
   * **Borders** - display your values within a frame.
 
### Sorting
Like all XY Charts, you can sort by either the category or aggregated values from the column pills. If the column is not included in the chart, go to the **Sorting** section of the Configuration Panel and pick your desired column from the dropdown, and select the sorting direction.
 
Read more about Sorting in <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/sorting" target="_blank">this article</a>.
 
### Layers
Add a <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/layers#trend-line" target="_blank">Trend Line</a> or a <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/layers#reference-line" target="_blank">Reference Line</a> to your chart to allow users to visually compare the data against some set trend or reference value.
 
### Format
The <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/format#small-multiples" target="_blank">Small Multiples</a> feature is available in all XY Charts.
You can apply <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/format#conditional-formatting" target="_blank">Conditional Formatting</a> to your Symbol Chart.
 
### Filters
You can also add Filters to your data by expanding the Filters section in the configuration panel or by clicking on the Filters button in the toolbar above the canvas.
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. To read more about different types of filters, go to the <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/chart-filters" target="_blank">Filters</a> article.
 
 
For more on Symbol Charts and other XY charts, we recommend watching <a href="/docs/video-training/building-qrvey-sample/xychart" target="_blank">this video</a>.
 
</div>