---
id: creating-a-chart
title: Creating a Chart
sidebar_label: Creating a Chart
---
 
<div style={{textAlign: "justify"}}>

In order to create a chart, you have to follow these steps:

1. Click the **Add Chart** or **Add Metrics** button or the Chart Builder icon in the toolbar, from the screen that you are on.
The default chart is **Bar Chart**, but it can be changed from the **Chart Panel** on the right if you intend to create another chart type. The chart type can be changed later, too.

![creating-charts](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/creating-charts/create1.png#thumbnail)


2. Select the dataset that you want to build the chart for. 
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> a) If the Chart Builder is accessed from the Analyze section, the dataset is the one that you are analyzing and this step is automatically skipped. </li>
<li>b) If accessed from the Page or Report Builder, the list of the available datasets appears in the data panel and you have to select one of them. In this case you can also search for the dataset by entering any part of its name in the search box.</li>
</ul>

![creating-charts](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/creating-charts/create2.png#thumbnail)

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>Selecting the dataset will list its columns in the Data Panel. You can click on the left arrow next to the caption of the Data Panel to go back to the list of datasets and choose a different one to use for the chart. You will lose your created chart if you choose a different dataset.</li>
</ul>

![creating-charts](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/creating-charts/create3.png#thumbnail-40)

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>Note that charts are always created as children of the dataset that they are created under and depend on the said dataset. </li></ul>

3. Drag a column to one of the fields in the column shelf. 
Doing so will immediately plot the resulting chart in the canvas area. To do this, the product assumes that the same column has been added to all of the column fields. If any of these fields expect a value column to aggregate, it will aggregate the selected column accordingly.

A category column will get aggregated using a Count function, and a value field will be totaled, using a Sum function. 
Drag other desired column(s) to the other fields in the column shelf and adjust the value columns’ aggregate from the column pills. 
You can also change other options, such as sorting, format, etc. from each column pill’s three-dot menu. Read about these features in the Anatomy of a Column Pill section in the Chart Builder Overview article.

Alternatively, you can drag the data columns onto the chart canvas. All areas that can receive a data column light up when you start dragging the column. 
Data columns can be dragged and moved out, or moved from one column field to another. 
You may change the chart type at any point. The product will do its best to keep your selections in place and use those to build the new chart.

![creating-charts](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/creating-charts/create4.gif#thumbnail)

4. Once the chart is created, you can enhance or restyle it from the sections in the Configuration Panel. Read more about these comprehensive options in the Chart Configuration article. Also, read about the various parts of the chart and the used naming convention in the Anatomy of a Chart section.

5. Give the chart a name and an optional description.

6. Make sure to click **Save** and save the chart before getting redirected to the Dataset View section. Click **Cancel** to stay in the Chart Builder, but be aware that Chart Builder does <u>not save</u> changes automatically. You may also choose the **Discard** option to close the builder without saving the chart.

![creating-charts](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/creating-charts/create5.png#thumbnail-60)


## The Anatomy of a Chart

![creating-charts](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/creating-charts/create6.png#thumbnail)

1. <strong>Chart Name and Description</strong> - you can modify the name of the chart and the chart description by clicking on the field and typing the name/description you want.
2. <strong>Legend</strong> - enabled in certain charts to differentiate between multiple values at glance.
3. <strong>Tooltips</strong> - pop-ups with additional information about a Value that appear when you hover over a data point. Read more about Tooltips and how to apply them <a href="" target="_blank">here</a>.
4. <strong>Data Labels</strong> - labels that show the value of a data point and can be shown or hidden.
5. <strong>Axis Labels</strong> - labels that show what is displayed on an axis and can be turned on or off, displayed or hidden, and further stylized. Read more about managing chart axes <a href="" target="_blank">here</a>.
6. <strong>Axes</strong> - X and Y axes of a chart.
 




</div>