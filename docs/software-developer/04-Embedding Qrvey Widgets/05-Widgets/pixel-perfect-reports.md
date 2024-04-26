---
id: widget-pixel-perfect-reports
title: Pixel-perfect Reports Widget
sidebar_label: Pixel-perfect Reports Widget
tags: [Software Developer]
sidebar_position: 3
displayed_sidebar: software-developer
---

<div style={{textAlign: "justify"}}>

The Pixel-perfect Reports widget enables you to embed the Pixel-perfect Reports feature in an application.  

<!-- 
## Before You Begin
- Review the [Widget Quick Start Guide](../overview-of-embedding.md) for an overview of the widget components. 
- Obtain your unique API key. It was provided in the welcome email that your organization received when your Qrvey instance was created. To obtain a new API key, contact your Qrvey account representative.

## Get the Helper Code
1. In Qrvey Composer, open the [Pixel-perfect Reports](../../../composer/10-Pixel-perfect%20Reports/overview-of-pixel-perfect-reports.md) feature. 
2. Click the **Embed Pixel-perfect Reports** button in the upper right corner of the page. A dialog displays with an HTML tag, a JSON configuration object, and the Widget Launcher script tag. This code embeds the Pixel-perfect Reports widget. While you may embed a single report using its ID, the end user will still have access to all the reports available in the widget. 
3. Click **Copy** to copy the code, and then paste it into your preferred editor. 

## Embed the HTML tag
Identify where you would like this widget to display in your application, and then add the HTML tag in that location. The HTML tag for this widget is:

```<qrvey-pixel-builder settings="config"></qrvey-pixel-builder>```

## Embed the Widget Launcher script tag
Add the widget launcher script tag to your application. For reference, the launcher script code is:

```<[your-widget-url]/widgets-launcher/app.js>```

## Set Properties in the JSON Configuration Object
Define the JSON configuration object by starting with the script provided in the helper code, and then adding additional configuration properties as needed. The script provided contains only the required properties. For reference, an example is copied below. The helper code that you obtained above should include the unique values indicated with brackets (“&lt;&gt;”):

```js
var config = {
  "api_key": "<API_KEY>",
  "domain": "https://your_qrvey_domain",
  "app_id":  "<APP_ID>",
  "user_id": "<USER_ID>",
};
```

When complete, add the JSON configuration object to your application.  
-->

### Configuration Object Properties

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
| **report_id** | `String`, used to embed a specific report. | No |
| **show_embed_button** | `Boolean`, shows or hides the embed button. By default the embed button is hidden in embedded scenarios. | No |
| **show_formulas_button** | `Boolean`, shows or hides the formula modal button in the toolbar. It is visible by default. | No |
| **parameter_values** | `Object. {key1: value, key2: value}`, you can set the value of a parameter from the configuration object. This value will override the default value set for the parameter. | No |
| **default_mode** | `String`, either `"preview"` or `"design"`. A value of `"preview"` enables users to embed the Pixel-perfect Reports in preview mode. Defaults to `"design"` if not set.  | No |


<!-- 
## Code Samples
The following samples demonstrate how this widget can be used in an HTML page. 

| **Implementation** | **Description** | **Front-end Code** | **Back-end Code** |
| --- | --- | --- | --- |
| Basic API Key | This sample uses a basic API key to embed a full Pixel-perfect Report widget. It does not encrypt the API key and is not suitable for production environments.| [codepen](https://codepen.io/qrveysamples/pen/PoxMMKb/ab9b9ab06d4e37d4df8f1be67bb7ea1e) | n/a |
| Basic API Key - Single Report | This sample uses a basic API key to embed a single Pixel-perfect Report widget. It does not encrypt the API key and is not suitable for production environments.| [codepen](https://codepen.io/qrveysamples/pen/YzRmmrX/a207d5ccb5f7e29204b1f95033674178) | n/a |


**See also**:
[Introduction to Pixel-perfect Reports](../../../composer/10-Pixel-perfect%20Reports/overview-of-pixel-perfect-reports.md) 
-->

</div>
