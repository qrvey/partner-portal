---
id: scheduling-exports
title: Scheduling Exports  
sidebar_label: Scheduling Exports 
tags: [Data Analyst]
sidebar_position: 3.1
displayed_sidebar: data-analyst
---

<div style={{textAlign: "justify"}}>

The Schedule Exports feature enables you to configure Qrvey Composer to automatically produce exports at specified intervals and send them to an email address. The Schedule option is available from the Export dialog that displays when you perform an export. Once created, you can then view, manage, and download your scheduled exports using [Download Manager](./download-manager.md). For more information on the Export feature, see [Exporting Data](./05-Working%20with%20Data/Datasets/03-Analyze/exporting.md).


## Specifying the Email Address to Send the Exports
If a schedule is created in Qrvey Composer, the exports are sent to the email address of that Qrvey Composer user. 

>**Note**: To display the email address for a scheduled export, in Qrvey Composer, open Download Manager, locate the export in the list, click its three-dot menu, and click **More Info**. The email will be listed in the Owner field. 

In embedded scenarios, the exports are sent to the email address specified in the widget’s configuration object. Use the following property:

`authenticatedSession.email`

For example:

```json
authenticatedSession: {
  email: jq@qrvey.com
}
```

If an address is not specified in the configuration object, the exports are sent to the email address associated with the user ID. 

## Enabling and Disabling the Schedule Exports feature
In Qrvey Composer, the Schedule Exports feature is disabled by default. To use this feature, your user account must have the Exporting and Scheduling Exports permissions, which is configured in Qrvey Admin Center. For more information, see [Managing Users](../admin/managing-users.md).

In embedded scenarios, the Schedule Exports feature is enabled by default. To disable this feature, set the following parameter to `true` in the widget’s configuration object:

```json
featurePermission: {
    downloads {
        hideSchedule: true
    }
}
```

## Scheduling an Export
1. Locate the chart, table, dashboard, or report that you want to schedule to export, and initiate the Export process. For more information, see  [Exporting Data](./05-Working%20with%20Data/Datasets/03-Analyze/exporting.md). The Export dialog displays. 

  ![Export-CSV-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/bulk_uploads/version_84/Export-CSV-84.png)

2. To ensure the uniqueness of the file name of the export, under For Uniqueness Concatenate, select **Date and Time**. Date and time values will be automatically appended to the file name. 

3. Click the **Schedule** link. If this link does not display, your user account does not have the Exporting and Scheduling Exports permissions, which is configured in Qrvey Admin Center. For more information, see [Managing Users](../admin/managing-users.md). The Scheduling section displays in the Export dialog. 

  ![Export-CSV-Scheduling-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/bulk_uploads/version_84/Export-CSV-Scheduling-84.png)

4. In the fields provided, select the desired date and time of the export. 

5. To create a recurring schedule, select **Repeats**. The Export dialog updates to display the necessary fields for scheduling recurrence. Complete the fields to define the schedule. 

  ![Export-CSV-Scheduling-Repeats-84](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/bulk_uploads/version_84/Export-CSV-Scheduling-Repeats-84.png)

6. Click **Schedule**. The export will be performed at the scheduled time, and the exported file will display in [Download Manager](./download-manager.md). 

## Managing Exports
Download Manager provides a central location to access and manage both non-scheduled and scheduled exports. To manage a scheduled export, locate it in the list, and click its three-dot menu. The following options display: 
* **Edit Schedule**
* **Pause/Restart Schedule**
* **Delete Schedule**
* **More Info**. Displays a summary of the export, including the following information:
   * The frequency of the schedule
   * The email address of the owner of the schedule
   * The associated Qrvey application 
   * Path that identifies the chart that is being exported

</div>