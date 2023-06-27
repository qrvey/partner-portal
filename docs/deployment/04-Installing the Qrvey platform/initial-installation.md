---
id: initial-installation
title: Initial Installation
sidebar_label: Initial Installation
tags: [CloudOps Engineer]
sidebar_position: 1
---

<div>


The following steps will walk you through installing the Qrvey platform in your AWS account using a CloudFormation template. Before starting these steps, please confirm your AWS Account ID has been enabled for deployment from Qrvey’s side.

1. Log into your AWS account. Select your desired AWS region.

2. Find the link to the CloudFormation template for the latest release in the <a href="/docs-v2/release-notes/release-last" target="_blank">Release Notes</a>. 

3. Navigate to the AWS Cloudformation console in your AWS Account and click on **Create Stack**. Enter the CloudFormation template URL and click on **Next**. This will take you to CloudFormation's quick create page.

    <ul style={{listStyle: 'lower-alpha'}}>
    <li> Enter values for the following parameters and click on <strong>Create Stack</strong>.</li>
    <ul style={{listStyle: 'lower-roman'}}>
    <li>Stack name - name this CloudFormation stack. </li>
    <li>AllowDelete - Flag to lock deletion of the Qrvey Platform in your AWS Account. Set it to true only if you plan to delete the instance. This protects against any accidental deletes.</li>
    <li>SubnetID - pick subnets in your VPC. We recommend using at least 2 public subnets in different AZs for load balancing. All Subnets should belong to the same VPC. These subnets will be attached to a load balancer, so select <b>Public subnets</b> only. You may run into errors if you pick any private subnets. For a deployment with all private subnets, you can use the advanced template, however, there are additional configuration steps after the deployment is done.</li>
    <li>VPC ID - pick the VpcID that matches the subnets. </li>
    <li>WebAppInboundIPrange - IP address that will be added to the security group used by the deployment app. To make it available from any browser, you can use “0.0.0.0/0” or you can insert an IP address or range.</li>
    <li>(Advanced) LoadBalancerScheme - If you are using the Advanced deployment template, you can use this to set the scheme for load balancer. Default is internet-facing and works well for most scenarios with public subnets.</li>
    <li>(Advanced) QrveyInstanceName - If you are using the Advanced deployment template, you can use this to deploy multiple instances of Qrvey Platform in the same region. Specify the name (ex STG or PROD) that will be used to identify this Platform Instance. You can only manage (create/update/delete) 1 instance at a time and then update this parameter to manage a different instance. This name cannot be changed later but is only used to identify the instance internally. Please save this name as you will have to use the exact value for future upgrades and delete.</li>
    </ul>
    </ul>

4. Once the template is ready (it takes about 7 minutes), you can navigate to the *Output* tab and copy the URL. 

    <ul style={{listStyle: 'lower-alpha'}}>
    <li>This URL can be used to launch the deployment app.</li>
    <li>Open a new browser window to launch this URL.</li></ul>

5. In the deployment app, enter your details (name/email/etc) and click on **Install**.

6. You will see a progress bar and deployment will continue even if you close the browser window. At this point, it will be deploying 5 sets of Code Pipelines in your AWS account using a set of CloudFormation templates. 

7. Once the deployment is finished, you will receive a confirmation email with the following details:
<ul style={{listStyle: 'lower-alpha'}}>
<li>A URL to access the Qrvey Composer application</li> 
<li>A URL to access the Admin Center</li> 
<li>An API key for embedding and API calls</li> 
<li>Javascript URLs used with the embedded widgets</li> 
<li>A link to the documentation portal.</li></ul> 

8. Open the Composer URL in a browser window and sign up for an account to start using the application. You can share the same URL with your users, who can sign up for their own accounts.

9. Once the deployment is finished you can delete the first stack that you created in Step 3 above.

</div>