---
id: api-tutorial
title: API Tutorial
sidebar_label: Tutorial
---

<style>
img[src*="#thumbnail"] {
   width:100%;
   border: 1px solid whitesmoke;
}
</style>

<div style="text-align: justify">

The Qrvey Platform developer API lets you access all of the functions of the Qrvey Platform programmatically.  In your integrated app, this means you’ll be able to do everything from creating or editing forms and quizzes to building workflows, or even accessing or creating your analytic charts all using API requests.

In this tutorial, we will step through a typical, end-to-end process for building and accessing web forms programmatically.   We will show how to call the developer API to create a new Quiz web form, and use the Quiz widget UI to insert the web form into any application page for end users.   We will also show how to activate the Quiz, so that end users can begin to fill in their answers from the Quiz URL.

## Prerequisites
For this tutorial, we will assume that you have a basic understanding of REST APIs, how to make various web requests, and how to work with API responses in JSON format. We also recommend using an API dev environment such as Postman.

* You can download Postman from the following URL: 

<https://www.getpostman.com>

You will also need to have the following tokens:

* API Key (for calling the API - if you need to obtain an API key, contact help@qrvey.com)
* API URL (current version is your qrvey URL + /devapi/v3)

It is also a good idea to familiarize yourself with the Qrvey Platform.  In this tutorial, we’ll be illustrating how to do things programmatically that you can also do via the user interface directly.  As an exercise: log in to the Qrvey Platform, create a new Application, create a new Quiz web form, activate it, and then get the URL to take the quiz and start filling in answers.

## Understanding the Qrvey Platform Structure
The Qrvey Platform has two main concepts that control how all content is saved and managed:

* ### Users
Users are what we call “creators”.  They create the content that is distributed, embedded, or managed within the Qrvey Platform for end-users to consume. In the context of an API integration, you might have one creator that is the owner of all of your content, or you might decide to add several creators to control different aspects of your integration. In any case, each User can own one or more Applications.

* ### Applications
Applications are containers for storing all of your content, such as any web forms, workflows, datasets and analytics/charts, pages, etc. In the context of an API integration, each creator User might have many Applications they’re working with, or you may choose to manage everything within a single Application.

The first steps for working with the developer API is to establish a user and an application where your new content will be saved.

## Get the User
### Option 1: Create a new user

To create a new user, open Postman and make a call to the /user endpoint.

In Postman, set your request type as “POST”, and enter the URL to create a new user:

```
POST https://{{url}}/devapi/v3/user
```

Make sure to set you Header values:

