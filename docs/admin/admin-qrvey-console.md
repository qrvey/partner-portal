---
id: admin-sections-platform
title: Administering Qrvey Composer
sidebar_label: Administering Qrvey Composer
---

<div style={{textAlign: "justify"}}>

Inside the Admin Center Application, there are some sections related to the administration of an instance of Qrvey Composer. These sections are: 

* <a href="#user-management"> User Management </a>

  * <a href="#users"> Users </a>

  * <a href="#authentication"> Authentication </a>

  * <a href="#data-security"> Data Security </a>

* <a href="#customization"> Customization </a>

  * <a href="#general-settings"> General Settings </a>
  
  * <a href="#features"> Features </a>


##  User Management

![admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/manage-user.png#thumbnail) 

In this section, the administrators can create and manage the platform’s  user accounts,  assign their roles and permissions to various areas of the product,  and set up authentication methods for them. By default, Qrvey Authentication is available; the administrator can manually add new users or choose to allow Creators to sign up through the Qrvey Composer’s signup page. This, along with other options for the login page, can be customized by administrators in the Onboarding Tab of General Settings in the Customization section. 

Alternatively, SSO methods can be enabled in the Authentication Tab. Currently, OpenID (OpenID Connect based on OAuth 2.0 protocol) is supported. More SSO compliant protocols will be added later.

In the Data Security Tab, Administrators can enable or disable global controls to filter data in the analytic widgets of Qrvey based on the logged-in user’s assigned security permissions.


## Users

![admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/new-user.png#thumbnail-60) 

When adding a new user, administrators are required to enter the user's first and last name, email address, and password. They can also assign any number of roles to the user at this time, or later. Created users will receive an email with their credentials to access Qrvey Composer. User accounts can be edited or deleted at any time.


## Authentication

![admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/7admin.png#thumbnail)

In this tab, administrators can enable and set up authentication methods for: 

1. Creators to log in and even sign up to Qrvey Composer 
2. End-users to log in and even sign up to End-User App (Web Page Applications)

For both Creators and End-Users, Administrators can enable the following Authentication Methods — at least one method must be enabled: 

1. Qrvey Authentication (using an email address and password) as it was shown in the previous section. 
2. OpenID Authentication using an OpenID Connect compliant Provider based on OAuth 2.0 protocol.

### OpenID Parametres

In order to set up OpenID authentication method for Creators and End-Users, administrators must enter the following parameters: 

* **OpenID Provider Name**: Name to identify the OpenID provider in Log In Buttons.
* **Realm**: Domain of the OpenID Connect provider URL. 
  * Examples: https://qrveydev.us.auth0.com or https://accounts.google.com 
* **Client ID**: OAuth 2.0 credential that must be obtained from the API Console Credentials page, in the OpenID provider. 
* **Client Secret**: OAuth 2.0 credential that must be obtained from the API Console Credentials page, in the OpenID provider. 

>**Note**: If these parameters are the same for Creators and End-Users, administrators only need to configure creators parameters and use the “Same as Creators” option for End-Users.


The following parameters will be automatically loaded for *read-only* purposes: 
* **Return URL**: The HTTP endpoint that will receive the response from OpenID provider — the URL that the OpenID providers redirect to once the authentication and authorization process has been successful. 
  * For Creators Authentication, this URL corresponds to the Qrvey Composer Main URL. Example: https://< composerURL >/app/index.html
  * For End-Users, this URL corresponds to a generic End-User Web App Page URL. Example: https://< composerURL >/app/take-end-user
  * **Important**: The Return URL must be added to the OpenID provider as Authorized Redirect URL. 

Once all parameters have been entered, the Administrator must click on the **Test and Save** button to generate the URL (login URL) and save all parameters. All fields are required, so they will be validated and the Realm will be tested before saving, by using a request to the Realm URL. This will verify that the Realm does exist and it’s OpenID enabled. If all validations and verifications are successful, the Login URL will be generated and:

* For Creators, the login URL will be shown and a Copy URL option will be enabled. This URL is the one linked to the **Log In with OpenID** button. Also, it can be pasted in an explorer. If that’s so, Creators can skip the Qrvey Composer Login page and go directly to the OpenID provider login process. 
* For End-Users, the Login URL will not be shown, but it will be passed by backend to End-User Management.

The following rules will apply for both Creators users logging in into the Composer and End-Users logging in into a Web App Page: 

1. If a new user logs in using OpenID, a new account will be created for this user using user profile details obtained from the OpenID provider, such as email, name and last name.
2. If an existing user that has been added by an administrator, to the Composer; or by a creator, to an End-User Web App Page; or that it was allowed to sign up using an email address and password, logs in using OpenID, if the email address obtained from the OpenID provider matches the email address already stored in Qrvey’s Database, then this user will be identified as existing and no new account will be added. 
3. Users that were created using OpenID, will be identified with an icon that on hover will show a tooltip message indicating that the user was created with OpenID.


![8admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/8admin.png#thumbnail)


>**Note**: End-Users will be, along being identified with the icon, placed in a default group named OpenID.

![9admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/9admin.png#thumbnail)

If only Qrvey Authentication option is enabled for Creators, the Login page will look as it is customized in Customization > General Settings > Onboarding Tab, but no OpenID option will be visible:

![10admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/10admin.png#thumbnail)

In the same way, if only Qrvey Authentication option is enabled for End Users, the Log In page will look like this: 

![11admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/11admin.png#thumbnail-60)

If both methods are enabled, the Log In with OpenID option will now be visible. For Creators, components related to Qrvey authentication will still be controlled by Onboarding Tab. For End Users, components related to Qrvey Authentication will be controlled by User Management Tab in Page Builder Widget. 

Users can choose their preferred method to sign up or log in to the Qrvey Composer.

![12admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/12admin.png#thumbnail)

![13admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/13admin.png#thumbnail-60)

If only the OpenID method is enabled and Qrvey Authentication is disabled, all components related to Qrvey Authentication will be hidden in the Log In page, and only the Log In with OpenID option will be visible. Also, the related options will be deactivated and blocked in the Onboarding Tab (Creators) and User Management Tab (Page Builder). 


![14admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/14admin.png#thumbnail)

![15admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/15admin.png#thumbnail)

![16admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/16admin.png#thumbnail-40)



### Using Google as an OpenID Provider 
 
Before Creators can use the OpenID provider to log in, you must set up your OpenID provider account in order to obtain the OAuth 2.0 credentials: ClientID, Client Secret, Realm; set a redirect URL (Return URL); and optionally, customize the branding information that creators will see on the user-consent screen. 

As an example, the configuration of Google as OpenID provider will be explained in the following steps:
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


### Using Auth0 as OpenID Provider
As a way of example, the configuration of Auth0 as OpenID provider will be explained in the following steps:

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


## User Sessions

![admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/user.png#thumbnail-40)

Administrators can set a timeout for user sessions: 
<ul style="list-style: none; margin-left:20px;">
<li>a) Maximum Session - the session will timeout after the time set by Admin in this section regardless of the user’s interaction with the platform which is set to 168 hours (7 days) by default.</li><br>
<li>b) Idle Session - the session will timeout if there’s no user interaction detected in the platform (navigating through the platform’s sections, changing configurations, creating assets, etc.) after the time configured in this section.</li></ul>

Administrators can also enable or disable the option of allowing multiple sessions per username for both the Admin Center and Qrvey Composer. 
By default multiple sessions are enabled, however, they can be disabled by unchecking the **Allow Multiple Sessions** checkbox.
 
When this option is disabled and a user is logged in, if another user logs in using the same credentials, as soon as the first user tries to interact with the platform, they will get redirected to the login screen and receive a notification that their session has expired or they may have logged into another device.  



## Data Security
![31admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/31admin.png#thumbnail)


In this section, Administrators can decide to enable or disable Data Security as a global control, so Analytic Applications will filter data based on security permissions or not. Currently, only Record Level Security (row filtering) is supported. 

Keep in mind that this is a global control to enable or disable Data Security and at what level. Before this security feature can actually work, the following actions must be performed: 

1. Security Permissions must be assigned to all users and this information must be available at login time so that the permissions can be set in the session. 
2. Security Columns must be configured in each dataset. 

For more information about how to set User Security Permissions, please read the following document: 
<a href="/docs/admin/record-level-security/">Record Level Security</a>.

>**Note**: By default, Data Security settings are turned off, so they need to be turned on **manually** after setting the User Security Permissions. 



## Customization

In this section, Administrators can customize the appearance of their instance of Qrvey Composer as well as enable/disable features as global control for all of their creator users. There are two tabs in this section: 

1. **General Settings**: Appearance Customization, Branding Information and Styles, and Users Onboarding (login and signup)
2. **Features**: Enable/Disable controls for each section of the Qrvey Composer and, in some cases, granular ability to control features within a section of the Application.


### General Settings

![32admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/32admin.png#thumbnail)


Administrators can customize the overall look and feel, as well as any features available on the Qrvey Composer, to their liking and their branding styles.

Company information can be added to be displayed in places like email footers for account activation and any email communication generated from automated flows.

![33admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/33admin.png#thumbnail)


In the styles tab, Administrators can replace the Qrvey logo with their own company logo so it is displayed in the Qrvey Composer. They can also set the colors to their liking to modify main components such as buttons, icons, backgrounds, the main header bar, notifications and error states. There are also specific colors that Administrators can set as default for custom charts and can be modified by creators later while building the charts. Administrators will be able to preview these changes over main and specific components before saving and applying the styles.

![34admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/34admin.png#thumbnail)

The onboarding screens like Log In and Sign Up can also be modified. From this tab, Administrators can select whether they would like to allow creators to sign up directly from the Sign Up page. If not, they can turn off this option so Creator accounts are only added and activated from the User Management section. Titles and texts can also be modified.

![35admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/35admin.png#thumbnail)


In the Emails tab, Administrators can use the default template provided, or they can create their own email designs for different types of emails, such as Account Activation and Password Reset.

All of these settings can be reset to their original setting at any time.

### Features
![36admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/36admin.png#thumbnail)

In the Features section, Administrators can turn on/off each of the Creator application sections and features, depending on what they would like to make available to Creators. For example, if Creators only need to connect to databases like MySQL, Aurora, or PostgreSQL, Administrators can turn off other options in Datasets like creating Elasticsearch or Spreadsheet datasets. They can also only make available these types of databases and turn others off like MS SQL or Oracle.

![37admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/37admin.png#thumbnail)

All of the other sections, Data Links, Reports, Page Builder, Workflows, Web Forms and Settings can also be turned off. However, it is important to take into consideration that if sections like Datasets and Web Forms are turned off, creators won’t be able to create or have access to any datasets to work within any other section of the Business Analytics Application. Each section has an information icon where each of the features is explained, so Administrators can refer to this when deciding which sections and features to make available to their Creators.

![38admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/38admin.png#thumbnail)

![39admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/39admin.png#thumbnail)


For Workflows, Administrators can decide to turn on/off any of the available triggers, actions or conditions depending on the datasets type they will be using, and the automated flows they need to build, using their specified datasets. For example, if Creators need to set up an alert system for metrics they might use the Scheduling Trigger along with the If Metric conditions. They wouldn’t have a use for any of the Quiz conditions like If Retry, If Score, If Rank, so these can be turned off. If Creators are only going to work with Database Connections, they would mostly use actions such as Get Data, Post Data and Submit Data. They wouldn’t have a use for actions like Insert Record, Update record, Delete Record, which only work for data inside the Qrvey system.

![40admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/40admin.png#thumbnail)


In the case of Web Forms, Creators can use them to quickly collect new data. Administrators can choose the type of form that would be used depending on the use case. If Creators need to collect information like names, addresses, phone numbers and emails. Forms are the go-to choice for most applications as they offer a variety of question types and their analytics include a tabular, spreadsheet-like view of your data. Forms also include some unique features, like sections and columns, which allow you to display your forms in multiple columns and across multiple pages. If Creators require branching, or the ability to ask different questions based on the responses received, Survey would be used for this. Surveys ask questions one at a time, which makes branching possible. Creators can include a variety of question and field types in surveys and analytics can be presented either in a tabular or summary view with visualizations.

![41admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/41admin.png#thumbnail)

The Quiz would be used in a different case when Creators need to test knowledge. With a quiz, Creators can assign points to each question and set the correct answers. The output of a quiz is a summary view that shows panels with the score, results and correct vs incorrect answers breakdown along with individual panels for each of the questions asked. 


Finally, the Settings section within an application can also be turned on/off. 

![42admin](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/newimg/42admin.png#thumbnail)

</div>
