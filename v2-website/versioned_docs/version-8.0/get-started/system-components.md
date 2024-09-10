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

All of the created Qrvey contents that are created in Qrvey Composer can be deployed as a standalone application or be embedded into other software applications and platforms through the use of widgets and APIs. 
A short description of each of these components, and links to get you started with each can be found below. Additional training videos can be found [here](../video-training/building-qrvey-sample/multi-tenancy-architecture.md).

## Admin Center
The Admin Center is an application to manage and monitor your:
* Qrvey Instance 
* Amazon AWS Infrastructure Options 
* Content Deployment
* User Management
* Feature Customization

[Details for using Admin Center can be found here](../admin/admin-overview.md).

## Data Router
The Data Router module is responsible for handling data ingestion and synchronization. Additionally, all transformation rules are configured through the Data Router. The engine is behind all data functionality of Qrvey and all interaction with APIs that manage connections and datasets are handled by the Data Router Engine. We don’t recommend interacting with the Data Router engine, as all interactions are going to be very low level and require deep understanding of the inner workings of the product. Please contact the Qrvey support team if you think that you need to work with any of these low level functions.


## Qrvey Composer
Qrvey Composer is the main interface used by Tier 1 Users.The product serves as the UI that users can login to in order to configure datasets, create dashboards, set up automation rules and build reports. 

[Details for using the Analytics Portal can be found here](../ui-docs/basics/logging-in.md).

## Embedding and API Services
This module of the application contains the javascript-based embedded widgets and API services used by the Qrvey application. These can be used by application developers to embed the desired pieces of the platform’s functionality into a host web application.

[Embedded widgets documentation is here](../embedding/intro.md).

The API documentation [overview is here](../embedding/api/intro.md) and the [API docs are here](https://qrvey.stoplight.io/docs/qrvey-api-doc/4b0d6d292c0b2-administration).

</div>