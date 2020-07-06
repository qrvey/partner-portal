---
id: triggers
title: Triggers
sidebar_label: Triggers
---

<div style="text-align: justify">

**Triggers** are the components that begin, i.e. initiate, a **Flow**. In this article, we will detail all of the trigger types in Qrvey and how to use them in your Flows. If you’re not yet familiar with the mechanics of a Flow, consult our **<a href="http://uidoc.qrvey.com.s3-website-us-east-1.amazonaws.com/docs/ui-docs/automation/flows/#flows">Flow Overview article</a>** article.

## Scheduling
Use the scheduling trigger for when you need the flow to start by assigning the date(s) and time(s) of your choosing. Simply select the frequency and the time you would like your trigger to run. You can also choose a start date and an ending date.

![1_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/1_triggers.png#thumbnail)

When you finish setting your scheduling presets, you may complete your flow by adding conditions and actions.

## New Data
Use the **New Data** trigger for when you need the flow to run as soon as new data is received – for example, when a new record has been added to a data source or when a new response is received on a specified web form.

To set up a new data trigger, just drag and drop the **New Data** trigger, then select the name of the dataset or web form you would like to monitor. The flow will start when a change is detected.

Note, that only active web forms can be selected for the **New Data** trigger. If your web form is not activated yet, it will not appear on the list.

![3_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/3_triggers.png#thumbnail)

## Update Data
Use **Update Data** trigger if you need the flow to start whenever information in an existing dataset or web form has been updated. Select the dataset name you would like this flow to monitor, then continue with your conditions and actions. 

![4_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/4_triggers.png#thumbnail)

## Webhook
Use the **Webhook** trigger when you need the flow to be triggered from external sources, via a URL. Selecting this trigger will automatically generate a unique URL for the flow you are building. You can quickly copy the link by clicking the **Copy** button. Use this URL in your external application which would trigger the flow.

![5_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/5_triggers.png#thumbnail)

Click the **Generate Another** button whenever you wish to replace the current URL with another. 

>**Note:** Replacing a URL cannot be undone so please use this feature carefully.