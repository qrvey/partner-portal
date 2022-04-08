---
id: snowflake-connections

title: Configuring AWS and Qrvey for Snowflake Connections


sidebar_label: Configuring AWS and Qrvey for Snowflake Connections


---
<div style={{textAlign: "justify"}}>

The steps below detail the required configuration to access Snowflake clusters for loading data into Qrvey for data analysis.

The changes allow Qrvey to access the cluster and also enable it to export data to S3 to be accessed by Qrvey.

## Steps 
1. Create a KMS Key
<ul style="list-style: none; margin-left:20px;">
<li> a. Open the AWS console. </li>
<li> b. Use the Qrvey deployment’s AWS account.</li>
<li> c. Create a new key.</li>
<li> d. Select the <b>Asymmetric</b> option.</li>
<li> e. Select <b>Sign and verify</b>.</li>
<li> f. Select Key spec <b>RSA_2048</b>.</li>
<li> g. Click <b>Next</b>.</li>
<li> h. Set Alias to “QRVEY_DEPLOYMENT-snowflake-kms”.</li></ul>
<ul style="list-style: none; margin-left:30px;">
<li>i. Change QRVEY_DEPLOYMENT to the Qrvey deployment name.</li></ul>
<ul style="list-style: none; margin-left:20px;">
<li>i. Click <b>Next</b>.</li>
<li>j. For “Key administrators”, select one or more AWS users to be the administrators.</li>
<li>k. Click <b>Finish</b>.</li>
<li>l. Open the details for the new key.</li>
<li>m. Select the <b>Public key</b> tab.</li>
<li>n. Copy the KMS public key, it will be used later. Copy without the opening and closing lines, or newlines.</li>
<li>o. Note the new KMS key’s ARN.</li></ul>

2. Create a Policy to give Qrvey permissions to the Snowflake cluster.
<ul style="list-style: none; margin-left:20px;">
<li>a. Continue in the Qrvey AWS account.</li>
<li>b. Open AWS Identity and Access Management (IAM).</li>
<li>c. Go to Policies, and <b>Create Policy</b>.</li></ul>
<ul style="list-style: none; margin-left:30px;">
<li>i. Set the following permissions for the Policy in the JSON tab:</li>

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
              "s3:PutObject",
              "s3:GetObject",
              "s3:GetObjectVersion",
              "s3:DeleteObject",
              "s3:DeleteObjectVersion"
            ],
            "Resource": "arn:aws:s3:::QRVEY_DEPLOYMENT-dataload-drdatacommons/sql_export/*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:GetBucketLocation"
            ],
            "Resource": "arn:aws:s3:::QRVEY_DEPLOYMENT-dataload-drdatacommons",
            "Condition": {
                "StringLike": {
                    "s3:prefix": [
                        "sql_export/*"
                    ]
                }
            }
        }
    ]
}
```
</ul>
<ul style="list-style: none; margin-left:20px;">
<li>d. Click <b>Next: Tags</b>.</li>
<li>e. Click <b>Next: Review</b>.</li>
<li>f. Name the new Policy. For example: “SnowflakeDataAccessPolicy”</li></ul>

3. Create a new Role for the Policy, enabling access from Snowflake to S3.
<ul style="list-style: none; margin-left:20px;">
<li>a. Open AWS Identity and Access Management (IAM). </li>
<li>b. Go to Roles, then <b>Create Role</b>.</li></ul>
<ul style="list-style: none; margin-left:30px;">
<li>i. Choose the option <b>Another AWS account</b>.</li>
<li>ii. Set the Account ID (same AWS account ID) and choose the option <b>Require external ID</b>. For the External ID set 0000. Click on <b>Next</b>.</li>
<li>iii. In the Filter lookup for the previous Policy created (step 3):</li>
<li>iv. Set Role Name and Description to finally create the Role.</li>
<li>v. Get the new role’s ARN in the Summary View.</li></ul>

4. Configure Snowflake.
<ul style="list-style: none; margin-left:20px;">
<li>a. Open the Snowflake console.</li></ul>
<ul style="list-style: none; margin-left:30px;">
<li>i. Create a Snowflake user.</li>
<li>ii. Assign the user a ROLE that allows the user to read data.</li></ul>
<ul style="list-style: none; margin-left:20px;">
<li>b. Create a Storage Integration in the Snowflake cluster.</li>
<li>c. From Snowflake, run the <i>CREATE STORAGE INTEGRATION</i> command, replacing <i>QRVEY_DEPLOYMENT and EXPORT_TO_S3_ARN.</i>

```
CREATE STORAGE INTEGRATION QrveyExportToS3_QRVEY_DEPLOYMENT
  TYPE = EXTERNAL_STAGE
  STORAGE_PROVIDER = S3
  ENABLED = TRUE
  STORAGE_AWS_ROLE_ARN = 'EXPORT_TO_S3_ARN'
  STORAGE_ALLOWED_LOCATIONS = ('s3://QRVEY_DEPLOYMENT-dataload-drdatacommons/sql_export/')