```
Content-Type = application/json
x-api-key = your api key
```
![img1](assets/api-tutorial/api_tutorial_1.png#thumbnail)

In order to create a new user, we will also be entering our JSON values into the Body, select the Body tab, and choose “raw” to enter your JSON.    The JSON structure for creating a new user takes email and password values looks like this:

```
{
  "email":"your email",
  "password":"your password"
}
```

![img1](assets/api-tutorial/api_tutorial_2.png#thumbnail)

Hit Send to complete the POST and your response will return a valid “userid”.   Keep this userid for later use. 

> ***NOTE:*** all user emails in the Qrvey app must be unique, so if the user has already been created it will return a “User already exists” message.  If so, you can try option 2...

### Option 2: Get the user list

To obtain a previously created “userid”, you can also call the API to get the list of users already in your Qrvey Platform.

In Postman, Set your request type as “GET”, enter the API endpoint /user, and make sure to add a Header key for “x-api-key” and specify your API value.  Hit “Send” to complete the request.

![img1](assets/api-tutorial/api_tutorial_3.png#thumbnail)

This will return a response with a list of users in your app, each one with a unique “userid”.  The response will look something like this for each user:

```
{
    "lastLoginDate": "2018-08-27T19:13:00.219Z",
    "createDate": "2018-08-27T19:12:43.451Z",
    "email": "david+1@qrvey.com",
    "userid": "SqIvsYF"
}
```

Make sure to choose a user from this list and copy the “userid” value for later use.  

## Get the Application
To create our application we will follow the same steps as with our user API calls.  Since Applications belong to Users, if you just created your new User, you will need to create a new Application.   If you have selected a user and that user already has applications you can use option 2.

### Option 1: Create a new application

To create your new application, in Postman you will make a POST request to the /app endpoint.   This endpoint requires the userid value from the previous steps.

```
POST to https://{{url}}/devapi/v3/user/{{userid}}/app
```

Make sure to set your Header values:

```
Content-Type = application/json
x-api-key = your api key
```

Copy paste your userid into the URL where specified to make sure you’re creating the app under the proper userid.

In order to create a the new application, we will also be entering JSON values into the Body. Select the Body tab, and choose “raw” to enter your JSON.    The JSON structure for creating a new application takes values for name and description, like this:

```
{
  "name":"enter a name",
  "description":"enter a description"
}
```

![img1](assets/api-tutorial/api_tutorial_4.png#thumbnail)

Click “Send” to post your new Application, and you will receive a response with the relevant details, including the “appid”, when successful. Like this:

![img1](assets/api-tutorial/api_tutorial_5.png#thumbnail)

When we build our Quiz web form, we’ll need to know both our “userid” and “appid” values to pass to the API endpoint.

### Option 2: Select an Existing Application

To get a previously created application, you will use the same /app endpoint but use the GET command to retrieve a list of all the apps under your userid.

Specify your correct headers, enter the /app endpoint and hit “Send”.  The response will return all of the apps associated with that userid, similar to what you see below:

![img1](assets/api-tutorial/api_tutorial_6.png#thumbnail)

Select the “appid” that you want to use for our next steps.

> ***NOTE***:  Now that you’ve created a user and app using the API, if you login to the Qrvey Platform with this new user, you’ll see the content that has been built.

## Creating the Web Form
Now that we have a user and application, we can start creating our content for end users, including our Web Forms, Quizzes, Surveys and more.

To create a new Quiz, we’ll use the Create Quiz endpoint: **/webform/quiz**

This endpoint also requires our “userid” and “appid” from the previous steps

We will POST some basic JSON to establish to the /webform/quiz endpoint.  In order to create a new, blank Quiz for someone inside your app to build, you only need to pass the name and description values. You can also use this JSON schema to set questions, scoring and all the other values in your quiz; but for our tutorial, we’ll let the user in the widget set all of those values.

In Postman, the quiz endpoint will look like this (make sure to set your headers):

![img1](assets/api-tutorial/api_tutorial_7.png#thumbnail)

In the Body, we’ll also need to specify our JSON for name and description:

![img1](assets/api-tutorial/api_tutorial_8.png#thumbnail)

Click Send, to save the quiz and get the response including the qrveyid:

![img1](assets/api-tutorial/api_tutorial_9.png#thumbnail)

Now we have all the parts we need to embed using our widget, the “userid”, the “appid”, and the “qrveyid” for our new quiz.

## Embedding a Quiz Widget
Once you’ve created a web form Quiz, you’re ready to embed it into your product using the Qrvey Platform widget.   The widget is a block of HTML and Javascript code that can be inserted into any web application page to render the user interface for building a web form, in this case, our quiz.

To learn more about embedding and working with Widgets, visit our [Widget QuickStart Guide](embedding/widgets/intro.md). 

Embed your widget by following the instructions on the QuickStart guide.

After embedding your widget using the widget code, you’ll be able to load the UI inside your application to show how to build a quiz:

![img1](assets/api-tutorial/api_tutorial_10.png#thumbnail)

Your users can now build the quiz directly inside your app. When finished building inside the UI, the final steps will be to activate the Quiz, and make the Quiz URL available for users to take.

Alternatively, you can skip the widget embed step and create everything for your quiz using the API and JSON schema. Visit the [API Reference](embedding/api/data-sources.md) for details on how to define your questions programmatically.

## Activate the Quiz
Once the editing of the Quiz in the UI or via the API has been completed, it’s now to finalize your quiz and Activate/Publish it.   To activate a Web Form, you would use the /activate endpoint, passing all of our previously generated “ids” relevant to the Quiz, “userid”, “appid”, and “qrveyid”.

In Postman, the POST endpoint for activating our quiz looks like this:

```
POST {{URL}}/devapi/v3/user/{{userid}}/app/{{appid}}/webform/quiz/{{quiz}}/activate
```

Remember to set your Headers properly, and hit Send to get the response, which will be the valid URL for users to take your quiz

![img1](assets/api-tutorial/api_tutorial_11.png#thumbnail)

You can now use the response to send the URL to your users so they can take the Quiz that was created using the API.

## Further Reading
You should now have a basic understanding of how to use the API to programmatically generate new content in the Qrvey Platform, and embed that content for use in your application.   

For additional API details, including the full API specification, visit the [API Reference](embedding/api/data-sources.md).