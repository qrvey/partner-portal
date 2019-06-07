---
id: an-summary-view
title: AN Summary View - <an-summary-view/>
sidebar_label: AN Summary View
---

This Summary View widget requires `"<my_cdn>"/summary-panel/ansummarypanel.js` and `"<my_cdn>"/summary-view/ansummaryview.js` scripts file and
use the `<an-summary-view>` Custom HTML Tag


## 1. Configuration Object
```javascript
{
  domain: "<QRVEY_CORE_URL>",
  api_key: "<API_KEY>",
  user_id: "<USER_ID>"
  app_id: "<APP_ID>",
  qrveyhash: "<QRVEY_HASH>",
  qrveyid: "<QRVEY_ID>",
}
```

**Properties and Values ​**

| **Property** | **Value**|
| --- | --- |
| **domain** | `String`, Qrvey Core URL. |
| **api_key** | `String`, Api Key. Identification code to connect to the data. |
| **user_id** | `String`, User identifier. |
| **app_id** | `String`, Identifier of the Qrvey application. |
| **qrveyhash** | `String`, Qrvey Hash. |
| **qrveyid** | `String`, Identifier of the Qrvey. |

**Other configuration properties**

```json
{
  "panelConfig": {
    "drillConfig": {
      "persist": <true | false>,
      "enabled": <true | false>
    },
    "filters": <true | false>
  }
}
```

| **Property** | **Value**|
| --- | --- |
| **panelConfig** | `Object`. Configuration for the panel, receives some properties to change the appearance or behavior of the panels |
| &#8627;**drillConfig** | `Object`. settings to use the Drill-down functionality that are used in the histogram charts |
| &#9492;&#8594;**persist** | `Boolean`. Condition to establish if they need the chosen Drill-down filters to persist over time. |
| &#9492;&#8594;**enabled** | `Boolean`. Condition to enable Drill-down functionality. |
| &#8627;**filters** | `Boolean`. Activate or deactivate the filter button within the panels. |

## 2. Event Listeners:

* #### ON_CLOSE_BUCKET_MODAL

  Listener to refresh the Summary View component when the Buckets Modal is closed.

  _`event.detail`_ object:

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **hasChanges** | `Boolean`, Condition to establish changes within Summary View as long as there were changes. | Yes |


* #### triggerOpenBranch

  Listener to add, within the Summary View, the extra panels of branches.

  _`event.detail`_ object:

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **questionid** | `String`, The identifier of the question related to the branches | Yes |
| **questions** | `Array`, Set of concatenated branches in the same level | Yes |
| **branches** | `Array`, Set of branches. | Yes |



* #### triggerCloseBranch

  Listener to hide, within the Summary view, the extra panels of branches

  _`event.detail`_ object:

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **closeQuestion** | `Boolean`, Condition to close the branches | Yes |
| **questionid** | `String`, The identifier of the question related to the branches | Yes |
| **hasBranches** | `Boolean`, property to concoer if there are branches or not. | Yes |
| **element** | `HTMLAnSummaryHeaderElement`, Html element of the header. | Yes |
| **inBranch** | | No |

## 3. Methods:

* #### applyFilters

  Set incoming filters by parameter

| **Param** | **Description** | **Required** |
| --- | --- | --- |
| **filters** | `Array`, Set of filters. | Yes |

* #### checkBranchOpen

  Check if the branch panels are showing from the questionId

| **Param** | **Description** | **Required** |
| --- | --- | --- |
| **questionid** | `String`, Identifier of the question. | Yes |
  
  ** Returns: ** `Boolean`.

* #### downloadData

  Download the visible information within Summary View, depending on the type of file.

| **Param** | **Description** | **Required** |
| --- | --- | --- |
| **type** | `String`, The type of download. They can be `csv`,` pdf`, `jpg`. | Yes |

  **Returns** `<Promise | undefined> `, If there are no questions to download it will return` undefined`, otherwise it will return a `Promise` with the data.


* #### reloadAllSummaryView

  Reload the Summary View again.


## 4. Example:

```xml
<script src = "https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/summary-panel/ansummarypanel.js"> </ script>
<script src = "https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/summary-view/ansummaryview.js"> </ script>
 
<script>
  window.summaryConfig = {
    qrveyhash: '745b5b74af7a5d2c678683f734b69f5c',
    domain: 'https://qdev.qrvey.com',
    api_key: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0',
    qrveyid: "Uag5tG4NE",
    app_id: "S4tLP9k",
    user_id: "FyHYizH"
    panelConfig: {
      drillConfig: {
        persist: true,
        enabled: true
      },
      filters: true
    }
  }
</ script>
<an-summary-view config = "summaryConfig"> </ an-summary-view>
```