---
id: i18n-step-by-step
title: Internationalization, Step By Step
sidebar_label: Internationalization, Step By Step
tags: [Software Developer, Solution Architect, CloudOps Engineer, Data Analyst]
sidebar_position: 2
displayed_sidebar: getting-started
---

## Introduction
Qrvey supports a process for displaying text in any number of languages.
 
There are two types of text:
* **Static Text** is built into the Qrvey product pages. These are titles, labels, tooltips, buttons, menus, and such.
* **Dynamic Text** is the text that is entered by Qrvey Composer users. This is text such as Dataset names and Dataset column names.
 
Translated values are entered and stored in a Google spreadsheet. The spreadsheet contains a key for each text segment. The translation process involves entering values for each language for each key. The spreadsheet may be shared with any number of people involved in the translation process. A utility does the work of adding new keys to the spreadsheet, and then later “publishes” translated text back to Qrvey.
 
The following platforms and tools are used in the process:
* **The Translation Spreadsheet** - This Google spreadsheet is used to facilitate the translation process by housing the keys and translations for all of the static and dynamic phrases.

* **Qrvey Translation Service Utility** - This utility is used to import “keys” into the Translation Spreadsheet, and then export translated values back into Qrvey. This spreadsheet is accessed through an API that requires a Google Cloud Platform account.

* **The Google Cloud Platform account** - This free GCP account is used to facilitate access to the Translation Spreadsheet
 
The full process can be broken down into six high-level steps that each may be best performed by a specific persona and are explained in this article.
 
>**Note**: The internationalization process requires a Google Cloud Platform account. If you already have a GCP account you don’t need to create another one. Otherwise visit https://cloud.google.com/ to create your free Google Cloud Platform account. You will use this account in the next steps.

## 1 - Google Spreadsheet API

**Recommended Persona**: Cloud Ops engineer<br/>
**Prerequisites**: A GCP account and credentials to access and create projects in it.
 
In this section you will create a new project in your GCP account and enable the Google Spreadsheet API that is used by Qrvey to access the Translation Spreadsheet. Google does not charge for creating an account or spreadsheet API access.

1. Create a Google Cloud Platform account by visiting https://cloud.google.com/ or log into your existing GCP account.
2. From the Google Cloud dashboard, create a new project. This option can also be found by typing “Create a Project” in GCP’s search bar.
3. Enable the Google Spreadsheet API.  
   - Create a credential email address.  
      - Below “APIs & Services”, select “Library”. This option can also be found by typing “Sheets API” in GCP’s search bar.  
      - Select “Google Sheets API”.  
      - Select “Enable”.  
      - Select the “CREDENTIALS” tab.  
      - Select “+ CREATE CREDENTIALS”.  
      - Select “Service Account”.  
      - Enter a “Service account name”, for example, “Qrvey Translation”.  
      - Click “CREATE AND CONTINUE”.  
      - Skip the section for “account access”.  
      - Click “Done”  
      - Save the generated email address listed under “Service Accounts”, ending in `iam.gserviceaccount.com`.  
   - Create the Private Key.  
      - Click the new Service Account’s email address.  
      - Click “KEYS”.  
      - Click “ADD KEY”.  
      - Click “Create new key”.  
      - Select “JSON”, click CREATE.  
      - A JSON file is downloaded by the browser. Open the JSON file.  
      - Save the value of “private_key”, the part that is within double-quotes.  

## 2- Translation Spreadsheet and Utility

**Recommended Persona**: Cloud Ops engineer  
**Prerequisites**: Credentials to access the AWS account where Qrvey is installed, the email and key that were generated in the last section.
 
In this section you will create a blank translation spreadsheet and configure the Qrvey Translation Service Utility to enable access to it via the Google Spreadsheet API.

