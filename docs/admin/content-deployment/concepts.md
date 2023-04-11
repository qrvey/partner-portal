---
id: concepts
title: Content Deployment Concepts
sidebar_label: Content Deployment Concepts
---

<div style={{textAlign: "justify"}}>

## Introduction
Content Deployment is the process that can be used by administrators to copy content from one application to another, in the same environment or a different one. Content Deployment is a powerful tool for multi-tenant instances. Some examples of where this feature may be used are:
* Copying an application that has been created in a staging environment to the production environment.
* Copying some content, or an entire application created by one user to other users’ accounts.
* Releasing the new additions to a baseline application to multiple tenants of the system.
* Creating an empty shell of an application under any user account in any instance of Qrvey.


To open the Content Deployment page in Qrvey Admin Center, click the **Content Deployment** icon in the left-hand navigation panel:  
<img alt="Content Deployment Icond" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/icon-admin-content-deployment.png"/>

The Content Deployment page displays, with the following options in the top menu:

![content_deploy_guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/cd_guide.png#thumbnail)

For all of these forms of deployment the following must exist, in the same order:
1. The source and destination instances have to be known and be accessible (<a href="#server">Servers</a>). 
2. A snapshot copy of the source application has to exist (<a href="#packages-and-versions">Packages and Versions</a>).
3. The content to be copied has to be selected and what has to be changed during deployment has to be marked (<a href="#deployment-definition">Deployment Definition</a> and <a href="#parameter-tokens">Tokens</a>)
4. Target recipient users and the destination instances have to be identified and the value of all marked tokens have to be decided for each recipient or group of recipients (<a href="#deployment-job">Deployment Job</a>)
5. The deployment process has to be started (running a Deployment Job)


This article covers several concepts related to Content Deployment that are used in subsequent articles related to the feature.


## Concepts In Content Deployment
The Content Deployment feature makes use of several industry-standard terms and concepts. This section provides a list of those terms and concepts with detailed explanations for each one.

### Server
Each instance of the Qrvey platform is considered a “Server”. Servers are identified by the URL of their Qrvey Composer instance, but the term is synonymous with “environment” and it includes the entire set of products that make up the platform: Qrvey Composer, Admin Center, the ElasticSearch cluster, all of the users of the instance, the content that they have created, and the related metadata. In the process of Content Deployment, specific content from one or more applications that have been created on one “Server” are selected and copied to another application on the target server.
Access to the Servers is restricted to the administrators that are created with the proper permissions in AWS. Therefore, access to the Servers utilizing server access keys is required to complete the deployment configuration. The process of adding a Server to the list of accessible Servers is explained in a later [article](../content-deployment/servers.md). 

 Once Servers are configured, they can be used for all future deployments and don’t need to be visited again. 

### Packages And Versions
A Package is essentially a snapshot of a selected application with all of its content and dependencies (connection(s), dataset(s), charts, workflows, etc.). 
Different “Versions” of this snapshot can be taken over time, as the source application changes and one of these “Package Versions” is going to be used in the Definition of a Deployment Job. 
The main reason behind this concept is that it gives users the ability to “back up” their source application at any given time and be confident that everything about that snapshot is captured within the Package and can be used to deploy any piece of content at a later time - even if the source application has been changed or even removed.
The process of capturing this snapshot is explained in a later [article](../content-deployment/packages-and-versions.md).

> **Note**: The snapshot does not include a backup of data, but rather the metadata about all of the content, including datasets and other containers of data.

### Deployment Definition 
A Deployment Definition is basically a set of instructions for a deployment job: What Package Version to use, which pieces of content to include in the Job, and whether any of the content has to be modified during deployment. These modifications may include marking connections that will be different on the destination server, changing the name of a chart, etc.

Note that Deployment Definitions do not include any information about the destination. This allows the same Definition to be deployed to multiple Servers and recipient users, with different parameters.
A Deployment Definition is always about a single Version of one Package and therefore provides deployment instructions for the contents of one source application.

More on the Deployment Definitions can be found in this [article](../content-deployment/definitions.md).

### Deployment Job
The Deployment Job is the execution process of what is defined in the Deployment Definition(s) selected for the Job. In addition to the Deployment Definition, blocks of Servers and recipients are selected and values are set for the variable parameters in the Definition (if they exist).
A Deployment Job can be as small or as elaborate as needed and it has the potential to deploy one or more Definition(s) to one or more Server(s) and recipients, applying different parameters to each.
Deployment Jobs are explained in detail [here](../content-deployment/jobs.md).

### Content Tokens

 Content Tokens are system-generated parameters that are automatically created in Deployment Definitions for values that need to be resolved for each recipient, at the time that a Deployment Job runs. For example, if a Deployment Definition is created to update a target application, that unknown target application is assigned the Content Token {{ user.application }}. Later, when this Definition is used in a Deployment Job and multiple users are picked as recipients of the deployed application, the token has to be resolved for each user so the system can decide which application to update for each of the recipient users. Content Tokens are discussed in more detail in the [Deployment Definition](../content-deployment/definitions.md) and <[Deployment Job](../content-deployment/definitions.md) articles.

### Parameter Tokens
Parameter Tokens are user-defined parameters that work very similar to Content Tokens but are defined by the administrator user who is setting up the Deployment Definition. Much like their system-generated counterparts, Parameter Tokens can be used to turn a constant value into a variable one so it can be resolved at the time that the Deployment Job is created. 
For example, a Deployment Job may be set up to replicate a single sample application that was created in a staging environment into several tenant accounts in a production environment. In this case, the source application is likely connected to a sample database that is used for development or QA purposes but each of the destination copies have to be connected to a separate database, one per tenant. To achieve this goal you may replace the following attributes of the database connection with your chosen Parameter Tokens like:
* Host URL: {{host-url}}
* User Name: {{db-username}}
* Password: {{prodPassword}}
Later, when this Definition is used in a Deployment Job and multiple users are picked as recipients of the deployed application, the tokens have to be resolved for each recipient user, thereby setting up a different database connection for each copy of the application. Parameter Tokens are discussed in more detail in the [Deployment Definition](../content-deployment/definitions.md) and [Deployment Job](../content-deployment/definitions.md) articles.

>**Note**: Aside from the fact that Content Tokens are automatically generated and assigned by the system and Parameter Tokens are user-defined, the main difference between the two is that Content Tokens are assigned to **objects**, while Parameter Tokens are assigned to **values**. When a decision has to be made between “this chart” or “that chart”, the chart object is assigned a Content Token. But when the value of a password has to be replaced with another value, a Parameter Token can be used.


</div>