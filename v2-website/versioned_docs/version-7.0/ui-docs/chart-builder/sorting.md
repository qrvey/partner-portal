---
id: sorting-data
title: Sorting the Data
sidebar_label: Sorting the Data
---

<div style={{textAlign: "justify"}}>

There are several ways to sort data within the Chart Builder. These different methods are explained later in the <a href="#access-points-for-sorting">Access Points for Sorting</a> section. It is important to keep in mind that by default, for most charts, data is sorted by the grouped column in ascending order. An arrow icon in the pillbox for the data field indicates the sorting direction; the up arrow indicates ascending sort order and the down arrow indicates descending sort order.

![sorting-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/sort-data/sort1.png) 



>**Note**: XY charts such as Bar, Line, Symbol, Multiseries, as well as all other charts that work based on one grouped Category and one aggregated Value column, can be sorted by either the Category or the Value, but not both at the same time; read about sorting within sorted values in <a href="#dependent-sorting">Dependent Sorting</a>.  

![sorting-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/sort-data/sort.gif#thumbnail) 

Multiseries Charts also can be sorted by either the Category or Value column and the Series column can be sorted independently, at the same time. 
Tables support sorting for all of their columns individually, or in a multi-column manner. Multi-column sorting gives you the option to first sort by one column and lets the next column’s sorting be applied on top of the previous sorting. 

To learn more about sorting in specific charts please see the related articles under <a href="/docs/ui-docs/dataviews/chart-types">Chart Types</a>. 

## Access Points for Sorting
Sorting of data in charts can be initiated from various places in the Chart Builder. These access points are:
* The column pill
* The Sorting section in the configuration panel
* The General section in the configuration panel

### Sorting from the Column Pill
The most direct way to sort by a field is to click the three-dot menu in that field's pillbox. By default, the column pills show their sorting direction using an arrow. Column pills in field types that support various features, like date grouping, show the sorting options under a Sorting sub-group in the menu.

![sorting-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/sort-data/pill1.png#thumbnail-40)  


Those field types that don’t support any other features, such as Series, only list the two sorting options, as seen in the next image.

![sorting-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/sort-data/pill2.png#thumbnail-40) 

Columns used in Tables and Crosstabs also support the removal of sorting to result in an unsorted dataset. The “Clear Sorting” option can be accessed from the same menu off the column pill of these charts.

![sorting-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/sort-data/pill3.png)  

### Sorting from the Sorting Section of the Configuration Panel

For the chart types that support this method, a **Sorting** section appears in the configuration panel that shows a dropdown list of all columns in the dataset, with the selected option set to the column (or aggregated column) that the data is sorted by.

![sorting-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/sort-data/panel1.png#thumbnail-40)  


Using the said dropdown list, you can choose the column to sort the data by, even if the column is not used in the chart. Columns that are used in the chart are listed in a separate group in the dropdown list, along with their role in the chart. The ability to choose an unused column for sorting makes this the most comprehensive method of sorting data.

![sorting-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/sort-data/panel2.png#thumbnail-40)  

### Sorting from the General Section of the Configuration Panel
Other charts that support sorting, but not through the two methods mentioned above, allow sorting from the icons in the **Sort by** subsection under the <a href="/docs/ui-docs/chart-builder/chart-builder-overview">General</a> section of the configuration panel.

![sorting-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/sort-data/general1.png#thumbnail-40)  

The **ABC** icon sorts data by the category column of the chart while the **123** icon performs sorting on the value column. The next two icons decide the direction of sorting, ascending or descending.

## Dependent (Multi-Column) Sorting
Dependent or Multi-Column sorting is found in Table Charts and is a means to sort the values in a column within another value. For example, in a table that contains a list of all Customers with their respective *Country* and *City*, you can choose to sort by either one of those columns by clicking on the column header (or from either column pill in the Chart Builder). 

Sorting by Country in ascending order will result in a list where customers in Australia are listed first, but those in various cities in Australia may appear in any order.

![sorting-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/sort-data/multicolumn.png)  
 


Sorting by *City*, on the other hand, will result in our customers who live in Aachen, Germany to be listed on top - if done in ascending order.

![sorting-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/sort-data/multicolumn2.png)  


If we want to still list Australian customers on top, but also sort the cities **that are in Australia** - or in other words sort cities dependent on the previously-sorted countries - we can enable the feature by selecting it from the three-dot menu in any column’s header.


![sorting-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/sort-data/multicolumn3.png#thumbnail-40)  


Once the feature is enabled, an **Apply Multi-Column Sort** button appears above the table, from where various sorting options can be controlled. Sorting any of the columns after this point will result in its being sorted after - and on top of - the one that was sorted before it. 
The feature can be removed at any time by clicking on the **X** icon on the button, and columns can be added, removed or dragged to another position in the stack to determine the priority of their sorting level.
This feature is explained with more examples in the <a href="/docs/ui-docs/dataviews/chart-types/table">Table Charts</a> article. 


![sorting-data](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/sort-data/multicolumn4.png)  




</div>