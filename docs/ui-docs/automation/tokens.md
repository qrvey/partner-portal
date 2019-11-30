---
id: tokens
title: Tokens
sidebar_label: Tokens
---

<div style="text-align: justify">

Tokens are parameters or variables which act as containers for data. There are three categories of Tokens available: _System_, _Data_, and _User Defined_. Tokens can be used across different contexts in the application. 

## Types of Tokens
**System Tokens:** Standard tokens provided by the system.

**Data Tokens:** Tokens automatically generated from the rows/columns within a dataset and used to reference values from the data.

**User Defined Tokens:** Tokens created by you and these can be in text, numeric, or date format.

## Tokens Suggestion Box
The suggestion box is a guide to show which tokens are available. It can be accessed by typing two curly brackets **{{** into the text field where you want to use a token. The tokens that are available for that specific context will be shown in the corresponding drop-down list.

From this box you can also access the Tokens Management Modal by clicking on **Add/Manage Tokens**

![1_tokens](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.5_tokens/1_tokens.png#thumbnail)

## Token Management
This view will show the available data and user defined tokens, grouped into two corresponding tabs. Each token can be given a name, a value, an alias for easy reference, and a description.  The User Defined tab is where you can create and manage your own tokens.

![2_tokens](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.5_tokens/2_tokens.png#thumbnail)

In the Data tab you’ll find tokens automatically generated for each column in your connected datasets. You can add aliases to any or all of these columns as needed. 

![3_tokens](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.5_tokens/3_tokens.png#thumbnail)

## System Tokens
System tokens cannot be edited and are available throughout your application, and have self-explanatory names.  The list of supported system tokens is as follows:

- {{SYSTEM.CURRENTDATE}}
- {{SYSTEM.CURRENTTIME}}
- {{SYSTEM.TIMEZONE}}
- {{SYSTEM.MONTH}}
- {{SYSTEM.MONTHSTART}}
- {{SYSTEM.MONTHEND}}
- {{SYSTEM.WEEK}}
- {{SYSTEM.WEEKSTART}}
- {{SYSTEM.WEEKEND}}
- {{SYSTEM.CURRENTQUARTER}}
- {{SYSTEM.CURRENTQUARTERSTART}}
- {{SYSTEM.CURRENTQUARTEREND}}
- {{SYSTEM.CURRENTYEARSTART}}
- {{SYSTEM.YEAR}}
- {{SYSTEM.DAY}}
- {{SYSTEM.DAYOFWEEK}}
- {{SYSTEM.DAYOFYEAR}}
- {{SYSTEM.YESTERDAY}}
- {{SYSTEM.TOMORROW}}