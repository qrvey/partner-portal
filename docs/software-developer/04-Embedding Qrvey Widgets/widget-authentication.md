---
id: widget-authentication
title: Widget Authentication
sidebar_label: Widget Authentication
tags: [Software Developer]
sidebar_position: 2
displayed_sidebar: getting-started
---

When embedding Qrvey widgets in your applications, you have to authenticate to authorize use of the widget.

Qrvey widgets offer two authentication methods:

- **API Key** — for dev mode only. a quick and easy, but insecure way to test widgets. 
- **Qrvey Security Token** — for production use cases. Backend-to-backend authentication that protects secrets.

For widgets that use the Download manager or End User Personalization features, a `clientId` may be required in addition to or in place of `userId`. For more details on `clientId`, please see [Multi Tenant Security Architecture](../../deployment/08-Multi%20Tenant%20Solutions/multi-tenant-security-architecture.md). Please refer to the relevant widget's documentation and consider your implementation needs to determine which should be provided.

## API Key Authentication

> **WARNING: This method is for dev-mode only.** Exposing an API Key on the frontend is insecure.

1. [Embed the widget](./overview-of-embedding-and-widgets#how-to-embed-a-widget) and configure as desired.
2. Place the `apiKey`, `domain`, `userId`, and `appId` directly in the widget's JSON object.
3. Configure any other parameters as desired.

```html
<script>
  var config = { // Example uses "var" to ensure it is in the global scope.
    apiKey: "<your_private_api_key>",       
    domain: "https://<your_qrvey_domain>",  
    userId: "OIJFsiSsdafgf-",               
    appId: "fQiu0ogde3454sv",               
    // ... Configure other params as desired.
  };
</script>
```

## Qrvey Security Token Authentication 

The secure, production-ready way to authenticate and authorize embedded widgets is through a Qrvey Security Token requested via backend-to-backend request made your application to the Qrvey instance, then passed into the frontend. 

For simple examples, please see our CodePen for the [Dashboard Builder - QV Token](https://codepen.io/qrveysamples/pen/BaQGvrL/c3fa477a66f3d2615ed3a029d7998941?editors=1010) or [Dashboard View - QV Token](https://codepen.io/qrveysamples/pen/mdWNPMM/ed754fee791ee64f68151b624531749b?editors=1010).

1. First, from your backend infrastructure, [generate a Qrvey Security Token](https://qrvey.stoplight.io/docs/qrvey-api-doc/ff0303fef339a-generate-widget-security-token), and ensure that both `userid` and `appid` are passed into the request body.

2. Pass the Qrvey Security Token to the widget configuration object in your frontend, along with the domain.  
   This ensures that every request made by the widget through the Qrvey System includes the encrypted token in the request header, preventing malicious users from extracting sensitive information.

3. Configure the remaining parameters as desired.

```html
<script>
  var config = {                           // Example uses "var" to ensure it is in the global scope.
    qvToken: '<qv_security_token>',        // Required. Qrvey Security Token.
    domain: 'https://<your_qrvey_domain>', // Required. Specify your Qrvey domain.
    // ... Configure other params as desired.
  };
</script>
```
