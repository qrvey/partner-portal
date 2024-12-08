---
id: multi-datasets-one-filter
title: How to Make Filters From Multiple Datasets Work With One Filter Panel
sidebar_label: How to Make Filters From Multiple Datasets Work With One Filter Panel
---
Embedding visualization panels inside your application is a straightforward task (see 
<a href="/docs/embedding/widgets/analytics/single-panel/">Single Panel Widget</a>). Enabling filtering on those individual panels is also easy and a matter of setting the **panel.header.filter** property in the widget config. 
But what if you have multiple panels, based on different datasets, and you wish all of the filters use a single filter panel and filter modal? 

1. First, embed the different panels/charts you want on your view. 
2. Now it’s time to embed the Filter Panel and Filter Modal widgets, which will empower your users to filter data. 

```<an-filter-panel config=”configObject”> ```

```<an-filter-modal config=”configObject”>```

Both widgets will receive a base configObect with *domain, api_key, user_id*, and *app_id*. 

```
var configObject = {
  domain: 'https://sandbox.qrveyapp.com',
  api_key: 'DOCUMENTATION_DEMO_API_KEY',
  user_id: 'ZreovaM',
  app_id: 'H2UuWJeIp',
}
```
However,  ```an-filter-modal``` needs an extra property called *datasets*, which will let it know that there are more than 1 datasets involved in the view. The structure of that property should be:

```
datasets: [
 { dataset_id: 'OMIs-ElFrN' },
 { dataset_id: 'CYsvkmcnAq' }
]
```



The complete *configObject* for ```an-filter-modal``` will be:

```
var configObject = {
  domain: 'https://sandbox.qrveyapp.com',
  api_key: 'DOCUMENTATION_DEMO_API_KEY',
  user_id: 'ZreovaM',
  app_id: 'H2UuWJeIp',
  datasets: [
    { dataset_id: 'OMIs-ElFrN' },
    { dataset_id: 'CYsvkmcnAq' }
  ]
}
```

That’s it!
Don’t forget to add your Analytic Suite launchers in case you haven’t done that yet (see <a href="/docs/embedding/widgets/analytics/analytic-suite/">Analytic Suite Documentation</a>). 

>**Note**: The same launchers used to embed single panels will work for filter panel and filter modal widgets.

## Sample Code
https://codepen.io/qrveysamples/pen/654128586046f8141bab9bfcef703acc

<iframe
  className="cp_embed_iframe "
  frameBorder={0}
  height={838}
  width="100%"
  name="cp_embed_1"
  scrolling="no"
  src="https://codepen.io/qrveysamples/embed/654128586046f8141bab9bfcef703acc?height=838&theme-id=34531&default-tab=result&user=qrveysamples&slug-hash=52bb4236753fe85a433228dd11d437e2&pen-title=Sample-%20Qrvey%20Report%20Builder&name=cp_embed_1"
  title="Sample- Qrvey Report Builder"
  loading="lazy"
  id="cp_embed_654128586046f8141bab9bfcef703acc"
  style={{ width: "100%", overflow: "hidden", display: "block" }}
/>




