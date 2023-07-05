---
id: admin-managing-users
title: Managing Users of Qrvey Composer
sidebar_label: Managing Users of Qrvey Composer
tags: [Solution Architect]
sidebar_position: 6
displayed_sidebar: solution-architects
---

<div style={{textAlign: "justify"}}>

The Qrvey Admin Center enables you to create and manage user accounts in Qrvey Composer, assign roles and permissions, and set up authentication methods. 

To open the User Management page, in Qrvey Admin Center, click the **User Management** icon in the left-hand navigation panel:<br />
![User Management Icon](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/admin/icon-admin-user-management.png)

## Roles and Permissions
Roles and permissions enable you to control access to sections of Qrvey Composer. The Qrvey platform has two system-defined roles that cannot be deleted or renamed. They are: 
- **Administrator**. The default administrator role with all permissions enabled. This role cannot be edited. The initial Administrator account was set up when your instance of Qrvey platform was created. You can create a new Administrator account using either of the following methods:
  - Assign an account the Administrator role in Qrvey Admin Center (recommended)
  - [Create a Qrvey Administrator account in the AWS IAM service](create-admin-using-aws-iam.md) 
- **Composers**. The default user role with access to all Qrvey Composer features. This role can be edited. 

You can create custom roles with specific permissions and assign user accounts to those roles. You can also specify the Default Role that is automatically assigned to new users when they sign up from the Login page. 

### Overview of permissions

The following table describes the available permissions:

|          **Section**       |**Admin**                        |**Composer**                        |
|----------------|-------------------------------|-----------------------------|
|**Data**|
| Connections| ✅ | ✅ |
| Datasets| ✅ | ✅ |
| Web Forms| ✅ | ✅ |
| Data Links| ✅ | ✅ |
|**Applications**|
| Dashboards| ✅ | ✅ |
| Pixel-perfect Reports| ✅ | ✅ |
| Automation| ✅ | ✅ |
| Settings| ✅ | ✅ |
|**App Administration**|
| Admin Center| ✅ | ❌ |

### Create a new role
1. In Qrvey Admin Center, click the **User Management** icon in the left-hand menu and display the **Roles** tab.
2. Click **Create New Role**. The New Role dialog displays. 
3. Enter a name and description in the fields provided, and then click **Next**. The dialog updates to display all the users in the system. 
4. Select the users to assign to the role.
5. When finished, click **Save**. 

### Set the Default Role
The Default Role is automatically assigned to new users of Qrvey Composer when they sign up from the Login page. 
1. In Qrvey Admin, click the User Management icon in the left-hand menu and display the **Roles** tab.
2. Find the role that you want to use and select **Set as Default Role**. 

### Change permissions
1. In Qrvey Admin Center, click the **User Management** icon in the left-hand menu and display the **Roles** tab.
2. Find the role that you want to modify and click the name of the role. The page updates to display two options, **Users** and **Permissions**. 
3. Click **Permissions**. The page updates to display the available permissions. 
4. Select the **Edit** checkbox for each permission you want to allow. 
5. Clear the **Edit** checkbox for each permission you want to restrict. 

### Change users assigned to a role
1. In Qrvey Admin Center, click the **User Management** icon in the left-hand menu and display the **Roles** tab.
2. Find the role that you want to modify and click the name of the role. The page updates to display two options, **Users** and **Permissions**. 
3. Click **Users**. The page updates to display the users currently assigned to the role. 
4. To add a user to the role, click **+ Add Users**, select the users in the list provided, and click **Save**. 
5. To remove a user from the role, select the user in the list and click **X Remove Users**. A dialog displays confirming that you want to delete the user from the role. 

### Add a User
1. In Qrvey Admin Center, click the **User Management** icon in the left-hand menu and display the **Users** tab.
2. Click **Create New User**. The New User dialog displays. 
3. Enter the following information in the fields provided:
    - First Name
    - Last Name
    - Email
    - Password
    - User Role. You can select an existing role or create a new role. 
4. Click **Create**. The new user displays in the list. 

