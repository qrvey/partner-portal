---
id: servers 
title: Servers
sidebar_label: Servers
---

<div style={{textAlign: "justify"}}>

## Creating and Managing Servers
In order to create a deployment package, a connection to the Server where the source application exists has to be established.

Clicking on the **Servers** option in the top navigation bar takes you to the Servers page, where a list of all of the registered Servers is shown in a table, along with some information about them. If the Server that you are looking for is not listed, click on the <img alt="add" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/add.png#thumbnail-20"/>  button to add it.
In the dialog that appears, Server Name (required) and Description (optional) are for information purposes only and intended to help you identify the target server. For example, if you have a “development”, a “staging”, and a “production” environment, you could use those terms as the names of each of the associated Servers. The URL and the API key (both required fields) have to be respectively set to the Qrvey Composer URL and API key values that have been shared with you in the Welcome Email that you received at the time that your environment was set up.

>**Note**: Refer to the <a href="/docs/faqs/faqs-intro/" target="_blank">FAQs</a> if you don’t know where to find this information.
 
![content_deploy_guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/cd_guide1.png#thumbnail-40)

Once all of the required fields have been filled, you can save the new server to the list of accessible servers for later use in Content Deployment.
The server information can be modified by choosing the Edit option from the three-dot menu in the servers list.

![content_deploy_guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/cd_guide2.png#thumbnail-20)


Also, the connection to the server may be removed by choosing the Delete option from the aforementioned menu. 

To modify the information for a server, click on its name where it appears in the table. This opens the same dialog, allowing you to change any piece of information and save it back.

The search box on the top-right corner of the page can be used to look for a server by typing any part of its name. Search is case-insensitive.

>**Note 1**: Deleting a Server merely removes the connection that is used for Content Deployment and does not affect the actual environment. The same connection can be added back at any time.

>**Note 2**: Once Content Deployment Packages, Definitions, and Jobs have been created for a Server, they can no longer be deleted unless those dependencies are deleted first.

</div>