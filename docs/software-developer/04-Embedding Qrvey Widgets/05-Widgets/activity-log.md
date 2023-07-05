---
id: widget-activity-log
title: Activity Log
sidebar_label: Activity Log
tags: [Software Developer]
sidebar_position: 10
displayed_sidebar: software-developer
---

<div style={{textAlign: "justify"}}>

The Activity Log widget is used to review what happened in different parts of the application. In the initial release this is limited to events related to platform releases and the CRUD (Create, Read, Update, and Delete) events of the applications. This is a really simple component easy to embed, with just a couple of parameters and has a minimalistic and clear design.

## Widget Overview
This widget shows the user a detailed activity log. Each event of the application triggers an entry in the activity log. If the event registered is an error response, the log also shows the complete error details. This is useful to analyse application faults.

## Samples
The following sample shows how to see the activity on releases or applications. The context property is set to "ADMIN" for release events and "APP" for application events.

### Activity Log Sample Applications
In the following example the configuration is set to embed an activity log widget. This will show the application's details. The  3 required parameters are the server (your qrvey domain), the context (in this case "APP") and the referenceid. This last parameter, in this case, is the id of the user the application is linked to.

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

</div>