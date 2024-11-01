---
id: initial-installation
title: Initial Installation
sidebar_label: Initial Installation
tags: [CloudOps Engineer]
sidebar_position: 1
displayed_sidebar: getting-started
---



The following steps will walk you through installing the Qrvey platform in your AWS account using a CloudFormation template. Before starting these steps, please confirm your AWS Account ID has been enabled for deployment from Qrvey’s side.

1. Log into your AWS account. Select your desired AWS region.
2. Find the link to the CloudFormation template for the latest release in the [Release Notes](../../release-notes/release-and-upgrade-notes). 
3. Navigate to the AWS Cloudformation console in your AWS Account and click on **Create Stack**. Enter the CloudFormation template URL and click on **Next**. This will take you to CloudFormation's quick create page.
- Enter values for the following parameters and click on **Create Stack**.
    - **Stack Name** - name this CloudFormation stack. 
    - **AllowDelete** - Flag to lock deletion of the Qrvey Platform in your AWS Account. Set it to true only if you plan to delete the instance. This protects against any accidental deletes.
    - **SubnetID** - pick subnets in your VPC. We recommend using at least 2 public subnets in different AZs for load balancing. All Subnets should belong to the same VPC. These subnets will be attached to a load balancer, so select **Public subnets** only. You may run into errors if you pick any private subnets. For a deployment with all private subnets, you can use the advanced template, however, there are additional configuration steps after the deployment is done.
    - **VPC ID** - pick the VpcID that matches the subnets. 
    - **WebAppInboundIPrange** - IP address that will be added to the security group used by the deployment app. To make it available from any browser, you can use “0.0.0.0/0” or you can insert an IP address or range.
    - **(Advanced) LoadBalancerScheme** - If you are using the Advanced deployment template, you can use this to set the scheme for load balancer. Default is internet-facing and works well for most scenarios with public subnets.
    - **(Advanced) QrveyInstanceName** - If you are using the Advanced deployment template, you can use this to deploy multiple instances of Qrvey Platform in the same region. Specify the name (ex STG or PROD) that will be used to identify this Platform Instance. You can only manage (create/update/delete) 1 instance at a time and then update this parameter to manage a different instance. This name cannot be changed later but is only used to identify the instance internally. Please save this name as you will have to use the exact value for future upgrades and delete.

4. Once the template is ready (it takes about 7 minutes), you can navigate to the *Output* tab and copy the URL. 
    - This URL can be used to launch the deployment app.
    - Open a new browser window to launch this URL.

5. In the deployment app, enter your details (name/email/etc) and click on **Install**.

6. You will see a progress bar and deployment will continue even if you close the browser window. At this point, it will be deploying 5 sets of Code Pipelines in your AWS account using a set of CloudFormation templates. 

7. Once the deployment is finished, you will receive a confirmation email with the following details:
    - A URL to access the Qrvey Composer application.
    - A URL to access the Admin Center.
    - An API key for embedding and API calls.
    - Javascript URLs used with the embedded widgets.
    - A link to the documentation portal.

8. Open the Composer URL in a browser window to start using the application.

9. Once the deployment is finished you can delete the first stack that you created in Step 3 above.