---
id: version-5.1-widget-tokens-suggestion-box
title: Tokens Suggestion Box
sidebar_label: Tokens Suggestion Box
original_id: widget-tokens-suggestion-box
---

## Widget Overview

The Tokens Suggestion Widget allows authorised users to select from the avaliable tokens. It can also launch the Tokens Manager Widget to define new tokens.

To use it:

1. Put the script tags of the given launcher url in your website. For example:

```
<script type="module" src="https://your_qrvey_domain_widget_launcher/qrveytokens/qrveytokens.esm.js"></script>
<script nomodule="" type="text/javascript" src="https://your_qrvey_domain_widget_launcher/qrveytokens/qrveytokens.js"></script>
```

2. Put the **Tokens Suggestion Box directive** in the input element that will launch the suggestion box. For example:

```
<input id="input" class="input-field" type="text" data-q-tokenbox/>
```

3. Put the **Tokens Suggestion Box** tag in the container you want to embed the widget, and set the **config** attribute of the tag with a valid JSON object to launch the widget. For example:

```
<q-token-box config="config"></q-token-box>
```

The schema of the config value has the following properties defined below (required items are bold):

```
{ 
    appid: "<APP_ID>",
    domain: "https://your_qrvey_domain",
    userid: "<USER_ID>",
    apikey: "<API_KEY>",
    manage_button: true,
    qrveyid: "<QRVEY_ID>",
    custom_tokens: {
        "dataTokens": [ 
            {
                "label": "{{form.all.questions.multiple.choice1}}",
                "Value":"",
                "questionid":"<QUESTION_ID>"
            },
            ...            
     	],
    	...
   },
   data_tokens: [
		{
            "label": "{{form.all.questions.multiple.choice2}}",
            "Value":"",
            "questionid":"<QUESTION_ID>"
         },
        ...
   ],
   user_tokens: [
		{
            "label": "{{form.all.questions.multiple.choice2}}",
            "Value":"",
            "questionid":"<QUESTION_ID>"
        },
        ...
   ],
   pattern: "{{"
}
```

## Properties and Values for Each Object:

Each object is defined by common properties. The table below provides general information about each property and value. The Required column indicates whether the property is required for the question object.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **app_id** | `String`, Application id. | Yes |
| **domain** | `String`, Data server url. | Yes |
| user_id | `String`, Optional, you can set up the widget without a User ID if it&#39;s set in the Qrvey session cookie. | No |
| api_key | `String`, Optional, you can set up the widget without an api key if it&#39;s set in the Qrvey session cookie. | No |
| manage_button | `Boolean`, show or hide the token modal button. | No |
| qrveyid | `String`, Webform id to autogenerate tokens. | No |
| custom_tokens | `Object`, Each _key_ contains an array of tokens, the _key_ will be used as a title of the list. | No |
| custom_tokens._key_[..].label | `String`, token label. | No |
| custom_tokens._key_[..].Value | `String`, taken value. | No |
| custom_tokens._key_[..].questionid | `String`, reference of the question used to create the token. | No |
| data_tokens | `Array`, Contains the list of tokens that will be displayed in the DataTokens list. | No |
| data_tokens[..].label | `String`, token label. | No |
| data_tokens[..].Value | `String`, taken value. | No |
| data_tokens[..].questionid | `String`, reference of the question used to create the token. | No |
| user_tokens | `Array`, Contains the list of tokens that will be displayed in the User Defined list. | No |
| user_tokens.label | `String`, token label. | No |
| user_tokens.Value | `String`, taken value. | No |
| user_tokens.questionid | `String`, reference of the question used to create the token. | No |
| pattern | `String`, This is text which will trigger the suggestion box | No |