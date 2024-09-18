---
id: widget-dashboard-view
title: Dashboard View
sidebar_label: Dashboard View
tags: [Software Developer]
sidebar_position: 2
displayed_sidebar: getting-started
---


The Dashboard View widget enables you to embed one or more dashboards or a mashup of several charts, maps, and metrics into your application.

## Embeddable Script

```html
<!-- Tag -->
<qrvey-end-user settings="config"></qrvey-end-user>`

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
The following table lists the properties associated with this widget.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **apiKey** | `String`, Your organization’s unique API key required to access the Qrvey platform. | **Required**, if `qvToken` is not provided. |
| **qvToken** | `String`, Encrypted token used for secure authentication. | **Required**, if `apiKey` is not provided. |
| **appId** | `String`, ID of the Qrvey Application containing the widget. | **Required** |
| **domain** | `String`, The base URL of your Qrvey instance. | **Required** | 
| **userId** | `String`, ID of the Qrvey User that owns the application being embedded. Optional: You can alternately specify the user ID in a Qrvey session cookie. | **Required**, if `userId` is not included in a session cookie.  |
| **dashboardId** | `String`, ID of a specific dashboard to open to. If omitted, the widget will open to "browse all dashboards". | **Optional** |
| **groupList** | `Array<String>`, Collection of IDs/names of the groups created in User Management. | **Optional** |
| **pageId** | `String`, ID of a page to visualize. If configured, all auth processes are still required. | **Optional** |
| **clientId** | `String`, Unique identifier for the tenant end user. Required for using the End User Personalization and Download Manager features. | **Optional** |
| **themeId** | `String`, Theme ID to use in the component. For more details, please see [Accessing a Theme Programmatically](../../../composer/Creating%20Charts/setting-chart-styles#accessing-a-theme-programmatically). | **Optional** |
| **userFilters** | `Array<Object>`, Collection of custom filters that the system will apply to the visualized data. For more information, please see [Working With Filters in Embedded Scenarios](../filters-embedded-scenarios.md). | **Optional** |
| **fitPanelButton** | `Boolean`, When false, hides the "fit to panel" button on charts within the dashboard. Default value is true. | **Optional** |
| **filterPanelDefaultView** | `String`, Decides the default state of the side filter panel, if it’s been added to the view. It can be set to `open` or `closed`. The default value is `closed`. | **Optional** |
| **authenticatedSession.email** | `String`, Specifies the email address to associate with the widget. If an address is not specified, exports are sent to the email address associated with the user ID. | **Optional** |
| **personalization** | `Object`, Configures and/or overwrites the default personalization/customization settings. For more information, please see [The Personalization Object](#personalization) below. | **Optional** |
| **styles** | `Object`, Configure style options that can be used to override the default styles, allowing for while-labeling the widget. For details, please see [The Styles Object](#styles) below.| **Optional** |
| **customTokens** | `Object`, Sets custom threshold values in Bullet and Dial charts. For more information, please see [Using Custom Tokens](../customTokens.md). | **Optional** |
| **featurePermission** | `Object`, Configures which features are available in the widget. For more details, please see [The Feature Permission Object](#feature-permission) below. | **Optional** |
| **subscriptionSettings** | `Object`, Configures subscription details in the widget. For details, please see [The Subscription Settings Object](#subscription-settings) below. | **Optional** |

### Feature Permission

The following table describes the properties of the `featurePermission` object.

| **Property** | **Description** | **Required** |
| --- | --- | --- |
| **liteVersion** | `Boolean`, If true, hides all elements that are managed by feature permissions. Defaults to false. | **Optional** |
| **navigation** | `Object`, Defines navigation-related features that can be hidden. | **Optional** |
| **navigation.hideNavigationTab** | `Boolean`, If true, hides the entry method to the navigation tab in the top bar of the widget.  | **Optional** |
| **userManagement** | `Object`, Defines user management related features that can be hidden. | **Optional** |
| **userManagement.hideUserManagementTab** | `Boolean`, If true, hides the entry method to the user management tab in the top bar of the widget. | **Optional** |
| **pagesAndApplication** | `Object`, Defines pages and application-related features that can be hidden. | **Optional** |
| **pagesAndApplication.hidePublishAppButton** | `Boolean`, Hides the “Unpublish”/“Publish Application” button. | **Optional** |
| **pagesAndApplication.hidePublishPageButton** | `Boolean`, Hides the “Publish Page” button. | **Optional** |
| **pagesAndApplication.hideCopyPageLink** | `Boolean`, Hides the UI interfaces where the user can get the link of a page. | **Optional** |
| **pagesAndApplication.hideLaunchButton** | `Boolean`, Hides the button to access the page view. | **Optional** |
| **pagesAndApplication.hideCreateManagePages** | `Boolean`, Hides all options to create pages. | **Optional** |
| **pagesAndApplication.hidePageStatus** | `Boolean`, Hides the “Status” text. | **Optional** |
| **pagesAndApplication.hidePagesBar** | `Boolean`, Hides the bottom bar for pages. | **Optional** |
| **canvas** | `Object`, Defines canvas-related features that can be hidden. | **Optional** |
| **canvas.hideManageCanvas** | `Boolean`, Hides the following options: Grid, Responsive View, Discard Changes. | **Optional** |
| **downloads** | `Object`, Contains download and export options. | **Optional** |
| **downloads.hideGeneralDownload** | `Boolean`, If true, hides the download feature from the dashboard tool bar. Defaults to false. | **Optional** |
| **downloads.hideSchedule** | `Boolean`, If true, hides the scheduling export option in the export modal. Defaults to false. | **Optional** |

>**Tip**: To hide all features, set the `liteVersion` property to `true`. For example:

```js
const widgetConfig = {
   domain: "DOMAIN",
   appId: "APP_ID",
   userId: "USER_ID",
   featurePermission: {
     liteVersion: true,
   },
}
```

>**Tip**: To hide most features, set the `liteVersion` property to `true` and list the exceptions you want to show to false. For example:

```js
const widgetConfig = {
   domain: "DOMAIN",
   appId: "APP_ID",
   userId: "USER_ID",
   featurePermission: {
     liteVersion: true,
     userManagement:{
       hideUserManagementTab: false
     }
   },
}
```

### Subscription Settings

In the Dashboard View widget, you can enable end users to subscribe to a scheduled delivery of exported dashboards or specific charts.  The Subscriptions feature relies on the user being authenticated and needs the `clientId` property set for the logged-in user. The property’s value should represent a unique identifier for each end user. For more information on using subscriptions, see [Subscribing to Exports](../../../composer/06-Building%20Dashboards/02-Dashboards/subscribing-exports.md).

\| **Property** | **Description** |  **Required** |
| --- | --- | --- |
| **enable_subscriptions** | `Boolean`, If false, disables the User Subscriptions alarm bell and subscriptions are not available to the end user within the widget. Defaults to true. | **Optional** |
| **emails** | `Array`, Email addresses to deliver the exports to. <br /> Example: `[ "email@jmail.com", "email2@jmail.com"]` | **Optional** |  
| **allow_editing_recipients** | `Boolean`, Enables the end user to modify the list of recipients of the export. | **Optional** |
| **email_message** | `Object`, JSON object to configure the email message. | **Optional** |
| **email_message.hide_add_subject** | `Boolean`, Toggles visibility of the email's subject field.| **Optional** |
| **email_message.hide_add_message** | `Boolean`, Toggles visibility of the message field. | **Optional** |

### Personalization

Configures end-user personalization. In the Dashboard View widget, all authenticated users can personalize their view by default. You can use the personalization object to configure and override the personalization settings. End User Personalization feature relies on the user being authenticated and needs the `clientId` property set for the logged-in user.

To turn personalization off for all users, set the `enabled` property to `false`. For example:

```js
const widgetConfig = {
   domain: "DOMAIN",
   appId: "APP_ID",
   userId: "USER_ID",
   personalization: {
     enabled: false,
   },
}
```

The following table describes the properties of the `personalization` object.  

| **Property** | **Description** | **Required** |
| --- | --- | --- |
| **enabled** | `Boolean`, If false, disables personalization for end users and all of the properties in the personalization object. Defaults to true. | **Optional** |
| **add_filter** | `Boolean`, If false, hides the “add filter” buttons and disables users from creating new filters from the filter modal, the filter panel, and filter interactivity page components. Defaults to true. | **Optional** |
| **edit_chart** | `Boolean`, if false, disables authenticated users from editing charts. Defaults to true. | **Optional** |
| **download_data** | `Boolean`, If false, disables the download page and panel data in CSV and PDF formats. Defaults to true. | **Optional** |
| **edit_page** | `Boolean`, If false, disables edit mode for the dashboard widget will be displayed and hides the “edit page” button in the floating three-dot menu. Defaults to true. | **Optional** |
| **remove_chart** | `Boolean`, If false, users cannot remove charts from the page, when in edit mode. Defaults to true. | **Optional** |
| **rearrange_chart** | `Boolean`, If false, users cannot rearrange the chart panels, when in edit mode. Defaults to true. | **Optional** |


### Styles 

In the Dashboard View widget, you can override CSS settings for white-labeling purposes. When using the `styles` object, house the properties inside the `pageView` object. For example:

```
styles: {
  pageView: {
    canvasTextFontFamily: 'Roboto, sans-serif',
    canvasTextFontSize: '12px',
    ...
  }
}
```

The following table describes the properties of the `styles` object.  

| **Property** | **Values** | **Target** |
| --- | --- | --- | 
| **canvasButtonBackgroundColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | button |
| **canvasButtonFontColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | button |
| **canvasDatepickerFontFamily** | Groups of values: <br />'Roboto, sans-serif'<br />'Georgia, serif'<br />'Palatino Linotype, Book Antiqua, Palatino, serif'<br />'Times New Roman, Times, serif'<br />'Arial, Helvetica, sans-serif'<br />'Arial Black, Gadget, sans-serif'<br />'Comic Sans MS, cursive, sans-serif'<br />'Impact, Charcoal, sans-serif'<br />'Lucida Sans Unicode, Lucida Grande, sans-serif'<br />'Tahoma, Geneva, sans-serif'<br />'Trebuchet MS, Helvetica, sans-serif'<br />'Verdana, Geneva, sans-serif'<br />'Courier New, Courier, monospace'<br />'Lucida Console, Monaco, monospace'<br /> | datepicker |
| **canvasDatepickerFontColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | datepicker |
| **canvasDatepickerIconSelectorsColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | datepicker |
| **canvasValuelistFontFamily** | Groups of values:<br />'Roboto, sans-serif'<br />'Georgia, serif'<br />'Palatino Linotype, Book Antiqua, Palatino, serif'<br />'Times New Roman, Times, serif'<br />'Arial, Helvetica, sans-serif'<br />'Arial Black, Gadget, sans-serif'<br />'Comic Sans MS, cursive, sans-serif'<br />'Impact, Charcoal, sans-serif'<br />'Lucida Sans Unicode, Lucida Grande, sans-serif'<br />'Tahoma, Geneva, sans-serif'<br />'Trebuchet MS, Helvetica, sans-serif'<br />'Verdana, Geneva, sans-serif'<br />'Courier New, Courier, monospace'<br />'Lucida Console, Monaco, monospace' | valuelist |
| **canvasValuelistFontColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | valuelist |
| **canvasValuelistIconSelectorsColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | valuelist |
| **canvasTextFontFamily** | Groups of values:<br />, sans-serif'<br />'Georgia, serif'<br />'Palatino Linotype, Book Antiqua, Palatino, serif'<br />'Times New Roman, Times, serif'<br />'Arial, Helvetica, sans-serif'<br />'Arial Black, Gadget, sans-serif'<br />'Comic Sans MS, cursive, sans-serif'<br />'Impact, Charcoal, sans-serif'<br />'Lucida Sans Unicode, Lucida Grande, sans-serif'<br />'Tahoma, Geneva, sans-serif'<br />'Trebuchet MS, Helvetica, sans-serif'<br />'Verdana, Geneva, sans-serif'<br />'Courier New, Courier, monospace'<br />'Lucida Console, Monaco, monospace' | textbox |
| **canvasTextFontWeight** | All CSS supported values (names of numbers) <br /> 'bold', 'bolder', 200, 400 | textbox |
| **canvasTextFontSize** | All CSS supported values <br />'10px', '10em', '10rem', '10%', 'large', 'small' | textbox |
| **canvasTextFontColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | textbox |
| **canvasTextBackgroundColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | textbox |
| **canvasTextAlign** | right, 'center', 'left' | textbox |
| **canvasImageAspect** | ‘cover’, ‘contain’, ‘fill’ | image |
| **navigationBackgroundColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | navigation bar |
| **navigationElementsColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | navigation bar |
| **tabsBackgroundColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | tabs bar |
| **tabsFontColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | tabs bar |
| **tabsBorderColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | tabs bar |
| **tabSize** | All CSS supported values'10px', '10em', '10rem', '10%' | tabs bar |
| **selectedTabBarColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | tabs bar |
| **canvasBackgroundColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | page |
| **pageViewButtonBackgroundColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | floating button (bottom right) |
| **pageViewButtonIconColor** | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | floating button (bottom right) |

## Events

### `atApplyUserFilters()`

Enables changes and updates to [the `userFilters`](../filters-embedded-scenarios.md) property.