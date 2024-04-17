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
| Two LTS release after 8.5 (LTS) | Custom attributes passed to widgets via api | 8.3 | `customAttributes`. Move all custom properties under `customAttributes`. |
| Two LTS release after 8.5 (LTS) | builder_order property in the dashboard object | 8.4 | None. Do not use this property via API when creating/updating dashboards. |
| Two LTS release after 8.5 (LTS) | Dashboards - pageId (and all formats of this prop) | 8.4 | `dashboardId`. Use the replacement property, `dashboardId`. |
| Two LTS release after 8.5 (LTS) | Cookie Management | 8.4 | Qrvey Token |

## Deprecated Endpoints

| **Supported Until** | **Deprecated Endpoint** | **Deprecated Endpoint Path** | **Alternative Version Available** | **Alternative Endpoint** |
| --- | --- | --- | --- | --- |
| Two LTS release after 8.5 (LTS) |  Export CSV in Builders | `/user/{userId}/app/{appId}/builder/export/answers` | 8.3 | `/user/#{user_id}/app/#{application_id}/qrvey/#{table_id}/export/answers` |
| Two LTS release after 8.5 (LTS) |  Log In to Qrvey Admin Center | `/admin/api/v5/login` | 8.4 | `/api/admin/v6/login` |
| Two LTS release after 8.5 (LTS) |  Log in to Composer | `/devapi/v4/core/login` | 8.4 | `/api/admin/v6/login` |
| Two LTS release after 8.5 (LTS) |  Backend Login (Set Session) | `/devapi/v4/core/login/token/session` | 8.4 | `/api/admin/v6/login` |
| Two LTS release after 8.5 (LTS) |  Logout | `/logout` | 8.4 | `api/admin/v6/logout` |

</div>