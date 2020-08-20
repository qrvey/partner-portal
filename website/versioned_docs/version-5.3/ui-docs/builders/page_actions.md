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

* The first section describes the type of chart where these actions will apply to.

* The second section indicates the trigger of the action, data point, or panel. When choosing the panel option, it will trigger a response whenever users click any place inside the chart.

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


