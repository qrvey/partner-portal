---
id: widget-report-builder
title: Report Builder
sidebar_label: Report Builder
---

The Report Builder widget allows users to manage report definitions.

## Widget Overview
The Report Builder widget allows users to created, edit, publish and delete report definitions for an application.

## How to use it?

1. Put the script tag of the given launcher url in your website. For example:

```
<script type=”text/javascript”  src=”https://s3.amazonaws.com/cdn.qrvey.com/widgets-launcher-dev/app.js”></script>
```

2. Put the **qrvey-report-builder** tag in the container you want to embed the widget, and set the **settings** attribute of the tag with a valid JSON object to launch the widget. For example:

```
<qrvey-report-builder settings=”settings”></qrvey-report-builder>
```

The schema of the settings value has the following properties defined below (required items are bold):

```
{
    "appid": "pXE019Q",
    "domain": "https://qdev.qrvey.com",
    "userid": "TAuPSqH",
    "apiKey": "Tñdmnhscm434nsakjneLeaLaDDL-3SAaadmjw3Cut0-QRVEY-FRONTEND"
}
```

Properties and Values for Each Object:

Each object is defined by common properties. The table below provides general information about each property and value. The Required column indicates whether the property is required for the question object.



| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **appid** | String, Application id. | Yes |
| **domain** | String, Data server url. | Yes |
| userid | String, Optional User id, you can set up the widget without a user id if it&#39;s set in a qrvey session cookie. | No |
| apikey | String, Optional API Key, you can set up the widget without an api key if it&#39;s set in a qrvey session cookie. | No |