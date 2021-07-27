---
id: elasticsearch-management
title: Elasticsearch Management
sidebar_label: Elasticsearch Management
---
<div style={{textAlign: "justify"}}/>

## Infrastructure Widget

![1_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic1.png#thumbnail)

Infrastructure is a Widget inside Qrvey’s Admin Center where Administrators are able to view, monitor and manage the configuration of their Elasticsearch Cluster. Keep in mind, that changing Elasticsearch Configuration can affect the data and most importantly, increase the cost of your license and AWS services. Please, read and carefully review the following articles, documents and tools before performing any changes in this section: 

-   <a href="https://aws.amazon.com/elasticsearch-service/"> <strong>Amazon Elasticsearch Service</strong></a> <br />
-   <a href="https://aws.amazon.com/elasticsearch-service/pricing/"> <strong>Amazon Elasticsearch Service Pricing</strong></a> <br />
-   <a href="https://calculator.aws/#/"> <strong>AWS Pricing Calculator</strong></a> <br />
-   <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/what-is-amazon-elasticsearch-service.html"> <strong>Amazon Elasticsearch Service Developer Guide</strong></a> <br />
-   <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/sizing-domains.html"> <strong>Sizing Amazon ES Domains</strong></a>

## Overview

This widget contains the following sections or blocks: 

-   <a href="https://docs.google.com/document/d/1MvFfPAdyOFjziw0YhGch9XqRw-_juw0RzBUMNxwfsew/edit#heading=h.l69j3w4u03kl">Elasticsearch Servers</a>
-   <a href="https://docs.google.com/document/d/1MvFfPAdyOFjziw0YhGch9XqRw-_juw0RzBUMNxwfsew/edit#heading=h.cvr3lxikt15">Manual Adjustments</a>
-   <a href="https://docs.google.com/document/d/1MvFfPAdyOFjziw0YhGch9XqRw-_juw0RzBUMNxwfsew/edit#heading=h.xqcqgg8fir8d">Automatic Adjustments</a>
-   <a href="https://docs.google.com/document/d/1MvFfPAdyOFjziw0YhGch9XqRw-_juw0RzBUMNxwfsew/edit#heading=h.401e2o75zk9t">Email Notifications</a>

For Manual Adjustments Processes, Administrators will be able to see and change the following Elasticsearch (ES) Cluster settings: 

-   Elasticsearch Server Type (Instance Type)
-   Number of Servers
-   Storage Capacity for each ES Server

Additionally, Administrators can view and monitor the following about the current storage: 

-   Total Storage
-   Used Storage
-   Used Storage Percentage

For Automatic Adjustments Processes, Administrators will be able to set Automatic Adjustments to ES configuration by setting a daily scheduled cron-job that will check the amount of free storage. If it turns out to be below an admin-defined threshold, a server of the same instance type and storage capacity will be added to avoid running out of storage inadvertently. 

In the Email Notifications sections, Administrators can optionally enable them to receive email messages related to changes in the ES settings, manual/automatic processes events and warnings about low storage status. 

On the top of the widget, users can see the date and time of the “Latest Successful Update” of the ES Cluster after the completion of an Adjustment Process. In case the last Adjustment Process fails, the “Latest Update” and its Failed Status will appear next to the “Latest Successful Update” date: 

![2_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic2.png#thumbnail)

## Elasticsearch Servers

In this block, Administrators can view, list and change the Elasticsearch Server Type (AWS ES Instance Type). See Amazon Elasticsearch Service Pricing to review the list of Instances, their purpose, CPU, Memory, Storage Capacity, and pricing model. 

To change the instance type, click on the dropdown menu and select the available instance types. You can also search by keywords.

![3_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic3.png#thumbnail)

Keep in mind, that changing the dropdown selection doesn’t immediately affect ES Cluster Configuration. You have to apply the changes. Please, see section<a href="https://docs.google.com/document/d/1MvFfPAdyOFjziw0YhGch9XqRw-_juw0RzBUMNxwfsew/edit#heading=h.q95rq8a4cyai">Apply / Discard Changes</a>.

## Manual Adjustments

![4_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic4.png#thumbnail)

In this block, Administrators will be able to view and change the following ES Cluster Settings: 

-   The # of Servers: Whole number, minimum 1. It can be increased or decreased from its current value.
-   Storage (GB): Whole number, minimum 1. It can be increased or decreased from its current value. 

&gt; **Note**: Before changing the number of servers or storage capacity, please review this AWS documentation about sizing, instance types and limits of ES: 
&gt;
&gt; -   <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/sizing-domains.html">Sizing Amazon ES Domains</a>
&gt; -   <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/sizing-domains.html#aes-bp-instances">Choosing Instance Types and Testing</a>
&gt; -   <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-limits.html">Amazon Elasticsearch Service Limits</a>

Additionally, the following calculations are available to view and monitor them: 

-   **Total Storage**: It shows the total amount of storage obtained by multiplying the _“# of Servers”_ times _“Storage (GB)”_ (of each server). Units: GB.
-   **Used Storage**: This is the same used storage value as in the Health Dashboard section. Units: GB
-   **Used Storage Percentage**: Value obtained as follows: _( Used Storage ) / ( Total Storage )_ x 100%
    -   **Note**: In order to keep consistency between storage and total storage values, they are both shown as whole numbers. The actual Total Storage may include decimal values, so the visualized calculation may not be accurate, but will represent the current percentage of storage. 
-   **Used Storage bar and color**: A colored bar will represent the Used Storage percentage over a gray bar (100%). The color will be shown according to the Used Storage Percentage as follows: 
    -   Green: Percentage less or equal to 70%
    -   Orange: Percentage greater than 70% and less or equal to 80%
    -   Red: Percentage greater than 80%
        &gt; **Note**: These values, calculations and indicators won’t be updated until the adjustment process is performed. 

Keep in mind, that changing the Number of Servers or Storage doesn’t immediately affect ES Cluster Configuration. You have to apply the changes first. Please, see <a href="https://docs.google.com/document/d/1MvFfPAdyOFjziw0YhGch9XqRw-_juw0RzBUMNxwfsew/edit#heading=h.q95rq8a4cyai">Apply / Discard Changes</a>.

### Apply / Discard Changes

The “Apply Changes” and “Discard Changes” control both Manual and Automatic Adjustments sections.

Before changing ES settings, the “Discard Changes” and “Apply Changes” buttons are disabled. After changing any of the ES settings, both of them will be enabled. In order to effectively perform the Adjustment Process, follow these steps: 

1.  If you’re sure about continuing with the process, go to step 3. If not, go to step 2. 


2.  Click on the “Discard Changes” button. All modified settings will restore to their previously stored ones. Both buttons (“Discard Changes” and “Apply Changes”) will be disabled. If you exit the widget, all changes will be lost and no adjustment process will be performed. At this time you can exit the widget or you can modify ES settings again and proceed to the next step if you’re sure about it.   


3.  Click on the “Apply Changes” button. A confirmation modal will appear. 

![5_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic5.png#thumbnail)

4.  If you’re sure about continuing with the process, go to step 6. If not, continue to step 5.


5.  Click on the “Cancel” button. The modal will close, but the modified settings will remain in the widget. Go to step 1. 

6.  Click on the “OK” button, the widget will show a toast message about one of two possible situations:

    ```

    **a.** “Another Adjustment Process is already running, please check again later”. In this case, all changes will be discarded and no new processes will start. 

    ```

    ![6_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic6.png#thumbnail)

    ```

    **b.** “Adjustment Process is about to start. Please check the results in the Health Dashboard or in Account Info.” In this case, the Adjustment Process will start. 

    ```

    ![7_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic7.png#thumbnail)

## Automatic Adjustments

![8_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic8.png#thumbnail)

In this section, Administrators will be able to set up automatic adjustments to the ES Cluster in order not to run out of storage inadvertently. This section is disabled by default to avoid unwanted adjustments to the ES Cluster after the first deployment of the Admin Center App. 

In summary, by enabling this section, the system will check on a daily basis (at the configured time) the current free storage percentage. If this percentage is less or equal than a defined threshold, the system will add one server of the same instance type and storage capacity as the one(s) configured in the Manual Adjustments Section, thus increasing the storage capacity of the ES cluster. These actions will continue to be performed each time the conditions are met until a defined maximum of servers (nodes) have been added. 

This are the parameters that need to be configured for automatic adjustments:

-   **Perform automatic storage increments (checkbox)**: as it was mentioned before, this option is unchecked by default. Once it is checked, the automatic adjustments will be enabled. 
-   **Scheduling daily at (Time Picker)**: at the time defined by this control, the system will automatically check free storage percentage against the threshold and will decide to perform the adjustment based on the set rules. Note that this time is in GMT. It’s recommended that this time is fixed not at 12:00 AM (00:00 GMT) and a different time than automatic dataset syncing. 
-   **Free Storage Threshold**: the range of this selection is between 10% and 30%. If the free storage is less or equal than this parameter and the rules are met, a new server of the same instance type and storage capacity will be added. 
-   **Max. Number of servers allowed to be automatically added**: based on data and costs budget and Administrator can decide the total amount of servers that they allow to be automatically added. The minimum value for this parameter is one (1) and it doesn’t have a maximum.
    -   **Note 1**: Depending on the instance type, AWS has defined the limits for the quantity of instances and storage capacity for each one. Please review the following document: <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-limits.html">Amazon Elasticsearch Service Limits</a>.
    -   **Note 2**: the cronjob that is configured by the scheduling time, will always run at the defined time, even if the automatic adjustments are not enabled or max number of servers has been reached and will check the free storage threshold, but it will not perform any adjustment. By doing so, it can notify the administrator by email (if email notification for this event is enabled) in case the ES cluster is running out of storage but automatic adjustments are not enabled or are no longer allowed.
-   **The Number of servers automatically added**: this value will indicate the number of servers that have been automatically added, so the Administrators can check how many times the system has performed an automatic adjustment and figure how many are left to be automatically added, comparing this value with the previous parameter.

### Apply / Discard Changes

The “Apply Changes” and “Discard Changes” control both Manual and Automatic Adjustments sections.

Before changing Automatic Adjustments settings, the “Discard Changes” and “Apply Changes” buttons are disabled. After changing any of the settings (in the Manual or Automatic section), both of these buttons will be enabled. In order to effectively save and apply the settings, follow these steps: 

1.  If you’re sure about continuing with the process, go to step 3. If not, go to step 2. 


2.  Click on the “Discard Changes” button. All modified settings will restore to their previously stored ones. Both buttons (“Discard Changes” and “Apply Changes”) will be disabled. At this time you can exit the widget or you can modify automatic adjustments settings again and proceed to the next step if you’re sure about it.   


3.  Click on the “Apply Changes” button. A confirmation modal will appear.

![9_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic9.png#thumbnail)

-   **Note**: If you have modified both Manual and Automatic Adjustments settings, the confirmation modal will be the same as the one shown in Manual Section indicating, besides the cost considerations, that a Manual Adjustment process is about to start and that it will take some time.

4.  If you’re sure about continuing with the process, go to step 6. If not, continue to step 5.


5.  Click on the “Cancel” button. The modal will close, but the modified settings will remain in the widget. Go to step 1. 

6.  Click on the “OK” button, the widget will show a toast message about one of two possible situations:
    <br /> **a.** “Another Adjustment Process is already running, please check again later”. In this case, all changes will be discarded and no new processes will start. Even though applying automatic adjustments is a configuration saving process, if an Adjustment Process (manually or automatically initiated) is currently running, no changes are allowed to be applied in either section. <br />
    ![10_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic10.png#thumbnail) <br />
    **b.** “Changes applied successfully”. In this case, the settings will be saved. Keep in mind that in the case of Automatic Adjustments settings, this action will save the configuration, but in general, it will not affect ES Cluster settings immediately, but only at the scheduling time and if all the rules and conditions are met. 
    ![11_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic11.png#thumbnail)

## Notes

After applying the changes for the Manual, Automatic or both Adjustments sections, you can work in other sections of the Admin Center. If you decide to stay in the Infrastructure Widget, you can also modify again both manual and automatic adjustments. 

Keep in mind that changes in the Manual Adjustments section will imply, if no other adjustment process is in progress, the beginning of a new Adjustment Process; whereas, change in the Automatic Adjustments section will imply that these settings are saved the Automatic Adjustment Process will take place whenever the conditions and rules are met.    

During the Adjustment Process, every time you enter the Infrastructure Widget the values, calculations and indicators will show the current ES cluster settings. These values can vary during the process. You can even see that the number of nodes (servers) in the cluster temporarily increases—often doubling—while the domain (cluster) update occurs. Review the following documents for more information: 

-   <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains-configuration-changes.html">Configuration Changes</a>
-   <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains-configuration-changes.html#es-managedomains-config-charges">Charges for Configuration Changes</a>

## Email Notifications

![12_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic12.png#thumbnail)

In this section, Administrators can enable email notifications for events related to changes in ES Settings. To do so, administrators can choose among the listed events and activate the respective notification. Also, they need to provide a valid email address. The email address field is required if at least one of the notifications is enabled. These settings are automatically saved and are not ruled by “Apply Charges” nor “Discard Changes” buttons.

The following are the available email notifications: 

1.  A change in Manual Adjustments is performed. <br />
      a. If enabled, this email will be sent each time the ES Cluster settings are modified and changes have been applied. Note: This notification does not mean the Adjustment Process has already begun nor that the ES cluster has been successfully modified. <br />
      b. Email notification example:
    ![13_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic13.png#thumbnail)


2.  A change in Automatic Adjustments is performed. <br />
      a. If enabled, this email will be sent each time automatic changes are modified and applied. Note: This notification does not mean the Adjustment Process has already begun nor that the ES cluster has been successfully modified. <br />
      b. Email notification example:
    ![14_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic14.png#thumbnail)

3.  An adjustment process has started. <br />
       a. If enabled,  this email will be sent each time a manual or automatic adjustment process starts. Note: This notification does not mean the ES cluster has been successfully modified. <br />
       b. Email notification example (Manual Adjustment Process):
    ![15_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic15.png#thumbnail) <br />
       c. Email notification example (Automatic Adjustment Process):
    ![16_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic16.png#thumbnail)

4.  An adjustment process has finished indicating whether it was successful or not.
    a. If enabled, this email notification will be sent each time a manual or automatic adjustment process has been completed indicating if it was successful or failed.
    b. Email notification example (Manual / Successful): ![17_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic17.png#thumbnail)
    c. Email notification example (Automatic / Successful): ![18_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic18.png#thumbnail)
    d. Email notification example (Failed): ![19_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic19.png#thumbnail)


5.  The free storage threshold has been reached and automatic adjustments are not enabled or not allowed.
      a. If enabled, this email will be sent each time the cron-job is triggered by the daily schedule and the free storage threshold has been reached, but Automatic Adjustments are not enabled or the number of servers automatically added has reached the max number of servers allowed to be automatically added. This notification is sent to advise the user that the ES cluster is running out of storage but automatic adjustments are not enabled or are no longer allowed to be performed.
      b. Email notification example (not enabled): 
      ![20_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic20.png#thumbnail)
    <br />
      c. Email notification example (no longer allowed):
      ![21_elasticsearch_management](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Administering+Qrvey+Composer/elasticsearch_management/elastic21.png#thumbnail) 
