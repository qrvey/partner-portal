/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import PopularArticlesList from "../components/PopularArticles";
 import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
 import "react-tabs/style/react-tabs.css";
 
 const React = require("react");
 
 import Layout from "@theme/Layout";
 
 class Index extends React.Component {
   constructor(props) {
     super(props);
   }
 
   render() {
 
     const Category = () => {
       return (
         <div className="mainContainer">
           <div className="wrapper vertical-align">
             <div className="select-role" >
              <div style={{display:'flex'}}>
              <div className="highlights-star"></div>
               <h2 style={{fontSize:'1.7em'}}>
                 <b>New Highlights</b>

               </h2>
              </div>
               <div className="highlights-container">
                <div className="left">
                <a className="highlight-box" href="/docs/composer/Creating%20Charts/Chart%20Types/chart-type-radar-charts">
                  <div className="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-da"></div></div>
                  </div>
                  <div className="highlights-body-container">
                  <h3 className="highlight-title-body">Radar Chart</h3>
                    <p className="highlight-description">Radar chart, also known as a Polar, Spider, or Web chart, is mainly used to compare the performance of multiple items (values columns) in different areas (category column).</p>
                    </div> 
                  </a>
                  <a className="highlight-box" href="/docs/composer/Managing%20Your%20User%20Profile/scheduling-exports">
                  <div className="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-da"></div>
                    </div>
                  </div>
                  <div className="highlights-body-container">
                  <h3 className="highlight-title-body">Scheduling Exports</h3>
                    <p className="highlight-description">The Schedule Exports feature enables you to configure the platform to automatically produce exports at specified intervals and send them to an email address.</p>
                    </div> 
                  </a> 
                  <a className="highlight-box" href="/docs/composer/introduction-to-composer-ui">
                  <div className="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-da"></div>
                    </div>
                  </div>
                  <div className="highlights-body-container">
                  <h3 className="highlight-title-body">Introduction to the Qrvey Composer User Interface</h3>
                    <p className="highlight-description">This article provides an overview of the basic features of the Qrvey Composer user interface.</p>
                    </div> 
                  </a>
                <a className="highlight-box" href="/docs/admin/Content%20Deployment/autmated-content-deployment-segregated">
                  <div className="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-sa"></div>
                    </div>
                  </div>
                  <div className="highlights-body-container">
                  <h3 className="highlight-title-body">Automated Content Deployment - Segregated Data</h3>
                    <p className="highlight-description">Describes how to use the Qrvey API to perform an automated deployment of a source baseline application between two Qrvey instances in separate environments.</p>
                    </div> 
                  </a>
                  <a className="highlight-box" href="/docs/admin/Content%20Deployment/autmated-content-deployment-commingled">
                  <div className="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-sa"></div>
                    </div>
                  </div>
                  <div className="highlights-body-container">
                  <h3 className="highlight-title-body">Automated Content Deployment - Commingled Data</h3>
                    <p className="highlight-description">Describes how to use the Qrvey API to perform an automated deployment of a baseline shared data application and a baseline content application between two Qrvey instances in separate environments.</p>
                    </div> 
                  </a> 
                  <a className="highlight-box" href="/docs/software-developer/Working%20with%20Qrvey%20APIs/Qrvey%20API%20Tutorials/dataset-api">
                  <div className="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-sd"></div>
                    </div>
                  </div>
                  <div className="highlights-body-container">
                  <h3 className="highlight-title-body">Creating a Dataset Using the Qrvey API</h3>
                    <p className="highlight-description">Describes how to use the Qrvey API to create a dataset from scratch using the endpoint, Create Dataset.</p>
                    </div> 
                  </a>
                </div>
              </div>
             </div>
           </div>
         </div>
       );
     };

     const Videos = () => {
      return (
        <div className="mainContainer">
          <div className="wrapper vertical-align">
            <div className="select-role-videos" >
             <div style={{display:'flex'}}>
             <div className="highlights-video"></div>
              <h2 style={{fontSize:'1.7em'}}>
                <b>New Videos</b>

              </h2>
             </div>
              <div className="highlights-container">
               <div className="left">
                 <a className="highlight-box" href="/docs/video-training/release/version-8.4#dark-theme">
                 <div className="highlights-header-container">
                   <div className="highlight-title">Video <div className="highlights-icons icon-video"></div></div>
                   <div className="highlight-audience">Audience: 
                   <div className="highlights-icons icon-da"></div></div>
                 </div>
                 <div className="highlights-body-container">
                 <div className="preview-videos preview-1"></div>
                 <h3 className="highlight-title-body">Dark Theme</h3>
                   <p className="highlight-description">Adds the Dark theme to the list of out-of-the-box themes available for Qrvey applications. With the addition of this new theme, new properties, such as canvas background color and panel background color were added to all themes.</p>
                   </div> 
                 </a>
                 <a className="highlight-box" href="/docs/video-training/release/version-8.4#radar-chart">
                 <div className="highlights-header-container">
                   <div className="highlight-title">Video <div className="highlights-icons icon-video"></div></div>
                   <div className="highlight-audience">Audience: 
                   <div className="highlights-icons icon-sd"></div>
                   </div>
                 </div>
                 <div className="highlights-body-container">
                 <div className="preview-videos preview-2"></div>
                 <h3 className="highlight-title-body">Radar Chart</h3>
                   <p className="highlight-description">Adds a new type of chart that enables end users to compare the performance of multiple values in different areas.</p>
                   </div> 
                 </a> 
                 <a className="highlight-box" href="/docs/video-training/release/version-8.4#self-service-table-charts">
                 <div className="highlights-header-container">
                   <div className="highlight-title">Video <div className="highlights-icons icon-video"></div></div>
                   <div className="highlight-audience">Audience: 
                   <div className="highlights-icons icon-sa"></div>
                   </div>
                 </div>
                 <div className="highlights-body-container">
                  <div className="preview-videos preview-3"></div>
                 <h3 className="highlight-title-body">Self-Service Table Charts</h3>
                   <p className="highlight-description">Adds the option for end users to manipulate various table chart configurations directly from the Dashboard View widget, without the need to open the Chart Builder.</p>
                   </div> 
                 </a> 
               </div>
             </div>
            </div>
          </div>
        </div>
      );
    };

     const TopFold = () => (
       <div className="mainContainer main-index-container">
         <div className="wrapper vertical-align">
         <div className="howtousethissite-wrapper">
          <div className="howtousethissite-infocont">
            <div className="howtousethissite-info"></div>
          <h1>
            How to Use This Site
          </h1>
          </div>
          <p>
          Find your target persona. Qrvey provides tailored learning tracks for Platform Administrators, Software Developers, Data Analysts and CloudOps professionals. Quickly find the resources that are most relevant to your job function.
          </p>
        </div>
           <div className="persona-cont">
           <a href="/docs/user-persona/solution-architect" className="persona-box">
            <div className="solution image">
            </div>
            <h3><b>Solution Architects</b></h3>
            <p>Solution Architects use the Qrvey Admin Center to manage the infrastructure, users, and content, as well as configure Qrvey Composer.</p>
           </a>
           <a href="/docs/user-persona/data-analyst" className="persona-box">
            <div className="data image">
            </div>
            <h3><b>Data Analysts</b></h3>
            <p>Data Analysts use Qrvey Composer to set up datasets and create visualizations and dashboards to help end users find trends in their data.</p>
           </a>
           <a href="/docs/user-persona/software-developer" className="persona-box">
            <div className="software image">
            </div>
            <h3><b>Software Developers</b></h3>
            <p>Software Developers embed Qrvey widgets in their host applications and use Qrvey APIs to programmatically interact with the Qrvey platform.</p>
           </a>
           <a href="/docs/user-persona/cloudops-engineer" className="persona-box">
            <div className="cloud image">
            </div>
            <h3><b>CloudOps Engineers</b></h3>
            <p>CloudOps Engineers are AWS ninjas that deploy, upgrade, and monitor the instances of the Qrvey platform.</p>
           </a>
           </div>
         </div>
       </div>
     );
 
     const PopularArticles = () => {
      return (
        <div className="new-popular-articles">
          <h2 className="highlight-title-body"><b>Other Popular Content</b></h2>
          <PopularArticlesList/>
        </div>
      );
    };
 
     return (
       <div className="gray-background" id="home-page">
         <div style={{width:'100%'}}>
         <TopFold />
         <div className="mainContainer mainContainer-max-width" id="main-container">
           <div className="wrapper">
             <Category />
             <Videos />
             <PopularArticles />
           </div>
         </div>
         </div>
       </div>
     );
   }
 }
 
 export default (props) => (
   <Layout>
     <Index {...props} />
   </Layout>
 );
 