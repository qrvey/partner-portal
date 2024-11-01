---
id: download-manager
title: Download Manager
sidebar_label: Download Manager
tags: [Data Analyst, Solution Architect]
sidebar_position: 3
displayed_sidebar: getting-started
---

> This feature is disabled by default and must be enabled by your team admin. For details, see [Customize Qrvey Composer](../admin/customizing-qrvey-composer.md).

The Download Manager provides a central location to access and manage both exported files and scheduled exports. Exported files are created using the Download option available in a variety of features in Qrvey Composer, including Analyze, Dashboards, Automation, Subscriptions, and Pixel-perfect Reports. Types of exported files include images (JPG, PDF), data (CSV, Excel, PDF), and reports (PDF). The exported files are stored in AWS, and they are automatically deleted after seven days. For more information, see [Exporting Data](./05-Working%20with%20Data/Datasets/03-Analyze/exporting.md).


<iframe src="//fast.wistia.net/embed/iframe/l499yr4pht?videoFoam=true"
allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_embed"
name="wistia_embed" allowFullScreen  width="100%" height="600"></iframe>
<script src="//fast.wistia.net/assets/external/iframe-api-v1.js"></script>

Download Manager displays a list of all exported files and scheduled exports available to the current user, along with information about each file including file type, file name, size, creation date, and expiration date. To view additional details about an export, click its three-dot menu, and click **More Info**.

You can perform the following tasks in Download Manager:
* To download a file, click its **Download** link. The file will download to your computer. 
* To delete a file, click its **X** icon. 
* To sort the list, click a column header, and then click its UP or DOWN arrow.
* To filter the list, click the **Filter by** box and select a filter option.  
* To search for a file, enter a search string in the **Search** box. 
* To refresh the list of files, click on the **Refresh** button.
* To schedule an export at a specified time, or to manage an existing scheduled export, see [Scheduling Exports](./05-Working with Data/Datasets/03-Analyze/scheduling-exports.md).

Download Manager is an embeddable widget. Click the **Embedding Options** button to obtain the helper code. Note that the Download Manager widget must be embedded separately from other widgets. It is not accessible directly from other widgets. For more information on embedding widgets, see [Embedding Overview](../software-developer/04-Widgets/introduction-to-widgets.md).