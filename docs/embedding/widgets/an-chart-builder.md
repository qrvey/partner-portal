---
id: an-chart-builder
title: Chart Builder - <an-chart-builder/>
sidebar_label: AN Chart Builder
---

This Chart Builder Modal widget require `<my_cdn>/chart-builder/anchartbuilder.js` script file and 
use the `<an-chart-builder>` Custom HTML Tag

## 1. Configuration Object
> The Chart Builder widget doesn't have a configuration object.


## 2. Dispatched Events:

* ### ON_OPEN_CHART_BUILDER

    This event is emitted when the user clicks on the &quot;Next&quot; button after chart type selected.

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

## 3. Event Listeners:

* ### ON_OPEN_CHART_BUILDER

    This event call a method inside the widget to open the chart builder modal.

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **filters** | Array, Current applied filters transformed for requests. | No |
    | **isNew** | Boolean, Determines if it is on creation or editing mode. | Yes |
    | **user_id** | String, Id of Qrvey User. | Yes |
    | **app_id** | String, Id of Qrvey App. | Yes |
    | **chart_id** | String, Id of current chart editing chart, if is the case. | No |
    | **qrveyid** | String, Id of current Qrvey Dataset/Webform. | Yes |

* ### ON_AN_DUPLICATE_CHART

    This event call a method inside the widget when a chart is being duplicated.

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **body** | Object, Data of current chart. | Yes |
    | **user_id** | String, Id of Qrvey User. | Yes |
    | **app_id** | String, Id of Qrvey App. | Yes |
    | **qrveyid** | String, Id of current Qrvey Dataset/Webform. | Yes |

## 4. Example:
```
<script>
    function openChartBuilder() {
        var eventData = {
            detail: {
                user_id: "c0T3iVh",
                app_id: "lgVBzjr",
                qrveyid: "Nw9eKKe",
                isNew: true
            }
        };
        window.dispatchEvent(new CustomEvent("ON_OPEN_CHART_BUILDER", eventData));
    }
</script>
<button onclick="openChartBuilder()">Open Chart Builder</button>
<an-chart-builder></an-chart-builder>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/chart-builder/anchartbuilder.js"></script>
```