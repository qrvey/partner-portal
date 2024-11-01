---
id: personalizing-your-dashboards
title: End User Personalization
sidebar_label: End User Personalization
tags: [Software Developer, Data Analyst]
sidebar_position: 5
displayed_sidebar: getting-started
---


Everything that is created in Qrvey Composer is ultimately for the benefit of an “End User”. In some cases, the Data Analyst persona may be the same as the End User, and in other cases they may be different people. However, in all cases, the permissions and interactions with the content are different between the two personas: **Data Analysts create content that End Users interact with**.

At the same time, different users may have different needs: Some prefer one chart over another. Some may like their dashboards to be filtered a certain way. Still, others may like their panels to be a different size or charts use different colors for added clarity.

All of this, and more, is possible through the **End User Personalization** feature. If enabled and properly configured, end users will have control over the content that is shared with them. This includes changing the layout of the page, swapping in or out charts that they want to see on their dashboards, as well as changing the chart types and filters. They can also revert to the original content if they wish to do so.

Personalization does not affect the original content that might be shared among a larger group of users. As a result, the same dashboard that can be accessed by different users may look very different for each of them and have little resemblance to the original. 

End Users have to be authenticated in order for the personalization feature to work. This ensures that their settings are stored and can be accessed across different devices.

Through the User Management feature in Qrvey Composer, Data Analysts can decide which pieces of content to show or hide to which group of users. If you embed the Dashboard View widget in your product, Software Developers can enable or disable the options that are available in the widget for the authenticated end users to enjoy. All available options and personalization features inside the Dashboard View and the Dashboard Builder widget can be turned on or off in any combination desired.

## Personalize Page Layout
In order to change the size or position of the page content, or to add or remove content, click on the three-dot menu at the bottom-right corner of the page. This exposes all possible options - usually, the options to **Download** the page, **Restore Original**, **Edit**, or the **X** icon to close the menu. 

Clicking the **Edit** icon will take you to the edit mode, where you can move panels around, resize them, remove any chart from the page, or choose other charts from under any dataset to add to the page. The options of adding and removing filters, as well as downloading each chart or the entire page, are also available in this mode. 


While in edit mode, you can also select any of the pages as your homepage. This setting will be used every time you log into the application, in the future. The selected homepage can be reverted back to the original homepage at any given time. 

![eup-dashboards](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/eup/dashboards1.png#thumbnail-40)  

Once you are done with editing the page you can either save your new, personalized version by clicking on the **Save** icon on the bottom-right corner of the page or discard your changes by exiting the edit mode without saving.


![eup-dashboards](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/eup/eup-dash1.gif#thumbnail)

## Personalizing The Charts
If you want to personalize any of the charts, simply click on the dotted menu at the corner of the chart panel to find and click on the **Edit** option. This action opens the Chart Builder/Editor where you can change your chart’s configuration or even its type. For more information, see [Chart Builder](../composer/07-Charts/overview-of-chart-builder.md).

![eup-dashboards](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/eup/eup-dash2.gif#thumbnail)


## Personalize Filters
New filters can be added and existing ones can be modified either from the filter access point or the chart panels in edit mode or the interaction mode. These filters will be saved to your personalized version and only affect your analytics. Every time you log back into the application, you will see your saved filters. 

![eup-dashboards](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/eup/eup-dash3.gif#thumbnail)


## Going Back To The Original Version
If you want to restore the original version of the page, simply click on the dotted menu to find the **Restore Original** option. This action reverts the page to the version that was created by the Composer. You can always go back to your personalized version by repeating the same action.

![eup-dashboards](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/eup/eup-dash4.png#thumbnail-60)


## Other Personalization Features
Any option that is used on the page either affects your personalized version or takes it into consideration. For instance, using the **fit to size** icon on the chart panel - where applicable - changes the settings of the chart panel and the new settings are stored as part of your personalized version. Also, any download, either from the chart panel or the entire page, will be of your personalized version of the page and with your own filters applied.

![eup-dashboards](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/eup/eup-dash5.gif#thumbnail)
