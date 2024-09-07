---
id: widget-web-form-end-user
title: Web Form - End User
sidebar_label: Web Form - End User
tags: [Software Developer]
sidebar_position: 8
displayed_sidebar: getting-started
---

The Web Form End User widget enables allows you to embed web forms into your frontend application.

```html
<!-- Tag -->
<qrvey-webform-enduser config="config"></qrvey-webform-enduser>


<!-- Config -->
<script>
  var config = {
    domain: "<DOMAIN>",
    qrvey_hash: "<QRVEY_HASH>"
  }
</script>

<!-- Launcher -->
<script defer="" type="module" src="https://<WIDGETS_URL>/qrvey-webforms-widgets/webform-widgets/webform-widgets.esm.js?2024-09-05T10:22:50.047Z"></script>

```

## Configuration Object
The following table lists the properties associated with this widget. 

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **qrvey_hash** | `String`, The webform's ID. | Yes |
| **domain** | `String`, The base URL of your instance of the Qrvey platform. | Yes |

