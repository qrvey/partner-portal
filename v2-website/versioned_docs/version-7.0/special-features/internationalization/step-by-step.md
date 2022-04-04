---
id: step-by-step
title: Internationalization, Step By Step
sidebar_label: Internationalization, Step By Step
---
<div style={{textAlign: "justify"}}>


## Introduction
Qrvey supports a process for displaying text in any number of languages. 

There are two types of text:
* **Static Text** is built into the Qrvey product pages. These are titles, labels, tooltips, buttons, menus, and such. 
* **Dynamic Text** is the text that is entered by Qrvey Composer users. This is text such as Dataset names and Dataset column names. 

Translated values are entered and stored in a Google spreadsheet. The spreadsheet contains a key for each text segment. The translation process involves entering values for each language for each key. The spreadsheet may be shared with any number of people involved in the translation process. A utility does the work of adding new keys to the spreadsheet, and then later “publishes” translated text back to Qrvey. 

The following platforms and tools are used in the process:
* **The Translation Spreadsheet** - This Google spreadsheet is used to facilitate the translation process by housing the keys and translations for all of the static and dynamic phrases.
Qrvey Translation Service Utility - This utility is used to import and export “keys” into and out of the Translation Spreadsheet. This spreadsheet is accessed through an API that requires a Google Cloud Platform account.
The Google Cloud Platform account - This free GCP account is used to facilitate access to the Translation Spreadsheet 

The full process can be broken down into six high-level steps that each may be best performed by a specific persona and are explained in this article.

>**Note**: The internationalization process requires a Google Cloud Platform account. If you already have a GCP account you don’t need to create another one. Otherwise visit https://cloud.google.com/ to create your free Google Cloud Platform account. You will use this account in the next steps.

## 1 - Google Spreadsheet API
**Recommended Persona**: Cloud Ops engineer
**Prerequisites**: A GCP account and credentials to access and create projects in it.

In this section you will create a new project in your GCP account and enable the Google Spreadsheet API that is used by Qrvey to access the Translation Spreadsheet. Google does not charge for creating an account or spreadsheet API access.

### Steps
<ul style={{listStyle: 'none'}}>
<li>1. Create a Google Cloud Platform account by visiting https://cloud.google.com/ or log into your existing GCP account.</li><br/>
2. Create a new project.
</ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> a. From the Google Cloud dashboard, create a new project. This option can also be found by typing “Create a Project” in GCP’s search bar.<br/></li></ul>
<ul style={{listStyle: 'none'}}>
<li>3. Enable the Google Spreadsheet API.</li></ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> a. Create a credential email address.</li></ul>
<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li> i. Below “APIs & Services”, select “Library”. This option can also be found by typing “Sheets API” in GCP’s search bar.</li> 
<li> ii. Select “Google Sheets API”.</li> 
<li> iii. Select “Enable”.</li> 
<li> iv. Select the “CREDENTIALS” tab.</li> 
<li> v. Select “+ CREATE CREDENTIALS”.</li> 
<li> vi. Select “Service Account”.</li> 
<li> vii. Enter a “Service account name”, for example, “Qrvey Translation”.</li> 
<li> viii. Click “CREATE AND CONTINUE”.</li> 
<li> ix. Skip the section for “account access”.</li> 
<li> x. Click “Done”</li> 
<li> xi. Save the generated email address listed under “Service Accounts”, ending in “iam.gserviceaccount.com”.</li> </ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>b. Create the Private Key.</li></ul>
<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li>i. Click the new Service Account’s email address.</li>
<li>ii. Click “KEYS”.</li>
<li>iii. Click “ADD KEY”.</li>
<li>iv. Click “Create new key”.</li>
<li>v. Select “JSON”, click CREATE.</li>
<li>vi. A JSON file is downloaded by the browser. Open the JSON file.</li>
<li>vii. Save the value of “private_key”, the part that is within double-quotes.</li></ul>

## 2- Translation Spreadsheet and Utility
**Recommended Persona**: Cloud Ops engineer
**Prerequisites**: Credentials to access the AWS account where Qrvey is installed, the email and key that were generated in the last section.

In this section you will create a blank translation spreadsheet and configure the Qrvey Translation Service Utility to enable access to it via the Google Spreadsheet API.

