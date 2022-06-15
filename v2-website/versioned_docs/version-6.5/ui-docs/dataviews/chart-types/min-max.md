---
id: min-max-charts
title: Min/Max Chart
sidebar_label: Min/Max Chart
---

<div style={{textAlign: "justify"}}>

A Min/Max chart shows the *Minimum, Maximum*, and *Average* values of a selected measure. These charts are best used for showing the range of a measure, like minimum and maximum temperature recorded for each day of the month. The most common use cases are for healthcare measurements (temperature, heart rate, oxygen levels, etc), or for “sensor” use-case for IoT devices where the chart creator’s main interest is to show the Min/Avg/Max each minute or hour, for example.
 
 ![min-max](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Min-Max/minmax.png#thumbnail)


## Creating a Min/Max Chart
To create a Min/Max Chart, you need one column as Category and another one as Values.
In the example below, we want to show the minimum, maximum, and average wine prices for each country in the data. 
We drag and drop *country* as **Category** and *price* as **Values**. In the **General** section, we checked the *Display Average* box and decided to hide the labels in the **Styles** section to make the chart clearer to read. We can see the minimum, maximum, and average price in the tooltip when hovering over a data point. 

 ![min-max](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Min-Max/create.gif#thumbnail)


## Styling the Min/Max Chart
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your chart.

### General
* **Tooltips** - enable or disable <a href="/docs/ui-docs/dataviews/chart-builder/tooltips" target="_blank">Tooltips</a>.
   * To show more than one value on mouseover, click on **+Add Column**:
       * **Column** - pick a value from the dropdown list. This can be any column, even if it is not used in the chart.
       * **Display Values As** - choose the aggregation type for each additional column you’d like to display in the tooltip (Sum, Average, Median, Count, Distinct Count, Minimum, Maximum).
       * **Values Format**- set the format of the values on the scale choosing between Default, Abbreviated, Decimal (set a number of decimals), Currency (choose the currency from the drop-down menu and set a number of decimals), Percentage (set a number of decimals), Scientific.
       * **Remove** - remove the tooltip column.
   * **Header** - add a header to the tooltip.
* **Max Data Points** - set the upper limit of the data points you’d like to show in your chart. Controlling the number of data points helps you manage the clarity and organization of the chart - if you have too many data points, the chart can quickly become unreadable.

### Styles
* **Color Type**
   * **Single** - all data points are the same color. 
       * **Color** - change the color of the data points.
   * **By category** - each data point is colored based on its category.
       * **Theme** - set one of the predetermined themes for a more unified look of your charts.
       * **Match colors across charts** - unify the colors of each categorical value throughout the page and application.
* **Axis Labels** - Show or hide the labels of the axes.
* **Orientation** - Choose between the vertical or horizontal orientation of the chart. 
* **Values axis** *(typically y axis)*
   * **Label** - give the axis a custom label.
   * **Values** - show or hide values on the axis.
   * **Values Rotation** - if value labels are enabled, decide how you want them to be displayed. You can use this option to avoid overlapping labels.
   * **Format** - set the format of the values choosing between *Default, Abbreviated, Decimal* (set the number of decimal points), *Currency* (choose the currency from the drop-down menu and set the number of decimal points), *Percentage* (set the number of decimal points), *Scientific*. Values can also be formatted from the Values column pill.
   * **Scale Type** - the default scale type is Linear; however, a linear scale is not appropriate for data that is spread over a wide range. Use the Logarithmic scale to display numerical data over a wide range of values in a compact way.
   * **Min Range** - set the minimum value for the axis.
   * **Max Range** - set the maximum value for the axis.
   * **Steps** - Depending on how wide the axis range is, the default configuration could display a lot of tick marks, making it hard to read or analyze the chart. Intervals are set to Auto by default, meaning the chart will calculate the appropriate intervals based on the axis scale range and the dataset values.
   ![min-max](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Min-Max/steps.gif#thumbnail)
   It’s important to keep in mind that when the axis range is vast (e.g., 0 - 10,000,000), setting the “Steps” option to 1 will create 10 million tick marks, causing performance issues on the chart and probably blocking the browser. To avoid this situation, the chart will ignore the defined value and fall back to automatic mode.
* **Line Thickness** - set the line as thin, normal, or bold.
* **Line Style**- display the line in solid, dashed, or dotted style.
* **Symbol** - Users can choose between 7 different types of symbol styles (*Circle, Square, Diamond, Triangle Down, Triangle Up, X, Cross*) depending on the visualization they need.
* **Fill** - decide if you want the symbols on the chart to be filled or outlined.
* **Line Opacity** - Set the degree of the line opacity from solid to more opaque to see the map behind it better. 
* **Data Labels** - show or hide the Value labels of your data points.
  * **Borders** - display your values within a frame. 


### Sorting
Like all XY Charts, you can sort by either the category or aggregated values from the column pills. If the column is not included in the chart, go to the **Sorting** section of the Configuration Panel and pick your desired column from the dropdown, and select the sorting direction.

Read more about Sorting in <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/sorting" target="_blank">this article</a>. 
 
### Layers
Add a <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/layers#trend-line" target="_blank">Trend Line</a> or a <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/layers#reference-line" target="_blank">Reference Line</a> to your chart to allow users to visually compare the data against some set trend or reference value.


### Format
The <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/format#small-multiples" target="_blank">Small Multiples</a> feature is available in all XY Charts.
You can apply <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/format#conditional-formatting" target="_blank">Conditional Formatting</a> to your Min/Max Chart.

### Filters
You can also add Filters to your data by expanding the **Filters** section in the configuration panel or by clicking on the Filters button in the toolbar above the canvas.
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. To read more about different types of filters, go to the <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/chart-filters" target="_blank">Filters</a> article.


For more on Min/Max Chart and other XY charts, we recommend watching <a href="/docs/video-training/building-qrvey-sample/xychart" target="_blank">this video</a>.



</div>