---
id: connect-to-instance
title: Connecting Qrvey Platform to Your Secure Database Instance
sidebar_label: Connecting Qrvey Platform to Your Secure Database Instance
---

<div>

This document explains the steps you need to take if you want to securely access your AWS RDS instance to load data into the Qrvey Business Analytics platform.

## Prerequisites
* You have Qrvey's Business Analytics platform (v5.0+) deployed in your AWS Account.
* You have an RDS instance that is accessible via a security group.
* For this document, we are assuming that the Qrvey platform’s infrastructure and RDS are in the same AWS Account, region and VPC. If that is not the case, please complete the <a href="#vpc-peering-steps">VPC Peering</a> steps first, to enable access between the accounts and/or VPCs.

## Steps
1. Navigate to the <a href="https://console.aws.amazon.com/lambda" target="_blank">Lambda console</a>. In this step, you will move the Lambda function inside your VPC (same as RDS for this example). Find a Lambda function called *“< prefix >_dataload_drDBDatasourcePump”*. Click on the function name to open the details. 

<ul style={{listStyleType: 'lower-alpha', marginLeft: '20px'}}>
<li>From the Permissions tab, note the IAM Execution role.
<ul style={{listStyleType: 'lower-roman', marginLeft: '30px'}}>
<li>From the IAM console, Add the IAM named policy called “AWSLambdaVPCAccessExecutionRole” to the Lambda execution role.</li></ul>
</li>
<li>From the configuration tab of the Lambda function, find the VPC section. Click on <strong>Edit</strong> for VPC Settings. Default is “No VPC”.

<ul style={{listStyleType: 'lower-roman', marginLeft: '30px'}}>
<li>Select Custom VPC </li> 
<li>Pick the VPC you would like to use. For this example, it will be the same VPC as your RDS. </li> 
 <li>Select Applicable subnets. If you are not sure, <strong>pick all private subnets (only the private ones)</strong>. </li> 
 <li>Select the security group that has access to the RDS. </li> 
 <li>Click on <strong>Save</strong>. It takes about 1-2 mins for these settings to apply. </li> 
 </ul>
 </li>
</ul>
2. Navigate to the <a href="https://console.aws.amazon.com/vpc" target="_blank"> VPC Console </a>. Select the menu option for Endpoints. In this step, you will be creating 3 endpoints that will allow the Lambda function inside the VPC to access other AWS Services.

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Create a new Endpoint and pick <b>S3</b> (gateway type) and pick all route tables associated. Click <strong>Save</strong>.</li> 
<li>b. Create a new Endpoint and pick <b>DynamoDB</b> (gateway type) and pick the all route tables associated. Click <strong>Save</strong>.</li>
<li>c. Create a new Endpoint and pick <b>SQS</b>. Since <b>SQS</b> uses an interface you would need to pick the VPC, subnets and Security groups. Pick the same values as you did in steps 1.b.ii, 1.b.iii and 1.b.iv. Add security groups with access to HTTP and HTTPS protocols.</li>
<li>d. Create a new Endpoint and pick <b>Lambda</b>. Since <b>Lambda</b> uses an interface you would need to pick the VPC, subnets and Security groups. Pick the same values as you did in steps 1.b.ii, 1.b.iii and 1.b.iv. Add security groups with access to HTTP and HTTPS protocols.</li>
<p>The rest of these steps only apply if your database is <strong>Redshift or Redshift Serverless:</strong></p>
<li> e. Create a new Endpoint and pick <strong>STS</strong>. Since <strong>STS</strong> uses an interface, you would need to pick the VPC, subnets and security groups. Pick the same values as you did in steps 1.b.ii, 1.b.iii and 1.b.iv. Add security groups with access to HTTP and HTTPS protocols.</li>
<li>f. Create a new Endpoint and pick <strong>SecretsManager</strong>. Since <strong>SecretsManager</strong> uses an interface, you would need to pick the VPC, subnets and security groups. Pick the same values as you did in steps 1.b.ii, 1.b.iii and 1.b.iv. Add security groups with access to HTTP and HTTPS protocols.</li>
<li>g. Create a new Endpoint and pick <strong>Redshift-data</strong>. Since <strong>Redshift-data</strong> uses an interface, you would need to pick the VPC, subnets and security groups. Pick the same values as you did in steps 1.b.ii, 1.b.iii and 1.b.iv. Add security groups with access to HTTP and HTTPS protocols.</li></ul>

