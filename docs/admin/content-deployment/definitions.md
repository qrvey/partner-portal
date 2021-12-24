---
id: definitions 
title: Deployment Definitions
sidebar_label: Deployment Definitions
---

<div style={{textAlign: "justify"}}>

A Deployment Definition is a set of instructions to create or update an application and does not contain any information about the destination(s) or recipient(s) of that application. One or more of these Definitions can be used later in a Deployment Job, to determine where and to whom the destination application is deployed. To create a new Deployment Definition, click on the **Create Definition** button. 

The options of a Deployment Definition depend on whether it is going to be used to create a new application or to update an existing app. So that is the first decision to be made.

## Definition for Creating a New Application
Select the option to create a new application from the **Application** dropdown list. In the rare case that you may want to create an empty shell of an application, without using a Package as the base, you can give your new application a name and an optional description and you are done.

![content_deploy_guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/cd_guide5.png#thumbnail)

If using a Package for the definition, pick the Package and the desired Version from the presented dropdown lists. At this point, the application asks you if you want to use your entered name and description, or prefer to use the name and description from the selected Version. Pick the option that you like. 
Click on the **Select Content** button to choose the content that you want to include in the Definition. You can select **Baseline** to include all the content in the application, or select individual charts, pages, datasets or other content. 

![content_deploy_guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/cd_guide6.png#thumbnail-40)


Once done, click **OK** and the product will populate each of the sections under Package with your selected content, for further, optional customization. All of the dependencies of your selections will also be included to ensure the proper outcome. Each of the sections can be expanded to reveal all of their properties, which can be customized to match your needs. For example, a connection’s host, name, and credentials can be changed to that of your intended deployment location. Page name has been changed in the image below.

![content_deploy_guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/cd_guide7.png#thumbnail)


Datasets have an additional switch that allows you to choose if you want the data to be loaded, too, or the dataset to be created and not loaded. The default value for new datasets is to load data. Definitions are auto-saved and can be used in a Deployment Job immediately, or at a later time.

>**Note**: The checkbox to **Show Content ID** is there to help developers who may want to use APIs to create Deployment Jobs, find those items easily.

### Using Parameter Tokens to Create Different Deployed Outcome
Depending on the objectives of your deployment effort there may be occasions when you wish to copy the same application to multiple instances where some of the options of the destination apps differ from each other. One common example is when you want to have different connection strings in each destination application, depending on the recipient user or tenant. 
Qrvey supports the use of user-defined variables called **Parameter Tokens** for this use case. 

>**Definition: Parameter Tokens** are user-defined parameters that can replace any value and be configured for each recipient at the time of creating the Deployment Job. Parameter Tokens have the syntax of {{tokenName}}. 

You can replace any value with a Parameter Token by typing your own token name inside two curly brackets. Note that as soon as you type in the first curly bracket the system will suggest a few names for the token, based on the context that you are in. These names are just suggestions and can be changed to any name that you prefer. For example, if the source app uses a connection to a database that is used for development and testing, and the copied destinations apps have to be each connected to a different production database, you can replace the host URL of the source application with a Parameter Token like {{hostURL}}. You may also accept one of the suggested token names, such as {{connection.host_url}}. The same process can be repeated to set the username and password of the connection to a token. We will discuss how the replacements for these tokens will be configured in the Deployment Jobs section. 

![content_deploy_guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/cd_guide8.png#thumbnail)

## Definition for Updating an Existing Application
You may need to update an existing application to either add new content or change some content that was previously deployed. In order to create such a Definition select the option to update [an existing] application from the **Application** dropdown list, and the desired package and version that you want to use for the update from the **Package** and **Package Version** dropdown lists, respectively. If you wish to update the application name and/or description, you have to check the desired option(s) from the dropdown list labeled “Select Fields to Update”. 

![content_deploy_guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/cd_guide9.png#thumbnail)

Click on the **Select Content** button to see the content of the version that you have selected. You can optionally choose any of the other versions of the same Package from the **Compare to** dropdown to find the differences between the two versions. If the destination application or applications have been created from a Version of a Package, this can help in deciding what content needs to be added or updated. 

 ![content_deploy_guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Content+Deployment+Guide/cd_guide10.png#thumbnail-40)


Once you have selected the content that you want to update click the **OK** button and the product will populate each of the sections under Package with your selected content for further, optional customization. All of the dependencies of your selections will also be included to ensure proper outcome. Each of the sections can be expanded to reveal all of their properties, which can be customized to match your needs. 

Note that in creating a Definition, you don’t pick a specific application to update. That decision is made in the Deployment Job. The reason for this is that you may use one Definition to update multiple destination applications for any number of users. In order to facilitate this option all pieces of content, starting from the application itself, are assigned an automatic **Content Token** that they are identified with. Just like Parameter Tokens, these tokens are formatted like {{token}}. However, these tokens are assigned by the system and apply to objects, rather than values. In other words, they identify things like “application” and “connection”, rather than “application name and “connection’s username”. We will discuss how the replacements for these tokens will be configured in the Deployment Jobs section. 


</div>