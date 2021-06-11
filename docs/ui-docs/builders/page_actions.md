---
id: pages_actions
title: Page Actions
sidebar_label: Page Actions
---

<div style="text-align: justify">


You can configure chart interactions on the page builder by setting up actions when users click on a data point or a chart panel area in the *End User* pages.

To configure these actions, Creators need to:
1. Go to Page Builder and click anywhere on the chart panel you wish to apply an action to.
2. Under Page Actions choose **On Click**

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/pg_act1.png#thumbnail-40) 

3. Choose the action to be configured.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/pg_act2.png#thumbnail-40) 


There are three main sections in the actions configuration page. 

* The first section describes the type of chart where these actions will apply.

* The second section indicates the trigger of the action, data point, or panel. When choosing the panel option, it will trigger a response whenever users click anywhere inside the chart.

* The third and last section shows the available actions to configure. This list could vary depending on the type of chart selected.


![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/page_act_2.png#thumbnail-60)

The following is the list of available actions that we currently support. Section Action Types will provide a more detailed description of each one.

* **Page Drill**: Redirect users to another page inside the application.

* **Filter By**: Applies a filter over the chart’s data when users click on a data point.

* **Go To URL**: Redirect users to an external page.

* **Chart Drill Down**: Drill down on data.

## Actions Types

Every action described below needs some configuration to work correctly. In this section, you can find more details on how to configure each of them.

### Page Drill
Check the **Go to Page** radio button to enable the Page Drill action. This action requires a targeted page inside the same application, where users will be redirected after they click on a data point or panel. A complete list of all pages of the current application will be available to select.

Composers can choose to check the **Apply Filters** checkbox. This will configure the chart so that End Users can click on a data point in a chart and get redirected to a page where all the charts are filtered based on that data point. 

Keep in mind that only the charts using the same dataset can be filtered. If a chart already has filters applied, they will be merged with the new ones. When the Page Drill filter is applied, it creates a Global filter that affects all pages in the application. 

If desired, you can add a custom menu label that End Users will see in the final product. All changes are saved automatically.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/pg_drill1.png#thumbnail-60) 

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/pg_drill2.png#thumbnail-60) 

Following the steps above, everything is set for the End User to just click on a data point in a chart. This pops up the “Go to page" option, which should be clicked on, and the user gets redirected to the target page, seeing the page filtered by the selected data point.


### Filter By
To activate this action, you need to set how the filter will apply in terms of the scope. If you choose Only Chart, the filter is used only on the current chart when users click it. Otherwise, the filter will apply to all charts on the current page with the same data.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/page_act_4.png#thumbnail-40)

### Go to URL
To activate this action, you need to set an external URL where you want the users to be redirected. The URL should be valid for the action to work. As part of the URL, you can use data or system tokens.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/page_act_5.png#thumbnail-60)


### Chart Drill Down
To activate it, you first need to define the behavior of the action. There are two options:
* **Default**: Users will drill down on the data and the chart will remain the same. For this option, you need to select the fields/columns of your data set that you want to be available for the users to choose from.


![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/page_act_6.png#thumbnail-80)

* **Custom**: Users will drill down on the data, and the chart could change according to the configuration made. You can create different levels where the users will navigate through them while the information is filtered based on where the users clicked.


![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/page_act_7.png#thumbnail-60)


## Page Actions in Charts
Once a creator defines page actions for charts, end-users will interact with them when navigating between pages. In this section, we will describe how page actions look like in every supported chart.

### Tables

#### Filter By in Tables
We support *Filter By* action for grouped tables. When a grouped table has this action defined, users can click on any cell value, and the table will automatically filter by all the categorical values located on the left of the column where the user clicked.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/8.png#thumbnail)



When clicking on the cell with the value “Health and beauty” of the column Product Line, the table will filter the data, including the one the user clicks, and all the parent values that conform to the grouping. The action will add these values as filters, and you will be able to see it on the filter panel if there is one available.

The same behavior will occur if the user clicks,for example, on any cell in the Total column.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/9.png#thumbnail)
If the user clicks on the first column’s value, the action will add just just that value to the filters.

![_page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/10.png#thumbnail)

#### Page Drill in Tables
The Page Drill action is available in grouped and ungrouped tables. When a table has this action enabled, end-users will see an underline style onf each cell value. When the mouse cursor is hovering over one of these values, the hand cursor will appear, indicating to the user that this is a clickable value.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/11.png#thumbnail)

After clicking on the value, the action will redirect the user to the targeted page defined by the creator. If there is more than one action specified in the table, a contextual menu will appear when the user clicks on a cell value showing all of the available page actions.


![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/12.png#thumbnail)

### Maps 
#### Go to URL in Maps

We support the *Go to URL* in Dot Maps and Bubble Maps. When a map has this action defined, users can click on the dot or bubble, and the chart will redirect them to the target URL.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/13.png#thumbnail)

This action works slightly differently in maps compared to other charts. A creator can define a single “Go to URL” behavior where clicking on a data point will redirect the users to the targeted page or define a multi-level behavior. In this case, you need to set what columns of your dataset the action will use to construct the hierarchical navigation through the contextual menu.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/14.png#thumbnail)

To set a multi-level behavior, a creator needs to configure the following fields:
* Levels: Defines the data that will appear as part of each level. Only geolocation columns can be used here. A creator can set up to five different levels. Each level must contain a different column.

* The number of records per level: The number of records displayed on each level (based on the sort method.)

* Sort Records: This field defines the sort order of each level: Ascending (Default) or Descending.

If “Go to URL” is the only action defined by the map, users will be redirected to the targeted page immediately. However, if more than one action is specified, a contextual menu will appear with the label specified by the creator to let users decide which action they want to trigger.


![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/15.png#thumbnail)

The “Go to URL” action in maps has an additional setting called “Multi-Level,” where users can navigate a multi-level contextual menu built by the creator if the dots or bubbles are plotted on the map contain a geographical hierarchy like State, City, Zip Code. Clicking each level will show the next until the last one, where finally, users will be redirected to the targeted URL.

#### Filter By
The *Filter By* action on a map allows users to filter the data by clicking on a data-point (a dot in a dot-map and a bubble in a bubble map) and see only the value selected. Depending on the configuration, this action could filter only the current chart or all the charts on the same page.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/maps_filter.png#thumbnail)

If there is more than one action specified in the map, a contextual menu will appear when users click on a data-point showing all the available page actions.

#### Page Drill
The *Page Drill* action on maps allows users to interact with the chart’s data point (dot or bubble depending on the map’s type) by clicking on it, and then the action will then redirect them to the targeted page defined by the creator. If there is more than one action specified in the chart, a contextual menu will appear when users click on the symbols showing all the available page actions.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/maps_filter.png#thumbnail)

### Bar Chart
#### Filter By
The *Filter By* action on a bar chart allows users to filter the data by clicking on a data-point (Bar). For example, you may choose one of the 3 categories, and that action filters the chart according to the selected value.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/16.png#thumbnail)


Based on the creator's configuration, the filter by action could apply to just the chart where you clicked or the full page filtering others charts on the same page. If there is more than one action specified in the chart, a contextual menu will appear when users click on a bar showing all the available page actions.

#### Go to URL
The *Go to URL* action on a bar chart redirects users to an external page when clicking on a data-point (bar).

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/17.png#thumbnail)


If there is more than one action specified in the chart, a contextual menu will appear when users click on a bar showing all the available page actions.

#### Page Drill
The *Page Drill* action on a bar chart allows users to interact with the chart’s data-point (bars) by clicking on it, and then the action will redirect them to the targeted page defined by the creator. If there is more than one action specified in the chart, a contextual menu will appear when users click on a bar showing all the available page actions.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/18.png#thumbnail)


### Line Chart
#### Filter By
The *Filter By* action on a line chart allows users to filter the data by clicking on a data-point (dots). For example, you may choose one of the values, and that action filters the chart according to the selected value.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/19.png#thumbnail)

Based on creator’s configuration, the filter by action could apply to just the chart where you clicked or the full page filtering others charts on the same page. If there is more than one action specified in the chart, a contextual menu will appear when users click on a dot showing all the available page actions.

#### Page Drill
The *Page Drill* action on a line chart allows users to interact with the chart’s data point (dots) by clicking on it, and then the action will redirect them to the targeted page defined by the creator. If there is more than one action specified in the chart, a contextual menu will appear when users click on the dots showing all the available page actions.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/20.png#thumbnail)


### Symbol Chart
#### Page Drill
The *Page Drill* action on a symbol chart allows users to interact with the chart’s data point (symbol) by clicking on it, and then the action will redirect them to the targeted page defined by the creator. If there is more than one action specified in the chart, a contextual menu will appear when users click on the symbols showing all the available page actions.

![page_actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/page_actions/21.png#thumbnail) 



