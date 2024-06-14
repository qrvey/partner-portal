---
id: widget-automation-widget
title: Automation Widget
sidebar_label: Automation Widget
tags: [Software Developer]
sidebar_position: 9
displayed_sidebar: software-developer
---

<div style={{textAlign: "justify"}}>

The Automation widget enables you to embed the Automation functionality into your application. 

### Configuration Object Properties
The following table lists the properties associated with this widget. 

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, Your organization’s unique API key required to access the Qrvey platform. | Yes |
| **domain** | `String`, The base URL of your instance of the Qrvey platform. | Yes | 
| **user_id** | `String`, ID of the Qrvey Composer user account accessing this feature. Optional: You can alternately specify the user ID in a Qrvey session cookie. | Yes  |
| **app_id** | `String`, ID of the Qrvey application containing the webform.| Yes |
| **workflow_id** | `String`, ID of a single flow to display | No |
| **timezone** | `Object <TimezoneConfiguration>`, overrides the time zone setting in Qrvey Admin Center. | No | 
| **qv_token** | `String`, Codified string that can be embedded in the widget to pass private properties, such as the api_key, via token | No |

#### Time Zone Configuration
The Qrvey platform enables end users to display dates and times in their local time zone. The Qrvey platform stores data in UTC/GMT+0 and adjusts the time displayed to the end user based on their preferred settings. You can specify the time zone offset in the configuration object properties. For more information, see [Time Zone Support](../../10-Timezone%20Settings/timezone-support.md). 

## Code Samples
The following samples demonstrate how this widget can be used in an HTML page.

| **Implementation** | **Description** | **Front-end Code** | **Back-end Code** |
| --- | --- | --- | --- |
| Basic API Key | This sample uses a basic API key to embed a full Automation widget. It does not encrypt the API key and is not suitable for production environments.| [codepen](https://codepen.io/qrveysamples/pen/yLOopqq/4f4030cdea91163a3b9583234335e360) | n/a |
| Basic API Key - Single Workflow | This sample uses a basic API key to embed a single-flow Automation widget. It does not encrypt the API key and is not suitable for production environments.| [codepen](https://codepen.io/qrveysamples/pen/poQMMea/b95fa2580bb7d30ad11ff69d34838499) | n/a |

</div>