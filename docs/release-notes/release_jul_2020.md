---
id: release-jul-2020
title: Qrvey Version 5.3
sidebar_label: July 2020
---
<div style="text-align: justify">

## New Features & Enhancements
Click <a href="/docs/next/video-training/release/version-5.3"> <strong>here</strong></a> for demo videos on some of the released features.




### Data Preparation
* <a href="docs/ui-docs/datasets/datasets/"> <strong> QV-10993 - Formatting Date columns</strong></a>: We added the option to let creators define the format of date columns when setting up their datasets. This format will be visible in the rest of the application when these columns are used.

* <a href="docs/ui-docs/datasets/datasets/"> <strong> QV-10994 - Formatting Numeric columns</strong></a>: We added the option to let creators define the format of numeric columns when setting up their datasets. This format will be visible in the rest of the application when these columns are used.

 
* **DR-1781 - Batch Manager - (Re)Start from Batch**: We added a new endpoint so that our users can start or restart the batch process (sequential load) from the specified batch. This means the data loading process will start running from the specified folder. Users can also reset the status of all batches so they can be processed again.

### Analytics and Automation

* **AN-9961 - Style Enhancements for Indicator Metric**: We implemented some enhancements to the indicator Metric such as the ability to edit the text color and styles, the ability to have control over the symbol, and direction used for each indicator, and the Thresholds section removal.

* <a href="docs/ui-docs/dataviews/chart-builder/"> <strong> AN-9978 - Continuous vs Discrete Date Values</strong></a>: We added a feature in Chart Builder that allows creators to include the missing time periods between the start and end date, even if there is no data within those dates by selecting to show “Continuous” values instead of “Discrete” values.

* <a href="docs/ui-docs/builders/page-actions"> <strong> AT-6653 - Page Actions - Metrics</strong></a>: We added a feature to let creators set up page drill actions on Metric Panels so that end-users can be redirected to another page, tab, or an external page.

* <a href="docs/ui-docs/builders/user-management/"> <strong> AT-6651 - OpenID Authentication for End-Users</strong></a>: We added a feature to give end-users a way to use their own authentication methods like OpenID when logging in the Qrvey Application.

* <a href="/docs/ui-docs/builders/pages/#pages"> <strong> AT-6611 - End-User Filters Panel Default View</strong></a>: We added a setting that allows creators to define the filter panel behavior on the end-user side. Creators can select if they’d like to display the panel always open or closed. 


### Admin Center


* <a href="docs/admin/admin-sections-platform/"> <strong> ADMIN-2608 - OpenID Authentication for End-Users</strong></a>: 
We added the option that allows Admins to enable and set up OpenID parameters for End User login options.  This will give End Users the possibility of using their own authentication methods like OAuth, OpenID, or SAML when logging in the Qrvey Application.
