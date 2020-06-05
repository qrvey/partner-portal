---
id: connect-to-RDS-instance
title: Connecting Qrvey platform to your Secure RDS instance
sidebar_label: Connecting Qrvey platform to your Secure RDS instance

---

<style>
img[src*="#thumbnail"] {
   width:100%;
   border: 1px solid whitesmoke;
}
</style>

<div style="text-align: justify">

This document explains the steps you need to take if you want to securely access your AWS RDS instance to load data into Qrvey Business Analytics platform.

## Background
Qrvey platform connects to your data sources using a set of ECS microservice and Lambda functions to download data. This architecture allows Qrvey to scale up or down as needed with you paying only for what you use. Since Lambda functions do not have a static IP address, it's not easy to secure the communication between Qrvey and your Data source by restricting access to an IP address. In this document, we’ll discuss the steps needed to enable a secure connection between the application and your RDS instance. You can adapt the same steps for any other secure data source. There are 2 access points where the Qrvey application will connect to your data source. The first is an ECS task running on an EC2 instance which is responsible for testing the connection and getting the list of tables and columns. The actual loading of data happens through a serverless architecture using Lambda functions with S3, SQS and DynamoDB tables.

## Prerequisites

* You need to have Qrvey’s Business Analytics platform (v5.0+) deployed in your own AWS Account.
* You have an RDS instance that is accessible via a security group.
* In this document, we are assuming that the Qrvey platform’s infrastructure and RDS are in the same AWS Account, region and VPC. If that is not the case, please adapt these steps to enable access between the accounts and/or VPCs.

## Steps
1. Log in to your AWS account through a user who has access to EC2, VPC, Lambda and RDS. Select N.Virginia (us-east-1) region.

2. Navigate to  <a href="https://console.aws.amazon.com/ec2"> <strong> EC2 console </strong> </a> and click on the **Instances** menu option.

3. Find an EC2 instance named *qrvey-<prefix>-microservices-ECSInstance*. Note down the security group used for this instance.

4. Click on the **Security Groups** menu option under *Network & Security* in EC2 console.

5. Find the security group for your RDS instance. Enable access to the ECS Instance security group mentioned above in Step 3.

6. Click on **Add a new security group button** to create a new group that will be used by Lambda. For simplicity, you can enable all access for *Inbound* and *Outbound* since this Lambda function will only be accessible from inside a VPC. However, feel free to restrict  access if needed. Note the name of this new security group, we’ll use it later.

7. Repeat step 5 above with the Lambda function’s security group.

8. Navigate to the <a href="https://console.aws.amazon.com/lambda"> <strong> Lambda console </strong> </a>. In this step, you will move the Lambda function inside your VPC (same as RDS for this example). Find a Lambda function called *<prefix>_dataload_drDatasourcePump*. Click on the function name to open the details. 

A) From the Permissions tab, note the IAM Execution role.

**i.** From the IAM console, add the IAM-named policy called *AWSLambdaVPCAccessExecutionRole* to the Lambda execution role.

B) From the configuration tab of Lambda function, find the VPC section and click on **Edit for VPC Settings**, with the Default setting being *No VPC*.

**i.** Select Custom VPC.  
**ii.** Pick the VPC you would like to use. For this example, it will be the same VPC as your RDS.  
**iii.** Select **Applicable subnets**. If you are not sure, pick all subnets.  
**iv.** Select the security group from Step 6 above.  
**v.** Click on **Save**. It takes about 1-2 mins for these settings to apply.

9. Navigate to  <a href="https://console.aws.amazon.com/vpc"> <strong> VPC console.</strong> </a>
 Select the menu option for *Endpoints*. In this step, you will be creating 3 endpoints that will allow the Lambda function inside the VPC to access other AWS Services.  

a. Create a new Endpoint and pick *S3*. **Save**.  
b. Create a new Endpoint and pick *DynamoDB*. **Save**.  
c. Create a new Endpoint and pick *SQS*. Since SQS uses an interface, you will need to pick the VPC, subnets and Security groups. Pick the same values as the Lambda function in steps **8.b.ii, 8.b.iii** and **8.b.iv.**  

At this point, you should be able to connect to your RDS instance using the Qrvey Composer application by creating a connection and then creating a dataset using that connection.

## Additional Considerations

* Moving the Lambda function inside a VPC does not have internet access. So if you want to connect to external data sources (outside the VPC), you will need to add an Internet Gateway or NAT Gateway depending on your use-case. For internal data sources or services inside AWS, you can repeat the steps to create a VPC Endpoint for that service or use security groups to access.
* There may be additional charges for VPC endpoints.

