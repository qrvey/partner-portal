---
id: prerequisites-for-installation
title: Prerequisites for Installation
sidebar_label: Prerequisites for Installation
---

<div style={{textAlign: "justify"}}>

As you prepare to install Qrvey within your current AWS environment or a new AWS environment, there are a few items to be aware of prior to installation.

## AWS Region Support
Qrvey has architected a system that combines roughly two dozen AWS services creating a scalable and cost-effective solution. As a result, we recommend deploying Qrvey into regions that have full support for these services. The regions that have been certified by our internal testing teams and have full support for every AWS service include:

* N. Virginia (us-east-1)
* Ohio (us-east-2)
* Oregon (us-west-2)
* Canada - Central (ca-central-1)
* Ireland (eu-west-1)
* Frankfurt (eu-central-1)
* London (eu-west-2)
* Sydney (ap-southeast-2)
* Singapore (ap-southeast-1)
* Mumbai (ap-south-1)


As AWS region support continues to evolve and expand, Qrvey may also be deployed in regions not listed above, provided all the core services are supported. If you have questions about regions that the Qrvey team has not yet certified, please contact Qrvey support at help@qrvey.com.


In the North American geo, the following regions do not have complete support for every service used by Qrvey, but you can still use Qrvey within these regions with the following limitations:


<table class="demo">
	<thead>
	<tr>
		<th>Region</th>
		<th>Service(s) Missing</th>
		<th>Limitation</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>N. California (us-west-1)</td>
		<td>Comprehend</td>
        <td>Text analysis - Used in Data Profiling and Transformations.</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td>Simple Email Service (SES) - Automated Deployment</td>
		<td>Requires manual setup - Cloudformation is not able to configure SES.</td>
	</tr>
	<tr>
		<td>Canada (Central) (ca-central-1)</td>
		<td>Rekognition</td>
		<td>Image and Video analysis</td>
	</tr>
	<tr>
		<td>S. America (Sao Paulo) (sa-east-1)</td>
		<td>Comprehend</td>
		<td>Text analysis - Used in Data Profiling and Transformations.</td>
	</tr>
    <tr>
		<td></td>
		<td>Rekognition</td>
		<td>Image and Video analysis</td>
	</tr>
    <tr>
		<td>GovCloud (US) (us-gov-west-1)</td>
		<td>None</td>
		<td>All services available, but the region has not been certified yet.</td>
	</tr>    
	</tbody>
</table> 



The following regions are missing services that Qrvey relies upon and are **NOT** supported at this time.


<table class="demo">
	<thead>
	<tr>
		<th>Region</th>
		<th>Service(s) Missing</th>
		<th>Limitation</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>GovCloud (US-East) (us-gov-east-1)</td>
		<td>Comprehend</td>
        <td>Text analysis - Used in Data Profiling and Transformations.</td>
	</tr>
	<tr>
		<td></td>
		<td>Rekognition</td>
        <td>Image and Video analysis</td>
	</tr>
	<tr>
		<td></td>
		<td>Simple Email Service (SES) - Automated Deployment</td>
        <td>Requires manual setup - Cloudformation is not able to configure SES.</td>
	</tr>    
    <tr>
		<td></td>
		<td>CodePipeline</td>
        <td>Deployment of software version updates</td>
    </tr>
	</tbody>
</table> 


## AWS Account Settings
Before deploying Qrvey Platform, please check the following in your AWS account to make sure the following are available:

* We recommend for our default trial configuration to use the Default VPC with a public subnet for each availability zone of that region. If you require the use of a non-default VPC or other private subnet configurations, let us know and we can help you with this configuration.
* Deployment creates about 2 t2.micro EC2 instances. The default service quota limit for AWS accounts is 20 but in some cases, it might be 5.
* Ensure there are at least 24 S3 buckets available. (AWS sets a default limit of 100, you may need to increase the limit in your account.)

## AWS Role Access
During trial evaluations, Qrvey can perform the installation on your behalf within your AWS account. To install Qrvey within your AWS account, a “cross-account” role must be created. This role MUST have “admin” access to run the Cloudformation template necessary to run the Qrvey deployment. The role can be removed after the deployment process is completed.


## Other Notes
The application uses AWS SES to send out all transactional emails from the platform. AWS SES is in SANDBOX mode by default. Please, open a support ticket with AWS to move your account out of Sandbox mode.

</div>