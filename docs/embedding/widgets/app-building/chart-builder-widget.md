---
id: chart-builder
title: Chart Builder Widget
sidebar_label: Chart Builder Widget
---
<div style={{textAlign: "justify"}}>

This widget allows the user to display the tool for building charts, through a configuration object where properties are set to define some options and behaviors for the panel.

## HTML Tag And Launcher
The HTML tag for this widget is: 
`<an-chart-builder-modal config=...>`

> **Note**: The configuration property for this widget is called *config*, unlike most other widgets where the same property is called *settings*. The inconsistency is due to some legacy issues and will be addressed in the near future. 
 
This widget needs an extra script for proper support in all browsers.
`<script type="module"   src=”https://<WIDGETS_URL>/qrvey-an-widgets/an-dashboard/andashboard/andashboard.esm.js”></script> `(For all browsers support)

`<script nomodule   src=”https://<WIDGETS_URL>/qrvey-an-widgets/an-dashboard/andashboard/andashboard.js”></script> `(Widget launcher)


## Configuration Object
The table below provides general information about each property of this widget’s configuration object along with a description of the expected value. The **Required** column indicates whether the property is required for the configuration object to work properly. 

To open the chart builder modal and create a new chart, you need to emit a custom event named ON_OPEN_CHART_BUILDER and pass into the detail object these configuration parameters:




| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, secret identification token to access the application. | Yes |
| **app_id** | `String`, Qrvey application ID where chart builder is being accessed from.| Yes |
| **user_id** | `String`, ID of the user that is accessing chart builder| Yes  |
| **domain** | `String`,  domain URL in which the application is in. | Yes | 
| **qrveyid** | `String`, ID of the dataset being used. | Yes |
| **isNew** | `Boolean`, determines if chart builder is being used as new or for edition. | Yes |
| **filters** | `array`, set of previously defined filters to be applied in the preview panel. This has a better use in the Analyze section.| No |
| **isFromAN** | `Boolean`, determines if the chart builder instance is from the Analyze section or not. This has a better use in the Analyze Section. | No |
| **model** | `Object`, configuration of the app, previously defined. Useful in the Analyze Section.| No |


> **Note**: Refer to the<a href="/docs/faqs/faqs-intro/"> FAQs</a> if you don’t know where to find any of the required configuration properties. 

## Sample
The following sample shows the way this widget is used in an HTML page. Please note that the example may not include the non-required properties of the configuration object. 

You can copy and paste this code to your application, after replacing the red values with your own valid values, in order to see the embedded widget in action.

[sample code:
```
<button onclick="openChart()">Open Chart Builder</button>
<an-chart-builder-modal></an-chart-builder-modal>
```
```
<!-- In order to open bucket, formula and filter modal with the chart builder access points, it is required to add the following widgets -->
```
```
<an-bucket-modal></an-bucket-modal>
<an-formula-modal></an-formula-modal>
<an-filter-modal config='filterModalConfig'></an-filter-modal>
```
```
<script>
var chartBuilderConfig = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "user_id": "<USER_ID>",
    "qrvey_id": "<QRVEY_ID>",
    "isNew": true
  }
```
```
var filterModalConfig = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "user_id": "<USER_ID>",
    "qrvey_id": "<QRVEY_ID>"
  }

function openChart() {
    window.dispatchEvent(new CustomEvent('ON_OPEN_CHART_BUILDER', {
      detail: chartBuilderConfig
    }));
  }
</script>
```
```
<!-- your launcher js link (replace with your js link) -->
<script type="module" src="https://<WIDGETS_URL>/your_qrvey_an_widgets_container/an-dashboard/andashboard/andashboard.esm.js"></script>
<script nomodule src="https://<WIDGETS_URL>/your_qrvey_an_widgets_container/an-dashboard/andashboard/andashboard.js"></script>
```
]

## See It In Action
See the widget in CodePen:
<<<<<<< HEAD
<p class="codepen" data-height="838" data-theme-id="light" data-default-tab="result" data-user="qrveysamples" data-slug-hash="ce2037232ed6b7924920fd0e19ec5bb9" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Sample- Qrvey Chart Builder">
  <span>See the Pen <a href="https://codepen.io/qrveysamples/pen/ce2037232ed6b7924920fd0e19ec5bb9">
  Sample- Qrvey Chart Builder</a> by Qrvey (<a href="https://codepen.io/qrveysamples">@qrveysamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
 
=======

<iframe
  allowFullScreen
  className="cp_embed_iframe "
  frameBorder={0}
  height={838}
  width="100%"
  name="cp_embed_1"
  scrolling="no"
  src="https://codepen.io/qrveysamples/embed/ce2037232ed6b7924920fd0e19ec5bb9?height=838&theme-id=light&default-tab=result&user=qrveysamples&slug-hash=ce2037232ed6b7924920fd0e19ec5bb9&pen-title=Sample-%20Qrvey%20Chart%20Builder&name=cp_embed_1"
  style={{ width: "100%", overflow: "hidden", display: "block" }}
  title="Sample- Qrvey Chart Builder"
  loading="lazy"
  id="cp_embed_ce2037232ed6b7924920fd0e19ec5bb9"
/>

</div>
>>>>>>> v2-docusaurus
