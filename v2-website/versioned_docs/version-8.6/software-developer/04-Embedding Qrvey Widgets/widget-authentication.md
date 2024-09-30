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

- **API Key** — for dev & testing only. A quick and easy, but insecure way to test widgets. 
- **Qrvey Security Token** — for production use cases. Backend-to-backend authentication that protects secrets.

For widgets that use the Download Manager or End User Personalization features, a `clientId` may be required in addition to or in place of `userId`. For more details on `clientId`, please see [Multi Tenant Security Architecture](../../deployment/08-Multi%20Tenant%20Solutions/multi-tenant-security-architecture.md#authentication). Please refer to the relevant widget's documentation and consider your implementation needs to determine which should be provided.

For the system to recognize a `clientId`, you must pass it in when you generate the Qrvey Security Token. You cannot pass it directly on a widget's config object as you do with many other params during API Key Authentication during development and testing.

## API Key Authentication

> **WARNING: This method is for dev-mode only.** Exposing an API Key on the frontend is insecure.

1. [Embed the widget](./overview-of-embedding-and-widgets#how-to-embed-a-widget) and configure as desired.
2. Place the `apiKey`, `domain`, and any other parameters required for the widget directly in its config object.
3. Configure any other parameters as desired.

```html
<script>
  var config = { // Example uses "var" to ensure it is in the global scope.
    apiKey: "<your_private_api_key>",       
    domain: "https://<your_qrvey_domain>",  
    userId: "OIJdafif-",               
    appId: "fo3454svz",               
    // ... Configure other params as desired.
  };
</script>
```

## Qrvey Security Token Authentication 

Use a Qrvey Security Token for secure, production-ready authentication.

For simple examples, please see our CodePen for the [Dashboard Builder - QV Token](https://codepen.io/qrveysamples/pen/BaQGvrL/c3fa477a66f3d2615ed3a029d7998941?editors=1010) or [Dashboard View - QV Token](https://codepen.io/qrveysamples/pen/mdWNPMM/ed754fee791ee64f68151b624531749b?editors=1010).

1. First, from your backend infrastructure, [generate a Qrvey Security Token](https://qrvey.stoplight.io/docs/qrvey-api-doc/ff0303fef339a-generate-widget-security-token), and ensure that any parameters containing sensitive information, such as `userid` and `appid`, are passed into the request body and encrypted as a QV Token.

  **Note:** Passing larger numbers of parameters into a QV Token will lead to performance issues. It is advised to encrypt sensitive information only.

2. Pass the Qrvey Security Token to the widget configuration object in your frontend, along with the domain.  
   This ensures that every request made by the widget through the Qrvey System includes the encrypted token in the request header, preventing malicious users from extracting sensitive information.

3. Configure any additional parameters as desired.

```html
<script>
  var config = {                            // Example uses "var" to ensure it is in the global scope.
    qvToken: '<qv_token>',                  // Required. Qrvey Security Token.
    domain: 'https://<your_qrvey_domain>',  // Required. Specify your Qrvey domain.
    // ... Configure other params as desired.
  };
</script>
```
