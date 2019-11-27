---
id: conditions
title: Conditions
sidebar_label: Conditions
---

<div style="text-align: justify">

Conditions are powerful attributes that you can add to Triggers so they only fire when certain conditions are met. In this article, we’ll review what conditions are and how you can deploy them in your Flows to take action.

## Adding Conditions
Conditions can be added to certain triggers, such as a **New Data** trigger, to define scenarios that must be met before the trigger will run. They cannot be added to triggers such as scheduling, which are run based on the timings you set, but they can be added to certain actions that lookup or search existing datasets. 

To add a condition, simply drag the **If** condition onto the canvas, below the trigger you are working on.

![1_conditions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.3_conditions/1_conditions.png#thumbnail)

Next, you’ll define the specific conditions that need to be met. Any actions you drag below the condition will be run when the condition is met. Actions dragged below the **Else** box will be run when the conditions are not met.

## Types of Conditions
Qrvey offers two different types of conditions:

* **If Field**- allows you to specify a particular field that should trigger the action.
* **If Metric**- allows you to specify a metric threshold that will trigger the action.
* 
![2_conditions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.3_conditions/2_conditions.png#thumbnail-60)

## Using Conditions
Once you have selected your conditions, you may drag as many Action blocks to your Flow as needed. Conditions and actions will be nested so you can easily follow along visually to what is taking place and when.

![3_conditions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.3_conditions/3_conditions.png#thumbnail)

You’ll notice in the example above, there are additional special conditions present, namely three different conditions for the **Search Records** action, which defines discreet conditions for No_One_Multiple records found.

# Quiz Conditions
Quizzes have three unique conditions all to themselves. They are **If Score** **If Result** and **If Rank**. With every quiz response, a score is automatically calculated and that score is automatically compared to all of the other responses to determine its rank (first place, second place, and so on). You can use the Score condition to create special Flows for quizzes that receive a score of 90% or better, for example, or you can use the rank condition to send special messages to your Top 10 finishers.

![4_conditions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.3_conditions/4_conditions.png#thumbnail)

**Note**: A quiz’s rank is determined in real time and represents that person’s position on the leaderboard at the time of their submission. Ranks will change with every submission received. As a result, if you are sending notifications based on a rank condition, it is more accurate to say “You are _currently_ in first place” rather than “You _are_ in first place”. While the latter is correct at that time, it could change with the next quiz submission.

**Also Note**: In the event of a tie, with two or more submissions having the exact same score, rankings are determined in the order in which they were received. The earlier the quiz was received, the higher its rank will be.