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

![2_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/2_reports.png#thumbnail-60)

Next, provide a name and a brief description for your report and click **Create**.

![3_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/3_reports.png#thumbnail-80)

## Editing a Report
Once your report has been created, you’ll see the main Report Builder interface. In the center, you’ll see a blank canvas, on which you can drag components from the menu on the right. Your report can contain multiple tabs, which can be created, renamed and reordered using the toolbar on the top edge of the canvas.

![4_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/4a_reports.png#thumbnail)

## Toolbar

In the toolbar, you will find the options to configure your report tabs and options to add content.

![5_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/5a_reports.png#thumbnail-40) 


From the toolbar, you will also be able to access the chart builder by clicking on the chart icon. Once you configure and save your chart, this will be added to your page right away. 

There you can find page objects options: image, text, and button. When selecting the icon, you can click and drag the size of the object on the canvas. 

Once there are multiple objects added to a page, you will find the option to arrange your objects by sending them to the front or back. 

You can configure grid options such as showing the gridlines or the snap to grid option. 


Towards the right side of the toolbar, you will see the download button - you can use this to download the report data in CSV format. If there are multiple datasets being used on the same pages, they will be exported as separate files.

## Selecting Objects
Once you have added objects (charts, images, texts, or buttons) to the canvas, you can choose them by clicking on each of them to move them around, modify their properties or apply different configurations. 

The canvas also supports the selection of multiple objects simultaneously creating a group to move them together or use other options for all the selected items. By pressing the Control/Command key and clicking on each object on the canvas multiple objects can be selected.

![6a_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/6a_reports.png#thumbnail) 

You can also keep pressing the control/command key while dragging a square with your mouse around the items you want to select.

![6b_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/6b_reports.png#thumbnail) 

## Aligning Objects
Objects can be aligned automatically using the “Align Objects” toolbar option. Clicking on the button will display a list of options to align the objects.

 ![6c_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/6c_reports.png#thumbnail) 
 

Depending on how many items you have selected, the behavior of the aligned objects could vary slightly.

* **Align left**: The object is aligned to the leftmost side of the canvas. When multiple objects are selected, they will be left-aligned based on the leftmost item of that group.

* **Align center**: The object is aligned to the center of the canvas. When multiple objects are selected, they will be aligned to the center of the selection area.

* **Align right**: The object is aligned to the rightmost side of the canvas. When multiple objects are selected, they will be right-aligned based on the rightmost item of that group.

* **Align top**: The object is aligned to the top of the canvas. When multiple objects are selected, they will be top-aligned based on the uppermost item.

* **Align middle**: The object is aligned to the middle of the canvas. When multiple objects are selected, they will be aligned to the middle of the selection area.

* **Align bottom**: The object is aligned to the bottom side of the canvas. When multiple objects are selected, they will be bottom-aligned based on the lowermost item of that group.

## Data & Configuration
In order to begin creating charts and filters for your reports, you will need to have configured at least one dataset first. This can be done in the <a href="/docs/ui-docs/datasets/data_overview/"> <strong>Data section </strong></a>. 

Once you have one or a group of datasets ready, they will be displayed in the Data panel on the right side of the canvas. Here, you can search for a particular dataset and expand each dataset to find the created charts or summary panels that can be added to a tab. To add a chart just click and hold the chart’s blue box to drag and drop onto the canvas. You can also opt for Shift + Click to add multiple charts at the same time. 

![6.1_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/6_reports.png#thumbnail-80)

If you have a long list of datasets, you can also select favorites by clicking on the blue star. It will turn orange to indicate the dataset has been marked as favorite, and by clicking the orange button beside **Data**, you will see only your favorite datasets. 


![7_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/7_reports.png#thumbnail-80)

If you need to access one of the datasets you are working with from Report Builder, you can look for the Dataset shortcut beside the Dataset name. Clicking on it will redirect you to the dataset’s data page in a quicker way.

![reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/shortcut.png#thumbnail-20)

## Object Configuration
As you are building reports, you will need to use the Data & Configuration panel where you can find the configuration settings for each object added to a tab. 

![8_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/8_reports.png#thumbnail-0)


For Text, Images, and Buttons you will find options to style fonts, colors, text alignment, and image aspect. 

To access the configuration options, you must click on the object you would like to work with. To switch back and view your datasets, you can click anywhere on the canvas. 

To reposition each object, you can click anywhere on the object and drag it to the desired position. You can also click on any of the nodes around the object to resize, and the “X” in the right corner to remove it from the page.


![9_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/9_reports.png#thumbnail-40)



## Filters

The Filters menu item lets you easily manage global filters defined in your report, as well as all the filters defined in your panels. When you select the Filters menu item, you will see the list of filters defined. The filters are grouped under the headings Global Filters, Tab Filters, and Panel Filters. Panel filters are grouped by panel name.

To enable or disable all filters for a group, click on the toggle button or check-box next to the group’s name. To enable or disable an individual filter value, use the check-box next to it.

![10_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/10_reports.png#thumbnail-40)

To create a new global filter, click the **Add Filter** button and when the filter modal appears, select the column in the list, the condition, and values to refine the data. Finally, select the scope of the filter, i.e. All pages or Current Tab. See the <a href="/docs/ui-docs/builders/dataviews/filters"> <strong>Filtering Data</strong></a> page for further details.

![12_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/12a_reports.png#thumbnail-40)


## Report Dashboard

Once you’ve completed building your reports, you can return to the report dashboard  where you can view, delete or duplicate reports as needed. 

![11_reports](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/builders/3.4.4.1_reports/11_reports.png#thumbnail-0)



