---
id: table
title: Table
sidebar_label: Table
---
 
<div style={{textAlign: "justify"}}>
 
Tables display data in rows of consecutive columns, in a spreadsheet-like format. This form of visualization provides an easy way to view the data and perform various analytical functions - such as grouping, sorting, and filtering. Tables are best suited either for viewing the raw data in a dataset or for analyzing multiple aggregations of data grouped by one or more categories. Tables support the display of an unlimited number of columns and rows, which allows users to see the raw unaggregated data before additional analysis is performed.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/1create.gif#thumbnail) 



## Creating a Table 

A user creates a table dragging and dropping fields from the Data Panel onto the Column shelf. Another way to create a table is by dragging and dropping fields into the top table guideline with the label *Drop column as column* when the mouse hovers over the table, as described in the image below.



In the end, the user can review which fields from the Data Panel are part of the table by looking at the top of the window in the columns - the **Group** shelf.



![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/2data-panel.png#thumbnail-40) 


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/3datapanel.png#thumbnail-40)


Users can sort data in each column in ascending or descending direction, remove sorting on them, or remove the column from the table, using the three-dot menu of the column pill. The drag handle on the left side of the column pill allows the columns to be moved around to change their position in the table, or moved out of the column shelf to be removed from the table.


Alternatively, columns can be moved around, removed, or sorted from the chart canvas representation of the table.

Table charts support multi-column sorting, both at design and interaction time. The Sorting features of tables have been explained in more detail in the <a href="#sorting-in-tables">Sorting in Tables</a> section of this article.


The header of each column defaults to the name of the data column that is selected for that column, but it can be modified by choosing the Edit option from the three-dot menu on the table column header.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/4datapanel.png#thumbnail-40)


### Grouped Tables

A user can create this type of table by dragging and dropping columns from the Data Panel onto the **Columns** and **Groups** shelves. In this scenario, the table treats fields in the **Group** shelf as a group, while the fields in the **Column** shelf are aggregated within the selected groups.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/5gt.gif#thumbnail)


Another way to create a grouped table is by using the vertical and horizontal guidelines that appear over the chart when the mouse is hovering over it.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/6gt.gif#thumbnail)



## Styling the Table 

In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your chart.


### General

* **Menu Actions** 

    * **Sorting** - add the sorting button () to the header. This option will be available in both edit and interactive mode. Head to the Sorting in Tables section to read more about it.

    * **Visualization** - checked by default, this option allows the users to choose if they want to see the numeric columns as numbers, or visualized in the form of bars. When unchecked, that option is disabled.

    ![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/7visualization.png#thumbnail-40)

    ![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/8visualization.png#thumbnail) 



* **Totals** - display the total and/or subtotal of chosen values in the last row of the table or the group.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/9totals.png#thumbnail-40)

<ul style={{listStyle: 'none', marginLeft: '20px'}}>

<li><strong>Columns</strong> - choose the columns you want to perform this on. All columns are selected by default, but you can choose to remove any that you don’t wish to participate in. If you want to apply different totals to different columns, simply repeat these steps and choose the other column(s) and the desired aggregation(s).</li>

<li><strong>Total</strong>- choose the type of aggregation you want to display (S*elect All, Average, Median, Count, Distinct Count, Minimum, Maximum*).</li>

<li><strong>Level</strong> - determines where the aggregation happens - whether it’s on table level or group level. This feature is enabled if you have groups present.</li>


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/10level.png#thumbnail-60) 

</ul>


* **Table Calculations** - add a calculation to your table - read more about this <a href="/docs/ui-docs/dataviews/table-calculations" target="_blank">here</a>.


* **Aggregated Formulas** - when you group the table, the option to add a table formula to your data appears. This feature has been explained in detail in the <a href="#aggregated-formulas">Aggregated Formulas</a> section of this article. 


* **Allow Pagination** - in ungrouped tables the data can be spread through pages by checking the pagination option. The number of records per single page can be set manually in **Records per page** (the limit is 1,000). This feature is on by default in ungrouped tables and it displays information about total records in the table, the number of records per page, and the current page out of all the pages.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/11pagination.png#thumbnail-60) 



* **Max Groups** - this option appears for grouped tables (when you add at least one column to the **Groups** shelf). It’s set to 50 by default and has an upper limit of 10,000. 


### Styles

* **Header** - Choose the font, weight, size, and color of the text, as well as cell color and borders for your headers. You can also set the alignment of the text for all columns or for a specific one.



![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/header7.2.png#thumbnail-60)  


* **Body** - Choose the font, weight, size, and color of the text, as well as cell color and borders for the rest of the cells in your table. You can also set the alignment of the text for all columns or for a specific one, opt for **alternating colors** of the foreground and background of the table rows, enable text wrapping, decide on the type of border you want and modify the border color. 


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/body7.2.png#thumbnail-60) 



* **Resize Rows** - set a height for your rows. Note that the column width can be adjusted by moving the column borders using the mouse or trackpad.


### Format

You can apply Conditional Formatting to your Table Charts.

Click on **+Add Condition** to start. Pick the color of the text and the color of the cell you’d like to show when your condition is met. Decide if you want to outline the cell or highlight it in the chosen color. Select the column you want to use the condition on, set the operator and decide if it applies to a column of your choice or the entire row. 

Click on **Remove** to remove the conditional formatting. 


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/14format.png#thumbnail-60)



In the example below, we wanted to highlight all orders where the quantity is 1,000 units or more. 


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/15cond-format.gif#thumbnail)



You can include a column that hasn’t been included in the table. In the dropdown menu, you can see *Chart Columns* and *Other Columns*.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/16ungrouped.png#thumbnail-60)



### Trend Chart

Table Creators can analyze the trend of any aggregated column, based on the data in any other column (usually a date), by using the Trend Charts feature within a grouped *tableEach* cell value is depicted as a line or bar chart and it highlights four values in the trend:

* The starting value, shown in gray. 

* The ending value, also shown in gray.

* The minimum value, shown in yellow.

* The maximum value, shown in red.

These values are also shown in a tooltip when the mouse hovers over each chart. The tooltip can be turned on or off.

There two types of Trend Charts available are shown in the following images.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/17trend1.png#thumbnail-60)

![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/18trend2.png#thumbnail-60)



Trend Charts can be added in one of two ways: 


1. From the Trend Chart command in the three-dot menu of the aggregated Column Pill\.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/19trend3.png#thumbnail)



2. From the Configuration Panel, by clicking the **+Add Trend Chart** button, selecting the column to chart and the one to use for the trend. 

* **Chart Type** - Choose the bar or line option from the respective icons. The default is a line.

* **Column** - the value(s) you would like to show in the chart.

* **Trend by Column** - Date or Numeric data types.

<ul style={{listStyle: 'none', marginLeft: '20px'}}>

<li>a) If Trend by Column is a <u>date</u> data type, you can apply:</li></ul>

<ul style={{listStyle: 'none', marginLeft: '30px'}}>

<li> - <strong>Date Grouping</strong> - group your dates by year, quarter, months, weeks, and days.</li>

<li>- <strong>Time Period</strong> - choose a period you wish to show in the trend analysis (this year, last year, this quarter, last quarter, this month, last 6 months, etc.).</li></ul>

<ul style={{listStyle: 'none', marginLeft: '20px'}}>

<li>b) If Trend by Column is a <u>numeric</u> data type, data points have to be limited by setting the Max Data Points. The default value is 50.</li></ul>


* **Trend Sort** - to sort the trend visualization in an ascending or descending manner. Applies to all datatypes.

* **Color** - to select the color of the trend chart.

* **Type** - the type of line chart you want to show (Line, Spline, or Step Line). This setting only applies if a Line Trend Chart has been selected.

* **Fill** - can be set to none to show a regular line chart or to “Below” to fill the area below the line. . This setting only applies if a Line Trend Chart has been selected.

* **Tooltips** - to show/hide tooltips on the trend chart within the table. The four highlight values are shown in the tooltip, as explained before.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/20trend4.png#thumbnail-40)


* **Show Value** - to show/hide the aggregated values alongside the trend visualization in each cell. Note that the column may not be wide enough to allow for both the label and the chart to be displayed. In this case, only the label is shown, unless the column is widened enough to have room for both.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/21trend5.png#thumbnail-40)



### Filters


You can also add Filters to your table by expanding the Filters section in the configuration panel or by clicking on the Filters button in the toolbar above the canvas. 

Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. To read more about different types of filters, go to the <a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/chart-filters" target="_blank">Filters</a> article.


### Resizing Columns

You can manually modify the Column Sizes of Table Charts by simply hovering over the column's header and dragging the column header’s width to the left or right using the marquee tool.



![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/22resize.gif#thumbnail)



### Reordering Columns

Table Creators and End Users are able to organize columns by reordering them in a preferred way. This action is the same as seen in Excel spreadsheets and our Tabular View.


#### Simple Table

Creators can reorder columns in two different ways:

<ul style={{listStyle: 'none', marginLeft: '20px'}}>

<li>a) Directly from the table headers: <br/> Columns in Simple Tables can be reordered by clicking on a selected header, “grabbing” it to slide the column to the left or right and then “dropping” it in the desired place. This method works both inside Chart Builder and in Page or Report Builder, once the table has been saved. After dropping the column in its new place, the column pills in the shelf inside Chart Builder appear in that same new order.</li>


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/23reorder.png#thumbnail-40)


<li>b) From the Columns Shelf: <br/> Columns can also be reordered in the analytic panel by dragging and dropping the column pills in the desired position in the shelf. This method only applies to the edit mode of charts and can be performed inside Chart Builder.</li>


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/24reorder.png#thumbnail-40)


</ul>


#### Grouped Table

In Grouped Tables, we can find two types of columns:

* Aggregate - the ones that are dropped in the Columns shelf and their values are aggregated.

* Grouped - the ones that are dropped in the Group shelf and the Aggregated Columns are grouped by.

Aggregate columns can be reordered in the exact same ways as columns in a simple table:


<ul style={{listStyle: 'none', marginLeft: '20px'}}>

<li>a) Directly in Table Headers by clicking on a selected header, “grabbing” it to slide the column to the left or right and then “dropping” it in the desired place - either in edit mode (in Chart Builder) or after saving (in Page or Report Builder) <br/> After dropping the column in its new place, the column pills in the shelf appear in that same new order.</li>


>**Note**: Aggregate columns cannot be dragged between, or before the grouped columns.

Aggregate columns can be reordered in two ways:


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/25aggregate.png#thumbnail)


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/26aggregate2.png#thumbnail)



<li>b) From the Columns Shelf: <br/> Columns can also be reordered in the analytic panel by dragging and dropping the column pills in the desired position shelf. This method only applies to the edit mode of charts and can be performed inside Chart Builder.</li>


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/27agg2.png#thumbnail-40)


