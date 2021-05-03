/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = {
  Container: props => <div {...props}></div>,
  GridBlock: props => <div {...props}></div>,
  MarkdownBlock: props => <div {...props}></div>
};

import Layout from "@theme/Layout";

const MarkdownBlock = CompLibrary.MarkdownBlock;/* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Documentation extends React.Component {

  render() {
    const {config: siteConfig, language = ''} = this.props;
    //const background_title = "url('" + siteConfig.baseUrl + "img/top-fold-background.jpg')";

    const Categories = () => {
      const categories = [
        {name:'Releases Notes', path: siteConfig.baseUrl+'docs/release-notes/release-last'},
        {name:'Getting Started',path: siteConfig.baseUrl+'docs/get-started/get-started-intro'},
        {name:'Qrvey Composer',path: siteConfig.baseUrl+'docs/ui-docs/basics/logging-in'},
        {name:'Developer Documentation', path: siteConfig.baseUrl+'docs/get-started/get-started-architecture'},
        {name:'Administrator Documentation', path: siteConfig.baseUrl+'docs/admin/admin-intro'},
      ];
      const categoriesElem = categories.map((elem,id) => <Category key={id} value={elem}/>);
      return  (<div className="flex-categories-container">
                {categoriesElem}
              </div>);
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
          </div>
        </div>
      </div>
    );

    const TopFold = () => (
      <div className="mainContainer top-fold-background" style={{ backgroundImage: `url('${siteConfig.baseUrl}img/top_fold_background.jpg')` }}>
        <div className="wrapper vertical-align">
          <h2 className="main-title">
          Documentation
          </h2>
          <h4 className="main-description">
          Find documentation and setup guides for Qrvey, Data Router and Admin Center
          </h4>
        </div>
      </div>
    );
    

    return (
      <div className="gray-background" id="documentation-page">
        {
          //        <SplashContainer siteConfig={siteConfig} language={language} />
        }
        <TopFold/>
        <div className="mainContainer" id="main-container">
        <div className="wrapper">
          <Categories/>
        </div>
        </div>
      </div>
    );
  }
}

export default props => <Layout><Documentation {...props} /></Layout>;
