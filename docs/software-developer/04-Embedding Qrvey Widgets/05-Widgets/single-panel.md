---
id: widget-single-panel
title: Single Panel Widget
sidebar_label: Single Panel Widget
tags: [Software Developer]
sidebar_position: 6
displayed_sidebar: software-developer
---
<div style={{textAlign: "justify"}}>

This widget allows the user to display a chart, metric or summary panel that has been created previously, through a configuration object where properties are set to define some options and behaviors for the panel.

To obtain the specific configuration object for your environment, go to the *Analyze* tab for the desired dataset and choose the *Summary, Metric,* or *Custom* view option from the menu. You can find the Embed Chart command under the three-dot menu of any panel that you wish to embed. Find and copy the necessary widget configuration code from the dialog that opens upon clicking the option. The code includes all of the necessary properties, including the “domain”, “app_id” and “user_id” property values. You have to provide the unique API key value before including the code in your application. 

The building blocks of the code are explained below:

## HTML Tag And Launcher
The HTML tag for this widget is: 

`<an-panel config=...>`

> **Note**: The configuration property for this widget is called “config”, unlike in most of the other widgets where the same property is called “settings”. 

This widget needs an extra script for proper support in all browsers:

`<script type="module"   src=”https://<WIDGETS_URL>/qrvey-an-widgets/an-dashboard/andashboard/andashboard.esm.js”></script>` (For all browsers support)

`<script nomodule   src=”https://<WIDGETS_URL>/qrvey-an-widgets/an-dashboard/andashboard/andashboard.js”></script>` (Widget launcher)

## Configuration Object
The table below provides general information about each property of this widget’s configuration object along with a description of the expected value. The **Required** column indicates whether the property is required for the configuration object to work properly.


| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, secret identification token to access the application. | Yes |
| **app_id** | `String`, Qrvey application ID where chart builder is being accessed from.| Yes |
| **user_id** | `String`, ID of the user that is accessing chart builder| Yes  |
| **domain** | `String`,  domain URL in which the application is in. | Yes | 
| **qrveyid** | `String`, ID of the dataset being used. | Yes |
| **type** | `String`, type of the panel.<br />Accepted values: <br />* CHART <br />* METRIC <br />* SUMMARY | Yes |
| **chart_id** | `String`, ID of the chart to display. **Required if type is CHART.**| Yes |
| **metric_id** | `String`, ID of the metric to display. **Required if type is METRIC.** | Yes |
| **summary_id** | `String`, ID of the summary panel to display. **Required if type is SUMMARY**.| No |
| **summary_type** | `String`, column type. Optional for summary panels.| No |
| **panel** | `Object`, panel options object.| No |
| **panel.header** | `Object`, panel header options object.| No |
| **panel.header.visible** | `Boolean`,determines if the panel header is visible. The default setting is *true*.| No |
| **panel.header.draggable** | `Boolean`, determines if the panel header has an icon to drag and drop the panel. Used by Custom View and Metric View.| No |
| **panel.header.filter** | `Boolean`, determines if the panel header has a filter button to open the Filter Modal widget.| No |
| **panel.header.menu** | `Array/Boolean`, if it's an array, the panel header will show the options passed through the array. If the value is true, the panel header will show a default menu. <br />Accepted values for the array: `EDIT, DOWNLOAD, DUPLICATE, SIZE and DELETE`<br />(Note: SIZE is used only by the Custom View)| No |
|**panel.header.fit_panel**| `Boolean`, set if fit to panel button is enabled. False by default. | No
| **panel.header.title_prefix** | `String`, prefix for the title of the panel.| No |
| **panel.header.externalDownload** | `Array`, set of values to allow external download for defined formats. Used by Page Builder and End User. <br />Accepted values: CSV| No |
| **panel.body** | `Object`, panel body options object.| No | 
| **panel.body.popup** | `Object`, panel body popup options object. Used to show Filter By, See Data and Drill-Down options.|No | 
| **panel.body.popup.items** | `Array`, set of options to show on the popup. Description of properties are below. <br /> Accepted array items format: {<br />label: '<popup_item>', // Required <br />action: <customCallbackFunction()> // Optional<br />customdrills: <<br />}<br />Usage example: [<br />{ label: 'SEEDATA' },<br />{ label: 'FILTERBY' }, <br />{ label: 'DRILLDOWN' }, <br />{ label: 'CUSTOMDRILL' }<br />]|No | 
| **panel.body.popup.items[itemIndex]**| `Object`, popup item options object to use in panel.body.popup.items array.|No | 
| **panel.body.popup.items[itemIndex].label**| `String`, option name. Required for this array.|No | 
| **panel.body.popup.items[itemIndex].action**| `Function`, custom callback function.| No | 
| **panel.body.popup.items[itemIndex].drilldowns**| `Array`, set of column objects. Used by End-Users.| No |
| **panel.body.popup.items[itemIndex].customdrills**| `Array`, set of objects with chart ids, names and other properties. Used by End-Users.| No | 
| **panel.footer**| `Object`, panel footer options object.| No | 
| **panel.footer.visible**| `Boolean`, determines if a panel footer is visible. The default setting is *false*.| No |
| **page_id**| `String`, ID of the page that contains the panel. Required only on Page Builder and End-User.| No |
| **tab_id**| `String`, ID of the tab that contains the panel. Required only on Page Builder, Report Builder and End User.| No |
| **model**| `Object`, dataset model previously defined.| No |
| **panel_view**| `String`, name of the view that contains the panel. Required only on Analyze section. <br />Accepted values: `ANALYZE | ANYWHERE`| No |
| **filterData**|`Object`, set of previously defined filters to be applied in the panel. <br /> `{logic: <Logic Key Structure>}`| No |
| **userFilters**| `Object`, the filters object generated by the user. These filters and filterData filters are applied together. <br />`{filters: <Filters Key Structure>}`| No |
| **id**| `String`, custom ID for the panel element.| No |
| **data**| `Object`, internal chart or metric data configuration previously defined. Used by Chart Builder widget to show the preview panel.| No |
| **inBuilder**| `Boolean`, determines if the panel is the preview on Chart Builder.| No |
| **drilldowns**| `Object`, drilldowns object previously defined. Used by Custom View and Page Builder.| No |
| **customdrills**| `Array`, set of customdrill objects previously defined. Used by End-User.| No |
| **clickable**| `Boolean`, determines if the panel has click events. Used by End User.| No |
| **themeid**| `String`, theme ID to use in the component| No
| **panel.styles**| `Object`, styles options object. These properties will extend from the current theme| No
| **panel.styles.chartsTitle**| `String`, set the charts title color| No
| **panel.styles.chartsFontFamily**| `String`, set the charts font family| No
| **panel.styles.axisDataLabels**| `String`, set axis labels color in charts| No
| **panel.styles.dataLabels**| `String`, color for data labels in charts| No
| **panel.styles.valuesMain**| `String`, set color for axis ticks values in charts| No
| **panel.styles.chartsLegends**| `String`, color for charts legends labels| No
| **panel.styles.chartsTooltips**| `String`, color for charts tooltips| No
| **panel.styles.tableHeaderFont**| `String`, set color for table header texts| No
| **panel.styles.chartsMain**| `String`, set color for chart data points like bars, symbols and lines.| No
| **panel.styles.themePalette**| `Array`, contains a maximum 20 color for char data points like bars, symbols and lines.| No


> **Note**: Refer to the[ FAQs](../../../getting-started/faqs.md) if you don’t know where to find any of the required configuration properties. 

## Samples
The following samples show the way this widget is used in an HTML page. Please note that the example may not include the non-required properties of the configuration object. 

You can copy and paste this code to your application, after replacing the red values with your own valid values, in order to see the embedded widget in action.


### Basic Sample

```<an-panel config="anpanelConfig"></an-panel>```

```<script>
var anpanelConfig = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "user_id": "<USER_ID>",
    "qrvey_id": "<QRVEY_ID>",
    "type": "CHART",
    "chart_id": "<CHART_ID>",
    "panel": {
        "header": {
            "menu": ["DOWNLOAD"]
        },
        "body": {
            "popup": {
                "items": [
                    { "label": "FILTERBY" },
                    { "label": "DRILLDOWN" }
                ]
            }
        }
    }
}
</script>
```

```
<!-- your launcher js link (replace with your js link) -->
<script type="module" src="https://<WIDGETS_URL>/your_qrvey_an_widgets_container/an-dashboard/andashboard/andashboard.esm.js"></script>
<script nomodule src="https://<WIDGETS_URL>/your_qrvey_an_widgets_container/an-dashboard/andashboard/andashboard.js"></script>
 ```

### See the widget in CodePen:

<iframe
  allowFullScreen
  className="cp_embed_iframe "
  frameBorder={0}
  height={838}
  width="100%"
  name="cp_embed_1"
  scrolling="no"
  src="https://codepen.io/qrveysamples/embed/c395bd9162f9d675bb8d02317cc5a1e2?height=838&theme-id=light&default-tab=result&user=qrveysamples&slug-hash=c395bd9162f9d675bb8d02317cc5a1e2&pen-title=Sample-%20Qrvey%20Single%20Panel&name=cp_embed_1"
  style={{ width: "100%", overflow: "hidden", display: "block" }}
  title="Sample- Qrvey Single Panel"
  loading="lazy"
  id="cp_embed_c395bd9162f9d675bb8d02317cc5a1e2"
/>



### Sample with the filters object generated by a user:


```<an-panel config="anpanelConfig"></an-panel>```
```<button onClick="applyNewFilter()">Apply other filter</button>```

```
<script>
var anpanelConfig = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "user_id": "<USER_ID>",
    "qrvey_id": "<QRVEY_ID>",
    "type": "CHART",
    "chart_id": "<CHART_ID>",
    "panel": {
        "header": {
            "menu": ["DOWNLOAD"]
        },
        "body": {
            "popup": {
                "items": [
                    { "label": "FILTERBY" },
                    { "label": "DRILLDOWN" }
                ]
            }
        }
    },
    "userFilters": {
       "filters": [{
           "operator": "AND",
           "expressions": [
                {
                    "enabled": true,
                    "questionid": "<QUESTION_ID>",
                    "validationType": "<VALIDATION_TYPE>",
                    "value": [
                       "<VALUE_TO_FILTER_1>"
                    ] 
                }
           ]
       }]
    }
}
</script>
```

```
<script>
function applyNewFilter() {
    window.dispatchEvent(new CustomEvent('anApplyUserFilters', {
      detail: {
        "filters": [{
           "operator": "AND",
           "expressions": [
                {
                    "enabled": true,
                    "questionid": "<QUESTION_ID>",
                    "validationType": "<VALIDATION_TYPE>",
                    "value": [
                       "<VALUE_TO_FILTER_2>"
                    ] 
                }
           ]
       }]
      }
    }));
  }
</script>
```

```
<!-- your launcher js link (replace with your js link) -->
<script type="module" src="https://<WIDGETS_URL>/your_qrvey_an_widgets_container/an-dashboard/andashboard/andashboard.esm.js"></script>
<script nomodule src="https://<WIDGETS_URL>/your_qrvey_an_widgets_container/an-dashboard/andashboard/andashboard.js"></script>
```
 

#### See the widget in CodePen:

<iframe
  allowFullScreen
  className="cp_embed_iframe "
  frameBorder={0}
  height={838}
  width="100%"
  name="cp_embed_2"
  scrolling="no"
  src="https://codepen.io/qrveysamples/embed/e3f93036442bf01d677a53431438b6a5?height=838&theme-id=light&default-tab=result&user=qrveysamples&slug-hash=e3f93036442bf01d677a53431438b6a5&pen-title=Single%20Panel%20(AN%20Panel)%20Sample%20-%20Filters%20generated%20by%20user&name=cp_embed_2"
  style={{ width: "100%", overflow: "hidden", display: "block" }}
  title="Single Panel (AN Panel) Sample - Filters generated by user"
  loading="lazy"
  id="cp_embed_e3f93036442bf01d677a53431438b6a5"
/>


</div>



