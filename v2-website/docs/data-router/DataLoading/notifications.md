---
id: notifications
title: Data Loading Notifications 
sidebar_label: Data Loading Notifications
---

<div style={{textAlign: "justify"}}>


## Introduction

The data loading process has two SNS topics (successful and failed loading) where the user can subscribe to receive information about the loading.

## Steps

1. Log in to AWS console.

![data-loading-notifications](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/data-loading-notifications/dataload_1.png#thumbnail-40)


2. Use the search bar to find “Simple Notification Service"  (**SNS**).

![data-loading-notifications](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/data-loading-notifications/dataload_2.png#thumbnail-40)

3. Click on the topics and search for the topics called “xxxxx_dataload_failed_job_notification” and “xxxxx_dataload_successful_job_notification.

	
![data-loading-notifications](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/data-loading-notifications/dataload_3.png#thumbnail)

>**Note**: You can create a subscription to both SNS:
>   * “xxxxx_dataload_failed_job_notification” => to report the failed job (loading).
>   * “xxxxx_dataload_successful_job_notification” => to report the successful job (loading).

4. Select either of the two topics and click on “Create subscription”.
![data-loading-notifications](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/data-loading-notifications/dataload_4.png#thumbnail-40)

5. Select “Email” as the “Protocol”.

![data-loading-notifications](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/data-loading-notifications/dataload_5.png#thumbnail)



6. Add an email address and click on “Create subscription”.

![data-loading-notifications](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/data-loading-notifications/dataload_6.png#thumbnail)


7. Check your email for a message from SNS to confirm the subscription.

![data-loading-notifications](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/data-loading-notifications/dataload_7.png#thumbnail)

</div>