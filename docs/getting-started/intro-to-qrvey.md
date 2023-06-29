---
id: intro-to-qrvey
title: Introduction to the Qrvey Platform
sidebar_label: Introduction to Qrvey
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst, All Personas]
sidebar_position: 1
---

The Qrvey platform is an all-in-one analytics solution that enables SaaS providers to put cutting-edge analytics into the hands of their users. This article contains essential information required to understand how to work with the Qrvey platform.

## System Components
The Qrvey platform consists of the following primary components:
* **Qrvey Composer**. Web-based application used by Data Analysts to create and manage datasets, visualizations, and dashboards to share with external users. 
* **Qrvey Admin Center**. Web-based application used by Solution Architects to manage and monitor the Qrvey platform.
* **Data Router**. Back-end engine deployed by CloudOps Engineers that performs the necessary data ingestion and transformation. 
* **Embeddable Widgets**. The Qrvey components, such as visualizations and dashboards, that Software Developers embed into their SaaS applications. 

## Overview of Qrvey Users
Users of the Qrvey platform and analytics solutions can be divided into two fundamental categories, internal and external.

### Internal Users
An internal user is typically an employee of the SaaS organization that is embedding the Qrvey platform within their application. In other words, the internal user is the direct customer of Qrvey. The internal user is divided into the following personas, each with specific responsibilities:
* **CloudOps Engineer**. AWS gurus that deploy, upgrade, and monitor the instances of the Qrvey platform.
* **Data Analyst**. Use Qrvey Composer to set up datasets and create visualizations and dashboards to help end users find trends in their data.
* **Solution Architect**. Design the embedding strategy, tenant experiences, and access strategy. Solution Architects use the Qrvey Admin Center to manage the infrastructure, users, and content, as well as configure Qrvey Composer.
* **Software Developer**. Embed Qrvey widgets in their host applications and use Qrvey APIs to programmatically interact with the Qrvey platform.

### External Users 
The external user interacts with the Qrvey charts, dashboards, and other components from within the host application. An external user is typically a customer of the SaaS organization that has embedded the Qrvey platform within their application. External users can be divided into the following categories:
* **End User/Viewer**. An external user that can only view existing visualizations embedded in the host application. 
* **Power User/Builder**. An external user that can create new visualizations, dashboards, and other types of Qrvey assets from their datasets.  

## What Is a Qrvey Application?
A Qrvey application is a self-contained analytics project that can be used directly, shared, distributed, or embedded into other software applications. Qrvey applications connect to one or more datasets, and they typically include any number of analytics components, such as charts, reports, dashboards, and automated workflows. Qrvey applications can be created in Qrvey Composer or programmatically via API.  

The Qrvey platform offers a wide range of features that can be used in a Qrvey application, including:
* **Web Forms**. Collect data from external users by creating web forms, surveys, and quizzes.
* **Data Connections**. Create a connection to a wide range of cloud-based and on-premise data stores, document databases, columnar databases, REST APIs, JSON and CSV data files, and more. 
* **Analytics**. Analyze data using pre-built visualizations or create custom charts and metrics.
* **Dashboard Builder**. Create highly interactive dashboards and mashups of visualizations across multiple datasets. A dashboard can include any combination of forms, charts, metrics, and analytics, as well as standard web components like text, images, headers and footers. Additional features include navigation and user authentication.
* **Automation**. Create automated workflows to perform virtually any task supported in the Qrvey platform. 

## Initial Onboarding Process
The following outline describes the initial onboarding process for new customers of the Qrvey platform:
1. Configure AWS environments.
2. Install and configure the Qrvey platform on AWS. 
3. Build your first Qrvey application in Qrvey Composer. 
  a. Create a new application.
  b. Create a connection to a data source.
  c. Create a data set.
  d. Build a dashboard with charts. 
  e. Publish the application. 
  f. Share the application with the organization. 
4. Embed the application in the host application. 

## Next Steps
Now that you’re familiar with the basics of the Qrvey platform, you can further explore the Qrvey Partner Portal documentation. It is organized based on user persona. Select one of the following personas to learn more:
* [CloudOps Engineer](./02-Personas/cloudops.md)
* [Data Analyst](./02-Personas/data-analyst.md)
* [Solution Architect](./02-Personas/solution-architect.md)
* [Software Developer](./02-Personas/software-developer.md)
