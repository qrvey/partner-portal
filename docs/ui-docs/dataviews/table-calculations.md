---
id: table-calculations
title: Table Calculations
sidebar_label: Table Calculations
---

<div style="text-align: justify">

Table Calculation is a feature that produces new columns of data based on predefined aggregate functions executed against existing columns of data.  Any data column added to the “Values” or “Other Values” shelves in the Chart Builder UI can be used as a source column for a table calculation.  The Table Calculations UI contains the following fields:
1. **Column**: Lists  all columns added to the “Values” and “Other Values” shelves.
2. **Calculation Type**: 
- Running Calculations:
    * Running Sum (RSUM) 
    * Running Average (RAVG) 
    * Running Min (RMIN)
    * Running Max (RMAX)
- Difference Calculations
    * Difference
    * %Difference 
3. **Level**: This option appears when you have multiple groups (more than 1) to determine "at what level" you are doing your calculation. For example, if you have grouped sales by year and quarter, you can choose if you want to do your calculations for each year and restart when you get to the next year, or if you want to calculate the sales for the entire table. The default level is Table
4. **Custom Label**: Give a custom name to the calculation for easier identification (the name is shown only in the panel).
5. **Remove**: Delete the table calculation.

![table-calculations](#thumbnail) 

> **Note**: Running Calculations calculate the running aggregate of a value that can optionally be calculated for any number of grouped categories. The calculations are affected by the sort order of the data.

Qrvey supports the following table calculations in Table, Bar, Line, Combo Charts, and Heatmap.

## 1. Running Calculations
### Types Of Running Calculations
#### Running Sum
Running Sum (RSUM) calculates the new sum total value of the current row by adding the value in the source column of the current row to the computed sum total from the previous row.  
For example, if the last computed sum total was "100" and the value of the source column in the current row is "25", then the new sum total will be "125".
![table-calculations](#thumbnail) 
#### Running Average
Running Average (RAVG) calculates the new average for the current row by referencing the value in the source column of the current row and computing the new average based on the average from the previous row. For example, if the average from the first row of data was "100" and the value of the source column in the second row of data is "25", then the new computed average will be "62.5".

![table-calculations](#thumbnail) 


The following image is an example of Running Average in Qrvey.

#### Running Minimum
The Running Minimum function (RMIN) references the value in the current row from the source data column and compares it to the previous minimum value.  If the value in the source column is less than the previously computed minimum value, then the new running minimum value is updated with the new lower value. 
For example, if the value in one row is “27”, and the one in the second row is “20”, the new minimum is “20”; if the value in the third row is “18” then the new minimum is “18”.



#### Running Maximum
The Running Maximum function (RMAX) references the value in the current row from the source data column and compares it to the previous maximum value.  If the value in the source column is greater than the previously computed maximum value, then the new running maximum value is updated with the new higher value. For example, if the value in one row is “27”, and the one in the second row is “20”, the maximum shown is “27”; if the value in the third row is “35” then the new maximum is “35”.




### Creating a Running Calculation
Table calculations can be added to charts in two ways: 
Using the chart builder configuration panel and selecting General followed by new “Table Calculations” option and finally clicking on the “+ Add Table Calculation”.
By dragging and dropping numeric columns to “Values” or “Other Values” shelves and selecting “Table Calculations” in the 3-dot menu. 


If the data has nulls, the calculation will skip and ignore the empty records.
Any event that causes a chart’s reloading will also cause the table calculations to be computed again. For example, if:
* the sort order is changed.
* filters are applied.
* the system receives new data.
* a creator changes the max data point value.


This is how Qrvey generally describes these running calculations:

Running_[sum, avg, min, max]
(
    agg_value 
     ,[ sortorder_field ASC_or_DESC, ... ]
     ,[ grouped field, ... ] 
)

Argument
Description
agg_value
Aggregated value
sortorder_field
Columns by which the data has been sorted, in ascending, or descending order. Ascending is the default.
grouped_field
any number of fields that participate in grouping.



Right to the left of the three dots icon, you will see a summary of aggregate functions applied to the numeric column with RSUM (Running Sum applied).


The following image is an example of Running Calculations in Bar, Line, and Heatmap as well as Combo charts.






## 2. Difference Calculations
### Difference 
It’s a row-by-row type of calculation that generates the difference between two values (the current value subtracted from the previous value) of an aggregated column.
The calculation is recalculated every time that an event is applied to the chart, such as sorting, filtering, new records added, groups edited/removed/added, or when max data points are applied. 

The following example shows how Difference is calculated.
Values
Difference
8


6
-2 (6-8)
10
4 (10-6)
9
-1 (9-10)
5
-4 (5-9)


The following example demonstrates how the difference between each total quarterly sales is calculated.


2018-2020 Quarterly Sales Difference
2018 Q1 Difference = blank
2018 Q2 Difference = Q2 Sales - Q1 Sales = $32,091,427.62 - $27,893,544.84 = $4,197,882.78
Etc.


The following images show an example of Difference applied in Tables.


The following images show an example of Difference applied in Bar charts.
The following images show an example of Difference applied in Line charts.

The following images show an example of Difference applied in Heatmap.

### Percent Difference is a row-by-row type of calculation that is calculated based on the following formula:
Percent Difference = (value - previous value) x 100 / previous value
At present, the calculation is performed on a table-down basis, i.e. all values in the column are consistently compared to the same value in the previous row, throughout the entire table.
The calculation is recalculated every time that an event is applied to the chart, such as sorting, filtering, new records are added, groups are edited/removed/added, or when max data points are applied. 

The following example shows how Percent Difference is calculated:

Values
Percent Difference
8


6
-25 (i.e.: (6-8)x100/8)
10
66.67 (i.e.: (10-6)x100/6)
9
-10 (i.e.: (9-10)x100/10)
5
-44.44 (i.e.: (5-9)x100/9)


The following example demonstrates how the difference between each total quarterly sales is calculated:


2018-2020 Quarterly Sales Difference
2018 Q1 Difference = Blank
2018 Q2 Difference = (Q2 Sales - Q1 Sales)*100/Q1 Sales = 15.05%
2018 Q3 Difference = (Q3 Sales - Q2 Sales)*100/Q2 Sales = -65.25 %
2018 Q4 Difference = (Q4 Sales - Q3 Sales)*100/Q3 Sales = 1164.48%
Etc.

The following images show an example of % Difference applied in Tables.




The following images show an example of % Difference applied in Bar charts.


The following images show an example of %Difference applied in Line charts.

The following images show an example of % Difference applied in Heatmap. 



## 3. Partitions 
Users can define partitions in order to have table calculations performed at each group level or the entire table.

To define partitions in Table Calculations, you need to add a Table Calculation and then go to the “Level” dropdown to define the partition as Table or a selected column that will be used to define the group.  

“Level”  defines how to group the calculation (the scope of data it is performed on). The table calculation is performed separately within each partition.

Partitioning fields break the view up into multiple sub-views (or sub-tables), and then the table calculation is applied to the marks within each such partition. 

The following images show an example of partitioning in Table charts using the “Level” option to select a partition. 
