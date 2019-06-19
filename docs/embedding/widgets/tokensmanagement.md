---
id: widget-tokensmanagement
title: Tokens Management Widget
---

## Widget Overview

The Tokens Management Widget allows authorised users to create/modify tokens, the tokens can be used inside the Qrvey widgets.

# Tokens Management Widget

How to use it?

1. Put the script tag of the given launcher url in your website. For example:

```
<script​ ​type="​text/javascript​" src="​https://s3.amazonaws.com/cdn.qrvey.com/qrvey-tokens-widgets-dev/token_management/tokensmanagement.js​"></script >
```

2. Put the ​ **Tokens Management** ​tag​ ​in the container you want to embed the widget, and set the ​ **config** ​attribute of the tag with a valid JSON object to launch the widget. For example:

```
<qtk-tokens-modal-wraper config="config"></qtk-tokens-modal-wraper>
```

The schema of the config value has the following properties defined below (required items are bold):

```
{ 
    settings: {
       app_id: ​'pzE019Y'​,
       domain: 'https://qdev.qrvey.com',
       user_id: ​'TQudSqH'​,
       api_key: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0-QRVEY-FRONTEND',
     },
     general: {
       title: 'Modal Title'
     },
    dataTokens: [
        {   id: "trigger",
            tokens: [   {   actionid: "trigger",
                            alias: null, 
                            id: "tZtR4oShS",
                            label: "{{9DJ1A5M1.expression.form.asdasd}}",
                            questionid: "_B_4J38F",
                            type: "WORKFLOW_TOKEN"
                        },
                        ...
                    ]
        },
        ...
    ]
}
```

Properties and Values for Each Object:

Each object is defined by common properties. The table below provides general information about each property and value. The Required column indicates whether the property is required for the question object.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **settings** | Object: Configurations properties container | Yes |
| **app\_id** | String. Application id | Yes |
| **domain** | String, Data server url | Yes |
| **user\_id** | String. User id | Yes |
| apikey | String, Optional, you can set up the widget without an api key if it&#39;s set a qrvey cookie session. | No |
| general | Object: Modal text properties container | No |
| title | String. Modal title | No |
| dataTokens | Array: Contain the list of data tokens | No |
| id | String: Item id from the token was created | No |
| tokens | Array: list of the tokens related with the item id | No |
| actionid | String: Item id from the token was created | No |
| alias | String: Label that will be displayed in the suggestion box | No |
| id | String: token Id | No |
| label | String: generated token label | No |
| questionid | String: Reference of the question used to create the token | No |
| type | String: Reference of from where was created the token | No |