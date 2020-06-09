---
id: version-4.1-faqs-intro
title: General
sidebar_label: General
original_id: faqs-intro
---

<div style="text-align: justify">

**Q: How do I know if my Elasticsearch cluster is short on space?**

A: There are 2 ways to monitor the Elasticsearch cluster.
1. Using Admin Center: 
    1. Login to Admin center using your AWS IAM credentials
    2. Click on DataRouter section
    3. Review the node usage in the Elasticsearch section at the bottom. It shows the total space vs used and then per node. 
2. AWS Elasticsearch console
    1. Login to your AWS account with a user that has permissions to access Elasticsearch domains.
    2. Select “Dashboard” tab from top left menu.
    3. You can review the free storage space in the table for your Elasticsearch cluster.
