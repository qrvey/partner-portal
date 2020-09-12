---
id: version-5.3-elasticsearch-management
title: Elasticsearch Management
sidebar_label: Elasticsearch Management
original_id: elasticsearch-management
---

<div style="text-align: justify">

##  Infrastructure Widget

Infrastructure is a new widget inside Qrvey’s Admin Center where Administrators are able to view, monitor and manage the configuration of their Elasticsearch Cluster. Keep in mind, that changing Elasticsearch Configuration can affect the data and most importantly, increase the cost of your license and AWS services. Please, read and carefully review the following articles, documents and tools before performing changes in this section: 


* <a href="https://aws.amazon.com/elasticsearch-service/"> <strong>Amazon Elasticsearch Service</strong></a> <br>
* <a href="https://aws.amazon.com/elasticsearch-service/pricing/"> <strong>Amazon Elasticsearch Service Pricing</strong></a> <br>
* <a href="https://calculator.aws/#/"> <strong>AWS Pricing Calculator</strong></a> <br>
* <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/what-is-amazon-elasticsearch-service.html"> <strong>Amazon Elasticsearch Service Developer Guide</strong></a> <br>
* <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/sizing-domains.html"> <strong>Sizing Amazon ES Domains</strong></a>

![1_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic1.png#thumbnail)



Administrators will be able to see and change the following Elasticsearch (ES) Cluster settings: 
* Elasticsearch Server Type (Instance Type)
* Number of Servers
* Storage Capacity for each ES Server

Additionally, Administrators can view and monitor the following calculations about the current storage: 
* Total Storage
* Used Storage
* Used Storage Percentage

Currently, Administrators can only perform manual adjustments to the ES configuration. In future releases of Admin Center, Administrators will be able to set Automatic Adjustments to ES configuration by setting a daily scheduled workflow that will check the amount of free storage, and if it turns out to be below an admin-defined threshold, a server of the same instance type and storage capacity will be added to avoid running out of storage inadvertently. 

## How to Manage ES Cluster

On the top of the widget, users can see the date and time of the “Latest Successful Update” of the ES Cluster after the completion of an Adjustment Process. In case that the last Adjustment Process fails, the “Latest Update” and its Failed Status will appear next to the “Latest Successful Update” date: 

![2_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic2.png#thumbnail)


## Elasticsearch Servers 

In this block, Administrators can view, list and change the Elasticsearch Server Type (AWS ES Instance Type). <br> See 
<a href="https://aws.amazon.com/elasticsearch-service/pricing/"> Amazon Elasticsearch Service Pricing</a> to review the list of Instances, their purpose, CPU, Memory, Storage Capacity, and pricing model. 


To change the instance type, click on the dropdown menu and select the available instance types. You can also search by keywords.

![3_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic3.png#thumbnail)


Keep in mind, that changing the dropdown selection doesn’t immediately affect ES Cluster Configuration. You have to apply the changes. Please, see section Apply / Discard Changes.


## Manual Adjustments
![4_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic4.png#thumbnail)


In this block, Administrators will be able to view and change the following ES Cluster Settings: 

* **# of Servers**: Whole number, minimum 1. It can be increased or decreased from its current value.
* **Storage (GB)**: Whole number, minimum 1. It can be increased or decreased from its current value. 

**Note**: Before changing the number of servers or storage capacity, please review this AWS documentation about sizing, instance types and limits of ES: 
* <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/sizing-domains.html"> Sizing Amazon ES Domains</a>
* <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/sizing-domains.html#aes-bp-instances">Choosing Instance Types and Testing</a>
* <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-limits.html">Amazon Elasticsearch Service Limits</a>

Additionally the following calculations are available to view and monitor them: 
* **Total Storage**: It shows the total amount of storage obtained by multiplying the *“# of Servers”* times *“Storage (GB)”* (of each server). Units: GB.
* **Used Storage**: This is the same used storage value as in the Health Dashboard section. Units: GB
* **Used Storage Percentage**: Value obtained as follows: *( Used Storage ) / ( Total Storage )* x 100%
  * Note: In order to keep consistency between storage and total storage values, they are both shown as whole numbers. The actual Total Storage may include decimal values, so the visualized calculation may not be accurate, but will represent the current percentage of storage. 
* **Used Storage bar and color**: A colored bar will represent the Used Storage percentage over a gray bar (100%). The color will be shown according to the Used Storage Percentage as follows: 
  * Green: Percentage less or equal to 70%
  * Orange: Percentage greater than 70% and less or equal to 80%
  * Red: Percentage greater than 80%

**Note**: these values, calculations and indicators won’t be updated until the adjustment process is performed. 

Keep in mind, that changing the Number of Servers or Storage doesn’t immediately affect ES Cluster Configuration. You have to apply the changes first. See Apply / Discard Changes.

## Apply / Discard Changes

Before changing ES settings, the “Discard Changes” and “Apply Changes” buttons are disabled. After changing any of the ES settings, both of them will be enabled. In order to effectively perform the Adjustment Process, follow these steps: 


1. If you’re sure about continuing with the process, go to step 3. If not, go to step 2. 


2. Click on the “Discard Changes” button. All modified settings will restore to their previously stored ones. Both buttons (“Discard Changes” and “Apply Changes”) will be disabled. If you exit the widget, all changes will be lost and no adjustment process will be performed. At this time you can exit the widget or you can modify ES settings again and proceed to the next step if you’re sure about it.   


3. Click on the “Apply Changes” button. A confirmation modal will appear. 

![5_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic5.png#thumbnail)

4. If you’re sure about continuing with the process, go to step 6. If not, continue to step 5.


5. Click on the “Cancel” button. The modal will close, but the modified settings will remain in the widget. Go to step 1. 

6. Click on the “OK” button, the widget will show a toast message about one of two possible situations: 

a. “Another Adjustment Process is already running, please check again later”. In this case, all changes will be discarded and no new processes will start. 

![6_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic6.png#thumbnail)
    
b. “Adjustment Process is about to start. Please check the results in the Health Dashboard or in Account Info. In this case, the Adjustment Process will start. 

![7_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic7.png#thumbnail)

**Notes**: After applying the changes, you can work in other sections of the Admin Center. If you decide to stay in the Infrastructure Widget, take into account that you will need to refresh the page (or go to another section or return to this widget) in order to see the changes in the settings, values, calculations and indicators. 

During the Adjustment Process, every time you enter the Infrastructure Widget the values, calculations and indicators will show the current ES cluster settings. These values can vary during the process. 

You can even see that the number of nodes (servers) in the cluster temporarily increases—often doubling—while the domain (cluster) update occurs. Review the following documents for more information: 
 * <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains-configuration-changes.html">Configuration Changes 
 * <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains-configuration-changes.html#es-managedomains-config-charges">Charges for Configuration Changes</a>



