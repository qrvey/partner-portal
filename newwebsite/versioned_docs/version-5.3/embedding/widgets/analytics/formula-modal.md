---
id: widget-formula-modal
title: Formulas Modal
sidebar_label: Formulas Modal
---
## No Public Doc

<div style={{textAlign: "justify"}}>

This document shows how to implement the Formulas Modal dialog.

Below you will find details of the configuration object, event, listeners, menthods available with this widget.

&gt; This Formulas Modal widget requires `"<my_cdn>"/formula-modal/anformulamodal.js` script file and use of the `<an-formula-modal>` Custom HTML Tag.

## Configuration Object

Formulas Modal does not need configuration object passed as component property. Instead the configuration is passed in with via the ON_AN_OPEN_FORMULAS_MODAL event.

## Dispatched Events

-   ### ON_CLOSE_FORMULAS_MODAL

This event is emitted when the user closes formulas modal.

| **Property**   | **Value**                                                        | **Required** |
| -------------- | ---------------------------------------------------------------- | ------------ |
| **hasChanges** | `Boolean`, Determines if Formulas Modal has been updated. | Yes          |

## Listener Events

-   ### ON_AN_OPEN_FORMULAS_MODAL

This event is used to set the formula data and the modal type, and display the modal dialog.

| **Property**     | **Value**                                                                                                                                                                               | **Required** |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **config**       | `Object`, Configuration Object.                                                                                                                                                  | Yes          |
| **isNew**        | `Boolean`, Determines if Formulas Modal will edit or create formulas.                                                                                                            | Yes          |
| **currentModal** | `String`, type of Formulas Modal. It only accepts LIST or DETAIL as string. LIST is about to display a list of created formulas. DETAIL is about to display an specific formula. | Yes          |
| formula          | `Object`, The Formula column info.                                                                                                                                               | No           |
| fromChart        | `Boolean`, Determines if Formulas Modal has been opened by Custom Chart.                                                                                                         | No           |
| onReturn         | `Void`, Callback function that returns the formula object.                                                                                                                       | No           |

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
