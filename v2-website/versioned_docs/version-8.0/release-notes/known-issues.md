---
id: known-issues
title: Known Issues
sidebar_label: Known Issues

---
<div>


* **QV-16259 - Too Many Unions or Joins - Error: "exceeded the maximum allowed size"**: The endpoint draft is throwing a dynamoDB error when a dataset has a lot of unions.

* **QV-16053 - Datasets - The "In Use" tag is not working properly**: The "In Use" flag of Datasets does not reflect its status accurately.

* **QV-14238 - Datasets - Timeout errors**: When a user tries to reload a list of Datasets from different applications using a script with many requests (around 100), it returns many "time out exceptions".

* **QV-13881 - Deleted Datasets remain visible**: When a user deletes an index on a dataset created previously and tries to create a new dataset from that dataset, the application shows the dataset that was deleted.

* **AN-17619 - Multiseries/Maps - Theme Palette Colors are not Applied**: With embedded Multiseries bar, Maps, and Box & Whiskers charts, some style settings like the theme palette colors do not apply if changed.

* **AN-17618 - Pie Chart - Main Color is not Applied**: With embedded Pie Charts, some style settings like the main color do not apply if changed.

* **AN-17275 - Box and Whisker Chart - Allow rotation of labels for both axes**: Currently labels for one of the axes can be rotated. 

* **AN-16780 - Safari: Charts show two tooltips**: Two tooltips are displayed in Safari when hovering over a chart with long, truncated tooltips.

* **AN-16044 - Small Multiple - Multiple labels - works only with a refresh**: When a user applies small multiples to a chart, the option Multiple labels will not work, it only works when it is forced to render with the borders option.

* **AN-15919 - Tokens in Filters Controls are not Resolved**: Filters created with tokens appear not resolved when hovering over the filter controls.

* **AN-15688 - Geo Map Chart Performance Issue**: Geo map charts are having performance issues when the associated dataset or web form has more than 5M records. 

* **AN-14379 - Data Labels overlapping**: When a pie chart is created and resized or when a lot of data is displayed, the labels of the pie chart overlap.

* **AT-12531 - Automatic Column Links don't work if added after the chart was created**: The chart needs to be created after the Automatic Column Link has been created in order for the links to work.

* **AT-12290 - Pages are not shown in the subscriptions dropdowns if not added in the end user navigation bar**: When a user creates and publishes a page without adding the page to the navigation panel, the page and its chart panels don’t appear in the subscription dropdown list.

* **AT-12034 - Page Builder - The number of pages is limited to 100**: We are currently limiting the number of pages to display in the PB creator to 100. 

* **EX-1436 - Exports - Unicode characters are not supported in the PDF download**: When a user downloads a table that has unicode characters the downloaded file displays squares in place of the characters.

* **EX-270 - PDF Export - Table Columns Width**: When a user changes the width of a Table column in Page Builder, the downloaded file does not follow the set width in the Page Builder. 

* **CD-1004 - Activity Log Does Not Load Records**: If the browser zoom is set to anything other than 100%, the activity log records do not load when scrolling down.


</div>