Grouped columns can only be ordered in design mode, i.e. inside Chart Builder, and only from the columns shelf. For this very same reason, they cannot be reordered by end users, who only work with the saved chart.

</ul>



### Aggregated Formulas

Formulas apply to the values of one row of data and their results are presented as new columns for the same row. Standard formulas can be used on the raw data while aggregated formulas do the same thing for data that has been grouped and aggregated for a chart. Given that distinction, the aggregated formula function is only available in grouped table charts at the moment.


“Aggregated formulas” action item shows up in the action panel only when the table is grouped, otherwise that action item is disabled.

Aggregated Formulas are created using the same UI and syntax as the regular formulas, described in the <a href="/docs/ui-docs/dataviews/formulas" target="_blank">Formulas</a> article. The main difference between the two is that Aggregated Formulas only work on data that has been aggregated by the selected group(s) for the table, and are therefore limited to numeric functions and all aggregated columns in the table chart. 

To create calculations across columns on the aggregated values while creating or editing a grouped table (a table that has at least one column in the Group shelf):

1. Click on the **+ Add Aggregated Formula**.

2. In the *Create Table Formula* modal window, enter a formula name and the desired formula using the available options, **Test** the formula, and click **Save**. You can use any columns of the current context for the construction of the formula.

![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/28table-formula.png#thumbnail-60)

3. The new aggregated formula can be edited or removed by clicking on the **Aggregated formulas** action item.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/29formula-action.png#thumbnail-40)


> **Note**: Only when the table is grouped, the “Aggregated formulas“ action item is displayed in the action panel. If the table is not grouped, this action item is disabled.


### Sorting in Tables

#### Sorting in Ungrouped Tables

Simple tables can be sorted in two different ways. The first one is **Single Sorting**, where you sort one column at a time. The second is called **Multi-Sorting** and it lets you sort multiple columns all at once.


* **Single Sorting**: Every table column contains a sorting icon as by default they are not sorted. If you want to sort the column you just need to click on the icon and it will sort the column’s values in an ascending way. Clicking it again will sort the values in a descending way.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/23sorting-table.gif#thumbnail)



Sorting on another column will remove the sort you have previously applied to a column and the table will keep the last column you had sorted.


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/24sorting-table2.gif#thumbnail)



* **Multi-Column Sorting**: Simple tables have single-sorting enabled by default. If you want to use multi-column sorting, you can find that option on the three-dot menu located in every column header. A multi-column sort option will appear at the top left-hand side of the table. Using this option will let you sort by multiple columns at the same time simply by selecting them from the dropdown list. All sorted columns will appear at the bottom where you can choose either the ascending or descending sort order for each of them individually by clicking on the orange buttons or remove the column’s sort by clicking the **X** icon.


Once the multi-sort column option is active, you can also click on the sort icon of each column’s header to switch the sort order (asc or desc) or to remove it. The multi-column option above the table will be in sync with whatever action you take on the table column’s header.



#### Sorting in Grouped Tables

These allow any number of their grouped columns to be sorted simultaneously, however, the sorting always applies from left to right. Furthermore, only one can be sorted between the last (innermost) grouped column and all of the aggregated columns. In summary, the following points apply to the sorting of grouped table charts:

* When the table chart has one grouped column all the other columns are aggregated and therefore follow the same rule about grouped and aggregated data that applies to all other charts: Either the grouped column or one of the aggregated columns can be sorted and not both at the same time. (See this rule mentioned in the regular XY charts)

* When more than one column is grouped, each group is sorted inside of the group immediately above it. For example, if the data is grouped by “Product Vendor” and “Product Line”, sorting of product lines happens inside of their respective product vendors and not in the entire dataset. That means that even though you can sort multiple grouped columns, you won’t be able to change the order in which they are sorted unless you physically move the grouped columns in the table. In the “Product Vendor” and “Product Line” example, if you want to first group by “Product Line” and then by “Product Vendor”, you have to physically move the grouped “Product Line” column before the grouped “Product Vendor” column (see the next three images).

* When more than one column is grouped, the same “either group or aggregated column” rule applies to the last (innermost) group and the aggregated columns that come after it: You can either sort that grouped column or one of the aggregated columns, but not both.



![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/30mcsort1.png#thumbnail-60)


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/31mcsort2.png#thumbnail-40)


![table](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Table/32mcsort3.png#thumbnail-60)




</div>
