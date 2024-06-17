---
id: setting-up-data-and-parameters
title: Setting Up Data and Parameters
sidebar_label: Setting Up Data and Parameters
tags: [Data Analyst]
sidebar_position: 3
displayed_sidebar: getting-started
---
<div style={{textAlign: "justify"}}>

> Pixel-perfect Reports is a new feature currently in *beta* introduced with version 8.1 of the Qrvey platform. Your feedback and ideas are greatly appreciated, as they can help us improve this feature in future releases.

The Data & Parameters panel enables you to set up the datasets used in your report.  You can only select one dataset per report. You must create parameters before you can add them to a report. 

Parameters enable you to filter data and display information in the report. They are user-defined variables that are only available inside the report.

## To select your dataset

1. Before you can create a parameter, you must select the dataset. On the right-side menu, click to display the **Data & Parameters** panel. 

![Pixel-perfect-reports-Data-tab-New-81](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-Data-tab-New-81.png#thumbnail-60)

2. Click **Select Dataset**. The Select Dataset dialog displays. The functionality to create a connection is the same as the Connections feature in Qrvey Composer. For more information, see [Connections Overview](../05-Working%20with%20Data/Connections/overview-of-connections.md). 

  Once you’ve established the connection, the dataset columns display in the panel as Categories and Values. They are now available for use in the report. 

![Pixel-perfect-reports-Data-tab-Supermarket-81](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-Data-tab-Supermarket-81.png#thumbnail-60)

## To create a parameter

1. Display the **Parameters** tab of the Data & Parameters panel. 

![Pixel-perfect-reports-Parameters-tab-new-81](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-Parameters-tab-new-81.png#thumbnail-60)

2. Click **Add Parameter**. The New Parameter dialog displays. 

![Pixel-perfect-reports-New-Parameter-81](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-New-Parameter-81.png#thumbnail-60)

3. Complete the fields provided and click **Save**. For information on the properties, see the next section, *To edit a parameter*. 

## To edit a parameter

1. Display the New Parameter or Edit Parameter dialog for the parameter. 

![Pixel-perfect-reports-Edit-Parameter-81](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/qrvey-composer/Pixel-perfect-Reports/Pixel-perfect-Reports-Edit-Parameter-81.png#thumbnail-60)

2. Enter the **Parameter Name** in the field provided. It must be unique, and it cannot use special characters.  

3. Enter helpful text in the **Parameter Label** field. This text displays in the parameter’s preview panel. 

4. In the **Data Type** dropdown, select **Numeric**, **Text**, or **Date Time**. 

5. Select whether the parameter is **Visible** or **Hidden**. If set to Visible, you will be prompted to provide a value when using the Preview feature. If set to Hidden, you will either need to define a default value or select **Allow Null Value**. 

6. To enable the parameter to accept an empty/null value, select **Allow Null Value**. 

7. To enable the parameter to accept an empty string as a value, select **Allow Blank Value**. This option is only available for Text parameters.  

8. To define a default value, select **Specify Default Value**. Enter the desired value in the Default Value field. 

9. Click **Save**. 

**See also**:
- [Designing Reports](designing-reports.md)
- [Working with Tables](tables.md)
- [Working with Formulas](formulas.md)

</div>