---
id: dashboards
title: Dashboard Builder
sidebar_label: Dashboard Builder
---

<div style={{textAlign: "justify"}}>

Dashboard Builder makes it easy to combine multiple Qrvey Composer components, like forms, charts and metrics, into beautiful web pages, each with their own unique sharable URL. You can also combine multiple dashboards into a complete information application by using the Navigation feature.

To open Dashboard Builder, click the Dashboard Builder icon in the left navigation bar.  

![Dashboard Builder Icon](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/dashboard-builder/icon-composer-dashboard-builder.png)

The Dashboard Builder feature consists of three top-level tabs:
* **Dashboard**. Enables you to design and publish dashboards, described in this article. 
* **[Navigation](../builders/navigation.md)**. Enables you to create navigation menus that combine multiple dashboards into a complete information application. 
* **[User Management](../builders/user-management.md)**. Enables you to grant and restrict end users’ access to the dashboards. 

The Dashboards page lists all the existing dashboards. 

>**Note**: If this is a new application, you will not have any dashboards in the list. 

## General Options
When you first open the Dashboards page, it displays all the existing dashboards. From this screen, you have a variety of options. Click the three-dot menu in the upper-right corner of the dashboard card to display a shortcut menu with a variety of options.

![Dashboard Builder Options](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/dashboard-builder/dashboard-builder-options-81.png)

The shortcut menu provides the following options:
* Edit
* Rename
* Delete
* Duplicate
* Copy Dashboard Link (For more information, see “Preview a Dashboard” later in this article) 
* Embed (For more information, see [Dashboard Builder Widget](../../embedding/widgets/app-building/page-builder.md)). 

## Open an existing dashboard
To open an existing dashboard, locate its card in the list displayed on the main page of Dashboard Builder, and click on it. The canvas displays with the contents of the dashboard. 

## Create a new dashboard
1. In Dashboard builder, click **Create New Dashboard**. 
2. The Create New Dashboard dialog displays with the following two options:
    * **Fixed Grid**. A fixed canvas that remains constant regardless of the device used to display the dashboard.
    * **esponsive Grid**. An adaptive canvas that is suitable for displaying dashboards on multiple devices, such as tablets and phones.
3. Select a grid option and click **Create**. An empty canvas displays, ready for you to create your dashboard. 

>**Note**: You can change the grid option after you’ve created the dashboard. Open the dashboard, click the Grid menu, and select Change to Responsive Grid or Change to Fixed Grid. 


## Overview of the Canvas
The Dashboard Builder canvas provides a wide variety of options for creating custom dashboards. The upper portion of the page displays the page status, publishing options, menus, and a toolbar. The right side contains the configuration panels. The remainder of the page is the canvas for designing your dashboard. 

![Dashboard Builder Canvas](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/dashboard-builder/dashboard-builder-canvas-81.png)

### Data panel overview
The Data panel displays the configured datasets that you can work with, and it enables you to search for a particular dataset. Expand a dataset to display all the charts and summary panels that have been created using that dataset. From here, you can perform the following:
* Drag a panel directly onto the canvas. 
* Hover over a panel to display the name of the chart, chart type, and description (if available).
* Click the arrow icon next to a dataset name to open the design page for the dataset. 
* Click the blue star to add it to your favorites. Click the orange button at the top of the panel to display only the favorites. 

For more information on datasets, see [Data Overview](../datasets/data_overview.md). 

### Filters panel overview
The Filters panel enables you to add filters to the dashboard, so that end-users can interact with them in the published application. 

>**Note**: The Filters panel is different than the Filter Control panel, which provides configuration settings for the selected filter object on the canvas. 

This panel also provides a variety of options for managing filters. Options include:
* **Add Filter**. To create a new filter, click the **Add Filter** button to display the Filter dialog. Use the options in this dialog to select the column, define the condition, and specify values to refine the data. You can also set the scope of the filter to **All dashboards** or **Current dashboard**.
* **Filter Panel Settings**. The Filter Panel Settings dialog provides options for customizing how the Filters panel displays, including the color codes, in the Dashboard builder. 
* **Disable All Filters**. To disable all filters, click the three-dot menu in the Filters panel and click Disable All Filters. 
* **Delete All Filters**. To delete all filters, click the three-dot menu in the Filters panel and click Delete All Filters.

To work with filters, you should be familiar with the various filter components provided in the Qrvey platform. For more information, see [Introduction to Filters](../filtering-data/introduction.md). 

### Configuration options panel overview
The Configuration panel provides options for the object that is currently selected on the canvas. For example:
* For Text, Images and Buttons, the Configuration panel provides options to style fonts, colors, text alignment, image aspect, and an option to add a URL to create links from the objects.
* For charts, the Configuration panel provides chart options such as Filter By or Drill-Downs in a customized way for your page viewers.

