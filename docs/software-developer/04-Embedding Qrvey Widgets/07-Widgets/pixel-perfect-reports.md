---
id: widget-pixel-perfect-reports
title: Pixel-perfect Reports Widget
sidebar_label: Pixel-perfect Reports Widget
tags: [Software Developer]
sidebar_position: 3
displayed_sidebar: getting-started
---

The Pixel-perfect Reports widget enables you to embed the Pixel-perfect Reports feature in an application. 

## Embeddable Script

```html
<!-- Tag -->
<qrvey-pixel-builder settings="config"></qrvey-pixel-builder>

<!-- Config -->
<script>
  var config = {
    api_key: "<YOUR_PRIVATE_API_KEY>",
    domain: "https://<YOUR_QRVEY_DOMAIN>",
    user_id: "<USER_ID>",
    app_id: "<APP_ID>"
  };
</script>

<!-- Launcher -->
<script type="text/javascript" src="https://<YOUR_QRVEY_DOMAIN>/widgets-launcher/app.js?2024-07-15T17:26:30.135Z"></script>
```

### Configuration Object

The following table lists the properties associated with this widget.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, Your organization’s unique API key required to access the Qrvey platform. Never expose your organization’s API key to external users. In Production environments, use a secure token (qv_token) to encrypt the API key. | Yes, if the qv_token is not provided |
| **app_id** | `String`, ID of the Qrvey application containing the webform.| Yes |
| **user_id** | `String`, ID of the Qrvey Composer user account accessing this feature. Optional: You can alternately specify the user ID in a Qrvey session cookie. | Yes  |
| **clientId** | `String`, Unique identifier for the tenant end user. Required for using the Download Manager feature. The clientId must be set to a unique value for each tenant end user. | No |
| **domain** | `String`, The base URL of your instance of the Qrvey platform. | Yes | 
| **qv_token** | A more secure way to authenticate and authorize embedded widgets is through a Security Token requested as a backend-to-backend communication between your backend side of the host application and the Qrvey system. | Yes, if no api_key is provided |
| **timezone** | `Object <TimezoneConfiguration>`, Overrides the time zone setting in Qrvey Admin Center. For more information, see [Configuring Time Zone Settings](../../10-Timezone%20Settings/timezone-support.md).  | No |
| **report_id** | `String`, used to embed a specific report. If omitted, this embeds the "browse all reports page". | No |
| **show_embed_button** | `Boolean`, shows or hides the embed button. By default the embed button is hidden in embedded scenarios. | No |
| **show_formulas_button** | `Boolean`, shows or hides the formula modal button in the toolbar. It is visible by default. | No |
| **parameter_values** | `Object. {key1: value, key2: value}`, you can set the value of a parameter from the configuration object. This value will override the default value set for the parameter. | No |
| **default_mode** | `String`, either `"preview"` or `"design"`. A value of `"preview"` enables users to embed the Pixel-perfect Reports in preview mode. Defaults to `"design"` if not set.  | No |


<!-- 
## Code Samples
Embeds the "browse all reports page" [codepen](https://codepen.io/qrveysamples/pen/PoxMMKb/ab9b9ab06d4e37d4df8f1be67bb7ea1e)
Embeds a single Pixel-perfect Report widget [codepen](https://codepen.io/qrveysamples/pen/YzRmmrX/a207d5ccb5f7e29204b1f95033674178)
-->
