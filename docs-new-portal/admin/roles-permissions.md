---
id: roles-and-permissions
title: Roles & Permissions
sidebar_label: Roles & Permissions
---

<div style={{textAlign: "justify"}}>

## Roles
Roles and permissions are used to control access to sections on the Qrvey Composer. In the User Management section of Admin Center, you will find 2 roles that are system-defined roles, *Admin* and *Composers*. 

![roles-and-permissions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Roles+%26+Permissions/rp_1.png#thumbnail-80)

The Administrator role has access over all the Admin Center and Qrvey Composer sections. Different users can be added to this role, but the permissions cannot be edited, deleted or renamed to prevent users from removing all admin permissions and locking themselves out of the Admin account.

The Composer role can be edited to remove access to all the sections within the composer. It however cannot be deleted or renamed. 

Custom roles can also be created to give access to the Qrvey Composer sections. To start click on the **Create New Role** at the top of the section. Then assign a name to the role, you can optionally add a description as well. 

![roles-and-permissions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Roles+%26+Permissions/rp_2.png#thumbnail-60)

Select the users that you want this role assigned to and **Save**. 

![roles-and-permissions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Roles+%26+Permissions/rp_3.png#thumbnail-80)

You can choose any of the roles you create as the *Default Role*, meaning that when a new user signs up through the login page, they will be assigned this role. 

![roles-and-permissions](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/admin/Roles+%26+Permissions/rp_4.png#thumbnail)

## Permissions
Admin can define the access that composers have to the different sections of the Qrvey Composer platform. This is the list of permissions we currently allow:

|          **Section**       |**Admin**                        |**Composer**                        |
|----------------|-------------------------------|-----------------------------|
|**Data**|
| Connections| ✅ | ✅ |
| Connections| ✅ | ✅ |
| Datasets| ✅ | ✅ |
| Web Forms| ✅ | ✅ |
| Data Links| ✅ | ✅ |
|**Applications**|
| Page Builder| ✅ | ✅ |
| Report Builder| ✅ | ✅ |
| Automation| ✅ | ✅ |
| Settings| ✅ | ✅ |
|**App Administration**|
| Admin Center| ✅ | ❌ |

</div>
