---
id: custom-events
title: Using Custom Events
sidebar_label: Using Custom Events
tags: [Software Developer]
sidebar_position: 3
displayed_sidebar: getting-started
---
<div style={{textAlign: "justify"}}>

Custom events enable Qrvey Software Developers to handle custom scenarios. This article describes several custom events that can be triggered by Qrvey widgets. The host application can be programmed to listen to these events and then perform its own custom tasks. The Dashboard Builder and Dashboard View widgets support the following custom events:
* Dashboard Loaded Event
* Items Loaded Event

## Dashboard Loaded Event
The Dashboard Loaded event `qvDSHPageLoaded` is emitted when the dashboard is loaded (and the “loading” spinner is no longer displayed) in the Dashboard Builder or Dashboard View widget. 

```js
const event = new CustomEvent('qvDSHPageLoaded');

document.addEventListener(“qvDSHPageLoaded”, () => { 
    // Do Something
});

document.dispatchEvent(event);
```

## Items Loaded Event
The Items Loaded event `qvDSHItemsLoaded` is emitted when all charts in the viewable area have rendered (and their corresponding “loading” spinners are no longer displayed) in the Dashboard Builder or Dashboard View widget. 

```js
const event = new CustomEvent('qvDSHItemsLoaded');

document.addEventListener(“qvDSHItemsLoaded”, () => { 
    // Do Something
});

document.dispatchEvent(event);
```

</div>