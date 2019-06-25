## Data Router Console: 


### Data Management (Health Dashboard)

Provides a dashboard view of the data services running inside your Qrvey instance. The main health view shows a chart of all data records added on an adjustable timeline. The dashboard also includes a health check and overview of your Qrvey backend Elasticsearch and Data Router services.


### Metadata Editor 

This is the place where Admins can create and manage everything related to Metadatas. From data mapping to complex transformations. In this section Admins will be able to list and select all created Metadatas and delete what is not needed.

When creating a Metadata, Admins can start defining the column mapping. They can indicate column names, column types as well as "identifier columns" from the data. Metadata Builder will let Admins to load a data sample so the Metadata Creator can create the column mapping automatically.

After defining the columns, Admins can create simple and complex transformations all from a UI. They might create new columns depending on the selected transformation or simply modify current columns.

Admins can test the Metadata they are defining by sending some data and validating consistency and the result of transformations.


### AWS Infrastructure

Manage your entire cloud deployment to ensure maximum performance with minimal costs. Data Loading Infrastructure in DataRouter can be scaled up or down based on an estimated size and frequency of incoming data. These changes do not have any downtime but some changes like Elasticsearch may take anywhere from a few minutes to a few hours based on the size of cluster. There are 3 layers that can be configured individually as shown in the image below.


1. When a file is loaded into DataRouter’s S3 bucket, a **Lambda function** is triggered for each file. The first option “Lambda function Concurrency” sets the max number of parallel Lambda functions instances that would get triggered at any point of time. This setting is applied instantly and would not increase the total cost and it would affect the throughput of data loading.
2. Lambda function would then call the API running on **Postdata Servers**. This API would validate the data and run any transformations defined in Metadata definition. Postdata servers are running behind a Load Balancer so they can be autoscaled based on the traffic. Your AWS cost would be affected by these settings. It would take a few minutes for changes to be applied. Following settings can be configured for these servers
    1. **Server type**: Pick any server type that is available under AWS EC2. Changing the server type to a bigger instance would help with loading a large amount of data in a single file or if you have a lot of transformations in Metadata definition.
    2. **Min and Max**: Set the limit for number of servers that will be used to process the data. Load balancer would automatically scale the number of servers based on traffic and number of requests.
3. **Elasticsearch** is used to store all transformed data that is ready for Analytics. You can change the server type (pick any from supported AWS Elasticsearch instance types) or the number of servers. Your AWS cost would be affected by any changes here. It may take anywhere from a few minutes to a few hours (based on size of cluster) for changes to be applied.


### Data Load

Manage data loads into the DataRouter API directly from the admin console. This section will show a list of all files that failed to load into Elasticsearch. Most common reasons for a file to fail are invalid file type (currently JSON and gzip are supported), invalid data (syntax or content), or errors during transformations. Any file in the list can be retried by clicking on the “Retry” link next to filename. 


### Configuration

This section allows an Administrator to enable or disable any Metadata transformations in DataRouter. If a transformation is marked as disabled it would not be available in DataRouter and using it in any Metadata definition would throw an error.