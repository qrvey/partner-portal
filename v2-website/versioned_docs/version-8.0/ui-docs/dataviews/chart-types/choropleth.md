---
id: choropleth-map
title: Choropleth Map
sidebar_label: Choropleth Map
---

<div style={{textAlign: "justify"}}>

Choropleth maps are a type of heatmap and are suitable for visualizing geographical divides of areas or regions, shaded in relation to the aggregated values. Usually, the darker, more intense colors are associated with larger data values. These are best for visualizing how a measurement varies across various geographical regions. For example, showing ranges of income across different zip codes, or ranges in the number of organ donors across different countries. The region over which analysis is run has to be picked. Choropleth Map supports all countries, along with the US states and cities.

![choropleth](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Choropleth/choropleth.png#thumbnail)


## Required Columns
Choropleth maps use one geolocation column to determine regions on the map, and a value column to be measured in those locations. 
Before you can create a Map Chart, your data needs to be prepared for the correct use of maps which is done by adding a *Geolocation* to your data.
Every Map Chart needs at least one geolocation group to identify the parts of an address that will be used for positioning locations on the map. This can be set in the **Design** section of **Datasets**. It's important to define these groups correctly for accurate map locations.

Read more about setting geolocation [here](../../../ui-docs/datasets/datasets.md#setting-up-geolocation-groups).

## When to Use It
The type of analysis that can be best performed with a choropleth map usually involves the variations of a measure over its range and geographical regions. The questions that lead to choosing a choropleth map for visualization are “How does each [geolocation] fare against others in terms of [measure]?” or “In which range of [measure] does each [geolocations] fall?” Examples of this type of analysis include:
* “How does the average amount of rainfall in each state compare to each other?” Or “Which states get more rainfall than others?”
* “Where, in the range of far left to far right, does each zip code’s voting statistics fall?”

Note that the question is never “how may”, or “how much”. For getting definite numbers that are the answers to such questions, use a [Bubble Map](../../dataviews/chart-types/bubble-map).

## Creating a Choropleth Map

To create a Choropleth Map, drag and drop a data field from a geolocation group into the **Geolocation** shelf and a measure as the **Values** field. The data in the selected measure will be divided into 5 equal ranges by default and each range associated with a color from the color sequence of the selected theme. Each region of the selected geolocation column is colored according to where it falls in the range of the selected measure. 

In the case below, we want to compare sales in US cities. We drag and drop *country* as **Geolocation**, and *quantity* as **Values**. Then we go to the **General** section to add *Total Price* to the **Tooltip** and choose *Currency* as the **Values Format**. In the **Styles** section, we set the *Theme* that matches our visualization needs. Note that it may make better sense to use a theme with a gradient in many heatmap cases.  


![choropleth](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Choropleth/create.gif#thumbnail)


## Styling the Choropleth Map 
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your map.

### General
* **Legends** - show or hide the legend explaining which color represents which Value.
* **Tooltips** - enable or disable [Tooltips](../../chart-builder/tooltips.md).
 * To show more than one value on mouseover, click on **+Add Column**:
     * **Column** - pick a value from the dropdown list. This can be any column, even if it is not used in the chart.
     * **Display Values As** - choose the aggregation type for each additional column you’d like to display in the tooltip (Sum, Average, Median, Count, Distinct Count, Minimum, Maximum).
     * **Values Format**- set the format of the values on the scale choosing between Default, Abbreviated, Decimal (set a number of decimals), Currency (choose the currency from the drop-down menu and set a number of decimals), Percentage (set a number of decimals), Scientific.
     * **Remove** - remove the tooltip column.
 * **Header** - add a header to the tooltip.
* **Max Data Points** - set the upper limit of the data points you’d like to show in your Choropleth map. Too many data points can have an adverse effect on the map’s performance.

### Styles
* **Theme** - Set one of the predetermined themes for shading your regions. In most cases, it makes sense to use a gradient spectrum for a choropleth map. 
* **Map Region** - Choose one of the predetermined areas as the initial view of the map -- you can always zoom in or out of the chosen area.
* **Map Borders** - Show or hide country and region borders on your map.  
* **Custom Scale** - By default, the choropleth map divides the range of data, from the smallest value to the largest, into 5 equal buckets and assigns each one color from a spectrum of five. You can change which range of data to depict in the heatmap by choosing the lower and upper limit, and decide how many buckets to break the range into, by choosing the Color Steps:
  * **Color Steps** - the number of different colors used in the chart.
  * **Min Range** - set the minimum of the Values data field you want to show.
  * **Max Range** - set the maximum of the Values data field you want to show.
* **Reversed Colors** -  Reverse the sequence of the colors applied from the theme.
* **Data Labels** -  Show or hide value labels of your data points.

### Format
You can apply [Conditional Formatting](../../dataviews/chart-builder/chart-configuration/format.md#small-multiples#conditional-formatting) to Choropleth Maps.

### Filters
You can also add Filters to your data by expanding the Filters section in the configuration panel or clicking on the Filters button in the toolbar above the canvas. 
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. To read more about different types of filters, go to the [Filters](../../dataviews/chart-builder/chart-configuration/chart-filters.md) article.



For more on Choropleth Maps and other Map charts, we recommend watching <a href="/docs/video-training/building-qrvey-sample//docs/video-training/building-qrvey-sample/map-chart" target="_blank">this video</a>.




</div>