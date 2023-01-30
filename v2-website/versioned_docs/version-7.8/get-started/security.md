---
id: authentication
title: Authentication
sidebar_label: Authentication
---
 
<div style={{textAlign: "justify"}}>

## AWS Account
Ensure your AWS account is secured by following the best practices and recommendations from AWS. Best <a href="https://aws.amazon.com/architecture/security-identity-compliance/?cards-all.sort-by=item.additionalFields.sortDate&cards-all.sort-order=desc" target="_blank">practices from AWS can be found here</a>.
* Qrvey’s initial deployment uses a Cross-Account IAM role with admin level permission. Once the platform is deployed you can go ahead and disable this user or remove specific permissions.
* All AWS resources deployed by the Qrvey team (as part of Cloudformation templates) require a minimum set of permissions and are only given access to services that are necessary for the application to work properly.

## Qrvey Composer Authentication
Qrvey Composer is a web-based application that is accessible via a Web browser. Communication with the server is secured by SSL. Users who log in are called Creators or Composers as they can create content and share the created content with end users in the form of simple, standalone applications. 

### Log Into The Qrvey Composer
To be able to use this application, a Creator user needs a username and a password. At least one of these methods needs to be enabled.


* Qrvey Login: Sign up and login functionality can be customized by a system administrator using the [Admin Center](../admin/admin-qrvey-console.md). 
  * By default, anyone can sign up using the Qrvey application UI login screen. 
  * System administrators can restrict signup and add the users manually in the Admin Center instead.
* OpenID: You can [configure SSO via OpenID](../admin/admin-qrvey-console.md#authentication) in the Admin Center.

### End User Login 
End users authentication is handled differently, depending on the approach taken to share content with them. The two possible models are using published standalone Qrvey apps, or content embedded in a host web application. 

#### End User Authentication For Qrvey Published Apps
Published apps may be entirely public, which eliminates the need for authentication. Or they may require login, in which case the login UI and permissions have to be configured in the “Page Builder” for each application. [See set-up details here](../ui-docs/builders/user-management.md).

#### End User Authentication For Embedded Widgets
When Qrvey widgets are embedded in a host application, end users access those widgets as part of the UI of that application and are therefore subject to the authentication system of the host. However, user information may need to be passed to the widget for authorization purposes of applying security filters to data or content. Please see [Embedding Widgets Using a Security Token](../embedding/widgets/embedding-widgets-security-token.md), as well as the articles under the [Security](../admin/column-level-security.md) section of Developer Docs for more information on this method.


## Data Router
Data Router exposes a public API that can be accessed from any application. It uses an API key that should be defined in the header for each API call. This API key should not be exposed to the public in any way. Communication with the server is secured by SSL. This API key is sent via email upon successful installation of the Qrvey platform. Please contact Qrvey Support <a href="/docs/faqs/ask-us/" target="_blank">here</a> or at help@qrvey.com if you would like to reset or add a new API Key.

## Admin Center
Qrvey’s Admin module is a web-based application that is accessible via a web browser. This application is used by a system administrator to configure or customize the analytics platform. A system administrator can login to the Admin module by using their AWS IAM username and Access key. To be able to login to the Admin Center an AWS IAM user should be part of the “Qrvey Admin” IAM User group. This group does not need any permissions but only the users belonging to this group are allowed to sign into the Admin module.

An AWS Administrator can control who can access the Admin module by managing the users in this user group. Refer to [this article](../admin/admin-managing-users.md#create-a-new-admin-user) for a guide to create an admin user in AWS.


## Widgets
Qrvey Widgets are reusable UI components that can be embedded in any web application. Widgets themselves are accessible via a public URL (using SSL). Widgets would then call the platform API to show and update data. This communication between widgets and API can be secured in 2 ways:

*  [API Key](../embedding/widgets/intro.md#api-key) - This is an easy option where a developer can define the API key directly in the Widget config object. With this, the widget directly accesses the API but this API key would be visible in the HTML/JS code. This option is ok to use for quick debugging or in a dev environment but not recommended for production or any public deployment as the private API key could be exposed in HTML Source.

* [Security Token](../embedding/widgets/embedding-widgets-security-token.md).(Recommended) - This is the simple and secure way to embed widgets. First, an application server would call the login/token API with all the widget configuration values using a private API key. This API would return a secure JWT token and this will be used together with the domain as the final UI configuration object that the widget needs to work properly. 

## API
Qrvey API collection enables application developers to embed Qrvey functionality in their web applications. These APIs are secured by using a shared API Key that should be kept private. APIs are secured by SSL. Please contact Qrvey Support <a href="/docs/faqs/ask-us/" target="_blank">here</a> or at help@qrvey.com if you would like to change your API Key or add a new one.

</div>