const React = require('react');

class ForgotPassword extends React.Component {

    render() {
        const errorDisplay = '';

        return (
            <div className="section-first">
                <div className="container wrapper">
                    <div className="card-login">
                        <div>
                            <h2 className="card-title">
                            Welcome to the <br />
                            Qrvey Partner Portal
                            </h2>
                            <h4 className="card-description">
                            Please provide your email to recover your password
                            </h4>
                            <form className="form" id="forgot-password-form">
                            <div className="input-container">
                                <input className="input-form" placeholder="Email" type="email" name="email" id="user-email" autoComplete="username" required />
                            </div>
                            <p className="error-text" id="forgot-error-display">{errorDisplay}</p>
                            <div className="input-container">
                                <button className="primary-button" type="submit">Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
  }

  module.exports = ForgotPassword;
