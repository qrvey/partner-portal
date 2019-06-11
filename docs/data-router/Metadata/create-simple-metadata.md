---
id: simple-metadata
title: Creating a Simple Metadata
sidebar_label: Create Simple Metadata
---

<div style="text-align: justify">

## Metadata Structure

A metadata is created with a JSON document. This JSON can be divided into three main elements: `Properties`, `Columns` and `Transformations`.

**A simple metadata can look like this:**

``` json
{
  "indexName": "my_first_index",
  "dateFormat": "YYYY-MM-DDTHH:mm:ss",
  "skipOnPartialData": false,
  "columnType": [
    {
      "columnName": "MSG",
      "type": "object",
      "properties": [
        {
          "columnName": "From",
          "type": "text"
        },
        {
          "columnName": "TO",
          "type": "object",
          "properties": [
            {
              "columnName": "Email",
              "type": "text"
            },
            {
              "columnName": "Subject",
              "type": "text"
            },
            {
              "columnName": "CC",
              "type": "text"
            }
          ]
        }
      ]
    }
  ],
  "transforms": [
    {
      "id": "upperCaseTransform",
      "function": {
        "uppercase": {
          "fields": [
            "Subject"
          ]
        }
      },
      "action": {
        "update": {
          
        }
      }
    }
  ]
}
```

>You must specify the data type for each column.

### Properties
This section defines the name of the Elasticsearch index where data will be stored: `my_first_index`. Also, we are indicating the date format we will use for date fields: `YYYY-MM-DDTHH:mm:ss`.

### Columns

In this metadata example we can expect to receive 4 columns with data: a sender, a destination, a subject and a carbon copy.

### Transformations

In this case, we need to make the `subject` upper case with `upperCaseTransform`.

### Data

With the previously defined metadata, we are defining a structure for data (JSON) that might look like this:

``` json
{
  "MSG": {
    "From": "from@email.com",
    "To": {
      "Email": "to@email.com",
      "Subject": "Some random subject",
      "CC": "cced@email.com"
    }
  }
}
```

## Creating the Metadata
After calling **(POST)** `{{base_datarouter_url}}/metadata/v1` you will be given the Metadata ID. This ID is needed for posting data and manipulating the recently created metadata.

~~~json
{
    "MetaDataId": "some_random_id"
}
~~~

</div>