---
id: working-with-tables
title: Simple and Dynamic Tables
sidebar_label: Simple and Dynamic Tables
tags: [Data Analyst]
sidebar_position: 3
displayed_sidebar: getting-started
---

The Pixel-perfect Reports Builder provides two options for displaying tabular data: Simple tables and Dynamic tables.

Simple Tables display one object per table cell, which can be either static text or text resolved from a token. If you add a dataset column to a simple table, the cell displays the first record found in the dataset. Dynamic Tables are much more powerful for displaying datasets. A dynamic table adds a row for each record in the dataset column. Unlike simple tables, you cannot add static text to the cells of a dynamic table, with the exception of the header row. 

You can only add tables to the Body of the report. 

##  Add a Simple Table
Simple tables display one object per table cell, which can be either static text or text resolved from a token. If you add a dataset column to a simple table, the cell displays the first record found in the dataset. 

1. Click the **Simple Table** icon in the toolbar. 
2. Navigate to the body of the canvas and draw a bounding box for the table. A blank table displays and the Configuration panel updates to display Simple Table Configuration options. 
3. In the Simple Table Configuration panel, specify the desired number of **Columns** and **Rows** in the fields provided. Expand the table as needed on the canvas to accommodate the number of columns and rows. 
    - You can add and delete rows by clicking the dropdown menu in the header box of each row and selecting a delete or insert option. 
    - You can add and delete columns by clicking the dropdown menu in the header box of each column and select a delete or insert option. 
4. To add static text to a table cell, click in the cell and type your text. Use the settings in the Simple Table Cell Configuration panel to format the text. 
5. To add a token to a table cell, click the Token symbol `{}` in the desired cell, and select an option from the dropdown menu. A string displays in the text box, which the system uses to resolve the token. You can only add one token per cell. 
6. Format the table as desired using the **Border** and **Padding** settings in the Simple Table Cell Configuration panel. 

>**Note**: At any time, you may click **Preview** to preview the report. The Preview feature displays the actual data in the table. 

## Add a Dynamic Table
Dynamic tables are much more powerful than simple tables for displaying datasets. A dynamic table adds a row for each record in the dataset column. Unlike simple tables, you cannot add static text to the cells of a dynamic table, with the exception of the header row. 

1. Click the **Dynamic Table** icon in the toolbar. 
2. Navigate to the body of the canvas and draw a bounding box for the table. A blank table displays and the Configuration panel updates to display Dynamic Table Configuration options. 
3. In the Dynamic Table Configuration panel, click the **Style** tab and specify the desired number of **Columns** and **Rows** in the fields provided. Expand the table as needed on the canvas to accommodate the number of columns and rows. 
    - You can add and delete rows by clicking the dropdown menu in the header box of each row and selecting a delete or insert option. 
    - You can add and delete columns by clicking the dropdown menu in the header box of each column and select a delete or insert option. 
4. To add a header, click in the table cell, enter your text, and use the options in the Dynamic Table Cell Config panel to format the text. 
5. To add a token to a table cell, click the Token symbol `{}` in the desired cell, and select an option from the dropdown menu. A string displays in the text box, which the system uses to resolve the token. You can only add one token per cell. 
6. Continue to design your table. Use the following advanced features as needed:  
    - To add a column to a table cell, see the section below called, "Add column data to a dynamic table".  
    - To add a group to a table cell, see the section below called, "Add groups to a dynamic table".  
    - To add a table total, see the section below called, "Add totals to a dynamic table".  
7. Format the table as desired using the options on the Style tab.

**Note**: At any time, you may click **Preview** to preview the report. The Preview feature displays the actual data in the table. 

### Alternate Colors
Dynamic tables enable you to define alternating font and background colors to make the table easier to read. By default, alternate colors are not applied. To define alternating colors:
1. Select the table to display its Configuration panel. 
2. Click the **Style** tab, and configure the following settings:
    * Font Color
    * Background Color
    * Alternate Font Color
    * Alternate Background Color
  The alternating colors will be applied when the table is displayed, previewed, and exported. 


### Add Column Data

1. Select the table on the canvas by clicking its Grabber handle. 
2. Display the Data & Parameters panel and open the Data tab. 
3. Display the Dynamic Table Configuration panel and open the Data tab. If the Data tab is not displayed, try clicking the Drag handler to select the table and refresh the Dynamic Table Configuration panel. 
4. Drag the desired column from the Data & Parameters panel to the Columns shelf on the Dynamic Table Configuration panel. The column name displays in the table on the canvas. 
5. Continue to add columns to the Column shelf. 
6. Change the order of the columns as needed. Drag the column names up and down in the Column shelf. 
7. To remove a column, drag it away from the Column shelf. 
8. Click **Preview** to preview the report using the data selected. 

### Add Groups

1. Select the table on the canvas by clicking its Grabber handle. 
2. Display the Data & Parameters panel and open the Data tab. 
3. Display the Dynamic Table Configuration panel and open the Data tab. If the Data tab is not displayed, try clicking the Drag handler to select the table and refresh the Dynamic Table Configuration panel. 
4. Drag the desired column from the Data & Parameters panel to the Groups shelf on the Dynamic Table Configuration panel. The group name displays in the table on the canvas. 
5. Continue to add columns to the Groups shelf. 
6. Change the order of the columns as needed. Drag the column names up and down in the Group shelf. 
7. To remove a column, drag it away from the Group shelf.
8. Click **Preview** to preview the report using the data selected.

### Add Totals

1. Verify that the table is positioned on the canvas with sufficient empty space below it to fit an additional row. 
2. Select the table on the canvas by clicking its Grabber handle.
3. Display the Dynamic Table Configuration panel and open the Data tab. If the Data tab is not displayed, try clicking the Drag handler to select the table and refresh the Dynamic Table Configuration panel. 
4. Under Totals, click **Add Total**. A new row displays at the bottom of the table, which will display the total for each column. 
5. In the Dynamic Table Configuration panel, click the dropdown arrow next to the Total you just added. It expands to display settings. 
    ![Pixel-perfect-reports-Dynamic-Tables-Total-81](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-Dynamic-Tables-Total-81.png#thumbnail-40)
6. Use the options provided to customize how the totals are displayed. You can also click **Remove** to remove the Total. 
7. Click **Preview** to preview the report using the data selected.
