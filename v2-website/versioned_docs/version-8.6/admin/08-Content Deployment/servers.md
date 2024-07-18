---
id: deployment-servers 
title: Servers
sidebar_label: Servers
tags: [Solution Architect]
sidebar_position: 2
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

Each instance of the Qrvey platform is considered a “server”. A server includes Qrvey Composer, Qrvey Admin Center, the ElasticSearch cluster, the users of the instance, and all content and related metadata. 

Servers are identified by the base URL for the Qrvey instance. For example, the base URL of a Qrvey instance looks something like `https://abcde.qrveyapp.com`. In this example, the Qrvey instance can be uniquely identified by its five character subdomain `abcde`. Each Qrvey instance is referred to as a “server” within Content Deployment, but this term is also synonymous with “environment”.

The first step in the Content Deployment process is to create connections to the servers that you wish to use. Each connection is also called a “Server” in the Qrvey Admin user interface, and these servers are displayed on the Server tab of the Content Deployment feature. Once a connection is established, you can use (and re-use) it in the Content Deployment process.

> **Before You Begin:** Obtain your unique API key. It was provided in the welcome email that your organization received when your Qrvey instance was created.

## Create a Server
1. In Qrvey Admin Center, click the **Content Deployment** icon in the left-side menu and display the **Server** tab. 
2. Click **Add Server**. The Add Server dialog displays. 
3. Enter the following information in the fields provided:
    * **Server Name** – User-defined name of the server. 
    * **Description** – User-defined description to help identify the server. 
    * **URL** – The base URL of the Qrvey instance. 
    * **API key** – The unique API key that was provided to the organization when their Qrvey environment was initially set up.  
4. Click **Save** – The new server displays in the list. 

## Edit a Server
To edit the details of an existing server, click its corresponding three-dot menu in the server list and click **Edit**. 

## Delete a Server
To delete an existing server from the server list, click its corresponding three-dot menu in the server list and click **Delete**. This will delete the connection to the server, but it will not affect the actual environment. 

>**Note**: You cannot delete a server if a package is associated with the server. 

</div>