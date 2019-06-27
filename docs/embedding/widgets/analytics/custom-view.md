---
id: widget-custom-view
title: Custom View
sidebar_label: Custom View
---

## 1. Configuration Object
To configure Custom View, use the following JSON schema as configuration object:
 
```
{
    "domain": "<QRVEY_CORE_URL>",	
    "api_key": "<API_KEY>",
    "user_id": "<USER_ID>"
    "app_id": "<APP_ID>",
    "qrveyid": "<QRVEY_ID>",
    …<ANOTHER_CONFIGURATION>
}
```

**Properties and Values for Each Property:**
Custom View properties are defined below:

* **domain**: `String`, Qrvey Core URL.
* **api_key**: `String`, Api Key. Código de identificación para conectarse a los datos.
* **user_id**: `String`, Identificador de usuario.
* **app_id**: `String`, Identificador de la aplicación de Qrvey.
* **qrveyid**: `String`, Identificador del Qrvey.

**Others configuration properties**
```
{
    "charts_config": {
        "insidemenu": {
            "seedata": <true|false>,
            "filterby": <true|false>,
            "drilldown": <true|false>
        },
        "options": {
            "dragger": <true|false>,
            "filter": <true|false>,
            "menu": <true|false>
        }
    },
    "filters": <FILTERS_OBJECT>,
    "logo": <LOGO_NAME>
}
```
 
* **logo**: `String`, URL donde se localiza el ícono o imagen del logo
* **filters**: `Object`, Objeto para aplicar filtros
* **charts_config**: `Object`, Configuración para los paneles personalizados, recibe algunas propiedades para cambiar la apariencia o comportamiento de los paneles
* **insidemenu**: `Object`, Configuración dentro del menú
* **seedata**: `Boolean`
* **filterby**: `Boolean`
* **drilldown**: `Boolean`
* **options**: `Object`, Configuración general de los paneles personalizados
* **dragger**: `Boolean`
* **filter**: `Boolean`
* **menu**: `Boolean`


## 2. Event Listeners

* ### ON_CLOSE_BUCKET_MODAL
    Listener para refrescar el componente Custom View cuando se cierra el Modal de Buckets.

    | Property   | Value                                                                                            | Required |
    |------------|--------------------------------------------------------------------------------------------------|----------|
    | **hasChanges** | `Boolean`, Condición para establecer cambios dentro de Summary View siempre y cuando hubo cambios. | Yes|


* ### ON_AN_CHART_BUILDER_SAVED
    Listener cuando el chart personalizado es guardado.

    | Property   | Value                                      | Required |
    |------------|--------------------------------------------|----------|
    | **chartConfiguration** | `Object`, Chart Configuration. | Yes|

* ### ON_AN_DELETE_CHART
    Listener para la ejecución de actualización de los paneles cuando un chart es eliminado.
    
    Dentro de detail del Event se encontrarán las demás propiedades que recibirá la función: 

    | Property   | Value                                      | Required |
    |------------|--------------------------------------------|----------|
    | **chartConfiguration** | `Object`, Chart Configuration. | Yes|

* ### ON_AN_CHART_DUPLICATED
    Listener para refrescar el componente cuando el chart personalizado es diplicado.

    Dentro de detail del Event se encontrarán las demás propiedades que recibirá la función: 

    | Property   | Value                                      | Required |
    |------------|--------------------------------------------|----------|
    | **chartConfiguration** | `Object`, Chart Configuration. | Yes|

* ### ON_AN_FILTERS_APPLIED
    Listener para aplicar nuevos filtros a la vista.

    Dentro de detail del Event se encontrarán las demás propiedades que recibirá la función: 

    | Property   | Value                                      | Required |
    |------------|--------------------------------------------|----------|
    | **preferenceFilters** | `Object`, Filter Preferences | Yes|
    | **requestFilters** | `Array`, Filters by prefereces from request. | Yes|
    | **tabId** | `String`, identificador del tab, si aplica (Report Builder o Page Builder) | Yes|


## 3. Methods
* ### downloadView
    Descarga la información visible dentro de Custom View, dependiendo del tipo de archivo.

    | Param   | Description                                      | Required |
    |------------|--------------------------------------------|----------|
    | **type** | `String`, El tipo de descarga. Pueden ser `csv`, `pdf`, `jpg`. | Yes|

## 4. Example
```
<script src="https://s3.amazonaws.com/cdn.qrvey.com/qrvey-an-widgets-dev/custom-view/ancustomview.js"></script>
 
<script>
window.customConfig = {
	domain: 'https://qdev.qrvey.com',
	api_key: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0',
	qrveyid: "Nw9eKKe",
	app_id: "lgVBzjr",
	user_id: "c0T3iVh",
	charts_config: {
  	insidemenu: {
    	seedata: false,
    	filterby: true,
        drilldown: true
  	}
}
</script>
<an-custom-view config="customConfig"></an-custom-view>
```