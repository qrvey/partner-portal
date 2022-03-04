---
id: table-charts
title: Table Charts
sidebar_label: Table Charts
---
 
<div style={{textAlign: "justify"}}>
 
Table charts show data structured in columns and rows and enable users to see the raw data (not aggregated) from the dataset as well as aggregated data grouped by one or more categories.
 
## Table
Tables display data in rows of consecutive columns, in a spreadsheet-like format. This form of visualization provides an easy way to view the data and perform various analytical functions - such as grouping, sorting, and filtering. Tables are best suited either for viewing the raw data in a dataset or for analyzing multiple aggregations of data grouped by one or more categories. Tables support the display of an unlimited number of columns and rows, which allows users to see the raw unaggregated data before additional analysis is performed.
 
 
 
## Expandable Table
The expandable data table is a type of group banded report. Each row presents a distinct value from the grouping field with special formatting applied to highlight the value. The number of detail records associated with the grouped value is displayed in parentheses adjacent to the grouped values. Expandable tables are especially useful for organizing datasets with a large number of rows, as multiple detail rows are collapsed by default and only revealed when users click on each group header row.
 
Each **Group** used to construct the table is displayed as a collapsible header. Expanding each header row will show all of the corresponding detail rows that belong to that group.
 
There can be multiple sections inside each collapsible section, with additional settings like:
* **Freeze First Column** - this checkbox is only displayed when using an “Expandable Table” and is set to “ON” by default:
  * **ON**: This action freezes the first column of the table so that when doing a horizontal scroll, that column remains fixed to the left of the table visualization, while the rest of the table visualization scrolls beneath (a behavior commonly seen in spreadsheet tools).
  * **OFF**: When performing a horizontal scroll, all columns and groups will scroll together. Some columns may disappear from view depending on screen size.
* **Max. Groups** - Limits the number of group header rows displayed. This value is set to 10 by default and cannot be lower than 10, while the upper limit does not exist. If there are no columns in the Section shelf, the Max Groups option does not appear.
* **Records per Group** - Limits the number of detail records shown for each expandable group header row. This value is 10 by default and cannot be lower than 10, with no upper limit.
 
 
## Crosstab
A Crosstab Chart groups variables to show the correlation between different variables and how that correlation changes from one variable group to another. To create a Crosstab Chart, we need three dataset fields: Rows, Columns, and Values. It’s like a pivot chart that displays totals and subtotals for columns and rows, and at the same time allows users to rearrange the measures and dimensions to get a different view of the data. Crosstab Charts are used when we want to show the relationship between two Categorical values, for example, Sales by Month and Year, drilled down to Week and to a specific date. The drill-down values are sub-groups within the parent group and the table values are always aggregations for the associated grouping level.  

## General
### Table
* **Menu Actions**
  * **Sorting** - add the sorting button () to the header.
  * **Visualization** - when unchecked, users can’t toggle and decide whether they want values or bars in the column by clicking on the three-dot menu in the Column and choosing visualization.

* **Totals** - display the total of chosen values.
  * **Columns** - choose the columns you want to perform this on.
  * **Total** - choose the type of the total you want to display (Select All, Average, Median, Count, Distinct Count, Minimum, Maximum).
  * **Level** - determines where the aggregation happens - whether it’s on table level or group level.

* **Table Calculations** - add a calculation to your table - read more about this here.
* **Aggregated Formulas** - add a table formula to your data - read more about it here.
* **Allow Pagination** - in simple tables the data can be spread through pages by checking the pagination option. The number of records per single page can be set manually in **Records per page** (the limit is 1,000). This feature displays information about total records in the table, the number of records per page, and the current page out of all the pages.
* **Max Groups** - this option appears when you add two or more columns to the Groups shelf. It’s set to 10,000 by default.  
 
### Expandable Table
* **Freeze First Column** - when this option is enabled, the first column stays in place as users scroll horizontally left and right.
* **Max Groups** - sets a limit for the number of group header rows that are displayed in the table.
* **Records per Group** - sets a limit on the number of detail records that can appear under each group header row
 
