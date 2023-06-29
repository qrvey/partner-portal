---
id: chart-type-bubble-map
title: Bubble Map
sidebar_label: Bubble Map
tags: [Data Analyst]
sidebar_position: 19
---

<div style={{textAlign: "justify"}}>

Bubble Maps show aggregated values in precise locations with each bubble area being proportional to the value being represented - the higher the value, the bigger the bubble. These are best suited for comparing proportions of values over geographic regions, like for example the sales amount in different locations.
 
![bubble-map](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Bubble-Map/bubble.png#thumbnail)
 
 
## Required Columns
Bubble maps use one geolocation column to determine the location, and a value column to be measured in those locations. 

Before you can create a Map Chart, your data needs to be prepared for the correct use of maps which is done by adding **Geolocation** to your data.
Every Map Chart needs at least one geolocation group to identify the parts of an address that will be used for positioning locations on the map. This can be set in the **Design** section of Datasets. It's important to define these groups correctly for accurate map locations.

Read more about setting geolocation in [Datasets](../../05-Working%20with%20Data/Datasets/02-Design/02-Geolocation/overview-of-geolocation.md).

 
## When to Use It
Bubble Maps are used to visualize the size of a measure in different locations in the data. For example the number of students in each zip code, or the maximum credit granted in each country. The question that leads to choosing a bubble map for visualization is “How much/many [measure] exist within each [geolocation]?”
 
## Creating a Bubble Map
 
To create a Bubble Map, drag and drop a data field from a geolocation group into the **Geolocation** shelf.
 
In the case below, we want to compare sales in US cities. We drag and drop *city* as **Geolocation**, and *Total Sales* as **Values**. Then we go to the Styles section and choose *USA* as **Map Region** to set the US as the initial region that is displayed in the map. We set the **opacity** of the bubble to *70%* to see the map and the clustered symbols a bit better. As our next step, we want to highlight the cities where the sales have been low so we head over to the <a href="#format">Conditional Formatting</a> section and create a condition called *Low Sales* with *Total Sales* as the **Column**, the Operator as less than, and set the **Value** to **10,000**. All cities with sales under $10,000 are now displayed in a red bubble. 
 
![bubble-map](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Bubble-Map/create.gif#thumbnail)
 
 
## Styling the Bubble Map
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your map.
 
### General

* **Tooltips** - enable or disable [Tooltips](../tooltips.md).
 * To show more than one value on mouseover, click on **+Add Column**:
     * **Column** - pick a value from the dropdown list. This can be any column, even if it is not used in the chart.
     * **Display Values As** - choose the aggregation type for each additional column you’d like to display in the tooltip (Sum, Average, Median, Count, Distinct Count, Minimum, Maximum).
     * **Values Format**- set the format of the values on the scale choosing between Default, Abbreviated, Decimal (set a number of decimals), Currency (choose the currency from the drop-down menu and set a number of decimals), Percentage (set a number of decimals), Scientific.
     * **Remove** - remove the tooltip column.
 * **Header** - add a header to the tooltip.
* **Max Data Points** - set the upper limit of the data points you’d like to show in your Bubble Map. Too many data points can have an adverse effect on the map’s performance. 
 
### Styles
* **Color** - Change the color of the bubbles shown on the map.
* **Base Map** - Sets the map mode and layers. The choices are S*treets, Outdoors, Light, Dark, Satellite,* and *Satellite Streets* views.
* **Map Region** - Choose one of the predetermined areas as the initial view of the map -- you can always zoom in or out of the chosen area.
* **Symbol Opacity** - Set the degree of the symbol opacity from solid to more opaque to see the map behind it better.
* **Map Borders** - Show or hide country and region borders on your map. 
 
 
 
### Format
You can apply [Conditional Formatting](../09-Configure%20charts/chart-format.md#small-multiples#conditional-formatting) to Bubble Map Charts.
 
### Filters
You can also add Filters to your data by expanding the Filters section in the configuration panel or clicking on the Filters button in the toolbar above the canvas.
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. For more information, see [Filters](../09-Configure%20charts/chart-filters.md).
 
 
For more on Bubble Maps and other Map charts, we recommend watching <a href="/docs-v2/video-training/legacy/map-chart.md" target="_blank">this video</a>.
 
 

 
 
 
</div>