---
id: autmated-content-deployment-segregated 
title: Automated Content Deployment - Segregated Data
sidebar_label: Automated Content Deployment (Segregated)
tags: [Solution Architect]
sidebar_position: 7
displayed_sidebar: solution-architects
---

<div style={{textAlign: "justify"}}>

This article describes how to perform an automated deployment of a source baseline application between two Qrvey instances in separate environments. This article assumes a segregated tenant data model. For more information on tenant data models, see [Multi-tenant Dataset Architecture](../../multi-tenant-solution/multi-tenant-dataset-architecture.md).  

## Before You Begin
* All of the API endpoints referenced in this document require you to authenticate with the Qrvey Admin Center API using an encrypted JWT token. When making a call to a Qrvey Admin Center endpoint, you must pass the JWT token in the request header or the request will be denied. For more information, see [Generating Security Tokens](../../software-developer/06-Working%20with%20Qrvey%20APIs/generating-security-tokens.md).
* Verify that you have at least one user account created in the Qrvey Admin Center with “Composer” role permissions. For more information, see [Managing Users of Qrvey Composer](../managing-users.md).

## Prepare Source App for Deployment
Perform the following steps using the [Content Deployment](../08-Content%20Deployment/overview-of-content-deployment.md) feature in the Qrvey Admin Center. Be sure that you are in the **Dev** environment:

1. Create a target server that points to the Dev instance with the Dev API key.  This step will not need to be repeated for all future content deployments.
2. Create a release package with a single version that points to the source baseline app.
3. Create a deployment definition sourced from the release package with the following configuration:
    * `Mode` = Create New Application
    * `Content` = Baseline (i.e. all content)
    * `New Application Name` = Baseline Application
4. Use the following settings for each Connection in your deployment definition:
    * `Host URL = {{connection.host_url}}`
    * `Port = {{connection.port}}`
    * `Username = {{connection.user_name}}`
    * `Password = {{connection.password}}`
    * `Database = {{connection.database}}`
5. Use the following settings for each Dataset in your deployment definition:
    * Disable the **Share Data with Everyone** checkbox
    * Select the **Load Data** checkbox

>**Note**:  The fields for Connection objects will vary depending on the data source type.

Execute the following steps as part of a programmatic routine from the **Dev** environment:
1. Call the GetAllDeploymentDefinitions() endpoint.
2. Parse the `items` object array in the response body to find the object with the `name` property that matches `Baseline App`.
3. Extract the `definitionId` property value from the response, because you will need it for the next API call.
4. Call the ExportDeploymentDefinition() endpoint, passing in the definition ID for the Baseline App deployment definition, making sure to capture the `jobTrackerId` value from the response.
5. Make a call to the GetJobStatus() endpoint using the `jobTrackerId` value from the previous API call.
6. Repeat the previous step until the response returns a URL path to collect the ZIP file for the exported deployment definition.

>**Note**:  The time it takes to export a deployment definition is heavily dependent on the number of content objects selected for deployment.

You should copy the ZIP file to a location that is accessible from the Prod environment before beginning the next set of steps.

## Prepare Target App for Deployment
Execute the following steps as part of a programmatic routine from the **Prod** environment:

1. Call the CreateServer() endpoint and pass in the following request parameters:
    * `name` = any name you want
    * `description` = any description you want
    * `host` = fully qualified URL to this Qrvey instance
    * `apiKey` = your Prod API key
2. Parse the response, extract the value from the `adminserverid` property and save it off somewhere so it can be recalled for future deployments.  *Perform steps 1 and 2 once…and only once*.
3. Call the GetUploadURL() endpoint for deployment definitions and save the `url` and `key` properties from the response.
4. Use the URL provided to make a separate POST request to upload the ZIP file for the Baseline App to the target S3 bucket.
5. Wait for the ZIP file to finish uploading to the target S3 bucket, and then call the UploadDeploymentDefinition() endpoint, setting the following request parameters:
    * `key` = “key” value from the GetUploadURL() response
    * `definitionName` = any name you want
    * `description` = any description you want that describes the content you are deploying

>**Note**:  Before you continue, please make sure you have at least one user account created in the Qrvey Admin Center with “Composer” role permissions. For more information, see [Managing Users of Qrvey Composer](../managing-users.md).

## Deploy the Baseline App
Execute the following steps as part of a programmatic routine from the **Prod** environment:

1. Call the CreateDeploymentJob() endpoint, passing in any name and description that you want.
2. Extract the value from the `deploymentJobId` property in the response.
3. Call the GetAllDeploymentDefinitions() endpoint.
4. Parse the `items` object array in the response body to find the object with the `name` property that matches `Baseline App`.
5. Extract the `definitionId` property value returned in the response, because you will need it for the next API call.
6. Call the CreateDeploymentJobBlock() endpoint, passing in the following request parameters:
    * `definitionId` = ID of the Baseline App deployment definition
    * `adminServerId` = ID of the target server to deploy the content to  (Prod)
    * `selectAllUsers` = false
7. Extract the `deploymentJobBlockId` value from the response.
8. Call the GetUserList() endpoint, parse the `items` array to find the user metadata for the account that will become the owner of this app, and then extract the value from the corresponding `userid` property.
9. Call the AddRecipientsToDeploymentJobBlock() endpoint, using the `deploymentJobId` and `deploymentJobBlockId` as path parameters for calling the endpoint.  Use the following request body JSON:

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

10. Make sure you pass values for each of the parameters you created for each dataset’s connection information.  You should have at least one parameter for each connection’s host URL, which will need to change when you deploy this app and load each tenant’s data.
11. Call the ExecuteDeploymentJob() endpoint, passing in the value of the `deploymentJobId` as a path parameter to the endpoint.
Parse the `jobTrackerId` value from the response.
12. Call the GetJobStatus() endpoint, passing in the value for the `jobTrackerId` and wait until the `status` property has a value of `CREATED`.  This endpoint returns lots of useful information about the deployment of the content objects.

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