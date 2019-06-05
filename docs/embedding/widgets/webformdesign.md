---
id: widget-webformdesign
title: Web Forms Design Widget
---
*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas lacinia elit, a vestibulum neque facilisis id. Curabitur pellentesque ipsum eget tellus laoreet mollis. Pellentesque pellentesque lorem lacus, vitae aliquam ipsum lacinia id.*

## Widget Overview
*Maecenas ut purus vehicula, rhoncus odio ac, accumsan purus. Maecenas lacinia magna id ligula laoreet cursus. Vivamus varius turpis eu diam lacinia rutrum. Praesent blandit efficitur vehicula. Nullam interdum turpis sit amet quam vulputate scelerisque. Praesent sit amet pharetra massa, vel pulvinar dolor.*

## Samples
*Cras ac erat tempor, tincidunt massa in, porttitor erat. Sed sollicitudin leo vitae mauris tincidunt, eget pellentesque lorem molestie. Quisque id consectetur mi.* 

### Form Sample
In the following example, we have the design widget configuration object for a form, in which the creation of intro and end page have been disabled along with the options to duplicate and delete questions. Also some question types can't be added like look up and image upload. Note how we only use the admin app configuration object for form as the qrvey type we set is that, and the field types and options not included are set as enabled.

```
{
"api_key": "YOURAPIKEYGOESHERE",
"app_id": "DewFuKJ",
"domain": "https://qrvey.com",
"qrvey_id": "42cnM4T",
"user_id": "fD6Jl43",
"app_type": "FORM",
    "adminApp": {
        "Form": {
            "General": [{
                    "name": "Intro Page",
                    "status": false
                },
                {
                    "name": "End Page",
                    "status": false
                }
            ],
            "Field Types": [{
                    "name": "Image Upload",
                    "status": false
                },
                {
                    "name": "Lookup",
                    "status": false
                }
            ],
            "Field Options": [{
                    "name": "Deleting",
                    "status": false
                },
                {
                    "name": "Duplicate",
                    "status": false
                }
            ]
        }
    }
}
```
**Note:** all optionals fields omitted will be interpreted by the system as true, you can just use the fields that you want to declare false.

### Security
*Quisque varius neque id viverra imperdiet. Sed mattis ac tellus ac fringilla. Integer eu elementum mauris. Curabitur pretium risus erat, quis tincidunt metus cursus et. Proin ex leo, efficitur in massa at, posuere aliquam sem. Integer ultricies id lectus id vestibulum. Donec id lorem nec eros aliquet dapibus id sit amet diam.*

### Customize
*Quisque varius neque id viverra imperdiet. Sed mattis ac tellus ac fringilla. Integer eu elementum mauris. Curabitur pretium risus erat, quis tincidunt metus cursus et. Proin ex leo, efficitur in massa at, posuere aliquam sem. Integer ultricies id lectus id vestibulum. Donec id lorem nec eros aliquet dapibus id sit amet diam.*

## Schema Reference
The JSON Reference is designed to document the structure of the JSON configuration object to configure the Webform Design Widget. The Schema object has the following properties defined below:

### JSON object overview

