---
id: postgres-connections
title: Configure AWS & Qrvey for Postgres Connections Utilizing the Export to S3 Method
sidebar_label: Configure AWS & Qrvey for Postgres
tags: [CloudOps Engineer]
sidebar_position: 6
displayed_sidebar: getting-started
---


For very large or long-running queries in Postgres, processing may take several minutes to start. To expedite this process, you can enable the "Export Data to S3 to Support Larger Data Loads" option. When selected, the query output is sent to S3, from where Qrvey retrieves the data. This option is available when the Host URL points to an AWS RDS Postgres instance located in the same AWS region as Qrvey.

Please note that this method requires additional configuration to enable Postgres to write to a Qrvey S3 bucket.

> **Note:** For additional information, you may also refer to the official AWS documentation on [Importing Amazon S3 data into an RDS for PostgreSQL DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PostgreSQL.S3Import.html).

## Steps

Many of the steps below are necessary only when the Postgres RDS and Qrvey deployment are on different AWS accounts.

1. Configure Postgres for the export to S3 extension.  
   a. Using the Postgres query tool, send the following psql command:

      ```sql
      CREATE EXTENSION aws_s3 CASCADE;
      ```

   b. Grant access to queries used for monitoring and canceling other queries, replacing `myUser` with the Postgres Username which will be used for Qrvey Postgres Connections.

      ```sql
      GRANT SELECT ON pg_stat_activity TO myUser;
      GRANT SELECT ON pg_terminate_backend TO myUser;
      ```

   c. Grant access to `myUser` to use the `aws_s3` schema and `query_export_to_s3` functions.

      ```sql
      GRANT USAGE ON SCHEMA aws_s3 TO "myUser";

      GRANT EXECUTE ON FUNCTION aws_s3.query_export_to_s3(query text, s3_info aws_commons._s3_uri_1, options text, OUT rows_uploaded bigint, OUT files_uploaded bigint, OUT bytes_uploaded bigint) TO "myUser";

      GRANT EXECUTE ON FUNCTION aws_s3.query_export_to_s3(query text, bucket text, file_path text, region text, options text, OUT rows_uploaded bigint, OUT files_uploaded bigint, OUT bytes_uploaded bigint) TO "myUser";
      ```

2. Create a new Policy.  
    a. Open the AWS console.  
    b. Switch to the Postgres RDS’s AWS account.  
    c. Open AWS Identity and Access Management (IAM).  
    d. Click **Policies**.  
    e. Click **Create policy**.  
    f. Select the **JSON** tab.  
    g. Paste the policy below, replacing `QRVEY_DEPLOYMENT` with the Qrvey deployment name.

    ```json
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Sid": "VisualEditor0",
                    "Effect": "Allow",
                    "Action": [
                        "s3:PutObject",
                        "s3:GetObject",
                        "s3:AbortMultipartUpload",
                        "s3:ListBucket",
                        "s3:PutObjectAcl"
                    ],
                    "Resource": [
                        "arn:aws:s3:::QRVEY_DEPLOYMENT-dataload-drdatacommons/*",
                        "arn:aws:s3:::QRVEY_DEPLOYMENT-dataload-drdatacommons"
                    ]
                }
            ]
        }
    ```

    h. Click **Next: Tags**.  
    i. Click **Next: Review**.  
    j. Name the new Policy. For example: `PostgresDataAccessPolicy`.

3. Create a new Role.  
   a. Continue in the Postgres AWS account, IAM.  
   b. Click **Roles**.  
   c. Click **Create Role**.  
   d. Select **AWS account**.  
   e. Use the filter to find the policy created above.  
   f. Check its box.  
   g. Click **Next**.  
   h. Enter the Role name. For example: `PostgresDataAccessRole`.  
   i. Click **Create Role**.  
   j. Note this Role’s ARN string for later use.

4. Add a trust relationship.  
   a. Click **Roles**.  
   b. Locate the newly created Role.  
   c. Click the **Trust Relationships** tab.  
   d. Click **Edit trust relationship**.  
   e. Click the **Trust relationships** tab, and then click **Edit trust relationship**.  
   f. Paste the trust relationship shown below, replacing `AWS_ACCOUNT_QRVEY` with the AWS account number for the Qrvey deployment.

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Principal": {
           "AWS": "arn:aws:iam::AWS_ACCOUNT_QRVEY:root"
         },
         "Action": "sts:AssumeRole"
       }
     ]
   }
   ```
   
   g. Click Update Trust Policy.


5. Set inline policies for the Qrvey lambdas.  
    a. Use the Qrvey AWS account.  
    b. Open AWS Identity and Access Management (IAM).  
    c. Click **Roles**.  
    d. Search for the DB lambda role. It contains this string: `DBDatasourcePumpFunction`. There is one Role for each Qrvey deployment. Select the role applying to the current Qrvey deployment.  
    e. Click **Add inline policy**.  
    f. Click the **JSON** tab.  
    g. Paste the policy, replacing `AWS_ACCOUNT_POSTGRES` with the AWS account number for the Postgres cluster.  
   
    ```json
    {
        "Version": "2012-10-17",
        "Statement": {
            "Effect": "Allow",
            "Action": "sts:AssumeRole",
            "Resource": [
                "arn:aws:iam::AWS_ACCOUNT_POSTGRES:role/PostgresDataAccessRole"
            ]
        }
    }
    ```

    h. Click Review policy.  
    i. Name the policy. For example: `PostgresDataAccessAssumeRole`.  
    j. Click **Create Policy**. See that the new policy has been added.  
    k. Repeat these steps for the lambda role `DatasourcePumpFunction`.  
    l. Repeat these steps for the lambda role `FilesourcePrimerFunction`.

6. Set policy for commons bucket.  
    a. Use the Qrvey AWS account.  
    b. Open the AWS S3 service and open the bucket called `QRVEY_DEPLOYMENT-dataload-drdatacommons`.  
    c. Click the **Permissions** tab, scroll down to the **Bucket policy** section, and add the following policy. Replace `POSTGRES_DATA_ACCESS_ROLE_ARN` with the access role ARN created in step #3 and replace `QRVEY_DEPLOYMENT` with the Qrvey deployment name.

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "Statement1",
                "Effect": "Allow",
                "Principal": {
                    "AWS": "POSTGRES_DATA_ACCESS_ROLE_ARN"
                },
                "Action": [
                    "s3:PutObject",
                    "s3:GetBucketLocation"
                ],
                "Resource": [
                    "arn:aws:s3:::QRVEY_DEPLOYMENT-dataload-drdatacommons/*",
                    "arn:aws:s3:::QRVEY_DEPLOYMENT-dataload-drdatacommons"
                ]
            }
        ]
    }
    ```

7. Associate the Postgres cluster with the new Role.  
    a. Go to AWS RDS.  
    b. Click the desired Postgres cluster.  
    c. Click the **Connectivity and security** tab.  
    d. Go to the **Manage IAM roles** section.  
    e. Select the role in the **Add IAM roles to this instance** combo box.  
    f. Select **s3Export** in the feature combo box.  
    g. Click **Add Role**.  

8. Configure a Qrvey Connection.  
    a. Open the Qrvey Composer application.  
    b. Click **Data**.  
    c. Click **Connections**.  
    d. Create a new Connection for Postgres.  
    e. Enter the Host URL, Username, and Password.  
    f. Enter the Role ARN created above. (Different accounts only.)  
    g. Test the new Connection.  
    h. Create a Dataset using the Connection.  
    i. Load the Dataset data from Postgres.

