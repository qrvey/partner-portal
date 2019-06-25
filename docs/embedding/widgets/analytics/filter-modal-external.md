---
id: widget-filter-modal-external
title: Filter Modal - Outside Qrvey
sidebar_label: Filter Modal - Outside Qrvey
---

This document is for any developer who wants to know how to implement the filter modal widget outside Qrvey.

Bellow are displayed the configuration object, events, event listeners, methods and an implementation example for this widget.

> This must be used `outside` the Qrvey Platform,.

> Other scenarios like `Qrvey Core`, `Metric Dashboard`, `Page Builder`and `Report Builder` needs a different implementation.


## 1. Configuration Object
To configure a Filter Modal, use the following JSON schema as configuration object:

``` 
{
    "domain": "<QRVEY_CORE_URL>",
    "api_key": "<API_KEY>",
    "user_id": "<USER_ID>",
    "app_id": "<APP_ID>",
    "datasets": [
        { "dataset_id": <USED_DATASET_ID> },
        ...
    ],
    "tokenBoxConfig": {
        "manage_button": <TRUE/FALSE>,
        "data_tokens": [ ...<DATA_TOKENS_ARRAY> ]
    }
}
``` 

**Properties and Values**

Chart properties are defined below:


| **Property** | **Value** | **Required** |
|---|---|---|
| **domain** | `String`, Id of Qrvey User. | Yes |
| **api_key** | `String`, API Key of current Qrvey Environment. | Yes |
| **user_id** | `String`, Id of Qrvey User. | Yes |
| **app_id** | `String`, Id of Qrvey App. | Yes |
| **datasets** | `Array`, set of dataset objects currently used in the view. | No |
| **tokenBoxConfig**| (optional) `Object`, QrveyTokenBox Widget configuration. | No |
| **tokenBoxConfig.manage_button** | `Boolean`, true or false. | No |
| **tokenBoxConfig.data_tokens** | `Array`, set of predefined data tokens. | No |


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

* ### ON\_AN\_OPEN\_FILTERS\_MODAL

    This event call a method inside the widget to open the filter modal.

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