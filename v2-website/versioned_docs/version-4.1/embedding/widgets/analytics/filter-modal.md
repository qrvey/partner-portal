---
id: widget-filter-modal
title: Filter Modal
sidebar_label: Filter Modal
original_id: widget-filter-modal
---
<div style={{textAlign: "justify"}}>

This document explains how to implement the filter modal widget outside of Qrvey.

Below are displayed the configuration object, events, event listeners, methods and an implementation example for this widget.

&gt; This must be used `outside` the Qrvey Platform.<br />Other scenarios like `Qrvey Core`, `Metric Dashboard`, `Page Builder`and `Report Builder` each need a different implementation.

## 1. Configuration Object

To configure a Filter Modal, use the following JSON schema as the configuration object:

```

{
    "domain": "https://your_qrvey_domain",
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

The configuration object properties are defined below:

| **Property**                 | **Value**                                                                                                               | **Required** |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------ |
| **domain**                   | `String`, Id of Qrvey User.                                                                                      | Yes          |
| **api_key**                  | `String`, API Key of current Qrvey Environment.                                                                  | Yes          |
| **user_id**                  | `String`, Id of Qrvey User.                                                                                      | Yes          |
| **app_id**                   | `String`, Id of Qrvey App.                                                                                       | Yes          |
| datasets                     | `Array`, set of dataset objects currently used in the view.                                                      | No           |
| tokenBoxConfig               | `Object`, QrveyTokenBox Widget configuration.                                                                    | No           |
| tokenBoxConfig.manage_button | `Boolean`, true or false.                                                                                        | No           |
| tokenBoxConfig.data_tokens   | `Array`, set of predefined data tokens.                                                                          | No           |
| permissions                  | `Object`, allows to manage permissions.                                                                          | No           |
| permissions.scopes           | `Object`, limits scope in filter configuration. Note: If this object isn't defined, all scopes will be available | No           |
| permissions.scopes.global    | `Boolean`, manages global scopes option availability.                                                            | No           |
| permissions.scopes.page      | `Boolean`, manages page scopes option availability.                                                              | No           |
| permissions.scopes.tab       | `Boolean`, manages tab scopes option availability.                                                               | No           |

## 2. Dispatched Events

-   ### ON_AN_FILTERS_APPLIED

      This event call a method inside the widget to open the filter modal.

    | **Property**          | **Value**                                                          | **Required** |
    | --------------------- | ------------------------------------------------------------------ | ------------ |
    | **preferenceFilters** | `Object`, Applied filters ready to use in other widgets.    | Yes          |
    | **requestFilters**    | `Array`, Applied filters ready to send to backend.          | Yes          |
    | applyTo               | `String`, Target name for the filters (ALL or CURRENT_TAB). | No           |
    | panelId               | `String`, Id to identify the Panel in a Tab or Page.        | No           |

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

<an-filter-modal config='{"domain":"https://your_qrvey_domain","api_key":"<API_KEY>","user_id":"<USER_ID>","app_id":"<APP_ID>","view_id":"<VIEW_ID>","datasets":[{"dataset_id":"<DATASET_ID>"},{"dataset_id":"<DATASET_ID>"}],"tokenBoxConfig":{"manage_button":false,"data_tokens":[]}}'></an-filter-modal>
<script src="https://your_qrvey_domain_widget_launcher/app.js"></script>

```

-   Separated Config Object in 'window' environment:

```

<script>
window.FilterModalConfig = {
    "domain": "https://your_qrvey_domain",
    "api_key": "<API_KEY>",
    "user_id": "<USER_ID>",
    "app_id": "<APP_ID>",
    "view_id": "<VIEW_ID>",
    "datasets": [
        { "dataset_id": "<DATASET_ID>" },
        { "dataset_id": "<DATASET_ID>" }
    ],
    "tokenBoxConfig": {
        "manage_button": false,
        "data_tokens": []
    }
}
</script>
<an-filter-modal config="FilterModalConfig"></an-filter-modal>
<script src="https://your_qrvey_domain_widget_launcher/app.js"></script>

```
</div>