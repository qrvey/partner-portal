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
<ul style={{listStyleType: 'lower-alpha', marginLeft: '20px'}}>
<li>Open the AWS console. </li>
<li>Use the Qrvey deployment’s AWS account.</li>
<li>Create a new key.</li>
<li>Select the <b>Asymmetric</b> option.</li>
<li>Select <b>Sign and verify</b>.</li>
<li>Select Key spec <b>RSA_2048</b>.</li>
<li>Click <b>Next</b>.</li>
<li>Set Alias to “QRVEY_DEPLOYMENT-snowflake-kms”.</li>
</ul>
<ul style={{listStyle: 'lower-roman', marginLeft: '30px'}}>
<li>Change QRVEY_DEPLOYMENT to the Qrvey deployment name.</li>
</ul>
<ul style={{listStyleType: 'lower-alpha', marginLeft: '20px'}}>
<li>Click <b>Next</b>.</li>
<li>For “Key administrators”, select one or more AWS users to be the administrators.</li>
<li>Click <b>Finish</b>.</li>
<li>Open the details for the new key.</li>
<li>Select the <b>Public key</b> tab.</li>
<li>Copy the KMS public key, it will be used later. Copy without the opening and closing lines, or newlines.</li>
<li>Note the new KMS key’s ARN.</li>
</ul>

2. Create a Policy to give Qrvey permissions to the Snowflake cluster.
<ul style={{listStyle: 'lower-alpha', marginLeft: '20px'}}>
<li>Continue in the Qrvey AWS account.</li>
<li>Open AWS Identity and Access Management (IAM).</li>
<li>Go to Policies, and <b>Create Policy</b>.</li>
</ul>
<ul style={{listStyle: 'lower-roman', marginLeft: '30px'}}>
<li>Set the following permissions for the Policy in the JSON tab:</li>
</ul>

```json
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

<ul style={{listStyle: 'lower-alpha', marginLeft: '20px'}}>
<li>Click <b>Next: Tags</b>.</li>
<li>Click <b>Next: Review</b>.</li>
<li>Name the new Policy. For example: “SnowflakeDataAccessPolicy”</li>
</ul>

3. Create a new Role for the Policy, enabling access from Snowflake to S3.
<ul style={{listStyle: 'lower-alpha', marginLeft: '20px'}}>
<li>Open AWS Identity and Access Management (IAM). </li>
<li>Go to Roles, then <b>Create Role</b>.</li>
</ul>
<ul style={{listStyle: 'lower-roman', marginLeft: '30px'}}>
<li>Choose the option <b>Another AWS account</b>.</li>
<li>Set the Account ID (same AWS account ID) and choose the option <b>Require external ID</b>. For the External ID set 0000. Click on <b>Next</b>.</li>
<li>In the Filter lookup for the previous Policy created (step 3):</li>
<li>Set Role Name and Description to finally create the Role.</li>
<li>Get the new role’s ARN in the Summary View.</li>
</ul>

4. Configure Snowflake.
<ul style={{listStyle: 'lower-alpha', marginLeft: '20px'}}>
<li>Open the Snowflake console.</li>
</ul>
<ul style={{listStyle: 'lower-roman', marginLeft: '30px'}}>
<li>Create a Snowflake user.</li>
<li>Assign the user a ROLE that allows the user to read data.</li>
<li>Create a Storage Integration in the Snowflake cluster.</li>
<li>From Snowflake, run the <i>CREATE STORAGE INTEGRATION</i> command, replacing <i>QRVEY_DEPLOYMENT and EXPORT_TO_S3_ARN.</i></li>
</ul>

```js
CREATE STORAGE INTEGRATION QrveyExportToS3_QRVEY_DEPLOYMENT
  TYPE = EXTERNAL_STAGE
  STORAGE_PROVIDER = S3
  ENABLED = TRUE
  STORAGE_AWS_ROLE_ARN = 'EXPORT_TO_S3_ARN'
  STORAGE_ALLOWED_LOCATIONS = ('s3://QRVEY_DEPLOYMENT-dataload-drdatacommons/sql_export/')
