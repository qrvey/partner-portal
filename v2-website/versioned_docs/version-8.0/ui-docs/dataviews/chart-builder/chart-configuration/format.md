---
id: format
title: Format
sidebar_label: Format
---
 
<div style={{textAlign: "justify"}}>

In the Format section, you will find the option to apply *Conditional Formatting* or to create a *Small Multiples* view for your chart.

![format](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/format/format1.png#thumbnail-40)


## Conditional Formatting

Conditional formatting enables you to apply a style to the chart when the data meets certain criteria that are defined in a condition and it can be best demonstrated in a <a href="" target="_blank">Table</a>. For example, we can highlight the rows where the total number of orders exceeds 500 units. The condition can be set by choosing which column the condition applies to, as well as the operator and value that define the condition. The reaction to the condition can be applied to the entire row or any of the columns in the table, and it can be in the form of changing the foreground (Text) or background (Cell), or border color. 

![format](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/format/format2.png#thumbnail-40)


To set up a new condition expand the **Conditional Formatting** section and click on **+ Add Condition**. A new Condition section is added with an auto-assigned label *Condition n*, where n is a sequentially generated number. Click on the section to expand it and follow these steps to achieve the results shown in the sample image:

* If you want to change the foreground color, do so from the color picker next to **Text Color**. This has not been changed in the example.
* If you want to change the background color, do so from the color picker next to **Cell Color**. This has been set to lime green in the example.
* You can highlight your selected area by outlining its border or have the highlight color fill the area from the **Style** selector. The Filled style has been selected in the example.
* A custom **Label** can be given to the condition to easily identify it, in case multiple conditions have been applied. Our condition is to identify *High Orders* and has been labeled as such.
* Our criteria is *Sum of Orders > 500*. 
    * **Column** has been set to *quantityOrders (SUM)*
    * **Operator** has been set to *Greater than*
    * And **Value** has been set to *500*.
* And finally, we have chosen Apply this style to the Entire Row. The other option is to choose one of the columns used in the chart.

![format](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/format/format3.png#thumbnail)


As you make changes in the Configuration Panel, you can see the changes applied to the chart on the canvas. Any number of conditional formats can be added to a chart. Charts can be switched to other types and they retain their set condition, as long as it is supported by the selected chart.

![format](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/format/format4.png#thumbnail)


Conditions can be clicking the **Remove** link in each section.

Applies to: <a href="" target="_blank">Bar</a>, <a href="" target="_blank">Line</a>, <a href="" target="_blank">Symbol</a>, <a href="" target="_blank">Table</a>, <a href="" target="_blank">Expandable Table</a>, <a href="" target="_blank">Crosstab</a>, <a href="" target="_blank">Multi-Series Bar</a>, <a href="" target="_blank">Multi-Series Line</a>, <a href="" target="_blank">Multi-Series Symbol</a>, <a href="" target="_blank">Combo</a>, <a href="" target="_blank">Dot Map</a>, <a href="" target="_blank">Bubble Map</a>, <a href="" target="_blank">Funnel</a>, and <a href="" target="_blank">Pie Charts</a>

## Small Multiples
Small Multiples feature produces one chart per distinct value of a selected column and with that lets you show multiple charts of the same **Value** and **Category** compared through the third column of your choice, all on the same canvas. 

To produce small multiples of any visualization, first create it using a chart that supports the feature and configure it to your liking. Next, expand the **Small Multiples** section and drag and drop the column that you wish to use to create multiples onto the shelf with the guide text *Drop column here*. As soon as a column is added to the shelf the section expands to reveal other options.

![format](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/format/format5.png#thumbnail)


* **Multiple Labels** controls the showing and hiding of each value of the selected multiples column as a label in each generated panel. Multiple labels are shown by default.
* **Borders** turns borders around each panel of multiples off or on. Borders are shown by default.
* **Max Panels** controls the number of “multiples” panels shown. The default value is 50.

In the following example, we show the number of vintage cars and motorcycles in stock, for each quarter in the year 2019.

![format](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/format/format6.png#thumbnail)


To create this chart, first a simple <a href="" target="_blank">Bar Chart</a> was created by dropping *productLine* onto the **Category** shelf and *quantityInStock* onto the **Values** shelf. Next, the chart was filtered to contain only the two product lines: Vintage Cars and Motorcycles for 2019 data. Then the chart was configured to set color, orientation, and range of the Y-axis.
Next, orderDate was dragged and dropped onto the **Multiples** column. The date is automatically grouped by month and year. This was changed to show quarter and year. 

![format](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/format/format7.png#thumbnail-40)


Note that if the column you’re using in Small Multiples is a date column, you can click on the three-dot menu where you’ll find the Date Group option. Here you can select how you’d like the dates in the column to be grouped.

Applies to: <a href="" target="_blank">Bar</a>, <a href="" target="_blank">Line</a>, <a href="" target="_blank">Symbol</a>, <a href="" target="_blank">Min/Max</a>, <a href="" target="_blank">Multi-Series Bar</a>, <a href="" target="_blank">Multi-Series Line</a>, <a href="" target="_blank">Multi-Series Symbol</a>,and <a href="" target="_blank">Combo Charts</a>.




</div>