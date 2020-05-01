---
id: version-4.1-admin-sections-deployments
title: Deployments
sidebar_label: Deployments
original_id: admin-sections-deployments
---

<div style="text-align: justify">

## Servers

In this section, admins can add different servers from which they can pull accounts and content or servers that can also be used as destinations when sharing an application. To add a server, the Host URL and API Key are required. Servers can be managed and edited from this section. 

When adding servers, admins can create replacements for all of the Databases and Elasticsearch Indexes. When sharing Datasets, the connection details will be replaced on the recipient side to show the data for the specified database or ES index in the client's server. For Elasticsearch, the URL and Index on the receiving end need to be specified. The Host, Database, User, Password, Table and Schema are needed for Databases. Once replacements have been added to servers, they become available for use on the releases section.

## Releases

Here, admins can create a content package that can be shared to one or multiple client servers. After the first deployment, admins can continue sharing new content and updates to their clients' accounts. It is possible for admins to select all of the components contained within an application to share – for example Datasets and Web Forms containing charts, Pages, Reports, Datalinks and Automated Flows. Admins can also select individual components to share if they don’t want to share the entire application. 

To share applications, admins can create multiple recipient blocks where they select the destination server, the creator account they will pull content from, and set the replacements in multiple ways, depending on the datasets they are going to share. 

Admins can easily choose to use “Default” replacements when adding a server, which will automatically assign the replacements to each client account, or they can select which replacement to use for a specific account. 