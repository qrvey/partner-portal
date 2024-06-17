---
id: record-level-security
title: Record Level Security
sidebar_label: Record Level Security
tags: [Software Developer, Solution Architect]
sidebar_position: 3
displayed_sidebar: getting-started
---

<div style={{textAlign: "justify"}}>

## Overview
Record-level security (RLS) with Qrvey allows administrators to restrict data access at a row-level in a dataset, so each user gets only the information they are authorized to see. With RLS, creators can load their data in a single dataset, regardless of each record’s owner, yet have the data be automatically filtered.

## Supported Scenarios
The following are the supported scenarios where you can use Qrvey Record-Level Security.

* **End-user Widget with OpenId or Backend authentication**:
You can use Qrvey RLS if you are using the end-user widget. Your users may be authenticated against an OpenId provider (e.g., Auth0) or you may have your own login/authentication mechanism.

* **Builders widget with Backend authentication**:
You can use Qrvey RLS if you are using the page or report builder widget. This feature only works if you have your custom login/authentication mechanism, at this time.

If you control the login process and store user’s information in your own databases, a backend authentication where you call a Qrvey API to create a security token must be used (Please see <a href="#generate-a-security-token-with-backend-authentication">generate a security token with backend authentication</a> for more details).

## How to Use Record-Level Security
It’s essential to understand four critical elements of record-level security (RLS) in Qrvey if you want to start using it:
1. **Security Columns**: Dataset owners need to define which column(s) of the dataset Qrvey will be used to filter the data, based on the user’s permissions. **If no security columns are specified, users will have full access to the dataset.**

2. **Security Provider**: It is a system that stores user information for authentication and authorization to access other resources like Web applications, APIs, etc. Examples of security providers are OpenId providers like Auth0 or Google, Active Directory, or Custom User Management applications.

3. **User Security Token**: Authorization that is given to users that enables them to access specific records on the dataset; for example, users can access only the data of a particular company or department.

4. **Security Token Schema (STS)**: It is a JSON structure in Qrvey to establish a communication protocol between the Security Provider and Qrvey’s platform to obtain the user’s security token. The security token is added after the user has been logged in. See more details in the STS section below.

Setting up RLS consists of two primary steps, described next.  

### Step 1 - Create a Dataset Security Column
Security columns play an essential role in Qrvey's security architecture. When you want to secure your datasets under row-level security, you need to choose which columns of your datasets will be used to filter the data so users only see what they are allowed to see.

To define security columns, open the Dataset Design page in Qrvey Composer. Click the three-dot menu on the right-hand side, and click **Enable Record Level Security**.

