---
id: overview-of-embedding-and-widgets
title: Embedded Widgets Overview
sidebar_label: Embedded Widgets Overview
tags: [Software Developer]
sidebar_position: 1
displayed_sidebar: software-developer
---

Developers can seamlessly embed the Qrvey platform’s functionalities (such as web form builders, data visualizations, and more) directly into their frontend applications using a comprehensive suite of customizable “widgets”.

## How to Embed a Widget

![widget-guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/widgets/widget-intro.png#thumbnail-60)

1. Navigate to the Qrvey Composer interface you'd like to embed.
2. Click the **`</>` Embed Widget Options** button on the right in the top bar.
    A modal will appear containing:
    - The widget's HTML tag.
    - An HTML Script tag containing the widget's JSON config object.
    - An HTML script tag to launch the widget.
3. Click **Copy** and then close the widget.
4. Place the code in your frontend application as desired.
5. Set configuration and [authentication](./embedding-widgets-security-token.md) on the widget's JSON object as desired.

Refresh your frontend application and your widget should now be visible in the UI.

## Anatomy of a Widget

The widget's code snippet that you copied from Qrvey composer consists of an HTML Tag and two scripts.

```html
<!-- widget's tag -->
<qrvey-WIDGET-TYPE settings="config"></qrvey-WIDGET-TYPE>

<!-- widget's Config Object -->
<script>
var config = {
  "api_key": "<YOUR_PRIVATE_API_KEY>",
  "domain": "https://documentation-demos.qrvey.com",
  "user_id": "OIJFsiS4-",
  "app_id": "fQiu0ogde"
};
</script>

<!-- widget's launcher -->
<script type="text/javascript" src="https://demo.qrvey.com/widgets-launcher/app.js"></script>
```

## Widgets

Each widget has its own set of configuration options. Please browse the following sections to find details about each type of widget.

|  Widget | Description |
| --------------- | --------------------- |
| [Single Panel](../04-Embedding%20Qrvey%20Widgets/05-Widgets/single-panel.md) | Embeds a single chart, map, or metric. | 
| [Dashboard View](../04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-view.md) | Embeds a dashboard containing charts, maps, and metrics. |
| [Dashboard Builder](../04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-builder.md) | Enables end users to build custom charts and dashboards. | 
| [Analytic Suite](../04-Embedding%20Qrvey%20Widgets/05-Widgets/analytic-suite.md) | Enables end-users to build custom charts. |
| [Web Form Design](../04-Embedding%20Qrvey%20Widgets/05-Widgets/web-forms.md) | Enables end users to create and publish their own web forms. | 
| [Web Form (End User)](../04-Embedding%20Qrvey%20Widgets/05-Widgets/web-form-end-user.md) | Embeds an existing web form (form, survey, or quiz), in which end users can enter data. | 
| [Analytic Suite](../04-Embedding%20Qrvey%20Widgets/05-Widgets/analytic-suite.md) | Enables end-users to perform their own analysis of their data by embedding a Summary, Tabular, or Custom Analysis view. | 
| [Pixel-perfect Reports](../04-Embedding%20Qrvey%20Widgets/05-Widgets/pixel-perfect-reports.md) | Embeds a Pixel-perfect report. |
| [Automation](../04-Embedding%20Qrvey%20Widgets/05-Widgets/automation-widget.md) | Embeds workflow functionality into your application. |
| [Download Manager](../04-Embedding%20Qrvey%20Widgets/05-Widgets/download-manager.md) | Enables end-users to access Download Manager to manage exported files. |

## Additional Tooling

The Qrvey Platform also provides a comprehensive REST API. For more information, see [Overview of Qrvey API](../06-Working%20with%20Qrvey%20APIs/overview-of-qrvey-api.md).
