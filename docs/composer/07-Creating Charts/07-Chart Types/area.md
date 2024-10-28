---
id: chart-type-area-charts
title: Area Chart
sidebar_label: Area Chart
tags: [Data Analyst]
sidebar_position: 23
displayed_sidebar: getting-started
---

An **Area Chart** is used to visualize quantitative data and represent changes over time. It is particularly effective for illustrating trends or showing how values accumulate over a period. By filling the space between the line and the x-axis with color, area charts make it easier to see the volume of changes over time, making them a great choice when you want to highlight the magnitude of trends.

![Area Chart](https://s3.us-east-1.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/area/area-chart-20241028A.webp)

**When to Use an Area Chart:**
- To display how a value evolves over time.
- To compare the relative proportions of different categories over a continuous range.

**Key Features:**
- **Categories**: Used as the independent variable, such as time or sequential data.
- **Values**: Used as the dependent variable, such as quantitative measures.

## Creating an Area Chart

To create an area chart, choose the desired **Category** and **Value**, then style and configure as desired.

## Styling an Area Chart

### General
The General section is available for all chart types, and the options vary depending on the chart selected. For more information on the options, see [General Chart Settings](../Configure%20charts/general-chart-settings).

### Styles

The **Styles** toolbar in Qrvey's Chart Builder allows you to customize the appearance of your chart to better fit your needs. This section offers various options to modify the visual style and presentation of your area chart.

- **Color**: Choose a color for your area chart.
- **Chart Orientation**: Switch between vertical and horizontal orientations to better display your data.
- **X-Axis**: Access detailed settings for both axes to adjust labels, scales, and other display options.
    - **Axis Title**: Toggle the display of the axis title on or off.
    - **Skip Labels**: Use this setting to adjust the frequency of labels displayed along the axis.
    - **Label Rotation**: Customize how axis labels are angled. Choose from: Horizontal (default), Diagonal, Vertical, Custom (for precise control).
    - **Typeface**: Select the font used for the X-axis labels. This helps to match the chart's text style with your overall design.
    - **Weight**: Adjust the font weight (e.g., Light, Medium, Bold) to make axis labels more or less prominent.
    - **Size**: Set the font size for the axis labels, with options like 12px for smaller text or larger sizes for better readability.
    - **Font Color**: Pick a color for the axis text using the color picker, allowing you to ensure good contrast and visibility against the chart background.
- **Y-Axis**
    - **Axis Title**: Toggle this option to show or hide the title of the Y-axis. Adding a title can help clarify what values the Y-axis represents.
    - **Value Labels**: Enable or disable labels to display the actual data values directly on the Y-axis, making it easier to interpret the chart's data points.
    - **Label Rotation**: Customize the angle of axis labels with options such as: Horizontal (default), Angled, Vertical, Custom rotation for precise control.
    - **Typeface**: Select the font style for the Y-axis labels to match your chart’s overall theme.
    - **Weight**: Adjust the font weight (e.g., Light, Medium, Bold) to make labels more or less prominent.
    - **Size**: Specify the font size for the Y-axis labels for better readability, such as 12px or other sizes.
    - **Font Color**: Choose a color for the Y-axis text using the color picker, ensuring good contrast against the chart background.
    - **Format**: Control how numeric values are displayed, with options for adding currency symbols, percentages, and other formats to better represent the data.
    - **Scale Type**: Choose between different scale types like **Linear** for evenly spaced values or **Logarithmic** for scaling large ranges.
    - **Min Range & Max Range**: Set the minimum and maximum values for the Y-axis range manually or use "Auto" to allow Qrvey to adjust it based on the data.
    - **Steps**: Define the interval between tick marks on the Y-axis. Choose "Auto" for automatic scaling or set a custom value for precise control.
- **Opacity**: Adjust the transparency level of the chart elements, allowing you to make the chart more or less prominent in the dashboard.
- **Type**: Select from different layout styles to adjust how the data is visually layered, including standard, stacked, or normalized views.
- **Line Type**: Choose the style of lines used in the chart, such as straight, smooth, or stepped, to best represent the flow of data.
- **Data Labels**: Enable or disable data labels to show specific values directly on the chart for easier reference.
- **Offset**: Adjust the position of elements using **Percentage** or **Pixels** for precise control over the layout.
    - **Left**: Pixels to offset from the left.
    - **Bottom**: Pixels to offset from the bottom.

These settings help you fine-tune the visual representation of your data, ensuring that your charts are both functional and aesthetically pleasing.

### Sorting
Like all XY Charts, you can sort by either the category or aggregated values from the column pills. If the column is not included in the chart, go to the **Sorting** section of the Configuration Panel and pick your desired column from the dropdown, and select the sorting direction. For more information, see [Sorting](../sorting.md). 
 
### Layers
Add a [Trend Line](../09-Configure%20charts/chart-layers.md#trend-line) or a [Reference Line](../09-Configure%20charts/chart-layers.md#reference-line) to your chart to allow users to visually compare the data against some set trend or reference value.
 
### Format
The [Small Multiples](../09-Configure%20charts/chart-format.md) feature is available in all XY Charts.
 
### Filters
You can also add Filters to your data by expanding the **Filters** section in the configuration panel or by clicking on the **Filters** button in the toolbar above the canvas. Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. For more information, see [Filters](../09-Configure%20charts/chart-filters.md).
