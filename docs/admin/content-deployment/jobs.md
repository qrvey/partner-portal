---
id: jobs 
title: Deployment Jobs
sidebar_label: Deployment Jobs
---

<div style={{textAlign: "justify"}}>

Deployment Jobs consist of “blocks” of instructions, with each block configuring the deployment of **one Definition** to **any number of users** on **one destination Server**. That means that you can have one Deployment Job deploy multiple applications to as many users as necessary, on multiple environments. Jobs require at least one block to be considered complete.

Access the **Deployment Jobs** page by clicking on the command from the top menu bar. All of the Deployment Jobs are listed in a table, along with their creation date, last run time, and status. You can open an existing Job to view, run, or modify it (if not run yet), from the **Edit** command on the three-dot menu. You can also delete an existing job from the same menu.

To start the process of defining a new Deployment Job click on the **Create Job** button and give your Job any name and optional description. Choose a Deployment Definition, a destination Server, and any recipient users that you want to deploy the selected Definition to. You may select all users to receive the application in the Definition.

>**Note 1**: If you want to give access to an application to all users from one organization, in one environment, the better option may be making the application public, rather than deploying it to all users. It is important to note that the application will be replicated into copies of the original in the second case. 

>**Note 2**: If you would like to deploy one application to several destination Servers, you need to create several blocks for the Job, one for each Server.

You can see the details of what is included in the Deployment Definition, by clicking on the **Details** link in the section that appears once the block information has been entered.

![deployment-jobs](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content-Deployment/Jobs/job1.png#thumbnail)

If any tokens have been used in the Definition - whether Parameter or Content - the token(s) have to be configured (their values have to be determined for all instances to be deployed) before the Job can be run. If present, these tokens will be listed under the **Definition Summary** section.

![deployment-jobs](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content-Deployment/Jobs/job2.png#thumbnail)



To configure the Content Tokens, which are automatically assigned to any object that has been selected to be updated, click on the **Configure** link to the right of each token to choose the matching object on the target instance. The product will offer the appropriate configuration dialog depending on the object that has to be picked. Also, if an object is required before the other objects can be configured, the **Configure** links for the later objects are disabled. If the job is only for deploying new content there will be no Content Tokens to configure.
In the example used for this article (see the images), we are updating an application for two users. First, we have to decide which target application of each user is going to be updated. All of the other objects, such as the connections, datasets, etc. depend on the selected target application and have to be configured after the application token has been configured.

![deployment-jobs](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content-Deployment/Jobs/job3.png#thumbnail)

Configuring Parameter Tokens, which are user-defined parameters to replace the values of any selected properties, is quite similar to configuring the Content Tokens, except these values can be set in bulk for any number of users, if needed. To configure any Parameter Token click on the **Configure** link to the right of the token to open the configuration dialog. You may type the value of the parameter for each user next to their username. If you want to set it to the same value for multiple users, simply select those users, click on the **Bulk Edition** link on top, and enter the common value in the input box and apply your changes. You may repeat this process until the value of the parameter has been set for all of the users. 

![deployment-jobs](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content-Deployment/Jobs/job4.png#thumbnail)


Finally, you can review the values of all tokens that are set for each user by clicking the **Details** link to the right of each username, in the Users section of the page.

![deployment-jobs](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content-Deployment/Jobs/job5.png#thumbnail)

You can add more blocks and repeat this process if you want to deploy multiple definitions or choose different destination servers for the deployment. 

Once you are satisfied with your Job definition, you can choose to run it right away, by clicking on the **Deploy** button on the top right corner of the page or do that at a later time. Note that a Deployment Job cannot be modified once it’s been deployed. 

>**Note**: You may continue your work in other parts of the product while a Job is running.




</div>