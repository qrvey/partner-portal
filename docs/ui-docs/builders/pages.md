---
id: pages
title: Page Builder
sidebar_label: Page Builder
---

<div style="text-align: justify">

**Page Builder** makes it easy to combine multiple **Qrvey Composer** components, like forms, charts and metrics, into beautiful web pages, each with their own unique sharable URL. You can also combine multiple pages into a complete information application by using navigation, which is discussed  in another article.


To begin building a page, click the page builder icon in the left navigation bar, and you will be taken to the page building canvas.
<br>


## **Canvas Layout**

![1_pages](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.1_pages/1_pages.png#thumbnail)

The top of the canvas is divided into three sections: the main menu, the toolbar, and the page status with publishing options. 

![1.2_pages](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.1_pages/1.2_pages.png#thumbnail)

The bottom of the canvas will display a tab for every page you create. This is where you are able to rearrange the order of your pages, rename, delete or duplicate a page, make it private, and find a unique URL for the specific page you’re working on (as opposed to the overall application URL). 

![1.3_pages](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.1_pages/1.3_pages.png#thumbnail-50)

Filters along with Data & Configuration panels are displayed on the right side. Once you have configured the datasets you will be working with, you can see them listed in the Data Panel. 

![1.4_pages](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.1_pages/1.4_pages.png#thumbnail-50)

<br>

## **Toolbar**
In the toolbar, you will find the options to configure your page and options to add content.

![1.5_pages](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.1_pages/1.5_pages.png#thumbnail-60)


You can choose the page resolution that will fit your page viewers best. You can change this setting at any time keeping in mind that this affects the sizes of all pages, and when switching to a smaller resolution, some objects may be repositioned which is an action that cannot be reverted. 

From the toolbar, you can also click on the chart icon to access the chart builder. Once you configure and save your chart, this will be added to your page right away. 

On your page you can find page objects options: image, text, and button. When selecting the icon, you can click and drag the size of the object on the canvas. 

Once there are multiple objects added to a page here, you have the option to arrange your objects by sending them to the front or back. 

You can configure grid options such as showing the grid lines or the snap to grid option. 

While designing your pages, you can see how your content will be displayed on different devices. In the toolbar, you will find the option to switch from desktop to tablet and mobile devices view. Configuration options are disabled in mobile views, you may only rearrange page components to further define your tablet and mobile layouts. 


Towards the right side of the toolbar, you will see the download button - you can use this to download the page data in CSV format. If there are multiple datasets being used on the same pages, they will be exported as separate files.

<br>

## **Data & Configuration**
In order to begin creating charts and filters for your pages, you will need to have configured at least one dataset first. This can be done in the <a href="docs/ui-docs/datasets/data_overview/"> <strong>Data Section</strong></a>.  

Once you have one or a group of datasets ready, they will be displayed in the Data panel on the right side of the canvas. Here, you can search for a particular dataset and expand each dataset to find the created charts or summary panels that can be added to a page. To add a chart just click and hold the chart’s blue box to drag and drop onto the canvas. You can also opt for **Shift + Click** to add multiple charts at the same time. 


![1.6_pages](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.1_pages/1.6_pages.png#thumbnail)

If you have a long list of datasets, you can also select favorites by clicking on the blue star. It will turn orange to indicate the dataset is marked as favorite, and by clicking the orange button besides **Data** you will see only your favorite datasets. 


![1.7_pages](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.1_pages/1.7_pages.png#thumbnail)


## Object Configuration
As you are building your pages, you will need to use the Data & Configuration panel where you can find the configuration settings for each object added to a page. 



![2_pages](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.1_pages/2.0_pages.png#thumbnail)

For Text, Images and Buttons, you will find options to style fonts, colors, text alignment, image aspect, and an option to add a URL to create links from the objects. 

For charts, you will find the Page Actions access point where you will be able to define chart actions like Filter By or Drill-Downs in a customized way for your page viewers. 

To access the configuration options, you must click on the object you would like to work with. To switch back and view your datasets, you can click anywhere on the canvas. 

To reposition each object, you can click anywhere on the object and drag it to the desired position. You can also click on any of the nodes around the object to resize, and the “X” in the right corner to remove it from the page.


![3_pages](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.1_pages/3.0_pages.png#thumbnail-40)

## **Filters**
The Filters menu item lets you easily manage global, page, and tab filters defined in your pages, as well as all the filters defined in your panels. When you select the Filters menu item, you will see the list of filters defined. The filters are grouped under the headings Global Filters, Tab Filters, and Panel Filters. Panel filters are grouped by panel name.

To enable or disable all filters for a group, click on the toggle button or check-box next to the group name. To enable or disable an individual filter value, use the check-box next to it.

![4_pages](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.1_pages/4.0_pages.png#thumbnail-30)



To create a new global filter, click the Add Filter button and choose your data source. Next, select the column in the drop-down list and select the scope of the filter, i.e. All or Current Tab. See the <a href="/docs/ui-docs/builders/dataviews/filters/"> <strong>Filtering Data</strong></a> page for further details.

 

![5_pages](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.1_pages/5.0_pages.png#thumbnail-50)


## Filter Panel
The filter panel has the same functionality as the filter described in the section above, but from the end-user perspective. Adding it to a page allows end-users to interact with all filters in the published application.

To add a filter panel to the page, you just need to insert it from the **Insert** menu in the top-left corner of the page builder. After adding it, you will see a little icon in the top-right corner of the canvas (see image below.)

![5_pages](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.1_pages/page_builder_00.png#thumbnail-30)


Filter panel has a set of settings you can edit to personalize styles and behavior. To edit these settings, click on the filter panel icon, and the configuration panel will show them.

* **Icon**: Change the color of the icon. By default, the icon color is white.

* **Button**: Change the background color of the filter panel component. By default, the background color is dark blue.

* **Filter Panel Default View**: Change how the end-user page displays the filter panel whenever a user navigates to the page.

  * **Closed**: (Default) The filter panel will always be closed when an end-user navigates or reloads the page. They will be able to open or close it at any time.

  * **Open**: The filter panel will always be open when an end-user navigates or reloads the page. They will be able to close or open it at any time.

  This setting applies only for desktop and table view. If end-users visit the page from their mobile device, the filter panel will ignore this setting.

<br>

## **Publishing an Application**
In the blue navigation bar along the top, you’ll find a button to **Publish Application** and a link button to view your application in a new browser window or tab.

![6_pages](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.5.1_pages/6.0_pages.png#thumbnail-40)

**Note**: Your application must be published in order to use the link button. Accessing the URL of an application/individual page that is not published will display a message to users that the resource is currently unavailable.

Once a page is published, its content is locked in place and cannot be changed unless the **Edit** button is clicked, or the application is unpublished. When you edit a page, your changes can be discarded or republished. Your changes are auto-saved but are not reflected in the published application until the page is republished. 