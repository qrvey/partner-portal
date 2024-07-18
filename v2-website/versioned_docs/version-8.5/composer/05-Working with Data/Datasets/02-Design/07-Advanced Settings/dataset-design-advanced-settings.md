---
id: dataset-design-advanced-settings
title: Advanced Settings
sidebar_label: Advanced Settings
tags: [Data Analyst]
sidebar_position: 1
displayed_sidebar: getting-started
---

The Advanced Settings tab provides advanced configuration options for your dataset. 

To open the Advanced Settings tab, click **Data** in the left menu, open your dataset, click the **Design** tab, and then click **Advanced Settings**. 

Advanced Settings provides the following options:
* Share Data
* Label Internationalization
* Discovered Columns
* Estimated Dataset Size

## Share Data
Specifies whether to make the dataset available to the rest of the organization. If enabled, users can create new datasets from this dataset. 

## Label Internationalization
Specifies whether to enable internationalization in the dataset. If enabled, the dataset name and column names can be translated to multiple languages. For more information, see [Configuring Dynamic Labels for Datasets](../../../../../software-developer/09-Internationalization/configuring-dynamic-labels.md).

## Discovered Columns
When a new column is discovered during a Data Source query, specifies whether to automatically add it to the dataset. 

## Estimated Dataset Size
Specifies the estimated size of the dataset based on its number of records. This option determines the number of shards allocated to the dataset’s ES index, which helps the system optimize the performance of loading and displaying data. The default setting is Small. 

| Dataset Size | Number of Records | Number of Shards |
| ---- | --------- | ------ |
| **Small** | Up to 10M records | 1 shard |
| **Medium** | Between 10M and 250M records | 3 shards |
| **Large** | Over 250M records | 5 or more shards. If the node count is higher than 5, the number of shards equals the number of nodes. |
 
