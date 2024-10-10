---
id: chart-type-multiseries-area-charts
title: Multiseries Area Chart
sidebar_label: Multiseries Area
tags: [Data Analyst]
sidebar_position: 24
displayed_sidebar: getting-started
---

A **Multiseries Area Chart** is a powerful visualization tool used to compare multiple data series over time. It displays trends across different categories or groups, with each series represented by a separate filled area beneath a line. This type of chart is ideal for highlighting the cumulative nature of different datasets, as well as understanding how individual series contribute to the overall trend.

![Multiseries Area](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/area/multiseries-area-chart-20241010A.webp)

**When to Use a Multiseries Area Chart:**
- To compare trends across multiple categories, such as sales data from different regions or products.
- To visualize how different series evolve over time while also showing the total contribution.
- To identify patterns or outliers among different data groups within the same time frame.

**Key Features:**
- **Multiple Series**: Display and differentiate multiple data series using various colors for easy comparison.
- **Stacked or Overlapping**: Choose a stacked layout to emphasize cumulative values or an overlapping layout for a direct comparison between series.
- **Category & Values**: Typically, the X-axis represents time or sequential data, while the Y-axis shows the values being measured.

## Creating a Multiseries Area Chart

Drag and drop your **Categories** and **Values** as desired. Then, configure **Series** to define the how to separate the aggregated values.

## Styling a Multiseries Area Chart

### General

The General section is available for all chart types, and the options vary depending on the chart selected. For more information on the options, see [General Chart Settings](../09-Configure%20charts/general-chart-settings.md).

### Styles

Multiseries area charts provide a visually appealing way to explore complex datasets and uncover insights about the relationships between different data groups.

- **Theme**: Choose from a variety of themes to change the overall color scheme of your chart.
- **Match Colors Across Charts**: Toggle this option to ensure consistent color usage across multiple charts in the same dashboard, improving visual coherence.
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

### Sorting
Like all XY Charts, you can sort by either the category or aggregated values from the column pills. If the column is not included in the chart, go to the **Sorting** section of the Configuration Panel and pick your desired column from the dropdown, and select the sorting direction. For more information, see [Sorting](../sorting.md). 
 
### Layers
Add a [Trend Line](../09-Configure%20charts/chart-layers.md#trend-line) or a [Reference Line](../09-Configure%20charts/chart-layers.md#reference-line) to your chart to allow users to visually compare the data against some set trend or reference value.
 

### Format
The [Small Multiples](../09-Configure%20charts/chart-format.md#small-multiples) feature is available in all XY Charts.
You can apply [Conditional Formatting](../09-Configure%20charts/chart-format.md#small-multiples#conditional-formatting) to your Line Chart.
 
### Filters
You can also add Filters to your data by expanding the **Filters** section in the configuration panel or by clicking on the **Filters** button in the toolbar above the canvas. Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. For more information, see [Filters](../09-Configure%20charts/chart-filters.md).
