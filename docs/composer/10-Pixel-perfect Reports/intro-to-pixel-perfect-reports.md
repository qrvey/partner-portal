---
id: intro-to-pixel-perfect-reports
title: Intro to Pixel-Perfect Reports
sidebar_label: Intro to Pixel-Perfect Reports
tags: [Data Analyst]
sidebar_position: 1
displayed_sidebar: getting-started
---

The Pixel-perfect Reports Builder enables you to build customizable report templates with precise control over the positioning and style of every element on the layout, down to the individual pixel.

This is important when the output must meet exact specifications, such as in audit reports, tax forms, regulatory documents, shipping labels, and more. This feature also provides rigorous controls for formatting PDF and print output. This feature also includes many of the same developmental features as Dashboards such as: Filters, Workflows, Formulas, and its own embeddable widget.
 
## The Editor

The editor provides a variety of tools for creating reports: including designing the layout, setting up datasets, and configuring settings. When creating fixed templates, the templates do not contain live data. The Preview or Export feature resolves the values, and the output displays with the complete data using as many pages as needed. 

The Toolbar at the top of the page provides a variety of components that you can add to the canvas. On the right side, there are several configuration panels that enable you to configure the report, including its components, datasets, and filters.  


![Pixel-perfect Editor](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-Overview-81.png#thumbnail-80)


The majority of the interface consists of the canvas, on which the report is designed. By default, reports have two headers, two footers, and a body. They are defined as follows:
- **Report Header**. The cover page or header that displays only on the first page of the report. 
- **Page Header**. The header that displays on all pages of the report. Note that the Page Header does not display on the cover or back cover, if applicable.  
- **Body**. The principal section of the report.
- **Page Footer**. The footer that displays on all pages of the report. Note that the Page Footer does not display on the cover or back cover, if applicable. 
- **Report Footer**. The back cover page or footer that displays only on the last page of the report. 


The Pixel-perfect Reports Builder enables you to build customizable report templates with precise control over the positioning and style of every element on the layout, down to the individual pixel. 


## Create a Report

> **Before You Begin:** Determine which Qrvey application will provide the data in the report. All reports are linked to Qrvey applications.  

<iframe src="//fast.wistia.net/embed/iframe/2ngcvwiy7c?videoFoam=true"
allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_embed"
name="wistia_embed" allowFullScreen  width="100%" height="600"></iframe>
<script src="//fast.wistia.net/assets/external/iframe-api-v1.js"></script>

1. Click the **Pixel-perfect Reports** icon on the left-side menu to open the Pixel-perfect Reports dashboard.
2. Click **Create New Report**. The Name Your Report dialog displays. 
3. On the Name Your Report dialog, enter a Name and Description in the fields provided. 
4. Click **Next**. The Page Setup dialog displays. 
5. On the Page Setup dialog, select the following options:
    - Paper Size
    - Units of Measure
    - Width
    - Height
   - Orientation
6. Click **Finish**. The new report displays in Edit mode. You may now begin designing your report. 

>**Note**: You can resize the height of the canvas of each report area (Report Header, Page Header, Body, etc.) by dragging their horizontal dividing lines.  

## Set Up Data and Parameters

The Data & Parameters panel enables you to set up the datasets used in your report. You can only select one dataset per report. You must create parameters before you can add them to a report. Parameters enable you to filter data and display information in the report. They are user-defined variables that are only available inside the report.

### Select a Dataset

1. Before you can create a parameter, you must select the dataset. On the right-side menu, click to display the **Data & Parameters** panel. 
    ![Pixel-perfect-reports-Data-tab-New-81](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-Data-tab-New-81.png#thumbnail-60)
2. Click **Select Dataset**. The Select Dataset dialog displays.
    The functionality to create a connection is the same as the [Connections](../05-Working%20with%20Data/connections.md). Once you’ve established the connection, the dataset columns display in the panel as Categories and Values. They are now available for use in the report.
    ![Pixel-perfect-reports-Data-tab-Supermarket-81](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-Data-tab-Supermarket-81.png#thumbnail-60)

### Create a Parameter

1. Display the **Parameters** tab of the Data & Parameters panel. 
    ![Pixel-perfect-reports-Parameters-tab-new-81](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-Parameters-tab-new-81.png#thumbnail-60)
2. Click **Add Parameter**. The New Parameter dialog displays. 
    ![Pixel-perfect-reports-New-Parameter-81](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-New-Parameter-81.png#thumbnail-60)
3. Complete the fields provided and click **Save**. For information on the properties, see the next section, *To edit a parameter*. 

### Edit a Parameter

1. Display the New Parameter or Edit Parameter dialog for the parameter. 
    ![Pixel-perfect-reports-Edit-Parameter-81](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-Edit-Parameter-81.png#thumbnail-60)
2. Enter the **Parameter Name** in the field provided. It must be unique, and it cannot use special characters.  
3. Enter helpful text in the **Parameter Label** field. This text displays in the parameter’s preview panel. 
4. In the **Data Type** dropdown, select **Numeric**, **Text**, or **Date Time**. 
5. Select whether the parameter is **Visible** or **Hidden**. If set to Visible, you will be prompted to provide a value when using the Preview feature. If set to Hidden, you will either need to define a default value or select **Allow Null Value**. 
6. To enable the parameter to accept an empty/null value, select **Allow Null Value**. 
7. To enable the parameter to accept an empty string as a value, select **Allow Blank Value**. This option is only available for Text parameters.  
8. To define a default value, select **Specify Default Value**. Enter the desired value in the Default Value field. 
9. Click **Save**. 


## Publish a Report

There are multiple ways to publish a report for use.

### Preview Report
The Preview feature enables you to see the report with actual data. It resolves all token values and applies all filters. Use it to verify your configurations. If you defined a Report Group, the report will be divided into separate tabs, one per each distinct value from the associated column. 

To preview the report, click the **Preview** button. If you included parameters in the report, the Parameters panel displays, prompting you to enter values for the parameters before the report can be displayed. 

The report displays in its final format. To return to edit mode, click **Edit**.  

>**Note**: Reports are currently limited to 200 pages and 1,000 tabs. 

### Download Report to PDF
Pixel-perfect Reports enables you to download completed reports in PDF format. If you defined a Report Group, the report is divided into separate tabs, one per each distinct value from the associated column. You can choose to download a PDF of only the current tab or a ZIP file containing PDFs of all the tabs in the report. 

>**Note**: To download reports, your user account must have the Exporting permission, which is configured in Qrvey Admin Center. For more information, see [Managing Users](../../admin/managing-users.md).

1. Click the **Preview** button to display the report with data resolved from the selected dataset column. 
    - If you included parameters in the report, the Parameters panel displays, prompting you to enter values for the parameters before the report can be displayed. 
2. To download the tab you are currently viewing, click the **Download** icon and select **Download Report to PDF**. The Download File dialog displays indicating that the file will be exported. 
3. If you defined a Report Group, you have the option to create PDFs of each tab (downloaded together in a single ZIP file). To download all tabs, click the **Download** icon and select **Download All Reports to PDF**. The Download File dialog displays indicating that the file will be exported. 
4. On the Download File dialog, select one of the following options:
    - Wait for processing to complete.  
    - Receive an email with a download link. The link expires in 7 days. 
5. Click **Download**.  

### Send Report via Email
The Send Email action in Workflows/Automation supports Pixel-perfect Reports. It currently supports one report per email action. Note that you can add other types of attachments (files, chart exports, and dashboard exports) to the same action. The email is sent to the address of the user ID in the widget or the logged in user. 

For more information, see the "Send an Email" section of [Send Actions](../09-Automation/send-actions.md). 

### Embed a Report
The Pixel-perfect Reports widget enables you to embed this feature into applications. For more information, see [Pixel-perfect Reports Widget](../../software-developer/04-Widgets/05-Widgets/pixel-perfect-reports.md). 


## Filter Data
Filters enable you to refine the data that is displayed in the reports. Filters in Pixel-perfect Reports are configured similar to Filters in Qrvey Composer. The only difference is that filters in Pixel-perfect Reports are not applied while the canvas is in Edit mode. The filters are applied when you preview a report. 

To create a filter, display the Filters panel and click **Add Filter**. 

![Filter Panel](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-Filter-Panel-81.png)

For more information on configuring filters, see [Introduction to Filters](../08-Filtering%20Data/overview-of-filters.md). 


## Bucket Data
Pixel-perfect Reports enables you to create buckets in your reports and add them to your report’s dataset. Buckets can improve the ability to analyze data by grouping multiple data points into a single item. The report must have an associated dataset in order to create a bucket. Once created, buckets are linked to the dataset in which they were created, and they are available in all reports using that same dataset.

To create a bucket, click the **Bucket** icon in the toolbar. 

![icon-composer-buckets](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/icon-composer-buckets.png)

For more information on creating buckets, see [Bucketing Data](../05-Working%20with%20Data/Datasets/03-Analyze/buckets.md). 


## Formulas 

Pixel-Perfect Reports support the use of [formulas](../05-Working%20with%20Data/Datasets/03-Analyze/10-Formula%20Builder/overview-of-formula-builder.md) to manipulate data from the report’s dataset. 

1. To create a formula, click the **Formula** icon in the toolbar.

