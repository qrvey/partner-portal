---
id: data-router-es-lookup
title: Elasticsearch Query Lookup
sidebar_label: ES Query Lookup
---

<div style="text-align: justify">

The **ES Query Lookup Data Rule**, is a special feature that will let you perform a query on a different Elasticsearch index while uploading data. You could add sorting or aggregates to the result of the query.

This transformation will let you do do a standard Elasticsearch query. You can use your own data, record by record, to execute different queries:

<https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html>

> As we are using an external service (Elasticsearch), it is important to note that performance will vary depending on the status of the external environment.

This rule follows the standard **Data Rules** structure:

```json
{
   "id": "esQueryLookupID",
   "function": {
      "ESQueryLookup": {
         "query": {
            //Some standard Elasticsearch query
         },
         "sourceIndex": "source_index_name",
         "orderby": [
            {
               "field": "$esQueryLookupID.sortingProperty",
               "direction": "desc",
               "nulls": "last"
            }
         ],
         "allRows": true,
         "aggs": [
            {
               "name": "newColumnName",
               "type": "aggregateType",
               "arrayField": "$esQueryLookupID.someArrayFromResult",
               "field": "aggregateColumn"
            }
         ]
      }
   }
}
```
The `id` field is the identifier to access the result of the Data Rule, and `function` defines the object type of Data Rule to apply: `ESQueryLookup` in this case. This object contains the following properties:

|Property|description|
|--------|-----------|
|`query`| this is the query to be executed in Elasticsearch (Query DSL)|
|`sourceIndex`| (optional) set of conditions that will be matched when doing the lookup|
|`aggs`| (optional) list of aggregates|
|`aggs.name`| name of the new column with the resulting aggregate|
|`aggs.type`| type of aggregate to apply: `sum`, `count`, `avg`, `min`, `max` |
|`aggs.arrayField`| this is the source array to loop |
|`aggs.field`| this is the field where the aggregate is going to be applied to. It is important to note that this is not required for the count|

