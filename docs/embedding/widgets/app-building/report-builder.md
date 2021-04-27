---
id: widget-report-builder
title: Report Builder
sidebar_label: Report Builder
---

<div style="text-align: justify">

The Report Builder widget allows users to create, edit, and delete report definitions for an application.


## HTML Tag And Launcher
The HTML tag for this widget is:```
<qrvey-builders settings=...>```

You can use the following script to launch this widget:```
<widgets-launcher/app.js>```


## Configuration Object
The table below provides general information about each property of this widget’s configuration object, along with a description of the expected value. The Required column indicates whether the property is required for the configuration object to work properly.


| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, Application ID | Yes |
| **app_id** | `String`, Qrvey App ID| Yes |
| **user_id** | `String`, Optional User ID: you can set up the widget without a user id if it's set in a qrvey session cookie. | Yes |
| **domain** | `String`, Qrvey Core URL | Yes |
| **reports_dashboard** | `Boolean`, Shows the report builder (has to be set to true for reports. Otherwise Page Builder will be exposed). | Yes |
| **do_not_allow** | `Array<String>`, Collection of strings to define permissions (will hide or block some features)<br> <br>* CREATE_CHART: Hide Create Chart button. | No |
| userFilters | Array<Object>, collection of custom filters that the system will apply to the visualized data. Please see <a href="/docs/embedding/widgets/filters-embedded-scenarios/"> Working With Filters in Embedded Scenarios </a> for more details on how to create a filter object. | No



> **Note**: Refer to the<a href="docs/faqs/faqs-intro/"> FAQs</a> if you don’t know where to find any of the required configuration properties. 

## Events
The widget supports custom events to update keys of the configuration, you can dispatch an event using your own user interface to modify the behavior.
* **atApplyUserFilters**: Enables changes to the “builderFilters” property - the expected value for this property is a reduced version of the filter object. This property is a collection of objects that includes:
  * Operator: defines which operation will be performed with the expressions.
  * Expressions: a collection of objects that contains the questions/column reference, the type of operation applied to the questions, and the values that will be used for filtering.


## Sample
The following sample shows the way this widget is used in an HTML page. Please note, that the example may not include the non-required properties of the configuration object. 

You can copy and paste this code to your application after replacing the red values with your own valid values in order to see the embedded widget in action.
```
<qrvey-builders settings="config"></qrvey-builders>
```
```
<script>
var config = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "user_id": "<USER_ID>",
    "do_not_allow": ['CREATE_CHART'],
    "domain": "https://your_qrvey_domain",
    "reports_dashboard": true
,
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
 	}
}
</script>

```
```
<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://<WIDGETS_URL>/widgets-launcher/app.js"></script>
```
## See It In Action
See the widget in CodePen:

<p class="codepen" data-height="300" data-theme-id="34531" data-default-tab="js,result" data-user="qrveysamples" data-slug-hash="deb614642b633fcaab2f72fd85b8a19e" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Sample- Qrvey Report Builder">
  <span>See the Pen <a href="https://codepen.io/qrveysamples/pen/52bb4236753fe85a433228dd11d437e2">
  Sample- Qrvey Report Builder</a> by Qrvey (<a href="https://codepen.io/qrveysamples">@qrveysamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>





