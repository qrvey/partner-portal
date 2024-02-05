---
id: smart-analyzer
title: Smart Analyzer
sidebar_label: Smart Analyzer
tags: [Data Analyst]
sidebar_position: 1
displayed_sidebar: data-analyst
---
 
<div style={{textAlign: "justify"}}>

Smart Analyzer unleashes the power of artificial intelligence (AI) to acquire new insights into your data. This feature establishes a link between ChatGPT and the data in your chart, enabling you to ask ChatGPT questions in natural language about your data. This feature does not alter or modify datasets in any way. 

>**Note**: Smart Analyze is not enabled by default. To enable Smart Analyzer, see “Enabling Smart Analyzer” later in this article. 

To open Smart Analyzer, click the Smart Analyzer icon in any of the supported charts:

![icon-composer-Smart-Analyzer](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/smart-analyzer/icon-smart-analyzer.png)

The Smart Analyzer chat dialog displays:

![Smart Analyzer Chat Dialog-83](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/chart-builder/smart-analyzer/smart-analyzer-chat-dialog-83.png)

The Smart Analyzer Chat dialog enables you to ask questions in natural language about the columns in the chart, and the AI provides answers in natural language. The dialog also provides some suggested questions that you may click to get started. The column names are listed at the top of the dialog. 

## Supported Widgets
Smart Analyzer is supported the following widgets:
* Dashboard Builder
* Dashboard View
* Analyze
* AN-panel

You can also access the Smart Analyzer feature in Qrvey Composer in Dashboard Builder, Dashboard View, and while viewing data from the Analyze tab. 

## Supported Charts
Smart Analyzer supports the following chart types:
* Bar
* Line
* Symbol
* Multiseries Bar
* Multiseries Combo
* Multiseries Line
* Multiseries Symbol
* Combo
* Funnel
* Pie
* Min/Max
* Indicator Gauge
* Dial Gauge
* Bullet Gauge
* Table
* Heatmap
* Dot Map
* Bubble Map
* Choropleth
* Word Cloud

## Enabling Smart Analyzer
Smart Analyzer is not enabled by default. To enable Smart Analyzer in Dashboard Builder, Dashboard View, Analyze or AN-panel, follow these steps:

1. Obtain the API key for your OpenAI license: https://platform.openai.com/docs/api-reference/authentication
2. Send this API key to the Update AI Configuration Settings endpoint. For information on using this endpoint, contact Qrvey Customer Support. 
3. Enable the Smart Analyzer. Two scenarios are described below. 

    For embedded scenarios, define the following global variable:

    ```
    var smartan = true;
    // Or
    window['smartan'] = true;
    ```

    For embedded scenarios using Qrvey Composer, follow these steps: 
    * Open a dashboard in Dashboard Builder, or open a dataset and display the Analyze tab. 
    * Append the following text to the end of the Qrvey Composer URL:  

        `?smartan=true`

    >**Note**: You can also use the above method for embedded scenarios by adding this query var to the embedded widget's URL.


</div>