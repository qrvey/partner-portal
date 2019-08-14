---
id: widget-custom-view
title: Custom View
sidebar_label: Custom View
---

## 1. Configuration Object
To configure Custom View, use the following JSON schema as configuration object:
 
```
{
    "domain": "<QRVEY_CORE_URL>",
    "api_key": "<API_KEY>",
    "user_id": "<USER_ID>",
    "app_id": "<APP_ID>",
    "qrveyid": "<QRVEY_ID>",    
    ... <ANOTHER_CONFIGURATION>
}
```

** Properties and Values: **

Custom View properties are defined below:

| **Property** | **Value** | **Required** |
|---|---|---|
| **domain** | `String`, Main url of Qrvey Core platform. | Yes |
| **api_key** | `String`, API Key of current Qrvey Environment. | Yes |
| **user_id** | `String`, Id of Qrvey User. | Yes |
| **app_id** | `String`, Id of Qrvey App. | Yes |
| **qrveyid** | `String`, Id of current Qrvey Dataset/Webform | Yes |


** Others configuration properties **
```
{
    "charts_config": {
        "insidemenu": {
            "seedata": <true | false>,
            "filterby": <true | false>,
            "drilldown": <true | false>
        },
        "options": {
            "dragger": <true | false>,
            "filter": <true | false>,
            "menu": <true | false>
        }
    },
    "filters": <FILTERS_OBJECT>,
    "logo": <LOGO_NAME>
}
```
 

| **Property** | **Value** | **Required** |
|---|---|---|
| **logo** | `String`, URL where the icon or logo image is located | Yes |
| **filters** | `Object`, Object to apply filters | Yes |
| **charts_config** | `Object`, Configuration for custom panels, receives some properties to change the appearance or behavior of the panels | Yes |
| **insidemenu** | `Object`, Settings within the menu | Yes |
| **insidemenu.seedata** | `Boolean` | Yes |
| **insidemenu.filterby** | `Boolean` | Yes |
| **insidemenu.drilldown** | `Boolean` | Yes |
| **options** | `Object`, General configuration of custom panels | Yes |
| **options.dragger** | `Boolean` | Yes |
| **options.filter** | `Boolean` | Yes |
| **options.menu** | `Boolean` | Yes |


## 2. Event Listeners

* ### ON_CLOSE_BUCKET_MODAL

Listener to refresh the Custom View component when the Buckets Modal is closed.

Your event handler will receive the following object:

| Property | Value | Required |
|---|---|---|
| **hasChanges** | `Boolean`, True if there were changes within Summary View. | Yes |


* ### ON_AN_CHART_BUILDER_SAVED

Listener when the custom chart is saved.

Your event handler will receive the following object:

| Property | Value | Required |
|---|---|---|
| **chartConfiguration** | `Object`, Chart Configuration. | Yes |

* ### ON_AN_DELETE_CHART

Listener for the implementation of panels update when a chart is removed.
    
Your event handler will receive the following object:

| Property | Value | Required |
|---|---|---|
| **chartConfiguration** | `Object`, Chart Configuration. | Yes |

* ### ON_AN_CHART_DUPLICATED

Listener to refresh the component when the customized chart is duplicated.

Your event handler will receive the following object:

| Property | Value | Required |
|---|---|---|
| **chartConfiguration** | `Object`, Chart Configuration. | Yes |

* ### ON_AN_FILTERS_APPLIED

Listener to apply new filters in sight.

Your event handler will receive the following object:

| Property | Value | Required |
|---|---|---|
| **preferenceFilters** | `Object`, Filter Preferences | Yes |
| **requestFilters** | `Array`, Filters by prefereces from request. | Yes |
| **tabId** | `String`, tab identifier, if applicable (Report Builder or Page Builder) | Yes |


## 3. Methods
* ### downloadView

Download the visible information within Custom View, depending on the type of file.

| Property | Value | Required |
|---|---|---|
| **type** | `String`, The type of download. This can be `csv`,` pdf` or `jpg`. | Yes |

## 4. Example

```
<script src = "https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/custom-view/ancustomview.js"></script>
 
<script>
window.customConfig = {
    domain: 'https://qdev.qrvey.com',
    api_key: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0',
    qrveyid: "Nw9eKKe",
    app_id: "lgVBzjr",
    user_id: "c0T3iVh",
    charts_config: {
      insidemenu: {
        seedata: false,
        filterby: true,
        drilldown: true
      }
    }    
};
</script>
<an-custom-view config="customConfig"> </an-custom-view>
```