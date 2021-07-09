---
id: security
title: Security
sidebar_label: Security
---
<div style={{textAlign: "justify"}}>

## AWS Account

Ensure your AWS account is secured by following the best practices and recommendations from AWS. Best <a href="https://aws.amazon.com/architecture/security-identity-compliance/?cards-all.sort-by=item.additionalFields.sortDate&cards-all.sort-order=desc">practices from AWS can be found here</a>.

-   Qrvey’s initial deployment uses a Cross-Account IAM role with admin level permission. Once the platform is deployed you can go ahead and disable this user or remove specific permissions.
-   All AWS resources deployed by the Qrvey team (as part of Cloudformation templates) require a minimum set of permissions and are only given access to services that are necessary for the application to work properly.

## Analytics Portal Authentication

Qrvey’s application UI (AKA Qrvey Composer) is a web-based application that is accessible via a Web browser. Communication with the server is secured by SSL. Users who log in are called Creators as they can create applications and share these apps with other users. Each creator can share their applications with any number of end users, the consumers of the application outputs.

### Log Into The Qrvey Analytics Portal

To be able to use this application, a Creator user needs a username and password. At least one of these methods needs to be enabled.
See <a href="/docs/admin/admin-sections-platform/">set up details here</a>.

-   Qrvey Login: Sign up and login functionality can be customized by a system administrator using the <a href="/docs/admin/admin-sections-platform/">Admin module</a>. 
    -   By default, anyone can sign up using the Qrvey application UI login screen. 
    -   System administrators can restrict signup and add the users manually in the Admin module instead.
-   OpendID: You can <a href="/docs/admin/admin-sections-platform/#authentication"> configure SSO via OpenID </a> in the Admin Portal.

### End User Login

End users login to the analytics application UI to access specific applications. These end users only get access to the analytics UI module of the platform and the applications visible to each user are either “Public” or specifically shared with that user.
End users are given permission to each application on the “Applications” section upon login to the UI and end user permissions can also be configured in the “Page Builder” for each application. See <a href="/docs/ui-docs/builders/user-management/">set up details here</a>.

## Data Router

Data Router exposes a public API that can be accessed from any application. It uses an API key that should be defined in the header for each API call. This API key should not be exposed to the public in any way. Communication with the server is secured by SSL. This was sent via email upon successful installation of the Qrvey platform. Please contact Qrvey Support if you would like to reset or add a new API Key.

## Admin Portal

Qrvey’s Admin module is a web-based application that is accessible via a web browser. This application is used by a system administrator to configure or customize the analytics platform. A system administrator can log in to the Admin module by using their AWS IAM username and Access key. To be able to login to Admin Module an AWS IAM user should be part of the “Qrvey Admin” in IAM User groups. This group does not need any permissions but only the users belonging to this group are allowed to sign into the Admin module.

An AWS Administrator can control who can access the Admin module by managing the users in this user group.

## Widgets

Qrvey Widgets are reusable UI components that can be embedded in any Web application. Widgets themselves are accessible via a public URL (using SSL). Widgets would then call the platform API to show and update data. This communication between widgets and API can be secured in 2 ways:

-   <a href="/docs/embedding/widgets/widget-embedding-using-cookies/">Cookies with a temporary token </a>  - With this option, an application server (backend app) would first call the generateToken API using a private API key. This API would return a temporary token to the application server and then the application server would call the loginToken API and this will generate an authentication cookie (using SSL). After this handshake, all API calls are secured using this encrypted cookie.

-   <a href="/docs/embedding/widgets/widget-intro/#api-key"> API Key </a> - This is an easy option where a developer can define the API key directly in the Widget config object. With this, the widget directly accesses the API but this API key would be visible in the HTML/JS code. This option is ok to use for quick debugging or in a dev environment but not recommended for production or any public deployment as the private API key could be exposed in HTML Source.

-   Security Token (Recommended) - This is the most simple and secure way to embed widgets. First, an application server would call the login/token API with all the widget configuration values using a private API key. This API would return a secure JWT token and this will be used together with the domain as the final UI configuration object that the widget needs to work properly. 

See <a href="/docs/embedding/widgets/widget-embedding-using-cookies/">steps for cookies/token setup</a>.

## API

Qrvey API is a set of API methods that work with Widgets and they can be called from an external application. These APIs are secured by using a shared API Key that should not be exposed in any way, and all APIs are secured by SSL. Please contact Qrvey Support team through <a href="/docs/faqs/ask-us/">this form </a> or at [help@qrvey.com](mailto:help@qrvey.com) if you would like to change or add a new API Key.
</div>