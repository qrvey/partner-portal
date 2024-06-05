---
id: overview-of-applications
title: Manage an Application
sidebar_label: Manage an Application
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst, All Personas]
sidebar_position: 1
displayed_sidebar: data-analyst
---

<div style={{textAlign: "justify"}}>

<!--
A Qrvey application is a self-contained analytics project that can be used directly, shared, distributed, or embedded into other software platforms. Qrvey applications connect to one or more datasets, and they typically include any number of analytics components, such as charts, reports, dashboards, and automated workflows. Qrvey applications can be created in Qrvey Composer or programmatically via API.

Each Qrvey Composer offers the following features:
* **Web Forms**. Collect data from external users by creating web forms, surveys, and quizzes.
* **Data Connections**. Create a connection to a wide range of cloud-based and on-premise data stores, document databases, columnar databases, REST APIs, JSON and CSV data files, and more. 
* **Analytics**. Analyze data using pre-built visualizations or create custom charts and metrics.
* **Dashboard Builder**. Create highly interactive dashboards and mashups of visualizations across multiple datasets. A dashboard can include any combination of forms, charts, metrics, and analytics, as well as standard web components like text, images, headers and footers. Additional features include navigation and user authentication.
* **Automation**. Create automated workflows to perform virtually any task supported in the Qrvey platform. 
-->

The Applications page of Qrvey Composer displays all the Qrvey applications available to the current user of Qrvey Composer. The Applications page displays when you initially log in to Qrvey Composer. You can also click the home icon at the top left corner of the Qrvey Composer user interface.

![Applications-Page-Home-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/bulk_uploads/version_84/Applications-Page-Home-84.png)

Use the controls in the upper right side of the Applications page to filter the applications displayed, search for a specific application, and change between Card View and List View.

## Create an Application

To create an application, follow these steps.
1. Navigate to the Applications Page.
2. Click **Create Application**in the upper left corner and a modal will appear. 
3. Provide a **Name** and **Description**, then click **Next**.
4. Select either **Webform** or **Datasets** and your application will be created.

Next, you'll want to import data into your Application. To learn more, please see the [Introduction to Data in Qrvey](./05-Working%20with%20Data/introduction-to-data-in-qrvey.md).

## Send an Application

![Sending Step 1](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/others/3.4.8_sending/1_sending.png#thumbnail-80)

To send an app to another Qrvey user, follow these steps.
1. Navigate to the Applications page.
2. Find the application you want to send and click its three-dot menu, then click **Send**.
3. Select the email address of the Qrvey user you want to send your application to.
   - Ensure the recipient has an active Qrvey account on the same instance.
4. Optionally, modify the application's name and description.
5. Click **Send**. You will see a green confirmation message once the application is sent.
   - Sending may take several minutes based on the application's size.

## Share an Application

![Share Application](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/bulk_uploads/version_84/Share-Application-84.png)

By default, the applications you create in Qrvey Composer are private to your user account.

To share an application, follow these steps.
1. Navigate to the Applications page.
2. Find the application you want to send and click its three-dot menu, then click **Send**.
   - The **Share Application** modal will appear.
3. You have several sharing options:
   - Select **Share with my organization** to share with all users in your organization.
   - Select specific users and roles (please ensure **Share with my organization** is deselected).
5. Click **Done** to share and exit.

## Delete an Application

To delete an application, follow these steps.
1. Navigate to the Applications Page.
2. Find the application you want to send and click its three-dot menu, then click **Send**.
3. Click **Delete** and a modal will appear.
4. Click **Delete** to confirm.

## Receive an Application

![Receiving Step 2](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/others/3.4.8_sending/5_sending.png#thumbnail-60)

To install an application, follow these steps.
1. Look for a notification number on the **Received** tab in the application dashboard.
2. Click the application name for more details and then click **Install**.
3. Once installed, a green notification confirms the application is ready.
   - Installation time depends on the application size.

## Application Settings

![1_settings](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/others/3.4.7_settings/1_settings.png#thumbnail)

Use this module to configure the name, description, icon, and color scheme for a Qrvey application.

- **Name & Icon** — Click to edit the name and the description of the application, as well as upload an application icon. 
- **Web Form Theme:** Choose a light or dark background for your application.
- **Primary Color:** Choose the primary color for your toolbar and navigation elements.

</div>