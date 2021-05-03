---
id: destinations-intro
title: Destinations
sidebar_label: Destinations
original_id: destinations-intro
---
<div style={{textAlign: "justify"}}>

**Destinations** is the set of columns that will hold/store all values resulting mainly from the data rules.
This is a property of the `Data Rules`, and is an array of objects. An array is used as as one `Data Rule` might have more than one _`destination`_. In this section the final `index` (child) for the manipulated data inside the data rule is defined, the `fields` that will hold this data, and the name for the new column inside the resulting index.

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

| Property                    | Description                                                                                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `metadataId`         | The metadata index that will store the Data Rule output data.                                                                                    |
| `deleteBeforeInsert` | A boolean property that will remove any previous entry from the index before inserting the new one, when a data it's been reprocessed.           |
| `fields`             | An array of objects containing a data source and the column name                                                                                 |
| `fields.field`       | This can be a reference to a Data Rule output (marked with `$`), or a value from the original data source (without any special character) |
| `fields.const`       | This option can be used to generate static values, which will be the same for all the rows.                                                      |
| `fields.name`        | The name of the column where the data will be stored.                                                                                            |

&gt; **Note:** For each `Data Rule` there should be at least one `Destination`.
</div>