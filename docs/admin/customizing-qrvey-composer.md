---
id: admin-customizing-composer
title: Customizing Qrvey Composer
sidebar_label: Customizing Qrvey Composer
tags: [Solution Architect]
sidebar_position: 4
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
    - Email
    - Phone number

### Customize the look and feel of Qrvey Composer
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

### Customize the Login page
You can customize the look and feel of both the Log In page and the Sign Up page. You can also specify whether users can create new accounts. 

1. In Qrvey Admin Center, click the **Customization** icon in the left-hand menu and display the **General Settings** tab. 
2. Click the **Onboarding** tab. This tab displays customization options on the left and a preview pane on the right. 
3. Select or clear **Allow the creation of new accounts** depending on the needs of your organization.  
4. To update the Log In page, click **Log In**. You can change the following settings, and a preview displays on the right: 
    - Title. To hide the title, clear **Show title**. 
    - Login Message. To hide the login message, clear **Show Login message**. 
    - Sign Up Message. To hide the sign up message, clear **Show Sign up message**. 
5. To update the Sign Up page, click **Sign Up**. You can change the following settings, and a preview displays on the right: 
    - Title. To hide the title, clear **Show title**. 
    - Sign Up Message. To hide the sign up message, clear **Show sign up message**. 
    - Login Message. To hide the login message, clear **Show Login message**. 
6. When finished, click **Save Changes**. 

**Note**: You can revert to the default style settings at any time by clicking RESTORE TO DEFAULT.


### Overview of Email Settings
Qrvey Composer automatically sends a Welcome/Onboarding email message to users when they first sign up and a Forgot Password email message when they forget their password. Qrvey Admin provides a variety of options for setting up and configuring these emails. 

#### Configure email provider
You can choose whether to use AWS SES as the email provider or configure an SMTP email provider. By default, Qrvey Composer uses AWS SES. 

To configure an SMTP email provider:
1. In Qrvey Admin Center, click the **Customization** icon in the left-hand menu and display the **General Settings** tab. 
2. Click the **Emails** tab, and then click **Email Provider**. 
3. Under Select Sending Method, select **Configure an Email Provider**. The page updates with several configuration settings. 
4. Provide the following information in the fields provided: 
    - Server URL
    - Port number
    - Encryption type (STARTTLS, TLS, or SSL)
    - From email (optional depending on the requirements of the email provider)
    - User name
    - Password 
  Once completed, the Test Connection button activates. 
5. Click **Test Connection**. A dialog displays with fields an email address and message text. 
6. Provide a valid email address and some message text and click **Test**. A message displays indicating whether the test was successful. 

#### Design email templates
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

#### View email activity log
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

For additional details on time zone settings, see [Configuring Time Zone Settings](../special-features/timezone-support.md) in the Special Features section. 

## Features tab
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

The following sections describe these features in more detail. 

#### Datasets
Enables users to create new datasets or access/update existing datasets. 

For more information, see [Data Overview](../composer/05-Working%20with%20Data/Datasets/01-Overview%20of%20Datasets/overview-of-datasets.md). 

#### Pixel-perfect Reports
The Pixel-perfect Reports tool enables you to build customizable report templates with precise layout control. The generated reports are optimized for PDF and print, and they can be shared with colleagues, customers, suppliers, or anyone who needs access to the information.

For more information, see [Pixel-perfect Reports Overview](../composer/10-Pixel-perfect%20Reports/overview-of-pixel-perfect-reports.md). 

#### Dashboards
Enables users to combine Qrvey components, including web forms, charts, and metrics with standard web components like text and images to build beautiful web pages without needing to code a single line of HTML. Dashboards can then be combined to build entire information applications that can be easily shared with others.

For more information, see [Dashboard Builder](../composer/06-Building%20Dashboards/overview-of-dashboards.md). 

#### Automation
Enables users to add powerful automation to forms, datasets, and dashboards. Automation works in the background, constantly scanning all of the data and forms, ready to take action immediately. 

The Workflow features are divided into Triggers, Conditions, and Actions. You can enable or disable any of the available features depending on your needs. Click the Information icon for more details on the specific options. 

For additional information on Workflows, see [Flow Overview](../composer/09-Automation/overview-of-automation.md). 

#### Web Forms
Web Forms are a quick and easy ways to collect new data through forms, surveys, and quizzes. They are an integral part of building web-based data applications.

Click the Information icon for more details on the specific options. For additional information on Web Forms, see [Web Forms Overview](../composer/05-Working%20with%20Data/Web%20Forms/overview-of-web-forms.md). 

#### Settings
Enables users to configure global settings that affect the entire application. For more information, see [Application Settings](../composer/11-Configuring%20Settings/overview-of-settings.md). 

