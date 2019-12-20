const React = require('react');

class SamplePage extends React.Component {

    render() {
        const errorDisplay = '';

        return (
            <div className="section-first">
                <div className="container wrapper">
                    <div className="card-login">
                        <h2 className="card-title">
                            Welcome to the <br/>
                            Qrvey Partner Portal
                        </h2>
                        <h4 className="card-description">
                            Log into your account to access <br/> training and support documentation
                        </h4>
                        <div className="support-link flex">
                            <a className="text" href="/support">Learn more <img className="arrow-icon" alt="icon" src="/img/support/arrow-orange.svg"/></a> 
                        </div>
                        <form className="form" id="login-form">
                            <div className="input-container">
                                <input className="input-form" placeholder="Email" type="email" name="email" id="user-email" autoComplete="username" required />
                            </div>
                            <div className="input-container">
                                <input className="input-form" type="password" placeholder="Password" minLength="6" name="password" autoComplete="current-password" id="user-password" required />
                            </div>
                            <p className="error-text" id="login-error-display">{errorDisplay}</p>
                            <div className="input-container" style={{marginBottom: '20px'}}>
                                <button className="primary-button" type="submit" id="login-button">Log In</button>
                            </div>
                        </form>
                        <div className="flex">
                            <span className="spacer"></span>
                            <a className="forgot-passord pointer" href="/forgot-password">Forgot Password?</a>
                        </div>
                    </div>
                </div>
                <script
              dangerouslySetInnerHTML={{
                    __html: ``
                }}
                />
            </div>
        );
    }
  }

  module.exports = SamplePage;
