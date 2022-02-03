---
id: sorting-the-data
title: Sorting the Data 
sidebar_label: Sorting the Data 
---

<div style={{textAlign: "justify"}}>

There are several ways to sort data within the Chart Builder. These different methods are explained later in the <a href="#access-points-for-sorting">Access Points for Sorting</a> section. It is important to keep in mind that by default, for most charts, data is sorted by the grouped column in ascending order. An arrow icon in the pillbox for the data field indicates the sorting direction; the up arrow indicates ascending sort order and the down arrow indicates descending sort order.


![sorting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/sorting/sorting_1.png#thumbnail-40)  


>**Note**: X/Y charts such as Bar, Line, Symbol, Multiseries, as well as all other charts that work based on one grouped Category and one aggregated Value column, can be sorted by either the Category or the Value, but not both at the same time; read about sorting within sorted values in <a href="#dependent-sorting">Dependent Sorting</a>.

![sorting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/sorting/sorting_2.gif#thumbnail)  

To learn more about sorting in specific charts please see the related section in the <a href="/docs/qrvey-composer/chart-types/overview" target="_blank">Chart Types</a> article. 

## Access Points for Sorting
Sorting of data in charts can be initiated from various places in the Chart Builder. These access points are:
* The column pill
* The Sorting section in the configuration panel
* The General section in the configuration panel

### Sorting from the Column Pill
The most direct way to sort by a field is to click the three-dot menu in that field's pillbox. By default, the column pills show their sorting direction using an arrow. Column pills in field types that support various features, like date grouping, show the sorting options under a Sorting sub-group in the menu.

![sorting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/sorting/sorting_3.png#thumbnail-60)  

Those field types that don’t support any other features, such as Series, only list the two sorting options, as seen in the next image.

![sorting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/sorting/sorting_4.png#thumbnail-40)  

### Sorting from the Sorting Section of the Configuration Panel

For the chart types that support this method, a Sorting section appears in the configuration panel that shows a dropdown list of all columns in the dataset, with the selected option set to the column (or aggregated column) that the data is sorted by.

![sorting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/sorting/sorting_5.png#thumbnail-40)  

Using the said dropdown list, you can choose the column to sort the data by, even if the column is not used in the chart. Columns that are used in the chart are listed in a separate group in the dropdown list, along with their role in the chart. The ability to choose an unused column for sorting makes this the most comprehensive method of sorting data.

![sorting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/sorting/sorting_6.png#thumbnail-60)  

### Sorting from the General Section of the Configuration Panel
Other charts that support sorting, but not through the two methods mentioned above, allow sorting from the icons in the **Sort by** subsection under the *General* section of the Configuration Panel.

![sorting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/sorting/sorting_7.png#thumbnail-40)  

The **ABC** icon sorts data by the category column of the chart while the **123** icon performs sorting on the value column. The next two icons decide the direction of sorting, ascending or descending.

## Dependent Sorting
Dependent or Multi-Column sorting is found in Table and Expendable Table Charts. 
It means that the values in columns are sorted within another value - for example, let’s say you have an Expendable Table with *Country* as **Sections** and *City* as **Columns**. By clicking the **Multi-column sort** button and choosing *City* as the sorting column, the city names within the *Country* value will be sorted in an ascending or descending way (this can be determined in the Multi-column sort modal or by clicking on the three-dot menu in the pillbox next to the column you chose for sorting).

![sorting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/sorting/sorting_8.png#thumbnail)  

</div>