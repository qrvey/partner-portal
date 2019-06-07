---
id: widget-usermanagement
title: User Management Widget
---
*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas lacinia elit, a vestibulum neque facilisis id. Curabitur pellentesque ipsum eget tellus laoreet mollis. Pellentesque pellentesque lorem lacus, vitae aliquam ipsum lacinia id.*

## Widget Overview
*Maecenas ut purus vehicula, rhoncus odio ac, accumsan purus. Maecenas lacinia magna id ligula laoreet cursus. Vivamus varius turpis eu diam lacinia rutrum. Praesent blandit efficitur vehicula. Nullam interdum turpis sit amet quam vulputate scelerisque. Praesent sit amet pharetra massa, vel pulvinar dolor.*

## Samples
*Cras ac erat tempor, tincidunt massa in, porttitor erat. Sed sollicitudin leo vitae mauris tincidunt, eget pellentesque lorem molestie. Quisque id consectetur mi.* 

### Form Sample
In the following example, we have the design widget configuration object for a form, in which the creation of intro and end page have been disabled along with the options to duplicate and delete questions. Also some question types can't be added like look up and image upload. Note how we only use the admin app configuration object for form as the qrvey type we set is that, and the field types and options not included are set as enabled.

# User Management Widget

How to use it?

1. Put the script tag of the given launcher url in your website. For example:

```
<script​ ​type="​text/javascript​" src="​https://s3.amazonaws.com/cdn.qrvey.com/qrvey-user-management-dev/usermanagement.js​"></script >
```

2. Put the ​ **qrvey-workflows** ​tag​ ​in the container you want to embed the widget, and set the ​ **config** ​attribute of the tag with a valid JSON object to launch the widget. For example:

```
<qum-user-management config="config"></qum-user-management>
```

The schema of the config value has the following properties defined below (required items are bold):

```
{
    appid: ​'pzE019Y'​,
    domain: ​'https://qdev.qrvey.com'​,
    userid: ​'TQudSqH'​,
    apikey: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0-QRVEY-FRONTEND' 		
}
```

Properties and Values for Each Object:

Each object is defined by common properties. The table below provides general information about each property and value. The Required column indicates whether the property is required for the configuration object.

| **Property** | **Value** | **Required** |
| --- | --- | --- |
| **appid** | String. Application id | Yes |
| **domain** | String, Data server url | Yes |
| **userid** | String. User id | Yes |
| apikey | String, Optional, you can set up the widget without an api key if it&#39;s set in a qrvey session cookie. | No |