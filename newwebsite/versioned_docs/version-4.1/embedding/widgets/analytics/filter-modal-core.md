---
id: widget-filter-modal-core
title: Filter Modal - Core
sidebar_label: Filter Modal - Core
original_id: widget-filter-modal-core
---
## No Public Doc

This document explains how to implement the `filter modal widget` inside `Qrvey Core platform`.

Below are displayed the configuration object, events, event listeners, methods and an implementation example for this widget.

&gt; This must be used inside Qrvey Core platform only. <br />Other scenarios like **Metric Dashboard**, **Report Builder** and **Page Builder** each need a different implementation.

## 1. Configuration Object

To configure a Filter Modal, use the following JSON schema as configuration object:

```

{
    "user_id": "<USER_ID>",
    "app_id": "<APP_ID>",
    "qrveyid": "<QRVEY_ID>",
    "model": { ...<QRVEY_MODEL_OBJECT> },
    "view_id": "<QRVEY_ID>",
    "tokenBoxConfig": {
        "manage_button": <TRUE/FALSE>,
        "data_tokens": [ ...<DATA_TOKENS_ARRAY> ]
    }
}

```

**Properties and Values**

The configuration object properties are defined below:

| **Property**                 | **Value**                                                       | **Required** |
| ---------------------------- | --------------------------------------------------------------- | ------------ |
| **user_id**                  | `String`, Id of Qrvey User.                              | Yes          |
| **app_id**                   | `String`, Id of Qrvey App.                               | Yes          |
| **qrveyid**                  | `String`, Id of Qrvey Dataset/Webform.                   | Yes          |
| model                        | (optional) `Object`, Data of Qrvey Dataset/Webform.      | No           |
| **view_id**                  | `String`, Id of Qrvey Dataset/Webform.                   | Yes          |
| tokenBoxConfig               | (optional) `Object`, QrveyTokenBox Widget configuration. | No           |
| tokenBoxConfig.manage_button | `Boolean`, true or false.                                | No           |
| tokenBoxConfig.data_tokens   | `Array`, set of predefined data tokens.                  | No           |

## 2. Dispatched Events

-   ### ON_AN_FILTERS_APPLIED

      This event call a method inside the widget to open the filter modal.

    | **Property**          | **Value**                                                                         | **Required** |
    | --------------------- | --------------------------------------------------------------------------------- | ------------ |
    | **preferenceFilters** | `Object`, Applied filters ready to use in other widgets.                   | Yes          |
    | **requestFilters**    | `Array`, Applied filters ready to send to backend.                         | Yes          |
    | applyTo               | `String`, Target name for the filters (ALL). _Not currently used._         | No           |
    | panelId               | `String`, Id to identify the Panel in a Tab or Page. _Not currently used._ | No           |

## 3. Event Listeners

-   ### ON_AN_OPEN_FILTERS_MODAL

      This event call a method inside the widget to open the filter modal.

    | **Property**          | **Value**                                            | **Required** |
    | --------------------- | ---------------------------------------------------- | ------------ |
    | **preferenceFilters** | `Object`, Previously applied filters          | Yes          |
    | **qrveyid**           | `String`, Id of current Qrvey Dataset/Webform | Yes          |
    | questionid            | `String`, Id of current Column/Question       | No           |
    | panelData             | `Object`, Data of current Custom Chart        | No           |
    | panelId               | `String`, Id of current Custom Chart          | No           |

## 4. Example

-   Inline Configuration Object as String

```

<an-filter-modal config='{"user_id":"c0T3iVh","app_id":"lgVBzjr","qrveyid":"Nw9eKKe","view_id":"Nw9eKKe","tokenBoxConfig":{"manage_button":false,"data_tokens":[]}}'></an-filter-modal>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/filter-modal/anfiltermodal.js"></script>

```

-   Separated Config Object in 'window' environment:

```

<script>
window.FilterModalConfig = {
    "user_id": "c0T3iVh",
    "app_id": "lgVBzjr",
    "qrveyid": "Nw9eKKe",
    "view_id": "Nw9eKKe",
    "tokenBoxConfig": {
        "manage_button": false,
        "data_tokens": []
    }
}
</script>
<an-filter-modal config="FilterModalConfig"></an-filter-modal>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/filter-modal/anfiltermodal.js"></script>

```
