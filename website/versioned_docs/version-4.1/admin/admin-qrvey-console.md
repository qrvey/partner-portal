---
id: version-4.1-admin-sections-platform
title: Business Analytics
sidebar_label: Business Analytics
original_id: admin-sections-platform
---

<div style="text-align: justify">

## Creator User Management

This section is where Admins add their “Creator” users to grant them access to the Business Analytics application. Admins can choose to allow creators to sign up through the Business Analytics application signup page. Alternatively, Admins can add Creator accounts in the User Management section. 

When adding a creator, Admins can assign or automatically generate a password. Creators will receive this password by email, and can use this to access the Analytics Application. Creators can be edited or deleted at any time. Once a Creator has been added successfully, Admins will have access to their content which can be used to share applications. 

## Customization

Admins can customize the overall look and feel, as well as any feature available on the Business Analytics application, to their liking and their branding styles. 

Company information can be added to be displayed in places like email footers for account activation and any email communication generated from automated flows. 

In the styles section, Admins can replace the Qrvey logo with their own company logo so it is displayed in the Business Analytics Application. They can also set the colors to their liking to modify main components such as buttons, icons, backgrounds, the main header bar, notifications and error states. There are also specific colors that Admins can set as default for custom charts and that creators can later modify while building the charts. Admins will be able to preview these changes over main and specific components before saving and applying the styles to the Business Analytics Application. 

The onboarding screens like Log In and Sign Up can also be modified. From this section Admins can select if they would like to allow creators to sign up directly from the Sign Up page. If not, they can turn off this option so Creator accounts are only added and activated from the User Management section. Titles and texts can also be modified. 

In the Emails section, Admins can use the default template provided, or they can create their own email designs for different types of emails, such as Account Activation and Password Reset. 

All of these settings can be reset to their original setting at any time.

## Feature Configuration

In the Features section Admins can turn on/off each of the Creator application sections and features, depending on what they would like to make available to Creators. For example, if Creators only have the need of connecting to databases like MySQL, Aurora, or Postgres Admins can turn off other options in Datasets like creating Elasticsearch or Spreadsheet datasets. They can also only make available these types of databases and turn others off like MS SQL or Oracle. 

All of the other sections, Data Links, Reports, Page Builder, Workflows, Web Forms and Settings can also be turned off. However, it is important to take into consideration that if sections like Datasets and Web Forms are turned off, creators won’t be able to create or have access to any dataset to work with in other sections of the Business Analytics Application. Each section has an information icon where each of the features is explained, so Admins can refer to this when deciding which sections and features to make available to their Creators. 

For Workflows Admins can decide to turn on/off any of the available triggers, actions or conditions depending on the datasets type they will be using, and the automated flows they need to build, using their specified datasets. For example if Creators need to set up an alert system for metrics they might use the _Scheduling Trigger_ along with the _If Metric_ conditions. They wouldn’t have a use for any of the Quiz conditions like _If Retry, If Score, If Rank_, so these can be turned off. Or if Creators are only going to work with Database Connections they would mostly use actions such as _Get Data, Post Data_ and _Submit Data_. They wouldn’t have a use for actions like _Insert Record, Update record, Delete Record_, which only work for data inside the Qrvey system. 

In the case of Web Forms, Creators can use them to quickly collect new data. Admins can choose the type of form that would be used depending on the use case. If Creators need to collect information like names, addresses, phone numbers and emails, Forms are the go-to choice for most applications. They offer a variety of question types and their analytics include tabular, spreadsheet-like view of your data.  Forms also include some unique features, like sections and columns, which allow you to display your forms in multiple columns and across multiple pages. If Creators require branching, or the ability to ask different questions based on the responses received, Survey would be used for this.  Surveys ask questions one at a time, which makes branching possible.  Creators can include a variety of question and field types in surveys and analytics can be presented either in a tabular or summary view with visualizations.

Quiz would be used in a different case when Creators need to test knowledge. With quiz, Creators can assign points to each question and set the correct answers. The output of a quiz is a summary view that shows panels with the score, results and correct vs incorrect answers breakdown along with individual panels for each of the questions asked. 