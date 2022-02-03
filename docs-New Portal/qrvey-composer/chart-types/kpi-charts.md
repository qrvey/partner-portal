---
id: kpi-charts
title: KPI Charts
sidebar_label: KPI Charts
---

<div style={{textAlign: "justify"}}>

Key Performance Indicator (KPI) Charts show you measurable values to show how effectively objectives are being achieved. KPI Charts or Metrics are a good choice if you need to visualize a <u>single value</u> only, like for example, you want to show information about sales growth or customer satisfaction. There are three types of KPI charts to choose from in the Chart Builder. 

## Indicator 
Indicator Chart displays a single aggregated metric with the option to compare against the same metric from a different time period.

![kpi](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-types/kpi-charts/kpi_1.png#thumbnail-60)  


1. Set metrics
2. Comparison 

## Dial  
Dial Chart uses a needle to show where a value is positioned within a range. The value for each needle is read against the colored data range or chart axis. This chart type is commonly used in dashboard reports to show key business indicators.

![kpi](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-types/kpi-charts/kpi_2.png#thumbnail-60)  


1. Legend
2. Thresholds
3. Needle

## Bullet  
Bullet Chart is used to illustrate progress towards a threshold. The qualitative ranges are displayed as different colors that can be customized, for example, to show the performance as poor, satisfactory, or good. 

![kpi](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-types/kpi-charts/kpi_3.png#thumbnail-60)  


1. Legend
2. Bullet
3. Target
4. Thresholds


To create a KPI Chart, go to Chart Builder’s Configuration Panel and select one of the chart types mentioned above.

![kpi](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-types/kpi-charts/kpi_4.png#thumbnail-40)  


Next, select the dataset field that contains the values that will be aggregated for the computed metric and drop it either directly on the Canvas or onto the **Values** shelf. 

![kpi](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-types/kpi-charts/kpi_5.png#thumbnail)  


Your KPI value will appear on the Canvas and with the default aggregation set to *Sum*. You can change aggregation by clicking on the three-dot menu on the shelf and choosing a different aggregation type from the dropdown list:
* Sum
* Average
* Median
* Count
* Distinct Count
* Minimum
* Maximum

>**Note**: You can also opt for a category type field in the **Values** shelf and set the aggregation to Count. Read more about *Aggregate Values* in the <a href="">Formulas and Aggregates article</a>. 


## General 

In the **General** section of the Configuration Panel, you can enable or disable <a href="/docs/qrvey-composer/chart-builder/tooltips" target="_blank">Tooltips</a>. Tooltips are used to show more than one metric value on mouseover. With Tooltips enabled, you can for example show the *Quantity* of sold products for the *Total Price* metric. Pick a value to show in the tooltip from the Column dropdown list. If you simply want to show a single metric value, uncheck the **Tooltips** box. 

![kpi](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-types/kpi-charts/kpi_6.png#thumbnail)  


The indicator chart only displays one value so you need to choose the aggregation type for each additional column you’d like to display in the tooltip. Each tooltip column allows you to set the value format.  (percentage, scientific,...) and decimal places. You can remove the column by clicking **Remove**.

In Dial and Bullet charts, you can also turn on Legends to explain which color represents which data on the chart scale, and set a *Fixed Scale* with the *Minimum* and *Maximum* of your choice. 

## Comparison
In the Comparison section, you can compare one KPI from one time dimension to a KPI from another time dimension by dragging a single date field from the **Categories** list to the **Date Column**. 
You can choose the **Time Period** you want to compare your metrics to from the dropdown menu and display the higher/lower difference in the tooltip in either percent format or as the actual numeric value.

![kpi](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-types/kpi-charts/kpi_7.png#thumbnail-40)  


## Thresholds
Dial and Bullet charts enable setting a Threshold, which is a defined numerical range with a color-coded classification for the computed metric.
Here you can choose the color of the threshold, give it a custom name and determine the operator and its value. You can delete the created threshold by clicking on **Remove**. 

 ![kpi](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-types/kpi-charts/kpi_8.png#thumbnail-40)  


## Styles
In the Styles section, you can choose the format of the main KPI value you want to show. By default, the value is shown exactly as it was computed, but you can change it to show an <a href="/docs/qrvey-composer/chart-builder/chart-builder-overview" target="_blank">abbreviated number, decimals, currency, percentage, or the scientific format</a>.  

Here you can also enable or disable **Show Animations** in the chart, making the needle or the bullet move towards its target or the indicator ticking up to its target value.

Enable or disable **Show Comparison** and choose the color you’d like to represent your comparison on the chart and configure comparison details in Comparison.

### Indicator Styles
In the Indicator Chart, you can change the color of the font and the font style. By default, the font size and pixels are determined by the size of its container so if you want to manually set the size, uncheck **Automatic Resize** and choose the font size you would like.

![kpi](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-types/kpi-charts/kpi_9.png#thumbnail-40)  

### Dial Styles
Set the color of the needle to fit the overall look of your application.
 
You can change the **Circle Size** from a quarter of a circle to a full circle, and decide between a solid or an angular **Gauge Style**.

![kpi](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-types/kpi-charts/kpi_10.png#thumbnail-60) 

Set the level of **Threshold Opacity** by clicking on the arrow to decrease the opacity from the default 100% or by typing a number in the box, and decide how opaque you want your threshold to appear in contrast with the target and the needle.

![kpi](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-types/kpi-charts/kpi_11.png#thumbnail-40) 

### Bullet Styles
In the Styles section of the Bullet Chart, you can change the color of the bullet as well as the color of the Target.
 
Set the level of **Threshold Opacity** by clicking on the arrow to decrease the opacity from the default 100% or by typing a number in the box, and decide how opaque you want your threshold to appear in contrast with the target and the bullet.

By default, the **Target Indicator** is set to *Comparison*, meaning it points at the period computed for the comparison field’s time period, but it can be changed to *Custom* where you can set the Value you want the target to show on the scale.
                              
![kpi](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-types/kpi-charts/kpi_12.png#thumbnail-40) 

## Filters
You can also add Filters to your metrics by expanding the Filters section in the configuration panel or by clicking on the **Filters** button in the Toolbar above. Read more about filters and their purpose in this article <a href="/docs/qrvey-composer/filters/introduction-to-filters" target="_blank">here.

</div>