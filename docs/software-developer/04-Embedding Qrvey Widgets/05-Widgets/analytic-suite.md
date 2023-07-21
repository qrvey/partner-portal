---
id: widget-analytic-suite
title: Analytic Suite Widget
sidebar_label: Analytic Suite Widget
tags: [Software Developer]
sidebar_position: 4
displayed_sidebar: software-developer
---
<div style={{textAlign: "justify"}}>


When embedded in an application, the Analytic Suite widget enables users to display the distinct views available on the analyze side (i.e Summary, Table, Custom, and Metric views).

## Before You Begin
* Review the [Widget Quick Start Guide](../widget-quick-start-guide.md) for an overview of the widget components. 
* Obtain your unique API key. It was provided in the welcome email that you received when your Qrvey instance was created. For more information, see [Frequently Asked Questions (FAQs)](../../../getting-started/faqs.md).
* This widget supports using security tokens for secure authentication. For more information, see [Embedding Widgets Using a Security Token](../embedding-widgets-security-token.md). 

## Get the Helper Code
1. In Qrvey Composer, display the **Analyze** tab for the desired dataset.  
2. Click the **Embedding Options** button in the upper right corner of the page. A dialog displays with an HTML tag, a JSON configuration object, and the Widget Launcher script tag.
4. Click **Copy** to copy the code, and then paste it into your preferred editor. 

## Embed the HTML tag
Identify where you would like this widget to display in your application, and then add the HTML tag in that location. 

The HTML tag for this widget is:

`<an-dashboard config="anSuiteConfig"></an-dashboard>`

## Embed the Widget Launcher Script Tag
Add the widget launcher script tag to your application. Note that this widget requires an additional script for proper support in all browsers. 

For reference, the launcher script code is:

```json
<script type="module" src="https://<WIDGETS_URL>/qrvey-an-widgets/an-dashboard/andashboard/andashboard.esm.js"></script>
<script nomodule src="https://<WIDGETS_URL>/qrvey-an-widgets/an-dashboard/andashboard/andashboard.js"></script>
```

## Set Properties in the JSON Configuration Object
Define the JSON configuration object by starting with the script provided in the helper code, and then adding additional configuration properties as needed. The script provided contains only the required properties. For reference, an example is copied below. The helper code that you obtained above should include the unique values indicated with brackets (“&lt;&gt;”):

```json
<script>
var anSuiteConfig = {
   "api_key": "<API_KEY>",
   "app_id": "<APP_ID>",
    “domain”: 'https://<your_qrvey_domain>',
   "user_id": "<USER_ID>",
   "qrveyid": "<QRVEY_ID>",
   "settings": {
      "view": "CUSTOM_VIEW"
   }
}
</script>
```

When complete, add the JSON configuration object to your application. 

### Configuration Object Properties
The following table lists the properties associated with this widget. 


| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **api_key** | `String`, Your organization’s unique API token required to access the Qrvey platform. Never expose your organization’s API key to external users. In Production environments, use a secure token (qv_token) to encrypt the API key. | Yes, if the qv_token is not provided |
| **qv_token** | `String`, A secure token encrypted via JWT to authenticate and authorize embedded widgets. Establishes a secure connection between the host application and the Qrvey system. For more information, see [Embedding Widgets Using a Security Token](../embedding-widgets-security-token.md). | Yes, if the api_key is not provided |
| **app_id** | `String`, ID of the Qrvey application containing the dashboard, report, automation, or web form. | Yes |
| **domain** | `String`, The base URL of your instance of the Qrvey platform. | Yes | 
| **user_id** | `String`, ID of the Qrvey Composer user that owns the application that is being embedded. Optional: You can alternately specify the user ID in a Qrvey session cookie. | Yes, if the user_id is not included in a session cookie  |
| **timezone** | `Object <TimezoneConfiguration>`, Overrides the time zone setting in Qrvey Admin Center. For more information, see [Configuring Time Zone Settings](../../10-Timezone%20Settings/timezone-support.md).  | No | 
| **qrveyid** | `String`, ID of the dataset being used.| Yes |
| **settings** | `Object`, general configuration in order to set some behaviors. | No |
| **settings.view** | `String`, determines the initial view to display and it accepts: <br /> * SUMMARY_VIEW/MULTI_PANEL <br />* TABULAR_VIEW<br />* CUSTOM_VIEW<br />* METRIC_VIEW<br />Default: MULTI_PANEL (alias for SUMMARY_VIEW)| No |
| **settings.mode** | `String`, determines displaying the complete layout or the views only. It depends on set view and it accepts: <br />* COMPLETE <br />* SIMPLE<br />* Default: COMPLETE | No |
| **settings.displayMode** | `String`, changes the style and extends the layout onto the entire container. <br />* FULL <br />* NORMAL <br />* Default: NORMAL| No |
| **userFilters** | `Object`, the filters object generated by the user. This will be applied in internal components to filter the data. I.e. AN Single Panel. <br /> {filters: `<Filters Key Structure>`} <br /> To see more info about filter structure, visit https://documenter.getpostman.com/view/1152381/TVejh9vP#5e81efdb-5e32-4fca-892f-090dc0388e33 | No | 
| **themeid** | String, theme ID to use in the component | No
| **settings.styles** | `Object`, styles options object. These properties will extend from the current theme | No
| **settings.styles.chartsTitle** | `String`, set the charts title color | No | 
| **settings.styles.chartsFontFamily** | `String`, set the charts font family | No | 
| **settings.styles.axisDataLabels** | `String`, set axis labels color in charts | No | 
| **settings.styles.dataLabels** | `String`, color for data labels in charts | No | 
| **settings.styles.valuesMain** | `String`, set color for axis ticks values in charts | No | 
| **settings.styles.chartsLegends** | `String`, color for charts legends labels | No | 
| **settings.styles.chartsTooltips** | `String`, color for charts tooltips | No |  
| **settings.styles.tableHeaderFont** | `String`, set color for table header texts | No | 
| **settings.styles.chartsMain** | `String`, set color for chart data points like bars, symbols and lines. | No | 
| **settings.styles.themePalette** | `Array`, contains a maximum of 20 colors that will be used for chart data points. | No | 
| **custom_tokens** | `Object`, contains a set of custom tokens, each of them in turn, receives an array of with the list of tokens.<br /><br />{<custom token 1>: [<token 1>: “token 1”, <token 2>: “token 2”]} | No |



