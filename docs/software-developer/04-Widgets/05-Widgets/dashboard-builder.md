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

## Configuration Object

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **apiKey** | `String`, Your organization’s unique API key required to access the Qrvey platform. | **Required**, if `qvToken` is not provided |
| **qvToken** | `String`, Encrypted token used for secure authentication. | **Required**, if `apiKey` is not provided |
| **appId** | `String`,  ID of the Qrvey application that contains the asset you want to embed. | **Required** |
| **domain** | `String`, The base URL of your Qrvey instance. | **Required** | 
| **userId** | `String`, ID of the Qrvey User that owns the application being embedded. | **Required**  |
| **clientid** | `String`, Unique identifier for the tenant end user. Required for using the End User Personalization and Download Manager features. The clientid must be set to a unique value for each tenant end user. | **Optional** |
| **dashboardId** | `String`, ID of a specific dashboard to open to. If omitted, the end user will be taken to the "dashboard selection" page. | **Optional**, but in practice you should always send the user to a specific dashboard. |
| **timezone** | `Object`, Overrides the timezone setting in Qrvey Admin Center. For more information, see [Configuring Time Zone Settings](https://partners.qrvey.com/docs/software-developer/time-zone-support). | **Optional** |
| **privatePages** | `Boolean`, Pre-defines the privacy state of new dashboards. If true, every new dashboard will be private (and unavailable to unauthenticated users). Defaults to false, and therefore dashboards are published in a public state. | **Optional** |
| **doNotAllow** | `Array<String>`, Hides or blocks certain features. Currently only supports: `CREATE_CHART` which hides the "Create Chart" button. <br /> **Example:** `["CREATE_CHART"]`| **Optional** |
| **styles** | `Object`, Allows users to modify part of the look and feel of the widget. Every property supports a string (hexadecimal color) or the name of a color. For details, please see [The Styles Object](#styles) below.| **Optional** |
| **userFilters** | `Array<Object>`, Collection of custom filters that the system will apply to the visualized data. For more information, see [Working With Filters in Embedded Scenarios](../filters-embedded-scenarios.md). | **Optional** |
| **customTokens** | `Object`, Sets custom threshold values in Bullet and Dial charts. For more information, see [Using Custom Tokens](../custom-tokens.md). | **Optional** |
| **authenticatedSession.email** | `String`, The `email` property in the `authenticatedSession` object specifies the email address to associate with the widget. If an address is not specified, exports are sent to the email address associated with the user ID. | **Optional** |
| **themeId** | `String`, theme ID to use in the component. For more details, please see [Accessing a Theme Programmatically](../../../composer/Creating%20Charts/setting-chart-styles#accessing-a-theme-programmatically). | **Optional** |
| **fitPanelButton** | `Boolean`, If false, hides the "fit to panel" button on charts and panels. Defaults to true. | **Optional** | 
| **featurePermission** | `Object`, Configure which features are available in the widget. For more information, please see [The Feature Permission Object](#feature-permission) below. | **Optional** |

### Styles

| **Property** | **Description**  | **Required** |
| --- | --- | --- |
| **main_color** | Sets main color using a hex color value. | **Optional** |
| **main_text_color** | Sets main text color using a hex color value. | **Optional** |
| **secondary_color** | Sets secondary color using a hex color value. | **Optional** |
| **icon_color** | Sets icon color using a hex color value. | **Optional** |
| **tab_bar_color** | DeSets tab bar using a hex color value.sc | **Optional** |
| **tab_font_color** | Sets tab font color using a hex color value. | **Optional** |
| **error_color** | Sets error color using a hex color value. | **Optional** |

###  Feature Permission 
The following table describes the properties of the `featurePermission` object.

| **Property** | **Description** | **Required** |
| --- | --- | --- |
| **liteVersion** | `Boolean`, Hides all elements that are managed by feature permissions if true. Defaults to false. For more details, check the example given below this table. | **Optional** |
| **navigation** | `Object`, Defines navigation-related features that can be hidden. | **Optional** |
| **navigation.hideNavigationTab** | `Boolean`, Hides the entry method to the navigation tab in the top bar of the widget if true. Defaults to false. | **Optional**| 
| **userManagement** | `Object`, Defines user management related features that can be hidden.| **Optional**| 
| **userManagement.hideUserManagementTab** | `Boolean` Hides the entry method to the user management tab in the top bar of the widget if true. Defaults to false.| **Optional**| 
| **pagesAndApplication** | `Object`, Define pages and application-related features that can be hidden. | **Optional**| 
| **pagesAndApplication.hidePublishAppButton** | `Boolean`, Hides button “Unpublish / publish" application button if true. Defaults to false.| **Optional**| 
| **pagesAndApplication.hidePublishPageButton** |  `Boolean`, Hides “publish page” button if true. Defaults to false. | **Optional**| 
| **pagesAndApplication.hideCopyPageLink** | `Boolean`, Hides the UI interfaces where the user can get the link of a page if true. Defaults to false. | **Optional**| 
| **pagesAndApplication.hideLaunchButton** | `Boolean`, Hides the button to access the page view if true. Defaults to false.| **Optional**| 
| **pagesAndApplication.hideCreateManagePages** | `Boolean`, Hides all options to create pages if true. Defaults to false. | **Optional**| 
| **pagesAndApplication.hidePageStatus** | `Boolean`, Hides Text status if true. Defaults to false.| **Optional**| 
| **pagesAndApplication.hidePagesBar** | `Boolean`, Hide bottom bar pages if true. Defaults to false. | **Optional**|
| **pagesAndApplication.hideThreeDotMenu** | `Boolean`, When true, hides the three-dot menu, including in edit mode. Defaults to false. | **Optional** |
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

## Events
The widget [supports custom events](../custom-events.md) to update keys of the configuration, you can dispatch an event using your own user interface to modify the behavior.
* `atApplyUserFilters()` — Enables changes to [the `userFilters` property](../filters-embedded-scenarios.md).

  ```js
  window.dispatchEvent(new CustomEvent('atApplyUserFilters', {detail: userFilters}));
  ```
