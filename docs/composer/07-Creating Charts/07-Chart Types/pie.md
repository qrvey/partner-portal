---
id: chart-type-pie-charts
title: Pie Chart
sidebar_label: Pie Chart
tags: [Data Analyst]
sidebar_position: 9
displayed_sidebar: getting-started
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
The General section is available for all chart types, and the options vary depending on the chart selected. For more information on the options, see [General Chart Settings](../09-Configure%20charts/general-chart-settings.md).


### Styles
The Styles section enables you to control various visual elements of the charts, such as colors, labels, and more. It is available for most chart types, and the options vary depending on the chart selected. For a glossary of all styles, see [Styles](../09-Configure%20charts/chart-styles.md). Style options specific to this chart are listed below. 

* **Theme** - set one of the predetermined themes for a more unified look of your charts.

* **Match colors across charts** - unify the colors of each categorical value throughout the page and application where the same categories of the same dataset are used.

* **Type** - decide between a Pie or Donut shape for the chart.

* **Data Labels** - enable or disable showing Data Labels, which represent data values from the dataset column assigned to the Value shelf.

* **Values** - when checked, it shows the value of the corresponding segment. 

* **Percentages** - when checked, it shows the percentage of the corresponding segment.

![pie](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Pie/values.png#thumbnail) 


### Format
You can apply [Conditional Formatting](../09-Configure%20charts/chart-format.md#small-multiples#conditional-formatting) to your Pie Chart.

### Filters
You can also add Filters to your data by expanding the **Filters** section in the configuration panel or by clicking on the **Filters** button in the toolbar above the canvas. 
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. For more information, see [Filters](../09-Configure%20charts/chart-filters.md).


For more on Pie Charts and other Percent of Total charts, we recommend watching <a href="/docs-v2/guides/legacy/percent-total-charts.md" target="_blank">this video</a>.




</div>