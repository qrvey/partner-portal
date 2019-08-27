---
id: widget-buckets-modal
title: Bucketed Column Modal
sidebar_label: Bucketed Column Modal
---

<div style="text-align: justify">

This document explains how to implement the bucket modal widget outside of Qrvey.

Below are displayed the events, event listeners, methods and an implementation example for this widget.

> This must be used `outside` the Qrvey Platform.<br/>Other scenarios like `Qrvey Core`, `Metric Dashboard`, `Page Builder`and `Report Builder` each need a different implementation.


## 1. Configuration Object
> The Buckets Modal widget doesn't have a configuration object.


## 2. Dispatched Events

* ### ON_AN_FILTERS_APPLIED
    This event call a method inside the widget to open the filter modal.

    | **Property**      | **Value**                                                          | **Required** |
    |-------------------|--------------------------------------------------------------------|----------|
    | **preferenceFilters** | `Object`, Applied filters ready to use in other widgets.                   | Yes      |
    | **requestFilters**    | `Array`, Applied filters ready to send to backend.                         | Yes      |
    | **applyTo**           | `String`, Target name for the filters (ALL or CURRENT_TAB).        | No       |
    | **panelId**         | `String`, Id to identify the Panel in a Tab or Page.| No       |

## 3. Event Listeners

* ### ON_AN_OPEN_BUCKETS_MODAL

    This event call a method inside the widget to open the bucket modal.

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **preferenceFilters** | `Object`, Previously applied filters | Yes |
    | **qrveyid** | `String`, Id of current Qrvey Dataset/Webform | Yes |
    | **questionid** | `String`, Id of current Column/Question | No |
    | **panelData** | `Object`, Data of current Custom Chart | No |
    | **panelId** | `String`, Id of current Custom Chart | No |


## 4. Example

* Inline Configuration Object as String
```
<an-filter-modal config='{"domain":"https://qdev.qrvey.com","api_key":"TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0-QRVEY-FRONTEND","user_id":"c0T3iVh","app_id":"lgVBzjr","view_id":"METRIC","datasets":[{"dataset_id":"Nw9eKKe"},{"dataset_id":"Y74Zy87"}],"tokenBoxConfig":{"manage_button":false,"data_tokens":[]}}'></an-filter-modal>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/filter-modal/anfiltermodal.js"></script>
```

* Separated Config Object in 'window' environment:
```
<script>
window.FilterModalConfig = {
    "domain": "https://qdev.qrvey.com",
    "api_key": "TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0-QRVEY-FRONTEND",
    "user_id": "c0T3iVh",
    "app_id": "lgVBzjr",
    "view_id": "METRIC",
    "datasets": [
        { "dataset_id": "Nw9eKKe" },
        { "dataset_id": "Y74Zy87" }
    ],
    "tokenBoxConfig": {
        "manage_button": false,
        "data_tokens": []
    }
}
</script>
<an-filter-modal config="FilterModalConfig"></an-filter-modal>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/filter-modal/anfiltermodal.js"></script>
```
