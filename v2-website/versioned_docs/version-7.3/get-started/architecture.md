---
id: get-started-architecture
title: Architectural Overview
sidebar_label: Architectural Overview
---

<div style={{textAlign: "justify"}}>

In this section, we'll discuss the Qrvey architecture and how all of our components work together to deliver on the promise of a unified, all-in-one data solution.


## Working with Qrvey 

There are three main ways to interact with Qrvey. First, we offer a robust API that allows for direct interaction with all of Qrvey's functions for data collection, analytics, automation and information distribution. Second, we offer a suite of pre-built widgets to simplify the process of embedding Qrvey into existing web pages and applications. Every part of the Qrvey platform can easily be embedded. 

Finally, there is Qrvey Composer, which is a web-based application where primary userscan build forms, datasets, analytics, workflows and more. The Qrvey application has been 100% widgetized, ensuring that everything you can do with the app can also be done with embedded widgets.


![1_working_with_qrvey](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/architecture/1_working_with_qrvey.jpg#thumbnail)

## Qrvey Architecture 

Qrvey is built on a fully scalable cloud architecture utilizing a variety of AWS services to deliver maximum performance for all of your data and application requirements.   

On the backend, we leverage Elasticsearch and DynamoDB to support both massive scale and unstructured to semi-structured data.

For developers, we provide a comprehensive set of APIs and widgets to integrate with your existing applications, data and services.

Out of the box, we also provide a number of supporting services to provide advanced analytics, messaging, and additional customizations.

## Data Router Architecture

Qrvey DataRouter is built on a system of highly scalable APIs and services that support loading all of your data into Qrvey’s Elasticsearch backend.

The API Gateway routes your data through the metadata and data services for managing everything from large volume historical batch loading, and more real-time live data updates.

![3_datarouter_architecture](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/architecture/3_datarouter_architecture.png#thumbnail)

</div>