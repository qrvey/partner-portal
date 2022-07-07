---
id: discrete-continuous-values
title: Discrete and Continuous Values
sidebar_label: Discrete and Continuous Values
---

<div style={{textAlign: "justify"}}>

When using XY charts to plot data, the expectations for how categories have to be plotted may differ when the category has a continuous nature. This happens because continuous categories, such as dates and numbers, have the potential of being treated in a discrete manner.

For example, if the chart is depicting the number of sales per month in one year, we want to see it plot every single month of the year, even if there were no sales in some months. In fact, the lack of sales in those months is an important piece of information that should not be ignored. However, if the visualization is about the number of casualties in each major flu outbreak in recent history, we are only interested in the years 1918, 1957, 1968, 1997, and 2009. In this case, the years between those don’t matter and while we are still working with “dates”, the nature of our analysis requires us to treat those dates in a discrete manner.
With the Chart Builder, you get to choose between these two methods depending on your use case.

Using discrete values in a custom chart, the Categorical column displays an axis with separate, distinct dates or numeric values that are found within the dataset used to construct the chart. When switching to the continuous mode, the product fills in the gaps in data to show all categories that make the data continuous.

To apply **Discrete** or **Continuous** values, your chart must use a date or numeric column in a category position. Open the column options where you will see **Discrete Values** preselected. If you select **Continuous Values**, you will see continuous date categories in the chart even if the data does not contain them.

The **Discrete** and **Continuous** features are options only available for the <u>date</u> and <u>numeric</u> columns used in Chart Builder. 

### Discrete Dates
![disc-cont](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/disc-cont-values/discrete.png#thumbnail)

 

### Continuous Dates

![disc-cont](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/disc-cont-values/continuous.png#thumbnail)



In the **Styles** section of XY Charts, we can set the start and end values for <u>date</u> and <u>numeric</u> columns.
The range is set to *Auto* by default, but it can be changed to a date/number of your choice.


![disc-cont](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/disc-cont-values/date-num1.png#thumbnail) 


![disc-cont](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/disc-cont-values/date-num2.png#thumbnail) 



* **Start Date** - set the date or period you want to start showing the data at.

* **Calendar Dates** - dates that are not tied to the calendar year (for example, if we are in July 2022, “the 3 last years” would be from August 2019 to now).

* **Include starting date** - includes the current date (for example, if we’re in July 2022, “the 3 last years” including starting date would be from July 2019 to now).

* **End Date** - set the date or period you want to end showing the data at. 


</div>