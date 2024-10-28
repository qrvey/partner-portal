---
id: general-chart-settings
title: General Chart Settings
sidebar_label: General Chart Settings
tags: [Data Analyst]
sidebar_position: 2
displayed_sidebar: getting-started
---

This section is available for all chart types, however the options in it vary among chart types. All available options, regardless of the applicable chart type, have been listed in alphabetical order and briefly described in this article. Options that are specific to some charts are discussed in more detail in the individual chart type articles and a link is provided where applicable.

### Tooltips

Toggle the **Tooltips** option to display additional information when hovering over data points in a chart. You can also custom-configure information displayed in a widget's chart tooltips using a [Custom Token](../../../software-developer/04-Embedding%20Qrvey%20Widgets/customTokens.md).

### Self-service Options

The **Self-service Options** enable users with the ability to toggle access to self-service features within their data views. Depending on your chart type, these options include:

- **Filtering**: Toggle whether users can apply filters directly to the chart, refining the data displayed according to specific criteria.
- **Column Resizing**: Toggle whether users can adjust the width of a column. (simple and grouped tables only)
- **Column Arrangement**: Toggle whether users can rearrange the relative position of a column. (simple and grouped tables only)
- **Visualization Options**: Toggle whether users can change the visualization of numeric values inside a table between values and bar. (simple and grouped tables only)
- **Sorting**: Toggle whether users can use data sorting. (simple and grouped tables only)
- **Adding/Removing Columns**: Toggle whether users can add/remove grouped columns. (simple and grouped tables only)
- **Change Column Aggregator**: Toggle whether users can adjust how the column data is aggregated. (simple and grouped tables only)
- **Fit To Panel**: Toggle whether users can access the "fit to panel" button.
- **Download**: Toggle whether users can download chart data. Or alternatively, specify formats:
  - **JPG**
  - **PDF**
  - **Excel**
  - **CSV**
  - **CSV Summary**

### Aggregated Formulas
This feature allows you to create a new column of data using a formula that is based on the aggregated columns in a table chart and is explained in more detail in the [Table Charts](../07-Chart%20Types/table.md) article.

* Default: –
* Applies to: Grouped Tables  

### Allow Pagination
This checkbox is only available for ungrouped Table charts and works in conjunction with the Max Rows value. If it is unchecked (default), the table appears without pagination and displays a maximum of rows as selected in the Max Rows control (500 by default), in one long table. If selected, the table will break into smaller pages, each containing 30 rows by default. In this case, the Max Rows control is replaced with Records Per Page control, which determines the number of records displayed per page of the table. In this mode, you can page through all of the data in the dataset. 

* Default: Off
* Applies to: Ungrouped Tables 

### Display Averages
This checkbox is available for Min/Max charts and plots the average point for each data point if it is checked.

* Default: Off
* Applies to: Min/Max charts 

### Fixed Scale
This checkbox is only available for Dial and Bullet gauges and allows you to determine the lower and upper limits of the chart.

* Default: Off
* Applies to: Dial Gauge, Bullet Gauge 

### Freeze First Column
This checkbox is only available for Expandable Table charts and it keeps the first column in place if the table is scrolled horizontally. It is checked by default.

* Default: On
* Applies to: Expandable Tables 

### Labels
Labels checkbox controls showing or hiding labels for Rows and Columns in Crosstab Charts. When the Labels checkbox is marked, an Edit option is automatically added in the three-dot button of the label box. The additional option of Sorting also appears, in the form of another checkbox. Turning on that option adds sorting icons inside the label boxes.

