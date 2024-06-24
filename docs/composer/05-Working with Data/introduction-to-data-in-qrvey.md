---
id: introduction-to-data-in-qrvey
title: Introduction to Data in Qrvey 
sidebar_label: Introduction to Data in Qrvey
tags: [Data Analyst]
sidebar_position: 1
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

Datasets, Web Forms, and Connections work together to play vital roles in the data lifecycle within Qrvey, from data collection to data storage and analysis.

## Connections
A [Connection](./Connections/overview-of-connections.md) is a link established between Qrvey and an external data source.

This could be a database, a data warehouse, CSV & JSON files, a cloud storage services like AWS, incoming data from REST APIs, or some other system that store data. Connections allow Qrvey to access and retrieve data from these external sources. The main purpose of a connection is to establish a secure and reliable pathway for data retrieval and integration into Qrvey.

## Datasets

A [Dataset](./Datasets/01-Overview%20of%20Datasets/overview-of-datasets.md) is a collection of data imported, transformed, and stored for analysis and reporting.

This may include data from one or more Connections. The transformation process involves cleaning, filtering, aggregating, and joining data to ensure it is ready for analysis.Once the dataset is created, it is stored within Qrvey's infrastructure. The main purpose of a dataset is to provide a structured and optimized collection of data for creating visualizations, reports, and dashboards.

## Webforms

[Webforms](./Web%20Forms/overview-of-web-forms.md) allow you to create forms, surveys, and quizzes to collect new data or update existing data directly from end-users. 

Once created and configured, they can be embedded on websites, shared via links, or integrated into applications. Data collected via Webforms can be immediately stored within Qrvey and can be used to update datasets.

## How it Works

Connections, Datasets, and Webforms work together to create Qrvey's data-driven experience.

1. **Create Connection(s):** Establish a connection to external data sources (databases, cloud storage, etc.).
2. **Import Data:** Use the Connection to import data into Qrvey.
3. **Create a Webform:** Design Webforms to collect data directly from users.
4. **Store Data in Datasets:** Data from both Connections and Webforms are stored in Datasets.
5. **Analyze and Visualize:** Use the Datasets to create Dashboards, Pixel Perfect Reports, and other analytical outputs.

</div>