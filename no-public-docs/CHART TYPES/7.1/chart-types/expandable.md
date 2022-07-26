---
id: expandable-table
title: Expandable Table
sidebar_label: Expandable Table
---

<div style={{textAlign: "justify"}}>

The expandable data table is a type of group banded report. Each row presents a distinct value from the grouping field with special formatting applied to highlight the value. The number of detail records associated with the grouped value is displayed in parentheses adjacent to the grouped values. Expandable tables are especially useful for organizing datasets with a large number of rows, as multiple detail rows are collapsed by default and only revealed when users click on each group header row.

Each “Group” used to construct the table is displayed as a collapsible header. Expanding each header row will show all of the corresponding detail rows that belong to that group.

![expandable](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Expandable/expandable.png#thumbnail-60)


## Creating an Expandable Table 
A user creates an Expandable Table by dragging and dropping fields from the data source into the columns section on top of the window. Another way to create the table is by dragging and dropping fields into the top table guideline with the label “Drop column as column” when the mouse hovers over the table, as described in the image below.

In the example below, we wanted to show which products and how many of them have been shipped to particular cities and when. We dragged and dropped the *quantityOrdered* and *productName* columns as **Columns**, and *city* and *shippedDate* as **Sections**.


![expandable](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Expandable/expandable2.gif#thumbnail)


## Styling the Expandable Table 
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your table.

### General
* **Freeze First Column** - this checkbox is only displayed when using an “Expandable Table” and is set to “ON” by default:
    * **ON**: This action freezes the first column of the table so that when doing a horizontal scroll, that column remains fixed to the left of the table visualization, while the rest of the table visualization scrolls beneath (a behavior commonly seen in spreadsheet tools).
    * **OFF**: When performing a horizontal scroll, all columns and groups will scroll together. Some columns may disappear from view depending on screen size.
* **Max Groups** - Limits the number of group header rows displayed. This value is set to 10 by default and cannot be lower than 10, while the upper limit does not exist. If there are no columns in the Section shelf, the Max Groups option does not appear.
* **Records per Group** - Records per Group - Limits the number of detail records shown for each expandable group header row. This value is 10 by default and cannot be lower than 10, with no upper limit.
* **Totals** - display the grand total for a selected column or the whole table to get a summary of the number of records for a group or the complete table by clicking **+Add Total**. Choose the column you want to show the Total for, and the type of the Total aggregation (*Select All, Sum, Average, Median, Count, Distinct Count, Minimum, Maximum*). Last but not least, in **Level** you can select if you want to show the total for the whole table or just a selected column. 

![expandable](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Expandable/expandable3.png#thumbnail) 



### Styles
* **Header Color** - set a color for your header using the color picker. 
* **Header Font Color** - set a color for the text in your header using the color picker.
* **Resize Rows** - set a height for your rows. 

### Format
You can apply [Conditional Formatting](../../dataviews/chart-builder/chart-configuration/format.md#small-multiples#conditional-formatting) to your Expandable Table.
Click on **+Add Condition** to start. Pick the color of the text and the color of the cell you’d like to show when your condition is met. Decide if you want to outline the cell or highlight it in the chosen color. Select the column you want to use the condition on, set the operator and decide if it applies to a column of your choice or the entire row. 
Click on **Remove** to remove the conditional formatting.

![expandable](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Expandable/expandable4.gif#thumbnail)


You can also include a column that hasn’t been included in the table. In the dropdown menu, you can see Chart Columns and Other Columns.

![expandable](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Expandable/expandable5.png#thumbnail-40)

### Filters
You can also add Filters to your table by expanding the Filters section in the configuration panel or by clicking on the Filters button in the Toolbar above. Read more about filters and their purpose in this article [here](../../dataviews/chart-builder/chart-configuration/chart-filters.md).


### Resizing Columns
You can manually modify the Column Sizes of Table Charts by simply hovering over the column's header and dragging the column header’s width to the left or right using the marquee tool.

![expandable](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Expandable/expandable6.gif#thumbnail)

### Sorting in Expandable Tables
There are three ways you can sort your columns in Expandable tables: 
From the sorting icon in the column pill - each click changes the sorting: ascending, descending, unsorted.
From the three-dot menu in the column pill - choosing Sort Ascending, Sort Descending, or Clear Sorting from the menu.
Directly from the column header in the table - each click changes the sorting: ascending, descending, unsorted.


![expandable](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Expandable/expandable7.png#thumbnail)




</div>