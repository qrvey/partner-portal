---
id: release-8.0
title: Qrvey 8.0
sidebar_label: Qrvey 8.0
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
---
<div>

Release Date: 2023-02-01

 >**Note**: If you wish to upgrade to this version, please contact the CX team if you have a Managed Infrastructure contract. Otherwise, please see the [Upgrade Notes](../../../v2-website/versioned_docs/version-8.0/release-notes/upgrade-notes.md) document for important notes and access to the upgrade link. 


**Qrvey Version 8.0** is a major release and introduces the following significant features and enhancements:
* Live Connect support for snowflake and Redshift databases
* Dashboard 2.0 with Responsive Design option
* Static Reports (beta, access on-demand)

Read about these features in the related articles and contact the Qrvey team for demo, training, or more information on these.
Please note that what was formerly known as a “Page” has been renamed, retooled, and enhanced to “Dashboard”. Your embedded Pages will continue to work, but enhanced to include the new Dashboard features.


## New Features & Enhancements

### Data Preparation

* **[Live Connect Datasets](../../composer/05-Working%20with%20Data/Datasets/01-Overview%20of%20Datasets/live-connect-datasets.md)**: We have added support for Live Connections to make the platform able to analyze data coming directly from Snowflake, and Redshift without loading them into Elasticsearch. Live Connect datasets can be used for analysis the same way as managed datasets. <a href="/docs/video-training/release/version-8.0#live-connections" target="_blank" className="tooltip"><img alt="Live Connect" src="https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/release-notes/video_icon.png#thumbnail-20" className="video-icon-png" /><span className="tooltiptext">Watch video</span></a> 
 
### Data Analysis & Visualization

* **Geographical Coordinates (Lat/Long)**: We now support latitude and longitude for creating geolocation groups. Bubble maps and Dot maps support these coordinates.

* **Manage Multiple Geolocations Groups**: With this version we support multiple geolocation groups simultaneously.

* **Dashboard 2.0**: What was called a Page has been renamed to Dashboard, and redesigned and enriched to support responsive design, single dashboard editing, and more. With the new change it also includes a list of Dashboards that can be searched and individually edited, like all of the other Qrvey content assets.

* **Responsive Grid**: We added the Responsive Grid as an option to create dashboards with better tools and a better responsive canvas that will allow users to publish reports on any device without compromising design.

* **Multiseries Combo Chart Exports**: We now support JPG, Excel, CSV, and PDF export options for the new Multiseries Combo chart.

* **Excel Export in Analyze View**: We implemented Excel exports from Analyze view.

### Administration

* **Showing Users Related to the Role**: You can now see the users related to a role when configuring a send app action.

### General Tweaks & Bug Fixes

* **Creating Dataset Issue with MongoDB (bug fix)**: A bug that prevented large rows from a MongoDB collection to be loaded, has been fixed.

* **Shared Data Tab Waiting Icon (UX change)**: The loading UI of the “Shared Data” tab uses skeleton squares for waiting state, instead of the spinner.

</div>