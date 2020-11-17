---
id: formulas
title: Formulas
sidebar_label: Formulas
---

<div style="text-align: justify">

You can find Formulas in the **Analyze** and **Chart Builder** sections of Qrvey Composer to create calculated columns that can be used like any other column of data.

## Use Cases
Formulas can be used to segment data, to convert the data type of a field (such as converting a string to a date), to aggregate data, to filter results, to calculate ratios, and much more.


## Basic Components
1. **Functions** - Statements used to transform the values or members in a field.
2. **Columns** - Dimensions or measures (columns) from your data source.
3. **Operators** - Symbols that denote an operation.  



<img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.2_formulas/basic_overview.png" style="margin:auto; display:block;" width="500" />



## Examples
* **Extracting a Month From a Date**

The function that returns any part of a date or date/time value is **dateFormat**:               
**Syntax**: dateFormat(date_value, 'format')      
**Example**: orderDate is a date data type and we need to extract the month part of it to use on the x-axis of a bar chart.  
We can create a new formula as <span style="color:#F3841C"> dateFormat</span>
(<span style="color:#4491F9"> [orderDate]</span>, 'MM') and call it orderMonth. 
The new column will list the month number of order date (i.e. 01 for January, 02 for February, etc.)

 



* **Aggregate Values of All Rows**

You can get the aggregate of a column based on all rows of data to use in a calculation. An example use case of this would be calculating the percentage of one product's inventory to all products. All aggregate functions start with **agg_**.   
**Syntax**: agg_sum(value)  
**Example**: quantityInStock is a number data type and we need to calculate the percentage of each product's quantity to the entire inventory of products.
We can create a new formula as: <span style="color:#4491F9">[quantityInStock]</span>*100/<span style="color:#F3841C">agg_sum</span>(<span style="color:#4491F9">[quantityInStock]</span>) and call it **quantityPercent**. 

* **Concatenating Text Columns**  

Thw simple **+** sign can be used to stitch strings of text together. An example would be creating full name from first and last name columns.  
**Syntax**: value1 + value2 + value3...  
**Example**: contactFirstName and contactLastName are text type columns and we want to concatenate these together for searches with the last name at the beginning to facilitate sorting. 
We can create a new formula as: <span style="color:#4491F9">[contactLastName]</span>+' , '+<span style="color:#4491F9">[contactFirstName]</span> and call it **contactName**. The returned result for a contact with first name ‘John’ and last name ‘Doe’ will be ‘Doe, John’.

* **Using Other Scripting Functions**

Other scripting functions can be used to create calculated columns. An example of this use case would be to use the **if** function to return a value based on a condition.   
**Syntax**: if (condition) {return result1;} else {return result2;}  
**Example**: orderDate and shippedDate are date type columns that contain order and shipping dates in an ERP system. We want to decide in which cases our shipping department did a good job and for which orders it reacted too slow.  
**The Function:**                     
if<span style="color:#868585">(</span><span style="color:#F3841C">dateDiff</span><span style="color:#868585">(</span> <span style="color:#4491F9">[orderDate]</span>,<span style="color:#F3841C">isNull</span><span style="color:#868585">(</span><span style="color:#4491F9">[shippedDate]</span>,<span style="color:#F3841C">now</span><span style="color:#868585">())</span>,'DAYS'<span style="color:#868585">)<=</span>3<span style="color:#868585">)</span> {return 'fast';} else {return 'slow';}</br>
First, make sure that _null_ values of shippedDate are replaced with a data value (<span style="color:#F3841C">now</span>) and then run a comparison to get the result _fast_ when shipping happened within three days of taking the order and _slow_ in all other cases.

**Notes**  
1. When using the action commands to add functions and columns to the formula dialog (rather than typing it in) pay attention to the position of your cursor. Functions are added within parentheses and unless you move your cursor inside the parentheses before adding columns or typing, you may create a syntax error in your formula. Make sure you test your formula before saving it!  

2. Even if a function is not listed in the **Functions** list, it may still be supported. Don't hesitate to try. For example [orderDate].dayOfWeek is a perfectly acceptable formula, although it's not listed. It returns the number of weekdays of the date value. _Note, this also illustrates the use of the **Apply** operator as an alternative way to invoke a function._




