---
id: installation-steps
title: Installation Steps
sidebar_label: Installation Steps
---

<div style={{textAlign: "justify"}}>

The following steps will walk you through installing the Qrvey platform in your AWS account using a Cloudformation template. Before starting these steps, please confirm your AWS Account ID has been enabled for deployment from Qrvey’s side.

1. Log into your AWS account. Select your desired AWS region.

2. Find and launch the latest installation script in the first paragraph of the <a href="/docs/release-notes/release-last">latest Release Notes</a>. 

<ul style="list-style: none;">
<li>a. This will take you to Cloudformation's quick create page. Enter values for the following parameters and click on <b>Create Stack</b>.</li>
</ul>
<ul style="list-style: none; margin-left:20px;">
<li>  i. Stack name - name this Cloudformation stack.</li>
<li>  ii. SubnetID - pick all public subnets in your VPC. We require having 1 Subnet per Availability Zone (AZ) for your region.</li>
<li> iii. VPC ID - pick the VpcID that matches the subnets.</li>
<li> iv. WebAppInboundIPrange - IP address that will be added to the security group used by the deployment app. To make it available from any browser, you can use “0.0.0.0/0” or you can insert an IP address or range.</li>
</ul>

3. Once the template is ready (it takes about 7 minutes), you can navigate to the “Output” tab and copy the URL. 
This URL can be used to launch the deployment app. 
Open a new browser window to launch this URL.

<ul style="list-style: none;">
<li> a. This URL can be used to launch the deployment app. <br></li>
<li>b. Open a new browser window to launch this URL. <br></li>
</ul>

4. In the deployment app, enter yoOnce the template is ready (it takes about 7 minutes), you can navigate to the “Output” tab and copy the URL. 
 
5. You will see a progress bar and deployment will continue even if you close the browser window. At this point, it will be deploying 5 sets of Code Pipelines in your AWS account using a set of Cloudformation templates.

6. Once the deployment is finished, you will receive a confirmation email with the following details:
<ul style="list-style: none;">
<li> a. A URL to access the Qrvey Composer<br></li>
<li>b. A URL to access the Admin Center <br></li>
<li>c. An API key for embedding and API calls <br></li>
<li>d. Javascript URLs used with the embedded widgets<br></li>
<li>e. A link to the documentation portal<br></li>
</ul>


Open the Qrvey Composer URL in a browser window and sign up for an account to start using the application. You can share the same URL with your users, who can sign up for their own accounts.

Please see the articles under the <a href="/docs/fundamentals/qrvey-platform-overview">Fundamentals section </a> for a guide on how to start using Qrvey. 

 


</div>