---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---
<div style="text-align: justify">


* **DR-2363 - Dataset From Joined CSV Appear Blank:** When a user creates a dataset by joining a few CSVs as the data source and these data sources have dots in their headers, those columns with dots show the data in blank when it is loaded.

* **QV-12639 - Dates Swapped in Dataset Cards**: When an old dataset is reloaded, the dates of Created and Last Loaded appear swapped.

* **QV-12645 - Dataset Sync Is Executed in Off**: The Sync is turned off in the "Data Sync" tab, however, the sync is still being executed in the frequency configured the first time in the "Full Reload".

* **QV-12765 - The Data Source Pill Do Not Update**: When a dataset is created from another Dataset, an Index View, or a CSV connection, the child dataset pill name is not updated if the parent is changed. 

* **QV-12800 - The Transformation Cards Do Not Reorder**: When the user creates some Transformations and then drags and drops the cards to rearrange them, the transformation cards do not stay in that order after reloading the page.

* **QV-12817 - Favorite Question Added From a Branch Does Not Remain in Other Surveys**:  When the user creates a Survey and adds a question from "Favorites" that belong to a branch of another survey, the question is displayed in the view, but when the user activates the Survey and goes to the End-User URL, the question is not being displayed and it also disappears in Survey Design.

* **AN-12115 - Abbreviated States Do Not Appear On The Map**: If a column with abbreviated states is configured as geolocation and is used in maps like Bubble, Dot, or Choropleth, it shows as an error.

* **AN-12234 - “Is null” Filter Has a Wrong Message**: The user has a grouped table with a date column and when a filter by a date that does not exist is applied, a "No data found" message appears in the panel. Even when that filter is turned off, the same message appears. 

* **AN-12243 - The Filter Modal Shows No Data Found**: The user has a dataset that has 18,342 records and when a date column is grouped by minutes or seconds, the application shows an empty state "The combination of data used in this chart exceeds the maximum numbers of datapoint...". When filtering by Minutes or Seconds, the application shows "No data found". 

* **AN-12279 - Themed Font Styles on Downloads**: When there are font settings applied to a theme, these are not reflected in the PDF or JPG downloads.

* **AT-7974 - Date Picker Tooltip Appears Cut**: When the component has a long label at the top of the screen in the end-user widget, the tooltip appears cut at the top.

* **AT-8108 - Date Picker Dropdown Lists Are Incomplete in Safari**: When the user goes to the end-user widget and opens the date picker control from the safari browser, the Month/Year dropdowns appear incomplete.

* **AT-8116 - Filter Controls Do Not Update**: When the user adds more than one date picker and value lists using the same column and updates the filter, not all date pickers will update their calendars.

* **AT-8160 - Automatic Links Do Not Update When Removing Panel**: When a user removes a chart with auto links, the last update disappears and the predefined links remain there.

* **ADMIN-3626 - Applications Cannot Be Shared After a Dataset Is Deleted**: When the Admin user tries to install an application after a dataset had been deleted from the original application that has a dependency on the page, the application can't be installed. 
