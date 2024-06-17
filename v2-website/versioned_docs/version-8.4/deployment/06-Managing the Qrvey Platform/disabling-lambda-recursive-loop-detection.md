---
id: disabling-lambda-recursive-loop-detection
title: Disabling Lambda Recursive Loop Detection
sidebar_label: Disabling Lambda Recursive Loop Detection
tags: [CloudOps Engineer]
sidebar_position: 2
displayed_sidebar: getting-started
---

<div>

In July of 2023, AWS enabled Lambda recursive loop detection to identify and prevent excessive recursive loops in any Lambda functions. The Qrvey platform uses recursive loops for some long-running tasks with appropriate safeguards to prevent excessive invocations. You must disable Lambda recursive loop detection to avoid an interruption of service. 

For more information about Lambda recursive loop detection, see the following AWS documentation: [Lambda recursive loop detection](https://docs.aws.amazon.com/lambda/latest/dg/invocation-recursion.html).

To prevent an interruption to your Qrvey platform, contact AWS Support to file a support case. For each AWS account where Qrvey is or will be installed, create an AWS Support case with the following information:

**Category**:  
`Tech Support` (or) `Account -> Other Account issues`

**Subject**:  
`Disable Lambda recursive loop detection`

**Body**:  
`Hi AWS Support,`
`Please disable Lambda recursive loop detection in the following regions of this account:`

`<list of regions where Qrvey is deployed>`

`This account has the Qrvey platform deployed. The Qrvey platform uses Recursive Lambda functions, and it implements the necessary checks and failsafes to avoid extra charges.`

</div>
