---
id: elasticsearch
title: Elasticsearch Connections
sidebar_label: Elasticsearch Connections
---

<div style="text-align: justify">

Elasticsearch is a highly-scalable cloud database provided by Amazon Web Services. In this article, we’ll outline the steps for connecting to Elasticsearch and how to use it within Qrvey.

Once inside your desired application, select **Data** from the left menu, then click the orange**Add Dataset** button to create a new data source. 

![1_elasticsearch](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_elasticsearch/1_elasticsearch.png#thumbnail)

Next, choose **Elasticsearch** from the list of data source options and click **Create New**.

![2_elasticsearch](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_elasticsearch/2_elasticsearch.png#thumbnail-60)

Next, select if you’d like to use the Default URL or a Custom URL. If you’ll be using a Custom URL, enter that on the next screen. 

![3_elasticsearch](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_elasticsearch/3_elasticsearch.png#thumbnail)

On the **Select Index** page, you’ll be able to see and choose the index you’d like to connect, along with the current health of those indices. Make your selection and click **Next**.

![4_elasticsearch](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_elasticsearch/4_elasticsearch.png#thumbnail)

Finally, you may select which columns you’d like to connect by using the checkboxes in the left-hand column. A search box is provided for datasets with large numbers of columns. Qrvey will automatically profile your data and choose an appropriate data type, but you can further refine how you’d like each column to appear in Qrvey by updating the data types as needed. 

To learn more about the available data types, just look on the right side of the window.

![5_elasticsearch](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_elasticsearch/5_elasticsearch.png#thumbnail-60)

If your data contains address information, you may choose to create a **Geolocation Group** by setting geolocation as a data type for one column, then letting Qrvey know where to find the remainder of the information as seen below. Once your group has a name and all of its fields defined, you may save your group and continue.

![6_elasticsearch](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_elasticsearch/6_elasticsearch.png#thumbnail)

When you are happy with your selections, click **Save** in the upper right corner and your new dataset will be imported. Please note that it may take some time for all of your data to be loaded depending on the size of your data. 