---
id: chart-filters
title: Chart Filters
sidebar_label: Chart Filters
tags: [Data Analyst]
---

<div style={{textAlign: "justify"}}>

While building your chart, you are able to create and apply *Internal FIlters* to its data. These filters are part of the chart and will be retained in all instances of the chart across the entire application. Furthermore, they are not visible outside of the edit mode and can’t be used for interaction. This makes them a secure and “hidden” way of filtering the data. 

Other interactive filters, within various scopes, can be applied to data from other access points. A comprehensive guide to those filters can be found in the <a href="" target="_blank">Filtering Data </a>section of this site and the method of creating those applies to the Internal Chart Filters, also, and can be used to learn more about filter creation, in general.

To add a filter click on **Add Filters.**

![chart-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/filters/filter1.png#thumbnail-20)


Select the column you would like to apply a filter on from the list of dataset columns that is presented. The options that appear depend on the data type of the selected column. Choose the operator and desired values and click on **Apply**. 

![chart-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/filters/filter2.png#thumbnail-40)


The filter and its selected values will be displayed under the **Filters** section. 

![chart-filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-builder/chart-configuration/filters/filter3.png#thumbnail-40)


Any number of filters can be added to the chart. An *AND* logic will be applied between the filters on various columns, but filters set up on the same column will be set to *OR*.

The Internal chart filters cannot be edited to change their condition. You may however remove each value, or the entire filter, from the **X** icon next to each value or the filter. To edit or remove this filter, you will need to click on the option to **Edit** the chart first and then edit the filter.

For more information about filters and their hierarchy, see [Overview of Filters](../../filters/overview-of-filters.md).

Applies to: All charts


</div>