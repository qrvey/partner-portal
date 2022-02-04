---
id: prerequisites-for-installation
title: Prerequisites for Installation
sidebar_label: Prerequisites for Installation
---

<div style={{textAlign: "justify"}}>

As you prepare to install Qrvey within your current AWS environment or a new AWS environment, there are a few items to be aware of prior to installation.

## AWS Region Support
Qrvey has architected a system that combines roughly two dozen AWS services, creating a scalable and cost-effective solution. As a result, we recommend deploying Qrvey into regions that have full support for these services. The regions that have been certified by our internal testing teams and have full support for every AWS service include:

* N. Virginia (us-east-1)
* Ohio (us-east-2)
* Oregon (us-west-2)
* Canada - Central (ca-central-1)
* Ireland (eu-west-1)
* Frankfurt (eu-central-1)
* Mumbai (ap-south-1)
* Singapore (ap-southeast-1)
* Sydney (ap-southeast-2)

As AWS region support continues to evolve and expand, Qrvey may also be deployed in regions not listed above, provided all the core services are supported. If you have questions about regions that the Qrvey team has not yet certified, please contact <a href="help@qrvey.com">Qrvey support</a>.

In the North American geo, the following regions do not have complete support for every service used by Qrvey, but you can still use Qrvey within these regions with the following limitations:

| **Region** | **Service(s) Missing** | **Limitation** |
| --- | --- | --- |
| N. California (us-west-1) | Comprehend<br/><br/><br/>Simple Email Service (SES) - Automated Deployment | Text analysis - Used in Data Profiling and Transformations. <br/><br/> Requires manual setup - Cloudformation is not able to configure SES.| 
| Canada (Central) (ca-central-1)| Rekognition | Image and Video analysis| 
| S. America (Sao Paulo) (sa-east-1)| Comprehend <br/><br/><br/>Rekognition | Text analysis - Used in Data <br/> <br/> Profiling and Transformations. Image and Video analysis|
|GovCloud (US) (us-gov-west-1)| none | All services are available, but the region has not been certified yet.|

The following regions are missing services that Qrvey relies upon and are <u>NOT</u> supported at this time.

| **Region** | **Service(s) Missing** | **Limitation** |
| --- | --- | --- |
|GovCloud (US-East) (us-gov-east-1) | Comprehend <br/> <br/> Rekognition <br/> <br/> Simple Email Service (SES) - Automated Deployment <br/> <br/> CodePipeline| Text analysis - Used in Data Profiling and Transformations. <br/> <br/> Image and Video analysis <br/> <br/> Requires manual setup - Cloudformation is not able to configure SES.<br/> <br/> Deployment of software version updates


## AWS Account Settings
Before deploying Qrvey Platform, please check the following in your AWS account to make sure the following are available:

* We recommend for our default trial configuration to use the Default VPC with a public subnet for each availability zone of that region. If you require the use of a non-default VPC or other private subnet configurations, let us know and we can help you with this configuration.

* Deployment creates about 2 t2.micro EC2 instances. The default service quota limit for AWS accounts is 20 but in some cases, it might be 5.

* Ensure there are at least 24 S3 buckets available. (AWS sets a default limit of 100, you may need to increase the limit in your account.)

## AWS Role Access
During trial evaluations, Qrvey can perform the installation on your behalf within your AWS account. To install Qrvey within your AWS account, a “cross-account” role must be created. This role MUST have “admin” access to run the Cloudformation template necessary to run the Qrvey deployment. The role can be removed after the deployment process is completed.

## Other Notes
The application uses **AWS SES** to send out all transactional emails from the platform. AWS SES is in <u>SANDBOX</u> mode by default. Make sure you open a support ticket with AWS to move your account out of Sandbox mode. Please note that emails will not be delivered from your system, otherwise.

</div>