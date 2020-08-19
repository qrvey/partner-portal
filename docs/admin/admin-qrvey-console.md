---
id: admin-sections-platform
title: Administering Qrvey Composer
sidebar_label: Administering Qrvey Composer
---

<div style="text-align: justify">

#  User Management

In this section, the Administrators can manage their “Creator” users by granting them access to the Qrvey Composer and setting up authentication methods for them. By default, Qrvey Authentication is available; the Administrator can manually add new users or choose to allow Creators to sign up through the composer signup page. This along with other options for the login page can be customized by Administrators in the Onboarding Tab of General Settings in the Customization section. 
Alternatively, SSO methods can be enabled in the Authentication Tab. Currently, OpenID (OpenID Connect based on OAuth 2.0 protocol) is supported. More SSO compliant protocols will be added later. 

![1admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_management.png#thumbnail)


## Users
When adding a Creator, Admins can assign or automatically generate a password. Creators will receive this password by email and can use this to access Qrvey Composer. Creator accounts can be edited or deleted at any time.

![2admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/new_user.png#thumbnail-40)


## Authentication
In this Tab, Administrators can enable and set up Authentication methods for:
1. Creators to log in and even sign up to Qrvey Composer. 

2. End-users to log in and even sign up to End-User App (Web App Page).


For both Creators and End Users, Administrators can enable the following Authentication Methods — at least one method must be enabled: 
1. Qrvey Authentication (using an email address and password) as it was shown in the previous section. 
2. OpenID Authentication using an OpenID Connect compliant Provider based on OAuth 2.0 protocol. 

![3admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag1.png#thumbnail)




## OpenID Parametres

In order to set up OpenID authentication method for Creators and End Users, administrators must enter the following parameters:

* **OpenID Provider Name**: Name to identify the OpenID provider in Log In Buttons.
* **Realm**: Domain of the OpenID Connect provider URL. Example: https://qrveydev.us.auth0.com           
* **Client ID**: OAuth 2.0 credential that must be obtained from the API Console Credentials page, in the OpenID provider. 
* **Client Secret**: OAuth 2.0 credential that must be obtained from the API Console Credentials page, in the OpenID provider. 

  Note: if these parameters are the same for Creators and End Users,administrators only need to configure creators parameters and use the “Same as Creators” option for End Users.

The following will be automatically loaded for read only purposes: 
* **Return URL**: The HTTP endpoint that will receive the response from OpenID provider — the URL that the OpenID providers redirect to once the authentication and authorization process has been successful. 
  * For Creators Authentication, this URL corresponds to the Qrvey Composer Main URL. Example: https://<composerURL>/app/index.html
  * For End Users, this URL corresponds to a generic End User Web App Page URL. Example: https://<composerURL>/app/take-end-user
* **Important**: The Return URL must be added to the OpenID provider as Authorized Redirect URLs. 




Once all parameters have been entered, the Administrator must click on the **Test and Save** button to generate the URL (login URL) and save all parameters. All fields are required, so they will be validated and the Realm will be tested using a request. This will verify that the Realm does exist and it’s OpenID enabled. If all validations and verifications are successful, the Login URL will be shown generated and:
* For Creators, the Copy URL option will be enabled. This URL is the one linked to the **Log In with OpenID** button. Also, it can be pasted in an explorer. If that’s so, Creators can skip the Qrvey Composer Login page and go directly to the OpenID login process. 
* For End Users, the Login URL won’t be shown, but it will be passed to End User Management. 

The following rules will apply for both Creators users logging in into the Composer and End Users logging in into a Web App Page: 
1. If a new user logs in using OpenID, a new account will be created for this user using user profile details obtained from the OpenID provider, such as: email, name and last name.
2. If an existing user that has been added by an administrator, to the Composer; or by a creator, to an End User Web App Page; or that it was allowed to sign up using an email address and password, logs in using OpenID, if the email address obtained from the OpenID provider matches the email address already stored in Qrvey’s Database, then this user will be identified as existing and no new account will be added. 
3. Users that were created using OpenID, will be identified with an icon that on hover will show a tooltip message indicating that the user was created with OpenID.

![4admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag2.png#thumbnail)


**Note**: for End Users, besides identifying them with the icon, they will be placed in a default group named OpenID. 


![5admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag3.png#thumbnail)

If only Qrvey Authentication option is enabled for Creators, the Log In page will look as it is customized in Customization > General Settings > Onboarding Tab, but no OpenID option will be visible:

![6admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag4.png#thumbnail)

In the same way, if only Qrvey Authentication option is enabled for End Users, the Log In page will look as follows: 

![7admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag5.png#thumbnail-40)

If both methods are enabled, the Log In with OpenID option will now be visible. For Creators, components related to Qrvey authentication will still be controlled by Onboarding Tab. For End Users, components related to Qrvey Authentication will be controlled by User Management Tab in Page Builder Widget. 

Users can choose their preferred method to sign up or log in to the Qrvey Composer.

![8admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag6.png#thumbnail)
<br>
![9admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag7.png#thumbnail-40)

If only the OpenID method is enabled and Qrvey Authentication is disabled, all components related to Qrvey Authentication will be hidden in the Log In page, and only the Log In with OpenID option will be visible. Also, the related options will be deactivated and blocked in the Onboarding Tab (Creators) and User Management Tab (Page Builder). 


![10admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag8.png#thumbnail)

![11admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag9.png#thumbnail)

![12admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag10.png#thumbnail-40)



## Using Google as an OpenID Provider 
 
Before Creators can use the OpenID provider to log in, you must set up your OpenID provider account in order to obtain the OAuth 2.0 credentials: ClientID, Client Secret, Realm; set a redirect URL (Return URL); and optionally, customize the branding information that creators will see on the user-consent screen. 

As an example, the configuration of Google as OpenID provider will be explained in the following steps:
1. Set up a project in the <a href="https://console.developers.google.com/ "> <strong>
Google API Console</strong></a>.
2. Create an OAuth consent screen. In this screen you can set up how you want to configure and register your App. Also, you can configure what data and permissions the users will share or grant to Qrvey when authenticating. In this case: email, name and last name. 

![13admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/oauth.png#thumbnail-40)


3. Name your application.

![14admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/oauth_name.png#thumbnail)

4. Go to <a href="https://console.developers.google.com/apis/credentials"> <strong>Credentials</strong></a> page to generate OAuth 2.0 Credentials. 

5. Go to Create OAuth client ID. Select the Application Type and give the client a Name. Add the Return URL as authorized redirect URI.

![15admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/oauth_clientid.png#thumbnail-40)


6. Once the OAuth client is created you can view and copy the OAuth Credentials. Paste them into the Authentication Tab of User Management in Qrvey Admin Center. 

![16admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/oauth_clientcreated.png#thumbnail-40)



## Using Auth0 as OpenID Provider

1. Application Settings

a. Basic Information: 

![17admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag11.png#thumbnail-40)

b. Application Properties:

![18admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag12.png#thumbnail-40)
<br>
c. Application URIs:

![19admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag13.png#thumbnail-40)

d. Connections:

![20admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag14.png#thumbnail-40)


2. Setup OpenID parameters in Qrvey’s Admin Center

![21admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user_manag15.png#thumbnail-40)


## Customization

Admins can customize the overall look and feel, as well as any feature available on the Business Analytics application, to their liking and their branding styles. 

Company information can be added to be displayed in places like email footers for account activation and any email communication generated from automated flows. 

In the styles section, Admins can replace the Qrvey logo with their own company logo so it is displayed in the Business Analytics Application. They can also set the colors to their liking to modify main components such as buttons, icons, backgrounds, the main header bar, notifications and error states. There are also specific colors that Admins can set as default for custom charts and that creators can later modify while building the charts. Admins will be able to preview these changes over main and specific components before saving and applying the styles to the Business Analytics Application. 

The onboarding screens like Log In and Sign Up can also be modified. From this section Admins can select if they would like to allow creators to sign up directly from the Sign Up page. If not, they can turn off this option so Creator accounts are only added and activated from the User Management section. Titles and texts can also be modified. 

In the Emails section, Admins can use the default template provided, or they can create their own email designs for different types of emails, such as Account Activation and Password Reset. 

All of these settings can be reset to their original setting at any time.


## Feature Configuration

In the Features section Admins can turn on/off each of the Creator application sections and features, depending on what they would like to make available to Creators. For example, if Creators only have the need of connecting to databases like MySQL, Aurora, or Postgres Admins can turn off other options in Datasets like creating Elasticsearch or Spreadsheet datasets. They can also only make available these types of databases and turn others off like MS SQL or Oracle. 

All of the other sections, Data Links, Reports, Page Builder, Workflows, Web Forms and Settings can also be turned off. However, it is important to take into consideration that if sections like Datasets and Web Forms are turned off, creators won’t be able to create or have access to any dataset to work with in other sections of the Business Analytics Application. Each section has an information icon where each of the features is explained, so Admins can refer to this when deciding which sections and features to make available to their Creators. 

For Workflows Admins can decide to turn on/off any of the available triggers, actions or conditions depending on the datasets type they will be using, and the automated flows they need to build, using their specified datasets. For example if Creators need to set up an alert system for metrics they might use the _Scheduling Trigger_ along with the _If Metric_ conditions. They wouldn’t have a use for any of the Quiz conditions like _If Retry, If Score, If Rank_, so these can be turned off. Or if Creators are only going to work with Database Connections they would mostly use actions such as _Get Data, Post Data_ and _Submit Data_. They wouldn’t have a use for actions like _Insert Record, Update record, Delete Record_, which only work for data inside the Qrvey system. 

In the case of Web Forms, Creators can use them to quickly collect new data. Admins can choose the type of form that would be used depending on the use case. If Creators need to collect information like names, addresses, phone numbers and emails, Forms are the go-to choice for most applications. They offer a variety of question types and their analytics include tabular, spreadsheet-like view of your data.  Forms also include some unique features, like sections and columns, which allow you to display your forms in multiple columns and across multiple pages. If Creators require branching, or the ability to ask different questions based on the responses received, Survey would be used for this.  Surveys ask questions one at a time, which makes branching possible.  Creators can include a variety of question and field types in surveys and analytics can be presented either in a tabular or summary view with visualizations.

Quiz would be used in a different case when Creators need to test knowledge. With quiz, Creators can assign points to each question and set the correct answers. The output of a quiz is a summary view that shows panels with the score, results and correct vs incorrect answers breakdown along with individual panels for each of the questions asked. 