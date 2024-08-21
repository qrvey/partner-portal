---
id: widget-webforms
title: Web Form Design Widget
sidebar_label: Web Form Design Widget
tags: [Software Developer]
sidebar_position: 7
displayed_sidebar: getting-started
---

When embedded in an application, the Web Form Design widget enables end users to create, preview, and modify web forms. The Qrvey platform provides three types of web forms: survey, form, and quiz. 

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
| **api_key** | `String`, Your organization’s unique API key required to access the Qrvey platform. Never expose your organization’s API key to external users. In Production environments, use a secure token (qv_token) to encrypt the API key. | Yes, if the qv_token is not provided |
| **qv_token** | `String`, A secure token encrypted via JWT to authenticate and authorize embedded widgets. Establishes a secure connection between the host application and the Qrvey system. For more information, see [Embedding Widgets Using a Security Token](../widget-authentication.md). | Yes, if the api_key is not provided |
| **app_id** | `String`, ID of the Qrvey application containing the dashboard, report, automation, or web form. | Yes |
| **domain** | `String`, The base URL of your instance of the Qrvey platform. | Yes | 
| **user_id** | `String`, ID of the Qrvey Composer user that owns the application that is being embedded. Optional: You can alternately specify the user ID in a Qrvey session cookie. | Yes, if the user_id is not included in a session cookie  |
| **qrvey_id** | `String`, ID of the webform ID that will be edited in the widget.  | Yes |
| **app_type** | `String`, The type of webform the widget will instance. Options: "FORM" / "QUIZ" / "SURVEY". | Yes |
| **Style_option** |Object {<br />"main_color": String (HEX Color),<br />"secondary_color": String (HEX Color),<br />"tab_bar": String (HEX Color),<br /> "field_icon": String (HEX Color),<br />"error": String (HEX Color),<br />"notification": String (HEX Color),<br />"successful": String (HEX Color), <br />"warning": String (HEX Color)<br /> } <br /><br />to change widget colors| No |
