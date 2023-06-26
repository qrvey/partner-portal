---
id: automation-send-actions
title: Actions - Send
sidebar_label: Actions - Send
tags: [Data Analyst]
---

<div style={{textAlign: "justify"}}>

In this article, we’ll review all of the Flow actions available under **Send Actions.** 

![send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/send1.png#thumbnail-40) 

## Send to Webhook
Use the **Send to Webhook** action to send data to an external Webhook URL. Just enter the URL you’d like to call and click **Add Parameters** to add data or tokens to your submission. 

![send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/2_send-actions.png#thumbnail-60)

![send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/3_send-actions.png#thumbnail-60)
  

## Send an Email
Use the **Send Email** action to send notifications and alerts via email. To use this action, enter a comma-delimited list of email addresses along with a subject and a message. The message body can be formatted with any of the standard options provided, including bold, italic, and underline. There are also justification and link options.

![send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/send2.png#thumbnail-60)

You’ll see your corporate signature at the bottom of the action card, added by your admin user from the Admin app. The signature will appear by default at the bottom of every email sent by the action.

![send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/send3.png#thumbnail-60)

If you do not want to include your corporate signature as part of your emails’ body, uncheck the option Include Signature located on the right side of the toolbar.


In the lower-left corner, you’ll find the **Insert / Attach** menu with different types of attachments that can be added to your message. Any number of attachments can be added to a single email. These options have been explained below. 


### Insert Web Form
You can choose the type of web form that you wish to attach to the email. This narrows down the list of all web forms to only show the selected type in the next drop down. Select the desired web form from the list to have it be attached to the email. 

![send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/send4.png#thumbnail-60)

### Attach File
Using this option you can choose any file from your device to attach to your email. The permitted size depends on your email provider.

### Export Report And Export Pages
You can choose to export any number of reports in PDF or CSV format and attach the results to your email. The exact same feature is also available for pages. Click the **Save** button after selecting the desired reports or pages, as well as the format option, to add those to the list of your attachments.

![send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/send5.png#thumbnail-60)


Once done, you can also apply a filter to any datasets used in the report or page from the filter icon next to the attachment. This filter works on top of any filters that have been set in the report or page. 

![send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/send6.png#thumbnail-60)

### Export Chart
If instead of full pages or reports individual charts need to be attached to the email you can choose the Export Chart option and pick any number of charts from the list, the desired format to export the data, and save the attachment. Chart attachments can also be further filtered for the attachment.


![send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/send7.png#thumbnail-60)


All attachments are shown below the email action card and can be further edited or deleted from here.

>**Note**: There is a 10.5 MB limit to the email attachment volume, collectively.

## Send SMS
The **Send SMS** action is similar to **Send Email** in the way you can send notifications and alerts, only this time via SMS text messages. Just provide any valid mobile phone number and type in your message up to 140 characters.

Any attachments you include in your message will be sent as links that your recipient can click on to open the attachment in their web browser. 

![send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/7_send-actions.png#thumbnail-60)


## Slack Notification

The Slack notification action allows you to send messages to Slack workspaces, channels, and users.

### Set-Up
The first time you choose this action, a pop-up message will appear, asking for a Slack integration code. To acquire this code, click on the Get Code link, and a new tab will open redirecting you to the Slack website, where you can log in with your Slack credentials.

![send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/9_send-actions.png#thumbnail-40)

After logging in, Slack will request permission to allow Qrvey to access your Slack workspaces. Press on the **Allow button** to grant access.

![send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/10_send-actions.png#thumbnail-40)

Once you have granted access to your workspace, a new page will appear with your integration code. **Copy the code** using the Copy Code link, paste it in the Qrvey app, and then press the **Accept** button.

![11_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/11_send-actions.png#thumbnail-40)

![12_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/12_send-actions.png#thumbnail-40)

After completing these steps, Qrvey will save your Slack integration, making it ready to be used in your flows. If you want to add or remove workspaces from your current Slack integration, you can go to the Settings section. Please refer to the Slack Integration Settings section for more information.

### Slack Action

Now you are able to use Slack action in your flows, and the first step you need to make is configuring the workspace, notification user, the channel(s) where you want to send the notification, and the message.

![13_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/13_send-actions.png#thumbnail-60)

- **Workspaces**: The list of all configured workspaces will be available to choose the one you want to send the notification message to.

- **Send Notification as**: You can choose to send the message as Slack bot or as a Slack user. Qrvey will send the message as the user who was chosen to configure the workspace.

- **Recipient**: A list of all channels, users, and groups of the selected workspace will be available. Keep in mind that Slack action supports multiple recipients.

- **Note**: Slack recipients should be different depending on how the action will send the notification. As a Slack bot, only those channels, groups, or users where the bot has permissions to send messages to will appear on the recipient’s list. The same applies when the action sends the notification as a Slack user.

- **Message**: The notification message the action will send to Slack supports the use of Tokens and basic Slack formatting using Markdown.

![14_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/14_send-actions.png#thumbnail-60)

### Slack Integration Settings 

To review the configuration of the Slack integration, you can go to the Qrvey Composer settings options.

![15_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/15_send-actions.png#thumbnail)

If there is no Integrations card, it means you need to add a Slack action on flows, configure your first workspace and then come back to this section to review the settings. After that, you can remove or add workspaces.

To add new workspaces to the Slack integration, just click the three dots on the right side of the card and then click the "**_Add Workspace_**" button.

![16_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/16_send-actions.png#thumbnail-20)

Qrvey will request a new integration code and you will be redirected to the Slack website where you can log in to the workspace you want to add.

If you no longer want to have a specific workspace integration with Qrvey, just click on the “**_X_**” button beside the workspace name.

![17_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/17_send-actions.png#thumbnail-20)

If you want to delete all workspaces that are already part of the integration at once, just click on the “**_Delete_**” button. 

![18_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/18_send-actions.png#thumbnail-20)

Qrvey will remove the Slack Integration card and you will no longer be able to add a new workspace integration from the composer setting options. You will need to add a new workspace integration from the Slack flow action again.

Please note, that removing workspaces integrations will invalidate any Slack action you already have configured in flows.



</div>

