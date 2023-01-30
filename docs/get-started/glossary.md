---
id: glossary
title: Glossary of Common Terms
sidebar_label: Glossary of Common Terms
---

<div style={{textAlign: "justify"}}>

The Qrvey glossary helps to clarify some of our most commonly used data, analytics and automation terms. See something confusing that's not mentioned here? Please, let us know at <help@qrvey.com>

## A

**Action** - The automation workflow or chart configuration element that performs the work you designate.

**API** - Application Programming Interface. Developers use APIs to integrate Qrvey with third-party applications and data sources.

**Application** - In Qrvey terminology, an Application is the isolated parent entity that holds datasets, webforms, visualizations, dashboards, and automation workflows. Qrvey Applications can be used as a simple standalone web interface for consumers. 

## B

**Branch** - A term used in webforms when creating forms, surveys or quizzes. A “Branch” of a webform is a question(s) a user will answer as a result of their answer to a previous question. For example, if a user answers question 1 with “Yes”, then they get question 2. If that same user answers “No”, then they skip to question 3.

## C

**Category** - Commonly referred to as dimensions in the analytics field, are data columns that are used to categorize, or group data by. Category is mostly a metadata type of string, date, or yes/no and is displayed as a blue pill in Chart Builder.

**Chart Builder** - The tool in Qrvey that allows users to build custom charts to visualize their data.

**Choropleth Map Chart** - A style of map chart that displays data through a color range, applied to specific geographic regions. A common use is to display data within the states of the United States of America. The data will appear similar to a heat map in that the shade of the color indicates the data range according to the map legend.

