---
id: api-tutorial
title: API Tutorial
sidebar_label: Tutorial
---
 
<div style={{textAlign: "justify"}}>
 
The Qrvey Platform developer API lets you access all of the functions of the Qrvey Platform programmatically. In your integrated app, this means you’ll be able to do everything from creating or editing forms and quizzes to building workflows, even accessing or creating your analytic charts, all by using API requests.
 
In this tutorial, we will go through a typical end-to-end process for building and accessing web forms programmatically. We will show you how to call the developer API to create a new Quiz web form and how to use the Quiz widget UI to insert the web form into any application page for end-users. We will also show you how to activate the Quiz, so that end users can begin to answer given questions using the Quiz URL.
 
>**Note**: The full list of Qrvey APIs and examples can be accessed <a href="https://tinyurl.com/atuznk6u" target="_blank">here</a>.
 
 
## Prerequisites
For this tutorial, we will assume that you have a basic understanding of REST APIs, as well as how to make various web requests, and how to work with API responses in JSON format. We also recommend using an API dev environment such as Stoplight or Postman.
 
You will also need to have the following tokens:
 
* API Key (This has been sent to you in the welcome email that you received when your instance was created)
* API URL (The current version is your Qrvey Composer URL + /devapi/v4)
 
 
It is also a good idea to familiarize yourself with the Qrvey Platform. In this tutorial, we’ll be illustrating how to do things programmatically, that you can also do via the user interface directly. As an exercise, we suggest that you log in to the Qrvey Composer, create a new Application, create a new Quiz web form, activate it, and then get the URL to take the quiz and start filling in the answers.
 
## Understanding the Qrvey Platform Structure
The Qrvey Platform has two main concepts that control how all content is saved and managed:
 
### Primary Users
Primary users typically have a Creator role. They create the content that is distributed, embedded, or managed within the Qrvey platform for end-users to consume. In the context of API integration, you might have one creator that is the owner of all of your content, or you might decide to add several creators to control different aspects of your integration. In any case, each primary user can own one or more Applications.
 
### Applications
Applications are containers for storing all of your content, such as any web forms, workflows, datasets and analytics/charts, pages, etc. In the context of an API integration, each creator user might have many applications they’re working with, or you may choose to manage everything within a single application.
The first step for working with the developer API is to establish a user and an application where your new content will be saved.
 
## Steps
The following steps need to be taken to accomplish the task of creating and publishing a web form programmatically:
1. Get the user that will own the application. You may need to create a new user with Creator role, or get an existing user
2. Get the application for the said user that will contain the web form. You may create a new Qrvey application for that user, or get an existing application of theirs.
3. Create a web form in the application from step 2.
4. Embed the web form widget.
5. Activate the web form.
 
 
 
## Step 1 - Get the Owner User
 
### Option 1: Create a new user
 
To create a new user programmatically, you have to make a call to the user endpoint, documented <a href="https://qrvey.stoplight.io/docs/qrvey-api-doc/b3A6Mjc1MTMwNTU-create-user" target="_blank">here</a>.
 
If using Postman, set your request type as “POST”, and enter the URL to create a new user:
 
```
POST https://{{your-domain-url}}/devapi/v4/core/user
```
 
Make sure to set you Header values:
 
