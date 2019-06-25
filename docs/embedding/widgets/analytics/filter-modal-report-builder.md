---
id: widget-filter-modal-report-builder
title: Filter Modal - RB
sidebar_label: Filter Modal - RB
---

This document is for any developer who wants to know how to implement the filter modal widget inside Report Builder.

Bellow are displayed the configuration object, events, event listeners, methods and an implementation example for this widget.

> This must be used inside **Report Builder only**. 

> Other scenarios like **Qrvey Core**, **Metric Dashboard** and **Page Builder** needs a different implementation.


## 1. Configuration Object
To configure a Filter Modal, use the following JSON schema as configuration object:

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

Chart properties are defined below:

* **domain**: `String`, Main url of Qrvey Core platform.
* **api_key**: `String`, API Key of current Qrvey Environment.
* **user_id**: `String`, Id of Qrvey User.
* **app_id**: `String`, Id of Qrvey App.
* **datasets**: `Array`, set of dataset objects currently used in the view.
* **tokenBoxConfig**: (optional) `Object`, QrveyTokenBox Widget configuration.
    * **manage_button**: `Boolean`, true or false.
    * **data_tokens**: `Array`, set of predefined data tokens.


## 2. Dispatched Events

* ### ON_AN_FILTERS_APPLIED
    This event call a method inside the widget to open the filter modal.

    | **Property**      | **Value**                                                          | **Required** |
    |-------------------|--------------------------------------------------------------------|----------|
    | **preferenceFilters** | `Object`, Applied filters ready to use in other widgets                    | Yes      |
    | **requestFilters**    | `Array`, Applied filters ready to send to backend                          | Yes      |
    | **applyTo**           | `String`, Target name for the filters (ALL). This has no use here.         | No       |
    | **panelId**           | `String`, Id to identify the Panel in a Tab or Page. This has no use here. | No       |

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
    | **tabId** | `String`, Id of current Tab| Yes |


## 4. Example

* Inline Configuration Object as String
```
<an-filter-modal config='{"domain":"https://qdev.qrvey.com","api_key":"TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0-QRVEY-FRONTEND","user_id":"c0T3iVh","app_id":"lgVBzjr","datasets":[{"dataset_id":"Nw9eKKe"},{"dataset_id":"Y74Zy87"}],"tokenBoxConfig":{"manage_button":false,"data_tokens":[]}}'></an-filter-modal>
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