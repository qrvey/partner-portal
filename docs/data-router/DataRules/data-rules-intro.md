---
id: data-rules-intro
title: Data Rules Overview
sidebar_label: Overview
---
<div style="text-align: justify">

# Introduction

**Data Rules** is a set of operations and rules that are applied over hierarchical data to put your data into a new Elasticsearch index through a 'child' Metadata. 

With these rules, you can navigate and organize your hierarchical data before uploading to Elasticsearch. These can work as new transformations to validate, create or modify your data establishing simple or complex conditions.

## Hierarchical Data

An example of hierarchical data could be a list of documents for different companies where each document has a list of employees, and each employee could have details about their kids.


```json
{
 "documents" : [
     {
         "id" : 0,
         "description" : "description0",
         "employees" : [
             {
                 "name" : "name0",
                 "income" : 0,
                 "children": [
                     {
                         "name": "child00",
                         "age" : 0
                     },
                     {
                         "name": "child11",
                         "age" : 1
                     }
                 ]
             },
             {
                 "name" : "name1",
                 "income" : 1,
                 "children": [
                     {
                         "name": "child10",
                         "age" : 0
                     },
                     {
                         "name": "child11",
                         "age" : 1
                     }
                 ]
             }
         ]
     }
 ]
}
```

# Data Rules

Data Router provides different rules that can be applied to hierarchical data. We will describe each rule with their main properties.


## Merge

This rule is used to join or merge two or more arrays from the JSON data to create a new in memory array with data. It will use conditions to do the merge. After merging the first two arrays, the resulting array can be joined with new arrays. There can be any number of additional arrays to merge.

### Properties

*   **Left Array:** This an array from the JSON data. It is defined as the left side array.
*   **Right Array:** This is an array from the JSON data. It is defined as the left side array.
*   **Merge Type:** This is the merge or join type between the two arrays: Inner Join, Left Join, Right Join and Full Join.
*   **Conditions**
    *   **On:** This is the main condition to merge the two arrays by their identifiers
    *   **Additional Conditions:** These are other conditions that can be made over the merge to validate the information. For example:
        * Selecting only north american countries
        * Getting employees with a minimum salary

## ArrayLookup

This rule is used to search for a value or object inside an array.

### Properties
*   **Source Array:** This an array from the JSON data.
*   **Condition:** These are the conditions that can be made over the array to do the search. For example:
    * Selecting only north american countries
    * Getting employees with a minimum salary
*   **Sorting:** The sorting method that will be applied.
    *   **Field:** The source array field used to do the sorting.
    *   **Direction**: The sorting direction: Ascending or Descending.
    *   **Null treatment**: Nulls first or Nulls last.


## Multi ArrayLookup

This rule is used to search for values in different arrays. This is almost the same as an [ArrayLookup](##ArrayLookup) but you can add as many Lookups as needed. The process ends when a match is found.


### Properties
*   **Source Array:** This an array from the JSON data.
*   **Condition:** These are the conditions that can be made over the array to do the search. For example:
    * Selecting only north american countries
    * Getting employees with a minimum salary
*   **Sorting:** The sorting method that will be applied.
    *   **Field:** The source array field used to do the sorting.
    *   **Direction**: The sorting direction: Ascending or Descending.
    *   **Null treatment**: Nulls first or Nulls last.


## Modify Array

This rule is used to modify an existing array by adding new columns or attributes.
### Properties
*   **Source Array:** This an array from the JSON data.
*   **Functions:** Each function will add a new attribute to the array. There can be as many functions as needed. Each function has these attributes:
    *   **Statement:** The operation that will be used to add the new attribute, for example:
        *   An arithmetic operation 
        *   A custom function
    *   **Name:** The name of the new attribute to be added to the array.

## Flat Array
This rule is used to transform an array by [flattening](##Flattening-Data) over a field.
### Properties
*   **Flat By:** This an array from the JSON data.
*   **Condition:** These are condition data needs to match to apply the flattening.

# Destinations
Set of *destination* fields in the 'child' Metadata. Each destination field will most likely represent the result of a Data Rule. It can also represent a column or attribute coming from the original data.

## Flattening Data
Data Router allows you to flatten your data so it is easier to analyse in an Elasticsearch index using Qrvey's analytics.

Flattening means creating a new array of data by 'destroying' sub-arrays and merging them with each element of the parent array:

**Input Data**
```json
{
  "myArray": [
    {
      "id": 1,
      "subArray": [
        1,
        2,
        3
      ],
      "name": "nameA",
      "lastName": "lastNameA"
    },
    {
      "id": 2,
      "subArray": [
        2,
        4
      ],
      "name": "nameC",
      "lastName": "lastNameC"
    },
    {
      "id": 3,
      "subArray": [
        7,
        9,
        10
      ],
      "name": "nameD",
      "lastName": "lastNameD"
    }
  ]
}
```
**Output Data**
```json
[
  {
    "myArray": {
      "id": 1,
      "name": "nameA",
      "lastName": "lastNameA",
      "subArray": 1
    }
  },
  {
    "myArray": {
      "id": 1,
      "name": "nameA",
      "lastName": "lastNameA",
      "subArray": 2
    }
  },
  {
    "myArray": {
      "id": 1,
      "name": "nameA",
      "lastName": "lastNameA",
      "subArray": 3
    }
  },
  {
    "myArray": {
      "id": 2,
      "name": "nameC",
      "lastName": "lastNameC",
      "subArray": 2
    }
  },
  {
    "myArray": {
      "id": 2,
      "name": "nameC",
      "lastName": "lastNameC",
      "subArray": 4
    }
  },
  {
    "myArray": {
      "id": 3,
      "name": "nameD",
      "lastName": "lastNameD",
      "subArray": 7
    }
  },
  {
    "myArray": {
      "id": 3,
      "name": "nameD",
      "lastName": "lastNameD",
      "B": 9
    }
  },
  {
    "myArray": {
      "id": 3,
      "name": "nameD",
      "lastName": "lastNameD",
      "B": 10
    }
  }
]
```
</div>