---
id: exporting
title: Exporting Data
sidebar_label: Exporting Data
---

<div style={{textAlign: "justify"}}>

Qrvey supports exporting charts, tables, pages and reports to print-friendly formats such as PDF, as well as data dumps to CSV for further analysis in other tools such as Excel. 

Users can export the entire page with all the panels or simply choose a single panel and download only that one. Depending on the chosen format and the context, exports can be of the data (CSV, CSV Summary, and PDF options) or the design / visual layout (JPG, PDF).

Data can be exported from the end-user view, either from a published or embedded page, or any of the following Qrvey Composer UIs:
* Dataset Analyze view
* Report Builder
* Page Builder
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
Report Builder | yes | no | no | yes |
Page Builder | yes | no | no | yes |
Published / Embedded Page | yes | no | no | yes |
Chart panel | yes | yes**| yes | yes |
Summary Panel | yes | no | yes| yes |
Workflow > Email attachment | no | no | no | yes |


*PDF export comes in two flavors: Layout Export and Data Export. The latter applies to table charts only and everything else is exported in the layout mode. See the <a href="#pdf-export">PDF Export</a> section for more on this.

**CSV Summary is available for most charts and it exports the aggregated data, as it appears in the chart. See the <a href="#csv-summary-export">CSV Summary Export</a> section for more on this. 

> **Note 1**: It is recommended that you wait for all visuals to fully render before attempting to export them. This is required in order to get a reliable export. 

> **Note 2**: All exports take some time to complete. This time depends on the size of the data and the complexity of the exported content. The product notifies the user of this and gives them the option to continue work while the download completes in the background.

## CSV Export
CSV is a data export option. The option to export data in CSV format is available in various contexts and can be used to download files containing the “data behind the visual or visuals in that context”. CSV export is not available as email attachment in workflows, at this time.

> **Note**: There is a 20,000-row limit on CSV export.

### From the Dataset Analyze Views
Here, this feature can be found under the download icon in the top right corner of the page.

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export1.png#thumbnail-60)

In this context, we are working with all of the data from a single dataset: the one that we are analyzing. Hence, the CSV export will be a single file that contains the entire dataset, with the same sorting and filters that have been applied to it in this view.

### From the Page and Report Builder
Here, the feature can be found under a similar icon in the toolbar.


