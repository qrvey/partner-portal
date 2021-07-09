---
id: analytic-suite
title: Analytic Suite Widget
sidebar_label: Analytic Suite Widget
---
<div style={{textAlign: "justify"}}>

This widget allows the user to display the distinct views available on the analyze side (i.e Summary, Custom, Metric views), through a configuration object where properties are set to define some options and behaviors.

## HTML Tag And Launcher

The HTML tag for this widget is: 
`<an-dashboard config=...>`

&gt; **Note**: The configuration property for this widget is called “config”, unlike most other widgets where the same property is called “settings”. The inconsistency is for some legacy issues and will be addressed in the near future. 

This widget needs an extra script for proper support in all browsers.

`<script type="module"   src=”https://<WIDGETS_URL>/qrvey-an-widgets/an-dashboard/andashboard/andashboard.esm.js”></script> `(For all browsers support)

`<script nomodule   src=”https://<WIDGETS_URL>/qrvey-an-widgets/an-dashboard/andashboard/andashboard.js”></script> `(Widget launcher)

## Configuration Object

The table below provides general information about each property of this widget’s configuration object, along with a description of the expected value. The **Required** column indicates whether the property is required for the configuration object to work properly.

| **Property**                         | **Value**                                                                                                                                                                                                                                                                                                                                            | **Required** |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **api_key**                          | `String`, secret identification token to access the application.                                                                                                                                                                                                                                                                              | Yes          |
| **app_id**                           | `String`, ID of the qrvey application containing the webform.                                                                                                                                                                                                                                                                                 | Yes          |
| **user_id**                          | `String`, ID of the user that edits the widget.                                                                                                                                                                                                                                                                                               | Yes          |
| **domain**                           | `String`, domain URL in which the application is in.                                                                                                                                                                                                                                                                                          | Yes          |
| **qrveyid**                          | `String`, ID of the dataset being used.                                                                                                                                                                                                                                                                                                       | Yes          |
| **settings**                         | `Object`, general configuration in order to set some behaviors.                                                                                                                                                                                                                                                                               | No           |
| **settings.view**                    | `String`, determines the initial view to display and it accepts: <br /> _ SUMMARY_VIEW/MULTI_PANEL <br />_ TABULAR_VIEW<br />_ CUSTOM_VIEW<br />_ METRIC_VIEW<br />Default: MULTI_PANEL (alias for SUMMARY_VIEW)                                                                                                                                        | No           |
| **settings.mode**                    | `String`, determines displaying the complete layout or the views only. It depends on set view and it accepts: <br />_ COMPLETE <br />_ SIMPLE<br />\* Default: COMPLETE                                                                                                                                                                             | No           |
| **settings.displayMode**             | `String`, changes the style and extends the layout onto the entire container. <br />_ FULL <br />_ NORMAL <br />\* Default: NORMAL                                                                                                                                                                                                                  | No           |
| **userFilters**                      | `Object`, the filters object generated by the user. This will be applied in internal components to filter the data. I.e. AN Single Panel. <br /> {"{"}filters: `<Filters Key Structure>`{"}"} <br /> To see more info about filter structure, visit https: | No           |
| **themeid**                          | String, theme ID to use in the component                                                                                                                                                                                                                                                                                                             | No           |
| **settings.styles**                  | ``, styles options object. These properties will extend from the current theme                                                                                                                                                                                                                                                          | No           |
| **settings.styles.chartsTitle**      | ``, set the charts title color                                                                                                                                                                                                                                                                                                          | No           |
| **settings.styles.chartsFontFamily** | ``, set the charts font family                                                                                                                                                                                                                                                                                                          | No           |
| **settings.styles.axisDataLabels**   | ``, set axis labels color in charts                                                                                                                                                                                                                                                                                                     | No           |
| **settings.styles.dataLabels**       | ``, color for data labels in charts                                                                                                                                                                                                                                                                                                     | No           |
| **settings.styles.valuesMain**       | ``, set color for axis ticks values in charts                                                                                                                                                                                                                                                                                           | No           |
| **settings.styles.chartsLegends**    | ``, color for charts legends labels                                                                                                                                                                                                                                                                                                     | No           |
| **settings.styles.chartsTooltips**   | ``, color for charts tooltips                                                                                                                                                                                                                                                                                                           | No           |
| **settings.styles.tableHeaderFont**  | ``, set color for table header texts                                                                                                                                                                                                                                                                                                    | No           |
| **settings.styles.chartsMain**       | ``, set color for chart data points like bars, symbols and lines.                                                                                                                                                                                                                                                                       | No           |
| **settings.styles.themePalette**     | ``, contains maximum 20 colour for char data points like bars, symbols and lines.                                                                                                                                                                                                                                                        | No           |

&gt; **Note**: Refer to the FAQs if you don’t know where to find any of the required configuration properties. 

## Sample

The following sample shows the way this widget is used in an HTML page. Please note that the example may not include the non-required properties of the configuration object. 

You can copy and paste this code to your application after replacing the red values with your own valid values in order to see the embedded widget in action.
\[sample code:

```



```

```



```

```



--&gt;

```

]

## See It In Action

See the widget in CodePen:

  
  See the Pen 
  Sample- Qrvey Analytic Suite by Qrvey (@qrveysamples)
  on CodePen.


</div>