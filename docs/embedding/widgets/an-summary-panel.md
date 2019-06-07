---
id: an-summary-panel
title: AN Summary Panel - "<an-summary-panel/>"
sidebar_label: AN Summary Panel
---

This Summary View widget require `"<my_cdn>"/summary-panel/ansummarypanel.js` script file and 
use the `"<an-summary-panel>"` Custom HTML Tag.


## 1. Configuration Object

To configure a Summary Panel widget, use the following JSON schema as Configuration Object:

```javascript
{
    domain: "<QRVEY_CORE_URL>",
	api_key: "<API_KEY>",
    user_id: "<USER_ID>"
    app_id: "<APP_ID>",
    qrveyhash: "<QRVEY_HASH>",
    qrveyid: "<QRVEY_ID>",
    questionid: "<QUESTION_ID>"
}
```

**Properties and Values:**

- **domain:** `String`, Qrvey Core URL.
- **api\_key:** `String`, Api Key. Código de identificación para conectarse a los datos.
- **user\_id:** `String`, Identificador de usuario.
- **app\_id:** `String`, Identificador de la aplicación de Qrvey.
- **qrveyhash:** `String`, Qrvey Hash.
- **qrveyid:** `String`, Identificador del Qrvey.
- **questionid:** `String`, Identificador de la pregunta o columna

**Others configuration properties**
```javascript
{
    widgetConfig: {
        height: "<String>"
        filters: "<true|false>",
        showIndex: "<Boolean>",
        globalFilter: "<Boolean>",
        bitbucket: "<Boolean>",
        search: "<Boolean>",
        branch: "<Boolean>",
        menu: "<Boolean>",
        download: "<Boolean>",
        embed: "<Boolean>",
        viewAction: "<Boolean>",
        sort: "<Boolean>",
        activeView: "<String>",
        groupingActive: "<String>",
        sortingActive: "<String>",
        displayingActive: "<String>",
        drillConfig: {
            enabled: "<Boolean>",
            persist: "<Boolean>"
        }
    },
    tab_id: "<String>",
    page_id: "<String>"
}
```

- **widgetConfig**: `Object`, Configuración para el panel, recibe algunas propiedades para cambiar la apariencia o comportamiento de los paneles
- **height**: `String`, Longitud o porcentaje del alto que tomará el panel
- **filters**: `Boolean`, Activar o desactivar el botón de filtros dentro de los paneles.
- **showIndex**: `Boolean`. Condición para habilitar los índices dentro de los paneles.
- **globalFilter**: `Boolean`,
- **bitbucket**: `Boolean`,
- **search**: `Boolean`,
- **branch**: `Boolean`, activar los branches de los paneles si existen.
- **menú**: `Boolean`, activar el menú del panel.
- **download**: `Boolean`, activar las opciones de descarga de paneles
- **embed**: `Boolean`, establece comportamientos y apariencia cuando el panel está embebido, por ejemplo, no mostrar branches, ejecutar filtros externos al componente e ignorar el showIndex
- **viewAction**: `Boolean`, mostrar el listado de cambio de vista.
- **sort**: `Boolean`, mostrar el listado de organización de datos.
- **activeView**: `String`. Tipo de Vista para mostrar los resultados; dependerá del tipo de panel.
- **groupingActive**: `String`, Tipo de agrupación de resultados para ciertos tipos de panel; no es requerido para todos los tipos de panel.
- **sortingActive**: `String`, Tipo de organización de resultados. Dependerá del tipo de panel; no es requerido para todos los tipos de panel.
- **displayingActive**: `String`, Tipo de display para el tipo de panel Lookup. Muestra varios títulos para los resultados.
- **drillConfig**: `Object`, configuración para el drilldown presente en algunas visualizaciones de los paneles.
- **enabled**: `Boolean`, habilitar o deshabilitar el drilldown del panel.
- **persist**: `Boolean`, mantener el drilldown con la última configuración activada.
- **tab\_id**: `String`, identificador opcional del tab de Report Builder y Page Builder para establecer preferencias y filtros.
- **page\_id**: `String`, identificador opcional de la página en Page Builder para establecer filtros.



## 2. Event Listeners:

* ### body:click

    Listener que cierra los menus del panel cuando se clickea por fuera de su contenido.

* ### ON\_AN\_SAVE\_PREFERENCE\_COMPONENT

    Listener para guardar las preferencias del panel.

    _`event.detail`_ Object:

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **preferences** | ``any``, Objeto con las preferencias del panel | Yes |



* ### triggerFilteringPanel

    Listener para guardar las preferencias del filtro.

    _`event.detail`_ Object:

    | **Value** | **Required** |
    | --- | --- |
    | ``any``, el filtro seleccionado a guardar. | Yes |

* ### triggerGroupingPanel

    Listener para guardar las preferencias del grouping.

    _`event.detail`_ Object:

    | **Value** | **Required** |
    | --- | --- |
    | `any`, el group seleccionado a guardar. | Yes |

* ### triggerDisplayingPanel

    Listener para guardar las preferencias del displaying.

    _`event.detail`_ Object:

    | **Value** | **Required** |
    | --- | --- |
    | `any`, el display seleccionado a guardar. | Yes |

* ### triggerDownload

    Listener para descargar la información del panel.

    _`event.detail`_ Object:

    | **Value** | **Required** |
    | --- | --- |
    | `String`, el tipo de descarga del panel. Los tipos de descarga son: `csv`, `pdf`, `jpg` | Yes |

* ### triggerToggleBranch

    Listener para mostrar y ocultar las branches de un panel.

    Dentro de _detail_ del _Event_ se encontrarán la propiedades que recibirá la función:

    | **Property** | **Value** | **Required** |
    | --- | --- | --- |
    | **status** | `Boolean`, el estado del branch. True para activo, False para inactivo. | Yes |
    | **close** | `Boolean`, el branch cerrado o mostrado. |   |



## 3. Methods:

* ### getPanelHeight

    Obtiene la altura del panel.

    **Returns**: `Number`. La altura del panel.


* ### getHtmlToDownload

    Obtiene el HTML del panel para descargarlo.

    | **Param** | **Description** | **Required** |
    | --- | --- | --- |
    | **width** | `Number`, El ancho del panel que se desea descargar. | Yes |
    | **height** | `Number`, el alto del panel que se desea descargar. | Yes |
    
    **Returns**: `String`. El HTML del panel.

* ### resize

    Reajusta la configuración del componente



## 4. Example
```xml
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/summary-panel/ansummarypanel.js"></script>
 
<script>
  window.summaryPanelConfig = {
    domain: 'https://qdev.qrvey.com',
    api_key: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0',
    qrveyid: "Uag5tG4NE",
    app_id: "S4tLP9k",
    user_id: "FyHYizH"
    widgetConfig: {
      height: '100%'
    }
  }
</script>

<an-summary-panel config="summaryPanelConfig"></an-summary-panel>
```