---
id: conditions
title: Conditions
sidebar_label: Conditions
original_id: conditions
---
<div style={{textAlign: "justify"}}>

Conditions are components that can be added to Triggers to test if certain filter criteria are met. Depending on the test results some of the following actions may or may not be executed. This allows for refining trigger conditions, as well as for branching within Flows. In this article, we’ll review what conditions are and how you can deploy them in your Flows to control actions.

## Adding Conditions

Conditions can be added to any trigger to control when the trigger causes the flow to run. For example, you can add a condition to a **New Data** trigger to define scenarios that must be met before the trigger will run. Another possibility is to add a condition to a scheduling trigger, e.g. to send an alert if a metric is outside preset bounds. 

Conditions can also be added to branch options of action components. For example, you could add a condition to the _One Record Found_ branch option of a **Search Records** component to check the details of the found record.

To add a condition, simply drag the **If** condition onto the canvas, and drop it below the trigger or action option it will apply to.

![1_conditions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.3_conditions/1_conditions.png#thumbnail)

Then, define the specific conditions that need to be met. Any actions you drag below the condition will be run when the condition is met. Actions dragged below the **Else** box will be run when the condition is not met.

## Types of Conditions

Qrvey offers different types of conditions depending on the trigger they are attached to:

For all triggers, the following two conditions can be used:

-   **If Field** - allows you to specify a particular field that should trigger the action.
-   **If Metric** - allows you to specify a metric threshold that will trigger the action.

![2_conditions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.3_conditions/2_conditions.png#thumbnail-60)

For a New Data trigger with a Quiz dataset, the following four conditions can also be used:

-   **If Result** - the condition is based on the user's quiz result. For example, the quiz may have a result value of Pass or Fail.
-   **If Retry** - the condition is based on the user's retry count.
-   **If Rank** - the condition is based on the user's quiz rank.
-   **If Score** - the condition is based on the user's quiz score.

![4_conditions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.3_conditions/4_conditions.png#thumbnail)

&gt; **Note**: A quiz’s rank is determined in real time and represents that person’s position on the leaderboard at the time of their submission. Ranks will change with every submission received. As a result, if you are sending notifications based on a rank condition, it is more accurate to say “You are _currently_ in the first place” rather than “You _are_ in the first place”. While the latter is correct at that time, it could change with the next quiz submission.

&gt; **Also Note**: In the event of a tie, with two or more submissions having the exact same score, rankings are determined in the order in which they were received. The earlier the quiz was received, the higher its rank will be.

## Using Conditions

Once you have selected your conditions, you may drag as many Action blocks to your Flow as needed. Conditions and actions will be nested so you can easily follow along visually to see what is taking place and when.

![3_conditions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.3_conditions/3_conditions.png#thumbnail)

In the example above you’ll notice, that the **Search Records** action has three branch options for the cases where _No_, _One_, or _Multiple_ records are found.
</div>