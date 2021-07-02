---
id: web-form-end-user
title: Web Form - End User
sidebar_label: Web Form - End User
---
The Web Form End User widget is a powerful and effective tool that allows you to embed existing Web Forms in your own web application. This means that users will be able to enter data through the designed Web Form without leaving your product.

## HTML Tag And Launcher

The HTML tag for this widget is: <br />
`<qrvey-webform-enduser config=...>`

This widget needs an extra script for proper support in all browsers:

`<script type="module"   src=”https://<WIDGETS_URL>/qrvey-webform-enduser/qrvey-webform-enduser/qrvey-webform-enduser.esm.js”></script>` (For all browsers support)

## Configuration Object

The table below provides general information about each property of this widget’s configuration object along with a description of the expected value. The Required column indicates whether the property is required for the configuration object to work properly.

| **Property**       | **Value**                                                                                                                                                                                                                                    | **Required** |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **webformid**      | `String`, WebformID containing the webform                                                                                                                                                                                            | Yes          |
| **server**         | `String`, Domain URL in which the application is in                                                                                                                                                                                   | Yes          |
| **style**          | `String`, External CSS Stylesheet URL                                                                                                                                                                                                 | No           |
| **defaultAnswers** | `Object Array`, Option to fill an answer (just for work textFields) with default values.  Multiple fields can be added, it only needs questionID and the data(string) to be inserted. Example: [{"{"}id:"UMLFTXTT",data:"Default value"{"}"}] | No           |

&gt; **Note**: Refer to the <a href="/docs/faqs/faqs-intro/">FAQs</a> if you don’t know where to find any of the required configuration properties. 

## Sample

In this example, we have the configuration object to display the Web Form. This shows the minimum configuration object required to embed the Web Form End User widget. 

**Note**: `webformid` must refer to a valid and active webform defined on your Qrvey instance.

```

var configWebForm = {
style: "", //CSS Stylesheet URL
   webformid: "zuioM6maV", // This is an example. Replace with your web form id. 
   server: "https://your_qrvey_domain", 
   defaultAnswers: [{id:"UMLFTXTT",data:"Default value"}] // Option to fill a textField with default values.  Multiple fields can be added, it only needs questionID and the data(string) to be inserted. Replace the example id with yours.
 }

```

```

<qrvey-webform-enduser config="configWebForm"></qrvey-webform-enduser>
<script type="module" src="https://<WIDGETS_URL>/qrvey-webform-enduser/qrvey-webform-enduser/qrvey-webform-enduser.esm.js"></script>
<qrvey-design-widgets settings="configWebForm"></qrvey-design-widgets><script>

```

### See It In Action

See the widget in CodePen:

## See It In Action

See the widget in CodePen:

```

  <p class="codepen" data-height="838" data-theme-id="light" data-default-tab="result" data-user="qrveysamples" data-slug-hash="dd309a42f2c856e6eb73c8f047153ca3" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Sample- Qrvey Data Connections">
    <span>See the Pen <a href="https://codepen.io/qrveysamples/pen/dd309a42f2c856e6eb73c8f047153ca3">
    Sample- Qrvey Data Connections</a> by Qrvey (<a href="https://codepen.io/qrveysamples">@qrveysamples</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
  </p>
  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```
