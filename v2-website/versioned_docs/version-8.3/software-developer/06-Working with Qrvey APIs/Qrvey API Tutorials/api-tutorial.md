---
id: api-tutorial
title: Qrvey API Tutorial
sidebar_label: Qrvey API Tutorial
tags: [Software Developer]
sidebar_position: 1
displayed_sidebar: software-developer
---

<div style={{textAlign: "justify"}}>

This tutorial demonstrates an end-to-end process for using the Qrvey API. It assumes that you have a basic understanding of REST APIs, how to make web requests, and how to work with responses in JSON format. We will use Postman to send requests and view responses.  

In this tutorial, we will use the API to programmatically create a Quiz web form. The process is divided into five sections:
- Create a new user. This tutorial also shows you how to retrieve an existing user ID. 
- Create a new application. This tutorial also shows you how to retrieve an existing application ID. 
- Create a Quiz web form.
- Update the web form and embed the Quiz form widget into your product (note: this step is for informational purposes and does not utilize APIs). 
- Activate the Quiz form for use in production. 

## Before you begin
In order to get the most value from this tutorial, you should be familiar with performing these tasks in Qrvey Admin and Qrvey Composer. In addition, you should be familiar with the following concepts:
- [Introduction to the Qrvey Platform](../../../getting-started/intro-to-qrvey.md)
- [Overview of Qrvey Applications](../../../composer/04-Managing%20Applications/overview-of-applications.md)

Before using the Qrvey API, gather the following:
- The base URL of your instance of the Qrvey platform. 
- Your organization's unique API key. All Qrvey API requests require an API key. It was provided in the welcome email that your organization received when your Qrvey instance was created. To obtain a new API key, contact your Qrvey account representative.

> **Note**: For purposes of this tutorial, you are asked to include the base URL or API Key in the API calls. However, this information should never be exposed to external users. In Production environments, use secure tokens to encrypt your organization’s base URL and API Key.

