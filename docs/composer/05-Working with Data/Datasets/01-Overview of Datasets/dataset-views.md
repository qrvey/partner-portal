---
id: dataset-views
title: Dataset Views
sidebar_label: Dataset Views
tags: [Data Analyst]
sidebar_position: 5
displayed_sidebar: getting-started
---

A Dataset View is a type of reference dataset that points to another dataset as its source. Dataset views allow you to create a customized view of a dataset for users with access to the application where the dataset view resides. Dataset views only belong to a single application; however, the source dataset can belong to a different application. Dataset views are recommended whenever you want to share data amongst users with access to different applications, while avoiding replication and copying of large datasets.

## Create a Dataset View

Dataset views can only be created from [shared datasets](./overview-of-datasets.md#share-and-un-share-datasets).

To create a new dataset view, follow these steps.

1. Navigate to **Data > Datasets** and click **New Dataset**.  
2. Click on the **Shared Data** tab and select a shared dataset as the source.
3. Click **New Dataset View**.  
   The owner's name as well as the app in which the original dataset was created are both shown for all shared datasets. 

![dataset_views](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Dataset+Views/datasetviews4.png#thumbnail-60) 

## View Dataset View

1. Navigate to **Data > Datasets** and find the desired dataset.  
   You can see which datasets have been created as dataset views by looking at the Type property from the main Datasets page.

![dataset_views](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Dataset+Views/dataviews2.png#thumbnail-40) 

## Customize Dataset Views

Any [customization or configuration](./managed-datasets.md#create-a-managed-dataset) that would change the underlying data structure is restricted for dataset views.

Therefore, you can perform the following:
- Show/hide individual columns.
- Change friendly column names.
- Change column visualization formats.
- Create geolocation groups.
- Set column links.

The following actions are restricted for dataset views: 
- Edit connection settings and/or source queries.
- Create dataset joins.
- Create and modify transformations.
- Change column data types.
- Change column input formats.
- Set unique identifiers.
- Define data sync schedules.

## Create Dataset View via API

To create a dataset view via the API, follow these steps.
1. Choose a Shared Dataset and collect the following parameters from it.
   - `DOMAIN` — The 5-letter subdomain of your Qrvey instance.
   - `USER_ID` — The ID of the user that owns the application where the dataset was created.
   - `APP_ID` — The ID of the application where the dataset was created.
   - `DATASET_ID` — The ID of the dataset that is to become a shared dataset.
   - `CONNECTION_ID` — System-defined ID of the connection associated with the data source.

   1. There are two ways to choose a Shared Dataset:  
      - Use Qrvey Composer to [Share a Dataset](./overview-of-datasets.md#share-and-un-share-datasets) or identify an existing one.
      - Share a dataset programmatically using the following endpoint and passing `{ “isPublic”: true }` in the request body.
      ```
      https://{{DOMAIN}}.qrveyapp.com/api/v4/user/{{USER_ID}}/app/{{APP_ID}}/qollect/dataset/{{DATASET_ID}}/publishVersion?runPublicTrigger=true
      ```
   2. You can find the parameters in two places:
      - Using Qrvey Composer, navigate into **Qrvey Composer > [Application] > Data > [Dataset] > Design** and check the page's URL:
      ```
      https://{{DOMAIN}}.qrveyapp.com/app/index.html#/application/{{APP_ID}}/data-uploads/{{DATASET_ID}}
      ```
      - If you have the `DATASET_ID` and `DOMAIN` of a shared Dataset, you can use the [Get Dataset](https://qrvey.stoplight.io/docs/qrvey-api-doc/9xpku63qfxq54-get-dataset) endpoint.

2. Create a new Dataset View using the Shared Dataset as its source.

   1. Call the [Create Dataset View from Shared Dataset](https://qrvey.stoplight.io/docs/qrvey-api-doc/d1a594100ae37-create-dataset-view-from-shared-dataset). 
   
   2. Use these parameters on the API endpoint:
      `DOMAIN` — The 5-letter subdomain of your Qrvey instance.
      `APP_ID ` — ID of the **target application** where the new dataset view will be created.
      `USER_ID` — ID of the **user-owner for the target application** where the new dataset view will be created.
      `CONNECTION_ID` — From the source / Shared Dataset.
      ```
      https://{{DOMAIN}}.qrveyapp.com/api/v4/user/{{USER_ID}}/app/{{APP_ID}}/qollect/dataset/clone/connection/{{CONNECTION_ID}}
      ```

      Pass the `APP_ID` and `USER_ID` of the **source application** where the shared dataset resides into the request body:

      ```
      {
         appId: “{{APP_ID}}”,
         userId: “{{USER_ID}}”
      }
      ```