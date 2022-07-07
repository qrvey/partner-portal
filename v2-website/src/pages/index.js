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
             <div className="select-role">
               <h2>
                 <b>Select your role</b>
               </h2>
               <Tabs className="select-role--linkscont">
                 <TabList>
                   <Tab className="select-role--links">
                     Platform Administrators
                   </Tab>
                   <Tab className="select-role--links">CloudOps Engineers</Tab>
                   <Tab className="select-role--links">Data Analysts</Tab>
                   <Tab className="select-role--links">Software Developers</Tab>
                 </TabList>
                 <TabPanel>
                 <div className="howtouserol">
                   <div className="howtouserol--infocont">
                     <div className="howtouserol--info">
                       <p className="howtouserol--infotext">
                       <b>Platform Administrators</b> use Admin Center to manage the infrastructure, users, and content, as well as  configure Qrvey Composer.
                       </p>
                     </div>
                   </div>
                 </div>
                 <div className="listrole-links">
                    <a href="docs/get-started/get-started-architecture">Architectural Overview</a>
                    <a href="docs/admin/admin-sections-platform">Administering Qrvey Composer</a>
                    <a href="docs/admin/roles-and-permissions">Roles & Permissions</a>
                    <a href="docs/get-started/authentication">Authentication</a>
                    <a href="docs/admin/content-deployment/concepts">Content Deployment Concepts</a>
                 </div>
                 </TabPanel>
                 <TabPanel>
                 <div className="howtouserol">
                   <div className="howtouserol--infocont">
                     <div className="howtouserol--info">
                       <p className="howtouserol--infotext">
                       <b>CloudOps Engineers</b> are in charge of setting up, upgrading, and monitoring instances of the Qrvey platform.
                       </p>
                     </div>
                   </div>
                 </div>
                 <div className="listrole-links">
                    <a href="docs/get-started/prerequisites-for-installation">Prerequisites for Installation</a>
                    <a href="docs/get-started/preparing-AWS-account">Preparing Your AWS Account</a>
                    <a href="docs/get-started/deploying-aws/initial-installation">Initial Installation</a>
                    <a href="docs/get-started/customizing-qrvey-deployment">Customizing Qrvey Deployment</a>
                    <a href="docs/get-started/managing-aws-cluster">Cluster Management</a>
                 </div>
                 </TabPanel>
                 <TabPanel>
                 <div className="howtouserol">
                   <div className="howtouserol--infocont">
                     <div className="howtouserol--info">
                       <p className="howtouserol--infotext">
                       <b>Data Analysts</b> Work in Qrvey Composer to set up datasets and create visualizations and dashboards to help end users find trends in their data.
                       </p>
                     </div>
                   </div>
                 </div>
                 <div className="listrole-links">
                    <a href="docs/ui-docs/basics/introduction">Introduction to the UI</a>
                    <a href="docs/ui-docs/basics/applications">What is a Qrvey Application?</a>
                    <a href="docs/ui-docs/datasets/datasets">Creating Datasets</a>
                    <a href="docs/ui-docs/builders/pages">Page Builder</a>
                    <a href="docs/ui-docs/dataviews/chart-builder">Chart Builder</a>
                 </div>
                 </TabPanel>
                 <TabPanel>
                 <div className="howtouserol">
                   <div className="howtouserol--infocont">
                     <div className="howtouserol--info">
                       <p className="howtouserol--infotext">
                       <b>Software Developers</b> embed the needed Qrvey widgets in their host applications and may use Qrvey APIs to achieve desired goals.
                       </p>
                     </div>
                   </div>
                 </div>
                 <div className="listrole-links">
                    <a href="docs/get-started/get-started-architecture">Architectural Overview</a>
                    <a href="docs/get-started/authentication">Authentication</a>
                    <a href="docs/embedding/api/api-intro">API Start Guide</a>
                    <a href="https://tinyurl.com/atuznk6u">API Reference</a>
                    <a href="docs/embedding/widgets/widget-intro">Embedding Widgets Quick Start</a>
                 </div>
                 </TabPanel>
               </Tabs>
             </div>
           </div>
         </div>
       );
     };
 
     const SplashContainer = (props) => (
       <div className="homeContainer">
         <div className="homeSplashFade">
           <div className="wrapper homeWrapper" id="home-wrapper"></div>
         </div>
       </div>
     );
 
     const TopFold = () => (
       <div className="mainContainer">
         <div className="wrapper vertical-align">
           <div className="howtousesite">
             <h2>
               <b>How to Use This Site</b>
             </h2>
             <div className="howtousesite--infocont">
               <div className="howtousesite--info">
                 <div className="howtousesite--infonumbercont">
                 <div className="howtousesite--infonumber">1</div>
                 <b>Choose your role</b>
                 </div>
                 <p className="howtousesite--infotext">
                   Find your target persona. Qrvey provides tailored learning
                   tracks for Platform Administrators, Software Developers, Data
                   Analysts and CloudOps professionals. Quickly find the
                   resources that are most relevant to your job function.{" "}
                 </p>
               </div>
               <div className="howtousesite--info">
               <div className="howtousesite--infonumbercont">
                 <div className="howtousesite--infonumber">2</div>
                 <b>Explore the content</b>
                 </div>
                 <p className="howtousesite--infotext">
                   Explore the list of curated articles and training videos for
                   your target persona. Accelerate your implementation with
                   sample integrations and code snippets. Quickly find answers to
                   your specific questions and challenges with the portal search
                   engine.
                 </p>
               </div>
               <div className="howtousesite--info">
               <div className="howtousesite--infonumbercont">
                 <div className="howtousesite--infonumber">3</div>
                 <b>Participate & interact</b>
                 </div>
                 <p className="howtousesite--infotext">
                   Be an active member of the Qrvey community. Ask questions.
                   Share your feedback. Check back often for updates and new
                   content.
                 </p>
               </div>
             </div>
           </div>
           <div className="newandupdate-cont">
           <div className="newarticles-cont">
             <div className="newarticle-header">
             <h3>
               <b>New Articles</b>
             </h3>
             <div className="seeall-link" href="docs/release-notes/new-articles">
             <b><a href="docs/release-notes/new-articles">See All</a></b>
             </div>
             </div>
             <div className="articles--infocont">
             <div className="listarticles-links">
             <a href="/docs/ui-docs/dataviews/chart-builder/how-to-use-chart-builder-documentation" target="_blank">Chart Builder section <span>June 15, 2022</span></a>
             <a href="/docs/ui-docs/dataviews/chart-types/bar-charts" target="_blank">Chart Types section <span>June 15, 2022</span></a>
             <a href="/docs/get-started/redshift-connections" target="_blank">Configuring AWS and Qrvey for Redshift Connections <span>April 8, 2022</span></a>
             <a href="/docs/get-started/snowflake-connections" target="_blank">Configuring AWS and Qrvey for Snowflake Connections <span>April 8, 2022</span></a>
             <a href="docs/special-features/internationalization/overview">Internationalization Overview <span>April 4, 2022</span></a>
                 </div>
             </div>
           </div>
           <div className="updatearticles-cont">
           <div className="updatearticle-header">
           <h3>
               <b>Updated Articles</b>
             </h3>
             <div className="seeall-link">
                  <b><a href="docs/release-notes/updated-articles">See All</a></b>
             </div>
             </div>
             <div className="articles--infocont">
             <div className="listarticles-links">
             <a href="/docs/ui-docs/datasets/transformations" target="_blank">Transformations <span>Jun 15, 2022</span> </a> 
             <a href="/docs/admin/record-level-security" target="_blank">Record Level Security <span>Jun 15, 2022</span> </a> 
             <a href="/docs/admin/content-deployment/definitions" target="_blank">Deployment Definitions <span>Jun 15, 2022</span> </a>
             <a href="/docs/ui-docs/datasets/datasets" target="_blank">Datasets <span>Jun 15, 2022</span> </a> 
             <a href="/docs/ui-docs/dataviews/chart-types/table" target="_blank">Table <span>Jun 15, 2022</span> </a> 
                 </div>
             </div>
           </div>
           </div>
         </div>
       </div>
     );
 
     const SidRightNav = () => {
       const announcements = [
         {
           name: "Release Notes February",
           path: siteConfig.baseUrl + "docs/release-notes/release-last/",
         },
         {
           name: "February Newsletter",
           path: siteConfig.baseUrl + "blog/2020/02/29/qsnewsflash/",
         },
       ];
       return (
         <div className="side-right-nav">
           <div className="side-right-nav-container">
             <div className="side-right-nav-container-announcements">
               {/* announcements && announcements.map((value, idx) => <a key={idx} className="side-right-nav-item" href={value.path}>{value.name}</a>)*/}
               {/* <img src={siteConfig.baseUrl + 'img/icons/calendar_icon.svg'}/> */}
               <h3 className="side-right-nav-container-announcements-title">
                 {" "}
                 Announcements
               </h3>
               <h3 className="side-right-nav-container-announcements-item">
                 Version 7.3 has been released,{" "}
                 <a
                   className="primary-color"
                   href="docs/release-notes/release-last/"
                 >
                   learn more.
                 </a>
               </h3>
             </div>
             <div className="side-right-nav-container-popular">
               <h3 className="side-right-nav-container-popular-title">
                 {/* <img src={siteConfig.baseUrl + 'img/icons/check_icon.svg'}/>  */}
                 POPULAR ARTICLES
               </h3>
             </div>
           </div>
         </div>
       );
     };
 
     return (
       <div className="gray-background" id="home-page">
         <div>
         <TopFold />
         {
           //<SplashContainer siteConfig={siteConfig} language={language} />
         }
         <div className="mainContainer" id="main-container">
           <div className="wrapper">
             <Category />
           </div>
         </div>
         </div>
         <div className="mainContainer" id="sidebar">
           <div className="wrapper setsidebar">
             <SidRightNav />
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
 