## User Roles

In this document we will review the types of users that work and interact with Qrvey. There are 4 different types of users with access to the Qrvey system and embeddable components. Each of the users work on a separate application. Admin users work through the Admin Portal,  Creators use the Business Analytics Application where they can create the Viewers interface and Developers work with the embeddable widgets and APIs.


### Admins 

Every Qrvey deployment will need one or more administrators, someone tasked with monitoring and managing the application infrastructure and user accounts. Admins have complete control over the Business Analytic application for Creators and can manage Creator accounts. Admins also monitor Data Router and manage its configuration, create Elasticsearch Indexes Datasets for Creators and deploy Creator content and applications across servers or installations. 

Admins manage the application Creators will be using. However they do not manage the content and the way content it is shared to Viewers or End Users. This is explained in the next section.


### Creators

Creators will work on the Analytics application either for themselves or for others to consume. Creator accounts are provided by Admins and these users may log into the Analytics application itself, or simply use creation widgets that have been embedded into other systems by developers. Creators and developers may be the same individuals, or they may be entirely different.

Creators can create different types of datasets on their own (Elasticsearch, Database Connections, Spreadsheet etc.) or use the indexes created by Admins. They can also get data into the system through the available Web Forms. Once they have data they can create charts, full reports, automated flows and applications or dashboards for Viewers. In the Page Builder section creators can build interactive dashboard or applications and through the User Management option they can create groups of Viewers and assign specific permissions and security on the content and pages created. This is not controlled by Admin users.


### Viewers (End Users)

This is the largest class of Qrvey user and includes anyone who will be viewing or interacting with the analytics or applications built by Creators.

Viewers are the users added in the User Table in User Management or can simply be the people who may just passively receive alerts and notifications or they may be highly engaged and interact with Qrvey applications or dashboards on a regular basis. 


### Developers

Developers primarily interact with Qrvey using our API or pre-built widgets. Everything you can do with the Qrvey application itself through our UI can also be done behind the scenes with our API. Qrvey easily integrates with all Javascript frameworks. Qrvey’s widgets are a hybrid method of working with Qrvey, blending our easy-to-use UI with a little bit of coding to embed the widgets exactly where you want them to live.