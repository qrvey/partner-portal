---
id: widget-download-manager
title: Download Manager Widget
sidebar_label: Download Manager Widget
tags: [Software Developer]
sidebar_position: 2
displayed_sidebar: getting-started
---

The Download Manager widget enables users to access and manage exported files in a central location. For more information about this feature, see [Download Manager](../../../composer/download-manager.md). 

Download Manager filters the files displayed based on user ID and client ID. To save the exports for a certain end user and then list them in your Download Manager instance, set the same values for the user ID and client ID properties in all the widgets from where you will run the exports. If you do not define a user ID and client ID for a widget, all exports performed using the widget will not be accessible from Download Manager.

## Embeddable Script

```html
<!-- Tag -->
<qrvey-download-manager settings="config"></qrvey-download-manager>

<!-- Config -->
<script>
    var config = {
        apiKey: "<YOUR_PRIVATE_API_KEY>",
        domain: "<DOMAIN>",
        clientId: "<CLIENT_ID>"
    };
</script>

<!-- Launcher -->
<script type="text/javascript" src="https://<WIDGETS_URL>/qrvey_download_manager/qrvey-download-manager/qrvey-download-manager.js?2023-12-26T15:16:09.665Z"></script>
<script type="module" src="https://<WIDGETS_URL>/qrvey_download_manager/qrvey-download-manager/qrvey-download-manager.esm.js?2023-12-26T15:16:09.665Z"></script>
<script> window.config = config</script>
```

## Configuration Object
The following table lists the properties associated with this widget. 

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **apiKey** | `String`, Your organization’s unique API key required to access the Qrvey platform. | **Required**, if `qvToken` is not provided. |
| **qvToken** | `String`, Encrypted token used for secure authentication. | **Required**, if `apiKey` is not provided. |
| **domain** | `String`, The base URL of your Qrvey instance. | **Required** | 
| **userId** | `String`, The ID of the Qrvey Composer user account accessing this feature. Alternatively, you can specify the user ID in a Qrvey session cookie. To save the exports for a certain end user and then list them in your Download Manager instance, set the same values for the user ID and client ID properties in all the widgets from where you will run the exports. | **Optional**  |
| **clientId** | `String`, The client ID, or unique identifier, of the tenant end user working with the Download Manager. It is not recommended to include the client ID in the configuration object. Instead, include the client ID in a QV Token.  | **Required** in API key & to authenticate with QV Token. |
| **i18n** | `Object`, Defines the language to be displayed in the static text of the widget as well as the dataset columns. Please see [The i18n Object](#the-i18n-object) for details. | **Optional** |
| **showModalButton** | `Boolean`, determines whether or not to show a modal button. If set to true, a modal button will be displayed. If set to false or not set, the modal button will not be displayed. | **Optional** |
| **widgetView** | `String`, determines how the component is displayed. The default setting is modal, in which the component is displayed as a popup window. If set to table, the component is displayed as a page. | **Optional** |

### The i18n Object

For more information, see [Internationalization, Step by Step](../../09-Internationalization/internationalization-step-by-step.md#6--configuring-qrvey-widgets-for-internationalization).

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **lang** | `String`, The language the language to use for the UI. Example: `"es"`,  | **Required** |
| **locale** | `String`, The locale code to use for date and number formatting. Example: `"es-ES"`,  | **Optional** |

## Open Download Manager Modal

The Download Manager widget provides an exposed method that enables you to trigger the modal from any other element in your page. For example:

`<qrvey-download-manager settings="downloadManagerConfig"></qrvey-download-manager>`

Access the method using a query selector. For example: 

```js
function openmodal () {
const el = document.querySelector('qrvey-download-manager');
el.openDownloadManager();
}
```

Then create a button and execute your function. For example: 

```html
<button onclick="openmodal()">Open Modal</button>
```
