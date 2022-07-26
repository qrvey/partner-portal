---
id: funnel-charts
title: Funnel Chart
sidebar_label: Funnel Chart
---
 
<div style={{textAlign: "justify"}}>
Funnel Chart is a chart type that displays data values as progressively decreasing/increasing proportions that add up to a whole. The size of each stage of a Funnel Chart is determined by the corresponding value as a percentage of the total of all values and is represented in *segments* (funnel levels that are representing the Category value).
The order in which the categories appear in the chart depends on the <a href="#sorting">Sorting</a> that has been applied.
 
Funnel charts are most often used in marketing and business where there’s a need to track a value that decreases as it passes through certain stages. An example of such a value is the number of leads that travel through the sales cycle or the number of job candidates as they go through the interview and hiring process.
 
![funnel](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Funnel/funnel.png#thumbnail)
 
 
## Creating a Funnel Chart
To create a Funnel Chart, we need one column as a **Category** and one as a **Value**. We drag and drop a data field from the Data Panel onto either the corresponding shelf or the canvas.
 
In the case below, we want to get a visual representation of the hiring process within the company. We drag and drop *Stage* onto the **Category** shelf, and *CandidateID* onto **Values** and set its aggregation to *Count*. We adjusted the **Mode** to *Width*. This setting may provide a better view, depending on the size of each segment.
 
![funnel](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Funnel/create.gif#thumbnail)
 
 
## Styling The Funnel Chart
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your chart.
 
### General
* **Tooltips** - enable or disable [Tooltips](../../chart-builder/tooltips.md).
 * To show more than one value on mouseover, click on **+Add Column**:
     * **Column** - pick a value from the dropdown list. This can be any column, even if it is not used in the chart.
     * **Display Values As** - choose the aggregation type for each additional column you’d like to display in the tooltip (Sum, Average, Median, Count, Distinct Count, Minimum, Maximum).
     * **Values Format**- set the format of the values on the scale choosing between Default, Abbreviated, Decimal (set a number of decimals), Currency (choose the currency from the drop-down menu and set a number of decimals), Percentage (set a number of decimals), Scientific.
     * **Remove** - remove the tooltip column.
 * **Header** - add a header to the tooltip.
* **Max Data Points** - set the upper limit of the data points you’d like your chart to display. Controlling the number of data points helps you manage the clarity and organization of the chart - if you have too many stages, the chart can quickly become unreadable.
 
### Styles
* **Color Type**
  * **Single** - all bars are the same color.
      * **Color** - change the color of the bars.
  * **By category** - each bar is colored based on its category.
      * **Theme** - set one of the predetermined themes for a more unified look of your charts.
      * **Match colors across charts** - unify the colors of each categorical value throughout the page and application.When this option is selected and the same categorical column is used, the system will unify the colors of each categorical value throughout the page and application. For example, if there’s a “Country” column chosen with the Values Argentina, Colombia, US, and then we have the same “Country” column in the Funnel chart, then Argentina, Colombia, US will have the same color in both charts. 
* **Mode** - can change the visualization of the Funnel Chart by switching between Height and Width in Mode.
 * The Width mode shows the highest, more prominent aggregate at the top and then narrows down to the lowest one(s) with aggregate segments of equal value having uniform width.
  ![funnel](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Funnel/width.png#thumbnail-60)
 
 
 
 * The Height mode shows the highest value (or the lowest one, depending on the <a href="#sorting">Sorting</a> settings) at the top and then gradually narrows down with each stage being smaller in size than the previous one, regardless of its value. 
 ![funnel](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Funnel/height.png#thumbnail-60)
 
* **Category Labels** - show or hide C*ategory name*.
![funnel](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Funnel/cat-labels.png#thumbnail-40) 
  * **Category Name** - The custom name you want to give to your Category axis (Y-axis).
  * **Segment Names** - By unchecking the box next to **Segments names**, you can hide the category values (from the Category field) as they appear in the dataset.
  * **Names Rotation** - If you decide to keep **Segments names**, you can choose them to appear in *Horizontal, Diagonal* or *Vertical* position.
* **Data Labels** - enable or disable showing **Data Labels**, which represent data values from the dataset column assigned to the Value shelf.
* **Values** - display the data fields as actual **Values** or as **Percentages**.
* **Percentage** - the values shown in the segments do not represent the percentage of the total, but instead, they show the percentage of the max value, which is calculated by dividing the current value by the maximum value.
 
### Format
You can apply [Conditional Formatting](../../dataviews/chart-builder/chart-configuration/format.md#small-multiples#conditional-formatting) to your Funnel Chart.
 
### Sorting
You can sort Values directly from the column pill or in case you’d like to sort by a different column, go to the Sorting section of the Configuration Panel, pick your desired column from the dropdown, and select the sorting direction.
 
![funnel](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Funnel/sort1.png#thumbnail-40)
 
 
The sorting options include a drop-down list of all the values in the dataset from which you can choose your **Sort by** preference that can be arranged in either ascending or descending order.
![funnel](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Funnel/sort2.png#thumbnail-40)
 
 
Read more about Sorting in [this article](../../chart-builder/sorting.md). 
 
### Filters
You can also add Filters to your data by expanding the Filters section in the configuration panel or by clicking on the **Filters** button in the toolbar above the canvas.
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. To read more about different types of filters, go to the [Filters](../../dataviews/chart-builder/chart-configuration/chart-filters.md) article.
 
 
For more on Funnel Charts and other Percent of Total charts, we recommend watching <a href="/docs/video-training/building-qrvey-sample/kpi" target="_blank">this video</a>.
 
 
 
 
 
</div>