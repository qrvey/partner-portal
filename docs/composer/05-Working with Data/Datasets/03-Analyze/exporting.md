---
id: exporting-data
title: Exporting Data
sidebar_label: Exporting Data
tags: [Data Analyst]
sidebar_position: 4
displayed_sidebar: getting-started
---

Qrvey supports exporting charts, tables, dashboards, and reports to print-friendly formats for further analysis in tools like Excel. Users can export an entire dashboard with all its panels or simply choose a single panel. Download Manager provides a central location to access and manage exported files. For more information, see [Download Manager](../../../download-manager.md).


## Export Formats

The following export formats are available in the following UIs.

| **Context / Format** | **CSV** | **CSV Summary** | **JPG** | **PDF*** |
| --- | --- | --- | --- | --- |
| Dataset Analyze > Tabular View | yes | no | no | no |
| Dataset Analyze > Other Views | yes | no | yes | yes |
| Dashboard Builder | yes | no | no | yes |
| Published / Embedded Page | yes | no | no | yes |
| Chart Panel | yes | yes**| yes | yes |
| Summary Panel | yes | no | yes| yes |
| Workflow > Email Attachment | no | no | no | yes |

*PDF export comes in two flavors: Layout Export and Data Export. The latter applies to table charts only and everything else is exported in the layout mode. See the <a href="#pdf-export">PDF Export</a> section for more on this.

**CSV Summary is available for most charts and it exports the aggregated data, as it appears in the chart. See the <a href="#csv-summary-export">CSV Summary Export</a> section for more on this.

<!-- When exporting charts, if for example you add a filter and there isn’t any data found meeting the parameters you had set, you’ll see a message in your PDF and CSV exports informing you that there weren’t any records to export. -->

> **Note 1:** All export types take time to complete. And depends on the size of the data and the complexity of the exported content. The product notifies the user of this and gives them the option to continue work while the download completes in the background.

> **Note 2:** If any “Max” limits (Max Data Points, Max records, Max columns, Max rows, Max slices and Max groups) have been applied to the chart, those limits apply to the exported data as well.

## Customize Max Data Points

When exporting charts, you can configure the Qrvey platform to customize the value set in the Max Data Points field and always export all data. This is configured using the Backend API. It affects the CSV, CSV Summary, Excel, and PDF export features. 

To **determine whether the Max Data Points field has been overridden**, use the [Get General Settings API](https://qrvey.stoplight.io/docs/qrvey-api-doc/6addb9e3c599e-get-general-settings) and check the `maxDataPointExport` parameter.
- If value is set to `0`, all exports use the Max Data Point value set in charts.
- If value is set to `-1`, the export feature ignores the Max Data Point configuration and exports all data.

To **change the override setting**, use the [Update General Settings API](https://qrvey.stoplight.io/docs/qrvey-api-doc/1757128781684-update-general-settings) and provide the desired value in the `maxDataPointExport` parameter.
-  Set the value to `0` to use the Max Data Point value set in the chart.
-  Set the value to `-1` to ignore the value set in the chart and export all data.

## CSV Export

The option to export data in CSV format is available in various contexts and can be used to download files containing the “data behind the visual or visuals in that context”.

### From the Dataset Analyze Views

This feature can be found under the download icon in the top right corner of the page.

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

### From the Published Page Or Embedded Dashboard View Widget

The CSV download option can be found from a similar icon that appears upon clicking on the three-dot menu on the lower right corner of the dashboard.

![data_export](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/export8.png#thumbnail-40)

You can also use the Schedule Exports feature to automatically produce exports at specified intervals and send them to an email address. For more information, see [Scheduling Exports](./scheduling-exports.md).

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

## Scheduling Exports

You can use the [Scheduling Exports](./scheduling-exports.md) feature to automatically produce exports at specified intervals and send them to an email address.


## Pivot Exported Data

You can pivot any [Managed Data Set](../01-Overview%20of%20Datasets/managed-datasets.md) for export.

1. Navigate to **Data > [Dataset] > Design Tab > Advanced Settings**.
2. Under "Pivoting for Analysis", click **Configure Pivoting**. A modal will appear.
3. Configure your pivot table as desired:
    - **Pivot Column** — Choose the field whose unique values become columns in the pivot table.  
        *For example, if you have a dataset with a column called "Month," using it as a pivot column will create separate columns for each month (e.g., January, February, March).*
    - **Pivot Value** — Define the data or metrics that get aggregated (e.g., summed, averaged, counted) in the cells of the pivot table. It represents what you want to measure or calculate for each combination of the row and column data.  
        *For example, if you want to see total sales by month, "Sales" would be the pivot value, and you might use a sum function to add up the sales for each month.*
    - **Row Key Columns** — Choose fields whose unique values become the rows of the pivot table. This is what you categorize or group the data by in rows.  
        *For example, if you have a column called "Region" and use it as the row key column, each region (e.g., North, South, East, West) will become a row in the pivot table.*
    - **Pivot Label** — Optional. Assign a label for the pivot table.
4. Click **Save** to confirm. The modal will close.
5. Under "Pivoting for Analysis", click the **Enable** radio button.
6. Click **Apply Changes** in the top right tool bar area.
7. Next, navigate into the **Dashboard** module then open any dashboard.
8. Click **Download** in the dashboard toolbar area. A dropdown menu will appear.
9. Select **Dataset**. A modal will appear.
10. Under **Dataset**, choose a desired dataset that has been configured for pivoting.
11. Then, a radio toggle **Pivoting: Yes / No** will appear within the modal. Click **Yes**.
12. Configure all other fields as desired.
13. Click **Export Now** to process and download your pivoted dataset.