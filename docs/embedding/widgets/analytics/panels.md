---
id: widget-panels
title: Panels
sidebar_label: Panels
---
<div style="text-align: justify">

This document shows how to implement the custom chart panel widget inside `Page Builder`.

Below are displayed the configuration object, events, event listeners, methods and an implementation example for this widget.

This must be used inside Page Builder only, other scenarios such as Qrvey Core Platform need a different implementation.


## Configuration object

To configure a Custom Chart Panel, use the following JSON schema as configuration Object:


```
{
  "user_id": "<USER_ID>",
  "app_id": "<APP_ID>",
  "chart_id": "<CHART_ID>",
  "qrveyid": "<QRVEY_ID>",
  "filters": "<FILTERS_OBJECT>",
  "drilldowns": "<DRILLDOWNS_OBJECT>",
  "options": {
    dragger: false,
    filter: "<true | false>",
    menu: "<true | false | [ MENU_OPTIONS_ARRAY ]>",
  },
  "insidemenu": {
    drilldown: "<true | false>",
    filterby: "<true | false>",
    seedata: false,
  },
  "id": "<COMPONENT_ID>",
  "page_id": "<PAGE_ID>",
  "tab_id": "<TAB_ID>"
}
```

### Properties and Values

Chart properties are defined below:

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **user_id** | `String`, Id of Qrvey User. | Yes |
| **app_id** | `String`, Id of Qrvey App. | Yes |
| **chart_id** | `String`, Id of Chart. | Yes |
| **qrveyid** | `String`, Id of Qrvey Dataset/Webform. | Yes |
| filters | `Object`, Data of filters. | No |
| maker_filters | `Object`, Data of filters by Maker, in order to hide these filters to end user. | No |
| drilldowns | `Object`, Data of drilldowns. | No |
| options | `Object`, Chart menu configuration data. | No |
| options.dragger | `Boolean`, Determines if the panel is draggable. **Must be `false`**. | No |
| options.filter | `Boolean`, Determines if the panel has the filter button. | No |
| options.menu | `Boolean` or `Array`, Determines if the panel has menu button and/or set the options for that menu. | No |
| insidemenu | `Object`, Chart data point menu configuration data. | No |
| insidemenu.drilldown | `Boolean`, Determines if the panel has drill down options. | No |
| insidemenu.filterby | `Boolean`, Determines if the panel has the Filter By option. | No |
| insidemenu.seedata | `Boolean`, Determines if the panel has the See Data option. **Must be `false`**. | No |
| id | `String`, Id of the web component. | No |
| page_id | `String`, Id of the page inside the Builder. | No |
| tab_id | `String`, Id of the tab inside the page. | No |




## Dispatched Events

* ### ON\_AN\_OPEN\_FILTERS\_MODAL

  This event is emitted when the user clicks on the filter button.

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **preferenceFilters** | `Object`, Applied filters ready to use in other widgets. | Yes |
  | **panelData** | `Object`, Data of the panel. | Yes |
  | **qrveyid** | `String`, Id to identify the Qrvey Dataset or Webform. | Yes |
  | **panelId** | `String`, Id to identify the panel. | Yes |
  | **pageId** | `String`, Id to identify the page. | Yes |
  | tabId | `String`, Id to identify the tab of the page. | No |

* ### ON\_OPEN\_CHART\_BUILDER

  This event is emitted when the user clicks on the Edit option of the panel menu.

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | filters | `Array`, Current applied filters transformed for requests. | No |
  | **isNew** | `Boolean`, Determines if the chart is on editing mode. Must be false. | Yes |
  | **user\_id** | `String`, Id of Qrvey User. | Yes |
  | **app\_id** | `String`, Id of Qrvey App. | Yes |
  | **chart\_id** | `String`, Id of current chart. | Yes |
  | **qrveyid** | `String`, Id of current Qrvey Dataset/Webform. | Yes |

* ### ON\_AN\_FILTERS\_APPLIED

  This event is emitted when the user clicks on the Filter By option of the data point menu.

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **preferenceFilters** | `Object`, Applied filters ready to use in other widgets. | Yes |
  | **requestFilters** | `Array`, Current applied filters transformed for requests. | Yes |

* ### ON\_AN\_CHART\_DRILLDOWN

  This event is emitted when the user clicks on a drill down option of the data point menu

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **drilldowns** | `Object`, Data of drilldowns. | Yes |



## Event Listeners

* ### ON\_AN\_FILTERS\_APPLIED

  Use this event to update the filter data.

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **preferenceFilters** | `Object`, Previously applied filters ready to update the current filters data. | Yes |

* ### ON\_AN\_CHART\_BUILDER\_SAVED

  Use this event to update the chart data.

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **chartid** | `String`, Id to identify the current chart. | Yes |

* ### ON\_AN\_CHART\_DRILLDOWN

  Use this event to update the chart drilldown data.

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **drilldowns** | `Object`, Data of drilldowns. | Yes |



## Example

There are two ways to implement this widget:


*   ### Inline Config Object as String


```
<div style="height: 515px; padding: 5px; width: 33.33333%;">
<an-custom-charts config='{"user_id":"c0T3iVh","app_id":"lgVBzjr","qrveyid":"Nw9eKKe","global":true,"options":{"dragger":false,"filter":true,"menu":["EDIT"]},"insidemenu":{"seedata":false,"filterby":true,"drilldown":true},"chart_id":"Nw9eKKe_3AADdEW","page_id":"PAGEABC","tab_id":"TABABC"}'></an-custom-charts>
</div>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/custom-chart/ancustomcharts.js"></script>

```


*   ### Separate Config Object in `window` environment


```
<script>
window.CustomChartConfig = {
"user_id": "c0T3iVh",
"app_id": "lgVBzjr",
    "qrveyid": "Nw9eKKe",
"options": {
    "dragger": false,
    "filter": true,
    "menu": ["EDIT"]
    },
"insidemenu": {
    "seedata": false,
    "filterby": true,
    "drilldown": true
},
"chart_id": "Nw9eKKe_3AADdEW",
"Page_id": "PAGEABC",
"tab_id": "TABABC"
}
</script>
<div style="height: 515px; padding: 5px; width: 33.33333%;">
<an-custom-charts config="CustomChartConfig"></an-custom-charts>
</div>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/custom-chart/ancustomcharts.js"></script>
```