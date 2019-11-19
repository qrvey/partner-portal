---
id: buckets
title: Bucketing Data
sidebar_label: Bucketing Data
---

<div style="text-align: justify">

Bucketing is a powerful feature that allows for the grouping of multiple data points into a single item, or bucket, to make analysis easier.

**Note**: Bucketing is not available for question or data types.

## Creating Buckets
To create a bucket, first navigate to the **Analyze** tab of your web form or dataset, then look for the bucket icon in the upper right toolbar.

![1_buckets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.3_buckets/1_buckets.png#thumbnail-40)

Next, click the orange **Add Bucketed Column** button. 

![2_buckets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.3_buckets/2_buckets.png#thumbnail)

Once inside the bucket editor, you may select the column of data you’d like to group into buckets and begin creating your groupings by clicking **+ Add Custom Bucket**

![3_buckets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.3_buckets/3_buckets.png#thumbnail)

For each bucket you create, you will give it a label, which will appear on all of your analytics going forward, and set the condition and values that will place data points into your bucket.  In the example above, we’re creating date buckets, but the procedure will be identical for text and numeric fields, only with different grouping parameters. 

In the screenshot below, we’ve created buckets for the years 1999, 2000-2010 and 2011-2019. All data points will be grouped into these three buckets if conditions are met and all outliers will be omitted unless catchall buckets are created. (ie: year < 1999) 

![4_buckets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.3_buckets/4_buckets.png#thumbnail)

Once you’re satisfied with your buckets click **Create** to create them. Once created, your new bucketed data column will be available for analysis throughout the application. 

## Removing Buckets
You can remove buckets by clicking the **X** next to any individual bucket or you may remove an entire bucket column by clicking the **X** in the bucket modal window and confirming your action. 