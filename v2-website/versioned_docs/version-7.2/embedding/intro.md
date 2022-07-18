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


* ** [Analytic Suite](../embedding/widgets/analytics/analytic-suite.md) ** (tag: <code>&lt; an-dashboard &gt;</code>) - This widget is a one-stop-shop that gives you the functionality of all Analysis Views: Summary, Tabular, and Custom Views. This is the newer version of Custom and Summary View widgets that we recommended using over those.

* **Builders** (tag: <code>&lt; qrvey-builders &gt;</code>) - This is the second most popular widget used to embed the entire ** [Report Builder](../embedding/widgets/app-building/report-builder.md) ** or ** [Page Builder](../embedding/widgets/app-building/page-view.md) ** in your custom application. The default mode embeds the Page Builder widget and adding and setting the reports_dahboard property to true, embeds the Report Builder.
 
* ** [Datasets](../ui-docs/datasets/datasets.md) ** (tag: <code>&lt; qrvey-data-sets &gt;</code>) - Give your users access to the powerful dataset widget with all of its capabilities (tie to creating connections, creating complex datasets with joins, data synchronization, etc.). Access to this widget has to be enabled with care, as it enables users to access any connections that have been created for the application.

* ** [Page View](../embedding/widgets/app-building/page-view.md) ** (tag: <code>&lt; qrvey-end-user &gt;</code>) - Page View widget is the most commonly used widget of the entire set and it allows dashboards that are created in Page Builder to be embedded in your custom applications.

* ** [Single Panel](../embedding/widgets/analytics/single-panel.md) ** (tag: <code>&lt; an-panel &gt;</code>) - This widget can be used to embed a single visualization panel.

* ** [Web Form Design](../embedding/widgets/data-sources/web-forms.md) ** (tag: <code>&lt; qrvey-design-widgets &gt;</code>) - Another popular widget, Webforms Design widget enables you to embed any webform designer (Form, Survey, Quiz) in your application, allowing your users to create and publish any type of webforms.

* ** [Web Form - End User](../embedding/widgets/data-sources/web-form-end-user.md) ** (tag: <code>&lt; qrvey-webform-enduser &gt;</code>) - Designed web forms can be embedded, too. The widget will allow the end users to work in the web form without leaving the parent application. I.e. They can take a quiz or respond to a survey inside your application.
 
## APIs
Our API references provide a list of the most commonly-used APIs needed to interact with the Qrvey platform. Qrvey APIs are documented in Stoplight so they can be easily accessed and tried out. The full collection can be accessed <a href="https://qrvey.stoplight.io/docs/qrvey-api-doc/">here</a>.
 
</div>