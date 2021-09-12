---
id: chart-builder
title: Chart Builder
sidebar_label: Chart Builder
---

<div style="text-align: justify">

Chart Builder is used to build custom visualizations on top of your data – you can quickly see what matters most to you and spot trends you might have missed otherwise. In this article, we will walk you through the process of creating a custom chart.

## Creating a Chart
Inside your application, select the form or dataset you’d like to analyze and choose the Analyze tab, followed by the Custom View.

![1_chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/1_chart-builder.png#thumbnail-40)

To create your first custom chart, click the **Add Chart** icon.

![2_chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/2_chart-builder.png#thumbnail-20)

The Chart Builder screen will open up and you can begin exploring your data by creating different visualizations. 

All the available columns will be listed in the data panel on the left side of the canvas. You can use the search field to quickly find any column you wish to use that is listed as a category or value. 

![1_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/1_CB.png#thumbnail-40)

If you’ve created a linked dataset using Data Links, you will see columns for both, your source dataset and the additional datasets you’ve linked to as shown below. Just click on the linked dataset pill to see the linked columns.

![1a_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/1_1_CB.png#thumbnail-40)

To get started, simply drag and drop a column onto the canvas in the *Category* or *Value* drop zone or in the Category or Value fields on the top shelf. 

Canvas:

![2_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/2_CB.png#thumbnail)

Shelf:

![3_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/3_CB.png#thumbnail)

Once the first column is dropped, a chart will be drawn showing a count of the selected values. You will need to add a second column, depending on the chart. 

When a column is dropped on the canvas, it will automatically reflect on the corresponding shelf. To change the aggregate of the column, click on the **dot menu** to the right of the column name and select an option from the list of aggregates. These options may vary depending on the data type. 

![4_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/4_CB.png#thumbnail-80)

To remove a column from the shelf, you can click on the **Remove** option in the dropdown, drag the column off the shelf, or replace the column by dragging a different column to the canvas or on the shelf. 

Below the shelf, you will find the chart title and an optional field to add a description for the chart. These can be added/edited by clicking on top of the text to enable typing. 

## Chart Types
There are different types of charts or visualizations you can work with. A bar chart will be selected by default but you can choose to start with a different type. After dropping columns on the canvas, you can easily change to another visualization. 

For this example, we’re going to select a simple bar chart, but some of the other available visualizations are line, pie and symbol charts, as well as word clouds, heat maps, geo maps, box and whisker style charts, crosstab, metrics and more. 

The options and settings for each chart will slightly vary from the example below, depending on the chart you choose. You can select the desired chart from the panel on the right and define the settings with the options that are listed below in the same panel.
 
![5_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/5_CB.png#thumbnail-40)

## General Settings
In this section, you will find the *Sort by*, *Tooltips* and *Max Data Points* options. 

Default sorting depends on the data type used for Category:

* *Numeric*: Label ASC, sorted from min. to max. value 
* *String/Text*: Label DESC
* *Date*: Label ASC, sorted by chronological dates from the oldest to the latest.

 To sort the categories, click on the **ABC** icon. 

To define max data points, set the desired number in the box which will immediately be reflected in the chart preview. Keep in mind that selecting a large number of data points may cause the charts to have longer loading times. 

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/gen_style.png#thumbnail-40)

## Tooltips
Users can enable tooltips that appear as pop-ups on mouse-over events for chart data points. By default, the tooltip pop-up displays the same data that was used to generate each data point in the chart. For example, if the data point value for a specific bar in a bar chart is “100”, then the tooltip will display “100” as well. Users can customize the data values displayed in the tooltip by adding one or more tooltip columns that map to other fields in the selected dataset.

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/tooltip.png#thumbnail-60)

Click on the chevron icon adjacent to the **Tooltips** checkbox to expand the UI. Click **Add Column** to map a new field from the dataset to the tooltip. Select the desired field from the Column drop-down and then choose one of the supported aggregations from the **Display Values As** drop-down. Choose an optional display format for the values. Users can add as many custom tooltip columns as needed.

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/chart_tool.png#thumbnail-60)


Users can also set an optional tooltip header by entering the desired text into the **Header** textbox.

>**Note**: Custom tooltips are supported in most chart and metric visualizations. Box & Whisker, Heatmap, Word Cloud, and all table chart types currently don’t support this feature.


## Style Settings

In the styles section, you will be able to change the color of the chart, turn on/off-axis labels, and find other options that vary from chart to chart. For this bar chart example, you can change the bar orientation from vertical to horizontal, turn bar shading on/off. and add data labels that will show the value for each bar presented in the chart. 

You will also find the x and y axis options.

![7_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/7_CB.png#thumbnail-40)

For both axes, you will be able to edit the *Axis Label* as well as turn on/off the *Values Label*. You can modify the Value Labels rotation, and you can define the format of the values for the y-axis. 

![8_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/8_CB.png#thumbnail-40)

### Adjusting Charts to Fit the Size of Their Panels
Creators and Users can choose the option of **Fit to panel** for the contents of the analytics panel in Builders. When a chart contains so much data that it’s necessary to scroll in order to see it all, **Fit to panel** enables users to see the entire chart without having to scroll. 

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/adjust1.png#thumbnail-40)

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/adjust2.png#thumbnail)

If the **Fit to panel** option is not selected, the size of the visualization is determined by its content size (e.g. bar width, gap width, cluster distance).


When **Fit to panel** has been selected, tick marks and axis labels may automatically be reduced to optimize space in order to fit everything into the panel. Instead of, for example, showing every year label on the X-axis, it shows labels for every 4th year, while the data (in the case above, bars) is shown in full. 

If there is not enough space between the data points to show the data labels, the data labels will be hidden regardless of the *show data labels* setting.

### Axis Intervals
You can control the tick marks' intervals to display in the value axis, normally the Y-axis (depends on the chart’s orientation), by changing the **Steps** option located inside the value axis style panel. By default, the option will be set as Auto, meaning the chart will calculate the appropriate intervals based on the axis scale range and the dataset values.

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/axis_1.png#thumbnail)

Depending on how wide the axis range is, the default configuration could display a lot of tick marks, making it hard to read or analyze the chart. Defining the “Steps” option you can control how many units the tick marks will be apart. In the example below, we set the step to 100 units, so the chart will display a tick mark every 100 units starting from 0, resulting in only 3 tick marks.

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/axis_2.png#thumbnail)

It’s important to keep in mind that when the axis range is vast (e.g., 0 - 10,000,000), setting the “Steps” option to 1 will create 10 million tick marks, causing performance issues on the chart and probably blocking the browser. To avoid this situation, the chart will ignore the defined value and fall back to automatic mode.

### Scale Type

The default scale type for a X/Y chart is Linear. However, linear scale is not appropriate for data that is spread over a wide range. Use the logarithmic scale in Chart Builder to display numerical data over a wide range of values in a compact way. 

In order to change the scale type to Logarithmic you can find the setting in the Type dropdown under Y-Axis in the configuration panel.


![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/logar.png#thumbnail-40)


### Fixed Range Configurations 

Chart creators can override the automatic range of their charts to fit their analysis needs so that a chart doesn’t result in too much whitespace giving it a much cleaner look.

#### Setting The Range
By default, the automatic <a href="/docs/get-started/glossary/#r">range</a> for the value axis starts at 0 and goes up to the maximum value that is plotted on the chart. 
In order to change that range, go to the **Styles** section of the configuration panel in the Chart Builder and expand the Y-axis subsection (or X-axis, if that happens to be the value axis). Set the values for Min Range and Max Range to what works for the chart.

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/range.png#thumbnail-40)
 

>**Note**: If a chart orientation is inverted to show the **Value** on the X- axis, then the **Min Range/Max Range** options will be located in the X-axis configuration settings.


## Layers
In this section, you will be able to set trend and reference lines. 

If you choose to add a trend line, you can select the type of trend you’d like from the drop-down menu. The preview chart on the left will automatically be updated with your selection.

![9_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/9_CB.png#thumbnail-40)

<br/>

![10_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/10_CB.png#thumbnail)

If you choose to add a reference line, you can choose from a number of options, including which axis you’d like the reference to appear on or whether that line should be fixed or dynamic in nature. You can also provide a label for the line itself. 

![11_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/11_CB.png#thumbnail-40)

<br/>

![12_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/12_CB.png#thumbnail)

## Format
In the format section, you will find the option to create a *Small Multiples* view for your chart by adding a third column which will multiply the charts by the value selected and create a comparison view. 

![13_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/13_CB.png#thumbnail-40)

Starting in the data panel, drag the column you would like to use for the comparison and drop it in the *Small Multiple* field. In the chart preview, you will see a chart for each of the values in the selected column. In this example, a date column was used. For dates, you can access the date grouping options (Year, Quarter, Month, Week, Day, Hour, Minute, and Second) where you can select how you’d like the dates in the column to be grouped.

![14_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/14_CB.png#thumbnail)

## Filters
While building your chart, you are able to apply default filters. These filters will be retained in all instances of the chart across the entire application. To add a filter click on **Add Filters**.

![15_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/15_CB.png#thumbnail-40)

Then select the column you would like to apply a filter on, select the values and click on **Apply**.

![16_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/16a_CB.png#thumbnail-40) 

You will see the selected values in the filter panel. This is a hidden filter that is not shown and cannot be edited outside of the chart. To edit or remove this filter, you will need to click on the option to edit the chart first and then edit the filter. 

![17_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/17_CB.png#thumbnail-40)

You can edit your chart at any time by clicking on the three-dot menu in the lower-right corner of the panel and selecting **Edit**. Your custom view charts can quickly be filtered to meet your needs. You can remove a panel from this location as well.

![18_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/18_CB.png#thumbnail-60)

## Data Page Shortcut 
Creators can use a shortcut for an even easier access to the data pages directly from the Chart Builder following these steps:
1. Access Chart Builder
2. Go to the data panel and click on the dataset shortcut

![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/short1.png#thumbnail-40) 

3. Click **Save** to save the chart and get redirected to dataset view or **Cancel** to stay in the Chart Builder. Note, that Chart Builder does not save changes automatically.

![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/short2.png#thumbnail-60) 

>**Note**: These shortcuts are available only in the composer application in **Creator** mode.

## Expandable Tables
The expandable data tables are used to group data, without aggregating the values. They are especially useful when it comes to presenting large amounts of data in a compact space, as rows are collapsed and can be expanded to reveal the detail rows
Start by clicking on **Expandable Table** from the list of visualizations in the *Chart Builder*.

![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/expand1.png#thumbnail-40) 

Move the column to group by to the *Sections* shelf.

![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/expand2.png#thumbnail-60) 

Each *“Group”* used to construct the table is displayed as a collapsible header. Expanding each header row will show all of the corresponding detail rows that belong to that group. 

![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/expand3.png#thumbnail) 


There can be multiple sections inside each collapsible section.  
![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/expand4.png#thumbnail) 

Here we find additional settings like:

* **Freeze First Column** - this checkbox is only displayed when using an “Expandable Table” and is set to “ON” by default:
	* ON: This action freezes the first column and all groups of the table so that when doing a horizontal scroll, that column and groups stay fixed to the left of the table visualization, while the rest of the table visualization scrolls beneath (a behavior commonly seen in spreadsheet tools).
	* OFF: When performing a horizontal scroll, all columns and groups will scroll together.
* **Max. Groups** - Limits the number of groups shown. This value is set to 10 by default and can not be lower than 10. If there are no columns in the Section shelf, the Max Groups option does not appear.
* **Records per Group** - Limits the number of records shown for each expandable group. This value is 10 by default and can not be lower than 10.

![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/expand5.png#thumbnail-40) 



## Discrete vs. Continuous Values

When using xy charts to plot data, the expectations for how categories have to be plotted may differ when the category has a continuous nature. This happens because continuous categories, such as dates and numbers, have the potential of being treated in a discrete manner.

For example, if our chart is depicting the number of sales per month in one year, we want to see it plot every single month of the year, even if there were no sales in some months. In fact, the lack of sales in those months is an important piece of information that should not be ignored. <br>
However, if the visualization is about the number of casualties in each major flu outbreak in recent history, we are only interested in the years 1918, 1957, 1968, 1997, and 2009. In this case, the years between those don’t matter and while we are still working with “dates”, the nature of our analysis requires us to treat those dates in a discrete manner.

With the Chart Builder, you get to choose between these two methods depending on your use case.


Using discrete values in a custom chart, the Categorical column displays an axis with separate, distinct dates or numeric values that are found within the dataset used to construct the chart. 
When switching to the continuous mode, the product fills in the gaps in data to show all categories that make the data continuous.
 

To apply Discrete or Continuous values, your chart must use a date or numeric column in a category position. Open the column options where you will see Discrete Values preselected. If you select Continuous Values, you will see continuous date categories in the chart even if the data does not contain them.

The *Discrete* and *Continuous* features are options only available for the date and numeric columns used in Chart Builder. 

* Discrete Dates

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/chart_build29.png#thumbnail)



* Continuous Dates

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/chart_build28.png#thumbnail)




## Sorting the Data

For all charts, data can be sorted in various ways in the Chart Builder, at the time of creation. Each of these access points has special features that make them better suited for one or another use case. These different methods are explained later in the Access Points for Sorting section.
It is important to note that by default data for most charts is sorted by the grouped column, in ascending order. When the data is sorted by a column an arrow icon in the column pill indicates that, as well as the sorting direction. 


![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/sorting.png#thumbnail-60) 


X/Y charts such as Bar, Line, Symbol, etc., as well as all other charts that work based on one grouped Category and one aggregated Value column, can be sorted by either the Category or the Value, but not both at the same time. This is a general rule that applies to any visualization. 



![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/5gif.gif#thumbnail-60)

Multiseries charts also can be sorted by either the Category or Value column and the Series column can be sorted independently, at the same time. 


![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/6gif.gif#thumbnail)

Tables support sorting for all of their columns individually, or in  a multi-column manner. Multi-column sorting gives you the option to first sort by one column and let the next column’s sorting be applied on top of the previous sorting. For example consider the following unsorted data:

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/7gif.gif#thumbnail)

For Crosstab, you can do multi sorting on both the Rows and Columns at the same time. Sorting on the Value columns is not possible. 

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/tables.png#thumbnail-60)

If the table is sorted by “Contact Last Name” only (ascending), it will look like this:

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/tables2.png#thumbnail-60)


And if it is sorted by “Contact First Name” only, it will look like the following image:

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/tables3.png#thumbnail-60)



Alternatively, if the same data is sorted first by the last name and then by the first name column, it will generate the following results:

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/tables4.png#thumbnail-60)

To learn more about table charts and their sorting options please see the related section in the <a href="/docs/ui-docs/dataviews/chart-types">Chart Types</a> article. 


Grouped tables allow any number of their grouped columns to be sorted simultaneously, however the sorting always applies from left to right. Furthermore, between the last (innermost) grouped column and all of the aggregated columns, only one can be sorted. In summary the following points apply to sorting of grouped table charts:

* When the table chart has one grouped column all the other columns are aggregated and therefore follow the same rule about grouped and aggregated data that applies to all other charts: Either the grouped column or one of the aggregated columns can be sorted and not both at the same time. (See this rule mentioned in the regular XY charts)

* When more than one column is grouped, each group is sorted *inside* of the group immediately above it. For example if the data is grouped by “Product Vendor” and “Product Line”, sorting of product lines happens inside of their respective product vendors and not in the entire dataset. That means that even though you can sort multiple grouped columns, you won’t be able to change the order in which they are sorted, unless you physically move the grouped columns in the table. In the “Product Vendor” and “Product Line” example, if you want to first group by “Product Line” and then by “Product Vendor”, you have to physically move the grouped “Product Line” column before the grouped “Product Vendor” column (see the next three images).

* When more than one column is grouped, the same “either group or aggregated column” rule applies to the last (innermost) group and the aggregated columns that come after it: You can either sort that grouped column or one of the aggregated columns, but not both. 


![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/tables5.png#thumbnail-60)

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/tables6.png#thumbnail-40)

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/tables7.png#thumbnail-60)




For Crosstab tables you can sort any of the Rows and/or Columns at the same time.  Like grouped tables, each sorted Row is sorted within the Row directly above it and each Column under the Column above it and their order or participation in sorting corresponds with their physical position in the layers. Sorting on the Value columns is not possible. 


![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/crosstab.gif#thumbnail)

> **Note**: Metrics, Maps, and Box & Whiskers charts don’t support sorting.


## Access Points for Sorting
Sorting of data in charts can be initiated from various places in the Chart Builder. These access points are:
* The column pill
* The *Sorting* section in the configuration panel
* The *General* section in the configuration panel

### Sorting From the Column Pill
This method is the handiest of all and available for most column types of most charts. By default, the column pills show their sorting direction using an arrow. Column pills in field types that support various features, like date grouping, show the sorting options under a “Sorting” sub group in the menu.


![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/sorting.png#thumbnail-40)

Those field types that don’t support any other features, such as Series, only list the two sorting options, as seen in the next image.

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/sorting2.png#thumbnail-20)

Columns used in Tables and Crosstabs also support removal of sorting to result in an unsorted dataset. The “Clear Sorting” option can be accessed from the same menu off the column pill of these charts.

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/sorting3.png#thumbnail)



### Sorting From the Sorting Section of Configuration Panel

For the chart types that support this method, a **Sorting** section appears in the configuration panel that shows a dropdown list of all columns in the dataset, with the selected option set to the column (or aggregated column) that the data is sorted by. 

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/sorting4.png#thumbnail-40)


Using the said dropdown list, you can choose the column to sort the data by, even if the column is not used in the chart. Columns that are used in the chart are listed in a separate group in the dropdown list, along with their role in the chart. The ability to choose an unused column for sorting makes this the most comprehensive method of sorting data.

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/sorting5.png#thumbnail-40)


### Sorting From the General Section of Configuration Panel
Other charts that support sorting, but not through the two methods mentioned above, allow sorting from the icons in the **Sort by** sub section under the **General** section of the configuration panel. 

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/sorting6.png#thumbnail-40)


The icon titled **ABC** sorts data by the Category column of chart while the icon titled **123** performs sorting on the Value column. The next two icons decide the direction of sorting, ascending and descending, respectively.



## Table Subtotal + Grand Totals
Table Users are currently able to add *Totals* to aggregated columns to the entire table, essentially showing what would be a *Grand Total* of values for the selected column. With the new UI for adding *Totals*, Table Creators will be able to apply totals by a selected group in the Table so that they can get *Subtotals* per group category for the selected aggregated column. With this new method for adding totals, Creators can:
* Add totals to multiple columns all at once 
* Add multiple totals to the selected column(s)
* Add both Grand Totals and Subtotals to the same aggregated columns at once
* Have different total calculations for Grand Totals and Subtotals using the same aggregated column 

To add totals to a Table, you need to go to Chart Builder’s “Configuration Pane” and find the “Totals” option located in the “General” section. Once a "Totals" layer is added, you can set up which aggregated columns will be used for the selected totals, and at which level (partition) the total will be performed - for the Table or a selected Group.

 ![9gif_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/9gif.gif#thumbnail)

 
## Data Formatting 

By default, all charts show the data formatted based on the selected Visualization Format in the data prep step. However, the default format can be changed or refined for most charts.   
 

### Numeric Formatting

Numeric formatting is supported for the value columns in Bar, Line, Symbol, Min/Max, and Crosstab charts, as well as all aggregated, and numeric columns in Table charts. 
The following formats are available for numeric columns:
* Decimal: shows a value of up to 10 decimal places
* Abbreviated: shows the numeric value abbreviations. For example, 1000 is formatted as 1K
* Currency: shows the value with a currency sign. For example, 3456.789 is formatted as $3,456.79. Several currency symbols are available for selection.
* Percentage: shows the value as a percentage. For example, 30.4 turns into 30.4%
* Scientific - show the values in scientific format. For example, 3456.789 = 3.46E+03

Numeric Values can be formatted from the column pill in the **Values** shelf of the supported charts or **Columns** shelf of Table charts. In order to access the feature:
* Click on the 3-dot menu of the column pill
* See the “Values Format” option in the dropdown menu and click on the item.
* See the secondary dropdown menu showing formatting options
* “Default” option is preselected. Select another formatting option (Default/Abbreviated/Decimal/Currency/Percentage/Scientific)
* Provide any additional information that may be needed; e.g. number of decimal places for decimal format.

![10gif_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/10gif.gif#thumbnail)

The same feature is also available from the *Styles* section in the chart configuration pane of charts other than Table and Crosstab. To access the feature in this way:
* Go to the *Styles* section and go to **Value Formatting** located in the Y-Axis (or X-Axis, if the chart is horizontal).
* The *Default* option is preselected. Select another formatting option (Default/Abbreviated/Decimal/Currency/Percentage/Scientific)
* Provide any additional information that may be needed; e.g. number of decimal places for decimal format.

### Date Formatting

When date columns are used as categories and the date grouping is set to **Day**, the **Date Format** appears on the menu off of the 3-dot menu of the column pill. Other date groups (Month, Year, Week, Quarter) do not support date formatting.
Users can choose from the available date formats below or choose the “Custom Format” option that lets them define other formats.
 
| **Format** | **Display** | 
| --- | --- | 
| MM/DD/YYYY | 12/31/2020 | 
| MM/DD/YYYY HH24:MI:SS | 12/31/2020 23:59:59 | 
| DD/MM/YYYY | 31/12/2020 | 
| DD/MM/YYYY HH24:MI:SS | 31/12/2020 23:59:59 | 
| YYYY-MM-DD | 2020-12-31 | 
| YYYY-MM-DD HH24:MI:SS | 2020-12-31 23:59:59 | 


In order to access the feature:
* Click on the 3-dot menu of a date type column pill.
* See the **Date Format** option in the dropdown menu and click on the item.
* See dropdown menu with available date formatting options and select or write the desired date format, if the **Custom Format** is selected.

![11gif_cb](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/11gif.gif#thumbnail)

For charts other than Table and Crosstab, the same feature is also available from the *Styles* section in the chart configuration pane. To access the feature in this way:
* Go to the *Styles* section and expand the axis section that is used to present the category column.
* See the ***Label Format** option available
* See dropdown menu with available date formatting options and select or write the desired date format, if Custom Format is selected

>**Note**: Date formatting applies to date columns that are used as dates. If the column is aggregated it turns into a numeric value and cannot be formatted as date.



## Conditional Formatting 

Conditional Formatting creates criteria for applying specific color formatting to data in charts to highlight, differentiate, and emphasize values that meet those set conditions. It calls attention to important data points such as deadlines, at-risk items, or budget items and can at the same also make large datasets more digestible by breaking up the data with a visual organizational component.

There are 3 basic components are required to create a condition: 
* **Data column** - This is the column to which the condition, and the formatting are applied
* **Operator** - The operator for the condition. These vary depending on the data type of the column chosen.
* **Value** - The value that defines the condition. Input components vary based on the data type of the column chosen.

Conditional Formatting is supported in Bar, Line, Symbol, Multi-series, Combo, Table, Expandable Table, Crosstab, Dot and Bubble Map charts.


When you use conditional formatting, you can set the following: 

1. **Text Color**: Changes the font color of the cell’s value that matches the condition **- only in Tables.**
2. **Cell Color**: Changes the background or border color (depending on the style option selected) of the cells whose values match the condition **- only in Tables.**
3. **Style**: Fills the cell’s background color or outlines its border **- only in Tables.**
4. **Label**: Give the condition a custom name. 
5. **Column**: A list of columns available in the shelf for setting a condition.
6. **Operator**: A list of operators available for formatting. 

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/cond1.png#thumbnail-40)

7. **Value**: A number to define the columns with that same value that will (not) be shown based on the operator chosen.
8. **Remove**: Deletes the condition. 

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/cond2.png#thumbnail-40)

For example, let’s say you want to highlight all cells in a table chart where the sales amount has exceeded the target value of $2,000. To set up this condition, you can pick “Sales” as your column, “Greater Than” as your operator, and “2000” as the value for your condition.

First, you have to decide how you want to highlight the cells that meet your condition:
1. Go to the *Format* section located inside the chart builder’s configuration pane.  
2. Click on the *Conditional Formatting* subsection and click on **+Add Condition**.
3. A tab will appear where you can set up your condition and see the conditional formatting reflected on the data points in the chart as long as the condition criteria are met. 

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/cond3.gif#thumbnail)

For example, let’s say you want to highlight all cells in a table chart where the sales amount has exceeded the target value of $2,000. To set up this condition, you can pick “Sales” as your column, “Greater Than” as your operator, and “2000” as the value for your condition.

### How To Use It?
First, you have to decide how you want to highlight the cells that meet your condition:
1. Go to the **Format** section located inside the chart builder’s configuration pane.  
2. Click on the **Conditional Formatting** subsection and click on **+Add Condition**.
3. A tab will appear where you can set up your condition and see the conditional formatting reflected on the data points in the chart as long as the condition criteria are met. 

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/cond4.gif#thumbnail) 


## Aggregate Formulas
Formulas apply to the values of one row of data and their results are presented as new columns for the same row. Standard formulas can be used on the raw data while aggregate formulas do the same thing for data that has been grouped and aggregate for a chart.
Given that distinction, aggregate formula function is only available in grouped table charts at the moment.

**Aggregated formulas** action item shows up in the action panel only when the table is grouped, otherwise that action item is disabled.

To create calculations across columns on the aggregated values, you need to first create a table chart having several columns in the Columns shelf and one or more columns in the Group shelf. When you have done that: 

1. Go to the *General* action panel and expand the *Aggregated Formulas* action item. Click on the **+ Add Aggregated Formula** action item.

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/agg1.png#thumbnail-40)

2. In the *Create Table Formula* modal window, enter a formula name and the desired formula using the available options, Test the formula and click Save.You can use any columns of the current context for the construction of the formula.

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/agg2.png#thumbnail)

3. The new aggregated formula can be edited or removed through the *Aggregated formulas* action item.

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/agg3.png#thumbnail-40)

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/agg4.gif#thumbnail) 


>**Note**: Only when the table is grouped, the *Aggregated formulas* action item is displayed in the action panel. If the table is not grouped, this action item is disabled.

## Chart Themes 

Give your charts a unified look by creating customized themes for your analytics that can be used to replace Qrvey’s default theme settings. 

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/theme1.png#thumbnail-40) 


### Setting Chart Themes
To create a new theme, go to the Style Themes button that can be found in the Analyze section of any dataset, as well as the Report Builder and Page Builder UIs.

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/theme2.png#thumbnail-60) 


Next, create a new theme that will be listed in all of your applications. The following settings are available from the UI:

* **Theme Name** - Give your theme a custom name. If you select *Use this theme in all applications*, this same theme will be applied across all applications in your Qrvey account.
* **Font Type** - Pick a font type you’d like to use for your charts’ title and other labels.
* **Text Colors** - Assign colors to different sections of your chart (titles, labels, values, legends, tooltips, and headers)
* **Data Styles** - Choose the colors to be used in data visualizations inside the chart (bars, lines, points, etc.)
* **Generate New** - Get a random selection of colors to be used in visualizations.
* **Reset to Default Settings** - Discard all changes and return to the default settings. 


You can click on each color box to change it using the color selector control.
Each theme has a unique ID that can be used for accessing the theme programmatically. The Theme ID is always displayed in the UI from the list of themes. Developers can copy and paste the ID of the desired theme into the embedded widget JSON configuration code.

![chart_builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/theme3.png#thumbnail-60) 

