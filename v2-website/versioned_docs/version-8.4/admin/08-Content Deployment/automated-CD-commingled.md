---
id: autmated-content-deployment-commingled 
title: Automated Content Deployment - Commingled Data
sidebar_label: Automated Content Deployment (Commingled)
tags: [Solution Architect]
sidebar_position: 6
displayed_sidebar: solution-architects
---

<div style={{textAlign: "justify"}}>

This article describes how to perform an automated deployment of a baseline shared data application and a baseline content application between two Qrvey instances in separate environments. This article assumes a commingled tenant data model. For more information on tenant data models, see [Multi-tenant Dataset Architecture](../../multi-tenant-solution/multi-tenant-dataset-architecture.md).  

## Before You Begin
* All of the API endpoints referenced in this document require you to authenticate with the Qrvey Admin Center API using an encrypted JWT token. When making a call to a Qrvey Admin Center endpoint, you must pass the JWT token in the request header or the request will be denied. For more information, see [Generating Security Tokens](../../software-developer/06-Working%20with%20Qrvey%20APIs/generating-security-tokens.md).
* Verify that you have at least one user account created in the Qrvey Admin Center with “Composer” role permissions. For more information, see [Managing Users of Qrvey Composer](../managing-users.md).

## Prepare Source App(s) for Deployment
Perform the following steps using the [Content Deployment](../08-Content%20Deployment/overview-of-content-deployment.md) feature in the Qrvey Admin Center. Be sure that you are in the **Dev** environment:

1. Create a target server that points to the Dev instance with the Dev API key.  This step will not need to be repeated for all future content deployments.
2. Create a release package with a single version that points to the Master Data App.
3. Create a release package with a single version that points to the Master Content App.
4. Create a deployment definition sourced from the Master Data App release package with the following configuration:
    * `Mode` = Create New Application
    * `Content` = Baseline (i.e. all content)
    * `New Application Name` = Master Data Application
5. Use the following settings for each Connection in your deployment definition:
    * `Host URL = {{connection.host_url}}`
    * `Port = {{connection.port}}`
    * `Username = {{connection.user_name}}`
    * `Password = {{connection.password}}`
    * `Database = {{connection.database}}`
6. Use the following settings for each Dataset in your deployment definition:
    * Select the **Share Data with Everyone** checkbox
    * Select the **Load Data** checkbox
7. Create a deployment definition sourced from the Master Content App release package with the following configuration:
    * `Mode` = Create New Application
    * `Content` = Baseline (i.e. all content)
    * `New Application Name` = Master Content Application

>**Note**:  You will see the shared dataset from the Master Data App added as a dependency to the deployment definition for the Master Content App, but that doesn’t mean that the shared dataset will be deployed again.  Rather, you will map the source of the dataset views to the correct shared datasets in the target environment at the time the deployment job is executed.

Execute the following steps as part of a programmatic routine from the **Dev** environment:

