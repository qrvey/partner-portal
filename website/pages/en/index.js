/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Index extends React.Component {

  constructor(props){
    const {config: siteConfig} = props;
    super(props);
    this.categories = [
      {name:'Documentation',path: siteConfig.baseUrl+'documentation', iconUrl: `${siteConfig.baseUrl}img/cards/docs.svg`, 
      topLinks: [
        { link: siteConfig.baseUrl+'docs/release-notes/release-last', name: 'Release Notes' },
        { link: siteConfig.baseUrl+'docs/get-started/get-started-intro', name: 'Getting Started' },
        { link: siteConfig.baseUrl+'docs/get-started/get-started-architecture', name: 'Architecture' }
      ]},
      {name:'Videos', path: siteConfig.baseUrl+'docs/video-training/release/version-5.9', topLinks: [
        { link: siteConfig.baseUrl+'docs/video-training/building-qrvey-sample/new-webforms', name: 'Web Forms' },
        { link: siteConfig.baseUrl+'docs/video-training/building-qrvey-sample/new-workflows', name: 'Workflows' },
        { link: siteConfig.baseUrl+'docs/video-training/building-qrvey-sample/new-datalinks', name: 'Data Links' }
      ], iconUrl: `${siteConfig.baseUrl}img/cards/videos.svg`},
      {name:'FAQs', path: siteConfig.baseUrl+'docs/faqs/faqs-intro', topLinks: [
        { link: siteConfig.baseUrl+'docs/faqs/ask-us/', name: 'Ask Us a Question' }
      ], iconUrl: `${siteConfig.baseUrl}img/cards/faqs.svg`},
    ];
  }

  render() {
    const {config: siteConfig, language = ''} = this.props;
    //const background_title = "url('" + siteConfig.baseUrl + "img/top-fold-background.jpg')";

    const Categories = () => {
      const categoriesElem = this.categories.map((elem,id) => <Category key={id} value={elem}/>);
      return  (<div className="flex-categories-container">
        {categoriesElem}
      </div>)
    };

    const Category = (props) => {
      return(
        <div className="card-home">
          <a className="card-home-img" href={props.value.path}>
            <img src={props.value.iconUrl} alt="icon"/>
          </a>
          <div className="card-home-content">
            <a className="card-home-content-title" href={props.value.path}>{props.value.name}</a>
            {
              props.value.topLinks.map((item, idx) => (<a key={idx} href={item.link} className="card-home-content-link">{item.name}</a>))
            }
          </div>
        </div>
      );
    }


    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper" id="home-wrapper">
          </div>
        </div>
      </div>
    );

    const TopFold = () => (
      <div className="mainContainer top-fold-background" style={{ backgroundImage: `url('${siteConfig.baseUrl}img/top_fold_background.jpg')` }}>
        <div className="wrapper vertical-align">
          <h1 className="main-title">
            Welcome to Partner Portal
          </h1>
        </div>
      </div>
    );

    const SidRightNav = () => {
      const announcements = [
        {name:'Release Notes February',path: siteConfig.baseUrl+'docs/release-notes/release-last/'},
        {name:'February Newsletter',path: siteConfig.baseUrl+'blog/2020/02/29/qsnewsflash/'}
      ];
      return(
        <div className="side-right-nav">
          <div className="side-right-nav-container">
          <div className="side-right-nav-container-announcements">
              {/* announcements && announcements.map((value, idx) => <a key={idx} className="side-right-nav-item" href={value.path}>{value.name}</a>)*/}
              <img src={siteConfig.baseUrl + 'img/icons/calendar_icon.svg'}/>
              <h3 className="side-right-nav-container-announcements-title"> Announcements</h3>
              <h3 className="side-right-nav-container-announcements-item"> 
              Version 5.9 has been released, <a className="primary-color" href="docs/release-notes/release-last/">learn more.</a>
               </h3>
          </div>
          <div className="side-right-nav-container-popular">
          <h3 className="side-right-nav-container-popular-title"> <img src={siteConfig.baseUrl + 'img/icons/check_icon.svg'}/> POPULAR ARTICLES</h3>
          </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="gray-background" id="home-page">
        <TopFold/>
        {
          //<SplashContainer siteConfig={siteConfig} language={language} />
        }
        <div className="mainContainer" id="main-container">
        <div className="wrapper">
          <Categories/>
          <SidRightNav/>
        </div>
        </div>
        {this.props.config.homepagescripts &&
          this.props.config.homepagescripts.map((source, idx) => {
            return (
              <script
                type="text/javascript"
                key={'script' + idx}
                src={source}
              />
            );
        })}
      </div>
    );
  }
}

module.exports = Index;