### Steps
<ul style={{listStyle: 'none', marginLeft: 'none'}}>
<li>1. Create the translation spreadsheet.</li>
</ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Open this <a href="https://docs.google.com/spreadsheets/d/1_qvW2327-e5M___oymzIvNHAtcMqpssx3UZUOviUwAE/edit?usp=sharing" target="_blank">sample translation spreadsheet</a>.</li>
<li>b. From the <u>File</u> menu, select <b>Make a copy</b>. This copy will be used to enter translated text for your deployment.</li>
<li>c. Rename this spreadsheet as desired.</li>
<li>d. From the spreadsheet’s URL, save the document ID. This is the long string wrapped in / characters.</li>
</ul>
<ul style={{listStyle: 'none', marginLeft: '30px'}}><li>i. For example, if we have this URL “https://docs.google.com/spreadsheets/d/1YygAI9_UoRefEjDfUYAKh62FMZWJMjKJHDFZ6wzws/edit#gid=0”, the document id would be “1YygAI9_UoRefEjDfUYAKh62FMZWJMjKJHDFZ6wzws”</li>
</ul>
<br/>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> e. Share this spreadsheet, as “Editor”, with user accounts of people who will enter or review translations. </li>
<li> f. Share this spreadsheet as “Editor” with the email account saved above, the one ending in “iam.gserviceaccount.com”.</li></ul>

<ul style={{listStyle: 'none', marginLeft: 'none'}}>
<li>2. Configure the Translation Service Utility.</li></ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Sign in to the AWS management console.</li>
<li>b. Select the account in which Qrvey is deployed.</li>
<li>c. Select the Lambda service.</li>
<li>d. Locate the utility lambda. It’s name is like &lt;deploymentId&gt;_qrvey_Globalization.</li>
<li>e. Select “Configuration”, then “Environment variables”.</li>
<li>f. Fill in values for three variables. Enter the API key, email address, and document id saved above.</li></ul>
<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li>i. GOOGLE_CLIENT_EMAIL </li>
<li>ii. GOOGLE_CLIENT_PRIVATE_KEY</li>
<li>iii. GOOGLE_DOCUMENT_ID</li></ul>

## 3- Importing the Keys
**Recommended Persona**: Cloud Ops engineer or software engineer
**Prerequisites**: Qrvey API key

The Translation Spreadsheet provides the location and mechanism for all translation values. It consists of two tabs, each holding keys and translations for different areas of the Qrvey platform. The keys uniquely identify each term or phrase and are automatically generated for the static text. Dynamic text keys are suggested by the system, but can be manually set during the configuration process. See <a href="/docs/special-features/internationalization/configuring-dynamic-labels" target="_blank">Configuring Dynamic Labels For Datasets</a> article to learn more about that process.

The steps in this section use the Qrvey Translation Service Utility to import the keys into the spreadsheet. 

>**Note**: If you wish to translate dynamic text, it is advisable to configure the desired values before running these steps. This will ensure that the keys for the dynamic values are also imported at this stage.

### Steps
1. Obtain the Qrvey API key, generated during the deployment process.
2. From a terminal, call the API, replacing {{API_KEY}} with the API key.

```
curl --location --request POST '{{DOMAIN}}/devapi/v5/globalization/translation/spreadsheet/update' \
--header 'content-type: application/json' \
--header 'x-api-key: {{API_KEY}}'
```
3. Open the spreadsheet. See that new keys were added.

## 4- The Translation Process
**Recommended Persona**: Translator(s)
**Prerequisites**: Access to the Translation Spreadsheet

The Translation Spreadsheet has two tabs by default. The staticText tab is for web page content such as captions, buttons, and menus and has three important columns that should not be removed:
* **Domain** helps identify the area of the product where the static text appears.
* **Key** is the unique identifier that the product uses for the term or phrase. Many times it further helps with locating the phrase. **The key values should not be changed**.
* **Original source** is the default English term or phrase that is used in the product. This value is also used as the fallback when no translation exists for the selected language.

Additional columns can be added for each language that has to be supported by the product. Each translation column is named "translation_&lt; language-code &gt;". For example you can add a translation_es column and translate each term that is entered in the original source column, to Spanish. See <a href="https://en.wikipedia.org/wiki/Language_localisation" target="_blank">language sub-code and optional national sub-code</a> to learn more about language codes.

