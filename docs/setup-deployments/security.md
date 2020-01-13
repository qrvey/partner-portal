---
id: setup-security
title: Security
sidebar_label: Security
---
<div style="text-align: justify">

This document provides general guidance for securing the Platform. With multiple products security is applied at different levels. 

## AWS Account
Ensure your AWS account is secured by following the best practices and recommendations from AWS. Best practices from AWS can be found [here](https://aws.amazon.com/whitepapers/aws-security-best-practices/).

Qrvey’s deployment team would use one AWS IAM user to deploy the first version of the platform. To make it easy we ask for Admin permissions for this user. Once the platform is deployed you can go ahead and disable this user or reduce the permission level to a minimum. All AWS resources deployed by Qrvey team (as part of Cloudformation templates) require a minimum set of permissions and are only given access to services that are absolutely needed for the application to work properly. 

## Business Analytics
Qrvey’s Business Analytics is a web-based application that is accessible via a Web browser. Communication with the server is secured by SSL. To be able to use this application a user needs a username and password. Login functionality can be customized by a System Administrator using the Admin module. By default, anyone is allowed to Sign up by using the URL and then login. System Administrators can restrict sign up and add the users manually in the Admin module instead.

Users who log in to Business Analytics application are called Makers as they can create Analytic Applications and share these Apps with others. Each maker can share their Analytic with any number of users (called End Users) by setting up authentication in their app. These End users only get access to the Analytic application that is shared with them.

## Data Router
Data Router exposes a public API that can be accessed from any application. It uses an API key that should be defined in the header for each API call. This API key should not be exposed to the public in any way. Communication with the server is secured by SSL. Please contact Qrvey Support if you would like to reset or add a new API Key.
Admin
Qrvey’s Admin module is a web-based application that is accessible via a web browser. This application is used by a System Administrator to configure or Customize the Analytics Platform. A System Administrator can log in to Admin module by using their AWS IAM username and Access key. To be able to login to Admin Module an AWS IAM user should be part of the “Qrvey Admin” in IAM User groups. This group does not need any permissions but only the users belonging to this group are allowed to sign into the Admin module. An AWS Administrator can control who can access the Admin module by managing the users in this user group.

## Widgets
Qrvey Widgets are reusable UI components that can be embedded in any Web application. Widgets themselves are accessible via a public URL (using SSL). Widgets would then call the Platform API to show and update data. This communication between Widgets and API can be secured in 2 ways
Cookies with a temporary token (Recommended) - With this option, an application server (backend app) would first call a Login API using a private API key. This API would return a temporary token to the application server which should then be passed to the widget. The widget would then access the server using this temporary token and generate an authentication cookie (using SSL). After this handshake, all API calls are secured using this encrypted cookie.
API Key. This is an easy option where a developer can define the API key directly in the Widget config object. With this, the widget directly accesses the API but this API key would be visible in the HTML/JS code. This option is ok to use for quick debugging or in a dev environment but not recommended for production or any public deployment as the private API key could be exposed in HTML Source.

## API
Analytics API is a set of API methods that work with Widgets and they can be called from an external application. These APIs are secured by using a shared API Key that should not be exposed in any way. All APIs are secured by SSL. The API key used for Analytics API is different from the one used by DataRouter. Please contact Qrvey Support if you would like to change or add a new API Key.

## test
,lorem ipsum dolor sit amet



