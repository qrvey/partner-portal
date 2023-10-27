---
id: chart-type-dial-gauge
title: Dial Gauge
sidebar_label: Dial Gauge
tags: [Data Analyst]
sidebar_position: 12
displayed_sidebar: data-analyst
---

<div style={{textAlign: "justify"}}>

Dial Chart uses a needle to show where a value is positioned within a range. This chart type is commonly used in dashboard reports to show key business indicators.

![dial](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Dial/dial.png#thumbnail)


1. Legend
2. Thresholds
3. Needle

## Creating a Dial Gauge

To create a Dial Gauge you need a data field that is aggregated and shown via the needle. This data field is used in the **Values** shelf. Any number of ranges can be defined as Thresholds and an optional date column can be picked in the **Comparison** section to compare the value between two date periods.

In the example below, we want to see the thresholds our total sales manage to reach.     
We drag and drop the *Sales* column as **Values**, set the **Threshold** values for *Bad, Good* and *Great* sales, and then change the color of the needle and set the **Values** format to *Currency* in the **Styles** section.

![dial](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Dial/create.gif#thumbnail)




## Styling the Dial Gauge
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your chart.

### General
* **Legends** - turn on or off Legends to explain which color represents which data on the chart scale.
* **Tooltips** - enable or disable [Tooltips](../tooltips.md).
   * To show more than one value on mouseover, click on **+Add Column**:
       * **Column** - pick a value from the dropdown list. This can be any column, even if it is not used in the chart.
       * **Display Values As** - choose the aggregation type for each additional column you’d like to display in the tooltip (Sum, Average, Median, Count, Distinct Count, Minimum, Maximum).
       * **Values Format**- set the format of the values on the scale choosing between Default, Abbreviated, Decimal (set a number of decimals), Currency (choose the currency from the drop-down menu and set a number of decimals), Percentage (set a number of decimals), Scientific.
       * **Remove** - remove the tooltip column.
   * **Header** - add a header to the tooltip.
* **Fixed Scale** - The range of the gauge is determined automatically, based on the data. You can choose to set the range manually, by choosing the *Fixed Scale* option and entering a *Minimum* and a *Maximum* value for the two ends of the range. 

### Comparison

In the Comparison section, you can choose a date (dragged into the **Date Column** field) to compare the value of the selected column, aggregated over the time period of your choice (set from the **Time Period** dropdown) to the same value from another time period (set in the **Comparison** dropdown). 

The **Time Period** and **Comparison** date periods can be picked from predefined values in their respective dropdown lists, or set to custom ranges (the last option in each dropdown). 

* **Time Period** - the period over which you want the indicator value to be aggregated. For example “*All History*” or "*This Quarter*" or set a "*Custom Range*".

* **Comparison** - the period you want the indicator to compare the set **Time Period** to. 

* **Type** - display the higher/lower difference in the tooltip in either percent format or as the actual numeric value.

![dial](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Dial/comparison.png#thumbnail-40)



### Thresholds
Dial Charts enable setting any number of *Thresholds*, which are defined numerical ranges with a color-coded classification for the computed metric. Each threshold is defined by criteria. Chart Builder provides two types of Thresholds:
* **Fixed**. A Fixed threshold is a static value. For example, when showing the temperature, you can decide that the range below 50 shall be called “Cold” and be depicted in blue, the range between 50 and 75 will be “Warm” and colored yellow, and numbers above 75 be called “Hot” and colored red. Fixed thresholds also support custom tokens, which set the value of the threshold each time the widget is rendered. For more information, see [Using Custom Tokens](../../../software-developer/04-Embedding%20Qrvey%20Widgets/customTokens.md).
* **Dynamic**. A Dynamic threshold is based on the aggregate of a column in the dataset. For example, displaying the number of users that completed an activity based on the count of all activities. 

![Threshold Fixed](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Dial/threshold-fixed-83.png)

The Threshold options are: 
* **Color**. Choose a color for the threshold.
* **Label**. Give your threshold a custom label.
* **Operator**. Choose the operator for the criteria. 
* **(Fixed) Value**. Set the value for the criteria. To set a custom token, enter `{{` and begin typing the name of the token until it displays in the suggestion box. For more information, see [Using Custom Tokens](../../../software-developer/04-Embedding%20Qrvey%20Widgets/customTokens.md).
* **(Dynamic) Value Column**. Select the column to use to calculate the threshold. 
* **(Dynamic) Value Aggregate**. Set the type of aggregate to use to calculate the threshold. Options are:
    * Average
    * Median
    * Count
    * Distinct Count
    * Minimum
    * Maximum
* **Remove**. Remove the threshold.


 
## Styles

![dial](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Dial/styles.png#thumbnail-40)


* **Needle Color** - change the color of the needle.
* **Circle Size** - You can change the **Circle Size** from a quarter of a circle to a full circle.
* **Gauge Style** - decide between a solid (using a needle as the indicator) or an angular Gauge Style (showing a triangle as the indicator).

![dial](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Dial/needle.png#thumbnail-60)

* **Threshold Opacity** - decrease the opacity from the default 100% or by typing a number in the box, and decide how opaque you want your threshold to appear in contrast with the target and the needle.
* **Show Comparison** - decide if you want to show the comparison configured in the Comparison section.
* **Comparison Color** - pick a color for the comparison value.
* **Format** - set the format of the values on the scale choosing between *Default, Abbreviated, Decimal* (set a number of decimals), *Currency* (choose the currency from the drop-down menu and set a number of decimals), *Percentage* (set a number of decimals), *Scientific*.
* **Show Animation** - when checked the needle moves from the minimum scale to the value; when unchecked the needle appears directly at the value.

## Filters
You can also add Filters to your data by expanding the Filters section in the configuration panel or by clicking on the Filters button in the toolbar above the canvas.
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. For more information, see [Filters](../09-Configure%20charts/chart-filters.md).


For more on the Dial Gauge and other KPI Charts, we recommend watching <a href="/docs-v2/video-training/legacy/kpi.md" target="_blank">this video</a>.


</div>