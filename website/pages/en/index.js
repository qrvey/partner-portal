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

    const Categories = () => {
      const categories = [
        {name:'Get Started', icon:'ready-icon', path:'/docs/get-started/get-started-intro'},
        {name:'Business Analytics', icon:'bunisses-icon', path:'/docs/business-analytics/business-overview'},
        {name:'Data Router', icon:'data-icon', path:'/docs/data-router/data-router-intro'},
        {name:'Admin', icon:'admin-icon', path:'/docs/admin/admin-intro'},
        {name:'Embedding', icon:'embedding-icon', path:'/docs/embedding/embedding-intro'},
        {name:'Setup & Deployments', icon:'cloud-icon', path:'/docs/setup-deployments/setup-overview'},
      ];
      const categoriesElem = categories.map((elem,id) => <Category key={id} value={elem}/>);
      return  (<div className="flex-categories-container">
        {categoriesElem}
      </div>)
    };

    const Category = (props) => (
      <a className="card-categories" href={props.value.path}>
        <h1 className="section-card-title"><img className="icon" src={siteConfig.baseUrl + 'img/categories/' + props.value.icon + '.svg'}/>{props.value.name}</h1>
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
      <div className="two-row">
        <h2 className="main-title">
        Qrvey Documentation
        </h2>
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
