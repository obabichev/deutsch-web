import React, {Component} from 'react';
import {logout} from '../actions/thunk/auth.thunk.actions';

export class HomeComponent extends Component {

    onLogout = event => {
        event.preventDefault();

        const {dispatch} = this.props;
        dispatch(logout());
    };

    render() {
        return <div>
            <p>Home</p>
            <button className="btn btn-primary" onClick={this.onLogout}>Logout</button>
        </div>
    }
}