---
id: time-zone-support
title: Time Zone Settings
sidebar_label: Time Zone Settings
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
sidebar_position: 7
displayed_sidebar: getting-started
---


The Qrvey platform enables end users to display dates and times in their local time zone. The Qrvey platform stores data in UTC/GMT+0 and adjusts the time displayed to the end user based on their preferred settings. The default time zone setting is specified in Qrvey Admin Center, but it can be overridden programmatically. The possible settings are:
* **System Default Settings**. Use the time zone in which the data was stored in the Elasticsearch repository, which is UTC/GMT+0.
* **User Browser Settings**. Use the time zone specified in the end user’s browser.
* **Fixed Time Zone**. Use the time zone specified. 

The time zone setting affects how data is filtered and displayed throughout the Qrvey platform, as well as in the embedded widgets. 

>**Note**: The time zone settings do not change how the data is stored in the repository. The settings only affect how data is filtered and displayed to the user. 

This time zone setting in Qrvey Admin Center is overridden in the following cases:
* Specifying the time zone programmatically through APIs.
* Specifying the time zone In a widget’s configuration object.
* Specifying the time zone as a fixed setting for a dataset. 

## Configure Time Zones

<iframe src="//fast.wistia.net/embed/iframe/yegu0zm9mn?videoFoam=true"
allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_embed"
name="wistia_embed" allowFullScreen  width="100%" height="600"></iframe>
<script src="//fast.wistia.net/assets/external/iframe-api-v1.js"></script>

### Set Default Time Zone
1. In Qrvey Admin Center, click the **Customization** icon in the left-hand navigation pane and display the General Settings tab. 
2. Click the **Time Zone** tab. 
3. Under **Set Time Zone**, select one of the following options:
    * **System Default Settings (UTC +00:00)**. Use the time zone in which the data was stored in the Elasticsearch repository, which is UTC/GMT+0.
    * **User Browser Settings**. Use the time zone specified in the end user’s browser.
    * **Fixed Time Zone**. Use the time zone specified in the dropdown menu below this setting. 
4. Click **Apply Changes**. 

### Configure a Widget's Time Zone

You can configure the time zone in the JSON configuration object for the following widgets:
* Dashboard View
* Dashboard Builder
* Automation
* Pixel-perfect Reports
* Analyze

Add the following property to the JSON configuration object:

| **Property** | **Description** | **Required** |
| --- | --- | --- |
| **offset** | Time zone offset used to display dates. Overrides the time zone setting in Admin Center. Possible values are: `default` to show dates in UTC-0, `browser` to use the setting in the user’s browser, or specify a fixed offset such as `+05:00` or `-03:00` | Yes |

## Set Time Zone via API

The Qrvey platform provides the following APIs to get and update the time zone settings. Click the links to view the API documentation:
* [Get Time Zone Settings](https://qrvey.stoplight.io/docs/qrvey-api-doc/4045b9423953e-get-time-zone-settings) 
* [Update Time Zone Settings](https://qrvey.stoplight.io/docs/qrvey-api-doc/99518be9162fb-update-time-zone-settings)

