---
id: widget-datalinks
title: Data Links
sidebar_label: Data Links
original_id: widget-datalinks
---
<div style={{textAlign: "justify"}}>

## Widget Overview

The datalinks widget is a tool used to manage all the links between your data for an application. The user can embed this widget in his web application. Once the process is complete, you can create, edit or delete different data links. These links are then used to create different charts or for analysis. 

## Samples

To embed and use this widget, declare an object with the configuration details and refer to this in the qrvey-datalinks element. The configuration object is described in the following table.

| **Property** | **Value**                                                                                                              | **Required** |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------ |
| **domain**   | `String`, Qrvey Core URL.                                                                                       | Yes          |
| api_key      | `String`, Optional API Key, you can set up the widget without an api key if it's set in a qrvey session cookie. | No           |
| user_id      | `String`, Optional User id, you can set up the widget without a user id if it's set in a qrvey session cookie.  | No           |
| **app_id**   | `String`, Id of Qrvey App.                                                                                      | Yes          |

### Code Sample

```

<script>
var configWebForm = {
    "domain": "https://your_qrvey_domain",
    "api_key": "<API_KEY>",
    "user_id": "<USER_ID>",
    "app_id": "<APP_ID>"
}
</script>

<qrvey-datalinks settings='configWebForm'></qrvey-datalinks>

<!-- your launcher js link (replace with your js link) 
<script type="text/javascript" src="https://your_qrvey_domain_widget_launcher/app.js" />--&gt;

```
</div>