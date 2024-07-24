---
id: dataset-views
title: Dataset Views
sidebar_label: Dataset Views
tags: [Data Analyst]
sidebar_position: 5
displayed_sidebar: getting-started
---

A dataset view is a type of reference dataset that points to another dataset as its source.  Dataset views allow you to create a customized view of a dataset for users with access to the application where the dataset view resides.  Dataset views only belong to a single application; however, the source dataset can belong to a different application.  Dataset views are recommended whenever you want to share data amongst users with access to different applications, while avoiding replication and copying of large datasets.

## Create a Dataset View

Dataset views can only be created if at least one shared dataset exists in at least one application.

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

Any action that would change the underlying data structure is restricted for dataset views.

Therefore, you can perform the following actions on a dataset view:
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

## Create a Dataset View via API

Creating a dataset view programmatically is a three step process, assuming you must first create a shared dataset:

1. Share a Dataset.
2. Get the connection ID of shared dataset.
3. Create a new dataset view using the connection ID.

#### Share a Dataset
Use the following API endpoint to designate the source dataset as a shared dataset:

```
https://{{DOMAIN}}.qrveyapp.com/api/v4/user/{{USER_ID}}/app/{{APP_ID}}/qollect/dataset/{{DATASET_ID}}/publishVersion?runPublicTrigger=true
```

You must also define a request body with `isPublic` set to true: `{ “isPublic”: true }`.

The following parameters must also be defined:
- `DOMAIN` is the 5-letter subdomain of your Qrvey instance.
- `USER_ID` parameter should be the ID of the user that owns the application where the dataset was created.
- `APP_ID` is the ID of the application where the dataset was created.
- `DATASET_ID` is the ID of the dataset that is to become a shared dataset.

#### Get Connection ID of Shared Dataset

You can get the ID of the dataset by entering the Design view for the target dataset and inspecting the URL:

```
https://{{DOMAIN}}.qrveyapp.com/app/index.html#/application/{{APP_ID}}/data-uploads/{{DATASET_ID}}
```

#### Create New Dataset View

Finally, you can create a new dataset view using your shared dataset as its source. 

1. Call the following API endpoint to retrieve the shared dataset’s connection ID:

```
https://{{DOMAIN}}.qrveyapp.com/devapi/v4/user/{{USER_ID}}/app/{{APP_ID}}/qollect/dataset/{{DATASET_ID}}
```

2. From the JSON response, retrieve the “connectionId” property value, which you will use in the next and final API call.

![dataset_views](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Dataset+Views/dataviews3.png#thumbnail-60) 


3. Once you have the connection ID for the source shared dataset, call the following API endpoint to create a new dataset view:

```
https://{{DOMAIN}}.qrveyapp.com/api/v4/user/{{USER_ID}}/app/{{APP_ID}}/qollect/dataset/clone/connection/{{CONNECTION_ID}}
```

For this API call, the `appId` and `userId` must be the ID of the target application and the ID of the user-owner for the target application where the new dataset view will be created.

You must also define the `appId` and `userId` of the source application where the source dataset resides within the API call’s request body:

```
{
   appId: “{{APP_ID}}”,
   userId: “{{USER_ID}}”
}
```