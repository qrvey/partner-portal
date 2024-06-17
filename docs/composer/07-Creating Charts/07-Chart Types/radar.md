---
id: chart-type-radar-charts
title: Radar Chart
sidebar_label: Radar Chart
tags: [Data Analyst]
sidebar_position: 9
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

Radar chart, also known as a Polar, Spider, or Web chart, is mainly used to compare the performance of multiple items (values columns) in different areas (category column). The category values are depicted as “poles” of the chart, while the aggregate of the value column in each category is depicted as a point on the pole. In most cases the points are connected with a line to create a polygon.

![Radar-Chart-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-types/Radar-Chart-84.png)

## Creating a Radar Chart
To create a Radar Chart, add one column to the **Category** shelf and any number of columns to the **Values** shelf. The columns may be of any data type, including buckets and formulas. Each Category value is represented using one pole radiating from the center of the chart. 

## Styling The Radar Chart
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your chart.

### General 
The General section is available for all chart types, and the options vary depending on the chart selected. For more information on the options, see [General Chart Settings](../09-Configure%20charts/general-chart-settings.md).  

### Styles
The Styles section enables you to control various visual elements of the charts, such as colors, labels, and more. It is available for most chart types, and the options vary depending on the chart selected. For a glossary of all styles, see [Styles](../09-Configure%20charts/chart-styles.md). Style options specific to this chart are listed below. 

* **Theme**. Set one of the predetermined themes to customize the look of your charts. For more information, see [Setting Chart Colors and Themes](../setting-chart-styles.md).
* **Type**. Select the shape for the chart.
   * **None**. Displays only the data points. 
   * **Line**. Displays lines connecting the data points.
   * **Area**. Displays the lines with shading in the area within the lines. Displays the **Opacity** field, enabling you to set a percentage (10-100%).
* **Line Thickness**. Select a thin, normal, or bold line for your chart.
* **Line Style**. Choose between solid, dashed, or dotted line styles.
* **Min Range**. Set the minimum value for the axis.
* **Max Range**. Set the maximum value for the axis.
* **Steps**. Set an appropriate number of steps to maximize the readability of the chart. Depending on how wide the axis range is, the default configuration could display a high number of intervals, making it hard to read or analyze the chart. Steps are set to Auto by default, enabling the chart to calculate the appropriate intervals based on the axis scale range and the dataset values. 
* **Typeface**. Select the typeface of the labels.
* **Weight**. Select the font weight of the labels.
* **Size**. Select the font size of the labels.
* **Font Color**. Select the font color of the labels.
* **Format**. Set the format of the numerical data (currency, percentage, etc.) displayed in the labels.  
* **Data Labels**. Select whether to display data values from the dataset column assigned to the Value shelf.
* **Borders**. Select whether to display borders around the Data Labels. 
* **Offset**. Determines the offset of the chart. Select whether to configure a manual offset as a Percentage or in Pixels, and enter the desired values in the Left and Top fields. To enable the platform to automatically manage the offsets, click Reset to Default to set the values under Left and Top to Auto. 

### Sorting
Under **Sorting**, select the column to sort by and whether to sort in ascending or descending order. For more information on the sorting features in Chart Builder, see [Sorting](../sorting.md).

### Filters
Add Filters to your data using the Filters section or by clicking on the Filters button in the toolbar. Filters created in Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. For more information on the different types of filters, see [Filters](../09-Configure%20charts/chart-filters.md). 


</div>