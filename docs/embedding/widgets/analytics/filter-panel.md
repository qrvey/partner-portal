---
id: widget-filter-panel
title: Filter Panel - Core
sidebar_label: Filter Panel - Core
---

This document explains how to implement the filter panel widget inside Qrvey Core platform.
Below are displayed the configuration object, events, event listeners, methods and an implementation example for this widget.

> This must be used inside Qrvey Core platform only. <br/>Other scenarios like `Report Builder` and `Page Builder` each need a different implementation.


## 1. Configuration Object
To configure a Filter Panel, use the following JSON schema as the configuration object:
```
{
    "user_id": "<USER_ID>",
    "app_id": "<APP_ID>",
    "qrveyid": "<QRVEY_ID>",
    "filters": { ...<FILTERS_OBJECT> },
    "view_id": "<QRVEY_ID>",
    "total_responses": <TOTAL_RESPONSES>
}
```

**Properties and Values for Each Property:**

The configuration object properties are defined below:

| **Property** | **Value** | **Required** |
|---|---|---|
| **user_id** | `String`, Id of Qrvey User. | Yes |
| **app_id** | `String`, Id of Qrvey App. | Yes |
| **qrveyid** | `String`, Id of Qrvey Dataset/Webform. | Yes |
| filters | `Object`(optional) JSON Object, Data of filters. | No |
| **view_id** | `String`, Id of Qrvey Dataset/Webform view. | Yes |
| **total_responses** | `Number`, number of total records. | Yes |


## 2. Event Listeners

* ### ON_AN_FILTERS_APPLIED
    Send this event to update the filter.

    | Property   | Value                                                                                            | Required |
    |------------|--------------------------------------------------------------------------------------------------|----------|
    | **preferenceFilters** | `Object`, Previously applied filters ready to update the current filters data. | Yes      |

* ### ON_AN_MODEL_CHANGED
    Send this event when the number of total responses is updated.

    | Property   | Value                                                                                            | Required |
    |------------|--------------------------------------------------------------------------------------------------|----------|
    | **numResponses** | `Number`, Total responses updated. | Yes      |



## 3. Dispatched Events

* ### ON_AN_OPEN_FILTERS_MODAL
    This event is emitted when the user clicks on the button "Apply Filters".

    | Property   | Value                                                                                            | Required |
    |------------|--------------------------------------------------------------------------------------------------|----------|
    | **preferenceFilters** | `Object`, Applied filters ready to use in other widgets. | Yes      |
    | questionid | `String`, Id to identify the editing column. | No      |
    | qrveyid | `String`, Id to identify the Qrvey Dataset or Webform. | No      |
    | linkid | `String`, Id to identify the Data Link if the editing column is linked. | No      |
    | question | `Object`, Data of the editing column. | No      |
    | label | `String`, Target name for the editing filters scope (GLOBAL/PAGE/TAB/PANEL). In this case, it is always GLOBAL. | No      |
    | panelId | `String`, Id to identify the Panel of the editing column. This has no use here. | No      |

* ### ON_AN_FILTERS_APPLIED
    This event is emitted when the user clicks on the button "Apply Filters".

    | Property   | Value                                                                                            | Required |
    |------------|--------------------------------------------------------------------------------------------------|----------|
    | **preferenceFilters** | `Object`, Applied filters ready to use in other widgets. | Yes      |
    | tabId | `String`, Id to identify the Tab. _Not currently used_. | No      |
    | pageId | `String`, Id to identify the Page. _Not currently used_. | No      |

## 4. Example
There are two ways to implement this widget:

* **Inline Config Object as String:**
```
<div class="panel-container" style="height: 100vh; width: 260px;">
<an-filter-panel config='{"user_id":"c0T3iVh","app_id":"lgVBzjr","qrveyid":"Nw9eKKe","view_id":"Nw9eKKe","total_responses":300}'></an-filter-panel>
</div>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/filter-panel/anfilterpanel.js"></script>
```
* **Separated Config Object in 'window' environment:**
```
<script>
window.FilterPanelConfig = {
    "user_id": "c0T3iVh",
    "app_id": "lgVBzjr",
    "qrveyid": "Nw9eKKe",
    "view_id": "Nw9eKKe",
    "total_responses": 300
}
</script>
<div class="panel-container" style="height: 100vh; width: 260px;">
<an-filter-panel config="FilterPanelConfig"></an-filter-panel>
</div>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/filter-panel/anfilterpanel.js"></script>
```