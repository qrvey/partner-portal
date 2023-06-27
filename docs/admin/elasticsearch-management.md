---
id: admin-elasticsearch-management
title: Elasticsearch Management
sidebar_label: Elasticsearch Management
tags: [Solution Architect, CloudOps Engineer]
sidebar_position: 7
---

<div style={{textAlign: "justify"}}>
The Infrastructure page of the Qrvey Admin Center enables you to view, monitor, and manage the configuration of your Elasticsearch cluster. 

To open the Infrastructure page in Qrvey Admin Center, click the **Infrastructure** icon in the left-hand navigation panel.   
![Infrastructure Icon](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/icon-admin-infrastructure.png)
 
## Before You Begin
Changing your Elasticsearch configuration can affect both the data and the cost of your AWS services. Please review the following AWS documents before making any changes: 

* <a href="https://aws.amazon.com/elasticsearch-service/" target="_blank"> <strong>Amazon Elasticsearch Service</strong></a> <br />
* <a href="https://aws.amazon.com/elasticsearch-service/pricing/" target="_blank"> <strong>Amazon Elasticsearch Service Pricing</strong></a> <br />
* <a href="https://calculator.aws/#/" target="_blank"> <strong>AWS Pricing Calculator</strong></a> <br />
* <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/what-is-amazon-elasticsearch-service.html" target="_blank"> <strong>Amazon Elasticsearch Service Developer Guide</strong></a> <br />
* <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/sizing-domains.html" target="_blank"> <strong>Sizing Amazon ES Domains</strong></a>

## Overview of the Infrastructure Page

The Infrastructure page contains the following sections:
* **Infrastructure**. Displays the server name, status, and AWS Elasticsearch server instance type. It also provides the option to change the Elasticsearch server instance type.
* **Manual Adjustments**. Enables you to view and modify the number of Elasticsearch servers as well as the storage capacity.
* **Automatic Adjustments**. Enables you to schedule a daily process that checks the amount of free storage and, if the storage is below a defined threshold, adds a server of the same instance type and storage capacity. 
* **Email Notifications**. Provides options to enable email notifications for events related to changes in Elasticsearch settings.


## Infrastructure

The Infrastructure section displays the server name, status, and AWS Elasticsearch server instance type. It also provides the option to change the Elasticsearch server instance type. 

To change the Elasticsearch Server instance type
1. Verify that you understand how the change will affect your cost of AWS services. For more information, see <a href="https://aws.amazon.com/elasticsearch-service/pricing/" target="_blank">Amazon Elasticsearch Service Pricing</a>.
2. Click the **Elasticsearch Servers** dropdown menu and select the available instance types. You can also search by keywords.
3. Click **Apply Changes**. 




## Manual Adjustments

The Manual Adjustments section enables you to view and modify the number of Elasticsearch servers as well as the storage capacity.

### Before you begin
Before changing the number of servers or storage capacity, please review the following AWS documentation about Elasticsearch sizing, instance types, and limits: 
* <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/sizing-domains.html" target="_blank">Sizing Amazon ES Domains</a>
* <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/sizing-domains.html#bp-instances" target="_blank">Choosing Instance Types and Testing</a>
* <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-limits.html" target="_blank">Amazon Elasticsearch Service Limits</a>

### To change the number of servers
1. Verify that you understand how the change will affect your Elasticsearch configuration. Review the documentation in the “Before you begin” section above. 
2. Click in the **# of Servers** field and enter a new number. 
3. Click **Apply Changes**. The manual adjustment process runs and applies the adjustments. 

### To change storage capacity
1. Verify that you understand how the change will affect your Elasticsearch configuration. Review the documentation in the “Before you begin” section above.
2. Review the current storage capacity:
    * **Total Storage**: The total amount of storage of all the servers combined. 
    * **Used Storage**: The same used storage value as in the Health Dashboard section. 
3. Click in the **Storage (GB)** field and enter a new number. 
4. Click **Apply Changes**. The settings will be applied to the server when the adjustment process is performed. 

## Automatic Adjustments

The Automatic Adjustments section helps you avoid running out of storage capacity inadvertently. The feature enables you to schedule a daily process that checks the amount of free storage and, if the storage is below a defined threshold, adds a server of the same instance type and storage capacity. 

>**Note**: This feature is disabled by default to avoid unwanted adjustments to the Elasticsearch cluster after the initial deployment of the Qrvey platform. 

If Automatic Adjustment are not enabled, the process runs anyway at the scheduled time and checks the available free storage. If the available free storage is below the specified threshold, the process will not perform any adjustments, but it can send an email notification if the following email option is selected: **Free storage threshold has been reached and automatic adjustments are not enabled or not allowed**. 

To determine whether any servers have been automatically added, note the value under **Number of servers automatically added**. Compare this value with value under **Max. number of servers allowed to be automatically added** to determine how many more servers are available.

When a manual or automatic adjustment process is running, the values, calculations, and indicators displayed in the Infrastructure page may change. In some cases, the number of nodes (servers) in the Elasticsearch cluster temporarily increases—often doubling—while the update occurs. For more information, see the following documents: 
* <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains-configuration-changes.html" target="_blank">Configuration Changes</a>
* <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains-configuration-changes.html#es-managedomains-config-charges" target="_blank">Charges for Configuration Changes</a>


### To automatically adjust storage capacity
1. Select **Perform automatic storage increments**. 
2. Under **Scheduling Daily at**, select the time that you want the system to check the amount of available storage. Note that this time is in GMT. Be sure to select a different time than set for snapshots and other scheduled processes such as Dataset Data Syncing. 
3. Specify the threshold that determines when to add capacity. In the field provided, enter the desired percentage (%) of free space remaining. This value can be between 10% and 30%. When the free storage is less than or equal to this percentage, the process adds capacity. 
4. Specify the **Max. number of servers allowed to be automatically added** in the field provided. Depending on the instance type, AWS has defined the limits for the quantity of instances and storage capacity for each one. For more information, see <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-limits.html" target="_blank">Amazon Elasticsearch Service Limits</a>.
5. Select your preferred email notifications. See the following section, “Email Notifications”. 
6. Click **Apply Changes**. 



## Email Notifications

In the Email Notifications sections, you can enable email notifications for events related to changes in Elasticsearch settings. 

Select any of the following options to send an email when: 

* **A change in Manual Adjustments is performed**. Send an email each time the Elasticsearch cluster settings are modified and changes have been applied. This notification does not indicate that the adjustment process has already begun or that the Elasticsearch cluster has been successfully modified.
* **A change in Automatic Adjustments is performed**. Send an email each time automatic changes are modified and applied. This notification does not indicate that the adjustment process has already begun or that the Elasticsearch cluster has been successfully modified.
* **An adjustment process has started**. Send an email each time a manual or automatic adjustment process starts. This notification does not indicate that the Elasticsearch cluster has been successfully modified.
* **An adjustment process has finished indicating whether it was successful or not**. Send an email each time a manual or automatic adjustment process has been completed, including whether is succeeded or failed. 
* **Free storage threshold has been reached and automatic adjustments are not enabled or not allowed**. Send an email each time the Automatic Adjustments process determines that the free storage threshold has been reached, but Automatic Adjustments are not enabled or the number of servers allowed has reached the maximum number specified.
   
</div>
