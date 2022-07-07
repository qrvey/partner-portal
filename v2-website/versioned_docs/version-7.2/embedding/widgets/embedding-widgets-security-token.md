---
id: embedding-widgets-security-token
title: Embedding Widgets Using a Security Token
sidebar_label: Embedding Widgets Using a Security Token
---
<div style={{textAlign: "justify"}}>

When you are embedding Qrvey widgets in your applications, you need to keep in mind that you have to authenticate and authorize the use of the widget to the Qrvey system. Usually, this authentication process is done directly on the widget’s configuration object. However, as you send sensitive information (API-KEY, User Security Settings, etc.), using this method to pass these parameters is not recommended as it is not a secure way to do it.

A more secure way to authenticate and authorize embedded widgets is through a <a href="https://tools.ietf.org/html/rfc6749#section-1.4" target="_blank">Security Token</a> requested as a backend-to-backend communication between your backend side of the host application and the Qrvey system. Doing this will make it harder for undesired or malicious users to intercept the communication and access the sensitive information transmitted between the two applications.

This document explains the process and provides a sample code to generate a security token, pass it to the widget’s configuration object and use the widget in your host application.

The process to embed a widget using a security token follows these steps:

1. Prepare the data required for the widget’s configuration.
2. Request the security token.
3. Embed the security token inside the widget’s configuration object.

>**Note**: The code snippets used in this document are written in Javascript for demo purposes. However, you can use any language to request a token and it’s recommended to code this process in a backend environment for your production applications.

## Prepare The Data
Embedding a Qrvey widget requires at least the following two properties:

* **DOMAIN URL**: This is the URL of your Qrvey instance and the location where all your Widget and API calls will be made.

* **API KEY**: This is your unique key that must be a part of every API call. This key is shared in the onboarding email that you receive right after your Qrvey instance is set up. 

Go to the <a href="/docs/embedding/widgets/widget-intro/" target="_blank">Widgets Quick Start Guide</a> for more information on how to obtain these values.

Depending on the widget you want to embed, you may need additional information. Go to the <a href="/docs/embedding/embedding-intro/" target="_blank">Embedding</a> section in our partner portal, where you can find all the embeddable widgets and their required properties.

```html 
var DOMAIN = 'https://your_qrvey_domain', //your Qrvey domain
    API_KEY = '<API_KEY>'; // your API key
    USER_ID = '<USER_ID>'; // the user id that own the app
    APP_ID = '<APP_ID>'; // the app id that you want to embed in your host application
    CLIENT_ID = 'sampleuser@sampledomain.com'; //this is for end user personalization 
```
> **Note**: CLIENT_ID is optional, but for end user personalization to work, it has to be set to the logged-in user’s identifier. This can be their name, id, email address, or any other means by which the user can be uniquely identified. 

## Requesting The Security Token
As part of your Qrvey instance, you have access to a set of APIs that allow you to interact with the system in a programmatic manner. The <a href="https://qrvey.stoplight.io/docs/qrvey-api-doc/b3A6NDY5NTUxNjg-generate-token-for-creators" target="_blank">Generate Token</a> endpoint receives a list of parameters and generates a security token. The security token received as a response is an encrypted string with the required information to secure the widget you want to embed. From now on, every single request makes by the widget will use this token to authenticate itself in the Qrvey system and access the required resources to visualize the dashboards and data you want to expose to your users.

This is an example of the endpoint’s response with the security token in it.

```
{
  "token": "eyJraWQiOiJuTlBnd3Y2LV96TXJqVzFDbWVB..."
}
```
The code snippet below shows how to call the <a href="https://qrvey.stoplight.io/docs/qrvey-api-doc/b3A6NDY5NTUxNjg-generate-token-for-creators" target="_blank">Generate Token</a> endpoint and retrieve the security token. In the next step, you will use this token to configure the widget’s settings.

```
var config = {
    'domain': DOMAIN,
    'qv_token': ''
};

function auth() {
    const getJWT = () => {
        const GENERATE_URL = `${DOMAIN}/devapi/v4/core/login/token`;
        const GENERATE_BODY = {
          "userid": USER_ID,
          "appid": APP_ID,
          "clientid": CLIENT_ID //this is for end user personalization
        };
        const GENERATE_CONFIG = {
            headers: {
                "x-api-key": API_KEY,
                "Content-Type": 'application/json'
            }
        };
        return axios
            .post(GENERATE_URL, GENERATE_BODY, GENERATE_CONFIG)
            .then(response => response.data.token)
            .catch(error => console.log('generateToken ->', error));
    };
    this.init = () => {
        return getJWT()
            .then(res => {
                config.qv_token = res;
            });
    };
};

```


## Embedding the Security Token in the Widget
The last step in the process of embedding a widget using a security token is to pass the token requested in the previous step to the widget’s configuration object. With this configuration in place, for every single request, the widget made by the Qrvey System will have in the request’s header the security token. As the token is encrypted, malicious users could intercept the communication but won’t be able to extract the information that is sent.

The following code snippet completes the process and automatically injects the token into the widget’s configuration object.

> **Note**: WIDGET_TAG is used as the placeholder for the widget that is being embedded.


```
function setToken() {
  new auth().init().then(() => {
    setTimeout(_ => {
      document.querySelector(WIDGET_TAG).remove();
      ancc = document.createElement(WIDGET_TAG);
      ancc.settings = 'config';
      document.body.append(ancc);
    }, 500);
  });
}

setToken();
```

The following is an example of what is added to the widget. Every other configuration like user security permissions will be part of the encrypted security token and the Qrvey system will extract the required data to process your request and return the desired result.

```html
var config = {
 domain: "https://your_qrvey_domain", // your Qrvey domain
 qv_token: "eyJraWQiOiJuTlBnd3Y2LV96TXJqVzFDbWVB...",
};
```

## Supported Widgets
The following is a list of Qrvey widgets that currently support authentication through a security token.

* <a href="/docs/embedding/widgets/app-building/widget-page-view/" target="_blank">Page View</a>
* <a href="/docs/embedding/widgets/app-building/widget-page-builder/" target="_blank"> Page Builder</a>
* <a href="/docs/embedding/widgets/app-building/widget-report-builder/" target="_blank">Report Builder</a>
* <a href="/docs/embedding/widgets/analytics/analytic-suite/" target="_blank">Analytic Suite</a>
* <a href="/docs/embedding/widgets/analytics/single-panel/" target="_blank">Single Panel</a>
* <a href="/docs/embedding/widgets/data-sources/widget-webforms">Web Form Design</a>


</div>