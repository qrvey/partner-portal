---
id: theming-css-variables
title: Qrvey Theming CSS Variables
sidebar_label: Qrvey Theming CSS Variables
tags: [Software Developer]
sidebar_position: 14
displayed_sidebar: software-developer
---

import ModalButton from '@site/src/components/VariablesModal/ModalButton';
import contents from '@site/src/components/VariablesModal/modalContents';


<div style={{textAlign: "justify"}}>

This article provides guidelines for properly using CSS to customize the visual theme of embedded widgets. 
To see an example in codepen of how CSS variables can be used with embedded widgets, click the following [link](https://codepen.io/qrveysamples/pen/dywbyKQ/92b794c45e4a61a68e58a436f587d940).



# Naming Convention
Use the following naming convention for CSS variables:

**--qv-**[module]-[property]-[attribute]

- **--qv-**: Every CSS variable in Qrvey must start with the prefix -qv-. This prefix minimizes the risk of name collision when embedding widgets, and it helps to identify Qrvey's own variables.

- **Module**: Refers to sections or areas in which the product is divided. It is necessary for variables that only affect a specific area of the product.
  - For global variables, this value must be the global word: -qv-global-.
  - For variables that apply only to the chart, they must start with -qv-chart-. 

- **Property**:The CSS property to which the variable applies.
  - Color
  - Font 
  - Margin / padding 
  - Border 
  - Example: -qv-color- , -qv-chart-color

- **Attribute**: Further context or detail of the variable's purpose. Examples: 
  - --qv-global-color-main
  - --qv-global-color-text
  - --qv-global-color-title
  - --qv-global-color-main-hover
  - --qv-global-font-size
  - --qv-global-font-family
  - --qv-global-border-border
  - --qv-global-border-radius-radius
  - --qv-chart-font-family
  - --qv-chart-font-size-label
  - --qv-chart-font-size-title
  - --qv-chart-font-font-size-tooltip

# Priority and Fallback 
Some components may depend on more than one CSS variable or custom property, so it is important to define the priority of which one takes precedence. In addition, you should always define a fixed value as a last resort (or fallback).

The  **var**() function evaluates the first argument, and, if it exists, it finishes its evaluation. Otherwise, it evaluates the second argument. This second argument can be another var() function, which indicates that the first argument is the most relevant in case all CSS variables exist. For example:

```css
.cl1 {

 background-color: var(--qv-global-color-main, orange)

}

.cl2 {

 background-color: var(--qv-chart-cell-color-main, var(--qv–global-color-main, orange))

}
```

For .cl1, if the variable **--qv-color-main** does not exist, the fixed value orange will be applied.

For .cl2, if **--qv-cell-color-main** does not exist, **--qv-color-main** will be evaluated, and if it does not exist, orange will be applied.

>**Note**: When using another CSS variable as fallback in the **var()** function, it must be enclosed inside another **var()** function.  For more information on using **var()**, see <https://developer.mozilla.org/en-US/docs/Web/CSS/var> and <https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties>.






## Inheritance

Like other aspects of CSS, CSS variables are cascading in nature. As such, the value of a variable is inherited from its parent (and it will inherit from its parent), if it is not defined. The following example demonstrates how to overwrite a CSS variable by making a declaration with a higher level of detail: 

```css
:root {
--qv-color-main: blue;
--qv-cell-color-main: pink;

}

.overwrite {
--qv-color-main: red;

}

.cl1 {
background-color: var(--qv-color-main, orange)

}

.cl2 {
background-color: var(--qv-cell-color-main, var(--qv-color-main, orange))

}

```

To see an example in codepen of inheritance, click the following [link](https://codepen.io/qrveysamples/pen/zYaVVEG/3cd521ac96add078e63fa0a748f410ad?editors=1100).


You can also assign the inline CSS variables in a closer node/element. 

Qrvey widgets usually assign CSS variables in the `<body/>` or in the `:root{}` pseudo-class.



## Qrvey Component Library

Most of the library components depend on the main color, and this is applicable for the default Qrvey theme. However, you may want to give buttons a different shade than the main one. In this case, assign a main variable and an optional variable. For example:

`var(--qv-btn-color-main, var(–qv-color-main, orange))`

For more information on the design system, see [Qrvey Design System](https://d30an7r0bzb512.cloudfront.net/).


## Backward Compatibility (in progress)

To continue to support legacy variables, assign each variable in a node. For example, to support --qv-main-color, assign the variable using the following technique: 

```css
body {

-–qv-color-main: var(--qv-global-main-color, orange);

}
```


## Colors

Among the customization variables we find the color variables, which allow by means of their declaration, as their name indicates, to change the main colors of the theme, which are the following ones:

|**Variable name**|**Functionality**|**Example**|
| :- | :- | :- |
|**--qv-main-color**|Modifies the main color of the Theme. The default is #E6773D.|<ModalButton content={contents[0].colors[0]}/>|
|**--qv-main-text-color**|Modifies the main color of the Theme fonts. The default is white.| <ModalButton content={contents[0].colors[1]}/>|
|**--qv-secondary-color**|Modifies the secondary color of the Theme. The default is is #25486F.| <ModalButton content={contents[0].colors[2]}/>|
|**--qv-tab-bar-color**|Modifies the background of the Navigation Tab Bar. The default is is #25486F.| <ModalButton content={contents[0].colors[3]}/>|
|**--qv-info-notification-color**|Modifies the color of the informative notifications. The default is #4FA6DA.| <ModalButton content={contents[0].colors[4]}/>|
|**--qv-success-notification-color**|Modifies the color of successful notifications. The default is #7DC58C.| <ModalButton content={contents[0].colors[5]}/>|
|**--qv-warning-notification-color**|Modifies the color of warning notifications. The default is #FFB75D.| <ModalButton content={contents[0].colors[6]}/>|
|**--qv-error-notification-color**|Modifies the color of error notifications. The default is #C23934.| <ModalButton content={contents[0].colors[7]}/>|
|**--qv-info-color**|Modifies the color of notifications and information components. The default is #4FA6DA.| <ModalButton content={contents[0].colors[8]}/>|
|**--qv-success-color**|Modifies the color of notifications and success components. The default is #7DC58C.| <ModalButton content={contents[0].colors[9]}/>|
|**--qv-warning-color**|Modifies the color of notifications and warning components. The default is #FFB75D.| <ModalButton content={contents[0].colors[10]}/>|
|**--qv-error-color**|Modifies the color of notifications and error components The default is #C23934.| <ModalButton content={contents[0].colors[11]}/>|
|**--qv-an-chart-border-color**|Modifies the border color of the chart panes.| <ModalButton content={contents[0].colors[12]}/>|
|**--qv-an-chart-background-color**|Modifies the background color of the chart panels.| <ModalButton content={contents[0].colors[13]}/>|
|**--qv-an-chart-header-border-color**|Modifies the color of the bottom border of the header of the chart panels.| <ModalButton content={contents[0].colors[14]}/>|
|**--qv-an-chart-header-border-color-options**|Modifies the border color of the header options of the chart panels.| <ModalButton content={contents[0].colors[15]}/>|
|**--qv-an-chart-header-background-color-options**|Modifies the background color of the chart panel header options.| <ModalButton content={contents[0].colors[16]}/>|
|**--qv-an-chart-header-background-color-hover-options**|Modifies the background color in hover state of the chart panel header options.| <ModalButton content={contents[0].colors[17]}/>|
|**--qv-global-close-modal-color**|Modifies the color of the modal close icon.| <ModalButton content={contents[0].colors[18]}/>|
|**--qv-global-close-modal-hover-color**|Modifies the color of the close modal icon in hover state.| <ModalButton content={contents[0].colors[19]}/>|
|**--qv-global-overlay-color**|Modifies the modal overlay color.| <ModalButton content={contents[0].colors[20]}/>|
|**--qv-global-threedots-icon-color**|Modifies the color of the three-dot options icon.| <ModalButton content={contents[0].colors[21]}/>|
|**--qv-global-tooltips-background-color**|Modifies the background color of tooltips.| <ModalButton content={contents[0].colors[22]}/>|



## Fonts

To modify the font type of the components inside the widget, use the following global CSS variable:


|**Variable name**|**Functionality**|**Example**|
| :- | :- | :- |
|**--qv-global-family**|Changes the font family across the complete interface|<ModalButton content={contents[0].fonts[0]}/>|


### Support Custom Font Family On Visualizations

Version 8.3 of the Qrvey platform introduced visualizations using echarts, which you cannot manipulate through CSS.  Instead, those charts render with canvas. In version 8.2 and earlier, visualizations worked by svg and allowed immediate changes by elements. By themes performance, constant requests cannot be made to monitor the immediate change by CSS, therefore we defined that it must be necessary that the user has the custom variable of --qv-global-font-family declared before, or he should reload the theme, or the widget so that the changes can be applied when the default option is selected in the font dropdown of the themes modal.

## Positions

To modify the location of specific components in the navigation menu, use the position variables. The following table lists the available position variables:

|**Variable name**|**Functionality**|**Example**|
| :- | :- | :- |
|**--qv-global-position-toast-right**|Modifies the horizontal position of the notification component.|<ModalButton content={contents[0].positions[0]}/>|
|**--qv-global-position-toast-top**|Modifies the vertical position of the notification component.|<ModalButton content={contents[0].positions[1]}/>|
|**--qv-global-position-modal-top-offset**|Modifies the distance of the modal with respect to the height of the browser window.|<ModalButton content={contents[0].positions[2]}/>|
|**--qv-position-floatingmenu-right**|Modifies the horizontal position of the floating menu component.|<ModalButton content={contents[0].positions[3]}/>|
|**--qv-position-floatingmenu-bottom**|Modifies the vertical position of the floating menu component.|<ModalButton content={contents[0].positions[4]}/>|

</div>