---
id: embedding-widgets-security-token
title: Widget Authentication
sidebar_label: Widget Authentication
tags: [Software Developer]
sidebar_position: 2
displayed_sidebar: software-developer
---
<div style={{textAlign: "justify"}}>

When embedding Qrvey widgets in your applications, you have to authenticate to authorize use of the widget. 

Qrvey widgets offer two authentication methods:

- **API Keys** (quick, but insecure, for dev mode only)
- **JWT Security Tokens** (the secure method, for production use cases)

## API Key Authentication

> **WARNING: This method is for dev-mode only.**

Since you send sensitive information *(API-KEY, User Security Settings, etc.)*, using this `API_key` method to pass these parameters is insecure and therefore not recommended.

It is not safe to pass an API key directly from the frontend.

1. [Embed the widget](./overview-of-embedding-and-widgets#how-to-embed-a-widget) and configure as desired.
2. Place the API key directly in the widget's JSON object.

  **Note**: `CLIENT_ID` is optional, but for end-user personalization to work, it has to be set to the logged-in user’s identifier. This can be their `name`, `id`, `email address`, or any other unique identifier.

```html
<script>
  var config = {
    "api_key": "<YOUR_PRIVATE_API_KEY>", // Switch this with the actual API key.
    "domain": "https://documentation-demos.qrvey.com", 
    "user_id": "OIJFsiSsdafgf-",
    "app_id": "fQiu0ogde3454sv",
    "clientId" :  'sampleuser@sampledomain.com'; // For end-user personalization
  };
</script>
```

## JWT Security Token Authentication

A more secure way to authenticate and authorize embedded widgets is through a <a href="https://tools.ietf.org/html/rfc6749#section-1.4" target="_blank">Security Token</a> requested as a backend-to-backend communication between the backend of your application and the Qrvey system. Doing this will make it harder for undesired or malicious users to intercept the communication and access the sensitive information transmitted between the two applications.

1. Configure the widget as desired. The following two properties are required for every widget:
    - `DOMAIN` – The URL of your Qrvey instance.
    - `API_KEY` – The unique key required for every API call. Provided in an onboarding email after Qrvey instance set up.
  
  You may need additional key configuration, depending on the widget.
  

  ```html
  <script>
   var DOMAIN = { 'https://your_qrvey_domain', // your Qrvey domain
        API_KEY = '<API_KEY>'; // your API key
        USER_ID = '<USER_ID>'; // the app owner's user id
        APP_ID = '<APP_ID>'; // the app id you want to embed in your host application
        CLIENT_ID = 'sampleuser@sampledomain.com'; // for end-user personalization
   };
  </script>
  ```

2. Generate a JWT for your widget using the <a href="https://qrvey.stoplight.io/docs/qrvey-api-doc/ff0303fef339a-generate-token-for-creators" target="_blank">Generate Token</a> endpoint.

  **Example Request:**

  ```js
  // In development/testing, this sample script shows how to set the JWT Security Token from the frontend.
  // In Production, make a similar call from the backend.
  // Put this response in the qv_token attribute.

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

  **Example Response:**

  ```json
  {
    "token": "eyJraWQiOiJuTlBnd3Y2LV96TXJqVzFDbWVB..."
  }
  ```
  

3. Embed the JWT Security Token in the Widget.

  Pass the security token to the widget's configuration object. This ensures that every request made by the widget through the Qrvey System includes the encrypted token in the request's header, preventing malicious users from extracting sensitive information.

  ```js

  function setToken() {
    new auth().init().then(() => {
      setTimeout(() => {
        // Note: WIDGET_TAG is the widget you are embedding.
        const widget = document.querySelector(WIDGET_TAG);
        widget && widget.remove();
        const newWidget = document.createElement(WIDGET_TAG);
        newWidget.settings = 'config';
        document.body.append(newWidget);
      }, 500);
    });
  }

  setToken();

  ```

  Here's an example of what is added to the widget. The token includes all necessary configurations, such as user security permissions, which are encrypted for security. The Qrvey system decrypts this token to extract necessary data, processing your requests and delivering the appropriate results.

  ```js
  var config = {
    domain: "https://your_qrvey_domain", // Specify your Qrvey domain
    qv_token: "eyJraWQiOiJuTlBnd3Y2LV96TXJqVzFDbWVB...", // JWT security token
  };
  ```

</div>

