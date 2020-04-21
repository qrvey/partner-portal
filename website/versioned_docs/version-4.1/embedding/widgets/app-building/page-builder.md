---
id: version-4.1-widget-page-builder
title: Page Builder
sidebar_label: Page Builder
original_id: widget-page-builder
---
<div style="text-align: justify">

The Page Builder widget allows a user to manage the pages for an application (create, edit, publish and delete). Pages may contain embedded reports and forms, as well as other static content.

This Page Builder widget requires `"<your_qrvey_domain_widget_launcher>"/app.js` script file and use of the `<qrvey-page-builder>` Custom HTML Tag.


## Configuration Object

To configure a Page Builder widget, use the following JSON schema as Configuration Object:

```javascript
{
    domain: "https://your_qrvey_domain",
    appid: "<APP_ID>",
    userid: "<USER_ID>",
    apikey: "<API_KEY>",
}
```

### Properties and Values

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **domain** | `String`, Qrvey Core URL. | Yes |
| **appid** | `String`, Identifier of the Application. | Yes |
| apikey | `String`, Optional API Key, you can set up the widget without an api key if it&#39;s set in a qrvey session cookie. | No |
| userid | `String`, Optional User id, you can set up the widget without a user id if it&#39;s set in a qrvey session cookie. | No  |


### Other configuration properties

```javascript
{
    doNotAllow: "Array<String>",
    styles: {
        main_color: "<String>",
        main_text_color: "<String>",
        secondary_color: "<String>",
        icon_color: "<String>",
        tab_bar_color: "<String>",
        tab_font_color: "<String>",
        error_color: "<String>"
    }
}
```

### Properties and Values

| **Property** | **Value** |
| --- | --- |
| **doNotAllow** | `Array<String>`, Collection of permissions, block or hide widget content. |
| **styles** | `Object`, |
| **styles.main_color** | `String`, |
| **styles.main_text_color** | `String`. |
| **styles.secondary_color** | `String`, |
| **styles.icon_color** | `String`, |
| **styles.tab_bar_color** | `String`, |
| **styles.tab_font_color** | `String`, |
| **styles.error_color** | `String`, |

## Permissions

Add one or more of the followings strings in the **doNotAllow** Property to configure the widget. The order does not matter.


| **Permission** | **Description** |
| --- | --- |
| CREATE_CHART | Hide Create Chart button. |
| USERS_AUTHENTICATION | Hide Authentication tab. |
| USERS_LIST | Hide Users tab. |
| GROUPS_CRUD | Hide the actions for create, duplicate or delete groups. |
| GROUPS_USERS_DETAIL | Hide the users table inside the group detail view. |

## Example
```xml
<script type="text/javascript" src="https://your_qrvey_domain_widget_launcher/app.js"></script>
 
<script>
  window.pageBuilderConfig = {
    domain: 'https://your_qrvey_domain',
    apikey: '<API_KEY>',
    appid: '<APP_ID>',
    userid: '<USER_ID>'
    doNotAllow: ['CREATE_CHART', 'USERS_AUTHENTICATION'],
    styles: {
        main_color: '#3E94FF',
        main_text_color: '#000000',
        secondary_color: 'black',
        icon_color: '#000000',
        tab_bar_color: '#EEEEEE',
        tab_font_color: '#000000',
        error_color: '#FF0000'
    }
  }
</script>

<qrvey-page-builder config="pageBuilderConfig"></qrvey-page-builder>
```