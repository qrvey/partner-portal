---
id: widget-webforms
title: Web Forms
sidebar_label: Web Forms
---

<div style="text-align: justify">

The web form widget design is a powerful and effective tool to allow you embed the webform design on your own web application, we provide three differents type of webforms, Survey, Form and Quiz. Everyone of them with his particular behabiour.

## Widget Overview
This widget allows your users to create, preview and modify a web form. Specifically you can provide a facility for your users to create new questions, sections and branches on a webform just with a few code lines in your web application. We will explore the differents type of webforms and the way to embed it.

## Samples
The following samples show how easy it is to embed the different kind of webforms in your own application, starting with Surveys following by Forms and concluding with Quiz.

### Survey Sample
In this example, we have the design widget configuration object for a Survey. This shows the minimum configuration object required to embed the Survey design widget. Note, APPID must refer to a valid and active application defined on your Qrvey instance, and QRVEYID must refer to a draft Survey in that application.

```
<qrvey-design-widgets settings="configWebForm"></qrvey-design-widgets>

<script>
var configWebForm = {
    "api_key": "YOURAPIKEYGOESHERE",
    "app_id": "APPID",
    "domain": "https://your_qrvey_domain",
    "qrvey_id": "QRVEYID",
    "user_id": "USERID",
    "app_type": "SURVEY"
}
</script>

<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://your_qrvey_domain_widget_launcher/app.js"></script>
```

### Form Sample
In this example, we have the design widget configuration object for a Form. This shows the minimum configuration object required to embed the Form design widget. Note, APPID must refer to a valid and active application defined on your Qrvey instance, and QRVEYID must refer to a draft Form in that application.

```
<qrvey-design-widgets settings="configWebForm"></qrvey-design-widgets>

<script>
var configWebForm = {
    "api_key": "YOURAPIKEYGOESHERE",
    "app_id": "APPID",
    "domain": "https://your_qrvey_domain",
    "qrvey_id": "QRVEYID",
    "user_id": "USERID",
    "app_type": "FORM"
}
</script>

<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://your_qrvey_domain_widget_launcher/app.js"></script>
```

### Quiz Sample
In this example, we have the design widget configuration object for a Quiz. This shows the minimum configuration object required to embed the Quiz design widget. Note, APPID must refer to a valid and active application defined on your Qrvey instance, and QRVEYID must refer to a draft Quiz in that application.

```
<qrvey-design-widgets settings="configWebForm"></qrvey-design-widgets>

<script>
var configWebForm = {
    "api_key": "YOURAPIKEYGOESHERE",
    "app_id": "APPID",
    "domain": "https://your_qrvey_domain",
    "qrvey_id": "QRVEYID",
    "user_id": "USERID",
    "app_type": "QUIZ"
}
</script>

<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://your_qrvey_domain_widget_launcher/app.js"></script>
```
**Note:** all optionals fields omitted will be interpreted by the system as true, so you can just include the fields that you want to declare false.

### Customize
this widget have a customization option, you can change main color, secondary color, icon color, etc. all the color values **must be on hexadecimal** to avoid errors, the following example show how it's work

