---
id: widget-tabular-view
title: Tabular View
sidebar_label: Tabular View
---
## No Public Doc

<div style={{textAlign: "justify"}}>

This document shows how to implement the Tabular View widget.

Below you will find details of the configuration object, event, listeners, menthods available with this widget.

&gt; This Tabular View widget requires `"<my_cdn>"/tabular-view/andatagrid.js` script file and use of the `<an-datagrid>` Custom HTML Tag.

## Configuration Object

To configure a Tabular View widget, use the following JSON schema as configuration object:

```

{
    "domain": "<QRVEY_CORE_URL>",
    "api_key": "<API_KEY>",
    "user_id": "<USER_ID>",
    "app_id": "<APP_ID>",
    "qrveyid": "<QRVEY_ID>",
    "filters": "<Object>",
    "height": "<Number>",
    "width": "<Number>"
}

```

### Properties and Values

Tabular View properties are defined below:

| **Property** | **Value**                                                                                                              | **Required** |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------ |
| **domain**   | `String`, Qrvey Core URL.                                                                                       | Yes          |
| api_key      | `String`, Optional API Key, you can set up the widget without an api key if it's set in a qrvey session cookie. | No           |
| user_id      | `String`, Optional User id, you can set up the widget without a user id if it's set in a qrvey session cookie.  | No           |
| **app_id**   | `String`, Id of Qrvey App.                                                                                      | Yes          |
| **qrveyid**  | `String`, Id of Qrvey Dataset/Webform.                                                                          | Yes          |
| filters      | `Object`, Filter preferences of Dataset/Webform.                                                                | No           |
| height       | `number`, Height in pixel of Tabular View component.                                                            | No           |
| width        | `number`, Width in pixel of Tabular View component.                                                             | No           |

## Dispatched Events

-   ### ON_CLICK_COLUMN_OPTION

This event is emitted when the user clicks the options button of a column.

-   ### ON_APPLY_DATAGRID_ACTIONS

This event is emitted when the datagrid preferences are updated.

## Event Listeners

-   ### ON_CLOSE_BUCKET_MODAL

This event causes the Tabular View to be reloaded, and is usually triggered  when Bucket Modal is closed and modifications were made.

Your event handler will receive the following object:

| **Property**   | **Value**                                                       | **Required** |
| -------------- | --------------------------------------------------------------- | ------------ |
| **hasChanges** | `Boolean`, Determines if Buckets Modal has been updated. | Yes          |

-   ### ON_CLOSE_FORMULAS_MODAL

This event causes the Tabular View to be reloaded, and is usually triggered  when Formulas Modal is closed and modifications were made.

Your event handler will receive the following object:

| **Property**   | **Value**                                                        | **Required** |
| -------------- | ---------------------------------------------------------------- | ------------ |
| **hasChanges** | `Boolean`, Determines if Formulas Modal has been updated. | Yes          |

## Methods

-   ### downloadCSV

Download the visible datagrid in CSV file.

## Example

```

<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/filter-modal/anfiltermodal.js"></script>

<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/tabular-view/andatagrid.js"></script>

<script>
    window.cfg = {
        api_key: "7245dba7373e6b42578a1d6f8dbc3e843825cd6f",
        user_id: "EABOqd9",
        qrveyid: "KEuM62jLU",
        app_id: "kRnzHtfG0",
        domain: "https://manualqastg.qrvey.com",
        view_id: 'gJJrinBzm'
    }

    window.cfg2 = {
        api_key: '7245dba7373e6b42578a1d6f8dbc3e843825cd6f',
        user_id: 'EABOqd9',
        qrveyid: 'KEuM62jLU',
        app_id: 'kRnzHtfG0',
        domain: 'https://manualqastg.qrvey.com',
        view_id: 'gJJrinBzm',
        height: 700
    }
</script>

<an-datagrid config="cfg"></an-datagrid>
<an-filter-modal config='cfg2'></an-filter-modal>

```

</div>
