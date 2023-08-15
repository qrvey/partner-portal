---
id: upgrade-notes
title: Upgrade Notes
sidebar_label: Upgrade Notes
tags: [CloudOps Engineer] 
---
<div>

:::danger :warning: **Warning:**

Please review the notes in this document carefully before using the upgrade link located at the bottom of the page. **Failing to do so may result in breaking changes in your environment or product**. 

:::

### AWS Batch - Check Region Support And Additional Configuration For Secure Database Connection
**Starting In Version: 7.8**

To support a new feature to enhance loading data with long-running queries we have started to use AWS Batch service. 

* This service is supported in most regions, but please check its support in your desired region **before** you upgrade.

* If you are using a private database connection, using VPC Peering and subnets/security groups, you have to do an additional, one-time configuration **after** you have upgraded your instance. 
__________________________

### Update to the Widgets Pipeline Needed For Customized URLs
**Starting In Version: 7.6**

If you have changed the Qrvey Composer URL from the default *.qrveyapp.com to a custom URL, and you are upgrading from a version prior to 7.6, you need to update the Widgets Pipeline with the custom composer URL. The necessary steps are documented in [this article](../../../../docs/deployment/customizing-qrvey-deployment.md). This is a one-time change.
__________________________

### Admin Center URL Change
**Starting In Version: 7.4.3 (LTS) and 7.5**

Admin Center is fully serverless as of version 7.5. This change does not affect any of its functionality, however the link to the application, as well as the path in the Admin API endpoints have changed. The base URL is now the same as the Qrvey Composer. 

* The URL for the Admin Center application has been changed to  *[ComposerURL]/admin/app/#/*.
* Any Qrvey APIs with the paths *https://[id]-admin.qrveyapp.com* or *https://[id]-admin-backend.qrveyapp.com* has to be changed to *https://[id].qrveyapp.com/admin/app/#/*.
__________________________

## Upgrade Link
If you wish to upgrade to this version without the help of the CX team, please use <a href="https://qrvey-autodeployapp.s3.amazonaws.com/deploy/autodeployappCloudformation-enterprise-7.8.5-eazpv.json" target="_blank">this upgrade link</a> and follow the directions in the [Upgrading to a New Version](../../../../docs/deployment/upgrading-versions.md) article to upgrade your instance(s).
 
If you have multiple Qrvey instances in the same AWS account AND region or if you deployed the instances in all private subnets (with VPN access) you would have to use the Advanced template to upgrade. Please contact the Qrvey support team to get the Advanced upgrade link and necessary instructions for the upgrade.

</div>