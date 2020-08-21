---
id: version-5.3-transforms-intro
title: Transforms Overview
sidebar_label: Transforms Overview
original_id: transforms-intro
---
<div style="text-align: justify">

Transforms are the required manipulation over the user data before being analyzed by Qrvey. The user can define any number of transformations inside metadata, and the result of this manipulation is reflected in the stored data. 

In this set of transformations are described in the JSON body of the metadata as an array of objects, with three mandatory properties inside each, `id`, `function` and `action`.

These properties are required to identification, and data manipulation, each of those has a particular usage.

## Properties
 - `id` [`string`]: used to identify each transformation inside the groups of all transforms.
 - `function` [`object`]: holds the name of the transformation to be used, and the field or fields where it will be applied.
 - `action` [`object`]: holds the action to perform after the data manipulation has been applied, has only two options, `add` or `update` the fields where the transformation was applied.
    - if the `action` is `add` it will create a new column in the data with the result of the transform.
    - if the `action` is `update`, then will change the value of the fields where the transform was applied.

### Transformation Example

``` json
"transforms": [
        {
            "id": "sumTransform",
            "function": {
                "sum": {
                    "fields": [
                        "field1",
                        "field2"
                    ]
                }
            },
            "action": {
                "add": {
                	"columnName": "SumResult"
                }
            }
        },
        {
            "id": "ceilTransform",
            "function": {
                "ceil": {
                    "fields": [
                        "field3"
                    ]
                }
            },
            "action": {
                "update": {}
            }
        }
    ]
```
In this example, the first transform (`sumTransform`), will take two fields from the data (`field1` & `field2`), and will sum their content, and store this result on a new field called `sumResult`.
The second transform, will apply the `ceil` math manipulation over the `field3` in the data and the `action` performed will be `update`, this will change the value contained in the `field3`.

## List of transforms types
Inside `DataRouter` you can find a number of predefined transforms, grouped by the data manipulation type

- `String`: manipulation over the string data, available functions are: `trimText`, `concatenate`, `substring`, `lowecase`, `uppercase`, `replaceText`, `splitText`, `templateText`.
- `Numeric`: manipulation over the numeric data, available functions are: `ceil`, `division`, `floor`, `mathLn`, `mathLog`, `multiplication`, `round`, `sum`, `substraction`.
- `DateTime`: manipulation over the DateTime data, available functions are: `addDate`, `changeTimeZone`, `differenceDate`, `extractFromDate`, `nowUTC`, `substractDate`.
- `Conversions`: are transforms applied to change one data type to another, available are: `convertToDate`, `convertToNumeric`, `convertToString`.
- `Comprenhend`: are transforms based on text comprenhend feature of `AWS`, available functions are: `Detect Entities`, `Detect Keyphrases`, `Detect Sentiment`, `Detect Sentiment IBM`, `Detect Dominant Language`.
- `Rekognition`: are transforms based on text rekognition feature of `AWS`, available functions are: `Detect Faces`, `Detect Labels`, `Detect Text on Image`, `Detect Celebrities`, `Compare Faces by Bucket`, `Compare Faces by URL`, `Detect Faces on Video`, `Detect Labels on Video`, `Detect Celebrities on Video`. 
- `Data Rules`: Data Rules are an special and diferent form of transform, you can find more information in the section [Data Rules](data-router/DataRules/data-rules-intro.md).
- `Reusable Data Rules`: These are a special set of transform, that can be configured to use multiple time according to some parameters.

</div>