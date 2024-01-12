---
id: formula-builder-data-engine-syntax
title: Using Data Engine Syntax
sidebar_label: Using Data Engine Syntax
tags: [Data Analyst]
sidebar_position: 2
displayed_sidebar: data-analyst
---

Data Engine Syntax mode enables you to create formulas using the syntax of a specific database engine. 

For general information on using the Formula Builder interface, see [Overview of Formula Builder](./overview-of-formula-builder.md).

## Create a Formula Using Data Engine Syntax Mode
1. Open the Formula Builder interface and select the **Data Engine Syntax (Legacy)**. 

![formula-builder-data-engine-syntax-82](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/formula-builder-20/formula-builder-data-engine-syntax-82.png)

2. Enter a name in the **Formula Name** box. 
3. To add a function to the formula, type it directly in the editor. A suggestion box displays with columns and functions that fit your text. You may also use the following method:
    * Under **Insert Functions**, select the function that you want to insert. The description box displays helpful information about the function. 
    >**Note**: The Insert Functions section is only available for use with Managed datasets. If you are using a Live Connect dataset, you must use the appropriate syntax supported by that dataset. 
    * Click **Add to Formula**. The formula displays in the Formula box. 
4. To add a column to the formula, type it directly in the editor. A suggestion box displays with columns and functions that fit your text. You may also use the following method:
    * Insert the cursor in the desired location in the formula. 
    * Under **Insert Columns**, click on the column that you want to insert. The column displays in the Formula box. 
5. Continue to add functions and columns until your formula is complete. 
6. Before you can use the formula, you must test it. At any time while building your formula, click **Test**. The formula will be tested with random values from the dataset. An error displays if the formula has a mistake.
7. Click **Save** to save the formula. 

## Examples
The following examples describe typical scenarios for using formulas. 

### Extract a month from a date
You can use the dateFormat function to extract a month value from a date. For example, if you want to use the month for the x-axis of a bar chart. 

| **Function** | `dateFormat` |  
| **Syntax**   | `dateFormat(date_value, ‘format’)` |  
| **Example**  | `dateFormat([orderDate], ‘MM’)` |  

### Aggregate values of all rows
You can create a formula to calculate the aggregate of all the rows in a column, and then use the result in a calculation. For example, to calculate the percentage of one product’s inventory to all product inventory. 

| **Function** | `agg_sum` |  
| **Syntax**   | `agg_sum(value)` |  
| **Example**  | `[quantityInStock]/agg_sum([quantityInStock])*100` |  

### Concatenate text columns
Formula Builder supports concatenation using the + sign. For example, to create a full name by concatenating the first name and last name columns. 

| **Function** | `+` |  
| **Syntax**   | `value1+value2+value3...` |  
| **Example**  | `[contactLastName]+’,’+[contactFirstName]` |  

### Using an “if” statement
You can use “if” and other scripting functions to create more sophisticated formulas. For example, suppose you want to create a formula that determines whether your shipping department shipped customer orders within three days. To do this, you would create an if statement that compares two columns in your ERP system, orderDate and shippedDate. If the order was shipped within three days, it returns the word, “fast”. If not, it returns, “slow”. In the example below, notice that the isNull() statement is used to provide some error-handling by changing a null value into a date value (now).

| **Function** | `if` |  
| **Syntax**   | `if (condition) {return result1;} else {return result2;}` |  
| **Example**  | `if(dateDiff([orderDate],isNull([shippedDate],now()),'DAYS')<=3) {return 'fast';} else {return 'slow';}` |  

## Syntax Reference
This section is a reference for proper syntax of formulas in Data Engine Syntax mode. 

### Field/Column Syntax
Use [ ] around the field or column name. For example:

`[Sales]`

### Function Syntax
Function names must be in lowercase and must be followed by a bracketed argument list. For example:

`sum([Items])`
`avg([Temp])`

### Operator Syntax
The following table lists the available operators. Note that normal operator precedence applies.

| Symbol | Operation |
|---|---|
|**.**|_Apply_ the function following the dot to the string/text value before the dot.|
|**\***|_Multiplication_ of two numbers.|
|**/**|_Division_ of two numbers.|
|**+**|_Addition_ of two numbers.|
|**-**|_Subtraction_ of two numbers, or negation of a number.|
|**==**|Test _equality_ of two values.|
|**>**|Test if the first value is _greater than_ the second value.|
|**<**|Test if the first value is _less than_ the second value.|
|**>=**|Test if the first value is _greater than or equal to_ the second value.|
|**<=**|Test if the first value is _less than or equal to_ the second value.|
|**!=**|Test _inequality_ of two values.|
|**^**|Bitwise _exclusive or_ (XOR) of two values.|
|**AND**|Logical _and_ of two values.|
|**OR**|Logical _or_ of two values.|
|**NOT**|Logical _not_ of a value.|
|**( )**|Evaluate the bracketed expression before applying operators to it.|

## Supported Functions
Data Engine Syntax mode supports the following functions:

### Numeric Functions
Formula Mode supports the Elasticsearch Math API. 

### Text Functions
Formula Mode supports the Elasticsearch Text API.

### Date Functions
Supported date functions include:
* `now`
* `dateFormat`
* `dateParse`
* `dateAdd`
* `dateSubtract`
* `dateDiff`
* `dateIsNull`

#### Using dateFormat to display dates and times
The `dateFormat` function enables you to determine how to display the date and time. For example, the following function:

`dateFormat(“07/04/2001”, "EEE, MMM d, ‘’yy")` 

Returns the following format: 

`Wed, Jul 4, ‘01`

>**Note**: You may use single, or double quotes around the format string.  

>**Note**: All dates are treated as GMT.

The following table lists the formatting arguments:


| Letter | Date or Time Component | Presentation | Examples 
|---|---|---|---|
|**G**|Era designator|Text|AD|
|**y, Y**|Year|Year|1996; 96|
|**M**|Month in year|Month|July; Jul; 07|
|**w**|Week in year| Number|27|
|**W**|Week in month|Number|2|
|**D**|Day in year|Number|189|
|**d**|Day in month|Number|10|
|**F**|Day of week in month|Number|2|
|**E**|Day name in week|Text|Tuesday; Tue|
|**e**|Day number of week (1 = Monday, ..., 7 = Sunday)|Number|1|
|**a**|AM/PM marker|Text|PM|
|**H**|Hour in day (0-23)|Number|0|
|**k**|Hour in day (1-24)|Number|24|
|**K**|Hour in AM/PM (0-11)|Number|0|
|**h**|Hour in AM/PM (1-12)|Number|12|
|**m**|Minute in hour|Number|30|
|**s**|Second in minute|Number|55|
|**S**|Millisecond|Number|978|
|**z**|Time zone|General time zone|PST; GMT-08:00|
|**Z**|Time zone|RFC 822 time zone|-0800|
|**x**|Time zone|iso 8601 time zone|-08; -0800; -08:00|

