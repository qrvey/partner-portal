const React = require('react');

import Layout from "@theme/Layout";

class Persona extends React.Component {

    render() {

        return (
            <div className="support-page">
                <div className="" id="support-page">
                    <div className="container wrapper">
                        <div className="flex-container">
                            <div className="full-row">
                                <h1 className="section-title">
                                                Partner Support Overview
                                            </h1>
                                <p className="section-description" id="section-support-description">Qrvey offers our partners multiple channels in which to contact us
                                                and find the answers you need.</p>
                            </div>
                            <a className="support-card pointer" href="/">
                                <div className="support-card-header">
                                    <img className="icon" src="/img/support/partner-portal.svg" alt="Partner Portal" />
                                    <h2 className="support-card-header-title">Partner Portal </h2>
                                    <img className="arrow" src="/img/support/arrow.svg" alt="go icon" />
                                </div>
                                <p className="support-card-description">
                                    Located at partners.qrvey.com, this resource offers partners access to developer documentation and video for training and installation of the Qrvey platform.
                                </p>
                            </a>
                <a className="support-card pointer" href="https://help.qrvey.com/" target="_blank">
                    <div className="support-card-header">
                        <img className="icon" src="/img/support/helpdesk.svg" alt="Partner Portal" />
                        <h2 className="support-card-header-title">Helpdesk</h2>
                        <img className="arrow" src="/img/support/arrow.svg" alt="go icon" />
                    </div>
                    <p className="support-card-description">
                        Located at help.qrvey.com, this website provides complete end-user documentation for building and sharing reports, dashboards, metrics and other analytics.
                    </p>
                </a>
                <a className="support-card pointer" href="https://slack.com/" target="_blank">
                    <div className="support-card-header">
                        <img className="icon" src="/img/support/slack.svg" alt="Partner Portal" />
                        <h2 className="support-card-header-title">Slack </h2>
                        <img className="arrow" src="/img/support/arrow.svg" alt="go icon" />
                    </div>
                    <p className="support-card-description">
                        Every partner is provided with their own exclusive channel on Slack, where they can contact our product management team directly and get their questions answered.
                    </p>
                </a>
                <div className="full-row">
                    <h1 className="section-card-title">
                                        Support Policies 
                                    </h1>
                    <h4 className="section-description">Qrvey provides a Slack channel to each of our partners.  Through that channel the partner has direct access to our technical team to ask their questions,  If needed you can do screen sharing so our people can help you faster. We take your data privacy very seriously so we never take a screen snapshot or record the session without your permission.  Finally we have a database for issue tracking.
                                        <br/><br/>
                                        You can assign four levels of priority to any issue: (1) critical (2) high (3) medium (4) low.  Qrvey team will provide daily updates on critical items, weekly updates on high priority items, bi-weekly updates on medium level and monthly updates on low priority items - at minimum.
                                        <br/><br/>
                                        Partners are invited to meet with head of product management and engineering over Zoom once a month to discuss their needs and receive an update on the upcoming releases.
                                        <br/><br/>
                                        Qrvey also provides the full collection of documentation and training videos through our Partner Portal.
                                        <br/><br/>
                                        When we have the page live then please send the URL to John and me so we can include it as part of the agreement.</h4>
                </div>
                <div className="support-bottom full-row">
                    <hr className="support-bottom-hr" />
                    <h4 className="support-bottom-text"><strong>Questions?</strong><br/>
                                        Contact us at <span style={{color:'#0578FF'}}>support@qrvey.com</span> and we’ll be happy to
                                        assist you. </h4>
                    <hr className="support-bottom-hr hidden-xl" />
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
  }

export default props => <Layout><Persona {...props} /></Layout>;