```
{
    "api_key": "",
    "app_id": "",
    "domain": "",
    "qrvey_id": "",
    "user_id": "",
    "app_type": "",
    "style_options": {
        "main_color": "",
        "secondary_color": "",
        "tab_bar": "",
        "field_icon": "",
        "error": "",
        "notification": "",
        "successful": "",
        "warning": ""
    },
    "adminApp": {
        "Form": {
            "General": [{
                    "name": "Name",
                    "status": true
                },
                {
                    "name": "Description",
                    "status": true
                },
                {
                    "name": "Text",
                    "Status": true
                },
                {
                    "name": "Intro Page",
                    "status": true
                },
                {
                    "name": "End Page",
                    "status": true
                },
                {
                    "name": "Sections",
                    "status": true
                }
            ],
            "Field Types": [{
                    "name": "Address (Global)",
                    "status": true
                },
                {
                    "name": "Address (US)",
                    "status": true
                },
                {
                    "name": "Date",
                    "status": true
                },
                {
                    "name": "Digital Signature",
                    "status": true
                },
                {
                    "name": "Dropdown",
                    "status": true
                },
                {
                    "name": "Email",
                    "status": true
                },
                {
                    "name": "Expression",
                    "status": true
                },
                {
                    "name": "Image",
                    "status": true
                },
                {
                    "name": "Image Upload",
                    "status": true
                },
                {
                    "name": "Lookup",
                    "status": true
                },
                {
                    "name": "Multiple Choice",
                    "status": true
                },
                {
                    "name": "Yes/No",
                    "status": true
                },
                {
                    "name": "Name",
                    "status": true
                },
                {
                    "name": "Numeric",
                    "status": true
                },
                {
                    "name": "Password",
                    "status": true
                },
                {
                    "name": "Phone Number",
                    "status": true
                },
                {
                    "name": "Ranking",
                    "status": true
                },
                {
                    "name": "Rating",
                    "status": true
                },
                {
                    "name": "Slide Bar",
                    "status": true
                },
                {
                    "name": "Text (Long)",
                    "status": true
                },
                {
                    "name": "Text (Short)",
                    "status": true
                }
            ],
            "Field Options": [{
                    "name": "Branching",
                    "status": true
                },
                {
                    "name": "Drag and drop",
                    "status": true
                },
                {
                    "name": "Deleting",
                    "status": true
                },
                {
                    "name": "Duplicate",
                    "status": true
                }
            ]
        },
        "Quiz": {
            "General": [{
                    "name": "Name",
                    "status": true
                },
                {
                    "name": "Description",
                    "status": true
                },
                {
                    "name": "Text",
                    "status": true
                },
                {
                    "name": "Intro Page",
                    "status": true
                },
                {
                    "name": "Quiz Actions - Score",
                    "status": true
                },
                {
                    "name": "Quiz Actions - Message",
                    "status": true
                },
                {
                    "name": "Email Request",
                    "status": true
                },
                {
                    "name": "Duplicate Submissions",
                    "status": true
                }
            ],
            "Field Types": [{
                    "name": "Date",
                    "status": true
                },
                {
                    "name": "Image",
                    "status": true
                },
                {
                    "name": "Multiple Choice",
                    "status": true
                },
                {
                    "name": "Yes/No",
                    "status": true
                },
                {
                    "name": "Numeric",
                    "status": true
                },
                {
                    "name": "Ranking",
                    "status": true
                },
                {
                    "name": "Text (Short)",
                    "status": true
                }
            ],
            "Field Options": [{
                    "name": "Drag and drop",
                    "status": true
                },
                {
                    "name": "Deleting",
                    "status": true
                },
                {
                    "name": "Duplicate",
                    "status": true
                }
            ]
        },
        "Survey": {
            "General": [{
                    "name": "Name",
                    "status": true
                },
                {
                    "name": "Description",
                    "status": true
                },
                {
                    "name": "Text",
                    "status": true
                },
                {
                    "name": "Intro Page",
                    "status": true
                },
                {
                    "name": "End Page",
                    "status": true
                },
                {
                    "name": "Favorite Fields",
                    "status": true
                }
            ],
            "Field Types": [{
                    "name": "Address (Global)",
                    "status": true
                },
                {
                    "name": "Address (US)",
                    "status": true
                },
                {
                    "name": "Date",
                    "status": true
                },
                {
                    "name": "Digital Signature",
                    "status": true
                },
                {
                    "name": "Dropdown",
                    "status": true
                },
                {
                    "name": "Email",
                    "status": true
                },
                {
                    "name": "Expression",
                    "status": true
                },
                {
                    "name": "Image",
                    "status": true
                },
                {
                    "name": "Image Upload",
                    "status": true
                },
                {
                    "name": "Lookup",
                    "status": true
                },
                {
                    "name": "Multiple Choice",
                    "status": true
                },
                {
                    "name": "Name",
                    "status": true
                },
                {
                    "name": "Numeric",
                    "status": true
                },
                {
                    "name": "Password",
                    "status": true
                },
                {
                    "name": "Phone Number",
                    "status": true
                },
                {
                    "name": "Ranking",
                    "status": true
                },
                {
                    "name": "Rating",
                    "status": true
                },
                {
                    "name": "Slide Bar",
                    "status": true
                },
                {
                    "name": "Text (Long)",
                    "status": true
                },
                {
                    "name": "Text (Short)",
                    "status": true
                },
                {
                    "name": "Yes/No",
                    "status": true
                }
            ],
            "Field Options": [{
                    "name": "Branching",
                    "status": true
                },
                {
                    "name": "Drag and drop",
                    "status": true
                },
                {
                    "name": "Deleting",
                    "status": true
                },
                {
                    "name": "Duplicate",
                    "status": true
                }
            ]
        }
    }
}
```
### Properties and Values for Each Object
Each object is defined by common properties. The table below provides general information about each property and value. The Required column indicates whether the property is required for the design widget.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **"api_key"** | String, secret identification token to access the application. | Yes |
| **"app_id"** | String, id of the qrvey application containing the webform. | Yes |
| **"domain"** | String, domain URL in which the application is in. | Yes |
| **"qrvey_id"** | String, id of the webform that will be edited in the widget. | Yes |
| **"user_id"** | String, id of the user that edits the webform. | Yes |
| **"app_type"** | String, type of webform the widget will instance. It can be one of these:-"FORM"-"QUIZ"-"SURVEY" | Yes |
| "style_options" | Object, containing the color configuration for the design widget. If the object is sent, all the object properties must be complete for the style configuration to work. | No |
| "main_color" | String, Main color of the application in HEX. all 6 characters of the color must be set. | No |
| "secondary_color"  | String, Secondary color of the application in HEX. all 6 characters of the color must be set | No |
| "tab_bar" | String, Color of the tab bar in HEX. all 6 characters of the color must be set. | No |
| "field_icon" | String, Color of question type icons in HEX. all 6 characters of the color must be set. | No |
| "error" | String, Color of the error states in HEX. all 6 characters of the color must be set. | No |
| "notification" | String, Color of the notifications in HEX. all 6 characters of the color must be set. | No |
| "successful" | String, Color of the successful toast in HEX. all 6 characters of the color must be set. | No |
| "warning" | String, Color of the warning toast in HEX. all 6 characters of the color must be set. | No |
| "adminApp" | Object, configuration object for the admin app features such as disabling the creation of specific question types, elements such as texts and actions like duplicating questions. | No |
| "Form" | Object, this object sets the configuration for different elements of Form type of webforms. This is only needed if the webform type set on "app_type" is "FORM" | No |
| "General" | Object array, this array contains objects with 2 properties: "name" and "status", each object represent a general feature of the webform."name" is a string referring to the name of the feature we are configuring."status" is a boolean referring to to the status of the feature, in which true means enabled and false disabled.If a feature is missing in the array it will be taken as enabled. The features that can be configured are:-"Name": this is the name of the webform. -"Description": this is the description of the webform. -"Text": this feature refers to the option to add texts elements in the webform.. -"Intro Page": this is the intro page of the webform.  -"End Page": this is the end page of the webform.  -"Sections": this are the sections of questions. | No |
| "Field Types" | Object array, this array contains objects with 2 properties: "name" and "status", each object represent a type  of question that can be created in the  webform."name" is a string referring to the name of the question type we are configuring."status" is a boolean referring to to the status of the question type, in which true means enabled and false disabled.At least 1 question type must be enabled, if any question type is missing in the array  it will be assumed as enabled. The available question types for Form are:-"Address (Global)"-"Address (US)"-"Date"-"Digital Signature"-"Dropdown"-"Email"-"Expression"-"Image"-"Image Upload"-"Lookup"-"Multiple Choice"-"Yes/No",-"Name"-"Numeric"-"Password"-"Phone Number"-"Ranking"-"Rating"-"Slide Bar"-"Text (Long)"-"Text (Short)"  | No |
| "Field Options" | Object array, this array contains objects with 2 properties: "name" and "status", each object represent a feature or action related to the questions such as deleting or duplicating. "name" is a string referring to the name of the feature we are configuring."status" is a boolean referring to to the status of the feature, in which true means enabled and false disabled. The available field options for Form are:-"Branching": this refers to the creation of branches. -"Drag and drop": this refers to the action changing the order of questions through dragging. -"Duplicate": this refers to the option to duplicate a question. -"Deleting": this refers to the option of deleting questions  | No |
| "Quiz" | Object, this object sets the configuration for different elements of Quiz type of webforms. This is only needed if the webform type set on "app_type" is "QUIZ" | No |
| "General" | Object array, this array contains objects with 2 properties: "name" and "status", each object represent a general feature of the webform."name" is a string referring to the name of the feature we are configuring."status" is a boolean referring to to the status of the feature, in which true means enabled and false disabled.If a feature is missing in the array it will be taken as enabled. The features that can be configured are:-"Name": this is the name of the webform. -"Description": this is the description of the webform. -"Text": this feature refers to the option to add texts elements in the webform.. -"Intro Page": this is the intro page of the webform.  -"Quiz Actions - Score": this is the toggle to show score or not at the end of the quiz  -"Quiz Actions - Message": this hides the fields to set a custom message at the end of the quiz depending on the results. -"Email Request": this hides the fields to set a custom message when requesting the email from the quiz taker.-"Duplicate Submissions": this is the toggle to allow quiz taker to submit a quiz with the same email multiple times. | No |
| "Field Types" | Object array, this array contains objects with 2 properties: "name" and "status", each object represent a type  of question that can be created in the  webform."name" is a string referring to the name of the question type we are configuring."status" is a boolean referring to to the status of the question type, in which true means enabled and false disabled.At least 1 question type must be enabled, if any question type is missing in the array  it will be assumed as enabled. The available question types for Quiz are:-"Date"-"Image"-"Multiple Choice"-"Yes/No",-"Numeric"-"Ranking"-"Text (Short)"  | No |
| "Field Options" | Object array, this array contains objects with 2 properties: "name" and "status", each object represent a feature or action related to the questions such as deleting or duplicating. "name" is a string referring to the name of the feature we are configuring."status" is a boolean referring to to the status of the feature, in which true means enabled and false disabled. The available field options for Quiz are:-"Duplicate": this refers to the option to duplicate a question. -"Drag and drop": this refers to the action changing the order of questions through dragging. -"Deleting": this refers to the option of deleting questions  | No |
| "Survey" | Object, this object sets the configuration for different elements of Survey type of webforms. This is only needed if the webform type set on "app_type" is "SURVEY" | No |
| "General" | Object array, this array contains objects with 2 properties: "name" and "status", each object represent a general feature of the webform."name" is a string referring to the name of the feature we are configuring."status" is a boolean referring to to the status of the feature, in which true means enabled and false disabled.If a feature is missing in the array it will be taken as enabled. The features that can be configured are:-"Name": this is the name of the webform. -"Description": this is the description of the webform. -"Text": this feature refers to the option to add texts elements in the webform.. -"Intro Page": this is the intro page of the webform.  -"End Page": this is the end page of the webform.  -"Favorite Fields": this is the option to add questions from the ones saved as favorites. | No |
| "Field Types" | Object array, this array contains objects with 2 properties: "name" and "status", each object represent a type  of question that can be created in the  webform."name" is a string referring to the name of the question type we are configuring."status" is a boolean referring to to the status of the question type, in which true means enabled and false disabled.At least 1 question type must be enabled, if any question type is missing in the array  it will be assumed as enabled. The available question types for Survey are:-"Address (Global)"-"Address (US)"-"Date"-"Digital Signature"-"Dropdown"-"Email"-"Expression"-"Image"-"Image Upload"-"Lookup"-"Multiple Choice"-"Yes/No",-"Name"-"Numeric"-"Password"-"Phone Number"-"Ranking"-"Rating"-"Slide Bar"-"Text (Long)"-"Text (Short)"  |
| "Field Options" | Object array, this array contains objects with 2 properties: "name" and "status", each object represent a feature or action related to the questions such as deleting or duplicating. "name" is a string referring to the name of the feature we are configuring."status" is a boolean referring to to the status of the feature, in which true means enabled and false disabled. The available field options for Survey are:-"Branching": this refers to the creation of branches. -"Drag and drop": this refers to the action changing the order of questions through dragging. -"Duplicate": this refers to the option to duplicate a question. -"Deleting": this refers to the option of deleting questions  |