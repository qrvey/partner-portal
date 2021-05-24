---
id: send-actions
title: Actions - Send
sidebar_label: Actions - Send
original_id: send-actions
---
<div style={{textAlign: "justify"}}>

In this article, we’ll review all of the Flow actions available under **Send Actions.** 

![1_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/1_send-actions.png#thumbnail-40)

## Send to Webhook

Use the **Send to Webhook** action to send data to an external Webhook URL. Just enter the URL you’d like to call and click **Add Parameters** to add data or tokens to your submission.  

![2_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/2_send-actions.png#thumbnail)

![3_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/3_send-actions.png#thumbnail-60)

## Send Email

Use the **Send Email** action to send notifications and alerts via email. To use this action enter a comma delimited list of email addresses along with a subject and a message. The message body can be formatted with any of the formatting tools provided, including bold, italic and underline. There are also justification and list options.

![4_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/4_send-actions.png#thumbnail)

In the lower-right corner, you’ll find the **Insert / Attach** menu with a number of different items you can add to your message. These include a link to any active web form, the results of any web form, the details of a specific response or a file that you specify.

![5_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/5_send-actions.png#thumbnail)

If you choose the **Insert Report** option, you can generate a custom report for any web form. Just select the form type, title of the web form, and give your report a name. You can then select the filtering, sorting, and exclusion items you'd like, along with a limit on the number of rows you'd like to return. Finally, you can select either HTML or CSV as your output format. When you are happy with your selections, click **Generate Report** to return to your Flow.

![6_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/6_send-actions.png#thumbnail)

## Send SMS

The **Send SMS** action is similar to **Send Email** in the way you can send notifications and alerts, only this time via SMS text messages. Just provide any valid mobile phone number and type in your message up to 140 characters.

Any attachments you include in your message will be sent as links that your recipient can click on to open the attachment in their web browser. 

![7_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/7_send-actions.png#thumbnail)

## Fillable PDF

The **Fillable PDF** action allows you to use a PDF template from the File Manager and populate the predefined fields with data from a web form or dataset. 

After choosing this action, simply select the PDF template you'd like to use, then map each of the fields you'd like to populate with the appropriate data. Fields left blank will not be populated.

![8_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/8_send-actions.png#thumbnail)

## Slack Notification

The Slack notification action allows you to send messages to Slack workspaces, channels, and users.

<strong>Set-Up</strong>

The first time you choose this action, a pop-up message will appear, asking for a Slack integration code. To acquire this code, click on the Get Code link, and a new tab will open redirecting you to the Slack website, where you can log in with your Slack credentials.

![9_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/9_send-actions.png#thumbnail-90)

After logging in, Slack will request permission to allow Qrvey to access your Slack workspaces. Press on the **Allow button** to grant access.

![10_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/10_send-actions.png#thumbnail-40)

Once you have granted access to your workspace, a new page will appear with your integration code. **Copy the code** using the Copy Code link, paste it in the Qrvey app, and then press the **Accept** button.

![11_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/11_send-actions.png#thumbnail-80)

![12_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/12_send-actions.png#thumbnail-80)

After completing these steps, Qrvey will save your Slack integration, making it ready to be used in your flows. If you want to add or remove workspaces from your current Slack integration, you can go to the Settings section. Please refer to the Slack Integration Settings section for more information.

<strong>Slack Action</strong>

Now you are able to use Slack action in your flows, and the first step you need to make is configuring the workspace, notification user, the channel(s) where you want to send the notification, and the message.

![13_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/13_send-actions.png#thumbnail-90)

-   **Workspaces**: The list of all configured workspaces will be available to choose the one you want to send the notification message to.

-   **Send Notification as**: You can choose to send the message as Slack bot or as a Slack user. Qrvey will send the message as the user who was chosen to configure the workspace.

-   **Recipient**: A list of all channels, users, and groups of the selected workspace will be available. Keep in mind, that Slack action supports multiple recipients.

-   **Note**: Slack recipients should be different depending on how the action will send the notification. As a Slack bot, only those channels, groups, or users where the bot has permissions to send messages to will appear on the recipient’s list. The same applies when the action sends the notification as a Slack user.

-   **Message**: The notification message the action will send to Slack supports the use of Tokens and basic Slack formatting using Markdown.

![14_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/14_send-actions.png#thumbnail-90)

<strong>Slack Integration Settings</strong>

To review the configuration of the Slack integration, you can go to the Qrvey Composer settings options.

![15_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/15_send-actions.png#thumbnail-90)

If there is no Integrations card, it means you need to add a Slack action on flows, configure your first workspace and then come back to this section to review the settings. After that, you can remove or add workspaces.

To add new workspaces to the Slack integration, just click the three dots on the right side of the card and then click the "**_Add Workspace_**" button.

![16_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/16_send-actions.png#thumbnail-40)

Qrvey will request a new integration code and you will be redirected to the Slack website where you can log in to the workspace you want to add.

If you no longer want to have a specific workspace integration with Qrvey, just click on the “**_X_**” button beside the workspace name.

![17_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/17_send-actions.png#thumbnail-60)

If you want to delete all workspaces that are already part of the integration at once, just click on the “**_Delete_**” button. 

![18_send-actions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.4_send-actions/18_send-actions.png#thumbnail-40)

Qrvey will remove the Slack Integration card and you will no longer be able to add a new workspace integration from the composer setting options. You will need to add a new workspace integration from the Slack flow action again.

Please note, that removing workspaces integrations will invalidate any Slack action you already have configured in flows.
</div>