![databases](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/glossary/choro-map.png#thumbnail-40)

**Column Pill** - a field with data you can drag from the Data Panel onto the canvas/shelf.

**Column Shelf** - is the area above the chart where you can see the values for each Column Pill (*Category, Value, Series, Pivot*).

**Conditional Question** - A question used in webforms that only appears based on the answer to a previous question. See “Branch” above.

**Configuration Panel** - the panel on the right-side of Chart Builder where you can choose chart types and modify chart settings.

**Consumer User** - Users of the application that will consume visualizations for analysis. These users are often the users, tenants, or subscribers of SaaS applications that embed Qrvey for analysis. These users, by default, do not have access to create visualizations or automation workflows. Consumer Users are sometimes referred to as End Users.

**Creator User Type** - Also referred to as a Composer, is a user with access rights to create datasets, web forms, analytics visualizations, workflows and applications in Qrvey.

**Custom Columns** - or *New Columns*, are the columns that are not listed in the Dataset configuration or Data Source configuration but can be added later when new records are added and the data is reloaded. At the time of creating or editing a Dataset, we don’t know these columns exist.

## D

**Dashboard** - A collection of charts, filters, images, and other visual components, placed on a surface called a “canvas”. Multiple dashboards can be combined with a common navigation bar and optional authentication to build standalone Qrvey Applications. They can also be embedded within wrapper/host web applications. In Qrvey, Dashboards are sometimes referred to as Pages.

**Data Panel** - the left-side panel in the Chart Builder where you choose the dataset and view the Values and Categories it contains.

**Data Field** - a Category or Value data.

**Dataset** - A collection of columns from one, or multiple data sources, that may be augmented with Transformations, to provide data for analysis purposes.

## E

**End User** - Users of the application that will consume visualizations for analysis. These users are often the users, tenants, or subscribers of SaaS applications that embed Qrvey for analysis. These users, by default, do not have access to create visualizations or automation workflows. End Users are sometimes referred to as Consumer Users.

**Expression Question** - A question type that allows a respondent to express how they feel by selecting from a pre-chosen list of words.

## F

**Filter** - A condition applied during the analysis to exclude data that does not meet the specified conditions.

**Form** - A specific type of web form that is typically used to collect information and interact with applications.

## G

**Global Filter** - A filter that applies to all of the Dashboards.

## H

**Histogram** - A type of chart that represents data within a group of ranges. Histograms are mostly used to show the distribution of data. In Qrvey, a histogram chart is used as the default Summary View of Web Forms, to show the distribution of web form responses that were received.

## I

**Internal Filters** - or Chart Filters, are the filters that are part of the chart and will be retained in all instances of the chart across the entire application. They are not visible outside of the edit mode and can’t be used for interaction.


## J

**JSON** - Javascript Object Notation. It’s the open standard data format used by Qrvey's API to exchange data.

## K

**KPI Charts** - A Key Performance Indicator. A measurable value that demonstrates how effectively something (e.g. a company, or business unit) is achieving key business objectives. KPIs are typically visualized using simple charts and “gauges” such as the Qrvey [Indicator](../ui-docs/dataviews/chart-types/indicator.md), [Bullet](../ui-docs/dataviews/chart-types/bullet.md), and [Dial](../ui-docs/dataviews/chart-types/dial.md) Gauges. 

## L

**Lookup** - A field type that displays a predefined list of values from which a respondent must choose. Lookups get their data from manually typed lists, other web forms, web hooks or other data sources like Google Docs.

## N

**Net Promoter Score (NPS)** - A one-question survey that allows businesses to track their customer satisfaction over time. NPS uses a simple 1-10 scale and divides customers into three groups: *promoters, passives* and *detractors*. The actual NPS score is calculated by subtracting the percentage of detractors from the percentage of promoters, yielding a number between -100 and +100.

**New Columns** - or *Custom Columns*, are the columns that are not listed in the Dataset configuration or Data Source configuration but can be added later when new records are added and the data is reloaded. At the time of creating or editing a Dataset, we don’t know these columns exist.


## O

**Outlier** - A data point that falls outside statistical norms. These values are considered anomalies.

## P

**Page** - Old terminology - Please see Dashboards.

**Piping** - Piping allows the answer from one question to automatically be inserted into other questions in a web form. Qrvey uses the hashtag (##) and the name you provide as a placeholder for the answer in subsequent questions.

## Q

**Qrvey** - An all-in-one analytics platform for SaaS providers that includes data collection, analysis, automation and integration tools to promote data-driven decision making.

## R

**Range** - The difference between the min and max values on a chart axis

**Recipient** - Someone who receives an automated email from a workflow action. If the recipient clicks on a link in an email they may be shown a web form to complete. If they complete the form they become a respondent. See our entry below for Respondent.

**Respondent** - Someone who completes a web form. For example, a respondent may be someone you ask to answer a series of questions in a survey via email or text, or someone who responds to a Qrvey link on a website, blog or social media post.

## S

**Scale** - The system of marks, usually on the y axis of a chart, that define the relation between the units that are used in the chart with their visual representation. For example, each 1 interval may represent 50 units.

**Survey** - A type of web form that collects data from individuals using a set of questions.

## T

**Time Series** - A dataset with a date/time field. This provides the ability to view, analyze and compare results over time, such as by days, weeks, months or years.

**Token** - A placeholder that can be used in many places in Qrvey. Tokens are mostly used inside formulas and workflows to be later resolved with the appropriate values. For example, the token {{TODAY}} used in the subject of an email will be replaced with the current date at the time that the email is distributed.

**Trend Analysis** - A chart of a *Time Series* used to visually explore time-related patterns and correlations.

**Trigger** - A workflow element used to initiate a process.

## U

**User Permissions** - Users can be assigned different permissions within an application depending on their role.

## V

**Value** - A numeric data column that is used in a chart. A *Value* is typically equivalent to a *measure* in the analytics field and is displayed as a green pill in Chart Builder.


**Variable** - A system variable - e.g. the current user name, the system date/time, etc. See also - Token.

## W

**Web Form** - A data collection tool that can be used inside Qrvey as a part of Dashboards and Workflows, or shared externally via email, social media or embedded in a website.

**Widget** - A pre-built web control, e.g. chart, form, etc., used to allow easy embedding of Qrvey functionality into a website or application. Typically just a code snippet is needed - with little to no associated coding or development - to embed a widget.

**Workflow** - An automation workflow is a series of triggers, conditions and actions that work together to perform a specific function.

## X

**XY Charts** - charts that are used to compare data between different groups or categories. They are also used to track changes over time. Look also [Bar](../ui-docs/dataviews/chart-types/bar.md), [Line](../ui-docs/dataviews/chart-types/line.md), [Symbol](../ui-docs/dataviews/chart-types/symbol.md), [Min/Max](../ui-docs/dataviews/chart-types/min-max.md) charts.


## Y

**Yes/No** - A simple binary question type that only has two responses, such as "yes" or "no", "true” or false", or similar alternatives.


</div>