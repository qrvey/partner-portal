---
id: version-5.3-faqs-intro
title: General
sidebar_label: General
original_id: faqs-intro
---

<div style="text-align: justify">

**Q: How do I know if my Elasticsearch cluster is short on space?**

**A:** There are 2 ways to monitor the Elasticsearch cluster.
1. Using Admin Center: <br>
    i.  Login to Admin center using your AWS IAM credentials <br>
    ii. Click on DataRouter section <br>
    iii. Review the node usage in the  Elasticsearch section at the bottom. It shows the total vs used space and then per node. 

2. AWS Elasticsearch console <br>
    i. Login to your AWS account with a user that has permissions to access Elasticsearch domains. <br>
    ii. Select “Dashboard” tab from the top-left menu. <br>
    iii. You can review the free storage space in the table for your Elasticsearch cluster.

<br>

**Q: Where can I find my API key?**

**A:** You received an email when your environment was first set up. That email has all the information about your domain and it also contains your unique API key to access Qrvey’s widgets and APIs.

Please contact us at: help@qrvey.com if you cannot locate the email. 

<br>

**Q: What is app id (used as app_id or appid) that is required in the APIs and widgets, and where can I find it?**

**A:** App id, or application id, is the unique identifier of the Qrvey “application” that houses your webforms, datasets, visualizations, etc. If you go to your Qrvey Composer and enter any application, you can get that application’s id from the url, following the “application” key:

![1_faq](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/faqs/faq-appID.png#thumbnail)

Alternatively, if an API is used to create an application programmatically, the app id is returned as part of the response.

<br>

**Q: Where can I find the user id (used as user_id or userid) that is required in the APIs and widgets?**

**A:** When a user is logged into Qrvey Composer, their user id can be found in the userprofile request by inspecting any page in the browser:

![2_faq](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/faqs/faq-userid.png#thumbnail)

Alternatively, if an API is used to create a user programmatically, the user id is returned in the response. It can also be obtained by using the “search” option in the API to get the list of users. See the API Reference for more details on the subject.

> **Note**: There are two types of users in Qrvey: Creators, and End Users. APIs to manage “creator” users are part of the core collection, while those to manage end users are part of the automation set.
