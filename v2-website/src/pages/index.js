/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
 import "react-tabs/style/react-tabs.css";
 
 const React = require("react");
 
 const CompLibrary = {
   Container: (props) => <div {...props}></div>,
   GridBlock: (props) => <div {...props}></div>,
   MarkdownBlock: (props) => <div {...props}></div>,
 };
 
 import Layout from "@theme/Layout";
 
 const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
 const Container = CompLibrary.Container;
 const GridBlock = CompLibrary.GridBlock;
 
 class Index extends React.Component {
   constructor(props) {
     const { config: siteConfig } = props;
     super(props);
     this.categories = [
       {
         name: "Documentation",
         path: siteConfig.baseUrl + "docs/release-notes/release-last",
         iconUrl: `${siteConfig.baseUrl}img/cards/docs.svg`,
         topLinks: [
           {
             link: siteConfig.baseUrl + "docs/release-notes/release-last",
             name: "Release Notes",
           },
           {
             link: siteConfig.baseUrl + "docs/get-started/get-started-intro",
             name: "Getting Started",
           },
           {
             link:
               siteConfig.baseUrl + "docs/get-started/get-started-architecture",
             name: "Architecture",
           },
         ],
       },
       {
         name: "Videos",
         path: siteConfig.baseUrl + "docs/video-training/release/version-6.5",
         topLinks: [
           {
             link:
               siteConfig.baseUrl +
               "docs/video-training/building-qrvey-sample/new-webforms",
             name: "Web Forms",
           },
           {
             link:
               siteConfig.baseUrl +
               "docs/video-training/building-qrvey-sample/new-workflows",
             name: "Workflows",
           },
           {
             link:
               siteConfig.baseUrl +
               "docs/video-training/building-qrvey-sample/new-datalinks",
             name: "Data Links",
           },
         ],
         iconUrl: `${siteConfig.baseUrl}img/cards/videos.svg`,
       },
       {
         name: "FAQs",
         path: siteConfig.baseUrl + "docs/faqs/faqs-intro",
         topLinks: [
           {
             link: siteConfig.baseUrl + "docs/faqs/ask-us/",
             name: "Ask Us a Question",
           },
         ],
         iconUrl: `${siteConfig.baseUrl}img/cards/faqs.svg`,
       },
     ];
   }
 
   render() {
     const { config: siteConfig, language = "" } = this.props;
     //const background_title = "url('" + siteConfig.baseUrl + "img/top-fold-background.jpg')";
 
     const Categories = () => {
       const categoriesElem = this.categories.map((elem, id) => (
         <Category key={id} value={elem} />
       ));
       return <div className="flex-categories-container">{categoriesElem}</div>;
     };
 
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
                  <a className="highlight-box" href="/docs/composer/Creating%20Charts/Configure%20charts/smart-analyzer">
                  <div className="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-da"></div></div>
                  </div>
                  <div className="highlights-body-container">
                  <h3 className="highlight-title-body">Smart Analyzer</h3>
                    <p className="highlight-description">Smart Analyzer, introduced in version 8.3, unleashes the power of artificial intelligence (AI) to acquire new insights into data. This feature establishes a link between ChatGPT and the data in charts, enabling users to ask ChatGPT questions in natural language about their data.</p>
                    </div> 
                  </a>
                  <a className="highlight-box" href="/docs/software-developer/Embedding%20Qrvey%20Widgets/customizing-css-variables">
                  <div className="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-sd"></div>
                    </div>
                  </div>
                  <div className="highlights-body-container">
                  <h3 className="highlight-title-body">Customizing the Appearance Using CSS</h3>
                    <p className="highlight-description">Version 8.3 enables Qrvey Software Developers to customize the visual theme of embedded widgets, including colors, fonts, borders, positioning, and margins, using CSS style sheets.</p>
                    </div> 
                  </a> 
                  <a className="highlight-box" href="/docs/multi-tenant-solution/overview-of-multi-tenant-deployments">
                  <div className="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-sa"></div>
                    </div>
                  </div>
                  <div className="highlights-body-container">
                  <h3 className="highlight-title-body">Multi-tenant Solution Architecture Guide</h3>
                    <p className="highlight-description">This new guide for Qrvey Solution Architects provides guidance and best practices for supporting multi-tenant deployments.</p>
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
                 <a className="highlight-box" href="/docs/video-training/release/version-8.3#openai-on-charts-beta">
                 <div className="highlights-header-container">
                   <div className="highlight-title">Video <div className="highlights-icons icon-video"></div></div>
                   <div className="highlight-audience">Audience: 
                   <div className="highlights-icons icon-da"></div></div>
                 </div>
                 <div className="highlights-body-container">
                 <div className="preview-videos preview-1"></div>
                 <h3 className="highlight-title-body">OpenAI On Charts (beta)</h3>
                   <p className="highlight-description">Adds the Smart Analyzer feature (in beta) to charts. Smart Analyzer establishes a link between ChatGPT and the data in charts and visualizations, enabling users to ask ChatGPT questions in natural language about their data.</p>
                   </div> 
                 </a>
                 <a className="highlight-box" href="/docs/video-training/release/version-8.3#view-modes-in-dashboards">
                 <div className="highlights-header-container">
                   <div className="highlight-title">Video <div className="highlights-icons icon-video"></div></div>
                   <div className="highlight-audience">Audience: 
                   <div className="highlights-icons icon-sd"></div>
                   </div>
                 </div>
                 <div className="highlights-body-container">
                 <div className="preview-videos preview-2"></div>
                 <h3 className="highlight-title-body">View Modes in Dashboards</h3>
                   <p className="highlight-description">Adds the Interaction mode to Dashboard Builder, enabling users to review and interact with the dashboard just as they would in Dashboard View</p>
                   </div> 
                 </a> 
                 <a className="highlight-box" href="/docs/video-training/release/version-8.3#see-data-action">
                 <div className="highlights-header-container">
                   <div className="highlight-title">Video <div className="highlights-icons icon-video"></div></div>
                   <div className="highlight-audience">Audience: 
                   <div className="highlights-icons icon-sa"></div>
                   </div>
                 </div>
                 <div className="highlights-body-container">
                  <div className="preview-videos preview-3"></div>
                 <h3 className="highlight-title-body">See Data Action</h3>
                   <p className="highlight-description">In Dashboard Builder, adds the see Data Action Type, enabling users to see the data in the dataset underlying the chart.</p>
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
          <div className="popular-articles-list-home"></div>
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
         {this.props.config.homepagescripts &&
           this.props.config.homepagescripts.map((source, idx) => {
             return (
               <script
                 type="text/javascript"
                 key={"script" + idx}
                 src={source}
               />
             );
           })}
       </div>
     );
   }
 }
 
 export default (props) => (
   <Layout>
     <Index {...props} />
   </Layout>
 );
 