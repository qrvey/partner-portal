---
id: setting-chart-styles
title: Setting Chart Colors and Themes 
sidebar_label: Setting Chart Colors and Themes 
---

<div style={{textAlign: "justify"}}>

The default visualization colors and font styles are determined by a “theme” that applies to the entire Qrvey app. The default theme can be modified and many of its settings can be further customized within each individual chart’s configuration. This article explains the various layers of applying colors and adjusting font styles of charts and their panels.

## Choosing Colors for Charts 
Some charts, such as regular Bar and Line, use a single color to depict the values by default. These are the types of charts where the data values are the center of attention and not the categories for each value. The default single color (also called the *Main color*) used for these charts is shown, and can be changed, either from the Chart Builder Toolbar, or from the<a href="/docs/ui-docs/dataviews/chart-builder/chart-configuration/styles"> **Styles**</a> section of the Configuration Panel.    

![setting-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/colors-and-themes/choose.png#thumbnail-40) 


If you wish to change the main color used for your chart, click in the colored box and change the color from the standard color picker dialog that is presented. Note that this change will only apply to the chart that is being designed and all other charts will continue to be created with the same default color as before.

![setting-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/colors-and-themes/color-picker.png) 

You can choose to apply a different color for each category by picking **By Category** from the *Color Type* dropdown in the Styles section of the Configuration Panel. This feature is useful if the categories that are presented in the chart have special meaning in your analytics. For example each bar in the Bar Chart may be associated with a status and the statuses have specific colors in your product (e.g. <u>delayed</u> depicted in red, and <u>on time</u> depicted in green). 
If this mode is selected, the default sequence of colors is shown and used to apply one color of the sequence to each category. Each sequence consists of 10 pre-determined colors and colors are assigned to the categories, cycling from the first to the last and repeating when all of the colors are used. 
In this mode you can choose to fix the association of each category with a color by selecting the **Match colors across charts** checkbox. This feature is explained in more detail in the <a href="#assigning-fixed-colors-to-categories">Assigning Fixed Colors to Categories</a> section in this article.
 

![setting-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/colors-and-themes/color-type.png)  

Multi-colored charts, such as Pie or Funnel, use a sequence of colors, very much like when the *Color Type* of a single-colored chart is set to **By Category**. The default sequence that is automatically assigned to the chart is shown and can be changed, either from the Chart Builder Toolbar, or from the Styles section of the Configuration Panel. There are 14 predefined sequences of colors to choose from. 
The chosen sequence of colors is used to apply one color to each category. Each sequence consists of 10 pre-determined colors and colors are assigned to the categories, cycling from the first to the last and repeating when all of the colors are used.

![setting-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/colors-and-themes/colors.png) 

To read more about setting color styles for different charts, go to <a href="/docs/ui-docs/dataviews/chart-types/bar-charts" target="_blank">Chart Types</a> and check the Styles section of a specific chart.

## Assigning Fixed Colors to Categories
There are occasions when colors have specific meanings in your analytics and you wish to customize the colors assigned to each category of data, rather than going with the defaults chosen by the product. For example, if you are displaying the volume of sales of different flavors of ice creams, you may want to assign pink to strawberry, brown to chocolate flavor, and cream to vanilla. You may also want to use the same three colors consistently across all visualizations that are based on the same dataset. 
To achieve this effect select the **Match colors across charts** checkbox in the Styles section of the Configuration Panel. Doing so will cause a palette icon to appear next to the selected color sequence. Clicking on the icon opens a dialog to list all of the categories and their assigned colors. Each color can be modified individually to fit your preferences. Furthermore, the chosen colors will persist across all charts that are created based on the same dataset.

![setting-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/colors-and-themes/theme-icon.png#thumbnail-40)
![setting-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/colors-and-themes/color-values.png#thumbnail)  



## Managing Themes
We discussed the methods to customize the colors used for depicting data in various charts during chart design process, in the Chart Builder. Colors that are defined with the said methods will apply to the chart for which the customization was made and they don’t affect the default colors for other charts (using the **Match colors across charts** setting is an exception to this rule, but even that only applies to charts that are based on the same dataset). 
Furthermore, the selections are only about “colors” and don’t offer any control over the panel style, used fonts, and the like.
You can give your charts a unified look by creating customized themes for your analytics that can be used to replace Qrvey’s default theme settings.

To create a new theme, go to the **Style Themes** button that can be found in the Analyze section of any dataset, as well as the Report Builder and Page Builder UIs’ toolbar.

![setting-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/colors-and-themes/tool-icon.png) 



Initially, the default theme is the only theme that is listed in this dialog. The default theme cannot be removed or edited, but you may duplicate it from the three-dot menu. Alternatively, you may create a new theme and define your desired styles from scratch. Every theme that is created can be given a name and will be listed in all of your applications and can be used either for that app or throughout all of the apps. The colors under the Data Styles section can be changed individually but you can also click on **Generate New** to generate a new set of colors and continue to modify any that you prefer to change. The modified theme can be restored to the original set by clicking on the **Restore to Default** link, at any time.

![setting-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/colors-and-themes/ctheme1.gif) 

Each theme has a unique ID that can be used for accessing the theme programmatically. The Theme ID is always displayed in the UI from the list of themes. Developers can copy and paste the ID of the desired theme into the embedded widget JSON configuration code, if they need to handle the theme programmatically.

When you click on the **+Create New Theme** button, you see the following modal: 
 
![setting-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/colors-and-themes/ctheme2.png-60) 

1. Give your theme a name to identify it. 
2. Check this box if you’d like to use the theme across all of your Qrvey applications. 
3. Choose the default typeface for the text in your visualizations. 
4. Configure the Panel Style settings:
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a) You can show or hide the background of the Chart.</li>
</ul>

![setting-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/colors-and-themes/background.png#thumbnail-60) 

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>b) You can show or hide the Chart header.</li></ul>

<ul style={{listStyle: 'none', marginLeft: '40px'}}>
<li>i. You can show or hide the Chart title.

![setting-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/colors-and-themes/title.png#thumbnail-60) 
</li> 
<li>ii. You can change the color of the Chart title.

![setting-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/colors-and-themes/color-title.png#thumbnail-60)  
</li></ul>

5. In the **Text Styles** section, you can customize the color for *Axis and Data Labels, Values, Legends*, and *Tooltips*.

6. In **Data Styles**, you can change the colors for the *Main Color*, and you can pick the colors you’d like to have in your theme in *Data Visualization* or *Generate New Theme* colors.
7. **Table Header Styles** lets you set the color you want your *Header Font Color* to be like – this can be also done in the Styles section of the Configuration Panel in Table Charts. 
8. Here you can restore the style settings to default, **Cancel** the changes you made or **Save** the theme.

Once created, a theme can be further edited, chosen to apply to all of your applications, duplicated to be used as the basis for another theme, or deleted, from the three-dot menu on the theme card.


>**Note**: A theme in a “shared application” that has been created by someone else, can only be deleted by the owner of the application. Such a theme will not have the **Delete** option in the menu.

![setting-styles](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/chart-builder/colors-and-themes/image13.png) 


</div>