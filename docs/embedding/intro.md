---
id: embedding-intro
title: Embedding Overview
sidebar_label: Overview
---

<div style="text-align: justify">

The Qrvey Platform provides a suite of widgets to allow the various features to be seamlessly embedded into web or mobile applications. These Widgets include self-service data collection, workflow automation, and business analytics to supercharge your applications. The Qrvey Platform also provides a comprehensive REST API that can be accessed via standard HTTP/HTTPS requests and responses (GET, POST, etc.).

## Widgets

Most of the UI components in Qrvey are “widgets" that can be used to jumpstart your development. This alphabetically sorted list provides a brief description of a few most commonly used widgets. Click on any link to get redirected to the selected widget’s documentation for detailed information and sample code. 

Please contact help@qrvey.com if you would like to embed any other Qrvey widget in your custom application.

<a href="/docs/embedding/widgets/app-building/chart-builder/"><strong>Chart Builder </strong></a>

*  <a href="/docs/embedding/widgets/analytics/analytic-suite/"> <strong>Analytic Suite</strong></a>
(tag: ```<an-dashboard>```) - This widget is a one-stop-shop that gives you the functionality of all Analysis Views: Summary, Tabular, and Custom Views. This is the newer version of Custom and Summary View widgets that we recommended using over those.

* **Builders** (tag: ```<qrvey-builders>```) - This is the second most popular widget used to embed the entire <a href="/docs/embedding/widgets/app-building/widget-report-builder/"> Report Builder </a> or <a href="/docs/embedding/widgets/app-building/widget-page-builder/">Page Builder </a>
 in your custom application. The default mode embeds the Page Builder widget and adding and setting the reports_dahboard property to true, embeds the Report Builder.

* <a href="/docs/embedding/widgets/app-building/chart-builder/"><strong>Chart Builder </strong></a> (tag: ```<an-chart-builder-modal>```) - This widget embeds the powerful chart builder widget inside your application, allowing your users to create their own charts.

* <a href="/docs/embedding/widgets/data-sources/widget-dataconnectors/"><strong>Data Connections </strong></a>(tag: ```<qrvey-data-connectors>```) - This widget embeds the “data connections” dashboard, with its full functionality inside any application.

* <a href="/docs/embedding/widgets/data-sources/widget-datalinks/"><strong>Data Links </strong></a>(tag: ```<qrvey-datalinks>```) - Data Links can be created by users of your application when you embed this widget in your product.

* <a href="/docs/embedding/widgets/data-sources/datasets-widget/"><strong>Datasets </strong></a> (tag: ```<qrvey-data-sets>```) - Give your users access to the powerful dataset widget with all of its capabilities (tie to creating connections, creating complex datasets with joins, data synchronization, etc.). Access to this widget has to be enabled with care, as it enables users to access any connections that have been created for the application.

* <a href="/docs/embedding/widgets/app-building/widget-end-user/"><strong>End User </strong></a> (tag: ```<qrvey-end-user>```) - End User widget is the number one reused widget of the entire set and it allows end-user dashboards that are created in Page Builder to be embedded in your custom applications.

* <a href="/docs/embedding/widgets/analytics/single-panel/"><strong>Single Panel </strong></a> (tag: ```<an-panel>```) - This widget can be used to embed a single visualization panel.

* <a href="/docs/embedding/widgets/data-sources/widget-webforms/
"><strong>Web Form Design</strong></a> (tag: ```<qrvey-design-widgets>```) - Another popular widget, Webforms Design widget enables you to embed any webform designer (Form, Survey, Quiz) in your application, allowing your users to create and publish any type of webforms.

* <a href="/docs/embedding/widgets/automation/widget-automation/"><strong>Automation Design</strong></a> (tag: ``` <qrvey-workflow-design>```) - This widget can be used to embed the flow builder in your applications.




## APIs
Our API references provide a complete list of the API calls needed to interact with the Qrvey platform. The APIs can be divided into the following groups. These links can be bookmarked for quick reference.


* <a href="docs/embedding/api/api-core">Core API Reference</a>

* <a href="docs/embedding/api/api-admin">Admin API Reference</a>

* <a href="docs/embedding/api/api-analytics">Data Views API Reference</a>

* <a href="docs/embedding/api/api-automation/">Automation (Workflow) API Reference</a>

