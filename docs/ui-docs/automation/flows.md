---
id: flows
title: Flow Overview 
sidebar_label: Flow Overview
---

<div style="text-align: justify">

A Flow is a series of components that work together to perform a task. They can be used to automate just about anything in Qrvey, adding power and flexibility to your applications. In this article, we’ll discuss the main components of a workflow as well as how to create one.

## Component Types
Workflows are built from the following types of components:

 **Triggers** - an event that initiates execution of a flow.

 **Conditions** - filters that can allow or prevent actions from happening.

 **Send Actions** - actions which send results to some user or process.

 **Data Actions** - actions which access or update data.

For example, you may have a simple Flow that says, when a new survey response is received (*trigger*) send me an alert email (*action*). Or you may choose to send a follow-up survey (*action*) when a new response is received (*trigger*) but only if the respondent is from the U.S. (*condition*). These are just two basic examples of Flows in action. The amazing variety of business use cases which can be implemented through Flows are only limited by your imagination.

## Creating a Flow
To create a Flow, choose **Flows** from the left-hand menu and then click the **Create Flow** button.

![1_flows](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.1_flows/1_flows.png#thumbnail)

Give your new Flow a name and a description, then click **Create**.

![2_flows](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.1_flows/2_flows.png#thumbnail-60)

You’ll now be placed in the Flow design area where you can begin to build your Flow. The Flow designer consists of a blank canvas on the left and a palette with all of the components you’ll need on the right. The components are grouped by type.

Start by clicking on your desired trigger type and dragging it onto your canvas. Configure the trigger and then continue to drag and drop condition and action components onto your canvas to build your Flow. Components will automatically be run from from top to bottom on the page. 

![3_flows](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.1_flows/3_flows.png#thumbnail)

Changes are saved automatically as you build. 

## Activating a Flow

When you have finished building your flow, click the**Activate** button in the upper-right corner to make it operational. 
 
![2_triggers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.2_triggers/2_triggers.png#thumbnail-20)

Once your Flow is active the **Activate** button will be replaced with a **Pause** button, which can be used to suspend the Flow at any stage.

## Flow Activity Log
Every Flow keeps a log of all its activity, including any changes made by creators and every time the Flow is triggered.  If you ever have questions about how your Flow is performing, the activity log is the place to see detailed information about it’s activities, errors and events. 

To access the activity log, click the **Activity** link in the top blue toolbar. The activity log can be searched and filtered to make finding relevant events easier. 

![4_flows](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.1_flows/4_flows.png#thumbnail)

Use the **Refresh** button to fetch new activity log events.

