---
id: formulas
title: Formulas
sidebar_label: Formulas
---

<div style="text-align: justify">

Formulas can be used throughout the Qrvey platform to perform complex transformations and calculations. This article outlines the structure of our formulas. 

## Basic Components
**Fields/Columns** - Dimensions or measures (columns) from your data source.

**Functions** - Statements used to transform the values or members in a field.

**Operators** - Symbols that denote an operation.

## Syntax
**Fields/Columns** - use [ ] around the field or column name, e.g. [Sales].

**Functions** - function names must be in lowercase and must be followed by a bracketed argument list, e.g. sum([Items]) or avg([Temp]).

**Operators** - the following table shows the available operators. Note, that normal operator precedence applies. For example, in the expression 32 + 5 * [Temperature] / 9, 32 is added to five ninths of [Temperature].

| Symbol | Operation |
|---|---|
|**.**|_Apply_ the function following the dot to the string/text value before the dot.|
|**\***|_Product_ of two numbers.|
|**/**|_Division_ of two numbers.|
|**+**|_Addition_ of two numbers.|
|**-**|_Subtraction_ of two numbers, or negation of a number.|
|**==**|Test _equality_ of two values.|
|**>**|Test if the first value is _greater than_ the second value.|
|**<**|Test if the first value is _less than_ the second value.|
|**>=**|Test if the first value is _greater than or equal to_ the second value.|
|**<=**|Test if the first value is _less than or equal to_ the second value.|
|**<>**|Test _inequality_ of two values.|
|**^**|Bitwise _exclusive or_ of two values.|
|**AND**|Logical _and_ of two values.|
|**OR**|Logical _or_ of two values.|
|**NOT**|Logical _not_ of a value.|
|**( )**|Evaluate the bracketed expression before applying operators to it.|

## Use Cases
Formulas can be used to segment data, to convert the data type of a field (such as converting a string to a date), to aggregate data, to filter results, and to calculate ratios.

## Examples Formulas
1. Date/Time Function Formulas
Dataset: Superstore - Orders
Month  _datePart(Order Date,'MM')_

2. Aggregation Function Formulas
Dataset: Superstore - Orders
Profit Sales Ratio _agg_sum([fbiduOs])/agg_sum([hLhQIXC])_

3. Numeric Function Formulas
Dataset: Superstore - Orders
Minimum Sales Transaction _min([Sales],[Profit])_

4. String /Text Function Formulas
Dataset: Superstore - Orders
Region _[Region].length()_
Upper Case Regions _[Region].upper()_

5. Null Function Formulas
Dataset: Any dataset containing a column with some NULL or EMPTY records.
Default (non-date) value _isNull(column, ‘replacement’)_ -any string MUST USE the ‘’ 
Default (date) value _dateIsNull(column, now())_

6. Multiple Functions Formulas (WIP)
TABLEAU example with multiple nested functions _ZN(SUM([Order Quantity])) - WINDOW_AVG(SUM([Order Quantity]))_  

## Supported Functions
* **Numeric:** [Elasticsearch Math API reference](https://www.elastic.co/guide/en/elasticsearch/painless/7.0/painless-api-reference.html#painless-api-reference-Math)

* **Text:** [Elasticsearch Text API reference](https://www.elastic.co/guide/en/elasticsearch/painless/7.0/painless-api-reference.html#painless-api-reference-String)

* **Date:** Supported functions include now, today, datePart, dateAdd, dateSubtract, dateDiff, isNull, and isNullDate.
