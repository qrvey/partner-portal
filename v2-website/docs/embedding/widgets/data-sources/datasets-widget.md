---
id: datasets-widget
title: Datasets Widget
sidebar_label: Datasets Widget
---
<div style={{textAlign: "justify"}}>

The Dataset widget is a powerful and effective tool to allow you embed the dataset creation widget in your own web application. This widget allows your users to create and edit Datasets generated from different connection types, and index views.

## HTML Tag And Launcher
The HTML tag for this widget is: 
`<qrvey-data-sets settings=...>`

You can use the following script to launch this widget:
`<widgets-launcher/app.js>`

## Configuration Object
The table below provides general information about each property of this widget’s configuration object along with a description of the expected value. The **Required** column indicates whether the property is required for the configuration object to work properly. 



| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, Optional API Key: you can set up the widget without an api key if it's set in a qrvey session cookie. | Yes |
| **app_id** | `String`, Qrvey App ID| Yes |
| **user_id** | `String`, Optional User ID:  you can set up the widget without a user id if it's set in a qrvey session cookie.| Yes  |
| **domain** | `String`, Qrvey Core URL | Yes | 
| **dataset_id** | `String`, For displaying a specific dataset | No |

> **Note**: Refer to the<a href="/docs/faqs/faqs-intro/"> FAQs</a> if you don’t know where to find any of the required configuration properties. 

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

<iframe
  allowFullScreen
  className="cp_embed_iframe "
  frameBorder={0}
  height={838}
  width="100%"
  name="cp_embed_1"
  scrolling="no"
  src="https://codepen.io/qrveysamples/embed/e2af64022d03276dea717530cbd2aafd?height=838&theme-id=light&default-tab=result&user=qrveysamples&slug-hash=e2af64022d03276dea717530cbd2aafd&pen-title=Sample-%20Qrvey%20Datasets&name=cp_embed_1"
  style={{ width: "100%", overflow: "hidden", display: "block" }}
  title="Sample- Qrvey Datasets"
  loading="lazy"
  id="cp_embed_e2af64022d03276dea717530cbd2aafd"
/>





</div>

