---
id: widget-download-manager
title: Download Manager Widget
sidebar_label: Download Manager Widget
tags: [Software Developer]
sidebar_position: 2
displayed_sidebar: software-developer
---

The Download Manager widget enables users to access and manage exported files in a central location. For more information about this feature, see [Download Manager](../../../composer/03-Managing%20Your%20User%20Profile/download-manager.md). 

Download Manager filters the files displayed based on user ID and client ID. To save the exports for a certain end user and then list them in your Download Manager instance, set the same values for the user ID and client ID properties in all the widgets from where you will run the exports. If you do not define a user ID and client ID for a widget, all exports performed using the widget will not be accessible from Download Manager.


## Configuration Object Properties
The following table lists the properties associated with this widget. 

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, Your organization’s unique API key required to access the Qrvey platform. It is not recommended for using with the Download Manager widget. Instead, use a JWT token for authentication and include the client ID of the tenant end user. | Yes, if the qv_token is not provided |
| **qv_token** | `String`, A secure token encrypted via JWT to authenticate and authorize embedded widgets. Establishes a secure connection between the host application and the Qrvey system. For more information, see [Embedding Widgets Using a Security Token](../embedding-widgets-security-token.md). | Yes, if the api_key is not provided |
| **domain** | `String`, The base URL of your instance of the Qrvey platform. | Yes | 
| **user_id** | `String`, ID of the Qrvey Composer user that owns the application that is being embedded. To save the exports for a certain end user and then list them in your Download Manager instance, set the same values for the user ID and client ID properties in all the widgets from where you will run the exports. | No  |
| **client_id** | `String`, The client ID, or unique identifier, of the tenant end user working with the Download Manager. It is not recommended to include the client ID in the configuration object. Instead, include the client ID in a JWT token.  | Yes, in the JWT token |
| **i18n** | `String`, Defines the language to be displayed in the static text of the widget as well as the dataset columns. For more information, see [Internationalization, Step by Step](../../09-Internationalization/internationalization-step-by-step.md). | No |
| **showModalButton** | `Boolean`, determines whether or not to show a modal button. If set to true, a modal button will be displayed. If set to false or not set, the modal button will not be displayed. |No|
| **widgetView** | `String`, determines how the component is displayed. The default setting is modal, in which the component is displayed as a popup window. If set to table, the component is displayed as a page. |No|



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



