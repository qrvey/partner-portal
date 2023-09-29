---
id: overview-of-formula-builder
title: Overview of Formula Builder
sidebar_label: Overview of Formula Builder
tags: [Data Analyst]
sidebar_position: 1
displayed_sidebar: data-analyst
---

Formula Builder is an interactive user interface that enables you to quickly create, test, and save formulas. Formulas enable you to create new columns of data that do not already exist in the dataset. For example, you can create a formula to segment data, aggregate data, calculate ratios, and much more. Once a formula is created and saved, it is available in Chart Builder, Pixel-perfect Reports, and the Analyze widget as a new column that can be added to a chart or visualization. The Qrvey platform computes the values of that column in real time, when the end user displays the chart or visualization. 

For a video tutorial on using Formula Builder, see the video [Formulas and Buckets](../../../../../video-training/legacy/formulas-buckets.md). 

Formula Builder is opened from within Chart Builder, Pixel-perfect Reports, or the Analyze widget. Click the sigma icon on the toolbar:

![icon-composer-formula-builder-82](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/formula-builder-20/icon-composer-formula-builder-82.png)

The Formulas dialog displays with a list of existing formulas. 

![formulas-dialog-82](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/formula-builder-20/formulas-dialog-82.png)

To create a new formula, click **Create Formula**. The Create Formula dialog displays. 

Formula Builder provides the following two modes for creating formulas:
* **Data Engine Syntax (legacy)**. Create formulas using a database-specific syntax. For more information, see [Using Data Engine Syntax Mode](../10-Formula%20Builder/using-data-engine-syntax.md). 
* **Standardized Syntax**. Create formulas using a standardized syntax that is compatible with any database connected to the Qrvey platform. Introduced in Version 8.2. For more information, see [Using Standardized Syntax Mode](../10-Formula%20Builder/using-standardized-syntax.md). 

## The Formula Builder Interface
The Formula Builder interface consists of three main sections:
* **Formula**. The editor in which you write the formula. 
  * Standardized Syntax also provides a **Testing** tab, which enables you to define the input data to test your formula. For more information, see [Using Standardized Syntax Mode](../10-Formula%20Builder/using-standardized-syntax.md). 
  * Data Engine Syntax provides a **Test** link that tests the formula using random values from the dataset. 
* **Insert Functions**. Lists all the functions available to use in your formula, provides a helpful description of each function, and enables you to add functions to the formula. 
* **Insert Columns**. Lists all the dataset columns available to add to your formula. 

![formula-builder-data-engine-syntax-82](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/formula-builder-20/formula-builder-data-engine-syntax-82.png)

## Using Formulas

After creating and saving a formula, it displays in the Data panel along with the other columns in the dataset. Formulas are indicated by the sigma icon before the name. You can select and use formulas in the same manner as other columns in various features including charts, filters, Automation, and Pixel-perfect Reports. 

The following screenshot of Chart Builder includes several formulas in the Data panel:

![chart-builder-with-formulas-82](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/formula-builder-20/chart-builder-with-formulas-82.png)

See also:
* [Using Data Engine Syntax Mode](../10-Formula%20Builder/using-data-engine-syntax.md)
* [Using Standardized Syntax Mode](../10-Formula%20Builder/using-standardized-syntax.md)