---
id: embedding-intro
title: Embedding Overview
sidebar_label: Overview
---
 
<div style={{textAlign: "justify"}}>
 

The Qrvey Platform provides a suite of widgets to allow the various features to be seamlessly embedded into web or mobile applications. These Widgets include self-service data collection, workflow automation, and business analytics to supercharge your applications. The Qrvey Platform also provides a comprehensive REST API that can be accessed via standard HTTP/HTTPS requests and responses (GET, POST, etc.).


 ## Widgets
Most of the UI components in Qrvey are “widgets" that can be used to jumpstart your development. This alphabetically sorted list provides a brief description of a few most commonly used widgets. Click on any link to get redirected to the selected widget’s documentation for detailed information and sample code.

 
>**Note**: If you would like to embed a piece of functionality that is not listed below, please talk to us. Many of the existing widgets have not been listed here and they can be made available to you upon request.
 
Please contact help@qrvey.com if you would like to embed any other Qrvey widget in your custom application.


* <a href="/docs/embedding/widgets/analytics/analytic-suite/" target="_blank"> <strong>Analytic Suite</strong></a> (tag: <code>&lt; an-dashboard &gt;</code>) - This widget is a one-stop-shop that gives you the functionality of all Analysis Views: Summary, Tabular, and Custom Views. This is the newer version of Custom and Summary View widgets that we recommended using over those.

* <strong>Builders</strong> (tag: <code>&lt; qrvey-builders &gt;</code>) - This is the second most popular widget used to embed the entire <a href="/docs/embedding/widgets/app-building/widget-report-builder/" target="_blank"> Report Builder </a> or <a href="/docs/embedding/widgets/app-building/widget-page-builder/" target="_blank">Page Builder </a> in your custom application. The default mode embeds the Page Builder widget and adding and setting the reports_dahboard property to true, embeds the Report Builder.
 
* <a href="/docs/embedding/widgets/data-sources/widget-datalinks/" target="_blank"><strong>Data Links </strong></a>(tag: <code>&lt; qrvey-datalinks &gt;</code>) - Data Links can be created by users of your application when you embed this widget in your product.
 
* <a href="/docs/embedding/widgets/data-sources/datasets-widget/" target="_blank"><strong>Datasets </strong></a> (tag: <code>&lt; qrvey-data-sets &gt;</code>) - Give your users access to the powerful dataset widget with all of its capabilities (tie to creating connections, creating complex datasets with joins, data synchronization, etc.). Access to this widget has to be enabled with care, as it enables users to access any connections that have been created for the application.

* <a href="/docs/embedding/widgets/app-building/widget-page-view/" target="_blank"><strong>Page View </strong></a>(tag: <code>&lt; qrvey-end-user &gt;</code>) - Page View widget is the most commonly used widget of the entire set and it allows dashboards that are created in Page Builder to be embedded in your custom applications.

* <a href="/docs/embedding/widgets/analytics/single-panel/" target="_blank"><strong>Single Panel </strong></a> (tag: <code>&lt; an-panel &gt;</code>) - This widget can be used to embed a single visualization panel.

* <a href="/docs/embedding/widgets/data-sources/widget-webforms/" target="_blank"><strong>Web Form Design</strong></a> (tag: <code>&lt; qrvey-design-widgets &gt;</code>) - Another popular widget, Webforms Design widget enables you to embed any webform designer (Form, Survey, Quiz) in your application, allowing your users to create and publish any type of webforms.

* <a href="/docs/embedding/widgets/data-sources/web-form-end-user" target="_blank"><strong>Web Form - End User</strong></a> (tag: <code>&lt; qrvey-webform-enduser &gt;</code>) - Designed web forms can be embedded, too. The widget will allow the end users to work in the web form without leaving the parent application. I.e. They can take a quiz or respond to a survey inside your application.
 
## APIs
Our API references provide a list of the most commonly-used APIs needed to interact with the Qrvey platform. Qrvey APIs are documented in Stoplight so they can be easily accessed and tried out. The full collection can be accessed <a href="https://qrvey.stoplight.io/docs/qrvey-api-doc/">here</a>.
 
</div>