## **Syntax**
**Fields/Columns** - use [ ] around the field or column name, e.g. [Sales].  
**Functions** - function names are case sensitive and must be followed by a bracketed argument list, e.g. sum([Items]) or avg([Temp]).  
**Operators** - the following table shows the available operators. Note, that normal operator precedence applies. For example, in the expression **32 + 5 * [Temperature] / 9**, 32 is added to five ninths of [Temperature].



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



## Date And Time Patterns
dateFormat function accepts a format argument that determines how the formatted date (and time) is going to be displayed. A quick reference exists in the Formula Builder, when the function is selected, but here is a full reference of all possible values for format and an example of how it affects the date string.

>**Note 1**: You may use single, or double quotes around the format string. <br>
**Note 2**: All dates are treated as GMT in Qrvey. Because of that, the three formats: z, Z, X return values for GMT.




| Letter | Date or Time Component | Presentation | Examples 
|---|---|---|---|
|G|Era designator|Text|AD|
|y, Y|Year|Year|1996; 96|
|M|Month in year|Month|July; Jul; 07|
|w|Week in year| Number|27|
|W|Week in month|Number|2|
|D|Day in year|Number|189|
|d|Day in month|Number|10|
|F|Day of week in month|Number|2|
|E|Day name in week|Text|Tuesday; Tue|
|u|Day number of week (1 = Monday, ..., 7 = Sunday)|Number|1|
|a|AM/PM marker|Text|PM|
|H|Hour in day (0-23)|Number|0|
|k|Hour in day (1-24)|Number|24|
|K|Hour in AM/PM (0-11)|Number|0|
|h|Hour in AM/PM (1-12)|Number|12|
|m|Minute in hour|Number|30|
|s|Second in minute|Number|55|
|S|Millisecond|Number|978|
|z|Time zone|General time zone|PST; GMT-08:00|
|Z|Time zone|RFC 822 time zone|-0800|
|x|Time zone|iso 8601 time zone|-08; -0800; -08:00|



Format strings can be combined to give you the format that you want. For example:
dateFormat(“07/04/2001”, "EEE, MMM d, ‘’yy") results in: *Wed, Jul 4, ‘01*

##### * dateFormat reference: https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html



## Supported Functions
* **Numeric:** [Elasticsearch Math API reference](https://www.elastic.co/guide/en/elasticsearch/painless/7.0/painless-api-reference.html#painless-api-reference-Math)

* **Text:** [Elasticsearch Text API reference](https://www.elastic.co/guide/en/elasticsearch/painless/7.0/painless-api-reference.html#painless-api-reference-String)  
* **Date**: Supported functions include *now, dateFormat, dateParse, dateAdd, dateSubtract, dateDiff,* and *dateIsNull*.

## Creating a Formula 
1. To create a formula click on the **uppercase sigma** letter. 

   <img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.2_formulas/where_is_formulas.png" style="margin:auto; display:block;" width="500" >



2. Click on **Create Formula**.
 <img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.2_formulas/create_formulas.png" style="margin:auto; display:block;" width="500" >


3. Look for the function you want to insert, choose it, check it and click **Add to formula**.
<img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.2_formulas/formulas_gif_overview.gif" style="margin:auto; display:block;" width="500" >



4. Look for the column you want to Insert and add it to the parentheses. Add any additional parameters that are needed for the function (e.g. dateFormat function needs a _format_ parameter that can be set to 'MM' if the date is to be formatted as month - or 'yyyy' if it has to be formatted as a 4-digit year)
<img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.2_formulas/date_format_gif.gif" style="margin:auto; display:block;" width="500" >


5. **Test** the formula. Don’t forget to name your formula, and **Save** it.
<img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.2_formulas/date_format_gif_2.gif" style="margin:auto; display:block;" width="500" >



6. Use your new formula. Note, that newly added columns are hidden by default and have to be made visible from the **Select Columns** command.

<img src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.2_formulas/select_formula.gif" style="margin:auto; display:block;" width="500" >




