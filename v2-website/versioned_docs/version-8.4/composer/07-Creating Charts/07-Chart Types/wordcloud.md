---
id: chart-type-word-cloud
title: Word Cloud
sidebar_label: Word Cloud
tags: [Data Analyst]
sidebar_position: 21
displayed_sidebar: data-analyst
---

<div style={{textAlign: "justify"}}>

A Word Cloud is a visual representation of text data in which the importance or frequency of individual words is represented using the font size. The more important or most frequently used a word is, the larger it appears. This format allows users to spot the most important or frequently used words in a Dataset. Word Cloud charts are best suited when trying to analyze the composition of language to help identify what the most important words or sentiments in a dataset are. For business purposes, Word Clouds can be helpful to find customers' pain points.

![wordcloud](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Wordcloud/wordcloud.png#thumbnail)


## Creating a Word Cloud
To create a Word Cloud, drag and drop a data field from the Data Panel onto either the corresponding shelf or the canvas. 

In the case below, we want to see which of the product categories appears in our dataset most often and how many of these products have been sold so far. We drag and drop *productLine* column as **Category** and *Total Sales* as **Values**. We can see how many of these products were sold in the tooltip on mouseover.  

![wordcloud](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/dataviews/chart-types-all/Wordcloud/create.gif#thumbnail)




## Styling the Word Cloud
In the Configuration Panel on the right of the Chart Builder, you can style different aspects of your visualization.

### General
The General section is available for all chart types, and the options vary depending on the chart selected. For more information on the options, see [General Chart Settings](../09-Configure%20charts/general-chart-settings.md).


### Filters
You can also add Filters to your data by expanding the Filters section in the configuration panel or by clicking on the Filters button in the toolbar above the canvas. 
Filters that are created in the Chart Builder are hidden from End Users. These types of filters can’t be edited or interacted with in the view mode. For more information, see [Filters](../09-Configure%20charts/chart-filters.md).


</div>