```
<qrvey-design-widgets settings="configWebForm"></qrvey-design-widgets>

<script>
var configWebForm = {
    "api_key": "YOURAPIKEYGOESHERE",
    "app_id": "APPID",
    "domain": "https://your_qrvey_domain",
    "qrvey_id": "QRVEYID",
    "user_id": "USERID",
    "app_type": "FORM",
    "style_options": {
        main_color: "#FF420E",
        secondary_color: "#B2B2B2",
        tab_bar: "#666666",
        field_icon: "#89928d",
        error: "#FF420E",
        notification: "#CCCCCC",
        successful: "#666666",
        warning: "#CCCCCC"
    }
}
</script>

<!-- your launcher js link (replace with your js link) -->
<script type="text/javascript" src="https://your_qrvey_domain_widget_launcher/app.js"></script>
```

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
| "style_options.main_color" | String, Main color of the application in HEX - all 6 characters of the color must be set. | No |
| "style_options.secondary_color"  | String, Secondary color of the application in HEX - all 6 characters of the color must be set | No |
| "style_options.tab_bar" | String, Color of the tab bar in HEX - all 6 characters of the color must be set. | No |
| "style_options.field_icon" | String, Color of question type icons in HEX - all 6 characters of the color must be set. | No |
| "style_options.error" | String, Color of the error states in HEX - all 6 characters of the color must be set. | No |
| "style_options.notification" | String, Color of the notifications in HEX - all 6 characters of the color must be set. | No |
| "style_options.successful" | String, Color of the successful toast in HEX - all 6 characters of the color must be set. | No |
| "style_options.warning" | String, Color of the warning toast in HEX - all 6 characters of the color must be set. | No |
| "adminApp" | Object, configuration object for the admin app features such as disabling the creation of specific question types, elements such as texts and actions like duplicating questions. | No |
| "adminApp.Form" | Object, this object sets the configuration for different elements of Form type of webforms. This is only needed if the webform type set on "app_type" is "FORM" | No |
| "adminApp.Form.General" | Object array, this array contains objects with 2 properties: "name" and "status". Each object represent a general feature of the webform. "name" is a string referring to the name of the feature we are configuring, and "status" is a boolean referring to the status of the feature. If "status" is true the feature is enabled, otherwise it is disabled. If a feature is missing in the array it will be taken as enabled. The features that can be configured are: <br/><table><tr><td>"Name"</td><td>this is the name of the webform.</td></tr><tr><td>"Description"</td><td>this is the description of the webform.</td></tr><tr><td>"Text"</td><td>this feature refers to the option to add text elements in the webform.</td></tr><tr><td>"Intro Page"</td><td>this is the intro page of the webform.</td></tr><tr><td>"End Page"</td><td>this is the end page of the webform.</td></tr><tr><td>"Sections"</td><td>this are the sections of questions.</td></tr></table> | No |
| "adminApp.Form.Field Types" | Object array, this array contains objects with 2 properties: "name" and "status". Each object represent a type  of question that can be created in the webform. "name" is a string referring to the name of the question type we are configuring, and "status" is a boolean referring to the status of the question type. If "status" is true the question type enabled, otherwise it is disabled. At least 1 question type must be enabled. If any question type is missing in the array it will be assumed as enabled. The available question types for Form are: <br/><ul><li>"Address (Global)"</li><li>"Address (US)"</li><li>"Date"</li><li>"Digital Signature"</li><li>"Dropdown"</li><li>"Email"</li><li>"Expression"</li><li>"Image"</li><li>"Image Upload"</li><li>"Lookup"</li><li>"Multiple Choice"</li><li>"Yes/No"</li><li>"Name"</li><li>"Numeric"</li><li>"Password"</li><li>"Phone Number"</li><li>"Ranking"</li><li>"Rating"</li><li>"Slide Bar"</li><li>"Text (Long)"</li><li>"Text (Short)"</li><ul>  | No |
| "adminApp.Form.Field Options" | Object array, this array contains objects with 2 properties: "name" and "status". Each object represent a feature or action related to the questions such as deleting or duplicating. "name" is a string referring to the name of the feature we are configuring, and "status" is a boolean referring to to the status of the feature. If "status" is true the feature is enabled, otherwise it is disabled. The available field options for Form are:<br/><table><tr><td>"Branching"</td><td>this refers to the creation of branches.</td></tr><tr><td>"Drag and drop"</td><td>this refers to the action changing the order of questions through dragging.</td></tr><tr><td>"Duplicate"</td><td>this refers to the option to duplicate a question.</td></tr><tr><td>"Deleting"</td><td>this refers to the option of deleting questions.</td></tr></table>  | No |
| "adminApp.Quiz" | Object, this object sets the configuration for different elements of the Quiz type webforms. This is only needed if the webform type set on "app_type" is "QUIZ" | No |
| "adminApp.Quiz.General" | Object array, this array contains objects with 2 properties: "name" and "status". Each object represent a general feature of the webform."name" is a string referring to the name of the feature we are configuring, and "status" is a boolean referring to to the status of the feature. If "status" is true the feature is enabled, otherwise it is disabled. If a feature is missing in the array it will be taken as enabled. The features that can be configured are:<br/><table><tr><td>"Name"</td><td>this is the name of the webform.</td></tr><tr><td>"Description"</td><td>this is the description of the webform.</td></tr><tr><td>"Text"</td><td>this feature refers to the option to add texts elements in the webform.</td></tr><tr><td>"Intro Page"</td><td>this is the intro page of the webform. </td></tr><tr><td>"Quiz Actions - Score"</td><td>this is the toggle to show score or not at the end of the quiz.</td></tr><tr><td>"Quiz Actions - Message"</td><td>this hides the fields to set a custom message at the end of the quiz depending on the results.</td></tr><tr><td>"Email Request"</td><td>this hides the fields to set a custom message when requesting the email from the quiz taker.</td></tr><tr><td>"Duplicate Submissions"</td><td>this is the toggle to allow quiz taker to submit a quiz with the same email multiple times.</td></tr></table> | No |
| "adminApp.Quiz.Field Types" | Object array, this array contains objects with 2 properties: "name" and "status". Each object represent a type  of question that can be created in the  webform. "name" is a string referring to the name of the question type we are configuring, and "status" is a boolean referring to to the status of the question type. If "status" is true the question type is enabled, otherwise it is disabled. At least 1 question type must be enabled, if any question type is missing in the array it will be assumed as enabled. The available question types for Quiz are:<ul><li>"Date"</li><li>"Image"</li><li>"Multiple Choice"</li><li>"Yes/No",</li><li>"Numeric"</li><li>"Ranking"</li><li>"Text (Short)"</li></ul>  | No |
| "adminApp.Quiz.Field Options" | Object array, this array contains objects with 2 properties: "name" and "status". Each object represent a feature or action related to the questions such as deleting or duplicating. "name" is a string referring to the name of the feature we are configuring."status" is a boolean referring to to the status of the feature. If "status" is true the feature is enabled, otherwise it is disabled. The available field options for Quiz are:<br/><table><tr><td>"Duplicate"</td><td>this refers to the option to duplicate a question.</td></tr><tr><td>"Drag and drop"</td><td>this refers to the action changing the order of questions through dragging.</td></tr><tr><td>"Deleting"</td><td>this refers to the option of deleting questions</td></tr></table>  | No |
| "adminApp.Survey" | Object, this object sets the configuration for different elements of Survey type of webforms. This is only needed if the webform type set on "app_type" is "SURVEY" | No |
| "adminApp.Survey.General" | Object array, this array contains objects with 2 properties: "name" and "status". Each object represent a general feature of the webform. "name" is a string referring to the name of the feature we are configuring, and "status" is a boolean referring to to the status of the feature. If "status" is true the feature is enabled, otherwise it is disabled. If a feature is missing in the array it will be taken as enabled. The features that can be configured are:<br/><table><tr><td>"Name"</td><td>this is the name of the webform.</td></tr><tr><td>"Description"</td><td>this is the description of the webform.</td></tr><tr><td>"Text"</td><td>this feature refers to the option to add texts elements in the webform.</td></tr><tr><td>"Intro Page"</td><td>this is the intro page of the webform. </td></tr><tr><td>"End Page"</td><td>this is the end page of the webform. </td></tr><tr><td>"Favorite Fields"</td><td>this is the option to add questions from the ones saved as favorites.</td></tr></table> | No |
| "adminApp.Survey.Field Types" | Object array, this array contains objects with 2 properties: "name" and "status". Each object represent a type  of question that can be created in the  webform. "name" is a string referring to the name of the question type we are configuring."status" is a boolean referring to to the status of the question type. If "status" is true the question type is enabled, otherwise it is disabled. At least 1 question type must be enabled, if any question type is missing in the array it will be assumed as enabled. The available question types for Survey are:<ul><li>"Address (Global)"</li><li>"Address (US)"</li><li>"Date"</li><li>"Digital Signature"</li><li>"Dropdown"</li><li>"Email"</li><li>"Expression"</li><li>"Image"</li><li>"Image Upload"</li><li>"Lookup"</li><li>"Multiple Choice"</li><li>"Yes/No",</li><li>"Name"</li><li>"Numeric"</li><li>"Password"</li><li>"Phone Number"</li><li>"Ranking"</li><li>"Rating"</li><li>"Slide Bar"</li><li>"Text (Long)"</li><li>"Text (Short)"</li></ul>  | No |
| "adminApp.Survey.Field Options" | Object array, this array contains objects with 2 properties: "name" and "status". Each object represent a feature or action related to the questions such as deleting or duplicating. "name" is a string referring to the name of the feature we are configuring."status" is a boolean referring to to the status of the feature. If "status" is true the feature is enabled, otherwise it is disabled. The available field options for Survey are:<br/><table><tr><td>"Branching"</td><td>this refers to the creation of branches.</td></tr><tr><td>"Drag and drop"</td><td>this refers to the action changing the order of questions through dragging.</td></tr><tr><td>"Duplicate"</td><td>this refers to the option to duplicate a question.</td></tr><tr><td>"Deleting"</td><td>this refers to the option of deleting questions</td></tr></table>  | No |
