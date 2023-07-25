---
id: faqs-all-personas
title: Frequently Asked Questions (FAQs)
sidebar_label: FAQs
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst, All Personas]
sidebar_position: 3
---

<div style={{textAlign: "justify"}}>

This article contains frequently asked questions organized by user persona. If you still can't find what you're looking for, [ask us](ask-us.md)!

## FAQs for Solution Architects

### I had previously created users. Will they be able to see the chart’s data if record level security is enabled?

**A**: No, visuals will not render correctly, and a **“No data found”** message will appear in all charts. You will have to assign a security token to all the users who want to access charts and datasets with security enabled to see the data. After adding the security token, the users need to log out and log in again to update their permissions.

## FAQs for Data Analysts

### I published a dashboard (or an application), but when I click the link to see the dashboard and share it with a user, a message appears saying the dashboard is not available.**

**A**: Navigation has to be added for a dashboard to show up. Click on the navigation tab and add the dashboard that you wish to share to the right. The dashboard will now be available upon publishing the application from the URL that is accessible from the link icon.

<br />
    
### I have filters on my dashboard that I see in the side panel of the Dashboard Builder, but they don’t show up for my end users when I publish the application.**

**A**: In order to enable the side panel for your end-users, you have to insert the filter panel on your dashboard from the **Insert** menu in the top-left corner of the Dashboard Builder.

![Insert Filter Controls](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/faqs/faq_pub_apps_82.png)


## FAQs for Software Developers

### Where can I find my API key?

**A:** You received a welcome email when your environment was first set up. That email has all the information about your domain and it also contains your unique API key to access Qrvey’s widgets and APIs.

![1_faq](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/faqs/General/general_faq1.png)

Please contact us at: help@qrvey.com if you cannot locate the email. 

<br />

### What is app id (used as app_id or appid) that is required in the APIs and widgets, and where can I find it?

**A:** App id, or application id, is the unique identifier of the Qrvey “application” that houses your webforms, datasets, visualizations, etc. If you go to your Qrvey Composer and enter any application, you can get that application’s id from the url, following the “application” key:

![2_faq](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/faqs/faq-appID.png#thumbnail)

Alternatively, if an API is used to create an application programmatically, the app id is returned as part of the response.

<br />

### Where can I find the user id (used as user_id or userid) that is required in the APIs and widgets?

**A:** When a user is logged into Qrvey Composer, their user id can be found in the userprofile request by inspecting any page in the browser:

![2_faq](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/faqs/faq-userid.png#thumbnail)

Alternatively, if an API is used to create a user programmatically, the user id is returned in the response. It can also be obtained by using the “search” option in the API to get the list of users. See the API Reference for more details on the subject.

> **Note**: There are two types of users in Qrvey: Creators, and End Users. APIs to manage “creator” users are part of the core collection, while those to manage end users are part of the automation set.

## FAQs for CloudOps Engineers

### How do I know if my Elasticsearch cluster is short on space?

**A:** There are 2 ways to monitor the Elasticsearch cluster.
1. Using Admin Center: <br />
    i.  Login to Admin center using your AWS IAM credentials <br />
    ii. Click on DataRouter section <br />
    iii. Review the node usage in the  Elasticsearch section at the bottom. It shows the total vs used space and then per node. 

2. AWS Elasticsearch console <br />
    i. Login to your AWS account with a user that has permissions to access Elasticsearch domains. <br />
    ii. Select “Dashboard” tab from the top-left menu. <br />
    iii. You can review the free storage space in the table for your Elasticsearch cluster.

<br />

### What are the options and correct process of connecting to an AWS RDS?

**A:** There are 2 components in Qrvey that connect to a data source and download data. The first one is an ECS container running on an EC2 instance called *qrvey*_*_*microservice_ECSInstance* and the second one is a Lambda function called **_dataload_drDataSourcePump*.   

Both of these components should be able to connect to your data source. For example, if you are using an RDS with restricted access, have a look at <a href="/docs/aws/connect-to-RDS-instance/"> <strong>this document </strong></a> for more details. If your data source is outside of AWS and can only be restricted using IP addresses, then you can configure a VPC with a private subnet and Internet/NAT gateway to get a static IP for Lambda functions.

<br />

### How can I speed up my data load?

**A:** Data load times mostly depend on the Elasticsearch cluster. Since there is a cost associated with Elasticsearch, we normally create the minimum resources possible, however, you can always scale up based on your needs. Currently, we are using **1 node t2.small** (10GB). If you want to increase processing speed, we recommend going with **3 node t2.small** or trying higher-cost options like the **t2.medium** or **m4.large instances**. You can refer to <a href="/docs/setup-deployments/manage-aws-elasticsearch/"> <strong>this document </strong></a>  on how to make that change. 

<br />

### I created users but the activation e-mails never arrived in their e-mail address. They have even checked the spam folder.

**A:** This is probably because your AWS account is in Sandbox mode for Simple Email Service (SES). AWS blocks email going out from SES, which means you need to submit a ticket to AWS to enable the access within one day. To submit the ticket please go to
<a href="https://console.aws.amazon.com/ses/home?region=us-east-1#"> <strong>AWS SES </strong></a> console, click on the **Sending Statistics** menu option, and follow the link from the warning message to request a limit increase.  

<br />

### The installation process created 8 EC2 instances. Is that supposed to happen?

**A:** Yes. At the moment this is standard for all installations, however, it will change in the near future as we are constantly improving our architecture and planning to remove the EC2 instances. 

<br />

### How do I know if my Elasticsearch cluster is short on space?

**A:** There are 2 ways to monitor the Elasticsearch cluster.

1. Using Admin Center:<br />
  i. Login to Admin center using your AWS IAM credentials.<br />
  ii. Click on the DataRouter section.<br />
  iii. Review the node usage in the Elasticsearch section at the bottom. It shows the total vs used space and then per node.

2. AWS Elasticsearch console <br />
  i. Login to your AWS account with a user that has permissions to access Elasticsearch domains.<br />
  ii. Select “Dashboard” tab from the top-left menu. <br />
  iii. You can review the free storage space in the table for your Elasticsearch cluster.



</div>