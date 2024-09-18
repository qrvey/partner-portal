---
id: widget-automation-widget
title: Automation Widget
sidebar_label: Automation Widget
tags: [Software Developer]
sidebar_position: 9
displayed_sidebar: getting-started
---

The Automation widget enables you to embed the [Automated Flows](../../../composer/09-Automation/overview-of-automation.md) feature within an application.

## Embeddable Script

```html
<!-- Tag -->
<qrvey-workflow-design settings="config"></qrvey-workflow-design>

<!-- Config -->
<script>
var config = {
  apiKey: '<API_KEY>',
  domain: '<DOMAIN>',
  userId: '<USER_ID>',
  appId: '<APP_ID>'
};
</script>

<!-- Launcher -->
<script type="text/javascript" src="https://<your_qrvey_domain>/widgets-launcher/app.js"></script>
```

## Configuration Object
The following table lists the properties associated with this widget.

| **Parameter** | **Description** | **Required** |
| --- | --- | --- |
| `qvToken` | `String`, Encrypted token used for secure authentication. | **Required** if `apiKey` is not provided. |
| `apiKey` | `String`, Your organization’s unique API key required to access the Qrvey platform. | **Required**, if `qvToken` is not provided. |
| `userId` | `String`, ID of the Qrvey Composer user account accessing this feature. Optional: You can alternately specify the user ID in a Qrvey session cookie. | **Required**  |
| `domain` | `String`, The base URL of your Qrvey instance. | **Required** | 
| `appId` | `String`, ID of the Qrvey application containing the flow.| **Required** |
| `workflowId` | `String`, ID of a single flow. If configured, widget will open that flow. If omitted, this widget will display the "browse all workflows" page. | **Optional** |
| `timezone` | `Object`, Overrides the time zone setting in Qrvey Admin Center. For details, please see [The Timezone Object](#timezone) below.  | **Optional** | 

### Timezone

For more information, see [Configuring Time Zone Settings](../../10-Timezone%20Settings/timezone-support.md).

| **Parameter** | **Description** | **Required** |
| --- | --- | --- |
| `offset` | `string`, Time to offset by. Pattern: `{"HH:MM" }` Example: `{ "offset": "-1:00" }`   | **Optional** | 