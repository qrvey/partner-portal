---
id: initial-installation
title: Initial Installation
sidebar_label: Initial Installation
---

<div style={{textAlign: "justify"}}>


## Installation Steps
The following steps will walk you through installing the Qrvey platform in your AWS account using a Cloudformation template. Before starting these steps, please confirm your AWS Account ID has been enabled for deployment from Qrvey’s side.

1. Log into your AWS account. Select your desired AWS region.

2. Find the link to the Cloudformation template for the latest release in the <a href="/docs/release-notes/release-last" target="_blank">Release Notes</a> and launch it in your browser window.  <br />
a. This will take you to Cloudformation's quick create page. Enter values for the following parameters and click on **Create Stack**.<br />

    i. Stack name - name this Cloudformation stack. <br />
    ii. SubnetID - pick all public subnets in your VPC. We require having 1 Subnet per Availability Zone (AZ) for your region.<br />
    iii. VPC ID - pick the VpcID that matches the subnets.<br />
    iv. WebAppInboundIPrange - IP address that will be added to the security group used by the deployment app. To make it available from any browser, you can use “0.0.0.0/0” or you can insert an IP address or range.

3. Once the template is ready (it takes about 7 minutes), you can navigate to the “Output” tab and copy the URL. <br />
a. This URL can be used to launch the deployment app. <br />
b. Open a new browser window to launch this URL.

4. In the deployment app, enter your details (name/email/etc) and click on **Install**.

5. You will see a progress bar and deployment will continue even if you close the browser window. At this point, it will be deploying 5 sets of Code Pipelines in your AWS account using a set of Cloudformation templates.
Once the deployment is finished, you will receive a confirmation email with the following details: <br />
a. A URL to access the analytics application<br />
b. A URL to access the admin portal<br />
c. An API key for embedding and API calls<br />
d. Javascript URLs used with the embedded widgets<br />
e. A link to the documentation portal.

7. Open the URL in a browser window and sign up for an account to start using the application. You can share the same URL with your users, who can sign up for their own accounts.


</div>