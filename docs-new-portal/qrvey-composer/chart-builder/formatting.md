---
id: formatting
title: Formatting
sidebar_label: Formatting
---

<div style={{textAlign: "justify"}}> 

In the Format section, you will find the option to apply *Conditional Formatting* or to create a *Small Multiples* view for your chart.

![cb-formatting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/formatting/formatitng_1.png#thumbnail-60)


* **Small Multiples** - is an option that allows you to partition data in a way that produces a chart for each distinct value in the selected field and shows these multiple charts on the same canvas for comparison purposes. This feature is currently available in Bar, Line, Symbol, Min/Max, Multiseries, and Combo Charts.

* **Conditional Formatting** - is a feature that enables you to apply formats (change color, bold text, etc.) to cells when they meet certain criteria you had defined prior to that. You can find this feature in Bar, Line, Symbol, Table, Expandable Table, Crosstab, Multiseries, Combo, Dot Map, Bubble Map, Funnel, and Pie Charts.

## Small Multiples
Small Multiples feature produces one chart per distinct value and with that lets you show multiple charts of the same Value and Category compared through a third column of your choice, all on the same canvas. 

For example, if you want to show stock quantity in different cities, you first create a simple Bar Chart dropping *city* onto the **Category** shelf and *quantityInStock* onto the **Values** one.

![cb-formatting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/formatting/formatitng_2.png#thumbnail)

Additionally, you would also like to show this data in relation to the date when the products were shipped. So you click on **Format** in the Configuration Panel and choose **Small Multiples**. As you drag and drop the *shippedDate* column into the box in Small Multiples, various new charts appear on the canvas showing the <u>Quantity in Stock by Cities</u> for each month and year of the dataset. 

![cb-formatting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/formatting/formatitng_3.png#thumbnail)


If the column you’re using in Small Multiples is a date column, you can click on the three-dot menu where you’ll find the **Date Group** option. Here you can select how you’d like the dates in the column to be grouped (by *Year, Quarter, Month, Week, Day, Hour, Minute,* and *Second*).


## Conditional Formatting
With Conditional Formatting, you can highlight a value in your chart by setting a condition. For example, we have a Table with *city* as **Groups** and *quantityInStock* as **Columns**, and we would like to highlight all the cells where the Columns value is higher than 400,000. 

To set up a new condition expand the Conditional Formatting section and click on **+ Add Condition**. A new Condition section is added with an auto-assigned label (Condition 1 for the first one) and color. Click on the section to expand it.

![cb-formatting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/formatting/formatitng_4.png#thumbnail)


Pick a color for the text and the cell you’d like to highlight, and then choose either an *“outline”* style that colors the cell border or a *“fill”* style that colors the cell background.

Give your Condition a **Label** to distinguish it from other  conditional styles you have defined  and choose the Column you want to format from the dropdown list. 

The next step is adding the **Operator** and the **Value** for the conditional style.

As you make changes in the Configuration Panel, you can see the changes applied to the chart on the canvas.

![cb-formatting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/formatting/formatitng_5.png#thumbnail)

</div>