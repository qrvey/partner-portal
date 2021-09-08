---
id: introduction-to-filters
title: Introduction to Filters
sidebar_label: Introduction to Filters
---

<div style="text-align: justify">

Qrvey provides a filtering system to focus on the portion of the data relevant to your analysis, affecting the data displayed in the widgets. You can change these filters to focus on more specific data.

There are many different ways you can filter your data to focus on the things that matter. The essential aspects of the filtering system are described for your reference in this article.

## Hierarchy and Scope
Various filters apply in a hierarchical model: First, the data gets filtered by the security filters, and then the data filters for the user group refine it even further. The full hierarchical model is shown in the image and the purpose of each layer is described below.

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/1intro.png#thumbnail-60)


### Hidden Filters
The filters in this category are mainly for security purposes and are therefore hidden from the end-user view. This means that they have no visible component and cannot be interacted with.

* **Security Filters**: These are at the top of the hierarchy and applied before any other filter. The <a href="/docs/admin/record-level-security/" target="_blank"> Record Level Security </a> feature uses this type of filter to restrict user's access to any data they don't have the permission to see. Security filters are applied to datasets and rely on identifier columns in data. 
The scope of Security Filters is the entire application, i.e. they govern data used in workflows, pages, reports, and so on.

* **Data Filters**: These are another type of security filters that don’t rely on any data column, but rather on the user group that the end-user belongs to. These may be defined by Creators, inside the <a href="/docs/ui-docs/builders/user-management/" target="_blank">User Management </a> section of the page builder to restrict access to the data based on the end-user's user group. 
The scope of this type of filter is the end-user site.

* **Default Filters**: These are the filters that Creators may apply to an individual chart, inside the Chart Builder. Their scope is limited to the chart to which they have been applied.

### Interactive Filters
The filters in this category are defined by a Creator when building a report or a page for analysis purposes and they can be interacted with. That means that the end-users can see and interact with these types of filters on the Filter Panel, turning them on or off, or adding new filters or conditions based on the permissions defined by Creators.

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/interactive.png#thumbnail-60)


Just as a Page may contain multiple Tabs and a Tab may have many Panels on it, the scope of their filters also corresponds to the same hierarchy: A Global filter scope spans across all Pages; The scope of Page filters includes all Tabs; and the scope of Tab filters includes all Panels on the Tab. For more on how to apply Interactive Filters please see the <a href="/docs/ui-docs/filtering-data/working-with-filters">Working With Interactive Filters</a> article.

* **Global Filters**: These are at the top of the hierarchy of interactive filters. A global filter applies to all the panels on all tabs on all pages.

* **Page Filters**: These come right after the global filters and apply to all of the panels on all tabs within that page.

* **Tab Filters**: Tab filters further refine data after page filters and they apply to all panels of the selected tab. 

* **Panel Filters**: These are the filters applied directly to the charts. Their scope is local, meaning they only apply to the chart where they were defined.

* **Action Filters**: These are the filters applied when using <a href="/docs/ui-docs/builders/pages_actions/" target="_blank"> actions </a> like *See Data, Filter by*, or *Drill-down*.
Action filters are special because their scope may be broader than one panel and may apply to the entire page, as decided by the choice made in the configuration panel (see the image below).

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/2_intro.png#thumbnail-40)

## Filter Logic
When applying a filter several pieces come together to have the correct results, especially when mixing multiple filters. Each filter requires a boolean logic to refine the data based on the user’s criteria. Qrvey’s filtering system uses the following logic for each piece that comprises the full filter set:

* **Layers**: We call each scope in the hierarchy of interactive filters a “Layer” - **Global, Page, Tab**, and **Chart** panels are considered Layers.
“AND” logic is used between each layer of filter to refine the data based on the hierarchy defined in the <a href="#hierarchy-and-scope">Hierarchy and Scope</a> section. 

    Example: In the following image, we show a case where we want to filter the sales data for all pages to only include sales for the US. So a Global filter has been set to filter “*country Equals USA*”.
Also, we want to concentrate on the sales for the first quarter of 2020 in the “*Sold Items per Quarter*” chart. So we set a Panel filter for the chart to filter “*orderDate Quarter Equals Q1 2020*”. 
Since these two filters are on different layers, the logic between them is *AND*, resulting in the combined filter to show sales data for only Q1 2020 and in the US.


![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/intro3.png#thumbnail-40)


* **Columns**: When filtering on multiple columns within the same layer, by default “AND” logic is used among the column filters, however that logic can be changed to “OR”.

    Example: Consider the same chart from the previous example. We still have set the Global filter to “*country Equals USA*”. But in this case we want to filter all of the charts that are based on the same Sales Data dataset so that they show data for “*orderDate Quarter Equals Q1 2020*”. So we set this second filter at the Global level, too. By default, the filter logic between the two filters will be *AND*, resulting in the exact same visualization.


![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/intro4.png#thumbnail)


 The difference here is that this filter has been set among the columns of the same dataset and in the same scope layer and therefore the logic can be changed from And to Or, resulting in the data for either US for any date, or Q1 2020 of any country. This result set can be substantially bigger, as seen in the next image.

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/intro5.png#thumbnail)

* **Conditions**: When applying multiple conditions to the same column of data, *“OR”* logic is used between those conditions.

Example: Again, consider the same chart as in the previous examples. In this example, we are looking for data that was either generated in Q1 2020 or prior to year 2019. The two different  conditions apply to the same column of the same dataset and *OR* logic is used between them:
*orderDate Quarter Equals Q1 2020* **OR** *orderDate Quarter is Before Q1 2019*.
Note the gap between the last two bars in the image below, which is the result of all quarters of 2019 having been filtered out.

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/intro6.png#thumbnail)



* **Values**: When selecting multiple values of the same column to filter the data, *“OR”* logic is used.  

Example: Select all records where *orderDate Quarter is Equal to Q1 2020* **OR** *Q1 2019*.

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/intro7.png#thumbnail) 


>**Note**: Filter logic can **only** be edited to AND/OR within the same scope (only within Global Filters or Panel filters or Page filters). OR logic is used for multiple values within the same filter (Country: USA or Australia or Spain). AND logic is applied to filters in different scopes (Global filters and Panel filters and Page filters). 


The following image sums up the filter logic used in Qrvey. Logic between columns can be changed, as explained more in the <a href="#edit-filter-logic">Edit Filter Logic</a> section, below:

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/7intro.png#thumbnail)






