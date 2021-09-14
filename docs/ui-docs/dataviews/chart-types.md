---
id: chart-types
title: Chart Types
sidebar_label: Chart Types
---
<div style={{textAlign: "justify"}}>

The following chart types are currently supported by Qrvey. The list is sorted in alphabetical order of the chart type and provides use cases and details about each type.
<a href="#metrics">Metrics</a> have their own section at the end of this document.

## Bar Chart
### Overview
The bar chart presents categorical data with rectangular bars that show heights or lengths in proportion to the values they represent. The bars can be plotted vertically or horizontally.

### When to Use Bar Charts
Bar charts are best suited to compare data between different groups or categories. They are also used to track changes over time.

#### Use Cases
* To show the amount/percentage of a population that attends different types of events during a period of time.

### How to Use Bar Charts
You can create Bar charts anywhere that the Chart Builder is available. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.

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
All charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you can find a guide through the settings specific to the Bar Chart. 

#### General
* **Sort by**: When enabled, users can sort the values of the column.
* **Tooltips**: Turn on/off tooltips of each data point.
* **Max Data Point**: Set the maximum number of data points in the chart.

#### Styles
* **Color Type**: Add colors to your chart by either choosing: 
  * Single Color - one color is used for all bars.
  * By Category - a different color is applied to each of the categories.
* **Axis Label**: Show/hide labels of the axes.
* **Chart Orientation**: Horizontal / Vertical
* **X-Axis**: Provide a custom label for the X-Axis.
* **Y-Axis**:Provide a custom label for the Y-Axis.
* **Bar Width %**: Set the width of the bars.
* **Data Labels**: Add labels to the top of the bars and choose whether to turn on/off borders of labels.
* **Shading**: Turn on/off shading of bars.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/bar_style.png#thumbnail-40)
 

#### Layers
* Add trend lines or reference lines to the bar chart.

#### Format
* Change the format of the chart visualization to small multiples.


#### Modifying Bar Width and Spacing
Users can adjust the width of the bars in the Bar Chart to customize the look and feel of their chart.
When a bar chart is created, the width of the bars is automatically in proportion to the available space in the chart. 

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/barwidth1.png#thumbnail)


Creators can adjust the “Bar Width” percentage to customize the size of the bars.
When the chart panel increases or decreases, the bars automatically resize in width to grow with the panel and fill up the space.
From the automatic mode, clicking the up arrow should change the value to 100%, and clicking the down arrow should change the value to 1%.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/barwidth2.png#thumbnail-40)

When the Bar Width is set at 100%, the bars appear with no space in between. With any other % number for Bar Width, the percentage is shown in relation to the available space in the panel.


