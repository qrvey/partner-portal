---
id: authentication-openid-google
title: Using Google as the OpenID Provider
sidebar_label: Using Google as the OpenID Provider
tags: [Solution Architect, CloudOps Engineer]
displayed_sidebar: solution-architects
---

<div style={{textAlign: "justify"}}>
 
Before Creators can use the OpenID provider to log in, you must set up your OpenID provider account in order to obtain the OAuth 2.0 credentials: ClientID, Client Secret, Realm; set a redirect URL (Return URL); and optionally, customize the branding information that creators will see on the user-consent screen. 

The following steps provide an example of how to configure Google as OpenID provider:

1. Set up a project in the <a href="https://console.developers.google.com/ "> <strong>
Google API Console</strong></a>:

![17admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/17admin.png#thumbnail-60)

2. Create an OAuth consent screen. On this screen, you can set up how you want to configure and register your App. Also, you can configure what data and permissions the users will share or grant to Qrvey when authenticating. In this case: email, name and last name.

![18admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/18admin.png#thumbnail-80)


3. Name your application.

![19admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/19admin.png#thumbnail-80)

![20admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/20admin.png#thumbnail-80)

4. Go to <a href="https://console.developers.google.com/apis/credentials"> <strong>Credentials</strong></a> page to generate OAuth 2.0 Credentials. Select OAuth Client ID.

![21admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/21admin.png#thumbnail-80)

5. Select the Application Type and give the client a Name. Add the Return URL as authorized redirect URI.

![22admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/22admin.png#thumbnail-80)


6. Once the OAuth client is created you can view and copy the OAuth Credentials. Paste them into the Authentication Tab of User Management in Qrvey Admin Center. In the case of Google, the Realm URL is: https://accounts.google.com . <br/>
Once all parameters have been entered, click the **Test and Save** button. 

![23admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/23admin.png#thumbnail)

![24admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/24admin.png#thumbnail)

**See also**:
[Managing Users of Qrvey Composer](managing-users.md)

</div>