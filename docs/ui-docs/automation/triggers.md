---
id: triggers
title: Triggers
sidebar_label: Triggers
---

<div style="text-align: justify">

**Triggers** are the elements that begin or initiate a **Flow**. In this article, we will detail all of the trigger types in Qrvey and how to use them in your flows. If you’re not already familiar with the mechanics of a Flow, consult our Flow Overview article.

## Scheduling
The scheduling trigger allows any process to be initiated at the date(s) and time(s) of your choosing. Simply select how frequently you’d like your trigger to run and at what time. You can also choose a start date and an ending date.

![1_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/1_triggers.png#thumbnail)

When you are happy with your scheduling presets, you may complete your Flow by adding **conditions** and **actions**. Changes to your Flow are saved automatically, however you will need to **Activate** your flow in the upper-right corner to begin using it. 
 
![2_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/2_triggers.png#thumbnail-20)

## New Data
The **New Data** trigger allows actions to take place as soon as a new data is received, such as when a new record has been added to a data source or a new response is received on a specified web form. 

To set up a new data trigger, just select the **New Data**, followed by the type and name of the dataset you’d like to monitor. The Flow will be run any time a change is detected.

Note that only active web forms can be selected for the **New Data** trigger. If your web form is not yet activated, it will not yet appear on the list.

![3_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/3_triggers.png#thumbnail)

## Update Data
Similar to the New Data trigger, the **Update Data** trigger will execute when information in an existing web form has been updated. Select the type and form name you’d like this Flow to monitor, then continue with your conditions and actions. 

![4_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/4_triggers.png#thumbnail)

## Webhook
Webhooks allow Flows to be triggered from external sources via a URL. Selecting this trigger will automatically generate URL for the specific Flow you are building. You can quickly copy the link by clicking **Copy** or click **Generate Another** at any time you wish to replace the current URL with another. 

_Note: Replacing a URL cannot be undone, use it wisely._

![5_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/5_triggers.png#thumbnail)
