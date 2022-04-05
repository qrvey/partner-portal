---
id: configure-dynamic-labels
title: Configuring Dynamic Labels For Datasets
sidebar_label: Configuring Dynamic Labels For Datasets
---
<div style={{textAlign: "justify"}}>
 
## Introduction
Qrvey supports a process for displaying text in any number of languages.
 
There are two types of text:
* **Static Text** is built into the Qrvey product pages. These are titles, labels, tooltips, buttons, menus, and such.
* **Dynamic Text** is the text that is entered by Qrvey Composer users. This is text such as Dataset names and Dataset column names.
 
Translated values are entered and stored in a Google spreadsheet. The spreadsheet contains a key for each text segment. The translation process involves entering values for each language for each key.
 
Based on this definition, UI components that use static text are known to the system. For example there is a button on the toolbar of the Page Builder that is titled “Publish Page”. If you generate the Translation Spreadsheet using the steps in the <a href="/docs/special-features/internationalization/step-by-step" target="_blank">Internationalization, Step By Step</a> article, you can find a predefined key **toolbar.publish_page.label** in the **pagebuilder** domain and its original source value is set to “Publish Page”.
 
When it comes to dynamic text, such as dataset names and their column aliases, they will be different from instance to instance and therefore the keys cannot be predefined in the system and have to be configured by the primary users.
 
At this time Qrvey supports dynamic text tokens (i18n tokens) in the Dataset design step in Qrvey Composer. This article explains the process of configuring a dataset so its name and column aliases are translated.
 
## Setting i18n Tokens For Datasets
All datasets in Qrvey are named by the composer user that creates them and their columns can also be aliased from the dataset design screen.
If you wish for the name of any dataset and/or its columns to appear differently for end users of different cultures, enable and use the i18n tokens for the dataset in question.
On the dataset design screen select the 3-dot popup menu from the top-right side of the screen and enable **Label Internationalization**. This prompts the system that the dataset and its columns’ names shall be added to the Translation Spreadsheet with their keys and their existing names as the original source values.
 
 
![internationalization](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/special-features/internationalization/configuring-dynamic-labels/dynamic1.png#thumbnail-40)
 
 
 
Tokens are suggested for each name based on the name itself. For example a column named “age” will be assigned the token {{i18n.age}}. In order to view and optionally modify the assigned token, click the toggle button on the top-right corner of the screen to the <b>{ }</b> position. This changes the displayed value to show the assigned tokens.
 
Tokens appear in the UI like: {{i18n.myTokenKey}}
Click in each field to change the “key” part of any token. If a similar token already exists, the system will suggest it and you can select any of the suggested tokens to reuse.
 
Once the **Label Internationalization** has been turned on, keys have optionally been modified, and changes to the dataset have been applied, remember to run (or re-run) the steps in sections 3-6 as described in the <a href="/docs/special-features/internationalization/step-by-step">Internationalization, Step By Step</a> article, to add the new keys to the Translation Spreadsheet, translate their value, and publish them for use at runtime. 
 
 
 
</div>