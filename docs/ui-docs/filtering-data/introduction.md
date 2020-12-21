---
id: introduction-to-filters
title: Introduction to Filters
sidebar_label: Introduction to Filters
---

<div style="text-align: justify">

Qrvey provides a filtering system to focus on the portion of the data relevant for your analysis, affecting the data displayed in the widgets. You can change these filters to focus on more specific data.

There are many different ways you can filter your data to focus on the things that matter. The essential aspects of the filtering system are described in this article for your reference.

## Hierarchy And Scope
Various filters apply in a hierarchical model: First, the data gets filtered by the security filters, then data filters for the user group refine it further, and so on. The full hierarchical model is shown in the image and the purpose of each layer is described below.

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/1_intro.png#thumbnail-60)


### Hidden Filters
The filters in this category are mainly for security purposes and are therefore hidden from the view of the end-users. That means that they have no visible component and cannot be interacted with.

* **Security Filters**: These are at the top of the hierarchy and applied before any other filter. The <a href="/docs/admin/record-level-security/" target="_blank"> Record Level Security </a> feature uses this type of filter to restrict users’ access to data they cannot see. Security filters are applied to datasets and rely on identifier columns in data. 
The scope of Security Filters is the entire application. I.e. they govern data used in workflows, pages, reports, etc.

* **Data Filters**: These are another type of security filters that don’t rely on any data column, but rather on the user group that the end-user belongs to. These may be defined by Creators, inside the <a href="/docs/ui-docs/builders/user-management/" target="_blank">User Management </a> section of the page builder to restrict access to the data based on the end-users’ user group. 
The scope of this type of filter is the end-user site.

* **Default Filters**: These are the filters that Creators may apply to an individual chart, inside the Chart Builder. Their scope is limited to the chart to which they have been applied.

### Interactive Filters
The filters in this category are defined by a Creator when building a report or a page, for analysis purposes and they can be interacted with. That means that the end-users can see and interact with these types of filters on the Filter Panel, turning them on or off, or adding new filters or conditions based on the permissions defined by Creators.
Given that Panels reside on Tabs which are in on a Page, and there may be multiple pages defined, the scope of these filters four layers grow and contain other layers, as you travel up the hierarchy.

* **Global Filters**: These are at the top of the hierarchy of interactive filters. A global filter applies to all the panels on all tabs on all pages.

* **Page Filters**: These come right after the global filters and apply to all of the panels on all tabs within that page.

* **Tab Filters**: Tab filters further refine data after page filters and they apply to all panels of the selected tab. 

* **Panel Filters**: These are the filters applied directly to the charts. Their scope is local, meaning they only apply to the chart where they were defined.

* **Action Filters**: These are the filters applied when using <a href="/docs/ui-docs/builders/pages_actions/" target="_blank"> actions </a> like *See Data, Filter by*, or *Drill-down*.
Action filters are special because their scope may be broader than one panel and may apply to the entire page, as decided by the choice made in the configuration panel (see the image below).

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/2_intro.png#thumbnail-40)

## Logic
When applying a filter several pieces come together to have the correct results, especially when mixing multiple filters. Each filter requires a boolean logic to refine the data based on the user’s criteria. Qrvey’s filtering system uses the following logic for each piece that comprises the full filter set:

* **Layers**: “AND” logic is used between each layer of filter to refine the data based on the hierarchy defined in the <a href="#hierarchy-and-scope">Hierarchy And Scope</a> section. 

Example: Select all records where [month of Date EQUALS to JANUARY 2019] **AND** [Customer Type EQUALS to Member].
Note that in the above example *Date* filter is in the Global Filter layer while *Customer Type* is in the Page filter layer.

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/3_intro.png#thumbnail-40)


* **Columns**: When filtering on multiple columns within the same layer, “AND” logic is used among the column filters.

Example: Select all records where [Branch EQUALS to A] **AND** [month of Date EQUALS to JANUARY 2019]
Note that in this example both columns are inside the same filter layer (both are Global).

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/4_intro.png#thumbnail-40)

* **Conditions**: When applying multiple conditions to the same column of data, “OR” logic is used between those conditions. 

Example: Select all records where [month of Date EQUALS to JANUARY 2019] **OR** [month of Date is AFTER MARCH 2019]

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/5_intro.png#thumbnail-40)


* **Values**: When selecting multiples values of the same column to filter the data, “OR” logic is used. 

Example: Select all records where [Branch is EQUAL to [A] **OR** [B]].

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/6_intro.png#thumbnail-40)

The following image sums up the filter logic used in Qrvey:

![introduction](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/filters/introduction/7_intro.png#thumbnail)

