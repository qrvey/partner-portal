---
id: pie-charts
title: Pie Chart
sidebar_label: Pie Chart
---

<div style={{textAlign: "justify"}}>

A Pie Chart is essentially a circle divided into slices. The full circle, or “pie” represents 100% of the data points selected. By having categorical data, each slice represents a different category where each slice is proportional to the value it visualizes. Pie charts are the most appropriate when we’re trying to show the proportions of a limited number of subcategories that make up a whole. For example proportions of *Yes, No*, and *Impartial* votes as parts of the entire votes count. While this number is fairly arbitrary, having pie charts with more than 10 slices does not provide a good user experience.

![pie](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Pie/pie.png#thumbnail)

## Creating a Pie Chart
To create a Pie Chart, we need one column as a **Category** and one as **Values**.
In the case below, we want to see the composition of each product line in the entire orders. 
We drag and drop *productLine* as **Category** and *quantityOrdered* as **Values**. We continue styling the chart in the Configuration Panel and changed the shape to donut.

![pie](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Pie/create.gif#thumbnail)



## Styling The Pie Chart
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your chart.

### General 
![pie](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Pie/general.png#thumbnail-40)

* **Legends** - show or hide the legend explaining which color represents which Category.
* **Tooltips** - enable or disable <a href="/docs/ui-docs/dataviews/chart-builder/tooltips" target="_blank">Tooltips</a>.
  * To show more than one value on mouseover, click on **+Add Column**:
      * **Column** - pick a value from the dropdown list. This can be any column, even if it is not used in the chart.
      * **Display Values As** - choose the aggregation type for each additional column you’d like to display in the tooltip (Sum, Average, Median, Count, Distinct Count, Minimum, Maximum).
      * **Values Format**- set the format of the values on the scale choosing between Default, Abbreviated, Decimal (set a number of decimals), Currency (choose the currency from the drop-down menu and set a number of decimals), Percentage (set a number of decimals), Scientific.
      * **Remove** - remove the tooltip column.
  * **Header** - add a header to the tooltip. 
* **Max Slices** - set the upper limit of the slices you’d like to show in your Pie Chart. Controlling the number of slices helps you manage the clarity and organization of the chart - if you have too many slices, the chart can quickly become unreadable.

### Styles
* **Theme** - set one of the predetermined themes for a more unified look of your charts.

* **Match colors across charts** - unify the colors of each categorical value throughout the page and application where the same categories of the same dataset are used.

* **Type** - decide between a Pie or Donut shape for the chart.

* **Data Labels** - enable or disable showing Data Labels, which represent data values from the dataset column assigned to the Value shelf.

* **Values** - when checked, it shows the value of the corresponding segment. 

* **Percentages** - when checked, it shows the percentage of the corresponding segment.

![pie](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Pie/values.png#thumbnail) 


### Format
You can apply <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/format#conditional-formatting" target="_blank">Conditional Formatting</a> to your Pie Chart.

### Filters
You can also add Filters to your data by expanding the **Filters** section in the configuration panel or by clicking on the **Filters** button in the toolbar above the canvas. 
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. To read more about different types of filters, go to the <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/chart-filters" target="_blank">Filters</a> article.


For more on Pie Charts and other Percent of Total charts, we recommend watching <a href="/docs/video-training/building-qrvey-sample/percent-total-charts" target="_blank">this video</a>.


</div>