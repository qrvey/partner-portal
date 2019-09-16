---
id: activity-log
title: Activity Log
sidebar_label: Activity Log
---

<div style="text-align: justify">

The activity log widget is meant to register and show what happened in different parts of the application, initially just log events related to admin releases and the CRUD of the applications. It is a really simple component easy to embed with just a couple of parameters whit a minimalistic and clear design.

## Widget Overview
This widget show to the user a detailed activity log information, each event on the application trigger an entry in the activity log if the event register was an error response the log also shows the complete error response that helps to comprehend what happened in the application.

## Samples
The following samples correspond to show how to see the activity on releases or applications, to differentiate we gonna use the context property, being "APP" the context for applications and "ADMIN" for releases.

### Activity Log Sample Applications
In the following example, we have the configuration to embed activity log and show the application's details, this widget requires 3 parameters to work properly, first the server (your qrvey domain) next the context, in this case, is "APP" and finally the referenceid, in this case, is the user id who have the applications linked to his account.

```
<log-widget server="https://your_qrvey_domain" context="APP" referenceid="<YOUR_USERID>"></log-widget>

<!-- your launcher js link (replace with your js link) -->
<script src="https://your_qrvey_domain/qrvey-log-widget-dev/activity-log-widget.js"></script>
```

### Activity Log Sample Release
In this example, we have the activity log for a release on adminapp, this is the required configuration to embed this widget, all the properties are required, the server corresponds to your qrvey domain, the context, in this case, is "ADMIN" and finally, the referenceid correspond to the release ID.

```
<log-widget server="https://your_qrvey_domain" context="ADMIN" referenceid="<YOUR_RELEASEID>"></log-widget>

<!-- your launcher js link (replace with your js link) -->
<script src="https://your_qrvey_domain/qrvey-log-widget-dev/activity-log-widget.js"></script>
```