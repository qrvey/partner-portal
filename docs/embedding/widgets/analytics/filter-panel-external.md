---
id: widget-filter-panel-external
title: Filter Panel - Outside Qrvey
sidebar_label: Filter Panel - Outside Qrvey
---


This document explains how to implement the filter panel widget inside Qrvey Core platform.
Bellow are displayed the configuration object, events, event listeners, methods and an implementation example for this widget.

> This must be used inside `Outside Qrvey App` only.<br/>Other scenarios like `Qrvey Core`, `Report Builder`, `Page Builder`, `Metric Section` each need a different implementation.


## 1. Configuration Object
To configure a Filter Panel, use the following JSON schema as configuration object:
```
{
    "domain": "<QRVEY_CORE_URL>",
    "api_key": "<API_KEY>",
    "user_id": "<USER_ID>",
    "app_id": "<APP_ID>",
    "global": "<TAB_LABEL>",
    "filters": { ...<FILTERS_OBJECT> }
}
```

**Properties and Values**

The configuration object properties are defined below:

| **Property** | **Value** | **Required** |
|---|---|---|
| **domain** | `String`, Main url of Qrvey Core platform. | Yes |
| **api_key** | `String`, API Key of current Qrvey Environment. | Yes |
| **user_id** | `String`, Id of Qrvey User. | Yes |
| **app_id** | `String`, Id of Qrvey App. | Yes |
| **globald** | `Boolean`, Determines if the panel is in a global environment. | Yes |
| filters | (optional) `Object` JSON Object, Data of filters. | No |


## 2. Event Listeners

* ### ON_AN_FILTERS_APPLIED
    Send this event to update the filter data.

    | Property   | Value                                                                                            | Required |
    |------------|--------------------------------------------------------------------------------------------------|----------|
    | **preferenceFilters** | `Object`, Previously applied filters ready to update the current filters data. | Yes      |


## 3. Dispatched Events

* ### ON_AN_OPEN_FILTERS_MODAL
    This event is emitted when the user clicks on the button "Add Filters".

    | Property   | Value                                                                                            | Required |
    |------------|--------------------------------------------------------------------------------------------------|----------|
    | **preferenceFilters** | `Object`, Applied filters ready to use in other widgets. | Yes      |
    | questionid | `String`, Id to identify the editing column. | No      |
    | qrveyid | `String`, Id to identify the Qrvey Dataset or Webform. | No      |
    | linkid | `String`, Id to identify the Data Link if the editing column is linked. | No      |
    | question | `Object`, Data of the editing column. | No      |
    | label | `String`, Target name for the editing filters scope (GLOBAL/PAGE/TAB/PANEL). In this case, it is always GLOBAL. | No      |
    | panelId | `String`, Id to identify the Panel of the editing column. _Not currently used_. | No      |

* ### ON_AN_FILTERS_APPLIED
    This event is emitted when the user performs changes directly in the filters bar.

    | Property   | Value                                                                                            | Required |
    |------------|--------------------------------------------------------------------------------------------------|----------|
    | **preferenceFilters** | `Object`, Applied filters ready to use in other widgets. | Yes      |
    | tabId | `String`, Id to identify the Tab.  | No      |
    | **pageId** | `String`, Id to identify the Page.  | Yes     |

## 4. Example
There are two ways to implement this widget:

* **Inline Config Object as String:**
```
<div class="panel-container" style="height: 100vh; width: 260px;">
<an-filter-panel config='{"domain":"https://qdev.qrvey.com","api_key":"TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0-QRVEY-FRONTEND","user_id":"c0T3iVh","app_id":"lgVBzjr","global":true}'></an-filter-panel>
</div>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/filter-panel/anfilterpanel.js"></script>
```
* **Separated Config Object in 'window' environment:**
```
<script>
window.FilterPanelConfig = {
    "domain": "https://qdev.qrvey.com",
    "api_key": "TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0-QRVEY-FRONTEND",
    "user_id": "c0T3iVh",
    "app_id": "lgVBzjr",
    "global": true
}
</script>
<div class="panel-container" style="height: 100vh; width: 260px;">
<an-filter-panel config="FilterPanelConfig"></an-filter-panel>
</div>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/filter-panel/anfilterpanel.js"></script>
```