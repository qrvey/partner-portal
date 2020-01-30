---
id: filters
title: Filtering Data
sidebar_label: Filtering Data
---

<div style="text-align: justify">

Filters allow you to drill down into your data by selecting only rows that meet certain criteria. Filters can be applied from a number of different places within the analysis areas of Qrvey.  You will find the Filter icon in every analytic view.  

In Tabular view just look for the **Filter** icon as shown below. 

![1_filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.1_filters/1_filters.png#thumbnail-60)

In Summary, Custom, and Metric views, filters can be applied from any individual chart panel. 

![2_filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.1_filters/2_filters.png#thumbnail-60)


## Adding a Filter
After clicking on the **Filter** icon the **Filters** window will appear as shown below.  

![6_filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.1_filters/6_filters.png#thumbnail-80)

The options available in the **Filters** window will vary according to the type of the column selected in the **Filter by** drop-down. Note, that the **Filter by** drop-down allows you to search for a column name, which is really useful if you have a large number of columns.

### Numeric Filters
If you select a numeric type column for the filter, then you will be able to select the filter condition to apply, and a related filter value, or value range for the **Between** condition. Click the **+&nbsp;Add&nbsp;Filter** button to add the specified filter criterion. You may add additional criteria for the selected column to meet your analysis needs. For example, you may want to select weather records where the daily maximum temperature is at least 110℉ or no more than -20℉.  

![7_filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.1_filters/7_filters.png#thumbnail-80)

The following filter conditions can be used for numeric columns:

- Equals
- Does Not equal
- Greater than or equal to
- Less than or equal to
- Between

> If you add multiple filter criteria for a field, then all the records that meet **any** of the criteria will be selected.

As you add filter criteria, they will be displayed in the **Added Filters** panel, with a **╳** (delete) button after each displayed filter value. Click the **╳** button to remove the associated filter criterion. You can also click the **Reset** button to remove all of the displayed filter criteria.

Once you have added all the filter criteria for the numeric field, click the **Apply Filter** button to close the **Filters** window and see the filtered results.

### Text Filters

If you select a text type column then you can use the **Filter by condition** panel, and/or the **Filter by value** panel, to create the desired filter criteria. 

![8_filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.1_filters/8_filters.png#thumbnail-80)

The **Filter by condition** panel is open when you first select a text column to filter by. If you want to use the **Filter by value** panel, you simply click on that panel to open it.  

With the **Filter by condition** panel, you first select the condition to be applied to selected field. If the selected condition requires a test value, then a value box will appear. Enter the required test value and click the **+&nbsp;Add&nbsp;Filter** button to add the specified filter criterion. You can enter a comma delimited list of values to create multiple filter criteria with the same condition. You may also add additional criteria using a different condition for the selected column to meet your analysis needs.

The following filter conditions can be used for the **Filter by condition** panel – All of which, with the exception of the last two, require a test value.

- Equals
- Does Not equal
- Contains
- Does Not Contain
- Starts with
- Ends with
- Is empty
- Is not empty

With the **Filter by value** panel you first enter a search string and click the **Search** button to generate a list of matching distinct values in the selected column. Then you select the desired condition from the drop-down list, and click one or more listed entries to generate search criteria. Click the **Results(...)** entry at the top of the list to generate filter criteria using each of the values from the list.

The following filter conditions can be used for the **Filter by value** panel:

- Equals
- Does Not equal
- Contains
- Does Not Contain
- Starts with
- Ends with

![4_filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.1_filters/4_filters.png#thumbnail)

As you create filters, they will appear in the **Added Filters** panel on the right, grouped by the filter condition. Each filter condition and each value has an associated **╳** (delete) button. Click the **╳** button next to a condition to remove it and all associated values, or click the **╳** button next to a value to just remove that value. You can also click the **Reset** button to remove all displayed filter criteria.

Once you have added all filter criteria for the text field, click the **Apply Filter** button to close the **Filters** window and see the filtered results.


> If you add multiple filter criteria for a field, all records that meet **any** of the criteria will be selected.

## Review and Manage Filters
You can easily review and manage the current set of filters by clicking the **Filter** icon, which is in the upper-right corner of every analytic view. This will alternately show and hide the list of filters.

To disable or enable a single filter value, use the associated checkbox. Similarly, use the checkbox next to a filter column to disable or enable all associated filter criteria. Use the **Filters** toggle at the top to disable or enable all of your filters in one simple action. 

You can permanently remove a filter value by clicking the **╳** (delete) button next to it. Click the <span style="color:orange">**˅**</span> button next to a filter column to get the context menu, which allows you to **Edit** or **Remove** the filter criteria for that column. 

Click the **Reset All** to remove all filters. 

![5_filters](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/3.4.3.1_filters/5_filters.png#thumbnail-80)