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
               <h2 style={{fontSize:'30px'}}>
                 <b>Popular Articles</b>
               </h2>
               <div className="popular-articles-list-home"></div>
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
           <div className="persona-box">
            <div className="solution image">
            </div>
            <h3><b><a href="/docs/admin/admin-center-intro">Solution Architects</a></b></h3>
            <p>Solution Architects use the Qrvey Admin Center to manage the infrastructure, users, and content, as well as configure Qrvey Composer.</p>
           </div>
           <div className="persona-box">
            <div className="data image">
            </div>
            <h3><b><a href="/docs/composer/introduction-to-qrvey-composer">Data Analysts</a></b></h3>
            <p>Data Analysts use Qrvey Composer to set up datasets and create visualizations and dashboards to help end users find trends in their data.</p>
           </div>
           <div className="persona-box">
            <div className="software image">
            </div>
            <h3><b><a href="/docs/software-developer/introduction-to-software-development">Software Developers</a></b></h3>
            <p>Software Developers embed Qrvey widgets in their host applications and use Qrvey APIs to programmatically interact with the Qrvey platform.</p>
           </div>
           <div className="persona-box">
            <div className="cloud image">
            </div>
            <h3><b><a href="/docs/deployment/introduction-to-deployment">CloudOps Engineers</a></b></h3>
            <p>CloudOps Engineers are AWS ninjas that deploy, upgrade, and monitor the instances of the Qrvey platform.</p>
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
                 Version 8.1 has been released,{" "}
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
         <div style={{width:'100%'}}>
         <TopFold />
         {
           //<SplashContainer siteConfig={siteConfig} language={language} />
         }
         <div className="mainContainer" id="main-container">
           <div className="wrapper">
             {/* <Category /> */}
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
 