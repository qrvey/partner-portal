---
id: widget-automation-widget
title: Automation
sidebar_label: Automation
tags: [Software Developer]
sidebar_position: 9
displayed_sidebar: getting-started
---

The Automation widget enables you to embed the [Automated Flows](../../../composer/09-Automation/introduction-to-automation.md) feature within an application.

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

| **Parameter** | **Description** | **Required** |
| --- | --- | --- |
| **qvToken** | `String`, Encrypted token used for secure authentication. | **Required** if `apiKey` is not provided. |
| **clientid** | `String`, A unique identifier of the tenant end user. Enables use of the End User Personalization and Download Manager features. In the automation widget, the `clientid` links flows to the end user that created them, allowing the export of personalized dashboards. <br /> **Note:** Passing `clientid` in a widget activates a "Show Personalized Dashboards" checkbox in the attachment modal of the Send Email action inside a Flow, which must be checked for the feature to apply. | **Optional** |
| **apiKey** | `String`, Your organization’s unique API key required to access the Qrvey platform. | **Required**, if `qvToken` is not provided. |
| **userId** | `String`, ID of the Qrvey User that owns the application being embedded. | **Required**  || `domain` | `String`, The base URL of your Qrvey instance. | **Required** | 
| **appId** | `String`,  ID of the Qrvey application that contains the asset you want to embed. | **Required** |
| **workflowId** | `String`, ID of a single flow. If configured, widget will open that flow. If omitted, this widget will display the "browse all workflows" page. | **Optional** |
| **timezone** | `Object`, Overrides the time zone setting in Qrvey Admin Center. Please see [The timezone Object](#the-timezone-object) for details.  | **Optional** | 

### Timezone

For more information, see [Configuring Time Zone Settings](../../10-Timezone%20Settings/timezone-support.md).

| **Parameter** | **Description** | **Required** |
| --- | --- | --- |
| `offset` | `string`, Time to offset by. Pattern: `{"HH:MM" }` Example: `{ "offset": "-1:00" }`   | **Optional** | 