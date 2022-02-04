---
id: aws-services-used-by-Qrvey
title: AWS Services Used by Qrvey
sidebar_label: AWS Services Used by Qrvey
---

<div style={{textAlign: "justify"}}>


Qrvey is built with multiple AWS services. Here is a list of the main components to give you an idea of what you can expect in your AWS bill. Many have a free tier or upfront pricing depending on your account.


| **AWS Service** | **Service Description** | 
| --- | --- |
| <a href="https://aws.amazon.com/api-gateway/" target="_blank"><b> Amazon API Gateway </b></a> | Required - used for all APIs |
| <a href="https://aws.amazon.com/athena/" target="_blank"><b>Amazon Athena</b></a>| Used for joining data sources/datasets| 
| <a href="https://aws.amazon.com/cloudwatch/" target="_blank"><b>Amazon CloudWatch </b></a> | All logs | 
| <a href="https://aws.amazon.com/comprehend/" target="_blank"><b>Amazon Comprehend</b></a>| Text analysis (webforms only for now and DR Transformations)| 
| <a href="https://aws.amazon.com/dynamodb/" target="_blank"><b>Amazon DynamoDB </b></a> | Used for storing metadata and webform data | 
| <a href="https://aws.amazon.com/ecr/" target="_blank"><b>Amazon Elastic Container Registry (ECR)</b></a> | Used to host Microservice (Docker) images that are deployed | 
| <a href="https://aws.amazon.com/ecs/" target="_blank"><b>Amazon Elastic Container Service (ECS)</b></a>  | Host for all Microservice containers| 
| <a href="https://aws.amazon.com/elasticache/" target="_blank"><b>Amazon ElastiCache</b></a>  | Used by DataRouter for caching metadata| 
| <a href="https://aws.amazon.com/elasticsearch-service/" target="_blank"><b>Amazon Elasticsearch Service </b></a> | Used for storing all customer-uploaded file data and data used for charting analytics.| 
| <a href="https://aws.amazon.com/rekognition/" target="_blank"><b>Amazon Rekognition </b></a> | Image analysis and video for webforms and Data Router transformations.| 
| <a href="https://aws.amazon.com/sagemaker/" target="_blank"><b>Amazon SageMaker </b></a> | Used for AI models| 
| <a href="https://aws.amazon.com/ses/" target="_blank"><b>Amazon Simple Email Service (SES) </b></a> | Used for sending all emails| 
| <a href="https://aws.amazon.com/sns/" target="_blank"><b>Amazon Simple Notification Service (SNS) </b></a> | Used to send notifications including Data Router job status| 
| <a href="https://aws.amazon.com/sqs/" target="_blank"><b>Amazon Simple Queue Service (SQS) </b></a> | Used for communication between all serverless components.| 
| <a href="https://aws.amazon.com/s3/" target="_blank"><b>Amazon Simple Storage Service (S3) </b></a> | Used for storing widgets and data files| 
| <a href="https://aws.amazon.com/vpc/" target="_blank"><b>Amazon Virtual Private Cloud (VPC) </b></a> | We deploy to default VPC but based on data source connections might use a different VPC| 
| <a href="https://aws.amazon.com/certificate-manager/" target="_blank"><b>AWS Certificate Manager </b></a> | Used for SSL Certificate of Qrvey composer and Admin URL.| 
| <a href="https://aws.amazon.com/cloudformation/" target="_blank"><b>AWS CloudFormation </b></a> | Used for deployment.
| <a href="https://aws.amazon.com/codebuild/" target="_blank"><b>AWS CodeBuild</b></a>  | Used for deployment| 
| <a href="https://aws.amazon.com/codepipeline/" target="_blank"><b>AWS CodePipeline </b></a> | Used for deployment | 
| <a href="https://aws.amazon.com/fargate/" target="_blank"><b>AWS Fargate </b></a> | Used with ECS for containers (microservices deployment) | 
| <a href="https://aws.amazon.com/iam/" target="_blank"><b>AWS Identity and Access Management (IAM) </b></a> | Used for permissions and roles in the deployment | 
| <a href="https://aws.amazon.com/lambda/" target="_blank"><b>AWS Lambda</b></a>  | Serverless Lambda functions | 
| <a href="https://aws.amazon.com/elasticloadbalancing/" target="_blank"><b>Elastic Load Balancing </b></a> | Used for load balancing between containers and API gateway | 



</div>