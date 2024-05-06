---
id: end-of-life
title: End-of-life Schedule
sidebar_label: End-of-life Schedule
---

<div>

This article lists the features and endpoints that have been scheduled for deprecation. All features and endpoints will be supported for (1) year after the release date of the LTS version that contains the alternative.

## Deprecated Features

| **Supported Until** | **Deprecated Feature** | **Alternative Version Available** | **Alternative Feature** |
| --- | --- | --- | --- |
| Two LTS releases after 8.5 (LTS) | In future releases, custom attributes will no longer be supported as root attributes of Qrvey objects (Dashboards, Datasets, etc). To support custom attributes moving forward, any custom attributes should be added as children of the root `customAttributes` attribute. | 8.3 | `customAttributes`. Move all custom properties under `customAttributes`. |
| Two LTS releases after 8.5 (LTS) | `builder_order` property in the dashboard object, which showed the order pages are organized in the bottom bar of the page builder. | 8.4 | None. Do not use this property via API when creating/updating dashboards. |
| Two LTS releases after 8.5 (LTS) | `pageId` (and all formats of this prop). This displayed the page object's id in the dashboard object. | 8.4 | `dashboardId`. Use the replacement property, `dashboardId`. |
| Two LTS releases after 8.5 (LTS) | Cookie Management. With the removal of the monolithic architecture, we intend to phase out the use of authentication and session management cookies throughout the platform. | 8.4 | Qrvey Token or API key. |

## Deprecated Endpoints

| **Supported Until** | **Deprecated Endpoint** | **Deprecated Endpoint Path** | **Alternative Version Available** | **Alternative Endpoint** |
| --- | --- | --- | --- | --- |
| Two LTS releases after 8.5 (LTS) | Export CSV in Builders | `/user/{userId}/app/{appId}/builder/export/answers` | 8.3 | `/devapi/v5/export/user/{userId}/app/{appId}/{qrveyId}/answers` |
| Two LTS releases after 8.5 (LTS) | Log in to Qrvey Admin Center | `/admin/api/v5/login` | 8.4 | `/api/admin/v6/login` |
| Two LTS releases after 8.5 (LTS) | Log in to Composer | `/devapi/v4/core/login` | 8.4 | `/api/admin/v6/login` |
| Two LTS releases after 8.5 (LTS) | Backend Login (Set Session) | `/devapi/v4/core/login/token/session` | 8.4 | `/api/admin/v6/login` |
| Two LTS releases after 8.5 (LTS) | Logout | `/logout` | 8.4 | `api/admin/v6/logout` |

</div>