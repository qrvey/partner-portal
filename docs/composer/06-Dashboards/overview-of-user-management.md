---
id: overview-of-user-management
title: User Management
sidebar_label: User Management
tags: [Data Analyst, Solution Architect]
sidebar_position: 3
displayed_sidebar: getting-started
---


In the **User Management** tab, you can not only create users and groups but also restrict access to certain portions of your application. For instance, you may wish to hide individual pages or components from certain users or allow certain groups of users to access only specific datasets.

## Authentication Settings
In this tab, you can enable and disable authentication as well as set authentication settings. In version v5.3, we added a second authentication method called **OpenId** that will allow you to configure a third-party OpenId provider as an additional authentication method for Qrvey.
 
To use OpenId, first, an Admin user must enable it from the admin app. Please refer to the admin portal documentation related to enabling OpenId Provider. As a creator, you can allow your users to authenticate with any of the methods available.

<br />

## Qrvey Authentication
Qrvey is the traditional way to authenticate users. When enabled, users must log in with an existing Qrvey account. Read more on these settings in the section below.

If you require authentication for your users, the Qrvey method sets it as default when you turn on the option.

![1_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/userm_1.png#thumbnail-100)


If an end-user wants to login on a page that has Qrvey login as the authentication method, the following login form will appear:

![2_user-management](https://s3.us-east-1.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/qrvey-login-20241028A.png)


## OpenId Authentication
OpenId is the new authentication method and if an admin user enabled it from the admin portal, a new option called “Enable OpenId Log In” will appear.

![3_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/userm_3.png#thumbnail-100)

When enabled, users will be able to use their existing credentials based on the configured provider. For example, an admin user sets Google as the OpenId provider for end-users, a creator turns on the OpenId authentication and finally, an end-user will see the following page when they try to log in:

![4_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/userm_4.png#thumbnail-60)

If a creator enables both methods (Qrvey and OpenId), an end-user should see the following page:

![5_user-management](https://s3.us-east-1.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/openid-login-20241028A.png)


After clicking on the **Log in with Google** button, the OpenId authentication flow will redirect the users to the Google login page so they can log in with their Google credentials. 
If the login was successful, the external provider (in this case, Google) would redirect back the users already logged in to the Qrvey end-user page.

Qrvey will add users that authenticate for the first time within the platform with an OpenId provider to a group called *OpenId*. If the group does not exist, it will create it and add the users to the group. A creator is able to change the name of the group later on, and new users can be added to it regardless of the name.

Using OpenId as the unique authentication method, the rest of the settings will not affect the end-users login. If an end-user wants to recover their password, they should use the configured OpenId provider.



## Settings

**Note**: The following settings will only be available when the Qrvey authentication method is turned on. You will need to add new users manually in the User Table tab.

- Configure whether or not to add an email recovery system for lost passwords.

![6_user-management](https://s3.us-east-1.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/authentication-config-20231028A.png)



## User Table
The **User Table** tab is where you will add and manage the users of your application.


![7_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/userm_7.png#thumbnail-70)

To add a new user, click the **Add New User** button and enter the user’s information as shown below. When a new user is added Qrvey will automatically send an email, to the address you entered, with an auto-generated password. Upon their first login, the user will be prompted to change their password.


![8_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/userm_8.png#thumbnail-60)


>**Note**: Users that are not assigned to a group will have full access to your application. It is recommended that you create groups and permissions first (see **Groups** below), then assign new users to those groups as you create them.

Once added, you can activate, deactivate and delete users by using the **Bulk Actions** drop-down menu. You can also use this menu to quickly assign multiple users to groups.

![9_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/userm_9.png#thumbnail-40)

## Groups
You can organize users into groups in the **Groups** tab and assign permissions to them.  Permissions cannot be assigned to users individually.


![10_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/userm_10.png#thumbnail)

To create a new user group, click the orange **Create New Group** button. You’ll then be shown the screen below, where you can give your group a name, assign users to it, and create permissions.

![11_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/userm_11.png#thumbnail)

In the **Users** pane, you can search for existing users and add them to your group.

![12_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/userm_12.png#thumbnail-70)

In the **Permissions** pane, you can add restrictions in two areas: datasets and pages. In the **Data** section, you’ll see a list of all the datasets currently connected to your app. You can choose to show or hide data from each dataset individually.


![13_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/userm_13.png#thumbnail)

In the **Pages** section, you’ll see a list of all the pages in your application. You can choose to provide read/write access or hide each of these pages individually.


![14_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/userm_14.png#thumbnail)


In the Actions section, you’ll see the different filter types, and you will be able to enable or disable these filters for the end-users. So they will not be able to use those types of filters in your application.

![15_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/userm_15.png#thumbnail)

The following are the filter types supported by this settings:
* **Global Filters**: Filters that apply to all pages in your application.
* **Page Filters**: Filters that apply to a page inside your application.
* **Tab Filters**: Filters that apply to the current tab of a page. If page filters are disabled, this option will be disabled too.
* **Panel  Filters**: Filters that apply only to the chart.
* **Pre - Defined Filters**: Filters that were added by a creator.

Any changes you make to users or permissions are updated in real-time as you make them.