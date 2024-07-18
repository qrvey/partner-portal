---
id: redshift-connections
title: Configuring AWS and Qrvey for Redshift Connections
sidebar_label: Configuring AWS and Qrvey for Redshift Connections
tags: [CloudOps Engineer]
sidebar_position: 4
displayed_sidebar: getting-started
---

<div>

The steps below detail how to configure Qrvey to access Redshift clusters for the purpose of loading data into Qrvey for data analysis.

The changes allow Qrvey to access the cluster and also enable the cluster to export data to S3 for access by Qrvey.

## Steps
1. Create a new Secret that points to the Redshift cluster.
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> a. Open the AWS console.</li>
<li> b. Use the Redshift AWS account.</li>
<li> c. Open AWS Secrets Manager.</li>
<li> d. Create a new Secret.</li>
<li> e. Select Credentials for a Redshift cluster.</li>
<li> f. Specify the User name and Password for the Redshift cluster.</li>
<li> g. Select the DB Cluster.</li>
<li> h. Click <b>Next</b>.</li>
<li> i. Enter a Secret name.  For example: RedshiftClusterSecret.</li>
<li> j. Click <b>Next</b>.</li>
<li> k. Optionally configure automatic rotation, if desired.</li>
<li> l. Click <b>Next</b>.</li>
<li> m. Click <b>Store</b>.</li>
<li> n. Note this Secret’s ARN string for later use.</li>
</ul> 

<p>Alternatively, if using Redshift in serverless mode, then:</p>
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> a. Open the AWS console.</li>
<li> b. Use the Redshift AWS account.</li>
<li> c. Open AWS Secrets Manager.</li>
<li> d. Create a new Secret.</li>
<li> e. Select <b>Other type of secret</b>.</li>
<li> f. Specify Key/value pairs.  This is more easily done using the Plaintext feature.  Here is an example:</li>
</ul> 

```json
{
"username":"MY_USERNAME",
"password":"MY_PASSWORD",
"engine":"redshift",
"host":"default.MY_ACCOUNT.us-east-1.redshift-serverless.amazonaws.com",
"port":5439,
"workgroupName":"default"
}
```

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li> g. Click <b>Next</b>.</li>
<li> h. Click <b>Store</b>.</li>
<li> i. Note this Secret’s ARN string for later use.</li>
</ul> 

2. Set permissions for the Qrvey Database lambda.
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Use the Qrvey AWS account.</li>
<li>b. Open AWS Identity and Access Management (IAM).</li>
<li>c. Click <b>Roles</b>.</li>
<li>d. Search for the DB lambda role. It contains the strings <code>DBDatasourcePumpFunction</code>, <code>elastic-view-function-role</code>, and <code>&lt;prefix&gt;TaskExecutionRole</code>. There is one <b>Role</b> for each Qrvey deployment. Select the role applying to the current Qrvey deployment. Note down the ARN to be used later as <code>ROLE_DB_DATASOURCE_PUMP_FUNCTION</code>, <code>ELASTIC_VIEW_FUNCTION_ROLE</code>, and <code>ECS_TASK_EXECUTION_ROLE</code></li>
<li>e. Click <b>Add inline policy</b>.</li>
<li>f. Click the <b>JSON</b> tab.</li>
<li>g. Paste the policy, replacing AWS_ACCOUNT_REDSHIFT with the AWS account number for the Redshift cluster.</li>
</ul>

```json
{
    "Version": "2012-10-17",
    "Statement": {
        "Effect": "Allow",
        "Action": "sts:AssumeRole",
        "Resource": [
            "arn:aws:iam::AWS_ACCOUNT_REDSHIFT:role/RedshiftDataAccessRole"
        ]
    }
}
```

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>h. Click <b>Review policy</b>.</li>
<li>i. Name the policy.  Example: RedshiftDataAccessAssumeRole</li>
<li>j. Click <b>Create Policy</b>.  See that the new policy has been added.</li>
</ul>

3. Add a trust relationship for Qrvey role DbDatasourceExportToS3Role.  (During data loads, Qrvey will temporarily move the data to S3.) 
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Continue in the Qrvey AWS account, IAM.</li>
<li>b. Search for the export role.  It contains this string: <code>DbDatasourceExportToS3Role</code>.</li>
<li>c. Note the ARN of role <code>DbDatasourceExportToS3Role</code>, to be used later.</li>
<li>d. Click the <b>Trust relationships</b> tab.</li>
<li>e. Click <b>Edit trust relationship</b>.</li>
<li>f. Paste the trust relationship below, replacing the appropriate ARN.</li>
</ul>

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": [
          "arn:aws:iam::AWS_ACCOUNT_REDSHIFT:role/RedshiftDataAccessRole"
        ]
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>g. Save the trust relationship.</li>
</ul>

4. Create a new Policy.
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Switch the Redshift AWS account.</li>
<li>b. Open AWS Identity and Access Management (IAM)</li>
<li>c. Click <b>Policies</b>.</li>
<li>d. Click <b>Create policy</b>.</li>
<li>e. Select the <b>JSON</b> tab.</li>
<li>f. Paste the policy below below, replacing the appropriate ARNs.</li>
</ul>