1. Call the [GetAllDeploymentDefinitions()](https://qrvey.stoplight.io/docs/qrvey-api-doc/40cdaed8ecd8b-get-all-deployment-definitions) endpoint.
2. Parse the `items` object array in the response body to find the object with the `name` property that matches `Master Data App`, as well as the object where `name` matches `Master Content App`.
3. Extract the `definitionId` property value from both objects returned in the response, because you will need them for the next API call.
4. Call the [ExportDeploymentDefinition()](https://qrvey.stoplight.io/docs/qrvey-api-doc/e83fd7ad23195-export-deployment-definition) endpoint, passing in the definition ID for the Master Data App deployment definition, making sure to capture the `jobTrackerId` value from the response.
5. Call the [ExportDeploymentDefinition()](https://qrvey.stoplight.io/docs/qrvey-api-doc/e83fd7ad23195-export-deployment-definition) endpoint, passing in the definition ID for the Master Content App deployment definition, making sure to capture the `jobTrackerId` value from the response.
6. Make a call to the [GetJobStatus()](https://qrvey.stoplight.io/docs/qrvey-api-doc/010c3982be464-get-job-status-by-job-tracker-id) endpoint for each of the job tracker IDs.
7. Repeat the previous step until the response returns a URL path to collect both of the ZIP files for the exported deployment definitions.

>**Note**:  The time it takes to export a deployment definition is heavily dependent on the number of content objects selected for deployment.

You should now have two separate ZIP files, one for the Master Data App and the other for the Master Content App.  You should copy the ZIP files to a location that is accessible from the Prod environment before beginning the next set of steps.

## Prepare Target App(s) for Deployment
Execute the following steps as part of a programmatic routine from the **Prod** environment:

1. Call the [CreateServer()](https://qrvey.stoplight.io/docs/qrvey-api-doc/2a028d399e95b-create-server) endpoint and pass in the following request parameters:
    * `name` = any name you want
    * `description` = any description you want
    * `host` = fully qualified URL to this Qrvey instance
    * `apiKey` = your Prod API key
2. Parse the response, extract the value from the `adminserverid` property and save it off somewhere so it can be recalled for future deployments.  *Perform steps 1 and 2 once…and only once*.
3. Call the [GetUploadURL()](https://qrvey.stoplight.io/docs/qrvey-api-doc/76c769bdb3fe5-get-upload-url-definitions) endpoint for deployment definitions and save the `url` and `key` properties from the response.
4. Use the URL provided to make a separate POST request to upload the ZIP file for the Master Data App to the target S3 bucket.
5. Wait for the ZIP file to finish uploading to the target S3 bucket, and then call the [UploadDeploymentDefinition()](https://qrvey.stoplight.io/docs/qrvey-api-doc/7b3389f298ff9-upload-deployment-definition) endpoint, setting the following request parameters:
    * `key` = “key” value from the GetUploadURL() response
    * `definitionName` = any name you want
    * `description` = any description you want that describes the content you are deploying
6. Repeat steps 3 - 5 for the ZIP file associated with the Master Content App. 

>**Note**:  Before you continue, please make sure you have at least one user account created in the Qrvey Admin Center with “Composer” role permissions.

## Deploy the Master Data App
Execute the following steps as part of a programmatic routine from the **Prod** environment:

1. Call the [CreateDeploymentJob()](https://qrvey.stoplight.io/docs/qrvey-api-doc/43d7fa165bb72-create-deployment-job) endpoint, passing in any name and description that you want.
2. Extract the value from the `deploymentJobId` property in the response.
3. Call the [GetAllDeploymentDefinitions()](https://qrvey.stoplight.io/docs/qrvey-api-doc/40cdaed8ecd8b-get-all-deployment-definitions) endpoint.
4. Parse the `items` object array in the response body to find the object with the `name` property that matches `Master Data App`.
5. Extract the `definitionId` property value returned in the response, because you will need it for the next API call.
6. Call the [CreateDeploymentJobBlock()](https://qrvey.stoplight.io/docs/qrvey-api-doc/d5cf25a16aa4c-create-deployment-job-block) endpoint, passing in the following request parameters:
    * `definitionId` = ID of the Master Data App deployment definition
    * `adminServerId` = ID of the target server to deploy the content to  (Prod)
    * `selectAllUsers` = false
7. Extract the `deploymentJobBlockId` value from the response.
8. Call the [GetUserList()](https://qrvey.stoplight.io/docs/qrvey-api-doc/2f4a96d989b65-get-user-list) endpoint, parse the `items` array to find the user metadata for the account that will become the owner of this app, and then extract the value from the corresponding `userid` property.
9. Call the [AddRecipientsToDeploymentJobBlock()](https://qrvey.stoplight.io/docs/qrvey-api-doc/3d9dfa5aab257-add-recipients-to-deployment-job-block) endpoint, using the `deploymentJobId` and `deploymentJobBlockId` as path parameters for calling the endpoint.  Use the following request body JSON:

```json
{ 
 "users": [
   {
     "updateDate": NOW,
     "createDate": NOW,
     "userid": APP_OWNER_USER_ID,
     "parameters": [
       {
         "token": HOST_URL_PARAM_NAME,
         "value": HOST_URL_PARAM_VALUE
       },
       {
         "token": DB_PORT_PARAM_NAME,
         "value": DB_PORT_PARAM_VALUE
       },
       {
         "token": DB_USERNAME_PARAM_NAME,
         "value": DB_USERNAME_PARAM_VALUE
       },
       {
         "token": DB_PASSWORD_PARAM_NAME,
         "value": DB_PASSWORD_PARAM_VALUE
       }, 
       {
         "token": DB_NAME_PARAM_NAME,
         "value": DB_NAME_PARAM_VALUE
       }
     ],
     "status": "PUBLISHED",
     "email": APP_OWNER_USER_EMAIL,
     "deploymentJobBlockId": DEPLOYMENT_JOB_BLOCK_ID
   }
 ]
}
```

10. Make sure you pass values for each of the parameters you created for the shared dataset’s connection information.  You should have at least one parameter for each connection’s host URL, which will need to change when you deploy this app and load the shared datasets.
11. Call the [ExecuteDeploymentJob()](https://qrvey.stoplight.io/docs/qrvey-api-doc/0246facc766fb-execute-deployment-job) endpoint, passing in the value of the `deploymentJobId` as a path parameter to the endpoint.
12. Parse the `jobTrackerId` value from the response.
13. Call the [GetJobStatus()](https://qrvey.stoplight.io/docs/qrvey-api-doc/010c3982be464-get-job-status-by-job-tracker-id) endpoint, passing in the value for the `jobTrackerId` and wait until the `status` property has a value of `CREATED`.  This endpoint returns lots of useful information about the deployment of the content objects.

>**Note**:  You must wait until the Master Data App has finished deploying before continuing with the deployment of the Master Content App.

## Deploy the Master Content App
Execute the following steps as part of a programmatic routine from the **Prod** environment:

1. Call the [CreateDeploymentJob()](https://qrvey.stoplight.io/docs/qrvey-api-doc/43d7fa165bb72-create-deployment-job) endpoint, passing in any name and description that you want.
2. Extract the value from the `deploymentJobId` property in the response.
3. Call the [GetAllDeploymentDefinitions()](https://qrvey.stoplight.io/docs/qrvey-api-doc/40cdaed8ecd8b-get-all-deployment-definitions) endpoint.
4. Parse the `items` object array in the response body to find the object with the `name` property that matches `Master Content App`.
5. Extract the `definitionId` property value returned in the response, because you will need it for the next API call.
6. Call the [CreateDeploymentJobBlock()](https://qrvey.stoplight.io/docs/qrvey-api-doc/d5cf25a16aa4c-create-deployment-job-block) endpoint, passing in the following request parameters:
    * `definitionId` = ID of the Master Content App deployment definition
    * `adminServerId` = ID of the target server to deploy the content to (Prod)
    * `selectAllUsers` = false
7. Extract the `deploymentJobBlockId` value from the response.
8. Call the [GetUserList()](https://qrvey.stoplight.io/docs/qrvey-api-doc/2f4a96d989b65-get-user-list) endpoint, parse the `items` array to find the user metadata for the account that will become the owner of this app, and then extract the value from the corresponding `userid` property.
9. Call the [GetAllDatasets()](https://qrvey.stoplight.io/docs/qrvey-api-doc/ae33c9e237eb3-get-all-datasets) endpoint to find the matching dataset IDs for all shared datasets that the dataset views should reference once deployed to the target environment.
10. Call the [AddRecipientsToDeploymentJobBlock()](https://qrvey.stoplight.io/docs/qrvey-api-doc/3d9dfa5aab257-add-recipients-to-deployment-job-block) endpoint, using the `deploymentJobId` and `deploymentJobBlockId` as path parameters for calling the endpoint.  Use the following request body JSON:


```json
{ 
 "users": [
   {
     "updateDate": NOW,
     "createDate": NOW,
     "userid": APP_OWNER_USER_ID,
     "parameters": [
       {
         "token": SHARED_DATASET_CONTENT_TOKEN_ID,
         "value": SHARED_DATASET_ID
       }
     ],
     "status": "PUBLISHED",
     "email": APP_OWNER_USER_EMAIL,
     "deploymentJobBlockId": DEPLOYMENT_JOB_BLOCK_ID
   }
 ]
}
```

11. Call the [ExecuteDeploymentJob()](https://qrvey.stoplight.io/docs/qrvey-api-doc/0246facc766fb-execute-deployment-job) endpoint, passing in the value of the `deploymentJobId` as a path parameter to the endpoint.
12. Parse the `jobTrackerId` value from the response.
13. Call the [GetJobStatus()](https://qrvey.stoplight.io/docs/qrvey-api-doc/010c3982be464-get-job-status-by-job-tracker-id) endpoint, passing in the value for the `jobTrackerId` and wait until the `status` property has a value of `CREATED`.  This endpoint returns lots of useful information about the deployment of the content objects.

>**Note**:  The content token for a shared dataset begins with the string `shared_data`.  Here is an example of what the content token might look like for a shared dataset called “Demo Data”:  
>`{{shared_data.demo_data}}`

You should always pass the shared dataset’s ID when setting the content token for a deployment job block, in case there are multiple datasets with the same name in the target environment.

## API Reference

* [Login to Qrvey Admin Center](  https://qrvey.stoplight.io/docs/qrvey-api-doc/14715a09b2bc0-log-in-to-qrvey-admin-center)
* [Create Server](https://qrvey.stoplight.io/docs/qrvey-api-doc/2a028d399e95b-create-server)
* [Get All Deployment Definitions]( https://qrvey.stoplight.io/docs/qrvey-api-doc/40cdaed8ecd8b-get-all-deployment-definitions)
* [Export Deployment Definition]( https://qrvey.stoplight.io/docs/qrvey-api-doc/e83fd7ad23195-export-deployment-definition)
* [Get Job Status by jobTrackerId](https://qrvey.stoplight.io/docs/qrvey-api-doc/010c3982be464-get-job-status-by-job-tracker-id)
* [Get Upload URL (Definitions)](https://qrvey.stoplight.io/docs/qrvey-api-doc/76c769bdb3fe5-get-upload-url-definitions])
* [Upload Deployment Definition](https://qrvey.stoplight.io/docs/qrvey-api-doc/7b3389f298ff9-upload-deployment-definition)
* [Get User List](https://qrvey.stoplight.io/docs/qrvey-api-doc/2f4a96d989b65-get-user-list)
* [Get All Datasets]( https://qrvey.stoplight.io/docs/qrvey-api-doc/6345876af84c6-get-all-datasets)
* [Create Deployment Job](https://qrvey.stoplight.io/docs/qrvey-api-doc/43d7fa165bb72-create-deployment-job)
* [Create Deployment Job Block](https://qrvey.stoplight.io/docs/qrvey-api-doc/d5cf25a16aa4c-create-deployment-job-block)
* [Add Recipients to Deployment Job Block](  https://qrvey.stoplight.io/docs/qrvey-api-doc/3d9dfa5aab257-add-recipients-to-deployment-job-block)



</div>