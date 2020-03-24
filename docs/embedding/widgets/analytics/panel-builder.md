---
id: widget-panel-builder
title: Panel Builder
sidebar_label: Panel Builder
---

<div style="text-align: justify">

This Chart Builder Modal widget requires `<my_cdn>/chart-builder/anchartbuilder.js` script file and 
uses the `<an-chart-builder-modal>` Custom HTML Tag

## Configuration Object
> The Chart Builder widget doesn't have a configuration object.

## Chart Model Object

This object represent the genereated Model implemented by Chart Panels .

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

## Dispatched Events

* ### ON_AN_CHART_DUPLICATED

    This event is emitted when a chart has been duplicated.

    Detail: Chart Model Object

* ### ON_AN_CHART_BUILDER_SAVED

    This event is emitted when a chart has been created.

    Detail: Chart Model Object

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

    Use this event get the widget to open a chart builder modal window in order to create a new chart.

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **domain** | String, Main url of Qrvey Core platform. | Yes |
    | **api_key** | String, API Key of current Qrvey Environment. | Yes |
    | **filters** | Array, Currently applied transform filters for data requests. | No |
    | **isNew** | Boolean, in this case set to `true`. | Yes |
    | **user_id** | String, Id of Qrvey User. | Yes |
    | **app_id** | String, Id of Qrvey App. | Yes |
    | **qrveyid** | String, Id of current Qrvey Dataset/Webform. | No |
    
    For Chart Edition, it's required to send the **ChartModel Object** adding it the following properties:

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **domain** | String, Main url of Qrvey Core platform. | Yes |
    | **api_key** | String, API Key of current Qrvey Environment. | Yes |
    | **filters** | Array, Currently applied transform filters for data requests. | No |
    | **isNew** | Boolean, in this case set to `false` | Yes |
    | **user_id** | String, Id of Qrvey User. | Yes |
    | **app_id** | String, Id of Qrvey App. | Yes |
    | **qrveyid** | String, Id of current Qrvey Dataset/Webform. | No |

* ### ON_AN_DUPLICATE_CHART

    Use this event call to use the widget to duplicate an existing chart.

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **body** | Chart Model Object, Data of current chart. | Yes |
    | **user_id** | String, Id of Qrvey User. | Yes |
    | **app_id** | String, Id of Qrvey App. | Yes |
    | **qrveyid** | String, Id of current Qrvey Dataset/Webform. | Yes |

## Example
```
<script>
    function openChartBuilder() {
        var eventData = {
            detail: {
                "domain": "https://your_qrvey_domain",
                "api_key": "<API_KEY>",
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
<an-chart-builder-modal></an-chart-builder-modal>
<script src="https://your_qrvey_domain_widget_launcher/app.js"></script>
```