## Samples
The following samples demonstrate how this widget can be used in an HTML page. 

### Sample Dashboard
The following sample displays a simple dashboard. 

To use this code in your application, replace the values in brackets (“&lt;&gt;”) with your own values. 

**HTML tag:**

`<an-dashboard config="configDashBoard"></an-dashboard>`

**Widget launcher script:**

```json
<!-- your launcher js link (replace with your js link) -->
<script type="module" src="https://<WIDGETS_URL>/your_qrvey_an_widgets_container/an-dashboard/andashboard/andashboard.esm.js"></script>
<script nomodule src="https://<WIDGETS_URL>/your_qrvey_an_widgets_container/an-dashboard/andashboard/andashboard.js"></script>
```

**JSON configuration object:**

```json
<script>
var configDashBoard = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "user_id": "<USER_ID>",
    "qrveyid": "<QRVEY_ID>",
    "settings": {
       "view": "CUSTOM_VIEW"
    }
}
</script>
```


### Sample with Filter
The following sample displays with a filter object generated by a user. 

To use this code in your application, replace the values in brackets (“&lt;&gt;”) with your own values.

**HTML tag:**

`<an-dashboard config='config'></an-dashboard>`

**Widget launcher script:**

```json
<!-- your launcher js link (replace with your js link) -->
<script type="module" src="https://<WIDGETS_URL>/your_qrvey_an_widgets_container/an-dashboard/andashboard/andashboard.esm.js"></script>
<script nomodule src="https://<WIDGETS_URL>/your_qrvey_an_widgets_container/an-dashboard/andashboard/andashboard.js"></script>
```

**JSON configuration object:**

```json
<script>
var configDashBoard = {
    "api_key": "<API_KEY>",
    "app_id": "<APP_ID>",
    "domain": "https://your_qrvey_domain",
    "user_id": "<USER_ID>",
    "qrveyid": "<QRVEY_ID>",
    "userFilters": {
       "filters": [{
           "operator": "AND",
           "expressions": [
                {
                  "qrveyid": "<QRVEY_ID>",  
"enabled": true,
                    "questionid": "<QUESTION_ID>",
                    "validationType": "<VALIDATION_TYPE>",
                    "value": [
                       "<VALUE_TO_FILTER_1>", 
                       "<VALUE_TO_FILTER_2>"
                    ] 
                }
           ]
       }]
    }
}
</script>

<script>
function applyNewFilter() {
    window.dispatchEvent(new CustomEvent('anApplyUserFilters', {
      detail: {
        "filters": [{
           "operator": "AND",
           "expressions": [
                {
                  "qrveyid": "<QRVEY_ID>"  
"enabled": true,
                    "questionid": "<QUESTION_ID>",
                    "validationType": "<VALIDATION_TYPE>",
                    "value": [
                       "<VALUE_TO_FILTER_3>"
                    ] 
                }
           ]
       }]
      }
    }));
  }
</script>
```

### Widget Sample in CodePen

<iframe
  allowFullScreen
  className="cp_embed_iframe "
  frameBorder={0}
  height={838}
  width="100%"
  name="cp_embed_1"
  scrolling="no"
  src="https://codepen.io/qrveysamples/embed/85b726392661f65622b22087423f23db?height=838&theme-id=light&default-tab=result&user=qrveysamples&slug-hash=85b726392661f65622b22087423f23db&pen-title=Sample-%20Qrvey%20Analytic%20Suite&name=cp_embed_1"
  style={{ width: "100%", overflow: "hidden", display: "block" }}
  title="Sample- Qrvey Analytic Suite"
  loading="lazy"
  id="cp_embed_85b726392661f65622b22087423f23db"
/>

</div>