### Resolution options
You can choose the resolution that will fit your page viewers best. 

To change resolution, click **Grid Options** in the toolbar and select a resolution from the dropdown menu:
* 1024px
* 1280px
* 1366px
* 1920px

You can change this setting at any time keeping in mind that this affects the sizes of all pages, and when switching to a smaller resolution, some objects may be repositioned which is an action that cannot be reverted.



### Grid options 
Dashboard Builder provides the following options for configuring the grid that is displayed on the canvas:
* To enable or disable the snap-to-grid functionality, click the **Grid** menu and select **Snap to Grid**. 
* To hide the grid, click the **Grid** menu and select **Hide Grid**. 
* To display the grid, click the **Grid** menu and select **Show Grid**.

In addition, the Grid menu enables you to switch between Responsive Grid and Fixed Grid, defined as follows: 
* Responsive Grid. An adaptive canvas that is suitable for displaying dashboards on multiple devices, such as tablets and phones. 
* Fixed Grid. A fixed canvas that remains constant regardless of the device used to display the dashboard. 

### Responsive View options
The Responsive View option in the toolbar enables you to preview how your content will be displayed on different devices. Options are **Desktop**, **Tablet**, and **Mobile**. 

You can configure the minimum and minimum width for the dashboard in each of these options. Click the **Responsive View** icon in the toolbar and select **Customize Breakpoints Resolution**. The Customize Breakpoints Dimensions dialog displays with minimum and maximum settings for desktop, tablet, and mobile devices. 

## Working with objects in the canvas

The canvas provides standard controls that are common in design tools, such as selecting, dragging, selecting, and resizing objects. 

The following sections describe features you can use to build your dashboard.

### Insert a chart
To insert a chart, in the toolbar, click Add Chart. The Chart Builder opens. For more information on creating charts, see Chart Builder Overview. 

### Insert an image
You can add images to your report by uploading them or linking to a URL.

1. Click the Image icon in the toolbar. 
2. Click on the canvas to insert the image object. Size and position the bounding box as desired. The Configuration panel updates to display Image Configuration options. 
3. In the Image Configuration panel, paste the URL to the image in the field provided, or click **Upload Image** and upload an image file. 
4. Under Aspect, select how the image fills the bounding box:
    * **Contain**. Image resizes to fit in the container without changing proportions. 
    * **Cover**. Image retains its size and aspect ratio, regardless of the size of the bounding box.
    * **Fill**. Image resizes and changes its proportions to fit in the container. 
5. On the canvas, adjust the size and position of the image box as needed. 

### Add text
You can add static text to your report by drawing a Text box on the canvas and configuring its settings. Text settings include:
* Font Type
* Font Size
* Text Styles (Bold, Italic, etc.)
* Font Color
* Background Color
* Alignment
* Text Wrapping
* Borders
* Padding

#### To add text
1. Click the **Text** icon on the toolbar. 
2. Draw a bounding box on the canvas. Size and position the box as desired. The Configuration panel updates to display Text Configuration options.
3. Click in the box and type your text.  
4. Use the settings in the Text Configuration panel to format the text. 

### Insert a button
You can add buttons to your dashboard to enable end users to easily navigate to a different site. 

#### To add a button
1. Click the **Button** icon on the toolbar. 
2. Draw a bounding box on the canvas. Size and position the box as desired. The Configuration panel updates to display Button Configuration options.
3. In the Button Configuration panel, under Label, enter the text to display on the button. 
4. Select the Font Color and Background Color in the boxes provided. 
5. In the **Add Link** box, paste in the URL you want the button to redirect to.

### Working with Themes
The Themes feature enables you to apply the same look-and-feel to multiple charts. Qrvey Composer provides a default theme that you cannot delete or edit. However, you may create new themes and define your own visual styles. When you create a theme, it is available in all your applications. Every theme has a unique ID that you can reference programmatically. 

For more information on working with Themes, see "Managing Themes" in [Setting Chart Colors and Themes](../chart-builder/setting-chart-styles.md).


### Insert a Filter Control
The Filter Controls feature enables you to add an object to the dashboard that provides end users with some data filtering capabilities. Options are:
* Date picker
* Value list
* Input box

>**Note**: The Filter Controls feature is different than the Filters feature. For more information on configuring filters, see [Introduction to Filters](../filtering-data/introduction.md).

#### To add a filter control
1. Click the **Filter Controls** icon in the toolbar and select one of the following options: 
    * Date picker
    * Value list
    * Input box
2. Draw a bounding box on the canvas. Size and position the box as desired. The Configuration panel updates to display Filter Control Configuration options. 
3. Under General, select the column to use in the Filter Control. 
4. Complete the remaining options for the filter control. Note that the options provided vary depending on the type of Filter Control selected. 

