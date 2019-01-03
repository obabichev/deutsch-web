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
                    <button className="register-green-button">Register</button>
                    {isLoading &&
                    <img
                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                    }
                    <Link to="/login" className="btn btn-link">Cancel</Link>
                </div>
            </form>
        </div>;
    }
}