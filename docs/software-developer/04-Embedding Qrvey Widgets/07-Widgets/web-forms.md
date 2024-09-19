---
id: widget-webforms
title: Web Form - Design
sidebar_label: Web Form - Design
tags: [Software Developer]
sidebar_position: 7
displayed_sidebar: getting-started
---

When embedded in an application, the Web Form Design widget enables end users to create, preview, and modify web forms. The Qrvey platform provides three types of web forms: survey, form, and quiz. 

**Remember:** A Webform must be paused in order for any changes or edits to be made. If a Webform is not paused, the embedded widget will be visible, but not accept click events.

## Embeddable Script

```html
<!-- Tag -->
<qrvey-design-widgets settings="config"></qrvey-design-widgets>

<!-- Config -->
<script>
  var config = {
      api_key: "<API_KEY>",
      app_id: "<APP_ID>",
      domain: "https://<your_qrvey_domain>",
      user_id: "<USER_ID>",
      qrvey_id: "<QRVEY_ID>",
      app_type: "<APP_TYPE>"
  };
</script>

<!-- Launcher -->
<script src="https://<WIDGETS_URL>/widgets-launcher/app.js"></script>
```

## Configuration Object
The following table lists the properties associated with this widget.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`. Your organization’s API key to access the Qrvey platform. | **Required**, if `qv_token` is not provided. |
| **qv_token** | `String`. A secure token used to authenticate and authorize embedded widgets. | **Required**, if `api_key` is not provided. |
| **app_id** | `String`.  ID of the Qrvey application that contains the asset you want to embed.| **Required** |
| **domain** | `String`. The base URL of your Qrvey instance. | **Required** |
| **user_id** | `String`. The ID of the Qrvey Composer user who owns the application that is being embedded. Alternatively, you can specify the user ID in a Qrvey session cookie. | **Required**, if the `user_id` is not included in a session cookie. |
| **qrvey_id** | `String`. The ID of the webform that will be edited in the widget. | **Required** |
| **app_type** | `String`. The type of webform the widget will instantiate. Options: `FORM` / `QUIZ` / `SURVEY`. | **Required** |
| **style_options** | `Object`. Sets CSS colors and styles for the web form. For details, please see [the style options object](#the-style-options-object) below. | **Optional** |


## The Style Options Object

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **main_color** | `String`, Sets a hex color for the main elements of the webform. | **Optional** |
| **secondary_color** | `String`, Sets a hex color for secondary elements of the webform. | **Optional** |
| **tab_bar** | `String`, Sets a hex color for the tab bar of the webform. | **Optional** |
| **field_icon** | `String`, Sets a hex color for field icons in the webform. | **Optional** |
| **error** | `String`, Sets a hex color for error messages in the webform. | **Optional** |
| **notification** | `String`, Sets a hex color for notifications in the webform. | **Optional** |
| **successful** | `String`, Sets a hex color for successful messages in the webform. | **Optional** |
| **warning** | `String`, Sets a hex color for warning messages in the webform. | **Optional** |

