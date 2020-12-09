---
id: chart-types
title: Chart Types
sidebar_label: Chart Types
---
<div style="text-align: justify">

The following chart types are currently supported by Qrvey. The list is sorted in alphabetical order of the chart type and provides use cases and details about each type.
Metrics have their own section at the end of this document.

## Bar Chart
### Overview
The bar chart presents categorical data with rectangular bars that show heights or lengths in proportion to the values they represent. The bars can be plotted vertically or horizontally.

### When to Use Bar Charts
Bar charts are best suited to compare data between different groups or categories. They are also used to track changes over time.

#### Use Cases
* To show the amount/percentage of a population that attends different types of events during a period of time.

### How to Use Bar Charts
Inside Qrvey, there are different sections where you can create a Bar Chart. For the purpose of this guide, we will use the Chart Builder where a user can create different types of charts. For a general overview of the Chart Builder, please check 
<a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.

To get started, open the chart builder, and a new window will pop up in the center of the screen, as shown below.


![1_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/1_ct.png#thumbnail)

On the right of the window, there is the properties panel. The first section is related to chart type selection, where a user decides which type of chart they want to create. For the purpose of this guide, we will choose the Bar Chart.

![2_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/2_ct.png#thumbnail-40)

After selecting the Bar Chart, the center of the chart builder window will update to reflect the actions required.


At the top of the chart builder, there are 2 fields: Category and Values. You can drag and drop columns from your data panel located on the left side of these fields. In the middle section, you can set a title and a description for the chart. Finally, there is a canvas where the Bar Chart will be displayed once at least one column is dropped as a category or value.


![3_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/3_ct.png#thumbnail)

Users can create two types of Bar Charts:

* **Horizontal Bar Chart**: A user can create a Horizontal Bar chart by dragging and dropping columns from the data panel into the shelves on top of the chart builder. Another way to create a horizontal bar chart is by dragging and dropping columns to the top-table guideline of the canvas that shows a label *Drop column as column* when hovered by the cursor. The horizontal type will always be the default chart. The orientation can be modified from the **Style Configuration** panel on the right side.


![4_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/4_ct.png#thumbnail)

* **Vertical Bar Chart**: Once the Bar Chart is created, the user can change its orientation to Vertical in the Style Configuration panel, in order to create the visualization seen in image 4.

### Properties
Charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you can find a guide through the settings specific for the Bar Chart. 

#### General
* **Sort by**: When enabled, users can sort the values of the column.
* **Tooltips**: Turn on/off tooltips of each data point.
* **Max Data Point**: Set the maximum number of data points in the chart.

#### Styles
* **Color**: Change the color of the chart.
* **Type**: Change the type of the chart (donut and pie).
* **Data Labels**: Turn on/off legends for the chart.
* **Borders**: Turn on/off borders of labels.
* **Shading**: Turn on/off shading of bars.

#### Layers
* Add trend lines or reference lines to the bar chart.

#### Format
* Change the format of the chart visualization to small multiples.

## Box & Whiskers Chart
### Overview
A Box & Whisker chart presents information from a five-number summary. It is especially useful for indicating whether a distribution is skewed and whether there are any potentially unusual observations or outliers in the data set. Box & Whisker charts are also very useful when large numbers of observations are involved and when two or more data sets are being compared.
This chart is used to show the shape of the distribution, its central value, and its variability.

### When to Use It
Box & Whiskers are commonly used in exploratory data analysis. Works to make comparisons between records of different time periods.

### Use Cases
* To compare distributions because the center, spread and overall range are immediately apparent.
* To summarize a set of data measured on an interval scale. 

### How to Use It
In Qrvey Composer, there are different places where you can create a Box & Whiskers chart. For the purpose of this guide, we will use the Chart Builder where a user can create different types of charts.

To get started, open the chart builder, and a new window will open up in the center of the screen, as shown below.

![5_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/5_ct.png#thumbnail)

On the right side of the window, there is the properties panel. The first section is related to chart type selection, where a user can select which type of chart they want to create. Here, we will choose the Box & Whiskers chart.

![6_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/6_ct.png#thumbnail-40)

After selecting the Box & Whiskers chart, the center of the chart builder window will update to reflect the actions required.



At the top of the chart builder, there are 3 fields: *Category, Values,* and *Distribution*. In these fields, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, Box & Whiskers will be displayed on the canvas once at least one dataset column is dropped as a category field or value.


![7_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/7_ct.png#thumbnail)

In a Box & Whisker chart:
* The ends of the box are the upper and lower quartiles, so the box spans the interquartile range.
* The median is marked by a vertical line inside the box.
* The whiskers are the two lines outside the box that extend to the highest and lowest observations. 


### Properties
Charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you can find a guide through the settings specific for the Box & Whiskers chart.

#### General
* **Tooltips**: Turn on/off tooltips of each data point.
* **Max Data Points**: Set the maximum number of data points in the chart.

#### Styles
* **Theme**: Change the theme of the chart.
* **Axis Labels**: Turn on/off axis labels of the chart.
* **Chart Orientation**: Choose the chart orientation between vertical and horizontal.
* **Line Thickness**: Change the thickness of the lines in the chart.
* **Display Outliers**: Turn On/Off the outliers in the chart.
* **Symbol**: Change the type of symbol.
* **Fill**: Change to have the symbol filled or not.
* **Symbol Opacity**: Change the degree of symbol´s opacity.

## Crosstab Chart
### Overview
A crosstab is a data summarization tool that allows structuring, summarizing, and displaying large amounts of data. It is most commonly used to analyze the multiple measures in multiple dimensions at the same time. A crosstab can display totals and subtotals for columns and rows, and it allows users to rearrange the measures and dimensions to get a different view of the data.

### When to Use Crosstab Charts
Crosstabs are commonly used when there are a limited number of categories. The row and column variables in a crosstab can be used interchangeably. The choice of row/column variable is usually dictated by space requirements or interpretation of the results.
Crosstabs are commonly used when you want to create quick reports efficiently, allowing you to analyze the data and arrive at quick decisions. They are also helpful when you want to run online analysis by expanding and collapsing levels of data to focus your results, and drilling down to details from the summary data for areas that interest you.

### Use Cases
* To represent and analyze many categorical variables or nominal measurement scale data.
* For financial reporting.
* To segment data by different variables and calculate totals.
* When the data needs to be aggregated, and sliced for analysis. 

### How to Use Crosstab Charts
In Qrvey Composer, there are different places where you can create a Crosstab Chart. For the purpose of this guide, we will use the Chart Builder with which users can create different types of charts. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.

To get started, open the chart builder, and a new window will pop up in the center of the screen, as shown below.

![8_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/8_ct.png#thumbnail)

On the right of the window, you can find the properties panel. The first section is related to chart type selection, where a user decides which type of chart they want to create. Here, we will choose the Crosstab chart.

![9_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/9_ct.png#thumbnail-40)

After selecting the Crosstab chart, the center of the chart builder window will update to reflect the actions required.




At the top of the chart builder, there are 3 fields for Rows, Columns and Values. In these fields, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, the Crosstab will be displayed on the canvas once at least one dataset column is dropped as a column field or value.


![10_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/10_ct.png#thumbnail)

Users can add subtotals and change the aggregates depending on their needs.

By adding a second dataset column on the Column or Row shelf, groups will be created so that subtotals can be calculated. These subtotals will be visualized as aggregates like *Sum, Average, Median, Count, Distinct Count, Minimum,* and *Maximum*.


![11_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/11_ct.png#thumbnail)

### Properties
Charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific for the Crosstab chart. 

#### General
* **Labels**: Turn on/off labels for columns and rows.
* **Sort by**: When enabled, users can sort the values of the column.
* **Totals**: Turn on/off totals in the chart.
* **Subtotals**: Turn on/off subtotals in the chart.
Position Set the totals for columns, rows or both.
* **Max Rows/columns**: The maximum number of columns and rows in the chart can be set to improve performance.

#### Styles

* **Color**: Change the color of Rows and Columns headers of the chart.
* **Format**: Change the format of the values visualized in the chart.

## Heatmap
### Overview
Heatmaps visualize data through variations in color, providing an easy-to-understand overview of data. Applied to a tabular format, Heatmaps are good at showing relationships between two variables or revealing patterns. Each cell of the matrix created represents the value of a measure for the intersection of the selected category. The colors represent where the value falls in the range of the measure with darker colors indicating higher values and lighter colors indicating lower ones.

### When to Use It
Heatmap charts are commonly used to display a more generalized view of numeric values. Especially in cases when the user is dealing with large volumes of data, as colors are easier to distinguish and make more sense than raw numbers.

#### Use Cases
* To showcase “hot and cold” zones or data in a table.
* To draw attention to trends.

### How to Use It
Inside Qrvey Composer, there are different places where you can create a Heatmap chart. For the purpose of this guide, we will use the Chart Builder where a user can create different types of charts.

To get started, open the chart builder, and a new window will open up in the center of the screen, as shown below.

![12_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/12_ct.png#thumbnail)

On the right side of the window, we can see the properties panel. The first section is related to chart type selection, where a user can select which type of chart they want to create. Here, we will choose the Heatmap chart.

![13_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/13_ct.png#thumbnail-40)

After selecting the Heatmap chart, the center of the chart builder window will update to reflect the actions required.



At the top of the chart builder, there are 3 fields for *Categories, Values*, and *Pivot*. In these fields, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, the Heatmap will be displayed on the canvas once at least one dataset column is dropped as a category field or value.


![14_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/14_ct.png#thumbnail)

Users need to add a third dataset column to the pivot shelf in order to complete the creation of the chart. The pivot column will work as a second category on the horizontal axis.

### Properties
Charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific for the Heatmap chart. 

#### General
* **Legends**: Turn On/Off legends in the chart.
* **Sort by**: When enabled, users can sort the values of the column.
* **Tooltips**: Turn on/off tooltips of each data point.
* **Max Data Points**: Set the maximum number of data points in the chart.

#### Styles
* **Theme**: Change the theme of the chart.
* **Custom Steps**: Change the color steps, min and max scales of colors.
* **Gaps**: Change the space between squares.
* **Data Labels**: Turn On/Off data labels in the chart.
* **Format**: Change the format of the values visualized in the chart.

## Line Chart
### Overview
The Line Chart is commonly used to display change over time as a series of data points connected by straight line segments on two axes.

### When to Use It
Similar to Bar charts, Line charts are best suited to track changes over periods of time. These charts show changes of a value over a continuous dimension. Continuity plays an important role in a line chart. Line charts can also be used to compare changes over the same period of time for more than one group.

#### Use Cases
* To show the amount/percentage of change in the population of people who attend one or more events over a period of time.

### How to Use It
Inside Qrvey Composer, there are different places where you can create a Line chart. For the purpose of this guide, we will use the Chart Builder where a user can create different types of charts. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.

To get started, open the chart builder, and a new window will open up in the center of the screen, as shown below.

![15_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/15_ct.png#thumbnail)

On the right side of the window, we can find the properties panel. The first section is related to chart type selection, where a user can select which type of chart they want to create. Here, we will choose the Line chart.

![16_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/16_ct.png#thumbnail-40)

After selecting the Line chart, the center of the chart builder window will update to reflect the actions required.

At the top of the chart builder, there are 2 fields for Category and Values. In these fields, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, the Line chart will be displayed on the canvas once at least one column is dropped as a category or value.


![17_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/17_ct.png#thumbnail)

Users can create five types of Line charts depending on the visualization they need:

* Straight
* Monotone
* Cardinal
* Step Before
* Step After



### Properties
Charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific for the Line chart.

#### General
* **Sort by**: When enabled, users can sort the values of the column.
* **Tooltips**: Turn on/off tooltips of each data point.
* **Max Data Point**: Set the maximum number of data points in the chart.

#### Styles
* **Color**: Change the color of the chart.
* **Axis Labels**: Turn on/off axis labels of the chart.
* **Line Thickness**: Change the thickness of lines.
* **Line Style**: Change the line style choosing between solid, dashed and dotted lines.
* **Line Type**: Change line type.
* **Data Labels**: Turn on/off data labels of the charts.
* **Borders**: Turn on/off borders of labels.

#### Layers
* To add trend lines or reference lines to the bar chart.

#### Format
* To change the format of the chart visualization to small multiples.

## Maps
### Overview
The Geomap chart is a map of a country, continent, or a region, with colors and values assigned to specific regions and addresses. Values are displayed as bubbles or dots with the option of hover text for data points. 

### When to Use It
Bubble Maps are best suited for showing values based on locations in order to compare data of different categories depending on each location. Dot maps are used just to show locations.
#### Use Cases
* To show the amount of sales clustered on different locations based on demographics.

### How to Use It
Inside Qrvey Composer, there are different places where you can create a map chart. For the purpose of this guide, we will use the Chart Builder with which users can create different types of charts. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.

Before getting to the Chart Builder, the data needs to be prepared for the correct use of maps.

![18_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/18_ct.png#thumbnail-40)

When preparing data, the user needs to create a geolocation group to identify parts of an address that will be used for geolocation on a map. It's important to define these groups correctly for accurate map locations.

After setting the geolocation group and loading data, open the chart builder, and a new window will open up in the center of the screen, as shown below.

![19_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/19_ct.png#thumbnail)


On the right side of the window, we can find the properties panel. The first section is related to chart type selection, where a user can select which type of chart they want to create. Here, we will choose either the bubble or the dot map chart.

![20_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/20_ct.png#thumbnail)

After selecting a bubble or dot map chart, the center of the chart builder window will update to reflect the actions required.

#### Bubble Map
At the top of the chart builder, there are 2 fields for Geolocation and Values. In these fields, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, the Bubble Map chart will be displayed on the canvas once at least one column is dropped as Geolocation.

![21_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/21_ct.png#thumbnail)

#### Dot Map
At the top of the chart builder, there is 1 field for Geolocation. In this field, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, the Dot Map chart will be displayed on the canvas once at least one column is dropped as Geolocation. 

By default, dot-maps have clustering enabled allowing you to see a large amount of points clustered based on the position proximity of each point. As you zoom in and out of your clustered map, Qrvey re-calibrates the number of points we can display. If you click a cluster, we automatically zoom in and show individual points (if possible) or sub-clusters.

![22_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/22_ct.png#thumbnail) 

### Properties
Charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific for the Bubble and Dot Map charts.

#### General
* **Legends**: Turn On/Off legends on the map. (Bubble maps only)
* **Tooltips**: Turn on/off tooltips of each data point.
* **Max Data Point**: Set the maximum number of data points in the chart.

#### Styles
* **Color**: Change the Color of bubbles or dots of the chart.
* **Base Map**: Change the terrain visualization of the map.
* **Map Region**: Change the region to visualize.
* **Symbol**: Change the type of symbol. (Dot Maps only)
* **Fill**: Change to filled symbol or not. (Dot Maps only)
* **Symbol Opacity**: Change the degree of symbol´s opacity.
* **Map Borders**: Turn On/Off map borders.
* **Allow Clustering**: Turn On/Off clustering. (Dot Maps only)

## Pie Chart
### Overview
The pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion. In a pie chart, the arc length of each slice is proportional to the quantity it represents. There are variations on the way it can be presented, it can be in the form of a Pie or a Donut.

### When to Use It
Pie charts are best suited when trying to analyze the composition of something. By having categorical data, each slice would represent a different category.

#### Use Cases
* To represent large amounts of data in a simple graphical manner.
* For displaying the promotional distribution of data or to draw an audience of media and business industries.

### How to Use It
Inside Qrvey Composer, there are different places where you can create a Pie chart. For the purpose of this guide, we will use the Chart Builder with which users can create different types of charts.

To get started, open the chart builder, and a new window will open up in the center of the screen, as shown below.

![23_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/23_ct.png#thumbnail)  

On the right side of the window, we can find the properties panel. The first section is related to chart type selection, where a user can select which type of chart they want to create. Here, we will choose the Pie chart.

![24_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/24_ct.png#thumbnail-40) 

After selecting the Pie chart, the center of the chart builder window will update to reflect the actions required.


At the top of the chart builder, there are 2 fields for *Category* and *Values*. In these fields, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, the Pie will be displayed on the canvas once at least one column is dropped as a category or value.


![26_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/26_ct.png#thumbnail) 

Users can create two types of Pie charts:

* **Default Pie**: A user creates a default Pie chart by dragging and dropping columns from the data panel into the shelves on top of the chart builder, as seen in the image above (image 3). Another way to create a simple Pie chart is by dragging and dropping columns into the top-table guideline of the canvas labeled as “Drop column as column” when the cursor is over the table. Pie type will always be the default chart but this can be modified in the Style configuration panel on the right side.




![27_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/27_ct.png#thumbnail) 

* **Donut**: Once the Pie chart is created, the user can change the Type to Donut in the Style configuration panel to have the visualization presented in image 4.

### Properties
Charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific for the Pie chart.

#### General
* **Legends**: Turn on/off legends of the charts.
* **Sort by**: When enabled, users can sort the values of the column.
* **Tooltips**: Turn on/off tooltips of each data point.
* **Max Slices**: Set the maximum number of slices in the chart.

#### Styles
* **Theme**: Change the theme of the chart.
* **Type**: Change the type of the chart between donut and pie.
* **Data Labels**: Turn on/off legends of the charts.

## Symbol Charts

### Overview
The Symbol chart is similar to Bar or Line charts because the data is represented side by side within their respective categories. However, instead of bars or lines, symbols are used to indicate series values. This may help viewers identify highs and lows within their data.

### When to Use It
The use is similar to Bar and Line charts, however, Symbol charts are best used for showing relative values rather than comparing specific data. Another use would be for showing non-aggregated values in order to create scatter plot views.  

#### Use Cases
* To show the registered heart rates over a specific period of time.

### How to Use It
Inside Qrvey Composer, there are different places where you can create a Symbol chart. For the purpose of this guide, we will use the Chart Builder with which users can create different types of charts. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.

To get started, open the chart builder, and a new window will open up in the center of the screen, as shown below.




![28_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/28_ct.png#thumbnail) 

On the right side of the window, we can find the properties panel. The first section is related to chart type selection, where a user can select which type of chart they want to create. Here, we will choose the Symbol chart.

![29_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/29_ct.png#thumbnail-40) 

After selecting the Symbol chart, the center of the chart builder window will update to reflect the actions required.

At the top of the chart builder, there are 2 fields for *Category* and *Values*. In these fields, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, the Symbol chart will be displayed on the canvas once at least one column is dropped as a category or value.

![30_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/30_ct.png#thumbnail) 

Users can create 7 types of symbol charts depending on the visualization they need:
* Circle (default)
* Square
* Diamond
* Triangle Down
* Triangle Up
* X
* Cross


### Properties
Charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific for the Symbol chart.

#### General
* **Sort by**: When enabled, users can sort the values of the column.
* **Tooltips**: Turn on/off tooltips of each data point.
* **Max Data Point**: To set the maximum number of data points in the chart.

#### Styles
* **Color**: Change the Color of the chart.
* **Axis Labels**: Turn on/off axis labels of the chart.
* **Symbol**: Change the type of symbol.
* **Fill**: Change to have the symbol filled or not.
* **Data Labels**: Turn on/off data labels of the charts.
* **Borders**: Turn on/off borders of labels.

#### Layers
* To add trend lines or reference lines to the bar chart.

#### Format
* To change the format of the chart visualization to small multiples.


## Word Cloud 
### Overview
A Word Cloud chart is a visual representation of text data in which the importance or frequency of individual words is represented using font size. The more important or the more frequently used a word is, the larger it appears. This format allows users to spot the most important or frequently used words in a Dataset.

### When to Use It
Word Cloud charts are best suited when trying to analyze the composition of language to help identify what are the most important words or sentiments in a dataset. For business purposes, Word Clouds can be helpful to find customers' pain points.

#### Use Cases
* To depict keyword metadata on websites or to visualize free form text.

### How to Use It
Inside Qrvey Composer, there are different places where you can create a Word Cloud chart. For the purpose of this guide, we will use the Chart Builder with which users can create different types of charts.

To get started, open the chart builder, and a new window will open up in the center of the screen, as shown below.

![31_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/31_ct.png#thumbnail) 

On the right side of the window, we can find the properties panel. The first section is related to chart type selection, where a user can select which type of chart they want to create. Here, we will choose the Word Cloud chart.


![32_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/32_ct.png#thumbnail-40) 

After selecting the Word cloud chart, the center of the chart builder window will update to reflect the actions required.




At the top of the chart builder, there are 2 fields for *Category* and *Values*. In these fields, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, the Word cloud will be displayed on the canvas once at least one column is dropped as a category or value.


![33_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/33_ct.png#thumbnail) 

### Properties
Charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific for the Word Cloud chart.

#### General
* **Sort by**: When enabled, users can sort the values of the column.
* **Tooltips**: Turn on/off tooltips of each data point.
* **Max Data Point**: Set the maximum number of Words in the chart.



## Tables
### Overview
Tables simultaneously show multiple fields directly from your data source in a raw format with the content of each row being logically connected. An unlimited number of grouped and aggregated columns can be accepted allowing users rapid access and relatively easy comparison of data.

### When to Use It
Tables are best suited for running detailed analysis and precise values instead of visualization of values.

#### Use Cases
* When you need the display to look up individual values.
* To compare individual values but not an entire series of values to one another.
* When precise values are required.
* When the quantitative information to be communicated involves more than one unit of measure.
* To include both, summary and detailed values.

### How to Use It
Inside the Qrvey Composer, there are different places where you can create a table. For the purpose of this guide, we will use the Chart Builder with which users can create different types of charts.

To get started, open the chart builder, and a new window will open up in the center of the screen, as shown below.

![34_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/34_ct.png#thumbnail) 

On the right side of the window, we will find the properties panel. The first section is related to chart type selection, where users can select which type of chart they want to create. Here, we will choose the Table.


![35_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/35_ct.png#thumbnail-40) 

After selecting the Table, the center of the chart builder window will update to reflect the actions required.


![36_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/36_ct.png#thumbnail) 

At the top of the screen (1), there are fields for columns and groups. In these fields, you can drag columns from your data source located on the right side of the window and see them appear as a table column in the middle of the screen. In the middle section (2), you can set the title and a description. Finally, in the middle of the screen (3), is where the table is displayed.


![37_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/37_ct.gif#thumbnail) 

Users can create two types of tables:

* **Simple**: A user creates a simple table dragging and dropping fields from the data source into the columns section on top of the window, as described in image 3 above. Another way to create a simple table is by dragging and dropping fields into the top table guideline with the label “Drop column as column” when the mouse hovers over the table, as described in the image below.


![38_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/38_ct.gif#thumbnail) 

In the end, a user can review which fields of the data source are part of the table looking at the top of the window in the columns - group section.


![38_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/38_ct.png#thumbnail) 

If there are duplicate values in any column used in the table, multiple rows will be shown
as duplicate values. In the examples below, the value USA appears twice in the column *country*.

![39_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/39_ct.png#thumbnail) 

* **Grouped**: A user can create this type of table dragging and dropping columns from the data source in the columns and groups section at the top of the window. In this scenario, the table treats fields in the group section as a pivot and fields left in the column section as aggregated values.


![40_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/40_ct.gif#thumbnail) 

Another way to create a grouped table is by using the vertical and horizontal guidelines that appear over the chart when the mouse is hovering over it.


![41_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/41_ct.gif#thumbnail) 

### Properties
Charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific for the Table chart.

#### General
In this section, you will find *Menu Actions* and *Max Groups*.

**Menu Actions** allow users to enable or disable table columns options located on the right side of the column name and identified as three dots icons. The three available options are:

* **Sorting**: When enabled, users can sort the values of the column.

* **Visualization**: When enabled, users can change how they want to visualize the values of that column, the first option is as a value (default), and the second option is as bars. 

**Note**: Visualizations are only available for numeric values.

* **Totals**: When enabled, users can aggregate values of the column in two different ways:
  * ***Count***: The table will count how many values there are in that specific column, and the number will be displayed at the bottom of the column.
  * ***Distinct Count***: The number of unique values in the column displayed at the bottom of the column.
	
The following image shows how **Menu Action** settings work.

![42_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/42_ct.gif#thumbnail) 

### Resizing Columns 
You can  manually modify the Column Sizes of Table Charts by simply dragging  hovering over the header of the column and dragging the column header’s width to the left or right using the marquee tool. 

![43_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/43_ct.gif#thumbnail)  

## Metrics

### Overview

Metrics are a powerful feature that allows you to keep an eye on your most important data at a glance. It can be used by itself or it can be used as a part of a page, report, dashboard, or workflow.

### When to Use It
Metrics are best suited for performance, comparative, qualitative, and quantitative measurements.

#### Use Cases
* To highlight performance against one or more benchmarks.

### How to Use It
In Qrvey Composer, there are different places where you can create a table. For the purpose of this guide, we will use the Chart Builder with which users can create different types of charts.

To get started, open the chart builder, and a new window will open up in the center of the screen, as shown below.











To build your first metric, you can access the Chart Builder from the Analyze tab of the dataset you’d like to use, or from the Page and Report Builder. Select the type of metric you would like to build choosing between *Indicator, Bullet* or *Gauge* and drag a value to the shelf or into the drop zone. 

![42_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/42_ct.png#thumbnail) 

![43_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/43_ct.png#thumbnail) 

As soon as you add the field, the value will be shown and you can continue to style your metric from the Comparison and Styles section on the right side of the panel. 

You can add time comparison options by dragging a date field to the right-side panel in the Date Column area and selecting a time period to compare with from a series of options such as *Last Hour, Today, This month, Last quarter,* and *This year* amongst others.

In the Comparison section, you can also define the styles for fonts and the change value. You can set colors and symbols for *Increasing/Decreasing Change* and *No Change* which will reflect depending on the data. 

![44_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/44_ct.png#thumbnail) 

There are other options to control visual aspects and behavior of the metric like the automatic resizing of the content which will readjust itself to the size of the panel when it’s enabled. When it’s turned off, it will take the defined font size. Another available option is to turn on/off the animation used to display the indicator metric while the data is loading. 

![45_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/45_ct.png#thumbnail-40) 

For Dial and Bullet Gauge style metrics Thresholds can be set. You can choose to provide color-coded ranges for your data. Typically, people use three thresholds for indicating good, bad and in-between ranges for their metrics. You can provide each threshold with a name and assign it a color. 

![46_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/46_ct.png#thumbnail) 


### Bullet Gauge
The bullet metric is used to compare one or more measures to enrich its meaning and displays it in the context of qualitative ranges of performance, such as poor, satisfactory, or good. The qualitative ranges are displayed as different colors that can be customized.

![47_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/47_ct.png#thumbnail) 

#### Properties
Metrics have a set of properties that allows users to customize the aspect and modify the look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for metric settings.

In this section, you will find a guide through the settings specific for Metrics.

#### General
* **Legends**: Turn on/off legends. (Dial, Bullet)
* **Tooltips**: Turn on/off tooltips of each data point. (Dial, Bullet)
* **Fixed Scale**: Turn on/off tooltips of each data point. (Dial, Bullet)

### Comparison
* **Date Column**: Add the date column to visualize the comparison value.

#### Styles
* **Color**: Change the colors of the metric.
* **Font Style**: Change the font style of the values. (Indicator)
* **Automatic Resize**: Turn on/off the resizing of the metric in the panel. (Indicator)
* **Circle Resize**: Change the size of the circle. (Dial)
* **Gauge Style**: Change the gauge style. (Dial)
Threshold Opacity: Change the degree of threshold’s opacity. (Dial, Bullet)
Show Animations:  Turn On/Off the metric animations. 

**Note**: Once turned off, every time a page containing that metric is loaded or new data comes in, the metric will no longer show the default animation.

![48_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/48_ct.gif#thumbnail) 

![49_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/49_ct.png#thumbnail-40) 



## Dial Gauge
Dial Gauge Metrics use needles to show information as a reading on a dial.
The value for each needle is read against the colored data range or chart axis. This chart type is commonly used in dashboard reports to show key business indicators.
 
 ![50_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/50_ct.png#thumbnail) 

## Indicator
An indicator is a qualitative or quantitative variable that provides a simple and reliable means to express achievement, the attainment of a goal, or the results stemming from a specific change. It often aggregates or combines a comparison based on different dates.

 ![51_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/51_ct.png#thumbnail-40) 