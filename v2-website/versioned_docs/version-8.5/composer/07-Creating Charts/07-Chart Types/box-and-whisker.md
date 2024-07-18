---
id: chart-type-box-and-whisker-charts
title: Box and Whisker Chart
sidebar_label: Box and Whisker Chart
tags: [Data Analyst]
sidebar_position: 22
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

A Box & Whisker Chart (also called a Box Plot), visualizes the distribution of a set of data in terms of five numbers: the minimum and maximum values on the two ends, the lower quartile, the median, and the upper quartile. It is important to note that the minimum and maximum values are not necessarily the true minimum and maximum values, but minimum and maximum values after excluding the outliers from the data set. You can also choose whether to display the outliers.

![BoxAndWhisker01-80](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/BoxAndWhisker01-80.png)

This form of chart is especially useful for analyzing large amounts of data and indicating whether the distribution is uniform or skewed, and whether there are any unusual observations or outliers in the data set.

![BoxAndWhisker02-80](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/BoxAndWhisker02-80.png)

A Box & Whisker Chart requires only one measure, or column, in order to be rendered. 

## Creating a Box & Whisker Chart

To create a Box & Whisker Chart, choose the Box & Whisker chart type from the charts panel and pick your dataset. Decide on the measure that needs to be analyzed and drag it into the **Values** shelf. Next, decide if you wish to review the distribution of the value for the entire dataset, or divided among a certain group of categories. If a breakdown by category is needed, drag the desired categorical column into the **Category** shelf. 

The example below displays the distribution of global sales using the total price of the order. The **Category** shelf contains the *Country* column and the **Values** shelf contains the *Item Total* column, which represents the sum of all the items in each order.  

![BoxAndWhiskerChart-80](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/BoxAndWhiskerChart-80.png)

Hover over a box to display a tooltip with the following information:
- **Largest**: the highest sales amount in the set
- **Maximum**:  the highest sales amount after the outliers have been removed
- **Q3**: the upper quartile (median of the upper half)
- **Q2 (Median)**: the mean of the two middle two numbers
- **Q1**: the lower quartile (median of the lower half)
- **Minimum**: the lowest amount of sales, after the outliers have been removed
- **Smallest**: the lowest amount of sales.

![BoxAndWhiskerTooltip-80](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/BoxAndWhiskerTooltip-80.png)

## Styling the Box & Whisker Chart
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your chart.

### General
The General section is available for all chart types, and the options vary depending on the chart selected. For more information on the options, see [General Chart Settings](../09-Configure%20charts/general-chart-settings.md).


### Styles
The Styles section enables you to control various visual elements of the charts, such as colors, labels, and more. It is available for most chart types, and the options vary depending on the chart selected. For a glossary of all styles, see [Styles](../09-Configure%20charts/chart-styles.md). Style options specific to this chart are listed below. 

- **Theme** - Choose the color theme used for your chart. Box & Whisker Charts use the first color in the sequence for the lower quartile and the whiskers, the second for the upper quartile, and the third for the outliers.
- **Axis Labels** - Show or hide the labels of the axes. 
- **Chart Orientation** - Choose between the vertical or horizontal orientation of your chart. Vertical is the default value. 
- **Values axis** (*typically Y-axis*)
  - **Label** - Give the axis a custom label.
- **Category axis**  (*typically X-axis*)
  - **Label** - Give the axis a custom label.
  - **Values** - Show or hide values on the axis.
  - **Values Rotation** - If value labels are enabled, decide how you want them to be displayed. You can use this option to avoid overlapping labels.
- **Line/Whisker Thickness** - Set the thickness of the line (*thin*, *normal*, *bold*).
- **Display Outliers** - Show data points that fall outside statistical norms. 
  - **Symbol** - Choose between seven different types of symbol styles (*Circle*, *Square*, *Diamond*, *Triangle Down*, *Triangle Up*, *X*, *Cross*) depending on the visualization they need.
  - **Fill** - Decide if you want the symbols on the chart to be filled or outlined.
- **Opacity** - Set the level of opacity of the box, whisker, and outliers.

### Filters
You can also add Filters to your data by expanding the Filters section in the Configuration panel or by clicking on the Filters button in the toolbar above the canvas. Filters that are created in Chart Builder are hidden from end users. These types of filters can’t be edited or modified in View mode. For more information, see [Filters](../09-Configure%20charts/chart-filters.md). 


</div>