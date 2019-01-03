import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './LoginComponent.css';

export class LoginComponent extends Component {

    state = {
        email: '',
        password: '',
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({submitted: true});
        const {email, password} = this.state;
        const {login} = this.props;
        if (email && password) {
            login(email, password);
        }
    };

    render() {
        const {isLoading} = this.props;
        const {email, password} = this.state;

        return <div className="login-form-block">
            <form className="login-form-container"
                  name="form" onSubmit={this.handleSubmit}>
                <div className="form-title-container">
                    <h1 className="form-title-text">Sign in to Dapp</h1>
                </div>
                {this.renderError()}
                <div className="login-inputs-container">
                    <label
                        htmlFor="email"
                        className="input-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        className="standard-input"
                        name="email"
                        value={email}
                        onChange={this.handleChange}/>

                    <label
                        className="input-label"
                        htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="standard-input"
                        name="password"
                        value={password}
                        onChange={this.handleChange}/>
                    <button className="green-button">Sign in</button>
                </div>
                <div>

                    <p className="register-link">
                        New to Dapp? <Link to="/register">Create an account.</Link>
                    </p>

                    {isLoading &&
                    <img
                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                    }
                </div>
            </form>
        </div>;
    }

    renderError = () => {
        const {error} = this.props;
        if (!error) {
            return null;
        }

        return <div className="error-area">
            {error.message}
            <button onClick={this.onHideErrorClick}
                    className="hide-error-button">
                <svg className="hide-error-button-image" viewBox="0 0 12 16" version="1.1" width="12" height="16"
                     aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path>
                </svg>
            </button>
        </div>
    };

    onHideErrorClick = (event) => {
        event.preventDefault();
        this.props.closeError();
    };
}

