---
id: widget-pixel-perfect-reports
title: Pixel-perfect Reports Widget
sidebar_label: Pixel-perfect Reports Widget
tags: [Software Developer]
sidebar_position: 3
---

<div style={{textAlign: "justify"}}>
The Pixel-perfect Reports widget enables you to embed the Pixel-perfect Reports feature in an application.  

## Before You Begin
- Review the [Widget Quick Start Guide](../intro.md) for an overview of the widget components. 
- Obtain your unique API key. It was provided in the welcome email that your organization received when your Qrvey instance was created. To obtain a new API key, contact your Qrvey account representative.

## Get the Helper Code
1. In Qrvey Composer, open the [Pixel-perfect Reports](../../../composer/reports/overview-of-pixel-perfect-reports.md) feature. 
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

### Configuration Object Properties
The following table lists the properties associated with this widget. 

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, Your organization’s unique API token required to access the Qrvey platform. | Yes |
| **app_id** | `String`, ID of the Qrvey application containing the webform.| Yes |
| **user_id** | `String`, ID of the Qrvey Composer user account accessing this feature. Optional: You can alternately specify the user ID in a Qrvey session cookie. | Yes  |
| **domain** | `String`, The base URL of your instance of the Qrvey platform. | Yes | 
| **qv_token** | A more secure way to authenticate and authorize embedded widgets is through a Security Token requested as a backend-to-backend communication between your backend side of the host application and the Qrvey system. | Yes, if no api_key is provided |
| **report_id** | `String`, used to embed a specific report. | No |
| **show_embed_button** | `Boolean`, shows or hides the embed button. By default the embed button is hidden in embedded scenarios. | No |
| **show_formulas_button** | `Boolean`, shows or hides the formula modal button in the toolbar. It is visible by default. | No |
| **parameter_values** | `Object. {key1: value, key2: value}`, you can set the value of a parameter from the configuration object. This value will override the default value set for the parameter. | No |


## Sample Code
The following sample demonstrates how this widget can be used in an HTML page. To use this code in your application, replace the values in brackets (“&lt;&gt;”) with your own values. 

### HTML tag:
```html
<!-- widget's tag -->
<qrvey-pixel-builder settings="config"></qrvey-pixel-builder>
```

## Widget launcher script:
```html
<!-- widget's launcher -->
<script type="text/javascript" src="https://<WIDGETS_URL>/widgets-launcher/app.js"></script>
```

## JSON configuration object:
```html
<!-- widget's Config Object -->
<script>
var config = {
  "api_key": "<YOUR_PRIVATE_API_KEY>",
  "domain": "https://your_qrvey_domain",
  "app_id":  "<APP_ID>",
  "user_id": "<USER_ID>",
};
</script>
```

**See also**:
[Introduction to Pixel-perfect Reports](../../../composer/reports/overview-of-pixel-perfect-reports.md)

</div>
