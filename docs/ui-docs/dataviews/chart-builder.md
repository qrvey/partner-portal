---
id: chart-builder
title: Chart Builder
sidebar_label: Chart Builder
---

<div style="text-align: justify">

The Chart Builder is used to build custom visualizations on top of your data, so you can quickly see what matters most to you, and spot trends that you might have otherwise missed. In this article, we will walk you through the process of creating a custom chart.

## Creating a Chart
Inside your application, navigate to **Data**, select the form or dataset you’d like to analyze, then choose the **Analyze** tab, followed by the **Custom View.**

![1_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/1_chart-builder.png#thumbnail-60)

To create your first custom chart, click the **Add Chart** icon.

![2_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/2_chart-builder.png#thumbnail-20)

## Chart Types
Next, choose the type of chart you’d like to create and click **Next**. For this example, we’re going to select a simple bar chart, but Qrvey has options for bar, line, pie and symbol charts, as well as word clouds, heat maps,  geo maps,  box and whisker style charts, crosstab, metrics and more. 

The options and settings for each chart will vary slightly from the example below depending on the chart you choose.

![3_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/3_chart-builder.png#thumbnail)

## Chart Builder Interface
When you first enter the Chart Builder, you’ll find three tabs for **Values**, **Chart Options** and **Visualization**. You’ll be entering your values and options on the left and there will be a real-time example of what your chart will look like on the right.

![4_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/4_chart-builder.png#thumbnail)

## Values
In the **Values** tab, you can provide your chart with a name, then assign your category and value columns from the drop-down menus. You can provide custom labels for either column. Finally, you can select an aggregate value for your data. Once you have assigned all of the required values, a sample of your chart will appear on the right.
![5_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/5_chart-builder.png#thumbnail)

If you’ve created a linked dataset using Data Links, you will see columns for both your source dataset and the additional datasets you’ve linked to, as shown below.

![6_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/6_chart-builder.png#thumbnail-60)

If your category column is a date field, you will also see a **Date Grouping** dropdown list, where you can select how you’d like the dates in the column to be grouped.

![7_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/7_chart-builder.png#thumbnail-60)

### Crosstab Values
If you’ve selected a **Crosstab Table**, you’ll find a slightly different set of values to select. You will first provide your table with name, then provide the values, rows and columns from your datasource.

![8_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/8_chart-builder.png#thumbnail-60)

## Chart Options
In the **Chart Options** tab, you can choose to add additional layers to your chart for things like combo and multi-series charts, as well as trend and reference lines. To begin, just click **+ Add Another Layer** and then choose which type of layer you’d like to add.
![9_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/9_chart-builder.png#thumbnail-60)
![10_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/10_chart-builder.png#thumbnail-60)

### Trend Line
If you choose to add a trend line, you can then select which type of trend you’d like from the drop-down menu. The preview chart on the right will automatically be updated with your selection.

![11_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/11_chart-builder.png#thumbnail-80)

### Reference Line
If you choose to add a reference line, you can select from a number of options, including which axis you’d like the reference to appear, whether that line should be fixed or dynamic in nature, and you may provide a label for the line.

![12_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/12_chart-builder.png#thumbnail-80)

### Combo Chart
If you choose to create a combo chart, you will be asked to provide the column for your additional data, along with the chart type, axis and label. In the example below, we’ve added Units as a line chart along the X-Axis. You may add even more columns to this chart by clicking on the **+** icon.

![13_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/13_chart-builder.png#thumbnail-80)

### Multi-Series
If you select multi-series, you will be prompted to select a second column from which to pull additional data. You can then choose to display your data either stacked, cluster or as a 100% chart as shown below.

![14_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/14_chart-builder.png#thumbnail-80)

## Visualization
In the **Visualization** tab, you can set the options for how your chart will look, including color, bar orientation, labels, tooltips and lots more. In addition to global settings, you’ll also find specific settings for each layer of your visualization. The chart on the right will update in real-time with the selections you choose.

![15_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/15_chart-builder.png#thumbnail-80)

Most of the visualization options provided are self-explanatory and you’ll be able to see the changes appearing in the sample chart provided. These options will vary slightly depending on the type of chart you are building since each chart type has its own unique features and options.

The **Panel Size** option changes how your chart will appear after you save and exit chart builder. It will adjust the width of your chart to either one, two or three columns wide. This option does not change anything in the sample chart while in chart builder.

Once you are happy with all of your selections, click **Save** and your new chart will appear in the custom view as seen below.

![16_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/16_chart-builder.png#thumbnail)

You may edit your chart at any time by clicking on the three-dot menu in the lower right corner of the panel and selecting **Edit**. Your custom view charts can quickly be filtered to meet your needs. You may also remove a panel from this location as well.

![17_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/17_chart-builder.png#thumbnail-40)

## Maps
Maps are a great way to display geographic or address information. Mapping is available for any **Address** or **US Address** field in a web form, or for a Geolocation Group in a dataset.

After selecting **Geo Maps** as a chart type, you can give you map a name, then select the type of map you’d like to create. At the current time, we support bubble and dot maps.

![18_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/18_chart-builder.png#thumbnail-40)

## Value Settings
Once you have chosen your chart name and type, you will then select your **Data Column** which contains your address information. Any address column that was properly identified when you first connected your dataset will appear in the drop-down menu. If your data set does not contain any address information, the menu will be empty. You can choose any part of an address, including country, state, city, street address or postal code, depending on the specificity you require.

Next, choose the **Value Column** along with the **Value Aggregate**. You will see a preview of your map being built on the right side of the page as you build.

![19_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/19_chart-builder.png#thumbnail)

## Visualization Settings
When you are happy with the values you’ve selected, you can either save your map and exit or proceed to the visualization tab, where you can select additional options, including the style of the map, its region, the opacity of the data and options for things like borders. As you build, the map on the right will provide you with a real-time preview.

![20_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/20_chart-builder.png#thumbnail)

In the **Geo Maps Settings** area, you’ll find settings for the type of base map, street view or satellite view, you’d like, along with the region and opacity settings you’d prefer. 

![21_chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.7_chart-builder/21_chart-builder.png#thumbnail-60)

Once complete, you may exit the chart builder and your map will be placed into your **Custom View**, making it available for Page Builder, Report Builder and Workflows. 