---
id: version-5.3-pages_actions
title: Page Actions
sidebar_label: Page Actions
original_id: pages_actions
---

<div style="text-align: justify">

You can configure chart interactions on the page builder by setting up actions when users click on a data point or a chart panel area in the end-user pages.

First, you need to select a chart in the page builder canvas with the page actions section visible in the configuration panel. Select the **On Click** option to configure the actions you want to execute when the users click on the selected chart.

![1_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/page_act_1.png#thumbnail-40)


There are three main sections in the actions configuration page. 

* The first section describes the type of chart where these actions will apply.

* The second section indicates the trigger of the action, data point, or panel. When choosing the panel option, it will trigger a response whenever users click anywhere inside the chart.

* The third and last section shows the available actions to configure. This list could vary depending on the type of chart selected.


![2_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/page_act_2.png#thumbnail-60)

The following is the list of available actions that we currently support. Section Action Types will provide a more detailed description of each one.

* **Page Drill**: Redirect users to another page inside the application.

* **Filter By**: Applies a filter over the chart’s data when users click on a data point.

* **Go To URL**: Redirect users to an external page.

* **Chart Drill Down**: Drill down on data.

## Actions Types

Every action described below needs some configuration to work correctly. In this section, you can find more details on how to configure each of them.

### Page Drill
This action requires a targeted page inside the same application, where users will be redirected after they click on a data point or panel. A complete list of all pages of the current application will be available to select.

![3_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/page_act_3.png#thumbnail-60)

### Filter By
To activate this action, you need to set how the filter will apply in terms of the scope. If you choose Only Chart, the filter is used only on the current chart when users click it. Otherwise, the filter will apply to all charts on the current page with the same data.

![4_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/page_act_4.png#thumbnail-40)

### Go to URL
To activate this action, you need to set an external URL where you want the users to be redirected. The URL should be valid for the action to work. As part of the URL, you can use data or system tokens.

![5_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/page_act_5.png#thumbnail-60)


### Chart Drill Down
To activate it, you first need to define the behavior of the action. There are two options:
* **Default**: Users will drill down on the data and the chart will remain the same. For this option, you need to select the fields/columns of your data set that you want to be available for the users to choose from.


![6_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/page_act_6.png#thumbnail-80)

* **Custom**: Users will drill down on the data, and the chart could change according to the configuration made. You can create different levels where the users will navigate through them while the information is filtered based on where the users clicked.


![7_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/page_act_7.png#thumbnail-60)


## Page Actions in Charts
Once a creator defines page actions for charts, end-users will interact with them when navigating between pages. In this section, we will describe how page actions look like in every supported chart.

### Tables

#### Filter By in Tables
We support Filter By action for grouped tables. When a grouped table has this action defined, users can click on any cell value, and the table will automatically filter by all the categorical values located on the left of the column where the user clicked.

![8_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/8.png#thumbnail)



When clicking on the cell with the value “Health and beauty” of the column Product Line, the table will filter the data, including the one the user clicks, and all the parent values that conform to the grouping. The action will add these values as filters, and you will be able to see it on the filter panel if there is one available.

The same behavior will occur if the user clicks,for example, on any cell in the Total column.

![9_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/9.png#thumbnail)
If the user clicks on the first column’s value, the action will add just just that value to the filters.

![10_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/10.png#thumbnail)

#### Page Drill in Tables
The Page Drill action is available in grouped and ungrouped tables. When a table has this action enabled, end-users will see an underline style onf each cell value. When the mouse cursor is hovering over one of these values, the hand cursor will appear, indicating to the user that this is a clickable value.

![11_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/11.png#thumbnail)

After clicking on the value, the action will redirect the user to the targeted page defined by the creator. If there is more than one action specified in the table, a contextual menu will appear when the user clicks on a cell value showing all of the available page actions.


![12_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/12.png#thumbnail)

### Maps 
#### Go to URL in Maps

We support the Go to URL in Dot Maps and Bubble Maps. When a map has this action defined, users can click on the dot or bubble, and the chart will redirect them to the target URL.

![13_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/13.png#thumbnail)

This action works slightly differently in maps compared to other charts. A creator can define a single “Go to URL” behavior where clicking on a data point will redirect the users to the targeted page or define a multi-level behavior. In this case, you need to set what columns of your dataset the action will use to construct the hierarchical navigation through the contextual menu.

![14_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/14.png#thumbnail)

To set a multi-level behavior, a creator needs to configure the following fields:
* Levels: Defines the data that will appear as part of each level. Only geolocation columns can be used here. A creator can set up to five different levels. Each level must contain a different column.

* The number of records per level: The number of records displayed on each level (based on the sort method.)

* Sort Records: This field defines the sort order of each level: Ascending (Default) or Descending.

If “Go to URL” is the only action defined by the map, users will be redirected to the targeted page immediately. However, if more than one action is specified, a contextual menu will appear with the label specified by the creator to let users decide which action they want to trigger.


![15_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/15.png#thumbnail)

The “Go to URL” action in maps has an additional setting called “Multi-Level,” where users can navigate a multi-level contextual menu built by the creator if the dots or bubbles are plotted on the map contain a geographical hierarchy like State, City, Zip Code. Clicking each level will show the next until the last one, where finally, users will be redirected to the targeted URL.


### Bar Chart
#### Filter By
The Filter By action on a bar chart allows users to filter the data by clicking on a data-point (Bar). For example, you may choose one of the 3 categories, and that action filters the chart according to the selected value.

![16_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/16.png#thumbnail-40)


Based on the creator's configuration, the filter by action could apply to just the chart where you clicked or the full page filtering others charts on the same page. If there is more than one action specified in the chart, a contextual menu will appear when users click on a bar showing all the available page actions.

#### Go to URL
The Go-to URL action on a bar chart redirects users to an external page when clicking on a data-point (bar).

![17_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/17.png#thumbnail-40)


If there is more than one action specified in the chart, a contextual menu will appear when users click on a bar showing all the available page actions.

#### Page Drill
The Page Drill action on a bar chart allows users to interact with the chart’s data-point (bars) by clicking on it, and then the action will redirect them to the targeted page defined by the creator. If there is more than one action specified in the chart, a contextual menu will appear when users click on a bar showing all the available page actions.

![18_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/18.png#thumbnail-40)


### Line Chart
#### Filter By
The Filter By action on a line chart allows users to filter the data by clicking on a data-point (dots). For example, you may choose one of the values, and that action filters the chart according to the selected value.

![19_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/19.png#thumbnail-40)

Based on creator’s configuration, the filter by action could apply to just the chart where you clicked or the full page filtering others charts on the same page. If there is more than one action specified in the chart, a contextual menu will appear when users click on a dot showing all the available page actions.

#### Page Drill
The Page Drill action on a line chart allows users to interact with the chart’s data point (dots) by clicking on it, and then the action will redirect them to the targeted page defined by the creator. If there is more than one action specified in the chart, a contextual menu will appear when users click on the dots showing all the available page actions.

![20_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/20.png#thumbnail-40)


### Symbol Chart
#### Page Drill
The Page Drill action on a symbol chart allows users to interact with the chart’s data point (symbol) by clicking on it, and then the action will redirect them to the targeted page defined by the creator. If there is more than one action specified in the chart, a contextual menu will appear when users click on the symbols showing all the available page actions.

![21_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/21.png#thumbnail-40) 



