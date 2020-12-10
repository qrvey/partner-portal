---
id: version-5.3-get-started-intro
title: Overview
sidebar_label: Overview
original_id: get-started-intro
---

<div style="text-align: justify">

Qrvey is an all-in-one, self-service analytics platform that combines analytics, data collection, and automation technologies.

The Qrvey solution comprises 4 main components:
* Admin Portal
* Data Router
* Analytics Portal - “Qrvey Composer”
* Embedding and API Service

These components are powered by many individual features that can be combined to perform different analysis, automation, or collection-related tasks. All of Qrvey components can be deployed as a stand-alone application or be embedded into other software applications and platforms through the use of Widgets and APIs. 

![1_overview](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/overview/overview1.png)


## Setup and Deployments

Qrvey is a 100% cloud-native product built with dozens of AWS services like **Elastic Container Service (ECS), DynamoDB, S3, Load Balancers, Auto scaling, SES, SQS,** etc. 

We deploy directly into your own Amazon Web Services (AWS) account which gives you full control over your installation and data. You can decide how big of a deployment you need and have full control to scale up or down as needed to balance cost with performance.

Qrvey Platform is deployed using a combination of Cloudformation templates and Code Pipelines. This makes the deployment fully automated with zero downtime during upgrades. An upgrade is as simple as copying a few Zip files into an S3 bucket which will trigger the pipelines and deploy the new version including any updates to the infrastructure.


<a href="/docs/get-started/aws_marketplace/">Go to AWS Marketplace Deployment.</a>

<a href="/docs/setup-deployments/setup-initial-deployment/">Go to Enterprise Deployment.</a>


## Qrvey Platform Components
### 1.) Admin Center
The Admin Center is an application to manage and monitor your: 
* Qrvey Instance 
* Data Router Settings 
* Amazon AWS Infrastructure Options 
* Application deployments
* User Management with Feature Customization 

The application is divided into 6 sections: Customization, Health Dashboard, User Management, Infrastructure, Content Deployment and Metadata Builder.

In the **Customization** section you can see your Qrvey instance information like the plan status, data storage and company information. You can customize the look and feel of Qrvey to match your own branding as well as manage all of the sections and features available to your users. 

In **Health Dashboard** you can monitor the health and performance of Data Router. 

In **User Management** you can manage access to the Qrvey instance by creating user accounts. You can also define Single Sign On configuration using OpenID for Creators and End Users.

In the **Infrastructure** section you will be able to make manual or automatic adjustments such as specifying the size and number of servers you want to use for Elasticsearch, as well as set up email alerts to notify you when changes are made. 

The **Content Deployments** section is used to deploy Qrvey application content to one or more destinations. It consists of 2 parts, server management and deployment definitions. Servers are added as destinations for new or recurring deployments. Admins can create a release by selecting content from specific user accounts and applications as a deployment package which includes all or some of the components created inside an application.

In the **Metadata Builder** section Admins can create and manage everything related to Metadatas, all from data mapping to complex transformations.


<a href="/docs/admin/admin-intro/">Go to Admin Portal.</a>

### 2.) Data Router
Data Router is Qrvey’s data integration tool that can collect, augment and transform your data, while making it available to everyone who needs it, wherever they need it. All of these functions are performed in a no-code environment. 

Qrvey’s Data Router will turn your data into a high-performance data powerhouse that can be leveraged by Qrvey’s analytic and automation platform. With Data Router you can easily push data from anywhere into Qrvey’s Elasticsearch backend and it allows you to work with structured, semi-structured and unstructured data. It also supports a high-volume batch loading and has the power to process high-velocity real-time data.

Data router provides flexible metadata including column mapping, transformations and filters. You can map any structure of data, any types of fields or choose from our growing list of data transformations and functions. Some of these are robust AI and ML transformations such as video and image analysis using AWS Rekognition and text and document analysis using AWS Comprehend and Textract. <br> 
<a href="/docs/data-router/Transforms/transforms-intro/">Learn to use these Transforms here.</a>


It also includes a full suite of administrator tools for testing, debugging and logging, as well as performance and load monitoring for the health of your deployments. <br>
<a href="/docs/data-router/data-router-intro/">Go to Data Router.</a>

### 3.) Data Analytics and Automation
Qrvey’s business analytics application, Qrvey Composer is built on a modern cloud architecture to maximize flexibility, scalability and performance. It contains 3 primary components: 
* Analysis Builder
* Data Collection - Forms, surveys and quizzes.
* Automation Rules

Data Collection technologies enable self-service tools to gather all types of data through the creation of online forms, surveys and quizzes. They also enable integration with structured, semi-structured and or/unstructured data.

This data can be used in analytic to summarize data with profiles, tabular views, trend analysis or explore text analytics using sentiment and keyword analysis. Users can easily create custom visualizations such as pie, line, heatmap charts as well as combo-charts that include multiple layers, reference lines and more. Interactive analytics support complex filters, drill-down reports and configurable dashboards that can be made available to end-users.

Automation gives users the ability to automate actions and trigger alerts based on data values or collected responses. Users can set Workflow triggers that are scheduled, data-driven or initiated from web hooks. The automation engine is a fully self-service, end-user focused interface that is both robust and easy to use.

These 3 technologies bring self-service form and no-code application building to your entire enterprise with an easy-to-use app builder that can be used stand-alone or coupled with your data warehouse.

### 4) Embedding and API Service
#### Widgets
All of the analytics, automation and web form building tools can quickly be embedded within any software application or platform. Qrvey provides front-end “widgets” to allow developers to seamlessly embed Qrvey’s self-service data collection, automation, or analytic views and builders to power your applications. 

Widgets are directly embedded into web applications using simple Javascript and custom HTML tags. Qrvey Widgets are available for embedding various front-end application features, including Web Form builders (Survey, Quiz, Forms), Data Visualizations for both, creating/consuming charts and report outputs, and for a variety of additional end-user self-service tools.

<a href="/docs/embedding/embedding-intro/">Go to Embedding.</a>

#### API
Qrvey provides a comprehensive REST API that can be accessed via standard HTTP requests and responses (GET, POST, etc.). Developers may use a variety of programming languages and platforms as most have built-in libraries for HTTP communication. You may use the Qrvey API in order to programmatically work with any of the core Qrvey application features for data collection, automation and analytics, or when integrating Qrvey into your own applications.

<a href="/docs/embedding/api/api-tutorial/">Go to API.</a>
