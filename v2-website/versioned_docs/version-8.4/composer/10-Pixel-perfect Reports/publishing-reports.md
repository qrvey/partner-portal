---
id: publishing-reports
title: Publishing Reports
sidebar_label: Publishing Reports
tags: [Data Analyst]
sidebar_position: 9
displayed_sidebar: data-analyst
---
<div style={{textAlign: "justify"}}>

This article describes the various option for publishing reports created in Pixel-perfect Reports.

## Preview the report
The Preview feature enables you to see the report with actual data. It resolves all token values and applies all filters. Use it to verify your configurations. If you defined a Report Group, the report will be divided into separate tabs, one per each distinct value from the associated column. 

To preview the report, click the **Preview** button. If you included parameters in the report, the Parameters panel displays, prompting you to enter values for the parameters before the report can be displayed. 

The report displays in its final format. To return to edit mode, click **Edit**.  

>**Note**: Reports are currently limited to 200 pages and 1,000 tabs. 

## Download reports to PDF
Pixel-perfect Reports enables you to download completed reports in PDF format. If you defined a Report Group, the report is divided into separate tabs, one per each distinct value from the associated column. You can choose to download a PDF of only the current tab or a ZIP file containing PDFs of all the tabs in the report. 

>**Note**: To download reports, your user account must have the Exporting permission, which is configured in Qrvey Admin Center. For more information, see [Managing Users](../../admin/managing-users.md).

### To download a PDF
1. Click the **Preview** button to display the report with data resolved from the selected dataset column. 
    - If you included parameters in the report, the Parameters panel displays, prompting you to enter values for the parameters before the report can be displayed. 

2. To download the tab you are currently viewing, click the **Download** icon and select **Download Report to PDF**. The Download File dialog displays indicating that the file will be exported. 

3. If you defined a Report Group, you have the option to create PDFs of each tab (downloaded together in a single ZIP file). To download all tabs, click the **Download** icon and select **Download All Reports to PDF**. The Download File dialog displays indicating that the file will be exported. 

4. On the Download File dialog, select one of the following options:
    - Wait for processing to complete.  
    - Receive an email with a download link. The link expires in 7 days. 

5. Click **Download**.  


## Send reports via email
The Send Email action in Workflows/Automation supports Pixel-perfect Reports. It currently supports one report per email action. Note that you can add other types of attachments (files, chart exports, and dashboard exports) to the same action. The email is sent to the address of the user ID in the widget or the logged in user. 

For more information, see the "Send an Email" section of [Send Actions](../09-Automation/send-actions.md). 

## Embedding reports
The Pixel-perfect Reports widget enables you to embed this feature into applications. For more information, see [Pixel-perfect Reports Widget](../../software-developer/04-Embedding%20Qrvey%20Widgets/05-Widgets/pixel-perfect-reports.md). 


</div>