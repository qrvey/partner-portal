---
id: generating-security-tokens
title: Generating Security Tokens
sidebar_label: Generating Security Tokens
tags: [Software Developer]
sidebar_position: 2
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

When using the Qrvey API in production environments, it is strongly suggested to use a secure JSON Web Token (JWT) for authentication. Include the token in the request header when accessing an endpoint. The Qrvey API supports two types of tokens, depending on which set of endpoints you wish to call:
* Qrvey Admin Center API
* Qrvey Composer API

## Generate a Token for the Qrvey Admin Center API
Before generating the token for accessing the Qrvey Admin Center API, obtain your organization’s unique Administrator username and accessKey in the AWS Identify and Access Management (IAM) service. This information was provided in the welcome email when your Qrvey environment was first set up. To create a new Administrator account, see [Create a Qrvey Administrator Account in AWS IAM](../../admin/create-admin-using-aws-iam.md) in the Qrvey Partner Portal.

To generate the token:
1. Review the Qrvey API documentation for the endpoint [Log In To Qrvey Admin Center()](https://qrvey.stoplight.io/docs/qrvey-api-doc/14715a09b2bc0-log-in-to-qrvey-admin-center).
2. Call the endpoint, passing the `username` and `accessKey` values.
3. In the response, parse out the `token` value and save it for all future Qrvey Admin Center API calls.


## Generate a Token for the Qrvey Composer API
Before generating the token for accessing the Qrvey Composer API, obtain the following three values that are unique to your instance of the Qrvey platform:

* `x-api-key`. Your organization's unique and private API key. The API key was provided to your organization by Qrvey when your Qrvey environment was created. This information should never be exposed to external users. 
* `appId`. System-defined ID of the Qrvey application.
* `userId`. System-defined ID of the Qrvey Composer user that owns the Qrvey application.

For information on obtaining these values, see [Frequently Asked Questions](../../getting-started/faqs.md).

To generate the token:
1. Review the Qrvey API documentation for the endpoint [Generate Token (for Creators)](https://qrvey.stoplight.io/docs/qrvey-api-doc/ff0303fef339a-generate-token-for-creators).
2. Call the endpoint, passing your organizations unique `appId`, `userId`, and `x-api-key` values.
3. In the response, parse out the `token` value and save it for all future Qrvey Composer API calls.

## For Additional Information
* If you intend to use the JWT token to embed a Qrvey widget, see the additional details in [Embedding Widgets Using a Security Token](../04-Widgets/widget-authentication.md).
* For a video tutorial on embedding Qrvey widgets using JWT tokens, see [JWT Widget Integration](../../guides/legacy/jwt-widget.md). 


</div>