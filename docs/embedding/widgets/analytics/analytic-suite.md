---
id: analytic-suite
title: Analytic Suite Widget
sidebar_label: Analytic Suite Widget
---
<div style="text-align: justify">

This widget allows the user to display the distinct views available on the analyze side (i.e Summary, Custom, Metric views), through a configuration object where properties are set to define some options and behaviors.

## HTML Tag And Launcher
The HTML tag for this widget is: 
`<an-dashboard config=...>`

> **Note**: The configuration property for this widget is called “config”, unlike most other widgets where the same property is called “settings”. The inconsistency is for some legacy issues and will be addressed in the near future. 

This widget needs an extra script for proper support in all browsers.

`<script type="module"   src=”https://<WIDGETS_URL>/qrvey-an-widgets/an-dashboard/andashboard/andashboard.esm.js”></script> `(For all browsers support)

`<script nomodule   src=”https://<WIDGETS_URL>/qrvey-an-widgets/an-dashboard/andashboard/andashboard.js”></script> `(Widget launcher)



## Configuration Object
The table below provides general information about each property of this widget’s configuration object, along with a description of the expected value. The **Required** column indicates whether the property is required for the configuration object to work properly.



| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, secret identification token to access the application. | Yes |
| **app_id** | `String`, ID of the qrvey application containing the webform.| Yes |
| **user_id** | `String`, ID of the user that edits the widget. | Yes  |
| **domain** | `String`, domain URL in which the application is in. | Yes | 
| **qrveyid** | `String`, ID of the dataset being used.| Yes |
| **settings** | `Object`, general configuration in order to set some behaviors. | No |
| **settings.view** | `String`, determines the initial view to display and it accepts: <br> * SUMMARY_VIEW/MULTI_PANEL <br>* TABULAR_VIEW<br>* CUSTOM_VIEW<br>* METRIC_VIEW<br>Default: MULTI_PANEL (alias for SUMMARY_VIEW)| No |
| **settings.mode** | `String`, determines displaying the complete layout or the views only. It depends on set view and it accepts: <br>* COMPLETE <br>* SIMPLE<br>* Default: COMPLETE | No |
| **settings.displayMode** | `String`, changes the style and extends the layout onto the entire container. <br>* FULL <br>* NORMAL <br>* Default: NORMAL| No |

> **Note**: Refer to the<a href="docs/faqs/faqs-intro/"> FAQs</a> if you don’t know where to find any of the required configuration properties. 

## Sample
The following sample shows the way this widget is used in an HTML page. Please note that the example may not include the non-required properties of the configuration object. 

You can copy and paste this code to your application after replacing the red values with your own valid values in order to see the embedded widget in action.
[sample code:
```
<an-dashboard config="configDashBoard"></an-dashboard>
```
```
<script>
var configDashBoard = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "user_id": "<USER_ID>",
    "qrveyid": "<QRVEY_ID>",
    "settings": {
       "view": "CUSTOM_VIEW"
    }
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

  <p class="codepen" data-height="838" data-theme-id="light" data-default-tab="result" data-user="qrveysamples" data-slug-hash="OJNmMzv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Sample- Qrvey Analytic Suite">
  <span>See the Pen <a href="https://codepen.io/qrveysamples/pen/OJNmMzv">
  Sample- Qrvey Analytic Suite</a> by Qrvey (<a href="https://codepen.io/qrveysamples">@qrveysamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

