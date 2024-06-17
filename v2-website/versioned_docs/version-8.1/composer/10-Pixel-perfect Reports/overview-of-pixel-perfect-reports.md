---
id: overview-of-pixel-perfect-reports
title: Overview of Pixel-perfect Reports
sidebar_label: Overview of Pixel-perfect Reports
tags: [Data Analyst]
sidebar_position: 1
displayed_sidebar: getting-started
---
<div style={{textAlign: "justify"}}>


> Pixel-perfect Reports is a new feature currently in *beta* introduced with version 8.1 of the Qrvey platform. Your feedback and ideas are greatly appreciated, as they can help us improve this feature in future releases.

The Pixel-perfect Reports tool enables you to build customizable report templates with precise control over the positioning and style of every element on the layout, down to the individual pixel. Pixel-perfect formatting is important when the output must meet exact specifications, such as in audit reports, tax forms, regulatory documents, shipping labels, and more. The Pixel-perfect Reports tool enables you rigorously control the formatting of a report, and the output is optimized for PDF and print.  

To open the Pixel-perfect Reports feature, click the **Pixel-perfect Reports** icon in the left-hand navigation panel.  
![Pixel-perfect Reports Icon](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/icon-composer-pixel-perfect-reports.png)

Pixel-perfect Reports works with the data already available in the Qrvey platform, which means that you do not need tertiary applications to create reports. In the report editor, you create fixed templates that do not contain live data. When you use the Preview or Export feature, the values are resolved, and the output displays with the complete data using as many pages as needed. 

Pixel-perfect Reports is fully integrated into Qrvey Composer, and it supports many familiar features, including:
- **Filters**. In the Pixel-perfect Reports tool, filters are configured in the Filters panel. For more information on using filters, see [Introduction to Filters](../08-Filtering%20Data/overview-of-filters.md). 
- **Workflows**. The Send Email action in Workflows/Automation supports Pixel-perfect Reports. It currently supports one report per email action. For more information, see the "Send an Email" section of [Send Actions](../09-Automation/send-actions.md). 
- **Formulas**. You can apply formulas to columns in the dataset. For more information, see [Working with Formulas](formulas.md). 
- **Embedding**. The Pixel-perfect Reports widget can be embedded in an application, and you can define security (CLS and RLS) to ensure that end users only have access to specified dataset columns. For more information, see [Embedding Overview](../../software-developer/04-Embedding%20Qrvey%20Widgets/overview-of-embedding.md) and [Pixel-perfect Reports Widget](../../software-developer/04-Embedding%20Qrvey%20Widgets/05-Widgets/pixel-perfect-reports.md). 

## Overview of the Editor
The Pixel Perfect editor provides a variety of tools for creating your report, including designing the layout, setting up datasets, and configuring settings. 

![Pixel-perfect Editor](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-Overview-81.png#thumbnail-80)

The Toolbar at the top of the page provides a variety of components that you can add to the canvas. On the right side, there are several collapsable Report Panels that enable you to configure the report, including its components, datasets, and filters.  

The majority of the interface is the canvas, on which you design your report. By default, reports have two headers, two footers, and a body. They are defined as follows:
- **Report Header**. The cover page or header that displays only on the first page of the report. 
- **Page Header**. The header that displays on all pages of the report. Note that the Page Header does not display on the cover or back cover, if applicable.  
- **Body**. The principal section of the report.
- **Page Footer**. The footer that displays on all pages of the report. Note that the Page Footer does not display on the cover or back cover, if applicable. 
- **Report Footer**. The back cover page or footer that displays only on the last page of the report. 

**See also**:
- [Version 8.1 Release Demo Videos](../../video-training/release/version-8.1.md)  
- [Create a New Report](create-a-new-report.md)
- [Setting Up Data and Parameters](data-and-parameters.md)

</div>