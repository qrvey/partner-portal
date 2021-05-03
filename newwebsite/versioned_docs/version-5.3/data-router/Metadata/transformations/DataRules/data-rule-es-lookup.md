---
id: data-router-es-lookup
title: Elasticsearch Query Lookup
sidebar_label: ES Query Lookup
---
<div style={{textAlign: "justify"}}>

The **ES Query Lookup Data Rule**, is a special feature that will let you perform a query on a different Elasticsearch index while uploading data. You could add sorting or aggregates to the result of the query.

This transformation will let you do do a standard Elasticsearch query. You can use your own data, record by record, to execute different queries:

https:

&gt; As we are using an external service (Elasticsearch), it is important to note that performance will vary depending on the status of the external environment.

This rule follows the standard **Data Rules** structure:

```json



```

The `` field is the identifier to access the result of the Data Rule, and `` defines the object type of Data Rule to apply: `` in this case. This object contains the following properties:

| Property                 | description                                                                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| ``           | This is the query to be executed in Elasticsearch (Query DSL).                                                                                    |
| ``     | An _optional_ set of conditions that will be matched when doing the lookup.                                                                       |
| ``            | An _optional_ list of aggregates.                                                                                                                 |
| ``       | The name of the new column with the resulting aggregate.                                                                                          |
| ``       | The type of aggregate to apply: ``, ``, ``, ``, ``.                                           |
| `` | This is the source array containing the data to aggregate.                                                                                        |
| ``      | This is the field where the aggregate is going to be applied to. It is important to note that this is not required for `` aggregates. |
</div>