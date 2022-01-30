---
id: qrvey-platform-overview 
title: Qrvey Platform Overview
sidebar_label: Qrvey Platform Overview
---

<div style={{textAlign: "justify"}}>

## Getting Started
To familiarize yourself with Qrvey, we recommend that you:
1. Read this article to the end, regardless of your user persona.
2. Follow the steps in the <a href="#getting-started---continued">Getting Started - Continued</a> segment at the end of this article, once you reach it!

## What Is Qrvey?
Qrvey is the only all-in-one, low-code analytics platform built exclusively on AWS. Qrvey combines reporting and analytics capabilities with automation workflows and user surveys, built atop the leading cloud computing platform in the market for unlimited scalability. The Qrvey platform provides all the necessary components to enable SaaS providers to:
* Connect to various data sources
* Collect data from users, processes, or machines
* Store, enrich, analyze and visualize data
* Perform automation and workflow tasks
* Leverage machine learning algorithms 

Most importantly, all of Qrvey components can be deployed as a stand-alone application or be embedded into other host applications through the use of Widgets and APIs. 

![fundamentals](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/fundamentals/overview/fundamentals_1.png#thumbnail)


You can learn more about Qrvey architecture and underlying AWS services in the <a href="">Qrvey Architecture Overview</a> article.

## Installation And Upgrades
Qrvey is deployed to your AWS environment enabling you to keep the Qrvey system within your desired AWS region and VPC. However, there are instances where certain AWS regions may not have a service available required by the Qrvey system. 

Refer to the <a href="">Cloud Engineering Guide</a> section to learn more about the prerequisites, as well as the process of installing Qrvey for the first time, subsequent upgrades, and more.

## Installed Products
Every time an instance of Qrvey is deployed within an AWS account, two products with distinct user interfaces and functions are installed: **Qrvey Composer** and **Admin Center**. 


Qrvey Composer is the product that is used by primary users to create datasets, visualizations and dashboards that can be created, among many other features and functionalities. These pieces of content are then “published” to be used by tenants. 

As suggested by its name, the Admin Center can be used to perform administrative tasks such as user and role creation, infrastructure management, the configuration of linked Qrvey Composer, content deployment, and more.

The welcome email that is sent out after installation of an instance contains links and access credentials to both of these products, and a comprehensive user guide for each can be found on this site.

![fundamentals](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/fundamentals/overview/fundamentals_2.png#thumbnail)

## User Personas
Several personas are involved when working with Qrvey. While some individuals may assume multiple roles, the function of each of the following personas is distinct:

### Cloud Engineer
Cloud engineers are in charge of the installation, configuration, upgrades, and monitoring of a Qrvey instance in the AWS cloud. 
Qrvey customers may take full charge of this function, outsource it to Qrvey by taking advantage of our **Managed Infrastructure** service, or do a combination of these two models, performing some functions internally and outsourcing others to Qrvey.
If you wish to take charge of cloud ops of your instance please see the articles under the <a href="">Cloud Engineering Guide section</a> of this site. 


Please contact your account manager at Qrvey to get more information about the **Managed Infrastructure** service. 

### Platform Architect
Before starting any project with Qrvey, essential decisions about it have to be made. Decisions like whether or not the end product is going to serve multiple tenants or a single one, whether to commingle data or have each tenant’s data reside in separate datasets, whether to use datasets or dataset views, and many more, have to be made by the platform architect.
A sample New Project Profile and other articles to help platform architects come up with the appropriate design of their systems can be found under the <a href="">Platform Architecture Guide section</a>.

### Data Architect
Data is the backbone of analytics and has to be designed carefully and with a good understanding of the various data concepts that are available in Qrvey. From deciding the load and refresh mechanism and schedule, to augmenting the data with transformations and geolocation groups, all data-related functions have to be managed by a data architect. Many articles on this site are dedicated to all things data and a majority of those can be found in the <a href="">Data Management In Qrvey </a>section.

### Primary Composer
Most use cases of the Qrvey platform call for delivering analytic insight through carefully-selected visualizations. Users who are charged with this task need a good understanding of data and analysis and be able to determine how to best convey a message through the various charts and visual components that are available in Qrvey. A large portion of the articles under Qrvey Composer User Guide explain how this can be achieved within the platform.

### Platform Developer
Knowledge of web programming and popular frameworks is needed if any of the Qrvey widgets need to be embedded in a host/wrapper application that is used by tenants of the system, or features of the Qrvey platform need to be tapped into programmatically (using APIs). 
Developers can find relevant guides and documentation in the <a href="">Embedding Guides</a> section of this site. 

## Platform Administrator
Managing users, authentication and authorization tasks, as well as infrastructure management and other platform-wide configurations, are performed by a platform administrator through the Admin Center product. Related articles can be found under the <a href="">Admin Center User Guide</a> section.
 
>**Note**: Be sure to browse through our video library where you can find short videos on many of the important functions of the platform. The videos have been grouped by the user persona that they target, but are useful for all primary Qrvey users.

## Getting Started - Continued
Congratulations on getting through this first article! Now you are ready to embark on your journey into the world of delivering analytic insight using Qrvey.

3. Once you have an instance of the platform, follow the steps in the <a href="">Building Your First Analytic App</a> article to get a feel for the platform - again, regardless of your user persona.
4. Browse the <a href="/docs/video-training/building-qrvey-sample/dataset-syncing">short training videos</a> and watch a few that you find useful *for your persona*.
5. Browse the sections of documentation that match your user persona and familiarize yourself with what is available for your reference, when you need it.
6. Plan your first project with Qrvey and let the adventure begin!


</div>