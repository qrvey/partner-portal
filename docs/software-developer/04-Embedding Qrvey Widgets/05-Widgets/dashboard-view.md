---
id: widget-dashboard-view
title: Dashboard View Widget
sidebar_label: Dashboard View Widget
tags: [Software Developer]
sidebar_position: 2
displayed_sidebar: software-developer
---

<div style={{textAlign: "justify"}}>


The Dashboard View widget enables you to embed one or more dashboards or a mashup of several charts, maps, and metrics into your application. 

>**Note**: The Dashboard View widget replaces the Page View widget in Qrvey version 8.0 and later. 


### General Properties
The following table lists the properties associated with this widget.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, Your organization’s unique API key required to access the Qrvey platform. Never expose your organization’s API key to external users. In Production environments, use a secure token (qv_token) to encrypt the API key. | Yes, if the qv_token is not provided |
| **qv_token** | `String`, A secure token encrypted via JWT to authenticate and authorize embedded widgets. Establishes a secure connection between the host application and the Qrvey system. For more information, see [Embedding Widgets Using a Security Token](../embedding-widgets-security-token.md). | Yes, if the api_key is not provided |
| **app_id** | `String`, ID of the Qrvey application containing the dashboard, report, automation, or web form. | Yes |
| **domain** | `String`, The base URL of your instance of the Qrvey platform. | Yes | 
| **user_id** | `String`, ID of the Qrvey Composer user that owns the application that is being embedded. Optional: You can alternately specify the user ID in a Qrvey session cookie. | Yes, if the user_id is not included in a session cookie  |
| **group_list** | `Array<String>`, collection of IDs/names of the groups created in User Management. | No
| **page_id** | `String`, ID of one page to visualize it: all auth process is still required if the configuration exists.|No
| **userFilters** | `Array<Object>`, collection of custom filters that the system will apply to the visualized data. Please see [Working With Filters in Embedded Scenarios](../filters-embedded-scenarios.md) for more details on how to create a filter object. | No
| **filter_panel_default_view** | `String`, Decides the default state of the side filter panel, if it’s been added to the view. It can be set to ‘open’ or ‘closed’. The default value is closed.| No
| **fit_panel_button** | `Boolean`, Show the fit to panel button on the panels. Default value is true.| No
| **personalization** | `Object`, JSON object to configure and overwrite the default personalization settings. Please see the section about <a href="#configuring-end-user-personalization">Configuring End User Personalization</a> for more details.|No
| **styles** | `Object`, JSON object configuring style options that can be used to override the default styles, allowing for while-labeling the widget. Please see the<a href="#overriding-the-default-styles"> Overriding the Default Styles</a> section for more details.|No
| **featurePermission** | `Object`, JSON object to configure which features are or are not available in the widget. Presently it only supports showing and hiding of the pages bar, where the pages appear as tabs at the bottom of the widget.*<br/>The object’s structure is:<br/><code>featurePermission:{<br/>&nbsp;&nbsp;pagesAndApplication{<br/>&nbsp;&nbsp;&nbsp;hidePagesBar: true // or false (default)<br/>&nbsp;&nbsp;}<br/>}</code> | No
| **customTokens** | `Object`, JSON object used to set custom threshold values in Bullet and Dial charts. For more information, see [Using Custom Tokens](../customTokens.md). | No
| **clientid** | `String`, Unique identifier for the tenant end user. Required for using the End User Personalization and Download Manager features. The clientid must be set to a unique value for each tenant end user. | Yes, for certain features
| **authenticatedSession.email** | `String`, Specifies the email address to associate with the widget. If an address is not specified, exports are sent to the email address associated with the user ID. | No 
| **themeid** | String, theme ID to use in the component | No

## Showing and Hiding Features
In the Dashboard View widget, the `featurePermission` object enables you to create a customized view by showing and hiding specific features. The properties table below lists all the features that you can show or hide. 

### featurePermission Object Properties
The following table describes the properties of the `featurePermission` object.  

| **Property** | **Description** |  **Type** | **Default** | **Required** |
| --- | --- | --- | --- | --- |
| **featurePermission** | Main property of this feature | `Object`| N/A| No| 
| **navigation** | Define navigation-related features that can be hidden| `Object`| N/A| No| 
| **hideNavigationTab** | Hide the entry method to the navigation tab in the top bar of the widget| `Boolean`| false| No| 
| **userManagement** | Define user management related features that can be hidden| `Object`| N/A| No| 
| **hideUserManagementTab** | Hide the entry method to the user management tab in the top bar of the widget| `Boolean`| false| No| 
| **pagesAndApplication** | Define pages and application-related features that can be hidden| `Object`| N/A| No| 
| **hidePublishAppButton** | Hide button “Unpublish”/”publish application”| `Boolean`| false| No| 
| **hidePublishPageButton** | Hide button “publish page”| `Boolean`| false| No| 
| **hideCopyPageLink** | Hide the UI interfaces where the user can get the link of a page| `Boolean`| false| No| 
| **hideLaunchButton** | Hide the button to access the page view| `Boolean`| false| No| 
| **hideCreateManagePages** | Hide all options to create pages| `Boolean`| false| No| 
| **hidePageStatus** | Hide Text “status”| `Boolean`| False| No| 
| **hidePagesBar** | Hide bottom bar pages| `Boolean`| False| No| 
| **LiteVersion** | Hide all elements that are managed by feature permissions| `Boolean`| false| No| 
| **canvas** | Define canvas related features that can be hidden| `Object`| N/A| No| 
| **hideManageCanvas** | Hide the following options: Grid, Responsive View, Discard Changes | `Boolean`| false | No| 
| **downloads** | Displays the download access points in the widget | `Boolean` | false | No |
| **downloads.hideSchedule** |  Hides the scheduling export option in the export modal | `Boolean`| true | No |

>**Tip**: To hide all features, set the `Liteversion` property to `true`. For example:

```js
const widgetConfig = {
   domain: "DOMAIN",
   appid: "APP_ID",
   userid: "USER_ID",
   featurePermission: {
     liteVersion: true,
   },
}
```

>**Tip**: To hide most features, set the `Liteversion` property to `true` and list the exceptions you want to show to false. For example:

```js
const widgetConfig = {
   domain: "DOMAIN",
   appid: "APP_ID",
   userid: "USER_ID",
   featurePermission: {
     liteVersion: true,
     userManagement:{
       hideUserManagementTab: false
     }
   },
}
```

## Subscription Settings
In the Dashboard View widget, you can enable end users to subscribe to a scheduled delivery of exported dashboards or specific charts. For more information on using subscriptions, see [Subscribing to Exports](../../../composer/06-Building%20Dashboards/02-Dashboards/subscribing-exports.md).

To enable the User Subscriptions option in the Dashboard View widget, set the `enable_subscriptions` property to `true`. For example:

```js
const subscriptions_settings = {
          enable_subscriptions: true
}
```

>**Note**: The Subscriptions feature relies on the user being authenticated and needs the `clientid` property set for the logged-in user. The property’s value should represent a unique identifier for each end user. 

### subscriptions_settings object properties
The following table describes the properties of the `subscription_settings` object.  

| **Property** | **Description** |  **Type** |  **Default** |  **Required** |
| --- | --- | --- | --- | --- |
| **enable_subscriptions** | Toggle the visibility of the User Subscriptions alarm bell. When disabled, subscriptions are not available to the end user. | `boolean` | true | No |
| **emails** | Email addresses to deliver the exports to. | `Array<Object>` | N/A | No | 
| **allow_editing_recipients** | Enables the end user to modify the list of recipients of the export. | `boolean` | N/A | No |
| **email_message** | JSON object to configure the email message. See below for the structure. | `Object` | N/A | No |

The structure of the email_message object is:

```js
const email_message =
    {
     hide_add_subject: true/false,
     hide_add_message: true/false
    }
```

## Configuring End User Personalization
In the Dashboard View widget, all authenticated users can personalize their view by default. You can use the personalization object to configure and override the personalization settings. 

To turn personalization off for all users, set the `enabled` property to `false`. For example:

```js
const widgetConfig = {
   domain: "DOMAIN",
   appid: "APP_ID",
   userid: "USER_ID",
   personalization: {
     enabled: false,
   },
}
```

>**Note**: The End User Personalization feature relies on the user being authenticated and needs the clientid property set for the logged-in user. The property’s value should represent a unique identifier for each end-user, as Qrvey uses it as a key to store any personalization made. Using the same clientid value for multiple end-users will result in the users’ personalized versions being overridden by each other. See the [Embedding Widgets Using a Security Token](../embedding-widgets-security-token.md) property set for the logged-in user.

### Personalization Object Properties
The following table describes the properties of the `personalization` object.  

| **Property** | **Description** |  **Type** |  **Default** |  **Required** |
| --- | --- | --- | --- | --- |
| **enabled** | Turn personalization on/off for end users. When disabled, all of the properties in the personalization object, other than the **fit_panel_button** property will be omitted. | boolean | true | No
| **add_filter** | When set to true, all “add filter” buttons will be visible to allow users to create new filters from the filter modal, the filter panel, and filter interactivity page components. | boolean | true | No
| **edit_chart** | Allow authenticated users to edit charts by clicking the “Edit” button in the panels' three-dot menu. | boolean | true | No
| **download_data** | Allow users to download the page and panel data in CSV and PDF formats | boolean | true | No
| **edit_page** | Allow authenticated users to go into edit mode, where the page builder widget will be displayed. Users will see an “edit page” icon in the floating three-dot menu. | boolean | true | No
| **remove_chart** | Allow users to remove charts from the page, when in edit mode | boolean | true | No
| **rearrange_chart** | Allow users to rearrange the chart panels, when in edit mode | boolean | true | No


## Overriding the Default Styles
In the Dashboard View widget, you can override CSS settings for white-labeling purposes.

When using the `styles` object, house the properties inside the `pageView` object. For example:

```
styles: {
  pageView: {
    canvasTextFontFamily: 'Roboto, sans-serif',
    canvasTextFontWeight: 'normal',
    canvasTextFontSize: '12px',
    canvasTextFontColor: 'blue',
    canvasTextBackgroundColor: 'white',
    canvasTextAlign: 'left'
  }
}
```

#### Styles Object Properties
The following table describes the properties of the `styles` object.  

| **Property** | **Values** | **Target** |
| --- | --- | --- | 
| **canvasButtonBackgroundColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | button
| **canvasButtonFontColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | button
| **canvasDatepickerFontFamily** | Groups of values: <br />'Roboto, sans-serif'<br />'Georgia, serif'<br />'Palatino Linotype, Book Antiqua, Palatino, serif'<br />'Times New Roman, Times, serif'<br />'Arial, Helvetica, sans-serif'<br />'Arial Black, Gadget, sans-serif'<br />'Comic Sans MS, cursive, sans-serif'<br />'Impact, Charcoal, sans-serif'<br />'Lucida Sans Unicode, Lucida Grande, sans-serif'<br />'Tahoma, Geneva, sans-serif'<br />'Trebuchet MS, Helvetica, sans-serif'<br />'Verdana, Geneva, sans-serif'<br />'Courier New, Courier, monospace'<br />'Lucida Console, Monaco, monospace'<br /> | datepicker
| **canvasDatepickerFontColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | datepicker
| **canvasDatepickerIconSelectorsColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | datepicker
| **canvasValuelistFontFamily** | Groups of values:<br />'Roboto, sans-serif'<br />'Georgia, serif'<br />'Palatino Linotype, Book Antiqua, Palatino, serif'<br />'Times New Roman, Times, serif'<br />'Arial, Helvetica, sans-serif'<br />'Arial Black, Gadget, sans-serif'<br />'Comic Sans MS, cursive, sans-serif'<br />'Impact, Charcoal, sans-serif'<br />'Lucida Sans Unicode, Lucida Grande, sans-serif'<br />'Tahoma, Geneva, sans-serif'<br />'Trebuchet MS, Helvetica, sans-serif'<br />'Verdana, Geneva, sans-serif'<br />'Courier New, Courier, monospace'<br />'Lucida Console, Monaco, monospace' | valuelist
| **canvasValuelistFontColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | valuelist
| **canvasValuelistIconSelectorsColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | valuelist
| **canvasTextFontFamily** | Groups of values:<br />, sans-serif'<br />'Georgia, serif'<br />'Palatino Linotype, Book Antiqua, Palatino, serif'<br />'Times New Roman, Times, serif'<br />'Arial, Helvetica, sans-serif'<br />'Arial Black, Gadget, sans-serif'<br />'Comic Sans MS, cursive, sans-serif'<br />'Impact, Charcoal, sans-serif'<br />'Lucida Sans Unicode, Lucida Grande, sans-serif'<br />'Tahoma, Geneva, sans-serif'<br />'Trebuchet MS, Helvetica, sans-serif'<br />'Verdana, Geneva, sans-serif'<br />'Courier New, Courier, monospace'<br />'Lucida Console, Monaco, monospace' | textbox
| **canvasTextFontWeight** | All CSS supported values (names of numbers) <br /> 'bold', 'bolder', 200, 400 | textbox
| **canvasTextFontSize** | All CSS supported values <br />'10px', '10em', '10rem', '10%', 'large', 'small' | textbox
| **canvasTextFontColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | textbox
| **canvasTextBackgroundColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | textbox
| **canvasTextAlign** | right, 'center', 'left' | textbox
| **canvasImageAspect** | ‘cover’, ‘contain’, ‘fill’ | image
| **navigationBackgroundColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | navigation bar
| **navigationElementsColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | navigation bar
| **tabsBackgroundColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | tabs bar
| **tabsFontColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | tabs bar
| **tabsBorderColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | tabs bar
| **tabSize** | All CSS supported values'10px', '10em', '10rem', '10%' | tabs bar
| **selectedTabBarColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | tabs bar
| **canvasBackgroundColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | page
| **pageViewButtonBackgroundColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | floating button (bottom right)
| **pageViewButtonIconColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | floating button (bottom right)



## Events
The widget supports custom events to update keys of the configuration, you can dispatch an event using your own user interface to modify the behavior.

* **atApplyUserFilters**: Enables changes to the `builderFilters` property - the expected value for this property is a reduced version of the `filter` object. This property is a collection of objects that includes:
  * Operator: defines which operation will be performed with the expressions.
  * Expressions: a collection of objects that contains the questions/column reference, the type of operation applied to the questions, and the values that will be used for filtering.

<!-- 
## Code Samples
The following samples demonstrate how this widget can be used in an HTML page. 

| **Implementation** | **Description** | **Front-end Code** | **Back-end Code** |
| --- | --- | --- | --- |
| Basic API Key | This sample uses a basic API key to embed a full Dashboard View widget. It does not encrypt the API key and is not suitable for production environments.| [codepen](https://codepen.io/qrveysamples/pen/NWNvyWM/cf1d20805cc1f18680d7a9d15a07dce3) | n/a |
| Basic API Key - Single Report | This sample uses a basic API key to embed a single Dashboard View widget. It does not encrypt the API key and is not suitable for production environments.| [codepen](https://codepen.io/qrveysamples/pen/LYXwKoM/6f4049ea4a7fe9be92984be3591285d6) | n/a |
| CSS Injection | This sample uses a basic API key and custom CSS to embed a single Dashboard View widget. It does not encrypt the API key and is not suitable for production environments. | [codepen](https://codepen.io/qrveysamples/pen/BavBNjY/4bb40af9433781a4ae41d36e6ffca40c?editors=1010) | n/a | 
-->

</div>