```

 </li>
<li>d. Grant permission to Snowflake user role, as follows:

```
GRANT USAGE ON integration QrveyExportToS3_QRVEY_DEPLOYMENT to role SNOWFLAKE_USER_ROLE;
```
</li>
<li>e. Set the Trust Relationship between the Snowflake and the AWS account.</li></ul>
<ul style="list-style: none; margin-left:30px;">
<li>i. Run this query:</li>

```
DESC INTEGRATION QrveyExportToS3_QRVEY_DEPLOYMENT;
```
</li></ul>
<ul style="list-style: none; margin-left:20px;">
<li>f. From the query response note the values for <br><b>STORAGE_AWS_IAM_USER_ARN<br>
STORAGE_AWS_EXTERNAL_ID</b></li>
<li>g. Return to the IAM console, and open the role created above.</li>
<li>h. Click the <b>Trust Relationship</b> tab.</li>
<li>i. Click <b>Edit</b>.</li>
<li>j. Set the trust relationship following this example, replacing the values from the query above.</li>

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "AWS": "STORAGE_AWS_IAM_USER_ARN"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "STORAGE_AWS_EXTERNAL_ID"
        }
      }
    }
  ]
}
```
<li>k. Update the Snowflake user account to include the KMS key created above. <br>
ALTER USER SNOWFLAKE_USER SET rsa_public_key='KMS_PUBLIC_KEY'</li></ul>

5. Create a new Secret that points to the Snowflake cluster.
<ul style="list-style: none; margin-left:20px;">
<li>a. Open AWS Secrets Manager.</li>
<li>b. Create a new Secret.</li>
<li>c. Select <b>Other type of secret</b>.</li>
<li>d. Select the <b>Plaintext</b> tab.</li>
<li>e. Set the key/value pairs with the following example.</li>
<li>f. Specify the Snowflake user, password, account, the KMS ARN, and the storageIntegration.</li>

```
{
  "user": “XXXX”,
  "password": "****",
  "account": "acountid.region",
  "kmsARNId": "KMS_KEY_ARN",
  "storageIntegration": "QrveyExportToS3_QRVEY_DEPLOYMENT"
}
```

<li>g. Click <b>Next</b>.</li>
<li>h. Enter a Secret name. For example SnowflakeClusterSecret.</li>
<li>i. Click <b>Next</b>.</li>
<li>j. Click <b>Store</b>.</li>
<li>k. Note this Secret’s ARN string for later use.</li></ul>

6. Set permissions for the Qrvey Database lambda.
<ul style="list-style: none; margin-left:20px;">
<li>a. Open AWS Identity and Access Management (IAM).</li>
<li>b. Click <b>Roles</b></li>
<li>c. Search for the DB lambda role. It contains this string: “DBDatasourcePumpFunction”. There is one Role for each Qrvey deployment. Select the role applying to the current Qrvey deployment.</li>
<li>d. Click <b>Add inline policy</b>.</li>
<li>e. Click the <b>JSON</b> tab.</li>
<li>f. Paste the Sample Inline Policy for DbDatasourcePump shown below, replacing the appropriate ARN.</li>

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "getSecretValue",
            "Effect": "Allow",
            "Action": [
                "secretsmanager:GetSecretValue"
            ],
            "Resource": [
                "<SECRET_ARN>"
            ]
        },
        {
            "Sid": "getPublicKey",
            "Effect": "Allow",
            "Action": [
                "kms:GetPublicKey",
                "kms:Sign"
            ],
            "Resource": [
                "KMS_KEY_ARN"
            ]
        }
    ]
}
```

<li>g. Click <b>Review policy</b>.</li>
<li>h. Name the policy. Example: SnowflakeDataAccessAssumeRole</li>
<li>i. Click <b>Save</b>, and see that the new policy has been added.</li></ul>

7. Open the Qrvey application.
<ul style="list-style: none; margin-left:20px;">
<li>a. Click <b>Datasets</b>.</li>
<li>b. Click<b>New Connections</b>.</li>
<li>c. Create a new Connection for Snowflake.</li>
<li>d. Enter the Secret ARN created above.</li>
<li>e. Test the new Connection.</li></ul>



</div>