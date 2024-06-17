---
id: data-load-notifications
title: Setting Up Data Load Notifications
sidebar_label: Data Load Notifications
tags: [CloudOps Engineer]
sidebar_position: 2
displayed_sidebar: getting-started
---

<div>

## Introduction

The process of loading data into an OpenSearch index may be initiated from an API call, due to a data load request from the UI or a scheduled data sync. In either case, a data load job is created and executed, and the results of the job are logged in AWS. The loading process has two “SNS topics” associated with it; one for a successful, and the other for a failed job. One can subscribe to either, or both of these topics to receive notification emails about the load process.  
This article is a step-by-step guide to subscribing to these notifications.

## Steps

1. Login to AWS console <br/><br/>
![notifications1](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/notifications/notifications.1.all.png)

2. Use the search bar to find “Simple Notification Service” (SNS). <br/><br/>
![notifications2](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/notifications/notifications.2.all.png)

3. Click on the topics and search for the topics called *[your-instance-id]_dataload_failed_job_notification* and *[your-instance-id]_dataload_successful_job_notification*. <br/><br/>
![notifications3](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/notifications/notifications.3.all.png)

4. Select either of the two topics and click on **Create subscription**. <br/><br/>
![notifications4](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/notifications/notifications.4.all.png)

5. Select “Email” as the “Protocol”. <br/><br/>
![notifications5](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/notifications/notifications.5.all.png)

6. Add an email address and click on **Create subscription**. <br/><br/>
![notifications6](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/notifications/notifications.6.all.png)

7. Check your email for a message from SNS to confirm the subscription. <br/><br/>
![notifications7](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/notifications/notifications.7.all.png)


<br/>
You are now subscribed to receive email notifications when any data load job succeeds/fails. You can always return to the AWS console to stop or make changes to your subscription.

</div>