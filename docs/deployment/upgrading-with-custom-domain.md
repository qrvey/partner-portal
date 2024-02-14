---
id: upgrading-with-custom-domain
title: Upgrading to Version 8.4 or Later with a Custom Domain
sidebar_label: Upgrading with Custom Domain
tags: [CloudOps Engineer]
sidebar_position: 7
displayed_sidebar: deployment-guide
---

<div>

This article applies to all customers and trials upgrading to version 8.4 or later of the Qrvey platform **AND** are using a custom domain URL for Qrvey Composer.

Starting with version 8.4, a new URL called API Domain URL has been added which will eventually be used for all backend API calls. The intent is to use two separate URLs. The base URL will be used to open Qrvey Composer, for example, `xyz.qrveyapp.com`. The backend URL will be used for API calls, for example, `api-xyz.qrveyapp.com`. 

For all deployed instances of the Qrvey platform, if you are using the default Qrvey Composer URL (`xyz.qrveyapp.com`), the upgrade process will automatically create and set up the new API domain URL (`api-xyz.qrveyapp.com`). As of version 8.4, you don’t need to make any changes to your embedding code. All old URLs will still work with the old domain. Going forward, we’ll build new APIs with the new API domain, and gradually move all old API URLs to the new domain. After that we’ll deprecate the old domain with a deprecation schedule.

If you are using a custom domain for your Qrvey Instance, described under "Change Composer URL" in [Customizing Qrvey Deployment](https://partners.qrvey.com/docs/deployment/customizing-qrvey-deployment#change-composer-url), you will need to set up a new API domain with appropriate SSL Certificate and CNAME records. Perform the following steps *after* upgrading to version 8.4 or later of the Qrvey platform. 

To set up a new API domain:

1. Login to AWS Account and switch to the region where Qrvey instance is deployed.
2. Go to AWS Certificate Manager (ACM). Identify the certificate you are using for the Qrvey Domain, for example, `qrvey.xyzapp.com`.  
    a. If you have a wildcard certificate (like “*.xyzapp.com” from the example) then copy the **SSL_Certificate_ARN** and proceed to Step 3.  
    b. If you don’t have a wildcard certificate, create a new Certificate for the API Domain URL. You can use any URL. We recommend creating it as `api-<QrveyDomainURL>`. In the example above, the new URL would be `api-qrvey.xyzapp.com`.  
    c. Optional (Recommended): For the new Certificate use both Domains. Add the existing Qrvey domain as the main domain and the new API domain as an additional name. For example, [qrvey.xyzapp.com](http://qrvey.xyzapp.com) will be the main domain and [api-qrvey.xyzapp.com](http://api-qrvey.xyzapp.com) will be the additional name.  
    d. Optional (Recommended): Use DNS validation so that SSL Certificate will automatically renew every year.  
    e. Verify Domain ownership for this new certificate and copy the **SSL_Ceritificate_ARN** to use in next steps. Make sure the Certificate status is Active or Issued.  
3. Upgrade your Qrvey Platform to version 8.4 or later. 
4. Once the upgrade is done, navigate to AWS Cloudformation service and search for stacks with `CodePipeline` in their name. For the five pipeline cloudformation stacks, follow these steps to update the URL and SSL Certificate.
    a. `QrveyCodePipeline`  
        1. Click on Update.  
        2. Pick Use current template.  
        3. Set the value for “APIDomainURL” to the new API domain URL. for example, [api-qrvey.xyzapp.com](http://api-qrvey.xyzapp.com). Do not add “https://” to the URL.
        4. Click to update the stack and wait for the update to finish.  
        5. Go to AWS Code Pipeline service and click on Release Change for “Qrvey_xxxxx_Worker” Pipeline.  
    b. `WidgetsCodePipeline`    
        1. Click on Update.  
        2. Pick Use current template.  
        3. Set the value for “APIDomainURL” to the new API domain URL. for example, [api-qrvey.xyzapp.com](http://api-qrvey.xyzapp.com). Do not add “https://” to the URL.  
        4. Click to update the stack and wait for the update to finish.  
        5. Go to AWS Code Pipeline service and click on Release Change for “Qrvey_xxxxx_Widgets” Pipeline.  
    c. `DataRouterCodePipeline`  
        1. Click on Update.
        2. Pick Use current template.  
        3. Set the value for “APIDomainURL” to the new API domain URL. for example, [api-qrvey.xyzapp.com](http://api-qrvey.xyzapp.com). Do not add “https://” to the URL.  
        4. Click to update the stack and wait for the update to finish.  
        5. Go to AWS Code Pipeline service and click on Release Change for “Qrvey_xxxxx_DataRouter” Pipeline.  
    d. `MicroserviceCodePipeline`  
        1. Click on Update.  
        2. Pick Use current template.  
        3. Set the value for “APIDomainURL” to the new API domain URL. for example, [api-qrvey.xyzapp.com](http://api-qrvey.xyzapp.com). Do not add “https://” to the URL.  
        4. Set the value for “APIDomainSSLCertARN” to the **SSL_Ceritificate_ARN** from Step 2 above.  
        5. Click to update the stack and wait for the update to finish.  
        6. Go to AWS Code Pipeline service and click on Release Change for “Qrvey_xxxxx_Microservice” Pipeline.  
    e. `AdminAppCodePipeline`  
        1. Click on Update.  
        2. Pick Use current template.  
        3. Set the value for “APIDomainURL” to the new API domain URL. for example, [api-qrvey.xyzapp.com](http://api-qrvey.xyzapp.com). Do not add “https://” to the URL.  
        4. Click to update the stack and wait for the update to finish.  
        5. Go to AWS Code Pipeline service and click on Release Change for “Qrvey_xxxxx_Worker” Pipeline.  
5. In AWS Cloudformation console, find the stack called `xxxxxMicroserviceStack1`.  
    a. Click on the Outputs tab.  
    b. Copy the value for key “ApiCustomDomain”. It will be cloudfront URL similar to “dxxxxxx.cloudfront.net”.  
6. Add the following CNAME record to your DNS
    `<APIDomainURL>      CNAME       <APICustomDomain from step 5>`. For example, `“api-qrvey.xyzapp.com” CNAME “dxxxxxx.cloudfront.net”`.  

Test to make sure APIDomainURL is accessible.

</div>