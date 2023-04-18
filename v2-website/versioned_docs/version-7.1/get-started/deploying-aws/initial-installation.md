---
id: initial-installation
title: Initial Installation
sidebar_label: Initial Installation
---

<div style={{textAlign: "justify"}}>


## Installation Steps
The following steps will walk you through installing the Qrvey platform in your AWS account using a CloudFormation template. Before starting these steps, please confirm your AWS Account ID has been enabled for deployment from Qrvey’s side.

1. Log into your AWS account. Select your desired AWS region.

2. Find the link to the CloudFormation template for the latest release in the <a href="/docs/release-notes/release-last" target="_blank">Release Notes</a>. 

3. Navigate to AWS Cloudformation console in your AWS Account and click on **Create Stack**. Enter the CloudFormation template URL and click on **Next** 

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. This will take you to CloudFormation's quick create page. Enter values for the following parameters and click on <strong>Create Stack</strong>.</li></ul>
<ul style={{listStyle: 'none', marginLeft: '35px'}}>
<li>  i. Stack name - name this CloudFormation stack. </li>
<li>  ii. SubnetID - pick subnets in your VPC. We recommend using at least 2 public subnets in different AZs for load balancing. Please make sure the EC2 instance type “t3.micro” is available in your selected AZ. You can use <a href="https://aws.amazon.com/premiumsupport/knowledge-center/ec2-instance-type-not-supported-az-error/" target="_blank">this link</a> to verify the instance availability. These subnets will be attached to a load balancer, so select <b>Public subnets only</b>. You may run into errors if you select any private subnets.  </li>
<li>  iii. VPC ID - pick the VpcID that matches the subnets. </li>
<li>  iv. WebAppInboundIPrange - IP address that will be added to the security group used by the deployment app. To make it available from any browser, you can use “0.0.0.0/0” or you can insert an IP address or range.</li>
</ul>

3. Once the template is ready (it takes about 7 minutes), you can navigate to the *Output* tab and copy the URL. 
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> a. This URL can be used to launch the deployment app.</li>
<li>b. Open a new browser window to launch this URL.</li></ul>

4. In the deployment app, enter your details (name/email/etc) and click on **Install**.

5. You will see a progress bar and deployment will continue even if you close the browser window. At this point, it will be deploying 5 sets of Code Pipelines in your AWS account using a set of CloudFormation templates.
Once the deployment is finished, you will receive a confirmation email with the following details:
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> a. A URL to access the analytics application</li> 
<li> b. A URL to access the admin portal</li> 
<li> c. An API key for embedding and API calls</li> 
<li> d. Javascript URLs used with the embedded widgets</li> 
<li> e. A link to the documentation portal.</li></ul> 

7. Open the URL in a browser window and sign up for an account to start using the application. You can share the same URL with your users, who can sign up for their own accounts.

8. Once the deployment is finished you can delete the first stack that you created in Step 3 above.

</div>