```

<ul style={{listStyle: 'lower-roman', marginLeft: '30px'}}>
<li>Grant permission to Snowflake user role, as follows:</li>
</ul>

```js
GRANT USAGE ON integration QrveyExportToS3_QRVEY_DEPLOYMENT to role SNOWFLAKE_USER_ROLE;
```
<ul style={{listStyle: 'lower-roman', marginLeft: '30px'}}>
<li>Set the Trust Relationship between the Snowflake and the AWS account.</li>
<li>Run this query:</li>
</ul>

```js
DESC INTEGRATION QrveyExportToS3_QRVEY_DEPLOYMENT;
```

![snowflake1](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/managing-aws-cluster/snowflake.1.all.png)

<ul style={{listStyle: 'lower-roman', marginLeft: '30px'}}>
<li>From the query response note the values for

<strong>STORAGE_AWS_IAM_USER_ARN  
STORAGE_AWS_EXTERNAL_ID
</strong>

</li>
<li>Return to the IAM console, and open the role created above.</li>
<li>Click the <b>Trust Relationship</b> tab.</li>
<li>Click <b>Edit</b>.</li>
<li>Set the trust relationship following this example, replacing the values from the query above.</li>

```json
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
<li>Update the Snowflake user account to include the KMS key created above. <br/>

```js
ALTER USER SNOWFLAKE_USER SET rsa_public_key='KMS_PUBLIC_KEY'
```
</li>
</ul>

5. Create a new Secret that points to the Snowflake cluster.
<ul style={{listStyle: 'lower-alpha', marginLeft: '20px'}}>
<li>Open AWS Secrets Manager.</li>
<li>Create a new Secret.</li>
<li>Select <b>Other type of secret</b>.</li>
<li>Select the <b>Plaintext</b> tab.</li>
<li>Set the key/value pairs with the following example. Specify the Snowflake user, password, account, the KMS ARN, and the storageIntegration.</li>
</ul>

```json
{
  "user": "XXXX",
  "password": "****",
  "account": "acountid.region",
  "kmsARNId": "KMS_KEY_ARN",
  "storageIntegration": "QrveyExportToS3_QRVEY_DEPLOYMENT"
}
```
<ul style={{listStyle: 'lower-alpha', marginLeft: '20px'}}>
<li>Click <b>Next</b>.</li>
<li>Enter a Secret name. For example SnowflakeClusterSecret.</li>
<li>Click <b>Next</b>.</li>
<li>Click <b>Store</b>.</li>
<li>Note this Secret’s ARN string for later use.</li>
</ul>

6. Set permissions for the Qrvey Database lambda.
<ul style={{listStyle: 'lower-alpha', marginLeft: '20px'}}>
<li>Open AWS Identity and Access Management (IAM).</li>
<li>Click <b>Roles</b></li>
<li>Search for the DB lambda role. It contains this string: “DBDatasourcePumpFunction”. There is one Role for each Qrvey deployment. Select the role applying to the current Qrvey deployment.</li>
<li>Click <b>Add inline policy</b>.</li>
<li>Click the <b>JSON</b> tab.</li>
<li>Paste the Sample Inline Policy for DbDatasourcePump shown below, replacing the appropriate ARN.</li>
</ul>

```json
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
<ul style={{listStyle: 'lower-alpha', marginLeft: '20px'}}>
<li>Click <b>Review policy</b>.</li>
<li>Name the policy. Example: SnowflakeDataAccessAssumeRole</li>
<li>Click <b>Save</b>, and see that the new policy has been added.</li>
</ul>

7. Open the Qrvey application.
<ul style={{listStyle: 'lower-alpha', marginLeft: '20px'}}>
<li>Click <b>Datasets</b>.</li>
<li>Click<b>New Connections</b>.</li>
<li>Create a new Connection for Snowflake.</li>
<li>Enter the Secret ARN created above.</li>
<li>Test the new Connection.</li>
</ul>


</div>