![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export2.png#thumbnail-60)

In this context, we may be working with multiple datasets, and not every column of these datasets may be used in the charts on the page or report. 
When multiple datasets are being used in a page or report, we will export separate CSVs for each dataset which will contain only the columns that are being used in the charts (not the entire dataset). 

In the following example, the page contains three charts: **MSRP** and **Order By Quarter** are based on the **Orders - Joined dataset** and **Customers** is based on the **Customers** dataset. Furthermore, **orderDate** of the **Orders - Joined dataset** has been filtered to only include the year 2018. 

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export3.png#thumbnail)

When this page is exported to CSV format there will be two files that are packaged in zip format: One file will contain the three columns of **Orders - Joined dataset** that are used in the **MSRP** (one column) and **Order By Quarter**(two columns) visualizations, filtered to only include 2018 data, and the other will contain three columns of the Customers dataset that are present in the visualization by the same name.


![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export4.png#thumbnail-60)

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export5.png#thumbnail-60)

When you choose the CSV format, the following status appears next to the Publish Application button: 


![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export6.png#thumbnail-40)

When the exporting is done, you’ll see the following message:


![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export7.png#thumbnail-40)

> **Note 1**: The data downloaded is the “raw” data behind the visualizations and not aggregated in the same way that it appears in the visualizations. For aggregated data, use the <a href="#csv-summary-export">CSV Summary export</a>.

>**Note 2**: If there are multiple pages, each page has to be downloaded individually, but if there are multiple tabs on a page, data for all tabs is downloaded at the same time, as if the content of all tabs were on one of the tabs.

### From the Published Page Or Embedded Page View Widget
The CSV download option can be found from a similar icon that appears upon clicking on the three-dot menu on the lower right corner of the page.

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export8.png#thumbnail-40)

The behavior of CSV download is exactly the same as in the Page and Report Builder. However, to prevent end-users from having to wait until their browser completes the export request, the user is given the option to have the file emailed to them. If authentication has not been set up, the end user is asked to provide their email address.

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export9.png#thumbnail-60)

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export10.png#thumbnail-60)

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export11.png#thumbnail-60)

### From the Chart, Metric, and Summary Panels
In the upper-right corner of each panel inside Summary, Custom, and Metric views, as well as the panels that have been placed on a page or report, you’ll also find a download option for the individual panel/visualization. 
The CSV export option for panels only includes the raw data (unaggregated) for the columns that are used in the chart. As a result, CSV export of summary panels will contain only the one column that is summarized in the summary chart.

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export12.png#thumbnail-60)

## CSV Summary Export
CSV Summary is another data export option that is only available for chart panels in Custom and Metric views, as well as chart panels that have been placed on a page or report. This option is fairly similar to the CSV export, in that it only includes the columns that have been used in the chart, but the data is reflected in its aggregated form in the same way that it has been aggregated for the chart. For example, while the CSV export of the **Order By Quarter** chart in our example contains the raw underlying data for the columns, the CSV Summary export for the same chart contains the same two columns, but **Total Order** is aggregated, just as it is in the chart.


![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export13.png#thumbnail-60)

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export14.png#thumbnail-60)

## JPG Export
JPG is a layout export option. The JPG export option is available from the chart and summary panels, as well as all of the Dataset Analyze views other than the Tabular view. 
Being a design or layout export option, the exported visuals will be downloaded as they appear at the time of export and may include scroll bars or show only the part of the charts that are visible within the panels. The best way to describe this feature is that the JPG export looks exactly like a screenshot of the visual. 

The following image shows the JPG export results of the Customers dataset’s Summary view. As observed in the image, the dataset contains 122 records, but only the first 13 are shown in the Country panel.

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export15.png#thumbnail)

## PDF Export
PDF export is mainly a layout export option and produces results that look a lot like the JPG export, but are in PDF format. The feature that sets PDF export apart from other formats is its different behavior when it comes to exporting simple (ungrouped) tables: In this case, all of the data for the table is exported, much like a CSV export, but in PDF format.

>**Note 1**: The same table, when exported as part of a page or report, is exported in the layout mode and is part of the image of the page or report. The full data mode only works when exporting the table from the chart panel.

>**Note 2**: There is a 30,000-row limit on the table data export.

>**Note 3**: PDF export is not available in the Tabular view from the Dataset Analyze tabs, but can be found in the same menu as the other exports everywhere download is possible.

## Export and Workflows
As explained in the <a href="/docs/ui-docs/automation/send-actions#send-an-email">workflow articles</a>, pages, reports, and individual table charts on pages can be exported automatically and the results can be attached and sent to the selected recipients with the **Send Email** action. 

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export16.png#thumbnail-40)

It is important to note the following points:
* All of these exports are in PDF format. 
* Pages and reports are exported in PDF layout and charts in PDF data mode.
* At this time only table charts are supported as individual chart exports.
* Any number of reports can be attached, but they have to be selected individually.
![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export17.png#thumbnail-40)

* Any number of pages can be attached by selecting them from a checkbox list. Select All is also available.
![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export18.png#thumbnail-40)

* When selecting charts to attach to an email, only simple (ungrouped) table charts are listed in a checkbox list under each used dataset that has such a chart. Any number of these charts can be selected. Select All is also available.
![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export19.png#thumbnail-40)

* All chart exports adhere to their applied filters and other configuration settings.
* Additional filters can be applied to charts, pages and reports from the workflow.
![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export20.png#thumbnail-60)










































1111111111111111111111111111111111111111111111111111111111

You can export data and visualizations from the analyze tab of your dataset. 

## Complete Datasets / Views

In the upper-right corner of the **Analyze** tab, you’ll find the download link to export your complete or filtered dataset in CSV format, or the complete **Summary**, **Custom** or **Metric** view in either JPG or PDF formats. 

> **Note**: For larger datasets, it may take up to a few minutes for your CSV download to  generate.

![1_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/1_exporting.png#thumbnail-80)

## Individual Panels / Visualizations
In the upper-right corner of each panel inside Summary, Custom and Metric views, you’ll also find a download option for each individual panel/visualization. Just as with the complete dataset download, you have options of JPG and PDF formats for visualizations, and CSV format for the underlying data. 

![2_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/2_exporting.png#thumbnail-80)


## Page and Report Builder
In the top bar you will find CSV and PDF download options in Page Builder (for each page) and in Report Builder (for the entire report).

**CSV Exports**: when there are multiple datasets being used in a page or report, we will export separate CSVs for each dataset which will contain only the columns that are being used in the charts (<u>not</u> the entire dataset). 

**PDF Exports**: you can download a page design to a PDF file directly from the Report Builder, Page Builder and Page View (End User). These exports include: Page Headers, Interactive and Panel Filters, Filter Objects with filtered values, and applied Drilldowns.


![exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/by_country.png#thumbnail)

![exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/ex_download.png#thumbnail-20)


## Chart Data
Each chart has an option to download to JPG, PDF, CSV formats. When downloading CSVs, we will only export the underlying columns that were used to create this chart. 


When exporting a Chart that was built using Data Links, we will export separate CSVs for each dataset that is linked even if it is only 1 chart. 
![4_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/4_exporting.png#thumbnail)

## End User Exports
There are cases where the underlying data that is being exported is very large and the download of a CSV or PDF file can take some time. In order to not keep end-users waiting around for their export to finalize, we will send an email in case of larger files. If you’ve set up authentication on your application, we will send the export to the user’s assigned email. When there is no authentication, we will ask the end user to provide their email address and send the file to their email once the exporting process has been done.


![5_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/5_exporting.png#thumbnail)

![6_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/6_exporting.png#thumbnail)

![7_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/7_exporting.png#thumbnail)

## CSV Summary Exports
You can download CSVs with aggregated data versus your raw data. To download CSVs with aggregated data, just go to the three-dot menu located in your custom visualizations and find the Download menu option and select the CSV-Summary. 

The feature is currently supported for most simple Bar, Line, Symbol, Pie, Word Cloud, Tables, and Crosstab. 

![8_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/8_exporting.gif#thumbnail)

Note: Crosstab CSV Summary downloads are currently supported with the following restrictions:
* 1 Row (with up to 1000 groups)
* 1+ Columns  (with up to 1000 groups)
* 1+ Values (with up to 1000 groups)
* Without subtotals
* Without  totals

</div>
