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

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **apiKey** | `String`, Your organization’s unique API key required to access the Qrvey platform. | **Required**, if `qvToken` is not provided. |
| **qvToken** | `String`, Encrypted token used for secure authentication. | **Required**, if `apiKey` is not provided. |
| **appId** | `String`,  ID of the Qrvey application that contains the asset you want to embed. | **Required** |
| **domain** | `String`, The base URL of your Qrvey instance. | **Required** | 
| **userId** | `String`, ID of the Qrvey User that owns the application being embedded. Optional: You can alternately specify the user ID in a Qrvey session cookie. | **Required**, if `userId` is not included in a session cookie.  |
| **dashboardId** | `String`, ID of a specific dashboard to open to. If omitted, the widget will open to "browse all dashboards". | **Optional** |
| **groupList** | `Array<String>`, Collection of IDs/names of the groups created in User Management. | **Optional** |
| **pageId** | `String`, ID of a page to visualize. If configured, all auth processes are still required. | **Optional** |
| **clientid** | `String`, Unique identifier for the tenant end user. Required for using the End User Personalization and Download Manager features. | **Optional** |
| **themeId** | `String`, Theme ID to use in the component. For more details, please see [Accessing a Theme Programmatically](../../../composer/Creating%20Charts/setting-chart-styles#accessing-a-theme-programmatically). | **Optional** |
| **userFilters** | `Array<Object>`, Collection of custom filters that the system will apply to the visualized data. For more information, please see [Working With Filters in Embedded Scenarios](../filters-embedded-scenarios.md). | **Optional** |
| **fitPanelButton** | `Boolean`, When false, hides the "fit to panel" button on charts within the dashboard. Default value is true. | **Optional** |
| **filterPanelDefaultView** | `String`, Decides the default state of the side filter panel, if it’s been added to the view. It can be set to `open` or `closed`. The default value is `closed`. | **Optional** |
| **authenticatedSession.email** | `String`, Specifies the email address to associate with the widget. If an address is not specified, exports are sent to the email address associated with the user ID. | **Optional** |
| **personalization** | `Object`, Configures and/or overwrites the default personalization/customization settings. For more information, please see [The Personalization Object](#personalization) below. | **Optional** |
| **customTokens** | `Object`, Sets custom threshold values in Bullet and Dial charts. For more information, please see [Using Custom Tokens](../customTokens.md). | **Optional** |
| **featurePermission** | `Object`, Configures which features are available in the widget. For more details, please see [The Feature Permission Object](#feature-permission) below. | **Optional** |
| **subscriptionsSettings** | `Object`, Configures subscription details in the widget. For details, please see [The Subscriptions Settings Object](#subscriptions-settings) below. | **Optional** |


### Feature Permission

The following table describes the properties of the `featurePermission` object.

| **Property** | **Description** | **Required** |
| --- | --- | --- |
| **liteVersion** | `Boolean`, If true, hides all elements that are managed by feature permissions. Defaults to false. | **Optional** |
| **downloads** | `Object`, Contains the download and export parameters. | **Optional** |
| **downloads.hideGeneralDownload** | `Boolean`, If true, hides the download feature from the dashboard tool bar. Defaults to false. | **Optional** |
| **downloads.hideSchedule** | `Boolean`, If true, hides the scheduling export option in the export modal. Defaults to false. | **Optional** |
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

### Subscriptions Settings

In the Dashboard View widget, you can enable end users to subscribe to a scheduled delivery of exported dashboards or specific charts. For the Subscriptions feature to work, you must appropriately set the `clientid` property and pass it in when generating the `qvToken`. The property’s value should represent a unique identifier for each end user. For more information on using subscriptions, see [Subscribing to Exports](../../../composer/06-Dashboards/subscribing-exports.md).

| **Property** | **Description** |  **Required** |
| --- | --- | --- |
| **enable_subscriptions** | `Boolean`, If false, disables the User Subscriptions alarm bell and subscriptions are not available to the end user within the widget. Defaults to true. | **Optional** |
| **emails** | `Array`, Email addresses to deliver the exports to. <br /> Example: `[ "email@jmail.com", "email2@jmail.com"]` | **Optional** |  
| **allow_editing_recipients** | `Boolean`, Enables the end user to modify the list of recipients of the export. | **Optional** |
| **email_message** | `Object`, JSON object to configure the email message. | **Optional** |
| **email_message.hide_add_subject** | `Boolean`, Toggles visibility of the email's subject field.| **Optional** |
| **email_message.hide_add_message** | `Boolean`, Toggles visibility of the message field. | **Optional** |

### Personalization

Configures end-user personalization. In the Dashboard View widget, all authenticated users can personalize their view by default. You can use the personalization object to configure and override the personalization settings. End User Personalization feature relies on the user being authenticated and needs the `clientid` property set for the logged-in user.

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
| **autoSaveFilters** | `Boolean`, If false, this parameter disables the auto-saving of filters and enables the "Save" button, allowing users to manually save filters when applied. Additionally, setting autoSaveFilters to false removes the ability to restore filters through the filter panel. Defaults to true. | **Optional** |
| **skipRestoreOriginalModal** | `Boolean`, If true, this parameter disables the confirmation modal that appears during the "restore original" action. Defaults to false. | **Optional** |

## Events

The widget [supports custom events](../custom-events.md) to update keys of the configuration, you can dispatch an event using your own user interface to modify the behavior.

- **`atApplyUserFilters()`**
  - **Purpose**: Enables changes to [the `userFilters` property](../filters-embedded-scenarios.md).
  - **Example**:
    ```js
    window.dispatchEvent(new CustomEvent('atApplyUserFilters', {detail: userFilters}));
    ```

- **`qvDSHRestoreDashboard()`**
  - **Purpose**: Restores a dashboard to a specified version: `ORIGINAL` or `PERSONALIZED`, which must be included in the event's `detail` field. 
  - **Scope**: Dashboard view.
  - **Details**: Logs `[qvDSHRestoreDashboard]: Unable to restore to the provided version` if:
    - No version is specified.
    - An invalid version is provided.
    - `clientid` is missing in the authentication token.
    - No personalization exists for the dashboard.
    - Personalization is disabled in the configuration.
    - The same version is already active.
  - **Example**:
    ```js
    window.dispatchEvent(new CustomEvent('qvDSHRestoreDashboard', { detail: { version: 'PERSONALIZED' } }));
    window.dispatchEvent(new CustomEvent('qvDSHRestoreDashboard', { detail: { version: 'ORIGINAL' } }));
    ```

- **`qvDSHSaveDashboard()`**
  - **Purpose**: Saves modifications to create a personalized version for the `clientid` specified in the widget configuration.
  - **Scope**: Dashboard view and edit mode.
  - **Details**: Logs `[qvDSHSaveDashboard]: Unable to save changes.` if:
    - No changes are detected.
    - Personalization is disabled in the configuration.
    - `clientid` is missing in the authentication token.
  - **Example**:
    ```javascript
    window.dispatchEvent(new CustomEvent('qvDSHSaveDashboard'));
    ```

- **`qvDSHEditDashboard()`**
  - **Purpose**: Opens the dashboard in edit mode.
  - **Scope**: Dashboard view.
  - **Details**: Logs `[qvDSHEditDashboard]: Unable to edit dashboard.` if:
    - Personalization is disabled in the configuration.
    - The dashboard is not in desktop view.
    - Dashboard editing is disabled.
    - `clientid` is missing in the authentication token.
  - **Example**:
    ```javascript
    window.dispatchEvent(new CustomEvent('qvDSHEditDashboard'));
    ```

- **`qvDSHCloseEditDashboard()`**
  - **Purpose**: Exits edit mode in the dashboard.
  - **Scope**: Edit mode.
  - **Example**:
    ```javascript
    window.dispatchEvent(new CustomEvent('qvDSHCloseEditDashboard'));
    ```

- **`qvDSHCreateNewSubscription()`**
  - **Purpose**: Opens the modal for creating a new subscription.
  - **Scope**: Dashboard view.
  - **Details**: Logs `[qvDSHCreateNewSubscription]: Unable to create subscription.` if:
    - The user is not authenticated.
    - The user is in interact mode.
    - Subscriptions are disabled.
  - **Example**:
    ```javascript
    window.dispatchEvent(new CustomEvent('qvDSHCreateNewSubscription'));
    ```

  
- **`qvDSHManageSubscriptions()`**
  - **Purpose**: Opens the manage subscriptions modal.
  - **Scope**: Dashboard view.
  - **Details**: Logs `[qvDSHManageSubscriptions]: Unable to manage subscriptions.` if:
    - The user is not authenticated.
    - The user is in interact mode.
    - Subscriptions are disabled.
  - **Example**:
    ```javascript
    window.dispatchEvent(new CustomEvent('qvDSHManageSubscriptions'));
    ```

- **`qvDSHDownloadDashboard()`**
  - **Purpose**: Downloads the dashboard in the specified format (`CSV`, `EXCEL`, `PDF`, or `DATASET`).
  - **Scope**: Dashboard view and edit mode.
  - **Details**: Logs `[qvDSHDownloadDashboard]: Unable to download the provided format.` if:
    - No format is specified.
    - An unsupported format is provided.
    - Downloads are disabled in the configuration or due to permission settings.
    - The dashboard is loading or a process is currently locking the screen.
  - **Examples**:
    ```javascript
    window.dispatchEvent(new CustomEvent('qvDSHDownloadDashboard', { detail: { format: 'PDF' } }));
    window.dispatchEvent(new CustomEvent('qvDSHDownloadDashboard', { detail: { format: 'CSV' } }));
    window.dispatchEvent(new CustomEvent('qvDSHDownloadDashboard', { detail: { format: 'EXCEL' } }));
    window.dispatchEvent(new CustomEvent('qvDSHDownloadDashboard', { detail: { format: 'DATASET' } }));
    ```   