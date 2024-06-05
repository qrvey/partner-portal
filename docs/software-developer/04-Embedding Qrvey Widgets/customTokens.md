---
id: custom-tokens
title: Using Custom Tokens
sidebar_label: Using Custom Tokens
tags: [Software Developer]
sidebar_position: 4
displayed_sidebar: software-developer
---
<div style={{textAlign: "justify"}}>

The [Bullet chart](../../composer/07-Creating%20Charts/07-Chart%20Types/bullet.md) and [Dial chart](../../composer/07-Creating%20Charts/07-Chart%20Types/dial.md) support the use of custom tokens to set threshold values. Custom tokens are based on individualized criteria and are set dynamically each time the widget is rendered. 

To create a custom token, use the `customTokens` property in the [Dashboard Builder](../04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-builder.md) or [Dashboard View](../04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-view.md) configuration object. Enter key-value pairs. Use either the basic syntax or expanded syntax.

## Basic Syntax
In basic syntax, provide key-value pairs using the following syntax:

```json
"customTokens": {
  "key1": "value1",
  "key2": "value2"
}
```

For example:

```json
"customTokens": {
  "numericKey": 42.6,
  "dateTimeKey": "2023-08-14 10:12:32",
  "textKey": "some Text"
}
```

The tokens display in Qrvey Composer in the following format:

```
{{customTokens.key}}
```

Continuing the example above, the tokens display as follows:

```
{{customTokens.numericKey}}
```

```
{{customTokens.dateTimeKey}}
```

```
{{customTokens.textKey}}
```

## Expanded Syntax

The expanded syntax of `customTokens` supports grouping and labels. In expanded syntax, use the following attributes:
* `key`: the name of the token
* `label`: the label displayed in the token suggestion box
* `value`: the value

Use the following syntax:

```json
"customTokens": {
  "tokenGroupLabel": [{
    "key": "token 1 key",
    "label": "token 1 label",
    "value": "token 1 value"
    },{
    "key": "token 2 key",
    "label": "token 2 label",
    "value": "token 2 value"
    }
  ]
}
```

For example:

```json
"customTokens": {
  "customGroup": [{
      "key": "someNumber",
      "label": "some Number",
      "value": 42.6
      },{
      "key": "someDateTime",
      "label": "some {{DateTime}}",
      "value": "2023-08-14 10:12:32"    
      },{
      "key": "someText",
      "label": "some . Text",
      "value": "This is a sample text"
      }
    ]
}
```

The tokens display in Qrvey Composer in the following format:

`{{customTokens.tokenGroupLabel.key}}`

Continuing the example above, the tokens display as follows:

```
{{customTokens.customGroup.someNumber}}
```

```
{{customTokens.customGroup.someDateTime}}
```

```
{{customTokens.customGroup.someText}}
```


## Apply a Custom Token to a Chart

After the `customToken` property is added to the Dashboard Builder or Dashboard View configuration object, it is ready to use in a chart:

1. Open the embedded Dashboard Builder widget and create or edit a dashboard.
2. Open Chart Builder to add a Bullet chart or Dial chart.
3. Expand the Thresholds section and click **Add Threshold**.
4. Select **Fixed**.

    ![Threshold Fixed](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Dial/threshold-fixed-83.png)

5. Set a **Color**, **Label**, and **Operator** in the fields provided.
6. In the **Value** field, enter `{{`. A suggestion box displays.
7. Continue typing the name of the custom token until it displays in the suggestion box.
8. Select the custom token.

</div>