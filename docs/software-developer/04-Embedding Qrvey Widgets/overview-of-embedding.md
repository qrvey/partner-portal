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
3. Choose the desired type of embed.
    A modal will appear containing:
    - The widget's HTML tag.
    - An HTML Script tag containing the widget's JSON config object.
    - An HTML script tag to launch the widget.
4. Click **Copy** and then close the widget.
5. Place the code in your frontend application as desired.
6. Set configuration and [authentication](./embedding-widgets-security-token.md) on the widget's JSON object as desired.

Refresh your frontend application and your widget should now be visible in the UI.

## Anatomy of a Widget

The embedded widget code snippet copied from Qrvey composer consists of an HTML Tag and two scripts.

```html
<!-- widget's tag -->
<qrvey-WIDGET-TYPE settings="config"></qrvey-WIDGET-TYPE>

<!-- widget's Config Object -->
<script>
var config = {
  "api_key": "<YOUR_PRIVATE_API_KEY>", //Switch this with the actual API key.
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
| [Single Panel](../04-Embedding%20Qrvey%20Widgets/05-Widgets/single-panel.md) | Embed a single chart, map, or metric. | 
| [Dashboard View](../04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-view.md) | Embed a mashup of several charts, maps, and metrics. |
| [Dashboard View](../04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-view.md) | Embed a dashboard. |
| [Dashboard Builder](../04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-builder.md) | Enable end users to build custom dashboards. | 
| [Dashboard Builder](../04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-builder.md) | Enable end users to build custom charts. |
| [Analytic Suite](../04-Embedding%20Qrvey%20Widgets/05-Widgets/analytic-suite.md) | Enable end users to build custom charts. |
| [Web Form Design](../04-Embedding%20Qrvey%20Widgets/05-Widgets/web-forms.md) | Enable end users to create and publish their own web forms. | 
| [Web Form (End User)](../04-Embedding%20Qrvey%20Widgets/05-Widgets/web-form-end-user.md) | Embed an existing web form (form, survey, or quiz), in which end users can enter data. | 
| [Analytic Suite](../04-Embedding%20Qrvey%20Widgets/05-Widgets/analytic-suite.md) | Enable end users to perform their own analysis of their data by embedding a Summary, Tabular, or Custom Analysis vie. | 
| [Pixel-perfect Reports](../04-Embedding%20Qrvey%20Widgets/05-Widgets/pixel-perfect-reports.md) | Embed a Pixel-perfect report. |
| [Automation](../04-Embedding%20Qrvey%20Widgets/05-Widgets/automation-widget.md) | Embed workflow functionality into your application. |
| [Download Manager](../04-Embedding%20Qrvey%20Widgets/05-Widgets/download-manager.md) | Enable end users to access Download Manager to manage exported files. |

## Additional Tooling

The Qrvey Platform also provides a comprehensive REST API. For more information, see [Overview of Qrvey API](../06-Working%20with%20Qrvey%20APIs/overview-of-qrvey-api.md).
