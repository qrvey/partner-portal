---
id: announcements
title: Announcements
sidebar_label: Announcements
---


## Required Update for 8.5.1

Announcement Date: 2024-08-05

**Attention 8.5.1 Customers:** For any 8.5.1 instance deployed prior to 08/05/2024, execute the following to ensure you are running the latest images:

1. Go to "ECS > Clusters" and find the `qrvey-<instanceID>-microservices` cluster.
2. Look for the "Services" section located at the bottom of the page.
3. Identify the worker service `<instanceID>_qrvey_analytics_service` and click on it.
    - Click on "Update Service".
    - Tick the "Force new deployment" checkbox.
    - Select "LATEST" in the Revision dropdown.
4. Go to the bottom of the page and click "Update".
5. Wait for the service to reach Active status.

Follow the same steps for the `<instanceID>_qrvey_core_service`, `<instanceID>_qrvey_job_service`, `<instanceID>_qrvey_worker_service` and `<instanceID>_qrvey_builder_service`.

## NodeJS Deprecation

Announcement Date: 2023-10-03

### Summary
AWS has announced that it is deprecating NodeJS 12, 14, and 16. To avoid any issues as a result of this deprecation, upgrade your instances of the Qrvey platform as described in this announcement. 

### Description
AWS has identified the following deprecation dates for NodeJS 12, 14, and 16 managed Lambda runtimes:
* NodeJS 12 was fully deprecated on April 30, 2023.
* NodeJS 14 will begin deprecation on November 27, 2023.
* NodeJS 16 will begin deprecation on June 12, 2024.

Existing instances of the Qrvey platform that use the deprecated NodeJS runtimes will continue to operate. However, you will not be able to apply changes to existing instances or deploy new instances. 

To maintain support for your Qrvey environments, perform the following upgrades:
* If you are running version 7.8.4 or earlier, upgrade to version 7.8.5 or later before November 27, 2023.
* If you are running version 8.1 or earlier, upgrade to version 8.2.1 or later before March 11, 2024.

We are happy to answer any questions you have regarding the impact the deprecation may have on your Qrvey implementation.
