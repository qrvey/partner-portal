---
id: version-5.3-data-router-intro
title: Introduction
sidebar_label: Overview
original_id: data-router-intro
---
<div style="text-align: justify">

Qrvey Data Router provides developers with a means for loading their data from a variety of different sources into Qrvey's high performance, ElasticSearch backend. Data Router provides an API that can be used for creating metadata data mapping and custom transformations, live update data push, and large-volume historical data loads. It is designed to scale for all types of data volumes and velocity scenarios.

## Versioning
To minimize any compatibility issues, the Data Router API is versioned, so the API you begin working with does not need to be changed unless you decide to upgrade to a newer version. We encourage developers to upgrade, however, as we are rapidly adding new features and functionalities.

## Getting Started
In order to make DataRouter API requests, you will need your:

* **Base Data Router URL** - where all your Data Router API calls will be made (this URL is provided by).
* **Data Router API-key** - your unique key that must be a part of every Data Router API call.

These pieces of information are provided to you in the welcome email that you receive when your environment is set up (image 1).

![1_overview](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/Overview/intro_1.png#thumbnail)

> Note: Be sure to keep this information private and do not post it publicly in your code.
> You can find more information on how to protect your API Key [here](https://developer.linkedin.com/docs/best-practices) or [here](https://support.google.com/googleapi/answer/6310037).


## The Process
The process of loading data into Qrvey, using Data Router, is as follows:

1. **Create your metadata** - Metadata is defined as a JSON object and used with Data Router <a href="https://bit.ly/36o3hl9">Metadata API collection </a> collection to create or manage the ES index that will hold your data.

You can read about metadata in more detail in the <a href="/docs/data-router/Metadata/metadata-intro/">Metadata</a> segment of this site.  

2. **Transform your data (optional)** - You may want to change your data from its original state, before loading it into the ES index. This could include transformations as simple as changing some values to all lowercase to complex Machine Learning transforms based on AWS Comprehend. Transformations are used when needed and can be created and managed using the Data Router <a href="https://bit.ly/2TXBPof">Transformations API collection</a>.

You can learn more about <a href="/docs/data-router/Metadata/transformations/transformations-intro/">Transformations</a> and <a href="/docs/data-router/DataRules/data-rules-intro/">Data Rules</a> in their respective segments on this site. 

3. **Load (Post) your data** - Once the metadata is ready and optional transformations are in place, it’s time to load your data into the ES index using the appropriate <a href="https://bit.ly/2HZHb05">Data Loading APIs</a>.

Various topics around loading data have been documented in the articles in the <a href="/docs/data-router/DataLoading/postdata-content/">Data Loading</a> section of the site.


</div>