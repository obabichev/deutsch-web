import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './LoginComponent.css';
import {ErrorHintContainer} from '../containers/ErrorHintContainer';

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
                <ErrorHintContainer/>
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
                    <button className="green-button"
                            disabled={isLoading}>
                        {isLoading ? 'Signing in...' : 'Sign in'}
                    </button>
                </div>
                <div>
                    <p className="register-link">
                        New to Dapp? <Link to="/register">Create an account.</Link>
                    </p>
                </div>
            </form>
        </div>;
    }
}

