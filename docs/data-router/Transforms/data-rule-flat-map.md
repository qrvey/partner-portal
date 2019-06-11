---
id: data-router-intro
title: Data rule flatMao
sidebar_label: Overview
---

<div style="text-align: justify">
This is a transform data the flat data type, the idea with this data rule is to flatten data inside the fields the array type.

## Example

consider that it has the next JSON :

```
[
    {
        "id": 1,
        "name": "a",
        "data": {
            "array": [
                {
                    "flatValue": [
                        {
                            "id": 1,
                            "Name": "Juan"
                        },
                        {
                            "id": 2,
                            "Name": "Eder"
                        },
                        {
                            "id": 3,
                            "Name": "Julio"
                        }
                    ]
                }
            ]
        }
    }
]
```

And you want to flatten the array flatValue, for this case you can use the data rule flatMap for do it.
First, you should create two new metadata a child and other parent, example:

```
// child metadata

{
    "MetaDataId": "flatarraychild_1",
    "indexName": "flatarraychild_1",
    "skipOnPartialData": true,
    "published": true,
    "dateFormat": "YYYY-MM-DDTHH:mm:ss",
    "columnType": [
        {
            "columnName": "id",
            "type": "numeric-general"
        },
        {
            "columnName": "name",
            "type": "text-label"
        }
    ]
}

```

```
// parent metadata

{
    "MetaDataId": "flattener_array1",
    "indexName": "flattener_array1",
    "skipOnPartialData": true,
    "published": true,
    "dateFormat": "YYYY-MM-DDTHH:mm:ss",
    "columnType": [
        {
            "columnName": "id",
            "type": "numeric-general",
            "idColumn": true
        },
        {
            "columnName": "name",
            "type": "text-label"
        },
        {
            "columnName": "data",
            "type": "array",
            "properties": [
            	{
            		"columnName": "id",
                    "type": "numeric-general"
            	}
            ]
        }
    ],
    "transforms": [
        {
            "id": "flatArray1",
            "function": {
	                "flatData": {
                    "idFlat": "labResult",
                    "flattenOnField": "data.array",
                    "keepLeftData": true,
                    "transforms": [
                        {
                            "id": "flatArray2",
                            "function": {
                            	"idFlat": "idflatMap",
                                "flatMap": {
                                	"conditional": "{{$idflatMap.id}} == 1",
                                    "flatBy": "data.array.flatValue",
                                    "keepLeftData": true
                                }
                            }
                        }
                    ],
                    "destinations": [
                        {
                            "metadataId": "flatarraychild_1",
                            "fields": [
                                {
                                    "field": "$flatArray2",
                                    "name": "flatArray2"
                                }
                            ]
                        }
                    ]
                }
            },
            "action": {
                "update": {}
            }
        }
    ]
}

```

In the metadata parent, we could specify where to save the data resulting in the transformation data, in this case, we specificated the metadata child "flatarraychild_1" for later we can query the information.
At the metadata rule parent we specify that want to do "flatData" by field "data.array" and flatMap by field "data.array.flatValue" the result for this flatten will be:

```
{
    "flatArray2": [
        {
            "id": 1,
            "name": "aaa",
            "data": {
                "array": {
                    "flatValue": {
                        "id": 1,
                        "Name": "Juan"
                    }
                }
            }
        }
    ],
    "qdr_savetimestamp": "2019-06-10T20:55:19.584Z"
}

```

Also we can add filtering the result with the fields conditional, could we specify a conditional like "{{$idflatMap.id}} == 1" for filter the data and are sure that only return the records where "data.array.flatValue.id" == 1

</div>
