---
id: upgrading-new-version
title: Upgrading to a New Version
sidebar_label: Upgrading to a New Version
tags: [CloudOps Engineer]
sidebar_position: 1
displayed_sidebar: deployment-guide
---

<div>

To install a new version of Qrvey to update your deployment, follow these steps:

1. Get the URL for the latest version of the CloudFormation template (see <a href="/docs/release-notes/v8/release-last" target="_blank">release notes</a>).
2. Navigate to the CloudFormation section of your AWS account.
    1. From the list of “Stacks” find the cloudformation stack for Qrvey’s Deployment manager. To identify if the stack exists go to the “Exports” tab in CloudFormation console and look for Export Name = AutoDeployAppURL. If you have removed this template for any reason, then create a new stack with the Quick Create URL from step 2 of [Initial Installation](../deployment/04-Installing%20the%20Qrvey%20platform/initial-installation.md).
    2. If the stack exists then:
        1. Click on the **Update** button in the top right.
        2. Select **Replace current template**.
        3. Paste the CloudFormation template URL from Step 1 in the “Amazon S3 URL” field.
        4. Starting with V7.8 there is a new parameter called “AllowDelete”. Leave it as the default “false” for the upgrade.
        5. If you are using the Advanced template then set the value for LoadBalancerScheme and QrveyInstanceName to match the value used for initial deployment. If you are not sure, leave the values as default (LoadBalancerScheme=’internet-facing’ and QrveyInstanceName=’’).

3. Select the same subnets in the parameters dropdown that were used in the initial deployment. Click **Next** for the following steps through the end as we do not require any other settings changed.
    1. If you are not sure which subnets were used in the initial deployment you can check the subnets defined in an application load balancer called “qrvey-elb-xxxxx”.

4. Click **Submit** at the end to launch the cloudformation stack update.

5. When the cloudformation stack update is complete, launch the URL from the “Output” tab in a new window.

6. In the UI, you will see a button for upgrade. Click on the **Upgrade** button to start the deployment process. 
    1. This may take about 3-4 hours to complete.
    2. There is no downtime for the application UI, but we would recommend doing this during off-hours to avoid any issues.

7. Once the upgrade is complete, your new version will be automatically launched for use when your users access the Qrvey UI. After the upgrade is done you can delete the Qrvey Deployment Manager CloudFormation stack.

</div>