---
id: widget-web-form-end-user
title: Web Form - End User
sidebar_label: Web Form - End User
tags: [Software Developer]
sidebar_position: 8
displayed_sidebar: software-developer
---

When embedded in an application, the Web Form - End User widget enables end users to enter data in a designed Web Form. 

## Before You Begin
* Review the [Widget Quick Start Guide](../widget-quick-start-guide.md) for an overview of the widget components. 
* Obtain your unique API key. It was provided in the welcome email that you received when your Qrvey instance was created. For more information, see [Frequently Asked Questions (FAQs)](../../../getting-started/faqs.md).

## Embed the HTML Tag
Identify where you would like this widget to display in your application, and then add the HTML tag in that location. 

The HTML tag for this widget is:

`<qrvey-webform-enduser config="configWebForm"></qrvey-webform-enduser>`

## Embed the Widget Launcher Script Tag
Add the widget launcher script tag to your application. 

For reference, the launcher script code is:

```
<script type="module" src="https://<WIDGETS_URL>/qrvey-webform-enduser/qrvey-webform-enduser/qrvey-webform-enduser.esm.js"></script>
<qrvey-design-widgets settings="configWebForm"></qrvey-design-widgets><script>
```

## Set properties in the JSON configuration object
Define the JSON configuration object by starting with the script provided in the helper code, and then adding additional configuration properties as needed. The script provided contains only the required properties. For reference, an example is copied below. The helper code that you obtained above should include the unique values indicated with brackets (“&lt;&gt;”):

```json
var config = {
   webformid: "<WEB_FORM_ID>", 
   server: "https://<your_qrvey_domain>", 
   defaultAnswers: [{id:"<QUESTION_ID>",data:"<DATA_STRING>"}]
}
```

When complete, add the JSON configuration object to your application. 

## Configuration Object Properties
The following table lists the properties associated with this widget. 

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **webformid** | `String`, WebformID containing the webform. | Yes |
| **server** | `String`, The base URL of your instance of the Qrvey platform. | Yes |
| **style** | `String`, External CSS Stylesheet URL. | No  |
| **defaultAnswers** | `Object Array`, Option to fill an answer (just for work textFields) with default values.  Multiple fields can be added, it only needs questionID and the data(string) to be inserted. Example: [{id:"UMLFTXTT",data:"Default value"}] | No | 

## Sample
The following sample demonstrates how this widget can be used in an HTML page. 

To use this code in your application, replace the values in brackets (“&lt;&gt;”) with your own values. 

**HTML Tag:**

`<qrvey-webform-enduser config="config"></qrvey-webform-enduser>`

**Widget Launcher Script:**

```
<script type="module" src="https://<WIDGETS_URL>/qrvey-webform-enduser/qrvey-webform-enduser/qrvey-webform-enduser.esm.js"></script>
```

**JSON Configuration Object:**

```json
var config = {
   style: "", //CSS Stylesheet URL
   webformid: "<WEB_FORM_ID>", //QrveyLookUpID
   server: "https://<your_qrvey_domain>", 
   defaultAnswers: [{id:"7VS7I1C_",data:"ID-123456"}] 
 }
```

### Sample in CodePen
See the widget in CodePen:

<iframe
  allowFullScreen
  className="cp_embed_iframe "
  frameBorder={0}
  height={838}
  width="100%"
  name="cp_embed_1"
  scrolling="no"
  src="https://codepen.io/qrveysamples/embed/dd309a42f2c856e6eb73c8f047153ca3?height=838&theme-id=light&default-tab=result&user=qrveysamples&slug-hash=dd309a42f2c856e6eb73c8f047153ca3&pen-title=Sample-%20Qrvey%20Data%20Connections&name=cp_embed_1"
  style={{ width: "100%", overflow: "hidden", display: "block" }}
  title="Sample- Qrvey Data Connections"
  loading="lazy"
  id="cp_embed_dd309a42f2c856e6eb73c8f047153ca3"
/>

     