![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/barwidth3.png#thumbnail)
![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/barwidth4.png#thumbnail)
 


> **Note**: The feature allows only integer values. When the fit to panel option is enabled, modifying manually the bar’s width is not available.


## Line Chart
### Overview
The Line Chart is commonly used to display change over time as a series of data points connected by straight line segments on two axes.

### When to Use Line Charts
Similar to Bar charts, Line charts are best suited to track changes over periods of time. These charts show changes of a value over a continuous dimension. Continuity plays an important role in a line chart. Line charts can also be used to compare changes over the same period of time for more than one group.

#### Use Cases
* To show the amount/percentage of change in the population of people who attend one or more events over a period of time.

### How to Use Line Charts
Inside Qrvey Composer, there are different places where you can create a Line chart. For the purpose of this guide, we will use the Chart Builder where a user can create different types of charts. For a general overview of the Chart Builder, please check <a href="/docs/ui-docs/dataviews/chart-builder/"> this section</a>.

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
All charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific to the Line chart.

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


## Symbol Charts

### Overview
The Symbol chart is similar to Bar or Line charts because the data is represented side by side within their respective categories. However, instead of bars or lines, symbols are used to indicate series values. This may help viewers identify highs and lows within their data.

### When to Use Symbol Charts
The use is similar to Bar and Line charts, however, Symbol charts are best used for showing relative values rather than comparing specific data. Another use would be for showing non-aggregated values in order to create scatter plot views.  

#### Use Cases
* To show the registered heart rates over a specific period of time.

### How to Use Symbol Charts
You can create Symbol charts anywhere that the Chart Builder is available. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.

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
All charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific to the Symbol chart.

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

## Funnel Chart
### Overview
A funnel chart demonstrates the flow of data in levels that are narrowing down to help visualize a linear process with sequential connected stages. The chart takes its name from its shape, which starts from a broad head and ends in a narrow neck.

A Funnel graph is similar to a horizontal bar chart. The main difference is that bars are center aligned and axes are not displayed. With this form of visualization, Creators can easily displays how values change through different stages.
 


### When to Use Funnel Charts
Funnel charts are most often seen in business or sales contexts where we need to track how a starting set of visitors or users drop out of a process or flow. This chart shows how the starting whole breaks down into progressive parts.

#### Use Cases
For example, a sales funnel that tracks customers through stages: Lead > Qualified Lead > Prospect > Contract > Close. At a glance, the shape of the funnel conveys the health of the process you're tracking in an easy-to-understand manner
A funnel chart can be used to display Web site visitor trends
To show how many orders are still in process and the percentage of cancelled/returned orders with the initiated orders on top and at the bottom the orders delivered to satisfied customers.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/funnel1.png#thumbnail-60) 

### How to Use Funnel Charts
You can create Funnel charts anywhere that the Chart Builder is available. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.


To get started, open the Chart Builder, and find the Funnel Chart icon in the Charts panel on the right side of the window, as shown below.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/funnel2.png#thumbnail-40)

Funnel Charts need one category and one value column. Drag and drop the desired columns from your data panel onto these fields and adjust the aggregation for the value column, if necessary. In our example above, Stage would be the category column and Leads would be the value field, with Count being the appropriate aggregation. The Funnel Chart is rendered as soon as one column is dropped in the Category or Value shelf. 


### Properties
Funnel charts can be customized using the following properties in the configuration panel.

#### General
* **Sort by**: Choose whether to sort by Label or Value in an Ascending or Descending order.
* **Tooltips**: Funnel charts support custom tooltips. Turn tooltips on/off for each data point using the checkbox.
  * **+Add Column**: Add a column to the tooltip.
  * **Header**: Add a header to the tooltip.
* **Max Data Points**: Set a limit of the funnel levels/stages.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/funnel3.png#thumbnail-40)

#### Styles
* **Color Type**: Choose either a single color for the whole chart of a different color for each stage.
* **Theme**: Pick one of the available color themes.
* **Mode**: By default, Funnel charts present the values using the height of each band. This setting can be changed to use the width of the band for presenting the value by choosing the **Width** option instead of **Height**.

* **Category Labels**: Turn on/off legends of the charts.
  * **Category name**: Shows the name of the category.
  * **Segment names**: Shows the name of the segment/level.
  * **Names Rotation**: Changes the direction of segment names.
  * **Data Labels**: Shows the data labels within the segments.
  * **Values**: Shows the data values within the segments.
  * **Percentages**:Shows the data percentage within the segments.
 
![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/funnel5.png#thumbnail-40)


## Pie Chart
### Overview
The pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion. In a pie chart, the arc length of each slice is proportional to the quantity it represents. There are variations on the way it can be presented, it can be in the form of a Pie or a Donut.

### When to Use Pie Charts
Pie charts are best suited when trying to analyze the composition of something. By having categorical data, each slice would represent a different category.

#### Use Cases
* To represent large amounts of data in a simple graphical manner.
* For displaying the promotional distribution of data or to draw an audience of media and business industries.

### How to Use Pie Charts
You can create Pie charts anywhere that the Chart Builder is available. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.

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
All charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific to the Pie chart.

#### General
* **Legends**: Turn on/off legends of the charts.
* **Sort by**: When enabled, users can sort the values of the column.
* **Tooltips**: Turn on/off tooltips of each data point.
* **Max Slices**: Set the maximum number of slices in the chart.

#### Styles
* **Theme**: Change the theme of the chart.
* **Type**: Change the type of the chart between donut and pie.
* **Data Labels**: Turn on/off legends of the charts.


## Min/Max  
### Overview
A Min/Max chart shows the Minimum, Maximum, and even the Average values of a selected measure. It is especially useful for indicating the distribution of data.

### When to Use Min/Max Charts
Min/Max charts are best used for comparing 2 measures and showing the magnitude of change between the two.

#### Use cases
* The most common use cases are for healthcare measurements (temperature, heart rate, oxygen levels, etc), or for “sensor” use-case for IoT devices where you’re capturing measurements at date/time intervals. Here chart Creators' main interest is to show the Min/Avg/Max each minute or hour, for example.

### How to Use Min/Max Charts
You can create Min/Max charts anywhere that the Chart Builder is available. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.

To get started, open the chart builder, and a new window will open up in the center of the screen, as shown below.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/minmax_1.png#thumbnail) 

On the right side of the window, there is the properties panel. The first section is related to chart type selection, where a user can select which type of chart they want to create. Here, we will choose the Min/Max chart.


![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/minmax_2.png#thumbnail-40) 

After selecting the Min/Max chart, the center of the chart builder window will update to reflect the actions required.


At the top of the chart builder, there are 2 fields: *Category* and *Values*. In these fields, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, Min/Max will be displayed on the canvas once at least one dataset column is dropped on the *Value* field.


![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/minmax_3.png#thumbnail) 

### Properties
Charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.


In this section, you can find a guide through the settings specific to the Min/Max chart.

#### General
* **Sort by**: Enabled only when a column is placed on the “Category” shelf, users can sort the category values of the column.
* **Tooltips**: Turn on/off tooltips of each data point.
* **Display Averages**: Turn on/off to display the average data point in the chart.
* **Max Data Points**: Set the maximum number of data points in the chart.

#### Styles
* **Color**: Change the Color of the chart.
Axis Labels**: Turn on/off axis labels of the chart.
* **Chart Orientation**: Choose the chart orientation between vertical and horizontal.
* **Line Thickness**: Change the thickness of the lines in the chart.
* **Line Style**: Change the line style choosing between solid, dashed and dotted lines.
* **Symbol**: Change the type of symbol.
* **Line Opacity**: Change the degree of the line’s opacity.
* **Data Labels**: Turn on/off data labels of the charts.
* **Borders**: Turn on/off borders of labels.

#### Layers
* To add reference lines to the min/max chart.

#### Format
* To change the format of the chart visualization to small multiples.


## Tables
### Overview
Tables display data in rows of consecutive columns, in a spreadsheet-like format. This form of visualization provides an easy way to view the data in its original form and perform various analytical functions - such as grouping, sorting, and filtering - on it. 

### When to Use Table Charts
Tables are best suited for running detailed analysis of the raw data rather than aggregated visualization of values. Given that they support the display of an unlimited number of columns and rows, the data can be digested and analyzed more effectively at the initial stages of discovery and visualization.

#### Use Cases
* When you need to get a comprehensive view of your raw (unaggregated) data.
* When precise values are required.
* When more pieces of data need to be analyzed than the other common charts can support.
* To include both, summary and detailed values.

### How to Use Table Charts
You can create Table charts anywhere that the Chart Builder is available. 

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
All charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific to the Table chart.

#### General
Some general properties of the Table chart can be determined from this section.

##### Menu Actions 

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/menu_act.png#thumbnail-40)  

From this section you can control the options in the three-dot menu of each column header in the interaction mode.The available options are:

* **Sorting**: When enabled, users can sort the values of the column from the header of each column.

* **Visualization**: When enabled, users can change how they want to visualize the values of that column, the first option is as a value (default), and the second option is as bars. 

**Note**: Visualizations are only available for numeric values.

##### Totals

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/totals.png#thumbnail-40)  

Totals and subtotals can be selected and added from this configuration section to display various aggregates of each column. By default no totals are shown for the table. Click on **+ Add Total** to get the option to choose the columns for which you want to add the totals, as well as which totals and at what level you wish to add.

When a new Total row is added, all forms of totals are automatically added for all of the non-grouped columns.

Unselect the totals that you don’t want to include, from the Total dropdown. If you wish to choose different totals for different columns, add another total, choosing the desired column and the total that you wish to display for it. 

The **Level** dropdown lets you decide if the totals are for the entire table or at the level of a certain group. The option of levels is only enabled if the table has been grouped and results in displaying subtotals.

The following image shows the “sum of Quantity” chosen at both group and table level while “minimum” has been selected as the total for the Price column at the table level.


![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/totals2.png#thumbnail)


##### Table Calculations
With Table Calculations you can add more analytical power to the table charts, creating new columns that calculate running aggregates and other functions on the selected columns of data. <a href="/docs/ui-docs/dataviews/table-calculations">Table Calculations</a> have been discussed in detail in another article.  

##### Aggregated Formulas
Formulas apply to the values of one row of data and their results are presented as new columns for the same row. Standard formulas can be used on the raw data while aggregated formulas do the same thing for data that has been grouped and aggregated for a chart.
Given that distinction, the aggregated formula function is only available in grouped table charts at the moment.

“Aggregated formulas” action item shows up in the action panel only when the table is grouped, otherwise that action item is disabled.

To create calculations across columns on the aggregated values while creating or editing a grouped table (a table that has at least one column in the **Group** shelf): 
1. Click on the “**+ Add Aggregated Formula**” action item.
2. In the “Create Table Formula“ modal window, enter a formula name and the desired formula using the available options, **Test** the formula and click **Save**. You can use any columns of the current context for the construction of the formula.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/formula.png#thumbnail-60) 

3. The new aggregated formula can be edited or removed through the “**Aggregated formulas**“ action item.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/formula2.png#thumbnail-40) 



>**Note**: Only when the table is grouped, the “Aggregated formulas“ action item is displayed in the action panel. If the table is not grouped, this action item is disabled.

##### Allow Pagination and Max Rows
This option is only available for simple (ungrouped) tables and is not selected by default. As a result the number of displayed rows has to be limited to avoid performance implications. Tables can display an unlimited number of rows by turning on the **Allow Pagination** option. With this action, the **Max Rows** option changes to **Records per page** to allow you to decide how many rows should be displayed for each page in the table.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/page_max.png#thumbnail) 


>**Note**: If the table is grouped, the pagination option will be hidden and the **Max Rows** option is replaced with **Max Groups**, which limits the maximum number of groups fetched, for the same performance reasons.




### Resizing Rows 
Rows in Table Charts can be resized for the User to see the full information in rows when building by increasing or decreasing the row height. To do so:

* Go to the *Configuration Pane - Styles* section and choose **Resize Columns and Rows**.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/rows1.png#thumbnail-40) 


* The Row Height size is set to *Auto*; you can adjust it by typing in a number or by clicking the arrows to increase/decrease the height with the value between 2px-2000px.

If the input component is left blank, the system displays a placeholder with the text “Auto“ and the rows would resize accordingly.

* By default all text is displayed in a single line. If it doesn’t fit in the cell, an ellipsis is added at the end. Checking the  **Word Wrap** checkbox shows all of the text in the cell, breaking the line where needed. If word wrap is off, a tooltip is shown for long text that does not fit fully in the column.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/rows2.png#thumbnail-40)  

>**Note**: With word wrap, the additional line of text might not be visible if the rows have a fixed height that is less than necessary to show the complete text or the max height of 2000px has been reached.

### Text Settings
Creators can modify the default text of Headers and Body in Table Charts. 

The components shown in the Styles panel that can be modified are: 

* **Header section** - Properties from the Style that are applied to the Headers/Totals.
  * **Typeface**: A list of fonts available for headers.
  * **Weight**: Choose between normal or bold for text weight.
  * **Size**: Set font size to anything from 8 to 96 px.
  * **Font Color**: Change the color of the text in Header.
  * **BG Color**: Change the color of the Header background.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/tabstyle1.png#thumbnail-40)


* **Body section** - Properties from the Style that are applied to the Body of the table.
  * **Typeface**: A list of fonts available for headers.
  * **Weight**: Choose between normal or bold for text weight.
  * **Size**: Set font size to anything from 8 to 96 px.
  * **Font Color**: Change the color of the text in Body.
  * **BG Color**: Change the color of the Body cells background.
  * **Alternate Color**: Change the color of the text in every other Body row.
  * **Alternate BG Color**: Change the color of every other Body row background.
  * **Text Wrapping**: Determines if the lines in cells with long text data should wrap to fit in the cell or be cut off to the width of the cell.
  * **Repeatable Rows**: Then this checkbox is unchecked (default) grouped values are only listed once for each group. Check the box to have them repeat for every row of aggregated values.
  * **Border**: Choose which borders to hide/show using the icons in this section. By default all borders are displayed. 


 ![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/tabstyle2.png#thumbnail-40)  
 
Don’t forget to click on **Save** to apply all the changes to your Table Chart.

>**Note**: Header and Body styles created here have a higher importance than those set in a Custom Theme or Default Theme. 


### Resizing Columns 
You can manually modify the Column Sizes of Table Charts by simply hovering over the header of the column and dragging the column header’s width to the left or right using the marquee tool. 

![43_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/43_ct.gif#thumbnail)  

## Sorting
It’s a common action when interacting with tables, to sort the column in an ascending or descending way to have a better perspective of the analyzed data. Depending on the type of table you are using, sorting could be slightly different.

### Sorting on Simple Tables
Simple tables could be sorted in two different ways. The first one is Single Sorting, where you could sort one column at a time. The second called Multi-Sorting lets you sort multiple columns at a time.

* **Single Sorting**: Every table column contains a sorting icon as by default they are not sorted. If you want to sort the column you just need to click on the icon and it will sort the column’s values in an ascending way. Clicking it again will sort the values in a descending way.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/ct_sort1.gif#thumbnail)  

Sorting on another column will remove the sort you have previously applied to a column and the table will keep the last column you had sorted.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/ct_sort2.gif#thumbnail)  

* **Multi-Column Sorting**: Simple tables have single-sorting enabled by default. If you want to use multi-column sorting, you can find that option on the three-dot menu located in every column header.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/ct_sort3.png#thumbnail)  
 
A multi-column sort option will appear at the top left-hand side of the table. Using this option will let you sort by multiple columns at the same time simply by selecting them from the dropdown list. All sorted columns will appear at the bottom where you can choose either the ascending or descending sort order for each of them individually by clicking on the orange buttons or remove the column’s sort by clicking the X icon.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/ct_sort4.png#thumbnail)  


Once the multi-sort column option is active, you can also click on the sort icon of each column’s header to switch the sort order (asc or desc) or to remove it. The multi-column option above the table will be in sync with whatever action you take on the table column’s header.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/ct_sort5.png#thumbnail)  



### Reordering Columns 
Table **Creators** and **End Users** are able to organize columns by reordering them in a preferred way. This action is the same as seen in Excel spreadsheets and our Tabular View.

#### Simple Table
**Creators** can reorder columns in two different ways:
1. Directly from the table headers 

Columns in Simple Tables can be reordered by clicking on a selected header, “grabbing” it to slide the column to the left or right and then “dropping” it in the desired place. This method works both inside Chart Builder and in Page or Report Builder, once the table has been saved.
After dropping the column in its new place, the column pills in the shelf inside Chart Builder appear in that same new order. 


![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/simp_tab1.png#thumbnail)  


>**Note**: While End Users can reorder column headers directly in the table, their action does not modify the columns' order inside the chart builder shelf.

2. From the Chart Builder Shelf 

Columns can also be reordered in the analytic panel by dragging and dropping the column pills in the desired position in the shelf. 
This method only applies to the edit mode of charts and can be performed inside Chart Builder.


![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/simp_tab2.png#thumbnail) 
![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/simp_tab3.png#thumbnail)  


#### Grouped Table
In Grouped Tables, we can find two types of columns:
* **Aggregate** - the ones that are dropped in the Columns shelf and their values are somehow aggregated into a number.
* **Grouped** - the ones that are dropped in the Group shelf and the Aggregated Columns are grouped by.

Aggregate columns can be reordered in the exact same ways as columns in a simple table: 
1. Directly in Table Headers by clicking on a selected header, “grabbing” it to slide the column to the left or right and then “dropping” it in the desired place - either in edit mode (in Chart Builder) or after saving (in Page or Report Builder)

After dropping the column in its new place, the column pills in the shelf appear in that same new order. <br />
**Important Note**: Aggregate columns cannot be dragged between, or before the grouped columns.

Aggregate columns can be reordered in two ways:
1. Directly in Table Headers by clicking on a selected header, “grabbing” it to slide the column to the 
left or right and then “dropping” it in the desired place.
After dropping the column in its new place, the column pills in the shelf appear in that same new order. 

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/agg_tab1.png#thumbnail)  

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/agg_tab2.png#thumbnail)  

2. From the Chart Builder Shelf 
Columns can also be reordered in the analytic panel by dragging and dropping the column pills in the desired position shelf. 
This method only applies to the edit mode of charts and can be performed inside Chart Builder.


![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/agg_tab3.png#thumbnail)  

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/agg_tab4.png#thumbnail)  



Grouped columns can only be ordered in design mode, i.e. inside Chart Builder, and only from the columns shelf. For this very same reason, they cannot be reordered by end users, who only work with the saved chart. 


## Charts in Tables
Table Creators can add Charts inside table cells and this way create more robust table visualizations that allow them to essentially create reports within the table where they can at a glance see trends in their data without leaving the table visualization. Note, that buckets are not supported to create trend charts.

When adding a trend chart to the cells, you need to define:
* **Column** - the value(s) you would like to show in the chart.
* **Trend by Column** - Date or Numeric data types.
  * If **Trend by Column** is a date data type, you can apply:
    * Date Grouping- to group your dates by year, quarter, months, weeks, days. 
    * Time Period - to choose a period you wish to show in the trend analysis (this year, last year, this quarter, last quarter, this month, last 6 months, etc.).
  * If **Trend by Column** is a numeric data type, you can apply: 
    * Max Data Points - to limit the number of data points shown WHEN a numeric or string column is used for the “Trend by Column.” (For Sparklines - Bar/Line + Min/Max charts). This does not apply to dates. The default value is set to 50.
* **Trend Sort** - to sort the trend visualization in an ascending or descending manner. Applies to all datatypes.
* **Color** - to select the color of the trend chart.
* **Type** - type of chart you want to show (Sparkline Line or Bar chart)
* **Fill** - when using reference lines you can fill the area above/below the line.
* **Tooltips** - to show/hide tooltips on the trend chart within the table.
* **Show Value** - to show/hide the aggregated values alongside the trend visualization in each cell.

### Sparkline - Line Chart Type

To add a Sparkline - Line chart to a table cell, follow these steps:
1. Open Chart Builder
2. Build a <a href="/docs/ui-docs/dataviews/chart-types/#tables">grouped Table Chart</a> 
3. There are two ways of adding a chart to a table cell:<br />
  a) from the Grouped Table Chart’s configuration Pane<br />
  b) from the Aggregated Column Pills

#### Creating a Sparkline - Line Chart from the Grouped Table Chart’s Configuration Pane

1. Go to the configuration pane and click on the *Trend Charts* tab.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark1.png#thumbnail) 

2. Click on **+ Add Trend Chart**.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark2.png#thumbnail-40) 

See the trend chart panel appear. The chart type selected by default is the line chart.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark3.png#thumbnail-40) 

3. Pick a column of values you’d like to show in the line graph.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark4.png#thumbnail-40) 


4. Add a Date or Numeric column to show the trend of the selected column.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark5.png#thumbnail-40) 


If you select Date in your “Trend by Column”, you can now group these dates by year, quarter, months, weeks, days. You can also select the Time Period you wish to show in the trend analysis (this year, last year, this quarter, last quarter, this month, last 6 months, etc.).

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark6.png#thumbnail-40) 


#### Creating a Sparkline - Line Chart from the Aggregated Column Pills
1. Go to the Column shelf and click on the three dots next to the value you’d like to show in a graph.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark7.png#thumbnail) 


2. In the menu that appears, choose Trend Chart > Sparkline, and select which trend you’d like to show in the graph. 

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark8.png#thumbnail) 

Once the chart has been added to the cell, hovering over it will show more details about it (Start, End, Min, and Max). In the tooltips, you can further customize the color of the graph, its shape (straight, curvy, square), and whether you want to show the values alongside the graph in the cell.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/sparkline.png#thumbnail)  


>**Note**: The trend chart can be shown only when the visualization is set to "Value". If you change visualization to “Bar”, the trend chart won’t be visible, however, the configuration should remain in place.


### Sparkline - Bar Chart Type
To add a Bar chart to a table cell, follow these steps:
1. Open Chart Builder
2. Build a <a href="/docs/ui-docs/dataviews/chart-types/#tables">grouped Table Chart</a>

There are two ways of adding a chart to a table cell:<br />
  a) from the Grouped Table Chart’s configuration Pane<br />
  b) from the Aggregated Column Pills

#### Creating a Sparkline - Bar Chart from the Grouped Table Chart’s configuration Pane
1. Go to the configuration pane and click on the “Trend Charts” tab.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark10.png#thumbnail-40) 

2. Click on “+ Add Trend Chart.” 

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark11.png#thumbnail-40) 

See the new trend chart panel appear. The default chart type is the line chart so make sure to click on the Bar Chart icon to change it.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark12.png#thumbnail-40) 

3. Pick a column of values you’d like to show in the bar graph.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark13.png#thumbnail) 

4. Add a Date or Numeric column to show the trend of the selected column.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark14.png#thumbnail-40) 


#### Creating a Sparkline - Bar Chart from the Aggregated Column Pills
1. Go to the Column shelf and click on the three dots next to the value you’d like to show in a graph.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark15.png#thumbnail) 


2. In the menu that appears, choose Trend Chart > Sparkline - Bar, and select which trend you’d like to show in the graph. 

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark16.png#thumbnail) 

Once the chart has been added to the cell, hovering over it will show more details about it (Start, End, Min, and Max). In the tooltips, you can further customize the color of the graph, its shape (straight, curvy, square), and whether you want to show the values alongside the graph in the cell.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/spark17.png#thumbnail) 


>Note, that if users reduce the column’s width and there is not enough space to show the value and the trend chart simultaneously, the system will remove the trend chart and display only the value. Also, if users configure the trend chart column without showing the value and reduce the column’s width, the system will adapt the trend chart’s size to its minimum width. 

>If users keep reducing the column’s width, the trend chart won’t be visible until the column’s size is appropriate to show the trend chart.

>If you change the trend chart configuration while using the “Bar” visualization type, the new changes applied to the trend chart will be visible when you return to the “Value” visualization type.


## Crosstab Chart
### Overview
A crosstab is a data summarization tool that allows structuring, summarizing, and displaying large amounts of data. It is most commonly used to analyze the multiple measures in multiple dimensions at the same time. A crosstab can display totals and subtotals for columns and rows, and it allows users to rearrange the measures and dimensions to get a different view of the data.

### When to Use Crosstab Charts
Crosstabs are commonly used when there are a limited number of categories. The row and column variables in a crosstab can be used interchangeably. The choice of row/column variable is usually dictated by space requirements or interpretation of the results.
Crosstabs are commonly used when you want to create quick reports efficiently, allowing you to analyze the data and arrive at quick decisions. They are also helpful when you want to run online analysis by expanding and collapsing levels of data to focus your results, and drilling down to details from the summary data for areas that interest you.

#### Use Cases
* To represent and analyze many categorical variables or nominal measurement scale data.
* For financial reporting.
* To segment data by different variables and calculate totals.
* When the data needs to be aggregated, and sliced for analysis. 

### How to Use Crosstab Charts
You can create Crosstab charts anywhere that the Chart Builder is available. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.

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
All charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific to the Crosstab chart. 

#### General
* **Labels**: Turn on/off labels for columns and rows.
* **Sort by**: When enabled, users can sort the values of the column.
* **Totals**: Turn on/off totals in the chart.
* **Subtotals**: Turn on/off subtotals in the chart.
Position Set the totals for columns, rows or both.
* **Max Rows/columns**: The maximum number of columns and rows in the chart can be set to improve performance.

#### Styles

* **Header Color**: Change the color of chart headers.
* **Header Font Color**: Change the color of the text in chart headers.
* **Format**: Change the format of the values visualized in the chart (abbreviated, numeric, currency, percentage, or scientific).

#### Changing Header Colors 
The Crosstab headers font color can be changed directly from the Chart Builder. 
Simply go to the Styles section and pick a color for the header and/or header font to change the look of your crosstab.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/crosscolor1.png#thumbnail-40)

Colors can be chosen directly from the color picker or by using a color code.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/crosscolor2.png#thumbnail-40)

Creators can change the Header Font Color and Main Color options inside a Theme (Chart Themes). 

The existing Crosstabs appear in the color defined by the user, while the new ones use colors of a selected theme. 

If a user changes the color inside the chart builder, that configuration will remain in place regardless of the theme that has been applied.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/crosscolor3.png#thumbnail)

### Conditional Formatting in Crosstab
You can use conditional formatting in Crosstab to highlight cells in your chart with colors so that it can be easily distinguished which cells in the crosstab have met the set conditions.

You can add as many conditions as necessary with each of them being added to the bottom of the list. Conditions can be dragged and dropped to organize the logic. In case there’s an overlap between conditions, the uppermost condition takes precedence when logic is applied. Determining conditions includes: 
* **Text Color**: It changes the font color of the cell’s value that matches the condition.
* **Cell Color**: It changes the background or border color (depending on the style option selected) of the cells with values matching the condition.
* **Style**: It works together with the cell color option to fill the cell’s background color or outline its border.
* **Label**: Used for reference purposes in legends and tooltips to input a custom name for a condition.
* **Column**: A quantitative (value) that will be compared to the values in the Value option using the selected operator.
* **Operator**: The operator can be set as:
  * Equals
  * Does not equal
  * Less than
  * Greater than
  * Less than or equal to
  * Greater than or equal to
  * Between, Inclusive
  * Between, Exclusive
  * Is null
  * Is not null
* **Value**: The value of the condition used to compare the value from the column to. 
* **Remove**: An orange action link to delete the condition. 

1. To apply conditional formatting to your cross tab, you first need to go to Chart Builder and create a Crosstab Chart. 

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/cross1.png#thumbnail)

2. Go to *Format* tab in Chart Configurations Panel and click on **Add Conditions** option.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/cross2.png#thumbnail-40)

3. Create conditions that will apply to chart values.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/cross3.png#thumbnail-40)


See cells meeting condition criteria highlighted in color.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/cross4.png#thumbnail)


## Heatmap
### Overview
Heatmaps visualize data through variations in color, providing an easy-to-understand overview of data. Applied to a tabular format, Heatmaps are good at showing relationships between two variables or revealing patterns. Each cell of the matrix created represents the value of a measure for the intersection of the selected category. The colors represent where the value falls in the range of the measure with darker colors indicating higher values and lighter colors indicating lower ones.

### When to Use Heatmap Charts
Heatmap charts are commonly used to display a more generalized view of numeric values. Especially in cases when the user is dealing with large volumes of data, as colors are easier to distinguish and make more sense than raw numbers.

#### Use Cases
* To showcase “hot and cold” zones or data in a table.
* To draw attention to trends.

### How to Use Heatmap Charts
You can create Heatmap charts anywhere that the Chart Builder is available. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.
 
To get started, open the chart builder, and a new window will open up in the center of the screen, as shown below.

![12_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/12_ct.png#thumbnail)

On the right side of the window, we can see the properties panel. The first section is related to chart type selection, where a user can select which type of chart they want to create. Here, we will choose the Heatmap chart.

![13_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/13_ct.png#thumbnail-40)

After selecting the Heatmap chart, the center of the chart builder window will update to reflect the actions required.



At the top of the chart builder, there are 3 fields for *Categories, Values*, and *Pivot*. In these fields, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, the Heatmap will be displayed on the canvas once at least one dataset column is dropped as a category field or value.


![14_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/14_ct.png#thumbnail)

Users need to add a third dataset column to the pivot shelf in order to complete the creation of the chart. The pivot column will work as a second category on the horizontal axis.

### Properties
All charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific to the Heatmap chart. 

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
 

## Maps
### Overview
The Geomap chart is a map of a country, continent, or region, with colors and values assigned to specific regions and addresses. Values are displayed as bubbles, dots, or colors with the option of hover text for data points. 

### When to Use Map Charts
Bubble Maps show aggregated values in locations with each bubble area proportional to the value being represented. These are best suited for comparing proportions over geographic regions. 

Dot Maps show no aggregated values and just data locations. These are best for detecting spatial patterns or the distribution of data over a geographical region, by placing equally sized points over a geographical region.

Choropleth maps are used to visualize geographical divides of areas or regions, colored, shaded or patterned in relation to the aggregated values.
aggregated values. These are best for visualizing how a measurement varies across a geographic area or to show the level of variability within a region.  

#### Use Cases
* Bubble and Choropleth maps: To show the number of sales clustered on different locations based on demographics.
* Dot maps: To show the distribution of data per location.

### How to Use Map Charts
You can create Maps charts anywhere that the Chart Builder is available. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.

Before getting to the Chart Builder, the data needs to be prepared for the correct use of maps.

![18_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/18_ct.png#thumbnail-60)

When preparing data, the user needs to create a geolocation group to identify parts of an address that will be used for geolocation on a map. It's important to define these groups correctly for accurate map locations.

After setting the geolocation group and loading data, open the chart builder, and a new window will open up in the center of the screen, as shown below.

![19_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/19_ct.png#thumbnail)
 

On the right side of the window, we can find the properties panel. The first section is related to chart type selection, where a user can select which type of chart they want to create. Here, we will choose either the Bubble, Dot, or Choropleth map chart.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/20_ct.png#thumbnail)

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/20a_ct.png#thumbnail-40)

After selecting a Bubble, Dot, or Choropleth map chart, the center of the chart builder window will update to reflect the actions required.


#### Bubble Map
At the top of the chart builder, there are 2 fields for Geolocation and Values. In these fields, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, the Bubble Map chart will be displayed on the canvas once at least one column is dropped as Geolocation.

![21_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/21_ct.png#thumbnail)

#### Dot Map
At the top of the chart builder, there is 1 field for Geolocation. In this field, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, the Dot Map chart will be displayed on the canvas once at least one column is dropped as Geolocation. 

By default, Dot maps are clustering-enabled, allowing you to see a large number of points clustered based on the position proximity of each point. As you zoom in and out of your clustered map, Qrvey re-calibrates the number of points we can display. If you click a cluster, we automatically zoom in and show individual points (if possible) or sub-clusters.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/dot_1.png#thumbnail) 

At the top of the chart builder, there are 2 fields for *Geolocation* and *Values*. In these fields, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, the Choropleth Map chart will be displayed on the canvas once at least one column is dropped as Geolocation.

![chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/dot_2.png#thumbnail) 

### Properties
All charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific to the Bubble, Dot, and Choropleth Map charts.

#### General
* **Legends**: Turn On/Off legends on the map. (Bubble maps only)
* **Tooltips**: Turn on/off tooltips of each data point.
* **Max Data Point**: Set the maximum number of data points in the chart.

#### Styles
* **Color**: Change the Color or theme of bubbles, dots, or regions shown in maps.
* **Base Map**: Change the terrain visualization of the map.
* **Map Region**: Change the region to visualize.
* **Symbol**: Change the type of symbol. (Dot Maps only)
* **Fill**: Change to a filled symbol or not. (Dot Maps only)
* **Symbol Opacity**: Change the degree of a symbol´s opacity.
* **Map Borders**: Turn On/Off map borders.
* **Custom Scale**: Create a custom scale by changing the min and max value ranges and color steps. (Choropleth Map only)
* **Reversed Colors**: To reverse the order of colors from the theme. (Choropleth Map only)
* **Allow Clustering**: Turn On/Off clustering. (Dot Maps only)
* **Data Labels**: Turn On/Off value labels. 


## Box & Whisker Chart
### Overview
A Box & Whisker chart presents information from a five-number summary. It is especially useful for indicating whether a distribution is skewed and whether there are any potentially unusual observations or outliers in the data set. Box & Whisker charts are also very useful when large numbers of observations are involved and when two or more data sets are being compared.
This chart is used to show the shape of the distribution, its central value, and its variability.

### When to Use Box & Whisker Charts
Box & Whisker charts are commonly used in exploratory data analysis. Works to make comparisons between records of different time periods.

#### Use Cases
* To compare distributions because the center, spread and overall range are immediately apparent.
* To summarize a set of data measured on an interval scale. 

### How to Use Box & Whisker Charts
You can create Box & Whisker charts anywhere that the Chart Builder is available. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.

To get started, open the chart builder, and a new window will open up in the center of the screen, as shown below.

![5_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/5_ct.png#thumbnail)

On the right side of the window, there is the properties panel. The first section is related to chart type selection, where a user can select which type of chart they want to create. Here, we will choose the Box & Whisker chart.

![6_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/6_ct.png#thumbnail-40)

After selecting the Box & Whiskers chart, the center of the chart builder window will update to reflect the actions required.



At the top of the chart builder, there are 3 fields: *Category, Values,* and *Distribution*. In these fields, you can drag and drop columns from your data panel located on the left side. In the middle section, you can set the title and a description for the chart. Finally, Box & Whisker will be displayed on the canvas once at least one dataset column is dropped as a category field or value.


![7_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/7_ct.png#thumbnail)

In a Box & Whisker chart:
* The ends of the box are the upper and lower quartiles, so the box spans the interquartile range.
* The median is marked by a vertical line inside the box.
* The whiskers are the two lines outside the box that extend to the highest and lowest observations. 


### Properties
All charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you can find a guide through the settings specific to the Box & Whisker chart.

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
* **Symbol Opacity**: Change the degree of a symbol´s opacity.


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
All charts have a set of properties that allows users to customize the aspect of the chart, modifying its look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for chart settings.

In this section, you will find a guide through the settings specific to the Word Cloud chart.

#### General
* **Sort by**: When enabled, users can sort the values of the column.
* **Tooltips**: Turn on/off tooltips of each data point.
* **Max Data Point**: Set the maximum number of Words in the chart.




## Metrics

### Overview

Metrics are a powerful feature that allows you to keep an eye on your most important data at a glance. It can be used by itself or it can be used as a part of a page, report, dashboard, or workflow.

### When to Use Metrics
Metrics are best suited for performance, comparative, qualitative, and quantitative measurements.

#### Use Cases
* To highlight performance against one or more benchmarks.

### How to Use Metrics
You can create Metrics anywhere that the Chart Builder is available. For a general overview of the Chart Builder, please check <a href="docs/ui-docs/dataviews/chart-builder/"> this section</a>.

To get started, open the chart builder, and a new window will open up in the center of the screen, as shown below.



![42_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/42_ct.png#thumbnail) 


To build your first metric, you can access the Chart Builder from the Analyze tab of the dataset you’d like to use, or from the Page and Report Builder. Select the type of metric you would like to build choosing between *Indicator, Bullet* or *Gauge* and drag a value to the shelf or into the drop zone. 

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

![47_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/47_ct.png#thumbnail-60) 

#### Properties
Metrics have a set of properties that allows users to customize the aspect and modify the look, format, and behavior along with some other options. The properties panel located on the right side of the window shows different sections for metric settings.

In this section, you will find a guide through the settings specific to Metrics.

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
 
 ![50_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/50_ct.png#thumbnail-60) 

## Indicator
An indicator is a qualitative or quantitative variable that provides a simple and reliable means to express achievement, the attainment of a goal, or the results stemming from a specific change. It often aggregates or combines a comparison based on different dates.

 ![51_chart_types](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/Chart+Types/51_ct.png#thumbnail-40) 




</div>