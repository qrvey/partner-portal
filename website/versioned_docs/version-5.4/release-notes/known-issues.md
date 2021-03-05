---
id: version-5.4-known-issues
title: Known Issues
sidebar_label: Known Issues
original_id: known-issues
---
<div style="text-align: justify">



* **QV-12639 - Dates Swapped in Dataset Cards**: When an old dataset is reloaded, the dates of Created and Last Loaded appear swapped.

* **QV-12645 - Dataset Sync Is Executed in Off**: The Sync is turned off in the "Data Sync" tab, however, the sync is still being executed in the frequency configured the first time in the "Full Reload".

* **QV-12765 - The Data Source Pill Do Not Update**: When a dataset is created from another Dataset, an Index View, or a CSV connection, the child dataset pill name is not updated if the parent is changed. 


* **AN-12115 - Abbreviated States Do Not Appear On The Map**: If a column with abbreviated states is configured as geolocation and is used in maps like Bubble, Dot, or Choropleth, it shows as an error.


* **AN-12279 - Themed Font Styles on Downloads**: When there are font settings applied to a theme, these are not reflected in the PDF or JPG downloads.

* **AT-7974 - Date Picker Tooltip Appears Cut**: When the component has a long label at the top of the screen in the end-user widget, the tooltip appears cut at the top.

* **AT-8108 - Date Picker Dropdown Lists Are Incomplete in Safari**: When the user goes to the end-user widget and opens the date picker control from the safari browser, the Month/Year dropdowns appear incomplete.

* **AT-8116 - Filter Controls Do Not Update**: When the user adds more than one date picker and value lists using the same column and updates the filter, not all date pickers will update their calendars.

* **ADMIN-3626 - Applications Cannot Be Shared After a Dataset Is Deleted**: When the Admin user tries to install an application after a dataset had been deleted from the original application that has a dependency on the page, the application can't be installed. 
