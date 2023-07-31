---
id: formula-builder-standardized-syntax
title: Using Standardized Syntax
sidebar_label: Using Standardized Syntax
tags: [Data Analyst]
sidebar_position: 3
displayed_sidebar: data-analyst
---

Standardized Syntax Mode enables you to create formulas using a standardized language rather than a specific syntax for a specific database engine. Formulas created in Standardize Syntax Mode work with any database engine supported by the Managed Connect and Live Connect features.

For general information on using the Formula Builder interface, see [Overview of Formula Builder](./overview-of-formula-builder.md).

## Create a Formula Using Standardized Syntax Mode

1. Open the Formula Builder interface and select **Standardized Syntax**. 

![formula-builder-standardized-syntax-82](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/formula-builder-20/formula-builder-standardized-syntax-82.png)

2. Enter a name in the **Formula Name** box. 
3. To add a function to the formula, type it directly in the editor. A suggestion box displays with columns and functions that fit your text. You may also use the following method:
    * Under **Insert Functions**, select the function that you want to insert. The description box displays helpful information about the function. 
    * Click **Add to Formula**. The formula displays in the Formula box. 
4. To add a column to the formula, type it directly in the editor. A suggestion box displays with columns and functions that fit your text. You may also use the following method:
    * Insert the cursor in the desired location in the formula. 
    * Under **Insert Columns**, click on the column that you want to insert. The column displays in the Formula box. 
5. Continue to add functions and columns until your formula is complete. Standardized Syntax Mode provides automatic error detection features. The editor continuously evaluates formulas as you type, and it immediately notifies you of syntax errors as well as incorrect usage of data types. Hover over a highlighted error to display additional details. 

![Error detection in Standardized Syntax Mode](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/formula-builder-20/formula-builder-standardized-syntax-error-detection-82.png)

6. Before you can use the formula, you must test it with sample data. If your formula uses correct syntax, you may display the **Testing** tab to test your formula. For more information, see the following section, “Testing a Formula in Standardized Syntax.”
7. Click **Save** to save the formula. In Standardized Syntax Mode, the **Save** button is displayed on the Formula tab.


![formula-builder-example-standardized-syntax](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/formula-builder-20/formula-builder-standardized-syntax-example-82.png)

>**Note**: The Standardized Syntax Mode released in Version 8.2 does not support nested formulas. This capability will be added in a future release. 

## Testing a Formula in Standardized Syntax
1. In Standardized Syntax mode, create your formula and click **Testing**. If the formula contains any syntax errors or incorrect usage of data types, the Testing tab is not available. 

![Formula Builder Testing tab](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/formula-builder-20/formula-builder-standardized-syntax-testing-82.png)

  The Input box lists all the columns in the formula in JSON format, and it assigns values from the dataset to those columns. 

2. In the **Input** box, review the values provided and modify as needed. To obtain a new set of values from the dataset, click **Randomize Data**.  
    >**Note**: You can evaluate more than one set of values at a time by editing the JSON and adding another set in the columns. 

3. Click **Test Formula**. The output displays in the Output box. If an error occurs during formula evaluation, click **See Console Output** to display a detailed error response from the database engine. 

4. Click **Save**. The formula is ready for use. For more information, see "Using Formulas" in [Overview of Formula Builder](../10-Formula%20Builder/overview-of-formula-builder.md). 

## Syntax Reference
This section is a reference for proper syntax of formulas in Standardized Syntax mode. 

### Field/Column Syntax
Insert columns by using the **Insert Columns** dropdown, by entering the column name, or by selecting them from the Column/Function suggestion box. Columns display as pills inside the formula.

### Function Syntax
Function names must be in uppercase and must be followed by a bracketed argument list. For example:  

`ABS(25)`

### Comments Syntax
You can add single-line comments to the formula that should start with `//`. For example:  

`// This is a comment`

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

#### Supported values
Data Types supported: 
* **Numbers**: including decimals and negative numbers.
* **Strings**: any sequence of characters between two quotes.
* **Date time values**: strings with any of these formats: "MM/DD/YYYY" or "MM/DD/YYYY HH:MM:SS".
* **Boolean**: true or false values.

## Supported Functions
Standardized Syntax mode supports the following functions:

| **Function name** | **Type** | **Description** |
| ----------------- | -------- | --------------- |
| ABS | Numeric | Returns the absolute value of a number.
| AND | Logical | Evaluates different logical tests and returns true if all logical tests are true and false if at least one of the logical tests returns false.
| CONCATENATE | String/Text | Joins two or more strings into one string.
| DATEADD | Date/Time | Adds a specific date part value to a given date. Date part allows: "Y" years, "M" months, "D" days, “H” hours, “MI” minutes and “S” seconds.
| DATEDIF | Date/Time | Calculates the difference between two dates based on the date part requested. Date part allows: "Y" the number of complete years in the period, "M" the number of complete months in the period, "D" the number of days in the period.
| DAY | Date/Time | Returns the day of a date. The day is given as an integer ranging from 1 to 31.
| DAYOFWEEK | Date/Time | Returns a number or string representative of the weekday for a given date.
| HOUR | Date/Time | Returns the hour of a datetime value. The hour is given as an integer ranging from 0 to 23.
| IF | Logical | Performs a logical test and returns a value based on the result. You need to set a value in case the test result is true and one if it is false.
| IFS | Logical | Allows different logical tests and returns the values set for the first condition equal to true.
| ISNULL | Logical | Replaces null values with the specified replacement value.
| LEFT | String/Text | Returns the first character or characters in a text string, based on the number of characters you specify.
| LOWER | String/Text | Converts all the characters in a string to lowercase.
| MID | String/Text | Returns a specific number of characters from a text string. The resulting substring begins at the specified beginIndex and extends, t the right, the number of characters specified on numChars.
| MINUTE | Date/Time | Returns the minute of a datetime value. The minute is given as an integer ranging from 0 to 59.
| MONTH | Date/Time | Returns the month of a date. The month is given as an integer ranging from 1 (January) to 12 (December).
| OR | Logical | Evaluates different logical tests and returns false if all logical tests are false and true if at least one of the logical tests returns true.
| PROPER | String/Text | Capitalizes the first letter in a string and any other letters in the text placed next to any character other than a letter or number. Converts the rest of the letters to lowercase.
| RIGHT | String/Text | Returns the last character or characters in a text string, based on the number of characters you specify.
| SECOND | Date/Time | Returns the second of a datetime value. The second is given as an integer ranging from 0 to 59.
| TRIM | String/Text | Removes all leading and trailing spaces from text.
| UPPER | String/Text | Converts all the characters in a string to uppercase.
| YEAR | Date/Time | Returns the year of a date. The year is given as an integer ranging from 1900 to 9999.
