---
id: widget-webforms
title: Web Form Design Widget
sidebar_label: Web Form Design Widget
---

<div style={{textAlign: "justify"}}>

The Web Form Design widget is a powerful and effective tool that allows you to embed the Web Form design in your own web application. We provide three different types of Web Forms, Survey, Form and Quiz. 
This widget allows your users to create, preview and modify a Web Form. Users can create new questions, sections and branches in a Web Form with just a few code lines in your web application. 



## HTML Tag And Launcher
The HTML tag for this widget is: 
```<qrvey-design-widgets settings=...>```


You can use the following script to launch this widget:
```<widgets-launcher/app.js>```


## Configuration Object
The table below provides general information about each property of this widget’s configuration object along with a description of the expected value. The **Required** column indicates whether the property is required for the configuration object to work properly.



| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** |`String`, secret identification token to access the application.| Yes |
| **app_id** | `String`, Qrvey application ID containing the webform. | Yes |
| **domain** | `String`, domain URL in which the application is in. | Yes |
| **qrvey_id** | `String`, webform ID that will be edited in the widget.  | Yes |
| **user_id** | `String`, user ID that edits the webform.| Yes |
| **app_type** | `String`, a type of webform the widget will instance. Options: "FORM" / "QUIZ" / "SURVEY". | Yes |
| **Style_option** |Object {<br />"main_color": String (HEX Color),<br />"secondary_color": String (HEX Color),<br />"tab_bar": String (HEX Color),<br /> "field_icon": String (HEX Color),<br />"error": String (HEX Color),<br />"notification": String (HEX Color),<br />"successful": String (HEX Color), <br />"warning": String (HEX Color)<br /> } <br /><br />to change widget colors| No |

> **Note**: Refer to the<a href="/docs/faqs/faqs-intro/"> FAQs</a>
if you don’t know where to find any of the required configuration properties. 

## Sample
In this example, we have the design widget configuration object for a Form. This shows the minimum configuration object required to embed the webform design widget. 

> **Note**: <APP_ID> must refer to a valid and active application defined on your Qrvey instance, and <QRVEY_ID> must refer to a draft form in that application.

```
<qrvey-design-widgets settings="configWebForm"></qrvey-design-widgets><script>
var configWebForm = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "user_id": "<USER_ID>",
    "qrvey_id": "<QRVEY_ID>",
    "app_type": "FORM"
}
</script>
<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://<WIDGETS_URL>/widgets-launcher/app.js"></script>
 ```

As we mentioned earlier, this widget allows us to collect three types of webforms: Survey, Form and Quiz. The ```app_type``` property allows you to switch between those types. Valid options are: ```"FORM" || "SURVEY" || "QUIZ"```


## See It In Action
See the widget in CodePen:

<iframe>
  allowFullScreen
  className="cp_embed_iframe "
  frameBorder={0}
  height={838}
  width="100%"
  name="cp_embed_1"
  scrolling="no"
  src="https://codepen.io/qrveysamples/embed/17ca2ace17e54cd26353f638666f91be?height=838&theme-id=light&default-tab=result&user=qrveysamples&slug-hash=17ca2ace17e54cd26353f638666f91be&pen-title=Sample-%20Webform%20Design&name=cp_embed_1"
  style={{ width: "100%", overflow: "hidden", display: "block" }}
  title="Sample- Webform Design"
  loading="lazy"
  id="cp_embed_17ca2ace17e54cd26353f638666f91be"
  </iframe>
</div>


## Sample With Security Token
Web Form Design widget supports the use of JWT tokens for authentication and it is strongly recommended that this method be used to ensure the security of your widget implementation. Please refer to the <a href="/docs/embedding/widgets/embedding-widgets-security-token">Embedding Widgets Using A Security Token </a> article for an explanation of the principles. 

You can find the secure implementation of the same example as above <a href="https://codepen.io/qrveysamples/pen/8ae9eb19a3464b64d293d44e102ccd4b">here</a>.






