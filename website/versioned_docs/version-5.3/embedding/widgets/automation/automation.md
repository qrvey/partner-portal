---
id: version-5.3-widget-automation
title: Automation
sidebar_label: Automation
original_id: widget-automation
---

<div style="text-align: justify">

The Automation widget allows users to create, edit and delete workflow definitions.

## HTML Tag And Launcher
The HTML tag for this widget is:
`<qrvey-workflow-design settings=...>`

You can use the following script to launch this widget: `<widgets-launcher/app.js>`

## Configuration Object
The table below provides general information about each property of this widget’s configuration object, along with a description of the expected value. The **Required** column indicates whether the property is required for the configuration object to work properly.


| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`,Application ID | Yes |
| **app_id** | `String`, Qrvey App ID| Yes |
| **user_id** | `String`, Optional User ID: you can set it up the widget without a user ID if it's set in a qrvey session cookie. | Yes  |
| **domain** | `String`, Qrvey Core URL | Yes  |
 |**workflow_id** | `String`, workflow ID: if the parameter is not defined, the widget will show the complete list of workflows.| No  |   


> **Note**: Refer to the<a href="docs/faqs/faqs-intro/"> FAQs</a> if you don’t know where to find any of the required configuration properties. 


## Sample
The following sample shows the way this widget is used in an HTML page. Please note, that the example may not include the non-required properties of the configuration object. 

You can copy and paste this code to your application after replacing the red values with your own valid values in order to see the embedded widget in action.
```
<qrvey-workflow-design settings="config"></qrvey-workflow-design>
```

```
<script>
var config = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "user_id": "<USER_ID>",
    "domain": "https://your_qrvey_domain",
}
</script>
```

```
<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://<WIDGETS_URL>/widgets-launcher/app.js"></script>
```
## See It In Action
See the widget in CodePen:

<p class="codepen" data-height="838" data-theme-id="light" data-default-tab="result" data-user="qrveysamples" data-slug-hash="yLOopqq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Sample- Qrvey Automation Design">
  <span>See the Pen <a href="https://codepen.io/qrveysamples/pen/yLOopqq">
  Sample- Qrvey Automation Design</a> by Qrvey (<a href="https://codepen.io/qrveysamples">@qrveysamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
