---
id: activity-log
title: Activity Log
sidebar_label: Activity Log
---

<div style="text-align: justify">

The activity log widget is meant to register and show what happened in different parts of the application, initially just log events related to admin releases and the CRUD of the applications. It is a really simple component easy to embed with just a couple of parameters whit a minimalistic and clear design.

## Widget Overview
This widget allows your users to create, preview and modify a web form. Specifically you can provide a facility for your users to create new questions, sections and branches on a webform just with a few code lines in your web application. We will explore the differents type of webforms and the way to embed it.

## Samples
The following samples correspond to show how to see the activity on releases or applications, to differentiate we gonna use the context property, being "APP" the context for applications and "ADMIN" for releases.

### Activity Log Sample Applications
In this example, we have the design widget configuration object for a Survey. This shows the minimum configuration object required to embed the Survey design widget. Note, APPID must refer to a valid and active application defined on your Qrvey instance, and QRVEYID must refer to a draft Survey in that application.

```
<log-widget server="https://your_qrvey_domain" context="APP" referenceid="<YOUR_USERID>"></log-widget>

<!-- your launcher js link (replace with your js link) -->
<script src="https://your_qrvey_domain/qrvey-log-widget-dev/activity-log-widget.js"></script>
```

### Activity Log Sample Release
In this example, we have the design widget configuration object for a Survey. This shows the minimum configuration object required to embed the Survey design widget. Note, APPID must refer to a valid and active application defined on your Qrvey instance, and QRVEYID must refer to a draft Survey in that application.

```
<log-widget server="https://your_qrvey_domain" context="ADMIN" referenceid="<YOUR_RELEASEID>"></log-widget>

<!-- your launcher js link (replace with your js link) -->
<script src="https://your_qrvey_domain/qrvey-log-widget-dev/activity-log-widget.js"></script>
```