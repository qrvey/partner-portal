---
id: customizing-css-variables
title: Customize Widgets Styles Using CSS
sidebar_label: Customize Widgets Styles Using CSS
tags: [Software Developer]
sidebar_position: 6
displayed_sidebar: getting-started
---

import ModalButton from '@site/src/components/VariablesModal/ModalButton';
import contents from '@site/src/components/VariablesModal/modalContents';


<div style={{textAlign: "justify"}}>

You can fully customize the visual theme of embedded widgets using CSS. For examples, please see our [Codepen](https://codepen.io/qrveysamples/pen/dywbyKQ/92b794c45e4a61a68e58a436f587d940).

## Naming Convention
Use the following naming convention for CSS variables:

`--qv-[module]-[property]-[attribute]`

- `--qv-`: Every CSS variable in Qrvey must start with the prefix `-qv-`. This minimizes the risk of name collision when embedding widgets and helps to identify Qrvey variables.

- `module`: Refers to sections or areas in which the product is divided. It is necessary for variables that only affect a specific area of the product.
  - For global variables, this value must be the global word: `-qv-global-`.
  - For variables that apply only to the chart, they must start with: `-qv-chart-`. 

- `property`: The CSS property to which the variable applies *(color, font, margin / padding, border, etc.)*
  - Examples: `-qv-color-` , `-qv-chart-color`

- `attribute`: Further context or detail of the variable's purpose. Examples: 
  - `--qv-global-color-main`
  - `--qv-global-color-text`
  - `--qv-global-color-title`
  - `--qv-global-color-main-hover`
  - `--qv-global-font-size`
  - `--qv-global-font-family`
  - `--qv-global-border-border`
  - `--qv-global-border-radius-radius`
  - `--qv-chart-font-family`
  - `--qv-chart-font-size-label`
  - `--qv-chart-font-size-title`
  - `--qv-chart-font-font-size-tooltip`

## Priority and Fallback 

Some components may depend on more than one CSS variable or custom property, so it is important to define which one takes precedence. In addition, you should always define a fixed value as a last resort (or fallback). For example:

```css
.cl1 {

 background-color: var(--qv-global-color-main, orange)

}

.cl2 {

 background-color: var(--qv-chart-cell-color-main, var(--qv–global-color-main, orange))

}
```

For .cl1, if the variable `--qv-color-main` does not exist, the fixed value orange will be applied.

For .cl2, if `--qv-cell-color-main` does not exist, `--qv-color-main` will be evaluated, and if it does not exist, orange will be applied.

>**Note**: For more information on using `var()`, see <https://developer.mozilla.org/en-US/docs/Web/CSS/var> and <https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties>.

## Inheritance

CSS variables are cascading in nature. As such, the value of a variable is inherited from its parent.

Please click here to see an [example of inheritance in codepen](https://codepen.io/qrveysamples/pen/zYaVVEG/3cd521ac96add078e63fa0a748f410ad?editors=1100).

You can also assign the inline CSS variables in a closer node/element.

Qrvey widgets usually assign CSS variables in the `<body/>` or in the `:root{}` pseudo-class.

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

## Qrvey Component Library

Most of the library components depend on the main color, and this is applicable for the default Qrvey theme. However, you may want to give buttons a different shade than the main one. In this case, assign a main variable and an optional variable. For example:

`var(--qv-btn-color-main, var(–qv-color-main, orange))`

For more information on the design system, see [Qrvey Design System](https://d30an7r0bzb512.cloudfront.net/).

## Backward Compatibility (in progress)

To continue to support legacy variables, assign each variable in a node. For example, to support `--qv-main-color`, assign the variable using the following technique: 

```css
body {

-–qv-main-color: var(--qv-global-main-color, orange);

}
```

## Colors

Among the customization variables we find the color variables, which let you change the main colors of the theme:

|**Variable name**|**Functionality**|**Example**|
| :- | :- | :- |
|`--qv-main-color`|Modifies the main color of the Theme. The default is #E6773D.|<ModalButton content={contents[0].colors[0]}/>|
|`--qv-main-text-color`|Modifies the main color of the Theme fonts. The default is white.| <ModalButton content={contents[0].colors[1]}/>|
|`--qv-secondary-color`|Modifies the secondary color of the Theme. The default is is #25486F.| <ModalButton content={contents[0].colors[2]}/>|
|`--qv-tab-bar-color`|Modifies the background of the Navigation Tab Bar. The default is is #25486F.| <ModalButton content={contents[0].colors[3]}/>|
|`--qv-info-notification-color`|Modifies the color of the informative notifications. The default is #4FA6DA.| <ModalButton content={contents[0].colors[4]}/>|
|`--qv-success-notification-color`|Modifies the color of successful notifications. The default is #7DC58C.| <ModalButton content={contents[0].colors[5]}/>|
|`--qv-warning-notification-color`|Modifies the color of warning notifications. The default is #FFB75D.| <ModalButton content={contents[0].colors[6]}/>|
|`--qv-error-notification-color`|Modifies the color of error notifications. The default is #C23934.| <ModalButton content={contents[0].colors[7]}/>|
|`--qv-info-color`|Modifies the color of notifications and information components. The default is #4FA6DA.| <ModalButton content={contents[0].colors[8]}/>|
|`--qv-success-color`|Modifies the color of notifications and success components. The default is #7DC58C.| <ModalButton content={contents[0].colors[9]}/>|
|`--qv-warning-color`|Modifies the color of notifications and warning components. The default is #FFB75D.| <ModalButton content={contents[0].colors[10]}/>|
|`--qv-error-color`|Modifies the color of notifications and error components The default is #C23934.| <ModalButton content={contents[0].colors[11]}/>|
|`--qv-an-chart-border-color`|Modifies the border color of the chart panes.| <ModalButton content={contents[0].colors[12]}/>|
|`--qv-an-chart-background-color`|Modifies the background color of the chart panels.| <ModalButton content={contents[0].colors[13]}/>|
|`--qv-an-chart-header-border-color`|Modifies the color of the bottom border of the header of the chart panels.| <ModalButton content={contents[0].colors[14]}/>|
|`--qv-an-chart-header-border-color-options`|Modifies the border color of the header options of the chart panels.| <ModalButton content={contents[0].colors[15]}/>|
|`--qv-an-chart-header-background-color-options`|Modifies the background color of the chart panel header options.| <ModalButton content={contents[0].colors[16]}/>|
|`--qv-an-chart-header-background-color-hover-options`|Modifies the background color in hover state of the chart panel header options.| <ModalButton content={contents[0].colors[17]}/>|
|`--qv-global-close-modal-color`|Modifies the color of the modal close icon.| <ModalButton content={contents[0].colors[18]}/>|
|`--qv-global-close-modal-hover-color`|Modifies the color of the close modal icon in hover state.| <ModalButton content={contents[0].colors[19]}/>|
|`--qv-global-overlay-color`|Modifies the modal overlay color.| <ModalButton content={contents[0].colors[20]}/>|
|`--qv-global-threedots-icon-color`|Modifies the color of the three-dot options icon.| <ModalButton content={contents[0].colors[21]}/>|
|`--qv-global-tooltips-background-color`|Modifies the background color of tooltips.| <ModalButton content={contents[0].colors[22]}/>|

## Fonts

To modify the font type of the components inside the widget, use the following global CSS variable:

|**Variable name**|**Functionality**|**Example**|
| :- | :- | :- |
|`--qv-global-font-family`|Changes the font family across the complete interface|<ModalButton content={contents[0].fonts[0]}/>|


### Custom Font Family On Visualizations

Version 8.3 of the Qrvey platform introduced visualizations using echarts, which you cannot manipulate through CSS. Instead, those charts render with canvas. In version 8.2 and earlier, visualizations worked by svg and allowed immediate changes by elements. By themes performance, constant requests cannot be made to monitor the immediate change by CSS, therefore we defined that it must be necessary that the user has the custom variable of `--qv-global-font-family` declared before, or he should reload the theme, or the widget so that the changes can be applied when the default option is selected in the font dropdown of the themes modal.

### Chart Panel Font

The following table lists the font variables specific to chart panels:

|**Variable Name**|**Functionality**|**Reference Image**|
| :- | :- | :- |
| `--qv-an-font-size-chart-panel-title` | Allows to modify the font size of the chart panel title (default is 13px) | <ModalButton content={contents[0].fonts[1]}/> |
| `--qv-an-font-weight-chart-panel-title` | Allows to modify the font weight of the chart panel title (default is normal) | <ModalButton content={contents[0].fonts[2]}/> |
| `--qv-an-font-size-chart-panel-options` | Allows to modify the font size of the icons of the chart panel options (default is 13px) | <ModalButton content={contents[0].fonts[3]}/> |


## Positions

To modify the location of specific components in the navigation menu, use the position variables. The following table lists the available position variables:

|**Variable name**|**Functionality**|**Example**|
| :- | :- | :- |
|`--qv-global-position-toast-right`|Modifies the horizontal position of the notification component.|<ModalButton content={contents[0].positions[0]}/>|
|`--qv-global-position-toast-top`|Modifies the vertical position of the notification component.|<ModalButton content={contents[0].positions[1]}/>|
|`--qv-global-position-modal-top-offset`|Modifies the distance of the modal with respect to the height of the browser window.|<ModalButton content={contents[0].positions[2]}/>|
|`--qv-position-floatingmenu-right`|Modifies the horizontal position of the floating menu component.|<ModalButton content={contents[0].positions[3]}/>|
|`--qv-position-floatingmenu-bottom`|Modifies the vertical position of the floating menu component.|<ModalButton content={contents[0].positions[4]}/>|



## Borders

To modify the border radius of the components that are inside the widget, use the following global CSS variable: 

`--qv-global-border-radius`

The following table lists specific border variables for each of the components:


|**Variable name**|**Functionality**|**Example**|
| :- | :- | :- |
|`--qv-global-border-radius`|Modifies the border radius globally.|<ModalButton content={contents[0].borders[35]}/>|
|`--qv-global-border-radius-button`|Modifies the border radius of the button component.|<ModalButton content={contents[0].borders[0]}/>|
|`--qv-global-border-radius-card`|Modifies the border radius of the application card component.|<ModalButton content={contents[0].borders[1]}/>|
|`--qv-global-border-radius-dropdown`|Modifies e the border radius of the drop-down list component.|<ModalButton content={contents[0].borders[2]}/>|
|`--qv-global-border-radius-input`|Modifies the border radius of the textboxes component.|<ModalButton content={contents[0].borders[3]}/>|
|`--qv-global-border-radius-modal`|Modifies the border radius of the modals component.|<ModalButton content={contents[0].borders[4]}/>|
|`--qv-global-border-radius-toast`|Modifies the border radius of the Notifications component.|<ModalButton content={contents[0].borders[5]}/>|
|`--qv-global-border-radius-pills`|Modifies the border radius of the pills component.|<ModalButton content={contents[0].borders[6]}/>|
|`--qv-global-border-radius-tags`|Modifies the border radius of the tags component.|<ModalButton content={contents[0].borders[7]}/>|
|`--qv-global-border-radius-table`|Modifies the border radius of the table component.|<ModalButton content={contents[0].borders[8]}/>|
|`--qv-global-border-radius-dropdown-list`|Modifies the border radius of the list component.|<ModalButton content={contents[0].borders[9]}/>|
|`--qv-global-border-radius-tooltips`|Modifies the border radius of the tooltips component.|<ModalButton content={contents[0].borders[10]}/>|
|`--qv-global-border-radius-qvdatepicker`|Modifies the border radius of the calendar component.|<ModalButton content={contents[0].borders[11]}/>|
|`--qv-global-border-radius-switch`|Modifies the border radius of the switch button component.|<ModalButton content={contents[0].borders[12]}/>|
|`--qv-global-border-radius-color-picker`|Modifies the border radius of the color selection component|<ModalButton content={contents[0].borders[13]}/>|
|`--qv-global-border-radius-color-picker-preview`|Modifies the border radius of color selection preview component.|<ModalButton content={contents[0].borders[14]}/>|
|`--qv-global-border-radius-value-list`|Modifies the border radius of the value list component component.|<ModalButton content={contents[0].borders[15]}/>|
|`--qv-global-border-radius-input-box`|Modifies the border radius of the input box component.|<ModalButton content={contents[0].borders[16]}/>|
|`--qv-global-border-radius-rich-editor`|Modifies the border radius of the advanced text input component.|<ModalButton content={contents[0].borders[17]}/>|
|**Analytic Widget**|||
|`--qv-an-border-radius-chart-panel`|Modifies the border radius of the Chart Panels component.|<ModalButton content={contents[0].borders[18]}/>|
|`--qv-an-border-radius-cb-action-chart`|Modifies the border radius of the Chart Builder action list component.|<ModalButton content={contents[0].borders[19]}/>|
|`--qv-an-border-radius-cb-item-values`|Modifies the border radius of the Chart Builder dataset list component.|<ModalButton content={contents[0].borders[20]}/>|
|**Dashboard:**|||
|`--qv-at-border-radius-db-menu-icons`|Modifies the border radius of the dashboard menu component.|<ModalButton content={contents[0].borders[21]}/>|
|`--qv-at-border-radius-db-draganddrop`|Modifies the border radius of the drag-n-drop component in the Dashboard Builder.|<ModalButton content={contents[0].borders[22]}/>|
|`--qv-at-border-radius-db-input-box`|Modifies the border radius of the menu component inside the Dashboard Builder.|<ModalButton content={contents[0].borders[23]}/>|
|`--qv-at-border-radius-db-draggable-dataset`|Modifies the border radius of the drag component in the Dashboard Builder.|<ModalButton content={contents[0].borders[24]}/>|
|`--qv-at-border-radius-db-expandable-card`|Modifies the border radius of the expandable card component inside the Dashboard Builder.|<ModalButton content={contents[0].borders[25]}/>|
|`--qv-at-border-radius-db-image`|Modifies the border radius of the image component inside the Dashboard Builder.|<ModalButton content={contents[0].borders[26]}/>|
|`--qv-at-border-radius-db-grid-item`|Modifies the border radius of the grid component inside the Dashboard Builder.|<ModalButton content={contents[0].borders[27]}/>|
|**User Management**|||
|`--qv-at-border-radius-qum-card`|Modifies the border radius of the card component in User Management.|<ModalButton content={contents[0].borders[28]}/>|
|**Workflows:**|||
|`--qv-at-border-radius-workflows-card`|Modifies the border radius of the card component in workflows.|<ModalButton content={contents[0].borders[29]}/>|
|`--qv-at-border-radius-workflows-sms-cont`|Modifies the border radius of the SMS component in workflows.|<ModalButton content={contents[0].borders[30]}/>|
|`--qv-at-border-radius-workflows-email-cont`|Modifies the border radius of the email component in workflows.|<ModalButton content={contents[0].borders[31]}/>|
|`--qv-at-border-radius-workflows-item-sidebar`|Modifies the border radius of the sidebar list component.|<ModalButton content={contents[0].borders[32]}/>|
|`--qv-at-border-radius-workflows-log-details`|Modifies the border radius of the log details component.|<ModalButton content={contents[0].borders[33]}/>|
|`--qv-at-border-radius-workflows-expandible-card`|Modifies the border radius of expandable card component.|<ModalButton content={contents[0].borders[34]}/>|

To modify the border width of the chart panel header, use the following.

|**Variable name**|**Functionality**|**Example**|
| :- | :- | :- |
| `--qv-an-border-width-chart-panel-header` | Allows you to change the width of the bottom border of the header of the chart panels. | <ModalButton content={contents[0].borders[36]}/> |


## Padding

To modify the internal space of supported components, use the padding variables.

|**Variable name**|**Functionality**|**Example**|
| :- | :- | :- |
|`--qv-an-padding-chart-panel-header`|Modifies the internal space of the header of the chart panel component|<ModalButton content={contents[0].padding[0]}/>|

## Box Shadow

To modify the box shadow on supported components, use box-shadow variables. 

|**Variable name**|**Functionality**|**Example**|
| :- | :- | :- |
|`--qv-an-box-shadow-chart-panel` | Allows you to modify the box shadow of the chart panel component. Defaults to `0px 1px 4px rgba(74, 74, 74, 0.29);`. | <ModalButton content={contents[0].boxShadow[0]}/> |

</div>