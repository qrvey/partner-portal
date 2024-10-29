---
id: designing-reports
title: Report Design
sidebar_label: Report Design
tags: [Data Analyst]
sidebar_position: 2
displayed_sidebar: getting-started
---

The Pixel-perfect Reports Builder provides a variety of design and layout options for formatting reports.

## Repeat Items Using Page Groups

Page Groups enable you to repeat a set of components in the report body. For example, you can create a standard invoice format and associate it with a dataset column, so the report will display separate invoices with the distinct values of the column. Page Groups also provide an option to insert a page break after every iteration. 

### Create a Page Group
1. Click the **Page Group** icon on the toolbar. 
2. On the canvas, draw a bounding box around the components you wish to group. The Page Group header appears about the bounding box, indicating that the group was created. The Configuration panel updates to display Page Group Configuration options. 
3. In the Page Group Configuration panel, click in the **Associated Column** dropdown and select the desired dataset column. The distinct values in this column determine how the data appears inside the group and how many times it repeats. 
4. Select a sorting method under Report Preview Sorting. 
5. Select **Add page break between groups** to separate each iteration with a page break. 
6. To adjust the position of the Page Group on the canvas, click and drag its Drag handler. 
7. Click **Preview** to preview the report using data from the selected dataset column. 

### Delete a Page Group
1. Select the Page Group on the canvas. 
2. In the Page Group header, click the **Remove Page Group**, or **X**, icon. A warning dialog indicates that this action removes the components within the Page Group. 
3. Click **Yes** to delete the Page Group and its components, or click **No** to delete only the Page Group but retain the components in the report. 

## Insert an Image

You can add images to your report by uploading them or linking to a URL.
1. Click the **Image** icon in the toolbar. 
2. Click on the canvas to insert the image object. Size and position the bounding box as desired. The Configuration panel updates to display Image Configuration options. 
3. In the Image Configuration panel, paste the URL to the image in the field provided, or click **Upload Image** and upload an image file. 
4. Under Aspect, select how the image fills the bounding box:
    - **Contain**. Image resizes to fit in the container without changing proportions. 
    - **Cover**. Image retains its size and aspect ratio, regardless of the size of the bounding box.
    - **Fill**. Image resizes and changes its proportions to fit in the container.
5. On the canvas, adjust the size and position of the image box as needed. 

## Add Text

1. Click the **Text** icon on the toolbar. 
2. Draw a bounding box on the canvas. Size and position the box as desired. The Configuration panel updates to display Text Configuration options.
3. To add static text, click in the box and type your text.  
4. To add a token, click in the Token symbol `{}` inside the text box, and select an option from the dropdown menu. A string displays in the text box, which the system uses to resolve the token. 
5. Use the settings in the Text Configuration panel to format the text. 

To add text to your report, use a Text box on the canvas and configure settings such as font type, font size, text styles (bold, italic), font color, background color, alignment, text wrapping, borders, and padding.

Dynamic text is configured using tokens. You can only add one token per text box. The following types of tokens are available:
- **Data tokens**. Displays dataset columns and their aggregates. 
- **System tokens**. Provides options for date and time tokens. 
- **Report tokens**. Provides options for inserting page numbers, total page count, and report name. 
- **Parameters**. Enables you to display parameters in the report.  

## Draw a Shape
The Report editor enables you to draw lines, rectangles, and ellipses on the report canvas. You can also configure the colors, line styles, and other visual settings for each shape. 

1. Click the **Shape** icon on the toolbar and select: Line, Rectangle, or Ellipse.
2. Draw a bounding box on the canvas. Size and position the box as desired. The Configuration panel updates to display Line/Rectangle/Ellipse Configuration options. 
3. Use the settings in the Configuration panel to define colors, line styles, and other visual settings for the shape. 

## Add a Page Break
Page breaks enable you to improve the readability and organization of your reports. You can only add page breaks to the Body of the report. 

1. Click the **Page Break** icon in the toolbar. 
2. Navigate to the body of the canvas. Notice the mouse pointer changes to the Page Break icon. 
3. Click to insert the page break. A line displays on the canvas indicating the page break. 
4. Change the location of the page break as needed. Click the Drag handler and move the page break up or down on the canvas.

## Change Page Setup
The Page Setup feature enables you to modify the page orientation, paper size, and units of measurement. 

1. Click the **Page Setup** icon on the toolbar. It displays the current paper size and unit of measurement. The Page Setup dialog displays. 
2. On the Page Setup dialog, select the following options:
    - Paper Size
    - Units of Measure
    - Width
    - Height
    - Orientation
3. Click **Save**. 

## Show/Hide Gridlines and Rulers
Gridlines and rulers help you arrange components on the canvas. To show or hide them, click the Grid icon on the toolbar and select or clear the following options:
- Show Gridlines
- Show Ruler

## Align Components
The Align components feature helps arrange the components with more precision. To align components, select them on the canvas and click the **Align Objects** icon on the toolbar. Select one of the following options:
- Align left
- Align center
- Align right
- Align top
- Align middle
- Align bottom

## Arrange Components
You can arrange overlapping components so that one is in front or behind the other. Select the component you want to arrange and click the **Arrange Components** icon on the toolbar. Select one of the following options: 
- Send to front
- Send to back
