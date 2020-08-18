---
id: version-5.3-widget-intro
title: Widgets Quick Start Guide
sidebar_label: Widgets Quick Start Guide
original_id: widget-intro
---

<div style="text-align: justify">

Qrvey provides developers with front-end “Widgets” to allow them to seamlessly embed Qrvey’s self-service data collection, automation, or analytics to power your applications. Widgets are directly embedded into web applications using simple Javascript and custom HTML tags. Qrvey Widgets are available for embedding various front-end application features, including Web Form builders (Survey, Quiz, Forms, etc), Data Visualizations for both creating and consuming charts and report outputs, and for a variety of additional end-user self-service tools.

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

> **Note 1**: These pieces of information remain the same for most widgets. There are a few exceptions where the launcher is different. Please refer to each widget’s document for the exact launcher. 

> **Note 2**: Be sure to keep this information private and do not post it publicly in your production code. Refer to  <a href="/docs/embedding/widgets/widget-intro/#embed-a-widget-from-qrvey-composer "> this document</a> for guidelines on how to embed widgets without including any of this information in your HTML code.

The general structure of a Widget includes:
1. A JSON config object that defines all of the Widget’s details
2. The Script tag for the Widget launcher
3. The Widget HTML tag

The following example embeds a web form widget of type Form in a very basic  HTML page. All code in red has to be replaced with your own values:


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

It is needless to mention that the three parts of the code required for the widget can be separated and put in the appropriate place inside your code.

## Embed a Widget From Qrvey Composer 

Inspect the widget that you want to implement using browser’s developer tools (we suggest Chrome), and get the config object from the element with the following command in the console:

```
JSON.parse($0.config)
```
Where $0 is the inspected HTML element (our widget) and "config" is the config property of the widget.

![1_working_with_qrvey](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/widgets/embed-widget-from-qrvey-composer.png#thumbnail)

> Note 1: in some cases the config properties might have another name, please read the specific object for each widget.

> Note 2: If your Qrvey Composer is in another domain, DON’T forget to update your domain and API-key properties.