### Crosstab Chart
* **Labels** - show or hide values of Rows, Columns, and Values.
* **Sorting** - when labels are displayed, there are sorting options available clicking on the three-dot menu.
* **Totals** - shows Grand Total at the very bottom of the table.
* **Position** - decide whether you want the total of the column, row, or both.
* **Subtotals** - when you expand the grouping level, it shows the total within that data point (for example, you see total sales for all reps and all years).
* **Max Rows*** - set a limit on the number of rows with the maximum number you want to show.
* **Max Columns*** - set a limit on the number of columns you want to display. <br>
*The maximum number of data points is 10,000 in total - this includes both, rows and columns. In the image below that counts as rows.
 
 
## Styles
* **Header** - Choose the font, weight, size, and color of the text, as well as cell color and borders for your headers. (Table)
 
* **Body** - Choose the font, weight, size, and color of the text, as well as cell color and borders for the rest of the cells in your table. You can also opt for alternating colors of the text and the cells, enable text wrapping, decide on the type of border you want and modify the border color. (Table)
 
* **Header Color** - set a color for your header using the color picker. (Expandable Table, Crosstab)
  * **Header Font Color** - set a color for the text in your header using the color picker. (Expandable Table, Crosstab)
  * **Resize Rows** - set a height for your rows. (Table, Expandable Table)
 
**Format** - set the format for your data points; pick between Default (depending on the format in the Values shelf, e.g. $1,234.56), Abbreviated (e.g. 1.23K), Numeric (e.g. 1,234.56), Currency (e.g. $1,234.56), Percentage (e.g.1,234.56%), Scientific (e.g.1.23e+3). (Crosstab)
 
## Trend Chart
Table Creators can add Trend Charts within a table, where each trend chart occupies a separate column in the table. Adding trend charts to a table allows users to analyze trends for a specified value field, grouped by one or more categories.. There are two types of Trend Charts available: Sparkline-Line and Sparkline-Bar.
 
 
 
>**Note**: Buckets are not supported to create trend charts.
 
Trend Charts can be added in one of two ways:
 
 a. From the Aggregated Column Pill, where you go to the Column shelf and click on the three dots next to the value you’d like to show in a graph. Next, you need to define the chart type and choose what value you want to Trend by.
 
 
 b. From the Configuration Panel, by clicking the +Add Trend Chart button, where you give your Trend Chart a name and define:
 
* **Column** - the value(s) you would like to show in the chart.
* **Trend by Column** - Date or Numeric data types.<br>
If Trend by Column is a date data type, you can apply:
  * Date Grouping- to group your dates by year, quarter, months, weeks, days.
  * Time Period - to choose a period you wish to show in the trend analysis (this year, last year, this quarter, last quarter, this month, last 6 months, etc.).
 
  If Trend by Column is a numeric data type, you can apply:
  * Max Data Points - to limit the number of data points shown when a numeric or string column is used for the “Trend by Column.” (For Sparklines - Bar/Line + Min/Max charts). This does not apply to dates. The default value is set to 50.
 
* **Trend Sort** - to sort the trend visualization in an ascending or descending manner. Applies to all datatypes.
* **Color** - to select the color of the trend chart.
* **Type** - the type of chart you want to show (Sparkline Line or Bar chart).
* **Fill** - when using reference lines you can fill the area above/below the line.
* **Tooltips** - to show/hide tooltips on the trend chart within the table.
* **Show Value** - to show/hide the aggregated values alongside the trend visualization in each cell.
 
 
 
## Format
You can apply <a href="/docs/qrvey-composer/chart-builder/formatting" target="_blank">Conditional Formatting</a> to your Table Charts.
 
## Filters
You can also add Filters to your metrics by expanding the Filters section in the configuration panel or by clicking on the **Filters** button in the Toolbar above the canvas. Read more about filters and their purpose in this article <a href="/docs/qrvey-composer/filters/introduction-to-filters">here.
 
 
 
</div>

