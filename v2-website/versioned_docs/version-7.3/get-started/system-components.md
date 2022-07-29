---
id: system-components
title: System Components
sidebar_label: System Components
---

<div style={{textAlign: "justify"}}>

Qrvey’s analytics platform is comprised of four major components:
1. **Admin Center** - The application that is used to manage the infrastructure and the entire instance. 
2. **Data Router** - The background engine that is used for data ingestion and transformation.
3. **Qrvey Composer** - The product that is used by primary users to create and manage datasets, visualizations and dashboards to share with end users. or use for analytics purposes, and more
4. **Embedding and APIs** - Widgets and APIs to be used for embedding Qrvey components into a host application.

All of the created Qrvey contents can be deployed as a standalone application or be embedded into other software applications and platforms through the use of widgets and APIs. 
A short description of each of these components, and links to get you started with each can be found below. Additional training videos can be found [here](../video-training/building-qrvey-sample/multi-tenancy-architecture.md).

## Admin Center
The Admin Center is an application to manage and monitor your:
* Qrvey Instance 
* Data Router Settings 
* Amazon AWS Infrastructure Options 
* Application deployments
* User Management with Feature Customization

[Details for using Admin Portal can be found here](../admin/admin-overview.md).

## Data Router
The Data Router module is responsible for handling data ingestion through API connections or database connectors. Additionally, all transformation rules are configured through the Data Router. Accessing Data Router functionality is done through the use of the APIs.

<a href="https://www.google.com/url?q=https://documenter.getpostman.com/view/1152381/TVCb4AGN%23f5d31d51-13e7-4983-af72-0a414de50756&sa=D&source=docs&ust=1645016920099460&usg=AOvVaw2Li2lUlzOEWCnnix6j05Zk" target="_blank">Details for using Data Router can be found here</a>.

## Qrvey Composer
Qrvey Composer is the main interface used by primary users.The product serves as the UI that users can login to in order to create dashboards, configure datasets, set up automation rules and build reports. 

[Details for using the Analytics Portal can be found here](../ui-docs/basics/logging-in.md).

## Embedding and API Services
This module of the application contains the javascript-based embedded widgets and API services used by the Qrvey application. These can be used by application developers to embed the desired pieces of the platform’s functionality into a host web application.

[Embedded widgets documentation is here](../embedding/intro.md).

The API documentation [overview is here](../embedding/api/intro.md) and <a href="https://documenter.getpostman.com/view/1152381/TVCb4AGN#intro" target="_blank">API docs are here</a>.

</div>