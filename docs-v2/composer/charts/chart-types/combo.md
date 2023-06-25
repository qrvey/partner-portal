---
id: combo-charts
title: Combo Chart
sidebar_label: Combo Chart
---

<div style={{textAlign: "justify"}}>

Combo Charts allow users to layer multiple XY Charts ([Bar Chart](../chart-types/bar.md), [Line Chart](../chart-types/line.md), and [Symbol Chart](../chart-types/symbol.md)) over each other, in a single chart area. The charts can be of the same, or different types. Combo Charts consist of one shared dimension or **Category**, and multiple measures or **Values** and are used to compare different metrics grouped by the same category - for example, showing the total sales amount of each product layered over the same product quantities. 

![combo](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Combo/combo1.png#thumbnail) 



When multiple values are added to the Values shelf, each value field can be visualized as a different X/Y Chart and each chart’s visual representation can be customized in [Styles](../chart-builder/chart-configuration/styles.md) where each added Value appears with further configuration options.

**Values** and **Other Values** can also be formatted directly from the Column Pill by clicking on the three-dot menu and choosing the desired **Values Format**.

## Creating a Combo Chart
Combo Charts are used when you want to present multiple values for a single category. 
To create a Combo Chart, drag and drop a data field from the Data Panel onto either the corresponding shelf or the canvas. 

In the case below, we wanted to show how the total sales (*priceTotal*), as well as the total number of items sold (*quantityOrdered*) and the number of stocked items (*quantityInStock*) changed throughout the years. We dragged and dropped *orderDate* as **Category**, *priceTotal* as **Value** and *quantityInStock* and *quantityOrdered* as **Other Values**. We changed the visualization of *priceTotal* to line for more contrast.

![combo](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Combo/combo2.gif#thumbnail) 


## Styling the Combo Chart
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your chart.

### General
* **Legends** - show or hide the legend describing which color has been used to depict each selected value.
* **Tooltips** - enable or disable [Tooltips](../tooltips.md) to show more than one value on mouseover. 
    * **Click on +Add Column** to add a column. 
        * **Column** - pick a column from the dropdown list. This can be any column, even if it is not used in the chart.
        * **Display Values As** - choose the aggregation type for each additional column you’d like to display in the tooltip (*Sum, Average, Median, Count, Distinct Count, Minimum, Maximum*).
        * **Values Format** - set the format of the values on the scale choosing between Default, Abbreviated, Decimal (set a number of decimals), Currency (choose the currency from the drop-down menu and set a number of decimals), Percentage (set a number of decimals), Scientific. 
        * **Remove** - remove the tooltip column.
    * **Header** - add a header to the tooltip. 
* **Table Calculations** - add calculations to your Combo Chart. Read more on this [here](../../dataviews/table-calculations.md).
* **Max Data Points** - set the upper limit for the categories that are shown on the x-axis of the combo chart. Controlling the number of symbols helps you manage the clarity and organization of the chart - if you have too many data points, the chart can quickly become unreadable.

### Styles
* **Axis Labels** - Show or hide the labels of the axes. 
* **X-axis**
    * **Label** - give the axis a custom label.
    * **Values** - show or hide values on the axis.
    * **Values Rotation** - if values are enabled, decide how you want them to be displayed.
* **Y-axis**
    * **Values** - show or hide values on the axis.
    * **Values Rotation** - if values are enabled, decide how you want them to be displayed.
* **Bar Width** - manually set the width of the bars. 
* **Type** - Choose whether you want your bars to appear side by side or stacked.
![combo](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Combo/combo3.png#thumbnail) 
* **Data Labels** - Show or hide value labels of your data points.
    * **Borders** - display the data labels values within a frame.
* ***Data Field*** - this section takes the name of the data field in the **Values** and **Other Values** shelves; if for example, your Values is *Price*, then the section will say *Price*. Each section corresponds to one of the selected Value fields and allows the respective chart for that field to be configured.    
![combo](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Combo/combo4.png#thumbnail)
  * **Color Type** - show your chart component in a single color or color each category differently. For example, if your **Value** is *Quantity* and you choose a single color, all *Quantity* values in the chart will be the same color; if you choose one of the predetermined themes, *Quantity* data points will be colored differently for each **Category**.
  * **Color** - choose a color from the color picker. 
  * **Type** - pick bar, line or symbol to represent data from the Values shelf.
  * **Axis Label** - give your Y-axis a custom label.
  * **Axis Format** - set the format of the values choosing between *Default*, *Abbreviated*, *Decimal* (set a number of decimals), *Currency* (choose the currency from the drop-down menu and set a number of decimals), *Percentage* (set a number of decimals), *Scientific*.
  * **Scale Type** - choose the linear scale type if you want to use an equal value to provide equal distance between the data points; use a logarithmic scale (used for displaying numerical data over a very wide range of values in a compact way) for computing data points based on the exponents. 
  * **Min/Max Range** - set the range of values displayed on the Y-axis. This determines the starting and ending values shown on the axis.

### Sorting
Combo Charts can be sorted by their selected category column, or either of the value columns used in them. Choose the column that you wish to sort your chart by, from the dropdown list and select the sorting direction (ascending or descending) from the icons under the dropdown.

For more information, see [Sorting](../sorting.md).   

### Layers
Add a [Trend Line](../configure-charts/chart-layers.md#trend-line) or a [Reference Line](../configure-charts/chart-layers.md#reference-line) to your chart to allow users to visually compare the data against some set trend or reference value.

### Format
Both the [Small Multiples](../configure-charts/chart-format.md#small-multiples) and [Conditional Formatting](../configure-charts/chart-format.md#small-multiples#conditional-formatting) options are available in this chart.

### Filters
You can also add Filters to your data by expanding the **Filters** section in the configuration panel or by clicking on the **Filters** button in the toolbar above the canvas.
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. For more information, see [Filters](../configure-charts/chart-filters.md).


</div>