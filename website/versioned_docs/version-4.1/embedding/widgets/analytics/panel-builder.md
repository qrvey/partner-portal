---
id: version-4.1-widget-panel-builder
title: Panel Builder
sidebar_label: Panel Builder
original_id: widget-panel-builder
---

<div style="text-align: justify">

This Chart Builder Modal widget requires `<my_cdn>/chart-builder/anchartbuilder.js` script file and 
uses the `<an-chart-builder>` Custom HTML Tag

## Configuration Object
> The Chart Builder widget doesn't have a configuration object.

## Dispatched Events

* ### ON_OPEN_CHART_BUILDER

    This event is emitted when the user clicks on the &quot;Next&quot; button after chart type is selected.

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **chartType** | String, Value for the selected chart type. | Yes |
    | **isNew** | Boolean, Determines if the chart is new. Must be true. | Yes |
    | **user_id** | String, Id of Qrvey User. | Yes |
    | **app_id** | String, Id of Qrvey App. | Yes |
    | **qrveyid** | String, Id of current Qrvey Dataset/Webform. | Yes |

* ### ON_AN_CHART_DUPLICATED

    This event is emitted when a chart has been duplicated.

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **chartid** | String, Id to identify the chart. | Yes |
    | **createdDate** | String, Chart creation date. | Yes |
    | **globalSettings** | Object, Global chart settings data. | Yes |
    | **is100** | Boolean, Determines if the chart has a &quot;100%&quot; multiseries layer. | Yes |
    | **isChartOptions** | Boolean, Determines if the chart options are available for the chart. | Yes |
    | **isCombo** | Boolean, Determines if the chart has a combo chart layer. | Yes |
    | **isMulti** | Boolean, Determines if the chart has a multiseries layer. | Yes |
    | **isSmallMultiples** | Boolean, Determines if the chart has a small multiples layer. | Yes |
    | **isStackedBar** | Boolean, Determines if the chart has a &quot;stacked&quot; multiseries layer. | Yes |
    | **isTrend** | Boolean, Determines if the chart has a trendline layer. | Yes |
    | **layerList** | Array, List of chart layers | Yes |
    | **modifyDate** | String, Date when the chart was updated. | Yes |
    | **position** | Number, Position of the chart in the custom view | Yes |
    | **qrveyid** | String, Id of current Qrvey Dataset/Webform. | Yes |
    | **title** | String, Chart name, | Yes |
    | **userid** | String, Id of Qrvey User. | Yes |

* ### ON_AN_CHART_BUILDER_SAVED

    This event is emitted when a chart has been created.

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **chartid** | String, Id to identify the chart. | Yes |
    | **createdDate** | String, Chart creation date. | Yes |
    | **globalSettings** | Object, Global chart settings data. | Yes |
    | **is100** | Boolean, Determines if the chart has a &quot;100%&quot; multiseries layer. | Yes |
    | **isChartOptions** | Boolean, Determines if the chart options are available for the chart. | Yes |
    | **isCombo** | Boolean, Determines if the chart has a combo chart layer. | Yes |
    | **isMulti** | Boolean, Determines if the chart has a multiseries layer. | Yes |
    | **isSmallMultiples** | Boolean, Determines if the chart has a small multiples layer. | Yes |
    | **isStackedBar** | Boolean, Determines if the chart has a &quot;stacked&quot; multiseries layer. | Yes |
    | **isTrend** | Boolean, Determines if the chart has a trendline layer. | Yes |
    | **layerList** | Array, List of chart layers | Yes |
    | **modifyDate** | String, Date when the chart was updated. | Yes |
    | **position** | Number, Position of the chart in the custom view | Yes |
    | **qrveyid** | String, Id of current Qrvey Dataset/Webform. | Yes |
    | **title** | String, Chart name, | Yes |
    | **userid** | String, Id of Qrvey User. | Yes |

* ### ON_AN_CHART_BUILDER_CLOSE

    This event is emitted when the user closes the chart builder modal.

* ### ON_AN_OPEN_BUCKETS_MODAL

    This event is emitted when the user clicks on the buckets button.

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **config** | Object, Main configuration params. | Yes |
    | **isNew** | Boolean, Determines if the data is new. Must be true. | Yes |
    | **fromChart** | Boolean, Determines if the bucket modal is open from a chart. Must be true. | Yes |
    | **onReturn** | Function, Callback when the bucket modal is closed. | Yes |

* ### ON_AN_OPEN_FORMULAS_MODAL

    This event is emitted when the user clicks on the formulas button.

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **config** | Object, Main configuration params. | Yes |
    | **isNew** | Boolean, Determines if the data is new. Must be true. | Yes |
    | **fromChart** | Boolean, Determines if the formulas modal is open from a chart. Must be true. | Yes |
    | **onReturn** | Function, Callback when the formulas modal is closed. | Yes |

## Event Listeners

* ### ON_OPEN_CHART_BUILDER

    Use this event get the widget to open a chart builder modal window.

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **filters** | Array, Currently applied transform filters for data requests. | No |
    | **isNew** | Boolean, Determines if it is on creation or editing mode. | Yes |
    | **user_id** | String, Id of Qrvey User. | Yes |
    | **app_id** | String, Id of Qrvey App. | Yes |
    | **chart_id** | String, Id of current chart editing chart, if isNew is false. | No |
    | **qrveyid** | String, Id of current Qrvey Dataset/Webform. | Yes |

* ### ON_AN_DUPLICATE_CHART

    Use this event call to use the widget to duplicate an existing chart.

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **body** | Object, Data of current chart. | Yes |
    | **user_id** | String, Id of Qrvey User. | Yes |
    | **app_id** | String, Id of Qrvey App. | Yes |
    | **qrveyid** | String, Id of current Qrvey Dataset/Webform. | Yes |

## Example
```
<script>
    function openChartBuilder() {
        var eventData = {
            detail: {
                user_id: "<USER_ID>",
                app_id: "<APP_ID>",
                qrveyid: "<QRVEY_ID>",
                isNew: true
            }
        };
        window.dispatchEvent(new CustomEvent("ON_OPEN_CHART_BUILDER", eventData));
    }
</script>
<button onclick="openChartBuilder()">Open Chart Builder</button>
<an-chart-builder></an-chart-builder>
<script src="https://your_qrvey_domain_widget_launcher/app.js"></script>
```