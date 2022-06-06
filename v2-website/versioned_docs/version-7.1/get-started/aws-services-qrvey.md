---
id: aws-services
title: AWS Services Used by Qrvey
sidebar_label: AWS Services Used by Qrvey
---

<div style={{textAlign: "justify"}}>


Qrvey is built with multiple AWS services. Here is a list of the main components to give you an idea of what you can expect in your AWS bill. Many have a free tier or upfront pricing depending on your account.
<table class="aws">
	<thead>
	<tr>
		<th>AWS Service</th>
		<th>Service Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td><a href="https://aws.amazon.com/api-gateway/">Amazon API Gateway</a></td>
		<td>Required - used for all APIs</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/athena/">Amazon Athena</a></td>
		<td>Used for joining data sources/datasets</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/cloudfront/">Amazon Cloudfront</a></td>
		<td>CDN for Widgets</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/cloudwatch">Amazon CloudWatch</a></td>
		<td>All logs</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/comprehend">Amazon Comprehend</a></td>
		<td>Text analysis (webforms only for now and DR Transformations)</td>
	</tr>
    <tr>
		<td><a href="https://aws.amazon.com/dynamodb/">Amazon DynamoDB</a></td>
		<td>Used for storing metadata and webform data</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/ecr/">Amazon Elastic Container Registry (ECR)</a></td>
		<td>Used to host Microservice (Docker) images that are deployed</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/ecs/">Amazon Elastic Container Service (ECS)</a></td>
		<td>Host for all Microservice containers</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/elasticsearch-service">Amazon Elasticsearch Service</a></td>
		<td>Used for storing all customer-uploaded file data and data used for charting analytics</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/rekognition">Amazon Rekognition</a></td>
		<td>Image analysis and video for webforms and Data Router transformations</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/sagemaker/">Amazon SageMaker</a></td>
		<td>Used for AI models</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/ses/">Amazon Simple Email Service (SES)</a></td>
		<td>Used for sending all emails</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/sns/">Amazon Simple Notification Service (SNS)</a></td>
		<td>Used to send notifications including Data Router job status</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/sqs/">Amazon Simple Queue Service (SQS)</a></td>
		<td>Used for communication between all serverless components</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/s3/">Amazon Simple Storage Service (S3)</a></td>
		<td>Used for storing widgets and data files</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/vpc/">Amazon Virtual Private Cloud (VPC)</a></td>
		<td>We deploy to default VPC but based on data source connections might use a different VPC</td>
	</tr>	
    <tr>
		<td><a href="https://aws.amazon.com/certificate-manager/">AWS Certificate Manager</a></td>
		<td>Used for SSL Certificate of Qrvey composer and Admin URL</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/cloudformation">AWS CloudFormation</a></td>
		<td>Used for deployment</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/codebuild/">AWS CodeBuild</a></td>
		<td>Used for deployment</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/codepipeline/">AWS CodePipeline</a></td>
		<td>Used for deployment</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/fargate/">AWS Fargate</a></td>
		<td>Used with ECS for containers (microservices deployment)</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/iam/">AWS Identity and Access Management (IAM)</a></td>
		<td>Used for permissions and roles in the deployment</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/lambda/">AWS Lambda</a></td>
		<td>Serverless Lambda functions</td>
	</tr>
	<tr>
		<td><a href="https://aws.amazon.com/elasticloadbalancing">Elastic Load Balancing</a></td>
		<td>Used for load balancing between containers and API gateway</td>
	</tr>
	</tbody>
</table> 
 
</div>