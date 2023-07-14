---
id: deployment-definitions 
title: Deployment Definitions
sidebar_label: Deployment Definitions
tags: [Solution Architect]
sidebar_position: 4
displayed_sidebar: solution-architects
---

<div style={{textAlign: "justify"}}>

A Deployment Definition is a set of instructions for a deployment job. It defines the package version to use, which content from the package to include, and whether any of the content has to be modified during deployment. You can configure the deployment definition to create a new application or to update an existing application.  

The deployment definition does not specify the target application. That information is in the deployment job. This separation enables you to use one deployment definition to update multiple target applications for any number of users. To take advantage of this capability, you must use parameter tokens, described next. 

## Using Parameter Tokens
In some cases, you may want to copy the same application to multiple instances but with different options. For example, you may want to have different connection strings in each destination application, depending on the recipient user or tenant. Qrvey supports user-defined variables called Parameter Tokens for this situation.

Parameter tokens are user-defined parameters that can replace any value and be configured for each recipient at the time of creating the deployment job. Parameter tokens use the following syntax: 

```{{tokenName}}```

You can replace any value with a parameter token by typing your own token name inside two curly brackets. Note that as soon as you type in the first curly bracket the system will suggest a few names for the token, based on the context that you are in. These names are just suggestions and can be changed to any name that you prefer. For example, if the source application uses a connection to a database that is used for development and testing, and the copied destinations applications have to be each connected to a different production database, you can replace the host URL of the source application with a Parameter Token like `{{hostURL}}`. You may also accept one of the suggested token names, such as `{{connection.host_url}}`. The same process can be repeated to set the username and password of the connection to a token. 

### Parameter token example
In this example, we want to deploy an application that was created in a staging environment into several tenant accounts in a production environment. The source application is connected to a sample database that is used for development purposes, but each destination environment has its own database. To achieve this goal, replace the following attributes of the database connection with parameter tokens, such as:
* Host URL: `{{host-url}}`
* User Name: `{{db-username}}`
* Password: `{{prodPassword}}` 

Later, when this deployment definition is used in a deployment job, the deployment job will resolve the appropriate values for each token and create the database connections. 

### Configure parameter tokens
1. In the deployment job, display the Deployment Definition Summary section. 
2. Locate the parameter token you wish to configure, and click its **Configure** link. A configuration dialog displays. 
3. Enter a value for each parameter token. To use the same value for multiple users, select those users, click the **Bulk Edit** link, and enter the common value in the box provided. 
4. When finished, click **OK**. 
5. To review the details for a user, click its **Details** link. 

## Using Content Tokens
Content Tokens are system-generated parameters that are automatically created for values that need to be resolved for each recipient. They are created in deployment definitions, and they are resolved when a deployment job runs. Just like Parameter Tokens, these tokens are formatted like `{{token}}`. However, these tokens are assigned by the system and apply to objects, rather than values. In other words, they identify things like “application” and “connection”, rather than “application name” and “connection’s username”.

For example, if a deployment definition is created to update an application, the system assigns the application the content token, `{{ user.application }}`. Later, in the deployment job, if multiple users are picked as recipients of the deployed application, the system resolves the content token for each user. This enables the deployment job to update the application for each of the recipient users.

After determining which target application of each user is going to be updated, all of the other objects which depend on the selected target application, such as the connections, datasets, etc., have to be configured.

### Configure content tokens
1. In the deployment job, display the Deployment Definition Summary section. 
2. Locate the content token you wish to configure, and click its **Configure** link. A configuration dialog displays. 
  > **Note**: If a Configuration link is disabled, one or more of its prerequisite content tokens has not been configured yet. 
  > **Note**: If a deployment job only deploys new content, there are no content tokens to configure. 
3. Configure the destination content using the options provided. 
4. When finished, click **OK**.

## Create a Deployment Definition

### Before you begin
Verify that the desired package version has been created. For more information, see [Packages](../08-Content%20Deployment/packages-and-versions.md). 

### Create a deployment definition that creates a new application
1. In Qrvey Admin Center, click the **Content Deployment** icon in the left-side menu and display the Deployment Definitions tab. 
2. Click **Create Definition**. The Deployment Definition Description page displays. 
3. At the top of the page, enter a name and description in the fields provided.
4. Click the **Package** drop-down and select the package to use in this deployment. 
5. Click the **Package Version** drop-down and select the package version to deploy. 
6. Select the content to deploy:
    * Click **Select Content**. The Select Content dialog displays. 
    * Select the individual items to include in the deployment. To include all the content in the application, select **Baseline (all content)**. 
    * Click **OK**. The page updates with the dependencies of each of your selections. 
    >**NOTE**: If you select content that has dependencies, the system automatically includes them in the deployment. For example, if you select a dashboard, but you do not select the datasets that power the charts on that dashboard, the system will automatically include that dataset.  
7. (Optional) If you intend to use APIs for Content Deployment, select **Show Content ID**. You will need this information to call the API.
8. Leave **Create New Application** selected. 
9. Enter a name in the **New Application Name** field. 
10. (Optional) Enter a description in the **Application Description** field. 
11. Expand the selections to reveal all their properties. Modify the selections as needed. 
12. For datasets, select whether to load the data or to create the dataset without the data. The default setting is to load the data. 
13. Insert parameter tokens as needed. For more information, see "Using Parameter Tokens" above. 


 
### Create a deployment definition that updates an existing application
1. In Qrvey Admin, click the **Content Deployment** icon in the left-side menu and display the Deployment Definitions tab. 
2. Click **Create Definition**. The Deployment Definition Description page displays. 
3. At the top of the page, enter a name and description in the fields provided.
4. Click the **Package** drop-down and select the package to use in this deployment. 
5. Click the **Package Version** drop-down and select the package version to deploy. 
6. Select the content to deploy:
    * Click **Select Content**. The Select Content dialog displays. 
    * Select the individual items to including in the deployment. To include all the content in the application, select **Baseline (all content)**. 
    * Click **OK**. The page updates with the dependencies of each of your selections.
7. (Optional) If you intend to use APIs for Content Deployment, select **Show Content ID**. You will need this information to call the API.
8. Select **Update an Existing Application**. The page updates to display the Select Fields to Update field. 
9. Click the Select Fields to Update drop-down and select one of the following options:
    * **Select All**
    * **Application Name**. If selected, a field displays for you to enter a name. 
    * **Application Description**. If selected, a field displays for you to enter a description. 
10. Expand the selections to reveal all their properties. Modify the selections as needed. 
11. For datasets, select whether to load the data or to create the dataset without the data. The default setting is to load the data. 
12. Insert parameter tokens as needed. For more information, see "Using Parameter Tokens" above. 


>**Note**: An `unknown` label may indicate a new connection type that has not yet been updated in the Content Deployment interface. The new connection type will still be deployed, set up, and used properly.   



### Delete a deployment definition
To delete an existing deployment definition from the list, click its corresponding three-dot menu in the list and click **Delete**. Note that you cannot delete a deployment definition if it is associated with a deployment job. 



</div>