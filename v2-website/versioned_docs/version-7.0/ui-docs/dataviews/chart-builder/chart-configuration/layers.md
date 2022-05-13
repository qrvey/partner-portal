---
id: layers
title: Layers
sidebar_label: Layers
---

<div style={{textAlign: "justify"}}>

The options in the Layers section are used to set up trends and reference lines over your charts to reveal a trend and also help predict future trends. All layers have to be explicitly added and are not applied by default.
This section is available for most chart types and each available option is described in detail in this article.

## Reference Line
Reference lines show how the data in a chart compares to a reference value. For example, use reference lines to visualize daily sales against a target sales figure.
If you decide to add a reference line, you can choose from a number of style options for the line and whether that line should be *Fixed* or *Dynamic*. Multiple reference lines can be added to a single chart.

To add a reference line click on the **+Add Reference Line** command. A new reference line section will be added and given a default name *Reference Line n*, where n is a sequentially-generated number. The line will get assigned a color based on the selected theme of the chart, starting with the second color in the sequence (the chart is assumed to take the first color).

![layers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/layers/layer1.png#thumbnail-60)



Reference lines can be fixed to the target value entered in the **Value** field, or be set dynamically by clicking on the **Dynamic** option. When set to Dynamic, the value of the reference line is determined by the selected aggregate of the chart’s *Values* column, set from the **Value Aggregate** dropdown list. 
The thickness of each reference line can be selected from the **Line Thickness** choices of *Thin, Normal,* or *Bold*. The style of the line can also be set to *Solid, Dashed*, or *Dotted* from the **Line Style** icons. By default, the line is displayed as a fixed, thin, solid line.
The area under, or above, the line can be highlighted by choosing a **Fill** style from the icons. If the *Before* or *After* options are selected, the respective area is colored with a default 20% opacity level of the same color as the reference line. The opacity can be changed to any desired value between 10 to 100%.  
Each reference line can be removed by clicking the **Remove** link in the line’s section.

![layers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/layers/layer2.png#thumbnail)


Applies to: All X/Y charts, except for Box & Whisker

## Trend Line
A trend line reveals the overall direction of the data in a chart and can help you see emerging patterns in your data and make predictions.
 
To add a trend line, you first need to select the type of trend you’d like to use from the drop-down menu. While you’re deciding on the line thickness and style, the preview chart on the left will automatically be updated with your selection.
 
![layers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/layers/layer3.png#thumbnail-40)

>**Note**: The only type of trend line we support right now is Standard Linear Regression, with more types to be supported in the future.

![layers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/layers/layer4.png#thumbnail-40)

![layers](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/layers/layer5.png#thumbnail)



* Applies to: All X/Y charts, except for Min/Max and Box & Whisker



</div>