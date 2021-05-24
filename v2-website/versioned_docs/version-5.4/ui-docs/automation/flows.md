---
id: flows
title: Flow Overview
sidebar_label: Flow Overview
---
<div style={{textAlign: "justify"}}>

A Flow is a series of components that work together to perform a task. They can be used to automate just about anything in Qrvey Composer, adding power and flexibility to your applications. In this article, we’ll discuss the main components of a workflow and explain how to create one.

## Component Types

Workflows are built from the following types of components:

 **Triggers** - events that initiate execution of a flow.

 **Conditions** - filters that can allow or prevent actions from happening.

 **Send Actions** - actions which send results to a user or process.

 **Data Actions** - actions which access or update data.

For example, you can create a simple Flow so that whenever a new survey response is received (_trigger_), you are sent an alert email (_action_), or maybe you prefer to choose sending a follow-up survey (_action_) when a new response is received (_trigger_), but only if the respondent is from the U.S. (_condition_). These are just two basic examples of Flows in action. The amazing variety of business use cases, which can be implemented through Flows, are limited only by your imagination.

## Creating a Flow

To create a Flow, choose **Flows** from the left-hand menu and then click the **Create Flow** button.

![1_flows](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.1_flows/1_flows.png#thumbnail)

Give your new Flow a name and a description, and click **Create**.

![2_flows](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.1_flows/2_flows.png#thumbnail-60)

You’ll now be placed in the Flow design area where you can begin building your Flow. The Flow designer consists of a blank canvas on the left and a palette with all of the components you’ll need on the right. These components are grouped by type.

Start by clicking on your desired trigger type and dragging it onto your canvas. Configure the trigger and then continue to drag condition and action components onto your canvas to build your Flow. Components will automatically be run from from the top to bottom of the page. 

![3_flows](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.1_flows/3_flows.png#thumbnail)

Changes are saved automatically as you build. 

## Activating a Flow

When you have finished building your Flow, click the **Activate** button in the upper-right corner to make it operational. 

![2_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/2_triggers.png#thumbnail-20)

Once your Flow is active, the **Activate** button will be replaced with a **Pause** button, which can be used to suspend the Flow at any stage.

## Flow Activity Log

Every Flow keeps a log of all its activities, including any changes made by creators and every occasion the Flow is triggered.  If you have any questions about how your Flow is performing, the activity log is the place to see detailed information about its activities, errors and events. 

To access the activity log, click the **Activity** link in the top blue toolbar. The activity log can be searched and filtered to make finding relevant events easier. 

![4_flows](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.1_flows/4_flows.png#thumbnail)

Use the **Refresh** button to fetch new activity log events.
</div>