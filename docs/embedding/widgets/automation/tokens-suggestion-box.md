---
id: widget-tokens-suggestion-box
title: Tokens Suggestion Box
sidebar_label: Tokens Suggestion Box
---

# Tokens Suggestion Widget

#

Widget Overview

The Tokens Suggestion Widget allows authorised users to use the tokens in each input allowed, also can launch the Tokens Manager Widget.

How to use it?

1. Put the script tag of the given launcher url in your website. For example:

```
<script​ ​type="​text/javascript​" src="​https://s3.amazonaws.com/cdn.qrvey.com/qrvey-tokens-widgets-dev/tokenbox/qtokenbox.js​"></script>
```


2. Put the **Tokens Suggestion Box directive** in the inputs that will launch the suggestion box. For example:

```
<input id="input" class="input-field" type="text" data-q-tokenbox/>
```

3. Put the ​ **Tokens Suggestion Box** ​tag​ ​in the container you want to embed the widget, and set the ​ **config** ​attribute of the tag with a valid JSON object to launch the widget. For example:

```
<q-token-box config="config"></q-token-box>
```

The schema of the config value has the following properties defined below (required items are bold):

```
{ 
    app_id: ​'pzE019Y'​,
    domain: 'https://qdev.qrvey.com',
    user_id: ​'TQudSqH'​,
    api_key: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0-QRVEY-FRONTEND',
    manage_button: true,
  qrveyid: 'Nw9eKKe',
    custom_tokens: {
"dataTokens": [ 
{
"label": "{{form.all.questions.multiple.choice1}}",
"Value":"",
"questionid":"BWAFBFSA"
}
 		 ],
		...
   },
   data_tokens: [
			{
"label": "{{form.all.questions.multiple.choice2}}",
"Value":"",
"questionid":"BOF2BNYW"
},
...
   ],
   user_tokens: [
			{
"label": "{{form.all.questions.multiple.choice2}}",
"Value":"",
"questionid":"MAEJADXV"
},
...
   ],
   pattern: ‘{{’
}
```

Properties and Values for Each Object:

Each object is defined by common properties. The table below provides general information about each property and value. The Required column indicates whether the property is required for the question object.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **app\_id** | String. Application id | Yes |
| **domain** | String, Data server url | Yes |
| **user\_id** | String. User id | Yes |
| apikey | String, Optional, you can set up the widget without an api key if it&#39;s set a qrvey cookie session. | No |
| manage\_button | Boolean: show or hide the token modal button | No |
| qrveyid | String. Webform id to autogenerate tokens | No |
| custom\_tokens | Object: Each key contain a list of tokens, the key will be used as a title of the list | No |
| data\_tokens | Array: Contains the list of tokens that will be displayed in the DataTokens list | No |
| user\_tokens | Array: Contains the list of tokens that will be displayed in the User Defined  list | No |
| pattern | String: Describe the text who will fire the suggestion box | No |