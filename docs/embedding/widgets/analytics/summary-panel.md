---
id: widget-summary-panel
title: Summary Panel
sidebar_label: Summary Panel
---

<div style="text-align: justify">

This Summary View widget requires `"<my_cdn>"/summary-panel/ ansummarypanel.js` script file and
use the `<an-summary-panel>` Custom HTML Tag.


## Configuration Object

To configure a Summary Panel widget, use the following JSON schema as Configuration Object:

```javascript
{
    domain: "<QRVEY_CORE_URL>",
    api_key: "<API_KEY>",
    user_id: "<USER_ID>",
    app_id: "<APP_ID>",
    qrveyhash: "<QRVEY_HASH>",
    qrveyid: "<QRVEY_ID>",
    questionid: "<QUESTION_ID>"
}
```

### Properties and Values

| **Property** | **Value** |
| --- | --- |
| **domain** | `String`, Qrvey Core URL. |
| **api_key** | `String`, Api Key. Identification code to connect to the data. |
| **user_id** | `String`, User identifier. |
| **app_id** | `String`, Identifier of the Qrvey application. |
| **qrveyhash** | `String`, Qrvey Hash. |
| **qrveyid** | `String`, Identifier of the Qrvey. |
| **questionid** | `String`, Identifier of the question or column |
    

### Other configuration properties
```javascript
{
    widgetConfig: {
        height: "<String>"
        filters: "<true | false>",
        showIndex: "<Boolean>",
        globalFilter: "<Boolean>",
        bitbucket: "<Boolean>",
        search: "<Boolean>",
        branch: "<Boolean>",
        menu: "<Boolean>",
        download: "<Boolean>",
        embed: "<Boolean>",
        viewAction: "<Boolean>",
        sort: "<Boolean>",
        activeView: "<String>",
        groupingActive: "<String>",
        sortingActive: "<String>",
        displayingActive: "<String>",
        drillConfig: {
            enabled: "<Boolean>",
            persist: "<Boolean>"
        }
    },
    tab_id: "<String>",
    page_id: "<String>"
}
```

### Properties and Values

| **Property** | **Value** |
| --- | --- |
| **widgetConfig** | `Object`, Configuration for the panel, receives some properties to change the appearance or behavior of the panel. |
| **widgetConfig.height** | `String`, Length or percentage of the height that the panel will take. |
| **widgetConfig.filters** | `Boolean`, Activate or deactivate the filter button inside the panels. |
| **widgetConfig.showIndex** | `Boolean`. Condition to enable indexes within the panels. |
| **widgetConfig.globalFilter** | `Boolean`, |
| **widgetConfig.bitbucket** | `Boolean`, |
| **widgetConfig.search** | `Boolean`, |
| **widgetConfig.branch** | `Boolean`, activate the branches of the panels if they exist. |
| **widgetConfig.menu** | `Boolean`, activate the panel menu. |
| **widgetConfig.download** | `Boolean`, activate the options for downloading panels. |
| **widgetConfig.embed** | `Boolean`, establishes behaviors and appearance when the panel is embedded, for example, do not show branches, execute external filters to the component and ignore the showIndex. |
| **widgetConfig.viewAction** | `Boolean`, show the change view list. |
| **widgetConfig.sort** | `Boolean`, show the list of data organization. |
| **widgetConfig.activeView** | `String`. Type of View to show the results; It will depend on the type of panel. |
| **widgetConfig.groupingActive** | `String`, Type of result grouping for certain panel types; It is not required for all panel types. |
| **widgetConfig.sortingActive** | `String`, Type of organization of results. It will depend on the type of panel; It is not required for all panel types. |
| **widgetConfig.displayingActive** | `String`, Type of display for the Lookup panel type. It shows several titles for the results. |
| **widgetConfig.drillConfig** | `Object`, configuration for the drilldown present in some visualizations of the panels. |
| **widgetConfig.drillConfig.enabled** | `Boolean`, enable or disable the panel drilldown. |
| **widgetConfig.drillConfig.persist** | `Boolean`, keep the drilldown with the last configuration activated. |
| **tab_id** | `String`, optional identifier of the Report Builder tab and Page Builder to set preferences and filters. |
| **page_id** | `String`, optional identifier of the page in Page Builder to set filters. |



## Event Listeners

* ### body:click

    Listener that closes the menus of the panel when it is clicked out of its contents.

* ### ON_AN_SAVE_PREFERENCE_COMPONENT

    Listener to save panel preferences.

    _`event.detail`_ Object:

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **preferences** | `` any``, Object with panel preferences | Yes |



* ### triggerFilteringPanel

    Listener to save the filter preferences.

    _`event.detail`_ Object:

    | **Value** | **Required** |
    | --- | --- |
    | `` any``, the filter selected to save. | Yes |

* ### triggerGroupingPanel

    Listener to save the grouping preferences.

    _`event.detail`_ Object:

    | **Value** | **Required** |
    | --- | --- |
    | `any`, the group selected to save. | Yes |

* ### triggerDisplayingPanel

    Listener to save displaying preferences.

    _`event.detail`_ Object:

    | **Value** | **Required** |
    | --- | --- |
    | `any`, the selected display to save. | Yes |

* ### triggerDownload

    Listener to download the panel information.

    _`event.detail`_ Object:

    | **Value** | **Required** |
    | --- | --- |
    | `String`, the type of panel download. The types of downloads are: `csv`,` pdf`, `jpg` | Yes |

* ### triggerToggleBranch

    Listener to show and hide the branches of a panel.

    Inside _detail_ of _Event_ you will find the properties that the function will receive:

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **status** | `Boolean`, the state of the branch. True for active, False for inactive. | Yes |
    | **close** | `Boolean`, the branch closed or shown. | |



## Methods

* ### getPanelHeight

    Get the height of the panel.

    **Returns**: `Number`. The height of the panel.


* ### getHtmlToDownload

    Get the HTML of the panel to download it.

    | **Param** | **Description** | **Required** |
    | --- | --- | --- |
    | **width** | `Number`, The width of the panel that you want to download. | Yes |
    | **height** | `Number`, the height of the panel that you want to download. | Yes |
    
    ** Returns**: `String`. The HTML of the panel.

* ### resize

    Reset the component configuration
    
## Example
```xml
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/summary-panel/ansummarypanel.js"></script>
 
<script>
  window.summaryPanelConfig = {
    domain: 'https://qdev.qrvey.com',
    api_key: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0',
    qrveyid: "Uag5tG4NE",
    app_id: "S4tLP9k",
    user_id: "FyHYizH"
    widgetConfig: {
      height: '100%'
    }
  }
</script>

<an-summary-panel config="summaryPanelConfig"></an-summary-panel>
```