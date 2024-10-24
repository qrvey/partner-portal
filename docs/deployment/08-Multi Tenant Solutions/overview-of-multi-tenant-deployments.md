---
id: overview-of-multi-tenant-deployments
title: Intro to Multi-tenant Deployments
sidebar_label: Intro to Multi-tenant Deployments
tags: [Solution Architect]
sidebar_position: 1
displayed_sidebar: getting-started
---


SaaS organizations that want to embed self-service analytics within their core applications to support a multi-tenant deployment should think about the following considerations:

* Security Implementation
* Dataset Architecture
* Content Management
* Deployment Methodology

**Security Implementation** considerations for multi-tenancy deployments include how users will be authenticated and what they will be able to see and do.  Some of the mechanisms and platform features that facilitate authentication and authorization include Single Sign-On (SSO), Record Level Security (RLS), Column Level Security (CLS), and asset permissions.

**Dataset Architecture** considerations for multi-tenancy deployments include deciding whether tenant data can be commingled or whether it must be segregated; deciding how and where datasets can be shared to avoid data duplication; and how to handle tenant custom columns as well as tenant custom datasets.

**Content Management** considerations include how to silo tenant content and assets so that they are inaccessible to other tenant organizations; how you can create baseline content that is shared and accessible to users within each tenant organization; and how content can be managed based on a tiered subscription model.

**Deployment Methodology** considerations include how to promote content between different types of environments; how to seamlessly integrate with your existing DevOps deployment processes; and how to onboard, offboard, and syncronize tenant workspaces.


## Security Implementation

Your security implementation for embedded analytics must consider how users will be authenticated within Qrvey, as well as how the platform will know what the current logged-in user can see and do.  First, let us consider the authentication mechanism, and also recognize that there are typically two fundamental types of users accessing Qrvey: internal users and external users.  An **internal user** is typically an employee of the SaaS organization (i.e. Qrvey’s direct customer), and an **external user** is typically an employee of the tenant organization (i.e. SaaS organization’s direct customer).  Recognizing the distinction between these two fundamental types of users is important, because these two types of users typically access Qrvey in very different ways.  Internal users may have access to log into Qrvey Composer directly, i.e. outside the context of the SaaS organization’s core application.  External users would access Qrvey components as embedded widgets within the SaaS organization’s core application.  This might mean that internal users could have one authentication mechanism with Qrvey, and external users could have a completely different authentication mechanism with Qrvey. 

>**Note**: For more information on Qrvey users, roles, and personas, see [Introduction to the Qrvey Platform](../getting-started/intro-to-qrvey.md).

Now, let us consider the authorization mechanism, and continue to work within the assumed framework of internal and external users accessing Qrvey.  Since internal users belong to the SaaS organization, authorization may simply come down to hiding the various UIs within Qrvey Composer.  For example, you may have data architects as well as data analysts within your organization.  You could give the data architects access to build datasets, dashboards and automations; but the data analysts would only be able to access dashboards.

External users will access Qrvey embedded components through your core application, and so it’s fairly straightforward to prohibit access to datasets, automations, web forms, etc. by simply choosing not to embed the widgets associated with those platform components.  But authorization mechanisms for external tenant users is typically far more granular than simply hiding an entire UI.  SaaS organizations can control access to the following types of assets for their external tenant users:

* Dashboards
* Charts
* Metrics
* Summaries
* Datasets

For example, an external user with a Viewer role may only be able to access a specific set of dashboards.  An external user with a Builder role may only be able to create charts from a specific set of datasets.  Both of these examples require more granular access control than simply choosing to embed one widget or another.  In addition to controlling access to assets, SaaS organizations can control access to the following types of features/controls:

* Dashboard Navigation Menu
* User Management
* Publishing Controls
* Dashboard Management
* Downloads/Exports
* Filter Panel

For example, you could give some tenant users the ability to apply global dashboard filters, export to PDF and apply data filters to a single chart, while other tenant users get a vastly more simplified experience and have these features hidden from them.  This is just one example but it gives you an idea of how these more granular access controls allow you to define different user personas for your tenant organizations.
  

