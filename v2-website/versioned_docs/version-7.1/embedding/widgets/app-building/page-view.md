---
id: widget-page-view
title: Page View Widget
sidebar_label: Page View Widget
---

<div style={{textAlign: "justify"}}>


The Page View widget (previously known as “End User widget”) is used to add the published page, or collection of pages, in a product that embeds this widget. The widget is meant to be used by the end users, who don’t need page creation ability provided in the Page Builder widget. Pages may contain embedded reports and webforms, as well as other static content.


Like all widgets, this widget has an HTML tag, a launcher script, and a configuration object that needs to be added to the code of any page that embeds it and the necessary property values have to be provided for it to work properly. 

Depending on whether a single, specific published page needs to be embedded or all of the published pages, the code can be found in two different places:
* In order to embed all of the published pages, you can find and copy the necessary piece of code by going to the Page Builder section of Qrvey Composer and clicking on the “Embedding Options” button in the top right corner of the page and selecting the “Embed Page View” option.
 
 ![page-view-widget](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/widgets/page-builder-wi.png#thumbnail-40)

This will open a dialog with the necessary code, including the “domain” and property values. You can copy the code from here and include it in your application. You have to provide the unique API key value.

* To embed an individual page, you will also need the page_id value. For this use case you can navigate to the desired page and click on the three-dot menu of the page at the bottom of the screen and select the “Embed Page” option. The code will be very similar to the previous case but include the page_id property of the selected page.

 ![page-view-widget](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/widgets/page-view1.png#thumbnail-40)

The building blocks of the code are explained below.

## HTML Tag And Launcher

The HTML tag for this widget is: 

```<qrvey-end-user settings=...>```

You can use the following script to launch this widget: 

```<[your-widget-url]/widgets-launcher/app.js>```

## Configuration Object

The table below provides general information about each property of this widget’s configuration object, along with a description of the expected value. The Required column indicates whether the property is required for the configuration object to work properly.


| **Property** | **Value** |  **Required** |
| --- | --- | --- |
| app_id | `String`, ID of the Qrvey application containing the webform.| Yes
| app_id | `String`, ID of the Qrvey application containing the web form.| Yes
| domain | `String`, Qrvey Core URL.| Yes
| group_list | `Array<String>`, collection of IDs/names of the groups created in User Management. | No
| page_id | `String`, ID of one page to visualize it: all auth process is still required if the configuration exists.|No
| userFilters | `Array<Object>`, collection of custom filters that the system will apply to the visualized data. Please see [Working With Filters in Embedded Scenarios](../filters-embedded-scenarios.md) for more details on how to create a filter object. | No
| filter_panel_default_view | `String`, Decides the default state of the side filter panel, if it’s been added to the view. It can be set to ‘open’ or ‘closed’. The default value is closed.| No
| fit_panel_button | `Boolean`, Show the fit to panel button on the panels. Default value is true.| No
| personalization | `Object`, JSON object to configure and overwrite the default personalization settings. Please see the section about <a href="#configuring-end-user-personalization">Configuring End User Personalization</a> for more details.|No
| styles | `Object`, JSON object configuring style options that can be used to override the default styles, allowing for while-labeling the widget. Please see the<a href="#overriding-the-default-styles"> Overriding the Default Styles</a> section for more details.|No
| featurePermission | `Object`, JSON object to configure which features are or are not available in the widget. Presently it only supports showing and hiding of the pages bar, where the pages appear as tabs at the bottom of the widget.*<br/>The object’s structure is:<br/><code>featurePermission:{<br/>&nbsp;&nbsp;pagesAndApplication{<br/>&nbsp;&nbsp;&nbsp;hidePagesBar: true // or false (default)<br/>&nbsp;&nbsp;}<br/>}</code> | No




> **Note**: Refer to the [ FAQs](../../../faqs/faqs.md) if you don’t know where to find any of the required configuration properties. 

### Hiding Features
Show or hide any feature you don’t require for your embedded use cases by setting a property to true or false which creates a customized version of the page builder widget.

You can hide all the features mentioned in the table below If you set the *Liteversion* property to true.

```json
widgetConfig = {
   domain: "DOMAIN",
   appid: "APP_ID",
   userid: "USER_ID",
   featurePermission: {
     liteVersion: true,
   },
}
```

If you only want to hide a specific property, set the liteVersion feature to true and the property you want to hide to false. This will hide only the specific property/properties.

```json
widgetConfig = {
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

| **Property** | **Description** |  **Type** | **Default** | **Required** |
| --- | --- | --- | --- | --- |
| featurePermission| Main property of this feature.| `Object`| N/A| No| 
| navigation| Define navigation-related features that can be hidden| `Object`| N/A| No| 
| hideNavigationTab| Hide the entry method to the navigation tab in the top bar of the widget| `Boolean`| false| No| 
| userManagement| Define user management related features that can be hidden| `Object`| N/A| No| 
| hideUserManagementTab| Hide the entry method to the user management tab in the top bar of the widget| `Boolean`| false| No| 
| pagesAndApplication| Define pages and application-related features that can be hidden| `Object`| N/A| No| 
| hidePublishAppButton| Hide button “Unpublish”/”publish application”| `Boolean`| false| No| 
| hidePublishPageButton| Hide button “publish page”| `Boolean`| false| No| 
| hideCopyPageLink| Hide the UI interfaces where the user can get the link of a page| `Boolean`| false| No| 
| hideLaunchButton| Hide the button to access the page view| `Boolean`| false| No| 
| hideCreateManagePages| Hide all options to create pages| `Boolean`| false| No| 
| hidePageStatus| Hide Text “status”| `Boolean`| False| No| 
| hidePagesBar| Hide bottom bar pages in edit mode| `Boolean`| False| No| 
| LiteVersion| Hide all elements that are managed by feature permissions| `Boolean`| false| No| 
| canvas| Define canvas related features that can be hidden| `Object`| N/A| No| 
| hideManageCanvas| Hide the following options: Grid, Responsive View, Discard Changes.| `Boolean`| false | No| 



### Configuring End User Personalization
By default, the Page View widget supports end user personalization for all authenticated users. Use the following guide to configure and override the default settings.

>**Note**: End user personalization feature relies on the user being authenticated and needs the **clientid** property set for the logged-in user. The property’s value should represent a unique identifier for each end-user, as Qrvey uses it as a key to store any personalization made. Using the same **clientid** value for multiple end-users will result in the users’ personalized versions being overridden by each other.
Please see the [Embedding Widgets Using a Security Token](../embedding-widgets-security-token.md) property set for the logged-in user.



| **Property** | **Description** |  **Type** |  **Default** |  **Required** |
| --- | --- | --- | --- | --- |
| enabled | Turn personalization on/off for end users. When disabled, all of the properties in the personalization object, other than the **fit_panel_button** property will be omitted. | boolean | true | No
| add_filter | When set to true, all “add filter” buttons will be visible to allow users to create new filters from the filter modal, the filter panel, and filter interactivity page components. | boolean | true | No
| edit_chart | Allow authenticated users to edit charts by clicking the “Edit” button in the panels' three-dot menu. | boolean | true | No
| download_data | Allow users to download the page and panel data in CSV and PDF formats | boolean | true | No
| edit_page | Allow authenticated users to go into edit mode, where the page builder widget will be displayed. Users will see an “edit page” icon in the floating three-dot menu. | boolean | true | No
| remove_chart | Allow users to remove charts from the page, when in edit mode | boolean | true | No
| rearrange_chart | Allow users to rearrange the chart panels, when in edit mode | boolean | true | No



### Overriding the Default Styles 
The **styles** object can be used to configure css settings of the Page View widget, allowing the widget to be used in multi-tenant environments, and other white-labeling scenarios. 
All of the style properties listed in the following table have to be housed inside the **pageView** object, under **styles** like the following example:

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

All values are of string type and none are required.

| **Property** | **Values** | **Target** |
| --- | --- | --- | 
| canvasButtonBackgroundColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | button
canvasButtonFontColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | button
| canvasDatepickerFontFamily | Groups of values: <br />'Roboto, sans-serif'<br />'Georgia, serif'<br />'Palatino Linotype, Book Antiqua, Palatino, serif'<br />'Times New Roman, Times, serif'<br />'Arial, Helvetica, sans-serif'<br />'Arial Black, Gadget, sans-serif'<br />'Comic Sans MS, cursive, sans-serif'<br />'Impact, Charcoal, sans-serif'<br />'Lucida Sans Unicode, Lucida Grande, sans-serif'<br />'Tahoma, Geneva, sans-serif'<br />'Trebuchet MS, Helvetica, sans-serif'<br />'Verdana, Geneva, sans-serif'<br />'Courier New, Courier, monospace'<br />'Lucida Console, Monaco, monospace'<br /> | datepicker
| canvasDatepickerFontColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | datepicker
| canvasDatepickerIconSelectorsColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | datepicker
| canvasValuelistFontFamily | Groups of values:<br />'Roboto, sans-serif'<br />'Georgia, serif'<br />'Palatino Linotype, Book Antiqua, Palatino, serif'<br />'Times New Roman, Times, serif'<br />'Arial, Helvetica, sans-serif'<br />'Arial Black, Gadget, sans-serif'<br />'Comic Sans MS, cursive, sans-serif'<br />'Impact, Charcoal, sans-serif'<br />'Lucida Sans Unicode, Lucida Grande, sans-serif'<br />'Tahoma, Geneva, sans-serif'<br />'Trebuchet MS, Helvetica, sans-serif'<br />'Verdana, Geneva, sans-serif'<br />'Courier New, Courier, monospace'<br />'Lucida Console, Monaco, monospace' | valuelist
| canvasValuelistFontColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | valuelist
| canvasValuelistIconSelectorsColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | valuelist
| canvasTextFontFamily | Groups of values:<br />, sans-serif'<br />'Georgia, serif'<br />'Palatino Linotype, Book Antiqua, Palatino, serif'<br />'Times New Roman, Times, serif'<br />'Arial, Helvetica, sans-serif'<br />'Arial Black, Gadget, sans-serif'<br />'Comic Sans MS, cursive, sans-serif'<br />'Impact, Charcoal, sans-serif'<br />'Lucida Sans Unicode, Lucida Grande, sans-serif'<br />'Tahoma, Geneva, sans-serif'<br />'Trebuchet MS, Helvetica, sans-serif'<br />'Verdana, Geneva, sans-serif'<br />'Courier New, Courier, monospace'<br />'Lucida Console, Monaco, monospace' | textbox
| canvasTextFontWeight | All CSS supported values (names of numbers)
'bold', 'bolder', 200, 400 | textbox
| canvasTextFontSize | All CSS supported values <br />'10px', '10em', '10rem', '10%', 'large', 'small' | textbox
| canvasTextFontColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | textbox
| canvasTextBackgroundColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | textbox
| canvasTextAlign | right, 'center', 'left' | textbox
| canvasImageAspect | ‘cover’, ‘contain’, ‘fill’ | image
| navigationBackgroundColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | navigation bar
| navigationElementsColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | navigation bar
| tabsBackgroundColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | tabs bar
| tabsFontColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | tabs bar
| tabsBorderColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | tabs bar
| tabSize | All CSS supported values'10px', '10em', '10rem', '10%' | tabs bar
| selectedTabBarColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | tabs bar
| canvasBackgroundColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | page
| pageViewButtonBackgroundColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | floating button (bottom right)
| pageViewButtonIconColor | All CSS supported values (color names or Hex), '#000000', 'green', 'GREEN' | floating button (bottom right)



## Events
The widget supports custom events to update keys of the configuration, you can dispatch an event using your own user interface to modify the behavior.

* **atApplyUserFilters**: Enables changes to the “builderFilters” property - the expected value for this property is a reduced version of the filter object. This property is a collection of objects that includes:
  * Operator: defines which operation will be performed with the expressions.
  * Expressions: a collection of objects that contains the questions/column reference, the type of operation applied to the questions, and the values that will be used for filtering.


## Sample
The following sample shows the way this widget is used in an HTML page. Please note, that the example may not include the non-required properties of the configuration object. 

You can copy and paste this code to your application, after replacing the red values with your own valid values, in order to see the embedded widget in action.

```html
<qrvey-end-user settings="config"></qrvey-end-user>

<script>
var config = {
    "api_key": "<API_KEY>", // your API key
    "app_id": "<APP_ID>", // your app_id
    "domain": "https://your_qrvey_domain", // your domain
    "group_list": ["Admin", "oJn4Cr_yV", ...], //your group list, if any (this is optional)
    "page_id": "<PAGE_ID>", // the id of the page that you want in the view. All pages in navigation will be included, if this is omitted.
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
 	} // your filters, if any, can be added like this.
}
</script>


<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://<WIDGETS_URL>/widgets-launcher/app.js"></script>
```


</div>