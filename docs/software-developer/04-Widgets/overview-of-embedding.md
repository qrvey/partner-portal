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

1. Get the script for the widget you'd like to embed. You can find scripts in two places:
   - Get the relevant [widget script](#widget-scripts-and-configuration) from the documentation.
   - For most widgets, you can copy/paste the widget script in [Qrvey Composer](#get-widget-script-from-composer), which will include most relevant configuration details.
4. Place the code in your frontend application as desired.
5. Set [authentication](./widget-authentication.md) and configure widget parameters as desired.

Refresh your frontend application and your widget should appear in the UI.

## Widget Scripts and Configuration

Each widget has its own unique tag, configuration options, and launcher. For details, please browse the following sections.

|  Widget | Description | Embed Tag |
| --------------- | --------------------- | 
| [Single Panel](../04-Embedding%20Qrvey%20Widgets/07-Widgets/single-panel.md) | Embeds a single chart, map, or metric. | 
| [Dashboard View](../04-Embedding%20Qrvey%20Widgets/07-Widgets/dashboard-view.md) | Embeds a dashboard containing charts, maps, and metrics. |
| [Dashboard Builder](../04-Embedding%20Qrvey%20Widgets/07-Widgets/dashboard-builder.md) | Enables end users to build custom charts and dashboards. | 
| [Analytic Suite](../04-Embedding%20Qrvey%20Widgets/07-Widgets/analytic-suite.md) | Enables end-users to build custom charts. |
| [Web Form Design](../04-Embedding%20Qrvey%20Widgets/07-Widgets/web-forms.md) | Enables end users to create and publish their own web forms. | 
| [Web Form (End User)](../04-Embedding%20Qrvey%20Widgets/07-Widgets/web-form-end-user.md) | Embeds an existing web form (form, survey, or quiz), in which end users can enter data. | 
| [Analytic Suite](../04-Embedding%20Qrvey%20Widgets/07-Widgets/analytic-suite.md) | Enables end-users to perform their own analysis of their data by embedding a Summary, Tabular, or Custom Analysis view. | 
| [Pixel-perfect Reports](../04-Embedding%20Qrvey%20Widgets/07-Widgets/pixel-perfect-reports.md) | Embeds a Pixel-perfect report. |
| [Automation](../04-Embedding%20Qrvey%20Widgets/07-Widgets/automation-widget.md) | Embeds workflow functionality into your application. |
| [Download Manager](../04-Embedding%20Qrvey%20Widgets/07-Widgets/download-manager.md) | Enables end-users to access Download Manager to manage exported files. |


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


