---
id: scheduling-exports
title: Scheduling Exports  
sidebar_label: Scheduling Exports 
tags: [Data Analyst]
sidebar_position: 4.1
displayed_sidebar: getting-started
---


This feature lets you automatically produce exports at specified intervals and send them to an email address. The Schedule option is available from the Export dialog that displays when you perform an export. Once created, you can then view, manage, and download your scheduled exports using the [Download Manager](../../../download-manager.md). For more information on the Export feature, see [Exporting Data](./exporting.md).

## Schedule an Export

<video 
    autoPlay playsInline muted loop controls
    style={{ border: "3px solid #EDEDED", borderRadius: '10px', width: "100%", margin: "0px 0px 30px 0px" }}
    onMouseOver={(e) => e.currentTarget.setAttribute('controls', 'controls')}
    onMouseLeave={(e) => e.currentTarget.removeAttribute('controls')}
>
  <source src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/bulk_uploads/version_84/schedule-an-export-20240730A.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

1. Navigate to the visualization you'd like to schedule to export and click the [Export Data](./exporting.md) button in the top tool bar. The Export dialog displays.
2. Optional: To ensure the uniqueness of the file name of the export, under For Uniqueness Concatenate, select **Date and Time**. Date and time values will be automatically appended to the file name. 
3. Click the **Schedule** link. If this link does not display, your user account does not have the Exporting and Scheduling Exports permissions, which is configured in Qrvey Admin Center. For more information, see [Managing Users](../../../../admin/managing-users.md). The Scheduling section displays in the Export dialog. 
4. In the fields provided, select the desired date and time of the export. 
5. To create a recurring schedule, select **Repeats**. The Export dialog updates to display the necessary fields for scheduling recurrence. Complete the fields to define the schedule. 
6. Click **Schedule**. The export will be performed at the scheduled time, and the exported file will display in the [Download Manager](../../../download-manager.md). 

**In Qrvey Composer**  
If a schedule is created in Qrvey Composer, the exports are sent to the email address of that Qrvey Composer user. To display the email address for a scheduled export in Qrvey Composer; open Download Manager, locate the export in the list, click its three-dot menu, and click **More Info**. The email will be listed in the Owner field.

**In Embedded Widgets**  
Exports are sent to the email specified in the widget’s configuration object, using the `authenticatedSession.email` property.

```js
authenticatedSession: {
  email: jq@qrvey.com
}
```

If an address is not specified in the configuration object, the exports are sent to the email address associated with the user ID.

## Enable and Disable Scheduled Exports
In Qrvey Composer, the Schedule Exports feature is disabled by default. To use it, your user account must have the Exporting and Scheduling Exports permissions, which is configured in Qrvey Admin Center. For more information, see [Managing Users](../../../../admin/managing-users.md).

In embedded scenarios, the Schedule Exports feature is enabled by default. To disable this feature, set the following parameter to `true` in the widget’s configuration object:

```js
featurePermission: {
    downloads {
        hideSchedule: true
    }
}
```

## Manage Exports
Download Manager provides a central location to access and manage both non-scheduled and scheduled exports. To manage a scheduled export, locate it in the list, and click its three-dot menu. The following options display: 
* **Edit Schedule**
* **Pause/Restart Schedule**
* **Delete Schedule**
* **More Info** — Displays a summary of the export, including the following information:
   * The frequency of the schedule.
   * The email address of the owner of the schedule.
   * The associated Qrvey application.
   * Path that identifies the chart that is being exported.