## Create a user
To create a new user, begin by reviewing the API documentation for [Create User](https://qrvey.stoplight.io/docs/qrvey-api-doc/1930941cbe8d5-create-user). 

In Postman, set the request type to POST and enter the URL to create a new user:  
`POST https://{{your-domain-url}}/devapi/v4/core/user`

Select the **Headers** tab, and set the following header values:
```
Content-Type = application/json
x-api-key = your api key
```

Select the **Body** tab, choose **raw**, and enter the values for email and password. The JSON structure looks like this:

```
{
 "email":"your email",
 "password":"your password"
 }
```
In Postman, click **Send**. The user is created, and a JSON response returns with information about the user. Note the User ID (`userid`). You will need this ID to create an application. 

See the following screenshot for an example of using the Create User API in Postman. 

![Create a User](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/postman-create-user.png#thumbnail-50)


### Get the ID of an Existing User
If you do not know the ID of a user, you can use the API to get it. 

To get the user ID, begin by reviewing the API documentation for [Get User List](https://qrvey.stoplight.io/docs/qrvey-api-doc/2f4a96d989b65-get-user-list). 

In Postman, set the request type to POST and enter the URL to get users:  
`POST https://{{url}}/devapi/v4/core/user/all`

Select the **Headers** tab, and set the following header values:
```
Content-Type = application/json
x-api-key = your api key
```

(Optional) If you know the email of the user, you can add it to the Body of the request, and the API will return the UserID if it exists. The JSON structure looks like this:
```
{
"search": "example@qrvey.com"
 }
```
In Postman, click **Send**. A JSON response returns with information about the user(s) found. 
Note the User ID (`userid`). You will need an ID to create an application.

See the following screenshot for an example of using the Get User List API in Postman. 

![Get User ID](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/postman-get-user-id.png#thumbnail-50)

## Create an application
A Qrvey application is a self-contained analytics project that contains data and any number of analytics components, such as charts, reports, dashboards, and workflows. The user that creates the application is the application owner.  For more information on applications, see [What Is a Qrvey Application?](../../../composer/04-Managing%20Applications/overview-of-applications.md)

To create a new application, begin by reviewing the API documentation for [Create Application](https://qrvey.stoplight.io/docs/qrvey-api-doc/0d09929d631ef-create-application). 

In Postman, set the request type to POST and enter the URL to create a new app. You will need the user ID that you created or obtained previously:  
`POST https://{{your-domain-url}}/devapi/v4/user/{{userid}}/app`

Select the **Headers** tab, and set the following header values:
```
Content-Type = application/json
x-api-key = your api key
```

Select the **Body** tab, choose **raw**, and enter the values for the application name and description. The JSON structure looks like this:

```
{
 "name":"enter a name",
 "description":"enter a description"
 }
 ```

In Postman, click **Send**. A JSON response returns with details about the application. Make note of the application ID (`appID`). You will need both the userID and the appID to continue with this tutorial. 

See the following screenshot for an example of using the Create Application API to create an application:

![Create Application](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/postman-create-application.png#thumbnail-50)


>**Note**: If you log in to Qrvey Composer with the same user account, you will see the new application. 

### Get the ID of an existing application
If you do not know the ID of an application, you can use the API to get a list of all applications associated with the user.

To get a list of applications, begin by reviewing the API documentation for [Get Application](https://qrvey.stoplight.io/docs/qrvey-api-doc/d1d58213f533a-get-application). 

In Postman, set the request type to POST and enter the URL to get applications:  
`POST https://{{url}}/devapi/v4/user/{{userid}}/app/all`

Select the **Headers** tab, and set the following header values:
```
Content-Type = application/json
x-api-key = your api key
```

A JSON response returns with a list of applications associated with the user ID. Make note of the application ID (`appID`). You will need both the userID and the appID to continue with this tutorial.

See the following screenshot for an example of using the Get Applications API to find the applications associated with a user. 

![Get Application ID](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/postman-get-application-id.png#thumbnail-50)

## Create a Quiz web form 
To create a Quiz web form, begin by reviewing the API documentation for [Create Web Form](https://qrvey.stoplight.io/docs/qrvey-api-doc/eef26590d2937-create-web-form). 

In Postman, set the request type to POST and enter the URL to create a form:  
`POST https://{{url}}/devapi/v4/user/{{userid}}/app/{{appid}}/qrvey`

Select the **Headers** tab, and set the following header values:
```
Content-Type = application/json
x-api-key = your api key
```

Enter the values for the form name, description, and type (“QUIZ”) into the Body. Select the **Body** tab, choose **raw**, and enter the JSON. The JSON structure looks like this:
```
{
 "name":"Quiz name",
 "description":"Quiz description",
 “appType”:”QUIZ”
 }
 ```

In Postman, click **Send**. A JSON response returns with details about the application. Make note of the ID of the quiz (`qrveyID`). You will need the userID, appID, and qrveyID to embed the form. 

See the following screenshot for an example of using the Create Web Form API to create a quiz. 

![Create Quiz Web Form](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/postman-create-quiz.png#thumbnail-50)

## Update and Embed the Quiz form
Once you’ve created the Quiz web form, you can update it to contain the quiz questions. It is possible to use the Update Web Form API, however, it is more practical to use Qrvey Composer. For purposes of this tutorial, we’ll assume that you use Qrvey Composer to update your form. 

![Sample Quiz Web Form](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/api_tutorial_10.png#thumbnail) 

At this point, you can embed the web form into your product using the Web form design widget. A widget is a block of HTML and Javascript code that can be inserted into any web application page to render the user interface for building a web form. 

Embedding is outside the scope of this tutorial. For more information on embedding and widgets, see:
- [Widget Quick Start Guide](../../04-Embedding%20Qrvey%20Widgets/overview-of-embedding.md)
- [Widgets Overview (video)](https://partners.qrvey.com/docs/video-training/building-qrvey-sample/widget-overview) 


## Activate the Quiz
The final step is to activate, or publish, the Quiz form using the `/activate` endpoint. You will need the userID, appID, and qrveyID to embed the form.

To activate the Quiz web form, begin by reviewing the API documentation for [Activate Web Form](https://qrvey.stoplight.io/docs/qrvey-api-doc/c306de63797ba-activate-web-form).

In Postman, set the request type to PUT and enter the URL to create a form:  
`PUT https://{{url}}/devapi/v4/user/{{userid}}/app/{{appid}}/qrvey/{{qrvey}}/activate`

Select the **Headers** tab, and set the following header values:
```
Content-Type = application/json
x-api-key = your api key
```
In Postman, click **Send**. A response returns with the URL to the quiz.

Congratulations! You have completed this tutorial. 


**See also**:
<a href="https://tinyurl.com/atuznk6u">Qrvey API Reference Guide (Stoplight)</a>

</div>