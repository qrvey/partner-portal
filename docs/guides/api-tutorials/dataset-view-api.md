---
id: dataset-view-api
title: Create a Dataset View (API)
sidebar_label:  Create a Dataset View (API)
tags: [Software Developer]
sidebar_position: 2
displayed_sidebar: getting-started
---

<div>


A dataset view is a type of reference dataset that points to another dataset as its source.  Dataset views allow you to create a customized view of a dataset for users with access to the application where the dataset view resides.  Dataset views only belong to a single application; however, the source dataset can belong to a different application.  Dataset views are recommended whenever you want to share data amongst users with access to different applications and avoid replicating and copying large datasets.

## Creating a Dataset View (API)
Creating a dataset view programmatically is a three step process, assuming you must first create a shared dataset:

1. Designate a dataset as a shared dataset.
2. Retrieve the connection ID of the shared dataset.
3. Create a new dataset view with the source dataset’s connection ID.

Use the following API endpoint to designate the source dataset as a shared dataset:

`https://{{DOMAIN}}.qrveyapp.com/devapi/v4/user/{{USER_ID}}/app/{{APP_ID}}/qollect/dataset/{{DATASET_ID}}/publishVersion?runPublicTrigger=true`

You must also define a request body with the `isPublic` property set to `true`.

The following parameters must be defined for the API endpoint:

* **DOMAIN** is the 5-letter subdomain of your Qrvey instance
* **USER_ID** parameter should be the ID of the user that owns the application where the dataset was created
* **APP_ID** is the ID of the application where the dataset was created
* **DATASET_ID** is the ID of the dataset that is to become a shared dataset.

You can get the ID of the dataset by entering the Design view for the target dataset and inspecting the URL:

`https://{{DOMAIN}}.qrveyapp.com/app/index.html#/application/{{APP_ID}}/data-uploads/{{DATASET_ID}}`

After designating the dataset as a shared dataset, the next step is to create a new dataset view that will use the shared dataset as its source.  The first step is to call the following API endpoint to retrieve the shared dataset’s connection ID:

`https://{{DOMAIN}}.qrveyapp.com/devapi/v4/user/{{USER_ID}}/app/{{APP_ID}}/qollect/dataset/{{DATASET_ID}}`

From the JSON response, retrieve the “connectionId” property value, which you will use in the next and final API call.

![dataset_views](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/Dataset+Views/dataviews3.png#thumbnail-60) 


Once you have the connection ID for the source shared dataset, call the following API endpoint to create a new dataset view:

`https://{{DOMAIN}}.qrveyapp.com/devapi/v4/user/{{USER_ID}}/app/{{APP_ID}}/qollect/dataset/clone/connection/{{CONNECTION_ID}}`

For this API call, the user ID and app ID must be the ID of the target application and the ID of the user owner for the target application where the new dataset view will be created.

You must also define the app ID and user ID of the source application where the source dataset resides within the API call’s request body:

```json
{
   "appId": "APP_ID",
   "userId": "USER_ID"
}
```



</div>