At this point, you should be able to connect to your RDS instance using the Qrvey Composer application by creating a connection and then creating a dataset using that connection.

## VPC Peering Steps

### Background

VPC Peering is necessary if the user’s RDS is in a different VPC, account or region.

1. Ensure the VPC your database is in has a different IPv4 CIDR range than the default VPC. You can view the IPv4 CIDR range from the <a href="https://console.aws.amazon.com/vpc">VPC Console</a> in your AWS account. You will need to know this IPv4 CIDR range later, so keep a note of it. The IP range should not have any overlap with 172.31.0.0/16.
2. On the left panel, select **Peering Connections**.
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Select <b>Create Peering Connection</b>.</li>
<li>b. For VPC (Requester), select the VPC your database is in.</li>
<li>c. For VPC (Accepter), select the default VPC that Qrvey is installed in.</li>
<li>d. Confirm by clicking <b>Create Peering Connection</b>.</li>
</ul>
3. Modify the routing table(s) for your database VPC:
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Select each routing table with the same VPC ID and follow these steps for each:</li>
</ul>
<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li>i. Select Routes</li>
<li>ii. Select <strong>Edit</strong> routes</li>
<li>iii. Select <strong>Add</strong> route</li>
<li>iv. Add <strong>Destination</strong> *172.31.0.0/16* and for <strong>Target</strong> select the Peering Connection that you created in step 2.</li>
<li>v. <strong>Save</strong> routes</li>
</ul>
4. Modify the routing table(s) for the default VPC that Qrvey is installed in.
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Select each routing table with the same VPC ID and follow these steps for each:</li>
</ul>
<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li>i. Select Routes</li>
<li>ii. Select <strong>Edit</strong> routes</li>
<li>iii. Select <strong>Add</strong> route</li>
<li>iv. For <strong>Destination</strong>, enter the IPv4 CIDR range that you found in step 1, and for <b>Target</b> select the Peering Connection that you created in step 2.</li>
<li> iv. <strong>Save</strong> routes </li>
</ul>
5. Add a new inbound rule in the RDS security group to allow traffic from the Qrvey Account CIDR.  

6. Enable DNS resolution for VPC peering in the <strong>Requester</strong> and <strong>Accepter</strong> side.  

Now, you will be able to follow the <a href="#steps">steps</a> above, for connecting Qrvey to your RDS instance.



## Additional considerations
* By moving the Lambda function inside a VPC, it does not have internet access. So if you would like to connect to external data sources (outside the VPC) then you would need to add an Internet Gateway or NAT Gateway depending on your use case. For internal data sources or services inside, you can repeat the steps to create a VPC Endpoint for that service or use security groups to access. To add an extra layer of security, whitelist in your database the IP of the **Primary public IPv4 address** of the NAT Gateway.

* There may be additional charges for VPC endpoints.
* Follow the next steps to avoid losing the VPC configuration in future updates and deployments:
    * Go to CloudFormation service on AWS console, find the Qrvey<code>&lt;prefix&gt;</code>DataRouterCodePipeline CloudFormation template. Click on the **Update** button, select *Use current template* and click on **Next**.
    * Put in the right values for SAMsecurityGroupIds (step 1.b.iv) and SAMvpcSubnetsId (step 1.b.iii) and deploy this change.
    * Once the CloudFormation template is updated, go to CodePipeline and click on the **Release Change** button for DataRouter pipeline. This will deploy the change to the Lambda function.

</div>

