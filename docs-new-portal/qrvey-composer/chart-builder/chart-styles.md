---
id: setting-chart-styles
title: Setting Chart Styles
sidebar_label: Setting Chart Styles
---

<div style={{textAlign: "justify"}}>

In the **Styles** section, you will be able to change the color of the chart, turn on/off-axis labels, and find other options that vary from chart to chart. 

For this bar chart example, you can change the bar orientation from vertical to horizontal, turn bar shading on/off, and add data labels that will show the value for each bar presented in the chart.
You will also find the X and Y-axis options.

![chart-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/chart-styles/styles_1.png#thumbnail-40)  


For both axes, you will be able to edit the **Axis Label** as well as turn on/off the Values Label. You can modify the **Value Labels** rotation, and you can define the format of the values for the y-axis.

![chart-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/chart-styles/styles_2.png#thumbnail-40)  

### Adjusting Charts to Fit the Size of Their Panels

Creators and Users can choose the option of **Fit to panel** for the contents of the analytics panel in Builders. When a chart contains so much data that it’s necessary to scroll in order to see it all, **Fit to panel** enables users to see the entire chart without having to scroll.

![chart-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/chart-styles/styles_3.png#thumbnail-40)  

![chart-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/chart-styles/styles_4.png#thumbnail)  

If the **Fit to panel** option is not selected, the size of the visualization is determined by its content size (e.g. bar width, gap width, cluster distance).

When **Fit to panel** has been selected, tick marks and axis labels may automatically be reduced to optimize space in order to fit everything into the panel. Instead of, for example, showing every year label on the X-axis, it shows labels for every 4th year, while the data (in the case above, bars) is shown in full.

If there is not enough space between the data points to show the data labels, the data labels will be hidden regardless of the show data labels setting.

### Axis Intervals
You can control the tick marks' intervals to display in the value axis, normally the Y-axis (depends on the chart’s orientation), by changing the Steps option located inside the value axis style panel. By default, the option will be set to **Auto**, meaning the chart will calculate the appropriate intervals based on the axis scale range and the dataset values.

![chart-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/chart-styles/styles_5.png#thumbnail)  

Depending on how wide the axis range is, the default configuration could display a lot of tick marks, making it hard to read or analyze the chart. Defining the **Steps** option you can control how many units the tick marks will be apart. 

In the example below, we set the step to 100 units, so the chart will display a tick mark every 100 units starting from 0, resulting in only 3 tick marks.

![chart-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/chart-styles/styles_6.png#thumbnail)  

It’s important to keep in mind that when the axis range is vast (e.g., 0 - 10,000,000), setting the **Steps** option to 1 will create 10 million tick marks, causing performance issues on the chart and probably blocking the browser. To avoid this situation, the chart will ignore the defined value and fall back to automatic mode.

### Scale Type
The default scale type for an X/Y chart is *Linear*, meaning that data is seen as if it were on a line divided into equal parts. However, a linear scale is not appropriate for data that is spread over a wide range. Use the *Logarithmic Scale* in Chart Builder to display numerical data over a wide range of values in a compact way. Find the setting to change the scale type to Logarithmic in the **Type** dropdown under Y-Axis in the Configuration Panel.

### Fixed Range Configurations
Chart creators can override the automatic range of their charts to fit their analysis needs so that a chart doesn’t result in too much whitespace giving it a much cleaner look.

![chart-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/chart-styles/styles_7.png#thumbnail-40)  

### Setting The Range
By default, the automatic range for the value axis starts at 0 and goes up to the maximum value that is plotted on the chart. In order to change that range, go to the **Styles** section of the configuration panel in the Chart Builder and expand the Y-axis subsection (or X-axis, if that happens to be the value axis). Set the values for Min Range and Max Range to what works for the chart.

![chart-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/chart-styles/styles_8.png#thumbnail)  

>**Note**: If a chart orientation is inverted to show the value on the X-axis, then the **Min Range/Max Range** options will be located in the X-axis configuration settings.



</div>