---
id: version-5.2-chart-builder
title: Chart Builder
sidebar_label: Chart Builder
original_id: chart-builder
---

<div style="text-align: justify">

The Chart Builder is used to build custom visualizations on top of your data – you can quickly see what matters most to you and spot trends you might have missed otherwise. In this article, we will walk you through the process of creating a custom chart.

## Creating a Chart
Inside your application, navigate to Data, select the form or dataset you’d like to analyze, and choose the Analyze tab, followed by the Custom View.

![1_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/1_chart-builder.png#thumbnail-60)

To create your first custom chart, click the **Add Chart** icon.

![2_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/2_chart-builder.png#thumbnail-20)

The Chart Builder screen will open up and you can begin exploring your data by creating different visualizations. 

All the available columns will be listed in the data panel on the left side of the canvas. You can use the search field to quickly find any column you wish to use that is listed as a category or value. 

![1_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/1_CB.png#thumbnail-60)

If you’ve created a linked dataset using Data Links, you will see columns for both, your source dataset and the additional datasets you’ve linked to as shown below.  Just click on the linked dataset pill to see the linked columns.

![1_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/1_1_CB.png#thumbnail-40)

To get started, simply drag and drop a column onto the canvas in the *Category* or *Value* drop zone or in the Category or Value fields on the top shelf. 

Canvas:

![2_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/2_CB.png#thumbnail)

Shelf:

![3_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/3_CB.png#thumbnail)

Once the first column is dropped, a chart will be drawn showing a count of the selected values. You will need to add a second column, depending on the chart. 

When a column is dropped on the canvas, it will automatically reflect on the corresponding  shelf. To change the aggregate of the column, click on the **dot menu** to the right of the column name and select an option from the list of aggregates. These options may vary depending on the data type. 

![4_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/4_CB.png#thumbnail)

To remove a column from the shelf, you can click on the **Remove** option in the dropdown, drag the column off the shelf, or replace the column by dragging a different column to the canvas or on the shelf. 

Below the shelf, you will find the chart title and an optional field to add a description for the chart. These can be added/edited by clicking on top of the text to enable typing. 

## Chart Types
There are different types of charts or visualizations you can work with. A bar chart will be selected by default but you can choose to start with a different type. After dropping columns on the canvas, you can easily change to other visualization. 

For this example, we’re going to select a simple bar chart, but some of the other available visualizations are line, pie and symbol charts, as well as word clouds, heat maps, geo maps, box and whisker style charts, crosstab, metrics and more. 

The options and settings for each chart will slightly vary from the example below, depending on the chart you choose. You can select the desired chart from the panel on the right and define the settings with the options that are listed below in the same panel.
 
![5_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/5_CB.png#thumbnail-60)

## General Settings
In this section, you will find the *Sort by*, *Tooltips* and *Max Data Points* options. 

Default sorting depends on the data type used for Category.

* *Numeric*: Label ASC, sorted from min. to max. value 
* *String/Text*: Label DESC
* *Date*: Label ASC, sorted by chronological dates from the oldest to the latest

To define max data points, set the desired number in the box which will immediately be reflected in the chart preview. Keep in mind that selecting a large number of data points may cause the charts to have longer loading times. 

![6_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/6_CB.png#thumbnail-40)

## Style Settings

In the styles section, you will be able to change the color of the chart, turn on/off axis labels, and find other options that vary from chart to chart. For this bar chart example, you can change the bar orientation from vertical to horizontal, turn bar shading on/off and add data labels that will show the value for each bar presented in the chart. 

You will also find the x and y axis options.

![7_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/7_CB.png#thumbnail-40)

For both axes you will be able to edit the *Axis Label* as well as turn on/off the *Values Label*. You can modify the Value Labels rotation, and for the y-axis you can define the format of the values. 

![8_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/8_CB.png#thumbnail-40)

## Layers
In this section you will be able to set trend and reference lines. 

If you choose to add a trend line, you can then select the type of trend you’d like from the drop-down menu. The preview chart on the left will automatically be updated with your selection.

![9_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/9_CB.png#thumbnail-40)
<br/>
![10_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/10_CB.png#thumbnail-80)

If you choose to add a reference line, you can choose from a number of options, including which axis you’d like the reference to appear on or whether that line should be fixed or dynamic in nature. You can also provide a label for the line itself. 

![11_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/11_CB.png#thumbnail-40)
<br/>
![12_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/12_CB.png#thumbnail-80)

## Format
In the format section, you will find the option to create a *Small Multiples* view for your chart by adding a third column which will multiply the charts by the value selected and create a comparison view. 

![13_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/13_CB.png#thumbnail-40)

Starting in the data panel, drag the column you would like to use for the comparison and drop it in the Small Multiple field. In the chart preview, you will see a chart for each of the values in the selected column. In this example, a date column was used. For dates, you can access the date grouping options (Year, Quarter, Month, Week, Day, Hour, Minute, and Second) where you can select how you’d like the dates in the column to be grouped.

![14_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/14_CB.png#thumbnail)

## Filters
While building your chart, you are able to apply default filters. These filters will be retained in all instances of the chart across the entire application. To add a filter click on **Add Filters**.

![15_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/15_CB.png#thumbnail-40)

Then select the column you would like to apply a filter on, select the values and click on **Apply Filter**.

![16_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/16_CB.png#thumbnail)

You will see the selected values in the filter panel. This is a hidden filter that is not shown and cannot be edited outside of the chart. To edit or remove this filter, you will need to click on the option to edit the chart first and then edit the filter. 

![17_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/17_CB.png#thumbnail-40)

You can edit your chart at any time by clicking on the three-dot menu in the lower-right corner of the panel and selecting **Edit**. Your custom view charts can quickly be filtered to meet your needs. You can also remove a panel from this location as well.

![18_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/18_CB.png#thumbnail-80)

## Table Calculations

Table calculations are a category of functions that enhance the analytic capabilities of Qrvey and enable users to perform business analysis such as comparative analysis and benchmarking. A table calculation function operates on the data that shows the relationship between different fields and how categories (dimensions) affect values (measures).

Qrvey supports the following table calculations:
* Running Calculations

### Running Calculations
These calculate the running aggregate of a value that can optionally be calculated for any number of grouped categories. The calculations are affected by the sort order of the data. 

Currently, Qrvey supports quick table calculations (QTC) like *Running Sum, Running Average, Running Minimum,* and *Running Maximum* on the grouped table chart. 

How Qrvey generally describes these running calculations:

<code>
<p style="margin-left: 40px">
Running_[sum, avg, min, max] <br> 
 (<br>
     agg_value   <br>
     ,[ sortorder_field ASC_or_DESC, ... ]<br>  
     ,[ grouped field, ... ]   <br>
)
</p>
</code> 


| Argument | Description |
|---|---|
|**agg_value**|*agg_value* is the aggregated field.|
|**sortorder_field**|The *sortorder_field* corresponds to how the table chart orders the data. It orders the parent groups and tables in an ascending way by default.|
|**grouped_field**|The *grouped_field* is any number of fields that you have grouped.

## Types Of Running Calculations
### Running Sum

A running sum is the summation of a sequence of numbers, adding the current value to the preceding values and is updated each time a new number is added to the series.

The following example shows how Running Sum is calculated:


<table class="demo">
	<caption></caption>
	<thead>
	<tr>
		<th>Values</th>
		<th>Running Sum</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>1</td>
		<td>1 (0+1)</td>
	</tr>
	<tr>
		<td>2</td>
		<td>3 (1+2)</td>
	</tr>
	<tr>
		<td>3</td>
		<td>6 (3+3)</td>
	</tr>
	<tr>
		<td>4</td>
		<td>10 (6+4)</td>
	</tr>
    <tr>
		<td>5</td>
		<td>15 (10+5)</td>
	</tr>
	</tbody>
</table> 

The following image is an example of Running Sum in Qrvey:

<img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/1cb.png" style="margin:auto; display:block;" width="500" >

Running Average
The running average is the calculation function that moves through a list of values adding the current one to the sum of the preceding values and dividing by the current count of values.

The following example shows how Running Average is calculated.

<table class="demo">
	<caption></caption>
	<thead>
	<tr>
		<th>Values</th>
		<th>Running Average</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>10</td>
		<td>10 (10/1)</td>
	</tr>
	<tr>
		<td>20</td>
		<td>15 (30/2)</td>
	</tr>
	<tr>
		<td>30</td>
		<td>20 (60/3)</td>
	</tr>
	<tr>
		<td>40</td>
		<td>25 (100/4)</td>
	</tr>
    <tr>
		<td>50</td>
		<td>30 (150/5)</td>
	</tr>
	</tbody>
</table> 

The following image is an example of Running Average in Qrvey.

<img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/2cb.png" style="margin:auto; display:block;" width="500" >

### Running Minimum
The running minimum is the calculation function that moves through a list of values comparing each of them to the lowest one identified so far and returning the minimum value as it progresses.

The following example shows how *Running Minimum* is calculated.

<table class="demo">
	<caption></caption>
	<thead>
	<tr>
		<th>Values</th>
		<th>Running Minimum</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>8</td>
		<td>8</td>
	</tr>
	<tr>
		<td>6</td>
		<td>6 (6<8)</td>
	</tr>
	<tr>
		<td>10</td>
		<td>6 (6<10)</td>
	</tr>
	<tr>
		<td>9</td>
		<td>6 (6<9)</td>
	</tr>
    <tr>
		<td>5</td>
		<td>5 (5<6)</td>
	</tr>
	</tbody>
</table> 

The following image is an example of Running Minimum in Qrvey:

<img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/3cb.png" style="margin:auto; display:block;" width="500" >



### Running Maximum
The running maximum is the calculation function that moves through a list of values comparing each value to the highest value identified so far and returning the maximum value as it progresses.

The following example shows how Running Maximum is calculated:

<table class="demo">
	<caption></caption>
	<thead>
	<tr>
		<th>Values</th>
		<th>Running Maximum</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>8</td>
		<td>8</td>
	</tr>
	<tr>
		<td>6</td>
		<td>8 (8>6)</td>
	</tr>
	<tr>
		<td>10</td>
		<td>10 (10>8)</td>
	</tr>
	<tr>
		<td>9</td>
		<td>10 (10>9)</td>
	</tr>
    <tr>
		<td>5</td>
		<td>10 (10>5)</td>
	</tr>
	</tbody>
</table> 

The following image is an example of Running Maximum in Qrvey:

<img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/4cb.png" style="margin:auto; display:block;" width="500" >




### Creating a Running Calculation
To add a running calculation, drag a numeric value from your dataset and drop it on the *Columns* field of the chart’s shelf. Then select the dot menu to see the available menu options. Next select *Table Calculations*, to see the available types of calculations and finally select the desired option.

<img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/5cb.png" style="margin:auto; display:block;" width="500" >

Right to the left of the three dots icon you will see a summary of aggregate functions applied to the numeric column with RSUM (Running Sum applied).

<img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/6cb.png" style="margin:auto; display:block;" width="500" >





## Discrete and Continuous Values

Discrete values are unconnected values in a dataset. Continuous values are connected values that can take on any value within a finite or infinite interval. With Date values — if you want to create a chart where you see all Dates, like *months*,  it is best to use continuous values. With Numeric values — if you want to create a chart where you count something, like *quantity*, it is best to use discrete values. If you want to measure something to an infinite degree, it is best to use continuous values. 

Using discrete values in a custom chart , the Categorical column displays an axis with separate, distinct dates or numeric values that are found within the dataset used to construct the chart. 

For continuous values, the Categorical column displays an axis with continuous dates or numeric values, and some values, which are not found in the dataset used to create the chart, but are useful to see for the purpose of analysis.  

To apply Discrete or Continuous values, access chart builder and create a chart with dates as categorical dimension(s). Then you can open the column options where you will see Discrete Values preselected. If you select Continuous Values, you will see continuous date categories in the chart even though the data does not contain them.

The *Discrete*  and *Continuous*  feature are options only available for date and numeric columns used in Chart Building. 

* Discrete Dates
![29_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/chart_build29.png#thumbnail-40)



* Continuous Dates
![28_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/chart_build28.png#thumbnail-40)
