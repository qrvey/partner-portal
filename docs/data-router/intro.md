---
id: data-router-intro
title: Introduction
sidebar_label: Data Router Overview
---
<div style="text-align: justify">

Qrvey DataRouter provides developers with a means for loading their data from a variety of different sources into Qrvey's high performance, ElasticSearch backend. DataRouter provides an API that can be used for creating metadata data mapping and custom transformations, live update data push, and large volume historical data loads. It is designed to scale for all types of data volume and velocity scenarios. For additional information, check out the article on [DataRouter Architecture](get-started/architecture.md).

## Versioning
To minimise any compatibility issues, the DataRouter API is versioned, so the API you begin working with does not need to be changed unless you decide to upgrade to a newer version. We encourage developers to upgrade, however, as we are rapidly adding new features and functionality.

## API Key
Just like the Qrvey developer API, all DataRouter API requests will require an API key.  This is a separate key from other APIs, so you will need to use your DataRouter-specific API key to work with DataRouter. You will get this API key through an email sent to your AWS account manager.

### Access Information

On this Qrvey Application Email the user will find:

- Account Credentias:
    - Business Analytics:
        - API-Key.
    - Admin Portal:
        - Username.
        - Access Key.
    - **Data Router:**
        - API Key.
        - S3 Bucket.
    - Widgets:
        - Launcher URL.
        - ANView URL.
    - Elasticsearch URL.

- Useful Links:
    - Developer Docs
    - API reference for Business Analytics, Data Router and Widgets Samples.

## Getting Started
In order to make DataRouter API requests, you will need your:

* **Base DataRouter URL** - where all your DataRouter API calls will be made (this URL is provided by )
* **DataRouter API-key** - your unique key that must be a part of every DataRouter API call

> Note: Be sure to keep this information private and do not post it publicly in your code.
> You can find more information on how to protect your API Key [here](https://developer.linkedin.com/docs/best-practices) or [here](https://support.google.com/googleapi/answer/6310037).

</div>