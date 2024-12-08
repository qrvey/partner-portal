---
id: chart-type-indicator-gauge
title: Indicator Gauge
sidebar_label: Indicator Gauge
tags: [Data Analyst]
sidebar_position: 11
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

The indicator Gauge displays a single aggregated metric with the option to compare against the same metric from a different time period. This form of visualization is best suited to display KPIs.
 
![indicator](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Indicator/indicator.png#thumbnail-60)
 
 
1. Aggregated value
2. Comparison to a date column
 
## Creating an Indicator Gauge
To create an Indicator Gauge you simply need a **Value** you’d like to visualize which you then style further.
 
In the example below, we want to show how total sales since the last noted shipping date are in comparison with today.
We drag and drop the *Total Sales* column as **Values**, changed the **format** to *Currency* in the **Styles** section, and then drag and drop *shippedDate* as **Date Column** in the **Comparison** section.
 
 
![indicator](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Indicator/create.gif#thumbnail)
 
 
## Styling the Indicator Gauge
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your metrics.
 
### General
The General section is available for all chart types, and the options vary depending on the chart selected. For more information on the options, see [General Chart Settings](../09-Configure%20charts/general-chart-settings.md). 

 
### Comparison
In the Comparison section, you can choose a date (dragged into the **Date Column** field) to compare the value of the selected column, aggregated over the time period of your choice (set from the **Time Period** dropdown) to the same value from another time period (set in the Comparison dropdown).
 
The **Time Period** and **Comparison** date periods can be picked from predefined values in their respective dropdown lists, or set to custom ranges (the last option in each dropdown).
* **Time Period** - the period over which you want the indicator value to be aggregated. For example “Sales of the Last Quarter”.
* **Comparison** - the period you want the indicator to compare the Time Period to.
* **Type** - display the higher/lower difference in the tooltip in either percent format or as the actual numeric value.
* **Font Color** - choose the color of the font for the comparison.
* **Font Style** - decide between regular, italic, or bold font style.
* **Font size** -  set the font size manually.
* **Increasing change** - choose a symbol and color to show increasing change.
* **Decreasing change** - choose a symbol and color to show decreasing change.
* **No change** - choose a symbol and color to show there’s no change.
 
![indicator](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Indicator/comparison.png#thumbnail-40)
 
 
### Styles
 The Styles section enables you to control various visual elements of the charts, such as colors, labels, and more. It is available for most chart types, and the options vary depending on the chart selected. For a glossary of all styles, see [Styles](../09-Configure%20charts/chart-styles.md). Style options specific to this chart are listed below. 

* **Format** - set the format of the values on the indicator choosing between *Default, Abbreviated, Decimal* (set a number of decimals), *Currency* (choose the currency from the drop-down menu and set a number of decimals), *Percentage* (set a number of decimals), *Scientific*.
* **Font Color** - choose the color of the font.
* **Font Style** - decide between regular, italic, or bold font style.
* **Automatic resize** - the font size is automatically adapted to the chart frame when you resize it.
* **Font size** -  set the font size manually.
* **Show Animation** - when checked the numbers move from the minimum scale to the value; when unchecked the numbers statically appear at the value.
 
### Filters
You can also add Filters to your data by expanding the Filters section in the configuration panel or by clicking on the Filters button in the toolbar above the canvas.
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. For more information, see [Filters](../09-Configure%20charts/chart-filters.md).
 
For more on the Indicator Gauge and other KPI Charts, we recommend watching <a href="/docs-v2/video-training/legacy/kpi.md" target="_blank">this video</a>..
 
 
 
</div>
