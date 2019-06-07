---
id: an-custom-charts
title: AN Custom Charts - <an-custom-charts />
sidebar_label: AN Custom Chart - PB
---

This document is for any developer who wants to know how to implement the custom chart panel widget inside `Page Builder`.

Bellow are displayed the configuration Object, events, event listeners, methods and an implementation example for this widget.

This must be used inside Page Builder only, the other scenarios like Qrvey Core Platform needs a different implementation.


## 1. Configuration bject

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

**Properties and Values:**

Chart properties are defined below:

*   **user_id:** `String`, Id of Qrvey User.
*   **app_id:** `String`, Id of Qrvey App.
*   **chart_id:** `String`, Id of Chart.
*   **qrveyid:** `String`, Id of Qrvey Dataset/Webform.
*   **filters:** (optional) `Object`, Data of filters.
*   **drilldowns:** (optional) `Object`, Data of drilldowns.
*   **options:** `Object`, Chart menu configuration data.
    *   **dragger:** `Boolean`, Determines if the panel is draggable. **Must be `false`**.
    *   **filter:** `Boolean`, Determines if the panel has the filter button.
    *   **menu:** `Boolean` or `Array`, Determines if the panel has menu button and/or set the options for that menu.
*   **insidemenu:** `Object`, Chart data point menu configuration data.
    *   **drilldown:** `Boolean`, Determines if the panel has drill down options.
    *   **filterby:** `Boolean`, Determines if the panel has the Filter By option.
    *   **seedata:** `Boolean`, Determines if the panel has the See Data option. **Must be `false`**.
*   **id:** `String`, Id of the web component.
*   **page_id:** `String`, Id of the page inside the Builder.
*   **tab_id:** (optional) `String`, Id of the tab inside the page.




## 2. Dispatched Events:

* ### ON\_AN\_OPEN\_FILTERS\_MODAL

  This event is emitted when the user clicks on the filter button.

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **preferenceFilters** | `Object`, Applied filters ready to use in other widgets. | Yes |
  | **panelData** | `Object`, Data of the panel. | Yes |
  | **qrveyid** | `String`, Id to identify the Qrvey Dataset or Webform. | Yes |
  | **panelId** | `String`, Id to identify the panel. | Yes |
  | **pageId** | `String`, Id to identify the page. | Yes |
  | **tabId** | `String`, Id to identify the tab of the page. | No |

* ### ON\_OPEN\_CHART\_BUILDER

  This event is emitted when the user clicks on the Edit option of the panel menu.

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **filters** | `Array`, Current applied filters transformed for requests. | No |
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



## 3. Event Listeners:

* ### ON\_AN\_FILTERS\_APPLIED

  This event call a method inside the widget to update the filter data.

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **preferenceFilters** | `Object`, Previously applied filters ready to update the current filters data. | Yes |

* ### ON\_AN\_CHART\_BUILDER\_SAVED

  This event call a method inside the widget to update the chart data.

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **chartid** | `String`, Id to identify the current chart. | Yes |

* ### ON\_AN\_CHART\_DRILLDOWN

  This event call a method inside the widget to update the chart data.

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **drilldowns** | `Object`, Data of drilldowns. | Yes |



## 4. Example:

There are two ways to implement this widget:


*   ### Inline Config Object as String:


```
<div style="height: 515px; padding: 5px; width: 33.33333%;">
<an-custom-charts config='{"user_id":"c0T3iVh","app_id":"lgVBzjr","qrveyid":"Nw9eKKe","global":true,"options":{"dragger":false,"filter":true,"menu":["EDIT"]},"insidemenu":{"seedata":false,"filterby":true,"drilldown":true},"chart_id":"Nw9eKKe_3AADdEW","page_id":"PAGEABC","tab_id":"TABABC"}'></an-custom-charts>
</div>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/custom-chart/ancustomcharts.js"></script>

```


*   ### Separated Config Object in `window` environment:


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