---
id: admin-customizing-composer
title: Customize Qrvey Composer
sidebar_label: Customize Qrvey Composer
tags: [Solution Architect]
sidebar_position: 4
displayed_sidebar: getting-started
---

The Customization page of Qrvey Admin Center provides administrators with a variety of options for customizing their instance of Qrvey Composer. 

To open the Customization page, click the **Customization** icon in the left-hand navigation pane:  
![Customization Icon](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/admin/icon-admin-customization.png)

It consists of two main tabs, General Settings and Features. 

![General Settings and Features tabs](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/admin-center-customization-toolbar-81.png)

This article describes the tasks you can perform on the General Settings and Features tabs. 

## General Settings tab

### View Qrvey License and Account Information

1. In Qrvey Admin Center, click the **Customization** icon in the left-hand menu and display the **General Settings** tab. 
2. Click the **Account Info** tab. Your Qrvey account information displays with information including:
    - Current plan status
    - Server name
    - Licensed data used (GB)
    - Total space used (GB)
    - Server type
    - Number of servers
    - User accounts
    - End user accounts
    - Created applications
    - Company information

### Update Company Information
Company information is displayed inside the Qrvey application and in emails sent from the application. 
1. In Qrvey Admin Center, click the **Customization** icon in the left-hand menu and display the **General Settings** tab. 
2. Click the **Account Info** tab. 
3. Under Company Info, provide the following information:
    - Company name
    - Address
    - Email (Used in email signature, not the actual email "From" field.)
    - Phone number

### Customize the Look and Feel of Qrvey Composer
You can change the visual style of Qrvey Composer to match your organization’s unique style. 

1. In Qrvey Admin Center, click the **Customization** icon in the left-hand menu and display the **General Settings** tab. 
2. Click the **Styles** tab. This tab displays style options on the left and a preview pane on the right. 
3. Under Styles, you can perform the following actions:
    - Upload a logo.
    - Specify the title to appear on the browser tab.
    - Upload a favicon. 
    - Change the color scheme. You can change the following settings, and a preview displays in the Design View box on the right. Options are:
      - Main
      - Secondary
      - Tab bar
      - Field type icons
4. When finished, click **Save Changes**. 

**Note**: You can revert to the default style settings at any time by clicking RESTORE TO DEFAULT.

### Customize the Login Page
You can customize the look and feel of the Log In page. You can also specify whether users can create new accounts. 

1. In Qrvey Admin Center, click the **Customization** icon in the left-hand menu and display the **General Settings** tab. 
2. Click the **Onboarding** tab. This tab displays customization options on the left and a preview pane on the right. 
3. Select or clear **Allow the creation of new accounts** depending on the needs of your organization.  
4. To update the Log In page, click **Log In**. You can change the following settings, and a preview displays on the right: 
    - Title. To hide the title, clear **Show title**. 
    - Login Message. To hide the login message, clear **Show Login message**. 
5. When finished, click **Save Changes**. 

**Note**: You can revert to the default style settings at any time by clicking RESTORE TO DEFAULT.


### Overview of Email Settings
Qrvey Composer automatically sends a Welcome/Onboarding email message to users when their accounts are created as well as a Forgot Password email message when they forget their password. Qrvey Admin provides a variety of options for setting up and configuring these emails. 

#### Configure Email Provider
You can choose whether to use AWS SES as the email provider or configure an SMTP email provider. By default, Qrvey Composer uses AWS SES. 

To configure an SMTP email provider:
1. In Qrvey Admin Center, click the **Customization** icon in the left-hand menu and display the **General Settings** tab. 
2. Click the **Emails** tab, and then click **Email Provider**. 
3. Under Select Sending Method, select **Configure an Email Provider**. The page updates with several configuration settings. 
4. Provide the following information in the fields provided: 
    - Server URL
    - Port number
    - Encryption type (STARTTLS, TLS, or SSL)
    - From email (Configured in AWS. Optional, depending on the requirements of the email provider.)
    - User name
    - Password 
  Once completed, the Test Connection button activates. 
5. Click **Test Connection**. A dialog displays with fields an email address and message text. 
6. Provide a valid email address and some message text and click **Test**. A message displays indicating whether the test was successful. 

#### Design Email Templates
You can customize the look and feel of the templates used for both the Welcome/Onboarding and Forgot Password emails. 
1. In Qrvey Admin Center, click the **Customization** icon in the left-hand menu and display the **General Settings** tab. 
2. Click the **Emails** tab, and then click **Templates**.
3. Under Select an email template, click **Forgot Password** or **Welcome/Onboarding**. The editor below updates to display the selected template. 
4. Enter your desired text in the **Email Subject** field. 
5. Enter your desired text in the email body. Use the formatting options provided in the toolbars to format the text. You can also specify the body width, colors, margins, and padding using the options provided. 
6. Be sure to provide the necessary variable in the email body:
    - Forgot Password: `{{mail.resetlink}}`
    - Welcome/Onboarding: `{{mail.password}}`
7. To preview the changes, click **Preview**. 
8. When finished, click **Apply Changes**. 

#### View Email Activity Log
Qrvey Admin Center maintains logs of email activity, and it provides filtering and search functions. You can also download a log file to your computer. 

1. In Qrvey Admin Center, click the **Customization** icon in the left-hand menu and display the **General Settings** tab. 
2. Click the **Emails** tab, and then click **Activity Log**. The email log displays. 
3. To filter the logs, click the dropdown and select one of the following:
    - All
    - Successful
    - Failed
4. To search for a log, start typing in the Search field and Qrvey Admin Center will begin searching automatically.
5. To download a TXT file of the log to your computer, click **Download Log File**. 
6. To refresh the logs displayed on the page, click **Refresh**. 

### Set Time Zone
Qrvey Admin Center enables you to specify the default time zone. Changing the time zone affects how dates are displayed and filtered in Qrvey Admin Center and Qrvey Composer. 

1. In Qrvey Admin Center, click the **Customization** icon in the left-hand navigation pane and display the **General Settings** tab. 
2. Click the **Time Zone** tab. 
3. Under Set Time Zone, select one of the following options:
    - **System Default Settings (UTC +00:00)**. Use the time zone in which the data was stored in the Elasticsearch repository, which is UTC/GMT+0.
    - **User Browser Settings**. Use the time zone specified in the end user’s browser.
    - **Fixed Time Zone**. Use the time zone specified in the dropdown menu below. 
4. Click **Apply Changes**. 

For additional details on time zone settings, see [Configuring Time Zone Settings](../software-developer/timezone-support.md). 

## Features Tab
The Features tab provides options to enable and disable the features available to users in Qrvey Composer. Keep in mind that, if sections like Datasets and Web Forms are turned off, creators won’t be able to create or have access to any datasets to work within any other section of the application. 

### Enable and Disable Features in Qrvey Composer

1. In Qrvey Admin Center, click the **Customization** icon in the left-hand menu and display the **Features** tab. 
2. Select any of the following tabs to enable and disable features:
    - Datasets
    - Data Links
    - Pixel-perfect Reports
    - Dashboards
    - Automation
    - Web Forms
    - Settings

For more details on these features, please see the Qrvey Composer documentation.