A sample row on the static text tab of the spreadsheet may look something like this:

| **domain** | **key** | **original source** | **translation_es** | **translation_de** | 
| --- | --- | --- | --- | --- | 
| pagebuilder| topbar.pages| Pages | Páginas | Seiten| 


The **i18nTokens** tab is for translating i18n tokens entered into the Qrvey UI and it does not have a **domain** column. The keys are configured from the Qrvey Composer and can be set to any uniquely identifiable value. It is recommended that the use of special characters is avoided for keys. See <a href="/docs/special-features/internationalization/configuring-dynamic-labels" target="_blank">Configuring Dynamic Labels For Datasets</a> article to learn about the process of configuring i18 tokens in Qrvey Composer.

Once the keys have been added to the spreadsheet by following the import process described in the previous section, any number of people can work on the spreadsheet to enter the translations.

### Steps
<ul style={{listStyle: 'none', marginLeft: 'none'}}>
<li>1. Open the spreadsheet.</li>
<li>2. Open each of the tabs. See that the tabs are loaded with keys.</li> 
<li>3. If they don’t already exist, create a column for each language desired.</li></ul>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Each translation column is named "translation_&lt; language-code &gt;".</li>
<li>b. See <a href="https://en.wikipedia.org/wiki/Language_localisation" target="_blank">language sub-code and optional national sub-code</a> to learn more about language codes.</li></ul>
<ul style={{listStyle: 'none', marginLeft: 'none'}}>
<li>4. Enter a translation value for blank cells under the language columns.</li></ul>

#### Hints
Standard spreadsheet features help with managing the translation process.
1. It’s OK to sort the spreadsheet.
2. It’s OK to reorder columns.
3. It’s OK to add row filters. The translation utility ignores row filters.
4. It’s OK to add additional working columns for any purpose desired, such as translation, or QA tracking. The translation utility ignores extra columns.
5. Do not change the values in the “key” and “original source” columns.

## 5- Publishing the Translated Values
**Recommended Persona**: Cloud Ops engineer or software engineer
**Prerequisites**: Qrvey API key

Once there are translation values in the spreadsheet, they may be published into Qrvey, making them accessible to the end-users who are working with the embedded widgets in different languages.

### Steps
1. Obtain the Qrvey API key, generated during the deployment process.
2. From a terminal, call the API, replacing {{API_KEY}} with the API key.
```
curl --location --request POST '{{DOMAIN}}/devapi/v5/globalization/translation/dictionary/update' \
--header 'content-type: application/json' \
--header 'x-api-key: {{API_KEY}}'
```
3. If you have performed the widget configuration step before (as described in the next section), open the widget and see that translated values appear. Otherwise go to the next section to complete the process.

## 6- Configuring Qrvey Widgets for Internationalization
**Recommended Persona**: Software engineer
**Prerequisites**: Language codes of the translated values

The last step in the process of internationalization is adding the necessary setting to the widgets’ configuration object. The ++ object can be added alongside other configuration attributes of the widget and contains **lang** and an optional locale property:

```json
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

The value of the **lang** (and the optional **locale**) property may be a <a href="https://en.wikipedia.org/wiki/Language_localisation" target="_blank">language sub-code and optional national sub-code</a>. For example, specify “es” for Spanish. Or for multiple Spanish dialects, “es-MX” and “es-CO” could be configured for users from Mexico and Colombia. 

Alternatively, the value may be “browser”, in which case the browser’s primary language code is selected.

## Final Notes and Considerations
The following points frequently come up as questions and are worth noting.

### Adding Keys in Multiple Rounds
The process of generating the translation keys is rarely a one-time deal. New keys are identified and must be added for static text due to upgrading to new versions of the product and getting new or updated UI elements. For dynamic text this may happen even more frequently, as new datasets are added and their column names need translation. 
It is important to know that the steps in sections 3, 4 and 5 (and 6, if needed) may be repeated as needed. Rerunning the utility only adds the new keys and does not change the work that was previously done.
The process, in the presence of dynamic keys may be depicted as in the following chart.

![internationalization](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/special-features/internationalization/step-by-step/chart.png#thumbnail)

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



</div>