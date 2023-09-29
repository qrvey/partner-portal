---
id: overview-of-automation
title: Overview of Automation
sidebar_label: Overview of Automation
tags: [Data Analyst]
sidebar_position: 1
displayed_sidebar: data-analyst
---

<div style={{textAlign: "justify"}}>

A flow is a series of components that work together to perform a task. They can be used to automate just about anything in Qrvey Composer, adding power and flexibility to your applications. This article discusses the main components of a flow and how to create one.

## Component Types
Workflows are built from the following types of components:

 **Triggers** - events that initiate execution of a flow.

 **Conditions** - filters that can allow or prevent actions from happening.

 **Send Actions** - actions that send results to a user or process.

 **Data Actions** - actions that access or update data.

For example, you can create a simple Flow so that whenever a new survey response is received (*trigger*), you are sent an alert email (*action*), or maybe you prefer to choose sending a follow-up survey (*action*) when a new response is received (*trigger*), but only if the respondent is from the U.S. (*condition*). These are just two basic examples of Flows in action. The amazing variety of business use cases, which can be implemented through Flows, are limited only by your imagination.

## Creating a Flow
1. To create a Flow, choose **Automation** from the left-hand menu and then click the **Create Flow** button.


![flow](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.1_flows/flows1.png#thumbnail)

2. Give your flow a name and start by dragging one of the triggers onto the **Add a trigger to start** area. 

![flow](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.1_flows/create2.png#thumbnail)

3. After adding the trigger, drag and drop a condition or an action under the new trigger area.


![flow](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.1_flows/create3.png#thumbnail) 
 

4. Configure the **Triggers** and **Conditions** dragged onto the workflow workspace.


![flow](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.1_flows/create4.png#thumbnail) 

All changes are saved automatically as you build your flow. 

## Activating a Flow

When you have finished building your Flow, click the **Activate** button in the upper-right corner to make it operational. 
 
![triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/2_triggers.png#thumbnail-20)

A message confirming that your flow is active appears.

![triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/activate.png#thumbnail-40)

Once your Flow is active, the **Activate** button will be replaced with a **Pause** button, which can be used to suspend the Flow at any stage.

![triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/pause.png#thumbnail-20)


## Flow Activity Log
Every Flow keeps a log of all its activities, including any changes made by creators and every occasion the Flow is triggered. If you have any questions about how your Flow is performing, the activity log is the place to see detailed information about its activities, errors and events.

To access the activity log, click the **Activity** link in the top blue toolbar. The activity log can be searched and filtered to make finding relevant events easier. 

Use the **Refresh** button to fetch new activity log events.

![4_flows](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.1_flows/4_flows.png#thumbnail) 

 
</div>