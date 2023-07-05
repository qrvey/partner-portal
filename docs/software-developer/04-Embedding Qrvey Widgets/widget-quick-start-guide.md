---
id: widget-intro
title: Widgets Quick Start Guide
sidebar_label: Widgets Quick Start Guide
tags: [Software Developer]
sidebar_position: 2
displayed_sidebar: software-developer
---

<div style={{textAlign: "justify"}}>

Qrvey provides developers with a comprehensive set of “Widgets” to allow them to seamlessly embed Qrvey’s self-service data collection, automation, or analytics functionalities to power their applications. Widgets are directly embedded into web applications using simple Javascript and custom HTML tags. Qrvey Widgets are available for embedding various front-end application features, including Web Form builders (Survey, Quiz, Forms, etc), Data Visualizations for both creating and consuming charts and report outputs, and more.

All of the widgets can be embedded using two distinct ways to handle authentication:

* The API key method

* The JWT method

**It is important to note that the first method of using API keys is solely for trial purposes and should not be used in production, as it exposes security risks.**

All CodePen samples use the first method and can be copied and edited to use your own API key and other case-specific attributes, such as IDs, in order to experiment with the widget and see its behavior. Please see the article on [Embedding Widgets Using Security Tokens](../04-Embedding%20Qrvey%20Widgets/embedding-widgets-security-token.md) for the proper production implementation. 

## Getting Started

It is a good idea to familiarize yourself with the Qrvey Composer’s UI and functionality before starting to use widgets, as many of the widgets are actually part of the Qrvey Composer and perform the same function. Therefore it is recommended that those ties are fully understood to enable you a seamless integration and provide the best user experience for your users. 

The general structure of every widget includes:

1. The widget **HTML tag**

2. A JSON **config object** that defines all of the widget’s configuration and features

3. The script tag for the **widget launcher**

This entire code can be copied from the Qrvey Composer UI where the widget is sourced. You can find the information on where to find this code for each widget in the respective article, but generally it can be copied either from a command in the three-dot menu or a <strong>&lt;/&gt;</strong> button in the widget UI in the Qrvey Composer.

![widget-guide](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/embedding/widgets/widget-intro.png#thumbnail-60)

</div>