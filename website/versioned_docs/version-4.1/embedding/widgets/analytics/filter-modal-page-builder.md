---
id: version-4.1-widget-filter-modal-page-builder
title: Filter Modal - PB
sidebar_label: Filter Modal - PB
original_id: widget-filter-modal-page-builder
---

## No Public Doc

This document explains how to implement the filter modal widget inside Page Builder.

Below are displayed the configuration object, events, event listeners, methods and an implementation example for this widget.

> This must be used inside **Page Builder** only. <br/>Other scenarios like **Qrvey Core**, **Metric Dashboard** and **Report Builder** each need a different implementation.



## 1. Configuration Object
To configure a Filter Modal widget, use the following JSON schema as the configuration object:

``` 
{
    "domain": "<QRVEY_CORE_URL>",
    "api_key": "<API_KEY>",
    "user_id": "<USER_ID>",
    "app_id": "<APP_ID>",
    "datasets": [
        {
            "dataset_id": <USED_DATASET_ID>
        },
        ...
    ],
    "tokenBoxConfig": {
        "manage_button": <TRUE/FALSE>,
        "data_tokens": [ ...<DATA_TOKENS_ARRAY> ]
    }
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
| **datasets** | `Array`, set of dataset objects currently used in the view. | Yes |
| tokenBoxConfig| (optional) `Object`, QrveyTokenBox Widget configuration. | No |
| tokenBoxConfig.manage_button | `Boolean`, true or false. | No |
| tokenBoxConfig.data_tokens | `Array`, set of predefined data tokens. | No |

## 2. Dispatched Events

* ### ON_AN_FILTERS_APPLIED
    This event call a method inside the widget to open the filter modal.

    | **Property**      | **Value**                                                          | **Required** |
    |-------------------|--------------------------------------------------------------------|----------|
    | **preferenceFilters** | `Object`, Applied filters ready to use in other widgets                    | Yes      |
    | **requestFilters**    | `Array`, Applied filters ready to send to backend                          | Yes      |
    | **applyTo**           | `String`, Target name for the filters (ALL). _Not currently used._         | No       |
    | **panelId**           | `String`, Id to identify the Panel in a Tab or Page. _Not currently used._ | No       |

## 3. Event Listeners

* ### ON\_AN\_OPEN\_FILTERS\_MODAL

    This event call a method inside the widget to open the filter modal.

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **preferenceFilters** | `Object`, Previously applied filters | Yes |
    | **qrveyid** | `String`, Id of current Qrvey Dataset/Webform | No |
    | **questionid** | `String`, Id of current Column/Question | No |
    | **panelData** | `Object`, Data of current Custom Chart | No |
    | **panelId** | `String`, Id of current Custom Chart | No |
    | **tabId** | `String`, Id of current Tab| No |
    | **pageId** | `String`, Id of current Page| Yes |


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
<an-filter-modal config="wFilterModalConfig"></an-filter-modal>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/filter-modal/anfiltermodal.js"></script>

```