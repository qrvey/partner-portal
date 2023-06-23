---
id: postgres-connections

title: Configuring AWS and Qrvey for Postgres Connections Utilizing the Export to S3 Method

sidebar_label: Configuring AWS and Qrvey for Postgres Connections

---

<div>
Very large or long-running queries to Postgres may take several minutes to start. You can speed up this process by selecting the option, “Export Data to S3 to Support Larger Data Loads”.  When employed, the query output is sent to S3 and then Qrvey pulls the data from there.  The option is available when the Host URL points to an AWS RDS Postgres instance that is in the same AWS region as Qrvey.

This method requires additional configuration.  The changes allow Postgres to write to a Qrvey S3 bucket.

## Steps

Many of the steps below are necessary only when the Postgres RDS and Qrvey deployment are on different AWS accounts.

1. Configure Postgres for the export to S3 extension.
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Using Postgres query tool, send the following psql command.</li>
</ul>

<ul style={{listStyle: 'none', marginLeft: '50px'}}>
<li>

`CREATE EXTENSION aws_s3 CASCADE;`

</li>
</ul>



<ul style={{listStyle: 'none', marginLeft: '50px'}}>
<li>b. Grant access to queries used for monitoring and canceling other queries, replacing “myUser” with the Postgres Username which will be used for Qrvey Postgres Connections.</li>

`GRANT SELECT ON pg_stat_activityTO myUser;`
`GRANT SELECT ON pg_terminate_backend TO myUser;`
</ul>


2. Create a new Policy.  (Different accounts only.)
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Open the AWS console.</li>
<li>b. Switch to the Postgres RDS’s AWS account.</li>
<li>c. Open AWS Identity and Access Management (IAM)</li>
<li>d. Click <b>Policies</b>.</li>
<li>e. Click <b>Create policy</b>.</li>
<li>f. Select the <b>JSON</b> tab.</li>
<li>g. Paste the policy below. Change QRVEY_DEPLOYMENT to the Qrvey deployment name.</li>
</ul>

```{
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
                "arn:aws:s3:::QRVEY_DEPLOYMENT-dataload-drdatacommons/*"
            ]
        }
    ]
}
```

<ul style={{listStyle: 'none', marginLeft: '60px'}}>
<li>h. Click <b>Next: Tags</b>.</li>
<li>i. Click <b>Next: Review</b>.</li>
<li>j. Name the new Policy.  For example: `PostgresDataAccessPolicy`.</li>
</ul>

3. Create a new Role.  (Different accounts only.)
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Continue in the Postgres AWS account, IAM.</li>
<li>b. Click <b>Roles</b>.</li>
<li>c. Click <b>Create Role</b>.</li>
<li>d. Select <b>AWS account</b>.</li>
<li>e. Use the filter to find the policy created above.</li>
<li>f. Check its box.</li>
<li>g. Click <b>Next</b>.</li>
<li>h. Enter the Role name.  For example: `PostgresDataAccessRole`.</li>
<li>i. Click <b>Create Role</b>.</li>
<li>j. Note this Role’s ARN string for later use.</li>
</ul>

4. Add a trust relationship.   (Different accounts only.)
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Click <b>Roles</b>.</li>
<li>b. Locate the newly created Role.</li>
<li>c. Click the <b>Trust Relations</b> tab.</li>
<li>d. Click <b>Edit trust relationship</b></li>
<li>e. Click the <b>Trust relationships</b> tab, and then click <b>Edit trust relationship</b>.</li>
<li>f. Paste the trust relationship shown below, replacing `AWS_ACCOUNT_QRVEY` with the AWS account number for the Qrvey deployment.</li>
</ul>

```{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::AWS_ACCOUNT_QRVEY:root"
      },
      "Action": "sts:AssumeRole"
    }  ]
}
```
<ul style={{listStyle: 'none', marginLeft: '50px'}}>
<li>g. Click <b>Update Trust Policy</b>.</li>
</ul>

5. Set inline policies for the Qrvey lambdas.  (Different accounts only.)
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Use the Qrvey AWS account.</li>
<li>b. Open AWS Identity and Access Management (IAM).</li>
<li>c. Click <b>Roles</b></li>
<li>d. Search for the DB lambda role.  It contains this string: `DBDatasourcePumpFunction`.  There is one Role for each Qrvey deployment.  Select the role applying to the current Qrvey deployment.</li>
<li>e. Click <b>Add inline policy</b>.</li>
<li>f. Click the <b>JSON</b> tab.</li>
<li>g. Paste the policy, replacing `AWS_ACCOUNT_POSTGRES` with the AWS account number for the Postgres cluster.</li>
</ul>

```{
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
<ul style={{listStyle: 'none', marginLeft: '60px'}}>
<li>h. Click <b>Review policy</b>.</li>
<li>i. Name the policy.  For example: `PostgresDataAccessAssumeRole`.</li>
<li>j. Click <b>Create Policy</b>.  See that the new policy has been added.</li>
<li>k. Repeat these steps for the lambda role `DatasourcePumpFunction`.</li>
<li>l. Repeat these steps for the lambda role `FilesourcePrimerFunction`.</li>
</ul>

6. Configure a Qrvey Connection.
<ul style={{listStyle: 'none', marginLeft: '20px'}}>
<li>a. Open the Qrvey Composer application.</li>
<li>b. Click <b>Data</b>.</li>
<li>c. Click <b>Connections</b>.</li>
<li>d. Create a new Connection for Postgres.</li>
<li>e. Enter the Host URL, Username, and Password.</li>
<li>f. Enter the Role ARN created above.   (Different accounts only.)</li>
<li>g. Test the new Connection.</li>
<li>h. Create a Dataset using the Connection.  </li>
<li>i. Load the Dataset data from Postgres.</li>
</ul>


## For More Information
[Importing Amazon S3 data into an RDS for PostgreSQL DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PostgreSQL.S3Import.html)



</div>