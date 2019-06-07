/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    //return baseUrl + (language ? `${language}/` : '') + doc;
    return baseUrl + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap wrapper">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="107px"
                height="39.44px" 
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('get-started/get-started-intro')}>
              Getting Started
            </a>
            <a href={this.docUrl('business-analytics/business-analytics-doc')}>
              Business Analytics
            </a>
            <a href={this.docUrl('data-router/data-router-intro')}>
              Data Router
            </a>
            <a href={this.docUrl('admin/admin-intro')}>
              Admin
            </a>
            <a href={this.docUrl('setup-deployments/setup-deployments-getting-started')}>
              Setup & Deployment
            </a>
          </div>
          <div>
            <h5>Embedding & Samples</h5>
            <a href={this.docUrl('embedding/embedding-intro')}>
              Embedding
            </a>
            <a href={this.docUrl('embedding/widgets/embedding-widgets-getting-started')}>
              Widgets
            </a>
            <a href={this.docUrl('embedding/api/embedding-api-getting-started')}>
              API
            </a>
     
          </div>
          <div>
            <h5>More</h5>
            <a href="https://blog.qrvey.com/" target="blank">Blog</a>
            <a href="https://qrvey.com/contact" target="blank">Contact Us</a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
