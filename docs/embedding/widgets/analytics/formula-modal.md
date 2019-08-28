---
id: widget-formula-modal
title: Formulas Modal
sidebar_label: Formulas Modal
---

<div style="text-align: justify">

This document shows how to implement Tabular View.

Inside of this document, we will check what configuration object, event, listeners, menthods are needed to widget works.

> This Formulas Modal widget requires `"<my_cdn>"/formula-modal/anformulamodal.js` script file and use of the `<an-formula-modal>` Custom HTML Tag.



## Configuration Object

Formulas Modal does not need configuration object passed as component property.



## Dispatched Events

* ### ON\_CLOSE\_FORMULAS\_MODAL

This event is emitted when the user closes formulas modal.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **hasChanges** | `Boolean`, Determines if Formulas Modal has been updated. | Yes |



## Listener Events

* ### ON\_AN\_OPEN\_FORMULAS\_MODAL

This event sets the formula data and the modal type, then displays modal.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **config** | `Object`, Configuration Object. | Yes |
| **isNew** | `Boolean`, Determines if Formulas Modal will edit or create formulas. | Yes |
| **currentModal** | `String`, type of Formulas Modal. It only accepts LIST or DETAIL as string. LIST is about to display a list of created formulas. DETAIL is about to display an specific formula. | Yes |
| **formula** | `Object`, The Formula column info. | No |
| **fromChart** | `Boolean`, Determines if Formulas Modal has been opened by Custom Chart. | No |
| **onReturn** | `Void`, Callback function that returns the formula object. | No |


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

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **domain** | `String`, Qrvey Core URL. | Yes |
| **api_key** | `String`, Main url of Qrvey Core platform. | Yes |
| **user_id** | `String`, Id of Qrvey User. | Yes |
| **app_id** | `String`, Id of Qrvey App. | Yes |
| **qrveyid** | `String`, Id of Qrvey Dataset/Webform. | Yes |


### Methods

No current methods for Formulas Modal



### Example

```
<button onclick="openFormulaModal()">Open Formulas Modal</button>
<button onclick="openFormulaModalByChart()">Open Formula Modal Chart</button>
<button onclick="openFormulaModalBuilder()">Open Formula Modal (Builder)</button>

<an-formula-modal></an-formula-modal>

<script>
    window.addEventListener('ON_CLOSE_FORMULAS_MODAL', function(event) {
        if (event.detail.hasChanges) {
            window.logText.innerHTML += ' - Has changes in Formulas, please reload your view!.<br />';
        } else {
            window.logText.innerHTML += ' - Has NO changes.<br />';
        }
    });

    const configs = {
        "domain": "http://qdev.qrvey.com",
        "api_key": "TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0",
        "app_id": "R1BDpOK",
        "user_id": "hVsMuVf",
        "qrvey_id": "p9HPSPs"
    };

   function openFormulaModal(props = {}) {
        window.dispatchEvent(new CustomEvent('ON_AN_OPEN_FORMULAS_MODAL', {
            detail: { config: getFormulaSelectedConfig(), ...props }
        }));
    }

    function openFormulaModalBuilder() {
        openFormulaModal({ isNew: true, currentModal: 'DETAIL' });
    }

    function openFormulaModalByChart() {
        openFormulaModal({
            fromChart: true, onReturn: (data) => {
                console.log(data);
            }
        });
    }
</script>
```
</div>