---
id: version-4.1-widget-tokens-manager
title: Tokens Manager
sidebar_label: Tokens Manager
original_id: widget-tokens-manager
---

<div style="text-align: justify">

## Widget Overview

The Tokens Management Widget allows authorised users to create/modify tokens, the tokens can be used inside the Qrvey Platform widgets.

## Tokens Management Widget

To use it:

1. Put the script tag of the given launcher url in your website. For example:

```
<script type="text/javascript" src="https://your_qrvey_domain_widget_launcher/app.js"></script >
```

2. Put the  **Tokens Management** tag in the container you want to embed the widget in, and set the  **config** attribute of the tag with a valid JSON object to launch the widget. For example:

```
<qtk-tokens-modal-wraper config="config"></qtk-tokens-modal-wraper>
```

The schema of the config value has the following properties defined below (required items are bold):

```
{ 
    settings: {
        appid: "<APP_ID>",
        domain: "https://your_qrvey_domain",
        userid: "<USER_ID>",
        apikey: "<API_KEY>"
     },
     general: {
       title: "Modal Title"
     },
    dataTokens: [
        {   id: "trigger",
            tokens: [   {   actionid: "<ACTION_ID>",
                            alias: null, 
                            id: "<TOKEN_ID>",
                            label: "{{9DJ1A5M1.expression.form.asdasd}}",
                            questionid: "<QUESTION_ID>",
                            type: "WORKFLOW_TOKEN"
                        },
                        ...
                    ]
        },
        ...
    ]
}
```

## Properties and Values for Each Object:

Each object is defined by common properties. The table below provides general information about each property and value. The Required column indicates whether the property is required for the question object.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **settings** | Object: Configurations properties container | Yes |
| **settings.app\_id** | String. Application id | Yes |
| **settings.domain** | String, Data server url | Yes |
| settings.user\_id | String, Optional, you can set up the widget without a user id if it&#39;s set in the Qrvey session cookie.| No |
| settings.apikey | String, Optional, you can set up the widget without an api key if it&#39;s set in the Qrvey session cookie. | No |
| general | Object: Modal text properties container | No |
| general.title | String. Modal title | No |
| dataTokens | Array: Contain the list of data tokens | No |
| dataTokens[..].id | String: Item id for a group of tokens | No |
| dataTokens[..].tokens | Array: list of the tokens related to the item id | No |
| dataTokens[..].tokens[..].actionid | String: Id of the action for which the token was created | No |
| dataTokens[..].tokens[..].alias | String: Label that will be displayed in the suggestion box | No |
| dataTokens[..].tokens[..].id | String: Unique token Id | No |
| dataTokens[..].tokens[..].label | String: generated token label | No |
| dataTokens[..].tokens[..].questionid | String: Reference of the question used to create the token | No |
| dataTokens[..].tokens[..].type | String: Type of the token | No |