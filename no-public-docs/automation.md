---
id: widget-automation
title: Automation Design
sidebar_label: Automation Design
---

<div style={{textAlign: "justify"}}>

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


> **Note**: Refer to the<a href="/docs/faqs/faqs-intro/"> FAQs</a> if you don’t know where to find any of the required configuration properties. 


## Sample
The following sample shows the way this widget is used in an HTML page. Please note, that the example may not include the non-required properties of the configuration object. 

You can copy and paste this code to your application after replacing the red values with your own valid values in order to see the embedded widget in action.
``` 
<qrvey-workflow-design settings="config" />
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

<iframe
  allowFullScreen
  className="cp_embed_iframe "
  frameBorder={0}
  height={838}
  width="100%"
  name="cp_embed_1"
  scrolling="no"
  src="https://codepen.io/qrveysamples/embed/4f4030cdea91163a3b9583234335e360?height=838&theme-id=light&default-tab=result&user=qrveysamples&slug-hash=4f4030cdea91163a3b9583234335e360&pen-title=Sample-%20Qrvey%20Automation%20Design&name=cp_embed_1"
  style={{ width: "100%", overflow: "hidden", display: "block" }}
  title="Sample- Qrvey Automation Design"
  loading="lazy"
  id="cp_embed_4f4030cdea91163a3b9583234335e360"
/>


</div>
