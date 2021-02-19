---
id: version-5.4-connect-to-instance
title: Connecting to Secure RDS
sidebar_label: Connecting to Secure RDS
: 
original_id: connect-to-instance
---

This document explains the steps you need to take if you want to securely access your AWS RDS instance to load data into the Qrvey Business Analytics platform.

## Prerequisites
* You have Qrvey Business Analytics platform (v5.0+) deployed in your own AWS Account.
* You have an RDS instance that is accessible via a security group.
* For this document, we are assuming that the Qrvey platform’s infrastructure and RDS are in the same AWS Account, region and VPC. If that is not the case, please complete the <a href="#vpc-peering-steps">VPC Peering</a> steps first, to enable access between the accounts and/or VPCs.

## Steps
1. Navigate to the <a href="https://console.aws.amazon.com/lambda">Lambda console</a>. In this step, you will move the Lambda function inside your VPC (same as RDS for this example). Find a Lambda function called *“<prefix>_dataload_drDBDatasourcePump”*. Click on the function name to open the details. 

<ul style="list-style: none;">
<li>a. From the Permissions tab, note the IAM Execution role.</li>
</ul>
<ul style="list-style: none; margin-left:20px;">
<li>  i. From the IAM console, Add the IAM named policy called “AWSLambdaVPCAccessExecutionRole” to the Lambda execution role.<br></li>
</ul>
<ul style="list-style: none;">
<li>b. From the configuration tab of Lambda function, find the VPC section. Click on <strong>Edit</strong> for VPC Settings. The default is “No VPC”.<br></li>
</ul>
<ul style="list-style: none; margin-left:20px;">
 <li>  i. Select Custom VPC </li> 
 <li>  ii. Pick the VPC you would like to use. For this example, it will be the same VPC as your RDS. </li> 
 <li>  iii. Select Applicable subnets. If you are not sure, pick all subnets. </li> 
 <li>  iv. Select the security group from Step 6 above. </li> 
 <li>  v. Click on **Save**. It takes about 1-2 mins for these settings to apply. </li> 
 </ul>

2. Navigate to <a href="https://console.aws.amazon.com/vpc"> VPC Console </a>. Select the menu option for Endpoints. In this step, you will be creating 3 endpoints that will allow the Lambda function inside the VPC to access other AWS Services.
a. Create a new Endpoint and pick S3. Save.
b. Create a new Endpoint and pick DynamoDB. Save.
c. Create a new Endpoint and pick SQS. Since SQS uses an interface you would need to pick the VPC, subnets and Security groups. Pick the same values as the Lambda function in step 1.b.ii, 1.b.iii and 1.b.iv. Add security groups with access to HTTP and HTTPS protocols. 

At this point, you should be able to connect to your RDS instance using the Qrvey Composer application by creating a connection and then creating a dataset using that connection.

## VPC Peering Steps

### Background

VPC Peering is necessary if the user’s RDS is in a different VPC, account or region.

1. Ensure the VPC your database is in has a different IPv4 CIDR range than the default VPC. You can view the IPv4 CIDR range from the <a href="https://console.aws.amazon.com/vpc"> VPC Console </a> in your AWS account. You will need to know this IPv4 CIDR range later, so keep a note of it. The IP range should not have any overlap with 172.31.0.0/16.
2. On the left panel, select Peering Connections.
a. Select Create Peering Connection
b. For VPC (Requester), select the VPC your database is in.
c. For VPC (Accepter), select the default VPC that Qrvey is installed in.
d. Confirm by clicking Create Peering Connection
3. Modify the routing table(s) for your database VPC:
a. Select each routing table with the same VPC ID and follow these steps for each:

<ul style="list-style: none; margin-left:20px;">
  <li>i. Select Routes</li>
  <li>ii. Select <strong>Edit</strong> routes</li>
  <li>iii. Select <strong>Add</strong> route</li>
  <li>iv. Add <strong>Destination</strong> *172.31.0.0/16* and as <strong>Target</strong> select the Peering Connection that you had created in step 2.</li>
  <li>v. <strong>Save</strong> routes</li>
</ul>

4. Modify the routing table(s) for the default VPC that Qrvey is installed in.
a. Select each routing table with the same VPC ID and follow these steps for each:

<ul style="list-style: none; margin-left:20px;">
   <li>i. Select Routes</li>
   <li>ii. Select <strong>Edit</strong> routes</li>
   <li>iii. Select <strong>Add</strong> route</li>
</ul>

For **Destination**, enter the IPv4 CIDR range that you have found in step 1, and for Target select the Peering Connection that you had created in step 2.

<ul style="list-style: none; margin-left:20px;">
  <li> iv. Save routes </li>
</ul>

Now you will be able to follow the Steps above and connect Qrvey to your RDS instance.

## Additional considerations
* By moving the Lambda function inside a VPC, it does not have internet access. So if you would like to connect to external data sources (outside the VPC) then you would need to add an Internet Gateway or NAT Gateway depending on your use-case. For internal data sources or services inside AWS you can repeat the steps to create a VPC Endpoint for that service or use security groups to access.
* There may be additional charges for VPC endpoints.