1. Create the translation spreadsheet.
   - Open this [sample translation spreadsheet](https://docs.google.com/spreadsheets/d/1_qvW2327-e5M___oymzIvNHAtcMqpssx3UZUOviUwAE/edit?usp=sharing).
   - From the "File" menu, select **Make a copy**. This copy will be used to enter translated text for your deployment.
   - Rename this spreadsheet as desired.
   - From the spreadsheet’s URL, save the document ID. For example:  
   URL: `https://docs.google.com/spreadsheets/d/1YygAI9_UoRefEjDfUYAKh62FMZWJMjKJHDFZ6wzws/edit#gid=0`  
   DOC ID: `1YygAI9_UoRefEjDfUYAKh62FMZWJMjKJHDFZ6wzws`
   - Share this spreadsheet, as “Editor”, with user accounts of people who will enter or review translations.
   - Share this spreadsheet as “Editor” with the email account saved above, the one ending in `iam.gserviceaccount.com`.
2. Configure the Translation Service Utility
   - Reconfigure the following CloudFormation Stacks and CodePipelines by following our [Update a Single Pipeline](https://partners.qrvey.com/docs/deployment/customizing-qrvey-deployment#update-a-single-pipeline) guide.
      - Microservices
         - CloudFormation Stack: `xxxxxMicroservicesCodePipeline`. Parameters:
            - `GoogleClientDocId`
            - `GoogleClientEmail`
            - `GoogleClientPK`
         - CodePipeline: `Qrvey_xxxxx_Microservices`
   - Wait for the pipelines to finish before moving on the next step

## 3- Importing the Keys

**Recommended Persona**: Cloud Ops engineer or software engineer <br/>
**Prerequisites**: Qrvey API key
 
The Translation Spreadsheet provides the location and mechanism for all translation values. It consists of two tabs, each holding keys and translations for different areas of the Qrvey platform. The keys uniquely identify each term or phrase and are automatically generated for the static text. Dynamic text keys are suggested by the system, but can be manually set during the configuration process. See [Configuring Dynamic Labels For Datasets](configuring-dynamic-labels.md) article to learn more about that process.
 
The steps in this section use the Qrvey Translation Service Utility to import the keys into the spreadsheet.
 
>**Note**: If you wish to translate dynamic text, it is advisable to configure the desired values before running these steps. This will ensure that the keys for the dynamic values are also imported at this stage.

1. Obtain the Qrvey API key, generated during the deployment process.
2. From a terminal, call the [Update Globalization Spreadsheet](https://qrvey.stoplight.io/docs/qrvey-api-doc/25e8ac0578467-update-globalization-spread-sheet) endpoint.
 
```shell
curl --location --request POST '{{DOMAIN}}/devapi/v5/globalization/translation/config/spreadsheet' \
--header 'content-type: application/json' \
--header 'x-api-key: {{API_KEY}}'
```

3. Open the spreadsheet. See that new keys were added.

## 4- The Translation Process

**Recommended Persona**: Translator(s)<br/>
**Prerequisites**: Access to the Translation Spreadsheet
 
The Translation Spreadsheet has two tabs by default. The staticText tab is for web page content such as captions, buttons, and menus and has three important columns that should not be removed:
* **Domain** helps identify the area of the product where the static text appears.
* **Key** is the unique identifier that the product uses for the term or phrase. Many times it further helps with locating the phrase. **The key values should not be changed**.
* **Original source** is the default English term or phrase that is used in the product. This value is also used as the fallback when no translation exists for the selected language.
 
Additional columns can be added for each language that has to be supported by the product. Each translation column is named `translation_<language-code>`. For example you can add a `translation_es` column and translate each term that is entered in the original source column to Spanish. See [language sub-code and optional national sub-code](https://en.wikipedia.org/wiki/Language_localisation) to learn more about language codes.
 
A sample row on the static text tab of the spreadsheet may look something like this:
 
| **domain** | **key** | **original source** | **translation_es** | **translation_de** |
| --- | --- | --- | --- | --- |
| pagebuilder| topbar.pages| Pages | Páginas | Seiten|
 
 
The **i18nTokens** tab is for translating i18n tokens entered into the Qrvey UI and it does not have a **domain** column. The keys are configured from the Qrvey Composer and can be set to any uniquely identifiable value. It is recommended that the use of special characters is avoided for keys. See [Configuring Dynamic Labels For Datasets](configuring-dynamic-labels.md) article to learn about the process of configuring i18 tokens in Qrvey Composer.
 
Once the keys have been added to the spreadsheet by following the import process described in the previous section, any number of people can work on the spreadsheet to enter the translations.

1. Open the spreadsheet.
2. Open each of the tabs. See that the tabs are loaded with keys.
3. If they don’t already exist, create a column for each language desired.
   - Each translation column is named `translation_<language-code>`.
   - See [language sub-code and optional national sub-code](https://en.wikipedia.org/wiki/Language_localisation) to learn more about language codes.
4. Enter a translation value for blank cells under the language columns.

**Tips:**  
Standard spreadsheet features help with managing the translation process.
- It’s OK to sort the spreadsheet.
- It’s OK to reorder columns.
- It’s OK to add row filters. The translation utility ignores row filters.
- It’s OK to add additional working columns for any purpose desired, such as translation, or QA tracking. The translation utility ignores extra columns.
- Do not change the values in the “key” and “original source” columns.

## 5- Publishing the Translated Values

**Recommended Persona**: Cloud Ops engineer or software engineer  
**Prerequisites**: Qrvey API key
 
Once there are translation values in the spreadsheet, they may be published into Qrvey, making them accessible to the end-users who are working with the embedded widgets in different languages.

1. Obtain the Qrvey API key, generated during the deployment process.
2. From a terminal, call the [Update i18n Dictionary Files](https://qrvey.stoplight.io/docs/qrvey-api-doc/ecdaf40552e7b-update-i18n-dictionary-files) endpoint.

```shell
curl --location --request POST '{{DOMAIN}}/devapi/v5/globalization/translation/config/dictionary' \
--header 'content-type: application/json' \
--header 'x-api-key: {{API_KEY}}'
```

3. If you have performed the widget configuration step before (as described in the next section), open the widget and see that translated values appear. Otherwise go to the next section to complete the process.

## 6- Configuring Qrvey Widgets for Internationalization

**Recommended Persona**: Software engineer  
**Prerequisites**: Language codes of the translated values
 
The last step in the process of internationalization is adding the necessary setting to the widgets’ configuration object. The **i18n** object can be added alongside other configuration attributes of the widget and contains **lang** and an optional locale property:
 
```html
<script>
var config = {
   "api_key": "<API_KEY>", // your API key
   "app_id": "<APP_ID>", // your app_id
…
   "i18n": {
       "lang": "<language-code>", // the language to use for the UI
       "locale": "<locale-code>", // the optional locale code to use for date and number formatting
…
}
</script>
```
 
The value of the **lang** (and the optional **locale**) property may be a [language sub-code and optional national sub-code](https://en.wikipedia.org/wiki/Language_localisation). For example, specify “es” for Spanish. Or for multiple Spanish dialects, “es-MX” and “es-CO” could be configured for users from Mexico and Colombia.
 
Alternatively, the value may be “browser”, in which case the browser’s primary language code is selected.

## Final Tips
The following points frequently come up as questions and are worth noting.

### Adding Keys in Multiple Rounds
The process of generating the translation keys is rarely a one-time deal. New keys are identified and must be added for static text due to upgrading to new versions of the product and getting new or updated UI elements. For dynamic text this may happen even more frequently, as new datasets are added and their column names need translation.
It is important to know that the steps in sections 3, 4 and 5 (and 6, if needed) may be repeated as needed. Rerunning the utility only adds the new keys and does not change the work that was previously done.
The process, in the presence of dynamic keys may be depicted as in the following chart.
 
![internationalization](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/special-features/internationalization/step-by-step/chart-new.png#thumbnail-60)

### Language Fallbacks
When the widget is configured with a language that does not have a translation, the system identifies a fallback language. For example if the **lang** property has been set to "es-MX", the system goes through the following steps to choose the correct language:
 
1. Use the translation "es-MX”, if it exists.
2. Otherwise, use the translation “es”, if it exists.
3. Otherwise, use no translation and show the default content.

### Setting the Language Dynamically
The language code may be hard-coded by setting the **lang** property to a specific language code, or it can be set to the keyword browser to be set dynamically, by the user’s browser’s culture setting. If the **browser** language code does not exist in the translation dictionary, the language fallback process is followed to determine the next language in line.

### Formatting Dates and Numbers According to Culture
Dates and numbers are formatted differently in different regions of the world. While 3/12/2022 is interpreted as March 12, 2022 and 12.345 as 12 point 345 for an American, the same date and number mean December 3, 2022 and twelve thousand three hundred and forty-five for a German user.
 
In order for the system to display dates and numbers according to a set culture or the user’s browser settings, the optional **locale** property of the **i18n** object may be set to the desired language code or **browser**, respectively.
 