### Align Objects
The Align components feature helps arrange the components with more precision. To align components, select them on the canvas and click the Align Objects icon on the toolbar. Select one of the following options:
* Align left
* Align center
* Align right
* Align top
* Align middle
* Align bottom

### Arrange Objects
You can arrange overlapping components so that one is in front or behind the other. Select the component you want to arrange and click the Arrange Components icon on the toolbar. Select one of the following options: 
* Send to Front
* Send to Back

### Download options
The Download feature enables you to download the dashboard data in CSV or Excel format or a visualization of the dashboard in PDF format. If multiple datasets are used on the same dashboards, they are exported as separate files.

To download a file, click the Download icon on the toolbar and select one of the following options:
* CSV 
* PDF
* Excel

### Add a page header
Dashboard Builder enables you to add a customized page header to all your dashboards. 

1. To add a page header, click the **Insert** menu and click **Page Header**. The canvas updates to display a header area as a container on the page. The Configuration panel updates to display Header Configuration options. 
2. In the Header Configuration panel, configure the following options as desired:	
    * Background Color
    * Logo
    * Background Image
    * Width
    * Height 
3. In the header area of the canvas, add the desired visual components, such as images, buttons, text, etc. 
 
### Using tabs
The Tab feature enables you to separate the content of a dashboard in different sections. 

1. To add a tab strip, click the Insert menu and click Tabs. A tab strip displays at the top of the dashboard. The Configuration panel updates to display Tab Configuration options.
2. In the Tab Configuration panel, configure the following options as desired:
    * Font Color
    * Selector Color
    * Background Color
    * Border Color
    * Tab Size
3. To rename the tab, click the three-dot menu and select **Rename**. 
4. To add a new tab, click the **+** icon to the right of the existing tab(s). 
5. To create a duplicate tab, click the three-dot menu and select **Duplicate Tab**. 

### Enabling Subscriptions
You can enable end users to subscribe to a scheduled delivery of exported dashboards or specific charts. 

To enable subscriptions, click the Insert menu and click **Page Subscriptions**. A subscription icon displays in the lower right corner of the dashboard. 

Once enabled, end users are provided the option to subscribe to the dashboard view in the Action menu of the embedded Dashboard View widget. 

For more information on using subscriptions, see [Subscribing to Exports](../../ui-docs/subscriptions/subscribing-exports.md).

## Preview a Dashboard
Dashboard Builder enables you to preview a single dashboard in a browser, so you can see how the page will appear to the end user. Note that the preview feature requires you to publish the application first, which commits the application to the server. You cannot resume editing the dashboard until you unpublish the application. 

1. Click the **Dashboard** icon in the left-hand menu to display the Dashboard list. 
2. Click the **Publish Application** button.  
  
    ![Publish Application Button](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/dashboard-builder/publish-application-button-81.png)  

    The application is committed to the server. 
3. Open the dashboard that you wish to preview. 
4. Click the **File** menu and click **Copy Dashboard Link**.
5. Open a new browser tab and paste in the link. The dashboard displays in the browser.  
6. To continue editing the dashboard, you must unpublish the application. On the Dashboard page, click **Unpublish**. 

## Preview an Application
Dashboard Builder provides a preview link that you can use to view an application in a browser. The Preview feature enables you to see how the application will appear to the end user. Note that the preview feature requires you to publish the application first, which commits the application to the server. You cannot resume editing the application until you unpublish it. 

1. Click the **Dashboard** icon in the left-hand menu to display the Dashboard list.
2. Verify that the pages you want to preview are included in the Navigation Menu. For more information, see [Navigation](../builders/navigation.md). 
3. Click the **Publish Application** button.  
  
    ![Publish Application Button](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/dashboard-builder/publish-application-button-81.png)  

    The application is committed to the server, and the Link button is activated. 
4. Click the **Link** button. The application displays in the browser.  
5. To continue editing on application, click **Unpublish**.

## Publish an Application
Before an application can be made available to end users, you must publish it. The Publish feature commits the application to the server and enables the Embed and Preview features. For more information on the publishing process, see the training video, [Content Publishing](../../video-training/building-qrvey-sample/content-publishing.md). 

1. Verify that the pages you want to preview are included in the Navigation Menu. For more information, see [Navigation](../builders/navigation.md). 
2. Verify that you have granted and/or restricted access to the desired users. For more information, see [User Management](../builders/user-management.md). 
3. Click the **Publish Application** button.  

    ![Publish Application Button](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/dashboard-builder/publish-application-button-81.png)  

    The application is committed to the server. You may now preview the application using the **Link** option, or embed the application using the **Embed** options. 
 



</div>
