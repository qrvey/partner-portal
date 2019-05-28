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
  

  componentDidMount(){
    this.insertItemToNav();
  }

  insertItemToNav(){
    console.log('hola');
    let navbar = document.querySelector('.slidingNav ul');
    const newItem = document.createElement("LI");
    const textnode = document.createTextNode("Training");
    newItem.appendChild(textnode);
    navbar.insertBefore(newItem, list.childNodes[0]);
  }

  render() {
    const {config: siteConfig, language = ''} = this.props;

    const Categories = () => {
      const categories = [
        {name:'Get Started', icon:'ready-icon', path:'/docs/webformdesign'},
        {name:'Business Analytics', icon:'bunisses-icon'},
        {name:'Data Router', icon:'data-icon'},
        {name:'Admin', icon:'admin-icon'},
        {name:'Embedding', icon:'embedding-icon'},
        {name:'Setup & Deployments', icon:'cloud-icon'},
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
      <div className="flex-container">
      <div className="two-row">
        <h2 className="main-title">
        Begin your journey <br/>
        with our Detailed <br/>
        Documents
        </h2>
      </div>
      <div className="two-row">
        <img className="top-fold-image" src={siteConfig.baseUrl + 'img/docs-top-fold.jpg'} alt="Project Logo"/>
      </div>
      </div>
    );
    

    return (
      <div className="gray-background" onClick={()=> alert("Hello! I am an alert box!!")}>
        <SplashContainer siteConfig={siteConfig} language={language} />
        <div className="mainContainer" id="main-container">
        <Categories/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
