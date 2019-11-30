---
id: reports
title: Report Builder
sidebar_label: Report Builder
---

<div style="text-align: justify">

Report Builder is a quick and easy way to build and publish reports. To begin, enter an application and click the Report Builder icon in the left toolbar.

![1_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/1_reports.png#thumbnail-20)

## Creating a Report
Once inside the Report Builder, you can begin by clicking **Create New Report**.

![2_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/2_reports.png#thumbnail-40)

Next, provide a name and a brief description for your report and click **Create**.

![3_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/3_reports.png#thumbnail-80)

## Editing a Report
Once your report has been created, you’ll see the main Report Builder interface. In the center, you’ll see a blank canvas, on which you can drag components from the menu on the right. Your report can contain multiple tabs, which can be created, renamed and reordered using the toolbar on the top edge of the canvas.

![4_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/4_reports.png#thumbnail)
### The Report Builder Toolbar
To add new tabs to your report click the **+** button after the last tab. Click the tab title to make it the active tab - this will also let you change the title. Click outside the tab title to save your changes if you make any. To reorder a tab, click to the left of the title and drag it to a new position. To delete a tab click the **╳** button to the right of the tab title. You can use the drop-down menu in the top left of the toolbar to change the active tab - this is very useful if there are a large number of tabs.

Towards the right side of the toolbar you will see the usual download button - you can use this to download the report data in CSV format. In the far right is the button to show and hide the background grid on canvas.

### The Canvas
The canvas not only shows you how the report will appear to your users, it also allows you to edit the components. Click on any component to activate the drag handle, on the top left corner, and the delete button, on the top right corner. Reposition components using the drag handle. Note that components will be aligned to the grid and can not be placed on another component. Drag any component border, or the bottom right corner, to resize it. Click the **╳** (delete) button to remove the component from the canvas.

### The Report Builder Menu

Use the menu to the right of the canvas to configure the report properties, manage filters, and to access the palette of report components. 

#### Report Properties

The **Report Properties** menu item is used to revise the report name and description. It also incorporates a drop-down menu which allows you to **Delete** or **Duplicate** the report.

![5_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/5_reports.png#thumbnail-40)

#### Page Objects

The **Page Objects** menu item provides access to the palette of static elements - i.e. text and image blocks. These components can be dragged onto the canvas, where you can position and resize them to fit the content you’d like to add. 

![6_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/6_reports.png#thumbnail-40)

Text can be formatted with size, font, color, and style options.

You can either upload an image from your computer or enter the URL of an image on the web. In either case you can adjust the image scaling to suit your frame.  

#### Elements

The **Elements** menu item provides access to the analytic and metric components you’ve already created. You can also use this menu item to create new dynamic components inside the Report Builder. 

![7_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/7_reports.png#thumbnail-40)

First choose the dataset which contains the data for the component. Then either select **Summary View**, to access the Qrvey generated components, or select **Custom View**, to access the components you have created. 

Drag your desired component onto the canvas, or use the **Create Chart** button to create a new dynamic component. 

![10_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/10_reports.png#thumbnail)

A dynamic component, also referred to as a panel, is automatically updated as the underlying data changes. On each panel you will see the usual **Filter** button to the right of the title - you can use this button to define filters for that panel. The drop-down menu to the right of the **Filter** button has options to **Edit** and to **Download** the panel. Downloads are available in PDF, PNG, and CSV format.


#### Filters

The **Filters** menu item lets you easily manage global filters defined in your report, as well as all the filters defined in your panels. When you select the **Filters** menu item you will see the list of filters defined. The filters are grouped under the headings **Global Filters**, **Tab Filters**, **Panel Filters**. Panel filters are grouped by panel name. 

To enable or disable all filters for a group click on the toggle button or check-box next to the group name. To enable or disable an individual filter value use the check-box next to it.  

![8_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/8_reports.png#thumbnail-40)

To create a new global filter click the **Add Filter** button and choose your data source. Next, select the column in drop-down list and select the scope of the filter, ie **All** or **Current Tab**. See the [**Filtering Data**](../dataviews/filtering) page for further details.

![9_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/9_reports.png#thumbnail)

## Report Dashboard

Once you’ve completed building your reports, you can return to the report dashboard  where you can view, delete or duplicate reports as needed. 

![11_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/11_reports.png#thumbnail)
