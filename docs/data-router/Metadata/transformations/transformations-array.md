---
id: transformations-array
title: Array Filter Transformations
sidebar_label: Array Filter Transformations
---
<div style="text-align: justify">

The Array Filter transformation removes one or more values from a JSON array that do not match the specified condition.  The UI provides fields for configuring a simple “equals” condition, as well as a more advanced UI for tokens and custom JS functions.  The default behavior of the Array Filter transformation is to remove the values that do not match the condition specified; however, it is also possible to move values that do not match the condition to a new “object array” type field.

## Adding the Array Filter Transformation

The Array Filter transformation is located in the Transformations UI within the Dataset UI.  You will see the Array Filter transformation at the bottom of the transformation list in the “Logic” section.

![array-filter](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/array1.png#thumbnail-20) 


Move the cursor over the Array Filter icon and drag the component over to the transformation configuration area.  You will now see the Array Filter transformation configuration UI.

![array-filter](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/array2.png#thumbnail) 
 
Configuring the Array Filter transformation is a three step process:
1. Choose the array property to filter from the Array Path drop-down menu.

2. Choose “Standard” or “Advanced” for condition type:
<ul style="list-style: none; margin-left:20px;">
<li>  a. Use <strong>Standard</strong> for simple “equals” conditions. </li>
<li>  b. Use <strong>Advanced</strong> for other types of operators and/or supply your own custom JS function.</li>
<li>  c. If the <strong>Standard</strong> condition type was selected, choose the column to filter by using the Condition Column drop-down and enter the value to search for in the adjacent field. </li>
<li>  d. If the <strong>Advanced</strong> condition type was selected, copy/paste your JS function into the field provided.  You can reference columns from the dataset by using the Qrvey token syntax (e.g. {{name}}).  Ensure that your JS function returns a boolean value for all execution code paths.
 </li>
</ul>

3. Decide if you want the source array property updated directly or whether the desired result is a new array property.  If the output type is “Create New”, you must specify the new array property name in the supplied field.  Only array items that match the condition are written to the new array property.

Optionally, you can specify the behavior for record errors.  The options are identical here as they are for all other transformation types where this field appears.

> **Note**:  The Array Filter transformation only works with arrays of objects.  Properties that contain arrays of values will not appear in the Array Path drop-down menu.

## Example

This example will demonstrate how to find a single object within an object array by filtering on a specific string property that belongs to all objects in the array.  Consider the following JSON object array of Hollywood actors.

![array-filter](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/array3.png#thumbnail-60) 


The following ArrayFilter transformation configuration will find and match all Hollywood actors who are age 53.  First, the “actors” object array property must be selected from the Array Path field.

![array-filter](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/array4.png#thumbnail-40) 



Next, the “actors.age” property is selected from the Condition Column field and “53” is entered into the adjacent Value field.

![array-filter](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/array5.png#thumbnail-40) 


Finally, the desired output is to place all actors who meet the age criteria into a new object array property so that the original array of actors is unmodified.  The “Create New” radio button is selected and a name for the target object array property is entered in the adjacent field.

![array-filter](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/array6.png#thumbnail-40) 

Testing the transformation shows the final output that preserves the original “actors” array property, as well as the new “actors_age_53” array property.

![array-filter](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/data-router/array7.png#thumbnail-60) 


