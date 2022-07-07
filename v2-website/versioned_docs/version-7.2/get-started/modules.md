---
id: modules
title: Modules
sidebar_label: Modules
---

<div style={{textAlign: "justify"}}>

The Qrvey platform consists of three modules, namely, the Admin Portal for administrators, Data Router for data collection and transformation, and the Business Analytics Application where creators and end users can build and interact with their analytics. The Admin Portal and Business Analytics Application modules have a Web UI. All three modules have a rich collection of APIs and pre-built widgets. 

## Admin Portal
The Admin Portal module is used to manage and monitor your Qrvey instance, Data Router settings, Amazon AWS infrastructure options and application deployments. There are four sections - Platform, Data Router, Deployments and Data.

In the Platform section you will be able to manage access to your Qrvey instance by creating user accounts, customizing the look and feel of Qrvey to match your own branding, and configuring and connecting to third-party services. You will also be able to manage all of the sections and features available to your users.

In the Data Router section you will find the Health Dashboard where you can monitor the health and performance of Data Router. Here you’ll find information and indications for the health of the data service, metadata and Elasticsearch instances. You will also be able to make adjustments to infrastructure such as specify the size and number of servers you’d like to use for both Qrvey and Elasticsearch as well as the amount of concurrency you’d like to use for Lambda functions.

In the Data section, Admins will be able to establish connections to external databases. These connections are used to load data into Qrvey’s Elasticsearch indexes which can be accessed by report designers to create datasets for analytics. The Data Sync feature allows Admins to sync databases with Qrvey’s backend in near real-time or on a scheduled basis.

The Deployments section is used by Admins to deploy Qrvey application content to one or more destinations. It is comprised of 2 parts, server management and deployment definitions. Servers are added as destinations for new or recurring deployments. Admins can create a release by selecting content from specific user accounts and applications to create a deployment package. The deployment package can include all or just selected components created inside an application.

## Data Router
Data Router is Qrvey’s data integration tool that can collect, augment and transform your data, while making it available to everyone who needs it, wherever they need it. All of these functions are performed in a no-code environment. Qrvey’s Data Router will turn your data into a high-performance data powerhouse that can be leveraged by Qrvey’s analytic and automation platform. 

With Data Router you can easily push data from anywhere into Qrvey’s Elasticsearch backend. This allows you to work with structured, semi- and unstructured data. Data Router supports a high-volume batch loading and has the power to process high-velocity real-time data.

Data router provides flexible metadata including column mapping, transformations and filters. You can map any structure of data, any types of fields or choose from our growing list of data transformations and functions. Some of these are robust AI and ML transformations such as video and image recognition and advanced text and document analysis capabilities.

It also includes a full suite of administrator tools for testing, debugging and logging, as well as performance and load monitoring for the health of your deployments.

## Business Analytics Applications
Qrvey’s Business Analytics Applications are built on a modern cloud architecture to maximize flexibility, scalability and performance. It bundles data collection, analytics and automation.

Data Collection technologies enable self-service tools for gathering all types of data through the creation of online forms, surveys and quizzes. It can also integrate with any combination of structured, semi-structured and unstructured data. 

This data can be used in the Analytics tools to summarize data with profiles, tabular views, trend analysis or explore text analytics using sentiment and keyword analysis. Users can easily create custom visualizations such as pie, line, heatmap charts as well as combo-charts that include multiple layers, reference lines and more. Interactive analytics support complex filters, drill-down reports and configurable dashboards that can be made available to end users.

In Workflow Automation users have the ability to automate actions and trigger alerts based on data values or collected responses. Users can set Workflow triggers that are scheduled, data-driven or initiated from web hooks. The automation engine is a fully self-service, end-user focused interface that is both robust and easy to use.

These 3 technologies bring self-service data collection, analysis and automation capabilities to your product or enterprise, with an easy-to-use app builder that can be used stand-alone or coupled with your Data Powerhouse.

# Embedding
Qrvey also includes a robust API and pre-built widgets to make embedding and distributing analytics easier.  If you are development-minded, this section will be on interest. 

## API
Qrvey provides a comprehensive REST API that can be accessed via standard HTTP requests and responses (GET, POST, etc.). Developers may use a variety of programming languages and platforms, as most have built-in libraries for HTTP communication. You may use the Qrvey API in order to programmatically work with any of the core Qrvey application features for data collection, automation and analytics or when integrating Qrvey into your own applications.

## Widgets
All of the analytics, automation and web form building tools can quickly be embedded to enhance any application or platform. Qrvey provides developers with front-end “Widgets” to allow developers to seamlessly embed Qrvey’s self-service data collection, automation, or analytics to power your applications. Widgets are directly embedded into web applications using simple Javascript and custom HTML tags. Qrvey Widgets are available for embedding various front-end application features, including Web Form builders (Survey, Quiz, Forms), Data Visualizations for both creating and consuming charts and report outputs, and for a variety of additional end-user self-service tools.

</div>