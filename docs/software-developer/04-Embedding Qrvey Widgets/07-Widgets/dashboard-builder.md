---
id: widget-dashboard-builder
title: Dashboard Builder
sidebar_label: Dashboard Builder
tags: [Software Developer]
sidebar_position: 1
displayed_sidebar: getting-started
---

When embedded in an application, the Dashboard Builder widget enables users to modify existing dashboards or add new dashboards. Dashboards may contain reports, web forms, or other content.

## Embeddable Script

```html 
<!-- Tag -->
<qrvey-builders settings="config"></qrvey-builders>

<!-- Config -->
<script>
var config = {
  apiKey: "<API_KEY>",
  domain: "<DOMAIN>",
  userId: "<USER_ID>",
  appId: "<APP_ID>"
};
</script>

<!-- Launcher -->
<script type="text/javascript" src="https://<WIDGETS_URL>/widgets-launcher/app.js"></script>
```

## The Configuration Object

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **apiKey** | `String`, Your organization’s unique API key required to access the Qrvey platform. | **Required**, if `qvToken` is not provided |
| **qvToken** | `String`, Encrypted token used for secure authentication. | **Required**, if `apiKey` is not provided |
| **appId** | `String`, ID of the Qrvey Application containing the widget. | **Required** |
| **domain** | `String`, The base URL of your Qrvey instance. | **Required** | 
| **userId** | `String`, ID of the Qrvey User that owns the application being embedded. Optional: You can alternately specify the user ID in a Qrvey session cookie. | Yes, if `userid` is not included in a session cookie.  |
| **clientId** | `String`, Unique identifier for the tenant end user. Required for using the End User Personalization and Download Manager features. The clientId must be set to a unique value for each tenant end user. | **Optional** |
| **dashboardId** | `String`, ID of a specific dashboard to open to. If omitted, the widget will open to "browse all dashboards". | **Optional** |
| **timezone** | `Object`, Unique identifier for the tenant end user. Required for using the End User Personalization and Download Manager features. The clientid must be set to a unique value for each tenant end user.  | **Optional** |
| **privatePages** | `Boolean`, Predefines the state of new dashboards. If `true`, every new dashboards will be private. Defaults to false. | **Optional** |
| **doNotAllow** | `Array<String>`, Collection of strings to define permissions (will hide or block some features): <br /><br />**CREATE_CHART**: Hide Create Chart button.<br />**USERS_AUTHENTICATION**: Hide Authentication tab.<br />**USERS_LIST**: Hide Users tab.<br />**GROUPS_CRUD**: Hide the actions for create, duplicate or delete groups.<br />**GROUPS_USERS_DETAIL**: Hide the users table inside the group detail view. | **Optional** |
| **styles** | `Object`, Allows users to modify part of the look and feel of the widget. Every property supports a string (hexadecimal color) or the name of a color. For details, please see [The Style Object](#the-style-object) below.| **Optional** |
| **userFilters** | `Array<Object>`, Collection of custom filters that the system will apply to the visualized data. For more information, see [Working With Filters in Embedded Scenarios](../filters-embedded-scenarios.md). | **Optional** |
| **customTokens** | `Object`, Sets custom threshold values in Bullet and Dial charts. For more information, see [Using Custom Tokens](../customTokens.md). | **Optional** |
| **personalization** | `Object`, Configures and/or overwrites the default personalization/customization settings. For more information, please see  [The Personalization Object](#the-personalization-object) below. | **Optional** |
| **authenticatedSession.email** | `String`, Specifies the email address to associate with the widget. If an address is not specified, exports are sent to the email address associated with the user ID. | **Optional** |
| **themeId** | `String`, theme ID to use in the component. For more details, please see [Accessing a Theme Programmatically](../../../composer/Creating%20Charts/setting-chart-styles#accessing-a-theme-programmatically). | **Optional** |
| **featurePermission** | `Object`, Configure which features are available in the widget. For more information, please see [The Feature Permission Object](#the-feature-permission-object) below. | **Optional** |

## The Style Object

| **Property** | **Description**  | **Required** |
| --- | --- | --- |
| **main_color** | Sets main color using a hex color value. | **Optional** |
| **main_text_color** | Sets main text color using a hex color value. | **Optional** |
| **secondary_color** | Sets secondary color using a hex color value. | **Optional** |
| **icon_color** | Sets icon color using a hex color value. | **Optional** |
| **tab_bar_color** | DeSets tab bar using a hex color value.sc | **Optional** |
| **tab_font_color** | Sets tab font color using a hex color value. | **Optional** |
| **error_color** | Sets error color using a hex color value. | **Optional** |

## The Feature Permission Object 
The following table describes the properties of the `featurePermission` object.

| **Property** | **Description** | **Required** |
| --- | --- | --- |
| **liteVersion** | `Boolean`, Hides all elements that are managed by feature permissions if true. Defaults to false. For more details, check the example given below this table. | **Optional** |
| **navigation** | `Object`, Defines navigation-related features that can be hidden. | **Optional** |
| **navigation.hideNavigationTab** | `Boolean`, Hides the entry method to the navigation tab in the top bar of the widget if true. Defaults to false. | **Optional**| 
| **userManagement** | `Object`, Defines user management related features that can be hidden.| **Optional**| 
| **userManagement.hideUserManagementTab** | `Boolean` Hides the entry method to the user management tab in the top bar of the widget if true. Defaults to false.| **Optional**| 
| **pagesAndApplication** | `Object`, Define pages and application-related features that can be hidden. | **Optional**| 
| **pagesAndApplication.hidePublishAppButton** | `Boolean`, Hides button “Unpublish / publish" application button if true. Defaults to false| **Optional**| 
| **pagesAndApplication.hidePublishPageButton** |  `Boolean`, Hides “publish page” button if true. Defaults to false. | **Optional**| 
| **pagesAndApplication.hideCopyPageLink** | `Boolean`, Hides the UI interfaces where the user can get the link of a page if true. Defaults to false. | **Optional**| 
| **pagesAndApplication.hideLaunchButton** | `Boolean`, Hides the button to access the page view if true. Defaults to false.| **Optional**| 
| **pagesAndApplication.hideCreateManagePages** | `Boolean`, Hides all options to create pages if true. Defaults to false. | **Optional**| 
| **pagesAndApplication.hidePageStatus** | `Boolean`, Hides Text status if true. Defaults to false.| **Optional**| 
| **pagesAndApplication.hidePagesBar** | `Boolean`, Hide bottom bar pages if true. Defaults to false. | **Optional**| 
| **canvas** | `Object`, Defines canvas related features that can be hidden. | **Optional**| 
| **canvas.hideManageCanvas** | `Boolean`, If true, hides the following options: Grid, Responsive View, Discard Changes. Defaults to false. | **Optional**| 
| **downloads** | `Object`, Contains params to control display of the download and schedule exports feature. | **Optional** |
| **downloads.hideGeneralDownload** | `Boolean`, Displays the download access points in the widget if true. Defaults to false. | **Optional** |
| **downloads.hideSchedule** | `Boolean`, Hides the scheduling export option if true. Defaults to true. | **Optional** |

>**Tip**: To hide all features, set the `liteVersion` property to `true`. For example:

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

>**Tip**: To hide most features, set the `liteVersion` property to `true` and list the exceptions you want to show to false. For example:

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

## The Personalization Object
The **personalization** object setting controls customization options for the Dashboard Builder widget and supports the following properties at this time:

| **Property** | **Description** | **Required** |
| --- | --- | --- |
| **fit_panel_button** | `Boolean`, Shows the fit to panel button on the panels. Defaults to true. | **Optional** | 


## Events
The widget supports custom events to update keys of the configuration, you can dispatch an event using your own user interface to modify the behavior.
* `atApplyUserFilters()`: Enables changes to the `builderFilters` property - the expected value for this property is a reduced version of the filter object. This property is a collection of objects that includes:
  * Operator: defines which operation will be performed with the expressions.
  * Expressions: a collection of objects that contains the questions/column reference, the type of operation applied to the questions, and the values that will be used for filtering.