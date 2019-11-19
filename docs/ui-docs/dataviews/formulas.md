---
id: formulas
title: Formulas
sidebar_label: Formulas
---

<div style="text-align: justify">

Formulas can be used throughout the Qrvey application to perform complex functions and calculations. This article outlines the structure of our formulas. 

## Basic components
**Functions** - Statements used to transform the values or members in a field.

**Fields/Columns** - Dimensions or measures (columns) from your data source.

**Operators** - Symbols that denote an operation.

**Tokens** - Placeholder variables that can be inserted into calculations to replace constant values.  *Tokens not supported yet in Formula

## Syntax
**Functions** - functions must be in lowercase, ie sum() or avg ()
**Fields/Columns** - use [] around the field name, ie [Sales]
**Operators** - .  +, -, *, /, %, ==, =, >, <, >=, <=, !=, <>, ^, AND, OR, NOT, ( ).
**Tokens** - use {} around the token name, ie {country}

## Use Cases
Formulas can be used to segment data, to convert the data type of a field, such as converting a string to a date, to aggregate data, to filter results and to calculate ratios.

## Examples Formulas
1. Date/Time Function Formulas
Dataset: Superstore - Orders
Month  datePart (Order Date,'MM')

2. Aggregation Function Formulas
Dataset: Superstore - Orders
Profit Sales Ratio 	agg_sum([fbiduOs])/agg_sum([hLhQIXC])

3. Numeric Function Formulas
Dataset: Superstore - Orders
Minimum Sales Transaction     	min ([Sales],[Profit])

4. String /Text Function Formulas
Dataset: Superstore - Orders
Region                           	[Region].length()
Upper Case Regions     	[Region].upper 

5. Null Function Formulas
Dataset: Any Dataset containing a column with some NULL or EMPTY records.
isNull(column, ‘replacement’) -any string MUST USE the ‘’ 
dateIsNull(column, now())

6. Multiple Functions Formulas (WIP)
TABLEAU Example: ZN(SUM([Order Quantity])) - WINDOW_AVG(SUM([Order Quantity]))  
Has multiple functions and is nested

## Supported Functions
* **Numeric:** [Elasticsearch Math API reference](https://www.elastic.co/guide/en/elasticsearch/painless/7.0/painless-api-reference.html#painless-api-reference-Math)

* **Text:** [Elasticsearch Text API reference](https://www.elastic.co/guide/en/elasticsearch/painless/7.0/painless-api-reference.html#painless-api-reference-String)

* **Date:** Supported functions include: now, today, datePart, dateAdd, dateSubtract, dateDiff, isNull and isNullDate
