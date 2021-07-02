---
id: widget-page-view
title: Page View Widget
sidebar_label: Page View Widget
---
<div style={{textAlign: "justify"}}>

The Page View widget (previously known as “End User widget”) is used to add the published page, or collection of pages, in a product that embeds this widget. The widget is meant to be used by the end users, who don’t need page creation ability provided in the Page Builder widget. Pages may contain embedded reports and webforms, as well as other static content.

Like all widgets, this widget has an HTML tag, a launcher script, and a configuration object that needs to be added to the code of any page that embeds it and the necessary property values have to be provided for it to work properly. 

Depending on whether a single, specific published page needs to be embedded or all of the published pages, the code can be found in two different places:

-   In order to embed all of the published pages, you can find and copy the necessary piece of code by going to the Page Builder section of Qrvey Composer and clicking on the “Embedding Options” button in the top right corner of the page and selecting the “Embed Page View” option.

    ![page-view-widget](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/widgets/page-builder-wi.png#thumbnail-40)

This will open a dialog with the necessary code, including the “domain” and property values. You can copy the code from here and include it in your application. You have to provide the unique API key value.

-   To embed an individual page, you will also need the page_id value. For this use case you can navigate to the desired page and click on the three-dot menu of the page at the bottom of the screen and select the “Embed Page” option. The code will be very similar to the previous case but include the page_id property of the selected page.

    ![page-view-widget](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/widgets/page-view1.png#thumbnail-40)

The building blocks of the code are explained below.

## HTML Tag And Launcher

The HTML tag for this widget is: 
<br />
`<qrvey-end-user settings=".." />`

You can use the following script to launch this widget: 
<br />

`<widgets-launcher/app.js />`

## Configuration Object

The table below provides general information about each property of this widget’s configuration object, along with a description of the expected value. The Required column indicates whether the property is required for the configuration object to work properly.

| **Property** | **Value**                                                                                                                                                                                                                                                                  | **Required** |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| api_key      | `String`, secret identification token to access the application.                                                                                                                                                                                                    | Yes          |
| app_id       | `String`, ID of the Qrvey application containing the webform.                                                                                                                                                                                                       | Yes          |
| domain       | `String`, Qrvey Core URL.                                                                                                                                                                                                                                           | Yes          |
| group_list   | `Array<String>`, collection of IDs/names of the groups created in User Management.                                                                                                                                                                                  | No           |
| page_id      | `String`, ID of one page to visualize it: all auth process is still required if the config. exists.                                                                                                                                                                 | No           |
| userFilters  | Array`<object>`, collection of custom filters that the system will apply to the visualized data. Please see <a href="/docs/embedding/widgets/filters-embedded-scenarios/">Working With Filters in Embedded Scenarios </a> for more details on how to create a filter object. | No           |

&gt; **Note**: Refer to the <a href="/docs/faqs/faqs-intro/"> FAQs</a> if you don’t know where to find any of the required configuration properties. 

## Events

The widget supports custom events to update keys of the configuration, you can dispatch an event using your own user interface to modify the behavior.

-   **atApplyUserFilters**: Enables changes to the “builderFilters” property - the expected value for this property is a reduced version of the filter object. This property is a collection of objects that includes:
    -   Operator: defines which operation will be performed with the expressions.
    -   Expressions: a collection of objects that contains the questions/column reference, the type of operation applied to the questions, and the values that will be used for filtering.

## Sample

The following sample shows the way this widget is used in an HTML page. Please note, that the example may not include the non-required properties of the configuration object. 

You can copy and paste this code to your application, after replacing the red values with your own valid values, in order to see the embedded widget in action.

```

<qrvey-end-user settings="config"></qrvey-end-user>

<script>
var config = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "group_list": ["Admin", "oJn4Cr_yV", ...],
    "page_id": "<PAGE_ID>",
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
 	   	],
 	}
}
</script>


<!-- your launcher js link (replace with your js link) 
<script type="text/javascript" src="https://<WIDGETS_URL>/widgets-launcher/app.js" />--&gt;

```

## See It In Action

See the widget in CodePen:

<p className="codepen" data-height="838" data-theme-id="34531" data-default-tab="result" data-user="qrveysamples" data-slug-hash="MWbNapv" style={{height: "300px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid", margin: "1em 0", padding: "1em"}} data-pen-title="DOC - Page View (Jan2021)">
  <span>See the Pen <a href="https://codepen.io/qrveysamples/pen/MWbNapv">
  Sample- Qrvey End-user</a> by Qrvey (<a href="https://codepen.io/qrveysamples">@qrveysamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async={true} src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
</div>