```
Content-Type = application/json
x-api-key = your api key
```
![api_tutorial_1](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/api_tutorial_1.png#thumbnail)
 
In order to create a new user, we will also be entering our JSON values into the Body, select the Body tab, and choose “raw” to enter your JSON. The JSON structure for creating a new user takes email and password values looks like this:
 
```
{
 "email":"your email",
 "password":"your password"
}
```
 
![api_tutorial_2](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/api_tutorial_2.png#thumbnail)
 
Hit **Send** to complete the POST and your response will return a valid “userid”. Keep this userID for later use.
 
> **Note:** All user emails in the Qrvey app must be unique. If a user has already been created, a “User already exists” message will pop up. In case this happens, you can try with option 2 to get a user.
 
### Option 2: Get the user list
 
To obtain a previously created “userid”, you can also call the API to get the list of users already in your Qrvey Platform:
 
```
POST https://{{url}}/devapi/v4/core/user/all
```
 
If using Postman, set your request type as “GET”, enter the API endpoint /user, and make sure to add a Header key for “x-api-key” and specify your API value. Hit **Send** to complete the request.
 
![api_tutorial_3](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/api_tutorial_3.png#thumbnail)
 
This will return a response with a list of users in your app, each one with a unique “userid”. The response will look something like this for each user:
 
```
{
   "createDate": "2018-08-27T19:12:43.451Z",
   "email": "hello+apitest@qrvey.com",
   "userid": "SqIvsYF"
 
```
 
Make sure to choose a user from this list and copy the “userid” value for later use.
 
If you are looking for a particular user, you can search by email address. To find a particular one, you can add this optional JSON to the request body.
 
 
```
{
   "search": "hello+apitest@qrvey.com"
}
```
![api_tutorial_3a](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/api_tut.png#thumbnail)
 
 
## Step 2 - Get the Application
To create our application, we will follow the same steps as with creating user API calls. Since Applications belong to Users, you will need to create a new Application if you have just created your new User. If you have selected a user and that user has already created applications, you can skip to option 2.
 
### Option 1: Create a new application
 
To create a new application, you have to make a POST request to the /app endpoint. This endpoint requires the userid value from the previous steps.
 
```
POST to https://{{url}}/devapi/v4/user/{{userid}}/app
```
 
Make sure to set your Header values:
 
```
Content-Type = application/json
x-api-key = your api key
```
 
Copy/paste your userid into the URL where specified to make sure you’re creating the app under the proper userid.
 
In order to create a new application, we will also be entering JSON values into the Body. Select the Body tab, and choose “raw” to enter your JSON. The JSON structure for creating a new application takes values for name and description, like this:
 
 
 
```
{
 "name":"enter a name",
 "description":"enter a description"
}
```
 
![api_tutorial_4](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/api_tutorial_4.png#thumbnail)
 
Click **Send** to post your new Application, and you will receive a response with the relevant details, including the “appid”, when the process is successful:
 
![api_tutorial_5](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/api_tutorial_5.png#thumbnail)
 
When we build our Quiz web form, we’ll need to know both our “userid” and “appid” values to pass to the API endpoint.
 
### Option 2: Select an Existing Application
 
To get a previously created application, you use the /app/all endpoint with the POST command to retrieve a list of all the apps under your userid.
 
```
POST to https://{{url}}/devapi/v4/user/{{userid}}/app/all
 
```
Specify the correct headers, enter /app endpoint and press **Send**. The response will return all of the apps associated with that userid, similar to what you see below:
 
 
![api_tutorial_6](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/api_tutorial_6.png#thumbnail)
 
Select the “appid” that you want to use for your next steps.
 
> **Note**: Now that you’ve created a user and app using the API, you’ll see the content that has been built whenever you log in to the Qrvey Platform as this new user.
 
 
## Step 3 - Create a Web Form
 
>**Note 1**: Webform API endpoints are under the <a href="https://bit.ly/3jlyhXj" target="_blank">Getting Data Into Qrvey</a> group.
 
 
>**Note 2**: Webforms, in general, are sometimes referred to as “*qrvey*”s.
 
Now that we have a user and an application, we can start creating our content for end-users, including Web Forms, Quizzes, Surveys, and more.
 
To create a new Quiz, we’ll use the Create Web form endpoint along with appType=QUIZ.
 
```
POST to https://{{url}}/devapi/v4/user/{{userid}}/app/{{appid}}/qrvey
```
 
This endpoint also requires our “userid” and “appid” from the previous steps.
 
We will POST some basic JSON to create a simple quiz. In order to create a new, blank quiz you only need to pass the name and description values. You can also use this JSON schema to set questions, scoring, and all the other values of your quiz; but for our tutorial, we’ll let the user in the widget set all of those values.
 
In Postman, the quiz endpoint will look like this (make sure to set your headers):
 
 
![api_tutorial_7](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/api_tutorial_7.png#thumbnail)
 
In the Body, we’ll also need to specify our JSON for name and description:
 
![api_tutorial_8](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/api_tutorial_8.png#thumbnail)
 
Click **Send** to save the quiz and get the responses including the id of the new quiz, which is called “qrveyid”:
 
![api_tutorial_9](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/api_tutorial_9.png#thumbnail)
 
Now we have all the parts we need to embed using our widget: the “userid”, the “appid”, and the “qrveyid” for our new quiz.
 
## Step 4 - Embed the Quiz Widget
 
Once you’ve created a web form Quiz, you’re ready to embed it into your product using the <a href="/docs/embedding/widgets/data-sources/widget-webforms" target="_blank">Web form Design</a> widget. The widget is a block of HTML and Javascript code that can be inserted into any web application page to render the user interface for building a web form, in this case, a quiz.
 
To learn more about embedding and working with Widgets, visit our [Widget Quick Start Guide](embedding/widgets/intro.md).
 
Embed the widget inside your application by following the instructions in the guide. Once embedded, the UI can be used by your users to build a quiz directly from inside your app:
 
![api_tutorial_10](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/api_tutorial_10.png#thumbnail)
 
When finished building inside the UI, the final steps will be to activate the Quiz, and make the Quiz URL available for end users.
 
Alternatively, you can skip the embedding step and create everything for your quiz using the API and JSON schema, using the <a href="https://tinyurl.com/462ty37e" target="_blank">Update Web form</a> endpoint.
 
 
## Step 5 - Activate the Quiz
Once the editing of the Quiz in the UI or via the API has been completed, it’s time to finalize your quiz and activate/publish it. To activate a Web Form, you should use the /activate endpoint, passing all of our previously generated “ids” relevant to the quiz, “userid”, “appid”, and “qrveyid”.
 
If using Postman, the POST endpoint for activating our quiz looks like this:
 
 
 
```
PUT {{URL}}/devapi/v4/user/{{userid}}/app/{{appid}}/qrvey/{{qrveyid}}/activate
```
 
Remember to set your Headers properly and hit **Send** to get the response, which will be the valid URL for users to take your quiz.
 
![api_tutorial_11](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/api/tutorial/api_tutorial_11.png#thumbnail)
 
You can now use that response to send the URL to your users so they can take the Quiz that was created using the API.
 
## Further Reading
You should now have a basic understanding of how to use the API to programmatically generate new content in the Qrvey Platform, and embed that content for use in your application.
 
For additional API details, including the full API specification, visit the [API Reference](https://tinyurl.com/atuznk6u).
 
</div>