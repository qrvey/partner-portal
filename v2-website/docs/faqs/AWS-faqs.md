---
id: aws-faqs
title: AWS FAQs
sidebar_label: AWS FAQs
---
<div style={{textAlign: "justify"}}>

**Q: What are the options and correct process of connecting to an AWS RDS?**

**A:** There are 2 components in Qrvey that connect to a data source and download data. The first one is an ECS container running on an EC2 instance called _qrvey__\*__microservice_ECSInstance_ and the second one is a Lambda function called \*_\_dataload_drDataSourcePump_.   

Both of these components should be able to connect to your data source. For example, if you are using an RDS with restricted access, have a look at <a href="/docs/aws/connect-to-RDS-instance/"> <strong>this document </strong></a> for more details. If your data source is outside of AWS and can only be restricted using IP addresses, then you can configure a VPC with a private subnet and Internet/NAT gateway to get a static IP for Lambda functions.

<br />

**Q: How can I speed up my data load?**

**A:** Data load times mostly depend on the Elasticsearch cluster. Since there is a cost associated with Elasticsearch, we normally create the minimum resources possible, however, you can always scale up based on your needs. Currently, we are using **1 node t2.small** (10GB). If you want to increase processing speed, we recommend going with **3 node t2.small** or trying higher-cost options like the **t2.medium** or **m4.large instances**. You can refer to <a href="/docs/setup-deployments/manage-aws-elasticsearch/"> <strong>this document </strong></a>  on how to make that change. 

<br />

**Q: I created users but the activation e-mails never arrived in their e-mail address. They have even checked the spam folder.**

**A:** This is probably because your AWS account is in Sandbox mode for Simple Email Service (SES). AWS blocks email going out from SES, which means you need to submit a ticket to AWS to enable the access within one day. To submit the ticket please go to
<a href="https://console.aws.amazon.com/ses/home?region=us-east-1#"> <strong>AWS SES </strong></a> console, click on the **Sending Statistics** menu option, and follow the link from the warning message to request a limit increase. 

<br />

**Q: The installation process created 8 EC2 instances. Is that supposed to happen?**

**A:** Yes. At the moment this is standard for all installations, however, it will change in the near future as we are constantly improving our architecture and planning to remove the EC2 instances. 

<br />

**Q: How do I know if my Elasticsearch cluster is short on space?**

**A:** There are 2 ways to monitor the Elasticsearch cluster.

1.  Using Admin Center:<br />
    i. Login to Admin center using your AWS IAM credentials.<br />
    ii. Click on the DataRouter section.<br />
    iii. Review the node usage in the Elasticsearch section at the bottom. It shows the total vs used space and then per node.

2.  AWS Elasticsearch console <br />
    i. Login to your AWS account with a user that has permissions to access Elasticsearch domains.<br />
    ii. Select “Dashboard” tab from the top-left menu. <br />
    iii. You can review the free storage space in the table for your Elasticsearch cluster.
    
</div>