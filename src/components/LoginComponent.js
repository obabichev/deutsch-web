import React, {Component} from "react";
import {Link} from 'react-router-dom';
import * as authActions from '../actions/thunk/auth.thunk.actions';
import './style.css';

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
        const {dispatch} = this.props;
        if (email && password) {
            dispatch(authActions.login(email, password));
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
}

