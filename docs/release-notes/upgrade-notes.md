---
id: upgrade-notes
title: Upgrade Notes
sidebar_label: Upgrade Notes
tags: [CloudOps Engineer]
---
<div>

>**Warning:** Please review the notes in this document carefully before using the upgrade link located at the bottom of the page. **Failing to do so may result in breaking changes in your environment or product**. 

<!-- 
### UPGRADE NOTES TITLE
**Starting In Version: (8.5 LTS)**  

`<UPGRADE NOTES GO HERE>`

__________________________ 
-->


### Downtime During Upgrade Process
**Starting In Version: 8.4**  

If you are upgrading the Qrvey Platform from a version older than 8.4 LTS (for example, 7.8.x, 8.0, 8.1, 8.2.x or 8.3), you will experience downtime of approximately 45 to 60 minutes while the upgrade is running. We highly recommend planning the upgrade during off-hours to minimize disruptions to your users. 
__________________________

### New API Domain URL
**Starting In Version: 8.4**  

A new API domain URL has been added to the deployment. For customers that use the default domain (for example, `xyz.qrveyapp.com`), the change is automatic and no action is required. 
Customers that use a custom domain need to set up the new domain with their custom domain provider. For more information, see [Upgrading to Version 8.4 LTS or Later with a Custom Domain](../deployment/07-Upgrading%20the%20Qrvey%20Platform/upgrading-with-custom-domain.md). Qrvey Customer Support is available to assist with this change. 

__________________________

### The Qrvey Composer URL Can Now Be Used As the Widget URL
**Starting In Version: 8.4**  

The Qrvey Composer application now uses the AWS Cloudfront service as the initial entry point. Prior to version 8.4, it used Application Load balancer. With this change, the URL to Qrvey Composer (for example, `xyz.qrveyapp.com`) can be used for both the Qrvey Composer UI and for widgets. If you are using the default `qrveyapp` domain, this change is automatic and you may now use the Qrvey Composer URL as the base URL for widgets. For backward compatibility, the old Widget URL (from Cloudfront) is still valid, but we recommend that you to start using the Qrvey Composer URL. 

For customers using a custom domain for Qrvey Composer and/or widgets, you must update the SSL Certificates and the deployment for this change. Qrvey Customer support is available to assist with this change.

__________________________

### Custom Attribute Support
**Starting In Version: Future (8.3)**

In future releases, custom attributes will no longer be supported as root attributes of Qrvey objects (Dashboards, Datasets, etc). To support custom attributes moving forward, any custom attributes should be added as children of the root `customAttributes` attribute.
__________________________

### AWS Batch - Check Region Support And Additional Configuration For Secure Database Connection
**Starting In Version: 7.8**

To support a new feature to enhance loading data with long-running queries we have started to use AWS Batch service. 

* This service is supported in most regions, but please check its support in your desired region **before** you upgrade.

* If you are using a private database connection, using VPC Peering and subnets/security groups, you have to do an additional, one-time configuration **after** you have upgraded your instance. 
__________________________

### Update to the Widgets Pipeline Needed For Customized URLs
**Starting In Version: 7.6**

If you have changed the Qrvey Composer URL from the default *.qrveyapp.com to a custom URL, and you are upgrading from a version prior to 7.6, you need to update the Widgets Pipeline with the custom composer URL. The necessary steps are documented in [this article](../deployment/customizing-qrvey-deployment.md). This is a one-time change.
__________________________

### Admin Center URL Change
**Starting In Version: 7.4.3 (LTS) and 7.5**

Admin Center is fully serverless as of version 7.5. This change does not affect any of its functionality, however the link to the application, as well as the path in the Admin API endpoints have changed. The base URL is now the same as the Qrvey Composer. 

* The URL for the Admin Center application has been changed to  *[ComposerURL]/admin/app/#/*.
* Any Qrvey APIs with the paths *https://[id]-admin.qrveyapp.com* or *https://[id]-admin-backend.qrveyapp.com* has to be changed to *https://[id].qrveyapp.com/admin/app/#/*.

__________________________

## Upgrade Link
If you wish to upgrade to this version without the help of the CX team, please use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/deploy/v8/autodeployappCloudformation-enterprise-8.5-wunhh.json" target="_blank">this upgrade link</a> and follow the directions in the [Upgrading to a New Version](../deployment/07-Upgrading%20the%20Qrvey%20Platform/upgrading-versions.md) article to upgrade your instance(s).
 
If you have multiple Qrvey instances in the same AWS account AND region or if you deployed the instances in all private subnets (with VPN access) you would have to use the Advanced template to upgrade. Please contact the Qrvey support team to get the Advanced upgrade link and necessary instructions for the upgrade.


</div>