![general](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/general/labels.png#thumbnail)


* Default: Off
* Applies to: Crosstab 

### Legends
This setting is available for charts that support legends, like all multi-series charts, the Combo and Pie charts, as well as most metric and map charts. When on, legends are displayed as colored boxes above the chart, showing the category that is represented by the color. Thresholds have to be defined for metric charts before legends are displayed. 
Legends can be turned off or on from the icons shown in the following image. By default, legends are turned on. 

![general](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/general/legends1.png#thumbnail-20)

![general](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/general/legends2.png#thumbnail-60)


* Default: On
* Applies to: Multi-Series Bar, Multi-Series Line, Multi-Series Symbol, Combo, Pie, Dial, Bullet, Heatmap, Bubble Map, Choropleth Map 

### Max Data Points / Max Slices
Here you can set the maximum number of data points you’d like to display in your chart. By default, the Max Data Points limit is set to 50 for performance reasons, but it can be set to a lower or higher number. To define the max number of data points in your chart, set the desired number in the box which will immediately be reflected in the chart preview. Keep in mind that selecting a large number of data points may cause the charts to have longer loading times.

![general](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/general/max.png#thumbnail-0)


>**Note**: If it appears that your chart is missing data, check the Max Data Points section and increase the limit to show more data on your chart. 

>**Note 2**: The same setting changes name to Max Slices for pie charts.

* Default: 50
* Applies to: Bar, Line, Symbol, Multi-Series Bar, Multi-Series Line, Multi-Series Symbol, Dot Map, Bubble Map, Choropleth Map, Pie, Heatmap, Box & Whisker, Word Cloud 

#### Overriding the Max Data Points Setting

When exporting charts, you can configure the Qrvey platform to override the value set in the Max Data Points field and always export all data. This override is configured using the Backend API. It affects the CSV, CSV Summary, Excel, and PDF export features. For more information, see [Exporting Data](../..//05-Working%20with%20Data/Datasets/03-Analyze/exporting.md).

### Max Groups
This control applies to grouped tables (default 50) and expandable tables (default 10) and determines the maximum number of groups. The setting is there for performance reasons and to prevent accidental grouping of data fields with too many unique values that may result in an excessive number of groups. 

* Default: 50 for Grouped Tables and 10 for Expandable Tables
* Applies to: [Groupd Tables](../07-Chart%20Types/table.md), [Expandable Tables](../07-Chart%20Types/expandable.md)

### Max Rows / Max Columns
These are fields in Crosstab Charts where you can set a maximum limit on the number of rows or columns you want to show. The maximum number of data points is 10,000 in total - this includes both rows and columns, combined. 

* Default: 500 (Rows), 50 (Columns)
* Applies to: [Crosstab](../07-Chart%20Types/crosstab.md) 

### Max Series
This field lets you increase or decrease a limit on the series you want to show in a single category in a multi-series chart, which is by default set to 50. 

* Default: 50
* Applies to: Multi-Series Bar, Multi-Series Line, Multi-Series Symbol 

### Menu Actions 
[Table Charts](../07-Chart%20Types/table.md) offer some options in interaction mode (when the chart is saved and placed on the dashboard). The *Edit* and *Multi-column Sort* options are always available from the three-dot menu in the header of each column. The availability of the two other options, Sorting and Visualization, can be controlled from this section. 
When **Sorting** is checked, it adds the sorting button (<img alt="add" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/general/sort.png" width="2%"/>) to the column header for all columns. When **Visualization** is checked, the command is added in the three-dot menu of numeric columns and allows users to decide whether they want values to be displayed as numeric or as bars.


![general](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/general/menu.png#thumbnail)


* Default: On
* Applies to: [Tables](../07-Chart%20Types/table.md)

### Records per Group
This value controls the maximum number of rows that are retrieved for each group in expandable tables and defaults to 10.

* Default: 10
* Applies to: [Expandable Table](../07-Chart%20Types/expandable.md)

### Sort by
All charts offer sorting capability on their various data columns, however the access point to the sorting options may vary. The **Sort by** option in the General configuration is available for a handful of charts - like the pie chart - that have a simple sorting use case by either the selected category or values column. 
Default sorting depends on the selected chart and the data types of the selected columns. However, you can switch between sorting by the category column and value column by clicking on the **ABC** and **123** icons, respectively. You can also change the direction of sorting from ascending to descending and back, by clicking on the sort direction icons on the right.

![general](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/general/sorting.png#thumbnail-20)

	
For more information, see [Sorting](../sorting.md).

* Default: Values column descending (Pie), Category column ascending (Heatmap)
* Applies to:   Pie ,   Heatmap 

### Subtotals
This option only applies to Crosstab charts and adds subtotals for each column, when more than one category has been added to Columns.

* Default: Off
* Applies to: [Crosstab](../07-Chart%20Types/crosstab.md)

### Table Calculations
Various standard functions can be used to calculate values based on data within the chart. Each table calculation function results in a new column of data that can be plotted in the chart. An example of such a table calculation function is the “running total” of a value within any given group. Read more about configuring Table Calculations here.

* Default: –
* Applies to: [Multi-Series Bar](../07-Chart%20Types/ms-bar.md), [Multi-Series Line](../07-Chart%20Types/ms-line.md), [Multi-Series Symbol](../07-Chart%20Types/ms-symbol.md), [Combo](../07-Chart%20Types/symbol.md), [Table (ungrouped)](../07-Chart%20Types/table.md)

### Tooltips
This section enables you to add [Tooltips](../tooltips.md) based on any column to most chart types. 

* Default: On
* Applies to: All charts other than Table, Crosstab, Expanded Table

### Totals
Totals is an option for all table chart types and is described in detail in those articles.
The option allows for aggregations to be added to rows and columns in Crosstab charts and aggregations for columns in the other types of Table charts. 

* Default: –
* Applies to: [Table](../07-Chart%20Types/table.md), [Crosstab](../07-Chart%20Types/crosstab.md), [Expanded Table](../07-Chart%20Types/expandable.md)
