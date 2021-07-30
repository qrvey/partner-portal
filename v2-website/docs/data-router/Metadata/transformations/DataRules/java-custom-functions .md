---
id: java-custom-functions
title: Javascript Custom Functions 
sidebar_label: Javascript Custom Functions 
---
<div style={{textAlign: "justify"}}>



## Introduction
The user can create javascript custom functions to use them inside data rules definitions inside flat data transformations.

## Pre-requisites
Before you can start, please make sure you have the following:
* URLs and API Keys for your Qrvey Platform deployment. You can find these in the deployment email. For this example you will need the:
  * Metadata endpoint 
  * API Key
* A tool or software that you can use to call REST APIs. We recommend Postman or cURL commands but you can use any tool or programming language.

## Create Javascript Custom Function
The user can create a javascript custom function to use it inside data rules on flat data transforms using the POST request with the url {{MetadataURL}}/v5/customfunction/{{functionName}}.
Replace “MetadataURL” and “api-key” before running the request.

cURL example:

```jsx
curl --location --request POST '{{MetadataURL}}/v5/customfunction/{{functionName}}' \
--header 'x-api-key: {{api-key}}' \
--header 'Content-Type: application/javascript' \
--data-raw 'function functionName (a, b) { 
	return a * b; 
}'
```

Response example:

```jsx
{
    "message": "The function {{functionName}} was created successfully"
}
```

## Get Javascript Custom Function
The user can get a javascript custom function that was created previously.

cURL example:

```jsx
curl --location --request GET '{{MetadataURL}}/v5/customfunction/{{functionName}}' \
--header 'x-api-key: {{api-key}}'
```

Response example:

```jsx
{
    "idFunction": {{functionName}},
    "functionDefinition": "function {{functionName}} (a, b) { \n\treturn a * b; \n}"
}
```

## Delete Javascript Custom Function
The user can delete a javascript custom function that was created previously.

cURL example:

```jsx
curl --location --request DELETE '{{MetadataURL}}/customfunction/{{functionName}}' \
--header 'x-api-key: {{api-key}}'
```
	
Response example:

```jsx
{
    "message": "The function was successfully deleted"
}
```

## List Javascript Custom Functions
The user can list a javascript custom function returning multiple definitions.

cURL example:

```jsx
curl --location --request GET '{{MetadataURL}}/customfunction?page=1&records=10&search={{prefix}}' \
--header 'x-api-key: {{api-key}}'
```

Response example:

```jsx
{
    "items": [
        {
            "idFunction": {{functionName}},
            "functionDefinition": "function {{functionName}}(a, b) { return a * b; }"
        }
    ],
    "totalRecords": 1,
    "totalPages": 1
}
```

## Test Javascript Custom Function
The user can test the javascript custom function that was created previously.

cURL example:

```jsx
curl --location --request POST '{{MetadataURL}}/customfunctiontest' \
--header 'x-api-key: {{api-key}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "idFunction": {{functionName}},
    "data": "3, 5"
}'
```

Response example:

```jsx
15
```

</div>