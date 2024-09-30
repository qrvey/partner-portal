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
| **clientId** | `String`, Unique identifier for the tenant end user. Required for using the End User Personalization and Download Manager features. The clientId must be set to a unique value for each tenant end user. | **Optional** |
| **dashboardId** | `String`, ID of a specific dashboard to open to. If omitted, the end user will be taken to the "dashboard selection" page. | **Optional**, but in practice you should always send the user to a specific dashboard. |
| **timezone** | `Object`, Overrides the timezone setting in Qrvey Admin Center. For more information, see [Configuring Time Zone Settings](https://partners.qrvey.com/docs/software-developer/Timezone%20Settings/time-zone-support). | **Optional** |
| **userFilters** | `Array<Object>`, Collection of custom filters that the system will apply to the visualized data. For more information, see [Working With Filters in Embedded Scenarios](../filters-embedded-scenarios.md). | **Optional** |
| **customTokens** | `Object`, Sets custom threshold values in Bullet and Dial charts. For more information, see [Using Custom Tokens](../customTokens.md). | **Optional** |
| **authenticatedSession.email** | `String`, The `email` property in the `authenticatedSession` object specifies the email address to associate with the widget. If an address is not specified, exports are sent to the email address associated with the user ID. | **Optional** |
| **themeId** | `String`, theme ID to use in the component. For more details, please see [Accessing a Theme Programmatically](../../../composer/Creating%20Charts/setting-chart-styles#accessing-a-theme-programmatically). | **Optional** |
| **fitPanelButton** | `Boolean`, If false, hides the "fit to panel" button on charts and panels. Defaults to true. | **Optional** | 
| **featurePermission** | `Object`, Configure which features are available in the widget. For more information, please see [The Feature Permission Object](#feature-permission) below. | **Optional** |
| **defaultMode** | `Boolean`, Toggles the default Dashboard view to "design" or "interaction". Defaults to "design". | **Optional** |


<!--
| **assetPermissions** | `Object`, Controls visibility of these asset types: datasets, charts, metrics, summaries, pages. | **Optional** |
| **datasets** | `Object`, Pass in string array of IDs for the assets to be whitelisted. Any assets not defined in the list will be rendered in the UI and the others will not be visible or usable. | **Optional** |
| **charts** | `String Array`, Pass in string array of IDs for the assets to be whitelisted. Any assets not defined in the list will be rendered in the UI and the others will not be visible or usable. | **Optional** |
| **metrics** | `String Array`, Pass in string array of IDs for the assets to be whitelisted. Any assets not defined in the list will be rendered in the UI and the others will not be visible or usable. | **Optional** |
| **summaries** | `String Array`, Pass in string array of IDs for the assets to be whitelisted. Any assets not defined in the list will be rendered in the UI and the others will not be visible or usable. | **Optional** |
| **pages** | `String Array`, Pass in string array of IDs for the assets to be whitelisted. Any assets not defined in the list will be rendered in the UI and the others will not be visible or usable. | **Optional** | 
-->

###  Feature Permission 
The following table describes the properties of the `featurePermission` object.

| **Property** | **Description** | **Required** |
| --- | --- | --- |
| **liteVersion** | `Boolean`, If true, it is the equivalent of setting the following properties `pagesAndApplication.hidePublishPageButton`, `pagesAndApplication.hidePageStatus`, and `navigation.hideNavigationTab` to true. Defaults to false. For more details, check the example given below this table. | **Optional** |
| **navigation** | `Object`, Defines navigation-related features that can be hidden. | **Optional** |
| **navigation.hideNavigationTab** | `Boolean`, If true, hides the Navigation link in the top menu bar. Defaults to false. | **Optional**| 
| **userManagement** | `Object`, Defines user management related features that can be hidden.| **Optional**| 
| **userManagement.hideUserManagementTab** | `Boolean` If true, hides the User Management link in the top bar of the widget. Defaults to false.| **Optional**| 
| **pagesAndApplication** | `Object`, Define pages and application-related features that can be hidden. | **Optional**| 
| **pagesAndApplication.hidePublishAppButton** | `Boolean`, If true, hides “unpublish / publish" application button. Defaults to false.| **Optional**| 
| **pagesAndApplication.hidePublishPageButton** |  `Boolean`, If true, hides “publish dashboard" button. Defaults to false. | **Optional**| 
| **pagesAndApplication.hideCopyPageLink** | `Boolean`, If true, hides **File > Copy Dashboard** link where the user can get the link of a page. Defaults to false. | **Optional**| 
| **pagesAndApplication.hideLaunchButton** | `Boolean`, If true, hides the button to access the page view. Defaults to false.| **Optional**| 
| **pagesAndApplication.hidePageStatus** | `Boolean`, If true, hides the Dashboard Status Message. Defaults to false.| **Optional**| 
| **pagesAndApplication.hidePrivacyOption** | `Boolean`, If true, hides the **File > Privacy** menu on dashboards. Defaults to false.| **Optional**| 
| **pagesAndApplication.hideSubscriptionsOption** | `Boolean`, If true, hides the **Insert > Subscriptions** menu on dashboards. Defaults to false.| **Optional**| 
| **pagesAndApplication.hideModeChangeButton** | `Boolean`, If true, hides the **Interact / Design** button. Defaults to false.| **Optional**| 
| **canvas** | `Object`, Defines canvas related features that can be hidden. | **Optional**| 
| **canvas.hideManageCanvas** | `Boolean`, If true, hides the Grid Dropdown Menu, Discard button, Grid Options button and Responsive View buttons. Defaults to false. | **Optional**| 
| **downloads** | `Object`, Contains params to control display of the download and schedule exports feature. | **Optional** |
| **downloads.hideGeneralDownload** | `Boolean`, If true, hides the "Download Dashboard" access points within the widget. However, it does not impact the "Download Chart" access points.  Defaults to false.  | **Optional** |
| **downloads.hideSchedule** | `Boolean`, If true, disables the **Schedule Export** link within dashboard and panel downloads. Defaults to false. <br /> Note: If false, both `clientId` and `authenticatedSession.email` are required for the **Schedule Export** link to be visible. | **Optional** |
| **filters** | `Object`. Contains the filters object parameters. | **Optional** |
| **filters.global** | `Boolean`, If true, hides creation points of global filters. Defaults to false. | **Optional** |
| **filters.page** | `Boolean`, If true, hides creation points of page filters. Defaults to false. | **Optional** |
| **filters.tab** | `Boolean`, If true, hides creation points of tab filters. Defaults to false. | **Optional** |
| **filters.chart** | `Boolean`, If true, hides creation points of chart filters. Defaults to false. | **Optional** |
| **filters.filterPanel** | `Boolean`, If true, hides the filter panel. Defaults to false. | **Optional** |
| **panels** |  `Object`. Contains the panels object parameters. | **Optional** |
| **panels.global** | `Object`, Contains global panel settings. | **Optional** |
| **panels.global.hide_all** | `Boolean`, When true, hides the entire panel menu. Defaults to false. | **Optional** |
| **panels.global.hide_edit_menu** | `Boolean`, When true, hides the "edit chart" option. Defaults to false. | **Optional** |
| **panels.global.hide_duplicate_menu** | `Boolean`, When true, hides the "duplicate chart" option. Defaults to false. | **Optional** |
| **panels.global.hide_downloads_menu** | `Boolean`, When true, hides the "download" sub-menu option. Defaults to false. | **Optional** |
| **panels.global.hide_delete_menu** | `Boolean`, When true, hides the "delete chart" option. Defaults to false. | **Optional** |
| **panels.global.hide_JPG** | `Boolean`, When true, hides the "download JPG" option. Defaults to false. | **Optional** |
| **panels.global.hide_PDF** | `Boolean`, When true, hides the "PDF download" option. Defaults to false. | **Optional** |
| **panels.global.hide_CSV** | `Boolean`, When true, hides the "CSV download" option. Defaults to false. | **Optional** |
| **panels.global.hide_CSV_summary** | `Boolean`, When true, hides the "CSV summary" option. Defaults to false. | **Optional** |
| **panels.metrics** | `Object`, Contains metrics panel settings. | **Optional** |
| **panels.metrics.hide_edit_menu** | `Boolean`, When true, hides the "edit chart" option for metrics panels. Defaults to false. | **Optional** |
| **panels.metrics.hide_duplicate_menu** | `Boolean`, When true, hides the "duplicate chart" option for metrics panels. Defaults to false. | **Optional** |
| **panels.metrics.hide_downloads_menu** | `Boolean`, When true, hides the "download" sub-menu option for metrics panels. Defaults to false. | **Optional** |
| **panels.metrics.hide_delete_menu** | `Boolean`, When true, hides the "delete chart" option for metrics panels. Defaults to false. | **Optional** |
| **panels.metrics.hide_JPG** | `Boolean`, When true, hides the "download JPG" option for metrics panels. Defaults to false. | **Optional** |
| **panels.metrics.hide_PDF** | `Boolean`, When true, hides the "PDF download" option for metrics panels. Defaults to false. | **Optional** |
| **panels.metrics.hide_CSV** | `Boolean`, When true, hides the "CSV download" option for metrics panels. Defaults to false. | **Optional** |
| **panels.metrics.hide_CSV_summary** | `Boolean`, When true, hides the "CSV summary" option for metrics panels. Defaults to false. | **Optional** |
| **panels.metrics.hide_EXCEL** | `Boolean`, When true, hides the "EXCEL download" option for metrics panels. Defaults to false. | **Optional** |
| **panels.summaries** | `Object`, Contains summaries panel settings. | **Optional** |
| **panels.summaries.hide_edit_menu** | `Boolean`, When true, hides the "edit chart" option for summaries panels. Defaults to false. | **Optional** |
| **panels.summaries.hide_duplicate_menu** | `Boolean`, When true, hides the "duplicate chart" option for summaries panels. Defaults to false. | **Optional** |
| **panels.summaries.hide_downloads_menu** | `Boolean`, When true, hides the "download" sub-menu option for summaries panels. Defaults to false. | **Optional** |
| **panels.summaries.hide_delete_menu** | `Boolean`, When true, hides the "delete chart" option for summaries panels. Defaults to false. | **Optional** |
| **panels.summaries.hide_JPG** | `Boolean`, When true, hides the "download JPG" option for summaries panels. Defaults to false. | **Optional** |
| **panels.summaries.hide_PDF** | `Boolean`, When true, hides the "PDF download" option for summaries panels. Defaults to false. | **Optional** |
| **panels.summaries.hide_CSV** | `Boolean`, When true, hides the "CSV download" option for summaries panels. Defaults to false. | **Optional** |
| **panels.summaries.hide_CSV_summary** | `Boolean`, When true, hides the "CSV summary" option for summaries panels. Defaults to false. | **Optional** |
| **panels.summaries.hide_EXCEL** | `Boolean`, When true, hides the "EXCEL download" option for summaries panels. Defaults to false. | **Optional** |
| **panels.charts** | `Object`, Contains charts panel settings. | **Optional** |
| **panels.charts.hide_edit_menu** | `Boolean`, When true, hides the "edit chart" option for charts panels. Defaults to false. | **Optional** |
| **panels.charts.hide_duplicate_menu** | `Boolean`, When true, hides the "duplicate chart" option for charts panels. Defaults to false. | **Optional** |
| **panels.charts.hide_downloads_menu** | `Boolean`, When true, hides the "download" sub-menu option for charts panels. Defaults to false. | **Optional** |
| **panels.charts.hide_delete_menu** | `Boolean`, When true, hides the "delete chart" option for charts panels. Defaults to false. | **Optional** |
| **panels.charts.hide_JPG** | `Boolean`, When true, hides the "download JPG" option for charts panels. Defaults to false. | **Optional** |
| **panels.charts.hide_PDF** | `Boolean`, When true, hides the "PDF download" option for charts panels. Defaults to false. | **Optional** |
| **panels.charts.hide_CSV** | `Boolean`, When true, hides the "CSV download" option for charts panels. Defaults to false. | **Optional** |
| **panels.charts.hide_CSV_summary** | `Boolean`, When true, hides the "CSV summary" option for charts panels. Defaults to false. | **Optional** |
| **panels.charts.hide_EXCEL** | `Boolean`, When true, hides the "EXCEL download" option for charts panels. Defaults to false. | **Optional** |






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
