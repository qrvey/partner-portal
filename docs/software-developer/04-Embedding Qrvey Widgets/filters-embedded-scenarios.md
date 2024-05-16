---
id: filters-embedded-scenarios
title: Working With Filters in Widgets
sidebar_label: Working With Filters in Widgets
tags: [Software Developer]
sidebar_position: 4
displayed_sidebar: software-developer
---


Qrvey provides filtering to refine data based on your needs. When embedding Qrvey Widgets into your system, you may need to combine Qrvey’s filters with your own set of filter controls. This article walks you through the steps needed to pass the values of your own filters to embedded Qrvey widgets. For an general introduction to filters, please see [Working with Interactive Filters](../../composer/08-Filtering%20Data/working-with-filters.md).

You can pass values to Qrvey’s widgets to filter charts or pages depending on your needs using the Filter Object Structure, as described below. The structure is passed as part of the supported widget’s configuration object as “userFilters” and it can contain an array of filters with the default scope of global.

## The Filter Object

This feature is available with the [Dashboard View](../04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-view.md), [Dashboard Builder](../04-Embedding%20Qrvey%20Widgets/05-Widgets/dashboard-builder.md), [Single Panel](../04-Embedding%20Qrvey%20Widgets/05-Widgets/single-panel.md), and [Analytic Suite](../04-Embedding%20Qrvey%20Widgets/05-Widgets/analytic-suite.md) widgets and you can find sample code in each of the mentioned articles.


```js
var config = {
    attribute1: value1,
    attribute2: value2,
    ...,
    "userFilters": { "filters": [...] }          
  }
```

### Filters Object

| **Property** | **Type** | **Required** | **Description** 
| --- | --- | --- | --- |
| **operator** | `String` | No |Default AND. Each filter requires a boolean logic to refine the data based on the user’s criteria.  Allowed values: <br /> *AND <br /> * OR|
| **expressions** | `Array`| Yes | It’s a list of filter criteria to refine the data. Each item in the collection includes one or multiple <a href="#expressions-object">Expressions Objects</a>.|


### Expressions Object
| **Property** | **Type** | **Required** | **Description** 
| --- | --- | --- | --- |
| **qrveyid** | `String` | No |Represent the dataset ID used to refine the data.|
| **questionid** | `String` | No |Represent the dataset’s column ID used to refine the data, should belong to the qrvey defined above.|
| **questionType** | `String`| Yes | It’s only required if the column used to refine the data is a [FORMULA](../../composer/05-Working%20with%20Data/Datasets/03-Analyze/10-Formula%20Builder/overview-of-formula-builder.md) or a [BUCKET](../../composer/05-Working%20with%20Data/Datasets/03-Analyze/buckets.md); otherwise, it is optional. Allowed values: <br />* FORMULA <br />* BUCKET |
| **validationType** | `String` | Yes | The field represents the operand for filtering. Allowed values: <br />* EQUAL <br /> * NOT_EQUAL <br /> * CONTAIN <br /> * NOT_CONTAIN <br /> * END_WITH<br />* NOT_END_WITH <br />* START_WITH<br /> * NOT_START_WITH <br />* RANGE <br />* IS_EMPTY <br />* IS_NOT_EMPTY |
| **property** | `String` | No | When using complex data types like the ones defined inside Webforms, Quizzes, or Surveys, it’s required. Please refer to <a href="#complex-properties">Complex Properties</a> for a complete list of supported values. |
| **groupValue** | `String` | No | Default ‘day’. Only applies when you want to group date values. Allowed values:<br />* year<br />* month<br />* quarter<br />* week<br />* day<br />* hour<br />* minute<br />* second |
| **value** | `Array` | Yes | List of values used to filter the data. Qrvey will return all the records that match the criteria defined in the filter. Depending on the column’s data type, you may require additional parameters. <br /><br />Strings <br /> <code style={{ color: "#880000", display: "block" }}>{" "}"value": [ <br /> <span style={{ padding: 25 }}>"United States"</span>{" "}<br />]{" "}</code>{" "}<br />Number or Date* <br /> **lt**: Less than.* <br /> **lte**: Less than or equalto.* <br /> **gt**: Greater than.* <br /> **gte**: Greater than or equal to.<br /> <br />{" "}<code style={{ color: "#880000" }}>"value": [ <br /> <span style={{ padding: 25 }}>{"{"}</span> <br /><span style={{ padding: 35 }}>"gt": "10507.231" </span><br /><span style={{ padding: 25 }}>{"}"}</span><br />]{" "}</code>{" "}<br /> <br />{" "}<code style={{ color: "#880000" }}>{" "}"value": [<br /><span style={{ padding: 25 }}> {"{"}</span> <br />{" "}<span style={{ padding: 35 }}>"lte": "11/30/2016",</span><br /><span style={{ padding: 35 }}> "gte": "05/15/2014"</span> <br />{" "}<span style={{ padding: 25 }}>{"}"}<span><br />]</span></span></code>

