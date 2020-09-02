---
id: version-5.3-widget-end-user
title: End User
sidebar_label: End User
original_id: widget-end-user
---

<div style="text-align: justify">


The End-User widget allows users to access one or more pages of an application created from the Page Builder Widget. Pages may contain embedded reports and webforms, as well as other static content.

## HTML Tag And Launcher

The HTML tag for this widget is: 
<br>
```<qrvey-end-user settings=...>```

You can use the following script to launch this widget: 
<br>
```<widgets-launcher/app.js>```

## Configuration Object

The table below provides general information about each property of this widget’s configuration object, along with a description of the expected value. The Required column indicates whether the property is required for the configuration object to work properly.


| **Property** | **Value** |  **Required** |
| --- | --- | --- |
| api_key| `String`, Application ID. | Yes
| app_id | `String`, Qrvey App ID | Yes
| domain | `String`, Qrvey Core URL| Yes
| group_list | `Array<String>`, collection of IDs/names of the groups created in User Management | No
| page_id | `String`, ID of one page to visualize it: all auth process is still required if the config. exists.|No



> **Note**: Refer to the <a href="docs/faqs/faqs-intro/"> FAQs</a> if you don’t know where to find any of the required configuration properties. 

## Sample
The following sample shows the way this widget is used in an HTML page. Please note, that the example may not include the non-required properties of the configuration object. 

You can copy and paste this code to your application, after replacing the red values with your own valid values, in order to see the embedded widget in action.

```
<qrvey-end-user settings="config"></qrvey-end-user>

<script>
var config = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "group_list": ["Admin", "oJn4Cr_yV", ...],
    "page_id": "<PAGE_ID>",
}
</script>

<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://<WIDGETS_URL>/widgets-launcher/app.js"></script>
```

## See It In Action
See the widget in CodePen:

<p class="codepen" data-height="838" data-theme-id="light" data-default-tab="result" data-user="qrveysamples" data-slug-hash="NWNvyWM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Sample- Qrvey End-user">
  <span>See the Pen<a href="https://codepen.io/qrveysamples/pen/NWNvyWM"> Sample-Qrvey End-user</a> by Qrvey (<a href="https://codepen.io/qrveysamples">@qrveysamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
