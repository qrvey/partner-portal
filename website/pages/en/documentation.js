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

class Documentation extends React.Component {

  render() {
    const {config: siteConfig, language = ''} = this.props;
    //const background_title = "url('" + siteConfig.baseUrl + "img/top-fold-background.jpg')";

    const Categories = () => {
      const categories = [
        {name:'Releases Notes', path: siteConfig.baseUrl+'docs/release-notes/release-nov-2019'},
        {name:'Qrvey Composer',path: siteConfig.baseUrl+'docs/ui-docs/basics/logging-in'},
        {name:'Getting Started',path: siteConfig.baseUrl+'docs/get-started/get-started-intro'},
        {name:'Administrator Documentation', path: siteConfig.baseUrl+'docs/admin/admin-intro'},
        {name:'Developer Documentation', path: siteConfig.baseUrl+'docs/get-started/get-started-architecture'},
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
        Documentation
        </h2>
        <h4 className="main-description" id="main-description">
        Find documentation and setup guides for Qrvey, Data Router and Admin Center
        </h4>
      </div>
      </div>
    );
    

    return (
      <div className="gray-background" id="documentation-page">
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

module.exports = Documentation;