### Complex Properties
| **Property** | **Output** | **Web Form Column Type** 
| --- | --- | --- |
| **first_name** | `String` | NAME |
| **last_name** | `String` | NAME | 
| **full_name** | `String` | NAME | 
| **first_name_lower** | `String` | NAME | 
| **last_name_lower** | `String` | NAME | 
| **full_name_lower** | `String` | NAME | 
| **skipped_question** | `String` | NAME, ADDRESS, USADDRESS, LONGTEXT, TEXTFIELD, FILEUPLOAD, IMAGEUPLOAD, DATE, NUMERIC, RATING, SLIDEBAR, YES_NO, DROPDOWN, SINGLE_CHOICE, MULTIPLE_CHOICE, EXPRESSION, CHECKLIST, PASSWORD, EMAIL_FORM, RANKING, SIGNATURE, PHONE, IMAGE, LOOKUP |
| **full_address** | `String` |ADDRESS, USADDRESS|
| **country** | `String` |ADDRESS, USADDRESS|
| **state_code** | `String` |ADDRESS, USADDRESS|
| **state** | `String` |ADDRESS, USADDRESS|
| **country** | `String` |ADDRESS, USADDRESS|
| **state_name** | `String` |ADDRESS, USADDRESS|
| **city** | `String` |ADDRESS, USADDRESS|
| **postal_code** | `String` |ADDRESS, USADDRESS|
| **zip** | `String` |ADDRESS, USADDRESS|
| **address_line_1** | `String` |ADDRESS, USADDRESS|
| **address_line_2** | `String` |ADDRESS, USADDRESS|
| **full_address_lower** | `String` |ADDRESS, USADDRESS|
| **state_code_lower** | `String` |ADDRESS, USADDRESS|
| **state_lower** | `String` |ADDRESS, USADDRESS|
| **state_name_lower** | `String` |ADDRESS, USADDRESS|
| **city_lower** | `String` |ADDRESS, USADDRESS|
| **postal_code_lower** | `String` |ADDRESS, USADDRESS|
| **zip_lower** | `String` |ADDRESS, USADDRESS|
| **address_line_1_lower** | `String` |ADDRESS, USADDRESS|
| **street_address_lower** | `String` |ADDRESS, USADDRESS|
| **address_line_2_lower** | `String` |ADDRESS, USADDRESS|
| **words** | `String` |LONGTEXT o TEXTFIELD, DROPDOWN, LOOKUP|
| **entities** | `String` |LONGTEXT o TEXTFIELD|
| **entitiestype** | `String` |LONGTEXT o TEXTFIELD|
| **sentiment** | `String` |LONGTEXT o TEXTFIELD|
| **keywords** | `String` |LONGTEXT o TEXTFIELD|
| **filesize** | `Numeric` |FILEUPLOAD, IMAGEUPLOAD|
| **filetype** | `String` |FILEUPLOAD, IMAGEUPLOAD|
| **filename** | `String` |FILEUPLOAD|
| **fileurl** | `String` |FILEUPLOAD, IMAGEUPLOAD|
| **all_details** | `String` |FILEUPLOAD, IMAGEUPLOAD|
| **analysis** | `String` |IMAGEUPLOAD|
| **year** | `Numeric` |DATE|
| **month** | `Numeric` |DATE|
| **day** | `Numeric` |DATE|
| **quarter** | `Numeric` |DATE|
| **week** | `Numeric` |DATE|
| **hour** | `Numeric` |DATE|
| **minute** | `Numeric` |DATE|
| **second** | `Numeric` |DATE|
| **value** | `String` |NUMERIC|
| **lower** | `String` |DROPDOWN, SINGLE_CHOICE, MULTIPLE_CHOICE, LOOKUP|
| **expression_type** | `String` |EXPRESSION|
| **local_part** | `String` |EMAIL_FORM|
| **domain** | `String` |EMAIL_FORM|
| **rank{{x}}** | `String` |RANKING. (x) denotes the ranking position.|
| **signature_url** | `String` |SIGNATURE|
| **area_code** | `String` |PHONE|
| **answer_id** | `String` |IMAGE|
| **display_full** | `String` |LOOKUP|
| **display_all** | `String` |LOOKUP|
| **display_{{x}}** | `String` |LOOKUP. Show display with index (x)|

## Example: A Simple Filter
The following example shows the filter structure for a simple range filter on a numeric column: 

Sample filter: COLUMN_ID BETWEEN 10 AND 15.

```
...
"userFilters": {
      "filters": [
       {
         "operator": "AND",
         "expressions": [
           {
		  "qrveyid": "QRVEY_ID",
             "questionid": "COLUMN_ID",
             "validationType": "RANGE",
             "value": [
               {
                 "lte": 15,
                 "gte": 10
               }
             ]
           }
         ]
       }
     ]
   }
 ```

## Example: Filter Multiple Columns
The following example shows the filter structure for three filters with different columns and conditions.

Sample filter: <br />
COLUMN_ID_1 BETWEEN 05/15/2014<br /> AND<br /> 11/30/2016<br />
AND<br />
		COLUMN_ID_2 EQUAL ‘United States’
		AND
		COLUMN_ID_3 GREATHER_THAN 10507.231
```
...
 "userFilters": {
     "filters": [
       {
         "operator": "AND",
         "expressions": [
           {
		  "qrveyid": "QRVEY_ID",
             "groupValue": "day",
             "questionid": "COLUMN_ID_1",
             "validationType": "RANGE",
             "value": [
               {
                 "lte": "11/30/2016",
                 "gte": "05/15/2014"
               }
             ]
           },
           {
		  "qrveyid": "QRVEY_ID",
             "questionid": "COLUMN_ID_2",
             "validationType": "EQUAL",
             "value": ["United States"]
           },
           {
		  "qrveyid": "QRVEY_ID",
             "questionid": "COLUMN_ID_3",
             "validationType": "RANGE",
             "value": [
               {
                 "gt": "10507.231"
               }
             ]
           }
         ]
       }
     ]
   }
```