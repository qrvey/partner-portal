---
id: upgrading-new-version
title: Upgrading To A New Version
sidebar_label: Upgrading To A New Version
---

<div style="text-align: justify">

To install a new version of Qrvey to update your deployment, follow these steps:
1. Get the URL for Cloudformation template for the latest version (<a href="/docs/release-notes/release-last">see release notes</a>).
2. Navigate to the CloudFormation section of your AWS account.
3. From the list of “Stacks” click on the first “Stack” for your Qrvey instance (should be at the very bottom of your “Stacks” list). 

    a. When you open this “Stack”, click on the “Output” tab. This will have a URL with Export name that starts with “AutoDeploy”. 

    b. If you have removed this template for any reason, then create a new stack with the Quick Create URL from step 2 of Initial Installation.

4. Click on the **Update** button top right.
5. Select **Replace current template**. 

    a. Paste the CloudFormation template URL from Step 1 in the “Amazon S3 URL” field.

6. Important: Please select **ALL** subnets in the parameters dropdown. In versions 5.3 and earlier, we required up to 3 subnets. However, from version 5.4 onwards, we require all subnets (with 1 subnet per AZ).
7. Click **Next** for the following steps through the end as we do not require any other settings changed for updates.
8. Click **Submit** at the end to launch the update.
9. When the initial CodePipeline deployment is complete, launch the URL from the “Output” tab in a new window.
10. In the UI, you will see an upgrade button. Click on the **Upgrade** button to start the deployment process. 

    a. This may take about 3-4 hours to complete. 

    b. There is no downtime for the application UI, but we would recommend doing this during off-hours to avoid any issues.

11. Once the upgrade is complete, your new version will be automatically launched for use when your users access the Qrvey UI.

