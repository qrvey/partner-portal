---
id: column-links
title: Automatic Column Links
sidebar_label: Automatic Column Links
tags: [Data Analyst]
sidebar_position: 6
displayed_sidebar: getting-started
---

Column links in Qrvey enable you to automatically associate a URL with a column, creating interactive links in visualizations. When a column with a link is used in a page visualization, a "Go to URL" action is automatically created, enhancing the interactivity and functionality of your dashboards. By default, the Custom Link will be used across all visualizations, but can be custom-tailored to each chart by using tokens to create dynamic URLs in the default link or overwriting the default link in a given chart or visualization.

Column links in Qrvey enhance your data visualization capabilities by providing seamless integration with external resources, facilitating a more interactive and connected data experience​.

## Create Column Links

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_2.gif#thumbnail)

To create Column Links, follow these steps.

1. Navigate to **Data > Datasets > Design** and select the desired dataset.
2. Find the desired column, and open the three-dot menu located on the right-hand side.
3. Click the **Column Link** option. A modal will appear.
4. Add the URL and title for the column link as desired.
   The title will be visible in the chart’s on-click menu for End Users.  
   You may also use tokens in URLs to create dynamic links that adapt based on the data.
5. Click **Save** to confirm and exit the modal.
    A blue link icon will appear on the selected column.

Every time you add a new visualization to Dashboard Builder, any visualization containing columns with links will have a Page Action automatically predefined with your set URL.

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_3.gif#thumbnail)
 

## Edit Column Links
There are several ways to a Column Link:

1. Navigate to **Data > Datasets > Design**.
2. Click on the three-dot menu located at the right end of the column.
3. Hover over the "Column Link” option and click **Edit**.
4. Make your edits as desired and save.

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_6.png#thumbnail)

5. From Datasets, go to the Design page and click the “blue link” icon located on a column panel. 

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_7.png#thumbnail)

6. From Page Action settings, where you can edit a URL by clicking on the “Edit URL” action. 

- **Apply Globally** — Updates the URL globally, for all visualizations that use this Linked Column.
- **Apply to Current Chart** — Updates the URL for this specific visualization.
- **Restore Predefined URL** — To use the predefined URL, click the action located in your Page Action settings.

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_8.gif#thumbnail)

## Remove Column Links

There are two ways to remove a Column Link.

**Option 1:** 
1. Go to the Design page and click on the three-dot menu located at the right end of the desired column.
2. Find the “Column Link” option, which will have the option to remove the link.

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_4.png#thumbnail)

**Option 2:** 
1. [Edit](#edit-column-links) the Column Link.
2. Remove the URL.
3. Click **Save** to confirm.

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_5.gif#thumbnail)
