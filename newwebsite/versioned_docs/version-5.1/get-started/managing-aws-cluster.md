---
id: managing-aws-cluster
title: Cluster Management
sidebar_label: Cluster Management
---
This document explains how to monitor and resize an AWS Elasticsearch Service cluster based on your needs and requirements.

## Architecture

Inside the Qrvey platform, data is stored in Elasticsearch as documents in an index. Each index is equivalent to a Table or data set. There are 2 sets of indexes that store data.

1.  A global single index by the name of ‘\_qrveyanswers’ or ‘\_datapowerhouse’ is used to save all answers from webforms (Survey/Quiz/Forms and CSV files).
2.  One index per data set created in the Analytics UI for Relational databases like MySQL/SQL Server/Oracle etc or by using DataRouter (Elasticsearch Live).

By default, each index consists of 5 shards with 1 replica with data type mappings defined for each column.
AWS has recommendations about <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/sizing-domains.html">sizing an Elasticsearch cluster here</a>. We recommend having at least 2-3 nodes per cluster with enough storage based on your usage. Please keep in mind that data is stored as JSON documents and is replicated as per the configuration (1 replica by default). Qrvey currently uses Elasticsearch v5.5 with default values.

For a dev/staging environment (light use case) we recommend a 2 node cluster with ‘t2.medium’ server types and this configuration is good enough to handle 100 indexes with a total of 5-10M rows of standard data size.

For production environments, we recommend having the cluster with at least 2-3 nodes of m4 server type. Also, it is recommended to have Master instances in at least 2 Availability zones.

To save on cost, Elasticsearch instances can be reserved by paying in advance for 1-3 years. We highly recommend using the reserved pricing once you know the type and number of instances you would need for the long term.

## Monitoring

There are 2 ways of monitoring your Elasticsearch cluster.

1.  You can use Qrvey’s Admin app under DataRouter &gt; Health Dashboard. This dashboard shows you information about the number of records added and basic information about the Elasticsearch cluster index like space used, server type and overall health of the cluster.

![managing-aws-cluster](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/managing-aws-cluster/manageAWS1.png#thumbnail-60)

2.  AWS Elasticsearch service console: AWS console shows a lot of information about the cluster under “Cluster Health” and “Instance health” tabs. A few important metrics to monitor here are: <br />
    <ul style={{listStyle: "none", marginLeft: "20px"}}>
        <li>i. Cluster Status: This should be green.<br /></li>
        <li>ii. Total Nodes and Total Free space.<br /></li>
        <li>iii. Maximum CPU and Memory utilization - This should be around or below 50-80%.<br /></li>
        <li>iv. JVMPressure - This should stay below 80%.<br /></li>
        <li>v. Minimum free storage space - This is the minimum free storage space across all nodes, depending on the size it should have enough space (at least 20% free).</li>
    </ul>

![managing-aws-cluster](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/managing-aws-cluster/manageAWS2.png#thumbnail-60)

## Resizing a cluster

Changing the cluster in AWS Elasticsearch service requires zero downtime as it uses blue/green deployment. AWS will make the changes by adding new servers to the domain, then it will transfer all the data to the new servers and remove the old servers once the new servers are ready. To make any changes to the Elasticsearch cluster:

1.  Log into the console for your AWS Account.
2.  Select AWS Elasticsearch service from the list of services.
3.  Select the elasticsearch domain you would like to monitor or change.
4.  Click on the **Configure Cluster** button.
5.  From the “Configure domain” page you can change any settings by picking appropriate values. <br />
    <ul style={{listStyle: "none", marginLeft: "20px"}}>
    <li> i. <strong> Availability Zones</strong> - For dev/test scenarios, 1-AZ is enough; for production, it can be 2-AZ or 3-AZ. </li><br />
    <li> ii. <strong>Instance Type</strong> - Pick the server type that would best fit your use-case. We recommend t2.medium for dev/test workloads and m4 or i3 server type family for production or high workloads.</li><br />
    <li> iii. <strong>Number of Instances</strong> - We recommend at least 2 (preferably 3 or more) depending on your workload or use-case.</li><br />
    <li> iv. <strong>Dedicated Master Instances</strong> - We recommend using master instances for high availability and heavy workloads in Production systems.</li><br />
    <li> v. <strong>Storage Configuration</strong> - Pick a size per node based on your data. This size is per node, so if you have 3 servers at 10GB per node then the total storage for your cluster will be 30GB).</li><br />
    <li> vi. <strong>Encryption</strong> - if needed based on use-case</li><br />
    <li> vii. <strong>Snapshot configuration</strong> - AWS Elasticsearch service takes automatic snapshots of the domain once every day (now they do every hour as well as a new feature). Pick a time when the cluster is not going to have a lot of load. Something like midnight or early mornings.</li>
    </ul>

![managing-aws-cluster](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/managing-aws-cluster/manageAWS3.png#thumbnail-60)

Once you click on **Submit**, all changes are applied without any downtime and you can monitor the progress by looking at the “Total Nodes” chart in the “Cluster Health” tab.
