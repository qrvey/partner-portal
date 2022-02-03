---
id: upgrading-to-a-new-version
title: Upgrading to a New Version
sidebar_label: Upgrading to a New Version
---

<div style={{textAlign: "justify"}}>

To install a new version of Qrvey to update your deployment, follow these steps:

1. Get the URL for Cloudformation template for the latest version of the product (see <a href="/docs/release-notes/release-last">release notes</a>).

2. Navigate to the CloudFormation section of your AWS account.

3. From the list of *Stacks* click on the first *Stack* for your Qrvey instance (should be at the very bottom of your Stacks list).
<ul style="list-style: none;">
<li>a. When you open this Stack, click on the <b>Output</b> tab. This will have a URL with an Export name that starts with <i>AutoDeploy</i>.<li>
<li>b. If you have removed this template for any reason, then create a new stack with the Quick Create URL from step 2 of Initial Installation.<li>
</ul>
  
4. Click on the **Update** button in the top right.

5. Select **Replace current template**. 
<ul style="list-style: none;">
<li>a. Paste the CloudFormation template URL from Step 1 in the <i>Amazon S3 URL</i> field.<li></ul>

6. Important: Please select ALL subnets in the parameters dropdown (with 1 subnet per AZ).

7. Click **Next** for the following steps through the end as we do not require any other settings changed for updates.

8. Click **Submit** at the end to launch the update.

9. When the initial CodePipeline deployment is complete, launch the URL from the <i>Output</i> tab in a new window.

10. In the UI, you will see an upgrade button. Click on the **Upgrade** button to start the deployment process. 
<ul style="list-style: none;">
<li>a. This may take about 3-4 hours to complete.<li>
<li>b. There is no downtime for the application UI, but we would recommend doing this during off-hours to avoid any issues.</ul>

11. Once the upgrade is complete, your new version will be automatically launched for use when your users access the Qrvey UI.



</div>