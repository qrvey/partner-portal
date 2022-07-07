---
id: subscribing-to-exports
title: Subscribing to Exports
sidebar_label: Subscribing to Exports
---

<div style={{textAlign: "justify"}}>


## Overview

When creating a dashboard, the Creator can add a subscription option to it. If the option has been added you can see the subscribe icon in the three-dot menu on your page. From this icon you can configure a scheduled delivery of exports and manage any existing subscriptions. 

The option is only available if you are authenticated. If you don’t see the icon you are either not authenticated, or the creator has not turned the option on.

![subscribe-exports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/subscription/subscription-exports/subscription_1.png#thumbnail-40)



## Configuring Subscription
Choosing the **Subscribe to Pages** option from the menu opens up the dialog box to configure the subscription.

![subscribe-exports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/subscription/subscription-exports/subscription-nv.png#thumbnail) 

Each subscription configuration must be given a name. This name is used to identify the configuration if it needs to be modified or managed later. Choose a name that is meaningful to you and you can remember later.

You can choose any number (or all) of the pages and/or any number (or all) of the charts to be included in your scheduled export. 
Choose the format(s) for your export. The default format is PDF. If exporting charts and not only entire pages, you may also choose CSV summary or CSV raw formats. You have to have at least one format selected for subscriptions to work. Note that not all charts support CSV summary or CSV raw format and they won’t be exported if those are your only selected export formats.


The next step is to configure the schedule of the exports:
* Select the date to start exporting and sending the objects. 
* Choose the time for the export. The time zone is the same as yours.
* You can choose to continue the exports until you cancel it (choose **Never** from the **End** dropdown) or stop the delivery after a certain number of repetitions.
* Choose the schedule of repetitions; every 1 week, every 15 days, etc.

Next, enter any email addresses that you want the exports to be delivered to in the **To** field of the email section. Enter a subject for the email and the body of your email using the rich text box provided.

Once done with entering all of the needed information click on the **Apply** button to finalize the configuration of your subscription.
At the chosen time all of the selected pages will be exported to one file in PDF format. Each selected chart will be exported to an individual file, also in PDF format, and all of the files are packaged in a zip file and the link to download the file is added to the email that you set up. The download link is valid for 7 days from the date of creation.

## Managing Subscriptions

Click **Manage Subscriptions** from the menu to open the following dialog.

![subscribe-exports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/subscription/subscription-exports/subscription_3.png#thumbnail-60)

All of the active subscription configurations that you have created in the past are listed and can be managed from here. The management options can be found in the three-dot menu to the right of each subscription. 
The **Unsubscribe** command gives you the option to only remove yourself, or all of the subscribers. If there are multiple subscribers and you remove your own email address from the list, others will continue to receive the emails. Once every email account has been removed from the list, the subscription is removed.

The **Edit** command opens the configuration dialog for the selected subscription and lets you modify it and the **Delete** command removes the subscription and all of its subscribers, thereby stopping the scheduled delivery of the emails.



</div>









