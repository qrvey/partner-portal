---
id: authentication-openid-oauth
title: Using OAuth as the OpenID Provider
sidebar_label: Using OAuth as the OpenID Provider
tags: [Solution Architect, CloudOps Engineer]
---

<div style={{textAlign: "justify"}}>

Before Creators can use the OpenID provider to log in, you must set up your OpenID provider account in order to obtain the OAuth 2.0 credentials: ClientID, Client Secret, Realm; set a redirect URL (Return URL); and optionally, customize the branding information that creators will see on the user-consent screen. 

The following steps provide an example of how configure Auth0 as OpenID provider:

1. Go to Auth0 and log in. 

2. Create an Application, set a name and choose the application type.

![25admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/25admin.png#thumbnail)

3. View the basic information of the application.

![26admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/26admin.png#thumbnail-80)

4. You can enter a custom logo URL in Application Properties.

![27admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/27admin.png#thumbnail-80)


5. Application URIs: All Return URLs must be entered and separated by a comma in the field “Allowed Callback URLs”

![28admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/28admin.png#thumbnail-80)

6. Set up connections as user sources.

![29admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/29admin.png#thumbnail-80)

7. Set up OpenID parameters in the Authentication Tab in the User Management Widget. 

![30admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/30admin.png#thumbnail)

**See also**:
[Managing Users of Qrvey Composer](admin-managing-users.md)

</div>