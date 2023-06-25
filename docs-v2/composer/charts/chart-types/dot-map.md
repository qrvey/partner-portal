---
id: dot-map
title: Dot Map
sidebar_label: Dot Map
---

<div style={{textAlign: "justify"}}>

Dot Maps display the actual geolocation of each record in the dataset as a dot on a map. These are best for detecting patterns or the distribution of data at a precise location (states, cities, street addresses, house numbers, etc.) by placing same-sized points over those locations. 

![dot-map](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Dot-Map/dot.png#thumbnail) 


## Required Columns
Dot maps use one single geolocation column. 

Before you can create a Map Chart, your data needs to be prepared for the correct use of maps which is done by adding **Geolocation** to your data.
Every Map Chart needs at least one geolocation group to identify the parts of an address that will be used for positioning locations on the map. This can be set in the **Design** section of Datasets. It's important to define these groups correctly for accurate map locations.

For more information on geolocation, see "Setting Up Geolocation Groups" in the [Live Connect Datasets](../../../ui-docs/datasets/datasets-live.md#setting-up-geolocation-groups) article.

## When to Use It
Dot Maps are used to visualize the distribution of locations in the data and can highlight the density of data points, especially in large sets of data. For example, the location of individual traffic accidents can draw attention to the areas where the dots are dense, as problem areas. The question that leads to choosing a dot map for visualization always starts with “where”; “Where are my customers concentrated?” or “Where are the households below the poverty line?”

## Creating a Dot Map

To create a Dot Map, drag and drop a data field from a geolocation group into the **Geolocation** shelf.

In the example below we want to see in which countries our customers are concentrated. In order to achieve this, we drag and drop the *Country* column from the geolocation group that we created at dataset design time onto the **Geolocation** shelf. In order to make the dots more visible, we change their color to red, change their symbols to *Filled*, and turn off **Allow Clustering** to see each location individually. 
One glance at the resulting map shows a heavier concentration of customers in Europe.


![dot-map](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Dot-Map/create.png#thumbnail) 


Qrvey dot maps support clustering of locations based on the zoom factor of the map; when zoomed out, the dots that are very close to each other are clumped together as a single dot, and the number of items in the cluster shown on each dot. Subsequently, the cluster “explodes” into smaller and smaller clusters as you zoom in. This is the default behavior and can be changed by turning off the *Allow Clustering* configuration option under the **Styles** section.

If you would like not only to visualize the geolocation but also to add a value to your map to show for example the number of sales, number of customers, or a similar measure in specific areas, you can use a [Bubble Map](../../dataviews/chart-types/bubble-map).

## Styling the Dot Map 
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your map.

### General


* **Tooltips** - enable or disable [Tooltips](../tooltips.md).
  * To show more than one value on mouseover, click on **+Add Column**:
      * **Column** - pick a value from the dropdown list. This can be any column, even if it is not used in the chart.
      * **Display Values As** - choose the aggregation type for each additional column you’d like to display in the tooltip (Sum, Average, Median, Count, Distinct Count, Minimum, Maximum).
      * **Values Format**- set the format of the values on the scale choosing between Default, Abbreviated, Decimal (set a number of decimals), Currency (choose the currency from the drop-down menu and set a number of decimals), Percentage (set a number of decimals), Scientific.
      * **Remove** - remove the tooltip column.
  * **Header** - add a header to the tooltip.
* **Max Data Points** - set the upper limit of the data points you’d like to show in your Dot Map. Too many data points can have an adverse effect on the map’s performance.  

### Styles
* **Color** - Change the color of the dot shown on the map. 
* **Base Map** - Sets the map mode and layers. The choices are S*treets, Outdoors, Light, Dark, Satellite,* and *Satellite Streets* views. 
* **Map Region** - Choose one of the predetermined areas as the initial view of the map -- you can always zoom in or out of the chosen area.
* **Symbol** - choose between 7 different types of symbol styles (*Circle, Square, Diamond, Triangle Down, Triangle Up, X, Cross*) depending on the visualization they need.
* **Fill** - decide if you want the symbols on the chart to be filled or outlined.
* **Symbol Opacity** - Set the degree of the symbol opacity from solid to more opaque to see the map behind it better.
* **Map Borders** - Show or hide country and region borders on your map.  
* **Allow Clustering** - Turn on or off clustering of data points - when the checkbox is empty, the individual data points are shown; when the box is checked, data points within the same geolocation are joined together in a single symbol. 
  * **Data Labels** - Label the dots where more than one geolocation points are clustered together.

  ![dot-map](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Dot-Map/cluster.png#thumbnail) 


### Format
You can apply [Conditional Formatting](../configure-charts/chart-format.md#small-multiples#conditional-formatting) to Dot Map Charts.

### Filters
You can also add Filters to your data by expanding the Filters section in the configuration panel or clicking on the Filters button in the toolbar above the canvas. 
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. For more information, see [Filters](../configure-charts/chart-filters.md). 


For more on Dot Maps and other Map charts, we recommend watching <a href="/docs-v2/video-training/legacy/map-chart.md" target="_blank">this video</a>.





</div>