---
id: exporting
title: Exporting Data
sidebar_label: Exporting Data
---
<div style={{textAlign: "justify"}}>

You can export data and visualizations from the analyze tab of your dataset. 

## Complete Datasets / Views

In the upper-right corner of the **Analyze** tab, you’ll find the download link to export your complete or filtered dataset in CSV format, or the complete **Summary**, **Custom** or **Metric** view in either JPG or PDF formats. 

&gt; **Note**: For larger datasets, it may take up to a few minutes for your CSV download to  generate.

![1_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/1_exporting.png#thumbnail-80)

## Individual Panels / Visualizations

In the upper-right corner of each panel inside Summary, Custom and Metric views, you’ll also find a download option for each individual panel/visualization. Just as with the complete dataset download, you have options of JPG and PDF formats for visualizations, and CSV format for the underlying data. 

![2_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/2_exporting.png#thumbnail-80)

## Page and Report Builder

In the top bar you will find CSV download options in Page Builder (for each page) and in Report Builder (for the entire report). When there are multiple datasets being used in a page or report, we will export separate CSVs for each dataset which will contain only the columns that are being used in the charts (not the entire dataset).

![3_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/3_exporting.png#thumbnail)

## Chart Data

Each chart has an option to download to JPG, PDF, CSV formats. When downloading CSVs, we will only export the underlying columns that were used to create this chart. 

When exporting a Chart that was built using Data Links, we will export separate CSVs for each dataset that is linked even if it is only 1 chart. 
![4_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/4_exporting.png#thumbnail)

## End User Exports

There are cases where the underlying data that is being exported is very large and the download of a CSV or PDF file can take some time. In order to not keep end-users waiting around for their export to finalize, we will send an email in case of larger files. If you’ve set up authentication on your application, we will send the export to the user’s assigned email. When there is no authentication, we will ask the end-user to provide their email address and send the file to their email once the exporting process has been done.

![5_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/5_exporting.png#thumbnail)

![6_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/6_exporting.png#thumbnail)

![7_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/7_exporting.png#thumbnail)

## CSV Summary Exports

You can download CSVs with aggregated data versus your raw data. To download CSVs with aggregated data, just go to the three-dot menu located in your custom visualizations and find the Download menu option and select the CSV-Summary. 

The feature is currently supported for most simple Bar, Line, Symbol, Pie, Word Cloud, and Tables. 

![8_exporting](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.4_exporting/8_exporting.gif#thumbnail)
</div>