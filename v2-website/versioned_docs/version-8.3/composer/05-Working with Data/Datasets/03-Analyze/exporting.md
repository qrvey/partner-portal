---
id: exporting-data
title: Exporting Data
sidebar_label: Exporting Data
tags: [Data Analyst]
sidebar_position: 4
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

Qrvey supports exporting charts, tables, dashboards, and reports to print-friendly formats such as PDF, as well as data dumps to CSV for further analysis in other tools such as Excel. 

Users can export the entire dashboard with all the panels or simply choose a single panel and download only that one. Depending on the chosen format and the context, exports can be of the data (CSV, CSV Summary, and PDF options) or the design / visual layout (JPG, PDF).

Data can be exported from the end-user view, either from a published or embedded page, or any of the following Qrvey Composer UIs:
* Dataset Analyze view
* Dashboard Builder
* Individual Chart panels on any of those three 
* Summary panels on any of those
* Workflows: Send Email Action

The available export formats are:
* **CSV** - For data export
* **CSV Summary** - For data export 
* **JPG** - For visual layout export
* **PDF** - For visual layout export, as well as data export in the case of table charts

The availability and the behavior of these export options depend on the context in which they are used and are captured in the following matrix.


| **Context \ Format** | **CSV** | **CSV Summary** | **JPG** | **PDF*** |
| --- | --- | --- | --- | --- |
Dataset Analyze > Tabular view | yes | no | no |no |
Dataset Analyze > Other views | yes | no | yes | yes |
Dashboard Builder | yes | no | no | yes |
Published / Embedded Page | yes | no | no | yes |
Chart panel | yes | yes**| yes | yes |
Summary Panel | yes | no | yes| yes |
Workflow > Email attachment | no | no | no | yes |


*PDF export comes in two flavors: Layout Export and Data Export. The latter applies to table charts only and everything else is exported in the layout mode. See the <a href="#pdf-export">PDF Export</a> section for more on this.

**CSV Summary is available for most charts and it exports the aggregated data, as it appears in the chart. See the <a href="#csv-summary-export">CSV Summary Export</a> section for more on this. 

When exporting charts, if for example you add a filter and there isn’t any data found meeting the parameters you had set, you’ll see a message in your PDF and CSV exports informing you that there weren’t any records to export.


>**Note 1**: It is recommended that you wait for all visuals to fully render before attempting to export them. This is required in order to get a reliable export.  

> **Note 2**: All exports take some time to complete. This time depends on the size of the data and the complexity of the exported content. The product notifies the user of this and gives them the option to continue work while the download completes in the background.

>**Note 3**: If any “Max” limits (Max Data Points, Max records, Max columns, Max rows, Max slices and Max groups) have been applied to the chart, those limits apply to the exported data, also.

## Overriding the Max Data Points setting

When exporting charts, you can configure the Qrvey platform to override the value set in the Max Data Points field and always export all data. This override is configured using the Backend API. It affects the CSV, CSV Summary, Excel, and PDF export features. 

