---
id: version-5.2-widget-embedding-using-cookies
title: Embedding Widgets Using Cookies
sidebar_label: Embedding Widgets Using Cookies
original_id: widget-embedding-using-cookies
---

<div style="text-align: justify">

It is common practice to embed widgets using cookies to avoid exposing the API key and other sensitive information in your code. 

This document explains the process and provides sample code to use this embed method.

There are 3 components necessary to authenticate requests:
* **Client UI** - This is your user interface (UI) (HTML/JS) which will contain the embedded widget.
* **Client backend** - This is the server side of the application which is not visible to the user. This might use a REST API method or server-side code using C# or similar programming language.
* **Qrvey API** - This is a set of APIs that will be used for creating a temporary token, using this token for authentication, and providing a cookie for future API calls.

The authentication flow follows these steps:
1. A user requests a web page.
2. The UI (web browser) makes a call to the backend/server for the website (e.g. REST API or async page request/update).
3. The backend calls the Qrvey API (using the “generateToken” endpoint) to get a new temporary token (JWT).<br>
a. Sample code is in the “auth” function below.
4. The backend then sends this token to the UI.
5. The UI uses this JWT token with the Qrvey API for authentication. <br>
a. Sample code is in the “getCookies” function below.
6. Lastly, the web page displays the widget with a proper config object.
 
To embed a widget using cookies, the same three components are required:
Qrvey base URL — where all your Widget and API calls will be made.
API-key — your unique key that must be a part of every API call.
Launcher URL — Javascript link needed for any widget.

## Adding Code to the Web Page HTML
In this method, the launcher script and the widget object tag are added to the page HTML  as in the previous section, but the API key is not required in the config object.

**Note**: Replace the red text with values for your Qrvey instance.

```
<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://your_qrvey_domain_widget_launcher.js"></script>
<script>  
  window.qrveyWidgetConfig = {
    key1: 'value1',
    key2: 'value2',
    ...
  }
</script> 
<div class="panelw">
<widget-tag config="qrveyWidgetConfig"/>
</div>
```
The following script, also placed in the HTML for the web page, performs the authentication using the JWT token received from the backend, and provides access to the resources.
```
<script>  
 const getCookies = jwt => {
    const LOGIN_URL = `${BASE_PATH}/loginToken`;
    const LOGIN_BODY = {}; //new URLSearchParams();
    const LOGIN_CONFIG = {
      withCredentials: true,
      headers: {
        Authorization: jwt,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    return axios
      .post(LOGIN_URL, LOGIN_BODY, LOGIN_CONFIG)
      .then(response => response)
      .catch(error => console.log("loginToken -> ", error));
  };
}
</script>
```

## Code For Server Side (Backend) Call to Get the JWT
The following sample has to be added to your backend code. The sample is in Javascript but you can use any language of your choice.

JWT token must be sent to the UI.

```
<script> 
function auth() {
  const BASE_PATH = "https://your_qrvey_domain";
  const getJWT = () => {
    const GENERATE_URL = `${BASE_PATH}/generateToken`;
    const GENERATE_BODY = {
      userid: "USER_ID",
      expirationTime: "2s"
    };
    const GENERATE_CONFIG = {
      headers: {
        "x-api-key": "API_KEY_HERE" 
      }
    };

    return axios
      .post(GENERATE_URL, GENERATE_BODY, GENERATE_CONFIG)
      .then(response => response.data.token)
      .catch(error => console.log("generateToken ->", error));
  };
</script>
```

