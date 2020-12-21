---
id: working-with-filters
title: Working With Interactive Filters
sidebar_label: Working With Interactive Filters

---

<div style="text-align: justify">


Filters refine data based on some selected criteria. That is, you can choo-----se particular fields or values and view only the information related to them. To start working with filters, you need to be familiar with the various filter components that are used to create and later interact with the filter inside the Qrvey platform.

## Filter Components
### Filter Modal
The filter modal is the central component when defining filters. It allows you to define the scope, column, conditions, and values to use when filtering your data.

The following image shows the initial state of the filter modal when it’s opened. Add data columns of the selected dataset are shown in the area in the center and they can be found using the search box. The filter’s scope may be defined front the dropdown list in the bottom left corner.


![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/1working-filters.png#thumbnail-40)

Once a column is selected the center part of the modal changes to allow you to define your desired criteria.


![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/2working-filters.png#thumbnail-40)

1. **Selected column to filter** - You can change your selection by clicking on the arrow on the right side to open the dropdown list of columns.

2. **The operand for filtering** - The default operand may change depending on the selected column’s data type. A complete list of operands is available by clicking on the dropdown list component. The selected operand decides the layout of the next section.

3. **Values available for the selected column** - If a column with string data type and the EQUAL operand is selected a list of values based on the current data is displayed where you can pick any values from. You can use the text box at the top of this section to search for a value, or enter a new value that does not exist in the data and add it to the list of your filter values. <br> <br>
This section may look different depending on the operand and the selected column’s data type.

Once you have defined your filter’s criteria, the apply button at the bottom of the window will be enabled. Clicking on the apply button will create a new filter, and your data will be refined based on the selected criteria.

### Filter Panel
The filter panel on the right side of the screen is the main area where you can see, control, and interact with all filters that have been set for the visuals on your workspace. The same panel can be found in the <a href="/docs/ui-docs/builders/pages/#filter-panel" target="_blank"> Page Builder</a>, <a href="/docs/ui-docs/builders/reports/#filters" target="_blank">Report Builder</a>, <a href="/docs/ui-docs/dataviews/custom-view/#filters" target="_blank">Custom View</a>, <a href="/docs/ui-docs/dataviews/summary-view/#filtering" target="_blank"> Summary View</a>, or <a href="/docs/ui-docs/dataviews/tabular-view/#filters" target="_blank">Tabular View</a>.


![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/3working-filters.png#thumbnail-40)  

Filters are listed in groups based on their scope. You can disable/enable all filters within a given scope in one shot, by changing the state of the slider button next to the scope. You can also remove all of the filters for that scope from the **x** icon on the right side of the scope. 
You can further exclude/include individual filters from the checkbox next to their name and deselect/select each value from the checkboxes next to the values. Individual values can also be removed from the filter using the **x** icon next to each value. However, adding them back will require editing the filter.

### Free-Standing Filter Controls
Another option to add interactive filters to a page is to add them as free-standing controls that can be placed anywhere on a page and use to filter any chart that is placed on the page and uses the selected data column. 
In Qrvey, we provide a set of filter controls that you can drag and drop to the canvas inside the page builder to make them available to end-users when the page is published or embedded in a web application.

#### Date Picker
One of these controls is a date picker filter that acts as a calendar inside the end-user site. To add a date picker filter control drag it from the list of filter controls located in the toolbar and drop it anywhere on the page and size it appropriately.

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/5working-filters.png#thumbnail-40)

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/4working-filters.png#thumbnail-20)  




Selecting the date picker component will enable the configuration panel, where you can configure the default settings.

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/6working-filters.png#thumbnail-60)  


* **Column**: The dataset column that will be used to filter the data. End-users will not change this setting so every time they select a value, charts will be refined by the dataset’s column defined by the creator.

* **Label**: This is the placeholder shown inside the date picker component when there is no value selected.

* **Default Operator**: The default logic operator used by the component to filter the data. The default value is EQUAL.

* **Font Type**: You can change the control’s default font type by selecting from a predefined font list.

* **Font Color**: You can change the control’s font color. The default label and the selected values will have this color.

* **Icon / Selectors**: With this setting, you can define the default color for the component’s icon. 

## Deciding What To Filter
Depending on your analysis needs you can decide what to use as the subject for filtering: The underlying data, or the aggregated data. For example, are you looking for the sales numbers for all products that are priced under $100 or are you interested in states where your total sales number exceeded $50,000? This section describes how to achieve each of these goals.

### Filters On Dataset Columns
The default way of filtering is by the raw value of a dataset column. This method is employed when you choose one of the columns of the dataset from the filter modal. 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/7working-filters.png#thumbnail-40)  

### Filters On Aggregates
To set the filter on the aggregate value of the data, you need to create a chart that uses one or more aggregated pieces of data. As soon as such aggregates exist, they appear in the filter modal, alongside the other columns, and can be selected to be filtered. 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/8working-filters.gif#thumbnail)  

You can identify an aggregated column on the filter’s modal by its column name with an aggregation operation in parentheses. In the following example, the count aggregate of the column “Branch” has been selected to be filtered on. 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/9working-filters.png#thumbnail-40)  

