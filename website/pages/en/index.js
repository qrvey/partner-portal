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
        {name:'Get Started',path: siteConfig.baseUrl+'docs/get-started/get-started-intro'},
        {name:'Business Analytics', path: siteConfig.baseUrl+'docs/business-analytics/business-overview'},
        {name:'Data Router', path: siteConfig.baseUrl+'docs/data-router/data-router-intro'},
        {name:'Admin', path: siteConfig.baseUrl+'docs/admin/admin-intro'},
        {name:'Embedding', path: siteConfig.baseUrl+'docs/embedding/embedding-intro'},
        {name:'Setup & Deployments', path: siteConfig.baseUrl+'docs/setup-deployments/setup-overview'},
        {name:'Releases Notes', path: siteConfig.baseUrl+'docs/release-notes/releases'},
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
        <h2 className="main-title" id="main-title">
        Qrvey Documentation
        </h2>
        <h4 className="main-description" id="main-description">
        Find documentation and setup guides for Qrvey, Data Router and Admin Portal
        </h4>
      </div>
      </div>
    );
    

    return (
      <div className="gray-background" onClick={()=> alert("Hello! I am an alert box!!")}>
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
