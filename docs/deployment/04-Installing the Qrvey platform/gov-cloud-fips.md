---
id: gov-cloud-fips
title: Deploying Qrvey in AWS GovCloud with FIPS 
sidebar_label: Deploying in AWS GovCloud with FIPS 
tags: [CloudOps Engineer]
sidebar_position: 2
displayed_sidebar: getting-started
---

# Deploying Qrvey in AWS GovCloud with FIPS 

This document outlines the process for deploying a Qrvey Platform instance in AWS GovCloud with FIPS enabled.

As of this writing, AWS offers two GovCloud regions (us-gov-east-1 and us-gov-west-1), with only us-gov-west-1 supporting the majority of services required for Qrvey Platform deployment. Note that AWS GovCloud (us-gov-west-1) does not support CloudFront, which is necessary for rendering the UI. To work around this limitation, deploy the Widgets component in a non-GovCloud AWS account and link it to access certain files in the S3 bucket of the GovCloud AWS account. This is currently the only method to deploy an instance.

## Prerequisites

- **Non-GovCloud AWS Account**: Used for deploying Widgets (static HTML/CSS) and the CloudFront distribution. Select a region for deploying the CloudFormation template.
- **GovCloud AWS Account**: Qrvey supports deployment in the us-gov-west-1 region only.
- **Globally Unique Prefix**: This prefix will be used for naming S3 buckets and must be unique. A minimum 5-character random string is recommended.
- **AWS Account IDs**: Provide the two AWS Account IDs to Qrvey Support for whitelisting.

## Steps for Non-GovCloud Account

1. Determine the unique prefix for this instance.
2. Log in to the non-GovCloud AWS account and select the appropriate region (e.g., us-west-2).
3. Create a new location CloudFormation stack using the following URL: `https://qrvey-autodeployapp.s3.amazonaws.com/common/qrvey-aws-location-Template.json`.
    - Copy the `IdentityPoolId` from the Outputs tab (e.g., `us-west-2:xxxxxxxxx`).
4. Deploy the AutoDeployApp/Installer CloudFormation template.
    - Obtain the template URL from Qrvey Support for the appropriate version (e.g., 8.5.2).
    - Create a new stack using the URL, selecting public subnets within the appropriate VPC.
    - Once the stack is ready, copy and save the URL from the Outputs tab.
    - Initialize the installer by calling the INIT API. Replace placeholder values as needed.
    
    ```bash
    curl --location '<AutoDeployAppURL>/api/v1/init'
    ```
    
5. Deploy the Widgets Module using the following API. Replace placeholder values accordingly.
    
    ```bash
    curl --location '<AutoDeployAppURL>/api/v1/deploy/pipeline/widgets/deployment' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "<name@email.com>",
        "useDeployID": "<prefix>",
        "UseFipsEndpoint": "true",
        "Referer": "<Referer>",
        "LocationIdentityPoolID": "<value from Step 3>",
        "GovCloudRegion": "us-gov-west-1",
        "GovCloudAccount": "<GovCloudAWSAccountID>"
    }'
    ```
    
6. Monitor progress by accessing the `AutoDeployAppURL` in a browser or using the `GET /api/v1/status` API. Upon completion, proceed with the following steps:
7. Retrieve the Widgets deployment JSON by calling the following API. This will be used for GovCloud deployment.
    
    ```bash
    curl --location '<AutoDeployAppURL>/api/v1/deploy/pipeline/widgets/results'
    ```
    
8. In the S3 service, locate and delete the following buckets. These will be recreated in the GovCloud account, so ensure they are deleted **before** starting the GovCloud deployment:
    - `<AccountID><Prefix>qrveyuserfiles`
    - `qrvey-<prefix>-config`
    - `qrveyversion-<prefix>`
9. You can now delete the AutoDeployApp/Installer CloudFormation stack.

## Steps for GovCloud Account

1. Select the us-gov-west-1 region.
2. Deploy the AutoDeployApp/Installer CloudFormation template.
    - Obtain the template URL from Qrvey Support for the appropriate version (e.g., 8.5.2).
    - Create a new stack using the URL, selecting public subnets within the appropriate VPC.
    - Once the stack is ready, copy and save the URL from the Outputs tab.
    - Initialize the installer by calling the INIT API. Replace placeholder values as needed. [Link to Notion](https://www.notion.so/Deploy-a-New-Gov-Cloud-FIPS-Instance-df785239505b4e30a78363cb8a8e4234?pvs=21).
3. Begin deployment by calling the following API. Replace placeholder values as needed, ensuring the data matches Step 5 of the Non-GovCloud deployment.
    
    ```bash
    curl --location '<AutoDeployAppURL>/api/v1/deployment' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "company": "CompanyName",
        "email": "name@email.com",
        "firstname": "FirstName",
        "lastname": "LastName",
        "useDeployID": "<prefix (matching from Step 5 in Non-GovCloud)>",
        "UseFipsEndpoint": "true",
        "Referer": "<Referer (matching from Step 5 in Non-GovCloud)>",
        "skipWidgetPipeline": true,
        "widgetConfig": {
            <WidgetConfigJSON from Step 7 in Non-GovCloud deployment>
        },
        "useExistingAWSLocation": true,
        "LocationIdentityPoolID": "us-west-2:85b694c3-4269-43e8-9ea4-5f52939f1e5a",
        "elasticSearchConfig": {
            "EBSOptions": {
                "EBSEnabled": true,
                "VolumeSize": 100,
                "VolumeType": "gp2"
            },
            "ElasticsearchClusterConfig": {
                "InstanceCount": 2,
                "InstanceType": "r6g.large.elasticsearch"
            },
            "ElasticsearchVersion": "7.10"
        }
    }'
    ```
    
4. Monitor deployment progress using the AutoDeployApp UI or the `GET /api/v1/status` API.
5. Upon completion, access AWS DynamoDB.
6. Locate the `qrveyDeploymentApp_Config` table and select "Explore table items."
7. Copy and save the following values:
    - **MicroserviceCodePipeline**: `appResourceValues.composerELBDNSName`. Set this in the CloudFront origin (in the Non-GovCloud account) for `Qrvey<prefix>ComposerALB`.
    - **AdminCodePipeline**: `appResourceValues.adminSecurityHttpApiEndpoint`. Set this in the CloudFront origin (in the Non-GovCloud account) for `Qrvey<prefix>SecurityApiGateway`.
8. After deployment, you will receive an email with the relevant details.

## Post-Deployment Tasks

1. Log in to the Non-GovCloud account.
2. In AWS CloudFront, find the distribution created from the Widgets stack. It will have an alternate domain name matching the composer URL (`<prefix>.qrveyapp.com`).
3. Open the distribution and select the "Origins" tab.
    - Update the origin path for `Qrvey<prefix>ComposerALB` with the composer ELB DNS name from Step 7 in the previous section.
    - Update the origin path for `Qrvey<prefix>SecurityApiGateway` with the admin security HTTP endpoint from Step 7 in the previous section.
        - Ensure the origin path is set to `/prod`.
4. Call the following API to generate the default system roles using the values from the email received in Step 8 of the previous section.

    ```bash
    curl --location --request POST 'https://<ComposerURL>/admin/api/v5/group/system/generate' \
    --header 'x-api-key: <ApiKey>' \
    --data ''
    ```