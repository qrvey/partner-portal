---
id: tabular-view
title: Tabular View
sidebar_label: Tabular View
---

<div style={{textAlign: "justify"}}>

Tabular View offers a traditional, spreadsheet-style view of your data. This is organized into familiar rows and columns. You can add, edit, and delete data as needed. Tabular View also allows for analysis such as filtering, bucketing, and aggregate functions.

![1_tabular-view](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.6_tabular-view/1_tabular-view.png#thumbnail)

## Tabular View Operations
In the upper-right corner, you’ll find icon buttons to add **Formulas**, define **Bucketing**, **Export** data, and **Filter** data. These features are briefly described below and are covered in more detail on separate pages.

![3_tabular-view](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.6_tabular-view/3_tabular-view.png#thumbnail-60)

### Formulas
Use the **Formulas** button to define new columns which will be calculated from existing columns.

### Bucketing
Use the **Bucketing** button to define new columns that map individual values to named ranges, also known as buckets. For example, you could map city population to buckets such as "0 - 1,000", "1,001 - 5,000", etc. Or you could map USA states to buckets such as "Northeast", "Midwest", etc.

### Export
Use the **Export** button to export the data in CSV format.

### Filters

Use the **Filters** button to show or hide the **Filters** panel, which lists all of the defined filters. Some or all of your filters can be quickly enabled, revised, or disabled. Use the **Reset All** link to remove all filters from the Tabular View.

![5_tabular-view](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.6_tabular-view/5_tabular-view.png#thumbnail-40)

## Table Operations

The three buttons above the table column headings allow you to filter and sort the rows as well as select columns to display. 

### Filter
You can apply filters to the table by clicking the **Filter** button. This will bring up a filter dialog box. The exact filter options will vary depending on the column selected to filter on. See the <a href="/docs/ui-docs/dataviews/tabular-view/filters" target="_blank">Filtering Data</a> page for more details.


### Sort
You can manage the sorting configuration by clicking the **Sort** button. This will show and hide the list of sort columns. Use the drop-down to add new columns to the list. As you add sort columns, you can sort in ascending or descending order by choosing the associated **A-Z** or **Z-A** option. Click the **╳** button to remove a sort column and use the drag handle to reorder sort columns. 

![2_tabular-view](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.6_tabular-view/2_tabular-view.png#thumbnail-60)

### Select Columns
Click the **Select Columns** button and then check or uncheck the column names to add or remove columns from the table. Use the **Search** field to locate columns when you have many of them and use the **All** entry to show or hide all columns easily.  


![7_tabular-view](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.6_tabular-view/7_tabular-view.png#thumbnail-40)

## Column Operations

You can reorder and resize columns as well as create aggregates to analyze data in the table.

### Column Order
To reorder columns, click on a column header you want to move, then drag and drop it to a new location.

### Column Size
Hover over the right side of the column heading until the <span style={{ fontSize: "x-large" }}>**⇹**</span> cursor appears. Next, click and drag left or right to adjust the column size.


### Aggregates
You can apply aggregates to any column by selecting the three-dot button in the column header and then selecting **Aggregates**. For text and date fields, you will see only a few options, but for numeric fields, you’ll find a host of aggregation options as shown below.

![6_tabular-view](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.6_tabular-view/6_tabular-view.png#thumbnail-60)

Once you have selected a type of aggregate, you’ll see the results appear in the footer row of the column you had selected.

</div>