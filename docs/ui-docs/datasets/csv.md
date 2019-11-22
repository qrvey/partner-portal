---
id: csv
title: CSV Uploads
sidebar_label: CSV Uploads
---

<div style="text-align: justify">

You can upload any existing data set into Qrvey so long as it can be exported into a comma-delimited, or CSV, file. In this article we’ll walk through the steps.

## Preparing your data
For the best results we recommend that you first take a moment to make sure your dataset is formatted correctly. Data should be organized into columns, with the first row containing the column headers. Now is probably also a good time to peruse your data to fix any mistakes and missing items, as well as remove any duplicate entries if they’re not desired.

Once you are convinced that your data is clean and tidy you can continue uploading it to Qrvey.

## Creating a dataset
To begin, enter your application and select **Data** from the menu on the left.

Next choose the **Add Dataset** button from the top left and select **Spreadsheet (CSV)** from the list of available options, then click **Create New**.

![1_csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/1_csv.png#thumbnail)

You will then be brought to the data upload screen where you can select any CSV file from your desktop or simply drag it onto the gray portion of the window. You can select whether or not your first row contains column header information. Currently, the maximum file size is 10MB per upload.

![2_csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/2_csv.png#thumbnail)

Once your data has been received, you can provide it with a name and description in the top box as seen below.

![3_csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/3_csv.png#thumbnail-40)

## Identifying Your Data
Next you’ll be asked to identify your data. Qrvey will automatically identify text, numeric and data columns, but you can further refine these selections to match specific field or format types. This step is not required to begin working with your data. Hopwever it is helpful if you’d like to visualize your data, as each question and field type has specific visualizations available.

![4_csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/4_csv.png#thumbnail)

## Supported Data Types

- **Date/Time:** Date and/or time formatted data.
- **Numeric - Currency:** Formats numeric data in currency format with two decimal places.
- **Numeric - Percentage:** Formats numeric data in percentage format.
- **Numeric - General:** Numeric data with no specified formatting.
- **Yes\_No:** Binary data (yes/no, true/false, 1/0).
- **Text:** Text fields requiring sentiment analysis
- **Text - Category:** Text that can be categorized into less than 15 discreet options (multiple choice).
- **Text - Label:** Text that does not require formatting or analysis, i.e. names, dates, etc.
- **Lookup:** Text that can be categorized into more than 15 discreet options.

You may choose to not import a column by unchecking the box next to the column number on the left. 

When you’re happy with your selections click **Continue** and processing your data will begin.  In most cases data processing will complete in a few seconds. If however you are uploading a large amount of information it may take a few minutes to complete.

The progress bar at the top of the screen will indicate the current progress of the processing of your data. You do _NOT_ need to remain on this page, as the processing will continue in the background until it has completed.

![5_csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/5_csv.png#thumbnail-80)

Once your data has been successfully processed it will appear on the **Datasets** page. The current number of records available is shown to the right of the dataset name and to the far right there is a three-dot menu, which has options to update or delete the dataset.

![6_csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/6_csv.png#thumbnail-40)

## Updating your CSV data
You may choose to update your data at any time by selecting the **Update Data** option from the three-dot menu. This action will load the dialog box below. Here you may overwrite or append to your existing data. First choose either **Append Data** or **Overwrite Data** using the corresoponding radio butto. Next drag and drop the file with the new data, or click the **Select File** button and select the file with the new data.

![7_csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/7_csv.png#thumbnail)

**Note**: Your updated file should include the same columns as your original file. You will be alerted to any missing columns whereas extra columns will be ignored.

## Deleting a CSV dataset
To delete an existing dataset select the **Delete** option from the three-dot menu. You will then need to confirm your action, as this reduces the risk of accidental deletion.

![8_csv](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/ui-docs/datasets/3.4.2.2_csv/8_csv.png#thumbnail-40)
