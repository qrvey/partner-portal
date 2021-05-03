---
id: data-router-array-lookup
title: Array Lookup
sidebar_label: Array Lookup
original_id: data-router-array-lookup
---
<div style={{textAlign: "justify"}}>

The **Array Lookup Data Rule**, is a feature that will let you perform a search (lookup) on an array from a JSON object.

This Lookup must have conditions to match the objects. Sorting is optional.

&gt; It is important to note that this Data Rule will return the first match after sorting.

This rule follows the standard **Data Rules** structure:

```json

{
    "id": "arrayLookupID",
    "function": {
            "arrayLookup": {
                "sourceArray": "$myData.someJSONArray",
                "condition": "{{$arrayLookupID.someProperty}} == 'match'",
                "orderby": [
                    {
                        "field": "$arrayLookupID.sortingProperty",
                        "direction": "desc",
                        "nulls": "first"
                    }
                ]
            }
        }
}

```

The `id` field is the identifier to access the result of the Data Rule, and `function` defines the object type of Data Rule to apply: `arrayLookup` in this case. This object contains the following properties:

| Property                   | description                                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `sourceArray`       | This is the array where the lookup is going to take place.                                                              |
| `condition`         | An _optional_ set of conditions that will be matched when doing the lookup.                                             |
| `orderby`           | An _optional_ ordering or sorting method to be applied.                                                                 |
| `orderby.field`     | The sorting will be applied over the specified field.                                                                   |
| `orderby.direction` | This will indicate the direction of sorting: `asc` or `desc`.                                             |
| `orderby.nulls`     | This will indicate if null results, of the sorting `field`, are going to appear `first` or `last`. |

**Example**:

The following data shows two departments. Each department contains a list of employees:

```json

[
   {
      "departmentName": "marketing",
      "employees": [
         {
            "index": 0,
            "income": "$3,431.93",
            "age": 25,
            "eyeColor": "green",
            "name": {
               "first": "Ewing",
               "last": "Sears"
            }
         },
         {
            "index": 1,
            "income": "$1,751.16",
            "age": 23,
            "eyeColor": "blue",
            "name": {
               "first": "Mcclure",
               "last": "Grimes"
            }
         }
      ]
   },
   {
      "departmentName": "sales",
      "employees": [
         {
            "index": 2,
            "income": "$8,330.96",
            "age": 31,
            "eyeColor": "green",
            "name": {
               "first": "Todd",
               "last": "Joseph"
            }
         },
         {
            "index": 3,
            "income": "$3,014.46",
            "age": 27,
            "eyeColor": "brown",
            "name": {
               "first": "Conway",
               "last": "Davidson"
            }
         },
         {
            "index": 4,
            "income": "$3,764.08",
            "age": 21,
            "eyeColor": "green",
            "name": {
               "first": "Cash",
               "last": "Washington"
            }
         }
      ]
   }
]

```

If we want to get the highest paid employee under 30 -for each department- we could define the Data Rule as follows:

```json

{
    "id": "arrayLookupID",
    "function": {
            "arrayLookup": {
                "sourceArray": "$employees",
                "condition": "{{$arrayLookupID.age}} < 30",
                "orderby": [
                    {
                        "field": "$arrayLookupID.income",
                        "direction": "desc",
                        "nulls": "last"
                    }
                ]
            }
        }
}

```

This will give us these two employees:

```json

[
    {
        "index": 0,
        "income": "$3,431.93",
        "age": 25,
        "eyeColor": "green",
        "name": {
            "first": "Ewing",
            "last": "Sears"
        }
    },
    {
        "index": 4,
        "income": "$3,764.08",
        "age": 21,
        "eyeColor": "green",
        "name": {
            "first": "Cash",
            "last": "Washington"
        }
    }
]

```

&gt; _Note: To reference the `income` and the `age` we had to use the function id: `arrayLookupID`_.
</div>