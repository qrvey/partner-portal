---
id: data-router-flatArray
title: Data rule flatArray
sidebar_label: Definition
---

<div style="text-align: justify">
This is a transform data the flat data type, the idea with this data rule is to flatten data inside the fields the array type.

## Example

consider that it has the next JSON :

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

And you want to flatten the array 'countries', for this case you can use the data rule flatArray for do it.
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

In the metadata parent, we could specify where to save the data resulting in the transformation data, in this case, we specificated the metadata child "flatarraychild_1" for later we can query the information.
At the metadata rule parent we specify that want to do "flatData" by field "data.visas" and "flatArray" by field "data.visas.countries" the result for this flatten will be:

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

Also we can add filtering the result with the fields condition, could we specify a condition like "{{$flatArray.id}} == 3" for filter the data and are sure that only return the records where "data.visas.countries.id" == 3 . The data saved at \_source or destination named "flatArray" is result the filter applied in the data rule 'flatArray' and the data saved at
\_source or destination named "labResult" is a result the 'flatData'.

</div>
