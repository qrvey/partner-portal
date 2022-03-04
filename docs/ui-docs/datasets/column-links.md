---
id: column-links
title: Automatic Column Links
sidebar_label: Automatic Column Links
---

<div style={{textAlign: "justify"}}>

Automatic Column Links allow you to relate a URL to a column so that when the column is used in a page visualization, a “Go to URL” Page Action is automatically created with that column containing this URL. 
URLs can also be set with tokens for more dynamic use cases. When in Pages, if interacting with Page Actions, you will see this URL predefined for Page Actions in all charts created after a column link was established. From Datasets or Page Builder, the URL can be edited or removed at any point to update all chart Page Actions constructed with linked columns. 

Alternatively, should you want to customize a specific chart page action with a different URL from the predefined one established in Datasets, this can be accomplished from any chart Page Action setting. 

## Creating Column Links


To set up a Column Link, go to the Data section in Composer and select a Dataset. 

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/create-column-link.png#thumbnail-60) 

On the Design page, go to the three-dot menu located at the right end of the column and find the “Column Link” option to set the auto-link. 
In the modal, you can add the desired URL and title of this column link. 

>**Note**: This title will be visible in the chart’s on-click menu for End Users. 

Tokens can also be used in the URL, should you want your link to function with dynamic parameters. 

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_2.gif#thumbnail)


Once the column link has been saved, a blue link icon will appear on the selected column. 


![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_3.png#thumbnail)

> **Note**: Hierarchical data on columns from JSON connections currently have a Known Issue with tokens. These tokens are not being received in Page Actions from Page Builder. 


Every time you add a new visualization to Page Builder, any visualization containing columns with links will have a Page Action automatically predefined with your set URL.

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_3.gif#thumbnail)


 
## Removing Column Links
There are several ways for editing a Column Link:

1. You can remove a Column Link by going to the Design page and clicking on the three-dot menu located at the right end of the column. Look for the “Column Link” option to remove the column link.

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_4.png#thumbnail)

2. A Column Link can be removed by deleting the URL when editing.

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_5.gif#thumbnail)



## Editing Column Links
There are several ways for editing a Column Link:

1. From Datasets, go to the Design page, then click on the three-dot menu located at the right end of the column and find the “Column Link” option to edit the column link.

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_6.png#thumbnail)


2. From Datasets, go to the Design page and click the “blue link” icon located on a column panel. 

![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_7.png#thumbnail)

3. From Page Action settings, where you can edit a URL by clicking on the “Edit URL” action. 

* When editing, if you select “Apply Globally”, the URL will not only be updated for this visualization but will update the global URL definition located in the dataset column - This way all other visualizations using the linked column will be updated at once. 

* When editing, if you select “Apply to Current Chart”, the URL will only be updated for the selected visualization and will at this point be treated with a custom “Go to URL” independent from the column link that was predefined in the dataset column. 

If you want to use the predefined URL, you just need to click on the “Restore Predefined URL” action located in your Page Action settings. 


![column-links](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/column-links/column_8.gif#thumbnail)

</div>