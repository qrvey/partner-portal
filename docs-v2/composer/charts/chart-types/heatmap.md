---
id: heatmap
title: Heatmap
sidebar_label: Heatmap
---

<div style={{textAlign: "justify"}}>

In broad terms, Heatmaps are forms of visualization that represent data in colors, mapping ranges of values to ranges of colors. With careful selection of the color spectrum used in a heatmap higher values of data may appear “hot” and lower values” can appear “cold”. This concept is used in more specific forms of charts and expanded to serve the needs of the tool that incorporates them. The variation of a heatmap that is incorporated in Qrvey takes a matrix style to facilitate visualizing one value at the intersection of two dimensions.

## Required Columns
Heatmaps require two dimensions and one measure. 
Two categorical data columns are usually used for the two dimensions, with one going into the **Category** shelf and the other into the **Pivot** shelf. If you use one of the numeric value columns for either of these the product will automatically “bucket” the data and use the buckets, instead of using the distinct numeric data values. 

Using *date* columns as dimensions is very common. Date type columns will be grouped by month and year automatically, but you can change the date grouping from the three-dot menu of the column pill in the shelves where you have used them. 

The data fields can also be dragged directly onto the canvas and dropped onto the left-side or bottom areas.
The measure is usually picked from the value data columns and is placed in the **Values** shelf and aggregated as needed. 

## When to Use It
Heatmaps are best suited for cases when you wish to easily spot anomalies in a value that depends on two dimensions of data. For example *sales* (the measure) of various types of wine (one dimension) that are products of different *countries* (the other dimension)”. 
These pieces of data have been charted in the following heatmap. The stark difference in the color of the two cells makes them stand out: the *US pinot noir* and the *French Gewürztraminer*. 

![heatmap](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Heatmap/heatmap.png#thumbnail)


## Creating a Heatmap Chart

![heatmap](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Heatmap/create1.png#thumbnail-40)

To create a Heatmap Chart, choose the chart type from the charts panel and pick your dataset. Decide on the measure and the dimensions that you wish to map and drag the measure to the **Values** shelf and decide which aggregate suits your analytical needs and set that from the three-dot menu. Continue by dragging the category column that represents one of your dimensions onto the **Category** shelf and the other one onto the **Pivot** shelf. It doesn’t matter which dimension is used for the **Category** or **Pivot** shelf, but choosing the data column with fewer distinct values for Pivot keeps the chart narrower and easier to read. At this time the chart will render and you can proceed styling it.

In the example below, we want to see if certain product lines are more popular in each country. In this case our two dimensions of data are clearly the *Product Line* and the *Country*. Since there are fewer product lines than countries that we sell to, *Product Line* has been chosen for **Pivot** and *Country* for **Category**. As for the measure of popularity we can use the number of items that were ordered, captured in the *quantityOrdered* data column. We also choose a color sequence that has a gradient spectrum (as opposed to those that have a random spectrum) in order for the colors to reflect the sequential nature of the numbers in the heatmap and reverse the order so that lower numbers are assigned a lighter color and higher numbers are darker. 

The resulting heatmap reveals the following:
1. Most of our orders are from the US, regardless of the product line (the entire row for the US is darker than the rest of the chart)
2. Classic Cars are our most popular product line, followed closely by Vintage Cars (these are the two darkest cells).
3. Spaniards have roughly the same preference in products as Americans (the same two lines are darker than the rest in Spain)
4. The French also like Classic Cars most, but they prefer Motorcycles to Vintage Cars (Those two are the darker cells in France)
5. We need to increase our marketing budget in Switzerland, as we have very few orders from the country and only from the Classic Cars line (that’s the only colored cell in Switzerland. All the other cells are not colored at all).

![heatmap](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Heatmap/create2.png#thumbnail)


## Styling the Heatmap 
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your chart.

### General
* **Legends**  - show or hide the legend describing each color by category.
* **Sort by** - sort your data either by labels or numeric values in ascending/descending order.
* **Tooltips** - enable or disable [Tooltips](../tooltips.md).
  * To show more than one value on mouseover, click on **+Add Column**:
      * **Column** - pick a value from the dropdown list. This can be any column, even if it is not used in the chart.
      * **Display Values As** - choose the aggregation type for each additional column you’d like to display in the tooltip (*Sum, Average, Median, Count, Distinct Count, Minimum, Maximum*).
      * **Values Format**- set the format of the values on the scale choosing between *Default, Abbreviated, Decimal* (set a number of decimals), *Currency* (choose the currency from the drop-down menu and set a number of decimals), *Percentage* (set a number of decimals), *Scientific*.
      * **Remove** - remove the tooltip column.
  * **Header** - add a header to the tooltip.
* **Max Data Points** - set the upper limit of the symbols you’d like to show in your Heatmap. Controlling the number of symbols helps you manage the clarity and organization of the chart - if you have too many data points, the chart can quickly become unreadable.

### Styles
* **Theme** - Set one of the predetermined themes for shading your regions. In most cases, it makes sense to use a gradient spectrum for a heatmap, so the range matches the range of change in the values. You may use one of such themes that exist by default, or create your own, as discussed in the [Setting Chart Styles](../../dataviews/chart-builder/chart-configuration/styles.md) article.
![heatmap](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Heatmap/style.png#thumbnail-40)
* **X-axis** (pivot)
  * **Label** - give the axis a custom label.
  * **Values Rotation** - if values are enabled, decide how you want them to be displayed.
* **Y-axis**
  * **Label** - give the axis a custom label.
  * **Values Rotation** - if values are enabled, decide how you want them to be displayed.
* **Custom Scale** - By default, the heatmap divides the range of data, from the smallest value to the largest, into 5 equal buckets and assigns each one color from a spectrum of five. You can change which range of data to depict in the heatmap by choosing the lower and upper limit, and decide how many buckets to break the range into, by choosing the *Color Steps:*
  * **Color Steps** - the number of different colors used in the chart.
  * **Min Range** - set the minimum of the Values data field you want to show.
  * **Max Range** - set the maximum of the Values data field you want to show.
* **Reversed Colors** - reverse the sequence of the colors applied from the Theme.
* **Gaps** 
  * **Horizontal Gap** - set the gap distance between columns.
  * **Vertical Gap** - set the gap distance between rows.
* **Data Labels** - Show or hide value labels of your data points.
  * **Format** - set the format of the values choosing between *Default, Abbreviated, Decimal, Currency, Percentage, Scientific*.

### Filters
You can also add Filters to your data by expanding the Filters section in the configuration panel or clicking on the Filters button in the toolbar above the canvas. 
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. For more information, see [Filters](../configure-charts/chart-filters.md).




</div>