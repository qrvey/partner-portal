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

> **Note**: Never expose your organization’s base URL or API Key to external users in Production environments. Instead, use secure tokens to encrypt the base URL and API Key. For more information, see [Generating Security Tokens](../introduction-to-software-development.md

### Qrvey API Tutorials
The Qrvey Partner Portal contains a variety of tutorials for working with the Qrvey API. 
* If you are new to the Qrvey platform, see [Qrvey API Tutorial](./Qrvey%20API%20Tutorials/api-tutorial.md).
* To view the list of current tutorials, expand **Qrvey API Tutorials** in the navigation tree on the left. 
* For information specific to Content Deployment, see the following tutorials in the *Qrvey Admin Center User Guide*:
   * [Automated Content Deployment (Commingled)](../../admin/08-Content%20Deployment/automated-CD-commingled.md)
   * [Automated Content Deployment (Segregated)](../../admin/08-Content%20Deployment/automated-CD-segregated.md)


### Security Tokens

When using the Qrvey API in production environments, it is strongly suggested to use a secure JSON Web Token (JWT) for authentication. Include the token in the request header when accessing an endpoint. The Qrvey API supports two types of tokens, depending on which set of endpoints you wish to call:
* Qrvey Admin Center API
* Qrvey Composer API

### Generate Token for the Admin Center
Before generating the token for accessing the Qrvey Admin Center API, obtain your organization’s unique Administrator username and accessKey in the AWS Identify and Access Management (IAM) service. This information was provided in the welcome email when your Qrvey environment was first set up. To create a new Administrator account, see [Create a Qrvey Administrator Account in AWS IAM](../../admin/create-admin-using-aws-iam.md) in the Qrvey Partner Portal.

To generate the token:
1. Review the Qrvey API documentation for the endpoint [Log In To Qrvey Admin Center()](https://qrvey.stoplight.io/docs/qrvey-api-doc/14715a09b2bc0-log-in-to-qrvey-admin-center).
2. Call the endpoint, passing the `username` and `accessKey` values.
3. In the response, parse out the `token` value and save it for all future Qrvey Admin Center API calls.


### Generate Token for Qrvey Composer
Before generating the token for accessing the Qrvey Composer API, obtain the following three values that are unique to your instance of the Qrvey platform:

* `x-api-key`. Your organization's unique and private API key. The API key was provided to your organization by Qrvey when your Qrvey environment was created. This information should never be exposed to external users. 
* `appId`. System-defined ID of the Qrvey application.
* `userId`. System-defined ID of the Qrvey Composer user that owns the Qrvey application.

For information on obtaining these values, see [Frequently Asked Questions](../../getting-started/faqs.md).

To generate the token:
1. Review the Qrvey API documentation for the endpoint [Generate Token (for Creators)](https://qrvey.stoplight.io/docs/qrvey-api-doc/ff0303fef339a-generate-token-for-creators).
2. Call the endpoint, passing your organizations unique `appId`, `userId`, and `x-api-key` values.
3. In the response, parse out the `token` value and save it for all future Qrvey Composer API calls.
