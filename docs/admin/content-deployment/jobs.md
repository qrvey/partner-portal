---
id: jobs 
title: Deployment Jobs
sidebar_label: Deployment Jobs
---

<div style={{textAlign: "justify"}}>

Deployment Jobs consist of “blocks” of instructions, with each block configuring the deployment of **one Definition** to **any number of users** on **one destination Server**. That means that you can have one Deployment Job deploy multiple applications to as many users as necessary, on multiple environments. Jobs require at least one block to be considered complete.

To start the process of defining a new Deployment Job click on the **Create Job** button and give your Job any name and optional description. Choose a Deployment Definition, a destination Server, and any recipient users that you want to deploy the selected Definition to. You may select all users to receive the application in the Definition.

>**Note 1**: If you want to give access to an application to all users from one organization, in one environment, the better option may be making the application public, rather than deploying it to all users. It is important to note that the application will be replicated into copies of the original in the second case. 

>**Note 2**: If you would like to deploy one application to several destination Servers, you need to create several blocks for the Job, one for each Server.

You can see the details of what is included in the Deployment Definition, by clicking on the **Details** link in the section that appears once the block information has been entered.

![content_deploy_guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/cd_guide11.png#thumbnail)


If any tokens have been used in the Definition - whether Parameter or Content - the token(s) have to be configured for all users before the Job can be run. 

Once you are satisfied with your Job definition, you can choose to run it right away, by clicking on the **Deploy** button or do that at a later time. Note that a Deployment Job cannot be modified once it’s been deployed. 

>**Note**: You may continue your work in other parts of the product while a Job is running.

All of the Deployment Jobs are listed in a table, along with their creation date, last run time, and status. You can open an existing Job to view, run, or modify it (if not run yet), from the **Edit** command on the three-dot menu.


</div>