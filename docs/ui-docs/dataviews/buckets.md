---
id: buckets
title: Bucketing Data
sidebar_label: Bucketing Data
---

<div style="text-align: justify">

Bucketing is a powerful feature that allows for the grouping of multiple data points into a single item, called a bucket, to make analysis easier.

**Note**: Bucketing is not available for all question or data types.

## Creating Buckets
To create a bucket, navigate to the **Analyze** tab of your web form or dataset, and look for the bucket icon in the upper-right toolbar.

![1_buckets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.3_buckets/1_buckets.png#thumbnail-40)

Next, click the orange **Add Bucketed Column** button. 

![2_buckets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.3_buckets/2_buckets.png#thumbnail)

Once inside the bucket editor, select the column of data you’d like to group into buckets and enter a label for your new (bucketed) column.

If you choose a numeric column to bucket, you can allow Qrvey to manage the buckets by selecting the **Basic** option. Within the **Basic** option, you can have either a variable or fixed number of buckets by using the **Dynamic** or **Fixed** options respectively. When you choose **Dynamic**, the current set of buckets will be shown on the right; however, as your data changes, the buckets will be adjusted by Qrvey. If you choose **Fixed** buckets, you can then specify the number of buckets, the minimum range value, and the maximum range value. If you select **Custom** buckets, then the current set of Qrvey generated buckets will be shown and you can label, adjust, remove or add buckets as you desire.

If you select a text column to bucket, then you can enter a comma delimited list of bucket names and click the **Add Bucket** button to create the buckets. Each bucket name has an associated radio button - use this to select a bucket, and then use the checkbox next to each distinct text value in the values list on the right panel, to add or remove values from the bucket. There is a search field at the top of the values list to help you find values easily. You can create an _Other_ bucket using the **Unassigned Values As "Other"** option. Use the **╳** button for a bucket value to remove it, or use the **╳** button for a bucket name to delete that bucket.

If you select a date column to bucket, then you can begin creating your buckets by clicking **+&nbsp;Add&nbsp;Custom&nbsp;Bucket**.

![3_buckets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.3_buckets/3_buckets.png#thumbnail)

For each custom date or numeric bucket you create, you will first give it a label, which will appear on all of your analytics going forward, and then set the condition and values that will place data points into your bucket.  Use the **Remove** button on a custom bucket to remove it and use the drag handle to reorder custom buckets.

In the screenshot below, we’ve created buckets for the years 1999, 2000-2010, and 2011-2019. All data points will be grouped into these three buckets if conditions are met, and all outliers will be omitted unless catchall buckets are created. (i.e. year < 1999) 

![4_buckets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.3_buckets/4_buckets.png#thumbnail)

Once you’re satisfied with your buckets, click **Create** to create them. Once created, your new bucketed data column will be available for analysis throughout the application. 

## Managing Bucketed Columns
Once you have added bucketed columns, then they will be listed in the **Buckets** modal window.

Each bucketed column has 3 associated icons which allow you to duplicate, edit or delete the column.

>Note that when you remove a bucketed column by clicking the **╳** button, the bucketed column is removed **immediately**. 