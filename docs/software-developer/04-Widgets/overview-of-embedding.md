---
id: overview-of-embedding-and-widgets
title: Introduction to Widgets
sidebar_label: Introduction to Widgets
tags: [Software Developer]
sidebar_position: 1
displayed_sidebar: getting-started
---

Developers can seamlessly embed the Qrvey platform’s functionalities (such as web form builders, data visualizations, and more) directly into their frontend applications using a comprehensive suite of customizable “widgets”.


## Anatomy of a Widget

> **Note:** Originally, widget parameters were in `snake_case`, but Qrvey widgets are shifting over to `camelCase`, which is standard for variables in JS. Please see the widget parameter documentation to choose the right case for each parameter.

A widget is composed of three embeddable HTML scripts.

```html
<!-- widget's tag -->
<qrvey-WIDGET-TYPE settings="config"></qrvey-WIDGET-TYPE>

<!-- widget's Config Object -->
<script>
var config = {
  apiKey: "<YOUR_PRIVATE_API_KEY>",
  domain: "https://<YOUR_QRVEY_DOMAIN>",
  userId: "<USER_ID>",
  appId: "<APP_ID>"
};
</script>

<!-- widget's launcher -->
<script type="text/javascript" src="https://demo.qrvey.com/widgets-launcher/app.js"></script>
```

## How to Embed a Widget

Each widget has its own unique tag, configuration options, and launcher. To embed a widget, follow these steps:

1. Get the script for the widget you'd like to embed. You can find scripts in two places:
   - Get the relevant [widget script](#widget-scripts-and-configuration) from the documentation.
   - For most widgets, you can copy/paste the widget script in [Qrvey Composer](#get-widget-script-from-composer), which will include most relevant configuration details.
4. Place the code in your frontend application as desired.
5. Set [authentication](./widget-authentication.md) and configure widget parameters as desired.

Refresh your frontend application and your widget should appear in the UI.


## Get Widget Script from Composer

![widget-guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/widgets/widget-intro.png#thumbnail-60)

With the exception of [Web Form Design](../04-Embedding%20Qrvey%20Widgets/07-Widgets/web-forms.md) and [Web Form (End User)](../04-Embedding%20Qrvey%20Widgets/07-Widgets/web-form-end-user.md), embeddable widget scripts can be also be found in Qrvey Composer.

1. Navigate to the Qrvey Composer interface you'd like to embed.
2. Depending on the widget type, find and click either the **`</>` Embed Widget Options** button or **three-dot menu > Embed** in the right corner of the top bar.
    A modal will appear containing:
    - The widget's HTML tag.
    - An HTML Script tag containing the widget's JSON config object.
    - An HTML script tag to launch the widget.
3. Click **Copy** and close the modal.


