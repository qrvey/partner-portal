---
id: widget-page-builder
title: Page Builder Widget
sidebar_label: Page Builder Widget
---
<div style={{textAlign: "justify"}}>

The Page Builder widget is used to add the ability to create new pages or modify existing ones in a product that embeds this widget.  Pages may contain embedded reports and webforms, as well as other static content.

Like all widgets, this widget has an HTML tag, a launcher script, and a configuration object that needs to be added to the code of any page that embeds it and the necessary property values have to be provided for it to work properly. You can find and copy the necessary piece of code by going to the Page Builder section of Qrvey Composer and clicking on the “Embedding Options” button in the top right corner of the page and selecting the “Embed Page Builder” option.

![page-builder-widget](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/widgets/page-builder-wi.png#thumbnail-20)

This will open a dialog with the necessary code, including the “domain”, “app_id” and “user_id” property values. You can copy the code from here and include it in your application. You have to provide the unique API key value.
The building blocks of the code are explained below.

## HTML Tag And Launcher
The HTML tag for this widget is:
`<qrvey-builders settings=...>`

You can use the following script to launch this widget:

`<[your-widget-url]/widgets-launcher/app.js>`

## Configuration Object
The table below provides general information about each property of this widget’s configuration object, along with a description of the expected value. The Required column indicates whether the property is required for the configuration object to work properly.
 
| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, secret identification token to access the application. | Yes |
| **app_id** | `String`, ID of the Qrvey application containing the webform.| Yes |
| **user_id** | `String`, Optional User ID: you can set up the widget without a user ID if it's set in a qrvey session cookie. | Yes  |
| **domain** | `String`, Qrvey Core URL. | Yes | 
| **private_pages** | `Boolean`, predefine the state of new pages. If *True*, new pages will be private, if not new pages will be public. | No |
| **do_not_allow** | `Array<String>`, Collection of strings to define permissions (will hide or block some features): <br /><br />**CREATE_CHART**: Hide Create Chart button.<br />**USERS_AUTHENTICATION**: Hide Authentication tab.<br />**USERS_LIST**: Hide Users tab.<br />**GROUPS_CRUD**: Hide the actions for create, duplicate or delete groups.<br />**GROUPS_USERS_DETAIL**: Hide the users table inside the group detail view. | No |
| **styles** | `Object`, a JSON object with properties that allow users to modify part of the look and feel of the widget. Every property supports a string (hexadecimal color) or the name of a color.<br /><br />* **main_color**: `String`<br />* **main_text_color**: `String`<br />* **secondary_color**: `String`<br />* **icon_color**: `String`<br />* **tab_bar_color**: `String`<br />* **tab_font_color**: `String`<br />* **error_color**: `String` | No |
| userFilters | Array< Object >, collection of custom filters that the system will apply to the visualized data. Please see [Working With Filters in Embedded Scenarios](../filters-embedded-scenarios.md) for more details on how to create a filter object. | No
| **personalization** | `Object`, JSON object to configure and overwrite the default personalization/customization settings. Please, see the section about <a href="#configuring-personalization">Configuring Personalization</a> for more details. | No

>**Note**: Refer to the<a href="docs/faqs/faqs-intro/"> FAQs</a> if you don’t know where to find any of the required configuration properties. 

## Configuring Personalization
The **personalization** object setting controls customization options for the Page Builder widget and supports the following properties at this time:


| **Property** | **Description** | **Type** | **Default** | **Required** |
| --- | --- | --- | --- | --- |
| fit_panel_button | Show the fit to panel button on the panels | boolean | true | No


> **Note**: Refer to the[ FAQs](../../../faqs/faqs.md) if you don’t know where to find any of the required configuration properties. 

## Events
The widget supports custom events to update keys of the configuration, you can dispatch an event using your own user interface to modify the behavior.
* **atApplyUserFilters**: Enables changes to the “builderFilters” property - the expected value for this property is a reduced version of the filter object. This property is a collection of objects that includes:
  * Operator: defines which operation will be performed with the expressions.
  * Expressions: a collection of objects that contains the questions/column reference, the type of operation applied to the questions, and the values that will be used for filtering.


## Sample
The following sample shows the way this widget is used in an HTML page. Please note that the example may not include the non-required properties of the configuration object. 

You can copy and paste this code to your application after replacing the red values with your own valid values, in order to see the embedded widget in action.

```
<qrvey-builders settings="config"></qrvey-builders>
```

```html
<script>
var config = {
    "api_key": "<API_KEY>", // your API key
    "app_id": "<APP_ID>",
    "user_id": "<USER_ID>", // your user_id
    "domain": "https://your_qrvey_domain", // your domain
    "private_pages": true,
    "do_not_allow": ['CREATE_CHART', 'USERS_AUTHENTICATION'], // optional properties to customize the controls
    "styles": {
        "main_color": '#3E94FF',
        "main_text_color": '#000000',
        "secondary_color": 'black',
        "icon_color": '#000000',
        "tab_bar_color": '#EEEEEE',
        "tab_font_color": '#000000',
        "error_color": '#FF0000'
    },
    "userFilters": { "filters": [
    				{
		"operator": "AND",
		"expressions": [
		{
			"questionid": "aQc13F",
      			"validationType": "EQUAL",
			"value": ["January"]
}
]
}          
 	   	]
 	}  // your filters, if any, can be added like this.

}
</script>
```

```
<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://<WIDGETS_URL>/widgets-launcher/app.js"></script>
```



</div>