![2_record_level_security](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Record+Level+Security/2rls.png#thumbnail)


The Record Level Security - Security Name dialog displays. Use this dialog to define the security name with which this column will be identified. Security names are used together with the user's <a href="#step-3---define-users-security-tokens"> security token </a> to establish a mapping that allows the system to filter by these dataset columns. You can assign any name you want but keep in mind that you will use these values when defining user permissions (more details on how to set user permissions in the sections below).

![3_record_level_security](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Record+Level+Security/3rls.png#thumbnail-40)


Once you have saved the security name, you will see a security icon identifying the dataset’s security columns. There is no limit on how many security columns you can define for a dataset. Remember, all columns defined as security columns should be part of the user’s <a href="#step-3---define-users-security-tokens"> security token </a>. Any missing security column inside the user’s security token will restrict the user’s access to the data, so charts may not render with the intended data.

![4_record_level_security](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Record+Level+Security/4rls.png#thumbnail)


To remove security from the dataset, you need to click the three-dot menu again, select the **Record Level Security** option, and then **Remove** to reset the dataset configuration. Datasets without security columns will not restrict access to the data. All users will have full access.

![5_record_level_security](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Record+Level+Security/5rls.png#thumbnail)

Defining the security columns for your datasets is all you need to secure your data. Now, every user that wants to access charts that use the dataset will require the security token permissions. 

Defining your datasets’ security columns is optional, regardless of the data security configuration in the Admin Center. If you want to secure only a few datasets, you just need to define security columns for those. Do not define security columns for datasets that you do not wish to secure. Qrvey only will request the user’s security token when the secured datasets are accessed.

### Step 2 - Define User's Security Token(s)
Finally, you need to grant permission to the users you want to access the dataset by defining their security token(s). It is essential to understand that record-level security requires users to be authenticated, and during the authentication process, the security token is added to the user’s profile.

As described in the <a href="#supported-scenarios">supported scenarios </a> section above, you can define and generate your users’ security tokens in two different ways. In this section, we will explain in detail how to do it with each one.

### Generate a Security Token With Backend Authentication
We recommend using back-end authentication if you control the authentication process and store users’ information outside Qrvey. This method is frequently used in embedded scenarios, and you need to programmatically set users’ security permissions defining a JSON object that complies with the <a href="#security-token-schema"> Security Token Schema</a> definition.

The following is an example of a JSON object containing a user’s security permissions.

```JSON
{
 "version": "2",
   "userid": "userId",
   "appid": "appId",
   "permissions": [
      {
         "dataset_id": "datasetId",
         "operator": "AND",
         "record_permissions": [
            {
               "security_name": "MyDateSecurityName",
               "validation_type": "RANGE",
               "group_value": "month",
               "values": [
                  {
                     "gte": "Jun 2020",
                     "lte": "Dec 2020"
                  }
               ]
            },
            {
               "operator": "OR",
               "record_permissions": [
                  {
                     "security_name": "MyCountrySecurityName",
                     "validation_type": "CONTAIN",
                     "values": [
                        "ina",
                        "col"
                     ]
                  },
                  {
                     "security_name": "MyNumericSecurityName",
                     "validation_type": "RANGE",
                     "values": [
                        {
                           "gte": 1e6
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ]
```

Once you have the JSON object with the permissions to grant access to the users, you need to request an access token by calling the Qrvey API <a href="https://qrvey.stoplight.io/docs/qrvey-api-doc/b3A6NDY5NTUxNjg-generate-token-for-creators" target="_blank"> Generate Token</a> passing the JSON object in the body. The endpoint will generate a new <a href="https://tools.ietf.org/html/rfc7519" target="_blank">JWT</a> adding all of the user’s permissions to it and return the token as part of the *http* response. The generated token will be encrypted to avoid tampering.

```json
{
  "token": "eyJraWQiOiJuTlBnd3Y2LV96TXJqVzFDbWVB..."
}
```

The returned JWT contains the security token required by each widget to apply RLS; this token must be added to the widget’s configuration object as described below.

```json
var config = {
 domain: "https://sandbox.qrvey.com",
 qv_token: "eyJraWQiOiJuTlBnd3Y2LV96TXJqVzFDbWVB...",
};
```

>**Note**: While version 1.0.0 is supported for backward compatibility, it is strongly recommended that the version attribute be set to 2, starting with the 7.2 release. This setting provides support for large JWT, as well as complex logic in the creation of the token. The example above shows the configuration for a token that matches rows with the following pseudo code, as criteria: <br/>
`(Month(datasetId.MyDateSecurityName) between (June 2020 and December 2020)) OR (datasetId.MyCountrySecurityName Contains (“ina” or “col”)) OR (datasetId.MyNumericSecurityName > 1,000,000)`

Once the token is part of the widget’s configuration object, it will contain the security token in every request’s header.

### Generate a Security Token With OpenId Authentication
Please review the [Introduction to Qrvey Admin Center](../../admin/introduction-to-qrvey-admin-center.md) for links to articles on how to enable OpenId authentication.

Qrvey RLS is supported when using <a href="https://auth0.com/" target="_blank">Auth0 </a> as an OpenId provider. You define the security permissions by each user under Auth0 by adding the JSON object to the user_metadata section.

```json
{
   "version": "2",
   "userid": "userId",
   "appid": "appId",
   "permissions": [
      {
         "dataset_id": "datasetId",
         "operator": "AND",
         "record_permissions": [
            {
               "security_name": "MyDateSecurityName",
               "validation_type": "RANGE",
               "group_value": "month",
               "values": [
                  {
                     "gte": "Jun 2020",
                     "lte": "Dec 2020"
                  }
               ]
            },
            {
               "operator": "OR",
               "record_permissions": [
                  {
                     "security_name": "MyCountrySecurityName",
                     "validation_type": "CONTAIN",
                     "values": [
                        "ina",
                        "col"
                     ]
                  },
                  {
                     "security_name": "MyNumericSecurityName",
                     "validation_type": "RANGE",
                     "values": [
                        {
                           "gte": 1e6
                        }
                     ]
                  }
               ]
            }
         ]
      }
}
```

When users log in into the OpenID Provider, the security permissions previously stored in the user_metadata will be added as part of the user information. They will be redirected to Qrvey, where the permissions will be used to filter the data in all charts if RLS is enabled.

This is similar to what was described in the <a href="#generate-a-security-token-with-backend-authentication">back-end authentication</a> section; with the only difference being that you don’t need to programmatically request a token and set up the widget’s configuration object. Instead, the OpenId integration will manage all the processes by itself.


## Security Token Schema
The security token schema is one of the critical pieces in the entire architecture of Qrvey’s row-level security. The schema defines a communication protocol where all users’ information, including the security info, is transmitted and then extracted internally to apply the security filters defined for each user to only expose the data that they are authorized to see.

In this section, the structure of the security token schema has been described.



| **Claim** | **Type** | **Required** | **Description**
| --- | --- | --- |--- |
| version | _Number_| Yes |The version of the token structure. The current version is 2.| 
| user_id | _String_| Yes | User ID| 
| appid | _String_ | Yes | The ID of the application you want to embed.| 
| permissions| _Array_| Yes | Each item in the collection contains a _Permission Object_ | 


Permissions Object

| **Claim** | **Type** | **Required** | **Description**
| --- | --- | --- |--- |
| dataset_id| _String_ or _Array_| Yes |The ID of the dataset (from any type of data source Database, Index View, or CSV files) where the row-level security will apply. <br/><br/> _String_ <br/>If dataset\_id is set to * (wildcard), the column and the values defined in the Record Filter Object will be used to filter the data in all datasets available. <br/><br/> _Array_ <br/> Set the same group of conditions for multiple datasets and avoid repeating the conditions for each dataset. <br/>**Note:** Make sure that the security columns are the same in all datasets, or the system will give an error.<br/> 
| operator| _String_| No| Type of the logical operation on *record_permissions*. The available options are **AND, OR**.<br/><br/> Default: **AND**| 
| record_permissions | _Array_| Yes | Each item in the collection contains a _Record Filter Object_.


Record Filter Object

| **Claim** | **Type** | **Required** | **Description**
| --- | --- | --- |--- |
| security_name| _String_| Yes |Name of the security column used to filter the data
| validation_type| _String_| No| Type of validation for each security object. The possible values are *EQUAL, NOT_EQUAL, CONTAIN, NOT_CONTAIN, RANGE, NOT_RANGE, BETWEEN, DATE, GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL, START_WITH, NOT_START_WITH, END_WITH, NOT_END_WITH, IS_EMPTY, IS_NOT_EMPTY*.<br/><br/>Default: **EQUAL**| 
| group_value| _String_| No| This field is only valid for DATE columns. The possible values are *SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, QUARTER, YEAR, SECOND_ONLY, MINUTE_ONLY, HOUR_ONLY, DAY_ONLY, WEEK_ONLY, MONTH_ONLY AND QUARTER_ONLY*. <br/><br/> Default: **day**| 
| values | _Array_| Yes | List of values the user has access to see their data, e.g., 1, 2, and 3, corresponding to the Company IDs where the user has access. <br /> If you do not want to apply security filters to the users, a wildcard (*) must be used.<br/><br/>**Important Note:** The *validation_type* attribute must be set to *EQUAL* in order to use a wildcard, or otherwise the * character will be treated literally.
 
</div>