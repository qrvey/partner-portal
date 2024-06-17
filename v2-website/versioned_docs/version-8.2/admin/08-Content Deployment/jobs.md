---
id: deployment-jobs 
title: Deployment Jobs
sidebar_label: Deployment Jobs
tags: [Solution Architect]
sidebar_position: 5
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

A Deployment Job executes the type of deployment specified by one or more deployment definitions against one or more target servers. Deployment jobs consist of “blocks” of instructions, with each block configuring the deployment of one deployment definition to any number of users on one destination server. That means that you can have one Deployment Job deploy multiple applications to as many users as necessary, on multiple environments. Deployment jobs require at least one block.
  

## Before you begin
* Verify that the desired deployment definition has been created. For more information, see [Deployment Definitions](../08-Content%20Deployment/definitions.md). 
* If you intend to give access to an application to all users from one organization, in the same environment, consider making the application public instead of deploying it to all users. This prevents the application from being replicated into copies of the original.

## Create a deployment job
1. In Qrvey Admin, click the Content Deployment icon in the left-side menu and display the **Deployment Jobs** tab. 
2. Click **Create Job**. The Deployment Job Description page displays. 
3. Enter a name and description in the fields provided.
4. Click in the empty block. The block updates to display new fields related to the block. 
5. For each block that you wish to add, perform the following:
    * Click the **Select Definition** drop-down and select a deployment definition
    * Click the **Server** drop-down and select the server to which to deploy. 
    * Click the **Users** drop-down and select the users to receive the application. 
  The page updates to display details of what is included in the deployment definition. 
6. To view additional details, click the **Details** link. 
7. Configure content tokens. See "Using content tokens" in [Deployment Definition](../08-Content%20Deployment/definitions.md). 
8. Configure parameter tokens. See "Using parameter tokens" in [Deployment Definition](../08-Content%20Deployment/definitions.md).
9. To add a new block, click Add Block and repeat the process described above.  
  > **Note**: To deploy one application to several destination servers, create a block for each server. 
10. To review the details of a section of the deployment definition, click its **Details** link. 

## Run a deployment job
1. In Qrvey Admin, click the **Content Deployment** icon in the left-side menu and display the **Deployment Jobs** tab. 
2. Locate the job that you want to deploy in the list, click its three-dot menu, and click **Edit**. 
3. Configure content tokens, if necessary. See "Using content tokens". 
4. Configure parameter tokens, if necessary. See "Using parameter tokens".
5. To review the details of a section of the deployment definition, click its **Details** link. 
6. Click Deploy. A dialog displays providing options for handling failures. 
7. Select one of the options provided, and then click **OK**:
    * Skip the installation for the user that failed and continue installing the remaining users
    * Deploy anyway for that user despite the broken or faulty assets
  The deployment runs. 
  > **Note**: You cannot modify a deployment job once it has been executed. 


## Delete a deployment job
To delete an existing deployment job, click its corresponding three-dot menu in the deployment job list and click **Delete**. 



</div>