---
id: data_overview
title: Data Overview 
sidebar_label: Data Section Overview
---

<div style={{textAlign: "justify"}}>

In the Data section, you can create and configure datasets, import or connect to external data, define web forms to capture new data from the navigation bar.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.1_overview/overview-navig.png#thumbnail-60) 

## Datasets

The Datasets tab is where you can create Datasets and see them listed. 
Datasets that have been created are listed on the Datasets page, indicating the dataset name, the date it was created, the date it was last successfully loaded, the Data Sources connected to the dataset, the **Scheduling** or **Data Sync** (turned on or off), **Status** (active, draft, failed), whether the dataset is currently in use or not, how many records and columns there are in the dataset, and the type of the dataset. In the upper-right corner, there is a star icon used to mark a dataset as a *favorite*, and a three-dot menu where you can share/unshare the dataset, or permanently delete it.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.1_overview/card.png#thumbnail-40) 


In order to create datasets, there need to be existing connections. These connections are created in the *Connections* tab. Datasets can also be created from already existing datasets. 

The different statuses will indicate if the data was loaded successfully to the dataset and is **Active** and therefore ready to be used for creating visualizations, or if the data is loading and the dataset is in **Draft** state. When the data fails to load, the dataset card will show a red indicator and the status will be shown as **Failed**.

![datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.1_overview/status.png#thumbnail) 


## Web Forms
Web Forms are a simple way of collecting new data or updating existing data that can be embedded and shared practically anywhere, including via email or social media. Web Form options include **Forms**, **Surveys**, and **Quizzes**.

![3_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.1_overview/3_datasets.png#thumbnail) 


## Connections
The Connections tab is where you can add new connectors and manage your existing data connections - see the list of supported connections in [Connections Overview](connectors.md). You can also create File Upload connections to use data in CSV files.

Once you have created Connections, these will appear on cards with details about when they were created and who owns them, the type of the connection, and the name of the file on them.


![5_datasets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.1_overview/connect.png#thumbnail) 

Read more about creating and editing Connections [here](connectors.md).

</div>