### Edit a User
1. In Qrvey Admin Center, click the **User Management** icon in the left-hand menu and display the **Users** tab.
2. Find the user in the list, click its three-dot menu on the right side, and select **Edit**. The Edit User dialog displays. 
3. Edit the settings as needed.
4. To reset the user’s password, click **Reset User Password**. 
5. When finished, click **Save**. 

### Delete a User
1. In Qrvey Admin Center, click the **User Management** icon in the left-hand menu and display the **Users** tab.
2. Find the user in the list, click its three-dot menu on the right side, and select **Delete**. A dialog displays confirming that you want to delete the user. 
3. Click **Delete**. The user account is deleted. 

### Reset a Password
1. In Qrvey Admin Center, click the **User Management** icon in the left-hand menu and display the **Users** tab.
2. Find the user in the list, click its three-dot menu on the right side, and select **Edit**. The Edit User dialog displays. 
3. To reset the user’s password, click **Reset User Password**. 
4. When finished, click **Save**. 

## Configuring Authentication
The Qrvey Admin Center enables you to set up authentication methods for both users/creators in Qrvey Composer and for end-users that access the embedded applications. For both of these types of users, you can enable the following authentication methods:
- **Qrvey authentication**. Uses the email and password specified in the user account. 
- **OpenID authentication**. Requires an OpenID Connect compliant provider based on the OAuth 2.0 protocol. For additional configuration details related to OpenID, see the following articles:
  - [Using Google as the OpenID Provider](openid-google.md)
  - [Using Auth0 as the OpenID Provider](openid-auth0.md)

The Login page for Creators in Qrvey Composer is configured on the Onboarding tab in Qrvey Admin Center. For more information, see the "Customize the Login Page" section of [Customizing Qrvey Composer](customizing-qrvey-composer.md). The login settings for end users is configured in the Page Builder widget. 

If both authentication methods are enabled, users can select their preferred method to log in to the system.  

### Configure Qrvey Authentication
1. In Qrvey Admin Center, click the **User Management** icon in the left-hand menu and display the **Authentication** tab.
2. Locate the desired section of the Authentication tab:
    - Authentication Method for Creators
    - Authentication Method for End Users (Dashboards)
3. Select or clear **Qrvey Authentication** in the desired section.

### Configure OpenID in Qrvey Admin Center
1. In Qrvey Admin Center, click the **User Management** icon in the left-hand menu and display the **Authentication** tab.
2. Locate the desired section of the Authentication tab:
    - Authentication Method for Creators
    - Authentication Method for End Users (Dashboards)
3. Select **Open ID** in the desired section.
4. Enter the following information in the fields provided:
    - **OpenID Provider Name**. Used on the OpenID provider Log In button.
    - **Realm**. Domain of the OpenID Connect provider URL. For example, `https://qrveydev.us.auth0.com` or `https://accounts.google.com`.
    - **Client ID**. OAuth 2.0 credential that must be obtained from the OpenID provider on the API Console Credentials page.
    - **Client Secret**. OAuth 2.0 credential that must be obtained from the OpenID provider on the API Console Credentials page.
    - **Return URL**. The HTTP endpoint that receives the response from the OpenID provider. The OpenID provider redirects to this URL once the authentication and authorization process has been successful.
      - For Creators, this URL corresponds to the Qrvey Composer Main URL. For example: `https://< composerURL >/app/index.html`.
      - For End-Users, this URL corresponds to a generic End-User Web App Page URL. For example: `https://< composerURL >/app/take-end-user`.
    >**Important**: The Return URL must be added to the OpenID provider as Authorized Redirect URL.
5. Click **Test and Save**. If successful, the URL is generated and displays in the **URL** field. 
    - For Creators, this URL is associated with the **Log In with OpenID** button. 
    - For End Users, this URL is not displayed but it is passed to back-end services. 

## Set Timeouts for User Sessions 
You can specify the following types of timeouts:
- **Maximum session timeout**. The timeout that occurs regardless of the user’s interaction with the platform. The default is 168 hours (7 days). 
- **Idle session timeout**. The timeout that occurs after a period of time in which there is no user interaction detected. 

1. In Qrvey Admin Center, click the User Management icon in the left-hand menu and display the **Authentication** tab.
2. Under User Session, specify the following times using the fields provided:
    - Maximum Session Timeout
    - Idle Session Timeout


</div>