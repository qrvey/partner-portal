---
id: tokens
title: Tokens
sidebar_label: Tokens
---

<div style="text-align: justify">

Tokens are parameters or variables which act as containers for data. Tokens can be categorized into System, Data or User-Defined and can be used across different contexts in the application. 

## Types of Tokens
**System Tokens:** Standard and provided by the system.
User-Defined Tokens: Custom tokens defined by users in the context they are in.
**Data Tokens:** Automatically generated from the rows/columns within a dataset and used to reference values from the data.
**User-Defined Tokens:** Tokens created by you. Can be text, numeric or date formats

## Tokens Suggestion Box
The suggestion box is a guide to show which tokens are available. It can be accessed by typing two curly brackets **{{** into the text field where you want to use a token. The tokens that are available for that specific context will be shown in the corresponding drop-down list.

From this box you can also access the Tokens Management Modal by clicking on **Add/Manage Tokens**

![1_tokens](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.5_tokens/1_tokens.png#thumbnail)

## Token Management
This view will show the available tokens grouped into two tabs. Each token can be given a name, value and optionally, an alias for easy reference and a description.  The User Defined tab is where you can create and manage your own list of token.

![2_tokens](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.5_tokens/2_tokens.png#thumbnail)

In the Data tab, you’ll find tokens automatically generated for every field in your connected datasets. You can add shorter aliases to any or all of these fields as needed. 

![3_tokens](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.5_tokens/3_tokens.png#thumbnail)

## System Tokens
System tokens cannot be edited and are available throughout your application.  The list of supported system tokens is as follows:

{{SYSTEM.CURRENTDATE}}
{{SYSTEM.CURRENTTIME}}
{{SYSTEM.TIMEZONE}}
{{SYSTEM.MONTH}}
{{SYSTEM.MONTHSTART}}
{{SYSTEM.MONTHEND}}
{{SYSTEM.WEEK}}
{{SYSTEM.WEEKSTART}}
{{SYSTEM.WEEKEND}}
{{SYSTEM.CURRENTQUARTER}}
{{SYSTEM.CURRENTQUARTERSTART}}
{{SYSTEM.CURRENTQUARTEREND}}
{{SYSTEM.CURRENTYEARSTART}}
{{SYSTEM.YEAR}}
{{SYSTEM.DAY}}
{{SYSTEM.DAYOFWEEK}}
{{SYSTEM.DAYOFYEAR}}
{{SYSTEM.YESTERDAY}}
{{SYSTEM.TOMORROW}}