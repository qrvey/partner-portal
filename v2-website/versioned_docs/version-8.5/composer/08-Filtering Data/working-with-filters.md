---
id: working-with-filters
title: Working With Interactive Filters
sidebar_label: Working With Interactive Filters
tags: [Data Analyst]
sidebar_position: 2
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>


Filters refine data based on some selected criteria. That is, you can choose particular fields or values and view only the information related to them. To start working with filters, you need to be familiar with the various filter components that are used to create and later interact with the filter inside the Qrvey platform.

## Filter Components
### Filter Modal
The filter modal is the central component when defining filters. It allows you to define the scope, column, conditions, and values to use when filtering your data.

The following image shows the initial state of the filter modal when it’s opened. All data columns of the selected dataset are shown in the area in the center and they can be found using the search box. The filter’s scope may be defined from the dropdown list in the bottom left corner.


![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/1working-filters.png#thumbnail-0)

Once a column is selected the center part of the modal changes to allow you to define your desired criteria. 


![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/filter-comp.png#thumbnail-60) 

1. **Selected column to filter** - You can change your selection by clicking on the arrow on the right side to open the dropdown list of columns.

2. **The operand for filtering** - The default operand may change depending on the selected column’s data type. A complete list of operands is available by clicking on the dropdown list component. The selected operand decides the layout of the next section.

3. **Select All and Searchbox** - You can use the search box next to the **Select All** checkbox to search to add a specific value or enter a new value that does not exist in the data but you wish to add it to the list of your filter values. If you check the **Select All** box, all values are selected and no new values can be entered in the Search box to be a part of the filter.

4. **Values available for the selected column** - If a column with text data type and the EQUAL operand is selected a list of values based on the current data is displayed where you can pick any values from. Scrolling through a long list of values loads more and more of the available data. 

5. Values that have been selected or excluded.
 

This section may look different depending on the operand and the selected column’s data type.


When the **Select All** option is checked and the Dataset is updated, new values are automatically added to the filter. For example, if you create a filter using the *Countries* column and choose to check **Select All**, and then new values are added to the *Countries* column, these values will be automatically added to the filter you had created. 

When you choose **Select all** and uncheck some values, these unchecked values will appear in the filter modal next to *All Except: (name of the value)*. 
If you choose to uncheck some items, the filter will not include new values automatically when the dataset is updated and new values are added to it. 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/filter-modal.png#thumbnail-60) 


Once you have defined your filter’s criteria, the apply button at the bottom of the window will be enabled. Clicking on the **Apply** button will create a new filter, and your data will be refined based on the selected criteria.

### Using Tokens in Filters
Tokens can be used in place of any value that can be typed in or selected for a filter to provide additional flexibility. By typing **{{** in any input box inside the filter dialog all system tokens, as well as aggregates of data columns are presented and can be selected from. This allows for creating filters with conditions to find records where the *customer’s creditLimit is less than the average value of the creditLimit column* as shown in the following image. 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/tokens_filters.png#thumbnail-60)

### Filter Panel
The filter panel on the right side of the screen is the main area where you can see, control, and interact with all filters that have been set for the visuals on your workspace. The same panel can be found in the <a href="/docs/ui-docs/builders/pages/#filter-panel" target="_blank"> Page Builder</a>, <a href="/docs/ui-docs/builders/reports/#filters" target="_blank">Report Builder</a>, <a href="/docs/ui-docs/dataviews/custom-view/#filters" target="_blank">Custom View</a>, <a href="/docs/ui-docs/dataviews/summary-view/#filtering" target="_blank"> Summary View</a>, or <a href="/docs/ui-docs/dataviews/tabular-view/#filters" target="_blank">Tabular View</a>.


![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/intfilter1.png#thumbnail-40)


The panel has several options that can be controlled from the icons above it. 

1. **Add Filter** - opens filter modal to define the filters.
2. **Filter panel settings** - opens the configuration panel to customize the following:
* Show panel in page view - can be checked or unchecked to show or hide the filter panel in the end user view of the page.
* Panel default view - determines if the filter panel in the end user view is going to be open or closed by default. 
* Scope - Determines the look of the panel: whether or not to show the scope icons or colors.
    In the case that scopes are shown with color coding, the colors can be determined for each scope.
<br/>
3. **Options** - disable or delete all filters from the three-dot menu. 
4. **Collapse/Expand** - the filter panel can be collapsed or expanded using this icon.

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/intfilter2.png#thumbnail-0) 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/intfilter3.png#thumbnail-0)


Filters are listed in groups based on their scope. See <a href="/docs/ui-docs/filtering-data/introduction-to-filters">Introduction to Filters</a> to learn more about scopes and their effect on filters.

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/intfilter4.png#thumbnail-40)


You can edit, disable or delete filters within a given scope by clicking on the three-dot menu and choosing one of these actions. You can decide which filter values to apply by checking or unchecking the box next to them. 


The filter panel is interactive and dynamically shows only the filters that apply to the selected component. For instance, if you have both Page and Global filters, and you click on another page, then click on a tab, the Page filters will be hidden from view, as they don’t apply to this page. 



### Free-Standing Filter Controls
Another option to add interactive filters to a page is to add them as free-standing controls that can be placed anywhere on a page and used to filter any chart that is placed on the page and uses the selected data column. Just like the filter modal, the filter components list formulas in the column selection dropdown as well. 

In Qrvey, we provide a set of filter controls that you can drag and drop to the canvas inside the page builder to make them available to end-users when the page is published or embedded in a web application.



![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/intfilter5.png#thumbnail)


#### Date Picker
One of these controls is a date picker filter that acts as a calendar inside the end-user site. To add a date picker filter control, drag it from the list of filter controls located in the toolbar and drop it anywhere on the page and size it appropriately.

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/filter-controls-nv.png#thumbnail-60)
 
![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/6working-filters.png#thumbnail-0)  


Selecting the date picker component will enable the configuration panel where you can configure the default settings.

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/7working-filters.png#thumbnail-0)  


* **Column**: The dataset column (or columns) that will be used to filter the data. End-users will not change this setting so every time they select a value, charts will be refined by the dataset’s column defined by the creator.

* **Label**: This is the placeholder shown inside the date picker component when there is no value selected.

* **Default Operator**: The default logic operator used by the component to filter the data. The default value is EQUAL.

* **Font Type**: You can change the control’s default font type by selecting from a predefined font list.

* **Font Color**: You can change the control’s font color. The default label and the selected values will have this color.

* **Icon / Selectors**: With this setting, you can define the default color for the component’s icon. 


The Date Picker control offers the option to apply the same date filter to multiple columns from any dataset that has been used in the page. For example this feature makes it possible to filter Employees’ *hire date*, and Orders’ *shipped date* with one filter control.

Any number of date type columns in the used datasets appear anc can be selected from the Column dropdown in the filter configuration panel. 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/intfilter6.png#thumbnail-0)  


#### Value List
Another of these controls is a value list filter that acts as a simple list of values that can be selected. To add a value list filter control select it from the list of filter controls located in the toolbar and drop it anywhere on the page and size it appropriately.

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/value1.png#thumbnail-40)  
 
![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/value2.png#thumbnail-40)   

Selecting the value list component will enable the configuration panel where you can configure the default settings.

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/value3.png#thumbnail-0)  


* **Column**: The dataset column that will be used to filter the data. End Users will not be able to change this setting so every time they select a value, charts will be refined by the dataset’s column defined by the creator.

* **Label**: This is the placeholder shown inside the value list component when there is no value selected.

* **Type**: Select between showing the value list as a list or a dropdown. The default option is list type.

* **Font Type**: You can change the control’s default font type by selecting from a predefined font list.

* **Font Color**: You can change the control’s font color. The default label and the selected values will have this color.

* **Icon / Selectors**: With this setting, you can define the default color of the component’s icon. 

##### Cascading Filters
Value List filters can be chained together to create a cascading effect. This feature is used when hierarchical groups are present and you wish for your selection of one filter value to limit the available choices in the next. One example is when *States* and *Counties* are listed in two *Value List* filters and they are linked so that choosing a state from the first filters the second to the counties of the selected state.

In order to create the cascading behavior follow these steps:
1. Add at least two Value List filters to a dashboard page and set those up based on two columns of the **same dataset**. Make sure that there is a logical hierarchy between the two selected columns. For example *Country > State, School > Students*, or similar. In the example below the first filter is set on a list of product vendors and the second list is of the product lines supplied by those vendors. Both lists are tied to the *Products* dataset.


![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/cascade1.png#thumbnail-0)  

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/cascade2.png#thumbnail-0)  


2. In the configuration panel for the second filter check the **Cascade filter** checkbox. This indicates that the values presented in this list will be filtered as soon as the user picks one or more values from another filter. 

3. Define which filter and what data column will initiate the cascading by selecting the desired data column from the **React to cascading column** list. The dropdown automatically offers a list of columns that belong to the same dataset and have been set as the selected column in another Value List filter on the page. You will be prompted if such a filter/column cannot be found.

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/cascade3.png#thumbnail-0)  


4. Publish the page to test the filters in action. Note that the free-standing filters don’t work in edit mode and can only be interacted with when in page view mode. You can see the effect of cascading filters in the following screen capture. 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/cascade4.gif#thumbnail) 


#### Input Box
Input Box allows users to enter a free form text and search for it in any of the selected columns. To add an Input Box control select it from the list of filter controls located in the toolbar and drop it anywhere on the page and size it appropriately. The control consists of a label, an input text box, a drop-down list of operators, and a button to apply the changes and start the search. 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/inputbox.png#thumbnail-40)


Selecting the Input Box component will enable the configuration panel where you can configure the default settings. Any number of columns can be selected to participate in search, as long as they are of the same data type. Selecting the first column will set the data type and limit the list of columns to those with a similar data type.

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/inputbox1.png#thumbnail-40)  

The appearance of the filter control, as well as the available operators may be affected by the data columns that are selected for filtering. For example, selecting a complex data type, such as a *Name* field that is used on a web form, adds an option to select which part of the name has to be searched in. Or choosing a web form field with a Yes/No data type limits the available operators to **Equals** and **Does not equal**, while a more comprehensive list of operators is available for a numeric data type.

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/input-box3.png#thumbnail-40)

## Deciding What To Filter
Depending on your analysis needs you can decide what to use as the subject for filtering: The underlying data, or the aggregated data. For example, are you looking for the sales numbers for all products that are priced under $100 or are you interested in states where your total sales number exceeded $50,000? This section describes how to achieve each of these goals.

### Filters On Dataset Columns
The default way of filtering is by the raw value of a dataset column. This method is employed when you choose one of the columns of the dataset from the filter modal. 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/8working-filters.png#thumbnail-40)  

### Filters On Aggregates
To set the filter on the aggregate value of the data, you need to create a chart that uses one or more aggregated pieces of data. As long as such aggregates exist, they appear in the filter modal, alongside the other columns, and can be selected to be filtered. 


![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/9working-filters.gif#thumbnail)  

You can identify an aggregated column on the filter’s modal by its column name with an aggregation operation in parentheses. In the following example, the count aggregate of the column “Branch” has been selected to be filtered on. 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/10working-filters.png#thumbnail-40)  


## Filtering Based On Relative Dates
Qrvey offers a powerful feature for filtering date-type columns that allows you to create the filter based on a variable date, relative to an anchor date. For instance, if today’s date is 2/8/2021 and you wish to see the data for the last ten months, instead of selecting the fixed date of 4/9/2020 you can simply select “last 10 months from today”.
To initiate a relative date filter select a date type column from your filter modal and select the “In” operator from the list of operators.

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/rel-dat.png#thumbnail-40) 


You can pick your needed unit (Hour, Day, Week, Month, Quarter, Year) and the direction (This, Next, Last). The other controls on the dialog may be removed or disabled based on these selections.  Filters based on hours are only enabled if the date field contains time data.

### Calendar Versus Rolling Date Ranges
If *The Last* or *The Next* is selected as the direction of the date filter, and the unit is set to anything but *Hour* or *Day*, the **Calendar dates** checkbox is enabled and defaults to checked, which takes a calendar-based approach to calculating filter date ranges. 

A calendar-based approach calculates the date ranges, taking into account the start and end date of a calendar's period (week, month, year, etc.). For example, if today’s date is any day in 2021, “the last 2 years” will be calculated as “the last 2 calendar years”, aka 1/1/2020 through 12/31/2021 (assuming that the **Include starting date** checkbox and **Starting From** anchor are left at their default checked and *Current Date* values).

If **Calendar dates** checkbox is unchecked and the other controls stay at their same setting, the date range calculation will be “rolling”. That means that the last two years ]be calculated relative to the anchor date and automatically shifts forward without considering calendar periods. So if today’s date is 2/8/2021 the filter range will be 2/8/2019 through 2/8/2021 today and change to 2/9/2019 through 2/9/2021 tomorrow, and so on. 


### Inclusive Versus Exclusive Date Ranges
If *The Last* or *The Next* is selected as the direction of the date filter, and the unit is set to anything but *Hour* or *Day*, the **Include starting date** checkbox is enabled and defaults to checked. This setting includes the selected date of the anchor in calculating the date range. For example, if today’s date is any day in 2021, “the last 2 years” will include 2021, resulting in 1/1/2020 through 12/31/2021.
However, if the checkbox is unchecked - making the date range exclusive of the anchor date - the last 2 years will result in 1/1/2019 through 12/31/2020. 

>**Note**: The Dates Selected label always shows the calculated date range based on the selected values for the controls. 

## “Dates” Versus “Date Names”
Sometimes there may be a need to filter based on “*date names*” and not dates. An example of this is when you want to find all data for the “*month of January*” and not “*January 2020*”. Or *“Q3”* in general, as opposed to “*Q3 2021*”. 
This can be accomplished by choosing “*Quarter of Year*”, *“Month of Year*”, etc. options in the date filter, as opposed to *Quarter, Month*, etc. This feature is available for date filters when using the *Equals* operator.

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/datefilter.png#thumbnail-40)  


## See/Edit Filters Directly from Charts 
When any filter or filters (other than hidden security filters) apply to a chart, the filter icon on the chart panel is highlighted with a dot, indicating that the chart data has been filtered. In that case, Creators and End Users can see these filters in a small popup, by hovering on the chart’s filter icon. 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/intfilter7.png#thumbnail-40)  
  

### Adding a New Filter
You can add a filter by clicking the **Add Filter** button in the side panel or you can add it directly from the chart. 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/intfilter8.png#thumbnail-0)  


To add a new filter, hover on the filter icon and click the Add Filter link. 

![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/intfilter9.png#thumbnail-20)  


All filters added to the panel will appear in the filter panel and the filter list in the charts.

Filters added from the popup will have the Panel scope.

### Editing / Deleting a Filter
Filters can be edited or deleted directly from the popup. Go to the three-dot menu and click the **Edit** or **Delete** option. 


![interactive-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/interactive-filters/intfilter10.png#thumbnail-40)  

</div>









