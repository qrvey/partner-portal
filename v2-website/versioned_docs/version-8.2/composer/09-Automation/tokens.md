---
id: automation-tokens
title: Tokens
sidebar_label: Tokens
tags: [Data Analyst]
sidebar_position: 6
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

Tokens are parameters or variables that act as containers for data. There are three categories of Tokens available: _System_, _Data_, and _User Defined_. Tokens can be used across different contexts in the application. 

## Types of Tokens
**System Tokens:** Standard tokens provided by the system.

**Data Tokens:** Tokens automatically generated from the rows/columns within a dataset and used to reference values from the data.

**User Defined Tokens:** Tokens created by you in text, numeric, or date format.

## Tokens Suggestion Box
The suggestion box is a guide to show which tokens are available. It can be accessed by typing two curly brackets **{{** into the text field where you want to use a token. The tokens that are available for that specific context will be shown on the corresponding drop-down list.

From this box you can also access the Tokens Management Modal by clicking on **Add/Manage Tokens**

![1_tokens](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.5_tokens/1_tokens.png#thumbnail)

## Token Management
This view will show the available data and user defined tokens, grouped into two corresponding tabs. Each token can be given a name, a value, an alias for easy reference, and a description. The User Defined tab is where you can create and manage your own tokens.

![2_tokens](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.5_tokens/2_tokens.png#thumbnail)

In the Data tab, you’ll find automatically generated tokens for each column in your connected datasets. You can add aliases to any or all of these columns as needed. 

![3_tokens](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/automation/3.4.6.5_tokens/3_tokens.png#thumbnail)

## System Tokens
System tokens cannot be edited and are available throughout your application with self-explanatory names. The list of supported system tokens is as follows:

- {{CURRENT_DATE}}
- {{CURRENT_TIME}}
- {{CURRENT_TIMEZONE}}
- {{CURRENT_MONTH}}
- {{CURRENT_MONTH_NAME}}
- {{CURRENT_MONTH_START}}
- {{CURRENT_MONTH_END}}
- {{LAST_MONTH}}
- {{LAST_MONTH_NAME}}
- {{LAST_MONTH_START}}
- {{LAST_MONTH_END}}
- {{CURRENT_WEEK}}
- {{CURRENT_WEEK_START}}
- {{CURRENT_WEEK_END}}
- {{LAST_WEEK}}
- {{LAST_WEEK_START}}
- {{LAST_WEEK_END}}
- {{CURRENT_QUARTER}}
- {{CURRENT_QUARTER_START}}
- {{CURRENT_QUARTER_END}}
- {{LAST_QUARTER}}
- {{LAST_QUARTER_START}}
- {{LAST_QUARTER_END}}
- {{CURRENT_YEAR}}
- {{CURRENT_YEAR_START}}
- {{LAST_YEAR}}
- {{LAST_YEAR_START}}
- {{LAST_YEAR_END}}
- {{DAY}}
- {{DAY_OF_WEEK}}
- {{DAY_OF_YEAR}}
- {{NOW}}
- {{TODAY}}
- {{TODAY-7}}
- {{TODAY-30}}
- {{TODAY-60}}
- {{TODAY-90}}
- {{TODAY-120}}
- {{TODAY-365}}
- {{YESTERDAY}}
- {{TOMORROW}}

</div> 