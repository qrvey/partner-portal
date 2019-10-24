---
id: destinations-intro
title: Destinations
sidebar_label: Destinations
---

<div style="text-align: justify">

**Destinations** is the set of columns that will hold/store all values resulting mainly from the data rules.
This is a property of the `Data Rules`, its an array of objects, as one `Data Rule` might have more than one _`destination`_. In this section the final `index` (child) for the manipulated data inside the data rule is defined, the `fields` that will hold this data, and the name for the new column inside the resulting index.

This property, follows the next structure:

```json
"destinations": [
    {
        "metadataId": "child index identifier",
        "deleteBeforeInsert": true,
        "fields": [
            {
                "field": "$DataRuleResult",
                "name": "Column Name"
            },
             {
                "field": "originalDataSource.value",
                "name": "Colum Name"
            },
            {
                "const": "'static value'",
                "name": "Column Name"
            }
        ]
    }
]
```

Where the `metadataId` field is the identifier to the `child index` (where the resultant data will be stored in ES).

**Destinations properties**

| Property             | description                                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `metadataId`         | Metadata child that will store the Data Rule output data                                                                                |
| `deleteBeforeInsert` | a boolean property, that will remove any previous entry from the index before inserting the new one (when a data it's been reprocessed) |
| `fields`             | array of objects containing data source and a column name                                                                               |
| `fields.field`       | can be a reference to a Data Rule output (marked with `$`), or a value from the original data source (without any special character)    |
| `fields.const`       | option used to generate static values. (will be the same for all the rows)                                                              |
| `fields.name`        | name of the column where the data will be stored                                                                                        |

> **Note:** For each `Data Rule` should be at least one `Destination`.
