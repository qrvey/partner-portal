---
id: designing-reports
title: Designing Reports
sidebar_label: Designing Reports
---
<div style={{textAlign: "justify"}}>


Pixel-perfect Reports is a new feature currently in *beta* introduced with version 8.1 of the Qrvey platform. Your feedback and ideas are greatly appreciated, as they can help us improve this feature in future releases.

Pixel-perfect Reports provides a variety of design and layout options for formatting reports. 

## Insert an image
You can add images to your report by uploading them or linking to a URL.

### To insert an image
1. Click the Image icon in the toolbar. 

2. Click on the canvas to insert the image object. Size and position the bounding box as desired. The Configuration panel updates to display Image Configuration options. 

3. In the Image Configuration panel, paste the URL to the image in the field provided, or click **Upload Image** and upload an image file. 

4. Under Aspect, select how the image fills the bounding box:
  - Contain
  - Cover
  - Fill

5. On the canvas, adjust the size and position of the image box as needed. 

## Add text
You can add either static or dynamic text to your report by drawing a Text box on the canvas and configuring its settings. Text settings include:
- Font Type
- Font Size
- Text Styles (Bold, Italic, etc.)
- Font Color
- Background Color
- Alignment
- Text Wrapping
- Borders
- Padding

Dynamic text is configured using tokens. Pixel-perfect Reports provides the following types of tokens:
- **Data tokens**. Displays dataset columns and their aggregates. 
- **System tokens**. Provides options for date and time tokens. 
- **Report tokens**. Provides options for inserting page numbers, total page count, and report name. 
- **Parameters**. Enables you to display parameters in the report.  

You can only add one token per text box. 

### To add text
1. Click the Text icon on the toolbar. 
2. Draw a bounding box on the canvas. Size and position the box as desired. The Configuration panel updates to display Text Configuration options.
3. To add static text, click in the box and type your text.  
4. To add a token, click in the Token symbol {} inside the text box, and select an option from the dropdown menu. A string displays in the text box, which the system uses to resolve the token. 
5. Use the settings in the Text Configuration panel to format the text. 

## Draw a shape
The Report editor enables you to draw lines, rectangles, and ellipses on the report canvas. You can also configure the colors, line styles, and other visual settings for each shape. 

### To draw a shape
1. Click the Shape icon on the toolbar and select one of the options:
  - Line
  - Rectangle
  - Ellipse

2. Draw a bounding box on the canvas. Size and position the box as desired. The Configuration panel updates to display Line/Rectangle/Ellipse Configuration options. 

3. Use the settings in the Configuration panel to define colors, line styles, and other visual settings for the shape. 

## Add a page break
Page breaks enable you to improve the readability and organization of your reports. You can only add page breaks to the Body of the report. 

### To add a page break
1. Click the Page Break icon in the toolbar. 
2. Navigate to the body of the canvas. Notice the mouse pointer changes to the Page Break icon. 
3. Click to insert the page break. A line displays on the canvas indicating the page break. 
4. Change the location of the page break as needed. Click the Drag handler and move the page break up or down on the canvas.

## Set up the page size and orientation
The Page Setup feature enables you to modify the page orientation, paper size, and units of measurement. 

### To change the page setup
1. Click the Page Setup icon on the toolbar. It displays the current paper size and unit of measurement. The Page Setup dialog displays. 
2. On the Page Setup dialog, select the following options:
  - Paper Size
  - Units of Measure
  - Width
  - Height
  - Orientation
3. Click Save. 

## Show/hide gridlines and rulers
Gridlines and rulers help you arrange components on the canvas. To show or hide them, click the Grid icon on the toolbar and select or clear the following options:
- Show Gridlines
- Show Ruler

## Align components
The Align components feature helps arrange the components with more precision. To align components, select them on the canvas and click the Align Objects icon on the toolbar. Select one of the following options:
- Align left
- Align center
- Align right
- Align top
- Align middle
- Align bottom

## Arrange components
You can arrange overlapping components so that one is in front or behind the other. Select the component you want to arrange and click the Arrange Components icon on the toolbar. Select one of the following options: 
- Send to front
- Send to back

**See also**:
[Working with Tables](tables.md)
[Repeating Items Using Page Groups](page-groups.md)
[Working with Formulas](formulas.md)
[Publishing Reports](publishing-reports.md)

</div>