## Dataset Architecture

The first and most consequential decision to make with respect to the dataset architecture for a multi-tenancy deployment is whether your tenant organizations’ data can be commingled.  A commingled dataset will typically have at least one column to filter the data by when a user from a tenant organization accesses it.  A segregated dataset, by contrast, would not need a dedicated column for “Tenant ID”; segregated tenant datasets would have matching identical schemas and only contain the data for one specific tenant.  It’s important to point out that there are really two types of segregated dataset models:

* Single Instance / Dedicated Datasets:  Tenants share the same Qrvey instance but have dedicated datasets.
* Dedicated Instance:  Tenants have their own dedicated instance of Qrvey.

In the Single Instance model, tenants would have their own dedicated datasets but would effectively share a single Elasticsearch instance.  Technically, each dataset is associated with a specific Elasticsearch index.  For the other type of model, a tenant would have their own dedicated Qrvey instance, and so that would mean that they also have their own dedicated Elasticsearch cluster.  Qrvey supports multiple instances deployed within the same AWS account; however, each Qrvey instance must be deployed to a different AWS region.

If you are choosing the commingled dataset architecture, you will want to ensure that there is at least one column present within all datasets that will allow you to filter records out for each tenant.  Additionally, you will want to ensure that data does not get needlessly duplicated as you build out the solution.  Finally, even in a commingled dataset model, you may need to create tenant specific datasets or even tenant specific columns within a shared dataset.


## Content Management

SaaS organizations embedding self-service analytics are typically thinking about the following requirements with respect to both the content that users can access and the content that users can create:

* Tenant Workspaces
* Baseline/Shared Content
* Subscription Tiered Access

First and foremost, tenant users with a builder persona will be creating lots of content.  The most common types of content these users will create are charts, metrics, dashboards and datasets.  SaaS organizations will need to ensure that content created by one tenant organization is inaccessible to users from other tenant organizations.  The best way to meet this requirement is to design tenant workspaces into your solution architecture.  
Baseline content would include any charts and dashboards built by analysts within the SaaS organization that are generic and intended for consumption by all tenants.  You can choose to let users customize this baseline content for their own purposes.  Tenant users with builder privileges can even use baseline dashboards as templates for any new dashboards they create.

Finally, a SaaS organization may want to have a tiered subscription model for embedded self-service analytics.  Exposing or hiding content based on the subscription tier purchased by the tenant is a common type of gating feature.  For example, you can expose a set of dashboards with a higher tiered plan.  You can also expose a set of datasets with higher tiered plans for users to create visualizations from.

 
## Deployment Methodology

SaaS organizations who are application builders will already have established DevOps processes around deployments, updates, upgrades, backups and other maintenance related processes.  DevOps deployment methodology typically defines processes around the following areas:

* Promoting Applications Between Environments
* CI/CD Production Updates
* Application Build Process

You likely already have at least two types of environments for your core application - Dev & Prod.  Most SaaS organizations also include a Staging environment that closely mirrors Production for testing and QA purposes.  The Qrvey [Content Deployment](../admin/08-Content%20Deployment/overview-of-content-deployment.md) feature, available in the Qrvey Admin Center, is designed to promote content between different types of environments.  You can either have Dev, Staging, and Prod environments configured within different regions in the same account, or more likely, each environment is in a separate account within your AWS organization.

Deploying and upgrading your core application is likely a purely automated and programmatic process, requiring no manual intervention at any step.  Since your embedded analytics is effectively integrated with your core application, you should expect that Qrvey Content Deployment facilitates this type of automated deployment without requiring an admin user to log into the Qrvey Admin Center.  

Finally, multi-tenant applications almost always have some form of tenant onboarding process, offboarding process, as well as processes to keep tenant workspaces in sync with the latest updates and content.  Qrvey Content Deployment is designed to support all of these tenant management scenarios.


**See Also:**
* [Multi-tenant Dataset Architecture](./multi-tenant-solution/multi-tenant-dataset-architecture.md)
* [Multi-tenant Security Architecture](./multi-tenant-solution/multi-tenant-security-architecture.md)