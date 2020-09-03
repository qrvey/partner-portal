---
id: version-5.3-widget-intro
title: Widgets Quick Start Guide
sidebar_label: Widgets Quick Start Guide
original_id: widget-intro
---

<div style="text-align: justify">

Qrvey provides developers with front-end “Widgets” to allow them to seamlessly embed Qrvey’s self-service data collection, automation, or analytics to power their applications. Widgets are directly embedded into web applications using simple Javascript and custom HTML tags. Qrvey Widgets are available for embedding various front-end application features, including Web Form builders (Survey, Quiz, Forms, etc), Data Visualizations for both creating and consuming charts and report outputs, and more.

## Versioning
To minimize any compatibility issues, the Qrvey Widgets versions are directly tied to the Qrvey application and are automatically upgraded whenever the Qrvey application is updated. We encourage developers to always consider upgrades as we are rapidly adding new features and functionality.

## API Key
All Qrvey Widget requests will require a Qrvey developer API key. If you would like to obtain an API key, please contact your Qrvey account representative or send an email to help@qrvey.com.

## Getting Started
It is a good idea to familiarize yourself with the Qrvey application front-end before starting to use Widgets, as many of the widgets are either available in the Qrvey Composer or have very close ties to the functionality of an area of the Composer. Therefore it is recommended that those ties are fully understood to enable you a seamless integration and provide the best user experience for your users. 

In order to embed any widget, you will need to have the following information handy:
- Qrvey base URL - This is the URL of your Qrvey instance and the location where all your Widget and API calls will be made. This element will be referred to as  ```https://your_qrvey_domain``` in these documents. 
- API-key - This is your unique key that must be a part of every API call. This key is shared in the onboarding email that you receive right after your Qrvey instance is set up. This element will be referred to like: API_KEY in these documents.
- Launcher URL - This is a link to a piece of Javascript code that is needed for any widget.


> **Note 1**: These pieces of information remain the same for most widgets. There are a few exceptions where the launcher is different. Please refer to each widget’s document for the exact launcher. 

> **Note 2**: Be sure to keep this information private and do not post it publicly in your production code. Refer to  <a href="/docs/embedding/widgets/widget-embedding-using-cookies/"> this document</a> for guidelines on how to embed widgets without including any of this information in your HTML code.

> **Note 3**: Aside from the API key and user id, most of the required properties of widgets are visible in the URL. Find the most common methods of obtaining the others in the  <a href="/docs/faqs/faqs-intro/">FAQs</a> .

> **Note 4**: Watch for occasional differences in the spelling of properties, as well as the “config” property (sometimes used as “settings”). 



The general structure of a Widget includes:
1. A JSON config object that defines all of the Widget’s details
2. The Script tag for the Widget launcher
3. The Widget HTML tag

The following example embeds a web form widget of type Form in a very basic  HTML page. All code in red has to be replaced with your own values:


```
<!-- your html page -->
<html>
<head>
  <meta charset="utf-8">
  <title>Web Forms Widget</title>
</head>

<body>
  <h1>Web Forms Widget</h1>
  <a href="index.html">Back to home page</a>

  <!-- start of embedding the web form widget -->
  <!-- Part 1: widget's configuration object -->
  <script>
    var myConfig = {
      "api_key": "API_KEY", //replace with your api_key
        "app_id": "APP_ID", // replace with the app_id for the web form
        "domain": "https://your_qrvey_domain", // replace with your domain
        "user_id": "USER_ID", // replace with the id of the owner of the app
        "qrvey_id": "QRVEY_ID", // ID for the FORM
        "app_type": "FORM"
    }
  </script>

  <!-- Part 2: widget's launcher -->
  <script src="https://<WIDGETS_URL>//widgets-launcher/app.js">
</script>

  <!-- Part 3: widget's tag -->
  <qrvey-design-widgets settings="myConfig"></qrvey-design-widgets>

  <!-- end of embedding the web form widget -->

</body>

</html>

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

