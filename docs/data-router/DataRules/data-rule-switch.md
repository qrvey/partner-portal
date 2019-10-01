---
id: data-router-switch
title: Overview
sidebar_label: Case
---

<div style="text-align: justify">

The **Case Data Rule**, as in software development, is a feature that will perform different actions depending on the variable or the option passed to the operation. This condition can be evaluated to any data type [boolean, string, number]. 
> This Data Rule, behave like a Switch/Case, as in most programing language.

This rule, follows the standard **Data Rules** structure, as follow:

```json
"id": "caseStatement",
"function": {
        "case": {
            "key": "condition",
            "cases": [
                {
                    "when": ["condition option is met"],
                    "then": "action to take"
                },
                .
                .
                .
                {
                    "when": ["condition option is met"],
                    "then": "action to perform"
                }
            ],
            "default": "The default action to take if the condition is not met"
        }
}
```
Where the `id` field is the identifier to access the result of the Data Rule, and `function` defines the object type of Data Rule to apply. This object contains three basic properties:

|Property|description|
|--------|-----------|
|`key`| condition or option to evaluate the cases|
|`cases`| Array of options, to implement if the condition is met|
|`default`| default action to take if no `case` is used|

**Example** Case Data Rule:

```json
"id": "caseStatement",
"function": {
    "case": {
        "key": "{{$data.option}}",
        "cases": [
            {
                "when": [
                    "A",
                    "B"
                ],
                "then": "'Double option answer (A or B)'"
            },
            {
                "when": "C",
                "then": "'Unique option taken (C)'"
            },
            {
                "when": "D",
                "then": "'Option D: Does not want to pick one of the above'"
            }
        ],
        "default": "'No option or invalid option in the field'"
    }
}
```

In this example, the options (`{{$data.option}}`) are ["A","B","C","D"] and for each one of those options there will be a `Case` provided. If no option is provided or another value is provided, the action will be the `Default` one.

> _Note: the **then** value is a string which is evaluated as an expression. In the example above the **then** values are string values, hence the use of double outer quotes and single inner quotes - ie "'value'"._