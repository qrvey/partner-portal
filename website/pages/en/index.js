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
        {name:'Documentation',path: siteConfig.baseUrl+'documentation'},
        {name:'Tutorials',path: siteConfig.baseUrl+'docs/tutorials/first-analytic-app'},
        {name:'Videos', path: siteConfig.baseUrl+'docs/video-training/analytics/intro-analytics-apps'},
        {name:'FAQs', path: siteConfig.baseUrl+'docs/faqs/faqs-intro'},
      ];
      const categoriesElem = categories.map((elem,id) => <Category key={id} value={elem}/>);
      return  (<div className="flex-categories-container">
        {categoriesElem}
      </div>)
    };

    const Category = (props) => (
      <a className="card-categories" href={props.value.path}>
        <h1 className="section-card-title">{props.value.name}</h1>
      </a>
    );


    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper" id="home-wrapper">
          <TopFold/>
          </div>
        </div>
      </div>
    );

    const TopFold = () => (
      <div className="flex-container flex-vertical-container">
      <div className="full-row">
        <h2 className="section-title" >
        Welcome to Qrvey Partner Portal, your Qrvey knowledgebase
        </h2>
      </div>
      </div>
    );
    

    return (
      <div className="gray-background" id="home-page">
        <SplashContainer siteConfig={siteConfig} language={language} />
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