<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li>i. Set the Secret ARN generated above, replacing SECRET_ARN.</li>
<li>ii. Set the Role ARN for the <code>DbDatasourceExportToS3Role</code>, noted above, replacing <code>EXPORT_TO_S3_ARN</code>.</li>
</ul>

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "redshift-data:CancelStatement",
                "redshift-data:DescribeStatement",
                "redshift-data:ExecuteStatement"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "secretsmanager:GetSecretValue"
            ],
            "Resource": [
                "SECRET_ARN"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "sts:AssumeRole"
            ],
            "Resource": [
                "EXPORT_TO_S3_ARN"
            ]
        }
    ]
}
```

<ul style={{listStyle: 'none', marginLeft: '30px'}}>
<li>g. Click <b>Next: Tags</b>.</li>
<li>h. Click <b>Next: Review</b>.</li>
<li>i. Name the new Policy.  For example: “RedshiftDataAccessPolicy”.</li>
</ul>

5. Create a new Role
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Continue in the Redshift AWS account, IAM.</li>
<li>b. Click <b>Roles</b>.</li>
<li>c. Click <b>Create Role</b>.</li>
<li>d. Select service <b>Redshift</b>.</li>
<li>e. Select <b>Redshift - Customizable</b>.</li>
<li>f. Click <b>Next: Permissions</b>.</li>
<li>g. Use the filter to find the RedshiftDataAccessPolicy created above.</li>
<li>h. Check its box.</li>
<li>i. Click <b>Next: Tags</b>.</li>
<li>j. Click <b>Next: Review</b>.</li>
<li>k. Enter the Role name.  For example: <i>RedshiftDataAccessRole</i>.</li>
<li>l. Click <b>Create Role</b>.</li>
<li>m. Note this Role’s ARN string for later use.</li>
</ul>

6. Add a Trust Relation to the new Role.
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Search for the lambda roles that contain in the name <code>DBDatasourcePumpFunction</code> and <code>elastic-view-function-role</code>. There is one Role for each Qrvey deployment. Select the role applying to the current Qrvey deployment.</li>
<li>b. Click <b>Roles</b>.</li>
<li>c. Locate the newly created Role.</li>
<li>d. Click the <b>Trust Relations</b> tab.</li>
<li>e. Click <b>Edit trust relationship</b>.</li>
<li>f. Click the tab <b>Trust relationships</b>, then <b>Edit trust relationship</b>.</li>
<li>g. Paste the trust relationship shown below, replacing <code>ROLE_DB_DATASOURCE_PUMP_FUNCTION</code>, <code>ELASTIC_VIEW_FUNCTION_ROLE</code>, and <code>ECS_TASK_EXECUTION_ROLE</code> with the Roles noted in Step 2.</li>
</ul>

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "ROLE_DB_DATASOURCE_PUMP_FUNCTION"
      },
      "Action": "sts:AssumeRole"
    },
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "ELASTIC_VIEW_FUNCTION_ROLE"
      },
      "Action": "sts:AssumeRole"
    },
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "ECS_TASK_EXECUTION_ROLE"
      },
      "Action": "sts:AssumeRole"
    },
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "redshift.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>h. Click <b>Update Trust Policy</b>.</li></ul>

7. Associate the Redshift cluster with the new Role.
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Go to AWS Redshift.</li>
<li>b. Click the desired cluster.</li>
<li>c. Click the <b>Properties</b> tab.</li>
<li>d. Click the <b>Manage IAM roles</b> button.</li>
<li>e. Select <b>Enter ARN</b>.</li>
<li>f. Enter the ARN of the newly created Role.</li>
<li>g. Click <b>Associate IAM Role</b>.</li>
<li>h. Click <b>Save changes</b>.</li>
</ul>

8. Open the Qrvey application.
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Click <b>Datasets</b>.</li>
<li>b. Click <b>Connections</b>.</li>
<li>c. Create a new Connection for Redshift.</li>
<li>d. Enter the Secret ARN and Role ARN created above.</li>
<li>e. Test the new Connection.</li>
</ul>

## Debugging

#### Connection Test timeout error:

This is an error with the Postgres driver trying to connect to Redshift during the Connection Test.

If Qrvey is in a different account, then a VPC is necessary for DBDatasourcePump

#### Not authorized to assume IAM Role

```
Error in Redshift SQL UNLOAD command: ERROR: User 
arn:aws:redshift:us-east-1:790133296469:dbuser:redshift-drdev/awsuser is not authorized to assume IAM 
Role arn:aws:iam::790133296469:role/RedshiftDataAccessRole,arn:aws:iam::790133296469:role/
rouup_dataload_DbDatasourceExportToS3Role.
```

This error occurs when the trust relationship for the role DbDatasourceExportToS3Role is not set.  See step 3 above.

</div>