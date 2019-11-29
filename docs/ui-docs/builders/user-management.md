---
id: user-management
title: User Management
sidebar_label: User Management
---

<div style="text-align: justify">

In the **User Management** tab, you can not only create users and groups, but also restrict access to certain portions on your application. For instance, you may wish to hide certain pages or components from certain users or allow certain groups of users to access only certain datasets.

## Authentication Settings
In this tab, you can enable and disable authentication as well as set authentication settings. First, you can choose whether to allow new users to sign up by themselves. If this is disabled, you will need to add new users manually in the **User Table** tab.

Next, you can choose whether your login page defaults to signups for new users or login for existing ones. This is handy if you plan on having a lot of new users signing up for your application, or if most of your users will be existing users returning to your app. This setting does not apply if you’ve restricted new signups above.

Finally, you can choose whether or not to add an email recovery system for lost passwords.

![1_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/1_user-management.png#thumbnail)

## User Table
The **User Table** tab is where you will add and manage the users of your application.

![2_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/2_user-management.png#thumbnail)

To add a new user, click the **Add New User** button and enter the user’s information as shown below. When a new user is added Qrvey will automatically send an email, to the address you entered, with an auto-generated password. Upon their first login, the user will be prompted to change their password.

![3_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/3_user-management.png#thumbnail-40)

>**Note**: Users that are not assigned to a group will have full access to your application. It is recommended that you create groups and permissions first (see **Groups** below), then assign new users to those groups as you create them.

Once added, you can activate, deactivate and delete users by using the **Bulk Actions** drop-down menu. You can also use this menu to quickly assign multiple users to groups.

![4_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/4_user-management.png#thumbnail-40)

## Groups
You can organize users into groups in the **Groups** tab and assign permissions to them.  Permissions cannot be assigned to users individually.

![5_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/5_user-management.png#thumbnail)

To create a new user group, click the orange **Create New Group** button. You’ll then be shown the screen below, where you can give your group a name, assign users to it, and create permissions.

![6_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/6_user-management.png#thumbnail)

In the **Users** pane, you can search for existing users and add them to your group.

![7_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/7_user-management.png#thumbnail)

In the **Permissions** pane, you can add restrictions in two areas: datasets and pages. In the **Data** section, you’ll see a list of all the datasets currently connected to your app. You can choose to show or hide data from each dataset individually.

![8_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/8_user-management.png#thumbnail)

In the **Pages** section, you’ll see a list of all the pages in your application. You can choose to provide read/write access or hide each of these pages individually.

![9_user-management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.3_user-management/9_user-management.png#thumbnail)

Any changes you make to users and/or permissions are updated in realtime as you make them.