To determine whether the Max Data Points field has been overridden, use the [Get General Settings API](https://qrvey.stoplight.io/docs/qrvey-api-doc/6addb9e3c599e-get-general-settings) and note the `maxDataPointExport` parameter. If value is set to `0`, all exports use the Max Data Point value set in charts. If value is set to `-1`, the export feature ignores the Max Data Point configuration and exports all data.

To change the override setting, use the [Update General Settings API](https://qrvey.stoplight.io/docs/qrvey-api-doc/1757128781684-update-general-settings) and provide the desired value in the `maxDataPointExport` parameter. Set the value to `0` to use the Max Data Point value set in the chart. Set the value to `-1` to ignore the value set in the chart and export all data. 


## CSV Export
CSV is a data export option. The option to export data in CSV format is available in various contexts and can be used to download files containing the “data behind the visual or visuals in that context”. CSV export is not available as email attachment in workflows, at this time.


### From the Dataset Analyze Views
Here, this feature can be found under the download icon in the top right corner of the page.

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export1.png#thumbnail-60)

In this context, we are working with all of the data from a single dataset: the one that we are analyzing. Hence, the CSV export will be a single file that contains the entire dataset, with the same sorting and filters that have been applied to it in this view.

### From the Dashboard Builder
Here, the feature can be found under a similar icon in the toolbar.


![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export2.png#thumbnail-60)

In this context, we may be working with multiple datasets, and not every column of these datasets may be used in the charts on the dashboard or report. 
When multiple datasets are being used in a dashboard or report, we will export separate CSVs for each dataset which will contain only the columns that are being used in the charts (not the entire dataset). 

In the following example, the dashboard contains three charts: **MSRP** and **Order By Quarter** are based on the **Orders - Joined dataset** and **Customers** is based on the **Customers** dataset. Furthermore, **orderDate** of the **Orders - Joined dataset** has been filtered to only include the year 2018. 

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/visualization.png#thumbnail)

When this dashboard is exported to CSV format there will be two files that are packaged in zip format: One file will contain the three columns of **Orders - Joined dataset** that are used in the **MSRP** (one column) and **Order By Quarter**(two columns) visualizations, filtered to only include 2018 data, and the other will contain three columns of the Customers dataset that are present in the visualization by the same name.


![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export4.png#thumbnail-60)

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export5.png#thumbnail-60)

When you choose the CSV format, the following status appears next to the Publish Application button: 


![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export6.png#thumbnail-40)

When the exporting is done, you’ll see the following message:


![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export7.png#thumbnail-40)

> **Note 1**: The data downloaded is the “raw” data behind the visualizations and not aggregated in the same way that it appears in the visualizations. For aggregated data, use the <a href="#csv-summary-export">CSV Summary export</a>.

>**Note 2**: If there are multiple pages, each page has to be downloaded individually, but if there are multiple tabs on a page, data for all tabs is downloaded at the same time, as if the content of all tabs were on one of the tabs.

### From the Published Page Or Embedded Dashboard View Widget
The CSV download option can be found from a similar icon that appears upon clicking on the three-dot menu on the lower right corner of the dashboard.

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export8.png#thumbnail-40)

The behavior of CSV download is exactly the same as in the Page and Report Builder. However, to prevent end-users from having to wait until their browser completes the export request, the user is given the option to have the file emailed to them. If authentication has not been set up, the end user is asked to provide their email address.

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export9.png#thumbnail-60)

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export10.png#thumbnail-60)

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export11.png#thumbnail-60)

### From the Chart, Metric, and Summary Panels
In the upper-right corner of each panel inside Summary, Custom, and Metric views, as well as the panels that have been placed on a dashboard or report, you’ll also find a download option for the individual panel/visualization. 
The CSV export option for panels only includes the raw data (unaggregated) for the columns that are used in the chart. As a result, CSV export of summary panels will contain only the one column that is summarized in the summary chart.

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export12.png#thumbnail-60)

## CSV Summary Export
CSV Summary is another data export option that is only available for chart panels in Custom and Metric views, as well as chart panels that have been placed on a dashboard or report. This option is fairly similar to the CSV export, in that it only includes the columns that have been used in the chart, but the data is reflected in its aggregated form in the same way that it has been aggregated for the chart. For example, while the CSV export of the **Order By Quarter** chart in our example contains the raw underlying data for the columns, the CSV Summary export for the same chart contains the same two columns, but **Total Order** is aggregated, just as it is in the chart.


![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export13.png#thumbnail-60)

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export14.png#thumbnail-60)

## JPG Export
JPG is a layout export option. The JPG export option is available from the chart and summary panels, as well as all of the Dataset Analyze views other than the Tabular view. 
Being a design or layout export option, the exported visuals will be downloaded as they appear at the time of export and may include scroll bars or show only the part of the charts that are visible within the panels. The best way to describe this feature is that the JPG export looks exactly like a screenshot of the visual. 

The following image shows the JPG export results of the Customers dataset’s Summary view. As observed in the image, the dataset contains 122 records, but only the first 13 are shown in the Country panel.

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/visualization2.png#thumbnail) 

## PDF Export
PDF export is mainly a layout export option and produces results that look a lot like the JPG export, but are in PDF format. The feature that sets PDF export apart from other formats is its different behavior when it comes to exporting tables: In this case, all of the data for the table is exported, much like a CSV export, but in PDF format.

>**Note 1**: The same table, when exported as part of a dashboard or report, is exported in the layout mode and is part of the image of the dashboard or report. The full data mode only works when exporting the table from the chart panel.

>**Note 2**: There is a 30,000-row limit on the table data export.

>**Note 3**: PDF export is not available in the Tabular view from the Dataset Analyze tabs, but can be found in the same menu as the other exports everywhere download is possible.

## Export and Workflows
As explained in the [Actions - Send](../../../09-Automation/send-actions.md) article, dashboards, reports, and individual table charts on dashboards can be exported automatically and the results can be attached and sent to the selected recipients with the **Send Email** action. 

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export16.png#thumbnail-40)

It is important to note the following points:
* All of these exports are in PDF format. 
* Dashboards and reports are exported in PDF layout and charts in PDF data mode.
* Any number of reports can be attached, but they have to be selected individually.
![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export17.png#thumbnail-40)

* Any number of dashboards can be attached by selecting them from a checkbox list. Select All is also available.
![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export18.png#thumbnail-40)

* When selecting charts to attach to an email, only table charts are listed in a checkbox list under each used dataset that has such a chart. Any number of these charts can be selected. Select All is also available.
![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export19.png#thumbnail-40)

* All chart exports adhere to their applied filters and other configuration settings.
* Additional filters can be applied to charts, dashboards, and reports from the workflow.
![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export20.png#thumbnail-60)

</div>








