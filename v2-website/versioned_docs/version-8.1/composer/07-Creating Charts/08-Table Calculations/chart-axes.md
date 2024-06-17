---
id: chart-axes
title: Managing Chart Axes
sidebar_label: Managing Chart Axes
tags: [Data Analyst]
sidebar_position: 2
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>


Many aspects of the axes for X/Y charts (Bar, Line, etc.) can be controlled from settings that can be found under X-Axis and Y-Axis sections in the **Styles** section of the *Configuration Panel*. These include adding a custom label to the axes, deciding if you want to show values or not, and if so, choosing the orientation of the values you want to display (horizontal, vertical, diagonal), among others. These settings are explained in this article.

Note that the settings for the two axes are different for the axis that is used to plot **Categories** - (usually X, or the horizontal axis), and the one that is used to plot **Values** (usually Y, or the vertical axis). However, the role of these two is switched if the chart orientation is reversed and therefore the access points that are shown in the images in this article, may switch places, too.

![chart-axes](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/chart-axes/styles.png#thumbnail-40)

## Axis Labels
Axis Labels are by default displayed halfway along the length of each axis and next to it. The default values of the labels are set to the name of the column that is plotted on that axis.
You can decide whether to display these labels or not, but checking or unchecking the A**xis Labels** checkbox, which can be found directly inside the *Styles* section. This setting controls both axis labels simultaneously.

![chart-axes](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/chart-axes/axis-label.png#thumbnail-60)



If you want to display something other than the column name, you can customize the label from the **Label** setting in the corresponding axis section.

![chart-axes](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/chart-axes/xaxis.png#thumbnail-40)



For [Como Charts](../07-Chart%20Types/combo.md), where more than one Y-axis may exist, each used column is presented in a section of its own, and the axis label, as well as other characteristics of the axis, can be controlled from under that section. 

![chart-axes](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/chart-axes/combo.png#thumbnail)


It is important to note that the options for managing the chart axes depend on the type of chart you have chosen. To read more about managing axes in a specific chart, head to the [Chart Types](../07-Chart%20Types/bar.md) section. 

## Controlling The Display of Values
Data **Values** are displayed by default along both axes. All data values for category columns are listed next to a tick mark along the category axis (most commonly, the x-axis). Values shown along the value axis (most commonly the y-axis) are however numbers that reflect the range of the value axis, from the minimum to the maximum, and are displayed at appropriate intervals to prevent overcrowding.  
Values for each axis can be hidden by unchecking the box next to the **Values** setting for that axis. If needed, they can also be rotated to horizontal, slanted, and vertical orientations, in order to prevent them from overlapping. Numeric values can be further customized by choosing one of the following options for their format:
* *–:* results in automatic formatting of the number
* *1K:* results in the abbreviation of the number by its thousands, using K for one thousand, M for one million, B for one billion, etc.
* *.00:* results in more or less precision by showing a set number of decimal points 
* _$:_ results in currency format, putting a $ in front of the number
* *%:* puts a percentage sign next to the number
* *X<sup>y</sup>:* changes the number format to scientific format

![chart-axes](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/chart-axes/yaxis.png#thumbnail-40)

 
## Controlling Scale
The default scale type for an X/Y chart is **Linear**, meaning that data is seen as if it were on a line divided into equal parts. However, a linear scale is not appropriate for data that is spread over a wide range. Use the **Logarithmic Scale** in Chart Builder to display numerical data over a wide range of values in a compact way. Find the setting to change the scale type to Logarithmic in the **Scale Type** dropdown under Y-Axis (or X-Axis, if the chart orientation has been changed) in the Configuration Panel.
Choosing the logarithmic scale type will remove the ability to manage the interval between the tick marks through the Step setting (explained below).

![chart-axes](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/chart-axes/scale.png#thumbnail-40)

## Setting The Range

By default, the automatic [range](../../../getting-started/glossary.md#r) for the value axis starts at 0 and goes up to the maximum value that is plotted on the chart. Chart creators can override the automatic range of their charts to fit their analysis needs so that a chart doesn’t result in too much whitespace giving it a cleaner look. In order to change the range, go to the Styles section of the configuration panel in the Chart Builder and expand the Y-axis subsection (or X-axis, if that happens to be the value axis). Set the values for **Min Range** and **Max Range** to what works for the chart.

![chart-axes](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/chart-axes/range.png#thumbnail-60)



>**Note**: If the chart orientation is inverted to show the values on the X-axis, the **Min Range/Max Range** options will be located in the X-axis configuration settings.

## Axis Intervals
You can control the tick marks' intervals to display on the value axis by changing the *Steps* option located inside the value axis style panel. By default, the option will be set to **Auto**, meaning the chart will calculate the appropriate intervals based on the axis scale range and the dataset values.

![chart-axes](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/chart-axes/interval1.png#thumbnail)


Depending on how wide the axis range is, the default configuration could display a lot of tick marks, making it hard to read or analyze the chart. By defining the *Steps* option, you can control how many units the tick marks will be apart. In the example below, we set the step to 100 units, so the chart will display a tick mark every 100 units starting from 0, resulting in only 3 tick marks.

![chart-axes](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/chart-axes/interval2.png#thumbnail)


It’s important to keep in mind that when the axis range is vast (e.g., 0 - 10,000,000), setting the *Steps* option to 1 will create 10 million tick marks, causing performance issues on the chart and probably blocking the browser. To avoid this situation, the chart will ignore the defined value and fall back to automatic mode.





</div>