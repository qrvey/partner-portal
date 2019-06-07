---
id: an-summary-view
title: AN Summary View - <an-summary-view/>
sidebar_label: AN Summary View
---

This Summary View widget require `<my_cdn>/summary-panel/ansummarypanel.js` and `<my_cdn>/summary-view/ansummaryview.js` scripts file and 
use the `<an-summary-view>` Custom HTML Tag


## 1. Configuration Object
```javascript
{
  domain: "<QRVEY_CORE_URL>",	
  api_key: "<API_KEY>",
  user_id: "<USER_ID>"
  app_id: "<APP_ID>",
  qrveyhash: "<QRVEY_HASH>",
  qrveyid: "<QRVEY_ID>",
}
```
  **Properties and Values**

* **domain:** `String`, Qrvey Core URL.
* **api_key:** `String`, Api Key. Código de identificación para conectarse a los datos.
* **user_id:** `String`, Identificador de usuario.
* **app_id:** `String`, Identificador de la aplicación de Qrvey.
* **qrveyhash:** `String`, Qrvey Hash.
* **qrveyid:** `String`, Identificador del Qrvey.

**Others configuration properties**
```json
{
  "panelConfig": {
    "drillConfig": {
      "persist": <true|false>,
      "enabled": <true|false>
    },
    "filters": <true|false>
  }
}
```

* **filters:** ``Boolean``. Activar o desactivar el botón de filtros dentro de los paneles.
* **panelConfig:** `Object`. Configuración para el panel, recibe algunas propiedades para cambiar la apariencia o comportamiento de los paneles
  * **drillConfig:** `Object`. configuración para usar la funcionalidad de Drill-down que se usan en los histogram charts
    * **persist:** ``Boolean``. Condición para establecer si necesitan que los filtros del Drill-down escogidos persistan en el tiempo.
    * **enabled:** ``Boolean``. Condición para habilitar la funcionalidad de Drill-down

## 2. Event Listeners:

* ### ON_CLOSE_BUCKET_MODAL

  Listener para refrescar el componente Summary View cuando se cierra el Modal de Buckets.

  _`event.detail`_ object:

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **hasChanges** | `Boolean`, Condición para establecer cambios dentro de Summary View siempre y cuando hubo cambios. | Yes |



* ### triggerOpenBranch

  Listener para agregar, dentro del Summary View, los paneles extras de branches.

  _`event.detail`_ object:

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **questionid** | `String`, El identificador de la pregunta relacionada a los branches | Yes |
  | **questions** | `Array`, Conjunto de branches concatenadas en un mismo nivel | Yes |
  | **branches** | `Array`, Conjunto de branches. | Yes |



* ### triggerCloseBranch

  Listener para ocultar, dentro del Summary view, los paneles extras de branches

  _`event.detail`_ object:

  | **Property** | **Value** | **Required** |
  | --- | --- | --- |
  | **closeQuestion** | `Boolean`, Condición para cerrar los branches | Yes |
  | **questionid** | `String`, El identificador de la pregunta relacionada a los branches | Yes |
  | **hasBranches** | `Boolean`, propiedad para concoer si existen branches o no. | Yes |
  | **element** | `HTMLAnSummaryHeaderElement`, Elemento html del header. | Yes |
  | **inBranch** |   | No |

## 3. Methods:

* ### applyFilters

  Establece los filtros entrantes por parámetro

  | **Param** | **Description** | **Required** |
  | --- | --- | --- |
  | **filters** | `Array`, Conjunto de filtros. | Yes |

* ### checkBranchOpen

  Chequea si los paneles de branch se están mostrando a partir del questionId

  | **Param** | **Description** | **Required** |
  | --- | --- | --- |
  | **questionid** | `String`, Identificador de la pregunta. | Yes |
  
  **Returns :** `Boolean`.

* ### downloadData

  Descarga la información visible dentro de Summary View, dependiendo del tipo de archivo.

  | **Param** | **Description** | **Required** |
  | --- | --- | --- |
  | **type** | `String`,El tipo de descarga. Pueden ser `csv`, `pdf`, `jpg`. | Yes |

  **Returns** `<Promise | undefined>`, Si no existe questions a descargar devolverá `undefined`, de lo contrario devolverá una `Promise` con los datos.


* ### reloadAllSummaryView

  Recarga el Summary View nuevamente.


## 4. Example:
```xml
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/summary-panel/ansummarypanel.js"></script>
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/summary-view/ansummaryview.js"></script>
 
<script>
  window.summaryConfig = {
    qrveyhash: '745b5b74af7a5d2c678683f734b69f5c',
    domain: 'https://qdev.qrvey.com',
    api_key: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0',
    qrveyid: "Uag5tG4NE",
    app_id: "S4tLP9k",
    user_id: "FyHYizH"
    panelConfig: {
      drillConfig: {
        persist: true,
        enabled: true
      },
      filters: true
    }
  }
</script>
<an-summary-view config="summaryConfig"></an-summary-view>
```