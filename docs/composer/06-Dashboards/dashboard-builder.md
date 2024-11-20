---
id: dashboard-builder
title: The Dashboard Builder
sidebar_label: The Dashboard Builder
tags: [Data Analyst]
sidebar_position: 1
displayed_sidebar: getting-started
---

Dashboard Builder makes it easy to combine multiple Qrvey Composer components, like forms, charts and metrics, into beautiful web pages, each with their own unique sharable URL. You can also combine multiple dashboards into a complete information application with the Navigation feature.


## Browse Dashboards

![Dashboard Builder](https://s3.us-east-1.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/dashboard-builder/dashboard-builder-20241118A.webp)

1. Click the Dashboard Builder icon in the left navigation bar. The Dashboards page will open, showing all dashboards within the application. Click any dashboard to open it up.

The Dashboard Builder feature consists of three top-level tabs:
* **Dashboard** — to design and publish dashboards.
* **[Navigation](./navigation.md)** — to create navigation menus that combine multiple dashboards. 
* **[User Management](./overview-of-user-management.md)** — to grant and restrict end users’ access to dashboards. 

>**Note**: If this is a new application, you will not have any dashboards in the list. 

## Create a Dashboard
1. In Dashboard builder, click **Create New Dashboard**. 
2. The Create New Dashboard dialog displays with the following two options:
    * **Fixed Grid**. A fixed canvas that remains constant regardless of the device used to display the dashboard.
    * **esponsive Grid**. An adaptive canvas that is suitable for displaying dashboards on multiple devices, such as tablets and phones.
3. Select a grid option and click **Create**. An empty canvas displays, ready for you to create your dashboard. 

>**Note**: You can change the grid option after you’ve created the dashboard. Open the dashboard, click the Grid menu, and select Change to Responsive Grid or Change to Fixed Grid. 


## Dashboard Options

1. Click the three-dot menu in the upper-right corner of the desired dashboard card. A shortcut menu appears, enabling you to **Edit**, **Rename**, **Delete**, **Duplicate**, **Copy Dashboard Link** [Dashboard Preview](#preview-a-dashboard), as well as get the code to **Embed** it [as a Widget](../../software-developer/04-Widgets/05-Widgets/dashboard-builder.md).

![Dashboard Builder Options](https://s3.us-east-1.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/dashboard-builder/dashboard-general-options-20241118A.webp)


## Design Mode and Interaction Mode

<iframe src="//fast.wistia.net/embed/iframe/2gcjx3i98p?videoFoam=true"
allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_embed"
name="wistia_embed" allowFullScreen  width="100%" height="600"></iframe>
<script src="//fast.wistia.net/assets/external/iframe-api-v1.js"></script>

Dashboard Builder provides two modes for working with dashboards: **Design mode** for building and configuring dashboards; and **Interaction mode** to view and interact with the dashboard just as you would in Dashboard View. To open Interaction mode, click the **Interact** button at the top of the page. To return to Design mode, click the **Design** button. 

>**Note**: Any changes made in Interaction mode are not persisted when returning to Design mode.   

## The Data Panel
This panel datasets that you can work with and enables you to search for a particular dataset. Toggle the arrow to the right of a dataset to display all charts and summary panels that use its data. You can perform the following:
* Drag a panel directly onto the canvas. 
* Hover over a panel to display the name of the chart, chart type, and description (if available).
* Click the **Go to Dataset** icon to open the design page for a given dataset.
* Click the star icon to add it to your favorites. Click the orange star icon button at the top of the Data Panel to display only favorites.

## The Filters Panel
>**Note**: This feature is different than a [Filter Control](#canvas-menu).

The Filters panel enables you to add filters to a dashboard so that end-users can interact with them within a published application. For more information, see [Overview of Filters](../08-Filtering%20Data/overview-of-filters.md). 

Panel Options:
* **Add Filter** — Lets you configure a filter. You can also set the scope of the filter to **All dashboards** or **Current dashboard**.
* **Filter Panel Settings** —  Customizes how the Filters panel displays, including the color codes, within the dashboard.
* **Disable All Filters** — Click the three-dot menu in the Filters panel and click **Disable All Filters**.
* **Delete All Filters** — Click the three-dot menu in the Filters panel and click **Delete All Filters**.


## Canvas Configuration Options
The following options are available for an object that is currently selected on the canvas.

![Canvas Configuration Options](https://s3.us-east-1.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/dashboard-builder/canvas-configuration-options-20241119A.webp)

### The Menu Bar
- **File**
    - **New Dashboard** — Creates and opens a new dashboard, preserving the current one.
    - **Duplicate Dashboard** — Clones the current dashboard, preserving the current one.
    - **Dashboard Settings** — Adjusts pixel resolution of the dashboard.
    - **Privacy** — If private, requires authentication or `clientid` to [view the dashboard as a widget](../../software-developer/04-Widgets/introduction-to-widgets.md). If public, anyone with a link can see the dashboard. Defaults to Public.  
        You must Publish the Dashboard for an update to Privacy to take effect.
    - **Download** — Shortcut to the [Download](#download-options) feature.
    - **Embed** — Creates a copy & Paste widget embed. For details see [Introduction to Widgets](../../software-developer/04-Widgets/introduction-to-widgets.md)
    - **Copy Dashboard Link** — Past the link into the browser to see an em`bedded view of the dashboard, with public access permission. If **Privacy** is set to Private, the dashboard will not be visible.
- **Edit** — Provides common edit commands for selected items, such as: Copy, Paste, Cut, Delete, Duplicate, or Select all. 
- **Grid** — Provides the following options for configuring the grid that is displayed on the canvas:
    - **Snap to Grid** — enables or disables the snap-to-grid functionality.
    - **Show/Hide Grid**  — Toggles grid square visibility.
    - **Switch to Responsive/Fixed Grid** — Toggles the grid type.
- **Insert** — Enables you to create a chart or other items on the grid area. For descriptions of each item, please see:
    - For most items, please see the [Canvas Menu](#canvas-menu) below.
    - **Tabs** - Inserts tabs into your dashboard. Use the configuration panel to set Font, Selector, Background, Border Colors, and Tab Size. Rename, add **+**, or duplicate tabs from the three-dot menu.  
    - **Header** —  Inserts a Page Header. Use the configuration panel to set Background Color, Logo, Image, Width, and Height. 
    - **Subscriptions** — Inserts the subscriptions button. For details please see [Subscribing to Exports](./subscribing-exports.md).
- **Arrange** — Lets you set the depth level and alignment of items on the grid. (Click to select an item on the grid to enable this).

### Canvas Menu
- **Grid Options** — Select a pixel resolution from the dropdown menu. You can change this setting at any time, though this may adjust page size or reposition items, which is an action that cannot be reverted.
- **Undo and Redo** — Conventional Undo and Redo buttons, which can undo and redo up to 50 actions. You can also use the standard undo/redo keyboard shortcuts.
- **Create Chart** — Inserts a new chart. The edit chart modal will open automatically.
- **Image** — Inserts a new image box. Use the Configuration panel upload via URL or form local machine, as well as the Aspect (**Contain**, **Cover**, or **Fill**).
- **Text** — Inserts a new textbox. Use the Configuration panel to adjust text format.
- **Button** — Inserts a new button, to navigate to another URL. Use the Configuration panel set its URL.
- **Style Themes** — Choose a custom theme. For details, please see [Managing Themes](../07-Charts/setting-chart-styles.md#managing-themes).
- **Responsive View** — Select **Desktop**, **Tablet**, or **Mobile** to preview how it will appear. Click the **Responsive View** icon in the toolbar and select **Customize Breakpoints Resolution** so configure the min and max breakpoints.
- **Filter Control** — Inserts a filter control for end-users. Options are: Date Picker, Value List, and Input Box. The Configuration panel updates to display Filter Control Configuration options. 
- **Align Objects** — The Align components feature helps arrange the components with more precision. To align components, select them on the canvas and click the Align Objects icon on the toolbar. Options include align left, align center, align right, align top, align middle, and align bottom.
- **Arrange Objects** — Arrange overlapping components with **Send to Front** and **Send to Back**. The component you want to arrange must be selected.
- **Grid** — Toggle **Show Gridlines** and **Snap to Grid** within the canvas, as well as between **Responsive Grid** & **Fixed Grid**.
- **Responsive View** — Select **Desktop**, **Tablet**, or **Mobile** to preview how it will appear. Click the **Responsive View** icon in the toolbar and select **Customize Breakpoints Resolution** so configure the min and max breakpoints.
- **Download** — Enables you to download the dashboard data in a number of formats. If multiple datasets ar used, they are exported as separate files.
 

## Preview a Dashboard
Dashboard Builder enables you to preview a single dashboard in a browser, so you can see how the page will appear to the end user. Note that the preview feature requires you to publish the application first, which commits the application to the server. You cannot resume editing the dashboard until you unpublish the application. 

>**NOTE**: Version 8.3 introduces Interaction mode, which provides a quick way to preview your dashboard within the Dashboard Builder interface. For more information, see "Using Design Mode and Interaction Mode" earlier in this article. 

1. Click the **Dashboard** icon in the left-hand menu to display the Dashboard list.
2. Click the **Publish Application** button in the upper right corner and the changes are saved.
3. Open the dashboard that you wish to preview.
4. Click the **File** menu and click **Copy Dashboard Link**.
5. Open a new browser tab and paste in the link. The dashboard displays in the browser.
6. To continue editing the dashboard, you must unpublish the application. On the Dashboard page, click **Unpublish**.

## Preview an Application
Dashboard Builder provides a preview link that you can use to view an application in a browser. The Preview feature enables you to see how the application will appear to the end user. Note that the preview feature requires you to publish the application first, which commits the application to the server. You cannot resume editing the application until you unpublish it. 

>**NOTE**: Version 8.3 introduces Interaction mode, which provides a quick way to preview your dashboard within the Dashboard Builder interface. For more information, see "Using Design Mode and Interaction Mode" earlier in this article. 

1. Click the **Dashboard** icon in the left-hand menu to display the Dashboard list.
2. Verify that the pages you want to preview are included in the Navigation Menu. For more information, see [Overview of Navigation](./navigation.md). 
3. Click the **Publish Application** button. The application is saved, and the Link button is activated. 
4. Click the **Link** button. The application displays in the browser. 
5. To continue editing on application, click **Unpublish**.

## Publish an Application
Before an application can be made available to end users, you must publish it. The Publish feature commits the application to the server and enables the Embed and Preview features. For more information on the publishing process, see our guide on [Content Publishing](../../guides/legacy/content-publishing.md). 

1. Verify that the pages you want to preview are included in the Navigation Menu. For more information, see [Overview of Navigation](./navigation.md). 
2. Verify that you have granted and/or restricted access to the desired users. For more information, see [Overview of User Management](./overview-of-user-management.md). 
3. Click the **Publish Application** button and the application is saved. You may now preview the application using the **Link** option, or embed the application using the **Embed** options. 
 