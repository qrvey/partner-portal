---
id: version-5.3-datasets-widget
title: Datasets Widget
sidebar_label: Datasets Widget
original_id: datasets-widget
---
<div style="text-align: justify">

The Dataset widget is a powerful and effective tool to allow you embed the dataset creation widget in your own web application. This widget allows your users to create and edit Datasets generated from different connection types, and index views.

## HTML Tag And Launcher
The HTML tag for this widget is: 
`<qrvey-data-sets settings=...>`

You can use the following script to launch this widget:
`<widgets-launcher/app.js>`

## Configuration Object
The table below provides general information about each property of this widget’s configuration object along with a description of the expected value. The **Required** column indicates whether the property is required for the configuration object to work properly. 

To open the chart builder modal and create a new chart, you need to emit a custom event named ON_OPEN_CHART_BUILDER and pass into the detail object these configuration parameters:



| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, Optional API Key: you can set up the widget without an api key if it's set in a qrvey session cookie. | Yes |
| **app_id** | `String`, Qrvey App ID| Yes |
| **user_id** | `String`, Optional User ID:  you can set up the widget without a user id if it's set in a qrvey session cookie.| Yes  |
| **domain** | `String`, Qrvey Core URL | Yes | 
| **dataset_id** | `String`, For displaying a specific dataset | No |

> **Note**: Refer to the<a href="docs/faqs/faqs-intro/"> FAQs</a> if you don’t know where to find any of the required configuration properties. 

## Sample
The following sample shows the way this widget is used in an HTML page. Please note, that the example may not include the non-required properties of the configuration object. 

You can copy and paste this code to your application, after replacing the red values with your own valid values, in order to see the embedded widget in action.

[sample code:

```
<qrvey-data-sets settings="datasets_settings"></qrvey-data-sets>
```
```
<script>
var datasets_settings = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "user_id": "<USER_ID>",
}
</script>
```
```
<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://<WIDGETS_URL>/widgets-launcher/app.js"></script>
```
]

## See It In Action
See the widget in CodePen:
      <p class="codepen" data-height="838" data-theme-id="light" data-default-tab="result" data-user="qrveysamples" data-slug-hash="qBZrwGj"  style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Sample- Qrvey Datasets">
        <span>See the Pen <a href="https://codepen.io/qrveysamples/pen/qBZrwGj">
        Sample- Qrvey Datasets</a> by Qrvey (<a href="https://codepen.io/qrveysamples">@qrveysamples</a>)
        on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <script async src="https://static.codepen.io/assets/embed/ei.js"></script>






