---
id: version-4.1-triggers
title: Triggers
sidebar_label: Triggers
original_id: triggers
---

<div style="text-align: justify">

**Triggers** are the components that begin, i.e. initiate, a **Flow**. In this article, we will detail all of the trigger types in Qrvey and how to use them in your Flows. If you’re not yet familiar with the mechanics of a Flow, consult our **Flow Overview** article.

## Scheduling
Use a scheduling trigger when you need the Flow to be run at the date(s) and time(s) of your choosing. Simply select how frequently you’d like your trigger to run and at what time. You can also choose a start date and an ending date.

![1_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/1_triggers.png#thumbnail)

When you are happy with your scheduling presets, you may complete your Flow by adding **conditions** and **actions**. 

## New Data
Use a **New Data** trigger when you need the Flow to run as soon as new data is received –  For example, when a new record has been added to a data source or when a new response is received on a specified web form. 

To set up a new data trigger, just select the **New Data** trigger, followed by the type and name of the dataset you’d like to monitor. The Flow will be run any time a change is detected.

Note, that only active web forms can be selected for the **New Data** trigger. If your web form is not activated yet, it will not be in the list.

![3_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/3_triggers.png#thumbnail)

## Update Data
Use an **Update Data** trigger if you need the Flow to run whenever information in an existing web form has been updated. Select the type and form name you’d like this Flow to monitor, then continue with your conditions and actions. 

![4_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/4_triggers.png#thumbnail)

## Webhook
Use a **Webhook** trigger when you need the Flow to be triggered from external sources, via a URL. Selecting this trigger will automatically generate a unique URL for the Flow you are building. You can quickly copy the link by clicking the **Copy** button. Use this URL in your external application which triggers the Flow.

![5_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/5_triggers.png#thumbnail)

Click the **Generate Another** button whenever you wish to replace the current URL with another. 

>**Note:** Replacing a URL cannot be undone so please use this feature carefully.