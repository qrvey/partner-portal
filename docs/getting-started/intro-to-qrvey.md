---
id: intro-to-qrvey
title: Introduction to the Qrvey Platform
sidebar_label: Introduction to Qrvey
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
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
An internal user is typically an employee of the SaaS organization that is embedding the Qrvey platform within their application. In other words, the internal user is the direct customer of Qrvey. There are two ways to perceive internal users: by user persona and by user role. 

#### Qrvey User Personas
The internal user is divided into the following personas, each with specific responsibilities:
* **CloudOps Engineer**. AWS gurus that deploy, upgrade, and monitor the instances of the Qrvey platform.
* **Data Analyst**. Use Qrvey Composer to set up datasets and create visualizations and dashboards to help end users find trends in their data.
* **Solution Architect**. Design the embedding strategy, tenant experiences, and access strategy. Solution Architects use the Qrvey Admin Center to manage the infrastructure, users, and content, as well as configure Qrvey Composer.
* **Software Developer**. Embed Qrvey widgets in their host applications and use Qrvey APIs to programmatically interact with the Qrvey platform.

#### Qrvey User Roles
The internal user, regardless of persona, interacts with the Qrvey platform in one of the following two roles:
* **Creator**. Creators set up datasets and create visualizations and dashboards to help end users find trends in their data. Creators may be Data Analysts that use Qrvey Composer or Software Developers that perform these tasks using APIs and embeddable widgets.  
* **Administrator**. Qrvey Administrators monitor and manage the application infrastructure, which includes managing Creator accounts. They also manage the Qrvey Data Router, create Elasticsearch Indexes, and deploy Creator content and applications across servers or installations. Administrators do not manage the content within the applications. 

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
    * Create a new application.
    * Create a connection to a data source.
    * Create a data set.
    * Build a dashboard with charts. 
    * Publish the application. 
    * Share the application with the organization. 
4. Embed the application in the host application. 

## What to Learn Next
Now that you’re familiar with the basics of the Qrvey platform, you can further explore the Qrvey Partner Portal documentation.

### Solution Architects 
Stakeholders that use the Qrvey Admin Center to manage the infrastructure, users, and content, as well as configure Qrvey Composer.

* [Qrvey Admin Center User Guide](../admin/introduction-to-qrvey-admin-center.md). 
* [Introduction to the Qrvey Admin Center](../admin/introduction-to-qrvey-admin-center.md)
* [Customizing Qrvey Composer](../admin/customizing-qrvey-composer.md)
* [Managing Users of Qrvey Composer](../admin/managing-users.md)
* [Overview of Content Deployment](../admin/08-Content%20Deployment/overview-of-content-deployment.md)
* [Overview of Multi-tenant Deployments](../multi-tenant-solution/overview-of-multi-tenant-deployments.md)
* [Multi-tenant Dataset Architecture](../multi-tenant-solution/multi-tenant-dataset-architecture.md)
* [Multi-tenant Security Architecture](../multi-tenant-solution/multi-tenant-security-architecture.md)

### CloudOps Engineers
The AWS gurus that deploy, upgrade, and monitor the instances of the Qrvey platform.

* [Qrvey Deployment Guide](../deployment/introduction-to-deployment.md). 
* [Prerequisites for Installation](../deployment/prerequisites-for-installation.md)
* [Preparing Your AWS Account](../deployment/preparing-AWS-account.md)
* [Initial Installation](../deployment/04-Installing%20the%20Qrvey%20platform/initial-installation.md)
* [Customizing Qrvey Deployment](../deployment/customizing-qrvey-deployment.md)
* [Cluster Management](../deployment/06-Managing%20the%20Qrvey%20Platform/manage-aws-elasticsearch.md)

### Data Analysts 
Those that Qrvey Composer to set up datasets and create visualizations and dashboards to help end users find trends in their data.

* [Qrvey Composer User Guide](../composer/introduction-to-qrvey-composer.md). 
* [Introduction to Qrvey Composer](../composer/introduction-to-qrvey-composer.md)
* [Overview of Qrvey Applications](../composer/overview-of-applications.md)
* [Introduction to Data in Qrvey](../composer/05-Working%20with%20Data/Datasets/01-Overview%20of%20Datasets/overview-of-datasets.md)
* [Overview of Dashboards](../composer/06-Dashboards/dashboard-builder.md)
* [Overview of Chart Builder](../composer/07-Charts/overview-of-chart-builder.md)

### Software Developers
The folks that bring it all together & embed Qrvey widgets in their host applications and use Qrvey APIs to programmatically interact with the Qrvey platform.

* [Qrvey Software Developer Guide](../software-developer/introduction-to-software-development.md)
* [Overview of the Qrvey API](../software-developer/06-Working%20with%20Qrvey%20APIs/overview-of-qrvey-api.md)
* [Qrvey API Reference (Stoplight)](https://tinyurl.com/atuznk6u)
* [Overview of the Qrvey Platform Architecture](../software-developer/architecture.md)
* [Overview of Embedding and Widgets](../software-developer/04-Embedding%20Qrvey%20Widgets/overview-of-embedding.md)