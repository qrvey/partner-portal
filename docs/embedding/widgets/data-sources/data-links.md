---
id: widget-datalinks
title: Data Links
sidebar_label: Data Links
---
<div style="text-align: justify">

## Widget Overview
The datalinks widget is a tool think to manage all the links between your data related to an application, the user can embed this widget in his web application, once the process is complete, you can create, edit or delete different data connections and use it later to create differents charts or analysis. 

## Samples
The way to embed and use this widget is pretty simple, you just need to declare an object with some information and you're ready to work.

### Code Sample


```
<script>
var configWebForm = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "user_id": "<USER_ID>"
}
</script>

<qrvey-datalinks settings='datalinks_settings'></qrvey-datalinks>

<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://your_qrvey_domain_widget_launcher/app.js"></script>
```