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
      <footer className="footer" id="footer">
        <p>Qrvey Inc. © 2019 All Rights Reserved</p>
      </footer>
    );
  }
}

module.exports = Footer;
