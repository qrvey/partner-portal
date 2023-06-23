---
id: chart-builder-overview
title: Overview of Chart Builder
sidebar_label: Overview of Chart Builder
---

<div style={{textAlign: "justify"}}>

Chart Builder is the tool that is used for creating charts and metrics based on the data. As you work within the Chart Builder and make changes to your selections, you can see results instantaneously, which allows you to discover new insights about your data.
 
The various areas and panels of the Chart Builder are introduced in the following image:
 
![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/overview1.png#thumbnail)
 
 
1. <strong>Data Panel</strong> - Data fields from the selected dataset are listed in this panel and can be dragged and dropped in various areas of the screen to be analyzed. The data fields are divided into Categories and Values and their data type is presented with an icon next to each.
 
2. <strong>Column Shelf</strong> - You can drag and drop data columns that you want to analyze to the fields in this shelf. The number of fields in the shelf and their expected data types vary from chart to chart. Each column pill offers additional options for the field in it, like changing its data format, aggregation, sorting, etc.
 
3. <strong>Toolbar</strong> - a quick way to add <a href="" target="_blank">buckets</a>, <a href="" target="_blank">formulas</a>, <a href="" target="_blank">filters</a>, change the color of the visualization, and save your work, among other quick actions.
 
4. <strong>Configuration Panel</strong>- this panel consists of two major sections: The Charts panel, where you can choose the type of chart you’ll be using, and the Chart Configuration section, from where you can apply different settings to <a href="" target="_blank">configure your chart</a>.
 
5. <strong>Canvas</strong>- the area where your chart will appear and where you can add/change the name and description of the chart.
 
## Where to Find the Chart Builder
You can find Chart Builder in the <strong>Analyze</strong> section of your dataset or in <strong>Dashboard Builder</strong>.
 
### The Analyze Section
Access Chart Builder directly from your dataset navigation bar by clicking <strong>Analyze</strong> and choosing either <strong>Metric</strong> or <strong>Custom View</strong> and then clicking on the orange <strong>Add Metrics / Add Chart</strong> button.
 
![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/overview2.gif#thumbnail)
 
 
### Dashboard Builder
To open Chart Builder from <strong>Dashboard Builder</strong>, click on the <strong>Add Chart</strong> button in the toolbar.
 
![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/overview3.gif#thumbnail)
 
 
When you access Chart Builder from Dashboard Builder, you must first select the dataset you’ll be working with. Keep in mind that you can only choose one dataset from the list of the datasets you have created. 
 
![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/overview4.png#thumbnail)
 
## The Anatomy of The Data Panel
Data Panel is located on the left-hand side of the Chart Builder and is where the data for the chart is picked from.
 
![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/panel.jpg#thumbnail-60)
 
1. <strong>Dataset name</strong> - the name of the dataset you are currently using. Read more about creating Datasets <a href="" target="_blank">here</a>.
  
2. <strong>Categories</strong> - Categories are text and date type columns that can be used as dimensions that allow you to slice and group your data. They contain categorical information like *sales region, department name, order date*, etc.
 
3. <strong>Values</strong> - Values are numeric columns that can be used as measures most of the time. Value columns can be used as they are, or be aggregated. Examples of aggregated values are *average price per product and total sales revenue*.
 
Creators can use a shortcut for accessing the data pages directly from the Chart Builder by clicking on the dataset shortcut in the Data Panel. This lunk appears upon hovering over the dataset name.
![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/overview6.png#thumbnail-60)
 
## The Anatomy of a Column Pill
Column Pills represent the dataset fields that appear either under <strong>Category</strong> or <strong>Value</strong> in the Data Panel. These column pills can be dragged from the Data Panel and dropped either onto corresponding shelves or directly onto the canvas to its corresponding axis. The values appear in blue (<strong>Category</strong>) or green (<strong>Values</strong>), regardless of the shelf or axis they’re dropped onto.
 
*Text values* are always considered as <strong>Category</strong> values - although in some cases they may not be good candidates for grouping.
 
![chart-builder](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/overview7.png#thumbnail)
 
1. The drag handle - a six-dot icon you can use to “grab and drag” the pill anywhere in the Chart Builder.
2. The name of the dataset field alongside a symbol that represents its data type:
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>  a) Text <img alt="add" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/text.png" width="8%"/><br/></li>
<li>  b) Numeric <img alt="add" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/numeric.png" width="8%"/><br/></li>
<li>  c) Date <img alt="add" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/date.png" width="8%"/><br/></li></ul>
 
3. The aggregation that has been applied to the value.
4. The sorting direction that has been applied to the value.
5. The three-dot menu where you can manage features like <a href="" target="_blank">Aggregations</a> and <a href="" target="_blank">Table Calculations</a> or Remove the value from both the shelf and the chart – the content of the three-dot menu depends on the type of the value (Category or Value), and the type of chart you have chosen.
 
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li><strong>a) Category</strong></li></ul>
<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li><strong>i. Text values:</strong></li></ul>
<ul style={{listStyle: 'none', marginLeft: '35px'}}>
<li> - Sort ascending</li>
<li> - Sort descending</li>
<li> - Remove</li></ul>
 
<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li><strong>ii. Numeric values:</strong></li></ul>
<ul style={{listStyle: 'none', marginLeft: '35px'}}>
<li> - Sorting (Ascending, Descending)</li>
<li> - Discrete</li>
<li> - Continuous</li>
<li> - Remove</li></ul>
 
<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li><strong>iii. Date:</strong></li></ul>
<ul style={{listStyle: 'none', marginLeft: '35px'}}>
<li> - Sorting (Ascending, Descending)</li>
<li> - Date group (Year; Quarter, Year; Month, Year; Week, Year; Full Date; Quarter; Month; Day, Month)</li>
<li> - Discrete</li>
<li> - Continuous</li>
<li> - Remove</li></ul>
 
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li><strong>b) Value</strong></li></ul>
<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li><strong>i. Text values:</strong></li></ul>
<ul style={{listStyle: 'none', marginLeft: '35px'}}>
<li> - Sorting (Ascending, Descending)</li>
<li> - Aggregation (Count, Distinct count)</li>
<li> - Values format (Default, Abbreviated, Decimals, Currency, Percentage, Scientific)</li></ul>
 
 
<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li><strong>ii. Numeric values:</strong></li></ul>
<ul style={{listStyle: 'none', marginLeft: '35px'}}>
<li> - Sorting (Ascending, Descending)</li>
<li> - Aggregation (Sum, Average, Median, Count, Distinct Count, Minimum, Maximum)</li>
<li> - Table Calculations (Running Average, Running Sum, Running Min, Running Max, Difference, %difference)</li>
<li>Values Format (Abbreviated, Decimals, Currency, Percentage, Scientific) </li>
<li> - Remove</li></ul>
 
 
<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li><strong>iii. Date:</strong></li></ul>
<ul style={{listStyle: 'none', marginLeft: '35px'}}>
<li> - Sorting (Ascending, Descending)</li>
<li> - Aggregation (Count, Distinct Count)</li>
<li> - Values Format (Abbreviated, Decimals, Currency, Percentage, Scientific)</li>
<li> - Remove</li></ul>
 
 
We recommend watching this video on <a href="https://partners.qrvey.com/docs/video-training/building-qrvey-sample/chart-builder">Chart Builder</a>.
 
 
</div>

