---
id: roles
title: User Roles
sidebar_label: User Roles
---

<div style={{textAlign: "justify"}}>

In this document we will review the four types of users that work and interact with the Qrvey platform and its embeddable components. Each of the user types primarily work with a particular aspect of the Qrvey platform. Admin users will primarily use the Admin Portal,  Creators use the Business Analytics Application (BAA) or widgets to create content for End Users while Developers work with Qrvey's  embeddable widgets and APIs.

## Administrators
Every Qrvey platform deployment will need one or more administrators (admins for short), who will monitor and manage the application infrastructure and user accounts. Admins have complete control over the BAA for Creators and can manage Creator accounts. Admins also monitor Data Router and manage its configuration, create Elasticsearch Indexes and Datasets for Creators and deploy Creator content and applications across servers or installations.

Admins manage the application Creators will be using. However they do not manage the content and the way content is made available to End Users. This is explained in the next section.

## Creators
Creators work in the Business Analytics Application, either for themselves or for others to utilize. Creator accounts are provided by Admins and these users may log into the BAA itself, or simply use creation widgets that have been embedded into other systems by Developers. Creators and Developers may be the same individuals, or they may be entirely different.

Creators can create different types of datasets on their own (Elasticsearch, Database Connections, Spreadsheet etc.) or use the indexes created by Admins. They can also get data into the system through the available Web Forms. Once they have data they can create charts, full reports, automated flows and applications or dashboards for End Users. In the Page Builder section creators can build interactive dashboard or applications and through the User Management option they can create groups of End Users and assign specific permissions and security on the content and pages created. This is not controlled by Admin users.

## End Users
This is the largest class of Qrvey user and includes anyone who will be viewing or interacting with the analytics or applications built by Creators.

End Users can be anonymous users who interact with public pages and forms, or they can be identified users who were added by Creators in the User Management section of the application. Identified users can log in to the application to access protected content.

## Developers
Developers primarily interact with the Qrvey Platform using the API or prebuilt widgets. Everything that can be done with the Qrvey Platform user interface can also be performed with the API. The Qrvey Platform easily integrates with all Javascript frameworks. Qrvey Platform widgets are a hybrid method of working with the Qrvey Platform, blending our easy-to-use UI with a little bit of coding to embed the widgets exactly where they are needed.

</div>