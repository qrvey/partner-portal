---
id: widget-pixel-perfect-reports
title: Pixel-perfect Reports
sidebar_label: Pixel-perfect Reports
tags: [Software Developer]
sidebar_position: 3
displayed_sidebar: getting-started
---

The Pixel-perfect Reports widget enables you to embed the [Pixel-perfect Reports](../../../composer/10-Pixel-Perfect%20Reports/intro-to-pixel-perfect-reports.md) feature in an application.

## Embeddable Script

```html
<!-- Tag -->
<qrvey-pixel-builder settings="config"></qrvey-pixel-builder>

<!-- Config -->
<script>
  var config = {
    apiKey: "<YOUR_PRIVATE_API_KEY>",
    domain: "<DOMAIN>",
    userId: "<USER_ID>",
    appId: "<APP_ID>"
  };
</script>

<!-- Launcher -->
<script type="text/javascript" src="https://<YOUR_QRVEY_DOMAIN>/widgets-launcher/app.js?2024-07-15T17:26:30.135Z"></script>
```

## Configuration Object

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **qvToken** | `String`, Encrypted token used for secure authentication. | **Required**, if `apiKey` is not provided |
| **apiKey** | `String`, Your organization’s unique API key required to access the Qrvey platform. | **Required**, if `qvToken` is not provided. |
| **domain** | `String`, The base URL of your Qrvey instance. | **Required** | 
| **appId** | `String`, ID of the Qrvey application that contains the asset you want to embed.| **Required** |
| **userId** | `String`, ID of the Qrvey Composer user account accessing this feature. Optional: You can alternately specify the user ID in a Qrvey session cookie. | **Required**  |
| **clientid** | `String`, Unique identifier for the tenant end user. Required for using the End User Personalization and Download Manager features. The `clientid` must be set to a unique value for each tenant end user. | **Optional** |
| **timezone** | `Object`, Overrides the time zone setting in Qrvey Admin Center. Please see [The timezone Object](#the-timezone-object) for details.  | **Optional** |
| **reportId** | `String`, Used to embed a specific report by ID. If omitted, this embeds the "browse all reports" page. | **Optional** |
| **showFormulasButton** | `Boolean`, Shows or hides the formula modal button in the toolbar. It is "visible" by default. | **Optional** |
| **showBucketsButton** | `Boolean`, Shows or hides the bucket modal button in the toolbar. It is "visible" by default. | **Optional** |
| **parameterValues** | `Object`, Enables you to set the value of a [pixel perfect parameter](../../../composer/10-Pixel-Perfect%20Reports/intro-to-pixel-perfect-reports.md). This value will override the default value set for the parameter. Pattern: `{ key1: value1, key2: value2 }` Example: `{ parameterName: paramVal }`. | **Optional** |
| **defaultMode** | `String`, either `"preview"` or `"design"`. A value of `"preview"` enables users to embed the Pixel-perfect Reports in preview mode. Defaults to `"design"` if not set.  | **Optional** |

### Timezone

For more information, see [Configuring Time Zone Settings](../../timezone-support.md).

| **Parameter** | **Description** | **Required** |
| --- | --- | --- |
| **offset** | `string`, Time to offset by. Pattern: `{"HH:MM" }` Example: `{ "offset": "-1:00" }`   | **Optional** | 
