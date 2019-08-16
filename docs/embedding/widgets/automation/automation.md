---
id: widget-automation
title: Automation
sidebar_label: Automation
---

<div style="text-align: justify">

The Automation widget allows users to create, edit and delete workflow definitions.

## Automation Widget

How to use it?

1. Put the script tag of the given launcher url in your website. For example:

```
<script type="text/javascript" src="https://your_qrvey_domain_widget_launcher/app.js"></script>
```

2. Put the **qrvey-workflows** tag in the container you want to embed the widget, and set the **settings** attribute of the tag with a valid JSON object to launch the widget. For example:

```
<qrvey-workflow-design settings="settings"></qrvey-workflow-design>
```

The schema of the settings value has the following properties defined below (required items are bold):

```
{
    "appid": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "userid": "<USER_ID>",
    "apikey": "<API_KEY>" 		
}
```

## Properties and Values for Each Object:

Each object is defined by common properties. The table below provides general information about each property and value. The Required column indicates whether the property is required for the configuration object.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **appid** | String. Application id | Yes |
| **domain** | String, Data server url | Yes |
| **userid** | String. User id | Yes |
| apikey | String, Optional, you can set up the widget without an api key if it&#39;s set in a Qrvey session cookie. | No |