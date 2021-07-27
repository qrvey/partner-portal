---
id: release-mar-2020
title: Qrvey Version 5.0
sidebar_label: March 2020
---
<div style={{textAlign: "justify"}}/>
Qrvey 5.0 - 2020-03-31

## New Features & Enhancements

### Data Preparation

-   **QV-9804 - Dataset Creation**: We made substantial changes in the data creation and preparation flow. Datasets can now be created using the same data connections we supported before — MySQL, SQL Server, PostgreSQL and Oracle — and in addition users will be able to create datasets from existing datasets that have been created through our APIs or directly in Qrvey Composer. 

-   **QV-9804 - Data Joins**: We added the ability to create datasets from joined data. This means that during the creation process, creators can begin with a single data source and start joining data from different data sources. We are supporting Left, Full, Inner, Right joins and the ability to select multiple columns for the join definition. Creators will be able to see all of the joined columns in the “Join Output” section. 


-   **QV-9700 - View Data**: After setting up connections, creators can see a view of the data to know if the data source they selected has the correct set of data. For Database Connections, a database and table are needed in order to have the view of the data. In addition, while creating and configuring the dataset the same view is available for each data source added. 

### Data Analysis & Automation

-   **CB - 360 - Chart Builder**: We are introducing the new chart builder widget which continues to support Bar, Line, Symbol, Pie charts as well as Heatmap, Crosstab, Table, Maps visualizations, Heatmaps, and Word Clouds. In this new chart builder, creators can build and explore visualizations to obtain insights in an easier and more flexible way through the use of the canvas and the column shelf. Creators can easily switch from one visualization to another and work with a range of settings offered for each type of visualization. Filters can be added directly from the creation process and will be retained in all instances of the chart.  

-   **AN- 8989 - System Messages**: We improved the error and system messages for charts when handling dependencies such as deleting data links, buckets, formulas so users can see the issue when a chart is not displayed. 

## General Tweaks and Bug Fixes

-   **ADMIN-1928 - Content Deployment - Share Spreadsheets**: We are not currently supporting the sharing of CSVs data in application sharing. 

-   **AN-8689 - CrossTab - Totals in Groups per Week are Incorrect**: The total for the last group (week) is wrong when the user creates a crosstab and the user sets, as the first level of a row, a date field, then the user makes a Date grouping with Quarter, and as the second level of rows the user sets a formula.

-   **AT - 5863 - Builders - Datasets not Listed**: Datasets for filters are not listed when a chart, which is on the same page tab, is deleted.

-   **AT - 5803 - Page Builder - Filters not Duplicated when Duplicating Pages**: When a page is duplicated, the filters of  Tabs, Pages, and Panels are not duplicated.
