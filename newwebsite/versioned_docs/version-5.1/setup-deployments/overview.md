---
id: setup-overview
title: Setup Overview
sidebar_label: Setup Overview
---
<div style={{textAlign: "justify"}}/>

Qrvey is a 100% Cloud native product built with dozens of AWS services like Elastic Container Service (ECS), DynamoDB, S3, Load Balancers, Auto scaling, SES, SQS, etc. We deploy directly into your own Amazon Web Services (AWS) account. This gives you full control over your installation and data. You can decide how big a deployment you need and have full control to scale up or down as needed to balance cost with performance.
Qrvey Platform is deployed using a combination of Cloudformation templates and Code Pipelines. This makes the deployment fully automated and there is no downtime during upgrades. An upgrade is as simple as copying a few Zip files into an S3 bucket which will trigger the pipelines and deploy the new version including any updates to the infrastructure.
One environment of Qrvey Platform consists of 5 components and each of these components are deployed to your Amazon Web Services (AWS) account. 

-   Business Analytics
-   Data Router
-   Admin
-   Elasticsearch
-   Widgets

You can have multiple environments of the Platform under a single AWS account or independent AWS Accounts. These environments could be used for Dev/Test/Staging/Production etc. We recommend deploying a single Environment in one AWS account and using separate AWS accounts for different Environments. Multiple AWS accounts can be managed from one place using AWS Organizations that provides consolidated billing.

## First Deployment

When you sign up for Qrvey either as a Partner or customer we will deploy the latest version of the Platform to your AWS account. To start a new deployment we need some information from you and all the requirements are documented in the document called “Initial Deployment”. All resources created by Qrvey are marked with a tag called “APPNAME=QRVEY”. This tag can be used in Billing dashboard to filter or Analyze the cost.

Once we receive all the information our team would follow the following steps

1.  ```

    Create an S3 bucket (called Versions) which will store all files required for a deployment. This is usually the latest version of Qrvey Platform. 

    ```
2.  Create a new Elasticsearch Cluster using AWS Elasticsearch console.
3.  Optionally setup Email addresses and SSL Certificates
4.  Create 5 AWS CodePipelines using Cloudformation templates. These pipelines will be triggered to run immediately and they will deploy the Infrastructure (using Cloudformation) and Code (using CodeDeploy) on that infrastructure.
5.  Test everything to make sure all services are up and running
6.  Send a notification with all the information needed to start using the platform.

## Upgrades

We’ll notify you as latest upgrades are made available for the platform. Upon approval we’ll deploy the update by copying all the files to the Versions S3 bucket under your AWS account. Copying these files will automatically trigger all the pipelines which will update the infrastructure (if needed) and deploy the latest code.

All Platform upgrades are rolling upgrades so they do not require a downtime but we recommend doing an upgrade during off hours or at a time with less traffic to minimize any disruption. You will be able to monitor the progress of an upgrade from AWS Codepipeline console.

## Removing a Deployment

Removing a deployment can be done by deleting the cloudformation stacks from AWS Cloudformation console. Cloudformation would not delete some resources that have data in them (like S3 buckets) so it would be better to clean or remove these resources manually before removing the stack. 
