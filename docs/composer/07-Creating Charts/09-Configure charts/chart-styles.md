---
id: chart-styles
title: Styles
sidebar_label: Styles
tags: [Data Analyst]
sidebar_position: 4
displayed_sidebar: data-analyst
---
 
<div style={{textAlign: "justify"}}>

The Styles section enables you to control various visual elements of the charts, such as colors, labels, and more. It is available for most chart types, and the options vary depending on the chart selected. This article provides an alphabetized list of all the options available to all chart types. 

### Allow Clustering
Turns on or off clustering of data points in a Dot Map chart. When not checked the individual data points are shown on the map; when the box is checked, data points within the same geolocation are joined together in a single group - depending on the zoom level of the map - and Data Labels option is enabled. 


![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/allow-clustering.png#thumbnail)

* Default: On
* Applies to:  Dot Maps 

### Automatic Resize
When on, the font size of the gauge is automatically adapted to the size of the panel. When off, Font size is enabled and can be set manually.

* Default: On
* Applies to:  Indicator Gauge 

### Axis Labels
Shows or hides the labels of the axes (Product Line and Average MSRP in the following image)

![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/axis-labels.png#thumbnail)

* Default: On
* Applies to:  Bar ,   Line ,  Symbol ,  Multi-Series Bar ,  Multi-Series Line ,  Multi-Series Symbol ,  Combo ,  Min/Max ,  Box and Whisker 

### Bar Width %
Sets the percentage of the space occupied by each bar in a bar chart, versus the gap left between the bars. By default, the system automatically sets a width that it finds most useful for the given data. The percentage can be adjusted manually. 

* Default: Auto
* Applies to:  Bar ,  Multi-Series Bar ,  Combo 

### Base Map
Sets the map mode and layers. 

* Default: Streets
* Applies to:  Dot Map ,   Bubble Map  

### Body
This is an entire section that applies to Table charts and allows for the body (main rows) to be styled, from the used font’s properties to the cell foreground and background colors.  

![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/body.png#thumbnail-40)

* Default: N/A
* Applies to:  Table 

### Borders
Shows and hides a border around data labels, if those are enabled.

* Default: Off
* Applies to:  Bar ,   Line ,  Combo ,  Funnel ,  Pie 

### Bullet Color

Color of the bullet in a bullet gauge.

* Default: Green / depends on the chosen theme.
* Applies to:  Bullet Gauge 

### Category Labels
This is a section that is accessible for funnel charts and allows the labels for the category column to be controlled. 

![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/cat-labels.png#thumbnail-40)

* Default: N/A
* Applies to:  Funnel 

### Chart Orientation
Determines the orientation of bars or spikes for the chart.  

* Default: Depends on the data type of the Category column.
* Applies to:  Bar ,  Min/Max ,   Box and Whisker 

### Circle Style
Decides the style of the circle that is the body of the dial gauge.

* Default: Half circle
* Applies to:   Dial Gauge 

### Color 
Changes the color of the dot shown on the map. 

* Default: Blue / depends on the chosen theme.
* Applies to:   Dot Map ,   Bubble Map 

### Color type
Decides if all bars/data points have to be the same color or should their colors vary, depending on the category that they represent.

* Default: Single
* Applies to:  Bar ,   Line ,   Symbol ,   Funnel ,   Min/Max 

### Custom Scale
This checkbox enables a section for charts that work with a range of colors, like heatmaps, and it allows the user to control the range of colors and the number of steps in the range. The range and steps are set automatically by default, with the range covering the data values from the minimum to maximum data point and 5 steps in the range.

* Default: Off/automatic (min=minimum data value, max=maximum data value, steps=5)
* Applies to:   Heatmap ,   Choropleth 

### Data Labels
Shows or hides the data labels on the chart. Affects the availability of the Borders options.

![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/data-labels.png#thumbnail)


* Default: On
* Applies to:  Bar ,  Line ,  Combo ,  Funnel ,  Pie ,  Heatmap ,  Dot Map ,   Choropleth 

### Display Outliers
Shows or hides data points that fall outside statistical norms in box and whisker charts, using a selectable symbol. 

* Default: On, with a hollow circle symbol
* Applies to:  Box and Whisker 

### Fill
Decides if a filled, or hollow/outlined symbol, should be used for the chart.

* Default: Hollow circle symbol
* Applies to:  Symbol ,  Multi-Series Symbol ,  Min/max ,  Box and Whisker 

### Font Color
Sets the font color of an indicator gauge.

* Default: Dark gray / depends on the chosen theme.
* Applies to:  Indicator Gauge 

### Font Style
Sets the font style of an indicator gauge (regular, bold, italic)

* Default: Regular
* Applies to:  Indicator Gauge 

### Format
Format of displayed numeric data in charts depends on factors such as the data type, the visualization format set in the dataset design step, the selected aggregation, and more. The product does its best to apply the best format to the numbers, but the default format can be adjusted from this control.

![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/format.png#thumbnail-40)


* Default: Default - Abbreviated
* Applies to:  Indicator Gauge, Dial Gauge, Bullet Gauge, Crosstab, Heatmap 

### Gauge Style
Decides between a solid or an angular style for the pointer in the dial gauge.

* Default: Solid
* Applies to:  Dial Gauge 

![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/gauge-style.png#thumbnail)


### Gaps
Set the gap distance between columns and rows of a heatmap chart.

* Default: 3, 3
* Applies to:  Heatmap 

### Header
This is an entire section that applies to Table charts and allows for the header row of the table to be styled, from the used font’s properties to the foreground and background colors and borders.

![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/header.png#thumbnail-40)
 

* Default: N/A
* Applies to:  Tables 

### Header Color
Set the color for the header of the table, using the color picker. 

* Default: Blue / depends on the chosen theme.
* Applies to:  Expandable Tables, Crosstab 

### Header Font Color
Set the foreground color for the header of the table, using the color picker. 

* Default: White / depends on the chosen theme.
* Applies to:  Expandable Tables, Crosstab 

### Line Opacity
Set the degree of the line opacity from solid to more opaque. 

* Default: 100% (solid)
* Applies to:  Min/Max 

### Line Style
Choose one of the predetermined line styles - solid, dashed or dotted.

![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/line-style.png#thumbnail)

* Default: solid
* Applies to: Line, Multi-Series Line, Min/Max, Radar

### Line Thickness
Set how thick you want your line to be, thin, normal or bold. 

![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/line-thickness.png#thumbnail)


* Default: Thin
* Applies to:  Line, Multi-Series Line, Min/Max, Radar 

### Line/Whisker Thickness
Set the thickness of the whisker in a box and whisker chart (thin, normal, bold).

* Default: Thin
* Applies to: Box and Whisker 

### Line Type
Decide between one of the 5 line types available - straight, monotone, cardinal, step before, or step after. 

![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/line-type.png#thumbnail)


* Default: Straight
* Applies to:  Line, Multi-Series Line 

### Map Borders
Show or hide country and region borders on your map.  

* Default: On
* Applies to:  Dot Map, Bubble Map, Choropleth 

### Map Region
Choose one of the predetermined areas as the initial view of the map. You can always zoom in or out of the chosen area.

* Default: Depends on the map type, but mostly World
* Applies to: Dot Map, Bubble Map, Choropleth 

### Match colors across charts
When on, this setting unifies the color of each categorical value across all charts that use the same dataset, throughout the application, so that one category is always depicted in the same color.

* Default: On
* Applies to:  Bar,  Line,  Symbol,  Multi-Series Bar,  Multi-Series Line,  Multi-Series Symbol, Funnel,  Pie,  Min/Max 

### Mode
This setting applies to the funnel chart. When the mode is set to Height, the relative value of the data is reflected in the height of each band of the funnel. When set to Width, the relative values affect the width of each band, keeping the height of all segments constant.

 ![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/funnel1.png#thumbnail-60)
 ![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/funnel2.png#thumbnail-60)

* Default: Height
* Applies to: Funnel 

### Needle Color
Changes the color of the needle of the dial gauge.

* Default: Green / depends on the chosen theme.
* Applies to: Dial Gauge 

### Offset
Determines the offset of the chart. This configuration is especially useful for XY charts because it enables you to control the space available in the chart area for the X or Y axis, and thus for the category and data labels. Select whether to configure a manual offset as a **Percentage** or in **Pixels**, and enter the desired values in the **Left** field and the **Top** or **Bottom** field (depending on the chart). To enable the platform to automatically manage the offsets, click **Reset to Default** to set the values under **Left** and **Top/Bottom** to **Auto**.

Applies to:  Bar, Crosstab, Expandable Tables, Line, Maps, Multiseries Bar, Multiseries Line, Multiseries Symbol, Pie, Radar, Symbol, Tables


### Opacity
Set the level of opacity of the box, whisker and outliers.

* Default: 100% (solid)
* Applies to: Box and Whisker 

### Percentage
When turned on, the percentage of the value of each segment to the total of all segments is displayed alongside the actual value.

* Default: Off
* Applies to: Funnel 

### Reversed Colors
When turned on, the sequence of colors used to depict each step of the range in a heatmap of choropleth map is reversed, so the last color in the set becomes the first, the one before last becomes the second, and so on.

* Default: N/A
* Applies to: Heatmap, Choropleth 

### Resize Rows
Set a height - in pixels - for the rows of the table. Note that the column width can be adjusted by moving the column borders using the mouse or trackpad.

* Default: Auto
* Applies to: Tables, Expandable Tables 

### Shading
Shade the remaining space between the actual value and the top of the bar.

* Default: Off
* Applies to:  Bar 

### Show Animation
When checked, the gauge shows its value in an animated style, moving from the minimum data point to the target value. Otherwise, the final value is displayed immediately.

* Default: On
* Applies to:  Indicator Gauge, Dial Gauge, Bullet Gauge 

### Show Comparison
This setting works in conjunction with the Comparison and Comparison Color options. When turned on, it highlights the comparison between the current value with the same value on the date that is selected in the Comparison section, in the color set in the Comparison Color option. 

* Default: On
* Applies to:  Dial Gauge 

### Skip Labels
Enables you to adjust how axes labels are displayed on the chart. Options are:
* **Auto** (default). The system determines how to display the chart labels. 
* **All**. Skip all labels, so that none are displayed. 
* **None**. Do not skip any labels, so that all labels are displayed. Note that some values may overlap. 
* **All but first and last**. Skip all labels except the first and last values. 
* **Custom**. Enter a custom number of labels to skip. 

Default: Auto
Applies to:  Bar, Line, Multiseries Bar, Multiseries Line, Multiseries Symbol, Symbol


### Symbol
Users can choose between 7 different types of symbol styles to display each data value (Circle, Square, Diamond, Triangle Down, Triangle Up, X, Cross).

* Default: Hollow circle
* Applies to:  Symbol, Multi-Series Symbol,  Min/Max,  Dot Map,  Box and Whisker 

### Symbol Opacity
Set the degree of the symbol opacity from solid to more opaque.

* Default: 100% (solid)
* Applies to:  Dot Map, Bubble Map 

### Target Color
See <a href="#target-indicator">Target Indicator </a>

* Default: Green
* Applies to: Bullet Gauge 

### Target Indicator
This setting works in conjunction with the Comparison option. When set to Comparison, it shows a vertical indicator, in the selected Target Color, on the date that was picked for comparison. If set to Custom, the indicator is shown on the custom value that is entered in the Target Value field. The entered Target Label is displayed in the tooltip, when hovering over the indicator.

* Default: Comparison
* Applies to: Bullet Gauge 

### Theme
This setting applies to most chart types by default, or when the <a href="#color-type">Color Type </a>  is set to By Category. The setting allows for applying one of the predefined themes, or the selected custom theme, to the chart. As a result of this, the colors of the chart are picked from the range that is defined in the selected theme.

* **Match colors across charts**. Select this option to unify the colors of each categorical value throughout the page and application where the same categories of the same dataset are used.

* Default: Qrvey’s default theme
* Applies to:  Bar, Line, Symbol, Multi-Series Bar, Multi-Series Line, Multi-Series Symbol, Funnel, Pie, Min/Max, Heatmap, Choropleth, Box and WHisker 

### Threshold Opacity
Determines the opacity of the threshold areas of the gauge, in contrast with the target and the needle.

 ![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/threshold-opacity.png#thumbnail)

* Default: 100% (solid)
* Applies to: Dial Gauge, Bullet Gauge 

### Type
Type setting applies to cases where multiple bar charts are displayed on one canvas. This may happen in multi-series bar charts or combo charts that consist of multiple bar charts. 
Multi-series bar charts offer the Stacked, Clustered, and 100% options, while combo bar charts may only be Stacked or plotted Side-by-side.

Type setting applies to pie charts, as well. The options for pie charts are Pie and Donut.

 ![styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/styles/type.png#thumbnail)


* Default: Stacked (for multi-series bar and combo bar charts) and Pie for pie charts
* Applies to:  Multi-Series Bar, Combo, Pie 

### Values
When on, the data values of the funnel chart are displayed on each segment.

* Default: On
* Applies to: Funnel 

### X-Axis and Y-Axis
X and Y axis sections are available for all XY charts and the heatmap chart and present slightly different options in each case. Various aspects of each axis, from its label, the format of labels, range, steps, and more, can be determined in these sections. 
Due to the varied options in each chart, these two sections have been explained in the individual chart types articles.

* Default: N/A
* Applies to:  Bar, Line, Symbol, Multi-Series Bar, Multi-Series Line, Multi-Series Symbol, Combo, Heatmap, Box and Whisker 




</div>