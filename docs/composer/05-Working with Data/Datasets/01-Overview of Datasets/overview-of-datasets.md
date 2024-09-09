---
id: overview-of-datasets
title: Datasets
sidebar_label: Datasets
tags: [Data Analyst]
sidebar_position: 1
displayed_sidebar: getting-started
---

A Qrvey Dataset is a collection of structured data used to create dashboards and visualizations within the platform. There are two types of Datasets. [Managed Datasets](https://partners.qrvey.com/docs/composer/Working%20with%20Data/Datasets/Overview%20of%20Datasets/managed-datasets) store data inside Qrvey’s data repository, a high-performance, scalable, serverless OpenSearch cluster. Alternatively, [Live Connect Datasets](https://partners.qrvey.com/docs/composer/Working%20with%20Data/Datasets/Overview%20of%20Datasets/dslive)provide data access directly from its source, enabling real-time queries without the need to load data.

## Create a Dataset

1. Navigate to the **Data** Module and make sure you are in the **Datasets** tab.
2. Click **Create** **New Dataset**. A dropdown will appear. Choose to create a:
    - **New Managed Dataset**
    - **New Live Connect Dataset**
3. Configure as Desired. 

    All new datasets are given the default name of `{connection name} - {table/view name}`.  At this point your Dataset is ready for use; however you can make changes as needed.

## View Datasets

1. Navigate to **Data > Datasets** to browse all Datasets within the application.  
   Each dataset will be displayed as a card, displaying the following details:
    - **Name** — The name assigned to the Dataset.
    - **Type** — Notes if it a **Managed** or a **Live Connect** Dataset.
    - **Status** — `active` (ready to create visualizations), `draft` (dataset is still loading), or `failed` (dataset is not properly loaded).
    - **Last Loaded** — The date that the data was loaded.
    - **Data Sync** — Notes if Data Sync is `On` or `Off`.
    - **Data Source** — The Connection used by this Dataset.
    - **Records** — Number of records within the dataset.
    - **Columns** —  Number of columns within the dataset.

## Mark Dataset as Favorite

To mark a Dataset as a favorite, follow these steps.

1. Navigate to **Data >** **Datasets**.
2. Find the desired dataset card.
3. Click the star in the upper-right corner.

## Manage a Dataset

1. Navigate to **Data > Datasets**.
2. Click on the desired Dataset.
3. Configure and Manage the Dataset as Desired. For more details, please see:
    - [Design](https://partners.qrvey.com/docs/composer/Working%20with%20Data/Datasets/Design/overview-of-the-design-page)
    - [Analyze](https://partners.qrvey.com/docs/composer/Working%20with%20Data/Datasets/Analyze/overview-of-analyze)
    - [Activity Log](https://partners.qrvey.com/docs/composer/activity-log)

### Rename a Dataset

1. Navigate to the desired dataset card.
2. Click on its name.
3. Type to change it as desired.

![Rename a Dataset](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/DatasetLive/dslive.3-8.0.png#thumbnail-40)

## Share and Un-Share Datasets

By default, datasets are only accessible in the application in which they are created.

1. Navigate to **Data > Datasets**.
2. Find the desired Dataset and click its three-dot menu. A dropdown will appear.
3. Click either **Share Data with my Organization** or **Unshare with my Organization**. A modal will appear.
4. Click to confirm your choice in the modal and you will return to **Data > Datasets**.

> **Note:** If unshared, any existing datasets and/or dataset views created from this dataset will no longer be available to users building charts and metrics. Any existing charts and metrics that have a dependency on this dataset will no longer show any data.

## Delete a Dataset

1. Navigate to **Data > Datasets**.
2. Find the desired Dataset and click its three-dot menu. A dropdown menu will appear.
3. Click **Delete**. A modal will appear.
4. Click **Delete** to confirm your choice in the modal and you will return to **Data > Datasets**.