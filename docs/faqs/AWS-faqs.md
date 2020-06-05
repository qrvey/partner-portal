---
id: faqs-intro
title: Qrvey FAQs
sidebar_label: Qrvey FAQs
---

<div style="text-align: justify">


**Q: What are the options and correct process of connecting to an AWS RDS?**

A: There are 2 components in Qrvey that connect to a data source and download data. The first one is an ECS container running on an EC2 instance called *qrvey*_*_*microservice_ECSInstance* and the second one is a Lambda function called **_dataload_drDataSourcePump*.   
Both of these components should be able to connect to your data source. For example, if you are using an RDS with restricted access, refer to <a href="//"> <strong>this document </strong></a> for details. If your data source is outside of AWS and can only be restricted using IP addresses, then you can configure a VPC with a private subnet and Internet/NAT gateway to get a static IP for Lambda functions.

**Q: How can I speed up my data load?**

A: Data load times mostly depend on the Elasticsearch cluster. Since there is a cost associated with Elasticsearch, we normally create the minimum resources possible, however, you can always scale up based on your needs. Currently, we are using **1 node t2.small** (10GB). If you want to increase processing speed, we recommend going with **3 node t2.small** or trying higher-cost options like the **t2.medium** or **m4.large instances**. You can refer to <a href="/docs/setup-deployments/manage-aws-elasticsearch/"> <strong>this document </strong></a>  on how to make that change. 

**Q: I created users but the activation e-mails never arrived in their e-mail address. They have even checked the spam folder.**

A: This is probably because your AWS account is in Sandbox mode for Simple Email Service (SES). AWS blocks email going out from SES, which means you need to submit a ticket to AWS to enable the access within one day. To submit the ticket please go to
<a href="https://console.aws.amazon.com/ses/home?region=us-east-1#"> <strong>AWS SES </strong></a> console, click on the **Sending Statistics** menu option, and follow the link from the warning message to request a limit increase. 

**Q: The installation process created 8 EC2 instances. Is that supposed to happen?**

A: Yes. At the moment this is standard for all installations, however, it will change in the near future as we are constantly improving our architecture and planning to remove the EC2 instances. 




