---
id: admin-data
title: Data
sidebar_label: Data
---
## Connectors

Admin users can create, edit and delete Database Connections in this section. Connections can be established to MySQl, MS SQL, Aurora, Postgres and Oracle databases. These connections can be used to create Datasets which generate Elasticsearch indexes, which in turn can be used by creators in the Analytics Application.

## Datasets - Elasticsearch Indexes

Once a Database Connection is established in the Datasets section, admins can proceed to select the connection to create an Elasticsearch Index. The dataset will show the list of columns where the admin can modify the data types, assign an alias to each column and select which columns they want to load. 

Additionally Data Sync options can be set so Admins can decide how they want their data to be loaded and how often. Data can be fully reloaded or only updates to the data can be loaded on a schedule. Once the data is loaded this will generate an Elasticsearch Index that will be available to creators in the Analytics Application. 
