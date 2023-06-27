---
id: chart-type-bullet-gauge
title: Bullet Gauge
sidebar_label: Bullet Gauge
tags: [Data Analyst]
sidebar_position: 13
---

<div style={{textAlign: "justify"}}>

Bullet Chart is used to illustrate progress toward a threshold. The qualitative ranges are displayed as different colors that can be customized, for example, to show the performance as poor, satisfactory, or good. 

![bullet](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Bullet/bullet.png#thumbnail-60)

1. Legend
2. Bullet
3. Target
4. Thresholds

## Creating a Bullet Gauge
To create a Bullet Gauge you need a data field that is aggregated and displayed using the bullet. This data field is used in the **Values** shelf. Any number of ranges can be defined as **Thresholds** and an optional date column can be picked in the **Comparison** section to compare the value between two date periods.

In the example below, we want to see if sales have reached the goal we had set for the first quarter. We drag and drop *Total Sales* column as **Values**, and then we set a **Threshold** value for Q1 and changed the color of it. We continue by dragging the *shippedDate* column to the **Comparison** section and set the comparison to today. In **Styles** we change the Indicator from the default *Comparison* to *Custom* where we configure the indicator to the goal for Q2.

![bullet](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Bullet/create.gif#thumbnail)

## Styling the Bullet Gauge
In the Configuration Panel on the right side of the Chart Builder, you can style different aspects of your chart.

### General
* **Tooltips** - enable or disable [Tooltips](../tooltips.md). With Tooltips enabled, you can for example show the Quantity of sold products for the Total Price metric. 
  * To show more than one value on mouseover, click on **+Add Column**:
      * **Column** - pick a value from the dropdown list. This can be any column, even if it is not used in the chart.
      * **Display Values As** - The indicator chart only displays one value so you need to choose the aggregation type for each additional column you’d like to display in the tooltip (Sum, Average, Median, Count, Distinct Count, Minimum, Maximum).
      * **Values Format**- set the format of the values on the scale choosing between *Default, Abbreviated, Decimal* (set a number of decimals), *Currency* (choose the currency from the drop-down menu and set a number of decimals), *Percentage* (set a number of decimals), *Scientific*.
      * **Remove** - remove the tooltip column.
  * **Header** - add a header to the tooltip.
* **Fixed Scale** -  The range of the gauge is determined automatically, based on the data. You can choose to set the range manually, by choosing the Fixed Scale option and entering a *Minimum* and a *Maximum* value for the two ends of the range. 


### Comparison
In the Comparison section, you can choose a date (dragged into the **Date Column** field) to compare the value of the selected column, aggregated over the time period of your choice (set from the **Time Period** dropdown) to the same value from another time period (set in the Comparison dropdown). 

The **Time Period** and **Comparison** date periods can be picked from predefined values in their respective dropdown lists, or set to custom ranges (the last option in each dropdown). 
* **Time Period** - the period over which you want the indicator value to be aggregated. For example “Sales of the Last Quarter”.
* **Comparison** - the period you want the indicator to compare the Time Period to. 
* **Type** - display the higher/lower difference in the tooltip in either percent format or as the actual numeric value.


### Thresholds
Bullet Charts enable setting any number of **Thresholds**, which are defined numerical ranges with a color-coded classification for the computed metric. Each threshold is defined by criteria. For example, when showing the temperature, you can decide that the range below 50 shall be called “Cold” and be depicted in blue, the range between 50 and 75 will be “Warm” and colored yellow, and numbers above 75 be called “Hot” and colored red.
* **Color** - pick a color for the threshold.
* **Label** - give your threshold a custom label.
* **Operator** - choose the operator for the criteria. 
* **Value** - set the value for the criteria.
* **Remove** - remove the threshold.

![bullet](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Bullet/thresholds.png#thumbnail-40)


### Styles

* **Bullet Color** - change the color of the bullet.
* **Threshold Opacity** - decrease the opacity from the default 100% or by typing a number in the box, and decide how opaque you want your threshold to appear in contrast with the target and the needle.
* **Target Indicator** - here you can choose how to show the target computed in the <a href="#comparison">Comparison</a> section:
  * **Comparison** - the comparison value.
  * **Custom**  - set a custom **Target Value** with a custom **Target Label**. 
* **Target Color** - choose the color of the target.
* **Format** - set the format of the values on the scale choosing between *Default, Abbreviated, Decimal* (set a number of decimals), *Currency* (choose the currency from the drop-down menu and set a number of decimals), *Percentage* (set a number of decimals), *Scientific*.
* **Show Animation** - when checked the bullet moves from the minimum scale to the target; when unchecked the bullet statically appears at the target value.

## Filters
You can also add Filters to your data by expanding the Filters section in the configuration panel or by clicking on the Filters button in the toolbar above the canvas.
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. For more information, see [Filters](../configure-charts/chart-filters.md).

For more on the Bullet Gauge and other KPI Charts, we recommend watching <a href="/docs-v2/video-training/legacy/kpi.md" target="_blank">this video</a>..



</div>
