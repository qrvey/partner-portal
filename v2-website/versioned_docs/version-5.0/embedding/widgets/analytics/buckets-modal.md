---
id: widget-buckets-modal
title: Bucketed Column Modal
sidebar_label: Bucketed Column Modal
---
## No Public Doc

<div style={{textAlign: "justify"}}>

This document shows how to implement the Buckets Modal dialog.

Below you will find details of the configuration object, event, listeners, menthods available with this widget.

&gt; This Buckets Modal widget requires `"<my_cdn>"/bucket-modal/anbucketmodal.js` script file and use of the `<an-bucket-modal>` Custom HTML Tag.

## Configuration Object

Buckets Modal does not need Configuration object passed as component property.

## Dispatched Events

-   ### ON_CLOSE_BUCKET_MODAL

This event is emitted when the user closes Buckets Modal.

| **Property**   | **Value**                                                       | **Required** |
| -------------- | --------------------------------------------------------------- | ------------ |
| **hasChanges** | `Boolean`, Determines if Buckets Modal has been updated. | Yes          |

## Listener Events

-   ### ON_AN_OPEN_BUCKETS_MODAL

This event sets the bucket data and the modal type, then displays modal.

| **Property**     | **Value**                                                                                                                                                                          | **Required** |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **config**       | `Object`, Configuration Object.                                                                                                                                             | Yes          |
| **isNew**        | `Boolean`, Determines if Buckets modal will edit or create buckets.                                                                                                         | Yes          |
| **currentModal** | `String`, Type of Bucket Modal. It only accepts LIST or BUILDER as string. LIST is about to display a list of created buckets. DETAIL is about to display a specific bucket | Yes          |
| bucket           | `Object`, The bucketed column info.                                                                                                                                         | No           |
| fromChart        | `Boolean`, Determines if Buckets Modal has been opened by Custom Chart.                                                                                                     | No           |
| **onReturn**     | `Void`, Callback function that returns the bucketed column info.                                                                                                            | Yes          |

#### Configuration Object

```

{
    "domain": "<QRVEY_CORE_URL>",
    "api_key": "<API_KEY>",
    "user_id": "<USER_ID>",
    "app_id": "<APP_ID>",
    "qrveyid": "<QRVEY_ID>"
}

```

| **Property** | **Value**                                                                                                              | **Required** |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------ |
| **domain**   | `String`, Qrvey Core URL.                                                                                       | Yes          |
| api_key      | `String`, Optional API Key, you can set up the widget without an api key if it's set in a qrvey session cookie. | No           |
| user_id      | `String`, Optional User id, you can set up the widget without a user id if it's set in a qrvey session cookie.  | No           |
| **app_id**   | `String`, Id of Qrvey App.                                                                                      | Yes          |
| **qrveyid**  | `String`, Id of Qrvey Dataset/Webform.                                                                          | Yes          |

### Methods

No current Methods for Buckets Modal

### Example

```

<button onclick="openBucketModal()">Open Bucket Modal</button>
<button onclick="openBucketFormChartModalBuilder()">Open Bucket Modal From chart</button>
<button onclick="openBucketModalBuilder()">Open Bucket Modal (Builder)</button>

<an-bucket-modal></an-bucket-modal>

<script>
    window.addEventListener('ON_CLOSE_BUCKET_MODAL', function(event) {
        if (event.detail.hasChanges) {
            window.logText.innerHTML += ' - Has changes in Buckets, please reload your view!.<br />';
        } else {
            window.logText.innerHTML += ' - Has NO changes.<br />';
        }
    });

    const configs = {
        "domain": "http://qdev.qrvey.com",
        "api_key": "TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0",
        "app_id": "CXuWuec",
        "user_id": "Gi8U8f5",
        "qrvey_id": "hVS8i1S"
    };

    function openBucketModal(props = {}) {
        window.dispatchEvent(new CustomEvent('ON_AN_OPEN_BUCKETS_MODAL', {
        detail: { config: getSelectedConfig(), ...props }
        }));
    }

    function openBucketFormChartModalBuilder() {
        openBucketModal({ fromChart: true});
    }

    function openBucketModalBuilder() {
        openBucketModal({ isNew: true, currentModal: 'BUILDER' });
    }
</script>

```

</div>
