---
id: version-4.1-conditionals-intro
title: Conditionals
sidebar_label: Conditionals
original_id: conditionals-intro
---
<div style="text-align: justify">

The **Conditional Data Rule**, as in software development, is a feature that will perform different actions depending on the boolean result of the condition specified by the user. This condition can evaluate to `true` or `false`.

This rule, follows the standard **Data Rules** structure, as follow:

```json
"id": "conditionalFunctionId",
"function": {
    "conditional": {
        "statement": "4 > 5",
        "trueOutput": "'yes'",
        "falseOutput": "'no'"
    }
}
```
Where the `id` field is the identifier to access the result of the condition, and `function` defines the object type of Data Rule to apply. This object contains three basic properties:

|Property|description|
|--------|-----------|
|`statement`| boolean condition to be evaluated|
|`trueOutput`| output if the condition resolve to true|
|`falseOutput`| output if the condition resolve to false|

>Note: There can be many nested conditionals and complexity as the user wants.

```json
"id": "conditionalFunctionId",
"function": {
    "conditional": {
        "statement": "6 > 5",
        "trueOutput": {
            "conditional": {
                "statement": "7 > 5",
                "trueOutput": {
                    "conditional": {
                        "statement": "4 > 5",
                        "trueOutput": "'yes'",
                        "falseOutput": "'no'"
                    },
                "falseOutput": "'no'"
            }
        },
        "falseOutput": {
            "conditional": {
                "statement": "4 > 5",
                "trueOutput": "'yes'",
                "falseOutput": "'no'"
            }
    }
}
```

The statements that can be evaluated are: mathematical operations, field existence, data validation from the user data. Almost any value can be used.

## Sample
```json
"id": "conditionalFunctionId",
"function": {
    "conditional": {
        "statement": "$otherDataRuleId.value > 100",
        "trueOutput": "{{$userData.field1}}",
        "falseOutput": "Value lower than the limit."
    }
}
```
In this example, `$otherDataRuleId` holds the result of another **Data Rule**, and this value is evaluated in the statement. Meanwhile, `{{$userData.field1}}` is a reference to the user data, this will be replaced during the execution time.

>Note, when the data comes from user input files, we use the double curly brackets. However when the data comes from another Data Rule, we do not use the double curly brackets.
