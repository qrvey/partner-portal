---
id: widget-download-manager
title: Download Manager Widget
sidebar_label: Download Manager Widget
tags: [Software Developer]
sidebar_position: 2
displayed_sidebar: getting-started
---

The Download Manager widget enables users to access and manage exported files in a central location. For more information about this feature, see [Download Manager](../../../composer/03-Managing%20Your%20User%20Profile/download-manager.md). 

Download Manager filters the files displayed based on user ID and client ID. To save the exports for a certain end user and then list them in your Download Manager instance, set the same values for the user ID and client ID properties in all the widgets from where you will run the exports. If you do not define a user ID and client ID or a widget, all exports performed using the widget will not be accessible from Download Manager.

## Before You Begin
* Review the [Widget Quick Start Guide](../widget-quick-start-guide.md) for an overview of the widget components. 
* Obtain your unique API key. It was provided in the welcome email that your organization received when your Qrvey instance was created. For more information, see [Frequently Asked Questions (FAQs)](../../../getting-started/faqs.md).
* This widget supports using security tokens for secure authentication. For more information, see [Embedding Widgets Using a Security Token](../embedding-widgets-security-token.md).

## Get the Helper Code
* In Qrvey Composer, display the Download Manager. 
* Click the Embedding Options button in the upper right corner of the page. A dialog displays with an HTML tag, a JSON configuration object, and the Widget Launcher script tag. 
* Click **Copy** to copy the code, and then paste it into your preferred editor. 

## Embed the HTML tag
Identify where you would like this widget to display in your application, and then add the HTML tag in that location. 

The HTML tag for this widget is:

`<qrvey-download-manager settings="downloadManagerConfig"></qrvey-download-manager>`

## Embed the Widget Launcher script tag
Add the widget launcher script tag to your application. 

For reference, the launcher script code is:

```
<!-- widget's launcher -->
<script type="text/javascript" src="https://<WIDGETS_URL>/qrvey-qomponents-library/qomponents-library/qomponents-library.js"></script>
<script type="module" src="https://<WIDGETS_URL>/qrvey-qomponents-library/qomponents-library/qomponents-library.esm.js"></script>
<script> window.downloadManagerConfig = downloadManagerConfig</script>
```

## Set properties in the JSON configuration object
Define the JSON configuration object by starting with the script provided in the helper code, and then adding additional configuration properties as needed. The script provided contains only the required properties. For reference, an example is copied below. The helper code that you obtained above should include the unique values indicated with brackets (“&lt;&gt;”), with the exception of the private API key:

```
<!-- widget's Config Object -->
<script>
    var downloadManagerConfig = {
        "api_key": "<YOUR_PRIVATE_API_KEY>",
        "domain": "https://<your_qrvey_domain>",
        "user_id": "<USER_ID>",
        "client_id": "<YOUR_CLIENT_ID>"
    };
</script>
```

When complete, add the JSON configuration object to your application. 

## Configuration Object Properties
The following table lists the properties associated with this widget. 

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, Your organization’s unique API token required to access the Qrvey platform. Never expose your organization’s API key to external users. In Production environments, use a secure token (qv_token) to encrypt the API key. | Yes, if the qv_token is not provided |
| **qv_token** | `String`, A secure token encrypted via JWT to authenticate and authorize embedded widgets. Establishes a secure connection between the host application and the Qrvey system. For more information, see [Embedding Widgets Using a Security Token](../embedding-widgets-security-token.md). | Yes, if the api_key is not provided |
| **domain** | `String`, The base URL of your instance of the Qrvey platform. | Yes | 
| **user_id** | `String`, ID of the Qrvey Composer user that owns the application that is being embedded. To save the exports for a certain end user and then list them in your Download Manager instance, set the same values for the user ID and client ID properties in all the widgets from where you will run the exports. | No  |
| **client_id** | `String`, The client ID, or unique identifier, of the user working with the Download Manager. To save the exports for a certain end user and then list them in your Download Manager instance, set the same values for the user ID and client ID properties in all the widgets from where you will run the exports.  | Yes |
| **i18n** | `String`, Defines the language to be displayed in the static text of the widget as well as the dataset columns. For more information, see [Internationalization, Step by Step](../../09-Internationalization/internationalization-step-by-step.md). | No |
| **showModalButton** | Boolean, determines whether or not to show a modal button. If set to true, a modal button will be displayed. If set to false or not set, the modal button will not be displayed. |No|

## Opening the Download Manager Modal

The Download Manager widget provides an exposed method that enables you to trigger the modal from any other element in your page. For example:

`<qrvey-download-manager settings="downloadManagerConfig"></qrvey-download-manager>`

You can access the method by using query selector. For example: 

```
function openmodal () {
const el = document.querySelector('qrvey-download-manager');
el.openDownloadManager();
}
```

You then can create a button and execute that function. For example: 

`<button onclick="openmodal()">Open Modal</button>`



