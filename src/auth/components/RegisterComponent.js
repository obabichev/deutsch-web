import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as authActions from '../actions/auth.thunk.actions';
import './RegisterComponent.css';
import {ErrorHintContainer} from '../containers/ErrorHintContainer';

export class RegisterComponent extends Component {

    state = {
        user: {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    };

    handleChange = event => {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const {user} = this.state;
        const {dispatch} = this.props;
        if (user) {
            dispatch(authActions.register(user));
        }
    };

    render() {
        const {isLoading} = this.props;
        const {user} = this.state;

        return <div className="register-form-container">
            <h1 className="register-title">Join Dapp</h1>
            <form name="form" onSubmit={this.handleSubmit}>
                <h2 className="register-subtitle">Create your personal account</h2>
                <ErrorHintContainer/>
                <div className="register-input-container">
                    <label htmlFor="firstName" className="register-input-label">Name</label>
                    <input type="text" className="register-input" name="name" value={user.firstName}
                           onChange={this.handleChange}/>
                </div>
                <div className="register-input-container">
                    <label htmlFor="email" className="register-input-label">Email</label>
                    <input type="text" className="register-input" name="email" value={user.email}
                           onChange={this.handleChange}/>
                </div>
                <div className="register-input-container">
                    <label htmlFor="password" className="register-input-label">Password</label>
                    <input type="password" className="register-input" name="password" value={user.password}
                           onChange={this.handleChange}/>
                </div>
                <div className="register-input-container">
                    <label htmlFor="password_confirmation" className="register-input-label">Password
                        confirmation</label>
                    <input type="password" className="register-input" name="password_confirmation"
                           value={user.password_confirmation}
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <button className="register-green-button"
                    disabled={isLoading}>
                        {isLoading ? 'Creating account...' : 'Create an account'}
                    </button>
                    <div>
                        <p className="register-login-link">
                            Back to <Link to="/login" className="btn btn-link">login</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>;
    }
}