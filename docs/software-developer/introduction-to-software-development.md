---
id: introduction-to-software-development
title: Introduction
sidebar_label: Introduction
tags: [Software Developer]
sidebar_position: 1.1
displayed_sidebar: getting-started
---

Software Developers embed Qrvey widgets in their host applications and use Qrvey APIs to programmatically interact with the Qrvey platform. This section of the Qrvey Partner Portal provides Software Developers with the information they need to perform these tasks. Articles include:

## Architecture

There are three main ways to interact with the Qrvey platform. First, we offer a robust API that allows for direct interaction with all of Qrvey's functions for data collection, analytics, automation, and information distribution. Second, we offer a suite of pre-built widgets to simplify the process of embedding Qrvey into existing web pages and applications. Every part of the Qrvey platform can easily be embedded. Finally, there is Qrvey Composer, a web-based application used by Data Analysts to create and manage datasets, visualizations, and dashboards to share with external users. 


![1_working_with_qrvey](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/architecture/1_working_with_qrvey.jpg#thumbnail)

Qrvey is built on a fully scalable cloud architecture utilizing a variety of AWS services to deliver maximum performance for all of your data and application requirements. On the backend, we leverage Elasticsearch and DynamoDB to support both massive scale and unstructured to semi-structured data. For developers, we provide a comprehensive set of APIs and widgets to integrate with your existing applications, data and services. Out of the box, we also provide a number of supporting services to provide advanced analytics, messaging, and additional customizations.


## The API
The API enables programmatic access to core features such as data collection, automation, and analytics, or when integrating Qrvey into your own applications. For best results programming with Qrvey APIs, you should be familiar with performing the same tasks in the Qrvey Admin Center and/or Qrvey Composer applications.

To use the Qrvey API, gather the following:
- The base `URL` of your instance of the Qrvey platform. 
- Your unique `API key`. All Qrvey API requests require an API key. It was provided in the welcome email that your organization received when your Qrvey instance was created. To obtain a new API key, contact your Qrvey account representative.


### Qrvey API Tutorials
The Qrvey Partner Portal contains a dozens of tutorials to get you familiar with platform development.
* If you are new to Qrvey, the [Create a Quiz via API](../guides/api-tutorials/create-a-quiz-via-api.md) tutorial is a great starting point.

### Security Tokens

Never expose your organization’s base URL or API Key to external users in Production environments. Instead, use secure tokens to encrypt the base URL and API Key. The Qrvey API supports two types of tokens, depending on which set of endpoints you wish to call:
* Qrvey Admin Center API
* Qrvey Composer API

To create a new Administrator account, see [Create a Qrvey Administrator Account in AWS IAM](../admin/introduction-to-qrvey-admin-center.md#create-admin-account-in-aws-iam).

For the Qrvey Composer API, please see [Generate Token (for Creators)](https://qrvey.stoplight.io/docs/qrvey-api-doc/ff0303fef339a-generate-token-for-creators).