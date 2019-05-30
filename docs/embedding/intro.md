---
id: embedding-intro
title: Widget Quick Start Guide
sidebar_label: Quick Start Guide
---
Qrvey provides developers with front-end “Widgets” to allow developers to seamlessly embed Qrvey’s self-service data collection, automation, or analytics to power your applications. Widgets are directly embedded into web applications using simple Javascript and custom HTML tags. Qrvey Widgets are available for embedding various front-end application features, including Web Form builders (Survey, Quiz, Forms, etc), Data Visualizations for both creating and consuming charts and report outputs, and for a variety of additional end-user self-service tools.

## Versioning
To minimize any compatibility issues, the Qrvey Widgets version are tied directly to the Qrvey application and will be automatically upgraded whenever your Qrvey application is updated. We encourage developers to always consider upgrades as we are rapidly adding new features and functionality.

## API Key
All Qrvey Widget request will require access a Qrvey developer API key.  If you would like to obtain an API key, please contact your Qrvey account representative or send an email to help@qrvey.com.

## Getting Started
It is a good idea to familiarize yourself with the Qrvey application front-end before starting to use Widgets as many of the items you create or access from the Qrvey front-end are also accessible via Widgets.  As in the Qrvey application, you can embed Widgets for web form design/building (including Forms, Quizzes, Surveys), for Charts (including chart builder), and several other features.

In order to embed a widget, you will need to have:

- Qrvey base URL - where all your Widget and API calls will be made
- API-key - your unique key that must be a part of every API call
- Launcher URL - javascript link to needed for any widget

> Note: Be sure to keep this information private and do not post it publicly in your code.

The general structure of a Widget includes a JSON config object for all of the Widget details, the Widget HTML tag, and the Script tag to access the Widget launcher.

Here’s an example of an embedded Form Design Widget:

```
<qrvey-design-widgets settings="configWebForm"></qrvey-design-widgets>

<script>
var configWebForm = {
"api_key": "API_KEY_HERE", //replace with your API key
"app_id": "APP_ID", // replace with the app_id value
"domain": "https://your_qrvey_domain", // insert your domain
"qrvey_id": "QRVEY_ID", // ID for the FORM
"user_id": "USER_ID", // ID for the USER
"app_type": "FORM"
}
</script>

<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://your_qrvey_domain_widget_launcher/app.js"></script>
```