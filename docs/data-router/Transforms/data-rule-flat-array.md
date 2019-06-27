---
id: data-router-flatArray
title: Data Rule flatArray
sidebar_label: Data Rule flatArray
---

<div style="text-align: justify">
This is a transform in the flatten data family. With this data rule you can flatten data inside the fields of an array of objects.

## Sample

Consider the following JSON data to be posted to Data Router:

```
[
    {
        "metadataId": "flattener_array1",
        "data": [
            {
                "id": 2,
                "name": "Ricardo Madrid",
                "visas": [
                	{
                		"countries": [
                			{
	                            "id": 1,
	                            "Name": "Colombia"
	                        },
	                        {
	                            "id": 2,
	                            "Name": "U.S.A."
	                        },
	                        {
	                            "id": 3,
	                            "Name": "India"
	                        }
                		]
                	}
                ]
            }

        ]
    }
]
```

And you want to flatten the array 'countries', for this case you can use the data transform function _flatArray_ to do it.
To do this you need to create a child metadata index to hold the child data items, and refer to that in the parent metadata index.

For example:

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
            "id": "idTransform",
            "function": {
	                "flatData": {
                    "idFlat": "labResult",
                    "flattenOnField": "visas",
                    "keepLeftData": true,
                    "transforms": [
                        {
                            "id": "flatArray",
                            "function": {
                                "flatArray": {
                                    "flatBy": "visas.countries",
                                    "condition": "{{$flatArray.id}} == 3"
                                }
                            }
                        }
                    ],
                    "destinations": [
                        {
                            "metadataId": "flatarraychild_1",
                            "fields": [
                                {
                                    "field": "$flatArray",
                                    "name": "flatArray"
                                },
                                {
                                    "field": "$labResult",
                                    "name": "labResult"
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

In the metadata parent, we specify where to save the data resulting in the transformation data. In this case, we specified the metadata child "flatarraychild_1".
The metadata parent transform "flatData" is applied to field "data.visas" and the transform "flatArray" is applied to the field "data.visas.countries". The result for this flatten transform will be:

```
{
    "took": 1,
    "timed_out": false,
    "_shards": {
        "total": 5,
        "successful": 5,
        "failed": 0
    },
    "hits": {
        "total": 1,
        "max_score": 1,
        "hits": [
            {
                "_index": "flatarraychild_1",
                "_type": "aType",
                "_id": "NVlDOTE0TzVWRg==",
                "_score": 1,
                "_source": {
                    "flatArray": [
                        {
                            "id": 2,
                            "name": "Ricardo Madrid",
                            "visas": {
                                "countries": {
                                    "id": 3,
                                    "Name": "India"
                                }
                            }
                        }
                    ],
                    "labResult": {
                        "countries": [
                            {
                                "id": 1,
                                "Name": "Colombia"
                            },
                            {
                                "id": 2,
                                "Name": "U.S.A."
                            },
                            {
                                "id": 3,
                                "Name": "India"
                            }
                        ]
                    },
                    "qdr_savetimestamp": "2019-06-17T12:54:38.683Z"
                }
            }
        ]
    }
}

```

Note we used a filter condition "{{$flatArray.id}} == 3" to filter the data to only return the records where "data.visas.countries.id" == 3. The data saved at \_source for destination named "flatArray" is the result of the filter applied in the data rule 'flatArray' and the data saved at
\_source for destination named "labResult" is the result the 'flatData' transform.

</div>
