---
id: creating-a-chart
title: Creating a Chart
sidebar_label: Creating a Chart
---
<div style={{textAlign: "justify"}}>

In order to create a chart, you have to follow these steps:

1. Click the **Add Chart** or **Add Metrics** button from the screen that you are on.
The default chart is *Bar Chart*, but it can be changed from the **Charts Panel** on the right if you intend to create another chart type. The chart type can be changed later, too.

2. Select the dataset that you want to build the chart for. 

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>  a. If the Chart Builder is accessed from the Analyze section, the dataset is the one that you are analyzing and this step is automatically skipped.</li>
<br/>
<li>  b. If accessed from the Page or Report Builder, selecting the dataset will list its columns in the Data Panel.</li></ul> 

You can click on the left arrow next to the caption of the Data Panel to go back to the list 
of datasets and choose a different one to use for the chart. You will lose your created 
chart if you choose a different dataset.

![chart-builder-overview](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/create-chart/create1.png#thumbnail-40)

Note that charts are always created as children of the dataset that they are created
under and depend on the said dataset.

3. Drag a column to one of the fields in the column shelf. 
Doing so will immediately plot the resulting chart in the canvas area. To do this, the product assumes that the same column has been added to all of the column fields. If any of these fields expect a value column to aggregate, it will aggregate the selected column accordingly.<br/><br/> 
A category column will get aggregated using a Count function, and a value field will be totaled, using a Sum function. 
Drag other desired column(s) to the other fields in the column shelf and adjust the value columns’ aggregate from the column pills. 
You can also change other options, such as sorting, format, etc. from each column pill’s three-dot menu. Read about these features in the Anatomy of a Column Pill section.
<br/>
<br/> 
Alternatively, you can drag the data columns onto the chart canvas. All areas that can receive a data column light up when you start dragging the column. 
Data columns can be dragged and moved out, or moved from one column field to another. 
You may change the chart type at any point. The product will do its best to keep your selections in place and use those to build the new chart.

![chart-builder-overview](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/create-chart/create2.gif#thumbnail)

4. Once the chart is created, you can enhance or restyle it from the sections in the Configuration Panel. Read more about these comprehensive options in the Chart Configuration section of this article. Also, read about the various parts of the chart and the used naming convention in the Anatomy of a Chart section.

5. Give the chart a name and an optional description.

6. Click the **Save Chart** button to add the chart to the collection under the dataset. You may also click the **X** icon in the top right corner of the Chart Builder and choose the **Discard** option to close the builder without saving the chart.

## The Anatomy of a Chart

![chart-builder-overview](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/create-chart/create3.png#thumbnail)
1. **Chart Name and Description** - you can modify the name of the chart and the chart description by clicking on the field and typing the name/description you want.
2. **Legend** - enabled in certain charts to differentiate between multiple values at glance.
3. **Tooltips** - pop-ups with additional information about a Value that appear when you hover over a data point. Read more about Tooltips and how to apply them here.
4. **Data Labels** - labels that show the value of a data point and can be shown or hidden.
5. **Axis Labels** - labels that show what is displayed on an axis and can be turned on or off, displayed or hidden, and further stylized. Read more about managing chart axes here.
6. **Axes** - X and Y axes of a chart.

## Chart Panel
Once a chart is saved the Chart Builder is closed and the chart is displayed inside a panel. All charts are created as “children” of their dataset and can always be accessed from the Analyze view of the dataset or by clicking on the dataset inside the **Data Panel** of the **Data Panel** of the **[Page Builder](../../builders/pages.md)**.  

You can edit your chart at any time by clicking on the three-dot menu in the upper-right corner of the panel and selecting Edit.

![chart-builder-overview](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/creating-charts/create4.png#thumbnail-60)


Other possible actions from the three-dot menu of the panel include various download options, duplicating the chart, and deleting it. If the chart panel is accessed from the *Custom View* of the **Analyze** section, it can also be sized to small, medium, and large. Panels can be sized freely inside **Page Builder** by grabbing and dragging any corner of the panel.
Panel filters can be set up and edited from the filter icon on the panel.

</div>