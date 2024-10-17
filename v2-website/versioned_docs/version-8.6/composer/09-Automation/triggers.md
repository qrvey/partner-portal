---
id: automation-triggers
title: Triggers
sidebar_label: Triggers
tags: [Data Analyst]
sidebar_position: 2
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

**Triggers** are the components that begin, i.e. initiate, a **Flow**. This article describes the trigger types and how to use them in your Flows. If you’re not yet familiar with the mechanics of a Flow, see [Overview of Automation](../09-Automation/overview-of-automation.md).

## Scheduling
Use the scheduling trigger for when you need the flow to start by assigning the date(s) and time(s) of your choosing. Simply select the frequency and the time you would like your trigger to run. You can also choose a start date and an ending date.

![1_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/1_triggers.png#thumbnail)


When you finish setting your scheduling presets, you may complete your flow by adding conditions and actions.

## Data Load Finish
Use the Data Load Finish trigger when you need the flow to be triggered each time a data load job is finished on the dataset. Select the dataset name you would like this flow to monitor. This trigger supports only managed datasets that have been loaded at least once. 

![Trigger-Data-Load-Finish-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/bulk_uploads/version_84/Trigger-Data-Load-Finish-84.png)


## Records Added
Use the **Records Added** trigger for when you need the flow to run as soon as new data is received – for example, when a new record has been added to a data source or when a new response is received on a specified web form. This trigger also starts each time a record is added by a data load process.

To set up this trigger, just drag and drop the **Records Added** trigger, then select the name of the dataset or web form you would like to monitor. The flow will start when a change is detected.

Note, that only active web forms can be selected for the **Records Added** trigger. If your web form is not activated yet, it will not appear on the list.

![Trigger-Records-Added-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/bulk_uploads/version_84/Trigger-Records-Added-84.png)

>**Note**: This trigger will run with every added record and may have substantial cost implications, depending on the number of records added.

## Records Updated
Use **Records Updated** trigger if you need the flow to start whenever information in an existing dataset or web form has been updated. This trigger also starts each time a record is updated by a data load process. Select the dataset name you would like this flow to monitor, then continue with your conditions and actions. 

![Trigger-Records-Updated-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/bulk_uploads/version_84/Trigger-Records-Updated-84.png)

>**Note**: This trigger will run with every updated record and may have substantial cost implications, depending on the number or records updated. 

## Webhook
Use the **Webhook** trigger when you need the flow to be triggered from external sources, via a URL. Selecting this trigger will automatically generate a unique URL for the flow you are building. You can quickly copy the link by clicking the **Copy** button. Use this URL in your external application which would trigger the flow.

![Webhook-Trigger-83](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/Webhook-Trigger-83.png)

Click the **Generate Another** button whenever you wish to replace the current URL with another. 

>**Note:** Replacing a URL cannot be undone so please use this feature carefully.

To prevent unauthorized end users from starting a flow using the webhook URL, select **Require Authentication**. This option requires end users to be authenticated using JSON web tokens (JTW). For more information, see [Embedding Widgets Using a Security Token](https://partners.qrvey.com/docs/software-developer/Embedding%20Qrvey%20Widgets/widget-authentication).

</div>