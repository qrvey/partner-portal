---
id: manage-aws-elasticsearch
title: Managing AWS Elasticsearch Cluster
sidebar_label: Managing AWS Elasticsearch Cluster
---
<div style={{textAlign: "justify"}}>

The Qrvey platform uses AWS Elasticsearch service to store all Analytics data and runs queries on this cluster to show Charts and Metrics in UI. This document explains how to monitor and Resize an AWS Elasticsearch cluster based on your needs and requirements.

Elasticsearch is an open-source, RESTful, distributed search and analytics engine built on Apache Lucene. Since its release in 2010, Elasticsearch has quickly become the most popular search engine, and is commonly used for log analytics, full-text search, security intelligence, business analytics, and operational intelligence use cases. More information about AWS Elasticsearch service can be found on [AWS Elasticsearch website here](https://aws.amazon.com/elasticsearch-service/).

## Architecture

Inside the Qrvey platform, data is stored in Elasticsearch as documents in an index. Each index is equivalent to a Table or data set. There are 2 sets of indexes that store data.

1.  A global single index by the name of ‘_\_qrveyanswers’ or ‘_\_datapowerhouse’ which is used to save all answers from webforms (Survey/Quiz/Forms and CSV files).
2.  One index per data set created in Analytics UI for Relational databases like MySQL/SQL Server/Oracle etc or by using DataRouter (Elasticsearch Live).

By default each index consists of 5 shards with 1 replica with data type mappings defined for each column.

AWS has recommendations about [sizing an Elasticsearch cluster](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/sizing-domains.html) here. We recommend having at least 2-3 nodes per cluster with enough storage based on your requirements. Please keep in mind that data is stored as JSON documents and is replicated as per the configuration (1 replica by default). Qrvey Platform currently uses Elasticsearch v5.5 with default values.

For a dev/staging environment (light use case) we recommend a 2 node cluster with ‘t2.medium’ server types and this configuration is good enough to handle 100 indexes with a total of 5-10M rows of standard data size. 

For production environments we recommend having the cluster with at least 2-3 nodes of m4 server type. Also it is recommended to have Master instances in at least 2 Availability zones.

To save on cost, Elasticsearch instances can be reserved by paying in advance for 1-3 years. We highly recommend using the reserved pricing once you know the type and number of instances you would need for the long term.

## Monitoring

There are 2 ways of monitoring your Elasticsearch cluster. 

1.  You can use Qrvey’s Admin app under DataRouter &gt;&gt; Health Dashboard. This dashboard shows you information about the number of records added and basic information about the Elasticsearch cluster index like space used, server type and overall health of the cluster.

![alt_text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/manageawselasticsearch/Managing-AWS0.png#thumbnail "image_tooltip")

2.  AWS Elasticsearch service console: AWS console shows a lot of information about the cluster under “Cluster Health” and “Instance health” tabs. A few important metrics to monitor here are
    1.  Cluster Status : This should be green.
    2.  Total Nodes and Total Free space.
    3.  Maximum CPU and Memory utilization - This should be around or below 50-80%.
    4.  JVMPressure - This should stay below 80%.
    5.  Minimum free storage space - This is the minimum free storage space accross all nodes, depending on the size it should have enough space (at least 20% free).

![alt_text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/manageawselasticsearch/Managing-AWS1.png#thumbnail "image_tooltip")

## Resizing a cluster

Changing the cluster in AWS Elasticsearch service requires zero downtime as it uses blue/green deployment. AWS will make the changes by adding new servers to the domain, then it will transfer all the data to the new servers and remove the old servers once the new servers are ready. To make any changes to the Elasticsearch cluster 

1.  Login to the console for your AWS Account.
2.  Select AWS Elasticsearch service from the list of services.
3.  Select the elasticsearch domain you would like to monitor or change.
4.  Click on the “Configure Cluster” button.
5.  From the “Configure domain” page you can change any settings by picking appropriate values.
    1.  Availability zones - For dev/test scenarios 1-AZ is enough, for production it can be 2-AZ or 3-AZ
    2.  Instance Type - Pick the server type that would best fit your use-case. We recommend t2.medium for dev/test workloads and m4 or i3 server type family for production or high workloads.
    3.  Number of Instance - We recommend at least 2 (preferably 3 or more) depending on your workload or use-case
    4.  Dedicated Master Instances - We recommend using master instances for high availability and heavy workloads in Production systems.
    5.  Storage Configuration - Pick a size per node based on your data. This size is per node, so if you have 3 servers at 10GB per node then the total storage for your cluster will be 30GB)
    6.  Encryption : if needed based on use-case
    7.  Snapshot configuration: AWS Elasticsearch service takes automatic snapshots of the domain once every day (now they do every hour as well as a new feature). Pick a time when the cluster is not going to have a lot of load. Something like midnight or early mornings. 

![alt_text](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/setup-deployments/manageawselasticsearch/Managing-AWS2.png#thumbnail "image_tooltip")

Once you click on submit all changes are applied without any downtime and you can monitor the progress by looking that the “Total Nodes” chart in “Cluster Health” tab.

</div>