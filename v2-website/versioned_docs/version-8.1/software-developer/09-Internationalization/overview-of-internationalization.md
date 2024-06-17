---
id: overview-of-internationalization
title: Overview of Internationalization
sidebar_label: Overview of Internationalization
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst, All Personas]
sidebar_position: 1
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>
 

Qrvey platform supports internationalization and localization for end users in a comprehensive manner. Multi-lingual support is offered for both “static” and “dynamic” text, as well as formatting of numbers and dates based on regions and cultures.
 
* **Static Text** - These are all labels, tooltips, and messages that are part of the user interface of the widgets.
* **Dynamic Text** - These are values that are outside of the platform, like dataset and column names and aliases.
* **Number and Date Formats** - The product supports formatting numbers and dates according to the specified culture. For example, March 12th, 2022 will be formatted as 3/12/2022 for en-US (US English) culture and 12/3/2022 for de-DE (German).
 
The product makes its best effort to accommodate varying text size for words and phrases in different languages, and adjusts the size of the containers according to the size of the text in each language.
 
There is no limit to the number of languages that are supported by the product. However, it is important to note that Qrvey only provides the default English language out of the box and all translations have to be done by customers.
 
## How It Works
Every piece of text that has to be translated - whether static or dynamic - is added to a Google spreadsheet in the form of a key, a default value, and any number of translated values, one for each desired language. A utility does the work of adding new keys to the spreadsheet, and then later “publishes” translated text back to Qrvey where it is used by the product to display each value in the language that is set by the code or the browser.
 
## Setting Up Internationalization
 
>**Note**: The internationalization process requires a Google Cloud Platform account. If you already have a GCP account you can use that. Otherwise, you will need to create one. GCP accounts are free to create and use.
 
At a high level, setting up internationalization requires the following steps:
1. Creating a new project in GCP and following a few configuration steps as described in the [Internationalization, Step By Step](internationalization-step-by-step.md) article.
2. Creating the Google spreadsheet that contains the keys and translations and configuring the utility that performs the import/export of the keys
3. Importing the keys using the utility
4. Performing the translation
5. Using the utility to publish the translated spreadsheet
6. Configuring the widgets to use the translation at runtime
 
The first two steps can be best performed by a Cloud Ops engineer or someone who is comfortable working within the GCP and AWS consoles and has access to these accounts. The Google spreadsheet needs to be created once for any instance of Qrvey that has to be internationalized.
The next steps can be repeated when additional text or phrases need to be translated. For example, you may complete all of the steps and later decide to translate the column names for one or more datasets. In this case, you can configure the dynamic tokens as described in the [Configuring Dynamic Labels For Datasets](configuring-dynamic-labels.md) article, then repeat steps 3 to 5 to import the newly added keys, translate the new text, and publish it back to the system.
 
The above steps have been described in full detail in the [Internationalization, Step By Step](internationalization-step-by-step.md) article.
 
 
</div>