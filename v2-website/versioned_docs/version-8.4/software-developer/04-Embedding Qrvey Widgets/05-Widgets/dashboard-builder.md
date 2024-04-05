---
id: widget-dashboard-builder
title: Dashboard Builder Widget
sidebar_label: Dashboard Builder Widget
tags: [Software Developer]
sidebar_position: 1
displayed_sidebar: software-developer
---
<div style={{textAlign: "justify"}}>


When embedded in an application, the Dashboard Builder widget enables users to modify existing dashboards or add new dashboards. Dashboards may contain reports, web forms, or other content. 

>**Note**: The Dashboard Builder widget replaces the Page Builder widget in Qrvey version 8.0 and later. 

## Before You Begin
* Review the [Widget Quick Start Guide](../widget-quick-start-guide.md) for an overview of the widget components. 
* Obtain your unique API key. It was provided in the welcome email that you received when your Qrvey instance was created. For more information, see [Frequently Asked Questions (FAQs)](../../../getting-started/faqs.md).
* This widget supports using security tokens for secure authentication. For more information, see [Embedding Widgets Using a Security Token](../embedding-widgets-security-token.md). 

## Get the Helper Code
1. In Qrvey Composer, open Dashboard Builder and display the Dashboard list. 
2. Click the **Embedding Options** button in the upper right corner of the page, and then click **Embed Dashboard Builder**. 
  ![dashboard-builder-widget](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/widgets/dashboard-builder-wi-80.png#thumbnail-20)
3. A dialog displays with an HTML tag, a JSON configuration object, and the Widget Launcher script tag.
4. Click **Copy** to copy the code, and then paste it into your preferred editor. 
 
## Embed the HTML tag
Identify where you would like this widget to display in your application, and then add the HTML tag in that location. 

The HTML tag for this widget is:

`<qrvey-builders settings="config"></qrvey-builders>`

## Embed the Widget Launcher script tag
Add the widget launcher script tag to your application. 

For reference, the launcher script code is:

`<script type="text/javascript" src="https://<WIDGETS_URL>/widgets-launcher/app.js"></script>`

## Set properties in the JSON configuration object
Define the JSON configuration object by starting with the script provided in the helper code, and then adding additional configuration properties as needed. The script provided contains only the required properties. For reference, an example is copied below. The helper code that you obtained above should include the unique values indicated with brackets (“&lt;&gt;”):

```json
<script>
var config = {
  api_key: '<API_KEY>',
  domain: 'https://<your_qrvey_domain>',
  user_id: '<USER_ID>',
  app_id: '<APP_ID>'
};
</script>
```

When complete, add the JSON configuration object to your application. 

### Configuration Object Properties
The following table lists the general properties associated with this widget. 

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, Your organization’s unique API key required to access the Qrvey platform. Never expose your organization’s API key to external users. In Production environments, use a secure token (qv_token) to encrypt the API key. | Yes, if the qv_token is not provided |
| **qv_token** | `String`, A secure token encrypted via JWT to authenticate and authorize embedded widgets. Establishes a secure connection between the host application and the Qrvey system. For more information, see [Embedding Widgets Using a Security Token](../embedding-widgets-security-token.md). | Yes, if the api_key is not provided |
| **app_id** | `String`, ID of the Qrvey application containing the dashboard, report, automation, or web form. | Yes |
| **domain** | `String`, The base URL of your instance of the Qrvey platform. | Yes | 
| **user_id** | `String`, ID of the Qrvey Composer user that owns the application that is being embedded. Optional: You can alternately specify the user ID in a Qrvey session cookie. | Yes, if the user_id is not included in a session cookie  |
| **clientid** | `String`, Unique identifier for the tenant end user. Required for using the End User Personalization and Download Manager features. The clientid must be set to a unique value for each tenant end user. | No |
| **timezone** | `Object <TimezoneConfiguration>`, Overrides the time zone setting in Qrvey Admin Center. For more information, see [Configuring Time Zone Settings](../../10-Timezone%20Settings/timezone-support.md).  | No |
| **private_pages** | `Boolean`, Predefine the state of new dashboards. If *True*, new dashboards will be private, if not new dashboards will be public. | No |
| **do_not_allow** | `Array<String>`, Collection of strings to define permissions (will hide or block some features): <br /><br />**CREATE_CHART**: Hide Create Chart button.<br />**USERS_AUTHENTICATION**: Hide Authentication tab.<br />**USERS_LIST**: Hide Users tab.<br />**GROUPS_CRUD**: Hide the actions for create, duplicate or delete groups.<br />**GROUPS_USERS_DETAIL**: Hide the users table inside the group detail view. | No |
| **styles** | `Object`, a JSON object with properties that allow users to modify part of the look and feel of the widget. Every property supports a string (hexadecimal color) or the name of a color.<br /><br />* **main_color**: `String`<br />* **main_text_color**: `String`<br />* **secondary_color**: `String`<br />* **icon_color**: `String`<br />* **tab_bar_color**: `String`<br />* **tab_font_color**: `String`<br />* **error_color**: `String` | No |
| **userFilters** | `Array<Object>`, Collection of custom filters that the system will apply to the visualized data. For more information, see [Working With Filters in Embedded Scenarios](../filters-embedded-scenarios.md). | No
| **customTokens** | `Object`, JSON object used to set custom threshold values in Bullet and Dial charts. For more information, see [Using Custom Tokens](../customTokens.md). | No
| **personalization** | `Object`, JSON object to configure and overwrite the default personalization/customization settings. For more information, see "Configuring Personalization" below. | No  
| **authenticatedSession.email** | `String`, Specifies the email address to associate with the widget. If an address is not specified, exports are sent to the email address associated with the user ID. | No



### Configuring Personalization
The **personalization** object setting controls customization options for the Dashboard Builder widget and supports the following properties at this time:


| **Property** | **Description** | **Type** | **Default** | **Required** |
| --- | --- | --- | --- | --- |
| fit_panel_button | Show the fit to panel button on the panels | boolean | true | No


## Events
The widget supports custom events to update keys of the configuration, you can dispatch an event using your own user interface to modify the behavior.
* **atApplyUserFilters**: Enables changes to the “builderFilters” property - the expected value for this property is a reduced version of the filter object. This property is a collection of objects that includes:
  * Operator: defines which operation will be performed with the expressions.
  * Expressions: a collection of objects that contains the questions/column reference, the type of operation applied to the questions, and the values that will be used for filtering.

## Code Samples
The following samples demonstrate how this widget can be used in an HTML page. 

| **Implementation** | **Description** | **Front-end Code** | **Back-end Code** |
| --- | --- | --- | --- |
| Basic API Key | This sample uses a basic API key to embed a full Dashboard Builder widget. It does not encrypt the API key and is not suitable for production environments.| [codepen](https://codepen.io/qrveysamples/pen/PoxMMYP/38e4021367bada1da1cb90d58bb3da24) | n/a |
| Basic API Key - Single Report | This sample uses a basic API key to embed a single Dashboard Builder widget. It does not encrypt the API key and is not suitable for production environments.| [codepen](https://codepen.io/qrveysamples/pen/poQMMvW/d6c0435e222946438ab38782bcedc380) | n/a |

</div>