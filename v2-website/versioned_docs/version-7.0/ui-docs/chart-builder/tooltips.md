---
id: tooltips
title: Applying Tooltips to Charts
sidebar_label: Applying Tooltips to Charts
---

<div style={{textAlign: "justify"}}>

Users can enable tooltips that appear as pop-ups on mouse-over events for chart data points. By default, the tooltip pop-up displays the same data that was used to generate each data point in the chart. For example, if the data point value for a specific bar in a bar chart is “100”, then the tooltip will display “100” as well. Users can customize the data values displayed in the tooltip by adding one or more tooltip columns that map to other fields in the selected dataset.

![tooltips](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/tooltips/tooltip.png#thumbnail-20) 


To activate **Tooltips**, check the checkbox next to it and click on the chevron icon adjacent to the **Tooltips** checkbox to expand the section. Click **Add Column** to map a new field from the dataset to the tooltip. Select the desired field from the column drop-down and then choose one of the supported aggregations from the *Display Values As* drop-down. The supported aggregate functions depend on the data type of the selected column and include *Sum, Average, Median,  Count,  Distinct Count, Minimum, Maximum*, and *Unique* value. 

![tooltips](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/tooltips/general.png) 

## Tooltip Formatting

Choose one of the available Values Format:

* **Default** - shows the full value. E.g. 1,234,567.89
* **Abbreviated** - abbreviates the value to a K (kilo), M (million), B (billion). E.g. 1.24M
* **Decimal** - enables displaying or hiding decimal values. E.g. set to 1 decimal place: 1,234,567.9
* **Currency** - shows the value as currency. E.g. $1,234,567.89
* **Percentage** - the value is shown in percent format. E.g. 1,234,568%
* **Scientific** - displays the number in exponential notation. E.g. 1e+6
 
![tooltips](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/tooltips/values.png#thumbnail-20)  

Users can add as many custom tooltip columns as needed.

![tooltips](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/tooltips/custom.png#thumbnail-40)


Users can also set an optional tooltip header by entering the desired text into the **Header** textbox. System tokens can be used in the tooltip to customize it further. Type **{{** in the header input box to see the list of available tokens to choose from.

![tooltips](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/tooltips/token.png)


</div>