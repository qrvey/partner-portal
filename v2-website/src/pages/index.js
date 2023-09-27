/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
 import NotificationSidebar from '../components/sidebarNotification/NotificationSidebar';
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
                 <NotificationSidebar />

               </h2>
              </div>
               <div class="highlights-container">
                <div class="left">
                  <a class="highlight-box" href="/docs/composer/Managing%20Your%20User%20Profile/download-manager">
                  <div class="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-da"></div>
                    <div className="highlights-icons icon-sa"></div></div>
                  </div>
                  <div class="highlights-body-container">
                  <h3 className="highlight-title-body">Download Manager</h3>
                    <p className="highlight-description">Introduced in version 8.2, Download Manager provides a central location to access and manage exported files.</p>
                    </div> 
                  </a>
                  <a class="highlight-box" href="/docs/composer/Working%20with%20Data/Datasets/Analyze/Formula%20Builder/formula-builder-standardized-syntax">
                  <div class="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-da"></div>
                    </div>
                  </div>
                  <div class="highlights-body-container">
                  <h3 className="highlight-title-body">Formula Builder</h3>
                    <p className="highlight-description">Version 8.2 enables you to create formulas using a standardized language that works with any database engine supported by the Qrvey platform.</p>
                    </div> 
                  </a> <a class="highlight-box" href="/docs/getting-started/intro-to-qrvey">
                  <div class="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-sd"></div>
                    <div className="highlights-icons icon-sa"></div>
                    <div className="highlights-icons icon-ce"></div>
                    <div className="highlights-icons icon-da"></div>
                    </div>
                  </div>
                  <div class="highlights-body-container">
                  <h3 className="highlight-title-body">Introduction to the Qrvey Platform</h3>
                    <p className="highlight-description">New to Qrvey? This article provides essential information required to understand how to work with the Qrvey platform.</p>
                    </div> 
                  </a> <a class="highlight-box" href="/docs/composer/Working%20with%20Data/Datasets/Design/Advanced%20Settings/dataset-design-advanced-settings">
                  <div class="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-da"></div>
                    </div>
                  </div>
                  <div class="highlights-body-container">
                  <h3 className="highlight-title-body">Advanced Settings</h3>
                    <p className="highlight-description">Provides advanced configuration options for your dataset, including the ability to set the number of shards allocated to the dataset’s ES index. </p>
                    </div> 
                  </a> <a class="highlight-box" href="/docs/software-developer/Working%20with%20Qrvey%20APIs/api-intro">
                  <div class="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-sd"></div>
                    </div>
                  </div>
                  <div class="highlights-body-container">
                  <h3 className="highlight-title-body">Overview of Qrvey API</h3>
                    <p className="highlight-description">Learn how to use Qrvey’s comprehensive set of REST APIs to work with the core Qrvey platform features.</p>
                    </div> 
                  </a> <a class="highlight-box" href="/docs/software-developer/Embedding%20Qrvey%20Widgets/overview-of-embedding-and-widgets">
                  <div class="highlights-header-container">
                    <div className="highlight-title">Article <div className="highlights-icons icon-article"></div></div>
                    <div className="highlight-audience">Audience: 
                    <div className="highlights-icons icon-sd"></div>
                    </div>
                  </div>
                  <div class="highlights-body-container">
                  <h3 className="highlight-title-body">Overview of Embedding and Widgets</h3>
                    <p className="highlight-description">Learn how to seamlessly embed the Qrvey platform’s data collection, automation, and analytics functionalities into your web application.</p>
                    </div> 
                  </a>
                </div>
                <div class="right">
                  <h2 className="highlight-title-body">Other Popular Content</h2>
                  <div className="other-popular-articles-cont">
                  <div className="other-popular-articles">
                    <h3 className="highlight-title-body">Filtering and Bucketing Data</h3>
                    <a href="/docs/composer/Pixel-perfect%20Reports/filtering-data">Read More</a>
                  </div>
                  <div className="other-popular-articles">
                    <h3 className="highlight-title-body">Live Connect Datasets</h3>
                    <a href="/docs/composer/Working%20with%20Data/Datasets/Overview%20of%20Datasets/dslive">Read More</a>
                  </div>
                  <div className="other-popular-articles">
                    <h3 className="highlight-title-body">Overview of Pixel-perfect Reports</h3>
                    <a href="/docs/composer/Pixel-perfect%20Reports/overview-of-pixel-perfect-reports">Read More</a>
                  </div>
                  <div className="other-popular-articles">
                    <h3 className="highlight-title-body">Overview of Internationalization</h3>
                    <a href="/docs/software-developer/Internationalization/overview-of-internationalization">Read More</a>
                  </div>
                  <div className="other-popular-articles">
                    <h3 className="highlight-title-body">Download Manager Widget</h3>
                    <a href="/docs/software-developer/Embedding%20Qrvey%20Widgets/Widgets/widget-download-manager">Read More</a>
                  </div>
                  <div className="other-popular-articles">
                    <h3 className="highlight-title-body">Configuring Time Zone Settings</h3>
                    <a href="/docs/software-developer/Timezone%20Settings/time-zone-support">Read More</a>
                  </div>
                  <div className="other-popular-articles">
                    <h3 className="highlight-title-body">Overview of Content Deployment</h3>
                    <a href="/docs/admin/Content%20Deployment/overview-of-content-deployment">Read More</a>
                  </div>
                  <div className="other-popular-articles">
                    <h3 className="highlight-title-body">Configuring AWS and Qrvey for PostgreSQL Connections</h3>
                    <a href="/docs/deployment/Managing%20the%20Qrvey%20Platform/postgres-connections">Read More</a>
                  </div>
                  <div className="other-popular-articles">
                    <h3 className="highlight-title-body">Embedding Widgets Using a Security Token</h3>
                    <a href="/docs/software-developer/Embedding%20Qrvey%20Widgets/embedding-widgets-security-token">Read More</a>
                  </div>
                  </div>
                </div>
              </div>
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
             <Category />
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
 