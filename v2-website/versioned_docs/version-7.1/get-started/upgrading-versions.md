---
id: upgrading-new-version
title: Upgrading to a New Version
sidebar_label: Upgrading to a New Version
---

<div style={{textAlign: "justify"}}>

To install a new version of Qrvey to update your deployment, follow these steps:
1. Get the URL for the latest version of the CloudFormation template (see <a href="/docs/release-notes/release-last" target="_blank">release notes</a>).
2. Navigate to the CloudFormation section of your AWS account.
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>  a. From the list of “Stacks” find the cloudformation stack for Qrvey’s Deployment manager. To identify if the stack exists go to “Exports” tab in CloudFormation console and look for Export Name = AutoDeployAppURL. If you have removed this template for any reason, then create a new stack with the Quick Create URL from step 2 of <a href="/docs/get-started/deploying-aws/initial-installation" target="_blank">Initial Installation</a>.</li></ul>

3. If the stack exists then:
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Click on the <strong>Update</strong> button in the top right.</li>
<li>b. Select <strong>Replace current template</strong>. </li>
<li>c. Paste the CloudFormation template URL from Step 1 in the “Amazon S3 URL” field.</li></ul>

4. Please select the same subnets in the parameters dropdown that were used in the initial deployment. Click **Next** for the following steps through the end as we do not require any other settings changed.

5. Click **Submit** at the end to launch the update.

6. When the initial CodePipeline deployment is complete, launch the URL from the “Output” tab in a new window.

7. In the UI, you will see a button for upgrade. Click on the **Upgrade** button to start the deployment process. 
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> a. This may take about 3-4 hours to complete.</li> 
<li> b. There is no downtime for the application UI, but we would recommend doing this during off-hours to avoid any issues.</li> </ul>

8. Once the upgrade is complete, your new version will be automatically launched for use when your users access the Qrvey UI. After the upgrade is done you can delete the Qrvey Deployment Manager CloudFormation stack.

</div>