---
id: widget-page-view
title: Page View
sidebar_label: Page View
---

<div style="text-align: justify">


The Page View widget (previously known as “End User widget”) allows users to access one or more pages of an application created from the Page Builder Widget. Pages may contain embedded reports and webforms, as well as other static content.

## HTML Tag And Launcher

The HTML tag for this widget is: 
<br>
```<qrvey-end-user settings=...>```

You can use the following script to launch this widget: 
<br>
```<widgets-launcher/app.js>```

## Configuration Object

The table below provides general information about each property of this widget’s configuration object, along with a description of the expected value. The Required column indicates whether the property is required for the configuration object to work properly.


| **Property** | **Value** |  **Required** |
| --- | --- | --- |
| api_key| `String`, Application ID. | Yes
| app_id | `String`, Qrvey App ID | Yes
| domain | `String`, Qrvey Core URL| Yes
| group_list | `Array<String>`, collection of IDs/names of the groups created in User Management | No
| page_id | `String`, ID of one page to visualize it: all auth process is still required if the config. exists.|No
| userFilters | Array<Object>, collection of custom filters that the system will apply to the visualized data. Please see <a href="/docs/embedding/widgets/filters-embedded-scenarios/">Working With Filters in Embedded Scenarios </a> for more details on how to create a filter object. | No



> **Note**: Refer to the <a href="/docs/faqs/faqs-intro/"> FAQs</a> if you don’t know where to find any of the required configuration properties. 

## Events
The widget supports custom events to update keys of the configuration, you can dispatch an event using your own user interface to modify the behavior.

* **atApplyUserFilters**: Enables changes to the “builderFilters” property - the expected value for this property is a reduced version of the filter object. This property is a collection of objects that includes:
  * Operator: defines which operation will be performed with the expressions.
  * Expressions: a collection of objects that contains the questions/column reference, the type of operation applied to the questions, and the values that will be used for filtering.


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


<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://<WIDGETS_URL>/widgets-launcher/app.js"></script>
```

## See It In Action
See the widget in CodePen:

<p class="codepen" data-height="300" data-theme-id="34531" data-default-tab="js,result" data-user="qrveysamples" data-slug-hash="MWbNapv" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="DOC - Page View (Jan2021)">
  <span>See the Pen <a href="https://codepen.io/qrveysamples/pen/MWbNapv">
  DOC - Page View (Jan2021)</a> by Qrvey (<a href="https://codepen.io/qrveysamples">@qrveysamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>



