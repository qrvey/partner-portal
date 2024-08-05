---
id: widget-single-panel
title: Single Panel Widget
sidebar_label: Single Panel Widget
tags: [Software Developer]
sidebar_position: 6
displayed_sidebar: getting-started
---

The Single Panel widget enables you to embed a chart, metric, or summary panel that has already been created in Qrvey Composer.

## Embeddable Script

```html
<!-- Tag -->
<an-panel config="anPanelConfig"></an-panel>

<!-- Config -->
<script>
var config = {
  api_key: "<YOUR_PRIVATE_API_KEY>",
  domain: "https://<YOUR_QRVEY_DOMAIN>",
  user_id: "<USER_ID>",
  app_id: "<APP_ID>"
};
</script>

<!-- Launcher -->
<script type="module" src="<WIDGETS_URL>/qrvey-an-widgets/an-dashboard/andashboard/andashboard.esm.js"></script>
<script nomodule src="<WIDGETS_URL>/qrvey-an-widgets/an-dashboard/andashboard/andashboard.js"></script>```

```

## Configuration Object
The following table lists the properties associated with this widget. 

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, Your organization’s unique API key required to access the Qrvey platform. Never expose your organization’s API key to external users. In Production environments, use a secure token (qv_token) to encrypt the API key. | Yes, if the qv_token is not provided |
| **qv_token** | `String`, A secure token encrypted via JWT to authenticate and authorize embedded widgets. Establishes a secure connection between the host application and the Qrvey system. For more information, see [Embedding Widgets Using a Security Token](../embedding-widgets-security-token.md). | Yes, if the api_key is not provided |
| **app_id** | `String`, ID of the Qrvey application containing the dashboard, report, automation, or web form. | Yes |
| **domain** | `String`, The base URL of your instance of the Qrvey platform. | Yes | 
| **user_id** | `String`, ID of the Qrvey Composer user that owns the application that is being embedded. Optional: You can alternately specify the user ID in a Qrvey session cookie. | Yes, if the user_id is not included in a session cookie  |
| **qrveyid** | `String`, ID of the dataset being used. | Yes |
| **type** | `String`, Type of panel.<br />Accepted values: <br />* CHART <br />* METRIC <br />* SUMMARY | Yes |
| **chart_id** | `String`, ID of the chart to display. **Required if type is CHART.**| Yes |
| **metric_id** | `String`, ID of the metric to display. **Required if type is METRIC.** | Yes |
| **summary_id** | `String`, ID of the summary panel to display. **Required if type is SUMMARY**.| No |
| **summary_type** | `String`, column type. Optional for summary panels.| No |
| **panel** | `Object`, panel options object.| No |
| **panel.header** | `Object`, panel header options object.| No |
| **panel.header.visible** | `Boolean`,determines if the panel header is visible. The default setting is *true*.| No |
| **panel.header.draggable** | `Boolean`, determines if the panel header has an icon to drag and drop the panel. Used by Custom View and Metric View.| No |
| **panel.header.filter** | `Boolean`, determines if the panel header has a filter button to open the Filter Modal widget.| No |
| **panel.header.menu** | `Array/Boolean`, if it's an array, the panel header will show the options passed through the array. If the value is true, the panel header will show a default menu. <br />Accepted values for the array: `EDIT, DOWNLOAD, DUPLICATE, SIZE and DELETE`<br />(Note: SIZE is used only by the Custom View)| No |
|**panel.header.fit_panel**| `Boolean`, set if fit to panel button is enabled. False by default. | No
| **panel.header.title_prefix** | `String`, prefix for the title of the panel.| No |
| **panel.header.externalDownload** | `Array`, set of values to allow external download for defined formats. Used by Page Builder and End User. <br />Accepted values: CSV| No |
| **panel.body** | `Object`, panel body options object.| No | 
| **panel.body.popup** | `Object`, panel body popup options object. Used to show Filter By, See Data and Drill-Down options.|No | 
| **panel.body.popup.items** | `Array`, set of options to show on the popup. Description of properties are below. <br /> Accepted array items format: {<br />label: '<popup_item>', // Required <br />action: <customCallbackFunction()> // Optional<br />customdrills: <<br />}<br />Usage example: [<br />{ label: 'SEEDATA' },<br />{ label: 'FILTERBY' }, <br />{ label: 'DRILLDOWN' }, <br />{ label: 'CUSTOMDRILL' }<br />]|No | 
| **panel.body.popup.items[itemIndex]**| `Object`, popup item options object to use in panel.body.popup.items array.|No | 
| **panel.body.popup.items[itemIndex].label**| `String`, option name. Required for this array.|No | 
| **panel.body.popup.items[itemIndex].action**| `Function`, custom callback function.| No | 
| **panel.body.popup.items[itemIndex].drilldowns**| `Array`, set of column objects. Used by End-Users.| No |
| **panel.body.popup.items[itemIndex].customdrills**| `Array`, set of objects with chart ids, names and other properties. Used by End-Users.| No | 
| **panel.footer**| `Object`, panel footer options object.| No | 
| **panel.footer.visible**| `Boolean`, determines if a panel footer is visible. The default setting is *false*.| No |
| **page_id**| `String`, ID of the page that contains the panel. Required only on Page Builder and End-User.| No |
| **tab_id**| `String`, ID of the tab that contains the panel. Required only on Page Builder, Report Builder and End User.| No |
| **model**| `Object`, dataset model previously defined.| No |
| **panel_view**| `String`, name of the view that contains the panel. Required only on Analyze section. <br />Accepted values: `ANALYZE | ANYWHERE`| No |
| **filterData**|`Object`, set of previously defined filters to be applied in the panel. <br /> `{logic: <Logic Key Structure>}`| No |
| **userFilters**| `Object`, the filters object generated by the user. These filters and filterData filters are applied together. <br />`{filters: <Filters Key Structure>}`| No |
| **id**| `String`, custom ID for the panel element.| No |
| **data**| `Object`, internal chart or metric data configuration previously defined. Used by Chart Builder widget to show the preview panel.| No |
| **inBuilder**| `Boolean`, determines if the panel is the preview on Chart Builder.| No |
| **drilldowns**| `Object`, drilldowns object previously defined. Used by Custom View and Page Builder.| No |
| **customdrills**| `Array`, set of customdrill objects previously defined. Used by End-User.| No |
| **clickable**| `Boolean`, determines if the panel has click events. Used by End User.| No |
| **themeid**| `String`, theme ID to use in the component| No
| **panel.styles**| `Object`, styles options object. These properties will extend from the current theme| No
| **panel.styles.chartsTitle**| `String`, set the charts title color| No
| **panel.styles.chartsFontFamily**| `String`, set the charts font family| No
| **panel.styles.axisDataLabels**| `String`, set axis labels color in charts| No
| **panel.styles.dataLabels**| `String`, color for data labels in charts| No
| **panel.styles.valuesMain**| `String`, set color for axis ticks values in charts| No
| **panel.styles.chartsLegends**| `String`, color for charts legends labels| No
| **panel.styles.chartsTooltips**| `String`, color for charts tooltips| No
| **panel.styles.tableHeaderFont**| `String`, set color for table header texts| No
| **panel.styles.chartsMain**| `String`, set color for chart data points like bars, symbols and lines.| No
| **panel.styles.themePalette**| `Array`, contains a maximum 20 color for char data points like bars, symbols and lines.| No
| **authenticatedSession.email** | `String`, Specifies the email address to associate with the widget. If an address is not specified, exports are sent to the email address associated with the user ID. | No


<!-- 
## Code Samples
The following samples demonstrate how this widget can be used in an HTML page. 

| **Implementation** | **Description** | **Front-end Code** | **Back-end Code** |
| --- | --- | --- | --- |
| Basic API Key | This sample uses a basic API key to embed a Single Panel widget. It does not encrypt the API key and is not suitable for production environments.| [codepen](https://codepen.io/qrveysamples/pen/KKzvqgV/c395bd9162f9d675bb8d02317cc5a1e2) | n/a |
-->

