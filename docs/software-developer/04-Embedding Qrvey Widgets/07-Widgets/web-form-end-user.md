---
id: widget-web-form-end-user
title: Web Form - End User
sidebar_label: Web Form - End User
tags: [Software Developer]
sidebar_position: 8
displayed_sidebar: getting-started
---

When embedded in an application, the Web Form - End User widget enables end users to enter data in a designed Web Form.

```html
<!-- Tag -->
<qrvey-webform-enduser config="config"></qrvey-webform-enduser>


<!-- Config -->
<script>
  const config = {
    style: "<CSS_STYLESHEET_URL>",
    webformid: "<WEB_FORM_ID>", 
    server: "https://<your_qrvey_domain>", 
    defaultAnswers: [{id:"7VS7I1C_",data:"ID-123456"}] 
  }
</script>

<!-- Launcher -->
<script type="module" src="https://<WIDGETS_URL>/qrvey-webform-enduser/qrvey-webform-enduser/qrvey-webform-enduser.esm.js"></script>

```

## Configuration Object
The following table lists the properties associated with this widget. 

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **style** | `String`, External CSS Stylesheet URL. | No  |
| **defaultAnswers** | `Object Array`, If configured, fills an answer (just for work textFields) with default values. Multiple fields can be added, it only needs `questionID` and the `data` to be inserted. Example: [{id:"UMLFTXTT",data:"Default value"}] | No |
| **webformid** | `String`, WebformID containing the webform. | Yes |
| **server** | `String`, The base URL of your instance of the Qrvey platform. | Yes |

<!-- 
### Sample in CodePen

<iframe
  allowFullScreen
  className="cp_embed_iframe "
  frameBorder={0}
  height={838}
  width="100%"
  name="cp_embed_1"
  scrolling="no"
  src="https://codepen.io/qrveysamples/embed/dd309a42f2c856e6eb73c8f047153ca3?height=838&theme-id=light&default-tab=result&user=qrveysamples&slug-hash=dd309a42f2c856e6eb73c8f047153ca3&pen-title=Sample-%20Qrvey%20Data%20Connections&name=cp_embed_1"
  style={{ width: "100%", overflow: "hidden", display: "block" }}
  title="Sample- Qrvey Data Connections"
  loading="lazy"
  id="cp_embed_dd309a42f2c856e6eb73c8f047153ca3"
/>

-->
