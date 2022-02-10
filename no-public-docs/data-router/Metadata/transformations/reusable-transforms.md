---
id: reusable-transforms
title: Transformation Groups 
sidebar_label: Transformation Groups
---
<div style={{textAlign: "justify"}}>

## Introduction

The user can create a group of transforms that can be reused inside datarules transforms.

## Pre-requisites
Before you can start, please make sure you have the following:
* URLs and API Keys for your Qrvey Platform deployment. You can find these in the deployment email. For this example you will need the:
  * Metadata endpoint 
  * API Key
* A tool or software that you can use to call REST APIs. We recommend Postman or cURL commands but you can use any tool or programming language.

## Create Transformation Group

The first step is to create the transformation group to allow us to use it inside the datarules.

You have to use the POST request with the url {{MetadataEndpoint}}/v5/transformationgroup.
Replace “MetadataEndpoint” and “api-key” before running the request. 

cURL example:
```jsx
curl --location --request POST '{{MetadataEndpoint}}/v5/transformationgroup' \
--header 'x-api-key: {{api-key}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "testTG",
    "parameters": [
        "input.TEST_NAME"
    ],
    "transforms": [
        {
            "id": "sourceArrayTest",
            "function": {
                "arrayLookup": {
                    "sourceArray": "arrayTest",
                    "condition": "input.TEST_NAME == \"{{$sourceArrayTest.NAME}}\"",
                    "orderby": [
                        {
                            "field": "$sourceArrayTest.NAME",
                            "direction": "desc",
                            "nulls": "first"
                        }
                    ]
                }
            }
        }
    ]
}'
```

## Update Transformation Group
You have to use the PUT request with the url {{MetadataEndpoint}}/v5/transformationgroup/{{transformationGroupName}}.

Replace “MetadataEndpoint” and “api-key” before running the request. 

cURL example:

```jsx
curl --location --request PUT '{{MetadataEndpoint}}/v5/transformationgroup/testTG' \
--header 'x-api-key: {{api-key}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "testTG",
    "parameters": [
        "input.TEST_NAME",
        "input.TEST_NAME2"
    ],
    "transforms": [
        {
            "id": "sourceArrayTest",
            "function": {
                "arrayLookup": {
                    "sourceArray": "arrayTest",
                    "condition": "input.TEST_NAME2 == \"{{$sourceArrayTest.NAME}}\"",
                    "orderby": [
                        {
                            "field": "$sourceArrayTest.NAME",
                            "direction": "desc",
                            "nulls": "first"
                        }
                    ]
                }
            }
        }
    ]
}'
```

## Delete Transformation Group

You have to use the DELETE request with the url {{MetadataEndpoint}}/v5/transformationgroup/{{transformationGroupName}}.

Replace “MetadataEndpoint” and “api-key” before running the request. 

cURL example:
```jsx
curl --location --request DELETE '{{MetadataEndpoint}}/v5/transformationgroup/testTG' \
--header 'x-api-key: {{api-key}}'
```

## Get Transformation Group

You have to use the GET request with the url {{MetadataEndpoint}}/v5/transformationgroup/{{transformationGroupName}}.

Replace “MetadataEndpoint” and “api-key” before running the request. 

cURL example:
```jsx
curl --location --request GET '{{MetadataEndpoint}}/v5/transformationgroup/testTG' \
--header 'x-api-key: {{api-key}}'
```

Response example:
```jsx
{
    "created": "2020-09-22T21:37:16+00:00",
    "transforms": [
        {
            "id": "sourceArrayTest",
            "function": {
                "arrayLookup": {
                    "orderby": [
                        {
                            "field": "$sourceArrayTest.NAME",
                            "nulls": "first",
                            "direction": "desc"
                        }
                    ],
                    "sourceArray": "arrayTest",
                    "condition": "input.TEST_NAME == \"{{$orderedTest.OTESTID}}\""
                }
            }
        }
    ],
    "id": "testTG",
    "parameters": [
        "input.TEST_NAME"
    ]
}
```

## List Transformation Groups

You have to use the GET request with the url {{MetadataEndpoint}}/v5/transformationgroup?sortby={{field}}&order=desc/asc.

You can “sort” the list of transformation groups by any field created in the transformation group and you can as well list them in descending or ascending order (desc/asc).

Replace “MetadataEndpoint” and “api-key” before running the request. 

cURL example:
```jsx
curl --location --request GET '{{MetadataEndpoint}}/v5/transformationgroup?sortby=created&order=desc' \
--header 'x-api-key: {{api-key}}'
```
Response example:
```jsx
{
    "Items": [
        {
            "created": "2020-09-22T21:37:16+00:00",
            "transforms": [
                {
                    "id": "sourceArrayTest",
                    "function": {
                        "arrayLookup": {
                            "orderby": [
                                {
                                    "field": "$sourceArrayTest.NAME",
                                    "nulls": "first",
                                    "direction": "desc"
                                }
                            ],
                            "sourceArray": "arrayTest",
                            "condition": "input.TEST_NAME == \"{{$orderedTest.OTESTID}}\""
                        }
                    }
                }
            ],
            "id": "testTG",
            "parameters": [
                "input.TEST_NAME"
            ]
        },
        {
            "created": "2020-09-22T21:37:16+00:00",
            "transforms": [
                {
                    "id": "sourceArrayTest",
                    "function": {
                        "arrayLookup": {
                            "orderby": [
                                {
                                    "field": "$sourceArrayTest.NAME",
                                    "nulls": "first",
                                    "direction": "desc"
                                }
                            ],
                            "sourceArray": "arrayTest",
                            "condition": "input.TEST_NAME == \"{{$orderedTest.OTESTID}}\""
                        }
                    }
                }
            ],
            "id": "testTG2",
            "parameters": [
                "input.TEST_NAME"
            ]
        }
    ]
}
```

</div>