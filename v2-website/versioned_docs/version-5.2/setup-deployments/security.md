---
id: setup-security
title: Security
sidebar_label: Security
---
<div style={{textAlign: "justify"}}>

This document provides general guidance for securing the Platform. With multiple products security is applied at different levels. 

## AWS Account

Ensure your AWS account is secured by following the best practices and recommendations from AWS. Best practices from AWS can be found [here](https://aws.amazon.com/architecture/security-identity-compliance/?cards-all.sort-by=item.additionalFields.sortDate&cards-all.sort-order=desc).

-   Qrvey’s deployment team would use Cross-Account IAM role to deploy the first version of the platform. To make it easy we ask for Admin permissions for this user. Once the platform is deployed you can go ahead and disable this user or reduce the permission level to a minimum. 
-   All AWS resources deployed by the Qrvey team(as part of Cloudformation templates) require a minimum set of permissions and are only given access to services that are absolutely needed for the application to work properly. 

## Qrvey Composer

Qrvey’s Composer is a web-based application that is accessible via a Web browser. Communication with the server is secured by SSL. Users who log in to the Composer are called Creators as they can create Analytic Applications and share these Apps with others. Each creator can share their Analytic Applications with any number of users (called End Users). 

**Creator Login** - To be able to use this application a user needs a username and password. At least one of these methods needs to be enabled. 
<br />
See [set up details here](/docs/admin/admin-sections-platform/). 

-   **Qrvey Login**: Sign up and Login functionality can be customized by a System Administrator using the Admin module. By default, anyone is allowed to sign up by using the URL and then login. System Administrators can restrict sign up and add the users manually in the Admin module instead.
-   **OpendID**: OpenID Authentication is using an OpenID Connect compliant provider based on OAuth 2.0 protocol. In order to set up OpenIDup the OpenID authentication method for Creators and End Users, administrators will need the Realm, Client ID, and Client Secret parameters. 

**End User Login** - Creators can set up End User authentication in the Page Builder - User Management Section. These End Users only get access to the Analytic application that is shared with them. 
<br />
See [set up details here](/docs/ui-docs/builders/user-management/). 

## Data Router

Data Router exposes a public API that can be accessed from any application. It uses an API key that should be defined in the header for each API call. This API key should not be exposed to the public in any way. Communication with the server is secured by SSL. Please contact Qrvey Support if you would like to reset or add a new API Key.

Qrvey’s Admin module is a web-based application that is accessible via a web browser. This application is used by a System Administrator to configure or Customize the Analytics Platform. A System Administrator can log in to the Admin module by using their AWS IAM username and Access key. To be able to login to Admin Module an AWS IAM user should be part of the “Qrvey Admin” in IAM User groups. This group does not need any permissions but only the users belonging to this group are allowed to sign into the Admin module. 

An AWS Administrator can control who can access the Admin module by managing the users in this user group.

## Widgets

Qrvey Widgets are reusable UI components that can be embedded in any Web application. Widgets themselves are accessible via a public URL (using SSL). Widgets would then call the Platform API to show and update data. This communication between Widgets and API can be secured in 2 ways:

-   **Cookies with a temporary token** (Recommended) - With this option, an application server (backend app) would first call a Login API using a private API key. This API would return a temporary token to the application server which should then be passed to the widget. The widget would then access the server using this temporary token and generate an authentication cookie (using SSL). After this handshake, all API calls are secured using this encrypted cookie.

-   **API Key** - This is an easy option where a developer can define the API key directly in the Widget config object. With this, the widget directly accesses the API but thisAPI key would be visible in the HTML/JS code. This option is ok to use for quick debugging or in a dev environment but not recommended for production or any public deployment as the private API key could be exposed in HTML Source.

See [steps for cookies/token setup](/docs/embedding/widgets/widget-embedding-using-cookies/).

## API

Qrvey API is a set of API methods that work with Widgets and they can be called from an external application. These APIs are secured by using a shared API Key that should not be exposed in any way. All APIs are secured by SSL. Please contact Qrvey Support if you would like to change or add a new API Key.
</div>