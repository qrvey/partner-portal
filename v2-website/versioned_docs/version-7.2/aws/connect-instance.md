---
id: connect-to-instance
title: Connecting Qrvey Platform to Your Secure Database Instance
sidebar_label: Connecting Qrvey Platform to Your Secure Database Instance
---

<div style={{textAlign: "justify"}}>

This document explains the steps you need to take if you want to securely access your AWS RDS instance to load data into the Qrvey Business Analytics platform.

## Prerequisites
* You have Qrvey's Business Analytics platform (v5.0+) deployed in your AWS Account.
* You have an RDS instance that is accessible via a security group.
* For this document, we are assuming that the Qrvey platform’s infrastructure and RDS are in the same AWS Account, region and VPC. If that is not the case, please complete the <a href="#vpc-peering-steps">VPC Peering</a> steps first, to enable access between the accounts and/or VPCs.

## Steps
1. Navigate to the <a href="https://console.aws.amazon.com/lambda" target="_blank">Lambda console</a>. In this step, you will move the Lambda function inside your VPC (same as RDS for this example). Find a Lambda function called *“< prefix >_dataload_drDBDatasourcePump”*. Click on the function name to open the details. 

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. From the Permissions tab, note the IAM Execution role.</li></ul>

<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li>  i. From the IAM console, Add the IAM named policy called “AWSLambdaVPCAccessExecutionRole” to the Lambda execution role.</li></ul>

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>b. From the configuration tab of the Lambda function, find the VPC section. Click on <strong>Edit</strong> for VPC Settings. Default is “No VPC”.</li>
</ul>

<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li>  i. Select Custom VPC </li> 
<li>  ii. Pick the VPC you would like to use. For this example, it will be the same VPC as your RDS. </li> 
 <li>  iii. Select Applicable subnets. If you are not sure, pick all subnets but only the private ones. </li> 
 <li>  iv. Select the security group that has access to the RDS. </li> 
 <li>  v. Click on <strong>Save</strong>. It takes about 1-2 mins for these settings to apply. </li> 
 </ul>

2. Navigate to the <a href="https://console.aws.amazon.com/vpc" target="_blank"> VPC Console </a>. Select the menu option for Endpoints. In this step, you will be creating 3 endpoints that will allow the Lambda function inside the VPC to access other AWS Services.

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Create a new Endpoint and pick S3 (gateway type) and pick all route tables associated. Click <strong>Save</strong>.</li> 
<li>b. Create a new Endpoint and pick DynamoDB (gateway type) and pick the all route tables associated. Click <strong>Save</strong>.</li>
<li>c. Create a new Endpoint and pick SQS. Since SQS uses an interface you would need to pick the VPC, subnets and Security groups. Pick the same values as the Lambda function in step 1.b.ii, 1.b.iii and 1.b.iv. Add security groups with access to HTTP and HTTPS protocols.</li> </ul>

At this point, you should be able to connect to your RDS instance using the Qrvey Composer application by creating a connection and then creating a dataset using that connection.

## VPC Peering Steps

### Background

VPC Peering is necessary if the user’s RDS is in a different VPC, account or region.

1. Ensure the VPC your database is in has a different IPv4 CIDR range than the default VPC. You can view the IPv4 CIDR range from the <a href="https://console.aws.amazon.com/vpc">VPC Console</a> in your AWS account. You will need to know this IPv4 CIDR range later, so keep a note of it. The IP range should not have any overlap with 172.31.0.0/16.
2. On the left panel, select **Peering Connections**.
a. Select **Create Peering Connection**.
b. For VPC (Requester), select the VPC your database is in.
c. For VPC (Accepter), select the default VPC that Qrvey is installed in.
d. Confirm by clicking **Create Peering Connection**.
3. Modify the routing table(s) for your database VPC:
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Select each routing table with the same VPC ID and follow these steps for each:</li></ul>
<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li>i. Select Routes</li>
<li>ii. Select <strong>Edit</strong> routes</li>
<li>iii. Select <strong>Add</strong> route</li>
<li>iv. Add <strong>Destination</strong> *172.31.0.0/16* and for <strong>Target</strong> select the Peering Connection that you created in step 2.</li>
<li>v. <strong>Save</strong> routes</li></ul>

4. Modify the routing table(s) for the default VPC that Qrvey is installed in.
a. Select each routing table with the same VPC ID and follow these steps for each:

<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li>i. Select Routes</li>
<li>ii. Select <strong>Edit</strong> routes</li>
<li>iii. Select <strong>Add</strong> route</li>
<br/>

For **Destination**, enter the IPv4 CIDR range that you have found in step 1, and for Target select the Peering Connection that you had created in step 2.

<li> iv. <strong>Save</strong> routes </li>
</ul>

Now, you will be able to follow the <a href="#steps">steps</a> above, for connecting Qrvey to your RDS instance.

>**Note**: Make sure that the VPC peering connection has domain name server (DNS) resolution enabled.

## Additional considerations
* By moving the Lambda function inside a VPC, it does not have internet access. So if you would like to connect to external data sources (outside the VPC) then you would need to add an Internet Gateway or NAT Gateway depending on your use case. For internal data sources or services inside, you can repeat the steps to create a VPC Endpoint for that service or use security groups to access.
* There may be additional charges for VPC endpoints.
* Follow the next steps to avoid losing the VPC configuration in future updates and deployments:
    * Go to CloudFormation service on AWS console, find the Qrvey<code>&lt;prefix&gt;</code>DataRouterCodePipeline CloudFormation template. Click on the **Update** button, select *Use current template* and click on **Next**.
    * Put in the right values for SAMsecurityGroupIds (step 1.b.iv) and SAMvpcSubnetsId (step 1.b.iii) and deploy this change.
    * Once the CloudFormation template is updated, go to CodePipeline and click on the **Release Change** button for DataRouter pipeline. This will deploy the change to the Lambda function.

</div>
