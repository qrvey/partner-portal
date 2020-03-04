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

  render() {
    const {config: siteConfig, language = ''} = this.props;
    //const background_title = "url('" + siteConfig.baseUrl + "img/top-fold-background.jpg')";

    const Categories = () => {
      const categories = [
        {name:'Documentation',path: siteConfig.baseUrl+'documentation', iconUrl: `${siteConfig.baseUrl}img/cards/docs.svg`, 
        topLinks: [
          { link: siteConfig.baseUrl+'docs/release-notes/release-feb-2020', name: 'Release Notes' },
          { link: siteConfig.baseUrl+'docs/get-started/get-started-intro', name: 'Getting Started' },
          { link: siteConfig.baseUrl+'docs/get-started/get-started-architecture', name: 'Architecture' }
        ]},
        {name:'Tutorials',path: siteConfig.baseUrl+'docs/tutorials/first-analytic-app', topLinks: [], iconUrl: `${siteConfig.baseUrl}img/cards/tutorials.svg`},
        {name:'Videos', path: siteConfig.baseUrl+'docs/video-training/analytics/intro-analytics-apps', topLinks: [], iconUrl: `${siteConfig.baseUrl}img/cards/videos.svg`},
        {name:'FAQs', path: siteConfig.baseUrl+'docs/faqs/faqs-intro', topLinks: [], iconUrl: `${siteConfig.baseUrl}img/cards/faqs.svg`},
      ];
      const categoriesElem = categories.map((elem,id) => <Category key={id} value={elem}/>);
      return  (<div className="flex-categories-container">
        {categoriesElem}
      </div>)
    };

    const Category = (props) => {
      return(
        <div className="card-home">
          <div className="card-home-img">
            <img src={props.value.iconUrl} alt="icon"/>
          </div>
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
          <h2 className="main-title">
            Welcome to Partner Portal
        </h2>
        </div>
      </div>
    );
    

    return (
      <div className="gray-background" id="home-page">
        <TopFold/>
        {
          //<SplashContainer siteConfig={siteConfig} language={language} />
        }
        <div className="mainContainer" id="main-container">
        <div className="wrapper">
          <Categories/>
        </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
