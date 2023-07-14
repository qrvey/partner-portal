---
id: page-groups
title: Repeating Items Using Page Groups
sidebar_label: Repeating Items Using Page Groups
tags: [Data Analyst]
sidebar_position: 7
displayed_sidebar: data-analyst
---
<div style={{textAlign: "justify"}}>

> Pixel-perfect Reports is a new feature currently in *beta* introduced with version 8.1 of the Qrvey platform. Your feedback and ideas are greatly appreciated, as they can help us improve this feature in future releases.

Page Groups enable you to repeat a set of components in the report body. For example, you can create a standard invoice format and associate it with a dataset column, so the report will display separate invoices with the distinct values of the column. Page Groups also provide an option to insert a page break after every iteration. 

## To create a Page Group
1. Click the **Page Group** icon on the toolbar. 

2. On the canvas, draw a bounding box around the components you wish to group. The Page Group header appears about the bounding box, indicating that the group was created. The Configuration panel updates to display Page Group Configuration options. 

3. In the Page Group Configuration panel, click in the **Associated Column** dropdown and select the desired dataset column. The distinct values in this column determine how the data appears inside the group and how many times it repeats. 

4. Select a sorting method under Report Preview Sorting. 

5. Select **Add page break between groups** to separate each iteration with a page break. 

6. To adjust the position of the Page Group on the canvas, click and drag its Drag handler. 

7. Click **Preview** to preview the report using data from the selected dataset column. 

## To delete a Page Group
1. Select the Page Group on the canvas. 

2. In the Page Group header, click the **Remove Page Group**, or **X**, icon. A warning dialog indicates that this action removes the components within the Page Group. 

3. Click **Yes** to delete the Page Group and its components, or click **No** to delete only the Page Group but retain the components in the report. 

**See also**:  
[Designing Reports](designing-reports.md)

</div>
